// src/data/registry/sections.ts
import type { ComponentDoc } from './types';

export const sections: ComponentDoc[] = [
  // === HERO SECTIONS ===
  {
    slug: 'hero-gradient',
    name: 'Hero Gradient',
    description: 'Full-screen hero with animated gradient background, glassmorphism badge, and CTA group.',
    category: 'sections',
    tags: ['hero', 'gradient', 'animated', 'glass', 'fullscreen'],
    featured: true,
    code: `---
// HeroGradient.astro
interface Props {
  badge?: string;
  title?: string;
  subtitle?: string;
}

const {
  badge = "⚡ 200+ Components",
  title = "Build Beautiful Interfaces",
  subtitle = "Premium open-source UI components for Astro.",
} = Astro.props;
---
<section class="hero-gradient">
  <div class="hero-gradient__bg" aria-hidden="true"></div>
  <div class="hero-gradient__content">
    <span class="hero-gradient__badge">{badge}</span>
    <h1 class="hero-gradient__title">{title}</h1>
    <p class="hero-gradient__subtitle">{subtitle}</p>
    <div class="hero-gradient__actions">
      <button class="hero-btn hero-btn--primary">Get Started</button>
      <button class="hero-btn hero-btn--glass">View on GitHub</button>
    </div>
  </div>
</section>

<style>
  .hero-gradient {
    position: relative;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: var(--sp-12, 3rem) var(--sp-6, 1.5rem);
    background: #030712;
  }
  .hero-gradient__bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(184,134,11,0.25) 0%, transparent 40%, transparent 60%, rgba(184,134,11,0.15) 100%);
    animation: gradientShift 8s ease-in-out infinite alternate;
  }
  @keyframes gradientShift {
    0% { opacity: 0.6; transform: scale(1); }
    100% { opacity: 1; transform: scale(1.1); }
  }
  .hero-gradient__content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 750px;
  }
  .hero-gradient__badge {
    display: inline-block;
    padding: 0.35rem 0.9rem;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 700;
    background: rgba(234,179,8,0.15);
    color: #facc15;
    border: 1px solid rgba(234,179,8,0.3);
    margin-bottom: 1.5rem;
  }
  .hero-gradient__title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 900;
    color: #fff;
    line-height: 1.1;
    margin: 0 0 1rem;
  }
  .hero-gradient__subtitle {
    font-size: 1.15rem;
    color: #94a3b8;
    margin: 0 0 2rem;
  }
  .hero-gradient__actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  .hero-btn {
    padding: 0.85rem 1.75rem;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
  }
  .hero-btn--primary {
    background: linear-gradient(135deg, #eab308, #d97706);
    color: #000;
    border: none;
  }
  .hero-btn--glass {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    color: #fff;
  }
</style>`,
    usage: `---
import { HeroGradient } from 'astro-component-kit';
---

<HeroGradient />`,
  },
  {
    slug: 'hero-split',
    name: 'Hero Split',
    description: 'Split-screen hero with content column and interactive preview mockup side.',
    category: 'sections',
    tags: ['hero', 'split', 'browser-mockup', 'stats', 'responsive'],
    featured: true,
    code: `---
// HeroSplit.astro
interface Props {
  badge?: string;
  title?: string;
  subtitle?: string;
}

const {
  badge = "Open Source · MIT",
  title = "Ship Faster with Premium Components",
  subtitle = "Stop building from scratch. Accessible, beautiful, and zero-runtime.",
} = Astro.props;
---
<section class="hero-split">
  <div class="hero-split__content">
    <span class="hero-split__badge">{badge}</span>
    <h1 class="hero-split__title">{title}</h1>
    <p class="hero-split__subtitle">{subtitle}</p>
    <div class="hero-split__actions">
      <button class="hero-split__btn hero-split__btn--primary">Start Building</button>
      <button class="hero-split__btn hero-split__btn--ghost">Documentation</button>
    </div>
  </div>
  <div class="hero-split__visual" aria-hidden="true">
    <div class="mockup-frame">
      <div class="mockup-header">
        <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
      </div>
      <div class="mockup-body">
        <code>npm install astro-component-kit</code>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    min-height: 80vh;
    padding: 4rem 2rem;
    background: #030712;
  }
  .hero-split__badge {
    padding: 0.35rem 0.9rem;
    border-radius: 999px;
    font-size: 0.78rem;
    background: rgba(99,102,241,0.15);
    color: #818cf8;
    border: 1px solid rgba(99,102,241,0.3);
  }
  .hero-split__title {
    font-size: clamp(2.2rem, 4vw, 3.5rem);
    font-weight: 900;
    color: #fff;
    margin: 1rem 0;
  }
  .hero-split__subtitle {
    font-size: 1.1rem;
    color: #94a3b8;
    margin: 0 0 2rem;
  }
  .hero-split__actions {
    display: flex;
    gap: 1rem;
  }
  .hero-split__btn {
    padding: 0.85rem 1.5rem;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
  }
  .hero-split__btn--primary {
    background: #eab308;
    color: #000;
    border: none;
  }
  .hero-split__btn--ghost {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    color: #fff;
  }
  .mockup-frame {
    background: #0f172a;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px;
    padding: 1.5rem;
  }
  .mockup-header {
    display: flex;
    gap: 6px;
    margin-bottom: 1.5rem;
  }
  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot.red { background: #ef4444; }
  .dot.yellow { background: #f59e0b; }
  .dot.green { background: #10b981; }
  @media (max-width: 860px) {
    .hero-split { grid-template-columns: 1fr; }
  }
</style>`,
    usage: `---
import { HeroSplit } from 'astro-component-kit';
---

<HeroSplit />`,
  },
  {
    slug: 'hero-glass',
    name: 'Hero Glass',
    description: 'Centered hero with glassmorphism card overlay, animated glowing orbs, and action buttons.',
    category: 'sections',
    tags: ['hero', 'glassmorphism', 'animated-orbs', 'trust', 'responsive'],
    featured: true,
    code: `---
// HeroGlass.astro
interface Props {
  badge?: string;
  title?: string;
  subtitle?: string;
}

const {
  badge = "Astro Components",
  title = "Your Complete Component Library",
  subtitle = "Build stunning landing pages with zero runtime JavaScript.",
} = Astro.props;
---
<section class="hero-glass">
  <div class="hero-glass__bg" aria-hidden="true">
    <div class="hero-glass__orb hero-glass__orb--1"></div>
    <div class="hero-glass__orb hero-glass__orb--2"></div>
  </div>
  <div class="container">
    <div class="hero-glass__card">
      <span class="hero-glass__label">{badge}</span>
      <h1 class="hero-glass__title">{title}</h1>
      <p class="hero-glass__subtitle">{subtitle}</p>
      <div class="hero-glass__actions">
        <button class="hero-glass__btn hero-glass__btn--primary">Get Started</button>
        <button class="hero-glass__btn hero-glass__btn--secondary">Watch Demo</button>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-glass {
    position: relative;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 3rem 1.5rem;
    background: #030712;
  }
  .hero-glass__card {
    max-width: 750px;
    padding: 3.5rem 2.5rem;
    background: rgba(15, 23, 42, 0.65);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 24px;
    text-align: center;
  }
  .hero-glass__label {
    display: inline-block;
    padding: 0.35rem 0.9rem;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 700;
    background: rgba(234,179,8,0.15);
    color: #facc15;
    margin-bottom: 1.25rem;
  }
  .hero-glass__title {
    font-size: clamp(2.2rem, 4vw, 3.4rem);
    font-weight: 900;
    color: #fff;
    margin: 0 0 1rem;
  }
  .hero-glass__subtitle {
    font-size: 1.1rem;
    color: #94a3b8;
    margin: 0 0 2rem;
  }
  .hero-glass__actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  .hero-glass__btn {
    padding: 0.85rem 1.75rem;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
  }
  .hero-glass__btn--primary {
    background: #eab308;
    color: #000;
    border: none;
  }
  .hero-glass__btn--secondary {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    color: #fff;
  }
</style>`,
    usage: `---
import { HeroGlass } from 'astro-component-kit';
---

<HeroGlass />`,
  },

  // === FEATURES SECTIONS ===
  {
    slug: 'feature-bento-grid',
    name: 'Feature Bento Grid',
    description: 'Modern 6-slot Bento Grid feature showcase with live scores, telemetry badges, and code snippets.',
    category: 'sections',
    tags: ['features', 'bento', 'grid', 'metrics', 'glassmorphism'],
    featured: true,
    code: `---
import { FeatureBentoGrid } from 'astro-component-kit';
---

<FeatureBentoGrid 
  badge="Core Capabilities"
  title="Engineered for Extreme Performance"
  subtitle="Everything you need to build next-generation Astro applications with zero runtime overhead."
/>`,
    usage: `---
import { FeatureBentoGrid } from 'astro-component-kit';
---

<FeatureBentoGrid />`,
  },
  {
    slug: 'feature-timeline-flow',
    name: 'Feature Timeline Flow',
    description: 'Step-by-step product architecture workflow section with connected glowing nodes and code examples.',
    category: 'sections',
    tags: ['features', 'timeline', 'workflow', 'steps', 'architecture'],
    featured: true,
    code: `---
import { FeatureTimelineFlow } from 'astro-component-kit';
---

<FeatureTimelineFlow 
  badge="Step-by-Step Workflow"
  title="From Idea to Production in 3 Simple Steps"
/>`,
    usage: `---
import { FeatureTimelineFlow } from 'astro-component-kit';
---

<FeatureTimelineFlow />`,
  },

  // === PRICING SECTIONS ===
  {
    slug: 'pricing-comparison-matrix',
    name: 'Pricing Comparison Matrix',
    description: 'Interactive pricing matrix with monthly/annual billing toggle, highlighted plan, and full feature checklist.',
    category: 'sections',
    tags: ['pricing', 'matrix', 'comparison', 'toggle', 'saas'],
    featured: true,
    code: `---
import { PricingComparisonMatrix } from 'astro-component-kit';
---

<PricingComparisonMatrix 
  badge="Flexible Plans"
  title="Transparent Pricing for High-Growth Teams"
/>`,
    usage: `---
import { PricingComparisonMatrix } from 'astro-component-kit';
---

<PricingComparisonMatrix />`,
  },
  {
    slug: 'pricing-tier-cards',
    name: 'Pricing Tier Cards',
    description: '3-tier pricing cards with featured highlight, feature breakdown, and money-back guarantee.',
    category: 'sections',
    tags: ['pricing', 'cards', 'tiers', 'subscription', 'responsive'],
    featured: true,
    code: `---
import { PricingTierCards } from 'astro-component-kit';
---

<PricingTierCards 
  badge="Plans & Pricing"
  title="Simple, Predictable Pricing for Everyone"
/>`,
    usage: `---
import { PricingTierCards } from 'astro-component-kit';
---

<PricingTierCards />`,
  },

  // === TESTIMONIALS SECTIONS ===
  {
    slug: 'testimonial-wall-glass',
    name: 'Testimonial Wall Glass',
    description: 'Social proof testimonial wall with verified customer badges, rating stats, and responsive masonry grid.',
    category: 'sections',
    tags: ['testimonials', 'social-proof', 'reviews', 'ratings', 'glassmorphism'],
    featured: true,
    code: `---
import { TestimonialWallGlass } from 'astro-component-kit';
---

<TestimonialWallGlass 
  badge="Customer Love"
  title="Trusted by 10,000+ Developers Worldwide"
/>`,
    usage: `---
import { TestimonialWallGlass } from 'astro-component-kit';
---

<TestimonialWallGlass />`,
  },

  // === CALL TO ACTION (CTA) SECTIONS ===
  {
    slug: 'cta-glow-banner',
    name: 'CTA Glow Banner',
    description: 'High-conversion full-width glass banner with radial glowing mesh, trust badges, and email input.',
    category: 'sections',
    tags: ['cta', 'banner', 'conversion', 'newsletter', 'glow'],
    featured: true,
    code: `---
import { CtaGlowBanner } from 'astro-component-kit';
---

<CtaGlowBanner 
  badge="Get Started Today"
  title="Ready to Build Something Extraordinary?"
  primaryCtaText="Start Building Free"
/>`,
    usage: `---
import { CtaGlowBanner } from 'astro-component-kit';
---

<CtaGlowBanner />`,
  },
  {
    slug: 'cta-app-download',
    name: 'CTA App Download',
    description: 'Mobile application showcase section with phone mockup preview, feature pills, and App Store badges.',
    category: 'sections',
    tags: ['cta', 'mobile', 'app-store', 'download', 'mockup'],
    featured: true,
    code: `---
import { CtaAppDownload } from 'astro-component-kit';
---

<CtaAppDownload 
  badge="Mobile Experience"
  title="Manage Your Astro Deployments On the Go"
/>`,
    usage: `---
import { CtaAppDownload } from 'astro-component-kit';
---

<CtaAppDownload />`,
  },

  // === FAQ SECTIONS ===
  {
    slug: 'faq-accordion-section',
    name: 'FAQ Accordion Section',
    description: 'Interactive FAQ section with category filter tabs, accessible animated accordions, and support box.',
    category: 'sections',
    tags: ['faq', 'accordion', 'questions', 'support', 'accessible'],
    featured: true,
    code: `---
import { FaqAccordionSection } from 'astro-component-kit';
---

<FaqAccordionSection 
  badge="Frequently Asked Questions"
  title="Got Questions? We Have Answers"
/>`,
    usage: `---
import { FaqAccordionSection } from 'astro-component-kit';
---

<FaqAccordionSection />`,
  },

  // === STATS SECTIONS ===
  {
    slug: 'stats-metric-showcase',
    name: 'Stats Metric Showcase',
    description: 'Data showcase section with 4 KPI cards, progress sparklines, and live network telemetry status.',
    category: 'sections',
    tags: ['stats', 'metrics', 'kpi', 'telemetry', 'data'],
    featured: true,
    code: `---
import { StatsMetricShowcase } from 'astro-component-kit';
---

<StatsMetricShowcase 
  badge="Global Scale"
  title="Built for Production at Enterprise Scale"
/>`,
    usage: `---
import { StatsMetricShowcase } from 'astro-component-kit';
---

<StatsMetricShowcase />`,
  },

  // === TEAM SECTIONS ===
  {
    slug: 'team-grid-section',
    name: 'Team Grid Section',
    description: 'Leadership & team showcase section with profile cards, social links, and open positions hiring banner.',
    category: 'sections',
    tags: ['team', 'people', 'leadership', 'hiring', 'social'],
    featured: true,
    code: `---
import { TeamGridSection } from 'astro-component-kit';
---

<TeamGridSection 
  badge="Our Team"
  title="Built by Engineers, Designers & Open Source Believers"
/>`,
    usage: `---
import { TeamGridSection } from 'astro-component-kit';
---

<TeamGridSection />`,
  },

  // === CONTACT SECTIONS ===
  {
    slug: 'contact-glass-form',
    name: 'Contact Glass Form',
    description: 'Interactive contact section with split support channels, SLA response badge, and glassmorphic inquiry form.',
    category: 'sections',
    tags: ['contact', 'form', 'support', 'channels', 'inquiry'],
    featured: true,
    code: `---
import { ContactGlassForm } from 'astro-component-kit';
---

<ContactGlassForm 
  badge="Get In Touch"
  title="Let's Build Something Exceptional Together"
/>`,
    usage: `---
import { ContactGlassForm } from 'astro-component-kit';
---

<ContactGlassForm />`,
  },
];

export function getSectionBySlug(slug: string) {
  return sections.find((s) => s.slug === slug) || null;
}
