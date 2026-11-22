---
title: 'New Template: Umbra, a Niche Perfumery with a Customer Area'
description: 'Umbra is a new complete template for a niche perfume house: an evolution-on-skin slider, an olfactory map, a scent profile quiz and a discovery-set builder, plus a customer area with a shelf of bottles drawn at their real level, a layering lab and orders, all with its own components.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Umbra: a perfumery you can read with your eyes, in eight pages

Umbra (`templates/perfumery`) is a complete template for a niche perfume house. It has its own ink-violet and iris visual language with a high-contrast display serif (Bodoni Moda), no icon grids and no tag clouds: the generated flacons, the typography and the interactions carry it. It is built only from its own dedicated components (`reusedComponents: []`).

---

### Umbra · Niche Perfumery (`templates/perfumery`)

- **Live preview**: [/preview/perfumery/](/preview/perfumery/) · **Template docs**: [/templates/perfumery/](/templates/perfumery/)
- **Public site (5 pages)**: a home whose hero has slow clouds of colour taken from the fragrance accord that follow the pointer, a first rail of fragrances, an "evolution on skin" slider where top, heart and base notes rise and fade over a layered curve, and the first raw materials; the six fragrances with sizes, prices and an olfactory map placing each one between fresh and warm, light and dense; the atelier, with kilos of matter needed per kilo of essence as huge outlined numerals; discovery, with a four-question profile test and a 2 ml discovery-set builder with a live total; and customer sign-in.
- **Customer area (3 pages)**: a home with the order in progress and its written timeline, the customer's figures and a reminder of the bottle that is running out; a shelf where every flacon is drawn at its real liquid level and empties on screen as you move a slider, followed by a layering lab that blends two fragrances at any ratio and saves mixes; and orders with timeline, carrier, tracking and cancel or change-address actions.
- **Accessible by default**: native radio groups, range inputs and `<details>` accordions, the state of every note written as text (not only opacity), live regions for every change, 44–48px targets, visible focus, text equivalents for every drawing and `prefers-reduced-motion` support. Dark and light variants.
- **Pages**: [Home](/preview/perfumery/) · [Fragrances](/preview/perfumery/fragancias/) · [Atelier](/preview/perfumery/atelier/) · [Discover](/preview/perfumery/descubrir/) · [Sign in](/preview/perfumery/acceso/) · [Resumen](/preview/perfumery/cuenta/) · [Shelf](/preview/perfumery/cuenta/estanteria/) · [Orders](/preview/perfumery/cuenta/pedidos/).
- **18 dedicated components**: [`PerfHero`](/sections/perf-hero/), [`PerfSkin`](/sections/perf-skin/), [`PerfCollection`](/sections/perf-collection/), [`PerfMap`](/sections/perf-map/), [`PerfAtelier`](/sections/perf-atelier/), [`PerfQuiz`](/sections/perf-quiz/), [`PerfDiscovery`](/sections/perf-discovery/), [`PerfFaq`](/sections/perf-faq/), [`PerfFooter`](/sections/perf-footer/), [`PerfBottle`](/docs/perf-bottle/), [`PerfAccountSummary`](/docs/perf-account-summary/), [`PerfShelf`](/docs/perf-shelf/), [`PerfLayering`](/docs/perf-layering/), [`PerfOrderTracker`](/docs/perf-order-tracker/), [`PerfAccountNav`](/docs/perf-account-nav/), [`PerfAccountTopbar`](/docs/perf-account-topbar/), [`PerfAccountHeading`](/docs/perf-account-heading/), and [`PerfSignIn`](/docs/perf-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/perfumery/" title="Umbra live preview (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/perfumery/cuenta/estanteria/" title="Umbra live preview (customer shelf)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
