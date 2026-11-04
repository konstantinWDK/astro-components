// src/data/registry/sources.ts
// Loads raw component source code at build time (Vite) or runtime (Node/MCP)
// so registry `code` strings are always identical to the real files without drift.
import fs from 'node:fs';
import path from 'node:path';

let rawSources: Record<string, string> = {};

// When running inside Vite/Astro, use import.meta.glob for eager bundling.
try {
  // @ts-ignore
  if (typeof import.meta !== 'undefined' && typeof import.meta.glob === 'function') {
    // @ts-ignore
    rawSources = import.meta.glob('../../components/lib/**/*.{astro,ts}', {
      query: '?raw',
      import: 'default',
      eager: true,
    }) as Record<string, string>;
  }
} catch {
  // Fall back to filesystem in Node.js runtime
}

/**
 * Returns the raw source of a library file.
 * @param relPath - Path relative to `src/components/lib/`, e.g. `charts/LineChart.astro`.
 */
export function source(relPath: string): string {
  if (rawSources[`../../components/lib/${relPath}`]) {
    return rawSources[`../../components/lib/${relPath}`];
  }
  try {
    const fullPath = path.resolve(process.cwd(), 'src/components/lib', relPath);
    if (fs.existsSync(fullPath)) {
      return fs.readFileSync(fullPath, 'utf8');
    }
  } catch {
    // ignore
  }
  return '';
}
