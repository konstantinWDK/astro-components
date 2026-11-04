# ⬇ Astro Component Kit

> A free, open-source accessible UI component library and production templates built for [Astro 5.x](https://astro.build).
> **🌐 Browse & copy components** at [astrocomponents.dev](https://astrocomponents.dev)
> **📦 Install via npm** or **copy-paste** — your choice!

![License: MIT](https://img.shields.io/badge/License-MIT-6366f1.svg)
![Astro](https://img.shields.io/badge/Astro-5.x-c084fc.svg)
![npm](https://img.shields.io/npm/v/astro-component-kit.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-34d399.svg)

---

## ✨ Features

- 🤖 **Official MCP Server & AI development** — connect Cursor, Claude, Codex, Lovable, or any MCP client (`https://mcp.astrocomponents.dev/sse` or `npx astro-component-kit mcp install <client>`)
- 🛍️ **Multi-page production templates** — 3 complete templates (E-commerce Store, Editorial Boutique, SaaS Hotel) with state management, cart persistence, and live previews
- 🎨 **Dark & Light theme** — dark mode first with official `[data-theme="light"]` support, adaptive tokens, and glassmorphism
- ⚡ **Full-page sections** — 41+ production-ready landing sections (Heroes, Bento Grids, Pricing Matrices, Testimonials, CTAs, FAQs, Teams, Footers)
- 📈 **Zero-dependency SVG charts** — 41 pure-SVG data visualization components rendered at build time with keyboard tooltips and data table fallbacks
- ♿ **Strictly Accessible** — WCAG 2.1 AA compliant with ARIA roles and full keyboard navigation
- 📋 **Copy & paste** — browse [astrocomponents.dev](https://astrocomponents.dev) and copy components directly
- 📦 **npm installable** — `npm install astro-component-kit` for direct modular imports
- ♻️ **Zero runtime dependencies** — pure `.astro` components + Vanilla CSS
- 🔓 **Open Source** — MIT license, contributions welcome

---

## 🚀 Quick Start

### Option 1: Install via npm

```bash
npm install astro-component-kit
```

Then import and use components in your Astro pages:

```astro
---
// Root import — all components and sections
import { 
  GlassButton, 
  GlassCard, 
  FeatureBentoGrid, 
  PricingComparisonMatrix, 
  CtaGlowBanner 
} from 'astro-component-kit';

// Or import by category (recommended for tree-shaking & modularity)
import { StoreProductCard, ProductBuyBox, VariantPicker, CartDrawer } from 'astro-component-kit/ecommerce';
import { DataTable, AppSidebar, AppTopbar, RoomRack } from 'astro-component-kit/app';
import { LineChart, BarChart, DonutChart, KpiStatTile } from 'astro-component-kit/charts';
import { GlassButton, GlowButton, ThreeDPushButton } from 'astro-component-kit/buttons';
import { GlassCard, ProfileCard, PricingCard } from 'astro-component-kit/cards';
import { GlassAlert, Badge, ConfettiFeedback } from 'astro-component-kit/feedback';
import { GlassNavbar, MegaMenuGlass, BreadcrumbsMinimal } from 'astro-component-kit/navigation';
import { OverlayModal, CommandDialog, BottomSheetMobile } from 'astro-component-kit/overlays';
import { AnimatedInput, OTPInput, GlassSlider } from 'astro-component-kit/forms';
import { GlassCardGrid, SplitScreenLayout, MasonryGrid, BentoGrid3 } from 'astro-component-kit/layout';
import { GradientHeading, GlassBlockQuote, CyberpunkGlitchText } from 'astro-component-kit/typography';
import { 
  FeatureBentoGrid, 
  PricingComparisonMatrix, 
  TestimonialWallGlass, 
  CtaGlowBanner, 
  FaqAccordionSection, 
  StatsMetricShowcase,
  TeamGridSection,
  ContactGlassForm
} from 'astro-component-kit/sections';
---

<GlassButton variant="primary">Click me</GlassButton>
<GlassCard title="Welcome">Content here</GlassCard>

<!-- Drop-in full section -->
<FeatureBentoGrid />
```

**Import global design tokens** (required for theme colors, spacing and typography):

```astro
---
import 'astro-component-kit/global.css';
---
```

### Option 2: Copy & Paste from Docs

1. Visit [astrocomponents.dev](https://astrocomponents.dev)
2. Browse the component library or templates
3. Click **Copy** on the component code
4. Paste into your `src/components/` directory
5. Import and use in your Astro pages

### Option 3: Clone & Run Locally

```bash
git clone https://github.com/konstantinwdk/astro-components.git
cd astro-components
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to browse components locally 🎉

---

## 🤖 Build with AI via MCP (Model Context Protocol)

Astro Components Kit provides an official **Model Context Protocol (MCP)** server. Connect it to **Cursor, Claude Desktop, Windsurf, or Antigravity** so your AI assistant can discover components, check TypeScript props, and generate production Astro code directly in your project.

### Remote SSE Connection (Recommended — Zero install)

Add this endpoint to your editor's MCP settings (`claude_desktop_config.json`, Cursor Settings -> Features -> MCP, etc.):

```json
{
  "mcpServers": {
    "astro-components": {
      "url": "https://mcp.astrocomponents.dev/sse"
    }
  }
}
```

### Available MCP Tools

| Tool | Purpose |
|------|---------|
| `search_components` | Search by keyword, category, or tag (e.g. `"buy box"`, `"kpi chart"`, `"pricing"`) |
| `get_component` | Detailed component metadata, TypeScript `Props`, import statements, and usage code |
| `get_component_code` | Raw `.astro` source code ready to inject into your project |
| `list_categories` | Overview of all 13 component categories with item counts |
| `list_templates` | Overview of the 3 multi-page production templates (Nova Store, Forma Studio, The Lobby) |
| `get_template` | Complete template architecture, pages, store configuration, and routing guide |
| `get_design_tokens` | CSS tokens, color variables, spacing scale, and dark/light theme setup |
| `get_library_info` | High-level overview, active version, total counts, and quickstart guide |

---

## 📚 Component & Section Library

**320+ components & full-page sections** across 13 categories plus 3 complete templates:

| Category | Components | Description |
|----------|:----------:|-------------|
| **E-commerce** | 29 | Shop building blocks: product cards, cart drawer, buy box, variant picker, order summary, checkout, stock indicators |
| **App & Dashboard** | 15 | SaaS building blocks: DataTable, collapsible AppSidebar, AppTopbar, RoomRack, ArrivalsBoard, HousekeepingBoard, AuthCard |
| **Charts & Stats** | 47 | 41 zero-dependency SVG charts rendered at build time (line, area, bars, waterfall, pie, gauge, treemap, sankey, radar, heatmap, candlestick, KPI tiles…) plus 3 ApexCharts wrappers |
| **Sections** | 41 | Heroes, features, pricing, testimonials, CTAs, stats dashboards, careers, FAQs, contact, logo walls, shop sections, blog, footers |
| **Buttons** | 22 | Glass, glow, neumorphic, 3D push, magnetic, cyberpunk, and animated |
| **Cards** | 22 | Ecommerce, profile, pricing, weather, tilt, portfolio, kanban |
| **Layout** | 22 | Bento grids, masonry, split screens, sticky sidebars, card grids, full-bleed sections |
| **Forms** | 24 | Floating inputs, OTP, currency, tags, custom select, color picker, rating stars |
| **Navigation** | 23 | Glass navbars, mega menus, breadcrumbs, vertical tabs, command palettes |
| **Overlays** | 23 | Modals, drawers, lightboxes, popovers, bottom sheets, age verifications |
| **Feedback** | 22 | Alerts, modal dialogs, toasts, spinners, progress bars, confetti |
| **Data Display** | 23 | Tables, vertical/horizontal timelines, stats grids, sparklines, tree views |
| **Typography** | 24 | Gradient headings, glitch text, typewriter, 3D text layers, drop caps |

---

## 🛍️ Production Templates

Complete multi-page sites built exclusively with library components. Live interactive previews are available at [astrocomponents.dev/templates](https://astrocomponents.dev/templates/).

### 1. E-Commerce Store (Nova Store)
A production-ready digital storefront with 5 pages, client-side filtering without backend, and a browser-persistent cart:

```astro
---
// src/pages/index.astro
import 'astro-component-kit/global.css';
import { StoreHomePage } from 'astro-component-kit/templates/ecommerce';
---

<StoreHomePage />
```

- **Pages included:** `StoreHomePage`, `StoreCategoryPage`, `StoreProductPage`, `StoreCheckoutPage` and `StoreLayout`.
- **Persistent Cart:** `cart-store.ts` handles cart items, quantities, promo codes, tax, and cross-tab synchronization.
- **Import path:** `astro-component-kit/templates/ecommerce`

### 2. E-Commerce Editorial (Forma Studio)
High-fashion boutique aesthetic with serif typography, square lines, warm terracotta tones, and light theme default:

```astro
---
// src/pages/index.astro
import 'astro-component-kit/global.css';
import { EditorialHomePage } from 'astro-component-kit/templates/ecommerce-editorial';
---

<EditorialHomePage />
```

- **Pages included:** `EditorialHomePage`, `EditorialShopPage`, `EditorialProductPage`, `EditorialBagPage`, `EditorialCheckoutPage` and `EditorialLayout`.
- **Import path:** `astro-component-kit/templates/ecommerce-editorial`

### 3. SaaS Hotel & Hospitality App (The Lobby)
A dense, full-featured management dashboard:

```astro
---
// src/pages/app/index.astro
import 'astro-component-kit/global.css';
import { DashboardPage } from 'astro-component-kit/templates/saas-hotel';
---

<DashboardPage />
```

- **Pages included:** `DashboardPage`, `RoomsPage` (Room Rack timeline), `ReservationsPage`, `GuestsPage`, `ReportsPage`, `SettingsPage`, `SignInPage`, and `LandingPage`.
- **Import path:** `astro-component-kit/templates/saas-hotel`

---

## 📈 SVG Charts — Zero Dependencies

```astro
---
import 'astro-component-kit/global.css';
import { LineChart, PieChart, KpiStatTile } from 'astro-component-kit/charts';
---

<KpiStatTile label="Revenue" value="$48.2k" change={24} period="vs last month" />
<LineChart
  title="Monthly active users"
  categories={['Jan', 'Feb', 'Mar', 'Apr']}
  series={[{ name: 'Web', data: [120, 180, 160, 240] }]}
/>
<PieChart />
```

Every chart ships with a legend, keyboard-focusable marks with tooltips and a "View data" table fallback for screen readers. Colors come from the `--chart-1…8` tokens in `global.css`.

---

## 🌓 Theming & Dark / Light Mode

Components are built dark-mode first with full support for light mode via the `[data-theme="light"]` attribute:

```html
<!-- Apply on html or body element -->
<html data-theme="light">
```

All design tokens (`--ink-rgb`, `--paper-rgb`, `--c-on-primary`, and `--chart-*`) adapt automatically, preserving high contrast and accessible readability.

---

## 📖 Usage Examples

### Building a Complete Landing Page in Minutes

```astro
---
import 'astro-component-kit/global.css';
import { GlassNavbar } from 'astro-component-kit/navigation';
import { 
  HeroGradient, 
  FeatureBentoGrid, 
  PricingComparisonMatrix, 
  TestimonialWallGlass, 
  FaqAccordionSection, 
  CtaGlowBanner 
} from 'astro-component-kit/sections';
import { MinimalFooterGrid } from 'astro-component-kit/layout';
---

<!-- 1. Navigation -->
<GlassNavbar brand="AstroApp" brandHref="/" />

<!-- 2. Hero Header -->
<HeroGradient 
  badge="New Release v0.5.0"
  title="Build Production Websites at Lightning Speed"
  subtitle="Zero client JavaScript runtime, accessible UI, and modern dark glassmorphism."
/>

<!-- 3. Feature Showcase -->
<FeatureBentoGrid />

<!-- 4. Pricing Matrix with Interactive Billing Toggle -->
<PricingComparisonMatrix />

<!-- 5. Social Proof & Testimonials -->
<TestimonialWallGlass />

<!-- 6. FAQ Accordion with Category Filters -->
<FaqAccordionSection />

<!-- 7. High-Converting CTA Banner -->
<CtaGlowBanner />

<!-- 8. Footer -->
<MinimalFooterGrid />
```

### Building a Dashboard Layout

```astro
---
import 'astro-component-kit/global.css';
import { GlassNavbar } from 'astro-component-kit/navigation';
import { SidebarLayoutWrapper, GlassCardGrid } from 'astro-component-kit/layout';
import { GlassCard, StatCard } from 'astro-component-kit/cards';
import { AreaChart, DonutChart } from 'astro-component-kit/charts';
import { GlassTable } from 'astro-component-kit/data';
import { Badge } from 'astro-component-kit/feedback';
---

<SidebarLayoutWrapper>
  <div slot="sidebar">
    <nav>
      <a href="/dashboard">Overview</a>
      <a href="/analytics">Analytics</a>
      <a href="/settings">Settings</a>
    </nav>
  </div>

  <div slot="main">
    <GlassNavbar brand="Dashboard" />

    <GlassCardGrid columns={3}>
      <StatCard label="Total Revenue" value="$84,290" icon="📈" />
      <StatCard label="Active Users" value="14,210" icon="👥" />
      <StatCard label="Conversion Rate" value="4.8%" icon="⚡" />
    </GlassCardGrid>

    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; margin-top: 1.5rem;">
      <GlassCard title="Traffic Overview">
        <AreaChart />
      </GlassCard>
      <GlassCard title="Traffic Distribution">
        <DonutChart />
      </GlassCard>
    </div>

    <div style="margin-top: 1.5rem;">
      <GlassCard title="Recent Transactions">
        <GlassTable />
      </GlassCard>
    </div>
  </div>
</SidebarLayoutWrapper>
```

---

## 🗂️ Project Structure

```
astro-component-kit/
├── src/
│   ├── components/
│   │   ├── lib/                 ← 320+ component source files & templates
│   │   │   ├── templates/       ← Multi-page templates (ecommerce, editorial, saas-hotel)
│   │   │   ├── ecommerce/       ← 29 e-commerce components & cart-store
│   │   │   ├── app/             ← 15 SaaS & dashboard components
│   │   │   ├── charts/          ← 47 SVG & interactive charts and KPI tiles
│   │   │   ├── sections/        ← 41 full-page landing & shop sections
│   │   │   ├── buttons/         ← 22 button components
│   │   │   ├── cards/           ← 22 card components
│   │   │   ├── layout/          ← 22 layout & grid components
│   │   │   ├── forms/           ← 24 form controls & inputs
│   │   │   ├── navigation/      ← 23 navbar & menu components
│   │   │   ├── overlays/        ← 23 overlay & modal components
│   │   │   ├── feedback/        ← 22 alert & feedback components
│   │   │   ├── data/            ← 23 data visualization & tables
│   │   │   └── typography/      ← 24 typography components
│   │   └── index.ts             ← Main barrel export
│   └── types.d.ts               ← TypeScript declarations
├── src/styles/
│   └── global.css               ← Design tokens & theme styles (dark/light)
└── package.json
```

---

## 🎨 Design Tokens

All components share a unified design token system. Import the global CSS:

```astro
---
import 'astro-component-kit/global.css';
---
```

**Available tokens:**

| Token | Values |
|-------|--------|
| **Colors** | Dark palette with amber/gold primary (`#eab308`), cyan, emerald, purple accents |
| **Spacing** | `--sp-1` (4px) to `--sp-20` (80px) |
| **Typography** | `--font-sans` (Inter), `--font-mono` (JetBrains Mono) |
| **Radii** | `--r-sm` (8px), `--r-md` (12px), `--r-lg` (20px), `--r-xl` (28px), `--r-full` (9999px) |
| **Shadows** | Predefined elevation system for cards, buttons, and overlays |
| **Transitions** | Smooth cubic-bezier animation timings for all interactions |

---

## ♿ Accessibility

Every component is built with accessibility as a first-class concern:

- ✅ Semantic HTML (`<section>`, `<article>`, `<button>`, `<nav>`, `<main>`, `<dialog>`, etc.)
- ✅ ARIA attributes and roles where appropriate (`role="switch"`, `aria-label`, `aria-checked`)
- ✅ Full keyboard navigation support (Tab, Enter, Space, Escape, Arrow keys)
- ✅ Visible focus indicators on all interactive elements
- ✅ Screen reader utilities (`.sr-only` class in global.css)
- ✅ Color contrast meeting WCAG AA standards (≥ 4.5:1)
- ✅ Reduced motion media queries for animations

---

## 🛠️ Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the docs site dev server (`http://localhost:4321`) |
| `npm run build` | Build the docs site for production (`dist/` static output) |
| `npm run preview` | Preview the built docs site locally |
| `npm run typecheck` | Run Astro & TypeScript validation across all files |
| `node scripts/audit-components-playwright.mjs` | Automated headless browser audit across all 197+ pages |

---

## 🤝 Contributing

Contributions are warmly welcomed!

1. Fork the repository
2. Create a branch: `git checkout -b feat/my-new-section`
3. Add your component to `src/components/lib/{category}/`
4. Update the registry in `src/data/registry/{category}.ts`
5. Add barrel exports to the category `index.ts`
6. Submit a Pull Request

---

## 📄 License

MIT © [konstantinwdk](https://github.com/konstantinwdk)

## 🌐 Links

- **Documentation**: [astrocomponents.dev](https://astrocomponents.dev)
- **npm Package**: [npmjs.com/package/astro-component-kit](https://www.npmjs.com/package/astro-component-kit)
- **GitHub**: [github.com/konstantinwdk/astro-components](https://github.com/konstantinwdk/astro-components)
- **Issues**: [GitHub Issues](https://github.com/konstantinwdk/astro-components/issues)
