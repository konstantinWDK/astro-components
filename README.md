# ⬇ Astro Component Kit

> A premium, open-source accessible UI component library built for [Astro 5.x](https://astro.build).
> **🌐 Browse & copy components** at [astrocomponents.dev](https://astrocomponents.dev)
> **📦 Install via npm** or **copy-paste** — your choice!

![License: MIT](https://img.shields.io/badge/License-MIT-6366f1.svg)
![Astro](https://img.shields.io/badge/Astro-5.x-c084fc.svg)
![npm](https://img.shields.io/npm/v/astro-component-kit.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-34d399.svg)

---

## ✨ Features

- 🎨 **Premium design** — dark mode first, glassmorphism, fluid typography, and subtle micro-animations
- ⚡ **Full-page sections** — 14 production-ready landing sections (Heroes, Bento Grids, Pricing Matrices, Testimonials, CTAs, FAQs, Teams)
- ♿ **Accessible** — strictly WCAG 2.1 AA compliant with ARIA roles and keyboard navigation
- 📋 **Copy & paste** — browse [astrocomponents.dev](https://astrocomponents.dev) and copy components directly
- 📦 **npm installable** — `npm install astro-component-kit` for direct imports
- ♻️ **Zero runtime dependencies** — pure `.astro` components + Vanilla CSS
- 🌑 **Dark mode first** — crafted for modern, dark-themed developer interfaces
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

// Or import by category (recommended for modularity)
import { GlassButton, GlowButton, ThreeDPushButton } from 'astro-component-kit/buttons';
import { GlassCard, ProfileCard, PricingCard } from 'astro-component-kit/cards';
import { GlassAlert, Badge, ConfettiFeedback } from 'astro-component-kit/feedback';
import { GlassNavbar, MegaMenuGlass, BreadcrumbsMinimal } from 'astro-component-kit/navigation';
import { OverlayModal, CommandDialog, BottomSheetMobile } from 'astro-component-kit/overlays';
import { AnimatedInput, OTPInput, GlassSlider } from 'astro-component-kit/forms';
import { GlassCardGrid, SplitScreenLayout, MasonryGrid, BentoGrid3 } from 'astro-component-kit/layout';
import { GradientHeading, GlassBlockQuote, CyberpunkGlitchText } from 'astro-component-kit/typography';
import { AreaChart, DonutChart, BarChart } from 'astro-component-kit/charts';
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

**Import global design tokens** (optional but recommended):

```astro
---
import 'astro-component-kit/global.css';
---
```

### Option 2: Copy & Paste from Docs

1. Visit [astrocomponents.dev](https://astrocomponents.dev)
2. Browse the component library
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

## 📚 Component & Section Library

**210+ components & full-page sections** across 11 categories:

| Category | Components | Description |
|----------|:----------:|-------------|
| **Sections** | 14 | Full landing sections: Heroes, Bento Grids, Pricing Matrices, Testimonials, CTAs, FAQs, Teams, Contact |
| **Buttons** | 19 | Glass, glow, neumorphic, 3D push, magnetic, cyberpunk, and animated |
| **Cards** | 19 | Ecommerce, profile, pricing, weather, tilt, portfolio, kanban |
| **Layout** | 19 | Bento grids, masonry, split screens, sticky sidebars, card grids, full-bleed sections |
| **Forms** | 18 | Floating inputs, OTP, currency, tags, custom select, color picker, rating stars |
| **Navigation** | 17 | Glass navbars, mega menus, breadcrumbs, vertical tabs, command palettes |
| **Overlays** | 20 | Modals, drawers, lightboxes, popovers, bottom sheets, age verifications |
| **Feedback** | 17 | Alerts, modal dialogs, toasts, spinners, progress bars, confetti |
| **Data Display** | 19 | Tables, vertical/horizontal timelines, stats grids, sparklines, tree views |
| **Typography** | 19 | Gradient headings, glitch text, typewriter, 3D text layers, drop caps |
| **Charts** | 3 | Area, bar, and donut charts with ApexCharts integration |

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
  badge="New Release v0.3.0"
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
│   │   ├── lib/                 ← 210+ component source files
│   │   │   ├── sections/        ← 14 full-page landing sections
│   │   │   ├── buttons/         ← 19 button components
│   │   │   ├── cards/           ← 19 card components
│   │   │   ├── layout/          ← 19 layout & grid components
│   │   │   ├── forms/           ← 18 form controls & inputs
│   │   │   ├── navigation/      ← 17 navbar & menu components
│   │   │   ├── overlays/        ← 20 overlay & modal components
│   │   │   ├── feedback/        ← 17 alert & feedback components
│   │   │   ├── data/            ← 19 data visualization & tables
│   │   │   ├── typography/      ← 19 typography components
│   │   │   └── charts/          ← 3 interactive data charts
│   │   └── index.ts             ← Main barrel export
│   └── types.d.ts               ← TypeScript declarations
├── src/styles/
│   └── global.css               ← Design tokens & global CSS
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
