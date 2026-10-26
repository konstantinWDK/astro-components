---
title: 'Major Update: 32 New Components, Edge-to-Edge UI & 225+ Free Astro Building Blocks'
description: 'Explore our biggest release yet: 32 brand new Astro components across all categories, an edge-to-edge layout overhaul, and improved interactive preview stages.'
date: '2026-10-26'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## The Next Evolution of AstroComponents.dev

We are thrilled to announce one of the most substantial updates to **AstroComponents.dev** since our initial release!

With this update, we have expanded our library with **32 brand new production-ready Astro components** distributed across every single category. In addition, we have redesigned our documentation layout to a **fluid, edge-to-edge interface**, docking the sidebar directly to the left screen border and maximizing canvas space for live component testing.

Whether you are crafting SaaS landing pages, high-density analytics dashboards, interactive documentation, or portfolio showcases, these new components are built with **zero runtime dependencies**, **strict accessibility (WCAG AA)**, and our signature **dark-mode glassmorphic aesthetic**.

---

## What’s New in This Release?

Here is the complete list of all 32 newly introduced components, grouped by category with direct links to their interactive documentation and source code:

### 🔘 Buttons
Interactive buttons designed for micro-interactions, conversions, and tactile user feedback:
- [Ripple Button](/docs/ripple-button) — Material-style click effect emitting smooth expanding ripple rings calculated at the exact cursor coordinate.
- [Neon Border Button](/docs/neon-border-button) — Cyberpunk-inspired CTA with rotating conical neon laser gradient borders and subtle glow reflection.
- [Slide Reveal Button](/docs/slide-reveal-button) — Dual-state action button that slides the primary label aside to reveal secondary confirmation icons or copy on hover.

### 📝 Forms & Inputs
High-conversion inputs and controls with built-in client validation styles:
- [Password Strength Input](/docs/password-strength-input) — Real-time entropy evaluator with segmented color strength bar and eye visibility toggle.
- [Tags Autocomplete Input](/docs/tags-autocomplete-input) — Multi-tag pill editor supporting keyboard tag creation, chip removal, and autocomplete candidate dropdowns.
- [Glass Inline Toggle Group](/docs/glass-inline-toggle-group) — macOS-style segmented toggle control with animated glass slider indicator and keyboard navigation.
- [Phone Country Input](/docs/phone-country-input) — International telephone field featuring formatted dial code selectors and accessibility attributes.

### 🃏 Cards
Content containers optimized for SaaS pricing, open-source repositories, and KPIs:
- [Pricing Compare Mini Card](/docs/pricing-compare-mini-card) — High-impact pricing tier card featuring spotlight glows, feature checkmarks, and CTA buttons.
- [GitHub Repo Card](/docs/github-repo-card) — Developer showcase card displaying GitHub repository language badges, star counts, fork counters, and repository stats.
- [Stats Trend Card](/docs/stats-trend-card) — KPI metric card displaying numeric values, positive/negative delta trend indicators, and mini sparkline bars.

### 🔔 Feedback & Notifications
Polished status indicators and user response elements:
- [Progress Ring Counter](/docs/progress-ring-counter) — Circular SVG stroke gauge with animated dashoffset transitions and centered percentage readouts.
- [Toast Notification Group](/docs/toast-notification-group) — Stacked toast alert container supporting success, warning, error, and informational messages with action triggers.

### 🧭 Navigation
Dock shortcuts, workflow indicators, and dashboard sub-navs:
- [Sub Navbar Pills](/docs/sub-navbar-pills) — Secondary pill navigation bar with active glow background and badge counts for dashboard views.
- [Quick Jump Dock](/docs/quick-jump-dock) — Floating macOS-inspired dock with interactive hover scale expansion, icons, and keyboard shortcuts.
- [Step Breadcrumb Bar](/docs/step-breadcrumb-bar) — Multi-step wizard indicator showing completed, active, and upcoming workflow stages.

### 📐 Layout & Structure
CSS Grid foundations and aesthetic transitions:
- [Holy Grail Grid](/docs/holy-grail-grid) — Flexible 5-zone CSS Grid layout with sticky header, collapsible sidebars, dynamic content, and footer.
- [Diagonal Section Divider](/docs/diagonal-section-divider) — Slanted SVG section separator creating dynamic non-rectangular transitions between landing page sections.

