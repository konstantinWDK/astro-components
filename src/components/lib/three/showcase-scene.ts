// src/components/lib/three/showcase-scene.ts
// "Keycap" 3D projects showcase: architectural cards (paper boxes with ink outlines) fanned out in
// perspective. Drag, horizontal wheel/trackpad or the API move between them; clicking the centred
// card straightens it and brings it forward. Each card hosts a small animated "visual" chosen by
// data (code window, terminal, equalizer, monitor, endpoints, paint canvas or atom), so any project
// list renders without custom code. Cards follow a damped spring (no per-frame tweens), canvases
// only redraw for nearby cards at ~30 fps and rendering pauses off-screen.
import type * as THREE_NS from 'three';
import { createLoop, damp, disposeTree, prefersReducedMotion, readPalette, watchTheme } from './kc-runtime';

type Three = typeof THREE_NS;

export type ShowcaseVisualKind = 'code' | 'terminal' | 'equalizer' | 'monitor' | 'endpoints' | 'paint' | 'atom';

export interface ShowcaseProject {
  title: string;
  tagline: string;
  category: string;
  badge?: string;
  technologies: string[];
  visual?: { kind: ShowcaseVisualKind; lines?: string[] };
}

export interface ShowcaseOptions {
  projects: ShowcaseProject[];
  labels?: { key?: string; open?: string };
  /** Fires when the centred card changes (rounded index). */
  onIndex?: (index: number) => void;
  /** Fires when the centred card is clicked (open its details). */
  onOpen?: (index: number) => void;
  /** Fires on the first drag / wheel interaction. */
  onInteract?: () => void;
}

export interface ShowcaseApi {
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
  open: (index: number) => void;
  close: () => void;
  readonly index: number;
  dispose: () => void;
}

interface Visual {
  group: THREE_NS.Group;
  update: (time: number) => void;
}

interface Pose {
  x: number;
  y: number;
  z: number;
  rotX: number;
  rotY: number;
  scale: number;
}

const MONO = '"JetBrains Mono", ui-monospace, monospace';
const SANS = 'Inter, system-ui, sans-serif';

const DEFAULT_LINES: Record<ShowcaseVisualKind, string[]> = {
  code: ["import { Card } from './ui';", '<Card variant="outline">', '  <Button>Explore</Button>', '</Card>'],
  terminal: ['SCANNING WORKSPACE...', '[OK] CACHE DETECTED', '[STATUS] 1,420 ITEMS RECLAIMED', '[PERF] LATENCY -42%'],
  equalizer: ['BATCH: 48 / 50 TRACKS', 'BITRATE: 320 KBPS'],
  monitor: ['$ whoami', '> full-stack developer', '$ cat stack.txt', '• Astro · React · Three.js', '$ status', '[OK] online'],
  endpoints: ['POST /api/v1/auth/token 200', 'GET /api/v1/schema 200', 'PUT /api/v1/rules 201', 'POST /api/v1/webhook 200'],
  paint: ['WORKS', 'ARTISTS', 'SPACES', 'EVENTS', 'ROUTES'],
  atom: ['<App>', '  <Card>', '    <Badge pulse />', '    <Button loading />', '  <Modal open />'],
};

