// src/components/lib/three/monitor-scene.ts
// "Keycap" 3D CRT monitor: paper body with ink outlines that drops in, sways with the cursor and
// types terminal lines on an inverted screen. Light/dark aware; pauses off-screen.
import type * as THREE_NS from 'three';
import { createLoop, damp, disposeTree, prefersReducedMotion, readPalette, watchTheme } from './kc-runtime';

type Three = typeof THREE_NS;

export interface MonitorOptions {
  /** Lines typed on the screen, in a loop. */
  lines?: string[];
  /** Prompt shown before commands (lines starting with "$ "). Default 'dev@keycap:~$'. */
  prompt?: string;
}

export function mountMonitor(container: HTMLElement, THREE: Three, options: MonitorOptions = {}): () => void {
  const { lines = ['$ whoami', '> full-stack developer', '$ ls projects', '> 12 shipped · 3 in progress'], prompt = 'dev@keycap:~$' } = options;
  const reduced = prefersReducedMotion();
  let pal = readPalette(container);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.domElement.style.display = 'block';
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 200);
  camera.position.set(0, 1.5, 40);
  camera.lookAt(0, 0, 0);

  const monitor = new THREE.Group();
  scene.add(monitor);
  const body = new THREE.MeshBasicMaterial({ color: new THREE.Color(pal.paper) });
  const edge = new THREE.LineBasicMaterial({ color: new THREE.Color(pal.ink) });
  const part = (w: number, h: number, d: number, y: number, z = 0) => {
    const geo = new THREE.BoxGeometry(w, h, d);
    const g = new THREE.Group();
    g.add(new THREE.Mesh(geo, body), new THREE.LineSegments(new THREE.EdgesGeometry(geo), edge));
    g.position.set(0, y, z);
    monitor.add(g);
  };
  part(14, 11, 12, 0, -2);
  part(13, 10, 1, 0, 4.5);
  part(3, 2, 3, -6.5);
  part(8, 0.8, 8, -7.9);

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 384;
  const ctx = canvas.getContext('2d')!;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(11.5, 8.5), new THREE.MeshBasicMaterial({ map: texture }));
  screen.position.set(0, 0, 5.01);
  monitor.add(screen);

  const baseRotY = -Math.PI / 8;
  monitor.rotation.y = baseRotY;

  // Screen: inverted palette (ink background, paper text) like a terminal.
  const shown: string[] = [];
  let typing = '';
  const drawScreen = (cursor: boolean) => {
    ctx.fillStyle = pal.ink;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = pal.paper;
    ctx.font = '700 23px "JetBrains Mono", ui-monospace, monospace';
    ctx.textBaseline = 'top';
    const all = [...shown, typing];
    all.slice(-11).forEach((l, i) => ctx.fillText(l, 22, 24 + i * 31));
    if (cursor) {
      const lastIdx = Math.min(all.length, 11) - 1;
      const w = ctx.measureText(all[all.length - 1] ?? '').width;
      ctx.fillRect(24 + w, 26 + lastIdx * 31, 12, 23);
    }
    texture.needsUpdate = true;
  };
  const format = (l: string) => (l.startsWith('$ ') ? `${prompt} ${l.slice(2)}` : l);

  let timer = 0;
  let lineIdx = 0;
  const typeLine = () => {
    const full = format(lines[lineIdx % lines.length] ?? '');
    let i = 0;
    const next = () => {
      typing = full.slice(0, ++i);
      if (i < full.length) {
        timer = window.setTimeout(next, full.startsWith(prompt) ? 45 + Math.random() * 40 : 12);
      } else {
        shown.push(full);
        if (shown.length > 40) shown.shift();
        typing = '';
        lineIdx++;
        if (lineIdx % lines.length === 0) shown.push('');
        timer = window.setTimeout(typeLine, full.startsWith(prompt) ? 380 : 650);
      }
    };
    next();
  };

  let mx = 0;
  let my = 0;
  const onMove = (e: PointerEvent) => {
    const r = container.getBoundingClientRect();
    mx = ((e.clientX - r.left) / r.width) * 2 - 1;
    my = -((e.clientY - r.top) / r.height) * 2 + 1;
  };
  const onLeave = () => {
    mx = 0;
    my = 0;
  };

  let drop = reduced ? 1 : 0;
  const loop = createLoop(
    container,
    (dt, t) => {
      if (!reduced) {
        drop = Math.min(1, drop + dt / 1.4);
        const k = drop;
        // ease-out-back for a soft landing
        const e = 1 + 2.2 * Math.pow(k - 1, 3) + 1.2 * Math.pow(k - 1, 2);
        monitor.position.y = 20 * (1 - e) + Math.sin(t * 0.9) * 0.15;
        monitor.rotation.y = damp(monitor.rotation.y, baseRotY + mx * 0.18, 3, dt);
        monitor.rotation.x = damp(monitor.rotation.x, -my * 0.08, 3, dt);
      }
      drawScreen(Math.floor(t * 2) % 2 === 0);
      renderer.render(scene, camera);
    },
    () => {
      if (reduced) {
        lines.forEach((l) => shown.push(format(l)));
        return;
      }
      typeLine();
    },
  );

  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.position.z = Math.max(40, 30 / camera.aspect);
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    loop.renderOnce();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();
  container.addEventListener('pointermove', onMove);
  container.addEventListener('pointerleave', onLeave);
  const unwatch = watchTheme(() => {
    pal = readPalette(container);
    body.color.setStyle(pal.paper);
    edge.color.setStyle(pal.ink);
    loop.renderOnce();
  });

  return () => {
    window.clearTimeout(timer);
    loop.dispose();
    ro.disconnect();
    unwatch();
    container.removeEventListener('pointermove', onMove);
    container.removeEventListener('pointerleave', onLeave);
    disposeTree(scene);
    renderer.dispose();
    renderer.domElement.remove();
  };
}
