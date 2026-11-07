// src/components/lib/templates/portfolio/data.ts
// Demo content for the developer portfolio template ("Keycap"): a fictional full-stack developer
// with projects, open-source repositories, blog posts and skills. Copy this file, edit it and pass
// it as `site` to every page. Design originally created for konstantink.dev.

import type { ShowcaseVisualKind } from '../../three/showcase-scene';

export interface PortfolioRoutes {
  home: string;
  projects: string;
  /** Project URL prefix — pages live at `${project}${slug}/`. */
  project: string;
  blog: string;
  /** Post URL prefix — pages live at `${post}${slug}/`. */
  post: string;
  contact: string;
}

export interface PortfolioSkill { name: string; description: string }
export interface PortfolioSkillGroup { category: string; skills: PortfolioSkill[] }
export interface PortfolioMetric { value: string; label: string }

export interface PortfolioProject {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  badge?: string;
  year: string;
  role: string;
  status: 'Live' | 'In progress' | 'Archived';
  description: string;
  technologies: string[];
  /** 3D card visual in the projects showcase. */
  visual: { kind: ShowcaseVisualKind; lines?: string[] };
  liveUrl?: string;
  repoUrl?: string;
  stars?: number;
  metrics: PortfolioMetric[];
  challenge: string;
  solution: string;
  features: string[];
  /** Lines typed on the 3D monitor of the project page ("$ " = command). */
  terminal: string[];
}

export interface PortfolioRepo {
  name: string;
  description: string;
  language: string;
  /** Language dot colour. */
  color: string;
  stars: number;
  url: string;
  homepage?: string;
}

export interface PortfolioPost {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  category: string;
  readingTime: string;
  tags: string[];
  /** Article body as trusted HTML. */
  html: string;
}

export interface PortfolioContact {
  kind: 'email' | 'github' | 'linkedin' | 'x' | 'web';
  label: string;
  value: string;
  href: string;
}

export interface PortfolioSite {
  name: string;
  /** Logo split: big initial, collapsible middle, suffix. */
  logo: { initial: string; middle: string; suffix: string };
  role: string;
  /** Rotating hero title: base + revealed extension, then the role line. */
  titles: Array<{ base: string; ext: string; role: string }>;
  tagline: string;
  status: string;
  location: string;
  email: string;
  githubUser: string;
  skills: PortfolioSkillGroup[];
  projects: PortfolioProject[];
  repos: PortfolioRepo[];
  posts: PortfolioPost[];
  /** Words typed by the 3D keyboard. */
  phrases: string[];
  contacts: PortfolioContact[];
}

export const portfolioRoutes: PortfolioRoutes = {
  home: '/',
  projects: '/projects/',
  project: '/projects/',
  blog: '/blog/',
  post: '/blog/',
  contact: '/contact/',
};

