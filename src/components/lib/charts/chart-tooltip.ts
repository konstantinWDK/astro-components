// src/components/lib/charts/chart-tooltip.ts
// Tiny, dependency-free tooltip controller shared by every SVG chart.
// Any element inside a `[data-chart]` root that carries `data-tip` becomes a
// hover/focus target. Lines in `data-tip` are separated by "|"; an optional
// `data-tip-title` renders as the bold heading.

function show(root: HTMLElement, tip: HTMLElement, target: Element, clientX?: number, clientY?: number) {
  const title = target.getAttribute('data-tip-title') || '';
  const body = (target.getAttribute('data-tip') || '').split('|').filter(Boolean);
  tip.replaceChildren();
  if (title) {
    const h = document.createElement('strong');
    h.textContent = title;
    tip.appendChild(h);
  }
  body.forEach((line) => {
    const row = document.createElement('span');
    const [swatch, text] = line.includes('::') ? line.split('::') : ['', line];
    if (swatch) {
      const dot = document.createElement('i');
      dot.style.background = swatch;
      row.appendChild(dot);
    }
    row.appendChild(document.createTextNode(text));
    tip.appendChild(row);
  });

  const box = root.getBoundingClientRect();
  let x: number;
  let y: number;
  if (clientX !== undefined && clientY !== undefined) {
    x = clientX - box.left;
    y = clientY - box.top;
  } else {
    const r = target.getBoundingClientRect();
    x = r.left + r.width / 2 - box.left;
    y = r.top - box.top;
  }
  tip.style.opacity = '1';
  const tw = tip.offsetWidth;
  const th = tip.offsetHeight;
  const left = Math.min(Math.max(8, x + 14), box.width - tw - 8);
  const top = y - th - 12 < 4 ? y + 18 : y - th - 12;
  tip.style.transform = `translate(${left}px, ${top}px)`;
}

function hide(tip: HTMLElement) {
  tip.style.opacity = '0';
}

export function initChartTooltips() {
  document.querySelectorAll<HTMLElement>('[data-chart]:not([data-chart-ready])').forEach((root) => {
    root.setAttribute('data-chart-ready', '');
    const tip = root.querySelector<HTMLElement>('[data-chart-tip]');
    if (!tip) return;

    root.addEventListener('pointermove', (e) => {
      const target = (e.target as Element).closest('[data-tip]');
      if (target && root.contains(target)) show(root, tip, target, e.clientX, e.clientY);
      else hide(tip);
    });
    root.addEventListener('pointerleave', () => hide(tip));
    root.addEventListener('focusin', (e) => {
      const target = (e.target as Element).closest('[data-tip]');
      if (target) show(root, tip, target);
    });
    root.addEventListener('focusout', () => hide(tip));
    root.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') hide(tip);
    });
  });
}

initChartTooltips();
document.addEventListener('astro:page-load', initChartTooltips);
