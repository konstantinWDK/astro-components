---
title: 'New Template: Lumbre, a Fire-Cooking Restaurant with Floor-Plan Booking'
description: 'Lumbre is a new complete template for a restaurant: an ember hero, a tasting menu told plate by plate with generated plates, a producer radar and table booking on a floor plan, plus a customer area with reservations, preferences and gift cards, all with its own components.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Lumbre: a restaurant you book by choosing your table, in eight pages

Lumbre (`templates/restaurant`) is a complete template for a restaurant. It has its own charcoal and ember visual language with a condensed display serif (Instrument Serif), no photography, no icon grids and no tag clouds: the drawn plates, the typography and the interactions carry it. It is built only from its own dedicated components (`reusedComponents: []`).

---

### Lumbre · Fire-cooking Restaurant (`templates/restaurant`)

- **Live preview**: [/preview/restaurant/](/preview/restaurant/) · **Template docs**: [/templates/restaurant/](/templates/restaurant/)
- **Public site (5 pages)**: a home with an enormous wordmark filled with an ember gradient and CSS sparks rising behind it, the tasting menu told plate by plate (pick a course and a plate generated in SVG redraws with its ingredients, pairing, temperature and kilometres travelled) and a producer radar; the menu, with the eight-course tasting menu and an à la carte list with dotted leaders and a diet filter; origin, with a radar that places every producer at its real distance and computes the average; booking, where you choose date, time and guests and then your table on a floor plan of the dining room, and tables that are taken, too small or on a closed day are disabled and say why; and customer sign-in.
- **Customer area (3 pages)**: a home with the next reservation as a huge date with a live countdown, the customer's figures and a rebook card; reservations in upcoming and past views with cancel (free until 24 h before) and change actions; and preferences with allergies, diet, preferred zone and celebrations, followed by gift cards with a copy-code button.
- **Accessible by default**: tables are real radio inputs inside labels (the booking works without the drawing), disabled tables carry the reason as text, native radio groups and `<details>` accordions, live regions for every change, 44–48px targets, visible focus, text equivalents for every drawing and `prefers-reduced-motion` support. Dark and light variants.
- **Pages**: [Home](/preview/restaurant/) · [Menu](/preview/restaurant/menu/) · [Origin](/preview/restaurant/origen/) · [Book](/preview/restaurant/reservar/) · [Sign in](/preview/restaurant/acceso/) · [Account home](/preview/restaurant/mesa/) · [Reservations](/preview/restaurant/mesa/reservas/) · [Preferences](/preview/restaurant/mesa/preferencias/).
- **16 dedicated components**: [`RestHero`](/sections/rest-hero/), [`RestTasting`](/sections/rest-tasting/), [`RestMenu`](/sections/rest-menu/), [`RestOrigin`](/sections/rest-origin/), [`RestBooking`](/sections/rest-booking/), [`RestFaq`](/sections/rest-faq/), [`RestFooter`](/sections/rest-footer/), [`RestPlate`](/docs/rest-plate/), [`RestAccountSummary`](/docs/rest-account-summary/), [`RestReservations`](/docs/rest-reservations/), [`RestPreferences`](/docs/rest-preferences/), [`RestGiftCards`](/docs/rest-gift-cards/), [`RestAccountNav`](/docs/rest-account-nav/), [`RestAccountTopbar`](/docs/rest-account-topbar/), [`RestAccountHeading`](/docs/rest-account-heading/), and [`RestSignIn`](/docs/rest-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/restaurant/" title="Lumbre live preview (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/restaurant/reservar/" title="Lumbre live preview (floor-plan booking)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
