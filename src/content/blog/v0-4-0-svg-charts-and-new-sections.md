---
title: 'v0.4.0: 41 Zero-Dependency SVG Charts, 24 New Sections & 290+ Building Blocks'
description: 'Our biggest data-visualization release: 41 pure-SVG charts and KPI widgets rendered at build time, 24 new landing sections, and the astro-component-kit 0.4.0 package on npm.'
date: '2026-11-03'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Charts, finally done right

**astro-component-kit 0.4.0** is out, and this release is all about **data visualization**. We added **41 new charts and statistics components**, so the Charts & Stats category now has **47 components**. With 24 new sections on top, the library now has **290+ components and sections**.

Every new chart is **pure SVG, rendered at build time**. That means:

- **Zero dependencies.** No Chart.js, no D3, no ApexCharts. The markup is computed by Astro and shipped as static HTML.
- **Instant paint.** The chart is already in the page when it loads, with no layout shift and no client bundle to download.
- **Accessible by default.** Each chart comes with a legend, keyboard-focusable marks with tooltips, and a **"View data" table** so screen-reader users get the real numbers.
- **Themeable.** Colors come from the `--chart-1…8`, `--chart-pos` and `--chart-neg` tokens in `global.css`, so a palette change in one place restyles every chart.

---

## The 41 new charts

### 📈 Trends over time
- [Line Chart](/docs/line-chart/) — Multi-series lines with smooth, linear or step curves and optional area fill.
- [Stacked Area Chart](/docs/stacked-area-chart/) — Cumulative series to show how each part contributes to the total.
- [Range Area Chart](/docs/range-area-chart/) — Min/max bands around a central value.
- [Forecast Line Chart](/docs/forecast-line-chart/) — Actuals plus a dashed projection with a confidence band.
- [Slope Chart](/docs/slope-chart/) — Before/after comparison between two points in time.
- [Bump Chart](/docs/bump-chart/) — Ranking changes across periods.
- [Sparkline Chart](/docs/sparkline-chart/) — Tiny inline trend for tables and KPI cards.
- [Candlestick Chart](/docs/candlestick-chart/) — Open/high/low/close financial candles.

### 📊 Comparing values
- [Grouped Bar Chart](/docs/grouped-bar-chart/), [Stacked Bar Chart](/docs/stacked-bar-chart/) and [Horizontal Bar Chart](/docs/horizontal-bar-chart/) for side-by-side and part-of-total comparisons.
- [Diverging Bar Chart](/docs/diverging-bar-chart/) — Positive vs negative around a zero baseline.
- [Waterfall Chart](/docs/waterfall-chart/) — How a starting value becomes a final one, step by step.
- [Histogram Chart](/docs/histogram-chart/) — Distribution of values in bins.
- [Lollipop Chart](/docs/lollipop-chart/) and [Dumbbell Chart](/docs/dumbbell-chart/) — Lighter alternatives to bars, and gaps between two values.
- [Bullet Chart](/docs/bullet-chart/) — Actual vs target over qualitative ranges.
- [Population Pyramid](/docs/population-pyramid/) — Two mirrored distributions.

### 🥧 Parts of a whole
- [Pie Chart](/docs/pie-chart/) (pie or donut), [Waffle Chart](/docs/waffle-chart/) and [Segmented Bar Chart](/docs/segmented-bar-chart/).
- [Treemap Chart](/docs/treemap-chart/) and [Sunburst Chart](/docs/sunburst-chart/) for hierarchies.
- [Funnel Chart](/docs/funnel-chart/) — Conversion steps with drop-off rates.
- [Radial Bar Chart](/docs/radial-bar-chart/) and [Polar Area Chart](/docs/polar-area-chart/).

### 🔬 Distribution & relationships
- [Scatter Plot](/docs/scatter-plot/) with an optional regression line and R², plus [Bubble Chart](/docs/bubble-chart/).
- [Box Plot Chart](/docs/box-plot-chart/) — Median, quartiles and outliers.
- [Heatmap Chart](/docs/heatmap-chart/) and [Punch Card Chart](/docs/punch-card-chart/) — Intensity across two dimensions.
- [Radar Chart](/docs/radar-chart/) — Multi-axis profile comparison.
- [Sankey Chart](/docs/sankey-chart/) — Flows between stages.

### 🎯 KPIs & progress
- [KPI Stat Tile](/docs/kpi-stat-tile/) and [KPI Trend Grid](/docs/kpi-trend-grid/) — Headline numbers with deltas and sparklines.
- [Gauge Chart](/docs/gauge-chart/), [Meter Gauge](/docs/meter-gauge/) and [Goal Progress Chart](/docs/goal-progress-chart/).
- [Activity Rings](/docs/activity-rings/) — Concentric progress rings.
- [Retention Cohort Table](/docs/retention-cohort-table/) and [Metric Delta Table](/docs/metric-delta-table/) — Data tables with built-in color scales and deltas.

All of them share a common [Chart Frame](/docs/chart-frame/) for the title, legend, tooltip and data table, and each one supports `glass`, `solid` and `ghost` variants in `sm`, `md` and `lg` sizes.

```astro
---
import 'astro-component-kit/global.css';
import { LineChart, KpiStatTile } from 'astro-component-kit/charts';
---

<KpiStatTile label="Revenue" value="$48.2k" change={24} period="vs last month" />
<LineChart
  title="Monthly active users"
  categories={['Jan', 'Feb', 'Mar', 'Apr']}
  series={[{ name: 'Web', data: [120, 180, 160, 240] }]}
/>
```

---

## 24 new landing sections

The sections library grows to **41 full sections**, several of them built on the new charts:

- **Heroes:** [Minimal Centered](/sections/hero-minimal-centered/), [Terminal](/sections/hero-terminal/), [Waitlist](/sections/hero-waitlist/) and [Dashboard Preview](/sections/hero-dashboard-preview/).
- **Features:** [Icon Grid](/sections/feature-icon-grid/), [Alternating Rows](/sections/feature-alternating-rows/), [Tabs Showcase](/sections/feature-tabs-showcase/), [How It Works](/sections/how-it-works-steps/) and [Integrations Grid](/sections/integrations-grid/).
- **Pricing & social proof:** [Pricing Toggle Cards](/sections/pricing-toggle-cards/), [Single Plan](/sections/pricing-single-plan/), [Testimonial Carousel](/sections/testimonial-carousel/), [Featured Testimonial](/sections/testimonial-featured/) and [Logo Wall](/sections/logo-wall-grid/).
- **Data:** [Stats Counter Band](/sections/stats-counter-band/) and [Stats Dashboard](/sections/stats-dashboard-section/).
- **Conversion & content:** [Newsletter CTA](/sections/cta-newsletter-section/), [Split Image CTA](/sections/cta-split-image/), [Careers](/sections/careers-openings/), [Two-Column FAQ](/sections/faq-two-column/), [Contact with Map](/sections/contact-split-map/), [Blog Grid](/sections/blog-grid-section/), [Changelog](/sections/changelog-section/) and [Mega Footer](/sections/footer-mega-section/).

---

## Upgrade

```bash
npm install astro-component-kit@0.4.0
```

This is a non-breaking release: existing imports keep working, and the new components are available from `astro-component-kit/charts`, `astro-component-kit/sections` or the root entry point.

Browse everything on the [Charts & Stats](/docs/line-chart/) and [Sections](/sections/) pages, and let us know on [GitHub](https://github.com/konstantinwdk/astro-components) what you would like to see next.
