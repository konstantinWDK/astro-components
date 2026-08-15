#!/usr/bin/env node

/**
 * Registry Generator
 * Reads actual .astro component files and generates registry entries with correct code.
 */

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const libDir = path.join(rootDir, 'src', 'components', 'lib');
const registryDir = path.join(rootDir, 'src', 'data', 'registry');

const categoryConfig = {
  buttons: {
    icon: '⚡',
    description: 'Interactive button components with premium styles and animations.',
    components: [] // Will be auto-generated
  },
  cards: {
    icon: '🃏',
    description: 'Versatile card containers for content display.',
  },
  data: {
    icon: '📊',
    description: 'Stats, tables, and visualization elements.',
  },
  feedback: {
    icon: '💬',
    description: 'Badges, alerts, and notification components.',
  },
  forms: {
    icon: '📝',
    description: 'Form elements with clean animations and validation states.',
  },
  layout: {
    icon: '🏗️',
    description: 'Grids, containers, and structural sections.',
  },
  navigation: {
    icon: '🧭',
    description: 'Navbars, tabs, breadcrumbs and navigation patterns.',
  },
  overlays: {
    icon: '🪟',
    description: 'Modals, drawers, and popovers.',
  },
  typography: {
    icon: '✍️',
    description: 'Headings and text patterns.',
  },
  utilities: {
    icon: '🛠️',
    description: 'Helper components and interactivity tools.',
  },
};

