// src/data/registry/sources.ts
// Loads raw component source code at build time so registry `code` strings
// are always identical to the real files (no manual copy/paste drift).

const rawSources = import.meta.glob('../../components/lib/**/*.{astro,ts}', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

/**
 * Returns the raw source of a library file.
 * @param path - Path relative to `src/components/lib/`, e.g. `charts/LineChart.astro`.
 */
export function source(path: string): string {
  return rawSources[`../../components/lib/${path}`] ?? '';
}
