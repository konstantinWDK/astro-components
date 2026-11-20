// src/data/registry/navigation.ts
import type { ComponentDoc } from './types';
import { source } from './sources';

export const navigation: ComponentDoc[] = [
  {
    slug: 'glass-navbar',
    name: 'Glass Navbar',
    description: 'A sticky top navigation bar with glassmorphism blur and smooth scroll behavior.',
    category: 'navigation',
    tags: ['navbar', 'navigation', 'glass', 'sticky'],
    featured: true,
    code: source('navigation/GlassNavbar.astro'),
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
    code: source('navigation/MinimalSidebar.astro'),
    usage: `<MinimalSidebar>Content</MinimalSidebar>`,
  },
  {
    slug: 'bottom-nav-mobile',
    name: 'Floating Bottom Nav',
    description: 'Icon-based navigation bar fixed to the bottom, optimized for mobile.',
    category: 'navigation',
    tags: ['mobile', 'navigation', 'bottom bar'],
    code: source('navigation/BottomNavMobile.astro'),
    usage: `<BottomNavMobile>Content</BottomNavMobile>`,
  },
  {
    slug: 'pagination-glass',
    name: 'Glass Pagination',
    description: 'Stylish page switcher with blurred background and active states.',
    category: 'navigation',
    tags: ['pagination', 'navigation', 'glass'],
    code: source('navigation/BreadcrumbsMinimal.astro'),
    usage: `<PaginationGlass>Content</PaginationGlass>`,
  },
  {
    slug: 'breadcrumbs-minimal',
    name: 'Minimal Breadcrumbs',
    description: 'Lean navigation path indicator with subtle separators.',
    category: 'navigation',
    tags: ['breadcrumbs', 'navigation', 'ux'],
    code: source('navigation/BreadcrumbsMinimal.astro'),
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
    code: source('navigation/VerticalTabs.astro'),
    usage: `<VerticalTabs>Content</VerticalTabs>`,
  },
  {
    slug: 'scroll-progress-top',
    name: 'Scroll Indicator',
    description: 'Thin loading bar at the top of the page reflecting scroll depth.',
    category: 'navigation',
    tags: ['scroll', 'navigation', 'indicator'],
    code: source('navigation/ScrollProgressTop.astro'),
    usage: `<ScrollProgressTop>Content</ScrollProgressTop>`,
  },
  {
    slug: 'command-palette-ui',
    name: 'Command Palette UI',
    description: 'Visual placeholder for a searchable command interface.',
    category: 'navigation',
    tags: ['command', 'search', 'navigation'],
    code: source('navigation/CommandPaletteUI.astro'),
    usage: `<CommandPaletteUi>Content</CommandPaletteUi>`,
  },
  {
    slug: 'mega-menu-glass',
    name: 'Mega Menu Layout',
    description: 'Multi-column dropdown menu for large navigation systems.',
    category: 'navigation',
    tags: ['mega menu', 'dropdown', 'navigation'],
    code: source('navigation/MegaMenuGlass.astro'),
    usage: `<MegaMenuGlass>Content</MegaMenuGlass>`,
  },
  {
    slug: 'tab-underline',
    name: 'Underline Tabs',
    description: 'Clean tabbed navigation with an animated underline indicator.',
    category: 'navigation',
    tags: ['tabs', 'underline', 'animated'],
    code: source('navigation/TabUnderline.astro'),
    usage: `<TabUnderline>Content</TabUnderline>`,
  },
  {
    slug: 'anchor-side-nav',
    name: 'On-Page Anchor Nav',
    description: 'Side menu for navigating between sections of a single page.',
    category: 'navigation',
    tags: ['anchor', 'scroll', 'side nav'],
    code: source('navigation/AnchorSideNav.astro'),
    usage: `<AnchorSideNav>Content</AnchorSideNav>`,
  },
  {
    slug: 'retro-arcade-menu',
    name: 'Retro Arcade Menu',
    description: '8-bit style navigation with pixelated font and selection arrows.',
    category: 'navigation',
    tags: ['retro', 'navigation', 'game'],
    code: source('navigation/RetroArcadeMenu.astro'),
    usage: `<RetroArcadeMenu>Content</RetroArcadeMenu>`,
  },
  {
    slug: 'dot-navigation-slider',
    name: 'Dot Slide Indicators',
    description: 'Abstract dot-based navigation for sliders or carousel components.',
    category: 'navigation',
    tags: ['dots', 'slider', 'carousel'],
    code: source('navigation/DotNavigationSlider.astro'),
    usage: `<DotNavigationSlider>Content</DotNavigationSlider>`,
  },
  {
    slug: 'radial-icon-menu',
    name: 'Radial Radial Menu',
    description: 'Circular navigation menu that expands icons around a center point.',
    category: 'navigation',
    tags: ['radial', 'menu', 'animated'],
    code: source('navigation/RadialIconMenu.astro'),
    usage: `<RadialIconMenu>Content</RadialIconMenu>`,
  },
  {
    slug: 'burger-morph-icon',
    name: 'Animated Burger Menu',
    description: 'CSS burger icon that morphs into an ',
    category: 'navigation',
    tags: ['burger', 'icon', 'animated'],
    code: source('navigation/BurgerMorphIcon.astro'),
    usage: `<BurgerMorphIcon>Content</BurgerMorphIcon>`,
  },
  {
    slug: 'lang-switcher-pill',
    name: 'Language Picker Pill',
    description: 'Compact dropdown or group to switch between languages.',
    category: 'navigation',
    tags: ['language', 'picker', 'i18n'],
    code: source('navigation/LangSwitcherPill.astro'),
    usage: `<LangSwitcherPill>Content</LangSwitcherPill>`,
  },
  {
    slug: 'user-profile-nav',
    name: 'User Nav Dropdown',
    description: 'Header link showing user avatar and quick actions menu.',
    category: 'navigation',
    tags: ['profile', 'user', 'dropdown'],
    code: source('navigation/UserProfileNav.astro'),
    usage: `<UserProfileNav>Content</UserProfileNav>`,
  },
  {
    slug: 'pagination-infinite-ui',
    name: 'Infinite Scroll UI',
    description: 'Visual indicator for dynamic infinite loading lists.',
    category: 'navigation',
    tags: ['pagination', 'scroll', 'loading'],
    code: source('navigation/PaginationInfiniteUI.astro'),
    usage: `<PaginationInfiniteUi>Content</PaginationInfiniteUi>`,
  },
  {
    slug: 'floating-tab-bar',
    name: 'Floating Tab Bar',
    description: 'Segmented navigation bar that sits above the content.',
    category: 'navigation',
    tags: ['tabs', 'navigation', 'floating'],
    code: source('navigation/FloatingTabBar.astro'),
    usage: `<FloatingTabBar>Content</FloatingTabBar>`,
  },
  {
    slug: 'simple-footer-glass',
    name: 'Glass Footer',
    description: 'Elegant bottom section with multi-column links and glass effect.',
    category: 'navigation',
    tags: ['footer', 'navigation', 'layout'],
    code: source('navigation/SimpleFooterGlass.astro'),
    usage: `<SimpleFooterGlass>Content</SimpleFooterGlass>`,
  },
  {
    slug: 'sub-navbar-pills',
    name: 'Sub Navbar Pills',
    description: 'A secondary sub-navigation pill bar with active glow background, badge indicators, and smooth scroll overflow for dashboards.',
    category: 'navigation',
    tags: ["navigation","navbar","pills","subnav","tabs"],
    featured: true,
    code: source('navigation/SubNavbarPills.astro'),
    usage: `<SubNavbarPills items={[{ label: 'Overview', href: '#overview', active: true }, { label: 'Deployments', href: '#deploy', badge: '3' }, { label: 'Settings', href: '#settings' }]} />`,
  },
  {
    slug: 'quick-jump-dock',
    name: 'Quick Jump Dock',
    description: 'Floating macOS inspired dock navigation featuring hover scale expansion, tooltips, and fast route shortcuts.',
    category: 'navigation',
    tags: ["navigation","dock","floating","shortcuts","macos"],
    featured: true,
    code: source('navigation/QuickJumpDock.astro'),
    usage: `<QuickJumpDock items={[{ label: 'Home', href: '/', icon: 'home' }, { label: 'Docs', href: '/docs', icon: 'file' }, { label: 'Settings', href: '/settings', icon: 'settings' }]} />`,
  },
  {
    slug: 'step-breadcrumb-bar',
    name: 'Step Breadcrumb Bar',
    description: 'Multi-step workflow progress breadcrumb indicating completed, current, and upcoming stages.',
    category: 'navigation',
    tags: ["navigation","breadcrumb","steps","workflow","wizard"],
    featured: false,
    code: source('navigation/StepBreadcrumbBar.astro'),
    usage: `<StepBreadcrumbBar steps={[{ label: 'Cart', status: 'completed' }, { label: 'Shipping', status: 'current' }, { label: 'Payment', status: 'upcoming' }]} />`,
  },
];
