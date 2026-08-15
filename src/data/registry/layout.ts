// src/data/registry/layout.ts
import type { ComponentDoc } from './types';

export const layout: ComponentDoc[] = [
  {
    slug: 'centered-container',
    name: 'Centered Container',
    description: 'A responsive container that limits content width and centers it.',
    category: 'layout',
    tags: ['layout', 'container', 'grid'],
    code: `---
interface Props { maxWidth?: string; }
const { maxWidth = '1200px' } = Astro.props;
---
<div class="container" style={\`--max-width: \${maxWidth}\`}><slot /></div>
<style>
  .container { width: 100%; max-width: var(--max-width); margin: 0 auto; padding: 0 1.5rem; }
</style>
`,
    usage: `<CenteredContainer maxWidth="1200px">Content</CenteredContainer>`,
  },
  {
    slug: 'glass-card-grid',
    name: 'Glass Card Grid',
    description: 'A responsive grid specifically designed for card layouts with auto-fill columns.',
    category: 'layout',
    tags: ['layout', 'grid', 'cards'],
    code: `---
---
<div class="card-grid"><slot /></div>
<style>
  .card-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem; }
</style>
`,
    usage: `<GlassCardGrid>Content</GlassCardGrid>`,
  },
  {
    slug: 'split-screen-layout',
    name: 'Split Screen',
    description: 'A layout divided into two equal halves, perfect for landing pages.',
    category: 'layout',
    tags: ['layout', 'split', 'landing'],
    code: `---
---
<div class="split-layout">
  <div class="split-side left"><slot name="left" /></div>
  <div class="split-side right"><slot name="right" /></div>
</div>
<style>
  .split-layout { display: flex; min-height: 80vh; flex-wrap: wrap; }
  .split-side { flex: 1; min-width: 300px; display: flex; align-items: center; padding: 4rem; }
  .left { background: rgba(0,0,0,0.1); }
</style>
`,
    usage: `<SplitScreenLayout>Content</SplitScreenLayout>`,
  },
  {
    slug: 'masonry-grid',
    name: 'Masonry Layout',
    description: 'A CSS-based masonry layout for items of varying heights.',
    category: 'layout',
    tags: ['layout', 'masonry', 'columns'],
    code: `---
---
<div class="masonry"><slot /></div>
<style>
  .masonry { columns: 3 250px; column-gap: 1.5rem; }
  .masonry :global(> *) { break-inside: avoid; margin-bottom: 1.5rem; display: block; }
</style>
`,
    usage: `<MasonryGrid>Content</MasonryGrid>`,
  },
  {
    slug: 'section-divider-text',
    name: 'Divider with Text',
    description: 'A minimalist line divider with a label in the middle.',
    category: 'layout',
    tags: ['layout', 'divider', 'typography'],
    code: `---
---
<div class="txt-divider"><span><slot /></span></div>
<style>
  .txt-divider { display: flex; align-items: center; gap: 1rem; color: #64748b; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 2rem 0; }
  .txt-divider::before, .txt-divider::after { content: ""; flex: 1; height: 1px; background: rgba(255,255,255,0.08); }
</style>
`,
    usage: `<SectionDividerText>Content</SectionDividerText>`,
  },
  {
    slug: 'feature-hero',
    name: 'Feature Hero Section',
    description: 'Impactful header section with large typography and CTA buttons.',
    category: 'layout',
    tags: ['hero', 'layout', 'landing'],
    code: `---
---
<section class="f-hero">
  <div class="f-inner">
    <h1>Experience the <span>Next Dimension</span> of Design</h1>
    <p>Build stunning interfaces faster than ever with our premium component ecosystem.</p>
    <div class="f-actions"><slot /></div>
  </div>
</section>
<style>
  .f-hero { padding: 8rem 2rem; text-align: center; background: radial-gradient(circle at top, rgba(99,102,241,0.15) 0%, transparent 70%); }
  .f-inner { max-width: 800px; margin: 0 auto; }
  h1 { font-size: 4rem; font-weight: 900; line-height: 1.1; margin-bottom: 1.5rem; color: #fff; }
  h1 span { background: linear-gradient(135deg, #6366f1, #c084fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  p { font-size: 1.25rem; color: #94a3b8; line-height: 1.6; margin-bottom: 2.5rem; }
  .f-actions { display: flex; justify-content: center; gap: 1rem; }
</style>
`,
    usage: `<FeatureHero>Content</FeatureHero>`,
  },
  {
    slug: 'vertical-stack',
    name: 'Auto-Stack (Vertical)',
    description: 'Utility layout for stacking elements with consistent spacing.',
    category: 'layout',
    tags: ['layout', 'stack', 'spacing'],
    code: `---
interface Props { gap?: string; }
const { gap = '1.5rem' } = Astro.props;
---
<div class="v-stack" style={\`--gap: \${gap}\`}><slot /></div>
<style>
  .v-stack { display: flex; flex-direction: column; gap: var(--gap); }
</style>
`,
    usage: `<VerticalStack gap="1.5rem">Content</VerticalStack>`,
  },
  {
    slug: 'sidebar-layout-wrapper',
    name: 'Sidebar Page Layout',
    description: 'Two-column layout with fixed-width sidebar and liquid content.',
    category: 'layout',
    tags: ['layout', 'sidebar', 'dashboard'],
    code: `---
---
<div class="side-page">
  <aside class="side-col"><slot name="sidebar" /></aside>
  <main class="main-col"><slot name="main" /></main>
</div>
<style>
  .side-page { display: grid; grid-template-columns: 280px 1fr; min-height: 100vh; }
  .side-col { border-right: 1px solid rgba(255, 255, 255, 0.1); background: rgba(0,0,0,0.1); }
  .main-col { padding: 2rem; }
</style>
`,
    usage: `<SidebarLayoutWrapper>Content</SidebarLayoutWrapper>`,
  },
  {
    slug: 'bento-grid-3',
    name: 'Bento Grid (3 Column)',
    description: 'Modern dashboard grid inspired by Bento-box layouts.',
    category: 'layout',
    tags: ['layout', 'grid', 'dashboard'],
    code: `---
---
<div class="bento">
  <div class="item wide"><slot name="1" /></div>
  <div class="item"><slot name="2" /></div>
  <div class="item"><slot name="3" /></div>
  <div class="item tall"><slot name="4" /></div>
</div>
<style>
  .bento { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 200px; gap: 1rem; }
  .item { background: rgba(255,255,255,0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 1rem; }
  .wide { grid-column: span 2; }
  .tall { grid-row: span 2; }
</style>
`,
    usage: `<BentoGrid3>Content</BentoGrid3>`,
  },
  {
    slug: 'glass-section-header',
    name: 'Glass Section Header',
    description: 'Visual header for page sections with a blurred underline.',
    category: 'layout',
    tags: ['layout', 'header', 'glass'],
    code: `---
interface Props { title: string; subtitle?: string; }
const { title, subtitle } = Astro.props;
---
<div class="s-header">
  <h2>{title}</h2>
  {subtitle && <p>{subtitle}</p>}
  <div class="s-line"></div>
</div>
<style>
  .s-header { margin-bottom: 3rem; }
  h2 { font-size: 2rem; color: #fff; margin: 0; }
  p { color: #64748b; margin: 0.5rem 0 0; }
  .s-line { height: 4px; width: 60px; background: #6366f1; border-radius: 2px; margin-top: 1.25rem; }
</style>
`,
    usage: `<GlassSectionHeader title="Example" subtitle="A description">Content</GlassSectionHeader>`,
  },
  {
    slug: 'full-bleed-section',
    name: 'Full Bleed Section',
    description: 'Section that breaks out of the container to hit viewport edges.',
    category: 'layout',
    tags: ['layout', 'full-width', 'design'],
    code: `---
---
<section class="full-bleed"><slot /></section>
<style>
  .full-bleed { width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; background: rgba(30, 41, 59, 0.5); padding: 4rem 1.5rem; }
</style>
`,
    usage: `<FullBleedSection>Content</FullBleedSection>`,
  },
  {
    slug: 'minimal-footer-grid',
    name: 'Modern Footer Layout',
    description: 'Multi-column grid footer for project links and brand info.',
    category: 'layout',
    tags: ['layout', 'footer', 'grid'],
    code: `---
---
<footer class="m-footer">
  <div class="f-row">
    <div class="f-info">Logo<span>© 2024</span></div>
    <div class="f-links">
      <div><a>Docs</a><a>Blog</a></div>
      <div><a>Twitter</a><a>Discord</a></div>
    </div>
  </div>
</footer>
<style>
  .m-footer { padding: 4rem 1.5rem; border-top: 1px solid rgba(255, 255, 255, 0.1); }
  .f-row { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; }
  .f-info { font-weight: 800; color: #fff; }
  span { display: block; font-size: 0.75rem; color: #64748b; font-weight: 400; }
  .f-links { display: flex; gap: 3rem; }
  a { display: block; color: #94a3b8; font-size: 0.85rem; margin-bottom: 0.5rem; text-decoration: none; cursor: pointer; }
  a:hover { color: #fff; }
</style>
`,
    usage: `<MinimalFooterGrid>Content</MinimalFooterGrid>`,
  },
  {
    slug: 'scroll-snap-section',
    name: 'Scroll Snap Page',
    description: 'Layout wrapper that snaps sections to the full viewport height.',
    category: 'layout',
    tags: ['layout', 'scroll-snap', 'ux'],
    code: `---
---
<div class="snap-wrap"><slot /></div>
<style>
  .snap-wrap { height: 100vh; overflow-y: scroll; scroll-snap-type: y mandatory; }
  .snap-wrap :global(section) { height: 100vh; scroll-snap-align: start; display: flex; align-items: center; justify-content: center; }
</style>
`,
    usage: `<ScrollSnapSection>Content</ScrollSnapSection>`,
  },
  {
    slug: 'sticky-sidebar-wrapper',
    name: 'Sticky Side Column',
    description: 'Main content area with a side column that remains fixed while scrolling.',
    category: 'layout',
    tags: ['layout', 'sticky', 'sidebar'],
    code: `---
---
<div class="stick-lay">
  <main><slot name="main" /></main>
  <aside><slot name="sidebar" /></aside>
</div>
<style>
  .stick-lay { display: grid; grid-template-columns: 1fr 280px; gap: 2rem; }
  aside :global(> *) { position: sticky; top: 100px; }
</style>
`,
    usage: `<StickySidebarWrapper>Content</StickySidebarWrapper>`,
  },
  {
    slug: 'cluster-horizontal',
    name: 'Horizontal Cluster',
    description: 'Auto-wrapping flex row for buttons, badges, or list items.',
    category: 'layout',
    tags: ['layout', 'flex', 'spacing'],
    code: `---
---
<div class="cluster"><slot /></div>
<style>
  .cluster { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; }
</style>
`,
    usage: `<ClusterHorizontal>Content</ClusterHorizontal>`,
  },
  {
    slug: 'center-fixed-box',
    name: 'Absolute Center Box',
    description: 'Overlay or layout utility to fix content exactly in the screen center.',
    category: 'layout',
    tags: ['layout', 'utility', 'absolute'],
    code: `---
---
<div class="abs-center"><slot /></div>
<style>
  .abs-center { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 500; }
</style>
`,
    usage: `<CenterFixedBox>Content</CenterFixedBox>`,
  },
  {
    slug: 'gallery-grid-4',
    name: '4-Column Portfolio Grid',
    description: 'Square aspect-ratio grid for visual galleries and photos.',
    category: 'layout',
    tags: ['layout', 'grid', 'gallery'],
    code: `---
---
<div class="gal-grid"><slot /></div>
<style>
  .gal-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; }
  .gal-grid :global(> *) { aspect-ratio: 1; border-radius: 12px; background: rgba(255, 255, 255, 0.05); overflow: hidden; border: 1px solid rgba(255,255,255,0.1); }
</style>
`,
    usage: `<GalleryGrid4>Content</GalleryGrid4>`,
  },
  {
    slug: 'step-layout-vertical',
    name: 'Vertical Progress Steps',
    description: 'Large scale vertical steps with space for detailed descriptions.',
    category: 'layout',
    tags: ['layout', 'onboarding', 'steps'],
    code: `---
---
<div class="step-lay">
  <div class="step-line">
    <div class="step-point">1</div>
    <div class="step-point">2</div>
  </div>
  <div class="step-content">
    <div class="step-block"><h4>Setup</h4><p>Install the library.</p></div>
    <div class="step-block"><h4>Config</h4><p>Set up registry.</p></div>
  </div>
</div>
<style>
  .step-lay { display: flex; gap: 2.5rem; }
  .step-line { width: 40px; display: flex; flex-direction: column; align-items: center; gap: 5rem; position: relative; }
  .step-line::before { content: ""; position: absolute; height: 100%; width: 2px; background: rgba(255,255,255,0.05); z-index: -1; }
  .step-point { width: 34px; height: 34px; border-radius: 50%; background: #6366f1; color: #fff; display: grid; place-items: center; font-weight: 800; box-shadow: 0 0 15px rgba(99,102,241,0.4); }
  .step-block { height: 90px; }
  h4 { margin: 0; color: #fff; font-size: 1.1rem; }
  p { color: #64748b; font-size: 0.9rem; margin-top: 0.4rem; }
</style>
`,
    usage: `<StepLayoutVertical>Content</StepLayoutVertical>`,
  },
  {
    slug: 'landing-section-split',
    name: 'Split Media Section',
    description: 'Landing page section with text on one side and a large media placeholder on the other.',
    category: 'layout',
    tags: ['layout', 'landing', 'media'],
    code: `---
---
<section class="split-sec">
  <div class="txt"><h2>Build faster</h2><p>Scale with pre-built logic and stunning modular designs.</p></div>
  <div class="media"></div>
</section>
<style>
  .split-sec { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; padding: 4rem 1.5rem; }
  .media { height: 400px; background: rgba(15, 23, 42, 0.5); border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); }
  h2 { font-size: 2.5rem; color: #fff; margin-bottom: 1rem; }
  p { font-size: 1.1rem; color: #94a3b8; line-height: 1.6; }
  @media (max-width: 768px) { .split-sec { grid-template-columns: 1fr; } }
</style>
`,
    usage: `<LandingSectionSplit>Content</LandingSectionSplit>`,
  },
  {
    slug: 'footer-centered-minimal',
    name: 'Bottom Brand Footer',
    description: 'Extremely simple centered footer for portfolio or personal sites.',
    category: 'layout',
    tags: ['layout', 'footer', 'personal'],
    code: `---
---
<footer class="c-footer">
  <div class="c-logo">Astro Components</div>
  <div class="c-copy">© 2024 Built with ❤️ and Astro.</div>
</footer>
<style>
  .c-footer { text-align: center; padding: 4rem; border-top: 1px solid rgba(255, 255, 255, 0.05); }
  .c-logo { font-weight: 800; color: #fff; font-size: 1.1rem; margin-bottom: 0.5rem; letter-spacing: 0.05em; }
  .c-copy { font-size: 0.8rem; color: #64748b; }
</style>
`,
    usage: `<FooterCenteredMinimal>Content</FooterCenteredMinimal>`,
  },
];
