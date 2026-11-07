// src/components/lib/three/contributions-scene.ts
// "Keycap" 3D contribution matrix (GitHub style). Every day is a barely-rounded cube whose height
// and tone encode activity. On first view the cubes fly in from the sky and diagonally from both
// sides and assemble on the board; afterwards a few keep detaching and flying back. Hovering sends
// water-like ripples that lift and swell the cubes around the cursor. One InstancedMesh for all days.
import type * as THREE_NS from 'three';
import { createLoop, damp, disposeTree, prefersReducedMotion, readPalette, watchTheme, type KcPalette } from './kc-runtime';

type Three = typeof THREE_NS;
type Vec3 = { x: number; y: number; z: number };
type RoundedBoxCtor = new (w?: number, h?: number, d?: number, segments?: number, radius?: number) => THREE_NS.BufferGeometry;

export interface ContributionDay {
  date: string;
  count: number;
}
export interface ContributionWeek {
  days: ContributionDay[];
}

export type ContributionHover =
  | { kind: 'day'; date: string; count: number; level: number }
  | { kind: 'weekday'; index: number }
  | null;

export interface ContributionsOptions {
  weeks: ContributionWeek[];
  /** Upper bounds of levels 1–3; anything above is level 4. Default [2, 5, 8]. */
  thresholds?: [number, number, number];
  /** Short month names (12). */
  months?: string[];
  /** Short weekday names starting on Sunday (7). */
  weekdays?: string[];
  legend?: { less: string; more: string };
  /** Loose cubes drifting in front of the board. Default true. */
  debris?: boolean;
  onHover?: (info: ContributionHover, x: number, y: number) => void;
}

interface Cube {
  index: number;
  col: number;
  row: number;
  date: string;
  count: number;
  level: number;
  tx: number;
  ty: number;
  tz: number;
  depth: number;
  from: Vec3;
  rotFrom: Vec3;
  t0: number;
  dur: number;
  hover: number;
}

interface Loose {
  pos: Vec3;
  vel: Vec3;
  rot: Vec3;
  spin: Vec3;
  size: number;
}

const rand = (a: number, b: number) => a + Math.random() * (b - a);
const easeOutBack = (t: number) => 1 + 2.4 * Math.pow(t - 1, 3) + 1.4 * Math.pow(t - 1, 2);
const LEVEL_DEPTH = [0.35, 0.55, 0.8, 1.05, 1.3];
const LEVEL_TONE = [0.03, 0.18, 0.36, 0.62, 0.86];

/** Deterministic demo year (seeded), so server and client render the same matrix. */
export function demoContributions(seed = 7, weeksCount = 53): ContributionWeek[] {
  let s = seed >>> 0 || 1;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  const weeks: ContributionWeek[] = [];
  const d = new Date(Date.UTC(2026, 0, 4));
  d.setUTCDate(d.getUTCDate() - 7 * (weeksCount - 44));
  for (let w = 0; w < weeksCount; w++) {
    const days: ContributionDay[] = [];
    const busy = 0.35 + 0.45 * Math.abs(Math.sin(w / 6.5));
    for (let i = 0; i < 7; i++) {
      const weekend = i === 0 || i === 6;
      const active = rnd() < busy * (weekend ? 0.45 : 1);
      days.push({ date: d.toISOString().slice(0, 10), count: active ? 1 + Math.floor(rnd() * rnd() * 14) : 0 });
      d.setUTCDate(d.getUTCDate() + 1);
    }
    weeks.push({ days });
  }
  return weeks;
}

