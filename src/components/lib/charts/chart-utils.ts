// src/components/lib/charts/chart-utils.ts
// Shared, dependency-free math helpers for the SVG chart components.
// Everything here runs at build time (server-side) — no client JS needed.

/** Fixed-order categorical palette (CSS tokens with hex fallbacks). Never cycled past 8. */
export const CHART_COLORS = [
  'var(--chart-1, #3987e5)',
  'var(--chart-2, #d95926)',
  'var(--chart-3, #199e70)',
  'var(--chart-4, #c98500)',
  'var(--chart-5, #d55181)',
  'var(--chart-6, #2f9e2f)',
  'var(--chart-7, #9085e9)',
  'var(--chart-8, #e66767)',
];

export const POSITIVE = 'var(--chart-pos, #34c38f)';
export const NEGATIVE = 'var(--chart-neg, #f06a6a)';

/** Returns the color for a series index, honouring user overrides. */
export function colorAt(i: number, overrides?: string[]): string {
  if (overrides && overrides[i]) return overrides[i];
  return CHART_COLORS[Math.min(i, CHART_COLORS.length - 1)];
}

/** Linear scale factory: maps a domain [d0, d1] onto a range [r0, r1]. */
export function scaleLinear(d0: number, d1: number, r0: number, r1: number) {
  const span = d1 - d0 || 1;
  return (v: number) => r0 + ((v - d0) / span) * (r1 - r0);
}

/** Rounds a raw step to a "nice" 1/2/2.5/5/10 × 10^n value. */
function niceStep(raw: number): number {
  const exp = Math.floor(Math.log10(Math.abs(raw) || 1));
  const f = raw / 10 ** exp;
  const nf = f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10;
  return nf * 10 ** exp;
}

/** Produces nice, evenly spaced axis ticks covering [min, max]. */
export function niceTicks(min: number, max: number, count = 5): number[] {
  if (min === max) {
    max = min + 1;
  }
  const step = niceStep((max - min) / Math.max(1, count));
  const start = Math.floor(min / step) * step;
  const end = Math.ceil(max / step) * step;
  const ticks: number[] = [];
  for (let v = start; v <= end + step / 2; v += step) {
    ticks.push(Number(v.toFixed(10)));
  }
  return ticks;
}

/** Compact number formatter: 1200 → 1.2k, 3400000 → 3.4M. */
export function formatCompact(v: number, decimals = 1): string {
  const abs = Math.abs(v);
  if (abs >= 1e9) return `${(v / 1e9).toFixed(decimals).replace(/\.0+$/, '')}B`;
  if (abs >= 1e6) return `${(v / 1e6).toFixed(decimals).replace(/\.0+$/, '')}M`;
  if (abs >= 1e3) return `${(v / 1e3).toFixed(decimals).replace(/\.0+$/, '')}k`;
  return `${Number(v.toFixed(2))}`;
}

/** Formats a value with an optional prefix/suffix (e.g. '$', '%'). */
export function formatValue(v: number, prefix = '', suffix = '', compact = true): string {
  const body = compact ? formatCompact(v) : v.toLocaleString('en-US');
  return `${prefix}${body}${suffix}`;
}

export type Point = [number, number];

