---
title: 'New Template: Solera, a Winery with a Wine-Club Members Area'
description: 'Solera is a new complete template for a winery: a tilting-bottle hero, a pinned scroll scene that changes a drawn vineyard through the year, an interactive plot map, visit booking and a wine-club configurator, plus a members area with cellar, tasting notebook, shipments and plan, all with its own components.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Solera: a winery that is read like a magazine, in nine pages

Solera (`templates/winery`) is a complete template for a winery or artisan producer with a subscription club. It has its own cellar-dark, aged-gold and deep-red visual language with an optical serif (Fraunces), no icon grids and no tag clouds: the drawings, the typography and the interactions carry it. It is built only from its own dedicated components (`reusedComponents: []`).

---

### Solera · Winery & Wine Club (`templates/winery`)

- **Live preview**: [/preview/winery/](/preview/winery/) · **Template docs**: [/templates/winery/](/templates/winery/)
- **Public site (6 pages)**: a home with a hero where a generated bottle tilts with the pointer over topographic contour lines, a first look at the wines, a pinned scroll scene in which the sky, hills, leaves and grapes of a drawn vineyard change continuously through pruning, budding, véraison, harvest and ageing, and press scores as huge numerals; the full wine list as an editorial index with type filter, tasting notes, a 1–5 profile and a drinking-window bar; the estate with a family timeline and an interactive plot map; visit booking with a live total; a wine-club configurator that redraws the crate bottle by bottle and recalculates the price; and members sign-in.
- **Members area (3 pages)**: a home with the next box and a live countdown, the member's figures and a suggestion of what to open this month; a personal cellar with drinking windows, 1–5 ratings and an "open one" button, followed by a tasting notebook with sliders for body, acidity, tannin and oak; and shipments with timeline, postpone, skip and change-address actions plus plan management with a pause switch.
- **Accessible by default**: a scroll scene that degrades to a plain list without JavaScript, native `<details>` accordions, real radio groups, `role="switch"`, live regions for every change, 44–48px targets, visible focus, text equivalents for every drawing and `prefers-reduced-motion` support. Dark and light variants.
- **Pages**: [Home](/preview/winery/) · [Wines](/preview/winery/vinos/) · [Estate](/preview/winery/finca/) · [Visits](/preview/winery/visitas/) · [Club](/preview/winery/club/) · [Sign in](/preview/winery/acceso/) · [Members home](/preview/winery/socios/) · [Cellar](/preview/winery/socios/bodega/) · [Shipments](/preview/winery/socios/envios/).
- **20 dedicated components**: [`WineHero`](/sections/wine-hero/), [`WineVintageScene`](/sections/wine-vintage-scene/), [`WineCollection`](/sections/wine-collection/), [`WineTerroir`](/sections/wine-terroir/), [`WineStory`](/sections/wine-story/), [`WineVisits`](/sections/wine-visits/), [`WineClub`](/sections/wine-club/), [`WineAwards`](/sections/wine-awards/), [`WineFaq`](/sections/wine-faq/), [`WineFooter`](/sections/wine-footer/), [`WineBottleLabel`](/docs/wine-bottle-label/), [`WineMemberSummary`](/docs/wine-member-summary/), [`WineShipmentTracker`](/docs/wine-shipment-tracker/), [`WineCellar`](/docs/wine-cellar/), [`WineTastingNotebook`](/docs/wine-tasting-notebook/), [`WinePlanManager`](/docs/wine-plan-manager/), [`WineMemberNav`](/docs/wine-member-nav/), [`WineMemberTopbar`](/docs/wine-member-topbar/), [`WineMemberHeading`](/docs/wine-member-heading/), and [`WineSignIn`](/docs/wine-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/winery/" title="Solera live preview (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/winery/socios/bodega/" title="Solera live preview (members area)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
