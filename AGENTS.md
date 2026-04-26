# AGENTS.md — Astro Components Kit

Agent instructions for developing components in this project. Always read this file before starting new component work.

## Design Intelligence — ui-ux-pro-max (ALL AGENTS)

Every agent MUST use the project's UI/UX Pro Max skill for design decisions. The skill is located at:

```
~/.qwen/skills/ui-ux-pro-max/
```

### How to invoke

```bash
# Design system lookup (always start here)
python3 ~/.qwen/skills/ui-ux-pro-max/scripts/search.py "<product_type> <keywords>" --design-system -p "Astro Components Kit"

# Domain-specific search
python3 ~/.qwen/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]

# Stack-specific guidelines
python3 ~/.qwen/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack astro
```

### What to use it for

- **Style selection** — glassmorphism, minimalism, brutalist, etc.
- **Color palettes** — brand colors, contrast ratios, dark mode variants
- **Typography** — font sizes, weights, line heights, pairings
- **Spacing** — 4pt/8dp grid system
- **UX guidelines** — touch targets, focus rings, animation timing, accessibility
- **Chart/data viz** — when applicable

### Design rules priority (from the skill)

1. **Accessibility (CRITICAL)** — Contrast ≥ 4.5:1, visible focus rings, aria-labels, keyboard nav
2. **Touch & Interaction (CRITICAL)** — Min 44×44pt targets, 8px gaps, loading feedback
3. **Performance (HIGH)** — WebP images, lazy loading, font-display: swap, debounce events
4. **Style Selection (HIGH)** — Match style to product, SVG icons (never emoji), consistency
5. **Layout & Responsive (HIGH)** — Mobile-first, min 16px body text, 8dp spacing, no h-scroll

## Project Overview

- **Name**: astro-component-kit
- **Type**: Astro 5.x UI component library (dark mode, glassmorphism, accessible)
- **Package manager**: npm
- **Language**: TypeScript strict mode, `.astro` components
- **Zero runtime dependencies** — pure Astro + Vanilla CSS
- **Design tokens**: CSS custom properties in `src/styles/global.css`

## Directory Structure

```
src/
├── components/
│   ├── lib/                    # Component source files
│   │   ├── buttons/            # Category folders
│   │   │   ├── GlassButton.astro
│   │   │   └── index.ts        # Barrel exports per category
│   │   ├── sections/           # Full-page sections
│   │   └── index.ts            # Main barrel export
│   ├── docs/                   # Documentation components
│   │   ├── CodeBlock.astro     # Syntax-highlighted code blocks
│   │   └── PreviewRenderer.astro
│   └── types.d.ts              # TypeScript declarations
├── data/
│   └── registry/               # Component metadata registry
│       ├── index.ts            # Types + master component list
│       ├── buttons.ts          # Per-category registry
│       ├── sections.ts
│       └── ...
├── layouts/
│   ├── BaseLayout.astro
│   ├── DocsLayout.astro
│   └── SectionsLayout.astro
├── pages/
│   ├── index.astro             # Home page
│   ├── docs/[slug].astro       # Component doc pages (dynamic)
│   └── sections/[slug].astro   # Section doc pages (dynamic)
└── styles/
    └── global.css              # Design tokens + global styles
```

## Component Development Rules

### 1. Every component MUST have:

- **JSDoc comment** at the top explaining purpose, props, and accessibility
- **Typed Props interface** with sensible defaults
- **Accessible markup** (semantic HTML, ARIA attributes, keyboard support)
- **Scoped `<style>`** block with CSS custom properties
- **Variant support** (at minimum: primary/secondary/ghost or equivalent)
- **Size support** (at minimum: sm/md/lg or equivalent)
- **Disabled/Loading state** if applicable
- **Dark mode first** — all components designed for dark backgrounds

### 2. Props conventions:

```astro
---
/**
 * ComponentName — Brief description of what it does.
 * 
 * @param {string} variant - Visual style variant (primary|secondary|ghost)
 * @param {string} size - Size variant (sm|md|lg)
 * @param {boolean} disabled - Whether the component is disabled
 * @param {string} className - Additional CSS class to apply
 */
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

const { variant = 'primary', size = 'md', disabled = false, className = '' } = Astro.props;
---
```

### 3. CSS conventions:

