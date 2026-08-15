---
title: 'AstroComponents.dev — A Free Astro UI Kit in Evolution'
description: 'Discover AstroComponents.dev, an open-source UI kit with 200+ free Astro components, sections, and glassmorphism components for building modern web applications.'
date: '2025-05-02'
tag: 'Announcement'
heroImage: '/galaxy-bg.svg'
---

## Introducing AstroComponents.dev

**AstroComponents.dev** is an open-source **Astro UI kit** built for developers who want to ship beautiful, accessible interfaces without the overhead of component-from-scratch development.

Born as a personal project, it's currently **in active evolution and development** — every week new components, improvements, and optimizations are added to the library.

## What Is It?

AstroComponents.dev is a comprehensive collection of **200+ free Astro components** designed with a consistent dark-mode, glassmorphism aesthetic. Think of it as your go-to **Astro component library** for:

- **Landing pages** — hero sections, feature grids, pricing tables
- **Dashboards** — cards, charts, data displays, sidebars
- **Forms** — inputs, selects, file uploads, validation
- **Navigation** — navbars, tabs, breadcrumbs, side drawers
- **Overlays** — modals, toasts, popovers, cookie banners

Every component is **zero-runtime-dependency** (pure Astro + CSS), accessible (WCAG AA), and responsive by default.

## Sections: Complete Page Templates

One of the standout features of this **Astro components free** collection is the **Sections** category. Instead of building individual pieces and assembling them yourself, Sections provides **ready-made page blocks** that work out of the box:

- **Hero Gradient** — full-screen hero with animated gradient background
- **Hero Split** — content + visual mockup side by side
- **Hero Glass** — centered hero with glassmorphism overlay

Each section is copy-paste ready and fully responsive. No configuration needed — just import and use.

## Why AstroComponents.dev?

| Feature | Details |
|---|---|
| **Zero dependencies** | Pure Astro + Vanilla CSS. No React, no Tailwind required |
| **200+ components** | Buttons, cards, forms, navbars, overlays, charts, and more |
| **Accessible** | Semantic HTML, ARIA attributes, keyboard navigation |
| **Dark mode first** | Designed for dark backgrounds with glassmorphism effects |
| **MIT Licensed** | Free forever — use in personal and commercial projects |
| **Tree-shakeable** | Import only what you need by category |

## Quick Start

```bash
npm install astro-component-kit
```

```astro
---
import { GlassButton } from 'astro-component-kit/buttons';
import { GlassCard } from 'astro-component-kit/cards';
import { GlassNavbar } from 'astro-component-kit/navigation';
---

<GlassNavbar brand="MyApp" brandHref="/">
  <div slot="actions">
    <GlassButton>Get Started</GlassButton>
  </div>
</GlassNavbar>
```

That's it. No setup, no configuration files, no build steps beyond what Astro already provides.

## The Road Ahead

This project is **under active development**. Here's what's on the horizon:

- **More section templates** — pricing, FAQ, testimonials, team grids
- **Chart components** — powered by ApexCharts integration
- **3D components** — Three.js powered galaxy backgrounds and text layers
- **Performance optimizations** — smaller bundle sizes, faster builds
- **Documentation improvements** — prop tables, API references, usage examples

Every contribution and piece of feedback helps shape the direction of the library. If you're building with Astro and want a **free Astro UI kit** that just works, this is it.

## Who Is This For?

- **Solo developers** who need a component library without the setup overhead
- **Agencies** building client sites on Astro who want production-ready pieces
- **Designers** prototyping in Astro who need polished, accessible components
- **Anyone** looking for **free Astro components** that look premium

## Links

- **Browse Components**: [astrocomponents.dev/docs/glass-button](https://astrocomponents.dev/docs/glass-button)
- **View Sections**: [astrocomponents.dev/sections](https://astrocomponents.dev/sections)
- **Installation Guide**: [astrocomponents.dev/install](https://astrocomponents.dev/install)
- **GitHub**: [github.com/konstantinWDK/astro-components](https://github.com/konstantinWDK/astro-components)

*AstroComponents.dev — Build faster. Ship beautiful.*