### 🪟 Overlays & Dialogs
User consent drawers, comparative sliders, and micro-surveys:
- [Cookie Preferences Drawer](/docs/cookie-preferences-drawer) — GDPR/CCPA compliant bottom sheet with granular category toggles for essential, analytics, and marketing cookies.
- [Image Compare Slider](/docs/image-compare-slider) — Interactive before-and-after visual slider with draggable separator bar and touch/mouse event support.
- [Floating Feedback Widget](/docs/floating-feedback-widget) — Fixed corner trigger with emoji satisfaction ratings and feedback submission textarea.

### 📊 Data Display
Auditing logs, GitHub-style timelines, and performance rows:
- [Metric Comparison Row](/docs/metric-comparison-row) — Horizontal benchmark comparison comparing actual vs target goals with progress bars.
- [Activity Heatmap Grid](/docs/activity-heatmap-grid) — GitHub-style activity contribution grid visualizing frequencies across weeks and months.
- [Status Timeline Feed](/docs/status-timeline-feed) — Operational incident log and audit trail feed with status pills, avatars, and timestamps.

### ✍️ Typography & Text Effects
Dynamic headlines, tickers, and cyber typography:
- [Animated Counter Text](/docs/animated-counter-text) — Number odometer that smoothly animates upward from zero when scrolled into view.
- [Gradient Text Marquee](/docs/gradient-text-marquee) — Continuous smooth looping horizontal marquee ribbon featuring metallic gradient typography.
- [Curved Path Heading](/docs/curved-path-heading) — Circular SVG text-on-path headline for badges, seals, and artistic landing hero sections.
- [Hacker Decode Text](/docs/hacker-decode-text) — Scrambled Matrix glyph decode animation that resolves into target text on scroll or hover.

### 📈 Charts & Data Visualization
Zero-dependency SVG charts for analytics:
- [Radar Metric Chart](/docs/radar-metric-chart) — Multi-axis spider polygon chart visualizing audit scores (Speed, SEO, Accessibility, Security).
- [Linear Progress Gauge](/docs/linear-progress-gauge) — Multi-segment quota meter with colored threshold indicators and capacity readouts.

### 🚀 Full Landing Page Sections
Full-width, high-conversion section templates ready to drop into any page:
- [Testimonial Grid Section](/sections/testimonial-grid-section) — Bento-style social proof section with verified badges, avatar quotes, and rating stars.
- [Logo Cloud Section](/sections/logo-cloud-section) — Clean partner and client logo strip with hover illumination and infinite marquee scrolling.
- [Hero Showcase Split](/sections/hero-showcase-split) — Split-column landing hero featuring glowing headline copy, primary/secondary CTAs, and live preview cards.

---

## Complete UI Overhaul: Edge-to-Edge Layout

Alongside new components, we have revamped the entire documentation interface:

1. **Edge-Pinned Sidebar**: The navigation sidebar is now pinned directly to the left screen edge (`x = 0`), eliminating artificial black voids on wide monitors (1440p, 4K, Ultrawide).
2. **Fluid Content Canvas**: Doc pages now scale adaptively up to `1440px` and Sections up to `1600px`, providing realistic preview viewports for complex layouts, grids, and dashboards.
3. **Smart Right TOC**: The "On this page" scrollspy sidebar rests comfortably on the right margin, automatically yielding full width to the main canvas on screens below `1200px`.

---

## Quick Example: Using the New Components

Integrating any of these components into your Astro project takes seconds:

```astro
---
import { PasswordStrengthInput } from 'astro-component-kit/forms';
import { StatsTrendCard } from 'astro-component-kit/cards';
import { QuickJumpDock } from 'astro-component-kit/navigation';
---

<!-- Analytics metric card -->
<StatsTrendCard 
  label="Monthly Active Users" 
  value="48,290" 
  change="+18.4%" 
  trend="up" 
/>

<!-- Secure form input -->
<PasswordStrengthInput 
  id="signup-password" 
  label="Choose a Password" 
  required 
/>

<!-- Floating navigation dock -->
<QuickJumpDock />
```

---

## What’s Next?

We are actively working on:
- Interactive ROI and pricing calculator sections.
- Expanded Three.js shader backgrounds.
- More color theme presets and Figma tokens.

Star our [GitHub Repository](https://github.com/konstantinWDK/astro-components) to follow along, report issues, or contribute new components!

*Built with Astro 5 • Zero Runtime Dependencies • Pure CSS*
