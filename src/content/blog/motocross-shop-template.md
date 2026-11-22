---
title: 'New Template: Barro, a Motocross Shop with a Scroll-Driven Jump Scene'
description: 'Barro is a new complete e-commerce template for a motocross shop: a bike that rides and jumps as you scroll, bikes and gear illustrated in SVG, real catalog filters, a bike comparison, a financing simulator and a garage with maintenance tracking, all with its own components.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Barro: a motocross shop whose bike jumps as you scroll, in nine pages

Barro (`templates/motocross`) is a complete e-commerce template for a motocross shop. It has its own asphalt-black and hot-orange visual language with an impact condensed type (Barlow Condensed), no photography, no icon grids and no tag clouds: the generated bike illustrations, the scroll animation and the comparison bars carry it. It is built only from its own dedicated components (`reusedComponents: []`).

---

### Barro · Motocross Shop (`templates/motocross`)

- **Live preview**: [/preview/motocross/](/preview/motocross/) · **Template docs**: [/templates/motocross/](/templates/motocross/)
- **Public shop (6 pages)**: a home with a hero of fast diagonal speed stripes and a big typographic category list, then a pinned scene that plays like a short film as you scroll — a bike rides along a dirt track at sunset, mountains slide past at two speeds, the wheels spin, a ramp arrives and the bike jumps, tilts in the air and lands in dust — followed by the most requested products and FAQ; the shop, with search, category filter, maximum-price slider, in-stock switch and sorting over bikes, helmets, boots, gloves, jerseys and parts illustrated in SVG; the product page, whose option selectors (colour, size, workshop pack) change the price live; "your bike", with a comparison of up to three bikes (bars scaled to the best value, the winner of each row written out), a financing simulator with a principal-versus-interest chart per year, and a gear size guide that recommends a size from your measurements; the cart and checkout, with free-shipping progress, a promo code and a demo payment; and rider sign-in.
- **Customer area (3 pages)**: a home with the order on its way and its written timeline, plus "your garage": for each bike, the engine hours and every maintenance item as a bar of hours since the last service against its interval, with a word status (up to date, soon, due now) — log two hours of track time and the bars move; orders with items, tracking and returns within 30 days, which also list the orders paid in this browser; and a wish list.
- **Accessible by default**: native search, radio, range, checkbox and `<details>` controls, a real comparison `<table>` with row and column headers, every figure a drawing shows is also written as text, statuses are words (never only colour), live regions for every change, 44–48px targets, visible focus and `prefers-reduced-motion` support (the ride scene shows a still frame mid-jump). Dark and light variants.
- **Pages**: [Home](/preview/motocross/) · [Shop](/preview/motocross/tienda/) · [Product](/preview/motocross/producto/) · [Your bike](/preview/motocross/tu-moto/) · [Cart](/preview/motocross/carrito/) · [Sign in](/preview/motocross/acceso/) · [Account home](/preview/motocross/cuenta/) · [Orders](/preview/motocross/cuenta/pedidos/) · [Wish list](/preview/motocross/cuenta/deseos/).
- **18 dedicated components**: [`MotoHero`](/sections/moto-hero/), [`MotoRide`](/sections/moto-ride/), [`MotoShop`](/sections/moto-shop/), [`MotoProduct`](/sections/moto-product/), [`MotoCompare`](/sections/moto-compare/), [`MotoFinance`](/sections/moto-finance/), [`MotoSizeGuide`](/sections/moto-size-guide/), [`MotoCart`](/sections/moto-cart/), [`MotoFaq`](/sections/moto-faq/), [`MotoFooter`](/sections/moto-footer/), [`MotoArt`](/docs/moto-art/), [`MotoAccountSummary`](/docs/moto-account-summary/), [`MotoOrders`](/docs/moto-orders/), [`MotoWishlist`](/docs/moto-wishlist/), [`MotoAccountNav`](/docs/moto-account-nav/), [`MotoAccountTopbar`](/docs/moto-account-topbar/), [`MotoAccountHeading`](/docs/moto-account-heading/), and [`MotoSignIn`](/docs/moto-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/motocross/" title="Barro live preview (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/motocross/tu-moto/" title="Barro live preview (comparison and financing)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
