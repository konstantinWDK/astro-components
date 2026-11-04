---
title: 'v0.4.1: Production Multi-Page Templates, E-Commerce Suite, SaaS App & Light Theme'
description: 'Full-page interactive templates for Astro: complete e-commerce stores, SaaS dashboard apps, a dedicated e-commerce component suite, light theme support, and astro-component-kit 0.4.1 on npm.'
date: '2026-11-04'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Building full apps and stores in Astro

**astro-component-kit 0.4.1** is here, and it marks our transition from a collection of individual UI components into a **complete template and application system for Astro**.

Until now, you had buttons, cards, forms, charts and sections. With v0.4.1, you get **complete, production-ready multi-page templates** with shared state, client routing compatibility, live data filtering, persistent shopping carts, and real business workflows — all with **zero runtime dependencies**, dark/light theme support, and full WCAG AA accessibility.

---

## 3 Complete Production Templates

Every template is available in the new **[Templates Catalog](/templates/)** with full live interactive previews in English, Spanish and Russian:

### 🛒 [E-Commerce Store (Nova Store)](/templates/ecommerce/)
A complete five-page digital storefront:
- **Pages included:** Home, Catalogue, Product Detail Page (PDP), Cart, and Checkout.
- **Persistent Cart:** Fully reactive shopping cart (`cart-store.ts`) that persists across reloads and syncs across browser tabs without any external framework.
- **Instant Filtering:** Real-time client-side filter engine by category, price range, color, rating, and stock availability.
- **Complete Checkout:** Multi-step shipping calculation, tax breakdown, discount/promo code engine, and order confirmation.
- **Included Illustrations:** 16 handcrafted line-art SVG product illustrations — no placeholder stock photos needed.

### 🏺 [E-Commerce Editorial (Forma Studio)](/templates/ecommerce-editorial/)
A high-fashion, editorial-style boutique template:
- **Design direction:** Refined serif display typography, square geometry, warm terracotta accents, and airy editorial layouts.
- **Pages & Sections:** Hero Editorial, Collection Mosaic, Lookbook, Product Rails, Values Marquee, Reviews, and dedicated full Bag and Checkout pages.
- **Light Theme by default:** Built with an editorial warm light aesthetic and an instant dark mode switcher.

### 🏨 [SaaS Hospitality App (The Lobby)](/templates/saas-hotel/)
A comprehensive management dashboard for hotels and hospitality businesses:
- **Views included:** Executive Dashboard, Room Rack planner, Live Arrivals/Departures board, Housekeeping status, Guest Directory with profiles, Revenue & Occupancy Reports, Settings, and Authentication (Sign-in).
- **Interactive UI:** Status filters, drag/select calendars, room status badges, and expandable data tables.

---

## 2 New Component Categories

We have packaged the building blocks powering these templates into two brand-new npm export paths:

### 🛍️ `astro-component-kit/ecommerce`
Over 17 dedicated e-commerce components:
- [StoreHeader](/docs/store-header/) & [PromoBar](/docs/promo-bar/)
- [CartDrawer](/docs/cart-drawer/) & [CartToast](/docs/cart-toast/)
- [ProductBuyBox](/docs/product-buy-box/) & [VariantPicker](/docs/variant-picker/)
- [ProductGrid](/docs/product-grid/) & [ProductCardMinimal](/docs/product-card-minimal/)
- [FilterSidebar](/docs/filter-sidebar/) & [FilterBar](/docs/filter-bar/)
- [OrderSummary](/docs/order-summary/) & [CheckoutForm](/docs/checkout-form/)
- [StockIndicator](/docs/stock-indicator/), [CountdownBanner](/docs/countdown-banner/) & [LiveActivityToast](/docs/live-activity-toast/)

```astro
---
import 'astro-component-kit/global.css';
import { ProductBuyBox, VariantPicker, CartDrawer } from 'astro-component-kit/ecommerce';
---

<ProductBuyBox
  title="Minimalist Ceramic Vase"
  price={64}
  rating={4.9}
  reviewsCount={128}
  inStock={true}
>
  <VariantPicker slot="variants" options={['Stone', 'Terracotta', 'Obsidian']} />
</ProductBuyBox>

<CartDrawer />
```

### 📊 `astro-component-kit/app`
High-density dashboard and web application components:
- [DataTable](/docs/data-table/) — Sortable, filterable tabular data with pagination and row selection.
- [AppSidebar](/docs/app-sidebar/) & [AppTopbar](/docs/app-topbar/) — Collapsible app navigation shells with active-state indicators and quick actions.
- [RoomRack](/docs/room-rack/) — Timeline-based occupancy grid for hospitality and bookings.
- [ArrivalsBoard](/docs/arrivals-board/) & [HousekeepingBoard](/docs/housekeeping-board/) — Operational kanban boards with quick-action statuses.
- [GuestProfileCard](/docs/guest-profile-card/) & [PlanUsageCard](/docs/plan-usage-card/) — Rich profile metrics and tier limit indicators.
- [AuthCard](/docs/auth-card/) — Clean sign-in / registration container.

---

## 🌓 Full Light Theme Support

`astro-component-kit` now officially supports light mode across all library components, charts, and sections.

- Added `--ink-rgb`, `--paper-rgb`, and `--c-on-primary` CSS tokens in `global.css`.
- Toggle between dark and light with `[data-theme="light"]` on the root element.
- All 41 SVG charts and sections automatically adjust contrast, grid borders, and tooltips based on the active theme.

---

## 🔍 Sidebar & Documentation Upgrades

- **Search-First Navigation:** Press `/` anywhere in docs to instantly focus the search bar with live filtering.
- **Collapsible Sections:** Keep the sidebar organized with expandable component and section groups.
- **Templates Navigation:** Direct links to browse live templates and their source files.

---

## Upgrade to v0.4.1

```bash
npm install astro-component-kit@0.4.1
```

Explore all the live demos in our new **[Templates](/templates/)** gallery!

