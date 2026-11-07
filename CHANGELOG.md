# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added — Futuristic-brutalist cyberpunk template ("NULL/SECTOR")
- **New template `templates/cyberpunk`**: six pages for a fictional decentralised GPU network — home, protocol, pricing, manifesto, logs (status + changelog) and terminal (contact). Orbitron + JetBrains Mono, zero radius, 2px ink rules, acid / magenta / cyan, CRT scanlines; NIGHT by default with a concrete DAY theme. Live preview at `/preview/cyberpunk/`.
- **New section category "Cyberpunk & Brutalist"** with 13 sections: `CyberHeader`, `CyberHero`, `CyberTicker`, `CyberBento`, `CyberNodeMap`, `CyberPageHero`, `CyberSpecTable`, `CyberPricing`, `CyberManifesto`, `CyberCrewGrid`, `CyberStatusBoard`, `CyberTerminalForm`, `CyberFooter`.
- Reuses `CyberpunkButton`, `NeonBorderButton`, `CyberFeatureCard`, `CyberGlitchAlert`, `CyberpunkCheckbox`, `HackerDecodeText`, `NeonSpinner`, `LogoWallGrid`, `StatsCounterBand`, `FaqTwoColumn`, `ChangelogSection` and `StatusTimelineFeed`.

### Added — Medical consultations SaaS template ("Pulso")
- **New template `templates/saas-clinic`**: eleven pages — marketing landing, the clinic's public booking page, sign-in and a practice app with dashboard, schedule, patients, patient record (`/app/patients/[id]`), consultation, video visits, reports and settings. Medical teal, Figtree, light by default with a dark mode; live preview at `/preview/saas-clinic/`. All people and records are fictional.
- **8 new App components**: `MedAgendaTimeline`, `MedWaitingRoom`, `MedScheduleCalendar`, `MedPatientSummary`, `MedConsultationNote` (SOAP, vitals flags, ICD-10 combobox, autosave, sign & lock), `MedPrescriptionPad` (allergy and duplicate-therapy checks), `MedVideoVisit` (telemedicine room UI) and `MedAvailabilityEditor`.
- **New section category "Healthcare"** with `MedHero`, `MedDoctorDirectory` and `MedBookingWizard` (four-step booking with an .ics calendar file; pre-select with `?doctor=` / `?specialty=`).
- 7 new app icons: `stethoscope`, `pulse`, `pill`, `video`, `clipboard`, `clock`, `heart`.

### Fixed
- `HeatmapChart` mixed every cell with a hard-coded near-black, so light themes showed dark cells; the ramp now starts from `--chart-surface`. The strong value text colour can be themed with `--hm-strong-text`.

### Added — Toy store template ("Kapow")
- **New template `templates/toy-store`**: a six-page store for action figures and collectibles — home, shop, characters, character profile (`/characters/[id]`), product (`/product/[slug]`) and checkout. Comic "toy box" design (Russo One, ink outlines, hard shadows, halftone panels), light by default with a dark mode; live preview at `/preview/toy-store/`. All characters and universes are original.
- **New section category "Toy Store"** with 7 sections: `ToyHero`, `ToyCharacterRail` (links or filter mode), `ToyCharacterGrid`, `ToyCharacterHero`, `ToyAgeFinder`, `ToySpecSheet`, `ToyCollectorClub`.
- **New e-commerce components**: `ToyFigureCard` (trading-card product card with character, scale, age, articulation, pre-order and limited-edition notes) and `ToyFigureGrid`.
- **Facet filters**: `Product.facets` (e.g. `{ character: ['vex'], scale: '6in' }`) is exposed on product cards as `data-f-*`; `FilterSidebar` takes a `facets` prop that renders extra checkbox groups, filters on them and syncs each one with `?<name>=` in the URL. New helpers `facetAttrs` and `matchesFacets`.
- `FilterSidebar`: `categoryLabel` prop and `?max=` URL support (budget links).
- 9 new product illustrations: `figure`, `robot`, `dino`, `monster`, `ninja`, `rocket`, `mech`, `castle`, `mystery`.

### Fixed
- `FilterSidebar` was always collapsed behind its "Filters" button on desktop, because its container query measured the (narrow) sidebar itself; it now collapses by viewport width (≤ 900px).

## [0.6.0] - 2026-11-07

### Added — Developer portfolio template ("Keycap")
- **New template `templates/portfolio`**: a six-page developer portfolio — home, projects, project case study (`/projects/[slug]`), blog, article (`/blog/[slug]`) and contact. Monochrome keyboard design originally made for konstantink.dev; light by default with a dark mode; live preview at `/preview/portfolio/`.
- **New section category "Developer Portfolio"** with 15 sections: `DevHeader`, `DevHero`, `DevProjectsShowcase`, `DevKeyboard`, `DevRepoList`, `DevContributions`, `DevMonitor`, `DevContact`, `DevFooter`, `DevPageHero`, `DevProjectGrid`, `DevProjectDetail`, `DevPostList`, `DevArticle`, `DevContactForm`.
- **3D sections** (optional `three` peer dependency): projects showcase with 7 data-driven card visuals, a typing mechanical keyboard, a GitHub-style contribution matrix whose cubes fly in and ripple like water, a CRT monitor and a dot-matrix hero background. Scenes live in framework-agnostic modules (`lib/three/*-scene.ts`), read the theme tokens and redraw when the theme changes, pause off-screen and respect reduced motion.
- Templates can declare optional peer dependencies (`peerDeps`); the template page shows them instead of "0 deps".

### Added — Marketing agency template ("Volta")
- **New template `templates/agency`**: an 8-page site for a performance marketing agency selling Paid Ads, SEO and web development — home, services, service detail (`/services/[slug]`), case studies, case study (`/work/[slug]`), pricing, about and contact. Dark by default with a light theme toggle; live preview at `/preview/agency/`.
- **New section category "Agency & Marketing"** with 19 sections: 12 new (`AgencyPageHero`, `AgencyServicePillars`, `AgencyResultsBand`, `AgencyPlatformsMarquee`, `AgencyProcessSteps`, `AgencyAuditCta`, `AgencyRoiCalculator`, `AgencyPricingPackages`, `AgencyServiceOverview`, `AgencyCaseStudyHero`, `AgencyCaseResults`, `AgencyQuotes`) plus the 7 agency sections that shipped in 0.4.1 but were never listed or exported (`AgencyHeader`, `AgencyHeroKinetic`, `AgencyServicesList`, `AgencyWorkGrid`, `AgencyTeamGrid`, `AgencyContactBrief`, `AgencyFooterCta`).
- Interactive lead magnets: free audit with animated scan and score gauge, and an ads ROI calculator with live ROAS.

### Changed
- The menu "Components" link opens the Installation page, which now shows the full docs sidebar.
- Template pages show the number of new sections next to pages and components.

### Fixed
- `AgencyHeader`: the mobile "Start a project" button was visible on desktop and lost its style inside the mobile menu.

## [0.5.1] - 2026-11-04

### Added — Model Context Protocol (MCP) Server & AI Integrations
- **Official Remote SSE MCP Server**: Live at `https://mcp.astrocomponents.dev/sse` with built-in rate-limiting (120 req/min), CORS protection, healthcheck monitoring, and Docker deployment configuration (`Dockerfile.mcp`).
- **Interactive MCP Landing Page**: Dedicated `/mcp` page (in English, Spanish `/es/mcp`, and Russian `/ru/mcp`) with 1-click install tabs, JSON previews, copy buttons, live stats, prompt examples, and tool catalog.
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
