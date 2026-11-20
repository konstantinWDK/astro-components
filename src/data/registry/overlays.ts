// src/data/registry/overlays.ts
import type { ComponentDoc } from './types';
import { source } from './sources';

export const overlays: ComponentDoc[] = [
  {
    slug: 'overlay-modal',
    name: 'Glass Modal',
    description: 'Accessible modal on the native <dialog>: focus trap, Escape, backdrop click and focus return built in, with title, footer slot, variants and sizes.',
    category: 'overlays',
    tags: ['modal', 'dialog', 'overlay', 'glass', 'a11y'],
    featured: true,
    code: source('overlays/OverlayModal.astro'),
    usage: `---
import { OverlayModal, GlassButton } from 'astro-component-kit';
---

<!-- Any element with data-dialog-open="<id>" opens it -->
<GlassButton data-dialog-open="delete-project">Delete project</GlassButton>

<OverlayModal
  id="delete-project"
  size="sm"
  title="Delete project?"
  description="This permanently removes the workspace and its files."
>
  <Fragment slot="footer">
    <!-- data-dialog-close closes it; its value becomes dialog.returnValue -->
    <GlassButton variant="ghost" size="sm" data-dialog-close="cancel">Cancel</GlassButton>
    <GlassButton size="sm" data-dialog-close="confirm">Delete</GlassButton>
  </Fragment>
</OverlayModal>

<script>
  const dialog = document.getElementById('delete-project') as HTMLDialogElement;
  dialog.addEventListener('close', () => {
    if (dialog.returnValue === 'confirm') {
      // run the delete
    }
  });
</script>`,
  },
  {
    slug: 'side-drawer-right',
    name: 'Slide-over (Right)',
    description: 'Slide-over panel (right or left) on the native <dialog>, for filters, settings or carts: sticky header and footer, scrollable body, variants and sizes.',
    category: 'overlays',
    tags: ['drawer', 'slide-over', 'panel', 'dialog', 'overlay'],
    code: source('overlays/SideDrawerRight.astro'),
    usage: `---
import { SideDrawerRight, GlassButton } from 'astro-component-kit';
---

<GlassButton data-dialog-open="filters">Open filters</GlassButton>

<SideDrawerRight id="filters" title="Filters" size="md">
  <!-- scrollable body -->
  <p>Category, price range, rating…</p>

  <Fragment slot="footer">
    <GlassButton variant="ghost" size="sm" data-dialog-close>Reset</GlassButton>
    <GlassButton size="sm" data-dialog-close>Show results</GlassButton>
  </Fragment>
</SideDrawerRight>

<!-- Slide from the left instead -->
<SideDrawerRight id="menu" side="left" size="sm" variant="glass" title="Menu">…</SideDrawerRight>`,
  },
  {
    slug: 'bottom-sheet-mobile',
    name: 'Bottom Sheet',
    description: 'Bottom sheet on the native <dialog>: full-width on phones, floating card on desktop, with title, description and stacked footer actions.',
    category: 'overlays',
    tags: ['mobile', 'sheet', 'dialog', 'overlay', 'actions'],
    code: source('overlays/BottomSheetMobile.astro'),
    usage: `---
import { BottomSheetMobile, GlassButton } from 'astro-component-kit';
---

<GlassButton data-dialog-open="share">Share file</GlassButton>

<BottomSheetMobile id="share" title="Share file" description="Choose how you want to send it.">
  <Fragment slot="footer">
    <GlassButton data-dialog-close="link">Copy link</GlassButton>
    <GlassButton variant="secondary" data-dialog-close="email">Send by email</GlassButton>
    <GlassButton variant="ghost" data-dialog-close>Cancel</GlassButton>
  </Fragment>
</BottomSheetMobile>`,
  },
  {
    slug: 'popover-menu-glass',
    name: 'Glass Popover',
    description: 'A small floating menu that appears near a trigger element.',
    category: 'overlays',
    tags: ['popover', 'menu', 'glass'],
    code: source('overlays/PopoverMenuGlass.astro'),
    usage: `<PopoverMenuGlass>Content</PopoverMenuGlass>`,
  },
  {
    slug: 'command-dialog',
    name: 'Command Palette Overlay',
    description: 'Search-first command center overlay for advanced site navigation.',
    category: 'overlays',
    tags: ['command', 'overlay', 'search'],
    code: source('overlays/CommandDialog.astro'),
    usage: `<CommandDialog>Content</CommandDialog>`,
  },
  {
    slug: 'lightbox-overlay',
    name: 'Image Lightbox',
    description: 'Overlay for viewing high-resolution images in isolation.',
    category: 'overlays',
    tags: ['lightbox', 'image', 'overlay'],
    code: source('overlays/LightboxOverlay.astro'),
    usage: `<LightboxOverlay>Content</LightboxOverlay>`,
  },
  {
    slug: 'cookie-banner-glass',
    name: 'Cookie Consent',
    description: 'Minimalist glass banner for privacy and cookie compliance.',
    category: 'overlays',
    tags: ['cookie', 'legal', 'overlay'],
    code: source('overlays/CookieBannerGlass.astro'),
    usage: `<CookieBannerGlass>Content</CookieBannerGlass>`,
  },
  {
    slug: 'loading-overlay-full',
    name: 'Page Loader Overlay',
    description: 'Blocking overlay used during initial page loads or heavy transitions.',
    category: 'overlays',
    tags: ['loading', 'overlay', 'fullscreen'],
    code: source('overlays/LoadingOverlayFull.astro'),
    usage: `<LoadingOverlayFull>Content</LoadingOverlayFull>`,
  },
  {
    slug: 'backdrop-blur-mask',
    name: 'Backdrop Mask',
    description: 'Simple reusable overlay for dimming/blurring the page behind menus.',
    category: 'overlays',
    tags: ['mask', 'overlay', 'utility'],
    code: source('overlays/BackdropBlurMask.astro'),
    usage: `<BackdropBlurMask>Content</BackdropBlurMask>`,
  },
  {
    slug: 'help-bubble-overlay',
    name: 'Support Chat Bubble',
    description: 'Floating action triggered icon for chat or support requests.',
    category: 'overlays',
    tags: ['support', 'chat', 'floating'],
    code: source('overlays/HelpBubbleOverlay.astro'),
    usage: `<HelpBubbleOverlay>Content</HelpBubbleOverlay>`,
  },
  {
    slug: 'search-overlay-fullscreen',
    name: 'Fullscreen Search',
    description: 'Immersive search interface that covers the entire viewport.',
    category: 'overlays',
    tags: ['search', 'fullscreen', 'overlay'],
    code: source('overlays/SearchOverlayFullscreen.astro'),
    usage: `<SearchOverlayFullscreen>Content</SearchOverlayFullscreen>`,
  },
  {
    slug: 'age-verification-overlay',
    name: 'Age Gate Modal',
    description: 'Splash overlay for age-restricted content verification.',
    category: 'overlays',
    tags: ['legal', 'verification', 'overlay'],
    code: source('overlays/AgeVerificationOverlay.astro'),
    usage: `<AgeVerificationOverlay>Content</AgeVerificationOverlay>`,
  },
  {
    slug: 'context-menu-overlay',
    name: 'Custom Context Menu',
    description: 'Right-click menu replacement with custom actions and styling.',
    category: 'overlays',
    tags: ['menu', 'context', 'overlay'],
    code: source('overlays/ContextMenuOverlay.astro'),
    usage: `<ContextMenuOverlay>Content</ContextMenuOverlay>`,
  },
  {
    slug: 'mobile-nav-overlay',
    name: 'Mobile Menu Overlay',
    description: 'Full-screen mobile drawer triggered by burger menu.',
    category: 'overlays',
    tags: ['mobile', 'navigation', 'overlay'],
    code: source('overlays/MobileNavOverlay.astro'),
    usage: `<MobileNavOverlay>Content</MobileNavOverlay>`,
  },
  {
    slug: 'floating-tray-actions',
    name: 'Bottom Action Tray',
    description: 'Compact set of floating actions locked to the bottom viewport.',
    category: 'overlays',
    tags: ['actions', 'overlay', 'mobile'],
    code: source('overlays/FloatingTrayActions.astro'),
    usage: `<FloatingTrayActions>Content</FloatingTrayActions>`,
  },
  {
    slug: 'toast-stack-overlay',
    name: 'Stacked Toast Center',
    description: 'Container for multiple toasts appearing simultaneously.',
    category: 'overlays',
    tags: ['toast', 'feedback', 'stack'],
    code: source('overlays/ToastStackOverlay.astro'),
    usage: `<ToastStackOverlay>Content</ToastStackOverlay>`,
  },
  {
    slug: 'exit-intent-overlay',
    name: 'Exit Intent Popup',
    description: 'Modal triggered when the user moves to close the tab.',
    category: 'overlays',
    tags: ['conversion', 'modal', 'overlay'],
    code: source('overlays/ExitIntentOverlay.astro'),
    usage: `<ExitIntentOverlay>Content</ExitIntentOverlay>`,
  },
  {
    slug: 'tooltip-action-tray',
    name: 'Action Tooltip',
    description: 'Tooltip that contains interactive buttons instead of just text.',
    category: 'overlays',
    tags: ['tooltip', 'actions', 'ux'],
    code: source('overlays/TooltipActionTray.astro'),
    usage: `<TooltipActionTray>Content</TooltipActionTray>`,
  },
  {
    slug: 'splash-intro-overlay',
    name: 'Entrance Splash',
    description: 'Temporary full-screen intro animation for brand reveal.',
    category: 'overlays',
    tags: ['branding', 'animation', 'overlay'],
    code: source('overlays/SplashIntroOverlay.astro'),
    usage: `<SplashIntroOverlay>Content</SplashIntroOverlay>`,
  },
  {
    slug: 'spotlight-indicator',
    name: 'Step Spotlight',
    description: 'Circular mask that highlights a specific element for onboarding.',
    category: 'overlays',
    tags: ['onboarding', 'highlight', 'overlay'],
    code: source('overlays/SpotlightIndicator.astro'),
    usage: `<SpotlightIndicator>Content</SpotlightIndicator>`,
  },
  {
    slug: 'cookie-preferences-drawer',
    name: 'Cookie Preferences Drawer',
    description: 'Full GDPR-compliant cookie consent bottom drawer with category toggles for essential, analytics, and marketing cookies.',
    category: 'overlays',
    tags: ["overlays","cookie","gdpr","privacy","drawer"],
    featured: true,
    code: source('overlays/CookiePreferencesDrawer.astro'),
    usage: `<CookiePreferencesDrawer title="Cookie Preferences" description="Manage your privacy and data sharing settings." />`,
  },
  {
    slug: 'image-compare-slider',
    name: 'Image Compare Slider',
    description: 'Interactive before-and-after visual comparison slider with draggable separator handle and touch support.',
    category: 'overlays',
    tags: ["overlays","image","compare","slider","before-after"],
    featured: true,
    code: source('overlays/ImageCompareSlider.astro'),
    usage: `<ImageCompareSlider beforeImage="/assets/before.webp" afterImage="/assets/after.webp" beforeLabel="Before" afterLabel="After" />`,
  },
  {
    slug: 'floating-feedback-widget',
    name: 'Floating Feedback Widget',
    description: 'Fixed bottom-right collapsible feedback trigger with emoji satisfaction ratings and text submission textarea.',
    category: 'overlays',
    tags: ["overlays","feedback","floating","widget","survey"],
    featured: false,
    code: source('overlays/FloatingFeedbackWidget.astro'),
    usage: `<FloatingFeedbackWidget placeholder="How can we improve this experience?" />`,
  },
];
