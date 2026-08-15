// src/data/registry/navigation.ts
import type { ComponentDoc } from './types';

export const navigation: ComponentDoc[] = [
  {
    slug: 'glass-navbar',
    name: 'Glass Navbar',
    description: 'A sticky top navigation bar with glassmorphism blur and smooth scroll behavior.',
    category: 'navigation',
    tags: ['navbar', 'navigation', 'glass', 'sticky'],
    featured: true,
    code: `---
interface Props { brand?: string; brandHref?: string; }
const { brand = 'Astro Components', brandHref = '/' } = Astro.props;
---
<header class="glass-nav">
  <div class="glass-nav__inner">
    <a href={brandHref} class="glass-nav__brand">{brand}</a>
    <nav class="glass-nav__links"><slot name="links" /></nav>
    <div class="glass-nav__actions"><slot name="actions" /></div>
  </div>
</header>
<style>
  .glass-nav { position: sticky; top: 0; z-index: 100; background: rgba(10, 10, 20, 0.7); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.07); }
  .glass-nav__inner { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; height: 64px; display: flex; align-items: center; gap: 2rem; }
  .glass-nav__brand { font-size: 1.1rem; font-weight: 800; color: #f1f5f9; text-decoration: none; background: linear-gradient(135deg, #818cf8, #c084fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .glass-nav__links { display: flex; align-items: center; gap: 0.25rem; flex: 1; }
  .glass-nav__links :global(a) { padding: 0.4rem 0.8rem; font-size: 0.875rem; font-weight: 500; color: #94a3b8; text-decoration: none; border-radius: 8px; transition: 0.2s; }
  .glass-nav__links :global(a:hover) { color: #e2e8f0; background: rgba(255, 255, 255, 0.06); }
</style>
`,
    usage: `---
import { GlassNavbar, GlassButton } from 'astro-component-kit';
---

<GlassNavbar brand="MyProject">
  <div slot="links">
    <a href="#">Home</a>
    <a href="#">Components</a>
    <a href="#">Showcase</a>
  </div>
  <div slot="actions">
    <GlassButton variant="ghost" size="sm">Log in</GlassButton>
    <GlassButton size="sm">Get Started</GlassButton>
  </div>
</GlassNavbar>`,
  },
  {
    slug: 'minimal-sidebar',
    name: 'Minimal Sidebar',
    description: 'A vertical navigation sidebar for dashboard-style interfaces.',
    category: 'navigation',
    tags: ['sidebar', 'navigation', 'layout'],
    code: `---
---
<aside class="sidebar">
  <div class="sidebar-logo">AU</div>
  <nav class="sidebar-nav">
    <a href="#" class="active">Overview</a>
    <a href="#">Projects</a>
    <a href="#">Team</a>
    <a href="#">Settings</a>
  </nav>
</aside>
<style>
  .sidebar { width: 240px; height: 100vh; background: #080b14; border-right: 1px solid rgba(255, 255, 255, 0.1); padding: 1.5rem; display: flex; flex-direction: column; gap: 2rem; }
  .sidebar-logo { width: 40px; height: 40px; background: #6366f1; color: #fff; display: grid; place-items: center; border-radius: 10px; font-weight: 900; }
  .sidebar-nav { display: flex; flex-direction: column; gap: 0.5rem; }
  .sidebar-nav a { padding: 0.75rem 1rem; border-radius: 10px; color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: 0.2s; }
  .sidebar-nav a:hover, .sidebar-nav a.active { background: rgba(255,255,255,0.05); color: #fff; }
</style>
`,
    usage: `<MinimalSidebar>Content</MinimalSidebar>`,
  },
  {
    slug: 'bottom-nav-mobile',
    name: 'Floating Bottom Nav',
    description: 'Icon-based navigation bar fixed to the bottom, optimized for mobile.',
    category: 'navigation',
    tags: ['mobile', 'navigation', 'bottom bar'],
    code: `---
---
<div class="bottom-nav">
  <a href="#" class="active">🏠</a>
  <a href="#">🔍</a>
  <a href="#">🔔</a>
  <a href="#">👤</a>
</div>
<style>
  .bottom-nav { position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%); width: 90%; max-width: 400px; height: 60px; background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); border-radius: 30px; display: flex; justify-content: space-around; align-items: center; z-index: 1000; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
  .bottom-nav a { font-size: 1.25rem; opacity: 0.5; text-decoration: none; transition: 0.3s; }
  .bottom-nav a.active { opacity: 1; transform: translateY(-5px); }
</style>
`,
    usage: `<BottomNavMobile>Content</BottomNavMobile>`,
  },
  {
    slug: 'pagination-glass',
    name: 'Glass Pagination',
    description: 'Stylish page switcher with blurred background and active states.',
    category: 'navigation',
    tags: ['pagination', 'navigation', 'glass'],
    code: `---
---
<nav class="pagination">
  <button class="prev">←</button>
  <div class="pages">
    <a href="#" class="active">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
    <span>...</span>
    <a href="#">12</a>
  </div>
  <button class="next">→</button>
</nav>
<style>
  .pagination { display: flex; align-items: center; gap: 1rem; }
  .pages { display: flex; gap: 0.5rem; background: rgba(0,0,0,0.2); padding: 4px; border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.1); }
  .pages a, button { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 8px; font-size: 0.8rem; font-weight: 700; color: #94a3b8; text-decoration: none; transition: 0.2s; border: none; background: none; cursor: pointer; }
  .pages a.active { background: #6366f1; color: #fff; }
  .pages a:hover:not(.active) { background: rgba(255,255,255,0.05); color: #fff; }
</style>
`,
    usage: `<PaginationGlass>Content</PaginationGlass>`,
  },
  {
    slug: 'breadcrumbs-minimal',
    name: 'Minimal Breadcrumbs',
    description: 'Lean navigation path indicator with subtle separators.',
    category: 'navigation',
    tags: ['breadcrumbs', 'navigation', 'ux'],
    code: `---
---
<nav class="crumbs">
  <a href="/">Home</a>
  <span class="sep">/</span>
  <a href="/docs">Documentation</a>
  <span class="sep">/</span>
  <span class="curr">Navigation</span>
</nav>
<style>
  .crumbs { display: flex; gap: 0.6rem; font-size: 0.8rem; font-weight: 500; }
  .crumbs a { color: #64748b; text-decoration: none; }
  .crumbs a:hover { color: #fff; }
  .sep { color: #334155; }
  .curr { color: #818cf8; font-weight: 700; }
</style>
`,
    usage: `---
import { BreadcrumbsMinimal } from 'astro-component-kit';
---

<BreadcrumbsMinimal>
  <a href="/">Home</a>
  <span class="sep">/</span>
  <a href="/docs">Documentation</a>
  <span class="sep">/</span>
  <span class="curr">Navigation</span>
</BreadcrumbsMinimal>`,
  },
  {
    slug: 'vertical-tabs',
    name: 'Side Navigation Tabs',
    description: 'Vertical list of tabs for settings or sub-navigation.',
    category: 'navigation',
    tags: ['tabs', 'navigation', 'vertical'],
    code: `---
---
<div class="v-tabs">
  <button class="v-tab active">General</button>
  <button class="v-tab">Account</button>
  <button class="v-tab">Security</button>
  <button class="v-tab">Notifications</button>
</div>
<style>
  .v-tabs { display: flex; flex-direction: column; width: 200px; border-left: 2px solid #1e293b; }
  .v-tab { background: none; border: none; padding: 0.75rem 1.25rem; text-align: left; color: #64748b; font-weight: 600; font-size: 0.9rem; cursor: pointer; transition: 0.2s; border-left: 2px solid transparent; margin-left: -2px; }
  .v-tab:hover { color: #fff; }
  .v-tab.active { color: #6366f1; border-left-color: #6366f1; background: rgba(99,102,241,0.05); }
</style>
`,
    usage: `<VerticalTabs>Content</VerticalTabs>`,
  },
  {
    slug: 'scroll-progress-top',
    name: 'Scroll Indicator',
    description: 'Thin loading bar at the top of the page reflecting scroll depth.',
    category: 'navigation',
    tags: ['scroll', 'navigation', 'indicator'],
    code: `---
---
<div class="scroll-ind" id="scroll-bar"></div>
<style>
  .scroll-ind { position: fixed; top: 0; left: 0; width: 0%; height: 3px; background: #6366f1; z-index: 1000; box-shadow: 0 0 10px #6366f1; }
</style>
<script>
  window.addEventListener('scroll', () => {
    const bar = document.getElementById('scroll-bar');
    const scroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scroll / height) * 100;
    if (bar) bar.style.width = scrolled + '%';
  });
</script>
`,
    usage: `<ScrollProgressTop>Content</ScrollProgressTop>`,
  },
  {
    slug: 'command-palette-ui',
    name: 'Command Palette UI',
    description: 'Visual placeholder for a searchable command interface.',
    category: 'navigation',
    tags: ['command', 'search', 'navigation'],
    code: `---
---
<div class="cmd-palette">
  <div class="cmd-search">🔍 Type a command...</div>
  <div class="cmd-list">
    <div class="cmd-item"><span>📄 Create new page</span><kbd>⌘N</kbd></div>
    <div class="cmd-item"><span>🚀 Deploy to Vercel</span><kbd>⌘D</kbd></div>
    <div class="cmd-item"><span>⚙️ Open settings</span><kbd>⌘,</kbd></div>
  </div>
</div>
<style>
  .cmd-palette { background: #0f172a; border: 1px solid #334155; border-radius: 12px; width: 100%; max-width: 500px; box-shadow: 0 30px 60px rgba(0,0,0,0.5); overflow: hidden; }
  .cmd-search { padding: 1rem; border-bottom: 1px solid #334155; color: #64748b; font-size: 0.9rem; }
  .cmd-item { display: flex; justify-content: space-between; padding: 0.75rem 1rem; cursor: pointer; transition: 0.2s; color: #fff; font-size: 0.85rem; }
  .cmd-item:hover { background: #1e293b; }
  kbd { background: #111; border: 1px solid #333; padding: 2px 5px; border-radius: 4px; font-size: 0.7rem; color: #94a3b8; }
</style>
`,
    usage: `<CommandPaletteUi>Content</CommandPaletteUi>`,
  },
  {
    slug: 'mega-menu-glass',
    name: 'Mega Menu Layout',
    description: 'Multi-column dropdown menu for large navigation systems.',
    category: 'navigation',
    tags: ['mega menu', 'dropdown', 'navigation'],
    code: `---
---
<div class="mega-wrap">
  <div class="mega-grid">
    <div class="mega-col">
      <h5>Products</h5>
      <a href="#">Analytics</a>
      <a href="#">CRM</a>
      <a href="#">Support</a>
    </div>
    <div class="mega-col">
      <h5>Resources</h5>
      <a href="#">Documentation</a>
      <a href="#">Tutorials</a>
      <a href="#">Guides</a>
    </div>
  </div>
</div>
<style>
  .mega-wrap { background: rgba(10, 10, 20, 0.9); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 2rem; width: 600px; }
  .mega-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
  h5 { color: #818cf8; font-size: 0.8rem; margin: 0 0 1rem; text-transform: uppercase; letter-spacing: 0.05em; }
  .mega-col a { display: block; padding: 0.5rem 0; color: #e2e8f0; text-decoration: none; font-size: 0.9rem; }
  .mega-col a:hover { color: #fff; }
</style>
`,
    usage: `<MegaMenuGlass>Content</MegaMenuGlass>`,
  },
  {
    slug: 'tab-underline',
    name: 'Underline Tabs',
    description: 'Clean tabbed navigation with an animated underline indicator.',
    category: 'navigation',
    tags: ['tabs', 'underline', 'animated'],
    code: `---
---
<nav class="u-tabs">
  <a href="#" class="active">Profile</a>
  <a href="#">Password</a>
  <a href="#">Sessions</a>
  <div class="indicator"></div>
</nav>
<style>
  .u-tabs { display: flex; gap: 2rem; border-bottom: 2px solid rgba(255,255,255,0.05); position: relative; }
  .u-tabs a { padding: 1rem 0; color: #64748b; text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: 0.3s; }
  .u-tabs a.active { color: #fff; }
  .indicator { position: absolute; bottom: -2px; left: 0; width: 50px; height: 2px; background: #6366f1; transition: 0.3s; }
</style>
`,
    usage: `<TabUnderline>Content</TabUnderline>`,
  },
  {
    slug: 'anchor-side-nav',
    name: 'On-Page Anchor Nav',
    description: 'Side menu for navigating between sections of a single page.',
    category: 'navigation',
    tags: ['anchor', 'scroll', 'side nav'],
    code: `---
---
<ul class="anchor-nav">
  <li><a href="#intro" class="active">Introduction</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#pricing">Pricing</a></li>
  <li><a href="#faq">FAQ</a></li>
</ul>
<style>
  .anchor-nav { list-style: none; padding: 0.5rem; border-left: 1px solid rgba(255, 255, 255, 0.1); position: sticky; top: 100px; }
  .anchor-nav a { display: block; padding: 0.4rem 1rem; color: #64748b; text-decoration: none; font-size: 0.85rem; border-left: 2px solid transparent; margin-left: -1.5px; }
  .anchor-nav a.active { color: #818cf8; border-left-color: #6366f1; }
</style>
`,
    usage: `<AnchorSideNav>Content</AnchorSideNav>`,
  },
  {
    slug: 'retro-arcade-menu',
    name: 'Retro Arcade Menu',
    description: '8-bit style navigation with pixelated font and selection arrows.',
    category: 'navigation',
    tags: ['retro', 'navigation', 'game'],
    code: `---
---
<div class="retro-menu">
  <div class="item selected">▶ LOAD GAME</div>
  <div class="item">OPTIONS</div>
  <div class="item">EXIT</div>
</div>
<style>
  .retro-menu { background: #000; border: 4px solid #fff; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; width: fit-content; }
  .item { font-family: 'Courier New', monospace; font-weight: 900; color: #fff; font-size: 1.2rem; cursor: pointer; }
  .item.selected { color: #facc15; }
</style>
`,
    usage: `<RetroArcadeMenu>Content</RetroArcadeMenu>`,
  },
  {
    slug: 'dot-navigation-slider',
    name: 'Dot Slide Indicators',
    description: 'Abstract dot-based navigation for sliders or carousel components.',
    category: 'navigation',
    tags: ['dots', 'slider', 'carousel'],
    code: `---
---
<div class="dot-nav">
  <button class="active"></button>
  <button></button>
  <button></button>
  <button></button>
</div>
<style>
  .dot-nav { display: flex; gap: 10px; justify-content: center; }
  .dot-nav button { width: 10px; height: 10px; border-radius: 50%; border: none; background: rgba(255,255,255,0.2); cursor: pointer; transition: 0.3s; }
  .dot-nav button.active { width: 24px; border-radius: 5px; background: #6366f1; }
</style>
`,
    usage: `<DotNavigationSlider>Content</DotNavigationSlider>`,
  },
  {
    slug: 'radial-icon-menu',
    name: 'Radial Radial Menu',
    description: 'Circular navigation menu that expands icons around a center point.',
    category: 'navigation',
    tags: ['radial', 'menu', 'animated'],
    code: `---
---
<div class="radial-wrap">
  <div class="toggle">+</div>
  <div class="icons">
    <div style="--i:1">📷</div>
    <div style="--i:2">📁</div>
    <div style="--i:3">✉️</div>
  </div>
</div>
<style>
  .radial-wrap { position: relative; width: 60px; height: 60px; background: #6366f1; border-radius: 50%; display: grid; place-items: center; color: #fff; cursor: pointer; }
  .icons div { position: absolute; left: 0; transform-origin: 30px; transition: 0.5s; transition-delay: calc(0.1s * var(--i)); transform: rotate(0deg) translateX(0px); opacity: 0; pointer-events: none; }
  .radial-wrap:hover .icons div { transform: rotate(calc(360deg / 8 * var(--i))) translateX(80px); opacity: 1; pointer-events: auto; }
</style>
`,
    usage: `<RadialIconMenu>Content</RadialIconMenu>`,
  },
  {
    slug: 'burger-morph-icon',
    name: 'Animated Burger Menu',
    description: 'CSS burger icon that morphs into an ',
    category: 'navigation',
    tags: ['burger', 'icon', 'animated'],
    code: `---
---
<button class="burger" onclick="this.classList.toggle('active')">
  <span></span><span></span><span></span>
</button>
<style>
  .burger { background: none; border: none; width: 30px; height: 24px; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between; }
  .burger span { width: 100%; height: 3px; background: #fff; border-radius: 2px; transition: 0.4s; }
  .burger.active span:nth-child(1) { transform: translateY(10.5px) rotate(45deg); }
  .burger.active span:nth-child(2) { opacity: 0; }
  .burger.active span:nth-child(3) { transform: translateY(-10.5px) rotate(-45deg); }
</style>
`,
    usage: `<BurgerMorphIcon>Content</BurgerMorphIcon>`,
  },
  {
    slug: 'lang-switcher-pill',
    name: 'Language Picker Pill',
    description: 'Compact dropdown or group to switch between languages.',
    category: 'navigation',
    tags: ['language', 'picker', 'i18n'],
    code: `---
---
<div class="lang-pill">
  <span class="curr">EN</span>
  <div class="list">
    <span>ES</span>
    <span>FR</span>
    <span>JP</span>
  </div>
</div>
<style>
  .lang-pill { background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 100px; color: #fff; font-size: 0.75rem; font-weight: 800; border: 1px solid rgba(255, 255, 255, 0.1); cursor: pointer; position: relative; }
  .list { position: absolute; top: 110%; left: 0; background: #111; border-radius: 8px; border: 1px solid #333; display: none; flex-direction: column; z-index: 10; }
  .lang-pill:hover .list { display: flex; }
  .list span { padding: 5px 15px; }
  .list span:hover { background: #6366f1; }
</style>
`,
    usage: `<LangSwitcherPill>Content</LangSwitcherPill>`,
  },
  {
    slug: 'user-profile-nav',
    name: 'User Nav Dropdown',
    description: 'Header link showing user avatar and quick actions menu.',
    category: 'navigation',
    tags: ['profile', 'user', 'dropdown'],
    code: `---
---
<div class="u-nav">
  <div class="u-avatar">JS</div>
  <div class="u-menu">
    <a href="#">Your Profile</a>
    <a href="#">Settings</a>
    <hr />
    <a href="#" class="logout">Logout</a>
  </div>
</div>
<style>
  .u-nav { position: relative; cursor: pointer; }
  .u-avatar { width: 34px; height: 34px; background: linear-gradient(135deg, #6366f1, #c084fc); border-radius: 50%; color: #fff; display: grid; place-items: center; font-size: 0.75rem; font-weight: 800; border: 2px solid #080b14; }
  .u-menu { position: absolute; top: 120%; right: 0; background: #0f172a; border: 1px solid #334155; border-radius: 12px; width: 180px; display: none; flex-direction: column; overflow: hidden; z-index: 10; }
  .u-nav:hover .u-menu { display: flex; }
  .u-menu a { padding: 0.75rem 1rem; font-size: 0.85rem; color: #94a3b8; text-decoration: none; }
  .u-menu a:hover { background: rgba(255,255,255,0.05); color: #fff; }
  .logout { color: #f87171 !important; }
  hr { border: none; border-top: 1px solid #334155; margin: 0; }
</style>
`,
    usage: `<UserProfileNav>Content</UserProfileNav>`,
  },
  {
    slug: 'pagination-infinite-ui',
    name: 'Infinite Scroll UI',
    description: 'Visual indicator for dynamic infinite loading lists.',
    category: 'navigation',
    tags: ['pagination', 'scroll', 'loading'],
    code: `---
---
<div class="inf-load">
  <div class="dot-spin"></div>
  <span>Loading more items...</span>
</div>
<style>
  .inf-load { display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: 2rem; color: #64748b; font-size: 0.85rem; }
  .dot-spin { width: 30px; height: 30px; border: 2px solid rgba(255,255,255,0.1); border-top-color: #6366f1; border-radius: 50%; animation: spin 0.8s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
</style>
`,
    usage: `<PaginationInfiniteUi>Content</PaginationInfiniteUi>`,
  },
  {
    slug: 'floating-tab-bar',
    name: 'Floating Tab Bar',
    description: 'Segmented navigation bar that sits above the content.',
    category: 'navigation',
    tags: ['tabs', 'navigation', 'floating'],
    code: `---
---
<div class="float-tabs">
  <button class="active">Discover</button>
  <button>Trending</button>
  <button>Following</button>
</div>
<style>
  .float-tabs { display: flex; gap: 4px; background: rgba(0,0,0,0.4); padding: 5px; border-radius: 100px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); width: fit-content; margin: 2rem auto; }
  .float-tabs button { background: none; border: none; padding: 0.6rem 1.4rem; color: #94a3b8; font-weight: 600; font-size: 0.85rem; border-radius: 100px; cursor: pointer; transition: 0.3s; }
  .float-tabs button.active { background: #fff; color: #000; }
</style>
`,
    usage: `<FloatingTabBar>Content</FloatingTabBar>`,
  },
  {
    slug: 'simple-footer-glass',
    name: 'Glass Footer',
    description: 'Elegant bottom section with multi-column links and glass effect.',
    category: 'navigation',
    tags: ['footer', 'navigation', 'layout'],
    code: `---
---
<footer class="glass-foot">
  <div class="foot-grid">
    <div class="foot-brand">Astro Components<p>Premium components for the next web.</p></div>
    <div class="foot-links">
      <div><h5>Project</h5><a href="#">Github</a><a href="#">License</a></div>
      <div><h5>Support</h5><a href="#">Issues</a><a href="#">Discord</a></div>
    </div>
  </div>
</footer>
<style>
  .glass-foot { background: rgba(255,255,255,0.02); border-top: 1px solid rgba(255, 255, 255, 0.1); padding: 4rem 1.5rem; }
  .foot-grid { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 3rem; }
  .foot-brand { font-weight: 800; font-size: 1.5rem; color: #fff; }
  .foot-brand p { font-size: 0.9rem; color: #64748b; font-weight: 400; margin-top: 0.5rem; max-width: 250px; }
  .foot-links { display: flex; gap: 4rem; }
  h5 { color: #fff; font-size: 0.85rem; margin-bottom: 1.25rem; }
  a { display: block; text-decoration: none; color: #64748b; margin-bottom: 0.6rem; font-size: 0.85rem; }
  a:hover { color: #818cf8; }
</style>
`,
    usage: `<SimpleFooterGlass>Content</SimpleFooterGlass>`,
  },
];
