// src/data/registry/feedback.ts
import type { ComponentDoc } from './types';
import { source } from './sources';

export const feedback: ComponentDoc[] = [
  {
    slug: 'animated-checkmark',
    name: 'Success Checkmark',
    description: 'Animated SVG success icon.',
    category: 'feedback',
    tags: ["icon","success"],
    featured: true,
    code: source('feedback/AnimatedCheckmark.astro'),
    usage: `<AnimatedCheckmark size={64} />`,
  },
  {
    slug: 'badge',
    name: 'Badge',
    description: 'Versatile status tags.',
    category: 'feedback',
    tags: ["badge","tag"],
    featured: true,
    code: source('feedback/Badge.astro'),
    usage: `---
import { Badge } from 'astro-component-kit';
---

<div class="flex-row gap-2">
  <Badge variant="success" dot pulse>System Online</Badge>
  <Badge variant="warning">Maintenance</Badge>
  <Badge variant="danger" dot>Critical Error</Badge>
  <Badge variant="info">New Update</Badge>
</div>`,
  },
  {
    slug: 'circle-progress',
    name: 'Circle Gauge',
    description: 'Circular percentage-of-completion chart.',
    category: 'feedback',
    tags: ["progress","circle"],
    featured: true,
    code: source('feedback/CircleProgress.astro'),
    usage: `<CircleProgress percent={75} />`,
  },
  {
    slug: 'confetti-feedback',
    name: 'Confetti Success',
    description: 'Feedback with falling confetti celebration.',
    category: 'feedback',
    tags: ["feedback","animation"],
    featured: true,
    code: source('feedback/ConfettiFeedback.astro'),
    usage: `<ConfettiFeedback label="Mission Accomplished" />`,
  },
  {
    slug: 'cyber-glitch-alert',
    name: 'Glitch Alert',
    description: 'Loud cyberpunk-style alert.',
    category: 'feedback',
    tags: ["alert","cyber"],
    featured: true,
    code: source('feedback/CyberGlitchAlert.astro'),
    usage: `<CyberGlitchAlert message="SYSTEM BREACH" />`,
  },
  {
    slug: 'empty-state-card',
    name: 'Empty State',
    description: 'Placeholder for missing content or results.',
    category: 'feedback',
    tags: ["placeholder","empty"],
    featured: true,
    code: source('feedback/EmptyStateCard.astro'),
    usage: `<EmptyStateCard icon="🔍" title="No Matches" message="Try again." ctaLabel="Reset" />`,
  },
  {
    slug: 'glass-alert',
    name: 'Glass Alert',
    description: 'Translucent feedback bar.',
    category: 'feedback',
    tags: ["alert","glass"],
    featured: true,
    code: source('feedback/GlassAlert.astro'),
    usage: `---
import { GlassAlert } from 'astro-component-kit';
---

<div class="stack-v gap-4">
  <GlassAlert type="info" title="System Update">
    A new version of the dashboard is available. Please refresh to see changes.
  </GlassAlert>

  <GlassAlert type="success" title="Payment Successful">
    Your subscription has been renewed for another month.
  </GlassAlert>
  
  <GlassAlert type="error" title="Connection Lost">
    We couldn't reach the server. Checking your internet connection...
  </GlassAlert>
</div>`,
  },
  {
    slug: 'glass-modal',
    name: 'Glass Modal',
    description: 'Premium overlay confirmation box.',
    category: 'feedback',
    tags: ["modal","glass"],
    featured: true,
    code: source('feedback/GlassModal.astro'),
    usage: `<GlassModal id="m1" title="Delete Account" confirmLabel="Delete">Proceed with caution.</GlassModal>`,
  },
  {
    slug: 'glass-progress',
    name: 'Glass Progress',
    description: 'Linear progress bar with glass effect.',
    category: 'feedback',
    tags: ["progress","bar"],
    featured: true,
    code: source('feedback/GlassProgress.astro'),
    usage: `---
import { GlassProgress } from 'astro-component-kit';
---

<div class="progress-stack">
  <div class="flex-between mb-2">
    <span>Uploading assets...</span>
    <span>75%</span>
  </div>
  <GlassProgress value={75} />
  
  <div class="flex-between mt-4 mb-2">
    <span>Processing data...</span>
    <span>40%</span>
  </div>
  <GlassProgress value={40} />
</div>`,
  },
  {
    slug: 'indicator-badge-minimal',
    name: 'Notification Dot',
    description: 'Corner-floating notification indicator.',
    category: 'feedback',
    tags: ["indicator","dot"],
    featured: true,
    code: source('feedback/IndicatorBadgeMinimal.astro'),
    usage: `<IndicatorBadgeMinimal color="#ef4444" position="top-right" pulse><button>Inbox</button></IndicatorBadgeMinimal>`,
  },
  {
    slug: 'neon-spinner',
    name: 'Neon Spinner',
    description: 'Glow-style loading spinner.',
    category: 'feedback',
    tags: ["loading","spinner"],
    featured: true,
    code: source('feedback/NeonSpinner.astro'),
    usage: `<NeonSpinner size="md" />`,
  },
  {
    slug: 'pulse-dot',
    name: 'Pulse Dot',
    description: 'Status label with pulsing effect.',
    category: 'feedback',
    tags: ["indicator","status"],
    featured: true,
    code: source('feedback/PulseDot.astro'),
    usage: `<PulseDot label="Recording" color="#ef4444" />`,
  },
  {
    slug: 'rating-pill',
    name: 'Rating Pill',
    description: 'Compact numeric score badge.',
    category: 'feedback',
    tags: ["rating","score"],
    featured: true,
    code: source('feedback/RatingPill.astro'),
    usage: `<RatingPill score={4.8} />`,
  },
  {
    slug: 'shake-error-group',
    name: 'Shake Feedback',
    description: 'Horizontal shake indicator for errors.',
    category: 'feedback',
    tags: ["error","feedback"],
    featured: true,
    code: source('feedback/ShakeErrorGroup.astro'),
    usage: `<ShakeErrorGroup message="Wrong password" active />`,
  },
  {
    slug: 'simple-tooltip',
    name: 'Simple Tooltip',
    description: 'Hover-based hint message.',
    category: 'feedback',
    tags: ["tooltip","hint"],
    featured: true,
    code: source('feedback/SimpleTooltip.astro'),
    usage: `<SimpleTooltip text="Edit profile" position="top"><button>Settings</button></SimpleTooltip>`,
  },
  {
    slug: 'skeleton-list',
    name: 'Skeleton Loader',
    description: 'Placeholder content for loading feeds.',
    category: 'feedback',
    tags: ["loading","skeleton"],
    featured: true,
    code: source('feedback/SkeletonList.astro'),
    usage: `<SkeletonList count={4} />`,
  },
  {
    slug: 'spotlight',
    name: 'Focus Spotlight',
    description: 'Highlighting effect for specific elements.',
    category: 'feedback',
    tags: ["focus","highlight"],
    featured: true,
    code: source('feedback/Spotlight.astro'),
    usage: `<Spotlight active opacity={0.8}><div style="padding: 20px; background: #fff; color: #000">Focused Content</div></Spotlight>`,
  },
  {
    slug: 'step-progress',
    name: 'Step Tracker',
    description: 'Multi-stage progress tracker.',
    category: 'feedback',
    tags: ["stepper","workflow"],
    featured: true,
    code: source('feedback/StepProgress.astro'),
    usage: `<StepProgress activeIndex={1} steps={[{label: "Step 1"}, {label: "Step 2"}, {label: "Step 3"}]} />`,
  },
  {
    slug: 'toast-notif',
    name: 'Toast Message',
    description: 'Transient snackbar notification.',
    category: 'feedback',
    tags: ["toast","notification"],
    featured: true,
    code: source('feedback/ToastNotif.astro'),
    usage: `<ToastNotif message="File uploaded" variant="success" />`,
  },
  {
    slug: 'typing-indicator',
    name: 'Typing Dots',
    description: 'Classic messenger-style typing indicator.',
    category: 'feedback',
    tags: ["loading","typing"],
    featured: true,
    code: source('feedback/TypingIndicator.astro'),
    usage: `<TypingIndicator />`,
  },
  {
    slug: 'progress-ring-counter',
    name: 'Progress Ring Counter',
    description: 'Circular SVG progress gauge with smooth stroke dashoffset transition, customizable track colors, and centered value readout.',
    category: 'feedback',
    tags: ["feedback","progress","ring","circular","meter"],
    featured: true,
    code: source('feedback/ProgressRingCounter.astro'),
    usage: `<ProgressRingCounter value={78} max={100} size={110} strokeWidth={8} color="var(--c-primary)" label="Score" />`,
  },
  {
    slug: 'toast-notification-group',
    name: 'Toast Notification Group',
    description: 'A modern stacked toast notification tray supporting success, error, warning, and info alert toasts with dismiss actions.',
    category: 'feedback',
    tags: ["feedback","toast","notification","alert","stack"],
    featured: true,
    code: source('feedback/ToastNotificationGroup.astro'),
    usage: `<ToastNotificationGroup toasts={[{ id: '1', title: 'Saved', message: 'Project configurations synchronized.', variant: 'success' }]} />`,
  },
];
