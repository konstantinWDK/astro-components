#!/usr/bin/env node

/**
 * Registry integrity check (runs in CI).
 * - Every `source('<path>')` in src/data/registry points to an existing file
 *   (a typo would silently publish an empty code block).
 * - Every component exported from a category barrel has a registry entry
 *   (warning only, so new components are not forgotten in the docs).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const libDir = path.join(rootDir, 'src/components/lib');
const registryDir = path.join(rootDir, 'src/data/registry');

const errors = [];
const registrySrc = fs
  .readdirSync(registryDir)
  .filter((f) => f.endsWith('.ts'))
  .map((f) => [f, fs.readFileSync(path.join(registryDir, f), 'utf8')]);

let sourceCount = 0;
for (const [file, text] of registrySrc) {
  for (const m of text.matchAll(/source\(\s*'([^']+)'\s*\)/g)) {
    sourceCount++;
    if (!fs.existsSync(path.join(libDir, m[1]))) errors.push(`${file}: source('${m[1]}') — file not found`);
  }
}

const allRegistry = registrySrc.map(([, t]) => t).join('\n');
const missing = [];
for (const category of fs.readdirSync(libDir, { withFileTypes: true })) {
  if (!category.isDirectory() || ['templates', 'three'].includes(category.name)) continue;
  const barrel = path.join(libDir, category.name, 'index.ts');
  if (!fs.existsSync(barrel)) continue;
  for (const m of fs.readFileSync(barrel, 'utf8').matchAll(/export\s*\{\s*default\s+as\s+(\w+)\s*\}\s*from\s*'\.\/([^']+\.astro)'/g)) {
    const rel = `${category.name}/${m[2]}`;
    if (!allRegistry.includes(rel) && !new RegExp(`\\b${m[1]}\\b`).test(allRegistry)) missing.push(rel);
  }
}

console.log(`Checked ${sourceCount} source() references.`);
if (missing.length) {
  console.warn(`\n⚠ ${missing.length} exported component(s) without a registry entry:`);
  for (const m of missing) console.warn(`  - ${m}`);
}
if (errors.length) {
  console.error(`\n✖ ${errors.length} registry error(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log('✔ Registry OK');
