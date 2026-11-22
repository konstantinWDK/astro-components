// src/data/usage.ts
// Build-time usage graph of the library. It reads the real `.astro` sources and answers,
// for any registry component: which templates / sections / components use it (with the actual
// snippet in context), which components it is combined with and what it is built from.
// Memoised at module level so it runs once per build.
import { components } from './registry/index';
import { templates } from './registry/templates';

const rawFiles = import.meta.glob('../components/lib/**/*.astro', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export interface UsageExample {
  kind: 'template' | 'section' | 'component';
  /** Registry slug of the template (kind=template) or of the consuming component/section. */
  slug: string;
  /** Human label: file name without extension (e.g. `EstateHomePage`). */
  file: string;
  /** Template slug when the consumer lives inside a template folder. */
  templateSlug?: string;
  snippet: string;
}

export interface UsageInfo {
  examples: UsageExample[];
  usedInTemplates: { slug: string; pages: string[] }[];
  usedInComponents: string[]; // registry slugs (sections included)
  worksWith: string[]; // registry slugs
  builtWith: string[]; // registry slugs
}

const EMPTY: UsageInfo = { examples: [], usedInTemplates: [], usedInComponents: [], worksWith: [], builtWith: [] };

const dirname = (p: string) => p.slice(0, p.lastIndexOf('/'));
function resolveRel(from: string, rel: string): string {
  const parts = dirname(from).split('/');
  for (const seg of rel.split('/')) {
    if (seg === '..') parts.pop();
    else if (seg !== '.' && seg !== '') parts.push(seg);
  }
  return parts.join('/');
}

function extractSnippet(src: string, name: string): string | null {
  const body = src.replace(/^---[\s\S]*?\n---\n?/, '');
  const m = new RegExp(`<${name}(?=[\\s/>])`).exec(body);
  if (!m) return null;
  let i = m.index + m[0].length;
  let depth = 0;
  let quote = '';
  for (; i < body.length; i++) {
    const c = body[i];
    if (quote) {
      if (c === quote) quote = '';
      continue;
    }
    if (c === '"' || c === "'" || c === '`') quote = c;
    else if (c === '{') depth++;
    else if (c === '}') depth--;
    else if (depth === 0 && c === '>') break;
  }
  if (i >= body.length) return null;
  let end = i + 1;
  if (body[i - 1] !== '/') {
    const close = body.indexOf(`</${name}>`, end);
    if (close !== -1) end = close + name.length + 3;
  }
  const lineStart = body.lastIndexOf('\n', m.index) + 1;
  const prefix = body.slice(lineStart, m.index);
  const indent = /^\s*$/.test(prefix) ? prefix.length : 0;
  let lines = body.slice(m.index, end).split('\n').map((l, n) => (n === 0 ? l : l.slice(Math.min(indent, l.length - l.trimStart().length))));
  if (lines.length > 14) lines = [...lines.slice(0, 13), '  …', `</${name}>`];
  const out = lines.join('\n').trim();
  return out.length >= 8 ? out : null;
}

let cache: Map<string, UsageInfo> | null = null;

function build(): Map<string, UsageInfo> {
  const bySource = new Map<string, string>(); // raw content -> file key
  for (const [k, v] of Object.entries(rawFiles)) bySource.set(v, k);

  const fileToSlug = new Map<string, string>();
  const slugToFile = new Map<string, string>();
  for (const c of components) {
    const file = bySource.get(c.code);
    if (file && !fileToSlug.has(file)) {
      fileToSlug.set(file, c.slug);
      slugToFile.set(c.slug, file);
    }
  }

  const templateSlugs = new Set(templates.map((t) => t.slug));
  const slugMeta = new Map(components.map((c) => [c.slug, c]));

  type Consumer = { file: string; used: { slug: string; local: string }[] };
  const consumers: Consumer[] = [];
  for (const [file, src] of Object.entries(rawFiles)) {
    const used: Consumer['used'] = [];
    for (const m of src.matchAll(/import\s+(\w+)\s+from\s+['"]([^'"]+\.astro)['"]/g)) {
      const target = resolveRel(file, m[2]);
      const slug = fileToSlug.get(target);
      if (slug && new RegExp(`<${m[1]}(?=[\\s/>])`).test(src)) used.push({ slug, local: m[1] });
    }
    if (used.length) consumers.push({ file, used });
  }

  const info = new Map<string, UsageInfo>();
  const get = (slug: string): UsageInfo => {
    let v = info.get(slug);
    if (!v) {
      v = { examples: [], usedInTemplates: [], usedInComponents: [], worksWith: [], builtWith: [] };
      info.set(slug, v);
    }
    return v;
  };
  const co = new Map<string, Map<string, number>>();

  for (const c of consumers) {
    const tplMatch = /\/templates\/([^/]+)\//.exec(c.file);
    const templateSlug = tplMatch && templateSlugs.has(tplMatch[1]) ? tplMatch[1] : undefined;
    const consumerSlug = fileToSlug.get(c.file);
    const fileName = c.file.slice(c.file.lastIndexOf('/') + 1).replace('.astro', '');
    const src = rawFiles[c.file];

    if (consumerSlug) for (const u of c.used) get(consumerSlug).builtWith.push(u.slug);

    for (const u of c.used) {
      const entry = get(u.slug);
      if (templateSlug) {
        let t = entry.usedInTemplates.find((x) => x.slug === templateSlug);
        if (!t) entry.usedInTemplates.push((t = { slug: templateSlug, pages: [] }));
        t.pages.push(fileName);
      } else if (consumerSlug && consumerSlug !== u.slug) {
        entry.usedInComponents.push(consumerSlug);
      }
      const snippet = extractSnippet(src, u.local);
      if (snippet) {
        const kind: UsageExample['kind'] = templateSlug
          ? 'template'
          : consumerSlug && slugMeta.get(consumerSlug)?.category === 'sections'
            ? 'section'
            : 'component';
        entry.examples.push({ kind, slug: templateSlug ?? consumerSlug ?? '', file: fileName, templateSlug, snippet });
      }
      for (const o of c.used) {
        if (o.slug === u.slug) continue;
        const m = co.get(u.slug) ?? new Map<string, number>();
        m.set(o.slug, (m.get(o.slug) ?? 0) + 1);
        co.set(u.slug, m);
      }
    }
  }

  const rank = { template: 0, section: 1, component: 2 } as const;
  for (const [slug, v] of info) {
    v.usedInComponents = [...new Set(v.usedInComponents)];
    v.builtWith = [...new Set(v.builtWith)];
    // Best examples: templates first (distinct templates), then sections, then components; up to 4.
    const seen = new Set<string>();
    v.examples = v.examples
      .sort((a, b) => rank[a.kind] - rank[b.kind] || b.snippet.split('\n').length - a.snippet.split('\n').length)
      .filter((e) => {
        const key = `${e.kind}:${e.slug}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, 4);
    v.worksWith = [...(co.get(slug) ?? new Map<string, number>()).entries()]
      .filter(([s]) => slugMeta.has(s))
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([s]) => s);
  }
  return info;
}

/** Usage graph entry for a registry component slug. */
export function getUsage(slug: string): UsageInfo {
  cache ??= build();
  return cache.get(slug) ?? EMPTY;
}
