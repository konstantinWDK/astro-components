// bin/add.js
// `npx astro-component-kit add <component...>` — copies component source files
// (and the local files they import) into the user's project, shadcn-style.
import fs from 'node:fs';
import path from 'node:path';

const IMPORT_RE = /(?:import|export)\s[^'"`]*?from\s*['"]([^'"]+)['"]|import\s*\(\s*['"]([^'"]+)['"]\s*\)|import\s+['"]([^'"]+)['"]/g;
const PEERS = ['three', 'apexcharts'];

const norm = (s) => s.toLowerCase().replace(/3d/g, 'threed').replace(/[^a-z0-9]/g, '');

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.astro')) out.push(p);
  }
  return out;
}

/** Index of every component: normalized name -> list of absolute paths. */
function buildIndex(libDir) {
  const index = new Map();
  for (const file of walk(libDir)) {
    const key = norm(path.basename(file, '.astro'));
    if (!index.has(key)) index.set(key, []);
    index.get(key).push(file);
  }
  return index;
}

/** Collects a file plus every relative import it (transitively) pulls in. */
function collect(file, libDir, files, peers) {
  if (files.has(file)) return;
  files.add(file);
  const text = fs.readFileSync(file, 'utf8');
  for (const m of text.matchAll(IMPORT_RE)) {
    const spec = m[1] || m[2] || m[3];
    if (!spec) continue;
    if (spec.startsWith('.')) {
      let target = path.resolve(path.dirname(file), spec.split('?')[0]);
      if (!fs.existsSync(target)) {
        const ext = ['.ts', '.js', '.mjs', '.astro', '/index.ts'].find((x) => fs.existsSync(target + x));
        if (!ext) continue;
        target += ext;
      }
      if (target.startsWith(libDir) && fs.statSync(target).isFile()) collect(target, libDir, files, peers);
    } else {
      const pkg = spec.startsWith('@') ? spec.split('/').slice(0, 2).join('/') : spec.split('/')[0];
      if (PEERS.includes(pkg)) peers.add(pkg);
    }
  }
}

function parseArgs(args) {
  const opts = { dir: 'src/components/ack', force: false, dryRun: false, names: [] };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--dir' || a === '-d') opts.dir = args[++i];
    else if (a.startsWith('--dir=')) opts.dir = a.slice(6);
    else if (a === '--force' || a === '-f') opts.force = true;
    else if (a === '--dry-run') opts.dryRun = true;
    else opts.names.push(a);
  }
  return opts;
}

export function listComponents(rootDir, filter = '') {
  const libDir = path.join(rootDir, 'src/components/lib');
  const rows = walk(libDir)
    .map((f) => path.relative(libDir, f).split(path.sep).join('/'))
    .filter((r) => !r.startsWith('templates/') && r.includes('/'))
    .filter((r) => !filter || r.split('/')[0] === filter)
    .sort();
  let current = '';
  for (const r of rows) {
    const [cat, file] = r.split('/');
    if (cat !== current) { current = cat; console.log(`\n${cat}`); }
    console.log(`  ${file.replace('.astro', '')}`);
  }
  console.log(`\n${rows.length} components. Add one with: npx astro-component-kit add <Name>\n`);
}

export function addComponents(rootDir, args) {
  const opts = parseArgs(args);
  const libDir = path.join(rootDir, 'src/components/lib');
  if (!opts.names.length) {
    console.log(`
Usage:
  npx astro-component-kit add <component...> [--dir src/components/ack] [--force] [--dry-run]

Examples:
  npx astro-component-kit add glass-button
  npx astro-component-kit add GlassButton AnimatedInput --dir src/components/ui

List everything:  npx astro-component-kit list [category]
`);
    return false;
  }

  const index = buildIndex(libDir);
  const files = new Set();
  const peers = new Set();
  let ok = true;
  for (const name of opts.names) {
    const hits = index.get(norm(name)) || [];
    const libHits = hits.filter((h) => !path.relative(libDir, h).startsWith('templates'));
    const chosen = libHits[0] || hits[0];
    if (!chosen) {
      const guesses = [...index.keys()].filter((k) => k.includes(norm(name))).slice(0, 5);
      console.error(`✖ Unknown component "${name}".${guesses.length ? ` Did you mean: ${guesses.map((g) => path.basename(index.get(g)[0], '.astro')).join(', ')}?` : ''}`);
      ok = false;
      continue;
    }
    collect(chosen, libDir, files, peers);
  }
  if (!files.size) return false;

  const destRoot = path.resolve(process.cwd(), opts.dir);
  const written = [];
  const skipped = [];
  for (const file of files) {
    const rel = path.relative(libDir, file);
    const dest = path.join(destRoot, rel);
    if (fs.existsSync(dest) && !opts.force) { skipped.push(rel); continue; }
    if (!opts.dryRun) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(file, dest);
    }
    written.push(rel);
  }

  const shown = path.relative(process.cwd(), destRoot) || '.';
  console.log(`\n${opts.dryRun ? 'Would add' : '✔ Added'} ${written.length} file(s) to ${shown}/`);
  for (const w of written) console.log(`  + ${w.split(path.sep).join('/')}`);
  if (skipped.length) {
    console.log(`\nSkipped ${skipped.length} existing file(s) (use --force to overwrite):`);
    for (const s of skipped) console.log(`  = ${s.split(path.sep).join('/')}`);
  }
  if (peers.size) console.log(`\nThese files need: npm install ${[...peers].join(' ')}`);
  console.log(`\nComponents use the kit's CSS variables. Load them once, e.g. in your layout:`);
  console.log(`  import 'astro-component-kit/tokens.css';   (or copy src/styles/tokens.css)\n`);
  return ok;
}
