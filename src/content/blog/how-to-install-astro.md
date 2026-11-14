---
title: 'How to Install Astro: Complete Step-by-Step Guide (npm, pnpm, yarn & Bun)'
description: 'Learn how to install Astro in under 2 minutes using npm, pnpm, yarn, or Bun. Includes CLI commands, manual setup, official Astro docs links, and recommended UI components.'
date: '2026-11-14'
tag: 'Guide'
heroImage: '/galaxy-bg.svg'
---

To **install Astro** and create a new project, run the official CLI wizard with your preferred package manager:

```bash
npm create astro@latest
```

The interactive `create astro` wizard will guide you through choosing a project directory, selecting a starter template, initializing Git, and installing dependencies. Once finished, start the local dev server with `npm run dev` and open `http://localhost:4321`.

---

## Prerequisites

Before installing Astro, make sure your environment meets the minimum requirements:

- **Node.js** — `v18.20.8+`, `v20.3.0+`, or `v22.12.0+` (Node.js 22 LTS recommended)
- **Text Editor** — VS Code, Cursor, or any editor with the [Official Astro Language Support extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- **Terminal** — macOS Terminal, Linux shell, or Windows PowerShell / WSL

Check your current Node.js version with:

```bash
node -v
```

---

## Method 1: Install Astro with the CLI Wizard (Recommended)

The fastest way to install Astro is via the official `create astro` CLI. Pick the command for your package manager:

### npm

```bash
npm create astro@latest
```

### pnpm

```bash
pnpm create astro@latest
```

### yarn

```bash
yarn create astro
```

### Bun

```bash
bun create astro@latest
```

### Non-interactive quick setup

If you want to skip the prompts and scaffold a minimal project directly:

```bash
npm create astro@latest my-astro-site -- --template minimal --install --git
```

### Start the development server

Navigate into your new project folder and launch the dev server:

```bash
cd my-astro-site
npm run dev
```

Your Astro site will be running at **`http://localhost:4321`**.

---

## Method 2: Manual Astro Installation

If you prefer to set up Astro manually inside an existing directory without the CLI wizard:

```bash
mkdir my-astro-site
cd my-astro-site
npm init -y
npm install astro
```

Add the standard Astro scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

Create your first page at `src/pages/index.astro`:

```astro
---
const title = 'Welcome to Astro';
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
  </body>
</html>
```

Run `npm run dev` to preview your page.

---

## Adding Integrations (Tailwind, React, Sitemap, etc.)

Astro includes a built-in `astro add` command to install official integrations and update `astro.config.mjs` automatically:

```bash
# Examples:
npx astro add tailwind
npx astro add react
npx astro add sitemap
```

---

## Recommended: Add a Free UI Component Library (`astro-component-kit`)

Once Astro is installed, you don't need to build buttons, navbars, forms, cards, or full page sections from scratch.

We recommend installing **[astro-component-kit](https://astrocomponents.dev)** — an open-source, MIT-licensed Astro UI library with **400+ accessible components** and **12 production templates** with zero runtime dependencies.

### Install `astro-component-kit`

```bash
npm install astro-component-kit
```

Or with `pnpm` / `yarn`:

```bash
pnpm add astro-component-kit
# or
yarn add astro-component-kit
```

### Use components in your `.astro` pages

```astro
---
import 'astro-component-kit/global.css';
import { GlassNavbar } from 'astro-component-kit/navigation';
import { GlassCard } from 'astro-component-kit/cards';
import { GlassButton } from 'astro-component-kit/buttons';
---

<GlassNavbar brand="MySite" brandHref="/">
  <div slot="actions">
    <GlassButton>Get Started</GlassButton>
  </div>
</GlassNavbar>

<GlassCard title="Ready in minutes">
  Zero runtime dependencies, WCAG AA accessible, and pure Astro + CSS.
</GlassCard>
```

### Optional: 1-Click MCP Setup for AI Editors

If you use Cursor, Claude, or Codex, you can also connect the AstroComponents MCP server in one command:

```bash
npx astro-component-kit mcp install cursor
```

- **Full Library Installation Guide**: [/install/](/install/)
- **Browse Components**: [/docs/glass-button/](/docs/glass-button/)
- **Explore Sections & Templates**: [/sections/](/sections/) · [/templates/](/templates/)

---

## Official Astro Sources & Documentation

Always verify version-specific details against the official Astro documentation:

- **Official Installation Guide**: [docs.astro.build/en/install-and-setup/](https://docs.astro.build/en/install-and-setup/)
- **Astro CLI Reference**: [docs.astro.build/en/reference/cli-reference/](https://docs.astro.build/en/reference/cli-reference/)
- **Astro Official Website**: [astro.build](https://astro.build)
- **Astro GitHub Repository**: [github.com/withastro/astro](https://github.com/withastro/astro)

---

## Frequently Asked Questions

### How do I check if Astro is installed correctly?
Run `npx astro info` inside your project folder. It prints your installed Astro version, Node.js version, OS, and configured integrations.

### How do I upgrade Astro to the latest version?
Run `npx @astrojs/upgrade` inside your project directory to automatically update `astro` and all `@astrojs/*` packages.

### Do I need React or Tailwind to use Astro?
No. Astro ships zero client-side JavaScript by default and works with plain HTML and CSS out of the box. Libraries like `astro-component-kit` also work with pure Astro and CSS without requiring React or Tailwind.

