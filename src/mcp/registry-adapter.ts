// src/mcp/registry-adapter.ts
// Direct adapter between Astro Components Kit registry and the MCP server.
// Whenever components or templates are added to the codebase, this adapter
// dynamically discovers and exposes them without any manual sync.
import fs from 'node:fs';
import path from 'node:path';
import { components, categories } from '../data/registry/index.js';
import { templates } from '../data/registry/templates.js';
import type { ComponentDoc } from '../data/registry/types.js';
import type { TemplateDoc } from '../data/registry/templates.js';
import type {
  ComponentSearchResult,
  ComponentDetail,
  CategorySummary,
  TemplateSummary,
  LibraryStats,
} from './types.js';

// Resolve project root
const ROOT_DIR = process.cwd();
const PKG_PATH = path.resolve(ROOT_DIR, 'package.json');
const GLOBAL_CSS_PATH = path.resolve(ROOT_DIR, 'src/styles/global.css');

/**
 * Returns basic package info from package.json.
 */
export function getPackageMeta() {
  try {
    const pkgRaw = fs.readFileSync(PKG_PATH, 'utf8');
    return JSON.parse(pkgRaw);
  } catch {
    return { name: 'astro-component-kit', version: '0.5.1' };
  }
}

/**
 * Derives the optimal npm import statement for a component.
 */
function getImportStatement(c: ComponentDoc): string {
  const componentName = c.name.replace(/\s+/g, '');
  if (c.category === 'sections') {
    return `import { ${componentName} } from 'astro-component-kit/sections';`;
  }
  if (c.category === 'charts') {
    return `import { ${componentName} } from 'astro-component-kit/charts';`;
  }
  if (c.category === 'ecommerce') {
    return `import { ${componentName} } from 'astro-component-kit/ecommerce';`;
  }
  if (c.category === 'app') {
    return `import { ${componentName} } from 'astro-component-kit/app';`;
  }
  return `import { ${componentName} } from 'astro-component-kit/${c.category}';`;
}

/**
 * Searches components by text query, category, and tag.
 */
export function searchComponents(opts: {
  query?: string;
  category?: string;
  tag?: string;
  limit?: number;
}): ComponentSearchResult[] {
  const query = (opts.query || '').trim().toLowerCase();
  const targetCategory = opts.category?.trim().toLowerCase();
  const targetTag = opts.tag?.trim().toLowerCase();
  const limit = Math.max(1, Math.min(opts.limit || 20, 50));

  let results = components.filter((c) => {
    if (targetCategory && c.category.toLowerCase() !== targetCategory) {
      return false;
    }
    if (targetTag && !c.tags.some((t) => t.toLowerCase() === targetTag)) {
      return false;
    }
    if (!query) {
      return true;
    }

    const inSlug = c.slug.toLowerCase().includes(query);
    const inName = c.name.toLowerCase().includes(query);
    const inDesc = c.description.toLowerCase().includes(query);
    const inTags = c.tags.some((t) => t.toLowerCase().includes(query));
    return inSlug || inName || inDesc || inTags;
  });

  // Sort: exact name match first, then featured, then alphabetical
  if (query) {
    results.sort((a, b) => {
      const aExact = a.name.toLowerCase() === query || a.slug.toLowerCase() === query ? 1 : 0;
      const bExact = b.name.toLowerCase() === query || b.slug.toLowerCase() === query ? 1 : 0;
      if (aExact !== bExact) return bExact - aExact;
      if ((a.featured ? 1 : 0) !== (b.featured ? 1 : 0)) return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      return a.name.localeCompare(b.name);
    });
  }

  return results.slice(0, limit).map((c) => ({
    slug: c.slug,
    name: c.name,
    category: c.category,
    description: c.description,
    tags: c.tags,
    importPath: `astro-component-kit/${c.category}`,
    featured: Boolean(c.featured),
  }));
}

/**
 * Retrieves a component by slug with usage, import statement, and documentation.
 */
export function getComponent(slug: string): ComponentDetail | null {
  const c = components.find((item) => item.slug === slug || item.slug.toLowerCase() === slug.toLowerCase());
  if (!c) return null;

  return {
    slug: c.slug,
    name: c.name,
    category: c.category,
    description: c.description,
    tags: c.tags,
    importStatement: getImportStatement(c),
    usageExample: c.usage || `--- \n${getImportStatement(c)}\n---\n\n<${c.name.replace(/\s+/g, '')} />`,
    installationGuide: c.installation?.manual || undefined,
    codeSnippet: c.code || '',
  };
}

/** Index of every component source file under src/components/lib (built once, lazily). */
let sourceIndex: Map<string, string> | null = null;
const cleanName = (s: string) => s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

function getSourceIndex(): Map<string, string> {
  if (sourceIndex) return sourceIndex;
  sourceIndex = new Map();
  const walk = (dir: string) => {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(astro|ts)$/.test(entry.name) && entry.name !== 'index.ts') {
        const key = cleanName(entry.name.replace(/\.(astro|ts)$/, ''));
        // .astro files win over helper .ts modules with the same name
        if (!sourceIndex!.has(key) || entry.name.endsWith('.astro')) sourceIndex!.set(key, full);
      }
    }
  };
  walk(path.resolve(ROOT_DIR, 'src/components/lib'));
  return sourceIndex;
}

