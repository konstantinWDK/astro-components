# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
