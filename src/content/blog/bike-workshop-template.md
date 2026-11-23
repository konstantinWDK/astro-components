---
title: 'New Template: Biela, a Custom Bicycle Workshop with a Live Configurator'
description: 'Biela is a new multi-page template for a custom bicycle workshop: a live configurator with a bike drawn in SVG, price and delivery time, a gallery of finished builds, a size and fit calculator, the build queue by month and visit booking.'
date: '2026-11-23'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Biela: a bike you design on the page, in six pages and eleven components

Biela (`templates/bike-workshop`) is a template for a workshop that builds bicycles to measure. The centre of it is a **configurator**: you pick the type, the frame material, the transmission, the wheels, the colour and the extras, and a bike drawn in SVG from a real geometry changes in front of you while the price and the delivery time are recalculated. It has its own racing-green and jersey-yellow look, no icon grids and no tag clouds, and it is built only from its own components (`reusedComponents: []`). Everything is UI with demo data: nothing is sent or charged.

---

### Biela · Custom Bicycle Workshop (`templates/bike-workshop`)

- **Live preview**: [/preview/bike-workshop/](/preview/bike-workshop/) · **Template docs**: [/templates/bike-workshop/](/templates/bike-workshop/)
- **Configurator**: four bike types with their own geometry (gravel, road, city, track), three frame materials with different tube thickness, transmissions that filter themselves by type, wheels, ten colours and four extras (mudguards, rack, dynamo light, leather). The price and the delivery time are written in a live region, a native dialog reserves a place with a demo build code and the whole build travels in the URL.
- **Builds**: nine finished bikes, each with who it was built for, its spec as a definition list and a "start from this bike" link; filter by type and sort by price or date.
- **The workshop**: six stages as exclusive details, a table comparing frame materials that turns into labelled cards on phones, and the build queue by month with a waiting list when a month is full.
- **Size and fit**: height, inseam, flexibility and bike type give a frame size, saddle height, stem, handlebar width, cranks and drop; sliders are paired with number inputs and the size can be sent to the configurator.
- **Visit**: the next open days (Tuesday to Saturday) are generated in the browser, with time slots, some already taken, and Saturday mornings only. The footer says whether the workshop is open right now.
- **Scroll and colour**: the wheels of the hero bike turn with the scroll (not with reduced motion) and its frame can be repainted by choosing a colour.
- **Accessible by default**: native radios, checkboxes, dialogs, popovers and `<details>`; every choice is written in words, never only as a colour; 44px targets, visible focus and light and dark themes.
- **Pages**: [Home](/preview/bike-workshop/) · [Configurator](/preview/bike-workshop/configurador/) · [Builds](/preview/bike-workshop/bicis/) · [Workshop](/preview/bike-workshop/taller/) · [Size](/preview/bike-workshop/talla/) · [Visit](/preview/bike-workshop/visita/).
- **11 dedicated components**: [`BielaBike`](/docs/biela-bike/), [`BielaConfigurator`](/docs/biela-configurator/), [`BielaBuilds`](/docs/biela-builds/), [`BielaFit`](/docs/biela-fit/), [`BielaSlots`](/docs/biela-slots/), [`BielaVisit`](/docs/biela-visit/), [`BielaHero`](/docs/biela-hero/), [`BielaProcess`](/docs/biela-process/), [`BielaMaterials`](/docs/biela-materials/), [`BielaHeader`](/docs/biela-header/), [`BielaFooter`](/docs/biela-footer/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0c1511;">
  <iframe src="/preview/bike-workshop/" title="Biela live preview (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0c1511;">
  <iframe src="/preview/bike-workshop/configurador/" title="Biela live preview (configurator)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