// Component metadata (manual descriptions and tags)
const componentMeta = {
  // Buttons
  '3dPushButton': { name: '3D Push Button', tags: ['button', '3d', 'push'], featured: false },
  'AnimatedIconButton': { name: 'Animated Icon Button', tags: ['button', 'icon', 'animated'], featured: false },
  'BorderDrawButton': { name: 'Border Draw Button', tags: ['button', 'border', 'animated'], featured: false },
  'CyberpunkButton': { name: 'Cyberpunk Button', tags: ['button', 'cyberpunk', 'glitch'], featured: false },
  'DoubleBorderButton': { name: 'Double Border Button', tags: ['button', 'border', 'minimal'], featured: false },
  'GhostOutlineButton': { name: 'Ghost Outline Button', tags: ['button', 'ghost', 'outline'], featured: false },
  'GlassButton': { name: 'Glass Button', tags: ['button', 'glass', 'shimmer'], featured: true },
  'GlowButton': { name: 'Glow Button', tags: ['button', 'glow', 'neon'], featured: true },
  'LiquidButton': { name: 'Liquid Button', tags: ['button', 'liquid', 'wave'], featured: false },
  'LoadingButton': { name: 'Loading Button', tags: ['button', 'loading', 'spinner'], featured: false },
  'MagneticButton': { name: 'Magnetic Button', tags: ['button', 'magnetic', 'hover'], featured: false },
  'MinimalPillButton': { name: 'Minimal Pill Button', tags: ['button', 'minimal', 'pill'], featured: false },
  'NeumorphicButton': { name: 'Neumorphic Button', tags: ['button', 'neumorphic', 'soft'], featured: false },
  'PulseButton': { name: 'Pulse Button', tags: ['button', 'pulse', 'animated'], featured: false },
  'RetroArcadeButton': { name: 'Retro Arcade Button', tags: ['button', 'retro', 'pixel'], featured: false },
  'RetroShadowButton': { name: 'Retro Shadow Button', tags: ['button', 'retro', 'shadow'], featured: false },
  'ShimmerButton': { name: 'Shimmer Button', tags: ['button', 'shimmer', 'gradient'], featured: false },
  'ShinyButton': { name: 'Shiny Button', tags: ['button', 'shiny', 'gradient'], featured: false },
  'TiltGlowButton': { name: 'Tilt Glow Button', tags: ['button', 'tilt', 'glow'], featured: false },
  // Cards
  'BlogHorizontalCard': { name: 'Blog Horizontal Card', tags: ['card', 'blog', 'horizontal'], featured: false },
  'CyberFeatureCard': { name: 'Cyber Feature Card', tags: ['card', 'cyberpunk', 'feature'], featured: false },
  'EcommerceProductCard': { name: 'Ecommerce Product Card', tags: ['card', 'product', 'ecommerce'], featured: false },
  'GlassCard': { name: 'Glass Card', tags: ['card', 'glass', 'premium'], featured: true },
  'GlassEventCard': { name: 'Glass Event Card', tags: ['card', 'glass', 'event'], featured: false },
  'GlowPortfolioCard': { name: 'Glow Portfolio Card', tags: ['card', 'glow', 'portfolio'], featured: false },
  'InteractiveTiltCard': { name: 'Interactive Tilt Card', tags: ['card', 'tilt', 'interactive'], featured: false },
  'KanbanItemCard': { name: 'Kanban Item Card', tags: ['card', 'kanban', 'task'], featured: false },
  'MinimalLinkCard': { name: 'Minimal Link Card', tags: ['card', 'minimal', 'link'], featured: false },
  'MusicPlayerMini': { name: 'Music Player Mini', tags: ['card', 'music', 'player'], featured: false },
  'NeumorphicCard': { name: 'Neumorphic Card', tags: ['card', 'neumorphic', 'soft'], featured: false },
  'NotificationCard': { name: 'Notification Card', tags: ['card', 'notification', 'alert'], featured: false },
  'PricingCard': { name: 'Pricing Card', tags: ['card', 'pricing', 'plan'], featured: false },
  'ProfileCard': { name: 'Profile Card', tags: ['card', 'profile', 'user'], featured: false },
  'RetroGameCard': { name: 'Retro Game Card', tags: ['card', 'retro', 'gaming'], featured: false },
  'StatCard': { name: 'Stat Card', tags: ['card', 'stat', 'metric'], featured: false },
  'TaskKanbanCard': { name: 'Task Kanban Card', tags: ['card', 'kanban', 'task'], featured: false },
  'TestimonialCardClean': { name: 'Testimonial Card Clean', tags: ['card', 'testimonial', 'review'], featured: false },
  'WeatherWidgetCard': { name: 'Weather Widget Card', tags: ['card', 'weather', 'widget'], featured: false },
  // Data
  'AccordionGroupGlass': { name: 'Accordion Group Glass', tags: ['data', 'accordion', 'glass'], featured: false },
  'AvatarGroupStack': { name: 'Avatar Group Stack', tags: ['data', 'avatar', 'stack'], featured: false },
  'CalendarGridView': { name: 'Calendar Grid View', tags: ['data', 'calendar', 'grid'], featured: false },
  'DataChipsGroup': { name: 'Data Chips Group', tags: ['data', 'chips', 'tags'], featured: false },
  'DescriptionListHoriz': { name: 'Description List Horiz', tags: ['data', 'description', 'list'], featured: false },
  'FileTreeView': { name: 'File Tree View', tags: ['data', 'file', 'tree'], featured: false },
  'GanttChartMinimal': { name: 'Gantt Chart Minimal', tags: ['data', 'gantt', 'chart'], featured: false },
  'GlassTable': { name: 'Glass Table', tags: ['data', 'table', 'glass'], featured: false },
  'KeyValuePillGroup': { name: 'Key Value Pill Group', tags: ['data', 'key-value', 'pill'], featured: false },
  'PriceCompareTable': { name: 'Price Compare Table', tags: ['data', 'price', 'compare'], featured: false },
  'ProgressListSmall': { name: 'Progress List Small', tags: ['data', 'progress', 'list'], featured: false },
  'RatingBreakdownBar': { name: 'Rating Breakdown Bar', tags: ['data', 'rating', 'breakdown'], featured: false },
  'SparklineStatCard': { name: 'Sparkline Stat Card', tags: ['data', 'sparkline', 'stat'], featured: false },
  'StatsGridDashboard': { name: 'Stats Grid Dashboard', tags: ['data', 'stats', 'dashboard'], featured: false },
  'StepperDataVertical': { name: 'Stepper Data Vertical', tags: ['data', 'stepper', 'vertical'], featured: false },
  'TagCloudData': { name: 'Tag Cloud Data', tags: ['data', 'tag', 'cloud'], featured: false },
  'TimelineHorizSteps': { name: 'Timeline Horiz Steps', tags: ['data', 'timeline', 'horizontal'], featured: false },
  'TreeItemInteractive': { name: 'Tree Item Interactive', tags: ['data', 'tree', 'interactive'], featured: false },
  'UserDirectoryItem': { name: 'User Directory Item', tags: ['data', 'user', 'directory'], featured: false },
  'VerticalTimeline': { name: 'Vertical Timeline', tags: ['data', 'timeline', 'vertical'], featured: false },
  // Feedback
  'AnimatedCheckmark': { name: 'Animated Checkmark', tags: ['feedback', 'checkmark', 'success'], featured: false },
  'Badge': { name: 'Badge', tags: ['feedback', 'badge', 'status'], featured: true },
  'CircleProgress': { name: 'Circle Progress', tags: ['feedback', 'progress', 'circle'], featured: false },
  'ConfettiFeedback': { name: 'Confetti Feedback', tags: ['feedback', 'confetti', 'celebration'], featured: false },
  'CyberGlitchAlert': { name: 'Cyber Glitch Alert', tags: ['feedback', 'alert', 'cyberpunk'], featured: false },
  'EmptyStateCard': { name: 'Empty State Card', tags: ['feedback', 'empty', 'state'], featured: false },
  'GlassAlert': { name: 'Glass Alert', tags: ['feedback', 'alert', 'glass'], featured: false },
  'GlassModal': { name: 'Glass Modal', tags: ['feedback', 'modal', 'glass'], featured: false },
  'GlassProgress': { name: 'Glass Progress', tags: ['feedback', 'progress', 'glass'], featured: false },
  'IndicatorBadgeMinimal': { name: 'Indicator Badge Minimal', tags: ['feedback', 'badge', 'indicator'], featured: false },
  'NeonSpinner': { name: 'Neon Spinner', tags: ['feedback', 'spinner', 'neon'], featured: false },
  'PulseDot': { name: 'Pulse Dot', tags: ['feedback', 'pulse', 'dot'], featured: false },
  'RatingPill': { name: 'Rating Pill', tags: ['feedback', 'rating', 'pill'], featured: false },
  'ShakeErrorGroup': { name: 'Shake Error Group', tags: ['feedback', 'error', 'shake'], featured: false },
  'SimpleTooltip': { name: 'Simple Tooltip', tags: ['feedback', 'tooltip', 'simple'], featured: false },
  'SkeletonList': { name: 'Skeleton List', tags: ['feedback', 'skeleton', 'loading'], featured: false },
  'Spotlight': { name: 'Spotlight', tags: ['feedback', 'spotlight', 'hover'], featured: false },
  'StepProgress': { name: 'Step Progress', tags: ['feedback', 'progress', 'steps'], featured: false },
  'ToastNotif': { name: 'Toast Notif', tags: ['feedback', 'toast', 'notification'], featured: false },
  'TypingIndicator': { name: 'Typing Indicator', tags: ['feedback', 'typing', 'indicator'], featured: false },
  // Forms
  'AnimatedInput': { name: 'Animated Input', tags: ['form', 'input', 'animated'], featured: true },
  'ChipInput': { name: 'Chip Input', tags: ['form', 'input', 'chip'], featured: false },
  'ColorPickerInput': { name: 'Color Picker Input', tags: ['form', 'color', 'picker'], featured: false },
  'CurrencyInput': { name: 'Currency Input', tags: ['form', 'input', 'currency'], featured: false },
  'CustomRadioGroup': { name: 'Custom Radio Group', tags: ['form', 'radio', 'group'], featured: false },
  'CyberpunkCheckbox': { name: 'Cyberpunk Checkbox', tags: ['form', 'checkbox', 'cyberpunk'], featured: false },
  'DragDropUpload': { name: 'Drag Drop Upload', tags: ['form', 'upload', 'drag-drop'], featured: false },
  'ErrorInput': { name: 'Error Input', tags: ['form', 'input', 'error'], featured: false },
  'FloatingPassword': { name: 'Floating Password', tags: ['form', 'password', 'floating'], featured: false },
  'FormGroupVertical': { name: 'Form Group Vertical', tags: ['form', 'group', 'vertical'], featured: false },
  'GlassSlider': { name: 'Glass Slider', tags: ['form', 'slider', 'glass'], featured: false },
  'GlassTextarea': { name: 'Glass Textarea', tags: ['form', 'textarea', 'glass'], featured: false },
  'ModernSelect': { name: 'Modern Select', tags: ['form', 'select', 'dropdown'], featured: false },
  'NeumorphicSwitch': { name: 'Neumorphic Switch', tags: ['form', 'switch', 'neumorphic'], featured: false },
  'OTPInput': { name: 'OTP Input', tags: ['form', 'otp', 'verification'], featured: false },
  'RatingStars': { name: 'Rating Stars', tags: ['form', 'rating', 'stars'], featured: false },
  'SearchReveal': { name: 'Search Reveal', tags: ['form', 'search', 'animated'], featured: false },
  'SegmentedControl': { name: 'Segmented Control', tags: ['form', 'segmented', 'toggle'], featured: false },
  'SimpleFileInput': { name: 'Simple File Input', tags: ['form', 'file', 'upload'], featured: false },
  'StepperInput': { name: 'Stepper Input', tags: ['form', 'stepper', 'number'], featured: false },
  // Layout
  'BentoGrid3': { name: 'Bento Grid 3', tags: ['layout', 'bento', 'grid'], featured: false },
  'CenterFixedBox': { name: 'Center Fixed Box', tags: ['layout', 'center', 'fixed'], featured: false },
  'CenteredContainer': { name: 'Centered Container', tags: ['layout', 'container', 'centered'], featured: false },
  'ClusterHorizontal': { name: 'Cluster Horizontal', tags: ['layout', 'cluster', 'flex'], featured: false },
  'FeatureHero': { name: 'Feature Hero', tags: ['layout', 'hero', 'feature'], featured: false },
  'FooterCenteredMinimal': { name: 'Footer Centered Minimal', tags: ['layout', 'footer', 'centered'], featured: false },
  'FullBleedSection': { name: 'Full Bleed Section', tags: ['layout', 'section', 'full-bleed'], featured: false },
  'GalleryGrid4': { name: 'Gallery Grid 4', tags: ['layout', 'gallery', 'grid'], featured: false },
  'GlassCardGrid': { name: 'Glass Card Grid', tags: ['layout', 'grid', 'glass'], featured: false },
  'GlassSectionHeader': { name: 'Glass Section Header', tags: ['layout', 'header', 'glass'], featured: false },
  'LandingSectionSplit': { name: 'Landing Section Split', tags: ['layout', 'landing', 'split'], featured: false },
  'MasonryGrid': { name: 'Masonry Grid', tags: ['layout', 'masonry', 'grid'], featured: false },
  'MinimalFooterGrid': { name: 'Minimal Footer Grid', tags: ['layout', 'footer', 'grid'], featured: false },
  'ScrollSnapSection': { name: 'Scroll Snap Section', tags: ['layout', 'scroll', 'snap'], featured: false },
  'SectionDividerText': { name: 'Section Divider Text', tags: ['layout', 'divider', 'text'], featured: false },
  'SidebarLayoutWrapper': { name: 'Sidebar Layout Wrapper', tags: ['layout', 'sidebar', 'wrapper'], featured: false },
  'SplitScreenLayout': { name: 'Split Screen Layout', tags: ['layout', 'split', 'screen'], featured: false },
  'StepLayoutVertical': { name: 'Step Layout Vertical', tags: ['layout', 'step', 'vertical'], featured: false },
  'StickySidebarWrapper': { name: 'Sticky Sidebar Wrapper', tags: ['layout', 'sticky', 'sidebar'], featured: false },
  'VerticalStack': { name: 'Vertical Stack', tags: ['layout', 'stack', 'vertical'], featured: false },
  // Navigation
  'AnchorSideNav': { name: 'Anchor Side Nav', tags: ['navigation', 'anchor', 'side'], featured: false },
  'BottomNavMobile': { name: 'Bottom Nav Mobile', tags: ['navigation', 'bottom', 'mobile'], featured: false },
  'BreadcrumbsMinimal': { name: 'Breadcrumbs Minimal', tags: ['navigation', 'breadcrumbs', 'minimal'], featured: false },
  'BurgerMorphIcon': { name: 'Burger Morph Icon', tags: ['navigation', 'burger', 'animated'], featured: false },
  'CommandPaletteUI': { name: 'Command Palette UI', tags: ['navigation', 'command', 'palette'], featured: false },
  'DotNavigationSlider': { name: 'Dot Navigation Slider', tags: ['navigation', 'dot', 'slider'], featured: false },
  'FloatingTabBar': { name: 'Floating Tab Bar', tags: ['navigation', 'tab', 'floating'], featured: false },
  'GlassNavbar': { name: 'Glass Navbar', tags: ['navigation', 'navbar', 'glass'], featured: true },
  'LangSwitcherPill': { name: 'Lang Switcher Pill', tags: ['navigation', 'language', 'switcher'], featured: false },
  'MegaMenuGlass': { name: 'Mega Menu Glass', tags: ['navigation', 'mega-menu', 'glass'], featured: false },
  'MinimalSidebar': { name: 'Minimal Sidebar', tags: ['navigation', 'sidebar', 'minimal'], featured: false },
  'PaginationGlass': { name: 'Pagination Glass', tags: ['navigation', 'pagination', 'glass'], featured: false },
  'PaginationInfiniteUI': { name: 'Pagination Infinite UI', tags: ['navigation', 'pagination', 'infinite'], featured: false },
  'RadialIconMenu': { name: 'Radial Icon Menu', tags: ['navigation', 'radial', 'menu'], featured: false },
  'RetroArcadeMenu': { name: 'Retro Arcade Menu', tags: ['navigation', 'retro', 'arcade'], featured: false },
  'ScrollProgressTop': { name: 'Scroll Progress Top', tags: ['navigation', 'scroll', 'progress'], featured: false },
  'SimpleFooterGlass': { name: 'Simple Footer Glass', tags: ['navigation', 'footer', 'glass'], featured: false },
  'TabUnderline': { name: 'Tab Underline', tags: ['navigation', 'tab', 'underline'], featured: false },
  'UserProfileNav': { name: 'User Profile Nav', tags: ['navigation', 'user', 'profile'], featured: false },
  'VerticalTabs': { name: 'Vertical Tabs', tags: ['navigation', 'tab', 'vertical'], featured: false },
  // Overlays
  'AgeVerificationOverlay': { name: 'Age Verification Overlay', tags: ['overlay', 'age', 'verification'], featured: false },
  'BackdropBlurMask': { name: 'Backdrop Blur Mask', tags: ['overlay', 'blur', 'mask'], featured: false },
  'BottomSheetMobile': { name: 'Bottom Sheet Mobile', tags: ['overlay', 'sheet', 'mobile'], featured: false },
  'CommandDialog': { name: 'Command Dialog', tags: ['overlay', 'command', 'dialog'], featured: false },
  'ContextMenuOverlay': { name: 'Context Menu Overlay', tags: ['overlay', 'context', 'menu'], featured: false },
  'CookieBannerGlass': { name: 'Cookie Banner Glass', tags: ['overlay', 'cookie', 'banner'], featured: false },
  'ExitIntentOverlay': { name: 'Exit Intent Overlay', tags: ['overlay', 'exit', 'intent'], featured: false },
  'FloatingTrayActions': { name: 'Floating Tray Actions', tags: ['overlay', 'tray', 'floating'], featured: false },
  'HelpBubbleOverlay': { name: 'Help Bubble Overlay', tags: ['overlay', 'help', 'bubble'], featured: false },
  'LightboxOverlay': { name: 'Lightbox Overlay', tags: ['overlay', 'lightbox', 'image'], featured: false },
  'LoadingOverlayFull': { name: 'Loading Overlay Full', tags: ['overlay', 'loading', 'spinner'], featured: false },
  'MobileNavOverlay': { name: 'Mobile Nav Overlay', tags: ['overlay', 'mobile', 'nav'], featured: false },
  'OverlayModal': { name: 'Overlay Modal', tags: ['overlay', 'modal', 'dialog'], featured: false },
  'PopoverMenuGlass': { name: 'Popover Menu Glass', tags: ['overlay', 'popover', 'menu'], featured: false },
  'SearchOverlayFullscreen': { name: 'Search Overlay Fullscreen', tags: ['overlay', 'search', 'fullscreen'], featured: false },
  'SideDrawerRight': { name: 'Side Drawer Right', tags: ['overlay', 'drawer', 'side'], featured: false },
  'SplashIntroOverlay': { name: 'Splash Intro Overlay', tags: ['overlay', 'splash', 'intro'], featured: false },
  'SpotlightIndicator': { name: 'Spotlight Indicator', tags: ['overlay', 'spotlight', 'indicator'], featured: false },
  'ToastStackOverlay': { name: 'Toast Stack Overlay', tags: ['overlay', 'toast', 'stack'], featured: false },
  'TooltipActionTray': { name: 'Tooltip Action Tray', tags: ['overlay', 'tooltip', 'action'], featured: false },
  // Typography
  'AnimatedUnderlineLink': { name: 'Animated Underline Link', tags: ['typography', 'link', 'animated'], featured: false },
  'BackgroundClipMask': { name: 'Background Clip Mask', tags: ['typography', 'mask', 'gradient'], featured: false },
  'CodeInlineGlass': { name: 'Code Inline Glass', tags: ['typography', 'code', 'inline'], featured: false },
  'CyberpunkGlitchText': { name: 'Cyberpunk Glitch Text', tags: ['typography', 'glitch', 'cyberpunk'], featured: false },
  'DropCapParagraph': { name: 'Drop Cap Paragraph', tags: ['typography', 'drop-cap', 'paragraph'], featured: false },
  'FadedVerticalText': { name: 'Faded Vertical Text', tags: ['typography', 'faded', 'vertical'], featured: false },
  'FloatingTextLabel': { name: 'Floating Text Label', tags: ['typography', 'floating', 'label'], featured: false },
  'GlassBlockQuote': { name: 'Glass Block Quote', tags: ['typography', 'blockquote', 'glass'], featured: false },
  'GlassTextReveal': { name: 'Glass Text Reveal', tags: ['typography', 'reveal', 'animated'], featured: false },
  'GradientHeading': { name: 'Gradient Heading', tags: ['typography', 'heading', 'gradient'], featured: false },
  'GradientUnderlineLink': { name: 'Gradient Underline Link', tags: ['typography', 'link', 'gradient'], featured: false },
  'KbdIndicator': { name: 'Kbd Indicator', tags: ['typography', 'kbd', 'shortcut'], featured: false },
  'LetterSpacingWide': { name: 'Letter Spacing Wide', tags: ['typography', 'letter-spacing', 'wide'], featured: false },
  'MinimalListMarkers': { name: 'Minimal List Markers', tags: ['typography', 'list', 'minimal'], featured: false },
  'MonospaceStatLine': { name: 'Monospace Stat Line', tags: ['typography', 'monospace', 'stat'], featured: false },
  'NeonTextHighlight': { name: 'Neon Text Highlight', tags: ['typography', 'neon', 'highlight'], featured: false },
  'ShadowRevealText': { name: 'Shadow Reveal Text', tags: ['typography', 'shadow', 'reveal'], featured: false },
  'StrokeHeadingOutline': { name: 'Stroke Heading Outline', tags: ['typography', 'outline', 'heading'], featured: false },
  'Text3DLayer': { name: 'Text 3D Layer', tags: ['typography', '3d', 'layered'], featured: false },
  'TypewriterText': { name: 'Typewriter Text', tags: ['typography', 'typewriter', 'animated'], featured: false },
  // Utilities
  'AspectRatioBox': { name: 'Aspect Ratio Box', tags: ['utility', 'aspect-ratio', 'image'], featured: false },
  'BackgroundDotPattern': { name: 'Background Dot Pattern', tags: ['utility', 'pattern', 'dot'], featured: false },
  'CircularMask': { name: 'Circular Mask', tags: ['utility', 'mask', 'circular'], featured: false },
  'ClickRippleWrapper': { name: 'Click Ripple Wrapper', tags: ['utility', 'ripple', 'click'], featured: false },
  'FadeInWrapper': { name: 'Fade In Wrapper', tags: ['utility', 'fade', 'animation'], featured: false },
  'FixedRatioImage': { name: 'Fixed Ratio Image', tags: ['utility', 'image', 'ratio'], featured: false },
  'GlassBlurLayer': { name: 'Glass Blur Layer', tags: ['utility', 'blur', 'glass'], featured: false },
  'GradientBorderMask': { name: 'Gradient Border Mask', tags: ['utility', 'gradient', 'border'], featured: false },
  'HoverLift': { name: 'Hover Lift', tags: ['utility', 'hover', 'lift'], featured: false },
  'ResponsiveSpacer': { name: 'Responsive Spacer', tags: ['utility', 'spacer', 'responsive'], featured: false },
  'ResponsiveVisToggle': { name: 'Responsive Vis Toggle', tags: ['utility', 'visibility', 'responsive'], featured: false },
  'ScrollLockParent': { name: 'Scroll Lock Parent', tags: ['utility', 'scroll', 'lock'], featured: false },
  'ScrollMarginTarget': { name: 'Scroll Margin Target', tags: ['utility', 'scroll', 'margin'], featured: false },
  'SlideUpReveal': { name: 'Slide Up Reveal', tags: ['utility', 'slide', 'reveal'], featured: false },
  'SmoothAnchorLink': { name: 'Smooth Anchor Link', tags: ['utility', 'anchor', 'smooth'], featured: false },
  'StackLayering': { name: 'Stack Layering', tags: ['utility', 'stack', 'layer'], featured: false },
  'StickyObserver': { name: 'Sticky Observer', tags: ['utility', 'sticky', 'observer'], featured: false },
  'TextTruncate': { name: 'Text Truncate', tags: ['utility', 'truncate', 'ellipsis'], featured: false },
  'TruncateSingleLine': { name: 'Truncate Single Line', tags: ['utility', 'truncate', 'single-line'], featured: false },
  'VisuallyHidden': { name: 'Visually Hidden', tags: ['utility', 'hidden', 'accessibility'], featured: false },
};