- **BEM naming**: `.block`, `.block__element`, `.block--modifier`
- **CSS custom props** for theming: `--btn-bg`, `--btn-text`, `--btn-glow`
- **Design tokens** from `global.css`: `var(--sp-*)`, `var(--r-*)`, `var(--c-*)`, `var(--font-*)`
- **Transitions**: `0.2-0.3s` with ease or cubic-bezier
- **No hardcoded colors** — always use `var(--c-*)` tokens
- **Scoped styles** — all CSS inside `<style>` block (Astro scopes automatically)

### 4. Accessibility checklist (MANDATORY):

- [ ] Semantic HTML elements used where possible
- [ ] `aria-label` or `aria-labelledby` on interactive elements without visible text
- [ ] `role` attributes for custom widgets
- [ ] Keyboard navigation support (Enter, Space, Escape, Tab, Arrow keys)
- [ ] Focus visible ring (minimum 2px outline)
- [ ] Color contrast ≥ 4.5:1 (WCAG AA)
- [ ] `alt` text on images, `aria-hidden="true"` on decorative elements
- [ ] No content behind `aria-hidden` that is meaningful

### 5. Registry entry (REQUIRED for every new component):

After creating a component, add it to the appropriate registry file in `src/data/registry/`:

```typescript
{
  slug: 'component-slug',
  name: 'Component Name',
  description: 'One-line description of what it does.',
  category: 'category-id',
  tags: ['tag1', 'tag2', 'tag3'],
  featured: true,
  code: `/* Full component source code as string */`,
  usage: `<ComponentName variant="primary">Example</ComponentName>`,
}
```

### 6. Barrel exports:

- Add export to category `index.ts`: `export { default as ComponentName } from './ComponentName.astro';`
- Add to main `src/components/index.ts` if it should be part of the public API
- Update `package.json` `exports` field if new category is added

### 7. Testing (manual verification):

Before committing, verify each component:

- [ ] Renders correctly in isolation (check via `/sections/[slug]` or `/docs/[slug]`)
- [ ] All variants render properly (primary, secondary, ghost, etc.)
- [ ] All sizes render properly (sm, md, lg)
- [ ] Disabled state works if applicable
- [ ] Keyboard navigation works (Tab, Enter, Space, Escape)
- [ ] Screen reader reads meaningful content
- [ ] Responsive — works on mobile (320px+), tablet, desktop
- [ ] No TypeScript errors (`npm run typecheck`)
- [ ] Build passes (`npm run build`)

## Build & Verify Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build (always run before commit)
npm run typecheck    # TypeScript validation
npm run preview      # Preview production build locally
```

## Documentation Standards

### Doc page structure (auto-generated via registry):

Each component gets a doc page via `/docs/[slug].astro` or `/sections/[slug].astro` with:
1. **Header**: category badge, name, description, tags
2. **Live Preview**: rendered component with variant examples
3. **Component Code**: syntax-highlighted code block with copy button
4. **Usage**: import and usage example
5. **Prev/Next navigation**

### Component code in registry should be:

- Complete and copy-paste ready
- Include all props with defaults
- Include `<style>` block
- Include comments for complex logic
- Use the same design token references

## Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| File | PascalCase | `GlassButton.astro` |
| Component | PascalCase | `GlassButton` |
| Slug | kebab-case | `glass-button` |
| CSS class | BEM kebab-case | `.glass-btn--primary` |
| CSS var | kebab-case | `--btn-glow` |
| Category | kebab-case | `buttons`, `forms` |

## Code Style

- **Single quotes** for strings, **template literals** for interpolation
- **2-space indentation**
- **Semicolons** required
- **Trailing commas** in objects/arrays
- **No unused imports**
- **Destructure** Astro.props at the top of the frontmatter

## When creating a NEW component:

1. **Plan**: Define props, variants, accessibility requirements
2. **Create**: Write the `.astro` file in the correct `src/components/lib/[category]/` folder
3. **Register**: Add to `src/data/registry/[category].ts` with complete code string
4. **Export**: Add to category `index.ts` and main `index.ts`
5. **Verify**: `npm run build` passes, component renders on `/docs/[slug]`
6. **Document**: Ensure registry entry has meaningful description and usage example

## When modifying an EXISTING component:

1. Check that all variants still work
2. Update registry code string if props/API changed
3. Run `npm run build` to verify no breakage
4. Update this file if conventions change
