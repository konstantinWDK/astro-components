// src/data/registry/cards.ts
import type { ComponentDoc } from './types';
import { source } from './sources';

export const cards: ComponentDoc[] = [
  {
    slug: 'blog-horizontal-card',
    name: 'Horizontal Blog Card',
    description: 'Landscape card layout for blog feeds or news items.',
    category: 'cards',
    tags: ["card","blog"],
    featured: true,
    code: source('cards/BlogHorizontalCard.astro'),
    usage: `<BlogHorizontalCard title="Building Astro Components" description="Learn to scale." tag="Tutorial" />`,
  },
  {
    slug: 'cyber-feature-card',
    name: 'Cyber Feature Card',
    description: 'A feature card with sharp angles and neon stroke animations.',
    category: 'cards',
    tags: ["card","cyberpunk"],
    featured: true,
    code: source('cards/CyberFeatureCard.astro'),
    usage: `<CyberFeatureCard title="System Core" subtitle="Neural engine">Activate protocol.</CyberFeatureCard>`,
  },
  {
    slug: 'ecommerce-product-card',
    name: 'Product Card',
    description: 'Commercial card with price, rating and action buttons.',
    category: 'cards',
    tags: ["card","ecommerce"],
    featured: true,
    code: source('cards/EcommerceProductCard.astro'),
    usage: `<EcommerceProductCard title="Premium Headphones" price="$299" tag="New" rating="5.0 ★" />`,
  },
  {
    slug: 'glass-card',
    name: 'Glass Card',
    description: 'A versatile glassmorphism card with hover lift effect.',
    category: 'cards',
    tags: ["card","glass"],
    featured: true,
    code: source('cards/GlassCard.astro'),
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
    code: source('cards/GlassEventCard.astro'),
    usage: `<GlassEventCard day={24} month="OCT" title="Dev Meetup" details="SF, CA" />`,
  },
  {
    slug: 'glow-portfolio-card',
    name: 'Glow Portfolio Card',
    description: 'Card with a hovering background glow that follows the card edges.',
    category: 'cards',
    tags: ["card","glow"],
    featured: true,
    code: source('cards/GlowPortfolioCard.astro'),
    usage: `<GlowPortfolioCard title="Redesign" subtitle="Web / 2024"><button>View</button></GlowPortfolioCard>`,
  },
  {
    slug: 'interactive-tilt-card',
    name: 'Interactive Tilt Card',
    description: 'Card that tilts in 3D space based on mouse position.',
    category: 'cards',
    tags: ["card","tilt","3d"],
    featured: true,
    code: source('cards/InteractiveTiltCard.astro'),
    usage: `<InteractiveTiltCard title="3D Hover" description="Move your mouse over me." />`,
  },
  {
    slug: 'kanban-item-card',
    name: 'Project Task Card',
    description: 'Small card optimized for list-based project management.',
    category: 'cards',
    tags: ["card","project"],
    featured: true,
    code: source('cards/KanbanItemCard.astro'),
    usage: `<KanbanItemCard title="Update SEO" priority="Prio" tag="SEO" />`,
  },
  {
    slug: 'minimal-link-card',
    name: 'Minimal Link Card',
    description: 'Elegant arrow-link card for site navigation sections.',
    category: 'cards',
    tags: ["card","link","minimal"],
    featured: true,
    code: source('cards/MinimalLinkCard.astro'),
    usage: `<MinimalLinkCard title="Documentation" href="/docs" />`,
  },
  {
    slug: 'music-player-mini',
    name: 'Mini Music Player',
    description: 'Compact player widget with controls and progress bar.',
    category: 'cards',
    tags: ["card","music"],
    featured: true,
    code: source('cards/MusicPlayerMini.astro'),
    usage: `<MusicPlayerMini title="Moonlight" artist="Astro Orchestra" progress={60} />`,
  },
  {
    slug: 'neumorphic-card',
    name: 'Neumorphic Card',
    description: 'A soft UI card with deep shadows for a realistic elevated look.',
    category: 'cards',
    tags: ["card","neumorphism"],
    featured: true,
    code: source('cards/NeumorphicCard.astro'),
    usage: `<NeumorphicCard padding="lg"><p>Elevated focus container</p></NeumorphicCard>`,
  },
  {
    slug: 'notification-card',
    name: 'Notification Card',
    description: 'Toast-like card for app notifications and alerts.',
    category: 'cards',
    tags: ["card","notification"],
    featured: true,
    code: source('cards/NotificationCard.astro'),
    usage: `<NotificationCard title="Updates Available" message="Version 2.0 is ready." type="info" />`,
  },
  {
    slug: 'pricing-card',
    name: 'Pricing Tier Card',
    description: 'Optimized card for showing product plans and features.',
    category: 'cards',
    tags: ["card","pricing"],
    featured: true,
    code: source('cards/PricingCard.astro'),
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
    code: source('cards/ProfileCard.astro'),
    usage: `<ProfileCard name="Sarah Jenkins" role="Lead Developer" />`,
  },
  {
    slug: 'retro-game-card',
    name: 'Retro Arcade Game Card',
    description: 'Bold gaming card with scanlines and pixel fonts.',
    category: 'cards',
    tags: ["card","retro"],
    featured: true,
    code: source('cards/RetroGameCard.astro'),
    usage: `<RetroGameCard title="SUPER ASTRO" level="LVL 01" score="4820" />`,
  },
  {
    slug: 'stat-card',
    name: 'Data Stat Card',
    description: 'Compact card for displaying key metrics with an icon.',
    category: 'cards',
    tags: ["card","stats"],
    featured: true,
    code: source('cards/StatCard.astro'),
    usage: `<StatCard label="Total Revenue" value="$124,590" change="+14.2%" trend="up" icon="revenue" timeframe="vs last month" />`,
  },
  {
    slug: 'task-kanban-card',
    name: 'Kanban Task Card',
    description: 'Agile task card with priority labels and due dates.',
    category: 'cards',
    tags: ["card","kanban","task"],
    featured: true,
    code: source('cards/TaskKanbanCard.astro'),
    usage: `<TaskKanbanCard task="Update SEO metadata" date="Oct 24" assigneeInitials="MJ" priority="high" />`,
  },
  {
    slug: 'testimonial-card-clean',
    name: 'Clean Testimonial Card',
    description: 'Minimalist card for user quotes and reviews.',
    category: 'cards',
    tags: ["card","testimonial"],
    featured: true,
    code: source('cards/TestimonialCardClean.astro'),
    usage: `<TestimonialCardClean quote="Best library ever." name="Alex Rivera" role="CTO at TechFlow" />`,
  },
  {
    slug: 'weather-widget-card',
    name: 'Weather Widget',
    description: 'Glassmorphism card showing weather conditions.',
    category: 'cards',
    tags: ["card","weather"],
    featured: true,
    code: source('cards/WeatherWidgetCard.astro'),
    usage: `<WeatherWidgetCard temp="24°C" city="Sunnyvale, CA" condition="Clear Skies" icon="sunny" high="26°" low="17°" humidity="54%" wind="12 km/h" />`,
  },
  {
    slug: 'pricing-compare-mini-card',
    name: 'Pricing Compare Mini Card',
    description: 'A compact pricing tier card with gradient spotlight highlight, feature checkmarks, and CTA.',
    category: 'cards',
    tags: ["cards","pricing","tier","plan","commerce"],
    featured: true,
    code: source('cards/PricingCompareMiniCard.astro'),
    usage: `<PricingCompareMiniCard title="Pro Plan" price="$29" period="/month" description="For scaling teams" features={['Unlimited components', 'Priority support', 'Commercial license']} isPopular={true} ctaText="Upgrade to Pro" />`,
  },
  {
    slug: 'github-repo-card',
    name: 'Github Repo Card',
    description: 'Clean developer portfolio card displaying GitHub repository name, description, language dot, star count, and fork stats.',
    category: 'cards',
    tags: ["cards","github","repo","developer","portfolio"],
    featured: true,
    code: source('cards/GithubRepoCard.astro'),
    usage: `<GithubRepoCard repoName="astro-components" repoOwner="konstantinwdk" description="Accessible glassmorphic Astro UI component library" language="TypeScript" languageColor="#3178c6" stars={482} forks={64} />`,
  },
  {
    slug: 'stats-trend-card',
    name: 'Stats Trend Card',
    description: 'Modern analytics KPI metric card displaying values, positive/negative delta trend badge, and mini sparkline bar visual.',
    category: 'cards',
    tags: ["cards","stats","analytics","kpi","dashboard"],
    featured: false,
    code: source('cards/StatsTrendCard.astro'),
    usage: `<StatsTrendCard title="Active Subscriptions" value="14,290" change="+12.8%" isPositive={true} subtitle="Compared to previous 30 days" />`,
  },
];
