# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.1] - 2026-11-04

### Added — Model Context Protocol (MCP) Server & AI Integrations
- **Official Remote SSE MCP Server**: Live at `https://mcp.astrocomponents.dev/sse` with built-in rate-limiting (120 req/min), CORS protection, healthcheck monitoring, and Docker deployment configuration (`Dockerfile.mcp`).
- **Interactive 21st.dev-style Landing Page**: Dedicated `/mcp` page (in English, Spanish `/es/mcp`, and Russian `/ru/mcp`) with 1-click install tabs, JSON previews, copy buttons, live stats, prompt examples, and tool catalog.
- **1-Click CLI Installer (`bin/cli.js`)**: Executable via `npx astro-component-kit mcp install <client>` with zero dependencies for **Cursor**, **Claude**, **Codex**, **Lovable**, and universal **MCP**.
- **8 Built-in MCP Tools**:
  - `search_components`: Search 340+ components by name, category, and tags.
  - `get_component`: Detailed props interface, accessibility guide, and usage examples.
  - `get_component_code`: Complete raw `.astro` source code.
  - `list_categories`: Browse 13 categories with real-time component counts.
  - `list_templates`: Overview of complete multi-page templates.
  - `get_template`: Template code, routing, and shared state architecture.
  - `get_design_tokens`: Complete CSS tokens, dark/light theme variables, and color schemes.
  - `get_library_info`: Total counts, versioning, and quickstart guide.
- **Dynamic Registry Adapter (`src/mcp/registry-adapter.ts`)**: Auto-discovers newly added components and templates with zero drift.

## [0.4.1] - 2026-11-04

### Added — Templates
- New **Templates** section on the site (`/templates/`, EN/ES/RU) with live, full-page previews.
- **E-commerce Store template** (`astro-component-kit/templates/ecommerce`): `StoreHomePage`, `StoreCategoryPage`, `StoreProductPage`, `StoreCheckoutPage` and `StoreLayout`, plus a demo catalogue (`demoStore`) and configurable routes. One persistent cart is shared across pages.

### Added — E-commerce components (`astro-component-kit/ecommerce`)
- 17 components: StoreHeader, PromoBar, CartDrawer, StoreHero, CategoryTiles, TrustBadges, StoreProductCard, ProductGrid, FilterSidebar, ProductToolbar, ProductGallery, VariantPicker, ProductBuyBox, OrderSummary, CheckoutForm, ProductMedia and ProductRating.
- `cart-store.ts`: framework-free cart (localStorage, cross-tab sync, `[data-add-to-cart]` binding, `formatMoney`), and 16 line-art product illustrations.

### Added — E-commerce 2 · Editorial template
- New template `astro-component-kit/templates/ecommerce-editorial` ("Forma Studio"): home, shop, product, bag and checkout pages with an editorial look (serif display type, square corners, terracotta accent), light by default with a dark mode toggle.
- 10 new sections in a new "E-commerce" section category: ShopHeaderEditorial, ShopHeroEditorial, ShopCollectionMosaic, ShopProductRail, ShopLookbook, ShopValuesMarquee, ShopReviewsEditorial, ShopNewsletterEditorial, ShopFooterWordmark and ShopCategoryHero.
- New components: ProductCardMinimal (quick-add sizes), FilterBar (horizontal filters) and CartPageList (full bag page), plus a shared `catalog-filter.ts`.
- VariantPicker exposes `--vp-active-bg`, `--vp-active-color`, `--vp-active-border`, `--vp-ring` and `--vp-radius` for theming.

### Added — Live notices (e-commerce)
- `CartToast` (add-to-cart and custom `ack:notify` notifications), `LiveActivityToast` (recent-purchase social proof), `CountdownBanner` (sale countdown) and `StockIndicator` (low stock + live viewers).
- Cart store emits `ack:cart-added`; cards and grids accept `openCart={false}` to show a toast instead of opening the drawer.

### Added — Light theme
- `[data-theme="light"]` token set in `global.css` (colors, `--ink-rgb`, `--paper-rgb`, `--c-on-primary`, status colors) plus light adapters for shared components.
- The e-commerce template supports `theme="dark|light|auto"` and a header toggle remembered per visitor.

### Changed
- Docs sidebar restructured into one list: search (with `/` shortcut, result count and empty state) → Get started → Components → Sections (now collapsible) → Templates. Removed the duplicated tab switcher and untranslated labels.
- Home page: new section introducing complete templates.
- `AnimatedInput` accepts an `autocomplete` prop (default `off`, unchanged).

### Fixed
- `CustomRadioGroup` radios were hidden with `display: none` and could not be reached by keyboard; they are now visually hidden with a visible focus ring.

## [0.4.0] - 2026-11-03

### Added — Charts & Stats (SVG, zero dependencies)
- 41 new pure-SVG charts and statistics rendered at build time: line, stacked area, range area, forecast, slope, bump, sparkline, grouped/stacked/horizontal/diverging bars, waterfall, histogram, lollipop, dumbbell, bullet, population pyramid, radial bar, segmented bar, pie/donut, gauge, waffle, treemap, funnel, sunburst, activity rings, scatter, bubble, box plot, heatmap, punch card, polar area, radar, sankey, candlestick, KPI stat tile, KPI trend grid, meter gauge, goal progress, retention cohort table and metric delta table.
- Shared `ChartFrame` shell (legend, hover/focus tooltip, "View data" table fallback), `chart-utils.ts` and `chart-tooltip.ts`.
- `--chart-1…8`, `--chart-pos`, `--chart-neg`, `--chart-grid`, `--chart-axis` and `--chart-surface` tokens in `global.css`.

### Added — Sections
- 24 new full sections: HeroMinimalCentered, HeroTerminal, HeroWaitlist, HeroDashboardPreview, FeatureIconGrid, FeatureAlternatingRows, FeatureTabsShowcase, HowItWorksSteps, IntegrationsGrid, PricingToggleCards, PricingSinglePlan, TestimonialCarousel, TestimonialFeatured, CtaNewsletterSection, CtaSplitImage, StatsCounterBand, StatsDashboardSection, CareersOpenings, FaqTwoColumn, ContactSplitMap, LogoWallGrid, BlogGridSection, ChangelogSection and FooterMegaSection.
- New section categories: "Blog & Content" and "Footers".

### Changed
- Registry `code` for the new entries is loaded from the component files (`?raw`), so docs never drift from the source.
- Section pages resolve any section component by file name; chart previews use the full stage width.
- ES/RU descriptions for every new component and section.

## [0.3.1] and earlier

### Added
- Initial release with 200+ accessible UI components
- npm package support (`npm install astro-component-kit`)
- FTP deployment script for astrocomponents.dev
- Component barrel export system for tree-shaking
- Design token system with global.css
- TypeScript declarations for all components
- Comprehensive documentation at astrocomponents.dev

### Categories
- **Buttons** (19 components): Glass, glow, neumorphic, animated styles
- **Cards** (19 components): Product, profile, pricing, weather widgets
- **Data** (20 components): Tables, timelines, charts, trees
- **Feedback** (20 components): Alerts, modals, toasts, spinners
- **Forms** (20 components): Inputs, selects, sliders, OTP, ratings
- **Layout** (20 components): Grids, sections, sidebars, footers
- **Navigation** (20 components): Navbars, breadcrumbs, tabs, pagination
- **Overlays** (20 components): Modals, drawers, lightboxes, popovers
- **Typography** (20 components): Headings, links, quotes, effects
- **Utilities** (20 components): Patterns, masks, reveals, a11y helpers

[Unreleased]: https://github.com/konstantinWDK/astro-components/releases/tag/v0.0.1
