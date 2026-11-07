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

  // === AGENCY & MARKETING ===
  section({
    slug: 'agency-header', name: 'Agency Header', file: 'AgencyHeader.astro', sectionCategory: 'agency',
    description: "Floating pill navigation for agency sites: logo, links, theme toggle, CTA and an animated full-screen mobile menu.",
    tags: ["header", "navbar", "agency", "mobile-menu"], featured: true,
    usage: `<AgencyHeader brand="Volta" links={[{ label: 'Services', href: '/services/' }, { label: 'Work', href: '/work/' }]} cta={{ label: 'Free audit', href: '/contact/' }} />`,
  }),
  section({
    slug: 'agency-hero-kinetic', name: 'Agency Hero Kinetic', file: 'AgencyHeroKinetic.astro', sectionCategory: 'agency',
    description: "Agency hero with an oversized headline whose last word rotates like a marker highlight, CTAs, client proof and floating stickers.",
    tags: ["hero", "agency", "kinetic", "typography"], featured: true,
    usage: `<AgencyHeroKinetic before="More customers from" words={['Google Ads', 'Meta', 'SEO']} />`,
  }),
  section({
    slug: 'agency-page-hero', name: 'Agency Page Hero', file: 'AgencyPageHero.astro', sectionCategory: 'agency',
    description: "Inner-page hero: breadcrumb, eyebrow, oversized headline with a highlighted word, intro, CTA and key figures.",
    tags: ["hero", "inner-page", "breadcrumb", "agency"],
    usage: `<AgencyPageHero eyebrow="Services" title="Growth you can *measure*" breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />`,
  }),
  section({
    slug: 'agency-service-pillars', name: 'Agency Service Pillars', file: 'AgencyServicePillars.astro', sectionCategory: 'agency',
    description: "Service cards for a marketing agency (Ads, SEO, Web): icon, pitch, headline KPI, deliverables, price and a stretched link.",
    tags: ["services", "cards", "agency", "marketing"], featured: true,
    usage: `<AgencyServicePillars services={[{ name: 'Paid Ads', short: 'Campaigns built around profit.', icon: 'ads', kpi: { value: '4.8×', label: 'ROAS' }, href: '/services/ads/' }]} />`,
  }),
  section({
    slug: 'agency-services-list', name: 'Agency Services List', file: 'AgencyServicesList.astro', sectionCategory: 'agency',
    description: "Numbered, expandable service rows: big names, pitch, deliverable chips, timeline and \"from\" price.",
    tags: ["services", "accordion", "agency", "pricing"],
    usage: `<AgencyServicesList services={[{ name: 'SEO', pitch: 'Traffic you do not pay for.', deliverables: ['Audit', 'Content'], timeline: 'Monthly', from: '€1,500 / mo' }]} />`,
  }),
  section({
    slug: 'agency-results-band', name: 'Agency Results Band', file: 'AgencyResultsBand.astro', sectionCategory: 'agency',
    description: "Proof band of big results (€42M, 4.8×, +212%) that count up on scroll, with labels and fine print.",
    tags: ["stats", "counters", "results", "agency"],
    usage: `<AgencyResultsBand stats={[{ value: '4.8×', label: 'average ROAS' }, { value: '+212%', label: 'organic growth' }]} />`,
  }),
  section({
    slug: 'agency-platforms-marquee', name: 'Agency Platforms Marquee', file: 'AgencyPlatformsMarquee.astro', sectionCategory: 'agency',
    description: "Two counter-scrolling rows of platforms and tools (Google Ads, Meta, Search Console…) with partner badges.",
    tags: ["marquee", "logos", "partners", "agency"],
    usage: `<AgencyPlatformsMarquee platforms={['Google Ads', 'Meta', 'TikTok', 'GA4']} badges={['Google Partner']} />`,
  }),
  section({
    slug: 'agency-process-steps', name: 'Agency Process Steps', file: 'AgencyProcessSteps.astro', sectionCategory: 'agency',
    description: "\"How we work\" timeline with numbered phases and durations, joined by a line that fills on scroll.",
    tags: ["process", "timeline", "steps", "agency"],
    usage: `<AgencyProcessSteps steps={[{ title: 'Audit', text: 'We size the opportunity.', duration: 'Week 1' }, { title: 'Launch', text: 'Campaigns go live.', duration: 'Week 2' }]} />`,
  }),
  section({
    slug: 'agency-audit-cta', name: 'Agency Audit CTA', file: 'AgencyAuditCta.astro', sectionCategory: 'agency',
    description: "Free growth audit lead magnet: website and email form with validation, animated scan and a score gauge with top findings.",
    tags: ["lead-magnet", "form", "audit", "seo", "agency"], featured: true,
    usage: `<AgencyAuditCta cta={{ label: 'Book a call', href: '/contact/' }} />`,
  }),
  section({
    slug: 'agency-roi-calculator', name: 'Agency ROI Calculator', file: 'AgencyRoiCalculator.astro', sectionCategory: 'agency',
    description: "Paid-ads ROI calculator: sliders for spend, CPC, conversion rate and order value with live revenue, ROAS and optimised projection.",
    tags: ["calculator", "roi", "ads", "interactive", "agency"], featured: true,
    usage: `<AgencyRoiCalculator spend={10000} cpc={0.9} cvr={2.2} aov={85} uplift={25} />`,
  }),
  section({
    slug: 'agency-pricing-packages', name: 'Agency Pricing Packages', file: 'AgencyPricingPackages.astro', sectionCategory: 'agency',
    description: "Agency pricing with a tab per service, three packages each and a monthly / 6-month billing switch for retainers.",
    tags: ["pricing", "tabs", "retainer", "agency"], featured: true,
    usage: `<AgencyPricingPackages tabs={[{ id: 'seo', label: 'SEO', packages: [{ name: 'Starter', price: 1500, billing: 'monthly', note: 'One market.', features: ['Audit', '4 pages / mo'] }] }]} />`,
  }),
  section({
    slug: 'agency-service-overview', name: 'Agency Service Overview', file: 'AgencyServiceOverview.astro', sectionCategory: 'agency',
    description: "Service detail: sticky pitch with outcome figures, tool stack and CTA next to a numbered \"What's included\" list.",
    tags: ["service", "details", "included", "agency"],
    usage: `<AgencyServiceOverview title="Everything in our SEO service" included={[{ title: 'Technical SEO', text: 'Crawl, speed and schema.' }]} tools={['Search Console', 'Ahrefs']} />`,
  }),
  section({
    slug: 'agency-work-grid', name: 'Agency Work Grid', file: 'AgencyWorkGrid.astro', sectionCategory: 'agency',
    description: "Case-study grid with category filter chips, large art tiles, client, title, services and a headline result.",
    tags: ["portfolio", "case-studies", "filter", "agency"],
    usage: `<AgencyWorkGrid projects={[{ slug: 'nordlys', client: 'Nordlys', title: 'Scaling to 6.2× ROAS', category: 'Ads', result: '6.2× ROAS', hue: 190, href: '/work/nordlys/' }]} />`,
  }),
  section({
    slug: 'agency-case-study-hero', name: 'Agency Case Study Hero', file: 'AgencyCaseStudyHero.astro', sectionCategory: 'agency',
    description: "Case-study header: back link, client and category, headline, summary, project facts and a big result over generated art.",
    tags: ["case-study", "hero", "agency", "portfolio"],
    usage: `<AgencyCaseStudyHero client="Nordlys" category="Ads" title="Scaling a skincare brand to 6.2× ROAS" result="6.2× ROAS" hue={190} />`,
  }),
  section({
    slug: 'agency-case-results', name: 'Agency Case Results', file: 'AgencyCaseResults.astro', sectionCategory: 'agency',
    description: "Case-study body: challenge, numbered approach, before/after metrics table, 12-month SVG results chart and client quote.",
    tags: ["case-study", "results", "chart", "agency"],
    usage: `<AgencyCaseResults challenge="Tracking missed 30% of sales." metrics={[{ label: 'ROAS', before: '2.1×', after: '6.2×', change: '+195%' }]} series={[42, 61, 92, 131, 188]} />`,
  }),
  section({
    slug: 'agency-quotes', name: 'Agency Quotes', file: 'AgencyQuotes.astro', sectionCategory: 'agency',
    description: "Client testimonials with a large lead quote, the measurable result each one produced, avatars and an aggregate rating.",
    tags: ["testimonials", "reviews", "results", "agency"],
    usage: `<AgencyQuotes quotes={[{ quote: 'They tripled our revenue.', name: 'Freja Lund', role: 'Co-founder', company: 'Nordlys', result: '6.2× ROAS' }]} />`,
  }),
  section({
    slug: 'agency-team-grid', name: 'Agency Team Grid', file: 'AgencyTeamGrid.astro', sectionCategory: 'agency',
    description: "Team portraits with role, location, a fun fact revealed on hover or focus, social links and a \"we are hiring\" card.",
    tags: ["team", "people", "agency", "hiring"],
    usage: `<AgencyTeamGrid people={[{ name: 'Marta Ibáñez', role: 'Founder', location: 'Madrid', fact: 'Managed €20M in ads.' }]} />`,
  }),
  section({
    slug: 'agency-contact-brief', name: 'Agency Contact Brief', file: 'AgencyContactBrief.astro', sectionCategory: 'agency',
    description: "\"Start a project\" brief: service chips, budget pills, timeline, details and message with validation, plus direct contacts.",
    tags: ["contact", "form", "brief", "agency"], featured: true,
    usage: `<AgencyContactBrief services={['Paid Ads', 'SEO', 'Web']} budgets={['< €2k / mo', '€2–5k / mo']} />`,
  }),
  section({
    slug: 'agency-footer-cta', name: 'Agency Footer CTA', file: 'AgencyFooterCta.astro', sectionCategory: 'agency',
    description: "Agency footer led by a giant \"Let's talk\" link, then link columns, offices, socials and the legal line.",
    tags: ["footer", "cta", "agency"],
    usage: `<AgencyFooterCta brand="Volta" email="hello@volta.agency" />`,
  }),

  // === DEVELOPER PORTFOLIO ("Keycap") ===
  section({
    slug: 'dev-header', name: 'Dev Header', file: 'DevHeader.astro', sectionCategory: 'portfolio',
    description: "Floating navigation with a split logo that collapses on scroll (N·OALINDQVIST·.DEV → N.DEV), pill links, light/dark toggle and a full-screen mobile menu.",
    tags: ["header", "navbar", "portfolio", "theme-toggle"], featured: true,
    usage: `<DevHeader logo={{ initial: 'K', middle: 'EYCAP', suffix: '.DEV' }} links={[{ label: 'Projects', href: '/projects/' }, { label: 'Blog', href: '/blog/' }]} />`,
  }),
  section({
    slug: 'dev-hero', name: 'Dev Hero', file: 'DevHero.astro', sectionCategory: 'portfolio',
    description: "Developer hero: an oversized title that retypes itself, the name dropping in with floating blocks, a status pill and an endless tape of skill cards with tooltips, over a 3D dot matrix that parts around the cursor.",
    tags: ["hero", "portfolio", "three", "typewriter", "skills"], featured: true,
    usage: `<!-- npm install three -->
<DevHero
  titles={[{ base: 'Soft', ext: 'ware', role: 'Developer' }, { base: 'Front', ext: 'end', role: 'Engineer' }]}
  name="Noa Lindqvist"
  status="Available for freelance"
  skills={[{ category: 'Frontend', skills: [{ name: 'React', description: 'Component architecture and design systems.' }] }]}
/>`,
  }),
  section({
    slug: 'dev-projects-showcase', name: 'Dev Projects Showcase 3D', file: 'DevProjectsShowcase.astro', sectionCategory: 'portfolio',
    description: "3D projects slider: paper cards with ink outlines fanned out in perspective, each with an animated visual chosen by data (code, terminal, equalizer, monitor, endpoints, paint, atom). Drag, keys or arrows to move; click to open a project sheet.",
    tags: ["projects", "slider", "three", "3d", "portfolio", "carousel"], featured: true,
    usage: `<!-- npm install three -->
<DevProjectsShowcase projects={[
  { title: 'Orbit UI', tagline: 'Accessible React kit', category: 'Frontend', description: 'Typed, accessible components.', technologies: ['React', 'TypeScript'], visual: { kind: 'atom' } },
  { title: 'Tidy', tagline: 'Frees disk space', category: 'Developer Tools', description: 'Removes stale caches safely.', technologies: ['Rust'], visual: { kind: 'terminal' } },
]} />`,
  }),
  section({
    slug: 'dev-keyboard', name: 'Dev Keyboard 3D', file: 'DevKeyboard.astro', sectionCategory: 'portfolio',
    description: "Full-width 3D mechanical keyboard that types your stack by itself and echoes each word as a huge backdrop; slot content (e.g. a repo list) floats over the lower rows.",
    tags: ["keyboard", "three", "3d", "typing", "portfolio"], featured: true,
    usage: `<!-- npm install three -->
<DevKeyboard phrases={['ASTRO', 'REACT', 'TYPESCRIPT']}>
  <DevRepoList repos={repos} />
</DevKeyboard>`,
  }),
  section({
    slug: 'dev-repo-list', name: 'Dev Repo List', file: 'DevRepoList.astro', sectionCategory: 'portfolio',
    description: "Frosted list of open-source repositories with language dot, stars, description, source link and a live-site eye; reveals the rest with “Show all”.",
    tags: ["github", "repositories", "list", "portfolio"],
    usage: `<DevRepoList profile={{ label: 'github.com/you', href: 'https://github.com/you' }} repos={[{ name: 'orbit-ui', description: 'React kit', language: 'TypeScript', color: '#3178c6', stars: 120, url: '#' }]} />`,
  }),
  section({
    slug: 'dev-contributions', name: 'Dev Contributions 3D', file: 'DevContributions.astro', sectionCategory: 'portfolio',
    description: "GitHub-style contribution matrix in 3D: barely-rounded cubes fly in from the sky and assemble, keep rebuilding, and ripple like water around the cursor; tooltips with date and count. Pass weeks, a URL or use demo data.",
    tags: ["github", "contributions", "calendar", "three", "3d", "portfolio"], featured: true,
    usage: `<!-- npm install three -->
<DevContributions title="A year of commits" src="/api/contributions.json" />`,
  }),
  section({
    slug: 'dev-monitor', name: 'Dev Monitor 3D', file: 'DevMonitor.astro', sectionCategory: 'portfolio',
    description: "3D CRT monitor with ink outlines that drops into place, sways with the cursor and types terminal lines on an inverted screen.",
    tags: ["terminal", "monitor", "three", "3d", "portfolio"],
    usage: `<!-- npm install three -->
<DevMonitor lines={['$ npm run build', '> built in 1.2s']} />`,
  }),
  section({
    slug: 'dev-contact', name: 'Dev Contact', file: 'DevContact.astro', sectionCategory: 'portfolio',
    description: "Contact block with a glass capsule of cards (email, GitHub, LinkedIn…) and an optional CTA to the contact page.",
    tags: ["contact", "cta", "portfolio"],
    usage: `<DevContact contacts={[{ kind: 'email', label: 'Email', value: 'hi@you.dev', href: 'mailto:hi@you.dev' }]} cta={{ label: 'Start a project', href: '/contact/' }} />`,
  }),
  section({
    slug: 'dev-footer', name: 'Dev Footer', file: 'DevFooter.astro', sectionCategory: 'portfolio',
    description: "Minimal footer with a row of mono links, copyright and a small “built with” note.",
    tags: ["footer", "portfolio", "minimal"],
    usage: `<DevFooter name="Noa Lindqvist" links={[{ label: 'Blog', href: '/blog/' }]} note="Built with Astro" />`,
  }),
  section({
    slug: 'dev-page-hero', name: 'Dev Page Hero', file: 'DevPageHero.astro', sectionCategory: 'portfolio',
    description: "Inner-page hero with breadcrumb, HUD label, two-line sliding title, intro and an optional slot on the right (e.g. a 3D monitor).",
    tags: ["hero", "inner-page", "breadcrumb", "portfolio"],
    usage: `<DevPageHero label="PROJECTS // INDEX" title="Things I've" titleAccent="built & shipped." />`,
  }),
  section({
    slug: 'dev-project-grid', name: 'Dev Project Grid', file: 'DevProjectGrid.astro', sectionCategory: 'portfolio',
    description: "Keycap-style project cards (ink outline, hard shadow that presses on hover) with number, category, stack, status and stars, plus category filter keys.",
    tags: ["projects", "grid", "filter", "portfolio"],
    usage: `<DevProjectGrid projects={[{ title: 'Orbit UI', tagline: 'Accessible React kit', category: 'Frontend', href: '/projects/orbit-ui/', status: 'Live' }]} />`,
  }),
  section({
    slug: 'dev-project-detail', name: 'Dev Project Detail', file: 'DevProjectDetail.astro', sectionCategory: 'portfolio',
    description: "Project case study: overview, challenge, solution and highlights next to a sticky spec sheet (role, year, status, stack, metrics, links), with previous / next keys.",
    tags: ["case-study", "project", "spec-sheet", "portfolio"],
    usage: `<DevProjectDetail project={{ title: 'Tidy', description: 'Frees disk space.', technologies: ['Rust'], role: 'Author', year: '2025' }} />`,
  }),
  section({
    slug: 'dev-post-list', name: 'Dev Post List', file: 'DevPostList.astro', sectionCategory: 'portfolio',
    description: "Blog index with a featured latest post and a hairline list (date, category, reading time, excerpt) filtered by category.",
    tags: ["blog", "posts", "list", "portfolio"],
    usage: `<DevPostList posts={[{ title: 'Damped springs', excerpt: 'Why per-frame tweens feel rubbery.', href: '/blog/springs/', date: '2026-09-14', category: 'animation' }]} />`,
  }),
  section({
    slug: 'dev-article', name: 'Dev Article', file: 'DevArticle.astro', sectionCategory: 'portfolio',
    description: "Blog post layout: meta line, title, lead, tags, reading-progress bar, monochrome prose with code blocks and previous / next keys.",
    tags: ["blog", "article", "prose", "portfolio"],
    usage: `<DevArticle title="Damped springs" date="2026-09-14" category="animation" html="<p>…</p>" />`,
  }),
  section({
    slug: 'dev-contact-form', name: 'Dev Contact Form', file: 'DevContactForm.astro', sectionCategory: 'portfolio',
    description: "Project inquiry form with project-type keys, budget and message, inline validation, success state and an aside with availability and direct contacts.",
    tags: ["contact", "form", "validation", "portfolio"],
    usage: `<DevContactForm action="https://your-backend/contact" contacts={[{ label: 'Email', value: 'hi@you.dev', href: 'mailto:hi@you.dev' }]} />`,
  }),

  // === TOY STORE ("Kapow") ===
  section({
    slug: 'toy-hero', name: 'Toy Hero', file: 'ToyHero.astro', sectionCategory: 'toys',
    description: "Comic-book store hero: burst eyebrow, oversized headline with a highlighted word, CTAs and stats beside a halftone stage with the featured figure, a starburst price sticker and floating sidekick avatars.",
    tags: ["hero", "toys", "comic", "ecommerce"], featured: true,
    usage: `<ToyHero
  title="Every hero needs a"
  highlight="sidekick"
  primary={{ label: 'Shop all figures', href: '/shop/' }}
  product={{ slug: 'captain-nova-6in', name: 'Captain Nova', price: 24.99, category: 'figures', icon: 'figure', hue: 212 }}
  productHref="/product/captain-nova-6in/"
/>`,
  }),
  section({
    slug: 'toy-character-rail', name: 'Toy Character Rail', file: 'ToyCharacterRail.astro', sectionCategory: 'toys',
    description: "Shop-by-character rail of round comic avatars. Links to character pages, or (filter mode) toggles a FilterSidebar character facet so the grid shows only that character's figures — multi-select, URL-synced.",
    tags: ["characters", "filters", "avatars", "toys", "carousel"], featured: true,
    usage: `<!-- Link mode -->
<ToyCharacterRail characters={[{ id: 'vex', name: 'Vex', icon: 'figure', hue: 286, faction: 'villain', href: '/characters/vex/' }]} />

<!-- Filter mode: drives FilterSidebar's "character" facet -->
<ToyCharacterRail mode="filter" filters="toy-filters" facet="character" title="" characters={characters} />`,
  }),
  section({
    slug: 'toy-character-grid', name: 'Toy Character Grid', file: 'ToyCharacterGrid.astro', sectionCategory: 'toys',
    description: "Character roster as trading cards (avatar, alias, universe, hero / villain stamp, power meters, figure count) with instant side and universe filters and a live count.",
    tags: ["characters", "grid", "filters", "toys", "cards"], featured: true,
    usage: `<ToyCharacterGrid
  characters={[{ id: 'vex', name: 'Vex', alias: 'The Void Empress', icon: 'figure', hue: 286, href: '/characters/vex/',
    universe: 'Star Rangers', universeId: 'star-rangers', faction: 'villain', count: 3, powers: [{ label: 'Cunning', value: 10 }] }]}
  universes={[{ id: 'star-rangers', name: 'Star Rangers' }]}
/>`,
  }),
  section({
    slug: 'toy-character-hero', name: 'Toy Character Hero', file: 'ToyCharacterHero.astro', sectionCategory: 'toys',
    description: "Character profile header: comic panel with art, hero / villain stamp and speech-bubble quote, plus universe, name, alias, bio, power-level meters, facts and CTAs.",
    tags: ["character", "profile", "hero", "toys", "meter"],
    usage: `<ToyCharacterHero
  character={{ name: 'Kira Blaze', alias: 'Fire-blade ninja', icon: 'ninja', hue: 12, faction: 'hero', universe: 'Shadow Clan',
    quote: 'Fear is just fuel.', powers: [{ label: 'Speed', value: 10 }, { label: 'Focus', value: 9 }] }}
  count={3}
  primary={{ label: 'Shop Kira Blaze', href: '#figures' }}
/>`,
  }),
  section({
    slug: 'toy-age-finder', name: 'Toy Age Finder', file: 'ToyAgeFinder.astro', sectionCategory: 'toys',
    description: "\"Who is it for?\" gift finder: colourful age-group tiles (range, name, description, toy count) that link to a pre-filtered catalogue, plus optional budget links.",
    tags: ["gift-finder", "age", "toys", "navigation"],
    usage: `<ToyAgeFinder
  groups={[{ id: 'kids', name: 'Kids', range: '6–8', icon: 'figure', hue: 8, href: '/shop/?age=kids', count: 14 }]}
  budgets={[{ label: 'Under $25', href: '/shop/?max=25' }]}
/>`,
  }),
  section({
    slug: 'toy-spec-sheet', name: 'Toy Spec Sheet', file: 'ToySpecSheet.astro', sectionCategory: 'toys',
    description: "\"Figure file\" for toy product pages: specs (scale, size, age, materials, batteries), articulation badge, \"In the box\" checklist and a small-parts safety warning.",
    tags: ["specs", "product-page", "toys", "safety"],
    usage: `<ToySpecSheet
  specs={[{ label: 'Scale', value: '6 in · 15 cm' }, { label: 'Recommended age', value: '4+' }]}
  articulation={28}
  accessories={['Star blaster', 'Display stand']}
/>`,
  }),
  section({
    slug: 'toy-collector-club', name: 'Toy Collector Club', file: 'ToyCollectorClub.astro', sectionCategory: 'toys',
    description: "Loyalty band for toy and collectibles stores: perks, an animated stamp card, membership tiers and a join form with inline validation.",
    tags: ["loyalty", "newsletter", "membership", "toys", "form"],
    usage: `<ToyCollectorClub filled={6} stamps={10} action="https://your-backend/club" />`,
  }),

  // === HEALTHCARE ("Pulso") ===
  section({
    slug: 'med-hero', name: 'Med Hero', file: 'MedHero.astro', sectionCategory: 'healthcare',
    description: "Landing hero for healthcare software: badge, headline with a highlighted phrase, CTAs and trust points beside an HTML mock-up of today's agenda, a video visit and a booking notice.",
    tags: ["hero", "healthcare", "saas", "clinic"], featured: true,
    usage: `<MedHero title="Run your practice," highlight="not your paperwork" primary={{ label: 'Start free', href: '/sign-in/' }} />`,
  }),
  section({
    slug: 'med-doctor-directory', name: 'Med Doctor Directory', file: 'MedDoctorDirectory.astro', sectionCategory: 'healthcare',
    description: "Find-a-doctor section: search by name or language, specialty chips and a video toggle filter clinician cards with rating, fee, availability and a Book link.",
    tags: ["doctors", "directory", "filters", "healthcare", "team"], featured: true,
    usage: `<MedDoctorDirectory bookHref="/book/#book"
  specialties={[{ id: 'general', name: 'General practice' }]}
  doctors={[{ id: 'dr-navarro', name: 'Dr. Laura Navarro', specialty: 'general', rating: 4.9, fee: 60, telehealth: true, days: [0, 2, 4] }]} />`,
  }),
  section({
    slug: 'med-booking-wizard', name: 'Med Booking Wizard', file: 'MedBookingWizard.astro', sectionCategory: 'healthcare',
    description: "Online appointment booking in four accessible steps — service, clinician and visit type, day and slot, patient details and consent — with a reference and an .ics calendar file.",
    tags: ["booking", "appointments", "form", "wizard", "healthcare"], featured: true,
    usage: `<!-- Pre-select with ?doctor=dr-navarro or ?specialty=general -->
<MedBookingWizard clinic="Clínica Alameda" specialties={specialties} doctors={doctors} />`,
  }),

  // === CYBERPUNK / BRUTALIST ("NULL/SECTOR") ===
  section({
    slug: 'cyber-header', name: 'Cyber Header', file: 'CyberHeader.astro', sectionCategory: 'cyberpunk',
    description: 'Brutalist cyberpunk navigation: bracketed wordmark, numbered links on hard rules, blinking system status, NIGHT / DAY switch, acid CTA and a full-screen mobile menu.',
    tags: ['header', 'navbar', 'cyberpunk', 'brutalist'], featured: true,
    usage: `<CyberHeader brand="NULL/SECTOR" links={[{ label: 'Protocol', href: '/protocol/' }]} cta={{ label: 'Jack in', href: '/pricing/' }} />`,
  }),
  section({
    slug: 'cyber-hero', name: 'Cyber Hero', file: 'CyberHero.astro', sectionCategory: 'cyberpunk',
    description: 'Futuristic-brutalist hero: HUD bar with live UTC clock, colossal headline with a glitching and an outlined line, CyberpunkButton + NeonBorderButton CTAs and a live telemetry panel over a perspective grid floor.',
    tags: ['hero', 'cyberpunk', 'glitch', 'hud'], featured: true,
    usage: `<CyberHero lines={['RENT THE', 'DARK SIDE', 'OF THE GRID']} glitch={1} primary={{ label: 'Jack in', href: '/pricing/' }} />`,
  }),
  section({
    slug: 'cyber-ticker', name: 'Cyber Ticker', file: 'CyberTicker.astro', sectionCategory: 'cyberpunk',
    description: 'Brutalist status marquee in acid, ink or outline style, tiltable and reversible, with a pause button and a static fallback for reduced motion.',
    tags: ['marquee', 'ticker', 'cyberpunk', 'status'],
    usage: `<CyberTicker items={['NODE TYO-04 ONLINE', 'BLOCK 18,204,113 SEALED']} variant="acid" />`,
  }),
  section({
    slug: 'cyber-bento', name: 'Cyber Bento', file: 'CyberBento.astro', sectionCategory: 'cyberpunk',
    description: 'Feature grid on hard rules with numbered cells, wide and tall spans and big stat readouts; each cell is a CyberFeatureCard.',
    tags: ['features', 'bento', 'grid', 'cyberpunk'], featured: true,
    usage: `<CyberBento features={[{ code: '01', title: 'Spot clusters in 9 seconds', text: '…', stat: '9S', span: 'wide' }]} />`,
  }),
  section({
    slug: 'cyber-node-map', name: 'Cyber Node Map', file: 'CyberNodeMap.astro', sectionCategory: 'cyberpunk',
    description: 'Dot-matrix world map with nodes by latitude / longitude, animated links, pulsing status rings and a scanner sweep, next to a live regions table.',
    tags: ['map', 'network', 'infrastructure', 'cyberpunk', 'svg'], featured: true,
    usage: `<CyberNodeMap nodes={[{ id: 'ams', city: 'Amsterdam', lat: 52.4, lon: 4.9, gpus: 5260, latency: 22 }]} connections={[['ams', 'nyc']]} />`,
  }),
  section({
    slug: 'cyber-page-hero', name: 'Cyber Page Hero', file: 'CyberPageHero.astro', sectionCategory: 'cyberpunk',
    description: 'Inner-page header: SYS:// breadcrumb, giant outlined index number, uppercase title with an outlined line, intro and meta tags; scan, plain or acid background.',
    tags: ['header', 'page-hero', 'cyberpunk', 'brutalist'],
    usage: `<CyberPageHero index="02" title="PAY PER" outline="SECOND" variant="acid" />`,
  }),
  section({
    slug: 'cyber-spec-table', name: 'Cyber Spec Table', file: 'CyberSpecTable.astro', sectionCategory: 'cyberpunk',
    description: 'Grouped spec sheet on a brutalist grid with classified values that decrypt with a scramble effect, a decrypt-all switch and a HackerDecodeText heading.',
    tags: ['specs', 'table', 'redacted', 'cyberpunk'],
    usage: `<CyberSpecTable groups={[{ group: 'SECURITY', rows: [{ key: 'Key custody', value: 'Customer-held', redacted: true }] }]} />`,
  }),
  section({
    slug: 'cyber-pricing', name: 'Cyber Pricing', file: 'CyberPricing.astro', sectionCategory: 'cyberpunk',
    description: "Brutalist pricing with monthly / annual switch and a usage slider that recalculates every tier's estimated bill live; inverted acid featured plan and CyberpunkButton CTAs.",
    tags: ['pricing', 'calculator', 'slider', 'cyberpunk'], featured: true,
    usage: `<CyberPricing hours={200} plans={[{ id: 'runner', name: 'RUNNER', monthly: 49, annual: 39, rate: 0.48, credits: 400, features: ['H100'], cta: 'Jack in', featured: true }]} />`,
  }),
  section({
    slug: 'cyber-manifesto', name: 'Cyber Manifesto', file: 'CyberManifesto.astro', sectionCategory: 'cyberpunk',
    description: 'Numbered theses with giant outlined numbers and uppercase statements that light up as they scroll into view, with a signed closing line.',
    tags: ['manifesto', 'about', 'scroll', 'cyberpunk'],
    usage: `<CyberManifesto theses={[{ title: 'Compute is a commons.', text: '…' }]} />`,
  }),
  section({
    slug: 'cyber-crew-grid', name: 'Cyber Crew Grid', file: 'CyberCrewGrid.astro', sectionCategory: 'cyberpunk',
    description: 'Team as access badges: generated pixel-glyph avatars, handle, ID code, role, location and a clearance meter, with a glitch shift on hover.',
    tags: ['team', 'badges', 'identicon', 'cyberpunk'],
    usage: `<CyberCrewGrid crew={[{ name: 'Mara Okonkwo', handle: 'm4ra', role: 'Founder', clearance: 5 }]} />`,
  }),
  section({
    slug: 'cyber-status-board', name: 'Cyber Status Board', file: 'CyberStatusBoard.astro', sectionCategory: 'cyberpunk',
    description: 'Uptime board: overall status banner and one row per region with a 60-day strip, uptime %, ping and current state.',
    tags: ['status', 'uptime', 'monitoring', 'cyberpunk'],
    usage: `<CyberStatusBoard regions={[{ name: 'EU-WEST', city: 'Amsterdam', uptime: 100, latency: 22 }]} />`,
  }),
  section({
    slug: 'cyber-terminal-form', name: 'Cyber Terminal Form', file: 'CyberTerminalForm.astro', sectionCategory: 'cyberpunk',
    description: 'Contact form driven like a command line: one prompt at a time, /help /back /clear /status commands, ticket on send, and a plain-form switch. Uses CyberpunkCheckbox and NeonSpinner.',
    tags: ['contact', 'form', 'terminal', 'cyberpunk'], featured: true,
    usage: `<CyberTerminalForm action="https://your-backend/contact" />`,
  }),
  section({
    slug: 'cyber-footer', name: 'Cyber Footer', file: 'CyberFooter.astro', sectionCategory: 'cyberpunk',
    description: 'Brutalist footer with an uplink sign-up, link columns on hard rules, live block counter and a colossal outlined wordmark.',
    tags: ['footer', 'newsletter', 'cyberpunk', 'wordmark'],
    usage: `<CyberFooter brand="NULL/SECTOR" />`,
  }),

  // === DENTAL CARE ("Dentis") ===
  section({
    slug: 'dental-hero', name: 'Dental Hero', file: 'DentalHero.astro', sectionCategory: 'dental',
    description: 'Dental clinic hero with smile satisfaction metrics, emergency toothache hotline pill, trust signals (painless anesthesia, zero waiting), and interactive appointment booking card.',
    tags: ['dental', 'hero', 'appointments', 'healthcare', 'emergency'], featured: true,
    usage: `<DentalHero bookHref="/preview/dental/book" emergencyPhone="+34 600 911 200" />`,
  }),
  section({
    slug: 'dental-treatments-grid', name: 'Dental Treatments Grid', file: 'DentalTreatmentsGrid.astro', sectionCategory: 'dental',
    description: 'Catalog grid of dental services (prophylaxis, Invisalign, titanium implants, composite bonding, Zoom whitening) with procedure duration, anesthesia details, and starting fees.',
    tags: ['dental', 'treatments', 'pricing', 'grid', 'healthcare'], featured: true,
    usage: `<DentalTreatmentsGrid bookBase="/preview/dental/book" />`,
  }),
  section({
    slug: 'dental-before-after', name: 'Dental Before After', file: 'DentalBeforeAfter.astro', sectionCategory: 'dental',
    description: 'Smile transformation gallery highlighting porcelain veneers, clear aligners, and dental implants with optical shade metrics and patient testimonials.',
    tags: ['dental', 'before-after', 'smile', 'gallery', 'cosmetic'], featured: true,
    usage: `<DentalBeforeAfter />`,
  }),
  section({
    slug: 'dental-booking-wizard', name: 'Dental Booking Wizard', file: 'DentalBookingWizard.astro', sectionCategory: 'dental',
    description: '4-step dental patient appointment wizard: treatment selection, specialist picker, date & time slot selection, insurance info, and instant .ics calendar export.',
    tags: ['dental', 'booking', 'wizard', 'calendar', 'appointments', 'form'], featured: true,
    usage: `<DentalBookingWizard />`,
  }),
  section({
    slug: 'dental-team-directory', name: 'Dental Team Directory', file: 'DentalTeamDirectory.astro', sectionCategory: 'dental',
    description: 'Dental specialists faculty: Lead cosmetic dentist, orthodontist, endodontist, and hygienist with credentials, ratings, and direct booking CTA.',
    tags: ['dental', 'team', 'doctors', 'specialists', 'faculty'],
    usage: `<DentalTeamDirectory bookBase="/preview/dental/book" />`,
  }),
  section({
    slug: 'dental-emergency-banner', name: 'Dental Emergency Banner', file: 'DentalEmergencyBanner.astro', sectionCategory: 'dental',
    description: 'Urgent dental care triage banner: acute toothache instructions, knocked-out tooth protocol, 24/7 hotline, WhatsApp triage, and same-day emergency slot booking.',
    tags: ['dental', 'emergency', 'triage', 'banner', 'cta'],
    usage: `<DentalEmergencyBanner phone="+34 600 911 200" whatsapp="+34600911200" />`,
  }),

  // === MOVING & LOGISTICS ("Muvr") ===
  section({
    slug: 'moving-hero', name: 'Moving Hero', file: 'MovingHero.astro', sectionCategory: 'moving',
    description: 'Above-the-fold moving & logistics hero with quick route quote form (origin, destination, house size), trust badges, and same-day express van dispatch notice.',
    tags: ['moving', 'hero', 'logistics', 'quote', 'fleet'], featured: true,
    usage: `<MovingHero quoteHref="/preview/moving/quote" careersHref="/preview/moving/careers" />`,
  }),
  section({
    slug: 'moving-volume-estimator', name: 'Moving Volume Estimator', file: 'MovingVolumeEstimator.astro', sectionCategory: 'moving',
    description: 'Visual cubic meters (m³) guide comparing studio, 1-2 bed flat, 3-bed apartment, and villa sizes with van and mover crew recommendations.',
    tags: ['moving', 'volume', 'estimator', 'housing', 'pricing'], featured: true,
    usage: `<MovingVolumeEstimator quoteHref="/preview/moving/quote" />`,
  }),
  section({
    slug: 'moving-fleet-grid', name: 'Moving Fleet Grid', file: 'MovingFleetGrid.astro', sectionCategory: 'moving',
    description: 'Commercial van fleet showcase: compact vans, high-roof Sprinters, and Luton box trucks with hydraulic tail-lifts, cargo dimensions and payload specs.',
    tags: ['moving', 'fleet', 'vans', 'trucks', 'logistics'], featured: true,
    usage: `<MovingFleetGrid bookBase="/preview/moving/quote" />`,
  }),
  section({
    slug: 'moving-careers-banner', name: 'Moving Careers Banner', file: 'MovingCareersBanner.astro', sectionCategory: 'moving',
    description: 'High-conversion recruitment banner for van drivers (with own van or company fleet) and heavy movers: hourly pay rates, route bonuses and weekly payouts.',
    tags: ['moving', 'careers', 'hiring', 'recruitment', 'drivers', 'banner'], featured: true,
    usage: `<MovingCareersBanner applyHref="/preview/moving/careers#apply" />`,
  }),
  section({
    slug: 'moving-pricing-tiers', name: 'Moving Pricing Tiers', file: 'MovingPricingTiers.astro', sectionCategory: 'moving',
    description: 'Transparent moving rates comparison: "Van + Driver", "Full Move (2 Movers)", and "VIP Turnkey & Packing" with hourly minimums and included services.',
    tags: ['moving', 'pricing', 'tiers', 'rates', 'plans'], featured: true,
    usage: `<MovingPricingTiers bookBase="/preview/moving/quote" />`,
  }),
  section({
    slug: 'moving-application-form', name: 'Moving Application Form', file: 'MovingApplicationForm.astro', sectionCategory: 'moving',
    description: 'Interactive job application form for drivers and movers: license category (B, C1, C), vehicle ownership details, experience, and background verification consent.',
    tags: ['moving', 'form', 'careers', 'hiring', 'application'], featured: true,
    usage: `<MovingApplicationForm />`,
  }),
];