function slugify(name) {
  return name
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/^([A-Z])([A-Z])/, (m, p1, p2) => p1.toLowerCase() + '-' + p2.toLowerCase())
    .replace(/^(3)([A-Z])/, (m, p1, p2) => p1 + '-' + p2.toLowerCase())
    .toLowerCase();
}

function generateUsage(componentName, filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const componentName = componentName;
  const slug = slugify(componentName);

  // Check if component has props
  const propsMatch = content.match(/interface Props \{([^}]+)\}/);
  const frontmatterMatch = content.match(/---\n([\s\S]*?)\n---/);

  if (propsMatch || frontmatterMatch) {
    // Extract props from interface or frontmatter
    let props = {};
    if (propsMatch) {
      const propsContent = propsMatch[1];
      const propLines = propsContent.split('\n').filter(l => l.trim());
      for (const line of propLines) {
        const m = line.match(/(\w+)(\?)?:\s*([^;]+)/);
        if (m) {
          const [, name, optional, type] = m;
          props[name] = { optional: optional === '?', type: type.trim() };
        }
      }
    }

    // Generate usage based on props
    const propEntries = Object.entries(props);
    if (propEntries.length === 0) {
      return `import ${componentName} from '../components/${componentName}.astro';

<${componentName}>
  Content goes here
</${componentName}>`;
    }

    // Generate example props
    const exampleProps = [];
    for (const [propName, propInfo] of propEntries) {
      if (propInfo.optional) continue;
      const type = propInfo.type;
      if (type === 'string') {
        exampleProps.push(`${propName}="${propName}"`);
      } else if (type === 'number') {
        exampleProps.push(`${propName}={0}`);
      } else if (type.includes('boolean')) {
        exampleProps.push(`${propName}`);
      } else if (type.includes("'") || type.includes('"')) {
        // Enum/type union - use first value
        const values = type.match(/'([^']+)'/g);
        if (values) {
          exampleProps.push(`${propName}=${values[0]}`);
        }
      }
    }

    return `import ${componentName} from '../components/${componentName}.astro';

<${componentName}${exampleProps.length ? ' ' + exampleProps.join(' ') : ''}>
  Content goes here
</${componentName}>`;
  }

  return `import ${componentName} from '../components/${componentName}.astro';

<${componentName}>
  Content goes here
</${componentName}>`;
}