/** Same resolution rules as the docs site (PreviewRenderer.astro). */
function resolveSourceFile(c: { slug: string; name: string; category: string }): string | null {
  const index = getSourceIndex();
  const pascal = c.slug.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('');
  const direct = path.resolve(ROOT_DIR, `src/components/lib/${c.category}/${pascal}.astro`);
  if (fs.existsSync(direct)) return direct;
  const slugKey = cleanName(c.slug);
  const candidates = [
    slugKey,
    slugKey.replace(/^3d/, 'threed'),
    cleanName(c.name),
  ];
  for (const key of candidates) {
    const hit = index.get(key);
    if (hit) return hit;
  }
  return null;
}

/**
 * Retrieves the full raw Astro source code of a component.
 * The real file in src/components/lib is the source of truth; the registry `code` field is only a
 * fallback (for some components it holds a usage example or an older copy, not the source).
 */
export function getComponentCode(slug: string): { slug: string; name: string; code: string } | null {
  const c = components.find((item) => item.slug === slug || item.slug.toLowerCase() === slug.toLowerCase());
  if (!c) return null;

  let code = '';
  const file = resolveSourceFile(c);
  if (file) {
    try {
      code = fs.readFileSync(file, 'utf8');
    } catch {
      // fall back to the registry copy below
    }
  }
  if (!code) code = c.code || '';

  return {
    slug: c.slug,
    name: c.name,
    code,
  };
}

/**
 * Lists all component categories with component counts.
 */
export function listCategories(): CategorySummary[] {
  return categories.map((cat) => {
    const count = components.filter((c) => c.category === cat.id).length;
    return {
      id: cat.id,
      name: cat.name,
      description: cat.description,
      count,
    };
  });
}

/**
 * Lists all multi-page templates available in the kit.
 */
export function listTemplates(): TemplateSummary[] {
  return templates.map((t) => ({
    slug: t.slug,
    name: t.name.en,
    tagline: t.tagline.en,
    description: t.description.en,
    tags: t.tags,
    importPath: t.importPath,
    previewUrl: `https://astrocomponents.dev${t.previewBase}`,
    pageCount: t.pages.length,
    pages: t.pages.map((p) => ({
      id: p.id,
      name: p.name.en,
      path: p.path,
      file: p.file,
    })),
  }));
}

/**
 * Retrieves full details and code for a template.
 */
export function getTemplate(slug: string): (TemplateDoc & { previewUrl: string }) | null {
  const t = templates.find((item) => item.slug === slug || item.slug.toLowerCase() === slug.toLowerCase());
  if (!t) return null;
  return {
    ...t,
    previewUrl: `https://astrocomponents.dev${t.previewBase}`,
  };
}

/**
 * Retrieves the global design tokens and theme setup guide.
 */
export function getDesignTokens(): {
  cssImport: string;
  themeToggleSnippet: string;
  tokensOverview: string;
  cssSource: string;
} {
  let cssSource = '';
  try {
    if (fs.existsSync(GLOBAL_CSS_PATH)) {
      cssSource = fs.readFileSync(GLOBAL_CSS_PATH, 'utf8');
    }
  } catch {
    // ignore
  }

  return {
    cssImport: `import 'astro-component-kit/global.css';`,
    themeToggleSnippet: `<!-- Add data-theme="light" to html or body for light theme -->
<html lang="en" data-theme="dark">
  <head>
    <script is:inline>
      // Persistent theme toggle script
      const theme = localStorage.getItem('ack-theme') || 
        (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
      document.documentElement.setAttribute('data-theme', theme);
    </script>
  </head>
  <body>
    <!-- components adapt automatically using --ink-rgb, --paper-rgb, --c-on-primary -->
  </body>
</html>`,
    tokensOverview: `Astro Components Kit design tokens:
- Primary Color: var(--c-primary, #b8860b) and var(--c-primary-light)
- Text Contrast: var(--c-text-1), var(--c-text-2), var(--c-text-3), var(--c-on-primary)
- Theme Adaptation: rgb(var(--ink-rgb, 255 255 255) / opacity) for dark, rgb(var(--ink-rgb, 10 10 10) / opacity) for light
- Backgrounds: var(--c-bg), var(--c-bg-subtle), var(--c-card-bg)
- Radii: var(--r-sm, 6px), var(--r-md, 12px), var(--r-lg, 18px), var(--r-xl, 24px), var(--r-full, 9999px)
- Spacing: var(--sp-1) (4px) to var(--sp-20) (80px)
- SVG Charts: var(--chart-1)...var(--chart-8), var(--chart-pos), var(--chart-neg), var(--chart-grid)`,
    cssSource,
  };
}

/**
 * Returns overall stats and overview for the library.
 */
export function getLibraryStats(): LibraryStats {
  const pkg = getPackageMeta();
  const cats = listCategories();
  return {
    name: pkg.name || 'astro-component-kit',
    version: pkg.version || '0.5.0',
    description: pkg.description || 'A free, open-source accessible UI component library for Astro',
    totalComponents: components.length,
    totalCategories: cats.length,
    totalTemplates: templates.length,
    homepage: 'https://astrocomponents.dev',
    npm: 'https://www.npmjs.com/package/astro-component-kit',
    categories: cats,
  };
}

