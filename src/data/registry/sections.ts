// src/data/registry/sections.ts
import type { ComponentDoc, SectionCategory } from './types';
import { sectionsExtra } from './sections-extra';
import { source } from './sources';

export const sectionCategories: SectionCategory[] = [
  {
    id: 'hero',
    name: 'Heroes',
    description: 'High-impact full-screen landing heroes and headlines.',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  },
  {
    id: 'features',
    name: 'Features & Grids',
    description: 'Bento grids, timeline flows, and feature highlights.',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>`,
  },
  {
    id: 'pricing',
    name: 'Pricing & Plans',
    description: 'Pricing tables, comparison matrices, and plan tiers.',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  },
  {
    id: 'testimonials',
    name: 'Testimonials',
    description: 'Wall of love, bento customer reviews, and verified badges.',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  },
  {
    id: 'cta',
    name: 'Call to Action',
    description: 'Conversion glow banners, app downloads, and email subscription ribbons.',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  },
  {
    id: 'stats',
    name: 'Stats & Metrics',
    description: 'Numbers showcase, data proof, and milestone metrics.',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  },
  {
    id: 'team',
    name: 'Team & People',
    description: 'Founder grids, advisor profiles, and leadership showcases.',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    id: 'faq',
    name: 'FAQ & Help',
    description: 'Accordion questions and answers with glass styling.',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  },
  {
    id: 'contact',
    name: 'Contact & Support',
    description: 'Contact glass forms, support channels, and inquiries.',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  },
  {
    id: 'content',
    name: 'Blog & Content',
    description: 'Article grids, featured posts and changelog timelines.',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  },
  {
    id: 'footer',
    name: 'Footers',
    description: 'Complete site footers with link columns, newsletter and social links.',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 15h18"/></svg>`,
  },
  {
    id: 'portfolio',
    name: 'Developer Portfolio',
    description: 'Monochrome, keyboard-inspired sections for developer portfolios: retyping hero, 3D projects showcase, typing 3D keyboard, repository list, 3D contribution matrix, 3D monitor, project case study, blog and contact.',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8"/></svg>`,
  },
  {
    id: 'agency',
    name: 'Agency & Marketing',
    description: 'Sections for marketing, SEO and web agencies: kinetic hero, services, results, ROI calculator, free audit, pricing, case studies and contact brief.',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/></svg>`,
  },
  {
    id: 'commerce',
    name: 'E-commerce',
    description: 'Editorial store sections: shop header with mega menu, hero, collections, product rail, lookbook, reviews and footer.',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l-1 13H7z"/><path d="M9 7V6a3 3 0 0 1 6 0v1"/></svg>`,
  },
  {
    id: 'logos',
    name: 'Logos & Partners',
    description: 'Client logo clouds, partner grids, and brand badges.',
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/></svg>`,
  },
];

export const sections: ComponentDoc[] = [
  // === HERO SECTIONS ===
  {
    slug: 'hero-gradient',
    sectionCategory: 'hero',
    name: 'Hero Gradient',
    description: 'Full-screen hero with animated gradient background, glassmorphism badge, and CTA group.',
    category: 'sections',
    tags: ['hero', 'gradient', 'animated', 'glass', 'fullscreen'],
    featured: true,
    code: source('sections/HeroGradient.astro'),
    usage: `---
import { HeroGradient } from 'astro-component-kit';
---

<HeroGradient />`,
  },
  {
    slug: 'hero-split',
    sectionCategory: 'hero',
    name: 'Hero Split',
    description: 'Split-screen hero with content column and interactive preview mockup side.',
    category: 'sections',
    tags: ['hero', 'split', 'browser-mockup', 'stats', 'responsive'],
    featured: true,
    code: source('sections/HeroSplit.astro'),
    usage: `---
import { HeroSplit } from 'astro-component-kit';
---

<HeroSplit />`,
  },
  {
    slug: 'hero-glass',
    sectionCategory: 'hero',
    name: 'Hero Glass',
    description: 'Centered hero with glassmorphism card overlay, animated glowing orbs, and action buttons.',
    category: 'sections',
    tags: ['hero', 'glassmorphism', 'animated-orbs', 'trust', 'responsive'],
    featured: true,
    code: source('sections/HeroGlass.astro'),
    usage: `---
import { HeroGlass } from 'astro-component-kit';
---

<HeroGlass />`,
  },

  // === FEATURES SECTIONS ===
  {
    slug: 'feature-bento-grid',
    sectionCategory: 'features',
    name: 'Feature Bento Grid',
    description: 'Modern 6-slot Bento Grid feature showcase with live scores, telemetry badges, and code snippets.',
    category: 'sections',
    tags: ['features', 'bento', 'grid', 'metrics', 'glassmorphism'],
    featured: true,
    code: source('sections/FeatureBentoGrid.astro'),
    usage: `---
import { FeatureBentoGrid } from 'astro-component-kit';
---

<FeatureBentoGrid />`,
  },
  {
    slug: 'feature-timeline-flow',
    sectionCategory: 'features',
    name: 'Feature Timeline Flow',
    description: 'Step-by-step product architecture workflow section with connected glowing nodes and code examples.',
    category: 'sections',
    tags: ['features', 'timeline', 'workflow', 'steps', 'architecture'],
    featured: true,
    code: source('sections/FeatureTimelineFlow.astro'),
    usage: `---
import { FeatureTimelineFlow } from 'astro-component-kit';
---

<FeatureTimelineFlow />`,
  },

  // === PRICING SECTIONS ===
  {
    slug: 'pricing-comparison-matrix',
    sectionCategory: 'pricing',
    name: 'Pricing Comparison Matrix',
    description: 'Interactive pricing matrix with monthly/annual billing toggle, highlighted plan, and full feature checklist.',
    category: 'sections',
    tags: ['pricing', 'matrix', 'comparison', 'toggle', 'saas'],
    featured: true,
    code: source('sections/PricingComparisonMatrix.astro'),
    usage: `---
import { PricingComparisonMatrix } from 'astro-component-kit';
---

<PricingComparisonMatrix />`,
  },
  {
    slug: 'pricing-tier-cards',
    sectionCategory: 'pricing',
    name: 'Pricing Tier Cards',
    description: '3-tier pricing cards with featured highlight, feature breakdown, and money-back guarantee.',
    category: 'sections',
    tags: ['pricing', 'cards', 'tiers', 'subscription', 'responsive'],
    featured: true,
    code: source('sections/PricingTierCards.astro'),
    usage: `---
import { PricingTierCards } from 'astro-component-kit';
---

<PricingTierCards />`,
  },

  // === TESTIMONIALS SECTIONS ===
  {
    slug: 'testimonial-wall-glass',
    sectionCategory: 'testimonials',
    name: 'Testimonial Wall Glass',
    description: 'Social proof testimonial wall with verified customer badges, rating stats, and responsive masonry grid.',
    category: 'sections',
    tags: ['testimonials', 'social-proof', 'reviews', 'ratings', 'glassmorphism'],
    featured: true,
    code: source('sections/TestimonialWallGlass.astro'),
    usage: `---
import { TestimonialWallGlass } from 'astro-component-kit';
---

<TestimonialWallGlass />`,
  },

  // === CALL TO ACTION (CTA) SECTIONS ===
  {
    slug: 'cta-glow-banner',
    sectionCategory: 'cta',
    name: 'CTA Glow Banner',
    description: 'High-conversion full-width glass banner with radial glowing mesh, trust badges, and email input.',
    category: 'sections',
    tags: ['cta', 'banner', 'conversion', 'newsletter', 'glow'],
    featured: true,
    code: source('sections/CtaGlowBanner.astro'),
    usage: `---
import { CtaGlowBanner } from 'astro-component-kit';
---

<CtaGlowBanner />`,
  },
  {
    slug: 'cta-app-download',
    sectionCategory: 'cta',
    name: 'CTA App Download',
    description: 'Mobile application showcase section with phone mockup preview, feature pills, and App Store badges.',
    category: 'sections',
    tags: ['cta', 'mobile', 'app-store', 'download', 'mockup'],
    featured: true,
    code: source('sections/CtaAppDownload.astro'),
    usage: `---
import { CtaAppDownload } from 'astro-component-kit';
---

<CtaAppDownload />`,
  },

  // === FAQ SECTIONS ===
  {
    slug: 'faq-accordion-section',
    sectionCategory: 'faq',
    name: 'FAQ Accordion Section',
    description: 'Interactive FAQ section with category filter tabs, accessible animated accordions, and support box.',
    category: 'sections',
    tags: ['faq', 'accordion', 'questions', 'support', 'accessible'],
    featured: true,
    code: source('sections/FaqAccordionSection.astro'),
    usage: `---
import { FaqAccordionSection } from 'astro-component-kit';
---

<FaqAccordionSection />`,
  },

  // === STATS SECTIONS ===
  {
    slug: 'stats-metric-showcase',
    sectionCategory: 'stats',
    name: 'Stats Metric Showcase',
    description: 'Data showcase section with 4 KPI cards, progress sparklines, and live network telemetry status.',
    category: 'sections',
    tags: ['stats', 'metrics', 'kpi', 'telemetry', 'data'],
    featured: true,
    code: source('sections/StatsMetricShowcase.astro'),
    usage: `---
import { StatsMetricShowcase } from 'astro-component-kit';
---

<StatsMetricShowcase />`,
  },

  // === TEAM SECTIONS ===
  {
    slug: 'team-grid-section',
    sectionCategory: 'team',
    name: 'Team Grid Section',
    description: 'Leadership & team showcase section with profile cards, social links, and open positions hiring banner.',
    category: 'sections',
    tags: ['team', 'people', 'leadership', 'hiring', 'social'],
    featured: true,
    code: source('sections/TeamGridSection.astro'),
    usage: `---
import { TeamGridSection } from 'astro-component-kit';
---

<TeamGridSection />`,
  },

  // === CONTACT SECTIONS ===
  {
    slug: 'contact-glass-form',
    sectionCategory: 'contact',
    name: 'Contact Glass Form',
    description: 'Interactive contact section with split support channels, SLA response badge, and glassmorphic inquiry form.',
    category: 'sections',
    tags: ['contact', 'form', 'support', 'channels', 'inquiry'],
    featured: true,
    code: source('sections/ContactGlassForm.astro'),
    usage: `---
import { ContactGlassForm } from 'astro-component-kit';
---

<ContactGlassForm />`,
  },
  {
    slug: 'testimonial-grid-section',
    sectionCategory: 'testimonials',
    name: 'Testimonial Grid Section',
    description: 'High-converting customer review bento grid featuring avatar ratings, verified badges, and quote spotlights.',
    category: 'sections',
    tags: ["sections","testimonials","reviews","social-proof","grid"],
    featured: true,
    code: source('sections/TestimonialGridSection.astro'),
    usage: `<TestimonialGridSection />`,
  },
  {
    slug: 'logo-cloud-section',
    sectionCategory: 'logos',
    name: 'Logo Cloud Section',
    description: 'Trusted by industry leaders company logo cloud with grayscale filter, hover glow, and ticker animation.',
    category: 'sections',
    tags: ["sections","logos","partners","cloud","social-proof"],
    featured: true,
    code: source('sections/LogoCloudSection.astro'),
    usage: `<LogoCloudSection />`,
  },
  {
    slug: 'hero-showcase-split',
    sectionCategory: 'hero',
    name: 'Hero Showcase Split',
    description: 'High-impact landing hero section with dual-column layout, glowing typography, CTAs, and interactive live preview card.',
    category: 'sections',
    tags: ["sections","hero","landing","showcase","split"],
    featured: true,
    code: source('sections/HeroShowcaseSplit.astro'),
    usage: `<HeroShowcaseSplit />`,
  },
  ...sectionsExtra,
];

export function getSectionBySlug(slug: string) {
  return sections.find((s) => s.slug === slug) || null;
}

export function getSectionsByCategory(sectionCategoryId: string) {
  return sections.filter((s) => s.sectionCategory === sectionCategoryId);
}

export function getSectionCategoryById(id: string) {
  return sectionCategories.find((c) => c.id === id) || null;
}