export const portfolioProjectHref = (routes: PortfolioRoutes, slug: string) => `${routes.project}${slug}/`;
export const portfolioPostHref = (routes: PortfolioRoutes, slug: string) => `${routes.post}${slug}/`;
export const portfolioDate = (iso: string, locale = 'en-US') =>
  new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`));

const LANG = { TypeScript: '#3178c6', JavaScript: '#f1e05a', Python: '#3572a5', Go: '#00add8', Rust: '#dea584', Astro: '#ff5a03', CSS: '#563d7c', Shell: '#89e051' };

export const keycapPortfolio: PortfolioSite = {
  name: 'Noa Lindqvist',
  logo: { initial: 'N', middle: 'OALINDQVIST', suffix: '.DEV' },
  role: 'Full-stack developer',
  titles: [
    { base: 'Soft', ext: 'ware', role: 'Developer' },
    { base: 'Front', ext: 'end', role: 'Engineer' },
    { base: 'Back', ext: 'end', role: 'Developer' },
    { base: 'Full', ext: ' Stack', role: 'Engineer' },
  ],
  tagline: 'Full Stack · Backend · Frontend · Creative 3D',
  status: 'Available for freelance',
  location: 'Stockholm · Remote',
  email: 'hello@noalindqvist.example',
  githubUser: 'noa-lindqvist',
  phrases: ['ASTRO', 'REACT', 'TYPESCRIPT', 'THREE.JS', 'NODE.JS', 'POSTGRES', 'DOCKER', 'RUST', 'FULL STACK'],
  skills: [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', description: 'Component architecture, hooks, server components and design systems used by several teams.' },
        { name: 'Astro', description: 'Content sites and island architecture with near-zero JavaScript and perfect Lighthouse scores.' },
        { name: 'TypeScript', description: 'Strict types end to end, from database rows to UI props, with generated API clients.' },
        { name: 'Three.js', description: 'Interactive 3D scenes, shaders and instanced rendering that stay smooth on mid-range phones.' },
        { name: 'CSS', description: 'Modern layout, container queries, view transitions and accessible motion.' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', description: 'APIs, queues and real-time services with Fastify, tRPC and WebSockets.' },
        { name: 'Go', description: 'Small, fast services and CLIs with predictable memory use.' },
        { name: 'PostgreSQL', description: 'Schema design, indexes, row-level security and query tuning.' },
        { name: 'REST & GraphQL', description: 'Versioned, documented APIs with auth, rate limits and webhooks.' },
      ],
    },
    {
      category: 'Infra',
      skills: [
        { name: 'Docker', description: 'Multi-stage images, compose stacks and reproducible dev environments.' },
        { name: 'Linux', description: 'VPS hardening, Nginx, TLS, backups and zero-downtime deploys.' },
        { name: 'CI/CD', description: 'GitHub Actions pipelines with previews, tests and automatic releases.' },
      ],
    },
    {
      category: 'AI & Automation',
      skills: [
        { name: 'LLM apps', description: 'Retrieval, tool calling and evaluation for assistants that answer from your own data.' },
        { name: 'Workflows', description: 'Automations that connect CRMs, payments and support tools through webhooks.' },
        { name: 'Analytics', description: 'Event tracking and dashboards that answer real product questions.' },
      ],
    },
  ],
  projects: [
    {
      slug: 'orbit-ui',
      title: 'Orbit UI',
      tagline: 'Accessible component kit for React',
      category: 'Frontend & UI System',
      badge: 'Popular',
      year: '2026',
      role: 'Author & maintainer',
      status: 'Live',
      description: 'An open-source library of accessible, typed React components with light and dark themes, zero runtime dependencies and copy-paste friendly source.',
      technologies: ['React', 'TypeScript', 'CSS', 'Storybook', 'Vitest'],
      visual: { kind: 'atom', lines: ['<App>', '  <Card>', '    <Badge pulse />', '    <Button loading />', '  <Dialog open />'] },
      liveUrl: 'https://example.com/orbit-ui',
      repoUrl: 'https://example.com/noa-lindqvist/orbit-ui',
      stars: 1240,
      metrics: [{ value: '62', label: 'components' }, { value: '1.2k', label: 'GitHub stars' }, { value: '0', label: 'runtime deps' }],
      challenge: 'Teams kept rebuilding the same dialogs, menus and form controls, each with different keyboard behaviour and accessibility gaps.',
      solution: 'A single kit with a strict token system, native elements where possible (dialog, details, popover) and tests that drive every component with the keyboard and a screen-reader tree.',
      features: ['WCAG 2.1 AA targets with automated axe checks', 'Each component is one .tsx + .css pair you can copy', 'Light and dark themes from the same tokens', 'Tree-shakeable entry point per category'],
      terminal: ['$ npm i orbit-ui', '> added 1 package in 0.8s', '$ npm test', '> 412 passed · axe: 0 violations', '$ npm run build', '> dist/ 38 kB gzip'],
    },
    {
      slug: 'atelier',
      title: 'Atelier',
      tagline: 'Online platform for contemporary art',
      category: 'Web Platform & Community',
      badge: 'In production',
      year: '2026',
      role: 'Lead developer',
      status: 'Live',
      description: 'A platform where artists, galleries and cultural spaces publish works, events and art routes, with a map of venues, direct inquiries and featured listings.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Mapbox', 'Stripe'],
      visual: { kind: 'paint', lines: ['Works', 'Artists', 'Spaces', 'Events', 'Routes'] },
      liveUrl: 'https://example.com/atelier',
      metrics: [{ value: '3', label: 'languages' }, { value: '1.8k', label: 'listed works' }, { value: '98', label: 'Lighthouse' }],
      challenge: 'Independent spaces had no shared place to be found, and artists juggled spreadsheets and DMs to answer collectors.',
      solution: 'Profiles for artists and venues, a catalogue with filters and a map, an inbox for inquiries and a points system to feature listings — all server-rendered and fast on mobile.',
      features: ['Venue map with clustering and opening hours', 'Inquiry inbox with email notifications', 'Featured listings paid with points', 'Fully translated in three languages'],
      terminal: ['$ pnpm db:migrate', '> 24 migrations applied', '$ pnpm build', '> 186 pages prerendered', '$ deploy --prod', '> live in 41s'],
    },
    {
      slug: 'tidy',
      title: 'Tidy',
      tagline: 'Reclaims disk space from dev caches',
      category: 'Developer Tools',
      badge: 'New',
      year: '2025',
      role: 'Author',
      status: 'Live',
      description: 'A cross-platform CLI that finds and safely removes stale build caches, node_modules, model weights and Docker layers, with a dry run and an undo log.',
      technologies: ['Rust', 'CLI', 'Docker', 'GitHub Actions'],
      visual: { kind: 'terminal', lines: ['SCANNING WORKSPACE...', '[OK] 38 STALE CACHES FOUND', '[STATUS] 12.4 GB RECLAIMED', '[UNDO] LOG SAVED'] },
      repoUrl: 'https://example.com/noa-lindqvist/tidy',
      stars: 486,
      metrics: [{ value: '12 GB', label: 'freed on average' }, { value: '3', label: 'platforms' }, { value: '<1s', label: 'scan of 50k dirs' }],
      challenge: 'Developer machines quietly fill up with caches from a dozen tools, and cleaning them by hand is risky.',
      solution: 'A rule-based scanner written in Rust that knows where each tool keeps its caches, shows sizes and last use, and moves files to a recoverable trash first.',
      features: ['Rules for 30+ tools', 'Dry run with sizes and last access', 'Undo log for every removal', 'Single static binary'],
      terminal: ['$ tidy scan ~/code', '> 38 caches · 12.4 GB', '$ tidy clean --older-than 30d', '> moved to trash · undo id 8f2c'],
    },
    {
      slug: 'waveform',
      title: 'Waveform',
      tagline: 'Batch audio converter in the browser',
      category: 'Web App & Media',
      badge: 'Tool',
      year: '2025',
      role: 'Author',
      status: 'Live',
      description: 'Drop a folder of audio files and convert them in parallel, fully in the browser with WebAssembly — nothing is uploaded.',
      technologies: ['TypeScript', 'WebAssembly', 'Web Workers', 'FFmpeg'],
      visual: { kind: 'equalizer', lines: ['BATCH: 48 / 50 TRACKS · FLAC 24-BIT', 'BITRATE: 320 KBPS'] },
      liveUrl: 'https://example.com/waveform',
      repoUrl: 'https://example.com/noa-lindqvist/waveform',
      stars: 212,
      metrics: [{ value: '4×', label: 'parallel workers' }, { value: '0', label: 'uploads' }, { value: '9', label: 'formats' }],
      challenge: 'Online converters upload your files and limit batch sizes; desktop tools are heavy for a one-off job.',
      solution: 'FFmpeg compiled to WebAssembly running in a pool of workers, with a queue, progress per file and a zip download at the end.',
      features: ['Runs offline as a PWA', 'Parallel worker pool', 'Per-file progress and errors', 'Zip export'],
      terminal: ['$ open waveform.app', '> worker pool: 4 threads', '> 48/50 converted', '> zip ready · 312 MB'],
    },
    {
      slug: 'shell-folio',
      title: 'Shell Folio',
      tagline: 'A portfolio you navigate like a terminal',
      category: 'Interactive Experience',
      badge: 'Retro',
      year: '2024',
      role: 'Author',
      status: 'Archived',
      description: 'An interactive portfolio that emulates a UNIX shell with a virtual file system, command history, tab completion and CRT effects.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Canvas'],
      visual: { kind: 'monitor', lines: ['$ whoami', '> full-stack developer', '$ cat stack.txt', '• Astro · React · Three.js', '$ status', '[OK] online'] },
      repoUrl: 'https://example.com/noa-lindqvist/shell-folio',
      stars: 98,
      metrics: [{ value: '24', label: 'commands' }, { value: '6 kB', label: 'JavaScript' }, { value: '100', label: 'a11y score' }],
      challenge: 'Make a playful portfolio that still works for recruiters who never type a command.',
      solution: 'A real shell for the curious, with clickable suggestions and a plain HTML fallback that screen readers and search engines can read.',
      features: ['Virtual file system', 'Tab completion and history', 'Clickable command suggestions', 'Reduced-motion friendly CRT effect'],
      terminal: ['$ help', '> about · projects · contact', '$ cd projects && ls', '> orbit-ui  atelier  tidy'],
    },
    {
      slug: 'relay',
      title: 'Relay',
      tagline: 'Declarative API mocks in minutes',
      category: 'Backend & Developer API',
      badge: 'In progress',
      year: '2026',
      role: 'Author',
      status: 'In progress',
      description: 'Describe endpoints in a schema file and get a running mock server with validation, latency simulation and interactive docs.',
      technologies: ['Node.js', 'TypeScript', 'OpenAPI', 'Docker'],
      visual: { kind: 'endpoints', lines: ['POST /api/v1/auth/token 200', 'GET /api/v1/orders 200', 'PUT /api/v1/orders/42 201', 'POST /api/v1/webhook 202'] },
      repoUrl: 'https://example.com/noa-lindqvist/relay',
      stars: 57,
      metrics: [{ value: '1 file', label: 'to define an API' }, { value: '<50ms', label: 'cold start' }, { value: 'OpenAPI', label: 'import & export' }],
      challenge: 'Front-end teams wait on back-end endpoints, and hand-written mocks drift from the real contract.',
      solution: 'One schema drives the mock server, request validation and the docs, so the mock and the contract never disagree.',
      features: ['Schema-driven routes', 'Request and response validation', 'Latency and error simulation', 'Docker image for CI'],
      terminal: ['$ relay init', '> relay.yaml created', '$ relay serve', '> 12 routes on :4010'],
    },
  ],
  repos: [
    { name: 'orbit-ui', description: 'Accessible, typed React component kit with zero runtime dependencies', language: 'TypeScript', color: LANG.TypeScript, stars: 1240, url: 'https://example.com/noa-lindqvist/orbit-ui', homepage: 'https://example.com/orbit-ui' },
    { name: 'tidy', description: 'Reclaim disk space from stale developer caches, safely', language: 'Rust', color: LANG.Rust, stars: 486, url: 'https://example.com/noa-lindqvist/tidy' },
    { name: 'waveform', description: 'Batch audio converter that runs entirely in the browser', language: 'TypeScript', color: LANG.TypeScript, stars: 212, url: 'https://example.com/noa-lindqvist/waveform', homepage: 'https://example.com/waveform' },
    { name: 'astro-keycap', description: 'The 3D keyboard portfolio theme for Astro', language: 'Astro', color: LANG.Astro, stars: 164, url: 'https://example.com/noa-lindqvist/astro-keycap' },
    { name: 'shell-folio', description: 'Portfolio that works like a UNIX terminal', language: 'JavaScript', color: LANG.JavaScript, stars: 98, url: 'https://example.com/noa-lindqvist/shell-folio' },
    { name: 'relay', description: 'Declarative API mocks with validation and docs', language: 'TypeScript', color: LANG.TypeScript, stars: 57, url: 'https://example.com/noa-lindqvist/relay' },
    { name: 'pg-snap', description: 'Point-in-time Postgres snapshots for local development', language: 'Go', color: LANG.Go, stars: 41, url: 'https://example.com/noa-lindqvist/pg-snap' },
    { name: 'scrape-kit', description: 'Polite scraping toolkit with rate limits and caching', language: 'Python', color: LANG.Python, stars: 33, url: 'https://example.com/noa-lindqvist/scrape-kit' },
    { name: 'dotfiles', description: 'Shell, editor and terminal setup', language: 'Shell', color: LANG.Shell, stars: 19, url: 'https://example.com/noa-lindqvist/dotfiles' },
    { name: 'grid-sketch', description: 'Generative SVG and canvas background patterns', language: 'JavaScript', color: LANG.JavaScript, stars: 12, url: 'https://example.com/noa-lindqvist/grid-sketch' },
    { name: 'qr-vector', description: 'Vector QR code generator with SVG and PNG export', language: 'TypeScript', color: LANG.TypeScript, stars: 8, url: 'https://example.com/noa-lindqvist/qr-vector' },
    { name: 'css-lab', description: 'Small experiments with modern CSS features', language: 'CSS', color: LANG.CSS, stars: 5, url: 'https://example.com/noa-lindqvist/css-lab' },
  ],
  posts: [
    {
      slug: 'instanced-meshes-for-ui',
      title: 'Instanced meshes for UI: drawing 400 cubes in one call',
      excerpt: 'How a GitHub-style contribution matrix went from 371 meshes to a single draw call — and gained flying cubes and water ripples on the way.',
      date: '2026-10-28',
      category: 'three.js',
      readingTime: '7 min',
      tags: ['three.js', 'performance', 'webgl'],
      html: `<p>The first version of my contribution matrix created one <code>Mesh</code> per day, plus an outline for each. It looked fine and ran fine on my laptop. On a mid-range phone it dropped to 30 fps.</p>