export function mountShowcase(container: HTMLElement, THREE: Three, options: ShowcaseOptions): ShowcaseApi {
  const { projects, labels = {}, onIndex, onOpen, onInteract } = options;
  const keyLabel = labels.key ?? 'KEY';
  const openLabel = labels.open ?? '[ CLICK TO OPEN ↗ ]';
  const reduced = prefersReducedMotion();
  let pal = readPalette(container);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.domElement.style.display = 'block';
  container.appendChild(renderer.domElement);
  const aniso = renderer.capabilities.getMaxAnisotropy();

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0.1, 17.6);
  camera.lookAt(0, 0.1, 0);

  const paperMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(pal.paper) });
  const inkLine = new THREE.LineBasicMaterial({ color: new THREE.Color(pal.ink) });

  const makeTexture = (canvas: HTMLCanvasElement) => {
    const t = new THREE.CanvasTexture(canvas);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = aniso;
    return t;
  };
  const canvas2d = (w: number, h: number) => {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    return { c, ctx: c.getContext('2d')!, tex: makeTexture(c) };
  };
  /** Paper box with ink outlines; optional textured front face. */
  const keyPart = (w: number, h: number, d: number, front?: THREE_NS.Material) => {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, front ? [paperMat, paperMat, paperMat, paperMat, front, paperMat] : paperMat);
    const g = new THREE.Group();
    g.add(mesh, new THREE.LineSegments(new THREE.EdgesGeometry(geo), inkLine));
    return g;
  };
  const wire = (geo: THREE_NS.BufferGeometry) => {
    const mesh = new THREE.Mesh(geo, paperMat);
    mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), inkLine));
    return mesh;
  };
  const header = (ctx: CanvasRenderingContext2D, text: string, w: number, size = 20) => {
    ctx.font = `700 ${size}px ${MONO}`;
    ctx.fillStyle = pal.ink;
    ctx.fillText(text, 30, 45);
    ctx.strokeStyle = pal.ink;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(30, 60);
    ctx.lineTo(w - 30, 60);
    ctx.stroke();
  };

  // ───────────── Visuals ─────────────
  const visuals: Record<ShowcaseVisualKind, (p: ShowcaseProject, lines: string[]) => Visual> = {
    code: (p, lines) => {
      const group = new THREE.Group();
      const { c, ctx, tex } = canvas2d(1024, 512);
      const win = keyPart(7.6, 3.4, 0.25, new THREE.MeshBasicMaterial({ map: tex }));
      win.position.set(0, 0.45, 0.15);
      const c1 = keyPart(0.7, 0.7, 0.7);
      c1.position.set(-4.2, 0.6, 0.4);
      const c2 = keyPart(0.55, 0.55, 0.55);
      c2.position.set(4.2, 0.4, 0.4);
      group.add(win, c1, c2);
      const file = `${p.title.replace(/\s+/g, '')}.tsx`;
      return {
        group,
        update: (t) => {
          c1.rotation.set(t * 0.7, t * 0.9, 0);
          c2.rotation.set(-t * 0.8, t * 0.6, 0);
          ctx.fillStyle = pal.paper;
          ctx.fillRect(0, 0, c.width, c.height);
          ctx.strokeStyle = pal.ink;
          ctx.fillStyle = pal.ink;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(0, 50);
          ctx.lineTo(c.width, 50);
          ctx.stroke();
          [28, 48, 68].forEach((x) => {
            ctx.beginPath();
            ctx.arc(x, 25, 6, 0, Math.PI * 2);
            ctx.fill();
          });
          ctx.font = `600 18px ${SANS}`;
          ctx.fillText(`${file} // COMPONENT_SYSTEM`, 95, 32);
          ctx.strokeRect(20, 70, 480, 415);
          ctx.font = `600 20px ${MONO}`;
          lines.slice(0, 7).forEach((l, i) => ctx.fillText(l, 40, 115 + i * 45));
          if (Math.floor(t * 2) % 2 === 0) ctx.fillRect(40, 115 + Math.min(lines.length, 7) * 45 - 18, 14, 22);
          ctx.strokeRect(520, 70, 480, 415);
          const on = Math.sin(t * 3) > 0;
          ctx.fillStyle = on ? pal.ink : pal.paper;
          ctx.fillRect(550, 110, 260, 60);
          ctx.strokeRect(550, 110, 260, 60);
          ctx.fillStyle = on ? pal.paper : pal.ink;
          ctx.font = `700 22px ${SANS}`;
          ctx.fillText('KEYBOARD_BUTTON', 575, 148);
          ctx.fillStyle = pal.ink;
          ctx.strokeRect(550, 210, 90, 44);
          ctx.fillRect(on ? 600 : 555, 215, 35, 34);
          ctx.font = `600 20px ${MONO}`;
          ctx.fillText(`STATE: ${on ? '[ACTIVE]' : '[STANDBY]'}`, 660, 239);
          const pw = (Math.sin(t * 1.5) * 0.5 + 0.5) * 420;
          ctx.strokeRect(550, 310, 420, 20);
          ctx.fillRect(550, 310, pw, 20);
          ctx.font = `600 16px ${MONO}`;
          ctx.fillText(`BUILD STATUS // ${Math.round((pw / 420) * 100)}% COMPILED`, 550, 360);
          tex.needsUpdate = true;
        },
      };
    },

    terminal: (p, lines) => {
      const group = new THREE.Group();
      const ico = wire(new THREE.IcosahedronGeometry(1.4, 1));
      ico.position.set(-2.8, 0.45, 0.3);
      const ring = new THREE.Line(new THREE.TorusGeometry(1.9, 0.02, 16, 64), inkLine);
      ring.position.copy(ico.position);
      const { c, ctx, tex } = canvas2d(720, 512);
      const term = keyPart(4.8, 3.4, 0.2, new THREE.MeshBasicMaterial({ map: tex }));
      term.position.set(2, 0.45, 0.15);
      group.add(ico, ring, term);
      const title = `${p.title.toUpperCase().replace(/\s+/g, '_')} // DIAGNOSTICS`;
      return {
        group,
        update: (t) => {
          ico.rotation.set(t * 0.35, t * 0.55, 0);
          ring.rotation.set(t * 0.7, t * 0.3, 0);
          ctx.fillStyle = pal.paper;
          ctx.fillRect(0, 0, c.width, c.height);
          header(ctx, title.slice(0, 40), c.width, 20);
          ctx.beginPath();
          ctx.arc(120, 160, 65, 0, Math.PI * 2);
          ctx.stroke();
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(120, 160);
          ctx.lineTo(120 + Math.cos(t * 3) * 65, 160 + Math.sin(t * 3) * 65);
          ctx.stroke();
          ctx.font = `800 36px ${SANS}`;
          ctx.fillText(`${(8.42 + Math.sin(t * 0.4) * 0.3).toFixed(2)} GB`, 220, 145);
          ctx.font = `600 17px ${MONO}`;
          ctx.fillStyle = pal.muted;
          ctx.fillText(p.tagline.toUpperCase().slice(0, 34), 220, 180);
          ctx.fillStyle = pal.ink;
          ctx.lineWidth = 2;
          ctx.strokeRect(25, 250, c.width - 50, 230);
          ctx.font = `600 18px ${MONO}`;
          [`[${(t % 60).toFixed(1)}s] ${lines[0] ?? ''}`, ...lines.slice(1, 4)].forEach((l, i) => ctx.fillText(l, 45, 295 + i * 40));
          tex.needsUpdate = true;
        },
      };
    },

    equalizer: (p, lines) => {
      const group = new THREE.Group();
      const { c, ctx, tex } = canvas2d(1024, 480);
      const rack = keyPart(8, 3.4, 0.25, new THREE.MeshBasicMaterial({ map: tex }));
      rack.position.set(0, 0.45, 0.15);
      group.add(rack);
      const title = `${p.title.toUpperCase()} // PIPELINE`;
      return {
        group,
        update: (t) => {
          ctx.fillStyle = pal.paper;
          ctx.fillRect(0, 0, c.width, c.height);
          header(ctx, title.slice(0, 60), c.width, 22);
          ctx.fillStyle = pal.ink;
          for (let i = 0; i < 28; i++) {
            const h = 20 + Math.abs(Math.sin(t * 3 + i * 0.35) * 110) + Math.abs(Math.cos(t * 2 + i * 0.2) * 50);
            ctx.fillRect(35 + i * 34, 250 - h, 24, h);
          }
          ctx.strokeRect(30, 290, c.width - 60, 155);
          ctx.font = `700 20px ${MONO}`;
          ctx.fillText(lines[0] ?? '', 50, 335);
          const prog = Math.sin(t * 0.8) * 0.5 + 0.5;
          ctx.strokeRect(50, 360, c.width - 100, 24);
          ctx.fillRect(50, 360, (c.width - 100) * prog, 24);
          ctx.font = `600 18px ${MONO}`;
          ctx.fillText(`${Math.round(prog * 100)}% COMPLETE · ${lines[1] ?? ''}`, 50, 420);
          tex.needsUpdate = true;
        },
      };
    },

    monitor: (_p, lines) => {
      const group = new THREE.Group();
      const body = keyPart(4.2, 3.2, 2);
      body.position.set(-1.8, 0.45, 0.1);
      const { c, ctx, tex } = canvas2d(512, 384);
      const screen = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 2.7), new THREE.MeshBasicMaterial({ map: tex }));
      screen.position.set(-1.8, 0.45, 1.13);
      const spec = keyPart(3.4, 3.2, 0.15);
      spec.position.set(2.8, 0.45, 0.1);
      const s = canvas2d(440, 400);
      const specScreen = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 3), new THREE.MeshBasicMaterial({ map: s.tex }));
      specScreen.position.set(2.8, 0.45, 0.2);
      group.add(body, screen, spec, specScreen);
      return {
        group,
        update: (t) => {
          body.rotation.y = Math.sin(t * 0.5) * 0.08;
          ctx.fillStyle = pal.paper;
          ctx.fillRect(0, 0, c.width, c.height);
          ctx.fillStyle = pal.ink;
          ctx.font = `600 18px ${MONO}`;
          const n = Math.min(lines.length, (Math.floor(t * 1.5) % (lines.length + 2)) + 1);
          for (let i = 0; i < n; i++) ctx.fillText(lines[i], 20, 42 + i * 42);
          if (Math.floor(t * 2) % 2 === 0) ctx.fillRect(20, 42 + n * 42 - 16, 12, 20);
          tex.needsUpdate = true;
          s.ctx.fillStyle = pal.paper;
          s.ctx.fillRect(0, 0, s.c.width, s.c.height);
          s.ctx.fillStyle = pal.ink;
          s.ctx.font = `700 20px ${MONO}`;
          s.ctx.fillText('// CLI_METRICS', 20, 40);
          s.ctx.strokeStyle = pal.ink;
          s.ctx.lineWidth = 2;
          s.ctx.beginPath();
          s.ctx.moveTo(20, 55);
          s.ctx.lineTo(s.c.width - 20, 55);
          s.ctx.stroke();
          s.ctx.font = `600 16px ${MONO}`;
          ['EMULATION: VT100', `COMMANDS: ${lines.length * 4} ALIASES`, 'ASCII ENGINE: CUSTOM', `LATENCY: ${(0.2 + Math.sin(t) * 0.05).toFixed(2)}ms`, 'CEL-SHADING: ACTIVE'].forEach((l, i) =>
            s.ctx.fillText(l, 20, 100 + i * 45),
          );
          s.tex.needsUpdate = true;
        },
      };
    },

    endpoints: (p, lines) => {
      const group = new THREE.Group();
      const { c, ctx, tex } = canvas2d(1024, 480);
      const server = keyPart(7.8, 3.4, 0.25, new THREE.MeshBasicMaterial({ map: tex }));
      server.position.set(0, 0.45, 0.15);
      group.add(server);
      const rows = lines.slice(0, 4).map((l) => {
        const [method = 'GET', path = '/', status = '200'] = l.split(/\s+/);
        return { method, path, status };
      });
      const title = `${p.title.toUpperCase()} // REST_GATEWAY`;
      return {
        group,
        update: (t) => {
          ctx.fillStyle = pal.paper;
          ctx.fillRect(0, 0, c.width, c.height);
          header(ctx, title.slice(0, 60), c.width, 22);
          const active = Math.floor(t * 1.2) % Math.max(1, rows.length);
          rows.forEach((r, i) => {
            const y = 90 + i * 85;
            ctx.strokeStyle = pal.ink;
            ctx.lineWidth = i === active ? 3 : 2;
            ctx.strokeRect(30, y, c.width - 60, 68);
            ctx.fillStyle = pal.ink;
            ctx.fillRect(50, y + 16, 80, 36);
            ctx.fillStyle = pal.paper;
            ctx.font = `700 18px ${MONO}`;
            ctx.fillText(r.method, 62, y + 41);
            ctx.fillStyle = pal.ink;
            ctx.font = `600 22px ${MONO}`;
            ctx.fillText(r.path, 150, y + 42);
            ctx.fillText(r.status, 720, y + 42);
            ctx.fillStyle = pal.muted;
            ctx.fillText(`${12 + ((i * 17 + Math.floor(t * 3)) % 40)}ms`, 880, y + 42);
          });
          tex.needsUpdate = true;
        },
      };
    },

    paint: (p, lines) => {
      const group = new THREE.Group();
      const { c, ctx, tex } = canvas2d(640, 512);
      const ink = document.createElement('canvas');
      ink.width = 560;
      ink.height = 380;
      const ictx = ink.getContext('2d')!;
      ictx.lineCap = 'round';
      ictx.lineJoin = 'round';
      const easel = keyPart(4.6, 3.6, 0.25, new THREE.MeshBasicMaterial({ map: tex }));
      easel.position.set(-1.55, 0.45, 0.15);
      const nav = canvas2d(420, 512);
      const navPanel = keyPart(2.9, 3.6, 0.2, new THREE.MeshBasicMaterial({ map: nav.tex }));
      navPanel.position.set(2.45, 0.45, 0.12);
      const fa = keyPart(0.85, 1.1, 0.08);
      fa.position.set(-4.55, 1.05, 0.5);
      const fb = keyPart(0.7, 0.55, 0.08);
      fb.position.set(4.6, -0.55, 0.5);
      group.add(easel, navPanel, fa, fb);
      let prev: { x: number; y: number } | null = null;
      let lastT = 0;
      let inkPaper = '';
      const brush = (t: number) => ({
        x: ink.width / 2 + Math.sin(t * 0.9) * 210 + Math.sin(t * 2.3) * 40,
        y: ink.height / 2 + Math.cos(t * 1.3) * 120 + Math.sin(t * 3.1) * 30,
      });
      return {
        group,
        update: (t) => {
          fa.rotation.set(0, Math.sin(t * 0.6) * 0.25, Math.sin(t * 0.9) * 0.06);
          fb.rotation.set(0, -Math.sin(t * 0.5) * 0.3, Math.cos(t * 0.8) * 0.07);
          if (inkPaper !== pal.paper) {
            inkPaper = pal.paper;
            ictx.fillStyle = pal.paper;
            ictx.fillRect(0, 0, ink.width, ink.height);
          }
          ictx.globalAlpha = 0.035;
          ictx.fillStyle = pal.paper;
          ictx.fillRect(0, 0, ink.width, ink.height);
          ictx.globalAlpha = 1;
          const from = lastT || t - 0.033;
          for (let i = 1; i <= 6; i++) {
            const tt = from + ((t - from) * i) / 6;
            const pt = brush(tt);
            if (prev) {
              ictx.strokeStyle = pal.ink;
              ictx.lineWidth = 3 + (Math.sin(tt * 4) * 0.5 + 0.5) * 9;
              ictx.beginPath();
              ictx.moveTo(prev.x, prev.y);
              ictx.lineTo(pt.x, pt.y);
              ictx.stroke();
            }
            prev = pt;
          }
          lastT = t;
          ctx.fillStyle = pal.paper;
          ctx.fillRect(0, 0, c.width, c.height);
          ctx.font = `700 20px ${MONO}`;
          ctx.fillStyle = pal.ink;
          ctx.fillText(`${p.title.toUpperCase()} // PAINT WITH THE CURSOR`.slice(0, 42), 40, 46);
          ctx.strokeStyle = pal.ink;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(40, 60);
          ctx.lineTo(c.width - 40, 60);
          ctx.stroke();
          ctx.drawImage(ink, 40, 84);
          ctx.lineWidth = 3;
          ctx.strokeRect(40, 84, ink.width, ink.height);
          ctx.lineWidth = 1;
          ctx.strokeRect(30, 74, ink.width + 20, ink.height + 20);
          const tip = brush(t);
          const cx = 40 + tip.x;
          const cy = 84 + tip.y;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx, cy + 26);
          ctx.lineTo(cx + 7, cy + 19);
          ctx.lineTo(cx + 18, cy + 19);
          ctx.closePath();
          ctx.fill();
          tex.needsUpdate = true;

          const n = nav.ctx;
          n.fillStyle = pal.paper;
          n.fillRect(0, 0, nav.c.width, nav.c.height);
          n.fillStyle = pal.ink;
          n.font = `800 32px ${SANS}`;
          n.fillText(p.title.slice(0, 16), 30, 60);
          n.font = `600 14px ${MONO}`;
          n.fillStyle = pal.muted;
          n.fillText(p.category.toUpperCase().slice(0, 30), 30, 88);
          n.strokeStyle = pal.ink;
          n.lineWidth = 2;
          n.beginPath();
          n.moveTo(30, 104);
          n.lineTo(nav.c.width - 30, 104);
          n.stroke();
          const items = lines.slice(0, 5);
          const active = Math.floor(t * 0.8) % Math.max(1, items.length);
          items.forEach((label, i) => {
            const y = 128 + i * 56;
            if (i === active) {
              n.fillStyle = pal.ink;
              n.fillRect(30, y, nav.c.width - 60, 44);
              n.fillStyle = pal.paper;
            } else {
              n.strokeRect(30, y, nav.c.width - 60, 44);
              n.fillStyle = pal.ink;
            }
            n.font = `700 18px ${MONO}`;
            n.fillText(label.toUpperCase().slice(0, 18), 48, y + 29);
            n.fillText('→', nav.c.width - 62, y + 29);
          });
          nav.tex.needsUpdate = true;
        },
      };
    },

    atom: (p, lines) => {
      const group = new THREE.Group();
      const atom = new THREE.Group();
      atom.position.set(-3, 0.45, 0.6);
      const core = wire(new THREE.IcosahedronGeometry(0.32, 0));
      atom.add(core);
      const pts = new THREE.EllipseCurve(0, 0, 1.55, 0.58, 0, Math.PI * 2).getPoints(96);
      const orbitGeo = new THREE.BufferGeometry().setFromPoints(pts.map((q) => new THREE.Vector3(q.x, q.y, 0)));
      const electrons: THREE_NS.Group[] = [];
      [0, Math.PI / 3, -Math.PI / 3].forEach((rot) => {
        const orbit = new THREE.Group();
        orbit.rotation.z = rot;
        const e = keyPart(0.16, 0.16, 0.16);
        orbit.add(new THREE.LineLoop(orbitGeo, inkLine), e);
        electrons.push(e);
        atom.add(orbit);
      });
      const { c, ctx, tex } = canvas2d(820, 512);
      const panel = keyPart(5.8, 3.6, 0.25, new THREE.MeshBasicMaterial({ map: tex }));
      panel.position.set(1.55, 0.45, 0.15);
      group.add(atom, panel);
      const pkg = `$ npm i ${p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
      return {
        group,
        update: (t) => {
          atom.rotation.set(Math.cos(t * 0.3) * 0.25, Math.sin(t * 0.4) * 0.5, 0);
          core.rotation.y = t * 0.8;
          electrons.forEach((e, i) => {
            const a = t * 1.4 + (i * Math.PI * 2) / 3;
            e.position.set(Math.cos(a) * 1.55, Math.sin(a) * 0.58, 0);
            e.rotation.set(a, a, 0);
          });
          ctx.fillStyle = pal.paper;
          ctx.fillRect(0, 0, c.width, c.height);
          header(ctx, pkg.slice(0, 40), c.width, 20);
          const nodes = lines.slice(0, 6);
          const active = Math.floor(t * 0.9) % Math.max(1, nodes.length);
          ctx.font = `600 17px ${MONO}`;
          nodes.forEach((node, i) => {
            const depth = node.length - node.trimStart().length;
            const x = 40 + depth * 14;
            const y = 100 + i * 40;
            const text = node.trim();
            if (depth > 0) {
              ctx.beginPath();
              ctx.moveTo(x - 18, y - 20);
              ctx.lineTo(x - 18, y - 6);
              ctx.lineTo(x - 6, y - 6);
              ctx.stroke();
            }
            if (i === active) {
              ctx.fillStyle = pal.ink;
              ctx.fillRect(x - 8, y - 22, ctx.measureText(text).width + 16, 30);
              ctx.fillStyle = pal.paper;
            } else ctx.fillStyle = pal.ink;
            ctx.fillText(text, x, y);
          });
          ctx.fillStyle = pal.ink;
          ctx.strokeRect(30, 352, c.width - 60, 112);
          ctx.font = `600 14px ${MONO}`;
          ctx.fillText('PREVIEW // ACCESSIBLE · TYPED · ZERO DEPS', 48, 378);
          const on = Math.sin(t * 2.2) > 0;
          ctx.strokeRect(48, 400, 130, 40);
          ctx.beginPath();
          ctx.arc(68, 420, 5 + (on ? 2 : 0), 0, Math.PI * 2);
          ctx.fill();
          ctx.font = `700 16px ${MONO}`;
          ctx.fillText('Live', 84, 426);
          ctx.fillRect(200, 400, 230, 40);
          ctx.strokeStyle = pal.paper;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(224, 420, 9, t * 6, t * 6 + Math.PI * 1.4);
          ctx.stroke();
          ctx.fillStyle = pal.paper;
          ctx.fillText('Saving…', 246, 426);
          ctx.fillStyle = pal.ink;
          ctx.strokeStyle = pal.ink;
          ctx.lineWidth = 2;
          ctx.strokeRect(455, 400, 84, 40);
          ctx.fillRect(on ? 499 : 459, 404, 36, 32);
          ctx.font = `600 15px ${MONO}`;
          ctx.fillText(on ? 'theme: dark' : 'theme: light', 555, 426);
          tex.needsUpdate = true;
        },
      };
    },
  };

  // ───────────── Cards ─────────────
  const cardW = 11.2;
  const cardH = 7;
  const spacing = 5.8;
  const depthStep = 4.2;
  const angle = 0.5;
  const pad = (n: number) => String(n).padStart(2, '0');

  const cards: THREE_NS.Group[] = [];
  const modules: Visual[] = [];
  const poses: Pose[] = [];
  const chassisRedraws: Array<() => void> = [];

  projects.forEach((p, i) => {
    const card = new THREE.Group();
    card.userData = { index: i };
    card.add(keyPart(cardW, cardH, 0.45));

    const { c, ctx, tex } = canvas2d(2200, 1400);
    const drawChassis = () => {
      ctx.fillStyle = pal.paper;
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.strokeStyle = pal.ink;
      ctx.lineWidth = 3;
      ctx.strokeRect(30, 30, c.width - 60, c.height - 60);
      ctx.fillStyle = pal.ink;
      ctx.font = `700 36px ${MONO}`;
      ctx.fillText(`[ ${keyLabel} // ${pad(i + 1)} ]`, 70, 100);
      ctx.font = `600 28px ${MONO}`;
      ctx.fillStyle = pal.muted;
      ctx.fillText(`// ${p.category.toUpperCase()}`, 380, 100);
      const badge = (p.badge || 'PROJECT').toUpperCase();
      ctx.font = `700 26px ${MONO}`;
      const bw = ctx.measureText(badge).width;
      ctx.fillStyle = pal.ink;
      ctx.fillRect(c.width - bw - 130, 65, bw + 50, 48);
      ctx.fillStyle = pal.paper;
      ctx.fillText(badge, c.width - bw - 105, 98);
      ctx.strokeStyle = pal.ink;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(70, 140);
      ctx.lineTo(c.width - 70, 140);
      ctx.stroke();
      ctx.fillStyle = pal.ink;
      ctx.font = `700 30px ${MONO}`;
      ctx.fillText(`● ${p.tagline}`, 70, c.height - 225);
      ctx.font = `800 78px ${SANS}`;
      ctx.fillText(p.title, 70, c.height - 130);
      let x = 70;
      ctx.font = `600 24px ${MONO}`;
      p.technologies.slice(0, 4).forEach((tech) => {
        const tw = ctx.measureText(tech).width;
        ctx.fillStyle = pal.paper;
        ctx.fillRect(x, c.height - 85, tw + 32, 46);
        ctx.strokeRect(x, c.height - 85, tw + 32, 46);
        ctx.fillStyle = pal.ink;
        ctx.fillText(tech, x + 16, c.height - 54);
        x += tw + 48;
      });
      ctx.font = `700 26px ${MONO}`;
      ctx.fillText(openLabel, c.width - ctx.measureText(openLabel).width - 70, c.height - 54);
      tex.needsUpdate = true;
    };
    drawChassis();
    chassisRedraws.push(drawChassis);
    const face = new THREE.Mesh(new THREE.PlaneGeometry(cardW, cardH), new THREE.MeshBasicMaterial({ map: tex }));
    face.position.z = 0.235;
    card.add(face);

    const kind = p.visual?.kind ?? 'code';
    const lines = p.visual?.lines?.length ? p.visual.lines : DEFAULT_LINES[kind];
    const mod = (visuals[kind] ?? visuals.code)(p, lines);
    mod.group.position.z = 0.28;
    card.add(mod.group);
    modules.push(mod);

    scene.add(card);
    cards.push(card);
    poses.push({ x: 0, y: 0, z: 0, rotX: 0, rotY: 0, scale: 1 });
  });

  // Floor grid + horizon lines
  const bg = new THREE.Group();
  const grid = new THREE.GridHelper(60, 40);
  grid.position.set(0, -4.2, -5);
  const gridMat = grid.material as THREE_NS.LineBasicMaterial;
  gridMat.transparent = true;
  gridMat.opacity = 0.05;
  bg.add(grid);
  const horizonMat = new THREE.LineBasicMaterial({ transparent: true, opacity: 0.06 });
  [-8, -4, 0, 4].forEach((z, i) =>
    bg.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-35, -4 + i * 0.1, z), new THREE.Vector3(35, -4 + i * 0.1, z)]), horizonMat)),
  );
  scene.add(bg);
  const applyBgColor = () => {
    gridMat.color.setStyle(pal.ink);
    horizonMat.color.setStyle(pal.ink);
  };
  applyBgColor();

  // ───────────── Motion ─────────────
  const count = projects.length;
  let target = 0;
  let current = 0;
  let expanded: number | null = null;
  let tiltX = 0;
  let tiltY = 0;
  let tTiltX = 0;
  let tTiltY = 0;
  let lastIdx = -1;
  let lastModuleT = 0;
  let interacted = false;

  const clampIdx = (i: number) => Math.max(0, Math.min(count - 1, i));
  const interact = () => {
    if (!interacted) {
      interacted = true;
      onInteract?.();
    }
  };

  const poseFor = (idx: number, progress: number): Pose => {
    const offset = idx - progress;
    const abs = Math.abs(offset);
    const sign = Math.sign(offset);
    const near = Math.min(abs, 1);
    const eased = near * near * (3 - 2 * near);
    if (expanded !== null) {
      if (idx === expanded) return { x: 0, y: 0.15, z: 4.2, rotX: 0, rotY: 0, scale: 1.06 };
      return { x: offset * spacing * 1.6, y: 0, z: -14, rotX: 0, rotY: -sign * angle * 1.3, scale: 0.6 };
    }
    const pose: Pose = {
      x: offset * spacing + sign * 1.6 * eased,
      y: 0.1 * (1 - eased),
      z: -abs * depthStep,
      rotX: 0,
      rotY: -sign * angle * eased,
      scale: Math.max(0.68, Math.pow(0.88, abs)),
    };
    if (abs < 0.5 && !reduced) {
      const f = 1 - abs * 2;
      pose.rotY += tiltY * 0.16 * f;
      pose.rotX = -tiltX * 0.06 * f;
      pose.y += tiltX * 0.12 * f;
    }
    return pose;
  };

  let dragging = false;
  let dragMoved = false;
  let startX = 0;
  let prevX = 0;
  let velocity = 0;

  const loop = createLoop(container, (dt, t) => {
    const pl = reduced ? 30 : dragging ? 18 : 7.5;
    current = damp(current, target, pl, dt || 1);
    tiltX = damp(tiltX, tTiltX, 4, dt);
    tiltY = damp(tiltY, tTiltY, 4, dt);
    const lambda = reduced ? 30 : expanded !== null ? 6 : 10;
    cards.forEach((card, i) => {
      const goal = poseFor(i, current);
      const p = poses[i];
      (Object.keys(goal) as Array<keyof Pose>).forEach((k) => (p[k] = damp(p[k], goal[k], lambda, dt || 1)));
      card.position.set(p.x, p.y, p.z);
      card.rotation.set(p.rotX, p.rotY, 0);
      card.scale.setScalar(p.scale);
      card.visible = Math.abs(i - current) < 4.5 || expanded !== null;
    });
    if (t - lastModuleT > 1 / 30 || dt === 0) {
      lastModuleT = t;
      const at = reduced ? 1 : t;
      modules.forEach((m, i) => {
        if (Math.abs(i - current) < 1.6 || i === expanded) m.update(at);
      });
    }
    const idx = clampIdx(Math.round(current));
    if (idx !== lastIdx) {
      lastIdx = idx;
      onIndex?.(idx);
    }
    bg.position.x = -current * 0.35;
    renderer.render(scene, camera);
  });

  const api: ShowcaseApi = {
    goTo: (i) => {
      expanded = null;
      target = clampIdx(i);
      interact();
    },
    next: () => api.goTo(Math.round(target) + 1),
    prev: () => api.goTo(Math.round(target) - 1),
    open: (i) => {
      expanded = clampIdx(i);
      target = expanded;
    },
    close: () => {
      expanded = null;
    },
    get index() {
      return clampIdx(Math.round(target));
    },
    dispose: () => {},
  };

  // ───────────── Input ─────────────
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const handleClick = (e: PointerEvent) => {
    const r = container.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const hit = raycaster.intersectObjects(cards, true)[0];
    let obj: THREE_NS.Object3D | null = hit?.object ?? null;
    while (obj && obj.userData?.index === undefined) obj = obj.parent;
    if (!obj) return;
    const i = obj.userData.index as number;
    if (expanded !== null && expanded !== i) {
      api.open(i);
      onOpen?.(i);
    } else if (expanded === null && Math.round(target) === i) {
      api.open(i);
      onOpen?.(i);
    } else if (expanded === null) api.goTo(i);
  };

  const onDown = (e: PointerEvent) => {
    dragging = true;
    dragMoved = false;
    startX = prevX = e.clientX;
    velocity = 0;
    container.style.cursor = 'grabbing';
  };
  const onMove = (e: PointerEvent) => {
    const r = container.getBoundingClientRect();
    const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    tTiltY = inside ? (((e.clientX - r.left) / r.width) * 2 - 1) * 0.22 : 0;
    tTiltX = inside ? -(((e.clientY - r.top) / r.height) * 2 - 1) * 0.22 : 0;
    if (!dragging) return;
    const dx = e.clientX - prevX;
    velocity = velocity * 0.6 + dx * 0.4;
    prevX = e.clientX;
    if (!dragMoved && Math.abs(e.clientX - startX) > 8) {
      dragMoved = true;
      expanded = null;
      interact();
    }
    if (dragMoved) {
      const sens = Math.max(320, Math.min(520, r.width * 0.4));
      let next = target - dx / sens;
      if (next < 0 || next > count - 1) next = target - (dx / sens) * 0.35; // elastic edges
      target = Math.max(-0.45, Math.min(count - 0.55, next));
    }
  };
  const onUp = (e: PointerEvent) => {
    if (!dragging) return;
    dragging = false;
    container.style.cursor = '';
    if (dragMoved) target = clampIdx(Math.round(target - Math.max(-1.5, Math.min(1.5, velocity / 60))));
    else if (e.type === 'pointerup') handleClick(e);
  };
  let snap = 0;
  const onWheel = (e: WheelEvent) => {
    // Only horizontal scrolling moves the slider; vertical wheel keeps scrolling the page.
    if (expanded !== null || Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 2) return;
    e.preventDefault();
    interact();
    target = Math.max(-0.2, Math.min(count - 0.8, target + e.deltaX * 0.0022));
    window.clearTimeout(snap);
    snap = window.setTimeout(() => (target = clampIdx(Math.round(target))), 140);
  };

  container.addEventListener('pointerdown', onDown);
  window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('pointerup', onUp);
  window.addEventListener('pointercancel', onUp);
  container.addEventListener('wheel', onWheel, { passive: false });

  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.position.z = w < 640 ? 24 : w < 1024 ? 20 : 17.6;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    loop.renderOnce();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  const unwatch = watchTheme(() => {
    pal = readPalette(container);
    paperMat.color.setStyle(pal.paper);
    inkLine.color.setStyle(pal.ink);
    applyBgColor();
    chassisRedraws.forEach((r) => r());
    loop.renderOnce();
  });

  // Fonts may load after the first draw: repaint the static card faces once they are ready.
  (document as Document & { fonts?: FontFaceSet }).fonts?.ready.then(() => {
    chassisRedraws.forEach((r) => r());
    loop.renderOnce();
  });

  api.dispose = () => {
    window.clearTimeout(snap);
    loop.dispose();
    ro.disconnect();
    unwatch();
    container.removeEventListener('pointerdown', onDown);
    window.removeEventListener('pointermove', onMove);
    window.removeEventListener('pointerup', onUp);
    window.removeEventListener('pointercancel', onUp);
    container.removeEventListener('wheel', onWheel);
    disposeTree(scene);
    renderer.dispose();
    renderer.domElement.remove();
  };
  return api;
}
