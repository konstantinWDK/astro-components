// src/data/registry/buttons.ts
import type { ComponentDoc } from './types';
import { source } from './sources';

export const buttons: ComponentDoc[] = [
  {
    slug: 'glass-button',
    name: 'Glass Button',
    description: 'A premium button with glassmorphism effect, gradient border and smooth hover animations.',
    category: 'buttons',
    tags: ['button', 'glass', 'gradient', 'animated'],
    featured: true,
    code: source('buttons/GlassButton.astro'),
    usage: `---
import { GlassButton } from 'astro-component-kit';
---

<div class="button-group">
  <GlassButton variant="primary">Explore Now</GlassButton>
  <GlassButton variant="secondary">View Docs</GlassButton>
  <GlassButton variant="ghost">Learn More</GlassButton>
</div>`,
  },
  {
    slug: 'glow-button',
    name: 'Glow Button',
    description: 'A button with an animated glow effect that pulsates on hover.',
    category: 'buttons',
    tags: ['button', 'glow', 'animated', 'neon'],
    code: source('buttons/GlowButton.astro'),
    usage: `---
import { GlowButton } from 'astro-component-kit';
---

<GlowButton 
  color="#6366f1" 
  size="lg"
>
  Activate System
</GlowButton>`,
  },
  {
    slug: 'neumorphic-button',
    name: 'Neumorphic Button',
    description: 'A premium Soft UI button with beveled surface gradients and hue-tinted shadows.',
    category: 'buttons',
    tags: ['button', 'neumorphism', 'soft ui'],
    code: source('buttons/NeumorphicButton.astro'),
    usage: `---
import { NeumorphicButton } from 'astro-component-kit';
---

<NeumorphicButton 
  baseColor="#6366f1" 
  variant="convex" 
  size="lg"
>
  Confirm Action
</NeumorphicButton>`,
  },
  {
    slug: 'cyberpunk-button',
    name: 'Cyberpunk Button',
    description: 'A glitchy, neon-styled button inspired by futuristic sci-fi aesthetics.',
    category: 'buttons',
    tags: ['button', 'cyberpunk', 'glitch', 'neon'],
    code: source('buttons/CyberpunkButton.astro'),
    usage: `---
import { CyberpunkButton } from 'astro-component-kit';
---

<CyberpunkButton 
  label="READY" 
  primaryColor="#ff003c" 
  secondaryColor="#00e0ff" 
  size="lg"
>
  LAUNCH SYSTEM
</CyberpunkButton>`,
  },
  {
    slug: 'pulse-button',
    name: 'Pulse Button',
    description: 'A button with a persistent circular pulse effect to draw attention.',
    category: 'buttons',
    tags: ['button', 'animated', 'attention'],
    code: source('buttons/PulseButton.astro'),
    usage: `---
import { PulseButton } from 'astro-component-kit';
---

<PulseButton 
  color="#6366f1" 
  variant="primary" 
  size="lg"
>
  Start Process
</PulseButton>`,
  },
  {
    slug: 'shiny-button',
    name: 'Shiny Button',
    description: 'A button with a metallic shine effect that sweeps across on hover.',
    category: 'buttons',
    tags: ['button', 'shine', 'animated'],
    code: source('buttons/ShinyButton.astro'),
    usage: `---
import { ShinyButton } from 'astro-component-kit';
---

<ShinyButton 
  href="#" 
  variant="primary" 
  size="lg"
>
  Claim Special Offer
</ShinyButton>`,
  },
  {
    slug: 'retro-arcade-button',
    name: 'Retro Arcade Button',
    description: 'Classic 8-bit style button with sharp pixelated edges and vibrant colors.',
    category: 'buttons',
    tags: ['button', 'retro', '8-bit', 'game'],
    code: source('buttons/RetroArcadeButton.astro'),
    usage: `<RetroArcadeButton href="#" type="button" variant="primary" size="md" disabled={false}>Press Start</RetroArcadeButton>`,
  },
  {
    slug: '3d-push-button',
    name: '3D Push Button',
    description: 'A button that physically sinks into the interface when clicked.',
    category: 'buttons',
    tags: ['button', '3d', 'interactive'],
    code: source('buttons/ThreeDPushButton.astro'),
    usage: `<3dPushButton href="#" type="button" color="#6366f1" size="md" disabled={false}>Push Me</3dPushButton>`,
  },
  {
    slug: 'loading-button',
    name: 'Loading Spinner Button',
    description: 'A button that shows a built-in spinner when in a loading state.',
    category: 'buttons',
    tags: ['button', 'loading', 'state'],
    code: source('buttons/LoadingButton.astro'),
    usage: `<LoadingButton isLoading={false} href="#" type="button" variant="primary" size="md">Submit Form</LoadingButton>`,
  },
  {
    slug: 'shimmer-button',
    name: 'Shimmer Button',
    description: 'A highly elegant button with a moving shimmer outline.',
    category: 'buttons',
    tags: ['button', 'shimmer', 'elegant'],
    code: source('buttons/ShimmerButton.astro'),
    usage: `<ShimmerButton href="#" type="button" variant="primary" size="md" disabled={false}>Unlock Premium</ShimmerButton>`,
  },
  {
    slug: 'magnetic-button',
    name: 'Magnetic Button',
    description: 'A button that follows the cursor slightly when hovered (requires component-level JS).',
    category: 'buttons',
    tags: ['button', 'interactive', 'magnetic'],
    code: source('buttons/MagneticButton.astro'),
    usage: `<MagneticButton href="#" type="button" variant="primary" size="md">Interact</MagneticButton>`,
  },
  {
    slug: 'double-border-button',
    name: 'Double Border Button',
    description: 'Elegant button with nested borders and smooth scaling.',
    category: 'buttons',
    tags: ['button', 'minimalist', 'border'],
    code: source('buttons/DoubleBorderButton.astro'),
    usage: `<DoubleBorderButton href="#" type="button" variant="primary" size="md" disabled={false}>Sign Up</DoubleBorderButton>`,
  },
  {
    slug: 'animated-icon-button',
    name: 'Animated Icon Button',
    description: 'A premium button generated dynamically from codebase.',
    category: 'buttons',
    tags: ['button', 'premium'],
    code: source('buttons/AnimatedIconButton.astro'),
    usage: `<AnimatedIconButton href="#" type="button" variant="primary" size="md">Click Me</AnimatedIconButton>`,
  },
  {
    slug: 'border-draw-button',
    name: 'Border Draw Button',
    description: 'A premium button generated dynamically from codebase.',
    category: 'buttons',
    tags: ['button', 'premium'],
    code: source('buttons/BorderDrawButton.astro'),
    usage: `<BorderDrawButton href="#" type="button" variant="primary" size="md">Click Me</BorderDrawButton>`,
  },
  {
    slug: 'ghost-outline-button',
    name: 'Ghost Outline Button',
    description: 'A premium button generated dynamically from codebase.',
    category: 'buttons',
    tags: ['button', 'premium'],
    code: source('buttons/GhostOutlineButton.astro'),
    usage: `<GhostOutlineButton href="#" type="button" variant="primary" size="md">Click Me</GhostOutlineButton>`,
  },
  {
    slug: 'liquid-button',
    name: 'Liquid Button',
    description: 'A premium button generated dynamically from codebase.',
    category: 'buttons',
    tags: ['button', 'premium'],
    code: source('buttons/LiquidButton.astro'),
    usage: `<LiquidButton href="#" type="button" variant="primary" size="md">Click Me</LiquidButton>`,
  },
  {
    slug: 'minimal-pill-button',
    name: 'Minimal Pill Button',
    description: 'A premium button generated dynamically from codebase.',
    category: 'buttons',
    tags: ['button', 'premium'],
    code: source('buttons/MinimalPillButton.astro'),
    usage: `<MinimalPillButton href="#" type="button" variant="primary" size="md">Click Me</MinimalPillButton>`,
  },
  {
    slug: 'retro-shadow-button',
    name: 'Retro Shadow Button',
    description: 'A premium button generated dynamically from codebase.',
    category: 'buttons',
    tags: ['button', 'premium'],
    code: source('buttons/RetroShadowButton.astro'),
    usage: `<RetroShadowButton href="#" type="button" variant="primary" size="md">Click Me</RetroShadowButton>`,
  },
  {
    slug: 'tilt-glow-button',
    name: 'Tilt Glow Button',
    description: 'A premium button generated dynamically from codebase.',
    category: 'buttons',
    tags: ['button', 'premium'],
    code: source('buttons/TiltGlowButton.astro'),
    usage: `<TiltGlowButton href="#" type="button" variant="primary" size="md">Click Me</TiltGlowButton>`,
  },
  {
    slug: 'ripple-button',
    name: 'Ripple Button',
    description: 'A sleek interactive button that triggers localized expanding ripple rings on click.',
    category: 'buttons',
    tags: ["button","ripple","interactive","micro-interaction"],
    featured: true,
    code: source('buttons/RippleButton.astro'),
    usage: `<RippleButton variant="primary" size="md">Click Ripple</RippleButton>`,
  },
  {
    slug: 'neon-border-button',
    name: 'Neon Border Button',
    description: 'A futuristic cyber button with rotating conical neon laser border and glow reflection.',
    category: 'buttons',
    tags: ["button","neon","cyberpunk","glow","border"],
    featured: true,
    code: source('buttons/NeonBorderButton.astro'),
    usage: `<NeonBorderButton variant="cyan" size="md">Neon Action</NeonBorderButton>`,
  },
  {
    slug: 'slide-reveal-button',
    name: 'Slide Reveal Button',
    description: 'A dual-state button that slides primary text out and reveals hidden secondary action text or icons.',
    category: 'buttons',
    tags: ["button","slide","reveal","animation","action"],
    featured: false,
    code: source('buttons/SlideRevealButton.astro'),
    usage: `<SlideRevealButton label="Download File" revealText="Start (.zip)" variant="primary" />`,
  },
];