<h2>One mesh, many instances</h2>
<p><code>InstancedMesh</code> draws the same geometry many times with a different matrix and colour per instance. The CPU work moves into a tight loop that writes matrices into a typed array:</p>
<pre><code>for (let i = 0; i &lt; cubes.length; i++) {
  dummy.position.set(c.x, c.y, c.z + lift);
  dummy.updateMatrix();
  mesh.setMatrixAt(i, dummy.matrix);
}
mesh.instanceMatrix.needsUpdate = true;</code></pre>
<h2>Picking still works</h2>
<p>The raycaster returns an <code>instanceId</code>, so tooltips keep working. Set a fixed <code>boundingSphere</code> if instances move far away during an entrance animation.</p>
<h2>Pause when nobody is looking</h2>
<p>An <code>IntersectionObserver</code> and the <code>visibilitychange</code> event stop the render loop when the section is off-screen. That single change saved more battery than every micro-optimisation together.</p>`,
    },
    {
      slug: 'damped-springs-not-tweens',
      title: 'Damped springs instead of per-frame tweens',
      excerpt: 'Why calling a tween library every frame makes a 3D slider feel rubbery, and the one-line function that fixes it.',
      date: '2026-09-14',
      category: 'animation',
      readingTime: '5 min',
      tags: ['animation', 'javascript'],
      html: `<p>A slider that starts a new tween for every card on every frame is fighting itself: each tween is overwritten before it gets anywhere, on top of a lerp that is already smoothing the input.</p>