export function mountContributions(
  container: HTMLElement,
  THREE: Three,
  RoundedBoxGeometry: RoundedBoxCtor,
  options: ContributionsOptions,
): () => void {
  const {
    weeks,
    thresholds = [2, 5, 8],
    months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    legend = { less: 'LESS', more: 'MORE' },
    debris = true,
    onHover,
  } = options;
  const reduced = prefersReducedMotion();
  let pal = readPalette(container);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.style.display = 'block';
  container.appendChild(renderer.domElement);
  const aniso = renderer.capabilities.getMaxAnisotropy();

  const scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0xffffff, 1.8));
  const key = new THREE.DirectionalLight(0xffffff, 1.1);
  key.position.set(30, 45, 60);
  const fill = new THREE.DirectionalLight(0xffffff, 0.9);
  fill.position.set(-30, -20, 50);
  scene.add(key, fill);

  const display = new THREE.Group();
  const keysGroup = new THREE.Group();
  display.add(keysGroup);
  scene.add(display);
  const baseTiltX = -0.09;
  const baseTiltY = 0.06;
  display.rotation.set(baseTiltX, baseTiltY, 0);

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 2000);

  // ── Layout ──
  const numCols = Math.max(1, weeks.length);
  const step = 2.45;
  const keySize = 2.05;
  const gridW = (numCols - 1) * step;
  const gridH = 6 * step;
  const offsetX = -gridW / 2;
  const offsetY = gridH / 2;
  const padL = 7.6;
  const padR = 4.2;
  const padY = 5;
  const chassisW = gridW + padL + padR;
  const chassisH = gridH + padY * 2;
  const chassisX = offsetX + gridW / 2 + (padR - padL) / 2;
  const leftEdge = offsetX - padL;
  const rightEdge = offsetX + gridW + padR;

  const mix = (a: string, b: string, t: number) => new THREE.Color(a).lerp(new THREE.Color(b), t);

  // Board
  const chassisGeo = new THREE.BoxGeometry(chassisW, chassisH, 0.6);
  const chassisMat = new THREE.MeshStandardMaterial({ roughness: 0.55, metalness: 0.05 });
  const chassisLine = new THREE.LineBasicMaterial();
  const chassis = new THREE.Mesh(chassisGeo, chassisMat);
  chassis.add(new THREE.LineSegments(new THREE.EdgesGeometry(chassisGeo), chassisLine));
  chassis.position.set(chassisX, 0, -0.35);
  display.add(chassis);

  // Flat labels (month names, legend) — redrawn on theme change
  const redraws: Array<(p: KcPalette) => void> = [];
  const label = (text: string, x: number, y: number, w: number, h: number, tone: 'muted' | 'ink' = 'muted') => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = Math.max(64, Math.round(512 / (w / h)));
    const ctx = canvas.getContext('2d')!;
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = aniso;
    const draw = (p: KcPalette) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let size = Math.round(canvas.height * 0.6);
      const font = (s: number) => `800 ${s}px "JetBrains Mono", ui-monospace, monospace`;
      ctx.font = font(size);
      const m = ctx.measureText(text).width;
      if (m > canvas.width * 0.94) ctx.font = font((size = Math.floor((size * canvas.width * 0.94) / m)));
      ctx.fillStyle = tone === 'ink' ? p.ink : p.muted;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      tex.needsUpdate = true;
    };
    draw(pal);
    redraws.push(draw);
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }));
    mesh.position.set(x, y, 0.05);
    display.add(mesh);
    return mesh;
  };

  let lastMonth = -1;
  weeks.forEach((wk, col) => {
    const first = wk.days[0]?.date;
    if (!first) return;
    const m = new Date(first + 'T00:00:00Z').getUTCMonth();
    if (m !== lastMonth && col % 4 === 0) {
      lastMonth = m;
      label(months[m] ?? '', offsetX + col * step, offsetY + 2.7, 4, 1.8);
    }
  });
  const legendMesh = label(`${legend.less}  ▫  ▫  ▫  ▫  ▫  ${legend.more}`, chassisX, -offsetY - 2.8, 34, 1.8);

  // Weekday keys (wide modifier keycaps)
  const dayKeyGeo = new RoundedBoxGeometry(3.6, keySize, 0.5, 2, 0.06);
  const dayKeyMat = new THREE.MeshStandardMaterial({ roughness: 0.45, metalness: 0.02 });
  const dayKeys: Array<{ mesh: THREE_NS.Mesh; row: number; lift: number; target: number }> = [];
  weekdays.slice(0, 7).forEach((name, row) => {
    const mesh = new THREE.Mesh(dayKeyGeo, dayKeyMat);
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 292;
    const ctx = canvas.getContext('2d')!;
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = aniso;
    const draw = (p: KcPalette) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = row === 0 || row === 6 ? p.muted : p.ink;
      ctx.font = '700 86px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(name, 256, 146);
      tex.needsUpdate = true;
    };
    draw(pal);
    redraws.push(draw);
    const face = new THREE.Mesh(new THREE.PlaneGeometry(3.45, keySize * 0.96), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }));
    face.position.z = 0.27;
    mesh.add(face);
    mesh.position.set(offsetX - 3.4, offsetY - row * step, 0.25);
    mesh.userData = { weekday: row };
    keysGroup.add(mesh);
    dayKeys.push({ mesh, row, lift: 0, target: 0 });
  });

  // Contribution cubes
  const levelOf = (c: number) => (c <= 0 ? 0 : c <= thresholds[0] ? 1 : c <= thresholds[1] ? 2 : c <= thresholds[2] ? 3 : 4);
  const spawnFrom = (t: Vec3): Vec3 => {
    const r = Math.random();
    if (r < 0.45) return { x: t.x + rand(-6, 6), y: rand(26, 40), z: t.z + rand(-4, 14) };
    if (r < 0.725) return { x: leftEdge - rand(20, 45), y: t.y - rand(12, 26), z: rand(-4, 16) };
    return { x: rightEdge + rand(20, 45), y: t.y + rand(12, 26), z: rand(-4, 16) };
  };
  const randRot = (): Vec3 => ({ x: rand(-Math.PI, Math.PI), y: rand(-Math.PI, Math.PI), z: rand(-Math.PI, Math.PI) });

  const cubes: Cube[] = [];
  weeks.forEach((wk, col) =>
    wk.days.forEach((d, row) => {
      const level = levelOf(d.count);
      const tx = offsetX + col * step;
      const ty = offsetY - row * step;
      const tz = LEVEL_DEPTH[level] / 2;
      cubes.push({
        index: cubes.length, col, row, date: d.date, count: d.count, level, tx, ty, tz, depth: LEVEL_DEPTH[level],
        from: spawnFrom({ x: tx, y: ty, z: tz }), rotFrom: randRot(), t0: Infinity, dur: rand(1.1, 1.9), hover: 0,
      });
    }),
  );

  const cubeGeo = new RoundedBoxGeometry(keySize, keySize, 1, 2, 0.06);
  const cubeMat = new THREE.MeshStandardMaterial({ roughness: 0.42, metalness: 0.05 });
  const cubesMesh = new THREE.InstancedMesh(cubeGeo, cubeMat, Math.max(1, cubes.length));
  cubesMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  cubesMesh.frustumCulled = false;
  cubesMesh.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), gridW / 2 + 8);
  keysGroup.add(cubesMesh);

  // Loose cubes in front of the board
  const looseCount = debris ? (container.clientWidth <= 768 ? 14 : 30) : 0;
  const looseGeo = new RoundedBoxGeometry(1, 1, 1, 2, 0.06);
  const looseMat = new THREE.MeshStandardMaterial({ roughness: 0.4, metalness: 0.05, transparent: true, opacity: 0.55, depthWrite: false });
  const looseMesh = new THREE.InstancedMesh(looseGeo, looseMat, Math.max(1, looseCount));
  looseMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  looseMesh.frustumCulled = false;
  looseMesh.raycast = () => {};
  looseMesh.renderOrder = 2;
  looseMesh.visible = looseCount > 0;
  keysGroup.add(looseMesh);
  const loose: Loose[] = [];
  const resetLoose = (c: Loose, initial: boolean) => {
    if (Math.random() < 0.5) {
      c.pos = { x: rand(leftEdge, rightEdge), y: initial ? rand(-16, 22) : rand(20, 28), z: rand(2, 12) };
      c.vel = { x: rand(-0.8, 0.8), y: -rand(2.5, 6), z: 0 };
    } else {
      const fromLeft = Math.random() < 0.5;
      c.pos = { x: initial ? rand(leftEdge, rightEdge) : fromLeft ? leftEdge - 6 : rightEdge + 6, y: rand(-14, 14), z: rand(2, 12) };
      c.vel = { x: (fromLeft ? 1 : -1) * rand(3, 7), y: (fromLeft ? -1 : 1) * rand(0.6, 2), z: 0 };
    }
  };
  for (let i = 0; i < looseCount; i++) {
    const c: Loose = { pos: { x: 0, y: 0, z: 0 }, vel: { x: 0, y: 0, z: 0 }, rot: randRot(), spin: { x: rand(-0.6, 0.6), y: rand(-0.6, 0.6), z: rand(-0.4, 0.4) }, size: keySize * (Math.random() < 0.15 ? rand(0.9, 1.4) : rand(0.3, 0.6)) };
    resetLoose(c, true);
    loose.push(c);
  }

  // ── Colours ──
  let levelColors: THREE_NS.Color[] = [];
  const rippleInk = new THREE.Color();
  const applyPalette = () => {
    levelColors = LEVEL_TONE.map((t) => mix(pal.paper, pal.level, t));
    rippleInk.setStyle(pal.ink);
    chassisMat.color.copy(mix(pal.paper, pal.ink, 0.015));
    chassisLine.color.copy(mix(pal.paper, pal.ink, 0.12));
    dayKeyMat.color.copy(mix(pal.paper, pal.ink, 0.02));
    looseMat.color.copy(mix(pal.paper, pal.level, 0.25));
    redraws.forEach((r) => r(pal));
  };
  applyPalette();

  // ── Interaction state ──
  const mouse = new THREE.Vector2(-9, -9);
  const raycaster = new THREE.Raycaster();
  const plane = new THREE.Plane();
  const hitPoint = new THREE.Vector3();
  const rippleTarget = new THREE.Vector2(9999, 9999);
  const ripple = new THREE.Vector2(9999, 9999);
  let rippleOn = 0;
  let hoveredIndex = -1;
  let hoveredRow = -1;
  let tiltX = baseTiltX;
  let tiltY = baseTiltY;
  let dragging = false;
  let panX = 0;
  let baseCamX = 0;
  let minPan = 0;
  let mobile = false;
  let assembled = -1; // elapsed time when assembly began
  let lastClient = { x: 0, y: 0 };

  const dummy = new THREE.Object3D();
  const tmp = new THREE.Color();

  const writeInstances = (t: number, dt: number) => {
    const built = assembled >= 0 && t - assembled > 4.5;
    const anim = reduced ? 0 : t;
    for (let i = 0; i < cubes.length; i++) {
      const c = cubes[i];
      let k = (t - c.t0) / c.dur;
      if (built && k >= 1 && !reduced && i !== hoveredIndex && Math.random() < dt * 0.012) {
        c.from = spawnFrom({ x: c.tx, y: c.ty, z: c.tz });
        c.rotFrom = randRot();
        c.t0 = t;
        c.dur = rand(1.3, 2.1);
        k = 0;
      }
      k = Math.max(0, Math.min(1, k));
      const e = easeOutBack(k);
      const settled = k >= 1;

      const dx = c.tx - ripple.x;
      const dy = c.ty - ripple.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      const reach = settled ? Math.exp(-(d * d) / 110) * rippleOn : 0;
      const wave = Math.sin(d * 0.85 - anim * 3.4);
      const glow = reach * (0.5 + 0.5 * wave);
      c.hover = damp(c.hover, i === hoveredIndex ? 1 : 0, 14, dt || 1);
      const row = c.row === hoveredRow ? 1 : 0;
      const pulse = settled && c.level > 0 ? Math.max(0, Math.sin(anim * 2.2 - (c.col * 0.11 + c.row * 0.15))) * (0.2 + c.level * 0.08) : 0;
      const lift = pulse + reach * (0.55 + 0.45 * wave) * 2.2 + c.hover * 1.8 + row;
      const breathe = 1 + 0.22 * reach * (0.55 + 0.45 * wave) + c.hover * 0.14;
      const grow = k <= 0 ? 0.0001 : Math.min(1, 0.35 + k);

      dummy.position.set(c.from.x + (c.tx - c.from.x) * e, c.from.y + (c.ty - c.from.y) * e, c.from.z + (c.tz - c.from.z) * e + lift);
      dummy.rotation.set(c.rotFrom.x * (1 - e) + (settled ? Math.sin(anim * 0.6 + i) * 0.015 : 0), c.rotFrom.y * (1 - e), c.rotFrom.z * (1 - e));
      dummy.scale.set(breathe * grow, breathe * grow, c.depth * grow * (1 + 0.35 * glow));
      dummy.updateMatrix();
      cubesMesh.setMatrixAt(i, dummy.matrix);
      tmp.copy(levelColors[c.level]).lerp(rippleInk, Math.min(0.55, glow * 0.45 + c.hover * 0.25));
      cubesMesh.setColorAt(i, tmp);
    }
    cubesMesh.instanceMatrix.needsUpdate = true;
    if (cubesMesh.instanceColor) cubesMesh.instanceColor.needsUpdate = true;

    const showLoose = assembled >= 0 && !reduced;
    loose.forEach((c, i) => {
      c.pos.x += c.vel.x * dt;
      c.pos.y += c.vel.y * dt;
      c.rot.x += c.spin.x * dt;
      c.rot.y += c.spin.y * dt;
      c.rot.z += c.spin.z * dt;
      if (c.pos.y < -24 || c.pos.y > 30 || c.pos.x < leftEdge - 8 || c.pos.x > rightEdge + 8) resetLoose(c, false);
      dummy.position.set(c.pos.x, c.pos.y, c.pos.z);
      dummy.rotation.set(c.rot.x, c.rot.y, c.rot.z);
      dummy.scale.setScalar(showLoose ? c.size : 0.0001);
      dummy.updateMatrix();
      looseMesh.setMatrixAt(i, dummy.matrix);
    });
    looseMesh.instanceMatrix.needsUpdate = true;
  };

  const assemble = (t: number) => {
    assembled = t;
    const camX = baseCamX + panX;
    const maxDist = Math.max(1, ...cubes.map((c) => Math.abs(c.tx - camX)));
    cubes.forEach((c) => (c.t0 = reduced ? -10 : t + (Math.abs(c.tx - camX) / maxDist) * 2 + rand(0, 0.9)));
  };

  const emitHover = (info: ContributionHover) => onHover?.(info, lastClient.x, lastClient.y);

  const pick = () => {
    if (assembled < 0 || Math.abs(mouse.x) > 1 || Math.abs(mouse.y) > 1) return;
    const hit = raycaster.intersectObjects([cubesMesh, ...dayKeys.map((k) => k.mesh)], false)[0];
    if (hit && hit.object === cubesMesh && hit.instanceId !== undefined) {
      const c = cubes[hit.instanceId];
      hoveredRow = -1;
      if (c && hoveredIndex !== c.index) {
        hoveredIndex = c.index;
        emitHover({ kind: 'day', date: c.date, count: c.count, level: c.level });
      }
    } else if (hit && hit.object.userData?.weekday !== undefined) {
      const row = hit.object.userData.weekday as number;
      hoveredIndex = -1;
      if (hoveredRow !== row) {
        hoveredRow = row;
        emitHover({ kind: 'weekday', index: row });
      }
    } else if (hoveredIndex !== -1 || hoveredRow !== -1) {
      hoveredIndex = -1;
      hoveredRow = -1;
      emitHover(null);
    }
  };

  const loop = createLoop(
    container,
    (dt, t) => {
      if (!dragging || mobile) {
        tiltX = damp(tiltX, baseTiltX, 4, dt);
        tiltY = damp(tiltY, baseTiltY, 4, dt);
      }
      const inside = Math.abs(mouse.x) <= 1 && Math.abs(mouse.y) <= 1;
      display.rotation.y = damp(display.rotation.y, tiltY + (inside ? mouse.x : 0) * 0.04, 3.6, dt);
      display.rotation.x = damp(display.rotation.x, tiltX - (inside ? mouse.y : 0) * 0.035, 3.6, dt);

      if (inside) {
        raycaster.setFromCamera(mouse, camera);
        display.updateMatrixWorld();
        plane.setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 0, 1).applyQuaternion(display.quaternion), display.position);
        if (raycaster.ray.intersectPlane(plane, hitPoint)) {
          keysGroup.worldToLocal(hitPoint);
          rippleTarget.set(hitPoint.x, hitPoint.y);
          if (ripple.x > 9000) ripple.copy(rippleTarget);
        }
      }
      rippleOn = damp(rippleOn, inside && assembled >= 0 && !dragging ? 1 : 0, 4, dt);
      ripple.set(damp(ripple.x, rippleTarget.x, 6, dt), damp(ripple.y, rippleTarget.y, 6, dt));

      dayKeys.forEach((k) => {
        k.lift = damp(k.lift, k.row === hoveredRow ? 1 : 0, 12, dt || 1);
        k.mesh.position.z = 0.25 + k.lift * 1.4;
        k.mesh.scale.setScalar(1 + k.lift * 0.08);
      });
      writeInstances(t, dt);
      if (inside && !dragging) pick();
      renderer.render(scene, camera);
    },
    () => assemble(loop.elapsed),
  );

  // ── Camera framing ──
  const frame = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    const tanHalf = Math.tan(((camera.fov * Math.PI) / 180) / 2);
    mobile = w <= 1024;
    if (!mobile) {
      const zW = (chassisW * 1.12) / 2 / (tanHalf * camera.aspect);
      const zH = ((chassisH * 1.02) / 2 / tanHalf) * 1.32;
      camera.position.set(chassisX, 0, Math.max(zW, zH));
      baseCamX = chassisX;
      panX = 0;
      minPan = 0;
    } else {
      const z = Math.min(56, Math.max(38, ((chassisH - 1) / 2 / tanHalf) * (w <= 480 ? 1.08 : w <= 768 ? 1.15 : 1.25)));
      const visW = 2 * z * tanHalf * camera.aspect;
      baseCamX = Math.max(chassisX, rightEdge - visW / 2 + 1.8);
      minPan = Math.min(0, leftEdge + visW / 2 - 1.8 - baseCamX);
      panX = Math.max(minPan, Math.min(0, panX));
      camera.position.set(baseCamX + panX, 0, z);
    }
    camera.lookAt(camera.position.x, 0, 0);
    legendMesh.position.x = mobile ? camera.position.x : chassisX;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    loop.renderOnce();
  };
  const ro = new ResizeObserver(frame);
  ro.observe(container);
  frame();

  // ── Pointer ──
  let startX = 0;
  let startY = 0;
  const toNdc = (e: PointerEvent) => {
    const r = container.getBoundingClientRect();
    mouse.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    lastClient = { x: e.clientX - r.left, y: e.clientY - r.top };
  };
  const onDown = (e: PointerEvent) => {
    dragging = true;
    startX = e.clientX;
    startY = e.clientY;
    toNdc(e);
  };
  const onMove = (e: PointerEvent) => {
    const r = container.getBoundingClientRect();
    const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    if (inside || dragging) toNdc(e);
    else if (mouse.x > -9) {
      mouse.set(-9, -9);
      if (hoveredIndex !== -1 || hoveredRow !== -1) {
        hoveredIndex = -1;
        hoveredRow = -1;
        emitHover(null);
      }
    }
    if (!dragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    startX = e.clientX;
    startY = e.clientY;
    if (Math.abs(dx) + Math.abs(dy) > 2) emitHover(null);
    if (mobile) {
      panX = Math.max(minPan, Math.min(0, panX + dx * 0.08));
      camera.position.x = baseCamX + panX;
      camera.lookAt(camera.position.x, 0, 0);
      legendMesh.position.x = camera.position.x;
    } else {
      tiltY += dx * 0.002;
      tiltX = Math.max(-0.35, Math.min(0.2, tiltX - dy * 0.002));
    }
  };
  const onUp = () => (dragging = false);
  container.addEventListener('pointerdown', onDown);
  window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('pointerup', onUp);
  window.addEventListener('pointercancel', onUp);

  const unwatch = watchTheme(() => {
    pal = readPalette(container);
    applyPalette();
    writeInstances(loop.elapsed, 0);
    loop.renderOnce();
  });
  writeInstances(0, 0);

  return () => {
    loop.dispose();
    ro.disconnect();
    unwatch();
    container.removeEventListener('pointerdown', onDown);
    window.removeEventListener('pointermove', onMove);
    window.removeEventListener('pointerup', onUp);
    window.removeEventListener('pointercancel', onUp);
    disposeTree(scene);
    renderer.dispose();
    renderer.domElement.remove();
  };
}
