---
title: 'New Template: Corcho, a Fishing Shop with a Scroll-Driven Casting Scene'
description: 'Corcho is a new complete e-commerce template for a fishing-tackle shop: a casting scene that plays as you scroll, product illustrations generated in SVG, real catalog filters, a species kit builder and a cart, plus an orders and wishlist area, all with its own components.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Corcho: a tackle shop with a casting scene that plays as you scroll, in nine pages

Corcho (`templates/fishing`) is a complete e-commerce template for a fishing-tackle shop. It has its own deep-teal and aqua visual language with a characterful grotesque (Bricolage Grotesque), no photography, no icon grids and no tag clouds: the generated product illustrations, the scroll animation and the species chart carry it. It is built only from its own dedicated components (`reusedComponents: []`).

---

### Corcho · Fishing Shop (`templates/fishing`)

- **Live preview**: [/preview/fishing/](/preview/fishing/) · **Template docs**: [/templates/fishing/](/templates/fishing/)
- **Public shop (6 pages)**: a home with a hero of slowly spreading ripples and a big typographic category list, then a pinned scene that plays like a short film as you scroll — the sky changes from first light to full day, the rod swings, the line flies in an arc and draws itself, the float lands, ripples spread and a fish takes the bait — followed by the most requested products and FAQ; the shop, with search, category filter, maximum-price slider, in-stock switch and sorting over product illustrations generated in SVG (rods, reels, lures, line, nets); the product page, whose option selectors change the price live; a kit builder by species, with a twelve-month bar chart of when each fish bites best, tips and recommended tackle that can be ticked and added to the cart in one click; the cart and checkout, with free-shipping progress, a promo code and a demo payment; and customer sign-in.
- **Customer area (3 pages)**: a home with the order on its way and its written timeline, the customer's figures and "what bites this month", computed from the species seasons; orders with items, tracking and returns within 30 days, which also list the orders paid in this browser; and a wish list with move-to-cart and remove actions.
- **Accessible by default**: native search, radio, range, checkbox and `<details>` controls, every figure a drawing shows is also written as text, live regions for every change, 44–48px targets, visible focus, text equivalents for every drawing and `prefers-reduced-motion` support (the casting scene shows its final frame). Dark and light variants.
- **Pages**: [Home](/preview/fishing/) · [Shop](/preview/fishing/tienda/) · [Product](/preview/fishing/producto/) · [Kit builder](/preview/fishing/equipo/) · [Cart](/preview/fishing/carrito/) · [Sign in](/preview/fishing/acceso/) · [Account home](/preview/fishing/cuenta/) · [Orders](/preview/fishing/cuenta/pedidos/) · [Wish list](/preview/fishing/cuenta/deseos/).
- **16 dedicated components**: [`FishHero`](/sections/fish-hero/), [`FishCast`](/sections/fish-cast/), [`FishShop`](/sections/fish-shop/), [`FishProduct`](/sections/fish-product/), [`FishKit`](/sections/fish-kit/), [`FishCart`](/sections/fish-cart/), [`FishFaq`](/sections/fish-faq/), [`FishFooter`](/sections/fish-footer/), [`FishArt`](/docs/fish-art/), [`FishAccountSummary`](/docs/fish-account-summary/), [`FishOrders`](/docs/fish-orders/), [`FishWishlist`](/docs/fish-wishlist/), [`FishAccountNav`](/docs/fish-account-nav/), [`FishAccountTopbar`](/docs/fish-account-topbar/), [`FishAccountHeading`](/docs/fish-account-heading/), and [`FishSignIn`](/docs/fish-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/fishing/" title="Corcho live preview (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/fishing/equipo/" title="Corcho live preview (kit builder)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