/** Straight polyline path. */
export function linePath(points: Point[]): string {
  return points.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(2)},${y.toFixed(2)}`).join(' ');
}

/** Step path (horizontal then vertical). */
export function stepPath(points: Point[]): string {
  if (!points.length) return '';
  let d = `M${points[0][0].toFixed(2)},${points[0][1].toFixed(2)}`;
  for (let i = 1; i < points.length; i++) {
    const [x, y] = points[i];
    d += ` H${x.toFixed(2)} V${y.toFixed(2)}`;
  }
  return d;
}

/** Monotone cubic interpolation — smooth curve that never overshoots the data. */
export function smoothPath(points: Point[]): string {
  const n = points.length;
  if (n < 3) return linePath(points);
  const dx: number[] = [];
  const slope: number[] = [];
  for (let i = 0; i < n - 1; i++) {
    dx[i] = points[i + 1][0] - points[i][0];
    slope[i] = (points[i + 1][1] - points[i][1]) / (dx[i] || 1);
  }
  const m: number[] = [slope[0]];
  for (let i = 1; i < n - 1; i++) {
    m[i] = slope[i - 1] * slope[i] <= 0 ? 0 : (slope[i - 1] + slope[i]) / 2;
  }
  m[n - 1] = slope[n - 2];
  for (let i = 0; i < n - 1; i++) {
    if (slope[i] === 0) {
      m[i] = 0;
      m[i + 1] = 0;
      continue;
    }
    const a = m[i] / slope[i];
    const b = m[i + 1] / slope[i];
    const h = a * a + b * b;
    if (h > 9) {
      const t = 3 / Math.sqrt(h);
      m[i] = t * a * slope[i];
      m[i + 1] = t * b * slope[i];
    }
  }
  let d = `M${points[0][0].toFixed(2)},${points[0][1].toFixed(2)}`;
  for (let i = 0; i < n - 1; i++) {
    const [x0, y0] = points[i];
    const [x1, y1] = points[i + 1];
    const h = dx[i] / 3;
    d += ` C${(x0 + h).toFixed(2)},${(y0 + m[i] * h).toFixed(2)} ${(x1 - h).toFixed(2)},${(y1 - m[i + 1] * h).toFixed(2)} ${x1.toFixed(2)},${y1.toFixed(2)}`;
  }
  return d;
}

/** Picks the path builder for a curve type. */
export function curvePath(points: Point[], curve: 'linear' | 'smooth' | 'step' = 'smooth'): string {
  if (curve === 'step') return stepPath(points);
  if (curve === 'linear') return linePath(points);
  return smoothPath(points);
}

/** Closes a line path down to a baseline to form an area. */
export function areaPath(points: Point[], baseline: number, curve: 'linear' | 'smooth' | 'step' = 'smooth'): string {
  if (!points.length) return '';
  const top = curvePath(points, curve);
  const last = points[points.length - 1];
  const first = points[0];
  return `${top} L${last[0].toFixed(2)},${baseline.toFixed(2)} L${first[0].toFixed(2)},${baseline.toFixed(2)} Z`;
}

/** Area between an upper and lower line (for bands / stacked areas). */
export function bandPath(upper: Point[], lower: Point[], curve: 'linear' | 'smooth' | 'step' = 'smooth'): string {
  if (!upper.length) return '';
  const top = curvePath(upper, curve);
  const reversed = [...lower].reverse();
  const bottom = curvePath(reversed, curve).replace(/^M/, 'L');
  return `${top} ${bottom} Z`;
}

/** Polar → cartesian, with 0 rad at 12 o'clock and clockwise rotation. */
export function polar(cx: number, cy: number, r: number, angle: number): Point {
  return [cx + r * Math.sin(angle), cy - r * Math.cos(angle)];
}

/** Annular sector path (donut slice). Angles in radians, 0 at 12 o'clock. */
export function arcPath(cx: number, cy: number, rOuter: number, rInner: number, a0: number, a1: number): string {
  const sweep = a1 - a0;
  if (sweep >= Math.PI * 2 - 1e-6) {
    // Full ring: draw two halves to avoid a degenerate arc.
    const mid = a0 + Math.PI;
    return `${arcPath(cx, cy, rOuter, rInner, a0, mid)} ${arcPath(cx, cy, rOuter, rInner, mid, a0 + Math.PI * 2)}`;
  }
  const large = sweep > Math.PI ? 1 : 0;
  const [x0, y0] = polar(cx, cy, rOuter, a0);
  const [x1, y1] = polar(cx, cy, rOuter, a1);
  if (rInner <= 0) {
    return `M${cx},${cy} L${x0.toFixed(2)},${y0.toFixed(2)} A${rOuter},${rOuter} 0 ${large} 1 ${x1.toFixed(2)},${y1.toFixed(2)} Z`;
  }
  const [x2, y2] = polar(cx, cy, rInner, a1);
  const [x3, y3] = polar(cx, cy, rInner, a0);
  return [
    `M${x0.toFixed(2)},${y0.toFixed(2)}`,
    `A${rOuter},${rOuter} 0 ${large} 1 ${x1.toFixed(2)},${y1.toFixed(2)}`,
    `L${x2.toFixed(2)},${y2.toFixed(2)}`,
    `A${rInner},${rInner} 0 ${large} 0 ${x3.toFixed(2)},${y3.toFixed(2)}`,
    'Z',
  ].join(' ');
}

/** Open arc stroke path (for gauges / rings). */
export function arcStroke(cx: number, cy: number, r: number, a0: number, a1: number): string {
  const sweep = Math.min(a1 - a0, Math.PI * 2 - 1e-4);
  const large = sweep > Math.PI ? 1 : 0;
  const [x0, y0] = polar(cx, cy, r, a0);
  const [x1, y1] = polar(cx, cy, r, a0 + sweep);
  return `M${x0.toFixed(2)},${y0.toFixed(2)} A${r},${r} 0 ${large} 1 ${x1.toFixed(2)},${y1.toFixed(2)}`;
}

/** Sum helper. */
export function sum(values: number[]): number {
  return values.reduce((a, b) => a + (Number.isFinite(b) ? b : 0), 0);
}

/** Quantile on a sorted array (linear interpolation). */
export function quantile(sorted: number[], q: number): number {
  if (!sorted.length) return 0;
  const pos = (sorted.length - 1) * q;
  const lo = Math.floor(pos);
  const hi = Math.ceil(pos);
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (pos - lo);
}

/** Unique, stable id for SVG gradients/clip paths so multiple charts can coexist. */
let uid = 0;
export function chartId(prefix = 'chart'): string {
  uid += 1;
  return `${prefix}-${uid}-${Math.random().toString(36).slice(2, 7)}`;
}

export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** Squarified treemap layout (Bruls et al.) for a list of positive values. */
export function squarify(values: number[], box: Rect): Rect[] {
  const total = sum(values);
  if (!total) return values.map(() => ({ x: box.x, y: box.y, w: 0, h: 0 }));
  const area = box.w * box.h;
  const items = values.map((v, i) => ({ i, a: (v / total) * area })).sort((a, b) => b.a - a.a);
  const out: Rect[] = new Array(values.length);
  let rect = { ...box };
  let row: typeof items = [];

  const worst = (r: typeof items, side: number) => {
    const s = r.reduce((acc, it) => acc + it.a, 0);
    const max = Math.max(...r.map((it) => it.a));
    const min = Math.min(...r.map((it) => it.a));
    return Math.max((side * side * max) / (s * s), (s * s) / (side * side * min));
  };

  const layoutRow = (r: typeof items) => {
    const s = r.reduce((acc, it) => acc + it.a, 0);
    if (rect.w >= rect.h) {
      const w = s / rect.h;
      let y = rect.y;
      r.forEach((it) => {
        const h = it.a / w;
        out[it.i] = { x: rect.x, y, w, h };
        y += h;
      });
      rect = { x: rect.x + w, y: rect.y, w: rect.w - w, h: rect.h };
    } else {
      const h = s / rect.w;
      let x = rect.x;
      r.forEach((it) => {
        const w = it.a / h;
        out[it.i] = { x, y: rect.y, w, h };
        x += w;
      });
      rect = { x: rect.x, y: rect.y + h, w: rect.w, h: rect.h - h };
    }
  };

  for (const it of items) {
    const side = Math.min(rect.w, rect.h);
    if (!row.length || worst([...row, it], side) <= worst(row, side)) {
      row.push(it);
    } else {
      layoutRow(row);
      row = [it];
    }
  }
  if (row.length) layoutRow(row);
  return out;
}
