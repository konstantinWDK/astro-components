// src/data/registry/overlays.ts
import type { ComponentDoc } from './types';

export const overlays: ComponentDoc[] = [
  {
    slug: 'overlay-modal',
    name: 'Glass Modal',
    description: 'A focused overlay window with a premium glassmorphism blur and smooth entrance animation.',
    category: 'overlays',
    tags: ['modal', 'overlay', 'glass'],
    featured: true,
    code: `---
---
<div class="modal-overlay">
  <div class="modal-card anim-scale-up">
    <div class="modal-close">×</div>
    <h3>Confirm Action</h3>
    <p>Are you sure you want to proceed with this sensitive operation?</p>
    <div class="modal-actions">
      <button class="cancel">Cancel</button>
      <button class="confirm">Continue</button>
    </div>
  </div>
</div>
<style>
  .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(8px); display: grid; place-items: center; z-index: 1000; }
  .modal-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 2rem; width: 90%; max-width: 400px; box-shadow: 0 40px 100px rgba(0,0,0,0.5); position: relative; }
  .modal-close { position: absolute; top: 1rem; right: 1rem; cursor: pointer; color: #94a3b8; font-size: 1.5rem; }
  h3 { margin: 0 0 1rem; color: #fff; }
  p { color: #94a3b8; font-size: 0.9rem; line-height: 1.6; }
  .modal-actions { display: flex; justify-content: flex-end; gap: 1rem; margin-top: 2rem; }
  button { padding: 0.6rem 1.25rem; border-radius: 10px; border: none; font-weight: 700; cursor: pointer; }
  .cancel { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.1); }
  .confirm { background: #6366f1; color: #fff; }
</style>
`,
    usage: `---
import { OverlayModal, GlassButton } from 'astro-component-kit';
---

<OverlayModal>
  <div class="modal-content">
    <h3>Project Created</h3>
    <p>Your new workspace is ready to use.</p>
    <div class="flex-end mt-6">
      <GlassButton size="sm">Go to Dashboard</GlassButton>
    </div>
  </div>
</OverlayModal>`,
  },
  {
    slug: 'side-drawer-right',
    name: 'Slide-over (Right)',
    description: 'A panel that slides in from the right side of the screen, common for filters or settings.',
    category: 'overlays',
    tags: ['drawer', 'panel', 'overlay'],
    code: `---
---
<div class="drawer-wrap">
  <div class="drawer-overlay"></div>
  <div class="drawer-panel right">
    <div class="drawer-header"><h3>Filters</h3><span>×</span></div>
    <div class="drawer-body"><slot /></div>
  </div>
</div>
<style>
  .drawer-wrap { position: fixed; inset: 0; z-index: 2000; }
  .drawer-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); }
  .drawer-panel { position: absolute; top: 0; bottom: 0; width: 350px; background: #080b14; border-left: 1px solid rgba(255, 255, 255, 0.1); padding: 2rem; transform: translateX(100%); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
  .drawer-panel.right { right: 0; transform: translateX(0); }
  .drawer-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; color: #fff; }
</style>
`,
    usage: `---
import { SideDrawerRight } from 'astro-component-kit';
---

<SideDrawerRight>
  <div class="p-6">
    <h4 class="mb-4">Quick Settings</h4>
    <div class="stack-v gap-2">
      <label>Notifications</label>
      <label>Privacy</label>
      <label>Security</label>
    </div>
  </div>
</SideDrawerRight>`,
  },
  {
    slug: 'bottom-sheet-mobile',
    name: 'Bottom Sheet',
    description: 'A mobile-optimized overlay that slides up from the bottom of the screen.',
    category: 'overlays',
    tags: ['mobile', 'sheet', 'overlay'],
    code: `---
---
<div class="sheet-overlay">
  <div class="sheet-content">
    <div class="drag-handle"></div>
    <h3>Select Option</h3>
    <div class="options"><div>Archive</div><div>Delete</div><div>Share</div></div>
  </div>
</div>
<style>
  .sheet-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); display: flex; align-items: flex-end; z-index: 2000; }
  .sheet-content { width: 100%; background: #0f172a; border-radius: 20px 20px 0 0; padding: 1.5rem; transform: translateY(0); }
  .drag-handle { width: 40px; height: 4px; background: #334155; border-radius: 2px; margin: 0 auto 1.5rem; }
  h3 { color: #fff; text-align: center; margin-bottom: 1.5rem; }
  .options div { padding: 1rem; color: #e2e8f0; border-bottom: 1px solid #1e293b; text-align: center; cursor: pointer; }
</style>
`,
    usage: `<BottomSheetMobile>Content</BottomSheetMobile>`,
  },
  {
    slug: 'popover-menu-glass',
    name: 'Glass Popover',
    description: 'A small floating menu that appears near a trigger element.',
    category: 'overlays',
    tags: ['popover', 'menu', 'glass'],
    code: `---
---
<div class="popover">
  <div class="pop-inner">
    <div class="pop-item">Edit Account</div>
    <div class="pop-item">Billing</div>
    <hr />
    <div class="pop-item logout">Logout</div>
  </div>
</div>
<style>
  .popover { width: 180px; background: rgba(10, 10, 20, 0.8); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 6px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
  .pop-item { padding: 8px 12px; border-radius: 8px; color: #94a3b8; font-size: 0.85rem; cursor: pointer; }
  .pop-item:hover { background: rgba(255,255,255,0.06); color: #fff; }
  .logout { color: #f87171 !important; }
  hr { border: none; border-top: 1px solid rgba(255,255,255,0.06); margin: 6px 0; }
</style>
`,
    usage: `<PopoverMenuGlass>Content</PopoverMenuGlass>`,
  },
  {
    slug: 'command-dialog',
    name: 'Command Palette Overlay',
    description: 'Search-first command center overlay for advanced site navigation.',
    category: 'overlays',
    tags: ['command', 'overlay', 'search'],
    code: `---
---
<div class="cmd-overlay">
  <div class="cmd-box">
    <div class="cmd-input"><input type="text" placeholder="Search commands..." /></div>
    <div class="cmd-results">
        <div class="res"><span>Recent: Dashboard</span><kbd>↵</kbd></div>
        <div class="res"><span>Docs: Navigation</span><kbd>↵</kbd></div>
    </div>
  </div>
</div>
<style>
  .cmd-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); display: flex; justify-content: center; padding-top: 15vh; z-index: 3000; }
  .cmd-box { width: 100%; max-width: 600px; background: #080b14; border: 1px solid #334155; border-radius: 12px; overflow: hidden; box-shadow: 0 30px 100px rgba(0,0,0,0.8); }
  .cmd-input input { width: 100%; padding: 1.25rem; background: transparent; border: none; border-bottom: 1px solid #1e293b; color: #fff; outline: none; font-size: 1.1rem; }
  .res { display: flex; justify-content: space-between; padding: 0.75rem 1.25rem; color: #94a3b8; font-size: 0.9rem; cursor: pointer; }
  .res:hover { background: #1e293b; color: #fff; }
  kbd { background: #111; padding: 2px 4px; border-radius: 4px; font-size: 0.7rem; }
</style>
`,
    usage: `<CommandDialog>Content</CommandDialog>`,
  },
  {
    slug: 'lightbox-overlay',
    name: 'Image Lightbox',
    description: 'Overlay for viewing high-resolution images in isolation.',
    category: 'overlays',
    tags: ['lightbox', 'image', 'overlay'],
    code: `---
---
<div class="lightbox">
  <div class="close">×</div>
  <div class="img-preview"></div>
  <div class="caption">Nature Landscape / 2024</div>
</div>
<style>
  .lightbox { position: fixed; inset: 0; background: #000; z-index: 5000; display: flex; flex-direction: column; align-items: center; justify-content: center; }
  .close { position: absolute; top: 2rem; right: 2rem; color: #fff; font-size: 2.2rem; cursor: pointer; }
  .img-preview { width: 80%; height: 70%; background: #1e293b; border-radius: 12px; }
  .caption { margin-top: 2rem; color: #94a3b8; font-family: monospace; }
</style>
`,
    usage: `<LightboxOverlay>Content</LightboxOverlay>`,
  },
  {
    slug: 'cookie-banner-glass',
    name: 'Cookie Consent',
    description: 'Minimalist glass banner for privacy and cookie compliance.',
    category: 'overlays',
    tags: ['cookie', 'legal', 'overlay'],
    code: `---
---
<div class="cookie-bar">
  <div class="text">We use cookies to improve your experience. <a href="#">Learn more</a></div>
  <div class="acts"><button class="opt">Options</button><button class="acc">Accept All</button></div>
</div>
<style>
  .cookie-bar { position: fixed; bottom: 2rem; left: 2rem; right: 2rem; max-width: 600px; margin: 0 auto; background: rgba(15,23,42,0.8); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 1.25rem; display: flex; justify-content: space-between; align-items: center; z-index: 1000; }
  .text { color: #e2e8f0; font-size: 0.85rem; }
  .acts { display: flex; gap: 0.75rem; }
  button { padding: 0.5rem 1rem; border-radius: 8px; border: none; font-size: 0.8rem; font-weight: 700; cursor: pointer; }
  .opt { background: transparent; color: #fff; border: 1px solid #334155; }
  .acc { background: #6366f1; color: #fff; }
</style>
`,
    usage: `<CookieBannerGlass>Content</CookieBannerGlass>`,
  },
  {
    slug: 'loading-overlay-full',
    name: 'Page Loader Overlay',
    description: 'Blocking overlay used during initial page loads or heavy transitions.',
    category: 'overlays',
    tags: ['loading', 'overlay', 'fullscreen'],
    code: `---
---
<div class="load-overlay">
  <div class="spinner"></div>
</div>
<style>
  .load-overlay { position: fixed; inset: 0; background: #080b14; z-index: 9999; display: grid; place-items: center; }
  .spinner { width: 50px; height: 50px; border: 4px solid rgba(99,102,241,0.1); border-top-color: #6366f1; border-radius: 50%; animation: spin 0.8s infinite linear; }
  @keyframes spin { to { transform: rotate(360deg); } }
</style>
`,
    usage: `<LoadingOverlayFull>Content</LoadingOverlayFull>`,
  },
  {
    slug: 'backdrop-blur-mask',
    name: 'Backdrop Mask',
    description: 'Simple reusable overlay for dimming/blurring the page behind menus.',
    category: 'overlays',
    tags: ['mask', 'overlay', 'utility'],
    code: `---
---
<div class="mask"></div>
<style>
  .mask { position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); z-index: 500; pointer-events: none; }
</style>
`,
    usage: `<BackdropBlurMask>Content</BackdropBlurMask>`,
  },
  {
    slug: 'help-bubble-overlay',
    name: 'Support Chat Bubble',
    description: 'Floating action triggered icon for chat or support requests.',
    category: 'overlays',
    tags: ['support', 'chat', 'floating'],
    code: `---
---
<div class="help-bubble">
  <div class="tip">We are online!</div>
  <div class="icon">💬</div>
</div>
<style>
  .help-bubble { position: fixed; bottom: 2rem; right: 2rem; cursor: pointer; display: flex; align-items: center; gap: 1rem; z-index: 1000; }
  .icon { width: 55px; height: 55px; background: #6366f1; border-radius: 50%; display: grid; place-items: center; font-size: 1.5rem; color: #fff; box-shadow: 0 10px 30px rgba(99,102,241,0.4); }
  .tip { background: #fff; color: #000; padding: 6px 12px; border-radius: 10px; font-size: 0.75rem; font-weight: 800; box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
</style>
`,
    usage: `<HelpBubbleOverlay>Content</HelpBubbleOverlay>`,
  },
  {
    slug: 'search-overlay-fullscreen',
    name: 'Fullscreen Search',
    description: 'Immersive search interface that covers the entire viewport.',
    category: 'overlays',
    tags: ['search', 'fullscreen', 'overlay'],
    code: `---
---
<div class="search-hero">
  <div class="close">Esc</div>
  <input type="text" placeholder="Start searching..." autofocus />
  <div class="hints">Search for <span>components</span>, <span>guides</span>, or <span>authors</span></div>
</div>
<style>
  .search-hero { position: fixed; inset: 0; background: #080b14; z-index: 5000; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; }
  .close { position: absolute; top: 3rem; right: 3rem; color: #64748b; font-weight: 700; cursor: pointer; border: 1px solid rgba(255, 255, 255, 0.1); padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; }
  input { width: 100%; max-width: 800px; background: transparent; border: none; color: #fff; font-size: 3rem; font-weight: 800; text-align: center; outline: none; }
  .hints { margin-top: 2rem; color: #64748b; font-size: 1rem; }
  span { color: #818cf8; text-decoration: underline; cursor: pointer; }
  @media (max-width: 768px) { input { font-size: 1.5rem; } }
</style>
`,
    usage: `<SearchOverlayFullscreen>Content</SearchOverlayFullscreen>`,
  },
  {
    slug: 'age-verification-overlay',
    name: 'Age Gate Modal',
    description: 'Splash overlay for age-restricted content verification.',
    category: 'overlays',
    tags: ['legal', 'verification', 'overlay'],
    code: `---
---
<div class="age-gate">
  <div class="age-card">
    <h2>Age Verification</h2>
    <p>Please confirm you are 18 or older to view this site.</p>
    <div class="acts-row"><button class="no">Exit</button><button class="yes">I am 18+</button></div>
  </div>
</div>
<style>
  .age-gate { position: fixed; inset: 0; background: #000; z-index: 9999; display: grid; place-items: center; }
  .age-card { text-align: center; color: #fff; max-width: 350px; padding: 2rem; }
  h2 { font-size: 2rem; font-weight: 900; margin-bottom: 1rem; }
  p { color: #94a3b8; line-height: 1.6; margin-bottom: 2.5rem; }
  .acts-row { display: flex; gap: 1rem; }
  button { flex: 1; padding: 1rem; border: none; border-radius: 12px; font-weight: 800; cursor: pointer; transition: 0.2s; }
  .no { background: #1e293b; color: #fff; }
  .yes { background: #6366f1; color: #fff; }
  button:hover { transform: translateY(-2px); }
</style>
`,
    usage: `<AgeVerificationOverlay>Content</AgeVerificationOverlay>`,
  },
  {
    slug: 'context-menu-overlay',
    name: 'Custom Context Menu',
    description: 'Right-click menu replacement with custom actions and styling.',
    category: 'overlays',
    tags: ['menu', 'context', 'overlay'],
    code: `---
---
<div class="ctx-menu">
  <div class="ctx-group">
    <div class="ctx-item">Copy Link</div>
    <div class="ctx-item">Duplicate</div>
  </div>
  <hr />
  <div class="ctx-item danger">Delete Item</div>
</div>
<style>
  .ctx-menu { width: 200px; background: #111; border: 1px solid #333; border-radius: 10px; padding: 4px; box-shadow: 0 15px 40px rgba(0,0,0,0.6); position: fixed; top: 100px; left: 100px; z-index: 5000; }
  .ctx-item { padding: 8px 12px; font-size: 0.85rem; color: #e2e8f0; border-radius: 6px; cursor: pointer; transition: 0.2s; }
  .ctx-item:hover { background: #6366f1; color: #fff; }
  .danger:hover { background: #ef4444 !important; }
  hr { border: none; border-top: 1px solid #222; margin: 4px 0; }
</style>
`,
    usage: `<ContextMenuOverlay>Content</ContextMenuOverlay>`,
  },
  {
    slug: 'mobile-nav-overlay',
    name: 'Mobile Menu Overlay',
    description: 'Full-screen mobile drawer triggered by burger menu.',
    category: 'overlays',
    tags: ['mobile', 'navigation', 'overlay'],
    code: `---
---
<div class="mob-nav">
  <div class="mob-close">×</div>
  <nav class="mob-links">
    <a href="#">Home</a>
    <a href="#">Features</a>
    <a href="#">Pricing</a>
    <a href="#">Team</a>
  </nav>
</div>
<style>
  .mob-nav { position: fixed; inset: 0; background: #080b14; z-index: 4000; padding: 4rem 2rem; display: flex; flex-direction: column; }
  .mob-close { font-size: 3rem; color: #fff; align-self: flex-end; cursor: pointer; margin-bottom: 2rem; }
  .mob-links { display: flex; flex-direction: column; gap: 1.5rem; }
  .mob-links a { font-size: 2.2rem; font-weight: 800; color: #fff; text-decoration: none; transition: 0.2s; }
  .mob-links a:hover { color: #6366f1; padding-left: 10px; }
</style>
`,
    usage: `<MobileNavOverlay>Content</MobileNavOverlay>`,
  },
  {
    slug: 'floating-tray-actions',
    name: 'Bottom Action Tray',
    description: 'Compact set of floating actions locked to the bottom viewport.',
    category: 'overlays',
    tags: ['actions', 'overlay', 'mobile'],
    code: `---
---
<div class="tray">
  <button class="tray-btn">✏️ Edit</button>
  <div class="sep"></div>
  <button class="tray-btn">↗️ Share</button>
</div>
<style>
  .tray { position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%); background: #fff; border-radius: 100px; display: flex; align-items: center; padding: 4px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); z-index: 1000; border: 1px solid rgba(0,0,0,0.1); }
  .tray-btn { background: none; border: none; padding: 0.6rem 1.25rem; font-weight: 700; color: #000; cursor: pointer; font-size: 0.85rem; transition: 0.2s; }
  .tray-btn:hover { opacity: 0.6; }
  .sep { width: 1px; height: 20px; background: #eee; }
</style>
`,
    usage: `<FloatingTrayActions>Content</FloatingTrayActions>`,
  },
  {
    slug: 'toast-stack-overlay',
    name: 'Stacked Toast Center',
    description: 'Container for multiple toasts appearing simultaneously.',
    category: 'overlays',
    tags: ['toast', 'feedback', 'stack'],
    code: `---
---
<div class="toast-stack">
  <div class="toast-mini success">Profile updated!</div>
  <div class="toast-mini error">Failed to sync changes.</div>
</div>
<style>
  .toast-stack { position: fixed; top: 2rem; right: 2rem; z-index: 5000; display: flex; flex-direction: column; gap: 0.75rem; }
  .toast-mini { background: #111; color: #fff; padding: 0.75rem 1.5rem; border-radius: 10px; border-left: 4px solid #333; font-size: 0.85rem; box-shadow: 0 10px 30px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.05); }
  .success { border-left-color: #10b981; }
  .error { border-left-color: #ef4444; }
</style>
`,
    usage: `<ToastStackOverlay>Content</ToastStackOverlay>`,
  },
  {
    slug: 'exit-intent-overlay',
    name: 'Exit Intent Popup',
    description: 'Modal triggered when the user moves to close the tab.',
    category: 'overlays',
    tags: ['conversion', 'modal', 'overlay'],
    code: `---
---
<div class="exit-modal">
  <div class="exit-card">
    <h2>Wait! Before you go...</h2>
    <p>Get 20% off your first order when you join our mailing list.</p>
    <input type="email" placeholder="Your email" />
    <button>Get My Code</button>
  </div>
</div>
<style>
  .exit-modal { position: fixed; inset: 0; background: rgba(99,102,241,0.1); backdrop-filter: blur(15px); z-index: 6000; display: grid; place-items: center; }
  .exit-card { background: #fff; color: #000; padding: 3rem; border-radius: 30px; text-align: center; max-width: 450px; box-shadow: 0 20px 60px rgba(0,0,0,0.1); }
  h2 { font-weight: 900; font-size: 1.8rem; margin-bottom: 1rem; }
  p { color: #64748b; margin-bottom: 2rem; line-height: 1.5; }
  input { width: 100%; padding: 1rem; border: 1px solid #eee; border-radius: 12px; margin-bottom: 1rem; outline: none; font-size: 1rem; }
  button { width: 100%; padding: 1rem; background: #6366f1; color: #fff; border: none; border-radius: 12px; font-weight: 800; cursor: pointer; transition: 0.2s; }
  button:hover { background: #4f46e5; }
</style>
`,
    usage: `<ExitIntentOverlay>Content</ExitIntentOverlay>`,
  },
  {
    slug: 'tooltip-action-tray',
    name: 'Action Tooltip',
    description: 'Tooltip that contains interactive buttons instead of just text.',
    category: 'overlays',
    tags: ['tooltip', 'actions', 'ux'],
    code: `---
---
<div class="act-tip">
  <div class="tip-body">Action required</div>
  <div class="tip-btns"><button class="fix">Fix</button><button class="ign">Ignore</button></div>
</div>
<style>
  .act-tip { position: relative; background: #1e293b; border: 1px solid #334155; border-radius: 10px; padding: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); width: fit-content; }
  .tip-body { color: #fff; font-weight: 700; font-size: 0.8rem; margin-bottom: 8px; }
  .tip-btns { display: flex; gap: 8px; }
  button { padding: 4px 10px; font-size: 0.75rem; border-radius: 4px; border: none; cursor: pointer; font-weight: 600; }
  .fix { background: #6366f1; color: #fff; }
  .ign { background: #334155; color: #94a3b8; }
</style>
`,
    usage: `<TooltipActionTray>Content</TooltipActionTray>`,
  },
  {
    slug: 'splash-intro-overlay',
    name: 'Entrance Splash',
    description: 'Temporary full-screen intro animation for brand reveal.',
    category: 'overlays',
    tags: ['branding', 'animation', 'overlay'],
    code: `---
---
<div class="splash">
  <div class="logo-anim">Astro Components</div>
</div>
<style>
  .splash { position: fixed; inset: 0; background: #080b14; z-index: 9999; display: grid; place-items: center; animation: fade-out 1s forwards 2s; }
  .logo-anim { font-size: 3rem; font-weight: 900; color: #fff; animation: scale-pulse 1.5s infinite linear; background: linear-gradient(135deg, #6366f1, #c084fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  @keyframes fade-out { to { opacity: 0; pointer-events: none; } }
  @keyframes scale-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
</style>
`,
    usage: `<SplashIntroOverlay>Content</SplashIntroOverlay>`,
  },
  {
    slug: 'spotlight-indicator',
    name: 'Step Spotlight',
    description: 'Circular mask that highlights a specific element for onboarding.',
    category: 'overlays',
    tags: ['onboarding', 'highlight', 'overlay'],
    code: `---
---
<div class="spot-mask"></div>
<style>
  .spot-mask { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 500; clip-path: circle(60px at 50% 50%); pointer-events: none; }
</style>
`,
    usage: `<SpotlightIndicator>Content</SpotlightIndicator>`,
  },
  {
    slug: 'cookie-preferences-drawer',
    name: 'Cookie Preferences Drawer',
    description: 'Full GDPR-compliant cookie consent bottom drawer with category toggles for essential, analytics, and marketing cookies.',
    category: 'overlays',
    tags: ["overlays","cookie","gdpr","privacy","drawer"],
    featured: true,
    code: `---
/**
 * CookiePreferencesDrawer — GDPR/CCPA consent drawer with frosted glass styling and category toggles.
 * 
 * @param {string} title - Header text. Default is 'Privacy Preferences'.
 * @param {string} description - Explanation text for user privacy consent.
 */
interface Props {
  title?: string;
  description?: string;
}

const {
  title = 'Privacy & Cookie Settings',
  description = 'We use cookies and telemetry to improve performance, analyze usage, and customize your experience.',
} = Astro.props;

const categories = [
  { id: 'necessary', name: 'Strictly Necessary', desc: 'Required for core authentication and security.', locked: true },
  { id: 'analytics', name: 'Performance & Analytics', desc: 'Anonymous traffic data to improve component reliability.', locked: false },
  { id: 'marketing', name: 'Targeted Experience', desc: 'Personalized recommendations based on library interactions.', locked: false },
];
---

<aside class="cookie-drawer" role="dialog" aria-modal="true" aria-label={title} data-cookie-drawer>
  <div class="cookie-drawer__header">
    <div class="cookie-drawer__icon">🍪</div>
    <div class="cookie-drawer__titles">
      <h4 class="cookie-drawer__title">{title}</h4>
      <p class="cookie-drawer__desc">{description}</p>
    </div>
  </div>

  <div class="cookie-drawer__categories">
    {categories.map((cat) => (
      <div class="cookie-cat">
        <div class="cookie-cat__info">
          <span class="cookie-cat__name">{cat.name}</span>
          <span class="cookie-cat__desc">{cat.desc}</span>
        </div>
        <label class="switch">
          <input
            type="checkbox"
            checked={cat.locked}
            disabled={cat.locked}
            name={cat.id}
          />
          <span class="slider"></span>
        </label>
      </div>
    ))}
  </div>

  <div class="cookie-drawer__actions">
    <button type="button" class="btn btn--secondary" data-cookie-reject>Reject All</button>
    <button type="button" class="btn btn--primary" data-cookie-accept>Accept Selected</button>
  </div>
</aside>

<style>
  .cookie-drawer {
    position: fixed;
    bottom: 1.5rem;
    left: 1.5rem;
    right: 1.5rem;
    max-width: 520px;
    z-index: 100;
    margin: 0 auto;
    padding: 1.4rem;
    background: rgba(12, 12, 16, 0.94);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: var(--r-xl, 24px);
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.7);
    font-family: var(--font-sans, system-ui, sans-serif);
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .cookie-drawer__header {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
  }

  .cookie-drawer__icon {
    font-size: 1.8rem;
    line-height: 1;
  }

  .cookie-drawer__title {
    font-size: 1rem;
    font-weight: 800;
    color: var(--c-text-1, #ffffff);
    margin: 0 0 4px 0;
  }

  .cookie-drawer__desc {
    font-size: 0.8rem;
    color: var(--c-text-2, #a3a3a3);
    margin: 0;
    line-height: 1.45;
  }

  .cookie-drawer__categories {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 18px;
    padding: 10px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .cookie-cat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  .cookie-cat__name {
    display: block;
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--c-text-1, #ffffff);
  }

  .cookie-cat__desc {
    display: block;
    font-size: 0.72rem;
    color: var(--c-text-3, #737373);
  }

  /* Switch toggle */
  .switch {
    position: relative;
    display: inline-block;
    width: 38px;
    height: 22px;
    flex-shrink: 0;
  }
  .switch input { opacity: 0; width: 0; height: 0; }
  .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 34px;
    transition: 0.25s;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.25s;
  }
  input:checked + .slider {
    background-color: var(--c-primary-light, #d4a017);
  }
  input:checked + .slider:before {
    transform: translateX(16px);
  }
  input:disabled + .slider {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .cookie-drawer__actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  .btn {
    padding: 0.55rem 1.2rem;
    font-size: 0.82rem;
    font-weight: 700;
    border-radius: var(--r-md, 10px);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn--secondary {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--c-text-2, #a3a3a3);
  }
  .btn--secondary:hover {
    color: var(--c-text-1, #ffffff);
    background: rgba(255, 255, 255, 0.1);
  }

  .btn--primary {
    background: linear-gradient(135deg, #d4a017, #b8860b);
    border: none;
    color: #050505;
    box-shadow: 0 4px 14px rgba(184, 134, 11, 0.35);
  }
  .btn--primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(184, 134, 11, 0.45);
  }
</style>

<script>
  function setupCookieDrawers() {
    document.querySelectorAll('[data-cookie-drawer]').forEach((drawer) => {
      const dismiss = () => {
        (drawer as HTMLElement).style.transform = 'translateY(120%)';
        (drawer as HTMLElement).style.opacity = '0';
        setTimeout(() => drawer.remove(), 350);
      };

      drawer.querySelector('[data-cookie-reject]')?.addEventListener('click', dismiss);
      drawer.querySelector('[data-cookie-accept]')?.addEventListener('click', dismiss);
    });
  }

  setupCookieDrawers();
  document.addEventListener('astro:page-load', setupCookieDrawers);
</script>
`,
    usage: `<CookiePreferencesDrawer title="Cookie Preferences" description="Manage your privacy and data sharing settings." />`,
  },
  {
    slug: 'image-compare-slider',
    name: 'Image Compare Slider',
    description: 'Interactive before-and-after visual comparison slider with draggable separator handle and touch support.',
    category: 'overlays',
    tags: ["overlays","image","compare","slider","before-after"],
    featured: true,
    code: `---
/**
 * ImageCompareSlider — Interactive dual-image split compare slider with draggable separator bar.
 * 
 * @param {string} beforeImage - URL of original / before image.
 * @param {string} afterImage - URL of modified / after image.
 * @param {string} beforeLabel - Label tag. Default is 'Before'.
 * @param {string} afterLabel - Label tag. Default is 'After'.
 * @param {number} initialPosition - Starting separator position (0 to 100). Default is 50.
 */
interface Props {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  initialPosition?: number;
}

const {
  beforeImage = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
  afterImage = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
  beforeLabel = 'Before (Wireframe)',
  afterLabel = 'After (Production)',
  initialPosition = 50,
} = Astro.props;
---

<div class="img-compare" data-img-compare style={\`--pos: \${initialPosition}%;\`}>
  <div class="img-compare__layer img-compare__layer--after">
    <img src={afterImage} alt={afterLabel} loading="lazy" />
    <span class="img-compare__tag img-compare__tag--after">{afterLabel}</span>
  </div>

  <div class="img-compare__layer img-compare__layer--before" data-compare-before>
    <img src={beforeImage} alt={beforeLabel} loading="lazy" />
    <span class="img-compare__tag img-compare__tag--before">{beforeLabel}</span>
  </div>

  <div class="img-compare__handle" data-compare-handle aria-hidden="true">
    <div class="handle-line"></div>
    <div class="handle-button">
      <span>‹</span>
      <span>›</span>
    </div>
  </div>

  <input
    type="range"
    min="0"
    max="100"
    value={initialPosition}
    class="img-compare__range"
    aria-label="Drag to compare images"
    data-compare-range
  />
</div>

<style>
  .img-compare {
    position: relative;
    width: 100%;
    max-width: 600px;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    border-radius: var(--r-xl, 20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
    user-select: none;
    font-family: var(--font-sans, system-ui, sans-serif);
  }

  .img-compare__layer {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .img-compare__layer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  }

  .img-compare__layer--before {
    clip-path: polygon(0 0, var(--pos) 0, var(--pos) 100%, 0 100%);
  }

  .img-compare__tag {
    position: absolute;
    top: 14px;
    padding: 4px 10px;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(8px);
    color: #ffffff;
    font-size: 0.72rem;
    font-weight: 700;
    border-radius: var(--r-full, 9999px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    pointer-events: none;
  }

  .img-compare__tag--before { left: 14px; }
  .img-compare__tag--after { right: 14px; }

  .img-compare__handle {
    position: absolute;
    top: 0;
    bottom: 0;
    left: var(--pos);
    transform: translateX(-50%);
    pointer-events: none;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .handle-line {
    width: 2px;
    height: 100%;
    background: #ffffff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
  }

  .handle-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #ffffff;
    color: #050505;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 0.95rem;
    font-weight: 900;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
  }

  .img-compare__range {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: ew-resize;
    z-index: 10;
  }
</style>

<script>
  function setupImageCompare() {
    document.querySelectorAll('[data-img-compare]').forEach((comp) => {
      const range = comp.querySelector('[data-compare-range]') as HTMLInputElement;
      if (!range) return;

      range.addEventListener('input', () => {
        (comp as HTMLElement).style.setProperty('--pos', \`\${range.value}%\`);
      });
    });
  }

  setupImageCompare();
  document.addEventListener('astro:page-load', setupImageCompare);
</script>
`,
    usage: `<ImageCompareSlider beforeImage="/assets/before.webp" afterImage="/assets/after.webp" beforeLabel="Before" afterLabel="After" />`,
  },
  {
    slug: 'floating-feedback-widget',
    name: 'Floating Feedback Widget',
    description: 'Fixed bottom-right collapsible feedback trigger with emoji satisfaction ratings and text submission textarea.',
    category: 'overlays',
    tags: ["overlays","feedback","floating","widget","survey"],
    featured: false,
    code: `---
/**
 * FloatingFeedbackWidget — Fixed corner floating pill that expands into an interactive feedback survey card.
 * 
 * @param {string} title - Widget title. Default is 'Was this helpful?'.
 * @param {string} position - Screen anchor ('bottom-right' | 'bottom-left'). Default is 'bottom-right'.
 */
interface Props {
  title?: string;
  position?: 'bottom-right' | 'bottom-left';
}

const {
  title = 'Send Feedback',
  position = 'bottom-right',
} = Astro.props;
---

<div class:list={['fb-widget', \`fb-widget--\${position}\`]} data-feedback-widget>
  <button type="button" class="fb-widget__trigger" aria-label="Open feedback modal" data-fb-trigger>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
    <span>Feedback</span>
  </button>

  <div class="fb-widget__card" data-fb-card hidden>
    <div class="fb-widget__head">
      <h5 class="fb-widget__title">{title}</h5>
      <button type="button" class="fb-widget__close" aria-label="Close" data-fb-close>×</button>
    </div>

    <div class="fb-widget__emojis">
      <button type="button" class="emoji-btn" aria-label="Sad">🙁</button>
      <button type="button" class="emoji-btn" aria-label="Neutral">😐</button>
      <button type="button" class="emoji-btn emoji-btn--selected" aria-label="Happy">😊</button>
      <button type="button" class="emoji-btn" aria-label="Love it">🤩</button>
    </div>

    <textarea
      placeholder="Any details to share? (optional)"
      class="fb-widget__textarea"
      rows="2"
    ></textarea>

    <button type="button" class="fb-widget__send" data-fb-send>
      Send Feedback
    </button>
  </div>
</div>

<style>
  .fb-widget {
    position: fixed;
    z-index: 90;
    font-family: var(--font-sans, system-ui, sans-serif);
  }

  .fb-widget--bottom-right { bottom: 1.5rem; right: 1.5rem; }
  .fb-widget--bottom-left  { bottom: 1.5rem; left: 1.5rem; }

  .fb-widget__trigger {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0.6rem 1.1rem;
    background: rgba(14, 14, 18, 0.9);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: var(--r-full, 9999px);
    color: var(--c-text-1, #ffffff);
    font-size: 0.82rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    transition: transform 0.2s ease, border-color 0.2s ease;
  }

  .fb-widget__trigger:hover {
    transform: translateY(-2px);
    border-color: rgba(184, 134, 11, 0.4);
    color: var(--c-primary-light, #d4a017);
  }

  .fb-widget__card {
    position: absolute;
    bottom: calc(100% + 12px);
    right: 0;
    width: 280px;
    padding: 1.2rem;
    background: rgba(12, 12, 16, 0.95);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: var(--r-xl, 20px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .fb-widget__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .fb-widget__title {
    font-size: 0.88rem;
    font-weight: 800;
    color: var(--c-text-1, #ffffff);
    margin: 0;
  }

  .fb-widget__close {
    background: transparent;
    border: none;
    color: var(--c-text-3, #737373);
    font-size: 1.2rem;
    line-height: 1;
    cursor: pointer;
  }

  .fb-widget__emojis {
    display: flex;
    justify-content: space-between;
    gap: 6px;
  }

  .emoji-btn {
    flex: 1;
    font-size: 1.4rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--r-md, 10px);
    padding: 6px 0;
    cursor: pointer;
    transition: transform 0.2s ease, background 0.2s ease;
  }

  .emoji-btn:hover,
  .emoji-btn--selected {
    transform: scale(1.15);
    background: rgba(184, 134, 11, 0.2);
    border-color: rgba(184, 134, 11, 0.4);
  }

  .fb-widget__textarea {
    width: 100%;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--r-sm, 8px);
    color: var(--c-text-1, #ffffff);
    font-size: 0.8rem;
    padding: 8px;
    resize: none;
    outline: none;
    font-family: inherit;
  }

  .fb-widget__send {
    padding: 0.6rem;
    background: linear-gradient(135deg, #d4a017, #b8860b);
    border: none;
    border-radius: var(--r-sm, 8px);
    color: #050505;
    font-size: 0.8rem;
    font-weight: 800;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .fb-widget__send:hover {
    opacity: 0.9;
  }
</style>

<script>
  function setupFeedbackWidgets() {
    document.querySelectorAll('[data-feedback-widget]').forEach((widget) => {
      const trigger = widget.querySelector('[data-fb-trigger]');
      const card = widget.querySelector('[data-fb-card]') as HTMLElement;
      const close = widget.querySelector('[data-fb-close]');
      const send = widget.querySelector('[data-fb-send]');
      if (!trigger || !card) return;

      trigger.addEventListener('click', () => {
        card.hidden = !card.hidden;
      });

      close?.addEventListener('click', () => {
        card.hidden = true;
      });

      send?.addEventListener('click', () => {
        card.innerHTML = \`<p style="text-align:center;font-size:0.85rem;color:#10b981;font-weight:700;margin:1rem 0;">✓ Thank you for your feedback!</p>\`;
        setTimeout(() => { card.hidden = true; }, 2000);
      });
    });
  }

  setupFeedbackWidgets();
  document.addEventListener('astro:page-load', setupFeedbackWidgets);
</script>
`,
    usage: `<FloatingFeedbackWidget placeholder="How can we improve this experience?" />`,
  },
];
