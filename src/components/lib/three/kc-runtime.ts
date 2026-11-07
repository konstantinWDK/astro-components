// src/components/lib/three/kc-runtime.ts
// Shared runtime for the "Keycap" 3D scenes (Dev* portfolio sections): theme palette read from
// CSS custom properties, a visibility-aware render loop and frame-rate independent damping.
// Framework agnostic — used by the Astro sections and the React port alike.

export interface KcPalette {
  /** Lines, text and filled keys (black in light mode). */
  ink: string;
  /** Key bodies and backgrounds (white in light mode). */
  paper: string;
  /** Secondary text. */
  muted: string;
  /** Darkest contribution level. */
  level: string;
}

const read = (cs: CSSStyleDeclaration, name: string) => cs.getPropertyValue(name).trim();

/** Reads the palette from `--kc-*` tokens, falling back to the library `--c-*` tokens. */
export function readPalette(el: HTMLElement): KcPalette {
  const cs = getComputedStyle(el);
  const ink = read(cs, '--kc-ink') || read(cs, '--c-text-1') || '#000000';
  const paper = read(cs, '--kc-paper') || read(cs, '--c-bg') || '#ffffff';
  return {
    ink,
    paper,
    muted: read(cs, '--kc-muted') || read(cs, '--c-text-3') || '#777777',
    level: read(cs, '--kc-level') || ink,
  };
}

/** Calls `cb` when the page theme changes (data-theme / class on <html> or the OS preference). */
export function watchTheme(cb: () => void): () => void {
  const mo = new MutationObserver(() => cb());
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener('change', cb);
  return () => {
    mo.disconnect();
    mq.removeEventListener('change', cb);
  };
}

export const damp = (current: number, target: number, lambda: number, dt: number) =>
  current + (target - current) * (1 - Math.exp(-lambda * dt));

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export interface KcLoop {
  /** Seconds since the loop first ran (only advances while visible). */
  readonly elapsed: number;
  /** Render a single frame even when paused (e.g. after a theme change). */
  renderOnce: () => void;
  dispose: () => void;
}

/**
 * Runs `frame(dt, elapsed)` on requestAnimationFrame only while `el` is on screen and the tab is
 * visible. `onFirstVisible` fires once, the first time the element scrolls into view.
 */
export function createLoop(
  el: HTMLElement,
  frame: (dt: number, elapsed: number) => void,
  onFirstVisible?: () => void,
): KcLoop {
  let raf = 0;
  let last = 0;
  let elapsed = 0;
  let visible = false;
  let seen = false;
  let disposed = false;

  const tick = (now: number) => {
    raf = requestAnimationFrame(tick);
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    elapsed += dt;
    frame(dt, elapsed);
  };
  const start = () => {
    if (disposed || raf || !visible || document.hidden) return;
    last = performance.now();
    raf = requestAnimationFrame(tick);
  };
  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  const io = new IntersectionObserver(
    (entries) => {
      visible = entries[0].isIntersecting;
      if (visible && !seen) {
        seen = true;
        onFirstVisible?.();
      }
      if (visible) start();
      else stop();
    },
    { rootMargin: '120px 0px' },
  );
  io.observe(el);
  const onVis = () => (document.hidden ? stop() : start());
  document.addEventListener('visibilitychange', onVis);

  return {
    get elapsed() {
      return elapsed;
    },
    renderOnce: () => frame(0, elapsed),
    dispose: () => {
      disposed = true;
      stop();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    },
  };
}

/** Disposes every geometry, material and texture under `root`. */
export function disposeTree(root: { traverse: (cb: (o: any) => void) => void }) {
  root.traverse((o: any) => {
    o.geometry?.dispose?.();
    const mats = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
    mats.forEach((m: any) => {
      m.map?.dispose?.();
      m.dispose?.();
    });
  });
}
