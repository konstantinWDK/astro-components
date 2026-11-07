// src/components/lib/three/keyboard-scene.ts
// "Keycap" 3D keyboard: a 75% QWERTY board with tapered keycaps (paper bodies, ink outlines)
// that types a list of phrases by itself, echoing each one into a large backdrop word.
// Clicking a key presses it. Light/dark aware; pauses off-screen.
import type * as THREE_NS from 'three';
import { createLoop, damp, disposeTree, prefersReducedMotion, readPalette, watchTheme, type KcPalette } from './kc-runtime';

type Three = typeof THREE_NS;

export interface KeyboardOptions {
  /** Words typed in a loop. */
  phrases?: string[];
  /** Element that mirrors the typed text (large backdrop word). */
  typedEl?: HTMLElement | null;
  /** Milliseconds per keystroke (± jitter). Default 140. */
  speed?: number;
  /** Pause on a finished word, in ms. Default 2300. */
  hold?: number;
}

const LAYOUT: Array<{ keys: number[]; depth: number; labels: string[] }> = [
  { keys: Array(16).fill(1), depth: 0.75, labels: ['esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'prt', 'del', 'pwr'] },
  { keys: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1], depth: 0.9, labels: ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'back', 'home'] },
  { keys: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5, 1], depth: 0.9, labels: ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'pgup'] },
  { keys: [1.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.25, 1], depth: 0.9, labels: ['caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'enter', 'pgdn'] },
  { keys: [2.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.75, 1, 1], depth: 0.9, labels: ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'shift', '▲', 'end'] },
  { keys: [1.25, 1.25, 1.25, 6.25, 1.25, 1, 0.75, 1, 1, 1], depth: 0.9, labels: ['ctrl', 'opt', 'cmd', 'space', 'cmd', 'fn', 'opt', '◀', '▼', '▶'] },
];

const ALIASES: Record<string, string> = { ' ': 'SPACE', ':': ';', ENTER: 'ENTER', BACK: 'BACK' };

interface Key {
  group: THREE_NS.Group;
  lines: THREE_NS.LineBasicMaterial;
  top: THREE_NS.MeshBasicMaterial;
  label: string;
  units: number;
  pressedAt: number;
  redraw: (p: KcPalette) => void;
}

