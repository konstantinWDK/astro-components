// src/data/registry/sections.ts
import type { ComponentDoc } from './types';

export const sections: ComponentDoc[] = [
  // === HERO SECTIONS ===
  {
    slug: 'hero-gradient',
    name: 'Hero Gradient',
    description: 'Full-screen hero with animated gradient background and glassmorphism badge.',
    category: 'sections',
    tags: ['gradient', 'animated', 'glass', 'fullscreen'],
    featured: true,
    code: `---
// HeroGradient.astro
---
<section class="hero-gradient">
  <div class="hero-gradient__bg" aria-hidden="true"></div>
  <div class="hero-gradient__content">
    <span class="hero-gradient__badge">⚡ 200+ Components</span>
    <h1 class="hero-gradient__title">Build Beautiful Interfaces</h1>
    <p class="hero-gradient__subtitle">Premium open-source UI components for Astro.</p>
    <div class="hero-gradient__actions">
      <button class="hero-btn hero-btn--primary">Get Started</button>
      <button class="hero-btn hero-btn--glass">View on GitHub</button>
    </div>
  </div>
</section>

<style>
  .hero-gradient {
    position: relative;
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: var(--sp-12) var(--sp-6);
  }
  .hero-gradient__bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg,
      rgba(184,134,11,0.25) 0%,
      transparent 40%,
      transparent 60%,
      rgba(184,134,11,0.15) 100%);
    animation: gradientShift 8s ease-in-out infinite alternate;
  }
  @keyframes gradientShift {
    0% { opacity: 0.6; transform: scale(1); }
    100% { opacity: 1; transform: scale(1.1); }
  }
  /* ... rest of styles ... */
</style>`,
    usage: `---
import { HeroGradient } from 'astro-component-kit';
---

<HeroGradient />`,
  },
  {
    slug: 'hero-split',
    name: 'Hero Split',
    description: 'Split-screen hero with content side and browser mockup visual side.',
    category: 'sections',
    tags: ['split', 'browser mockup', 'stats', 'responsive'],
    featured: true,
    code: `---
// HeroSplit.astro
---
<section class="hero-split">
  <div class="hero-split__content">
    <span class="hero-split__badge">Open Source · MIT</span>
    <h1 class="hero-split__title">Ship Faster with Premium Components</h1>
    <p class="hero-split__subtitle">Stop building from scratch.</p>
    <div class="hero-split__actions">
      <button class="hero-split__btn hero-split__btn--primary">Start Building</button>
      <button class="hero-split__btn hero-split__btn--ghost">Documentation</button>
    </div>
    <div class="hero-split__stats">
      <div class="hero-split__stat">
        <span class="hero-split__stat-num">200+</span>
        <span class="hero-split__stat-label">Components</span>
      </div>
    </div>
  </div>
  <div class="hero-split__visual" aria-hidden="true">
    <!-- Browser mockup -->
  </div>
</section>

<style>
  .hero-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--sp-12);
    align-items: center;
    min-height: 85vh;
    padding: var(--sp-12) var(--sp-8);
  }
  /* ... rest of styles ... */
</style>`,
    usage: `---
import { HeroSplit } from 'astro-component-kit';
---

<HeroSplit />`,
  },
  {
    slug: 'hero-glass',
    name: 'Hero Glass',
    description: 'Centered hero with glassmorphism card overlay, animated orbs, and trust indicators.',
    category: 'sections',
    tags: ['glassmorphism', 'animated orbs', 'trust indicators', 'responsive'],
    featured: true,
    code: `---
// HeroGlass.astro
---
<section class="hero-glass">
  <div class="hero-glass__bg" aria-hidden="true">
    <div class="hero-glass__orb hero-glass__orb--1"></div>
    <div class="hero-glass__orb hero-glass__orb--2"></div>
  </div>
  <div class="container">
    <div class="hero-glass__card">
      <div class="hero-glass__topbar">
        <div class="hero-glass__dots"><span></span><span></span><span></span></div>
        <span class="hero-glass__label">Astro Components</span>
      </div>
      <h1 class="hero-glass__title">Your Complete Component Library</h1>
      <p class="hero-glass__subtitle">Build stunning landing pages.</p>
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
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .hero-glass__card {
    max-width: 700px;
    padding: var(--sp-10);
    background: rgba(10,10,10,0.6);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: var(--r-xl);
  }
  /* ... rest of styles ... */
</style>`,
    usage: `---
import { HeroGlass } from 'astro-component-kit';
---

<HeroGlass />`,
  },
];

export function getSectionBySlug(slug: string) {
  return sections.find((s) => s.slug === slug) || null;
}
