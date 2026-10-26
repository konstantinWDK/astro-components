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
  {
    slug: 'testimonial-grid-section',
    name: 'Testimonial Grid Section',
    description: 'High-converting customer review bento grid featuring avatar ratings, verified badges, and quote spotlights.',
    category: 'sections',
    tags: ["sections","testimonials","reviews","social-proof","grid"],
    featured: true,
    code: `---
/**
 * TestimonialGridSection — Bento grid showcase of verified customer reviews with dark glass styling and star ratings.
 * 
 * @param {string} eyebrow - Small uppercase category lead. Default is 'WALL OF LOVE'.
 * @param {string} title - Section main headline. Default is 'Trusted by innovative engineering teams'.
 * @param {string} subtitle - Subtitle description.
 */
interface Props {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

const {
  eyebrow = 'WALL OF LOVE',
  title = 'Trusted by thousands of Astro builders',
  subtitle = 'Discover why developers, indie hackers, and creative agencies rely on Astro Components Kit for production websites.',
} = Astro.props;

const testimonials = [
  {
    name: 'Elena Rostova',
    role: 'Principal Architect @ Veloce Labs',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    quote: 'The pure zero-JS philosophy with Astro 5 is game-changing. Our Core Web Vitals score hit 100 on every audited route without tweaking hydration.',
    stars: 5,
    highlight: true,
  },
  {
    name: 'Marcus Vance',
    role: 'Founder @ HyperSync',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    quote: 'Copying and pasting self-contained Astro components directly shaved two full sprints off our SaaS launch timeline.',
    stars: 5,
  },
  {
    name: 'Sofia Chen',
    role: 'Senior UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    quote: 'The glassmorphic dark palette with gold accents feels extraordinarily premium right out of the box. Highly recommended.',
    stars: 5,
  },
];
---

<section class="testi-section">
  <div class="testi-section__header">
    <span class="testi-section__eyebrow">{eyebrow}</span>
    <h2 class="testi-section__title">{title}</h2>
    <p class="testi-section__subtitle">{subtitle}</p>
  </div>

  <div class="testi-section__grid">
    {testimonials.map((t) => (
      <article class:list={['testi-card', { 'testi-card--highlight': t.highlight }]}>
        <div class="testi-card__stars" aria-label={\`\${t.stars} out of 5 stars\`}>
          {Array.from({ length: t.stars }).map(() => (
            <span>★</span>
          ))}
        </div>
        <blockquote class="testi-card__quote">
          "{t.quote}"
        </blockquote>
        <div class="testi-card__author">
          <img src={t.avatar} alt={t.name} class="testi-card__avatar" loading="lazy" />
          <div class="testi-card__meta">
            <h5 class="testi-card__name">{t.name}</h5>
            <span class="testi-card__role">{t.role}</span>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>

<style>
  .testi-section {
    padding: var(--sp-12, 3rem) var(--sp-6, 1.5rem);
    max-width: 1200px;
    margin: 0 auto;
    font-family: var(--font-sans, system-ui, sans-serif);
  }

  .testi-section__header {
    text-align: center;
    max-width: 640px;
    margin: 0 auto 3rem auto;
  }

  .testi-section__eyebrow {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: var(--c-primary-light, #d4a017);
    padding: 0.35rem 0.8rem;
    border: 1px solid rgba(184, 134, 11, 0.3);
    border-radius: var(--r-sm, 8px);
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  .testi-section__title {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 900;
    color: var(--c-text-1, #ffffff);
    letter-spacing: -0.03em;
    margin: 0 0 1rem 0;
  }

  .testi-section__subtitle {
    font-size: 0.95rem;
    color: var(--c-text-2, #a3a3a3);
    line-height: 1.6;
    margin: 0;
  }

  .testi-section__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
  }

  .testi-card {
    display: flex;
    flex-direction: column;
    padding: var(--sp-8, 2rem);
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--r-xl, 24px);
    transition: transform 0.3s ease, border-color 0.3s ease;
  }

  .testi-card:hover {
    transform: translateY(-4px);
    border-color: rgba(184, 134, 11, 0.3);
  }

  .testi-card--highlight {
    background: radial-gradient(circle at top left, rgba(184, 134, 11, 0.1), rgba(255, 255, 255, 0.02) 70%);
    border-color: rgba(184, 134, 11, 0.4);
  }

  .testi-card__stars {
    color: #fbbf24;
    font-size: 1rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }

  .testi-card__quote {
    font-size: 0.95rem;
    color: var(--c-text-1, #ffffff);
    line-height: 1.65;
    margin: 0 0 1.5rem 0;
    flex: 1;
    font-style: italic;
  }

  .testi-card__author {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: auto;
  }

  .testi-card__avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(184, 134, 11, 0.4);
  }

  .testi-card__name {
    font-size: 0.92rem;
    font-weight: 700;
    color: var(--c-text-1, #ffffff);
    margin: 0 0 2px 0;
  }

  .testi-card__role {
    font-size: 0.75rem;
    color: var(--c-text-3, #737373);
  }
</style>
`,
    usage: `<TestimonialGridSection />`,
  },
  {
    slug: 'logo-cloud-section',
    name: 'Logo Cloud Section',
    description: 'Trusted by industry leaders company logo cloud with grayscale filter, hover glow, and ticker animation.',
    category: 'sections',
    tags: ["sections","logos","partners","cloud","social-proof"],
    featured: true,
    code: `---
/**
 * LogoCloudSection — High-trust partner and client brand wall with monochrome glass badges.
 * 
 * @param {string} title - Section headline. Default is 'TRUSTED BY MODERN TECH STACKS'.
 * @param {Array<{name: string, symbol: string}>} logos - Partner entries list.
 */
interface Props {
  title?: string;
  logos?: Array<{ name: string; symbol: string }>;
}

const {
  title = 'POWERING FORWARD-THINKING WEB PROJECTS',
  logos = [
    { name: 'Vercel', symbol: '▲' },
    { name: 'Cloudflare', symbol: '☁' },
    { name: 'Supabase', symbol: '⚡' },
    { name: 'TailwindCSS', symbol: '≋' },
    { name: 'Netlify', symbol: '◈' },
    { name: 'Docker', symbol: '⚓' },
  ],
} = Astro.props;
---

<section class="logo-cloud">
  <div class="logo-cloud__inner">
    <p class="logo-cloud__title">{title}</p>
    <div class="logo-cloud__grid">
      {logos.map((logo) => (
        <div class="logo-badge">
          <span class="logo-badge__symbol">{logo.symbol}</span>
          <span class="logo-badge__name">{logo.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>

<style>
  .logo-cloud {
    padding: var(--sp-8, 2rem) var(--sp-6, 1.5rem);
    width: 100%;
    font-family: var(--font-sans, system-ui, sans-serif);
  }

  .logo-cloud__inner {
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
  }

  .logo-cloud__title {
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: var(--c-text-3, #737373);
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }

  .logo-cloud__grid {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .logo-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 0.65rem 1.4rem;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: var(--r-full, 9999px);
    color: var(--c-text-2, #a3a3a3);
    font-size: 0.88rem;
    font-weight: 700;
    transition: all 0.25s ease;
  }

  .logo-badge:hover {
    color: var(--c-text-1, #ffffff);
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(184, 134, 11, 0.4);
    transform: translateY(-2px);
  }

  .logo-badge__symbol {
    font-size: 1.1rem;
    color: var(--c-primary-light, #d4a017);
  }
</style>
`,
    usage: `<LogoCloudSection />`,
  },
  {
    slug: 'hero-showcase-split',
    name: 'Hero Showcase Split',
    description: 'High-impact landing hero section with dual-column layout, glowing typography, CTAs, and interactive live preview card.',
    category: 'sections',
    tags: ["sections","hero","landing","showcase","split"],
    featured: true,
    code: `---
/**
 * HeroShowcaseSplit — Two-column modern landing hero section with install command, action CTAs, and interactive preview widget.
 * 
 * @param {string} badge - Header lead badge. Default is 'NEW: ASTRO 5 SUITE'.
 * @param {string} title - Primary headline string.
 * @param {string} subtitle - Subtitle paragraph text.
 * @param {string} primaryCtaText - Primary CTA button text.
 * @param {string} primaryCtaHref - Primary CTA link.
 * @param {string} secondaryCtaText - Secondary button text.
 * @param {string} secondaryCtaHref - Secondary link.
 */
interface Props {
  badge?: string;
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

const {
  badge = 'NEW: ASTRO 5 PRODUCTION SUITE',
  title = 'Craft stunning web apps at lightspeed',
  subtitle = 'A cohesive collection of 150+ dark-mode first, accessible Astro components. Zero dependencies, pure vanilla CSS, full TypeScript support.',
  primaryCtaText = 'Explore Components',
  primaryCtaHref = '/docs/glass-button',
  secondaryCtaText = 'View on GitHub',
  secondaryCtaHref = 'https://github.com/konstantinWDK/astro-components',
} = Astro.props;
---

<section class="split-hero">
  <div class="split-hero__inner">
    <div class="split-hero__content">
      <div class="split-hero__badge">
        <span class="dot"></span>
        <span>{badge}</span>
      </div>

      <h1 class="split-hero__title">{title}</h1>
      <p class="split-hero__subtitle">{subtitle}</p>

      <div class="split-hero__actions">
        <a href={primaryCtaHref} class="btn btn--primary">
          {primaryCtaText}
          <span aria-hidden="true">→</span>
        </a>
        <a href={secondaryCtaHref} target="_blank" rel="noopener" class="btn btn--secondary">
          {secondaryCtaText}
        </a>
      </div>

      <div class="split-hero__install">
        <span class="prompt">$</span>
        <code>npm install astro-component-kit</code>
      </div>
    </div>

    <div class="split-hero__visual">
      <div class="glass-device">
        <div class="glass-device__bar">
          <span class="d-dot d-dot--red"></span>
          <span class="d-dot d-dot--yellow"></span>
          <span class="d-dot d-dot--green"></span>
          <span class="glass-device__url">astrocomponents.dev/preview</span>
        </div>
        <div class="glass-device__body">
          <slot>
            <div class="mock-widget">
              <span class="mock-icon">⚡</span>
              <h4>Production SSR Ready</h4>
              <p>Zero JavaScript hydration overhead by default.</p>
              <div class="mock-metrics">
                <div><span>Score</span><strong>100</strong></div>
                <div><span>A11y</span><strong>AA</strong></div>
                <div><span>Speed</span><strong>0.2s</strong></div>
              </div>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .split-hero {
    position: relative;
    padding: 6rem 1.5rem;
    width: 100%;
    overflow: hidden;
    font-family: var(--font-sans, system-ui, sans-serif);
  }

  .split-hero__inner {
    max-width: 1240px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 4rem;
    align-items: center;
  }

  .split-hero__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .split-hero__badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0.35rem 0.85rem;
    background: rgba(184, 134, 11, 0.12);
    border: 1px solid rgba(184, 134, 11, 0.35);
    border-radius: var(--r-full, 9999px);
    font-size: 0.75rem;
    font-weight: 800;
    color: var(--c-accent, #fef3c7);
    margin-bottom: 1.5rem;
    letter-spacing: 0.05em;
  }

  .split-hero__badge .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #d4a017;
    box-shadow: 0 0 8px #d4a017;
  }

  .split-hero__title {
    font-size: clamp(2.4rem, 5vw, 3.8rem);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.04em;
    color: var(--c-text-1, #ffffff);
    margin: 0 0 1.25rem 0;
  }

  .split-hero__subtitle {
    font-size: 1.05rem;
    color: var(--c-text-2, #a3a3a3);
    line-height: 1.65;
    margin: 0 0 2rem 0;
    max-width: 540px;
  }

  .split-hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 2rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0.85rem 1.8rem;
    font-size: 0.92rem;
    font-weight: 700;
    border-radius: var(--r-md, 12px);
    text-decoration: none;
    transition: all 0.25s ease;
  }

  .btn--primary {
    background: linear-gradient(135deg, #d4a017, #b8860b);
    color: #050505;
    box-shadow: 0 4px 20px rgba(184, 134, 11, 0.35);
  }
  .btn--primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(184, 134, 11, 0.5);
  }

  .btn--secondary {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--c-text-1, #ffffff);
  }
  .btn--secondary:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  .split-hero__install {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 0.6rem 1.1rem;
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--r-md, 10px);
    font-family: var(--font-mono, monospace);
    font-size: 0.85rem;
    color: var(--c-primary-light, #d4a017);
  }

  .split-hero__install .prompt {
    color: var(--c-text-3, #737373);
  }

  /* Visual mock preview container */
  .glass-device {
    background: rgba(14, 14, 18, 0.85);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: var(--r-xl, 24px);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
    overflow: hidden;
  }

  .glass-device__bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0.8rem 1rem;
    background: rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .d-dot { width: 10px; height: 10px; border-radius: 50%; }
  .d-dot--red { background: #ef4444; }
  .d-dot--yellow { background: #f59e0b; }
  .d-dot--green { background: #10b981; }

  .glass-device__url {
    margin-left: auto;
    font-size: 0.75rem;
    color: var(--c-text-3, #737373);
    font-family: var(--font-mono, monospace);
  }

  .glass-device__body {
    padding: 2.5rem;
  }

  .mock-widget {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .mock-icon {
    font-size: 2.5rem;
    background: rgba(184, 134, 11, 0.15);
    border: 1px solid rgba(184, 134, 11, 0.3);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }

  .mock-widget h4 {
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--c-text-1, #ffffff);
    margin: 0;
  }

  .mock-widget p {
    font-size: 0.85rem;
    color: var(--c-text-2, #a3a3a3);
    margin: 0;
    max-width: 280px;
  }

  .mock-metrics {
    display: flex;
    gap: 24px;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    width: 100%;
    justify-content: center;
  }

  .mock-metrics div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }

  .mock-metrics span { font-size: 0.7rem; color: var(--c-text-3, #737373); text-transform: uppercase; }
  .mock-metrics strong { font-size: 1.1rem; color: var(--c-primary-light, #d4a017); }

  @media (max-width: 900px) {
    .split-hero__inner {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
</style>
`,
    usage: `<HeroShowcaseSplit />`,
  },
];

export function getSectionBySlug(slug: string) {
  return sections.find((s) => s.slug === slug) || null;
}
