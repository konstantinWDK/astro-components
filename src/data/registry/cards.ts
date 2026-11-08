// src/data/registry/cards.ts
import type { ComponentDoc } from './types';

export const cards: ComponentDoc[] = [
  {
    slug: 'blog-horizontal-card',
    name: 'Horizontal Blog Card',
    description: 'Landscape card layout for blog feeds or news items.',
    category: 'cards',
    tags: ["card","blog"],
    featured: true,
    code: `---
/**
 * BlogHorizontalCard — Landscape card layout for blog feeds, tutorials, or changelog news items.
 * 
 * @param {string} title - The blog post title (default provided).
 * @param {string} description - Brief summary or excerpt (default provided).
 * @param {string} tag - Category tag (default: 'Tutorial').
 * @param {string} date - Publication date string (default: 'May 2026').
 * @param {string} readTime - Reading time estimate (default: '4 min read').
 * @param {string} thumbUrl - Optional thumbnail image URL.
 * @param {string} href - Destination link URL (default: '#').
 * @param {string} className - Optional additional CSS class.
 */
interface Props {
  title?: string;
  description?: string;
  tag?: string;
  date?: string;
  readTime?: string;
  thumbUrl?: string;
  href?: string;
  className?: string;
}

const { 
  title = 'Architecting High-Performance UI in Astro 5', 
  description = 'How to combine zero runtime dependencies with glassmorphic design tokens and responsive accessibility.', 
  tag = 'Engineering', 
  date = 'May 2026',
  readTime = '4 min read',
  thumbUrl = '',
  href = '#',
  className = '',
} = Astro.props;
---

<article class:list={['blog-h-card', className]}>
  <a href={href} class="blog-h-card__thumb-link" aria-label={title}>
    {thumbUrl ? (
      <img src={thumbUrl} alt={title} class="blog-h-card__thumb-img" />
    ) : (
      <div class="blog-h-card__thumb-fallback" aria-hidden="true">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      </div>
    )}
  </a>

  <div class="blog-h-card__content">
    <div class="blog-h-card__header">
      <span class="blog-h-card__tag">{tag}</span>
      <div class="blog-h-card__meta">
        <span>{date}</span>
        <span class="blog-h-card__dot">•</span>
        <span>{readTime}</span>
      </div>
    </div>

    <h4 class="blog-h-card__title">
      <a href={href}>{title}</a>
    </h4>

    <p class="blog-h-card__desc">{description}</p>

    <div class="blog-h-card__footer">
      <a href={href} class="blog-h-card__read-more">
        <span>Read Article</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  </div>
</article>

<style>
  .blog-h-card { 
    display: flex;
    width: 100%;
    max-width: 620px;
    background: rgba(18, 22, 34, 0.65);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--r-xl, 20px);
    overflow: hidden;
    box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .blog-h-card:hover {
    transform: translateY(-3px);
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 24px 48px -12px rgba(99, 102, 241, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }

  .blog-h-card__thumb-link {
    width: 190px;
    background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(15, 23, 42, 0.95) 100%);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid rgba(255, 255, 255, 0.06);
    overflow: hidden;
    text-decoration: none;
  }

  .blog-h-card__thumb-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  .blog-h-card:hover .blog-h-card__thumb-img {
    transform: scale(1.05);
  }

  .blog-h-card__thumb-fallback {
    color: rgba(129, 140, 248, 0.65);
  }

  .blog-h-card__content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    min-width: 0;
  }

  .blog-h-card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.6rem;
    flex-wrap: wrap;
  }

  .blog-h-card__tag {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--c-primary-light, #818cf8);
    background: rgba(99, 102, 241, 0.12);
    border: 1px solid rgba(99, 102, 241, 0.25);
    padding: 0.2rem 0.55rem;
    border-radius: 999px;
  }

  .blog-h-card__meta {
    font-size: 0.78rem;
    color: var(--c-text-3, #94a3b8);
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  .blog-h-card__dot {
    opacity: 0.5;
  }

  .blog-h-card__title {
    margin: 0 0 0.5rem 0;
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1.35;
  }

  .blog-h-card__title a {
    color: var(--c-text-1, #f8fafc);
    text-decoration: none;
    transition: color 0.15s ease;
  }

  .blog-h-card__title a:hover {
    color: var(--c-primary-light, #818cf8);
  }

  .blog-h-card__desc {
    font-size: 0.88rem;
    line-height: 1.55;
    color: var(--c-text-2, #94a3b8);
    margin: 0 0 1rem 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .blog-h-card__footer {
    display: flex;
    align-items: center;
  }

  .blog-h-card__read-more {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--c-primary-light, #818cf8);
    text-decoration: none;
    transition: gap 0.2s ease, color 0.15s ease;
  }

  .blog-h-card__read-more:hover {
    gap: 0.55rem;
    color: #c7d2fe;
  }

  @media (max-width: 600px) {
    .blog-h-card {
      flex-direction: column;
    }
    .blog-h-card__thumb-link {
      width: 100%;
      height: 160px;
      border-right: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
  }
</style>
`,
    usage: `<BlogHorizontalCard title="Building Astro Components" description="Learn to scale." tag="Tutorial" />`,
  },
  {
    slug: 'cyber-feature-card',
    name: 'Cyber Feature Card',
    description: 'A feature card with sharp angles and neon stroke animations.',
    category: 'cards',
    tags: ["card","cyberpunk"],
    featured: true,
    code: `---
/**
 * CyberFeatureCard — Futuristic cyberpunk/sci-fi feature card with neon HUD accents, scanning line, and telemetry readout.
 * 
 * @param {string} title - The main headline of the feature card.
 * @param {string} subtitle - Detailed contextual description.
 * @param {string} tag - Top tech telemetry badge (e.g. 'SYS.CYBER // 01').
 * @param {string} status - System operational status. Default is 'ACTIVE'.
 * @param {string} accentColor - Neon accent color. Default is 'var(--c-primary, #6366f1)'.
 */
interface Props {
  title?: string;
  subtitle?: string;
  tag?: string;
  status?: string;
  accentColor?: string;
}

const {
  title = 'Quantum Protocol Engine',
  subtitle = 'Zero-knowledge cryptographic handshake executing directly on distributed edge nodes with quantum resistance.',
  tag = 'SYS.CYBER // 01',
  status = 'ONLINE',
  accentColor = 'var(--c-primary, #6366f1)',
} = Astro.props;
---

<div class="cyber-card" style={\`--cyber-accent: \${accentColor};\`}>
  <div class="cyber-card__scanline" aria-hidden="true"></div>
  <div class="cyber-card__glow-spot" aria-hidden="true"></div>

  <div class="cyber-card__header">
    <div class="cyber-card__tag-wrap">
      <span class="cyber-card__status-dot" aria-hidden="true"></span>
      <span class="cyber-card__tag">{tag}</span>
    </div>
    <span class="cyber-card__status-badge">{status}</span>
  </div>

  <div class="cyber-card__icon-wrap" aria-hidden="true">
    <svg class="cyber-card__icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  </div>

  <div class="cyber-card__body">
    <h3 class="cyber-card__title">{title}</h3>
    <p class="cyber-card__subtitle">{subtitle}</p>
    <slot />
  </div>

  <div class="cyber-card__footer">
    <div class="cyber-card__metric">
      <span class="cyber-card__metric-label">LATENCY</span>
      <span class="cyber-card__metric-val">1.2ms</span>
    </div>
    <div class="cyber-card__metric">
      <span class="cyber-card__metric-label">INTEGRITY</span>
      <span class="cyber-card__metric-val">99.98%</span>
    </div>
    <div class="cyber-card__corner" aria-hidden="true"></div>
  </div>
</div>

<style>
  .cyber-card {
    position: relative;
    background: rgba(10, 15, 30, 0.7);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 3px solid var(--cyber-accent);
    padding: var(--sp-6, 1.5rem);
    border-radius: var(--r-lg, 16px);
    clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));
    overflow: hidden;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
    max-width: 380px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: var(--sp-4, 1rem);
  }

  .cyber-card:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.35);
    box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.6), 0 0 20px -4px var(--cyber-accent);
  }

  .cyber-card__scanline {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.25) 51%);
    background-size: 100% 4px;
    opacity: 0.4;
    z-index: 1;
  }

  .cyber-card__glow-spot {
    position: absolute;
    top: -50px;
    right: -50px;
    width: 140px;
    height: 140px;
    background: radial-gradient(circle, var(--cyber-accent) 0%, transparent 70%);
    opacity: 0.15;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .cyber-card:hover .cyber-card__glow-spot {
    opacity: 0.3;
  }

  .cyber-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
  }

  .cyber-card__tag-wrap {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .cyber-card__status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 8px #10b981;
    animation: cyber-pulse 2s infinite;
  }

  .cyber-card__tag {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: var(--c-text-2, #94a3b8);
  }

  .cyber-card__status-badge {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.68rem;
    font-weight: 800;
    color: var(--cyber-accent);
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(99, 102, 241, 0.25);
    padding: 2px 8px;
    border-radius: 4px;
    letter-spacing: 0.05em;
  }

  .cyber-card__icon-wrap {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: grid;
    place-items: center;
    color: var(--cyber-accent);
    position: relative;
    z-index: 2;
  }

  .cyber-card__body {
    position: relative;
    z-index: 2;
  }

  .cyber-card__title {
    margin: 0 0 0.5rem;
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--c-text-1, #f8fafc);
    letter-spacing: -0.01em;
  }

  .cyber-card__subtitle {
    margin: 0;
    font-size: 0.86rem;
    line-height: 1.5;
    color: var(--c-text-2, #94a3b8);
  }

  .cyber-card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--sp-3, 0.75rem);
    border-top: 1px dashed rgba(255, 255, 255, 0.1);
    position: relative;
    z-index: 2;
    margin-top: 0.25rem;
  }

  .cyber-card__metric {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .cyber-card__metric-label {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.65rem;
    color: var(--c-text-3, #64748b);
    letter-spacing: 0.05em;
  }

  .cyber-card__metric-val {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--c-text-1, #f8fafc);
  }

  @keyframes cyber-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
</style>
`,
    usage: `<CyberFeatureCard title="System Core" subtitle="Neural engine">Activate protocol.</CyberFeatureCard>`,
  },
  {
    slug: 'ecommerce-product-card',
    name: 'Product Card',
    description: 'Commercial card with price, rating and action buttons.',
    category: 'cards',
    tags: ["card","ecommerce"],
    featured: true,
    code: `---
/**
 * EcommerceProductCard — Commercial product card with pricing, rating badges, image fallback, and quick cart actions.
 * 
 * @param {string} title - Product name (default: 'Ergonomic Precision Keyboard').
 * @param {string} price - Current price (default: '$189').
 * @param {string} originalPrice - Optional discount comparison price (default: '$229').
 * @param {string} imageUrl - Product photo URL.
 * @param {string} tag - Badge label (default: 'Bestseller').
 * @param {string} rating - Formatted rating (default: '4.9 (128)').
 * @param {string} ctaText - Action button label (default: 'Add to Cart').
 * @param {string} className - Optional additional CSS class.
 */
interface Props {
  title?: string;
  price?: string;
  originalPrice?: string;
  imageUrl?: string;
  tag?: string;
  rating?: string;
  ctaText?: string;
  className?: string;
}

const { 
  title = 'Ergonomic Precision Keyboard', 
  price = '$189', 
  originalPrice = '$229',
  imageUrl = '',
  tag = 'Bestseller',
  rating = '4.9 (128)',
  ctaText = 'Add to Cart',
  className = '',
} = Astro.props;
---

<div class:list={['prod-card', className]}>
  <div class="prod-card__image-wrap">
    {imageUrl ? (
      <img src={imageUrl} alt={title} class="prod-card__img" />
    ) : (
      <div class="prod-card__img-fallback" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      </div>
    )}
    {tag && <span class="prod-card__tag">{tag}</span>}
  </div>

  <div class="prod-card__info">
    {rating && (
      <div class="prod-card__rating">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="#facc15" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <span>{rating}</span>
      </div>
    )}

    <h4 class="prod-card__title">{title}</h4>

    <div class="prod-card__bot">
      <div class="prod-card__prices">
        <span class="prod-card__price">{price}</span>
        {originalPrice && <span class="prod-card__orig-price">{originalPrice}</span>}
      </div>
      <button class="prod-card__cta" type="button">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <span>{ctaText}</span>
      </button>
    </div>
  </div>
</div>

<style>
  .prod-card {
    position: relative;
    width: 100%;
    max-width: 320px;
    background: rgba(18, 22, 34, 0.7);
    border-radius: var(--r-xl, 20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    overflow: hidden;
    box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .prod-card:hover {
    border-color: rgba(99, 102, 241, 0.35);
    transform: translateY(-4px);
    box-shadow: 0 24px 48px -12px rgba(99, 102, 241, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }

  .prod-card__image-wrap {
    position: relative;
    height: 190px;
    background: radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.15) 0%, rgba(15, 23, 42, 0.9) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    overflow: hidden;
  }

  .prod-card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  .prod-card:hover .prod-card__img {
    transform: scale(1.04);
  }

  .prod-card__img-fallback {
    color: rgba(99, 102, 241, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .prod-card__tag {
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    background: rgba(99, 102, 241, 0.2);
    border: 1px solid rgba(99, 102, 241, 0.4);
    color: #a5b4fc;
    backdrop-filter: blur(8px);
  }

  .prod-card__info {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .prod-card__rating {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.78rem;
    font-weight: 600;
    color: #facc15;
  }

  .prod-card__title {
    color: var(--c-text-1, #f8fafc);
    margin: 0;
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.35;
  }

  .prod-card__bot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }

  .prod-card__prices {
    display: flex;
    align-items: baseline;
    gap: 0.4rem;
  }

  .prod-card__price {
    font-weight: 800;
    color: #ffffff;
    font-size: 1.35rem;
    letter-spacing: -0.02em;
  }

  .prod-card__orig-price {
    font-size: 0.85rem;
    color: var(--c-text-3, #64748b);
    text-decoration: line-through;
  }

  .prod-card__cta {
    background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #ffffff;
    padding: 0.5rem 0.95rem;
    border-radius: var(--r-md, 10px);
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    transition: filter 0.2s ease, transform 0.15s ease;
  }

  .prod-card__cta:hover {
    filter: brightness(1.15);
    transform: translateY(-1px);
  }
</style>
`,
    usage: `<EcommerceProductCard title="Premium Headphones" price="$299" tag="New" rating="5.0 ★" />`,
  },
  {
    slug: 'glass-card',
    name: 'Glass Card',
    description: 'A versatile glassmorphism card with hover lift effect.',
    category: 'cards',
    tags: ["card","glass"],
    featured: true,
    code: `---
/**
 * GlassCard — A versatile glassmorphism card with hover lift effect, gradient border, and backdrop blur.
 * 
 * @param {string} title - Optional title for the glass card header. Default is 'Glassmorphic Surface'.
 * @param {string} subtitle - Optional description below the title.
 * @param {boolean} hoverable - Whether the card lifts on hover. Default is true.
 * @param {'sm'|'md'|'lg'} padding - Internal padding control. Default is 'md'.
 */
interface Props {
  title?: string;
  subtitle?: string;
  hoverable?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const {
  title = 'Glassmorphic Surface',
  subtitle = 'Multi-layered frosted glass with backdrop blur and ambient illumination.',
  hoverable = true,
  padding = 'md',
} = Astro.props;
---

<div class:list={['glass-card', \`glass-card--p\${padding}\`, { 'glass-card--hoverable': hoverable }]}>
  {title && (
    <div class="glass-card__header">
      <h3 class="glass-card__title">{title}</h3>
      {subtitle && <p class="glass-card__subtitle">{subtitle}</p>}
    </div>
  )}
  <div class="glass-card__body">
    <slot>
      <p class="glass-card__fallback-text">
        Interactive container component featuring high-contrast text, 16px background blur filter, and border glow.
      </p>
    </slot>
  </div>
</div>

<style>
  .glass-card {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: var(--r-xl, 20px);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
    max-width: 380px;
    box-sizing: border-box;
  }

  .glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
  }

  .glass-card--hoverable:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 20px rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.3);
  }

  .glass-card__header {
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
  }

  .glass-card__title {
    margin: 0 0 0.25rem;
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--c-text-1, #f8fafc);
  }

  .glass-card__subtitle {
    margin: 0;
    font-size: 0.85rem;
    color: var(--c-text-2, #94a3b8);
    line-height: 1.45;
  }

  .glass-card__fallback-text {
    margin: 0;
    font-size: 0.88rem;
    color: var(--c-text-2, #94a3b8);
    line-height: 1.5;
  }

  .glass-card--psm { padding: var(--sp-4, 1rem); }
  .glass-card--pmd { padding: var(--sp-6, 1.5rem); }
  .glass-card--plg { padding: var(--sp-8, 2rem); }
</style>
`,
    usage: `---
import { GlassCard } from 'astro-component-kit';
---

<GlassCard 
  title="Analytics Dashboard" 
  subtitle="Last 30 days performance" 
  padding="lg"
>
  <div class="stat-group">
    <span class="stat-label">Active Users</span>
    <span class="stat-value">2,841</span>
  </div>
  <p>Your workspace is performing 15% better than last month.</p>
</GlassCard>`,
  },
  {
    slug: 'glass-event-card',
    name: 'Glass Event Card',
    description: 'Vibrant card for events with date badge and glass effect.',
    category: 'cards',
    tags: ["card","event"],
    featured: true,
    code: `---
/**
 * GlassEventCard — Vibrant glass card for events with calendar date badge, metadata, and join action.
 * 
 * @param {string|number} day - The event date numeric segment.
 * @param {string} month - The event month string indicator.
 * @param {string} title - The name of the event.
 * @param {string} details - Location or venue details.
 * @param {string} time - Time of the event.
 * @param {string} category - Category pill tag (e.g. 'Conference', 'Workshop').
 * @param {number} attendeesCount - Optional attendee RSVP count.
 */
interface Props {
  day?: string | number;
  month?: string;
  title?: string;
  details?: string;
  time?: string;
  category?: string;
  attendeesCount?: number;
}

const {
  day = '24',
  month = 'OCT',
  title = 'Global Astro & Web Architecture Summit',
  details = 'San Francisco, CA • Moscone Center',
  time = '10:00 AM - 4:30 PM PST',
  category = 'Keynote',
  attendeesCount = 380,
} = Astro.props;
---

<div class="glass-event-card">
  <div class="glass-event-card__date-col">
    <div class="glass-event-card__badge">
      <span class="glass-event-card__month">{month}</span>
      <span class="glass-event-card__day">{day}</span>
    </div>
    {category && <span class="glass-event-card__cat-pill">{category}</span>}
  </div>

  <div class="glass-event-card__content">
    <h3 class="glass-event-card__title">{title}</h3>
    
    <div class="glass-event-card__meta-row">
      <div class="glass-event-card__meta-item">
        <svg class="glass-event-card__meta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>{time}</span>
      </div>

      <div class="glass-event-card__meta-item">
        <svg class="glass-event-card__meta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <span>{details}</span>
      </div>
    </div>

    <div class="glass-event-card__footer">
      <div class="glass-event-card__attendees">
        <div class="glass-event-card__avatar-stack" aria-hidden="true">
          <span class="avatar avatar--1">ER</span>
          <span class="avatar avatar--2">KL</span>
          <span class="avatar avatar--3">+</span>
        </div>
        <span class="glass-event-card__attendees-text"><strong>{attendeesCount}+</strong> attending</span>
      </div>

      <button class="glass-event-card__action" type="button" aria-label={\`RSVP to \${title}\`}>
        <span>RSVP</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>
  </div>
</div>

<style>
  .glass-event-card {
    display: flex;
    gap: var(--sp-5, 1.25rem);
    padding: var(--sp-6, 1.5rem);
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--r-xl, 20px);
    position: relative;
    overflow: hidden;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
    max-width: 480px;
    box-sizing: border-box;
  }

  .glass-event-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.12), transparent 40%);
    pointer-events: none;
  }

  .glass-event-card:hover {
    transform: translateY(-3px);
    border-color: rgba(99, 102, 241, 0.35);
    box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.5), 0 0 24px -6px rgba(99, 102, 241, 0.2);
  }

  .glass-event-card__date-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .glass-event-card__badge {
    background: linear-gradient(135deg, var(--c-primary, #6366f1), var(--c-primary-light, #818cf8));
    color: #fff;
    width: 60px;
    height: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: var(--r-md, 12px);
    box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);
  }

  .glass-event-card__month {
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.9;
  }

  .glass-event-card__day {
    font-size: 1.55rem;
    font-weight: 900;
    line-height: 1;
    margin-top: 2px;
  }

  .glass-event-card__cat-pill {
    font-size: 0.68rem;
    font-weight: 700;
    color: var(--c-text-2, #94a3b8);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 2px 8px;
    border-radius: 999px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .glass-event-card__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    min-width: 0;
  }

  .glass-event-card__title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--c-text-1, #f8fafc);
    margin: 0;
    line-height: 1.35;
  }

  .glass-event-card__meta-row {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .glass-event-card__meta-item {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.8rem;
    color: var(--c-text-2, #94a3b8);
  }

  .glass-event-card__meta-icon {
    color: var(--c-primary-light, #818cf8);
    flex-shrink: 0;
  }

  .glass-event-card__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.4rem;
    padding-top: 0.6rem;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }

  .glass-event-card__attendees {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .glass-event-card__avatar-stack {
    display: flex;
  }

  .avatar {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid #080b14;
    display: grid;
    place-items: center;
    font-size: 0.6rem;
    font-weight: 700;
    color: #fff;
    margin-left: -6px;
  }

  .avatar:first-child {
    margin-left: 0;
  }

  .avatar--1 { background: #6366f1; }
  .avatar--2 { background: #06b6d4; }
  .avatar--3 { background: #3b82f6; }

  .glass-event-card__attendees-text {
    font-size: 0.75rem;
    color: var(--c-text-2, #94a3b8);
  }

  .glass-event-card__attendees-text strong {
    color: var(--c-text-1, #f8fafc);
  }

  .glass-event-card__action {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.4rem 0.85rem;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 8px;
    color: var(--c-text-1, #fff);
    font-size: 0.78rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .glass-event-card__action:hover {
    background: var(--c-primary, #6366f1);
    border-color: var(--c-primary, #6366f1);
    transform: translateX(2px);
  }
</style>
`,
    usage: `<GlassEventCard day={24} month="OCT" title="Dev Meetup" details="SF, CA" />`,
  },
  {
    slug: 'glow-portfolio-card',
    name: 'Glow Portfolio Card',
    description: 'Card with a hovering background glow that follows the card edges.',
    category: 'cards',
    tags: ["card","glow"],
    featured: true,
    code: `---
/**
 * GlowPortfolioCard — Showcase card with an animated rotating border glow, tag chips, and external link action.
 * 
 * @param {string} title - Project title heading.
 * @param {string} subtitle - Project description or client summary.
 * @param {string} category - Category badge (e.g. 'Creative Engineering').
 * @param {string[]} tags - Tech stack pills.
 * @param {string} glowColor - Accent glow color. Default is 'var(--c-primary, #6366f1)'.
 * @param {string} href - Link URL for project details. Default is '#'.
 */
interface Props {
  title?: string;
  subtitle?: string;
  category?: string;
  tags?: string[];
  glowColor?: string;
  href?: string;
}

const {
  title = 'Spatial Interface Engine',
  subtitle = 'Next-generation 3D spatial canvas with real-time WebGL rendering, physics simulation, and reactive gestures.',
  category = 'Creative Engineering',
  tags = ['Three.js', 'WebGPU', 'TypeScript'],
  glowColor = 'var(--c-primary, #6366f1)',
  href = '#',
} = Astro.props;
---

<div class="glow-wrap" style={\`--glow-color: \${glowColor};\`}>
  <div class="glow-content">
    <div class="glow-content__header">
      <span class="glow-content__cat">{category}</span>
      <a href={href} class="glow-content__link-btn" aria-label={\`View \${title} project\`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </a>
    </div>

    <div class="glow-content__body">
      <h3 class="glow-content__title">{title}</h3>
      <p class="glow-content__subtitle">{subtitle}</p>
      <slot />
    </div>

    <div class="glow-content__footer">
      <div class="glow-content__tags">
        {tags.map((tag) => (
          <span class="glow-tag">{tag}</span>
        ))}
      </div>
    </div>
  </div>
</div>

<style>
  .glow-wrap {
    position: relative;
    padding: 1.5px;
    border-radius: var(--r-xl, 22px);
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    max-width: 380px;
    box-sizing: border-box;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
  }

  .glow-wrap:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 0 30px -8px var(--glow-color);
  }

  .glow-wrap::before {
    content: '';
    position: absolute;
    inset: -60%;
    background: conic-gradient(from 0deg, transparent 0deg, var(--glow-color) 60deg, transparent 120deg, var(--glow-color) 240deg, transparent 300deg);
    animation: rotate-glow 6s linear infinite;
  }

  .glow-content {
    position: relative;
    background: #090d16;
    padding: var(--sp-6, 1.5rem);
    border-radius: calc(var(--r-xl, 22px) - 1.5px);
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: var(--sp-4, 1rem);
  }

  .glow-content__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .glow-content__cat {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--c-primary-light, #818cf8);
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(99, 102, 241, 0.2);
    padding: 2px 8px;
    border-radius: 6px;
  }

  .glow-content__link-btn {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--c-text-1, #fff);
    display: grid;
    place-items: center;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .glow-content__link-btn:hover {
    background: var(--glow-color);
    border-color: var(--glow-color);
    color: #fff;
    transform: rotate(45deg);
  }

  .glow-content__body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .glow-content__title {
    margin: 0;
    color: var(--c-text-1, #f8fafc);
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .glow-content__subtitle {
    margin: 0;
    color: var(--c-text-2, #94a3b8);
    font-size: 0.88rem;
    line-height: 1.5;
  }

  .glow-content__footer {
    padding-top: 0.75rem;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
  }

  .glow-content__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .glow-tag {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--c-text-2, #94a3b8);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 2px 8px;
    border-radius: 4px;
  }

  @keyframes rotate-glow {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
`,
    usage: `<GlowPortfolioCard title="Redesign" subtitle="Web / 2024"><button>View</button></GlowPortfolioCard>`,
  },
  {
    slug: 'interactive-tilt-card',
    name: 'Interactive Tilt Card',
    description: 'Card that tilts in 3D space based on mouse position.',
    category: 'cards',
    tags: ["card","tilt","3d"],
    featured: true,
    code: `---
/**
 * InteractiveTiltCard — Smooth 3D tilt card reacting to cursor trajectory with specular glare and perspective depth.
 * 
 * @param {string} title - The card's heading text.
 * @param {string} description - The descriptive paragraph attached to the card.
 * @param {string} badge - Eyebrow pill label. Default is '3D Interactive'.
 * @param {string} ctaText - Action button label. Default is 'Explore Effect'.
 */
interface Props {
  title?: string;
  description?: string;
  badge?: string;
  ctaText?: string;
}

const {
  title = 'Interactive 3D Tilt',
  description = 'Physical card response following cursor movement with dynamic perspective distortion, specular highlights, and multi-layer depth.',
  badge = 'Hardware Accelerated',
  ctaText = 'Interact Now',
} = Astro.props;
---

<div class="tilt-card-wrap">
  <div class="tilt-card-inner">
    <div class="tilt-card__glare" aria-hidden="true"></div>

    <div class="tilt-card__badge-wrap">
      <span class="tilt-card__badge">{badge}</span>
      <div class="tilt-card__icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      </div>
    </div>

    <div class="tilt-card__content">
      <h3 class="tilt-card__title">{title}</h3>
      <p class="tilt-card__desc">{description}</p>
      <slot />
    </div>

    <div class="tilt-card__footer">
      <button class="tilt-card__btn" type="button">
        <span>{ctaText}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>
  </div>
</div>

<style>
  .tilt-card-wrap {
    perspective: 1000px;
    width: 100%;
    max-width: 360px;
    box-sizing: border-box;
  }

  .tilt-card-inner {
    position: relative;
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--r-xl, 22px);
    padding: var(--sp-6, 1.75rem);
    transform-style: preserve-3d;
    transition: transform 0.15s ease-out, border-color 0.25s ease, box-shadow 0.25s ease;
    box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: var(--sp-4, 1rem);
  }

  .tilt-card-inner:hover {
    border-color: rgba(99, 102, 241, 0.4);
    box-shadow: 0 24px 50px -15px rgba(0, 0, 0, 0.7), 0 0 30px -10px rgba(99, 102, 241, 0.25);
  }

  .tilt-card__glare {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.15) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: inherit;
  }

  .tilt-card-inner:hover .tilt-card__glare {
    opacity: 1;
  }

  .tilt-card__badge-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transform: translateZ(25px);
  }

  .tilt-card__badge {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--c-primary-light, #818cf8);
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(99, 102, 241, 0.25);
    padding: 2px 8px;
    border-radius: 6px;
  }

  .tilt-card__icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: grid;
    place-items: center;
    color: var(--c-primary-light, #818cf8);
  }

  .tilt-card__content {
    transform: translateZ(40px);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .tilt-card__title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--c-text-1, #f8fafc);
    letter-spacing: -0.01em;
  }

  .tilt-card__desc {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.5;
    color: var(--c-text-2, #94a3b8);
  }

  .tilt-card__footer {
    transform: translateZ(30px);
    padding-top: 0.5rem;
  }

  .tilt-card__btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    color: var(--c-text-1, #fff);
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .tilt-card__btn:hover {
    background: var(--c-primary, #6366f1);
    border-color: var(--c-primary, #6366f1);
  }
</style>

<script>
  document.querySelectorAll('.tilt-card-wrap').forEach((wrap) => {
    const card = wrap.querySelector('.tilt-card-inner') as HTMLElement;
    if (!card) return;

    wrap.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e as MouseEvent).clientX - rect.left;
      const y = (e as MouseEvent).clientY - rect.top;
      
      const rotX = ((y - rect.height / 2) / (rect.height / 2)) * -10;
      const rotY = ((x - rect.width / 2) / (rect.width / 2)) * 10;

      card.style.transform = \`rotateX(\${rotX}deg) rotateY(\${rotY}deg)\`;
      card.style.setProperty('--mouse-x', \`\${(x / rect.width) * 100}%\`);
      card.style.setProperty('--mouse-y', \`\${(y / rect.height) * 100}%\`);
    });

    wrap.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  });
</script>
`,
    usage: `<InteractiveTiltCard title="3D Hover" description="Move your mouse over me." />`,
  },
  {
    slug: 'kanban-item-card',
    name: 'Project Task Card',
    description: 'Small card optimized for list-based project management.',
    category: 'cards',
    tags: ["card","project"],
    featured: true,
    code: `---
/**
 * KanbanItemCard — Polished agile kanban ticket with priority pill, assignee avatar, attachment count, and comment indicators.
 * 
 * @param {string} title - The description or summary of the task ticket.
 * @param {'low'|'medium'|'high'|'urgent'} priority - Priority level flag. Default is 'high'.
 * @param {string} tag - Contextual sprint or component tag (e.g. 'Core Graphics').
 * @param {string} assignee - Initials for assignee badge (e.g. 'AK'). Default is 'AK'.
 * @param {string} dueDate - Due date label string. Default is 'Tomorrow'.
 * @param {number} commentsCount - Number of discussion comments. Default is 3.
 * @param {number} attachmentsCount - Number of files attached. Default is 2.
 */
interface Props {
  title?: string;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  tag?: string;
  assignee?: string;
  dueDate?: string;
  commentsCount?: number;
  attachmentsCount?: number;
}

const {
  title = 'Implement WebGL Shader Transition Pipeline',
  priority = 'high',
  tag = 'Core Graphics',
  assignee = 'AK',
  dueDate = 'Tomorrow',
  commentsCount = 3,
  attachmentsCount = 2,
} = Astro.props;

const priorityMap = {
  low: { label: 'Low', color: '#10b981', bg: 'rgba(16, 185, 129, 0.12)' },
  medium: { label: 'Medium', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.12)' },
  high: { label: 'High', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.12)' },
  urgent: { label: 'Urgent', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.15)' },
};

const currentPriority = priorityMap[priority] || priorityMap.high;
---

<div class="k-item" tabindex="0" role="article" aria-label={\`Task: \${title}\`}>
  <div class="k-item__head">
    <span class="k-item__tag">{tag}</span>
    <span
      class="k-item__priority"
      style={\`color: \${currentPriority.color}; background: \${currentPriority.bg}; border-color: \${currentPriority.color}33;\`}
    >
      <span class="k-item__priority-dot" style={\`background: \${currentPriority.color};\`}></span>
      {currentPriority.label}
    </span>
  </div>

  <h4 class="k-item__title">{title}</h4>

  <div class="k-item__footer">
    <div class="k-item__meta">
      <div class="k-item__meta-item" title="Due Date">
        <svg class="k-item__icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>{dueDate}</span>
      </div>

      {commentsCount > 0 && (
        <div class="k-item__meta-item" title={\`\${commentsCount} comments\`}>
          <svg class="k-item__icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>{commentsCount}</span>
        </div>
      )}

      {attachmentsCount > 0 && (
        <div class="k-item__meta-item" title={\`\${attachmentsCount} attachments\`}>
          <svg class="k-item__icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
          </svg>
          <span>{attachmentsCount}</span>
        </div>
      )}
    </div>

    <div class="k-item__assignee" title={\`Assigned to \${assignee}\`}>
      {assignee}
    </div>
  </div>
</div>

<style>
  .k-item {
    background: rgba(17, 24, 39, 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--r-md, 12px);
    padding: var(--sp-4, 1rem);
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    cursor: grab;
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, box-shadow 0.2s ease;
    max-width: 300px;
    box-sizing: border-box;
    outline: none;
  }

  .k-item:hover,
  .k-item:focus-visible {
    transform: translateY(-2px);
    border-color: rgba(99, 102, 241, 0.4);
    box-shadow: 0 10px 24px -6px rgba(0, 0, 0, 0.5), 0 0 12px -4px rgba(99, 102, 241, 0.2);
  }

  .k-item:focus-visible {
    box-shadow: 0 0 0 2px var(--c-primary, #6366f1);
  }

  .k-item__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .k-item__tag {
    font-size: 0.68rem;
    font-weight: 700;
    color: var(--c-text-2, #94a3b8);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 2px 7px;
    border-radius: 4px;
    letter-spacing: 0.03em;
  }

  .k-item__priority {
    font-size: 0.66rem;
    font-weight: 800;
    padding: 2px 7px;
    border-radius: 4px;
    border: 1px solid;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .k-item__priority-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  .k-item__title {
    margin: 0;
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--c-text-1, #f8fafc);
    line-height: 1.45;
  }

  .k-item__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    margin-top: 0.1rem;
  }

  .k-item__meta {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .k-item__meta-item {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 0.72rem;
    color: var(--c-text-3, #64748b);
  }

  .k-item__icon {
    opacity: 0.75;
  }

  .k-item__assignee {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--c-primary, #6366f1), var(--c-primary-light, #818cf8));
    color: #fff;
    font-size: 0.62rem;
    font-weight: 800;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
</style>
`,
    usage: `<KanbanItemCard title="Update SEO" priority="Prio" tag="SEO" />`,
  },
  {
    slug: 'minimal-link-card',
    name: 'Minimal Link Card',
    description: 'Elegant arrow-link card for site navigation sections.',
    category: 'cards',
    tags: ["card","link","minimal"],
    featured: true,
    code: `---
/**
 * MinimalLinkCard — Elegant glass link navigation card with icon, subtitle, and animated directional arrow.
 * 
 * @param {string} title - The text label of the link.
 * @param {string} subtitle - Descriptive subtitle or section info.
 * @param {string} href - Destination URL. Default is '#'.
 * @param {string} badge - Optional badge pill (e.g. 'New', 'Docs').
 */
interface Props {
  title?: string;
  subtitle?: string;
  href?: string;
  badge?: string;
}

const {
  title = 'Design System & Tokens',
  subtitle = 'Explore color primitives, typography scale, and glassmorphic elevations.',
  href = '#',
  badge = 'Guide',
} = Astro.props;
---

<a href={href} class="link-card">
  <div class="link-card__icon-wrap" aria-hidden="true">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  </div>

  <div class="link-card__body">
    <div class="link-card__head">
      <span class="link-card__title">{title}</span>
      {badge && <span class="link-card__badge">{badge}</span>}
    </div>
    {subtitle && <p class="link-card__subtitle">{subtitle}</p>}
  </div>

  <div class="link-card__arrow" aria-hidden="true">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </div>
</a>

<style>
  .link-card {
    display: flex;
    align-items: center;
    gap: var(--sp-4, 1rem);
    padding: var(--sp-5, 1.25rem);
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: var(--r-md, 14px);
    text-decoration: none;
    color: var(--c-text-1, #fff);
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    max-width: 420px;
    box-sizing: border-box;
  }

  .link-card:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(99, 102, 241, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 12px 28px -8px rgba(0, 0, 0, 0.5), 0 0 16px -4px rgba(99, 102, 241, 0.2);
  }

  .link-card__icon-wrap {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(99, 102, 241, 0.2);
    color: var(--c-primary-light, #818cf8);
    display: grid;
    place-items: center;
    flex-shrink: 0;
    transition: background 0.2s ease, transform 0.2s ease;
  }

  .link-card:hover .link-card__icon-wrap {
    background: var(--c-primary, #6366f1);
    color: #fff;
    transform: scale(1.05);
  }

  .link-card__body {
    flex: 1;
    min-width: 0;
  }

  .link-card__head {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .link-card__title {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--c-text-1, #f8fafc);
  }

  .link-card__badge {
    font-size: 0.65rem;
    font-weight: 700;
    padding: 1px 6px;
    border-radius: 4px;
    background: rgba(99, 102, 241, 0.12);
    color: var(--c-primary-light, #818cf8);
    border: 1px solid rgba(99, 102, 241, 0.25);
    text-transform: uppercase;
  }

  .link-card__subtitle {
    margin: 3px 0 0;
    font-size: 0.8rem;
    color: var(--c-text-2, #94a3b8);
    line-height: 1.4;
  }

  .link-card__arrow {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: grid;
    place-items: center;
    color: var(--c-text-2, #94a3b8);
    flex-shrink: 0;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .link-card:hover .link-card__arrow {
    transform: translateX(4px);
    color: var(--c-primary-light, #818cf8);
  }
</style>
`,
    usage: `<MinimalLinkCard title="Documentation" href="/docs" />`,
  },
  {
    slug: 'music-player-mini',
    name: 'Mini Music Player',
    description: 'Compact player widget with controls and progress bar.',
    category: 'cards',
    tags: ["card","music"],
    featured: true,
    code: `---
/**
 * MusicPlayerMini — Compact glassmorphic audio player card with track metadata, vector controls, and animated equalizer.
 * 
 * @param {string} title - The song track title.
 * @param {string} artist - The artist or band name.
 * @param {string} coverUrl - Optional string matching the album cover image URL.
 * @param {string} currentTime - Current track playback position. Default is '1:28'.
 * @param {string} duration - Total track duration. Default is '3:45'.
 * @param {number} progress - Playback progress representation (0 to 100). Default is 42.
 */
interface Props {
  title?: string;
  artist?: string;
  coverUrl?: string;
  currentTime?: string;
  duration?: string;
  progress?: number;
}

const {
  title = 'Midnight Synth Echoes',
  artist = 'Solaris & Stellar',
  coverUrl,
  currentTime = '1:28',
  duration = '3:45',
  progress = 42,
} = Astro.props;
---

<div class="music-mini" role="region" aria-label={\`Audio Player: \${title} by \${artist}\`}>
  <div class="music-mini__top">
    <div class="music-mini__art-wrap">
      {coverUrl ? (
        <img class="music-mini__art-img" src={coverUrl} alt={\`\${title} cover\`} loading="lazy" />
      ) : (
        <div class="music-mini__art-fallback" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        </div>
      )}
    </div>

    <div class="music-mini__track">
      <div class="music-mini__title-row">
        <h4 class="music-mini__title">{title}</h4>
        <div class="music-mini__eq" aria-hidden="true">
          <span class="eq-bar eq-bar--1"></span>
          <span class="eq-bar eq-bar--2"></span>
          <span class="eq-bar eq-bar--3"></span>
        </div>
      </div>
      <p class="music-mini__artist">{artist}</p>
    </div>
  </div>

  <div class="music-mini__progress-wrap">
    <div class="music-mini__progress" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" aria-label="Playback progress">
      <div class="music-mini__bar" style={\`width: \${progress}%;\`}>
        <span class="music-mini__knob" aria-hidden="true"></span>
      </div>
    </div>
    <div class="music-mini__time">
      <span>{currentTime}</span>
      <span>{duration}</span>
    </div>
  </div>

  <div class="music-mini__controls">
    <button class="music-mini__ctrl-btn" type="button" aria-label="Previous track">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polygon points="19 20 9 12 19 4 19 20"></polygon>
        <line x1="5" y1="19" x2="5" y2="5"></line>
      </svg>
    </button>

    <button class="music-mini__play-btn" type="button" aria-label="Play or pause track">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    </button>

    <button class="music-mini__ctrl-btn" type="button" aria-label="Next track">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polygon points="5 4 15 12 5 20 5 4"></polygon>
        <line x1="19" y1="5" x2="19" y2="19"></line>
      </svg>
    </button>
  </div>
</div>

<style>
  .music-mini {
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(16px);
    padding: var(--sp-4, 1.1rem);
    border-radius: var(--r-xl, 18px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.5);
    width: 100%;
    max-width: 320px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    transition: transform 0.25s ease, border-color 0.25s ease;
  }

  .music-mini:hover {
    border-color: rgba(99, 102, 241, 0.35);
    transform: translateY(-2px);
  }

  .music-mini__top {
    display: flex;
    align-items: center;
    gap: var(--sp-4, 1rem);
  }

  .music-mini__art-wrap {
    width: 52px;
    height: 52px;
    border-radius: var(--r-md, 10px);
    overflow: hidden;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }

  .music-mini__art-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .music-mini__art-fallback {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--c-primary, #6366f1), var(--c-primary-light, #818cf8));
    display: grid;
    place-items: center;
    color: #fff;
  }

  .music-mini__track {
    flex: 1;
    min-width: 0;
  }

  .music-mini__title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }

  .music-mini__title {
    font-size: 0.92rem;
    font-weight: 700;
    color: var(--c-text-1, #f8fafc);
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .music-mini__eq {
    display: flex;
    align-items: flex-end;
    gap: 2px;
    height: 12px;
  }

  .eq-bar {
    width: 2.5px;
    background: var(--c-primary-light, #818cf8);
    border-radius: 1px;
    animation: eq-bounce 1s ease-in-out infinite alternate;
  }

  .eq-bar--1 { height: 60%; animation-delay: 0.1s; }
  .eq-bar--2 { height: 100%; animation-delay: 0.3s; }
  .eq-bar--3 { height: 40%; animation-delay: 0.5s; }

  @keyframes eq-bounce {
    0% { height: 20%; }
    100% { height: 100%; }
  }

  .music-mini__artist {
    font-size: 0.78rem;
    color: var(--c-text-2, #94a3b8);
    margin: 2px 0 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .music-mini__progress-wrap {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .music-mini__progress {
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    position: relative;
    cursor: pointer;
  }

  .music-mini__bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: linear-gradient(90deg, var(--c-primary, #6366f1), var(--c-primary-light, #818cf8));
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .music-mini__knob {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
    transform: translateX(4px);
  }

  .music-mini__time {
    display: flex;
    justify-content: space-between;
    font-size: 0.68rem;
    color: var(--c-text-3, #64748b);
    font-family: ui-monospace, monospace;
  }

  .music-mini__controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    padding-top: 0.2rem;
  }

  .music-mini__ctrl-btn {
    background: none;
    border: none;
    color: var(--c-text-2, #94a3b8);
    cursor: pointer;
    display: grid;
    place-items: center;
    padding: 0.35rem;
    border-radius: 6px;
    transition: color 0.2s ease, transform 0.2s ease;
  }

  .music-mini__ctrl-btn:hover {
    color: var(--c-text-1, #fff);
    transform: scale(1.1);
  }

  .music-mini__play-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--c-primary, #6366f1);
    border: none;
    color: #fff;
    cursor: pointer;
    display: grid;
    place-items: center;
    box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
    transition: transform 0.2s ease, background 0.2s ease;
  }

  .music-mini__play-btn:hover {
    background: var(--c-primary-light, #818cf8);
    transform: scale(1.08);
  }
</style>
`,
    usage: `<MusicPlayerMini title="Moonlight" artist="Astro Orchestra" progress={60} />`,
  },
  {
    slug: 'neumorphic-card',
    name: 'Neumorphic Card',
    description: 'A soft UI card with deep shadows for a realistic elevated look.',
    category: 'cards',
    tags: ["card","neumorphism"],
    featured: true,
    code: `---
/**
 * NeumorphicCard — Soft UI card with tactile extruded shadows calibrated for dark and light viewports.
 * 
 * @param {string} title - Optional headline for the card. Default is 'Soft UI Element'.
 * @param {string} subtitle - Descriptive supporting context.
 * @param {'sm'|'md'|'lg'} padding - Inner layout padding size. Default is 'md'.
 */
interface Props {
  title?: string;
  subtitle?: string;
  padding?: 'sm' | 'md' | 'lg';
}

const {
  title = 'Soft UI Element',
  subtitle = 'Tactile extruded neumorphic shadows calibrated for light and dark viewports.',
  padding = 'md',
} = Astro.props;
---

<div class={\`neu-card neu-card--p\${padding}\`}>
  <div class="neu-card__inner">
    {title && <h3 class="neu-card__title">{title}</h3>}
    {subtitle && <p class="neu-card__subtitle">{subtitle}</p>}
    <slot />
  </div>
</div>

<style>
  .neu-card {
    background: #131b2e;
    border-radius: var(--r-xl, 24px);
    box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.4), -8px -8px 20px rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.04);
    color: var(--c-text-1, #f8fafc);
    transition: all 0.3s ease;
    max-width: 360px;
    box-sizing: border-box;
  }

  .neu-card:hover {
    box-shadow: 16px 16px 30px rgba(0, 0, 0, 0.5), -10px -10px 24px rgba(255, 255, 255, 0.04);
    transform: translateY(-2px);
  }

  .neu-card__inner {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .neu-card__title {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--c-text-1, #f8fafc);
  }

  .neu-card__subtitle {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.5;
    color: var(--c-text-2, #94a3b8);
  }

  .neu-card--psm { padding: var(--sp-4, 1rem); }
  .neu-card--pmd { padding: var(--sp-6, 1.75rem); }
  .neu-card--plg { padding: var(--sp-10, 2.5rem); }
</style>
`,
    usage: `<NeumorphicCard padding="lg"><p>Elevated focus container</p></NeumorphicCard>`,
  },
  {
    slug: 'notification-card',
    name: 'Notification Card',
    description: 'Toast-like card for app notifications and alerts.',
    category: 'cards',
    tags: ["card","notification"],
    featured: true,
    code: `---
/**
 * NotificationCard — Toast notification card for alerts, build statuses, and system messages with SVG status icons.
 * 
 * @param {string} title - The notification headline.
 * @param {string} message - The notification detail text.
 * @param {'info'|'warning'|'success'|'error'} type - Notification severity style variant. Default is 'success'.
 * @param {string} time - Relative time indicator (e.g. 'Just now'). Default is 'Just now'.
 * @param {string} actionText - Optional action link text. Default is 'View Logs'.
 * @param {string} actionHref - Destination URL for action. Default is '#'.
 */
interface Props {
  title?: string;
  message?: string;
  type?: 'info' | 'warning' | 'success' | 'error';
  time?: string;
  actionText?: string;
  actionHref?: string;
}

const {
  title = 'Deployment Succeeded',
  message = 'Production build v2.4.0 completed in 34s and deployed across 32 edge locations.',
  type = 'success',
  time = 'Just now',
  actionText = 'View Logs',
  actionHref = '#',
} = Astro.props;

const config = {
  success: {
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.12)',
    border: 'rgba(16, 185, 129, 0.3)',
  },
  info: {
    color: '#3b82f6',
    bg: 'rgba(59, 130, 246, 0.12)',
    border: 'rgba(59, 130, 246, 0.3)',
  },
  warning: {
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.12)',
    border: 'rgba(245, 158, 11, 0.3)',
  },
  error: {
    color: '#ef4444',
    bg: 'rgba(239, 68, 68, 0.12)',
    border: 'rgba(239, 68, 68, 0.3)',
  },
};

const current = config[type] || config.info;
---

<div class={\`notify-card notify-card--\${type}\`} role="alert" style={\`--status-color: \${current.color}; --status-bg: \${current.bg}; --status-border: \${current.border};\`}>
  <div class="notify-card__icon-wrap" aria-hidden="true">
    {type === 'success' && (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )}
    {type === 'info' && (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    )}
    {type === 'warning' && (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    )}
    {type === 'error' && (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>
    )}
  </div>

  <div class="notify-card__content">
    <div class="notify-card__header">
      <strong class="notify-card__title">{title}</strong>
      <span class="notify-card__time">{time}</span>
    </div>
    <p class="notify-card__message">{message}</p>
    {actionText && (
      <a href={actionHref} class="notify-card__action">
        <span>{actionText}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    )}
  </div>

  <button class="notify-card__close" type="button" aria-label="Dismiss notification">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </button>
</div>

<style>
  .notify-card {
    display: flex;
    align-items: flex-start;
    gap: var(--sp-4, 1rem);
    padding: var(--sp-4, 1rem);
    background: rgba(15, 23, 42, 0.85);
    backdrop-filter: blur(16px);
    border-radius: var(--r-md, 14px);
    border: 1px solid var(--status-border);
    box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.6), 0 0 16px -6px var(--status-color);
    max-width: 380px;
    box-sizing: border-box;
    position: relative;
    transition: transform 0.2s ease;
  }

  .notify-card:hover {
    transform: translateY(-2px);
  }

  .notify-card__icon-wrap {
    width: 34px;
    height: 34px;
    border-radius: 8px;
    background: var(--status-bg);
    border: 1px solid var(--status-border);
    color: var(--status-color);
    display: grid;
    place-items: center;
    flex-shrink: 0;
  }

  .notify-card__content {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .notify-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }

  .notify-card__title {
    font-size: 0.92rem;
    font-weight: 700;
    color: var(--c-text-1, #f8fafc);
  }

  .notify-card__time {
    font-size: 0.72rem;
    color: var(--c-text-3, #64748b);
    white-space: nowrap;
  }

  .notify-card__message {
    margin: 0;
    font-size: 0.82rem;
    color: var(--c-text-2, #94a3b8);
    line-height: 1.45;
  }

  .notify-card__action {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--status-color);
    text-decoration: none;
    margin-top: 0.2rem;
    transition: opacity 0.2s ease;
  }

  .notify-card__action:hover {
    opacity: 0.8;
  }

  .notify-card__close {
    background: none;
    border: none;
    color: var(--c-text-3, #64748b);
    cursor: pointer;
    padding: 2px;
    display: grid;
    place-items: center;
    border-radius: 4px;
    transition: color 0.2s ease;
    margin-left: -4px;
  }

  .notify-card__close:hover {
    color: var(--c-text-1, #f8fafc);
  }
</style>
`,
    usage: `<NotificationCard title="Updates Available" message="Version 2.0 is ready." type="info" />`,
  },
  {
    slug: 'pricing-card',
    name: 'Pricing Tier Card',
    description: 'Optimized card for showing product plans and features.',
    category: 'cards',
    tags: ["card","pricing"],
    featured: true,
    code: `---
/**
 * PricingCard — Optimized card for showcasing subscription tiers with SVG checkmarks, highlight badge, and action CTA.
 * 
 * @param {string} plan - The plan name (e.g. 'Pro'). Default is 'Pro'.
 * @param {string} price - Numerical price value. Default is '29'.
 * @param {string} period - Payment cadence (e.g. '/month'). Default is '/month'.
 * @param {string} description - Brief summary of who this plan is for.
 * @param {boolean} featured - Applies highlighted border and gradient if true. Default is false.
 * @param {string[]} features - Bullet points of plan perks.
 * @param {string} ctaText - Button label. Default is 'Choose Plan'.
 */
interface Props {
  plan?: string;
  price?: string;
  period?: string;
  description?: string;
  featured?: boolean;
  features?: string[];
  ctaText?: string;
}

const {
  plan = 'Pro Developer',
  price = '29',
  period = '/month',
  description = 'For creators and fast-growing teams shipping production Astro apps.',
  featured = false,
  features = [
    'Complete component kit access',
    'Full TypeScript & CSS source',
    'Commercial license included',
    'Community Discord support',
  ],
  ctaText = 'Choose Plan',
} = Astro.props;
---

<div class:list={['price-card', { 'price-card--featured': featured }]}>
  {featured && <span class="price-card__badge">Most Popular</span>}

  <div class="price-card__header">
    <span class="price-card__plan">{plan}</span>
    <div class="price-card__price">
      <span class="currency">$</span>
      <span class="val">{price}</span>
      <span class="period">{period}</span>
    </div>
    {description && <p class="price-card__desc">{description}</p>}
  </div>

  <ul class="price-card__features">
    <slot>
      {features.map((feat) => (
        <li class="price-card__feat-item">
          <svg class="feat-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>{feat}</span>
        </li>
      ))}
    </slot>
  </ul>

  <button class="price-card__btn" type="button">{ctaText}</button>
</div>

<style>
  .price-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--r-xl, 22px);
    padding: var(--sp-8, 2rem);
    display: flex;
    flex-direction: column;
    gap: var(--sp-6, 1.5rem);
    max-width: 340px;
    box-sizing: border-box;
    position: relative;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .price-card:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.35);
    box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.5);
  }

  .price-card--featured {
    border-color: var(--c-primary, #6366f1);
    background: rgba(99, 102, 241, 0.06);
    box-shadow: 0 0 30px -10px rgba(99, 102, 241, 0.3);
  }

  .price-card__badge {
    position: absolute;
    top: -12px;
    right: 20px;
    background: var(--c-primary, #6366f1);
    color: #fff;
    font-size: 0.72rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 3px 10px;
    border-radius: 999px;
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
  }

  .price-card__header {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .price-card__plan {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--c-primary-light, #818cf8);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .price-card__price {
    display: flex;
    align-items: baseline;
    gap: 2px;
  }

  .currency {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--c-text-1, #f8fafc);
    opacity: 0.85;
  }

  .val {
    font-size: 2.75rem;
    font-weight: 900;
    color: var(--c-text-1, #f8fafc);
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .period {
    font-size: 0.85rem;
    color: var(--c-text-3, #64748b);
    margin-left: 4px;
  }

  .price-card__desc {
    margin: 0.25rem 0 0;
    font-size: 0.82rem;
    color: var(--c-text-2, #94a3b8);
    line-height: 1.45;
  }

  .price-card__features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  .price-card__feat-item {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.85rem;
    color: var(--c-text-2, #cbd5e1);
  }

  .feat-check {
    color: var(--c-primary-light, #818cf8);
    flex-shrink: 0;
  }

  .price-card__btn {
    background: var(--c-primary, #6366f1);
    color: #fff;
    border: none;
    padding: 0.75rem;
    border-radius: var(--r-md, 12px);
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;
  }

  .price-card__btn:hover {
    background: var(--c-primary-light, #818cf8);
    transform: translateY(-1px);
  }
</style>
`,
    usage: `---
import { PricingCard } from 'astro-component-kit';
---

<div class="grid-layout">
  <PricingCard plan="Starter" price="0">
    <li>10 Projects</li>
    <li>Email Support</li>
    <li>1GB Storage</li>
  </PricingCard>

  <PricingCard plan="Pro" price="29" featured>
    <li>Unlimited Projects</li>
    <li>24/7 Support</li>
    <li>50GB Storage</li>
  </PricingCard>
</div>`,
  },
  {
    slug: 'profile-card',
    name: 'Profile Card',
    description: 'Image-centric profile card with social links and blur effect.',
    category: 'cards',
    tags: ["card","profile"],
    featured: true,
    code: `---
/**
 * ProfileCard — Creator & developer profile card with banner, verified badge, stats readout, and social vector icons.
 * 
 * @param {string} name - Full name of the user. Default is 'Sofia Chen'.
 * @param {string} role - Job title or role. Default is 'Lead Design Systems Architect'.
 * @param {string} handle - Social handle (e.g. '@sofiadev'). Default is '@sofiadev'.
 * @param {string} bio - Brief biography or specialization summary.
 * @param {string} avatarUrl - Optional image URL for user avatar.
 * @param {string} status - Availability status indicator. Default is 'Available for hire'.
 * @param {Array<{ label: string, value: string }>} stats - Quantitative profile metrics.
 */
interface Props {
  name?: string;
  role?: string;
  handle?: string;
  bio?: string;
  avatarUrl?: string;
  status?: string;
  stats?: Array<{ label: string; value: string }>;
}

const {
  name = 'Sofia Chen',
  role = 'Lead Design Systems Architect',
  handle = '@sofiadev',
  bio = 'Crafting resilient component libraries, high-performance WebGL graphics, and scalable UI architectures.',
  avatarUrl,
  status = 'Available for hire',
  stats = [
    { label: 'Projects', value: '42' },
    { label: 'Followers', value: '8.4k' },
    { label: 'Rating', value: '4.98' },
  ],
} = Astro.props;

const initials = name
  .split(' ')
  .map((n) => n[0])
  .join('')
  .slice(0, 2)
  .toUpperCase();
---

<div class="profile-card" role="region" aria-label={\`Profile card for \${name}\`}>
  <div class="profile-card__banner" aria-hidden="true">
    <div class="profile-card__banner-glow"></div>
  </div>

  <div class="profile-card__avatar-wrap">
    {avatarUrl ? (
      <img class="profile-card__avatar" src={avatarUrl} alt={\`\${name}'s avatar\`} loading="lazy" />
    ) : (
      <div class="profile-card__avatar-fallback" aria-hidden="true">{initials}</div>
    )}
    <span class="profile-card__status-dot" title={status} aria-hidden="true"></span>
  </div>

  <div class="profile-card__info">
    <div class="profile-card__name-row">
      <h3 class="profile-card__name">{name}</h3>
      <svg class="profile-card__verified" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-label="Verified creator">
        <path d="M12 2l2.4 2.8 3.7-.4 1.1 3.5 3.3 1.7-1 3.6 1.7 3.3-2.6 2.6.2 3.7-3.6 1-1.7 3.3-3.3-1.7-3.3 1.7-1.7-3.3-3.6-1 .2-3.7-2.6-2.6 1.7-3.3-1-3.6 3.3-1.7 1.1-3.5 3.7.4L12 2z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    </div>

    <p class="profile-card__role">{role}</p>
    <span class="profile-card__handle">{handle}</span>
    <p class="profile-card__bio">{bio}</p>
  </div>

  <div class="profile-card__stats">
    {stats.map((s) => (
      <div class="stat-col">
        <span class="stat-col__value">{s.value}</span>
        <span class="stat-col__label">{s.label}</span>
      </div>
    ))}
  </div>

  <div class="profile-card__actions">
    <button class="profile-card__btn-primary" type="button">Follow</button>
    <button class="profile-card__btn-secondary" type="button">Message</button>
  </div>

  <div class="profile-card__socials">
    <slot name="socials">
      <a href="#" class="social-link" aria-label="GitHub profile">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
      <a href="#" class="social-link" aria-label="X / Twitter profile">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
        </svg>
      </a>
      <a href="#" class="social-link" aria-label="Personal website">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      </a>
    </slot>
  </div>
</div>

<style>
  .profile-card {
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--r-xl, 22px);
    text-align: center;
    overflow: hidden;
    padding-bottom: var(--sp-6, 1.5rem);
    max-width: 340px;
    box-sizing: border-box;
    box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.5);
    transition: transform 0.25s ease, border-color 0.25s ease;
  }

  .profile-card:hover {
    transform: translateY(-3px);
    border-color: rgba(99, 102, 241, 0.35);
  }

  .profile-card__banner {
    height: 90px;
    background: linear-gradient(135deg, var(--c-primary, #6366f1), var(--c-primary-light, #818cf8));
    position: relative;
    overflow: hidden;
  }

  .profile-card__banner-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.25), transparent 60%);
  }

  .profile-card__avatar-wrap {
    position: relative;
    width: 84px;
    height: 84px;
    margin: -42px auto 0.75rem;
  }

  .profile-card__avatar,
  .profile-card__avatar-fallback {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid #0b0f19;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
    object-fit: cover;
    box-sizing: border-box;
  }

  .profile-card__avatar-fallback {
    background: linear-gradient(135deg, #1e293b, #334155);
    color: #fff;
    display: grid;
    place-items: center;
    font-size: 1.4rem;
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  .profile-card__status-dot {
    position: absolute;
    bottom: 4px;
    right: 4px;
    width: 14px;
    height: 14px;
    background: #10b981;
    border: 3px solid #0b0f19;
    border-radius: 50%;
  }

  .profile-card__info {
    padding: 0 var(--sp-5, 1.25rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
  }

  .profile-card__name-row {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  .profile-card__name {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--c-text-1, #f8fafc);
  }

  .profile-card__verified {
    color: var(--c-primary-light, #818cf8);
    flex-shrink: 0;
  }

  .profile-card__role {
    margin: 0;
    font-size: 0.82rem;
    color: var(--c-primary-light, #818cf8);
    font-weight: 600;
  }

  .profile-card__handle {
    font-size: 0.75rem;
    color: var(--c-text-3, #64748b);
    font-family: ui-monospace, monospace;
  }

  .profile-card__bio {
    margin: 0.5rem 0 0;
    font-size: 0.82rem;
    color: var(--c-text-2, #94a3b8);
    line-height: 1.45;
  }

  .profile-card__stats {
    display: flex;
    justify-content: space-around;
    padding: var(--sp-4, 1rem) var(--sp-5, 1.25rem);
    margin-top: 0.75rem;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  }

  .stat-col {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .stat-col__value {
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--c-text-1, #f8fafc);
  }

  .stat-col__label {
    font-size: 0.7rem;
    color: var(--c-text-3, #64748b);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .profile-card__actions {
    display: flex;
    gap: 0.6rem;
    padding: var(--sp-4, 1rem) var(--sp-5, 1.25rem) 0;
  }

  .profile-card__btn-primary {
    flex: 1;
    background: var(--c-primary, #6366f1);
    color: #fff;
    border: none;
    padding: 0.55rem;
    border-radius: 8px;
    font-size: 0.84rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .profile-card__btn-primary:hover {
    background: var(--c-primary-light, #818cf8);
  }

  .profile-card__btn-secondary {
    flex: 1;
    background: rgba(255, 255, 255, 0.06);
    color: var(--c-text-1, #fff);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 0.55rem;
    border-radius: 8px;
    font-size: 0.84rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .profile-card__btn-secondary:hover {
    background: rgba(255, 255, 255, 0.12);
  }

  .profile-card__socials {
    display: flex;
    justify-content: center;
    gap: 0.85rem;
    margin-top: 1rem;
  }

  .social-link {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: grid;
    place-items: center;
    color: var(--c-text-2, #94a3b8);
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .social-link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
</style>
`,
    usage: `<ProfileCard name="Sarah Jenkins" role="Lead Developer" />`,
  },
  {
    slug: 'retro-game-card',
    name: 'Retro Arcade Game Card',
    description: 'Bold gaming card with scanlines and pixel fonts.',
    category: 'cards',
    tags: ["card","retro"],
    featured: true,
    code: `---
/**
 * RetroGameCard — Vintage 8-bit arcade gaming card with scanlines, CRT screen, health hearts, and score telemetry.
 * 
 * @param {string} title - The retro game title. Default is 'NEON RUNNER 2084'.
 * @param {string} level - Current stage or mission string. Default is 'STAGE 04 • VOID MATRIX'.
 * @param {number|string} score - Player's active score. Default is '084,320'.
 * @param {string} highScore - Leaderboard record score. Default is '142,000'.
 * @param {number} lives - Remaining player lives. Default is 3.
 */
interface Props {
  title?: string;
  level?: string;
  score?: number | string;
  highScore?: string;
  lives?: number;
}

const {
  title = 'NEON RUNNER 2084',
  level = 'STAGE 04 • VOID MATRIX',
  score = '084,320',
  highScore = '142,000',
  lives = 3,
} = Astro.props;
---

<div class="retro-game" role="region" aria-label={\`Arcade game card: \${title}\`}>
  <div class="retro-game__scanlines" aria-hidden="true"></div>

  <div class="retro-game__header">
    <span class="retro-game__insert-coin">INSERT COIN [1P]</span>
    <div class="retro-game__lives" aria-label={\`\${lives} lives remaining\`}>
      {Array.from({ length: lives }).map(() => (
        <svg class="heart-icon" width="14" height="14" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" stroke-width="2" aria-hidden="true">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ))}
    </div>
  </div>

  <div class="retro-game__screen">
    <div class="retro-game__screen-grid" aria-hidden="true"></div>
    <span class="retro-game__stage-tag">{level}</span>
    <h3 class="retro-game__title">{title}</h3>
  </div>

  <div class="retro-game__telemetry">
    <div class="telemetry-block">
      <span class="telemetry-block__label">SCORE</span>
      <span class="telemetry-block__val">{score}</span>
    </div>
    <div class="telemetry-block telemetry-block--hi">
      <span class="telemetry-block__label">HI-SCORE</span>
      <span class="telemetry-block__val">{highScore}</span>
    </div>
  </div>

  <div class="retro-game__footer">
    <span class="blink-press">PRESS START BUTTON</span>
  </div>
</div>

<style>
  .retro-game {
    background: #0d131f;
    border: 3px solid #22c55e;
    border-radius: var(--r-md, 12px);
    padding: var(--sp-4, 1.25rem);
    position: relative;
    box-shadow: 6px 6px 0 #22c55e, 0 16px 36px rgba(0, 0, 0, 0.6);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    max-width: 320px;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .retro-game:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0 #22c55e, 0 20px 40px rgba(34, 197, 94, 0.2);
  }

  .retro-game__scanlines {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(rgba(13, 19, 31, 0) 50%, rgba(0, 0, 0, 0.4) 50%);
    background-size: 100% 4px;
    z-index: 5;
    opacity: 0.65;
  }

  .retro-game__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
  }

  .retro-game__insert-coin {
    font-size: 0.68rem;
    font-weight: 800;
    color: #f59e0b;
    letter-spacing: 0.05em;
  }

  .retro-game__lives {
    display: flex;
    gap: 3px;
  }

  .retro-game__screen {
    background: #050a10;
    border: 2px solid rgba(34, 197, 94, 0.3);
    border-radius: 6px;
    padding: var(--sp-4, 1rem);
    text-align: center;
    position: relative;
    overflow: hidden;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
  }

  .retro-game__screen-grid {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to right, rgba(34, 197, 94, 0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(34, 197, 94, 0.08) 1px, transparent 1px);
    background-size: 16px 16px;
    pointer-events: none;
  }

  .retro-game__stage-tag {
    font-size: 0.65rem;
    color: #22c55e;
    font-weight: 800;
    letter-spacing: 0.08em;
  }

  .retro-game__title {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 900;
    color: #fff;
    letter-spacing: 0.05em;
    text-shadow: 0 0 8px rgba(34, 197, 94, 0.6);
  }

  .retro-game__telemetry {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    background: rgba(0, 0, 0, 0.3);
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
  }

  .telemetry-block {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .telemetry-block__label {
    font-size: 0.62rem;
    color: #64748b;
    font-weight: 700;
  }

  .telemetry-block__val {
    font-size: 0.88rem;
    font-weight: 900;
    color: #22c55e;
  }

  .telemetry-block--hi .telemetry-block__val {
    color: #eab308;
  }

  .retro-game__footer {
    text-align: center;
    position: relative;
    z-index: 2;
    padding-top: 0.2rem;
  }

  .blink-press {
    font-size: 0.72rem;
    font-weight: 800;
    color: #fff;
    letter-spacing: 0.08em;
    animation: blink-anim 1.2s infinite;
  }

  @keyframes blink-anim {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0.2; }
  }
</style>
`,
    usage: `<RetroGameCard title="SUPER ASTRO" level="LVL 01" score="4820" />`,
  },
  {
    slug: 'stat-card',
    name: 'Data Stat Card',
    description: 'Compact card for displaying key metrics with an icon.',
    category: 'cards',
    tags: ["card","stats"],
    featured: true,
    code: `---
/**
 * StatCard — Metric highlight card featuring delta trends, values, and SVG iconography.
 * 
 * @param {string} label - Metric description (default: 'Total Revenue').
 * @param {string} value - Formatted metric figure (default: '$124,590').
 * @param {string} change - Delta percentage string (default: '+14.2%').
 * @param {'up' | 'down' | 'neutral'} trend - Direction of the change (default: 'up').
 * @param {string} timeframe - Comparison timeframe (default: 'vs last month').
 * @param {'revenue' | 'users' | 'activity' | 'growth'} icon - Icon preset (default: 'revenue').
 * @param {string} className - Optional additional CSS class.
 */
interface Props {
  label?: string;
  value?: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  timeframe?: string;
  icon?: 'revenue' | 'users' | 'activity' | 'growth';
  className?: string;
}

const {
  label = 'Total Revenue',
  value = '$124,590',
  change = '+14.2%',
  trend = 'up',
  timeframe = 'vs last month',
  icon = 'revenue',
  className = '',
} = Astro.props;
---

<div class:list={['stat-card', \`stat-card--\${trend}\`, className]}>
  <div class="stat-card__top">
    <span class="stat-card__label">{label}</span>
    <div class="stat-card__icon" aria-hidden="true">
      {icon === 'revenue' && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )}
      {icon === 'users' && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )}
      {icon === 'activity' && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )}
      {icon === 'growth' && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )}
    </div>
  </div>

  <div class="stat-card__value-row">
    <span class="stat-card__value">{value}</span>
  </div>

  <div class="stat-card__bottom">
    <span class:list={['stat-badge', \`stat-badge--\${trend}\`]}>
      {trend === 'up' && (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      )}
      {trend === 'down' && (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      )}
      <span>{change}</span>
    </span>
    {timeframe && <span class="stat-card__timeframe">{timeframe}</span>}
  </div>
</div>

<style>
  .stat-card {
    position: relative;
    width: 100%;
    max-width: 320px;
    padding: 1.5rem;
    border-radius: var(--r-xl, 20px);
    background: rgba(18, 22, 34, 0.65);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 12px 28px -10px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    color: var(--c-text-1, #f8fafc);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .stat-card:hover {
    transform: translateY(-3px);
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 20px 40px -12px rgba(99, 102, 241, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }

  .stat-card__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .stat-card__label {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--c-text-3, #94a3b8);
  }

  .stat-card__icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(99, 102, 241, 0.12);
    border: 1px solid rgba(99, 102, 241, 0.2);
    color: var(--c-primary-light, #818cf8);
    flex-shrink: 0;
  }

  .stat-card__value-row {
    display: flex;
    align-items: baseline;
  }

  .stat-card__value {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #ffffff;
    line-height: 1.1;
  }

  .stat-card__bottom {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 0.25rem;
  }

  .stat-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.2rem;
    padding: 0.2rem 0.5rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 700;
  }

  .stat-badge--up {
    background: rgba(34, 197, 94, 0.12);
    color: #4ade80;
    border: 1px solid rgba(34, 197, 94, 0.25);
  }

  .stat-badge--down {
    background: rgba(239, 68, 68, 0.12);
    color: #f87171;
    border: 1px solid rgba(239, 68, 68, 0.25);
  }

  .stat-badge--neutral {
    background: rgba(148, 163, 184, 0.12);
    color: #94a3b8;
    border: 1px solid rgba(148, 163, 184, 0.25);
  }

  .stat-card__timeframe {
    font-size: 0.78rem;
    color: var(--c-text-3, #64748b);
  }
</style>
`,
    usage: `<StatCard label="Total Revenue" value="$124,590" change="+14.2%" trend="up" icon="revenue" timeframe="vs last month" />`,
  },
  {
    slug: 'task-kanban-card',
    name: 'Kanban Task Card',
    description: 'Agile task card with priority labels and due dates.',
    category: 'cards',
    tags: ["card","kanban","task"],
    featured: true,
    code: `---
/**
 * TaskKanbanCard — Agile task card with priority labels, progress completion bar, and due date.
 * 
 * @param {string} task - The description of the task being managed.
 * @param {string} date - Visual date string indicator (e.g. 'Oct 28').
 * @param {string} assigneeInitials - Short initials for the user avatar (e.g. 'MJ').
 * @param {'low'|'med'|'high'} priority - Priority tag variant. Default is 'med'.
 * @param {number} progress - Task completion percentage (0 - 100). Default is 65.
 */
interface Props {
  task?: string;
  date?: string;
  assigneeInitials?: string;
  priority?: 'low' | 'med' | 'high';
  progress?: number;
}

const {
  task = 'Optimize dynamic route code-splitting and asset prefetching',
  date = 'Oct 28',
  assigneeInitials = 'MJ',
  priority = 'med',
  progress = 65,
} = Astro.props;

const priorityLabels = { low: 'Low', med: 'Medium', high: 'High' };
---

<div class="task-card" role="article" aria-label={\`Task: \${task}\`}>
  <div class="task-card__tags">
    <span class={\`task-card__tag task-card__tag--\${priority}\`}>
      <span class="task-card__tag-dot" aria-hidden="true"></span>
      {priorityLabels[priority]}
    </span>
    <span class="task-card__pct">{progress}%</span>
  </div>

  <p class="task-card__desc">{task}</p>

  <div class="task-card__progress-wrap" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" aria-label="Task progress">
    <div class="task-card__progress-bar" style={\`width: \${progress}%;\`}></div>
  </div>

  <div class="task-card__footer">
    <div class="task-card__date">
      <svg class="task-card__date-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      <span>{date}</span>
    </div>

    <div class="task-card__assignee" title={\`Assigned to \${assigneeInitials}\`}>
      {assigneeInitials}
    </div>
  </div>
</div>

<style>
  .task-card {
    background: rgba(30, 41, 59, 0.7);
    backdrop-filter: blur(12px);
    padding: var(--sp-4, 1rem);
    border-radius: var(--r-md, 12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    max-width: 320px;
    box-sizing: border-box;
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .task-card:hover {
    transform: translateY(-2px);
    border-color: rgba(99, 102, 241, 0.35);
    box-shadow: 0 10px 24px -6px rgba(0, 0, 0, 0.5);
  }

  .task-card__tags {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .task-card__tag {
    font-size: 0.7rem;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .task-card__tag-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: currentColor;
  }

  .task-card__tag--high {
    background: rgba(239, 68, 68, 0.12);
    color: #f87171;
  }

  .task-card__tag--med {
    background: rgba(245, 158, 11, 0.12);
    color: #fbbf24;
  }

  .task-card__tag--low {
    background: rgba(52, 211, 153, 0.12);
    color: #34d399;
  }

  .task-card__pct {
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--c-text-2, #94a3b8);
  }

  .task-card__desc {
    font-size: 0.88rem;
    color: var(--c-text-1, #f1f5f9);
    margin: 0;
    font-weight: 500;
    line-height: 1.45;
  }

  .task-card__progress-wrap {
    height: 4px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 2px;
    overflow: hidden;
  }

  .task-card__progress-bar {
    height: 100%;
    background: linear-gradient(90deg, var(--c-primary, #6366f1), var(--c-primary-light, #818cf8));
    border-radius: 2px;
  }

  .task-card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.35rem;
  }

  .task-card__date {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.75rem;
    color: var(--c-text-2, #94a3b8);
  }

  .task-card__date-icon {
    opacity: 0.75;
  }

  .task-card__assignee {
    width: 24px;
    height: 24px;
    background: var(--c-primary, #6366f1);
    color: #fff;
    font-size: 0.65rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: 800;
  }
</style>
`,
    usage: `<TaskKanbanCard task="Update SEO metadata" date="Oct 24" assigneeInitials="MJ" priority="high" />`,
  },
  {
    slug: 'testimonial-card-clean',
    name: 'Clean Testimonial Card',
    description: 'Minimalist card for user quotes and reviews.',
    category: 'cards',
    tags: ["card","testimonial"],
    featured: true,
    code: `---
/**
 * TestimonialCardClean — Minimalist, high-contrast testimonial review card with star ratings and verified badge.
 * 
 * @param {string} quote - The testimonial body text (default provided).
 * @param {string} name - Reviewer's full name (default: 'Elena Rostova').
 * @param {string} role - Reviewer's role or title (default: 'Staff Frontend Architect').
 * @param {string} company - Company or organization (default: 'Vercel Ecosystem').
 * @param {string} avatarUrl - Optional avatar photo URL.
 * @param {number} rating - Star rating from 1 to 5 (default: 5).
 * @param {boolean} verified - Whether to show the verified reviewer badge (default: true).
 * @param {string} className - Optional additional CSS class.
 */
interface Props {
  quote?: string;
  name?: string;
  role?: string;
  company?: string;
  avatarUrl?: string;
  rating?: number;
  verified?: boolean;
  className?: string;
}

const {
  quote = 'Astro Components Kit transformed our engineering workflow. We shipped our landing page and design system in days instead of weeks, with flawless dark mode and zero runtime weight.',
  name = 'Elena Rostova',
  role = 'Staff Frontend Architect',
  company = 'NextWave Labs',
  avatarUrl = '',
  rating = 5,
  verified = true,
  className = '',
} = Astro.props;

// Compute initials for avatar fallback
const initials = name
  .split(' ')
  .map((part) => part.charAt(0))
  .slice(0, 2)
  .join('')
  .toUpperCase() || 'U';
---

<figure class:list={['clean-testimonial', className]}>
  <div class="clean-testimonial__watermark" aria-hidden="true">
    <svg width="60" height="48" viewBox="0 0 60 48" fill="currentColor">
      <path d="M16.5 0C7.4 0 0 7.4 0 16.5c0 7.6 5.2 13.9 12.2 15.8C10.7 38.4 6 43.8 0 46.5L3.6 48c12.4-5.2 20.4-16.7 20.4-28.5C24 8.7 20.6 0 16.5 0zm33 0C40.4 0 33 7.4 33 16.5c0 7.6 5.2 13.9 12.2 15.8C43.7 38.4 39 43.8 33 46.5L36.6 48c12.4-5.2 20.4-16.7 20.4-28.5C57 8.7 53.6 0 49.5 0z" />
    </svg>
  </div>

  <!-- Star Rating -->
  <div class="clean-testimonial__stars" aria-label={\`Rating: \${rating} out of 5 stars\`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        class:list={['star-icon', { 'star-icon--active': i < rating }]}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>

  <!-- Quote Body -->
  <blockquote class="clean-testimonial__quote">
    <p>"{quote}"</p>
  </blockquote>

  <!-- Author Info -->
  <figcaption class="clean-testimonial__author">
    <div class="clean-testimonial__avatar-wrap">
      {avatarUrl ? (
        <img src={avatarUrl} alt={name} class="clean-testimonial__avatar-img" />
      ) : (
        <div class="clean-testimonial__avatar-fallback" aria-hidden="true">
          {initials}
        </div>
      )}
    </div>

    <div class="clean-testimonial__meta">
      <div class="clean-testimonial__name-row">
        <span class="clean-testimonial__name">{name}</span>
        {verified && (
          <span class="clean-testimonial__verified" title="Verified Customer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-label="Verified">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span class="clean-testimonial__verified-label">Verified</span>
          </span>
        )}
      </div>
      <div class="clean-testimonial__role-row">
        <span class="clean-testimonial__role">{role}</span>
        {company && <span class="clean-testimonial__sep">•</span>}
        {company && <span class="clean-testimonial__company">{company}</span>}
      </div>
    </div>
  </figcaption>
</figure>

<style>
  .clean-testimonial {
    position: relative;
    width: 100%;
    max-width: 460px;
    margin: 0;
    padding: 1.75rem 2rem;
    border-radius: var(--r-xl, 24px);
    background: rgba(18, 22, 34, 0.65);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    overflow: hidden;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .clean-testimonial:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  .clean-testimonial__watermark {
    position: absolute;
    top: 1.25rem;
    right: 1.5rem;
    color: rgba(255, 255, 255, 0.04);
    pointer-events: none;
    z-index: 0;
  }

  .clean-testimonial__stars {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-bottom: 1.15rem;
  }

  .star-icon {
    color: rgba(255, 255, 255, 0.15);
    transition: color 0.15s ease;
  }

  .star-icon--active {
    color: #facc15;
    filter: drop-shadow(0 1px 3px rgba(250, 204, 21, 0.3));
  }

  .clean-testimonial__quote {
    position: relative;
    z-index: 1;
    margin: 0 0 1.5rem 0;
    padding: 0;
  }

  .clean-testimonial__quote p {
    margin: 0;
    font-size: 0.98rem;
    line-height: 1.65;
    color: var(--c-text-1, #f1f5f9);
    font-weight: 400;
  }

  .clean-testimonial__author {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 0.85rem;
    padding-top: 1.25rem;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }

  .clean-testimonial__avatar-wrap {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    border: 1.5px solid rgba(255, 255, 255, 0.15);
  }

  .clean-testimonial__avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .clean-testimonial__avatar-fallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    color: #ffffff;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.04em;
  }

  .clean-testimonial__meta {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    min-width: 0;
  }

  .clean-testimonial__name-row {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    flex-wrap: wrap;
  }

  .clean-testimonial__name {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--c-text-1, #f8fafc);
  }

  .clean-testimonial__verified {
    display: inline-flex;
    align-items: center;
    gap: 0.2rem;
    color: #38bdf8;
    font-size: 0.72rem;
    font-weight: 600;
  }

  .clean-testimonial__verified-label {
    opacity: 0.9;
  }

  .clean-testimonial__role-row {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.8rem;
    color: var(--c-text-3, #94a3b8);
    flex-wrap: wrap;
  }

  .clean-testimonial__sep {
    opacity: 0.4;
  }

  .clean-testimonial__company {
    color: var(--c-text-2, #cbd5e1);
  }
</style>
`,
    usage: `<TestimonialCardClean quote="Best library ever." name="Alex Rivera" role="CTO at TechFlow" />`,
  },
  {
    slug: 'weather-widget-card',
    name: 'Weather Widget',
    description: 'Glassmorphism card showing weather conditions.',
    category: 'cards',
    tags: ["card","weather"],
    featured: true,
    code: `---
/**
 * WeatherWidgetCard — Glassmorphic weather status card with forecast metrics and SVG weather iconography.
 * 
 * @param {string} temp - Temperature string (default: '24°C').
 * @param {string} city - Location name (default: 'San Francisco, CA').
 * @param {string} condition - Weather condition summary (default: 'Partly Cloudy').
 * @param {string} high - Day's high temperature (default: '26°').
 * @param {string} low - Day's low temperature (default: '17°').
 * @param {string} humidity - Humidity percentage (default: '62%').
 * @param {string} wind - Wind speed figure (default: '14 km/h').
 * @param {string} icon - Weather type ('sunny' | 'cloudy' | 'rainy' | 'snowy' | 'storm', default: 'cloudy').
 * @param {string} className - Optional additional CSS class.
 */
interface Props {
  temp?: string;
  city?: string;
  condition?: string;
  high?: string;
  low?: string;
  humidity?: string;
  wind?: string;
  icon?: 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'storm';
  className?: string;
}

const {
  temp = '24°C',
  city = 'San Francisco, CA',
  condition = 'Partly Cloudy',
  high = '26°',
  low = '17°',
  humidity = '62%',
  wind = '14 km/h',
  icon = 'cloudy',
  className = '',
} = Astro.props;
---

<div class:list={['weather-card', \`weather-card--\${icon}\`, className]}>
  <div class="weather-card__glow" aria-hidden="true"></div>

  <!-- Top bar: Location & Status -->
  <div class="weather-card__header">
    <div class="weather-card__location">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="weather-card__pin-icon">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      <h4 class="weather-card__city">{city}</h4>
    </div>
    <span class="weather-card__condition-badge">{condition}</span>
  </div>

  <!-- Main section: Big Temperature and Visual SVG -->
  <div class="weather-card__main">
    <div class="weather-card__temp-wrap">
      <span class="weather-card__temp">{temp}</span>
      <div class="weather-card__range">
        <span>H: {high}</span>
        <span class="weather-card__range-dot">•</span>
        <span>L: {low}</span>
      </div>
    </div>

    <div class="weather-card__art" aria-hidden="true">
      {icon === 'sunny' && (
        <svg class="weather-icon weather-icon--sun" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="14" fill="url(#sun-gradient)" />
          <g stroke="#facc15" stroke-width="3" stroke-linecap="round">
            <line x1="32" y1="6" x2="32" y2="12" />
            <line x1="32" y1="52" x2="32" y2="58" />
            <line x1="6" y1="32" x2="12" y2="32" />
            <line x1="52" y1="32" x2="58" y2="32" />
            <line x1="13.6" y1="13.6" x2="17.8" y2="17.8" />
            <line x1="46.2" y1="46.2" x2="50.4" y2="50.4" />
            <line x1="13.6" y1="50.4" x2="17.8" y2="46.2" />
            <line x1="46.2" y1="17.8" x2="50.4" y2="13.6" />
          </g>
          <defs>
            <linearGradient id="sun-gradient" x1="18" y1="18" x2="46" y2="46" gradientUnits="userSpaceOnUse">
              <stop stop-color="#fde047" />
              <stop offset="1" stop-color="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      )}

      {icon === 'cloudy' && (
        <svg class="weather-icon weather-icon--cloud" viewBox="0 0 64 64" fill="none">
          <circle cx="42" cy="22" r="10" fill="#facc15" opacity="0.9" />
          <path d="M46 44H20a10 10 0 0 1-1.7-19.8A14 14 0 0 1 45.4 22 11 11 0 0 1 46 44z" fill="url(#cloud-gradient)" />
          <defs>
            <linearGradient id="cloud-gradient" x1="10" y1="16" x2="48" y2="44" gradientUnits="userSpaceOnUse">
              <stop stop-color="#93c5fd" />
              <stop offset="1" stop-color="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      )}

      {icon === 'rainy' && (
        <svg class="weather-icon weather-icon--rain" viewBox="0 0 64 64" fill="none">
          <path d="M46 36H20a10 10 0 0 1-1.7-19.8A14 14 0 0 1 45.4 14 11 11 0 0 1 46 36z" fill="url(#rain-cloud-grad)" />
          <g stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round">
            <line x1="22" y1="42" x2="19" y2="52" />
            <line x1="33" y1="42" x2="30" y2="52" />
            <line x1="44" y1="42" x2="41" y2="52" />
          </g>
          <defs>
            <linearGradient id="rain-cloud-grad" x1="10" y1="8" x2="48" y2="36" gradientUnits="userSpaceOnUse">
              <stop stop-color="#64748b" />
              <stop offset="1" stop-color="#334155" />
            </linearGradient>
          </defs>
        </svg>
      )}

      {(icon === 'snowy' || icon === 'storm') && (
        <svg class="weather-icon weather-icon--storm" viewBox="0 0 64 64" fill="none">
          <path d="M46 34H20a10 10 0 0 1-1.7-19.8A14 14 0 0 1 45.4 12 11 11 0 0 1 46 34z" fill="#475569" />
          <path d="M30 36l-4 10h6l-3 10 10-13h-6l4-7z" fill="#facc15" />
        </svg>
      )}
    </div>
  </div>

  <!-- Bottom metrics: Humidity & Wind -->
  <div class="weather-card__footer">
    <div class="weather-card__metric">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
      <span>Humidity <strong>{humidity}</strong></span>
    </div>
    <div class="weather-card__metric">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
      </svg>
      <span>Wind <strong>{wind}</strong></span>
    </div>
  </div>
</div>

<style>
  .weather-card {
    position: relative;
    width: 100%;
    max-width: 380px;
    padding: 1.5rem;
    border-radius: var(--r-xl, 24px);
    background: rgba(15, 23, 42, 0.72);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15);
    color: var(--c-text-1, #f8fafc);
    overflow: hidden;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .weather-card:hover {
    transform: translateY(-3px);
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 24px 48px -12px rgba(99, 102, 241, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  .weather-card__glow {
    position: absolute;
    top: -40px;
    right: -40px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .weather-card--sunny .weather-card__glow {
    background: radial-gradient(circle, rgba(250, 204, 21, 0.22) 0%, transparent 70%);
  }

  .weather-card--rainy .weather-card__glow {
    background: radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%);
  }

  .weather-card__header {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .weather-card__location {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--c-text-2, #cbd5e1);
  }

  .weather-card__pin-icon {
    color: var(--c-primary-light, #818cf8);
    flex-shrink: 0;
  }

  .weather-card__city {
    margin: 0;
    font-size: 0.92rem;
    font-weight: 600;
    color: #f1f5f9;
  }

  .weather-card__condition-badge {
    padding: 0.25rem 0.65rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #e2e8f0;
    white-space: nowrap;
  }

  .weather-card__main {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  .weather-card__temp-wrap {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .weather-card__temp {
    font-size: 3.25rem;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.04em;
    color: #ffffff;
    background: linear-gradient(180deg, #ffffff 40%, #94a3b8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .weather-card__range {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: #94a3b8;
  }

  .weather-card__range-dot {
    opacity: 0.5;
  }

  .weather-card__art {
    width: 68px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .weather-icon {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.35));
  }

  .weather-card__footer {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .weather-card__metric {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    color: #94a3b8;
  }

  .weather-card__metric svg {
    color: #60a5fa;
    flex-shrink: 0;
  }

  .weather-card__metric strong {
    color: #e2e8f0;
    font-weight: 600;
  }
</style>
`,
    usage: `<WeatherWidgetCard temp="24°C" city="Sunnyvale, CA" condition="Clear Skies" icon="sunny" high="26°" low="17°" humidity="54%" wind="12 km/h" />`,
  },
  {
    slug: 'pricing-compare-mini-card',
    name: 'Pricing Compare Mini Card',
    description: 'A compact pricing tier card with gradient spotlight highlight, feature checkmarks, and CTA.',
    category: 'cards',
    tags: ["cards","pricing","tier","plan","commerce"],
    featured: true,
    code: `---
/**
 * PricingCompareMiniCard — High-conversion mini pricing card with plan perks, price tier, and action button.
 * 
 * @param {string} planName - Plan name (e.g. 'Pro Developer').
 * @param {string} price - Price figure (e.g. '$29').
 * @param {string} period - Frequency string (e.g. '/month').
 * @param {string} description - Plan highlight subtitle.
 * @param {string[]} features - List of plan feature bullet points.
 * @param {boolean} featured - Whether the card is visually emphasized.
 * @param {string} ctaText - Label for the call to action button. Default is 'Get Started'.
 * @param {string} ctaHref - Link URL for the button.
 */
interface Props {
  planName: string;
  price: string;
  period?: string;
  description?: string;
  features?: string[];
  featured?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

const {
  planName = 'Pro Developer',
  price = '$29',
  period = '/month',
  description = 'For growing teams and fast production workflows.',
  features = [
    'Unlimited UI components',
    'Full source code access',
    'Commercial license',
    'Community Discord support',
  ],
  featured = false,
  ctaText = 'Get Started',
  ctaHref = '#',
} = Astro.props;
---

<div class:list={['mini-price-card', { 'mini-price-card--featured': featured }]}>
  {featured && <span class="mini-price-card__badge">Most Popular</span>}

  <div class="mini-price-card__header">
    <h3 class="mini-price-card__plan">{planName}</h3>
    <p class="mini-price-card__desc">{description}</p>
    <div class="mini-price-card__amount">
      <span class="val">{price}</span>
      <span class="period">{period}</span>
    </div>
  </div>

  <ul class="mini-price-card__features">
    {features.map((feat) => (
      <li class="mini-price-card__feature">
        <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span>{feat}</span>
      </li>
    ))}
  </ul>

  <a href={ctaHref} class="mini-price-card__btn">
    {ctaText}
    <span aria-hidden="true">→</span>
  </a>
</div>

<style>
  .mini-price-card {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: var(--sp-6, 1.5rem);
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--r-xl, 24px);
    width: 100%;
    max-width: 320px;
    font-family: var(--font-sans, system-ui, sans-serif);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .mini-price-card:hover {
    transform: translateY(-4px);
    border-color: rgba(184, 134, 11, 0.3);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
  }

  .mini-price-card--featured {
    border-color: rgba(184, 134, 11, 0.5);
    background: radial-gradient(circle at top, rgba(184, 134, 11, 0.12), rgba(255, 255, 255, 0.02) 60%);
    box-shadow: 0 12px 36px rgba(184, 134, 11, 0.15);
  }

  .mini-price-card__badge {
    position: absolute;
    top: -12px;
    right: 20px;
    background: linear-gradient(135deg, #d4a017, #b8860b);
    color: #050505;
    font-size: 0.72rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 0.25rem 0.75rem;
    border-radius: var(--r-full, 9999px);
    box-shadow: 0 4px 12px rgba(184, 134, 11, 0.4);
  }

  .mini-price-card__plan {
    font-size: 1.15rem;
    font-weight: 800;
    color: var(--c-text-1, #ffffff);
    margin: 0;
  }

  .mini-price-card__desc {
    font-size: 0.8rem;
    color: var(--c-text-2, #a3a3a3);
    margin: 4px 0 16px 0;
    line-height: 1.45;
  }

  .mini-price-card__amount {
    display: flex;
    align-items: baseline;
    gap: 4px;
    margin-bottom: var(--sp-4, 1rem);
    padding-bottom: var(--sp-4, 1rem);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .mini-price-card__amount .val {
    font-size: 2.2rem;
    font-weight: 900;
    color: var(--c-text-1, #ffffff);
    letter-spacing: -0.03em;
  }

  .mini-price-card__amount .period {
    font-size: 0.82rem;
    color: var(--c-text-3, #737373);
  }

  .mini-price-card__features {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 0 24px 0;
    padding: 0;
    flex: 1;
  }

  .mini-price-card__feature {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.82rem;
    color: var(--c-text-2, #a3a3a3);
  }

  .check-icon {
    color: var(--c-primary-light, #d4a017);
    flex-shrink: 0;
  }

  .mini-price-card__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.06);
    color: var(--c-text-1, #ffffff);
    font-size: 0.88rem;
    font-weight: 700;
    text-decoration: none;
    border-radius: var(--r-md, 12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.25s ease;
  }

  .mini-price-card--featured .mini-price-card__btn,
  .mini-price-card__btn:hover {
    background: linear-gradient(135deg, #d4a017, #b8860b);
    color: #050505;
    border-color: transparent;
    box-shadow: 0 6px 20px rgba(184, 134, 11, 0.35);
  }
</style>
`,
    usage: `<PricingCompareMiniCard title="Pro Plan" price="$29" period="/month" description="For scaling teams" features={['Unlimited components', 'Priority support', 'Commercial license']} isPopular={true} ctaText="Upgrade to Pro" />`,
  },
  {
    slug: 'github-repo-card',
    name: 'Github Repo Card',
    description: 'Clean developer portfolio card displaying GitHub repository name, description, language dot, star count, and fork stats.',
    category: 'cards',
    tags: ["cards","github","repo","developer","portfolio"],
    featured: true,
    code: `---
/**
 * GithubRepoCard — Dark glass card highlighting repository statistics, language dot, license, and stars.
 * 
 * @param {string} repoName - Repository name (e.g. 'astro-components').
 * @param {string} owner - Repo owner or organization (e.g. 'konstantinWDK').
 * @param {string} description - Brief summary of the repo.
 * @param {string} language - Primary programming language. Default is 'TypeScript'.
 * @param {string} languageColor - Hex color for the language dot. Default is '#3178c6'.
 * @param {number} stars - Star count figure. Default is 248.
 * @param {number} forks - Fork count figure. Default is 32.
 * @param {string} href - Link to the GitHub repository.
 */
interface Props {
  repoName: string;
  owner?: string;
  description?: string;
  language?: string;
  languageColor?: string;
  stars?: number;
  forks?: number;
  href?: string;
}

const {
  repoName = 'astro-components',
  owner = 'konstantinWDK',
  description = 'Premium open-source UI component library for Astro with glassmorphism and accessibility.',
  language = 'TypeScript',
  languageColor = '#3178c6',
  stars = 248,
  forks = 32,
  href = '#',
} = Astro.props;
---

<a href={href} target="_blank" rel="noopener noreferrer" class="gh-repo-card">
  <div class="gh-repo-card__head">
    <svg class="gh-repo-card__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
      <path d="M6 6h10"/>
      <path d="M6 10h10"/>
    </svg>
    <div class="gh-repo-card__title-wrap">
      <span class="owner">{owner}/</span>
      <h4 class="name">{repoName}</h4>
    </div>
    <span class="gh-repo-card__badge">Public</span>
  </div>

  <p class="gh-repo-card__desc">{description}</p>

  <div class="gh-repo-card__meta">
    <div class="gh-repo-card__lang">
      <span class="lang-dot" style={\`background-color: \${languageColor};\`}></span>
      <span>{language}</span>
    </div>

    <div class="gh-repo-card__stat">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
      <span>{stars.toLocaleString()}</span>
    </div>

    <div class="gh-repo-card__stat">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="6" y1="3" x2="6" y2="15"/>
        <circle cx="18" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <path d="M18 9a9 9 0 0 1-9 9"/>
      </svg>
      <span>{forks.toLocaleString()}</span>
    </div>
  </div>
</a>

<style>
  .gh-repo-card {
    display: flex;
    flex-direction: column;
    padding: var(--sp-6, 1.5rem);
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--r-xl, 20px);
    text-decoration: none;
    width: 100%;
    max-width: 360px;
    font-family: var(--font-sans, system-ui, sans-serif);
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .gh-repo-card:hover {
    transform: translateY(-3px);
    border-color: rgba(184, 134, 11, 0.4);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
  }

  .gh-repo-card__head {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .gh-repo-card__icon {
    color: var(--c-primary-light, #d4a017);
    flex-shrink: 0;
  }

  .gh-repo-card__title-wrap {
    display: flex;
    align-items: baseline;
    gap: 2px;
    overflow: hidden;
  }

  .gh-repo-card__title-wrap .owner {
    font-size: 0.82rem;
    color: var(--c-text-3, #737373);
  }

  .gh-repo-card__title-wrap .name {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--c-primary-light, #d4a017);
    margin: 0;
  }

  .gh-repo-card__badge {
    margin-left: auto;
    font-size: 0.65rem;
    font-weight: 700;
    color: var(--c-text-2, #a3a3a3);
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2px 8px;
    border-radius: var(--r-full, 9999px);
  }

  .gh-repo-card__desc {
    font-size: 0.82rem;
    color: var(--c-text-2, #a3a3a3);
    margin: 0 0 16px 0;
    line-height: 1.5;
    flex: 1;
  }

  .gh-repo-card__meta {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 0.78rem;
    color: var(--c-text-3, #737373);
  }

  .gh-repo-card__lang {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .lang-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .gh-repo-card__stat {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--c-text-2, #a3a3a3);
  }
</style>
`,
    usage: `<GithubRepoCard repoName="astro-components" repoOwner="konstantinwdk" description="Accessible glassmorphic Astro UI component library" language="TypeScript" languageColor="#3178c6" stars={482} forks={64} />`,
  },
  {
    slug: 'stats-trend-card',
    name: 'Stats Trend Card',
    description: 'Modern analytics KPI metric card displaying values, positive/negative delta trend badge, and mini sparkline bar visual.',
    category: 'cards',
    tags: ["cards","stats","analytics","kpi","dashboard"],
    featured: false,
    code: `---
/**
 * StatsTrendCard — Compact KPI metric card featuring delta percentages, trend directions, and mini activity bars.
 * 
 * @param {string} label - Metric name (e.g. 'Active Users').
 * @param {string} value - Formatted value figure (e.g. '42,850').
 * @param {string} change - Delta percentage string (e.g. '+18.4%').
 * @param {'up' | 'down' | 'neutral'} trend - Direction of the trend. Default is 'up'.
 * @param {string} timeframe - Timeframe subtitle (e.g. 'vs last month').
 */
interface Props {
  label: string;
  value: string;
  change: string;
  trend?: 'up' | 'down' | 'neutral';
  timeframe?: string;
}

const {
  label = 'Monthly Active Builders',
  value = '14,290',
  change = '+18.4%',
  trend = 'up',
  timeframe = 'vs last 30 days',
} = Astro.props;

const bars = [35, 55, 40, 75, 60, 90, 80, 100];
---

<div class="trend-card">
  <div class="trend-card__top">
    <span class="trend-card__label">{label}</span>
    <span class:list={['trend-card__badge', \`trend-card__badge--\${trend}\`]}>
      {trend === 'up' && '↑'}
      {trend === 'down' && '↓'}
      {change}
    </span>
  </div>

  <div class="trend-card__value">{value}</div>

  <div class="trend-card__bottom">
    <span class="trend-card__timeframe">{timeframe}</span>
    <div class="trend-card__chart" aria-hidden="true">
      {bars.map((h) => (
        <span class="bar" style={\`height: \${h}%;\`}></span>
      ))}
    </div>
  </div>
</div>

<style>
  .trend-card {
    display: flex;
    flex-direction: column;
    padding: var(--sp-6, 1.5rem);
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--r-xl, 20px);
    width: 100%;
    max-width: 280px;
    font-family: var(--font-sans, system-ui, sans-serif);
    transition: transform 0.25s ease, border-color 0.25s ease;
  }

  .trend-card:hover {
    transform: translateY(-2px);
    border-color: rgba(184, 134, 11, 0.3);
  }

  .trend-card__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .trend-card__label {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--c-text-2, #a3a3a3);
  }

  .trend-card__badge {
    font-size: 0.72rem;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: var(--r-full, 9999px);
    display: inline-flex;
    align-items: center;
    gap: 2px;
  }

  .trend-card__badge--up {
    background: rgba(16, 185, 129, 0.15);
    color: #34d399;
    border: 1px solid rgba(16, 185, 129, 0.3);
  }

  .trend-card__badge--down {
    background: rgba(239, 68, 68, 0.15);
    color: #f87171;
    border: 1px solid rgba(239, 68, 68, 0.3);
  }

  .trend-card__badge--neutral {
    background: rgba(255, 255, 255, 0.08);
    color: var(--c-text-2, #a3a3a3);
  }

  .trend-card__value {
    font-size: 1.85rem;
    font-weight: 900;
    color: var(--c-text-1, #ffffff);
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  }

  .trend-card__bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .trend-card__timeframe {
    font-size: 0.74rem;
    color: var(--c-text-3, #737373);
  }

  .trend-card__chart {
    display: flex;
    align-items: flex-end;
    gap: 3px;
    height: 24px;
    width: 60px;
  }

  .bar {
    flex: 1;
    background: rgba(184, 134, 11, 0.35);
    border-radius: 2px;
    transition: background 0.2s;
  }

  .trend-card:hover .bar {
    background: var(--c-primary-light, #d4a017);
  }
</style>
`,
    usage: `<StatsTrendCard title="Active Subscriptions" value="14,290" change="+12.8%" isPositive={true} subtitle="Compared to previous 30 days" />`,
  },
];
