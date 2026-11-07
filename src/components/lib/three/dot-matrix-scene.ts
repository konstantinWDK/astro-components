// src/components/lib/three/dot-matrix-scene.ts
// "Keycap" hero background: a full-bleed matrix of dots that breathe in slow waves and part
// around the cursor. One fragment shader on a single quad — cheap at any resolution.
import type * as THREE_NS from 'three';
import { createLoop, damp, prefersReducedMotion, readPalette, watchTheme } from './kc-runtime';

type Three = typeof THREE_NS;

export interface DotMatrixOptions {
  /** Dots per screen height. Default 65. */
  density?: number;
  /** 0–1 overall strength. Default 0.42. */
  opacity?: number;
  /** Fade the dots out while the page scrolls past the hero. Default true. */
  fadeOnScroll?: boolean;
}

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uTime;
  uniform float uGrid;
  uniform float uOpacity;
  uniform float uScroll;
  uniform vec3 uColor;
  varying vec2 vUv;

  void main() {
    float aspect = uResolution.x / uResolution.y;
    vec2 st = vUv - 0.5;
    st.x *= aspect;
    vec2 mouse = uMouse - 0.5;
    mouse.x *= aspect;

    float mouseForce = smoothstep(0.55, 0.0, length(st - mouse));
    vec2 warped = st + normalize(st - mouse + vec2(0.0001)) * mouseForce * 0.04;

    vec2 grid = warped * uGrid;
    vec2 cell = floor(grid);
    vec2 cellUv = fract(grid) - 0.5;

    float t = uTime * 0.4;
    float w1 = sin(cell.x * 0.13 + t) * cos(cell.y * 0.13 + t * 0.85);
    float w2 = sin(length(cell * 0.055) * 3.2 - t * 1.4);
    float w3 = sin((cell.x + cell.y) * 0.09 + t * 0.6);
    float breath = (w1 + w2 * 0.55 + w3 * 0.45) * 0.5 + 0.5;

    float radius = 0.12 * (0.5 + 0.5 * breath + mouseForce * 0.45);
    float dotMask = 1.0 - smoothstep(radius - 0.05, radius + 0.02, length(cellUv));
    float radial = smoothstep(2.5, 0.5, length(st));
    float edge = smoothstep(0.0, 0.1, vUv.y) * smoothstep(1.0, 0.92, vUv.y);

    float alpha = dotMask * radial * edge * (0.25 + 0.75 * breath + mouseForce * 0.45) * uOpacity;
    alpha *= 1.0 - uScroll * 0.7;
    if (alpha <= 0.001) discard;
    gl_FragColor = vec4(uColor, alpha);
  }
`;

export function mountDotMatrix(container: HTMLElement, THREE: Three, options: DotMatrixOptions = {}): () => void {
  const { density = 65, opacity = 0.42, fadeOnScroll = true } = options;
  const reduced = prefersReducedMotion();

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.domElement.setAttribute('aria-hidden', 'true');
  renderer.domElement.style.display = 'block';
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 1;

  const uniforms = {
    uResolution: { value: new THREE.Vector2(1, 1) },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uTime: { value: 0 },
    uGrid: { value: density },
    uOpacity: { value: opacity },
    uScroll: { value: 0 },
    uColor: { value: new THREE.Color(readPalette(container).ink) },
  };
  const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms, transparent: true, depthWrite: false });
  const geometry = new THREE.PlaneGeometry(2, 2);
  scene.add(new THREE.Mesh(geometry, material));

  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h);
    uniforms.uResolution.value.set(w, h);
    loop.renderOnce();
  };

  let tx = 0.5;
  let ty = 0.5;
  const onPointer = (e: PointerEvent) => {
    const r = container.getBoundingClientRect();
    if (!r.width || !r.height) return;
    tx = (e.clientX - r.left) / r.width;
    ty = 1 - (e.clientY - r.top) / r.height;
  };
  const onScroll = () => {
    if (fadeOnScroll) uniforms.uScroll.value = Math.min(window.scrollY / (window.innerHeight || 800), 1);
  };

  const loop = createLoop(container, (dt, t) => {
    if (!reduced) {
      uniforms.uTime.value = t;
      const m = uniforms.uMouse.value;
      m.set(damp(m.x, tx, 3.5, dt), damp(m.y, ty, 3.5, dt));
    }
    renderer.render(scene, camera);
  });

  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();
  if (!reduced) window.addEventListener('pointermove', onPointer, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  const unwatch = watchTheme(() => {
    uniforms.uColor.value.setStyle(readPalette(container).ink);
    loop.renderOnce();
  });

  return () => {
    loop.dispose();
    ro.disconnect();
    unwatch();
    window.removeEventListener('pointermove', onPointer);
    window.removeEventListener('scroll', onScroll);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };
}
