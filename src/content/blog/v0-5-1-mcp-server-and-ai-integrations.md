---
title: 'v0.5.1: Official MCP Server, 1-Click AI Integrations & Native AI Hub'
description: 'Connect Cursor, Claude Desktop, Codex, Lovable, or any MCP client directly to 340+ components, SVG charts, and multi-page templates with astro-component-kit 0.5.1 on npm.'
date: '2026-11-04'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## AI-Powered Astro Development

**astro-component-kit 0.5.1** is here, and it transforms our component library into an **AI-first design engineering ecosystem**.

With the new official **Model Context Protocol (MCP)** server, your AI assistant in **Cursor**, **Claude**, **Codex**, **Lovable**, or any MCP-compatible environment has instant, real-time access to our entire catalog of **340+ production components**, **41 SVG charts**, and **3 full-page application templates**.

---

## 🌟 What is New in v0.5.1

### 1. Official Remote SSE MCP Server
- **Live Endpoint:** `https://mcp.astrocomponents.dev/sse`
- Built on Node.js 22 with Server-Sent Events (SSE) and strict rate-limiting (120 req/min per IP) to guarantee 99.9% availability.
- **Zero-drift dynamic discovery:** Automatically syncs with our master component registry. When new components or templates land in the library, your AI assistant can use them immediately.

### 2. 1-Click Automated CLI Installer
No need to search for hidden config files. Run a single command in your terminal:

```bash
# For Cursor (.cursor/mcp.json)
npx astro-component-kit mcp install cursor

# For Claude Desktop (claude_desktop_config.json)
npx astro-component-kit mcp install claude

# For OpenAI Codex / Agent workflows (.codex/mcp.json)
npx astro-component-kit mcp install codex

# For Lovable projects (.lovable/mcp.json)
npx astro-component-kit mcp install lovable

# For Universal MCP (Windsurf, Cline, Zed, etc.)
npx astro-component-kit mcp install mcp
```

### 3. Dedicated Interactive Hub (`/mcp`)
Explore the new interactive **[MCP Hub](/mcp/)** right in the navigation bar:
- 1-click tabbed installers for your favourite editor.
- Copyable prompt templates for e-commerce, charts, SaaS layouts, and design tokens.
- Complete documentation for all 8 built-in MCP tools.

### 4. 8 Built-in MCP Tools for Your AI
1. `search_components`: Search through 340+ components by keyword, category, or tag.
2. `get_component`: Inspect TypeScript props interfaces, accessibility rules, and imports.
3. `get_component_code`: Retrieve production-ready `.astro` source code.
4. `list_categories`: Browse all 13 categories with real-time component counts.
5. `list_templates`: Explore multi-page templates (E-Commerce, Editorial, SaaS Hotel).
6. `get_template`: Retrieve template architecture, page structures, and shared state code.
7. `get_design_tokens`: Inspect CSS tokens, dark/light theme variables, and color schemes.
8. `get_library_info`: View version info, health, and quickstart documentation.

---

## ⚡ Try Prompting Your AI

Once connected, simply prompt your assistant:

> *"Search astro-components for interactive glow buttons and neon inputs."*

> *"Build a complete e-commerce checkout page using Nova Store templates and CartDrawer."*

> *"Insert a revenue KPI stat tile and an SVG LineChart with dark mode tokens."*

---

## 📦 Upgrade to v0.5.1

```bash
npm install astro-component-kit@0.5.1
```

Or configure your AI assistant directly with:

```bash
npx astro-component-kit mcp install cursor
```