async function generateRegistry() {
  console.log('🚀 Generating registry from component source files...\n');

  const categories = Object.keys(categoryConfig);

  for (const category of categories) {
    const catDir = path.join(libDir, category);
    if (!await fs.pathExists(catDir)) {
      console.warn(`⚠️  Category directory not found: ${category}`);
      continue;
    }

    const files = (await fs.readdir(catDir)).filter(f => f.endsWith('.astro'));
    const components = [];

    for (const file of files) {
      const componentName = file.replace('.astro', '');
      const filePath = path.join(catDir, file);
      const code = await fs.readFile(filePath, 'utf8');
      const slug = slugify(componentName);
      const meta = componentMeta[componentName] || { name: componentName, tags: [category], featured: false };
      const usage = generateUsage(componentName, filePath);

      components.push({
        slug,
        name: meta.name,
        description: `${meta.name} component with ${category} styling.`,
        category,
        tags: meta.tags,
        featured: meta.featured,
        code,
        usage,
      });
    }

    // Generate the registry file
    const outputFile = path.join(registryDir, `${category}.ts`);
    const config = categoryConfig[category];

    const fileContent = `// Auto-generated registry file for ${category}
// Generated from source files in src/components/lib/${category}/

import type { ComponentDoc } from './index';

export const ${category}: ComponentDoc[] = ${JSON.stringify(components, null, 2)};
`;

    await fs.writeFile(outputFile, fileContent);
    console.log(`✅ ${category}.ts — ${components.length} components`);
  }

  console.log('\n✅ Registry generation complete!');
}

generateRegistry();
