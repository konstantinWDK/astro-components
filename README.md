# ⬇ Astro Component Kit

> A premium, open-source accessible UI component library built for [Astro](https://astro.build).
> **🌐 Browse & copy components** at [astrocomponents.dev](https://astrocomponents.dev)
> **📦 Install via npm** or **copy-paste** — your choice!

![License: MIT](https://img.shields.io/badge/License-MIT-6366f1.svg)
![Astro](https://img.shields.io/badge/Astro-6.x-c084fc.svg)
![npm](https://img.shields.io/npm/v/astro-component-kit.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-34d399.svg)

---

## ✨ Features

- 🎨 **Premium design** — glassmorphism, gradients and micro-animations
- ♿ **Accessible** — semantic HTML and ARIA attributes included
- 📋 **Copy & paste** — browse [astrocomponents.dev](https://astrocomponents.dev) and copy components directly
- 📦 **npm installable** — `npm install astro-component-kit` for direct imports
- ♻️ **Zero dependencies** — pure `.astro` components + Vanilla CSS
- 🌑 **Dark mode first** — designed for dark interfaces out of the box
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
// Root import — all components
import { GlassButton, GlassCard, GlassNavbar } from 'astro-component-kit';

// Or import by category (recommended for tree-shaking)
import { GlassButton, GlowButton } from 'astro-component-kit/buttons';
import { GlassCard, ProfileCard, PricingCard } from 'astro-component-kit/cards';
import { GlassAlert, Badge } from 'astro-component-kit/feedback';
import { GlassNavbar, BreadcrumbsMinimal } from 'astro-component-kit/navigation';
import { GlassModal, OverlayModal } from 'astro-component-kit/overlays';
import { AnimatedInput, OTPInput } from 'astro-component-kit/forms';
import { MasonryGrid, BentoGrid3 } from 'astro-component-kit/layout';
import { GradientHeading, GlassBlockQuote } from 'astro-component-kit/typography';
import { FadeInWrapper, VisuallyHidden } from 'astro-component-kit/utilities';
---

<GlassButton variant="primary">Click me</GlassButton>
<GlassCard title="Welcome">Content here</GlassCard>
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
git clone https://github.com/konstantinWDK/astro-components.git
cd astro-component-kit
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to browse components locally 🎉

---

## 📚 Component Library

**200+ components** across 10 categories:

| Category | Components | Description |
|----------|------------|-------------|
| **Buttons** | 19 | Glass, glow, neumorphic, animated, and more |
| **Cards** | 19 | Product, profile, pricing, weather, and more |
| **Data** | 20 | Tables, timelines, charts, trees |
| **Feedback** | 20 | Alerts, modals, toasts, spinners, tooltips |
| **Forms** | 20 | Inputs, selects, sliders, OTP, ratings |
| **Layout** | 20 | Grids, sections, sidebars, footers |
| **Navigation** | 20 | Navbars, breadcrumbs, tabs, pagination |
| **Overlays** | 20 | Modals, drawers, lightboxes, popovers |
| **Typography** | 20 | Headings, links, quotes, glitch text |
| **Utilities** | 20 | Patterns, masks, reveals, accessibility |

---

## 📖 Usage Examples

### Building a Landing Page

```astro
---
import { GlassNavbar } from 'astro-component-kit/navigation';
import { FeatureHero, SplitScreenLayout, BentoGrid3 } from 'astro-component-kit/layout';
import { GlassButton, GlowButton, ShimmerButton } from 'astro-component-kit/buttons';
import { GlassCard, PricingCard, ProfileCard } from 'astro-component-kit/cards';
import { GlassAlert } from 'astro-component-kit/feedback';
import { GradientHeading } from 'astro-component-kit/typography';
import { FadeInWrapper } from 'astro-component-kit/utilities';
import 'astro-component-kit/global.css';
---

<FadeInWrapper>
  <GlassNavbar brand="MyProject" brandHref="/">
    <div slot="links">
      <a href="#">Features</a>
      <a href="#">Pricing</a>
    </div>
    <div slot="actions">
      <GlassButton size="sm">Get Started</GlassButton>
    </div>
  </GlassNavbar>

  <FeatureHero>
    <h1 slot="title">Build Beautiful Interfaces</h1>
    <p slot="subtitle">Accessible, premium components for Astro.</p>
    <GlowButton slot="cta">Explore Components</GlowButton>
  </FeatureHero>

  <BentoGrid3>
    <div slot="1">
      <GlassCard title="Feature A" padding="lg">
        <p>Content for the first feature block.</p>
      </GlassCard>
    </div>
    <div slot="2">
      <GlassCard title="Feature B" padding="lg">
        <p>Second feature description.</p>
      </GlassCard>
    </div>
    <div slot="3">
      <GlassCard title="Feature C" padding="lg">
        <p>Third feature details.</p>
      </GlassCard>
    </div>
    <div slot="4">
      <GlassCard title="Stats" padding="lg">
        <p>200+ components available.</p>
      </GlassCard>
    </div>
  </BentoGrid3>
</FadeInWrapper>
```

### Building a Dashboard

```astro
---
import { GlassNavbar } from 'astro-component-kit/navigation';
import { SidebarLayoutWrapper, StatsGridDashboard, GlassTable } from 'astro-component-kit/layout';
import { GlassCard } from 'astro-component-kit/cards';
import { Badge, GlassProgress } from 'astro-component-kit/feedback';
import 'astro-component-kit/global.css';
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

    <StatsGridDashboard>
      <GlassCard title="Users" padding="md">
        <p class="stat-value">12,458</p>
        <Badge variant="success">+12%</Badge>
      </GlassCard>
      <GlassCard title="Revenue" padding="md">
        <p class="stat-value">$48,290</p>
        <Badge variant="info">This month</Badge>
      </GlassCard>
    </StatsGridDashboard>

    <GlassCard title="Recent Activity" padding="md">
      <GlassProgress value={75} />
    </GlassCard>
  </div>
</SidebarLayoutWrapper>
```

### Building a Form Page

```astro
---
import { AnimatedInput, OTPInput, GlassSlider, NeumorphicSwitch } from 'astro-component-kit/forms';
import { GlassButton } from 'astro-component-kit/buttons';
import { GlassAlert } from 'astro-component-kit/feedback';
import { GlassCard } from 'astro-component-kit/cards';
import 'astro-component-kit/global.css';
---

<form>
  <GlassCard title="Account Settings" padding="lg">
    <AnimatedInput id="email" name="email" label="Email" type="email" />
    <AnimatedInput id="name" name="name" label="Full Name" />

    <NeumorphicSwitch id="notifications" label="Enable notifications" />

    <GlassSlider id="volume" min="0" max="100" value="50" label="Volume" />

    <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
      <GlassButton variant="primary" type="submit">Save Changes</GlassButton>
      <GlassButton variant="ghost">Cancel</GlassButton>
    </div>
  </GlassCard>
</form>
```

### Using Overlays and Feedback

```astro
---
import { OverlayModal } from 'astro-component-kit/overlays';
import { GlassAlert, ToastNotif, Badge } from 'astro-component-kit/feedback';
import { GlassButton } from 'astro-component-kit/buttons';
import 'astro-component-kit/global.css';
---

<GlassAlert type="success" title="Success!">
  Your changes have been saved.
</GlassAlert>

<GlassAlert type="warning" title="Warning">
  Please review your settings before continuing.
</GlassAlert>

<ToastNotif />
```

---

## 🗂️ Project Structure

```
astro-component-kit/
├── src/
│   ├── components/
│   │   ├── lib/                 ← 200+ component source files
│   │   │   ├── buttons/         ← 19 button components
│   │   │   ├── cards/           ← 19 card components
│   │   │   ├── data/            ← 20 data display components
│   │   │   ├── feedback/        ← 20 feedback components
│   │   │   ├── forms/           ← 20 form components
│   │   │   ├── layout/          ← 20 layout components
│   │   │   ├── navigation/      ← 20 navigation components
│   │   │   ├── overlays/        ← 20 overlay components
│   │   │   ├── typography/      ← 20 typography components
│   │   │   └── utilities/       ← 20 utility components
│   │   └── index.ts             ← Main barrel export
│   └── types.d.ts               ← TypeScript declarations
├── src/styles/
│   └── global.css               ← Design tokens & global styles
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
| **Colors** | Dark palette with gold primary (`#b8860b`), accent highlights |
| **Spacing** | `--sp-1` (4px) to `--sp-16` (64px) |
| **Typography** | `--font-sans` (Inter), `--font-mono` (JetBrains Mono) |
| **Radii** | `--r-sm` (8px), `--r-md` (12px), `--r-lg` (20px), `--r-xl` (28px) |
| **Shadows** | Predefined elevation system for cards and overlays |
| **Transitions** | Smooth animation timings for all interactions |

---

## ♿ Accessibility

Every component is built with accessibility as a first-class concern:

- ✅ Semantic HTML (`<button>`, `<nav>`, `<main>`, `<article>`, etc.)
- ✅ ARIA attributes and roles where appropriate
- ✅ Keyboard navigation support (Tab, Enter, Escape, Arrow keys)
- ✅ Visible focus indicators on all interactive elements
- ✅ Screen reader utilities (`.sr-only` class in global.css)
- ✅ Color contrast meeting WCAG AA standards
- ✅ Reduced motion media queries for animations

---

## 🛠️ Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the docs site dev server |
| `npm run build` | Build the docs site for production |
| `npm run preview` | Preview the built docs site locally |
| `npm run deploy:ftp` | Deploy docs to astrocomponents.dev via FTP |
| `npm run typecheck` | Run TypeScript type checking |

### Adding a New Component

1. Create your component in `src/components/lib/{category}/ComponentName.astro`
2. Add metadata to `src/data/registry/{category}.ts`
3. Add barrel export in `src/components/lib/{category}/index.ts`
4. Add to main export in `src/components/index.ts`

---

## 🤝 Contributing

Contributions are warmly welcomed!

1. Fork the repository
2. Create a branch: `git checkout -b feat/my-component`
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
- **GitHub**: [github.com/konstantinWDK/astro-components](https://github.com/konstantinWDK/astro-components)
- **Issues**: [GitHub Issues](https://github.com/konstantinWDK/astro-components/issues)