export function mountKeyboard(container: HTMLElement, THREE: Three, options: KeyboardOptions = {}): () => void {
  const { phrases = ['ASTRO', 'REACT', 'TYPESCRIPT', 'THREE.JS', 'NODE.JS'], typedEl = null, speed = 140, hold = 2300 } = options;
  const reduced = prefersReducedMotion();
  let pal = readPalette(container);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.domElement.style.display = 'block';
  container.appendChild(renderer.domElement);
  const aniso = renderer.capabilities.getMaxAnisotropy();

  const scene = new THREE.Scene();
  const board = new THREE.Group();
  const baseTiltX = Math.PI / 6.2;
  const baseTiltY = -Math.PI / 28;
  board.rotation.set(baseTiltX, baseTiltY, 0);
  scene.add(board);

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 300);
  camera.position.set(0, 8.2, 28);
  camera.lookAt(0, 0, 0);

  const sideMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(pal.paper) });

  const keycapGeometry = (w: number, h: number, d: number) => {
    const geo = new THREE.BoxGeometry(w, h, d);
    const pos = geo.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const t = Math.max(0, Math.min(1, (v.y + h / 2) / h));
      const taper = 1 - 0.14 * t; // mechanical keycap: narrower on top
      pos.setXYZ(i, v.x * taper, v.y, v.z * taper);
    }
    geo.computeVertexNormals();
    return geo;
  };

  const legendTexture = (label: string, units: number) => {
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(256 * units);
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = aniso;
    const draw = (p: KcPalette) => {
      ctx.fillStyle = p.paper;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (label && label !== 'space') {
        const size = label.length > 4 ? 32 : label.length > 2 ? 42 : label.length > 1 ? 52 : 72;
        ctx.fillStyle = p.ink;
        ctx.font = `700 ${size}px Inter, system-ui, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label.toUpperCase(), canvas.width / 2, canvas.height / 2);
      }
      texture.needsUpdate = true;
    };
    draw(pal);
    return { texture, draw };
  };

  const keys: Key[] = [];
  const keyMap = new Map<string, Key>();
  const spacing = 2.15;
  const gap = 0.1 * spacing;
  const unit = 0.9 * spacing + gap;
  const totalWidth = 16 * unit;
  const offsetX = totalWidth / 2;
  const offsetZ = (LAYOUT.length * unit) / 2;

  LAYOUT.forEach((row, r) => {
    let x = 0;
    row.keys.forEach((units, i) => {
      const w = units * unit - gap;
      const label = row.labels[i] ?? '';
      const geo = keycapGeometry(w, 0.52, row.depth * spacing);
      const { texture, draw } = legendTexture(label, units);
      const top = new THREE.MeshBasicMaterial({ map: texture });
      const mesh = new THREE.Mesh(geo, [sideMat, sideMat, top, sideMat, sideMat, sideMat]);
      const lines = new THREE.LineBasicMaterial({ color: new THREE.Color(pal.ink) });
      const group = new THREE.Group();
      group.add(mesh, new THREE.LineSegments(new THREE.EdgesGeometry(geo, 24), lines));
      group.position.set(x + w / 2 - offsetX, 0, r * unit - offsetZ);
      board.add(group);

      const key: Key = { group, lines, top, label, units, pressedAt: -10, redraw: draw };
      keys.push(key);
      const norm = label.toUpperCase();
      if (norm && !keyMap.has(norm)) keyMap.set(norm, key);
      x += w + gap;
    });
  });

  // ── Typing ──
  let timer = 0;
  let phrase = 0;
  let char = 0;
  let deleting = false;
  let typingStarted = false;

  const press = (key: Key | undefined) => {
    if (key) key.pressedAt = loop.elapsed;
  };
  const pressChar = (c: string) => {
    const u = c.toUpperCase();
    press(keyMap.get(ALIASES[u] ?? u) ?? keys[(u.charCodeAt(0) * 7) % keys.length]);
  };
  const setTyped = (text: string) => {
    if (typedEl) typedEl.textContent = text;
  };

  const step = () => {
    const word = phrases[phrase] ?? '';
    if (!deleting) {
      if (char < word.length) {
        const c = word[char++];
        pressChar(c);
        setTyped(word.slice(0, char));
        timer = window.setTimeout(step, speed + Math.random() * 45 + (c === ' ' ? 90 : 0));
      } else {
        pressChar('ENTER');
        timer = window.setTimeout(() => {
          deleting = true;
          step();
        }, hold);
      }
    } else if (char > 0) {
      pressChar('BACK');
      setTyped(word.slice(0, --char));
      timer = window.setTimeout(step, 38);
    } else {
      deleting = false;
      phrase = (phrase + 1) % Math.max(1, phrases.length);
      timer = window.setTimeout(step, 450);
    }
  };

  // ── Interaction ──
  let mx = 0;
  let my = 0;
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const onMove = (e: PointerEvent) => {
    const r = container.getBoundingClientRect();
    mx = ((e.clientX - r.left) / r.width) * 2 - 1;
    my = -((e.clientY - r.top) / r.height) * 2 + 1;
  };
  const onLeave = () => {
    mx = 0;
    my = 0;
  };
  const onDown = (e: PointerEvent) => {
    const r = container.getBoundingClientRect();
    pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(keys.map((k) => k.group), true)[0];
    if (!hit) return;
    press(keys.find((k) => k.group === hit.object.parent));
  };

  // ── Loop ──
  const ink = new THREE.Color();
  const muted = new THREE.Color();
  let rise = 0; // entrance progress 0..1
  const loop = createLoop(
    container,
    (dt, t) => {
      if (!reduced) {
        rise = Math.min(1, rise + dt / 1.2);
        const e = 1 - Math.pow(1 - rise, 3);
        board.position.y = -3 + 5.2 * e + Math.sin(t * 0.5) * 0.06;
        board.rotation.y = damp(board.rotation.y, baseTiltY + mx * 0.04, 3, dt);
        board.rotation.x = damp(board.rotation.x, baseTiltX - my * 0.04, 3, dt);
      }
      ink.setStyle(pal.ink);
      muted.setStyle(pal.muted);
      for (const k of keys) {
        const p = (t - k.pressedAt) / 0.16;
        const down = p >= 0 && p < 1 ? Math.sin(p * Math.PI) : 0;
        k.group.position.y = -0.32 * down;
        k.lines.color.copy(ink).lerp(muted, down);
      }
      renderer.render(scene, camera);
    },
    () => {
      if (reduced) {
        board.position.y = 2.2;
        setTyped(phrases[0] ?? '');
        return;
      }
      if (!typingStarted) {
        typingStarted = true;
        step();
      }
    },
  );

  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    // Keep the whole board in frame on narrower screens.
    // Portrait screens show the central keys larger instead of a tiny full board.
    const dist = camera.aspect < 1 ? 44 : Math.min(62, Math.max(28, 53 / camera.aspect));
    camera.position.set(0, 8.2 * (dist / 28), dist);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    loop.renderOnce();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  container.addEventListener('pointermove', onMove);
  container.addEventListener('pointerleave', onLeave);
  container.addEventListener('pointerdown', onDown);
  const unwatch = watchTheme(() => {
    pal = readPalette(container);
    sideMat.color.setStyle(pal.paper);
    keys.forEach((k) => k.redraw(pal));
    loop.renderOnce();
  });

  return () => {
    window.clearTimeout(timer);
    loop.dispose();
    ro.disconnect();
    unwatch();
    container.removeEventListener('pointermove', onMove);
    container.removeEventListener('pointerleave', onLeave);
    container.removeEventListener('pointerdown', onDown);
    disposeTree(scene);
    renderer.dispose();
    renderer.domElement.remove();
  };
}