<h2>Frame-rate independent damping</h2>
<pre><code>const damp = (a, b, lambda, dt) =&gt; a + (b - a) * (1 - Math.exp(-lambda * dt));</code></pre>
<p>Every frame, compute where each card <em>should</em> be and move it a fraction of the way. The result is identical at 60 and 120 Hz, interrupts gracefully and costs nothing.</p>
<h2>Continuous layouts</h2>
<p>Use smoothstep between the centre and the neighbours instead of <code>if (offset &gt; 0)</code> branches, and the card no longer jumps when it crosses the middle.</p>`,
    },
    {
      slug: 'accessible-3d-sections',
      title: 'Making 3D sections accessible',
      excerpt: 'Canvas content is invisible to assistive technology. Here is how I give every 3D block a real HTML counterpart.',
      date: '2026-07-02',
      category: 'accessibility',
      readingTime: '6 min',
      tags: ['a11y', 'three.js'],
      html: `<p>A WebGL canvas is a picture to a screen reader. If the picture is the only place your projects are listed, they do not exist for some visitors.</p>
<h2>Duplicate the information, not the effect</h2>
<ul><li>Navigation buttons and a key row next to the 3D slider</li><li>A modal with the full project text when a card opens</li><li>Tooltips that are also announced, and keyboard shortcuts scoped to the section</li></ul>
<h2>Respect reduced motion</h2>
<p>With <code>prefers-reduced-motion</code> every scene renders a still, fully assembled frame. Nothing flies, nothing types itself.</p>`,
    },
    {
      slug: 'shipping-a-component-library',
      title: 'Shipping a component library people can copy',
      excerpt: 'One .tsx and one .css file per component, no internal imports, tokens as CSS variables: the boring rules that make a kit easy to adopt.',
      date: '2026-05-19',
      category: 'design systems',
      readingTime: '8 min',
      tags: ['react', 'design-systems'],
      html: `<p>Most teams do not want another dependency. They want a good dialog they can paste into their codebase and own.</p>
<h2>Self-contained files</h2>
<p>Each component is a pair of files with no imports from the rest of the kit. Shared decisions live in CSS custom properties, not in a JavaScript theme object.</p>
<h2>Tokens first</h2>
<pre><code>:root { --c-bg: #fff; --c-text-1: #000; --r-md: 12px; }
[data-theme='dark'] { --c-bg: #050505; --c-text-1: #fff; }</code></pre>
<p>Switching theme is an attribute change. Even the 3D scenes read the same tokens and redraw.</p>`,
    },
  ],
  contacts: [
    { kind: 'email', label: 'Email', value: 'hello@noalindqvist.example', href: 'mailto:hello@noalindqvist.example' },
    { kind: 'github', label: 'GitHub', value: 'github.com/noa-lindqvist', href: 'https://example.com/noa-lindqvist' },
    { kind: 'linkedin', label: 'LinkedIn', value: 'in/noa-lindqvist', href: 'https://example.com/in/noa-lindqvist' },
  ],
};
