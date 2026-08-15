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
 * BlogHorizontalCard — Landscape card layout for blog feeds or news items.
 * 
 * @param {string} title - The blog post title.
 * @param {string} description - Brief summary or excerpt.
 * @param {string} tag - Featured label or category (e.g. "Tutorial").
 * @param {string} thumbUrl - Optional thumbnail image URL.
 */
interface Props {
  title: string;
  description: string;
  tag: string;
  thumbUrl?: string;
}

const { title, description, tag, thumbUrl } = Astro.props;
---

<article class="blog-h-card">
  <div class="blog-h-card__thumb" style={thumbUrl ? \`background-image: url('\${thumbUrl}'); background-size: cover;\` : ''}></div>
  <div class="blog-h-card__content">
    <span class="blog-h-card__tag">{tag}</span>
    <h4 class="blog-h-card__title">{title}</h4>
    <p class="blog-h-card__desc">{description}</p>
  </div>
</article>

<style>
  .blog-h-card { 
    display: flex; gap: var(--sp-6, 1.5rem); 
    background: var(--c-bg-elev, rgba(255,255,255,0.02)); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    border-radius: var(--r-lg, 16px); 
    overflow: hidden; 
  }
  .blog-h-card__thumb { 
    width: 150px; 
    background-color: var(--c-bg, #1e293b); 
    flex-shrink: 0; 
  }
  .blog-h-card__content { padding: var(--sp-5, 1.2rem); }
  .blog-h-card__title { color: var(--c-text-1, #fff); margin: 0.5rem 0; font-size: 1.1rem; }
  .blog-h-card__desc { font-size: 0.85rem; color: var(--c-text-2, #94a3b8); margin: 0; }
  .blog-h-card__tag { font-size: 0.7rem; color: var(--c-primary, #818cf8); font-weight: 700; text-transform: uppercase; }
  
  @media (max-width: 600px) {
    .blog-h-card { flex-direction: column; }
    .blog-h-card__thumb { width: 100%; height: 180px; }
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
 * CyberFeatureCard — A feature card with sharp angles and neon stroke animations.
 * 
 * @param {string} title - The main headline of the feature card.
 * @param {string} subtitle - Optional description context.
 */
interface Props {
  title: string;
  subtitle?: string;
}

const { title, subtitle } = Astro.props;
---

<div class="cyber-card">
  <div class="cyber-card__glitch-line"></div>
  <h3 class="cyber-card__title">{title}</h3>
  {subtitle && <p class="cyber-card__subtitle">{subtitle}</p>}
  <slot />
</div>

<style>
  .cyber-card { 
    background: var(--c-bg-elev, #000); 
    color: var(--c-text-1, #00e0ff); 
    border: 1px solid var(--c-primary, #ff003c); 
    padding: var(--sp-6, 1.5rem); 
    clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%); 
    position: relative; 
  }
  .cyber-card__glitch-line { 
    position: absolute; 
    height: 1px; 
    width: 100%; 
    background: var(--c-primary, #ff003c); 
    top: 10%; left: 0; 
    opacity: 0.5; 
    animation: glitch-anim 4s infinite; 
  }
  .cyber-card__title {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
    color: var(--c-text-1);
  }
  .cyber-card__subtitle {
    margin: 0;
    font-size: 0.9rem;
    color: var(--c-text-2, #ccc);
  }
  
  @keyframes glitch-anim { 
    0%, 100% { top: 10%; } 
    50% { top: 90%; } 
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
 * EcommerceProductCard — Commercial card with price, rating and action buttons.
 * 
 * @param {string} title - The product name.
 * @param {string} price - The parsed price string (e.g. "$299").
 * @param {string} imageUrl - The URL mapping to the product's thumbnail.
 * @param {string} tag - Optional. The highlight bubble tag (e.g. "New").
 * @param {string} rating - Optional. Formatted rating string.
 * @param {string} ctaText - Optional. Label for the call to action button. Default is "Add".
 */
interface Props {
  title: string;
  price: string;
  imageUrl?: string;
  tag?: string;
  rating?: string;
  ctaText?: string;
}

const { 
  title, 
  price, 
  imageUrl,
  tag,
  rating,
  ctaText = 'Add'
} = Astro.props;
---

<div class="prod-card">
  <div class="prod-card__image" style={imageUrl ? \`background-image: url('\${imageUrl}'); background-size: cover;\` : ''}></div>
  <div class="prod-card__info">
    <div class="prod-card__meta">
      {tag ? <span>{tag}</span> : <span></span>}
      {rating ? <span>{rating}</span> : null}
    </div>
    <h4 class="prod-card__title">{title}</h4>
    <div class="prod-card__bot">
      <span class="prod-card__price">{price}</span>
      <button class="prod-card__cta" type="button">{ctaText}</button>
    </div>
  </div>
</div>

<style>
  .prod-card { 
    background: var(--c-bg-elev, #0f172a); 
    border-radius: var(--r-lg, 16px); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    overflow: hidden; 
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease; 
  }
  .prod-card:hover { 
    border-color: var(--c-primary, #6366f1); 
    transform: translateY(-3px); 
  }
  .prod-card__image { 
    height: 180px; 
    background-color: var(--c-bg, #1e293b); 
  }
  .prod-card__info { padding: var(--sp-5, 1.25rem); }
  .prod-card__meta { 
    display: flex; justify-content: space-between; 
    font-size: 0.75rem; color: var(--c-primary-light, #818cf8); 
    font-weight: 700; margin-bottom: 0.5rem; 
  }
  .prod-card__title { color: var(--c-text-1, #fff); margin: 0; font-size: 1.1rem; }
  .prod-card__bot { display: flex; justify-content: space-between; align-items: center; margin-top: 1.25rem; }
  .prod-card__price { font-weight: 800; color: var(--c-text-1, #fff); font-size: 1.25rem; }
  .prod-card__cta { 
    background: var(--c-primary, #6366f1); border: none; color: #fff; 
    padding: 0.5rem 1.2rem; border-radius: var(--r-md, 8px); 
    font-weight: 600; cursor: pointer; transition: 0.2s;
  }
  .prod-card__cta:hover { filter: brightness(1.1); }
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
 * GlassCard — A versatile glassmorphism card with hover lift effect and gradient border.
 * 
 * @param {string} title - Optional title for the glass card header.
 * @param {string} subtitle - Optional description below the title.
 * @param {boolean} hoverable - Whether the card lifts on hover. Default is true.
 * @param {'sm'|'md'|'lg'} padding - Internal padding control. Default is 'md'.
 */
interface Props { title?: string; subtitle?: string; hoverable?: boolean; padding?: 'sm' | 'md' | 'lg'; }
const { title, subtitle, hoverable = true, padding = 'md' } = Astro.props;
---
<div class:list={['glass-card', \`glass-card--p\${padding}\`, { 'glass-card--hoverable': hoverable }]}>
  {title && (<div class="glass-card__header"><h3 class="glass-card__title">{title}</h3>{subtitle && <p class="glass-card__subtitle">{subtitle}</p>}</div>)}
  <div class="glass-card__body"><slot /></div>
</div>
<style>
  .glass-card { background: rgba(255, 255, 255, 0.04); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.09); border-radius: 20px; position: relative; overflow: hidden; transition: 0.3s; }
  .glass-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); }
  .glass-card--hoverable:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4); border-color: rgba(99, 102, 241, 0.25); }
  .glass-card__header { border-bottom: 1px solid rgba(255, 255, 255, 0.07); margin-bottom: 1rem; padding-bottom: 0.75rem; }
  .glass-card__title { margin: 0 0 0.25rem; font-size: 1.05rem; font-weight: 600; color: #f1f5f9; }
  .glass-card__subtitle { margin: 0; font-size: 0.82rem; color: #64748b; }
  .glass-card--psm { padding: 1rem; } .glass-card--pmd { padding: 1.5rem; } .glass-card--plg { padding: 2rem; }
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
 * GlassEventCard — Vibrant card for events with date badge and glass effect.
 * 
 * @param {string|number} day - The event date numeric segment.
 * @param {string} month - The event month string indicator.
 * @param {string} title - The name of the event.
 * @param {string} details - Additional string metadata (e.g location and time).
 */
interface Props {
  day: string | number;
  month: string;
  title: string;
  details: string;
}

const { day, month, title, details } = Astro.props;
---

<div class="event-card">
  <div class="event-card__badge">
    <span class="event-card__day">{day}</span>
    {month}
  </div>
  <div class="event-card__info">
    <h3 class="event-card__title">{title}</h3>
    <p class="event-card__details">{details}</p>
  </div>
  <button class="event-card__join" type="button" aria-label="Join event">+</button>
</div>

<style>
  .event-card { 
    display: flex; align-items: center; gap: var(--sp-4, 1rem); 
    padding: var(--sp-5, 1.25rem); 
    background: var(--c-bg-elev, rgba(255,255,255,0.04)); 
    backdrop-filter: blur(10px); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    border-radius: var(--r-xl, 20px); 
  }
  .event-card__badge { 
    background: var(--c-primary, #6366f1); color: #fff; 
    width: 50px; height: 60px; 
    display: flex; flex-direction: column; align-items: center; justify-content: center; 
    font-size: 0.7rem; font-weight: 800; border-radius: var(--r-md, 12px); 
    text-transform: uppercase;
  }
  .event-card__day { font-size: 1.2rem; line-height: 1; margin-bottom: 2px; }
  .event-card__info { flex: 1; }
  .event-card__title { font-size: 1rem; color: var(--c-text-1, #fff); margin: 0; }
  .event-card__details { font-size: 0.8rem; color: var(--c-text-2, #94a3b8); margin: 2px 0 0; }
  .event-card__join { 
    margin-left: auto; width: 40px; height: 40px; 
    border-radius: var(--r-full, 50%); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.2)); 
    background: none; color: var(--c-text-1, #fff); 
    font-size: 1.2rem; cursor: pointer; transition: 0.2s; 
  }
  .event-card__join:hover { background: var(--c-text-1, #fff); color: var(--c-bg, #000); }
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
 * GlowPortfolioCard — Card with a hovering background glow that follows the card edges.
 * 
 * @param {string} title - Project title heading.
 * @param {string} subtitle - Project metadata (e.g. "Web design / 2024").
 * @param {string} glowColor - Optional. Hex color for the animated border glow. Default is '#6366f1'.
 */
interface Props {
  title: string;
  subtitle: string;
  glowColor?: string;
}

const { title, subtitle, glowColor = 'var(--c-primary, #6366f1)' } = Astro.props;
---

<div class="glow-wrap" style={\`--glow-color: \${glowColor};\`}>
  <div class="glow-content">
    <h3 class="glow-content__title">{title}</h3>
    <p class="glow-content__subtitle">{subtitle}</p>
    <slot />
  </div>
</div>

<style>
  .glow-wrap { 
    position: relative; 
    padding: 2px; 
    border-radius: var(--r-xl, 20px); 
    background: var(--c-border, rgba(255,255,255,0.1)); 
    overflow: hidden; 
  }
  .glow-wrap::before { 
    content: ''; 
    position: absolute; 
    inset: -50%; 
    background: conic-gradient(from 0deg, transparent, var(--glow-color), transparent); 
    animation: rotate-glow 4s linear infinite; 
  }
  .glow-content { 
    position: relative; 
    background: var(--c-bg, #080b14); 
    padding: var(--sp-8, 2rem); 
    border-radius: calc(var(--r-xl, 20px) - 2px); 
    z-index: 1; 
    text-align: center; 
  }
  .glow-content__title { margin: 0; color: var(--c-text-1, #fff); font-size: 1.25rem; }
  .glow-content__subtitle { color: var(--c-text-2, #94a3b8); font-size: 0.9rem; margin-top: 0.5rem; }
  
  @keyframes rotate-glow { 100% { transform: rotate(360deg); } }
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
 * InteractiveTiltCard — Card that tilts in 3D space based on mouse position.
 * 
 * @param {string} title - The card's heading text.
 * @param {string} description - The descriptive paragraph attached to the card.
 */
interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<div class="tilt-card-wrap">
  <div class="tilt-card-inner">
    <h3 class="tilt-card__title">{title}</h3>
    <p class="tilt-card__desc">{description}</p>
  </div>
</div>

<style>
  .tilt-card-wrap { 
    perspective: 1000px; 
    width: 100%; 
    max-width: 300px; 
  }
  .tilt-card-inner { 
    background: var(--c-bg-elev, #1e293b); 
    padding: var(--sp-12, 3rem); 
    border-radius: var(--r-xl, 24px); 
    color: var(--c-text-1, #fff); 
    text-align: center; 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    transform-style: preserve-3d; 
    transition: transform 0.1s; 
  }
  .tilt-card__title { 
    transform: translateZ(50px); 
    font-size: 1.5rem; 
    color: var(--c-primary, #818cf8); 
    margin: 0;
  }
  .tilt-card__desc { 
    transform: translateZ(30px); 
    color: var(--c-text-2, #94a3b8); 
    font-size: 0.9rem; 
    margin-top: 1rem; 
  }
</style>

<script>
  document.querySelectorAll('.tilt-card-inner').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e as MouseEvent).clientX - rect.left - rect.width/2) / 10;
      const y = ((e as MouseEvent).clientY - rect.top - rect.height/2) / -10;
      (card as HTMLElement).style.transform = \`rotateY(\${x}deg) rotateX(\${y}deg)\`;
    });
    card.addEventListener('mouseleave', () => {
      (card as HTMLElement).style.transform = 'rotateY(0deg) rotateX(0deg)';
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
 * KanbanItemCard — Small card optimized for list-based project management.
 * 
 * @param {string} title - The description of the ticket/task.
 * @param {string} priority - Priority level label (e.g. "Prio").
 * @param {string} tag - Contextual label tag (e.g. "SEO", "Bug").
 */
interface Props {
  title: string;
  priority?: string;
  tag?: string;
}

const { title, priority, tag } = Astro.props;
---

<div class="k-item">
  <p class="k-item__title">{title}</p>
  <div class="k-item__badges">
    {priority && <span class="k-item__badge k-item__badge--prio">{priority}</span>}
    {tag && <span class="k-item__badge k-item__badge--opt">{tag}</span>}
  </div>
</div>

<style>
  .k-item { 
    background: var(--c-bg-elev, #111); 
    border: 1px solid var(--c-border, #333); 
    padding: var(--sp-4, 1rem); 
    border-radius: var(--r-md, 8px); 
    cursor: pointer; 
    transition: 0.2s; 
  }
  .k-item:hover { 
    border-color: var(--c-primary, #6366f1); 
    transform: scale(1.02); 
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  .k-item__title { margin: 0 0 0.75rem; font-size: 0.85rem; color: var(--c-text-1, #fff); font-weight: 500; line-height: 1.4; }
  .k-item__badges { display: flex; gap: 4px; flex-wrap: wrap; }
  .k-item__badge { font-size: 0.65rem; font-weight: 700; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; }
  
  .k-item__badge--prio { background: rgba(245,158,11,0.1); color: #fbbf24; }
  .k-item__badge--opt { background: rgba(52,211,153,0.1); color: #34d399; }
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
 * MinimalLinkCard — Elegant arrow-link card for site navigation sections.
 * 
 * @param {string} title - The text label of the link.
 * @param {string} href - The destination URL.
 */
interface Props {
  title: string;
  href: string;
}

const { title, href } = Astro.props;
---

<a href={href} class="link-card">
  <span class="link-card__title">{title}</span>
  <svg class="link-card__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
</a>

<style>
  .link-card { 
    display: flex; justify-content: space-between; align-items: center; 
    padding: var(--sp-6, 1.5rem); 
    background: var(--c-bg-elev, rgba(255,255,255,0.03)); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    border-radius: var(--r-md, 12px); 
    text-decoration: none; 
    color: var(--c-text-1, #fff); 
    font-weight: 600; 
    transition: 0.2s; 
  }
  .link-card:hover { 
    background: rgba(255,255,255,0.06); 
    border-color: var(--c-primary, #6366f1); 
    color: var(--c-primary-light, #818cf8); 
  }
  .link-card__icon { transition: transform 0.2s; }
  .link-card:hover .link-card__icon { transform: translateX(5px); }
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
 * MusicPlayerMini — Compact player widget with controls and progress bar.
 * 
 * @param {string} title - The song track title.
 * @param {string} artist - The artist or band name.
 * @param {string} coverUrl - Optional string matching the album cover image URL.
 * @param {number} progress - The song progress representation (0 to 100). Default is 40.
 */
interface Props {
  title: string;
  artist: string;
  coverUrl?: string;
  progress?: number;
}

const { title, artist, coverUrl, progress = 40 } = Astro.props;
---

<div class="music-mini">
  <div class="music-mini__art" style={coverUrl ? \`background-image: url('\${coverUrl}'); background-size: cover;\` : ''}></div>
  <div class="music-mini__track">
    <h4 class="music-mini__title">{title}</h4>
    <p class="music-mini__artist">{artist}</p>
    <div class="music-mini__progress" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
      <div class="music-mini__bar" style={\`width: \${progress}%;\`}></div>
    </div>
  </div>
  <button class="music-mini__play" type="button" aria-label="Play track">▶</button>
</div>

<style>
  .music-mini { 
    display: flex; align-items: center; gap: var(--sp-4, 1rem); 
    background: var(--c-bg-elev, #111); 
    padding: var(--sp-3, 0.75rem); 
    border-radius: var(--r-md, 14px); border: 1px solid var(--c-border, #333); 
    width: 100%; max-width: 320px; 
  }
  .music-mini__art { 
    width: 50px; height: 50px; 
    background-color: var(--c-primary-light, #818cf8); 
    border-radius: var(--r-sm, 8px); flex-shrink: 0; 
  }
  .music-mini__track { flex: 1; }
  .music-mini__title { font-size: 0.85rem; color: var(--c-text-1, #fff); margin: 0; }
  .music-mini__artist { font-size: 0.7rem; color: var(--c-text-2, #64748b); margin: 0; }
  .music-mini__progress { 
    height: 3px; background: rgba(255,255,255,0.1); 
    border-radius: 2px; margin-top: 8px; position: relative; overflow: hidden;
  }
  .music-mini__bar { 
    position: absolute; left: 0; top: 0; height: 100%; 
    background: var(--c-primary, #6366f1); border-radius: 2px; 
  }
  .music-mini__play { 
    font-size: 1.2rem; cursor: pointer; color: var(--c-text-1, #fff); 
    background: none; border: none; padding: 0.25rem; display: grid; place-items: center;
  }
  .music-mini__play:hover { color: var(--c-primary-light, #818cf8); }
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
 * NeumorphicCard — A soft UI card with deep shadows for a realistic elevated look.
 * 
 * @param {'sm'|'md'|'lg'} padding - Optional. Inner padding layout size. Default is 'md'.
 */
interface Props {
  padding?: 'sm' | 'md' | 'lg';
}

const { padding = 'md' } = Astro.props;
---

<div class={\`neu-card neu-card--p\${padding}\`}>
  <slot />
</div>

<style>
  .neu-card {
    background: var(--c-bg-elev, #e0e0e0);
    border-radius: var(--r-xl, 30px);
    box-shadow: 15px 15px 30px rgba(0,0,0,0.1), -15px -15px 30px rgba(255,255,255,0.7);
    color: var(--c-text-1, #444);
    transition: all 0.3s ease;
  }
  
  .neu-card--psm { padding: var(--sp-4, 1rem); }
  .neu-card--pmd { padding: var(--sp-8, 2rem); }
  .neu-card--plg { padding: var(--sp-12, 3rem); }

  @media (prefers-color-scheme: dark) {
    .neu-card {
      box-shadow: 15px 15px 30px rgba(0,0,0,0.4), -15px -15px 30px rgba(255,255,255,0.05);
    }
  }
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
 * NotificationCard — Toast-like card for app notifications and alerts.
 * 
 * @param {string} title - The notification headline.
 * @param {string} message - The notification detail text.
 * @param {'info'|'warning'|'success'|'error'} type - Optional. Changes the notification dot indicator color. Default is 'info'.
 */
interface Props {
  title: string;
  message: string;
  type?: 'info' | 'warning' | 'success' | 'error';
}

const { title, message, type = 'info' } = Astro.props;
---

<div class={\`notify-card notify-card--\${type}\`}>
  <div class="notify-card__dot" aria-hidden="true"></div>
  <div class="notify-card__content">
    <strong class="notify-card__title">{title}</strong>
    <p class="notify-card__message">{message}</p>
  </div>
</div>

<style>
  .notify-card { 
    display: flex; gap: var(--sp-4, 1rem); 
    padding: var(--sp-4, 1rem); 
    background: var(--c-bg-elev, #0f172a); 
    border-radius: var(--r-md, 12px); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    box-shadow: 0 10px 40px rgba(0,0,0,0.4); 
    max-width: 300px; 
  }
  .notify-card__dot { 
    width: 8px; height: 8px; 
    border-radius: var(--r-full, 50%); 
    margin-top: 5px; 
    flex-shrink: 0;
  }
  .notify-card__content { flex: 1; }
  .notify-card__title { font-size: 0.9rem; color: var(--c-text-1, #fff); }
  .notify-card__message { margin: 2px 0 0; font-size: 0.82rem; color: var(--c-text-2, #94a3b8); line-height: 1.4; }
  
  .notify-card--info .notify-card__dot { background: var(--c-primary, #6366f1); }
  .notify-card--success .notify-card__dot { background: #10b981; }
  .notify-card--warning .notify-card__dot { background: #f59e0b; }
  .notify-card--error .notify-card__dot { background: #ef4444; }
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
 * PricingCard — Optimized card for showing product plans and features.
 * 
 * @param {string} plan - The plan name (e.g. "Pro").
 * @param {string} price - The integer/decimal price value.
 * @param {boolean} featured - Applies a highlighted styling variant if true.
 */
interface Props { plan: string; price: string; featured?: boolean; }
const { plan, price, featured = false } = Astro.props;
---
<div class:list={["price-card", { "featured": featured }]}>
  <span class="price-card__plan">{plan}</span>
  <div class="price-card__price"><span>$</span>{price}</div>
  <ul class="price-card__features">
    <slot />
  </ul>
  <button class="price-card__btn" type="button">Choose Plan</button>
</div>

<style>
  .price-card { 
    background: var(--c-bg-elev, rgba(255,255,255,0.03)); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    border-radius: var(--r-xl, 24px); 
    padding: var(--sp-10, 2.5rem); 
    display: flex; flex-direction: column; gap: var(--sp-6, 1.5rem); 
  }
  .featured { 
    border-color: var(--c-primary, #6366f1); 
    background: rgba(99,102,241,0.05); 
    transform: scale(1.05); 
  }
  .price-card__plan { font-size: 1.1rem; font-weight: 600; color: var(--c-text-1, #fff); }
  .price-card__price { font-size: 2.5rem; font-weight: 800; color: var(--c-text-1, #fff); }
  .price-card__price span { font-size: 1.2rem; opacity: 0.7; margin-right: 2px; }
  
  .price-card__features { 
    list-style: none; padding: 0; margin: 0;
    font-size: 0.9rem; color: var(--c-text-2, #94a3b8); 
    display: flex; flex-direction: column; gap: 0.5rem;
  }
  
  /* Global sub-selector rule to style slotted list items cleanly */
  .price-card__features :global(li) { position: relative; padding-left: 1.5rem; }
  .price-card__features :global(li::before) { 
    content: "✓"; position: absolute; left: 0; color: var(--c-primary, #6366f1); 
  }
  
  .price-card__btn { 
    background: var(--c-primary, #6366f1); color: #fff; 
    border: none; padding: 0.8rem; border-radius: var(--r-md, 12px); 
    font-weight: 700; cursor: pointer; transition: 0.2s;
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
 * ProfileCard — Image-centric profile card with social links and blur effect.
 * 
 * @param {string} name - The person's full name.
 * @param {string} role - Their job title or role.
 * @param {string} avatarUrl - Optional URL string pointing to their avatar image.
 */
interface Props {
  name: string;
  role: string;
  avatarUrl?: string;
}

const { name, role, avatarUrl } = Astro.props;
---

<div class="profile-card">
  <div class="profile-card__banner"></div>
  <div class="profile-card__avatar" style={avatarUrl ? \`background-image: url('\${avatarUrl}'); background-size: cover;\` : ''}></div>
  <h3 class="profile-card__name">{name}</h3>
  <p class="profile-card__role">{role}</p>
  <div class="profile-card__socials">
    <slot name="socials">
      <!-- Fallback generic icons if no socials slot passed -->
      <span aria-hidden="true">🐦</span>
      <span aria-hidden="true">💼</span>
      <span aria-hidden="true">🌐</span>
    </slot>
  </div>
</div>

<style>
  .profile-card { 
    background: rgba(255,255,255,0.03); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    border-radius: var(--r-xl, 20px); 
    text-align: center; 
    overflow: hidden; 
    padding-bottom: var(--sp-6, 1.5rem); 
  }
  .profile-card__banner { 
    height: 80px; 
    background: linear-gradient(135deg, var(--c-primary, #6366f1), var(--c-primary-light, #c084fc)); 
  }
  .profile-card__avatar { 
    width: 80px; height: 80px; 
    background-color: var(--c-bg-elev, #334155); 
    border: 4px solid var(--c-bg, #080b14); 
    border-radius: var(--r-full, 50%); 
    margin: -40px auto 1rem; 
  }
  .profile-card__name { color: var(--c-text-1, #fff); margin: 0; }
  .profile-card__role { font-size: 0.85rem; color: var(--c-text-2, #94a3b8); margin: 4px 0 0; }
  .profile-card__socials { display: flex; justify-content: center; gap: 1rem; margin-top: 1rem; cursor: pointer; }
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
 * RetroGameCard — Bold gaming card with scanlines and pixel fonts.
 * 
 * @param {string} title - The retro game title.
 * @param {string} level - Current stage or level string.
 * @param {number|string} score - The player's score.
 */
interface Props {
  title: string;
  level: string;
  score: number | string;
}

const { title, level, score } = Astro.props;
---

<div class="retro-game">
  <div class="retro-game__scanlines"></div>
  <div class="retro-game__screen">{level}</div>
  <h3 class="retro-game__title">{title}</h3>
  <div class="retro-game__score">SCORE: {score}</div>
</div>

<style>
  .retro-game { 
    background: #22c55e; border: 4px solid #000; 
    padding: var(--sp-4, 1rem); position: relative; 
    box-shadow: 8px 8px 0 #000; 
    font-family: 'Courier New', Courier, monospace; 
  }
  .retro-game__screen { 
    background: #000; color: #22c55e; 
    padding: var(--sp-4, 1rem); text-align: center; 
    font-weight: 900; margin-bottom: 0.5rem; text-transform: uppercase;
  }
  .retro-game__scanlines { 
    position: absolute; inset: 0; pointer-events: none; 
    background: linear-gradient(rgba(0,0,0,0.1) 50%, transparent 50%); background-size: 100% 4px; 
  }
  .retro-game__title { margin: 0; font-size: 1.1rem; color: #000; font-weight: 900; text-transform: uppercase; }
  .retro-game__score { font-size: 0.8rem; color: #000; margin-top: 0.5rem; font-weight: bold; }
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
 * StatCard — Compact card for displaying key metrics with an icon.
 * 
 * @param {string} label - The metric name (e.g., "Total Revenue").
 * @param {string} value - The primary statistic value (e.g., "$124,590").
 * @param {string} icon - The emoji or text character representing the stat.
 */
interface Props {
  label: string;
  value: string;
  icon: string;
}

const { label, value, icon } = Astro.props;
---

<div class="stat-card">
  <div class="stat-card__icon" aria-hidden="true">{icon}</div>
  <div class="stat-card__info">
    <span class="stat-card__label">{label}</span>
    <span class="stat-card__value">{value}</span>
  </div>
</div>

<style>
  .stat-card { 
    display: flex; align-items: center; gap: var(--sp-5, 1.25rem); 
    padding: var(--sp-6, 1.5rem); 
    background: var(--c-bg-elev, rgba(99,102,241,0.06)); 
    border: 1px solid var(--c-border, rgba(99,102,241,0.2)); 
    border-radius: var(--r-lg, 16px); 
  }
  .stat-card__icon { 
    font-size: 1.5rem; 
    background: rgba(99,102,241,0.1); 
    width: 50px; height: 50px; 
    display: grid; place-items: center; 
    border-radius: var(--r-md, 12px); 
  }
  .stat-card__label { 
    display: block; font-size: 0.8rem; 
    color: var(--c-text-2, #94a3b8); 
    font-weight: 600; text-transform: uppercase; 
  }
  .stat-card__value { 
    display: block; font-size: 1.4rem; 
    font-weight: 800; color: var(--c-text-1, #fff); 
  }
</style>
`,
    usage: `<StatCard label="Total Revenue" value="$124,590" icon="📈" />`,
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
 * TaskKanbanCard — Agile task card with priority labels and due dates.
 * 
 * @param {string} task - The description of the task being managed.
 * @param {string} date - Visual date string indicator (e.g. "📅 Oct 24").
 * @param {string} assigneeInitials - Short initials for the user avatar (e.g "MJ").
 * @param {'low'|'med'|'high'} priority - Controls the appearance of the priority tag label. Default is 'low'.
 */
interface Props {
  task: string;
  date: string;
  assigneeInitials: string;
  priority?: 'low' | 'med' | 'high';
}

const { task, date, assigneeInitials, priority = 'low' } = Astro.props;

const priorityLabels = { low: 'Low', med: 'Medium', high: 'High' };
---

<div class="task-card">
  <div class="task-card__tags">
    <span class={\`task-card__tag task-card__tag--\${priority}\`}>{priorityLabels[priority]}</span>
  </div>
  <p class="task-card__desc">{task}</p>
  <div class="task-card__footer">
    <span class="task-card__date">{date}</span>
    <div class="task-card__assignee">{assigneeInitials}</div>
  </div>
</div>

<style>
  .task-card { 
    background: var(--c-bg-elev, #1e293b); 
    padding: var(--sp-4, 1rem); 
    border-radius: var(--r-md, 10px); 
    border: 1px solid var(--c-border, #334155); 
  }
  .task-card__tag { 
    font-size: 0.7rem; font-weight: 700; 
    padding: 2px 8px; border-radius: 4px; 
  }
  .task-card__tag--high { background: rgba(239,68,68,0.1); color: #f87171; }
  .task-card__tag--med { background: rgba(245,158,11,0.1); color: #fbbf24; }
  .task-card__tag--low { background: rgba(52,211,153,0.1); color: #34d399; }
  
  .task-card__desc { font-size: 0.85rem; color: var(--c-text-1, #e2e8f0); margin: 0.75rem 0; font-weight: 500; }
  .task-card__footer { display: flex; justify-content: space-between; align-items: center; }
  .task-card__date { font-size: 0.75rem; color: var(--c-text-2, #64748b); }
  .task-card__assignee { 
    width: 24px; height: 24px; 
    background: var(--c-primary, #6366f1); color: #fff; 
    font-size: 0.65rem; border-radius: 50%; 
    display: grid; place-items: center; font-weight: 700; 
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
 * TestimonialCardClean — Minimalist card for user quotes and reviews.
 * 
 * @param {string} quote - The body of the testimonial review.
 * @param {string} name - The reviewer's full name.
 * @param {string} role - The reviewer's job title or company role.
 * @param {string} avatarUrl - Optional string tracking the avatar headshot URL.
 */
interface Props {
  quote: string;
  name: string;
  role: string;
  avatarUrl?: string;
}

const { quote, name, role, avatarUrl } = Astro.props;
---

<div class="testi-card">
  <blockquote class="testi-card__quote">"{quote}"</blockquote>
  <div class="testi-card__author">
    <div class="testi-card__pic" style={avatarUrl ? \`background-image: url('\${avatarUrl}'); background-size: cover;\` : ''}></div>
    <div class="testi-card__info">
      <h5 class="testi-card__name">{name}</h5>
      <span class="testi-card__role">{role}</span>
    </div>
  </div>
</div>

<style>
  .testi-card { 
    background: var(--c-bg-elev, rgba(255,255,255,0.03)); 
    padding: var(--sp-8, 2rem); 
    border-radius: var(--r-xl, 20px); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
  }
  .testi-card__quote { 
    font-size: 1rem; color: var(--c-text-1, #e2e8f0); 
    font-style: italic; line-height: 1.6; 
    margin: 0 0 2rem 0; 
  }
  .testi-card__author { display: flex; align-items: center; gap: var(--sp-4, 1rem); }
  .testi-card__pic { 
    width: 40px; height: 40px; 
    background: var(--c-bg, #334155); 
    border-radius: var(--r-full, 50%); 
  }
  .testi-card__name { margin: 0; color: var(--c-text-1, #fff); font-size: 0.95rem; }
  .testi-card__role { font-size: 0.75rem; color: var(--c-text-2, #64748b); }
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
 * WeatherWidgetCard — Glassmorphism card showing weather conditions.
 * 
 * @param {string} temp - The formatted temperature (e.g. "24°").
 * @param {string} city - The location name.
 * @param {string} condition - Short weather condition string (e.g. "Partly Cloudy").
 * @param {string} icon - Emoji or symbol representing the weather.
 */
interface Props {
  temp: string;
  city: string;
  condition: string;
  icon: string;
}

const { temp, city, condition, icon } = Astro.props;
---

<div class="weather-card">
  <div class="weather-card__temp">{temp}</div>
  <div class="weather-card__city">
    <h4 class="weather-card__name">{city}</h4>
    <p class="weather-card__cond">{condition}</p>
  </div>
  <div class="weather-card__icon" aria-hidden="true">{icon}</div>
</div>

<style>
  .weather-card { 
    display: flex; align-items: center; gap: var(--sp-6, 1.5rem); 
    padding: var(--sp-6, 1.5rem); 
    background: linear-gradient(135deg, rgba(99,102,241,0.2), rgba(192,132,252,0.2)); 
    backdrop-filter: blur(20px); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.15)); 
    border-radius: var(--r-xl, 24px); 
    color: var(--c-text-1, #fff); 
  }
  .weather-card__temp { font-size: 2.2rem; font-weight: 800; }
  .weather-card__name { margin: 0; font-size: 1rem; }
  .weather-card__cond { margin: 0; font-size: 0.8rem; opacity: 0.7; }
  .weather-card__icon { font-size: 2.5rem; margin-left: auto; }
</style>
`,
    usage: `<WeatherWidgetCard temp="24°" city="Sunnyvale" condition="Clear" icon="☀️" />`,
  },
];
