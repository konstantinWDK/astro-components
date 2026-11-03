#!/usr/bin/env node
// scripts/indexnow.mjs
//
// Prepares an IndexNow submission after `astro build`.
//
//   node scripts/indexnow.mjs            → writes dist/indexnow-manifest.json (public)
//                                          and indexnow-pending.json (NOT in dist)
//   node scripts/indexnow.mjs --dry-run  → same, but only prints what would be submitted
//
// How it decides what to submit:
//   1. Reads every URL from dist/sitemap-*.xml (so redirects and excluded pages never go out).
//   2. Hashes the visible text of each page (scripts, styles, tags and whitespace stripped), so
//      random element ids, new asset hashes or highlighter span changes don't count as a change.
//   3. Downloads the manifest published by the previous deploy and keeps only URLs that are
//      new or whose text changed. If there is no previous manifest yet (first run, HTTP 404),
//      every sitemap URL is submitted once. If the manifest can't be fetched for any other
//      reason, nothing is submitted, to avoid flooding search engines.
//
// The pending file is sent by scripts/indexnow-submit.sh, which Coolify runs as the
// post-deployment command once the new container is live.

import { createHash } from 'node:crypto';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const SITE = 'https://astrocomponents.dev';
const KEY = 'b6ab0aaab02e0ce1da79a30fff6f94c4';
const DIST = path.resolve('dist');
const MANIFEST_NAME = 'indexnow-manifest.json';
const PENDING_FILE = path.resolve('indexnow-pending.json');
const MAX_URLS = 10000; // IndexNow limit per request
const dryRun = process.argv.includes('--dry-run');

const host = new URL(SITE).host;

async function sitemapUrls() {
  const files = (await readdir(DIST)).filter((f) => /^sitemap-\d+\.xml$/.test(f));
  const urls = [];
  for (const f of files) {
    const xml = await readFile(path.join(DIST, f), 'utf8');
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.push(m[1]);
  }
  return [...new Set(urls)];
}

function htmlPathFor(url) {
  const { pathname } = new URL(url);
  const clean = decodeURIComponent(pathname);
  return clean.endsWith('/') ? path.join(DIST, clean, 'index.html') : path.join(DIST, `${clean}.html`);
}

function textHash(html) {
  const text = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<title>([\s\S]*?)<\/title>/i, ' $1 ')
    .replace(/<meta\s+name="description"\s+content="([^"]*)"[^>]*>/i, ' $1 ')
    // Drop tags and all whitespace: syntax highlighting may split the same code into
    // different <span>s between builds, which would otherwise change word boundaries.
    .replace(/<[^>]+>/g, '')
    .replace(/&[a-z#0-9]+;/gi, '')
    .replace(/\s+/g, '');
  return createHash('sha1').update(text).digest('hex').slice(0, 16);
}

async function previousManifest() {
  try {
    const res = await fetch(`${SITE}/${MANIFEST_NAME}`, { headers: { 'cache-control': 'no-cache' } });
    if (res.status === 404) return { status: 'missing', hashes: {} };
    if (!res.ok) return { status: `http-${res.status}`, hashes: null };
    const json = await res.json();
    return { status: 'ok', hashes: json.hashes ?? {} };
  } catch (err) {
    return { status: `error: ${err.message}`, hashes: null };
  }
}

const urls = await sitemapUrls();
if (urls.length === 0) {
  console.error('[indexnow] No sitemap URLs found in dist/ — did the build run?');
  process.exit(1);
}

const hashes = {};
for (const url of urls) {
  const file = htmlPathFor(url);
  if (!existsSync(file)) continue;
  hashes[url] = textHash(await readFile(file, 'utf8'));
}

const prev = await previousManifest();
let changed = [];
if (prev.hashes === null) {
  console.warn(`[indexnow] Previous manifest unavailable (${prev.status}); skipping submission this deploy.`);
} else {
  changed = Object.keys(hashes).filter((u) => prev.hashes[u] !== hashes[u]);
}
changed = changed.slice(0, MAX_URLS);

const manifest = { generatedAt: new Date().toISOString(), count: Object.keys(hashes).length, hashes };
const pending = { host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: changed };

console.log(`[indexnow] ${Object.keys(hashes).length} sitemap URLs, previous manifest: ${prev.status}, ${changed.length} to submit.`);
if (dryRun) {
  console.log(changed.slice(0, 50).join('\n') + (changed.length > 50 ? `\n… and ${changed.length - 50} more` : ''));
} else {
  await writeFile(path.join(DIST, MANIFEST_NAME), JSON.stringify(manifest));
  await writeFile(PENDING_FILE, JSON.stringify(pending));
}
