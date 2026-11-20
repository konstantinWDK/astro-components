// src/components/lib/templates/construction/construction-draw.ts
// Procedural blueprint drawings for Strukto: a building elevation from floors × bays, with
// slabs, windows, parapet and dimension lines. Every stroke has pathLength="1" and a --k index,
// so components can "draw" it with stroke-dashoffset in sequence.

export interface Elevation {
  svg: string;
  width: number;
  height: number;
}

interface Opts {
  /** Storey height in metres (dimension text). Default 3.1. */
  storey?: number;
  /** Bay width in metres (dimension text). Default 4.2. */
  bay?: number;
  /** Draw dimension lines. Default true. */
  dims?: boolean;
  /** Draw a crane next to the building. Default false. */
  crane?: boolean;
}

const f = (n: number) => Number(n.toFixed(1));

export function elevation(floors: number, bays: number, opts: Opts = {}): Elevation {
  const { storey = 3.1, bay = 4.2, dims = true, crane = false } = opts;
  const fl = Math.max(1, Math.min(14, floors));
  const by = Math.max(2, Math.min(12, bays));
  const bw = 34;
  const fh = 30;
  const left = 40;
  const top = crane ? 70 : 30;
  const w = by * bw;
  const h = fl * fh;
  const ground = top + h;
  const width = left + w + (dims ? 70 : 30) + (crane ? 40 : 0);
  const height = ground + (dims ? 54 : 20);
  let k = 0;
  const p = (d: string, cls: string) => `<path d="${d}" class="${cls}" pathLength="1" style="--k:${k++}"/>`;
  const parts: string[] = [];

  parts.push(p(`M10 ${ground}H${width - 10}`, 'd-ground'));
  parts.push(p(`M${left} ${ground}V${top}H${left + w}V${ground}`, 'd-out'));
  parts.push(p(`M${left - 4} ${top}H${left + w + 4}M${left - 4} ${top - 6}H${left + w + 4}`, 'd-par'));
  for (let i = 1; i < fl; i++) parts.push(p(`M${left} ${top + i * fh}H${left + w}`, 'd-slab'));
  for (let r = 0; r < fl; r++) {
    for (let c = 0; c < by; c++) {
      const x = left + c * bw + 8;
      const y = top + r * fh + 7;
      const isDoor = r === fl - 1 && c === Math.floor(by / 2);
      parts.push(
        isDoor
          ? p(`M${x} ${ground}V${y}H${x + bw - 16}V${ground}`, 'd-win d-door')
          : `<rect x="${x}" y="${y}" width="${bw - 16}" height="${fh - 14}" class="d-win" pathLength="1" style="--k:${k++}" data-win="${r}-${c}"/>`,
      );
    }
  }
  if (crane) {
    const cx = left + w + 30;
    parts.push(p(`M${cx} ${ground}V${top - 50}M${cx - 6} ${ground}V${top - 50}`, 'd-crane'));
    parts.push(p(`M${cx - 70} ${top - 50}H${cx + 30}M${cx - 3} ${top - 50}L${cx - 3} ${top - 64}L${cx - 70} ${top - 50}M${cx - 3} ${top - 64}L${cx + 30} ${top - 50}`, 'd-crane'));
    parts.push(p(`M${cx - 52} ${top - 50}V${top - 10}`, 'd-cable'));
    parts.push(`<rect x="${cx - 60}" y="${top - 10}" width="16" height="9" class="d-load" style="--k:${k++}"/>`);
  }
  if (dims) {
    const dx = left + w + 22 + (crane ? 40 : 0);
    const hm = f(fl * storey).toLocaleString('es-ES');
    const wm = f(by * bay).toLocaleString('es-ES');
    parts.push(p(`M${dx} ${top}V${ground}M${dx - 5} ${top}H${dx + 5}M${dx - 5} ${ground}H${dx + 5}`, 'd-dim'));
    parts.push(`<text x="${dx + 9}" y="${f(top + h / 2)}" class="d-txt" transform="rotate(90 ${dx + 9} ${f(top + h / 2)})" text-anchor="middle">${hm} m</text>`);
    const dy = ground + 26;
    parts.push(p(`M${left} ${dy}H${left + w}M${left} ${dy - 5}V${dy + 5}M${left + w} ${dy - 5}V${dy + 5}`, 'd-dim'));
    parts.push(`<text x="${f(left + w / 2)}" y="${dy + 16}" class="d-txt" text-anchor="middle">${wm} m</text>`);
    parts.push(`<text x="${left}" y="${top - 12}" class="d-txt d-txt--s">+${hm}</text>`);
    parts.push(`<text x="${left}" y="${ground - 4}" class="d-txt d-txt--s" dx="-34">±0,00</text>`);
  }
  return { svg: parts.join(''), width, height };
}
