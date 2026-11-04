// src/data/registry/sections-extra.ts
// Additional full-page sections. Source code is loaded from the real component
// files via `source()` so the docs always show exactly what ships.
import type { ComponentDoc } from './types';
import { source } from './sources';

interface SectionMeta {
  slug: string;
  name: string;
  file: string;
  sectionCategory: string;
  description: string;
  tags: string[];
  featured?: boolean;
  usage: string;
}

function section(meta: SectionMeta): ComponentDoc {
  const component = meta.file.replace('.astro', '');
  return {
    slug: meta.slug,
    name: meta.name,
    description: meta.description,
    category: 'sections',
    sectionCategory: meta.sectionCategory,
    tags: meta.tags,
    featured: meta.featured ?? false,
    code: source(`sections/${meta.file}`),
    usage: `---
import { ${component} } from 'astro-component-kit/sections';
---

${meta.usage.trim()}`,
  };
}

export const sectionsExtra: ComponentDoc[] = [
  // === HERO ===
  section({
    slug: 'hero-minimal-centered', name: 'Hero Minimal Centered', file: 'HeroMinimalCentered.astro', sectionCategory: 'hero',
    description: 'Typography-first centered hero with announcement pill, highlighted headline word, two CTAs and trust signals.',
    tags: ['hero', 'minimal', 'centered', 'typography'], featured: true,
    usage: `<HeroMinimalCentered
  announcement="New: dark mode tokens"
  title="Build pages that *feel* expensive"
  subtitle="Accessible Astro components with zero runtime."
  primary={{ label: 'Get started', href: '/docs' }}
  secondary={{ label: 'GitHub', href: 'https://github.com' }}
  variant="grid"
/>`,
  }),
  section({
    slug: 'hero-terminal', name: 'Hero Terminal', file: 'HeroTerminal.astro', sectionCategory: 'hero',
    description: 'Developer hero with an animated terminal transcript and a copy-to-clipboard install command.',
    tags: ['hero', 'developer', 'terminal', 'cli', 'copy'],
    usage: `<HeroTerminal
  title="From zero to production in one command"
  command="npm create astro@latest"
  lines={[
    { type: 'cmd', text: 'npm create astro@latest' },
    { type: 'ok', text: 'Project ready' },
  ]}
/>`,
  }),
  section({
    slug: 'hero-waitlist', name: 'Hero Waitlist', file: 'HeroWaitlist.astro', sectionCategory: 'hero',
    description: 'Pre-launch hero with aurora background, accessible email capture, inline validation and social proof.',
    tags: ['hero', 'waitlist', 'form', 'launch', 'email'],
    usage: `<HeroWaitlist
  badge="Private beta"
  title="Analytics that respect your users"
  action="/api/waitlist"
  count={4280}
/>`,
  }),
  section({
    slug: 'hero-dashboard-preview', name: 'Hero Dashboard Preview', file: 'HeroDashboardPreview.astro', sectionCategory: 'hero',
    description: 'SaaS hero with a live product dashboard mockup built from the kit’s KPI tiles and SVG line chart.',
    tags: ['hero', 'saas', 'dashboard', 'mockup', 'charts'], featured: true,
    usage: `<HeroDashboardPreview
  title="See every metric that matters"
  primary={{ label: 'Start free trial', href: '/signup' }}
  variant="floating"
/>`,
  }),

  // === FEATURES ===
  section({
    slug: 'feature-icon-grid', name: 'Feature Icon Grid', file: 'FeatureIconGrid.astro', sectionCategory: 'features',
    description: 'Responsive 2–4 column feature grid with SVG icons, descriptions and accessible learn-more links.',
    tags: ['features', 'grid', 'icons', 'cards'],
    usage: `<FeatureIconGrid
  title="Everything you need"
  columns={3}
  features={[
    { icon: 'bolt', title: 'Fast', text: 'Static HTML by default.' },
    { icon: 'shield', title: 'Accessible', text: 'WCAG AA out of the box.' },
    { icon: 'code', title: 'Yours', text: 'Copy the source, own it.' },
  ]}
/>`,
  }),
  section({
    slug: 'feature-alternating-rows', name: 'Feature Alternating Rows', file: 'FeatureAlternatingRows.astro', sectionCategory: 'features',
    description: 'Zig-zag feature rows alternating copy and pure-CSS illustrations (chart, code, token stack).',
    tags: ['features', 'zig-zag', 'alternating', 'split'],
    usage: `<FeatureAlternatingRows
  rows={[
    { eyebrow: 'Insights', title: 'Dashboards people read', text: '…', bullets: ['45 charts'], visual: 'chart' },
    { eyebrow: 'DX', title: 'Typed props', text: '…', bullets: ['Strict TS'], visual: 'code' },
  ]}
/>`,
  }),
  section({
    slug: 'feature-tabs-showcase', name: 'Feature Tabs Showcase', file: 'FeatureTabsShowcase.astro', sectionCategory: 'features',
    description: 'Interactive feature tabs following the WAI-ARIA tabs pattern with arrow-key navigation and stat panels.',
    tags: ['features', 'tabs', 'interactive', 'aria'],
    usage: `<FeatureTabsShowcase
  variant="underline"
  tabs={[
    { label: 'Marketing', title: 'Launch faster', text: '…', points: ['24 sections'], stat: '3.4×', statLabel: 'faster' },
    { label: 'Product', title: 'In-app analytics', text: '…', points: ['45 charts'], stat: '0 kB', statLabel: 'runtime' },
  ]}
/>`,
  }),
  section({
    slug: 'how-it-works-steps', name: 'How It Works Steps', file: 'HowItWorksSteps.astro', sectionCategory: 'features',
    description: 'Numbered process steps connected by a line, horizontal on desktop and vertical on mobile.',
    tags: ['process', 'steps', 'how-it-works', 'onboarding'],
    usage: `<HowItWorksSteps
  title="Ship in three steps"
  steps={[
    { title: 'Pick', text: 'Choose sections.', time: '2 min' },
    { title: 'Paste', text: 'Copy into your project.' },
    { title: 'Deploy', text: 'Push to any CDN.' },
  ]}
/>`,
  }),
  section({
    slug: 'integrations-grid', name: 'Integrations Grid', file: 'IntegrationsGrid.astro', sectionCategory: 'features',
    description: 'Integrations directory with category filter chips, monogram tiles and availability badges.',
    tags: ['integrations', 'filter', 'directory', 'apps'],
    usage: `<IntegrationsGrid
  items={[
    { name: 'Slack', category: 'Messaging', description: 'Alerts in channels.', status: 'available' },
    { name: 'Linear', category: 'Developer', description: 'Insights to issues.', status: 'beta' },
  ]}
/>`,
  }),

  // === PRICING ===
  section({
    slug: 'pricing-toggle-cards', name: 'Pricing Toggle Cards', file: 'PricingToggleCards.astro', sectionCategory: 'pricing',
    description: 'Three pricing tiers with an accessible monthly/yearly switch, savings badge and featured plan.',
    tags: ['pricing', 'toggle', 'monthly-yearly', 'plans'], featured: true,
    usage: `<PricingToggleCards
  plans={[
    { name: 'Free', monthly: 0, yearly: 0, description: 'Hobby', features: ['1 project'], cta: 'Start', href: '#' },
    { name: 'Pro', monthly: 24, yearly: 19, description: 'Pros', features: ['Unlimited'], cta: 'Try Pro', href: '#', featured: true },
  ]}
/>`,
  }),
  section({
    slug: 'pricing-single-plan', name: 'Pricing Single Plan', file: 'PricingSinglePlan.astro', sectionCategory: 'pricing',
    description: 'One-plan pricing with price card, struck-through original price, feature checklist and guarantee.',
    tags: ['pricing', 'single-plan', 'lifetime', 'guarantee'],
    usage: `<PricingSinglePlan
  planName="Lifetime license"
  price="$149"
  originalPrice="$249"
  features={['All components', 'Lifetime updates']}
/>`,
  }),

  // === TESTIMONIALS ===
  section({
    slug: 'testimonial-carousel', name: 'Testimonial Carousel', file: 'TestimonialCarousel.astro', sectionCategory: 'testimonials',
    description: 'Scroll-snap testimonial carousel with prev/next buttons, star ratings and no autoplay.',
    tags: ['testimonials', 'carousel', 'slider', 'reviews'],
    usage: `<TestimonialCarousel
  items={[
    { quote: 'Shipped our site in two days.', name: 'Alicia Gómez', role: 'Northwind', rating: 5 },
    { quote: 'Zero-JS charts are magic.', name: 'Marcus Lee', role: 'Lumen', rating: 5 },
  ]}
/>`,
  }),
  section({
    slug: 'testimonial-featured', name: 'Testimonial Featured', file: 'TestimonialFeatured.astro', sectionCategory: 'testimonials',
    description: 'Case-study style section with one large quote, company wordmark and headline outcome metrics.',
    tags: ['testimonials', 'case-study', 'quote', 'metrics'],
    usage: `<TestimonialFeatured
  quote="Our pages load twice as fast."
  name="Elena Vasquez"
  role="VP Marketing, Orbitly"
  company="Orbitly"
  metrics={[{ value: '2.1×', label: 'faster loads' }]}
  variant="card"
/>`,
  }),

  // === CTA ===
  section({
    slug: 'cta-newsletter-section', name: 'CTA Newsletter Section', file: 'CtaNewsletterSection.astro', sectionCategory: 'cta',
    description: 'Newsletter signup band with benefits, labelled email field, inline validation and privacy note.',
    tags: ['cta', 'newsletter', 'email', 'form'],
    usage: `<CtaNewsletterSection
  title="Get new components every week"
  action="/api/subscribe"
  variant="glass"
/>`,
  }),
  section({
    slug: 'cta-split-image', name: 'CTA Split Image', file: 'CtaSplitImage.astro', sectionCategory: 'cta',
    description: 'Split conversion banner with copy and CTAs beside a gradient-mesh visual with floating stat chips.',
    tags: ['cta', 'split', 'banner', 'conversion'],
    usage: `<CtaSplitImage
  title="Ready to ship?"
  primary={{ label: 'Get started', href: '/signup' }}
  chips={[{ value: '100', label: 'Lighthouse' }]}
/>`,
  }),

  // === STATS ===
  section({
    slug: 'stats-counter-band', name: 'Stats Counter Band', file: 'StatsCounterBand.astro', sectionCategory: 'stats',
    description: 'Headline numbers that count up on scroll, with real values in the HTML for no-JS and screen readers.',
    tags: ['stats', 'counter', 'numbers', 'animated'], featured: true,
    usage: `<StatsCounterBand
  stats={[
    { value: 12000, suffix: '+', label: 'Developers' },
    { value: 99.98, suffix: '%', label: 'Uptime', decimals: 2 },
  ]}
  variant="cards"
/>`,
  }),
  section({
    slug: 'stats-dashboard-section', name: 'Stats Dashboard Section', file: 'StatsDashboardSection.astro', sectionCategory: 'stats',
    description: 'Complete analytics section with KPI tiles, stacked area chart and ranked bar chart.',
    tags: ['stats', 'dashboard', 'charts', 'kpi', 'analytics'], featured: true,
    usage: `<StatsDashboardSection
  title="Growth you can see"
  kpis={[{ label: 'Visitors', value: '1.2M', change: 18.4 }]}
/>`,
  }),

  // === TEAM ===
  section({
    slug: 'careers-openings', name: 'Careers Openings', file: 'CareersOpenings.astro', sectionCategory: 'team',
    description: 'Job listings grouped by department with location, type and remote badges plus a perks strip.',
    tags: ['careers', 'jobs', 'hiring', 'team'],
    usage: `<CareersOpenings
  jobs={[
    { title: 'Frontend Engineer', department: 'Engineering', location: 'Europe', type: 'Full-time', remote: true, href: '/jobs/fe' },
  ]}
/>`,
  }),

  // === FAQ ===
  section({
    slug: 'faq-two-column', name: 'FAQ Two Column', file: 'FaqTwoColumn.astro', sectionCategory: 'faq',
    description: 'Two-column FAQ with sticky intro and native exclusive <details> accordions that work without JS.',
    tags: ['faq', 'accordion', 'details', 'support'],
    usage: `<FaqTwoColumn
  items={[
    { q: 'Is it free?', a: 'Yes, MIT licensed.' },
    { q: 'Do I need JS?', a: 'No.' },
  ]}
  exclusive
/>`,
  }),

  // === CONTACT ===
  section({
    slug: 'contact-split-map', name: 'Contact Split Map', file: 'ContactSplitMap.astro', sectionCategory: 'contact',
    description: 'Contact channels and office addresses beside a stylised SVG dot-map with animated location pins.',
    tags: ['contact', 'map', 'offices', 'support'],
    usage: `<ContactSplitMap
  offices={[{ city: 'Madrid', address: 'Gran Vía 1', x: 47, y: 38 }]}
  channels={[{ label: 'Email', value: 'hi@site.com', href: 'mailto:hi@site.com', icon: 'mail' }]}
/>`,
  }),

  // === LOGOS ===
  section({
    slug: 'logo-wall-grid', name: 'Logo Wall Grid', file: 'LogoWallGrid.astro', sectionCategory: 'logos',
    description: 'Static customer logo wall with hairline dividers; text wordmarks by default or real logo images.',
    tags: ['logos', 'customers', 'social-proof', 'grid'],
    usage: `<LogoWallGrid
  columns={4}
  logos={[{ name: 'Acme' }, { name: 'Globex', src: '/logos/globex.svg' }]}
/>`,
  }),

  // === CONTENT ===
  section({
    slug: 'blog-grid-section', name: 'Blog Grid Section', file: 'BlogGridSection.astro', sectionCategory: 'content',
    description: 'Latest articles with a featured post and a grid of cards, gradient covers, categories and read time.',
    tags: ['blog', 'articles', 'posts', 'content'],
    usage: `<BlogGridSection
  posts={[
    { title: 'Zero-JS charts', excerpt: '…', category: 'Engineering', date: '2026-10-28', readTime: '8 min', author: 'Marcus', href: '/blog/charts' },
  ]}
/>`,
  }),
  section({
    slug: 'changelog-section', name: 'Changelog Section', file: 'ChangelogSection.astro', sectionCategory: 'content',
    description: 'Release-notes timeline with version tags, dates and new/improved/fixed entries labelled by text and icon.',
    tags: ['changelog', 'releases', 'timeline', 'updates'],
    usage: `<ChangelogSection
  releases={[
    { version: 'v1.0.0', date: '2026-11-01', title: 'Stable', changes: [{ type: 'new', text: 'First stable release.' }] },
  ]}
/>`,
  }),

  // === FOOTER ===
  section({
    slug: 'footer-mega-section', name: 'Footer Mega Section', file: 'FooterMegaSection.astro', sectionCategory: 'footer',
    description: 'Full site footer with brand, newsletter field, link columns, status pill, social icons and legal row.',
    tags: ['footer', 'navigation', 'newsletter', 'social'],
    usage: `<FooterMegaSection
  brand="Acme"
  columns={[{ title: 'Product', links: [{ label: 'Pricing', href: '/pricing' }] }]}
  socials={[{ label: 'GitHub', href: 'https://github.com', icon: 'github' }]}
/>`,
  }),

  // === E-COMMERCE (editorial) ===
  section({
    slug: 'shop-header-editorial', name: 'Shop Header Editorial', file: 'ShopHeaderEditorial.astro', sectionCategory: 'commerce',
    description: "Editorial store header: announcement line, centred wordmark, mega menu with feature tile, theme toggle and live bag count.",
    tags: ["header", "navbar", "mega-menu", "ecommerce", "editorial"], featured: true,
    usage: `<ShopHeaderEditorial brand="Forma" bagHref="/bag/" links={[
  { label: 'Shop', href: '/shop/', columns: [{ title: 'Clothing', links: [{ label: 'Knitwear', href: '/shop/?category=knit' }] }] },
  { label: 'Journal', href: '/journal/' },
]} />`,
  }),
  section({
    slug: 'shop-hero-editorial', name: 'Shop Hero Editorial', file: 'ShopHeroEditorial.astro', sectionCategory: 'commerce',
    description: "Magazine-style shop hero with oversized serif headline, italic accent word, issue meta, feature image with caption and a running ticker.",
    tags: ["hero", "ecommerce", "editorial", "typography"], featured: true,
    usage: `<ShopHeroEditorial title="Quiet *objects* for everyday rituals" primary={{ label: 'Shop now', href: '/shop/' }} />`,
  }),
  section({
    slug: 'shop-collection-mosaic', name: 'Shop Collection Mosaic', file: 'ShopCollectionMosaic.astro', sectionCategory: 'commerce',
    description: "Asymmetric collection grid with a tall feature tile, numbered tiles, item counts and underline links.",
    tags: ["collections", "grid", "ecommerce", "categories"],
    usage: `<ShopCollectionMosaic title="Shop by *intention*" items={[
  { title: 'The wardrobe', href: '/shop/?category=clothing', count: 24, icon: 'jacket', hue: 22 },
  { title: 'At the table', href: '/shop/?category=objects', count: 12, icon: 'mug', hue: 14 },
  { title: 'To carry', href: '/shop/?category=bags', count: 8, icon: 'bag', hue: 34 },
]} />`,
  }),
  section({
    slug: 'shop-product-rail', name: 'Shop Product Rail', file: 'ShopProductRail.astro', sectionCategory: 'commerce',
    description: "Scroll-snapping product carousel of minimal product cards with numbering, prev/next buttons and a progress line.",
    tags: ["carousel", "products", "ecommerce", "slider"], featured: true,
    usage: `<ShopProductRail title="New this *week*" products={products} productBase="/product/" />`,
  }),
  section({
    slug: 'shop-lookbook', name: 'Shop Lookbook', file: 'ShopLookbook.astro', sectionCategory: 'commerce',
    description: "\"Shop the look\" image with numbered hotspots that open product cards with add-to-bag, mirrored by an accessible product list.",
    tags: ["lookbook", "hotspots", "ecommerce", "shoppable"], featured: true,
    usage: `<ShopLookbook title="Shop the *look*" spots={[
  { x: 40, y: 32, product: { slug: 'overshirt', name: 'Linen Overshirt', price: 145, category: 'clothing', icon: 'shirt' }, href: '/product/overshirt/' },
]} />`,
  }),
  section({
    slug: 'shop-values-marquee', name: 'Shop Values Marquee', file: 'ShopValuesMarquee.astro', sectionCategory: 'commerce',
    description: "Brand promise band: oversized italic marquee followed by numbered value columns.",
    tags: ["marquee", "values", "ecommerce", "brand"],
    usage: `<ShopValuesMarquee words={['Made slowly', 'Natural fibres']} values={[{ title: 'Honest materials', text: 'Traceable to the mill.' }]} />`,
  }),
  section({
    slug: 'shop-reviews-editorial', name: 'Shop Reviews Editorial', file: 'ShopReviewsEditorial.astro', sectionCategory: 'commerce',
    description: "Large serif customer quotes, one at a time, with product context, numbered pager and overall score.",
    tags: ["reviews", "testimonials", "ecommerce", "carousel"],
    usage: `<ShopReviewsEditorial score={4.9} count={1284} reviews={[{ quote: 'Softer every wash.', name: 'Inés M.', product: 'Linen Overshirt' }]} />`,
  }),
  section({
    slug: 'shop-newsletter-editorial', name: 'Shop Newsletter Editorial', file: 'ShopNewsletterEditorial.astro', sectionCategory: 'commerce',
    description: "Oversized editorial sign-up with underline email field, consent note and inline validation.",
    tags: ["newsletter", "form", "ecommerce", "cta"],
    usage: `<ShopNewsletterEditorial title="Letters from the *studio*" variant="accent" />`,
  }),
  section({
    slug: 'shop-footer-wordmark', name: 'Shop Footer Wordmark', file: 'ShopFooterWordmark.astro', sectionCategory: 'commerce',
    description: "Store footer with link columns, contact block, payment labels and a giant edge-to-edge wordmark.",
    tags: ["footer", "ecommerce", "wordmark"],
    usage: `<ShopFooterWordmark brand="Forma" />`,
  }),
  section({
    slug: 'shop-category-hero', name: 'Shop Category Hero', file: 'ShopCategoryHero.astro', sectionCategory: 'commerce',
    description: "Catalogue header with breadcrumb, oversized category title and count, intro, sub-category links and an image strip.",
    tags: ["category", "header", "ecommerce", "catalog"],
    usage: `<ShopCategoryHero title="Clothing" count={24} links={[{ label: 'All', href: '/shop/', active: true }, { label: 'Knitwear', href: '/shop/knit/' }]} />`,
  }),
];
