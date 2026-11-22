---
title: 'New Template: Telón, a Theatre-Ticket Shop with Scroll Curtains and Seat Picking'
description: 'Telón is a new complete e-commerce template for selling theatre tickets: curtains that part as you scroll, generated posters, an interactive seat map, a cart with a ten-minute hold and a ticket wallet, all with its own components.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Telón: a ticket shop where the curtain rises as you scroll, in eight pages

Telón (`templates/theater`) is a complete e-commerce template for a theatre-ticket shop. It has its own dark-wine and curtain-red visual language with a classic display serif (Playfair Display), no photography, no icon grids and no tag clouds: the generated posters, the scroll animation and the seat map carry it. It is built only from its own dedicated components (`reusedComponents: []`).

---

### Telón · Theatre Tickets (`templates/theater`)

- **Live preview**: [/preview/theater/](/preview/theater/) · **Template docs**: [/templates/theater/](/templates/theater/)
- **Public shop (5 pages)**: a home whose hero is a stage with two velvet curtains that part as you scroll (the animation is driven by scroll progress and a spotlight follows the pointer), a title marquee, this week's billboard and FAQ; the billboard, with search, genre filter and sorting over posters generated in SVG from each show's palette and seed; the show page, with sessions and an interactive hall plan where taken seats are disabled, prices vary by zone, up to six seats can be picked and a "best seats together" button chooses a row for the party; the cart and checkout, with a ten-minute hold that releases the seats at zero, a promo code, live totals and a demo payment; and customer sign-in.
- **Customer area (3 pages)**: a home with the next performance as a huge date with a live countdown beside its poster, and suggestions; a ticket wallet with classic perforated tickets whose code opens full screen in a native dialog to be scanned at the door; and orders with change and return actions, which also list the orders paid in this browser.
- **Accessible by default**: every seat is a native checkbox inside a label with row, number, zone, price and state as text; the plan scrolls in a focusable region, and "best seats together" gives a keyboard alternative; live regions for every change, 44–48px targets, visible focus, text equivalents for every drawing and `prefers-reduced-motion` support (the curtains are already open). Dark and light variants.
- **Pages**: [Home](/preview/theater/) · [Billboard](/preview/theater/cartelera/) · [Show & seats](/preview/theater/espectaculo/) · [Cart](/preview/theater/carrito/) · [Sign in](/preview/theater/acceso/) · [Account home](/preview/theater/cuenta/) · [Tickets](/preview/theater/cuenta/entradas/) · [Orders](/preview/theater/cuenta/pedidos/).
- **16 dedicated components**: [`TheaHero`](/sections/thea-hero/), [`TheaMarquee`](/sections/thea-marquee/), [`TheaShows`](/sections/thea-shows/), [`TheaShowDetail`](/sections/thea-show-detail/), [`TheaCart`](/sections/thea-cart/), [`TheaFaq`](/sections/thea-faq/), [`TheaFooter`](/sections/thea-footer/), [`TheaPoster`](/docs/thea-poster/), [`TheaSeatMap`](/docs/thea-seat-map/), [`TheaTickets`](/docs/thea-tickets/), [`TheaAccountSummary`](/docs/thea-account-summary/), [`TheaOrders`](/docs/thea-orders/), [`TheaAccountNav`](/docs/thea-account-nav/), [`TheaAccountTopbar`](/docs/thea-account-topbar/), [`TheaAccountHeading`](/docs/thea-account-heading/), and [`TheaSignIn`](/docs/thea-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/theater/" title="Telón live preview (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/theater/espectaculo/" title="Telón live preview (seat map)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
