// src/data/registry/buttons.ts
import type { ComponentDoc } from './types';

export const buttons: ComponentDoc[] = [
  {
    slug: 'glass-button',
    name: 'Glass Button',
    description: 'A premium button with glassmorphism effect, gradient border and smooth hover animations.',
    category: 'buttons',
    tags: ['button', 'glass', 'gradient', 'animated'],
    featured: true,
    code: `---
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const { href, type = 'button', variant = 'primary', size = 'md', disabled = false } = Astro.props;
const Tag = href ? 'a' : 'button';
---
<Tag 
  href={href} 
  type={href ? undefined : type}
  disabled={disabled} 
  class={\`glass-btn glass-btn--\${variant} glass-btn--\${size}\`}
>
  <span class="glass-btn__shimmer"></span>
  <span class="glass-btn__content">
    <slot />
  </span>
</Tag>

<style>
  .glass-btn {
    --btn-bg: rgba(255, 255, 255, 0.05);
    --btn-border: rgba(255, 255, 255, 0.1);
    --btn-text: var(--c-text-1, #d4d4d4);
    --btn-glow: rgba(184, 134, 11, 0);
    
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    font-family: var(--font-sans, inherit);
    font-weight: 600;
    letter-spacing: 0.02em;
    border-radius: var(--r-md, 12px);
    cursor: pointer;
    text-decoration: none;
    border: 1px solid var(--btn-border);
    background: var(--btn-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    user-select: none;
    overflow: hidden;
    color: var(--btn-text);
  }

  /* Shimmer Effect */
  .glass-btn__shimmer {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.05),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
    pointer-events: none;
  }

  .glass-btn:hover:not(:disabled) .glass-btn__shimmer {
    transform: translateX(100%);
  }

  /* Glass Border Glow */
  .glass-btn::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent, rgba(255,255,255,0.05));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  .glass-btn:hover:not(:disabled)::after {
    opacity: 1;
  }

  .glass-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px -10px var(--btn-glow);
  }

  .glass-btn:active:not(:disabled) {
    transform: translateY(0) scale(0.98);
  }

  .glass-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    filter: grayscale(1);
  }

  /* Variants */
  .glass-btn--primary {
    --btn-bg: linear-gradient(135deg, rgba(184, 134, 11, 0.7), rgba(212, 160, 23, 0.7));
    --btn-text: #0a0a0a;
    --btn-glow: rgba(184, 134, 11, 0.4);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .glass-btn--secondary {
    --btn-bg: rgba(255, 255, 255, 0.03);
    --btn-glow: rgba(255, 255, 255, 0.1);
  }

  .glass-btn--ghost {
    --btn-bg: transparent;
    --btn-text: var(--c-primary-light, #d4a017);
    --btn-border: rgba(184, 134, 11, 0.25);
    --btn-glow: rgba(184, 134, 11, 0.15);
    backdrop-filter: none;
  }

  .glass-btn--ghost:hover:not(:disabled) {
    background: rgba(184, 134, 11, 0.08);
    border-color: rgba(184, 134, 11, 0.4);
  }

  /* Sizes */
  .glass-btn--sm { padding: 0.45rem 1.1rem; font-size: 0.85rem; }
  .glass-btn--md { padding: 0.75rem 1.6rem; font-size: 0.95rem; }
  .glass-btn--lg { padding: 1.1rem 2.4rem; font-size: 1.1rem; }
</style>
`,
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
    code: `---
interface Props {
  color?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const { color = '#6366f1', href, type = 'button', size = 'md', disabled = false } = Astro.props;
const Tag = href ? 'a' : 'button';
---
<Tag 
  href={href} 
  type={href ? undefined : type}
  disabled={disabled}
  class={\`glow-btn glow-btn--\${size}\`} 
  style={\`--btn-color: \${color}\`}
>
  <span class="glow-btn__content"><slot /></span>
</Tag>

<style>
  .glow-btn {
    --glow-color: var(--btn-color);
    --glow-opacity: 0.4;
    
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-sans, inherit);
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #fff;
    background: var(--btn-color);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    user-select: none;
    z-index: 1;
    
    /* Layered Glow */
    box-shadow: 
      0 0 10px color-mix(in srgb, var(--glow-color), transparent 60%),
      0 0 20px color-mix(in srgb, var(--glow-color), transparent 80%);
  }

  .glow-btn__content {
    position: relative;
    z-index: 2;
  }

  .glow-btn::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: var(--btn-color);
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    filter: blur(8px);
    transition: opacity 0.3s ease;
  }

  .glow-btn::after {
    content: '';
    position: absolute;
    inset: -8px;
    background: var(--btn-color);
    border-radius: 14px;
    opacity: 0;
    filter: blur(25px);
    transition: opacity 0.4s ease;
    z-index: -2;
  }

  .glow-btn:hover:not(:disabled) {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 
      0 0 20px color-mix(in srgb, var(--glow-color), transparent 40%),
      0 0 40px color-mix(in srgb, var(--glow-color), transparent 70%);
  }

  .glow-btn:hover:not(:disabled)::before {
    opacity: 0.4;
  }

  .glow-btn:hover:not(:disabled)::after {
    opacity: 0.7;
    animation: animate-glow 2.5s ease-in-out infinite;
  }

  .glow-btn:active:not(:disabled) {
    transform: translateY(1px) scale(0.98);
  }

  .glow-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(1);
    box-shadow: none;
  }

  @keyframes animate-glow {
    0%, 100% { opacity: 0.5; filter: blur(20px); transform: scale(1); }
    50% { opacity: 0.8; filter: blur(30px); transform: scale(1.1); }
  }

  /* Sizes */
  .glow-btn--sm { padding: 0.5rem 1.4rem; font-size: 0.75rem; }
  .glow-btn--md { padding: 0.8rem 2.2rem; font-size: 0.875rem; }
  .glow-btn--lg { padding: 1.1rem 3rem; font-size: 1rem; }
</style>

`,
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
    code: `---
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  baseColor?: string;
  variant?: 'convex' | 'concave';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const { 
  href, 
  type = 'button', 
  baseColor = 'var(--c-bg-2, #111827)',
  variant = 'convex',
  size = 'md',
  disabled = false 
} = Astro.props;

const Tag = href ? 'a' : 'button';
---

<Tag 
  href={href} 
  type={href ? undefined : type}
  disabled={disabled}
  class={\`neu-btn neu-btn--\${size} neu-btn--\${variant}\`}
  style={\`--base-color: \${baseColor}\`}
>
  <span class="neu-btn__surface">
    <slot />
  </span>
</Tag>

<style>
  .neu-btn {
    /* Design Tokens */
    --distance: 8px;
    --blur: 16px;
    --shadow-opacity: 0.4;
    --highlight-opacity: 0.05;
    
    /* Derived Colors */
    --shadow-dark: rgba(0, 0, 0, var(--shadow-opacity));
    --shadow-light: rgba(255, 255, 255, var(--highlight-opacity));
    --surface-light: color-mix(in srgb, var(--base-color), white 4%);
    --surface-dark: color-mix(in srgb, var(--base-color), black 4%);
    
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    font-family: var(--font-sans, inherit);
    font-weight: 700;
    letter-spacing: 0.3px;
    color: var(--c-text-1, #f1f5f9);
    border-radius: var(--r-xl, 20px);
    user-select: none;
    white-space: nowrap;
    outline: none;
  }

  .neu-btn__surface {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: inherit;
    border-radius: inherit;
    background: linear-gradient(145deg, var(--surface-light), var(--surface-dark));
    z-index: 2;
    transition: background 0.4s ease, box-shadow 0.4s ease;
  }

  /* Rim Light highlight */
  .neu-btn__surface::before {
    content: '';
    position: absolute;
    inset: 0.5px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(135deg, rgba(255,255,255,0.08), transparent 50%, rgba(0,0,0,0.1));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
  }

  /* Convex Variant (Default) */
  .neu-btn--convex {
    box-shadow: 
      var(--distance) var(--distance) var(--blur) var(--shadow-dark),
      calc(var(--distance) * -0.6) calc(var(--distance) * -0.6) var(--blur) var(--shadow-light);
  }

  /* Concave Variant */
  .neu-btn--concave .neu-btn__surface {
    background: var(--base-color);
    box-shadow: 
      inset var(--distance) var(--distance) var(--blur) var(--shadow-dark),
      inset calc(var(--distance) * -0.5) calc(var(--distance) * -0.5) var(--blur) var(--shadow-light);
  }

  /* Hover States */
  .neu-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    filter: brightness(1.08);
  }

  .neu-btn--convex:hover:not(:disabled) {
    box-shadow: 
      calc(var(--distance) * 1.4) calc(var(--distance) * 1.4) calc(var(--blur) * 1.4) var(--shadow-dark),
      calc(var(--distance) * -0.8) calc(var(--distance) * -0.8) calc(var(--blur) * 1.4) var(--shadow-light);
  }

  /* Active/Pressed States */
  .neu-btn:active:not(:disabled) {
    transform: translateY(0) scale(0.97);
  }

  .neu-btn--convex:active:not(:disabled) .neu-btn__surface {
    background: var(--base-color);
    box-shadow: 
      inset calc(var(--distance) * 0.5) calc(var(--distance) * 0.5) calc(var(--blur) * 0.5) var(--shadow-dark),
      inset calc(var(--distance) * -0.3) calc(var(--distance) * -0.3) calc(var(--blur) * 0.5) var(--shadow-light);
  }

  .neu-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    filter: grayscale(1);
    box-shadow: none;
  }

  /* Sizes */
  .neu-btn--sm { padding: 0.5rem 1.4rem; font-size: 0.85rem; --distance: 4px; --blur: 8px; }
  .neu-btn--md { padding: 0.85rem 2.4rem; font-size: 1rem; }
  .neu-btn--lg { padding: 1.2rem 3.5rem; font-size: 1.2rem; --distance: 12px; --blur: 24px; }

  /* Color scheme adjustments */
  @media (prefers-color-scheme: light) {
    .neu-btn {
      --shadow-opacity: 0.15;
      --highlight-opacity: 0.8;
      --shadow-dark: rgba(163, 177, 198, var(--shadow-opacity));
      --shadow-light: rgba(255, 255, 255, var(--highlight-opacity));
      color: #374151;
    }
  }
</style>

`,
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
    code: `---
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  primaryColor?: string;
  secondaryColor?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string; // Used for glitch effect text
}

const { 
  href, 
  type = 'button', 
  primaryColor = '#ff003c', 
  secondaryColor = '#00e0ff',
  size = 'md',
  label = "READY"
} = Astro.props;

const Tag = href ? 'a' : 'button';
---

<Tag 
  href={href} 
  type={href ? undefined : type}
  class={\`cyber-btn cyber-btn--\${size}\`}
  style={\`--primary-color: \${primaryColor}; --secondary-color: \${secondaryColor};\`}
  data-text={label}
>
  <span class="cyber-btn__inner">
    <slot>{label}</slot>
  </span>
  <span class="cyber-btn__glitch"></span>
  <span class="cyber-btn__tag">R25</span>
</Tag>

<style>
  .cyber-btn {
    --glitch-width: 4px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-color);
    color: #fff;
    border: none;
    font-family: var(--font-sans, 'Inter', sans-serif);
    font-weight: 800;
    text-transform: uppercase;
    font-style: italic;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s;
    clip-path: polygon(-10% 0, 100% 0, 100% 65%, 90% 103%, 0 103%, -10% 70%);
    user-select: none;
    white-space: nowrap;
  }

  .cyber-btn__inner {
    position: relative;
    z-index: 2;
    padding: 0.8rem 2.2rem;
    display: block;
  }

  /* Glitch Layers */
  .cyber-btn::before,
  .cyber-btn::after,
  .cyber-btn__glitch {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    z-index: 1;
  }

  .cyber-btn::before {
    background: var(--secondary-color);
    clip-path: polygon(0 0, 100% 0, 100% 5%, 0 5%);
    transform: translate(-4px, -2px);
  }

  .cyber-btn::after {
    background: #f3f3f3;
    clip-path: polygon(0 95%, 100% 95%, 100% 100%, 0 100%);
    transform: translate(4px, 2px);
    color: #000;
  }

  .cyber-btn__tag {
    position: absolute;
    padding: 1px 4px;
    letter-spacing: 1px;
    line-height: 1;
    bottom: -2px;
    right: 5%;
    font-weight: 400;
    font-size: 0.6rem;
    background: #000;
    color: var(--secondary-color);
    z-index: 3;
    font-style: normal;
  }

  /* Hover Animations */
  .cyber-btn:hover {
    transform: scale(1.03);
    background: var(--primary-color);
    box-shadow: 10px 0px 0px var(--secondary-color);
  }

  .cyber-btn:hover::before,
  .cyber-btn:hover::after,
  .cyber-btn:hover .cyber-btn__glitch {
    opacity: 1;
    animation: glitch 0.3s infinite;
  }

  .cyber-btn:hover::before {
    animation-direction: alternate-reverse;
  }

  .cyber-btn:active {
    transform: scale(0.98);
    filter: brightness(1.2);
  }

  @keyframes glitch {
    0% { clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); transform: translate(0); }
    20% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); transform: translate(-5px); }
    40% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); transform: translate(5px); }
    60% { clip-path: polygon(0 80%, 100% 80%, 100% 90%, 0 90%); transform: translate(-5px); }
    80% { clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); transform: translate(5px); }
    100% { clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%); transform: translate(0); }
  }

  /* Sizes */
  .cyber-btn--sm .cyber-btn__inner { padding: 0.5rem 1.4rem; font-size: 0.85rem; }
  .cyber-btn--md .cyber-btn__inner { padding: 0.8rem 2.2rem; font-size: 1.05rem; }
  .cyber-btn--lg .cyber-btn__inner { padding: 1.1rem 3rem; font-size: 1.25rem; }
</style>

`,
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
    code: `---
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  disabled?: boolean;
}

const { 
  href, 
  type = 'button', 
  variant = 'primary', 
  size = 'md',
  color = '#8b5cf6',
  disabled = false 
} = Astro.props;

const Tag = href ? 'a' : 'button';
---

<Tag 
  href={href} 
  type={href ? undefined : type}
  disabled={disabled}
  class={\`pulse-btn pulse-btn--\${variant} pulse-btn--\${size}\`}
  style={\`--pulse-color: \${color}\`}
>
  <slot />
</Tag>

<style>
  .pulse-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 1.6rem;
    background: var(--pulse-color);
    color: white;
    border: none;
    border-radius: var(--r-full, 9999px);
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    user-select: none;
    white-space: nowrap;
    font-family: var(--font-sans, inherit);
    isolation: isolate;
    box-shadow: 0 10px 26px -18px color-mix(in srgb, var(--pulse-color), black 10%);
  }

  .pulse-btn::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: 0 0 0 0 var(--pulse-color);
    animation: pulse-ring 2s infinite;
    z-index: -1;
    pointer-events: none;
  }

  @keyframes pulse-ring {
    0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--pulse-color), transparent 30%); }
    70% { box-shadow: 0 0 0 15px color-mix(in srgb, var(--pulse-color), transparent 100%); }
    100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--pulse-color), transparent 100%); }
  }

  .pulse-btn:hover:not(:disabled) {
    transform: scale(1.05);
    filter: brightness(110%);
  }

  .pulse-btn:active:not(:disabled) {
    transform: scale(0.98);
  }

  .pulse-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    animation: none;
    filter: grayscale(1);
  }

  .pulse-btn:disabled::after {
    animation: none;
    box-shadow: none;
  }

  /* Variants */
  .pulse-btn--secondary {
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 26px -20px rgba(15, 23, 42, 0.95);
  }

  .pulse-btn--ghost {
    background: transparent;
    border: 1px solid var(--pulse-color);
    color: var(--pulse-color);
    box-shadow: none;
  }

  /* Sizes */
  .pulse-btn--sm { padding: 0.4rem 1.1rem; font-size: 0.8rem; }
  .pulse-btn--md { padding: 0.7rem 1.6rem; font-size: 0.95rem; }
  .pulse-btn--lg { padding: 1rem 2.2rem; font-size: 1.1rem; }
</style>
`,
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
    code: `---
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const { 
  href, 
  type = 'button', 
  variant = 'primary', 
  size = 'md',
  disabled = false 
} = Astro.props;

const Tag = href ? 'a' : 'button';
---

<Tag 
  href={href} 
  type={href ? undefined : type}
  disabled={disabled}
  class={\`shiny-btn shiny-btn--\${variant} shiny-btn--\${size}\`}
>
  <span class="shiny-btn__content"><slot /></span>
</Tag>

<style>
  .shiny-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #111;
    color: #fff;
    padding: 0;
    border: none;
    border-radius: var(--r-md, 12px);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 600;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;
    font-family: var(--font-sans, inherit);
  }

  .shiny-btn__content {
    display: block;
    padding: 0.7rem 1.8rem;
    z-index: 2;
  }

  .shiny-btn::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -150%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0) 70%,
      transparent 100%
    );
    transform: rotate(45deg);
    transition: left 0.6s ease;
    z-index: 1;
  }

  .shiny-btn:hover:not(:disabled)::after {
    left: 100%;
  }

  .shiny-btn:hover:not(:disabled) {
    box-shadow: 0 10px 30px -10px rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  .shiny-btn:active:not(:disabled) {
    transform: scale(0.98);
  }

  .shiny-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(1);
  }

  /* Variants */
  .shiny-btn--primary {
    background: linear-gradient(135deg, #1e293b, #0f172a);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .shiny-btn--secondary {
    background: var(--c-primary, #6366f1);
  }

  .shiny-btn--ghost {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: var(--c-text-2, #94a3b8);
  }
  .shiny-btn--ghost:hover:not(:disabled) {
    color: #fff;
    border-color: #fff;
  }

  /* Sizes */
  .shiny-btn--sm .shiny-btn__content { padding: 0.45rem 1.2rem; font-size: 0.85rem; }
  .shiny-btn--md .shiny-btn__content { padding: 0.75rem 1.8rem; font-size: 1rem; }
  .shiny-btn--lg .shiny-btn__content { padding: 1.1rem 2.6rem; font-size: 1.15rem; }
</style>

`,
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
    code: `---
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'yellow' | 'red' | 'blue' | 'green';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const { 
  href, 
  type = 'button', 
  variant = 'yellow', 
  size = 'md',
  disabled = false 
} = Astro.props;

const Tag = href ? 'a' : 'button';
---

<Tag 
  href={href} 
  type={href ? undefined : type}
  disabled={disabled}
  class={\`retro-arcade-btn retro-arcade-btn--\${variant} retro-arcade-btn--\${size}\`}
>
  <span class="retro-arcade-btn__inner">
    <slot />
  </span>
</Tag>

<style>
  .retro-arcade-btn {
    --pixel-size: 4px;
    --main-color: #facc15;
    --shadow-color: #a16207;
    
    position: relative;
    display: inline-flex;
    padding: 0;
    background: #000;
    border: none;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 
      var(--pixel-size) 0 #000, 
      calc(var(--pixel-size) * -1) 0 #000, 
      0 var(--pixel-size) #000, 
      0 calc(var(--pixel-size) * -1) #000;
    transition: transform 0.1s;
    user-select: none;
    margin: var(--pixel-size);
    white-space: nowrap;
  }

  .retro-arcade-btn__inner {
    display: block;
    padding: 0.6rem 1.4rem;
    background: var(--main-color);
    color: #000;
    font-family: 'Courier New', monospace;
    font-weight: 900;
    text-transform: uppercase;
    box-shadow: 
      inset calc(var(--pixel-size) * -1) calc(var(--pixel-size) * -1) var(--shadow-color);
    transition: all 0.1s;
  }

  /* Interaction */
  .retro-arcade-btn:hover:not(:disabled) .retro-arcade-btn__inner {
    filter: brightness(110%);
  }

  .retro-arcade-btn:active:not(:disabled) {
    transform: translate(calc(var(--pixel-size) / 2), calc(var(--pixel-size) / 2));
  }

  .retro-arcade-btn:active:not(:disabled) .retro-arcade-btn__inner {
    box-shadow: 
      inset var(--pixel-size) var(--pixel-size) var(--shadow-color);
  }

  .retro-arcade-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    filter: grayscale(1);
  }

  /* Variants */
  .retro-arcade-btn--yellow { --main-color: #facc15; --shadow-color: #a16207; }
  .retro-arcade-btn--red { --main-color: #ef4444; --shadow-color: #991b1b; }
  .retro-arcade-btn--blue { --main-color: #3b82f6; --shadow-color: #1e3a8a; }
  .retro-arcade-btn--green { --main-color: #22c55e; --shadow-color: #14532d; }

  /* Sizes */
  .retro-arcade-btn--sm { --pixel-size: 2px; }
  .retro-arcade-btn--sm .retro-arcade-btn__inner { padding: 0.4rem 0.8rem; font-size: 0.75rem; }
  
  .retro-arcade-btn--md { --pixel-size: 4px; }
  .retro-arcade-btn--md .retro-arcade-btn__inner { padding: 0.7rem 1.4rem; font-size: 0.9rem; }
  
  .retro-arcade-btn--lg { --pixel-size: 6px; }
  .retro-arcade-btn--lg .retro-arcade-btn__inner { padding: 1rem 2rem; font-size: 1.1rem; }
</style>

`,
    usage: `<RetroArcadeButton href="#" type="button" variant="primary" size="md" disabled={false}>Press Start</RetroArcadeButton>`,
  },
  {
    slug: '3d-push-button',
    name: '3D Push Button',
    description: 'A button that physically sinks into the interface when clicked.',
    category: 'buttons',
    tags: ['button', '3d', 'interactive'],
    code: `---
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const { 
  href, 
  type = 'button', 
  color = '#6366f1',
  size = 'md',
  disabled = false 
} = Astro.props;

const Tag = href ? 'a' : 'button';
---

<Tag 
  href={href} 
  type={href ? undefined : type}
  disabled={disabled}
  class={\`push-btn push-btn--\${size}\`}
  style={\`--btn-color: \${color}\`}
>
  <span class="push-btn__shadow"></span>
  <span class="push-btn__edge"></span>
  <span class="push-btn__front">
    <slot />
  </span>
</Tag>

<style>
  .push-btn {
    --depth: 8px;
    position: relative;
    display: inline-flex;
    padding: 0;
    padding-top: var(--depth); /* Space for the elevated front */
    border: none;
    background: transparent;
    cursor: pointer;
    outline-offset: 4px;
    transition: filter 250ms;
    user-select: none;
    text-decoration: none;
    vertical-align: middle;
  }

  .push-btn__shadow {
    position: absolute;
    top: var(--depth); /* Align with base */
    left: 0;
    width: 100%;
    height: calc(100% - var(--depth));
    border-radius: var(--r-md, 12px);
    background: rgba(0, 0, 0, 0.4);
    transform: translateY(2px);
    filter: blur(4px);
    transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
  }

  .push-btn__edge {
    position: absolute;
    top: var(--depth); /* Align with base */
    left: 0;
    width: 100%;
    height: calc(100% - var(--depth));
    border-radius: var(--r-md, 12px);
    background: linear-gradient(
      to left,
      color-mix(in srgb, var(--btn-color), black 30%) 0%,
      color-mix(in srgb, var(--btn-color), black 15%) 8%,
      color-mix(in srgb, var(--btn-color), black 15%) 92%,
      color-mix(in srgb, var(--btn-color), black 30%) 100%
    );
  }

  .push-btn__front {
    display: block;
    position: relative;
    padding: 12px 32px;
    border-radius: var(--r-md, 12px);
    font-size: 1rem;
    font-weight: 700;
    color: white;
    background: var(--btn-color);
    transform: translateY(calc(var(--depth) * -1));
    transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
    font-family: var(--font-sans, inherit);
    white-space: nowrap;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .push-btn:hover:not(:disabled) {
    filter: brightness(110%);
  }

  .push-btn:hover:not(:disabled) .push-btn__front {
    transform: translateY(calc(var(--depth) * -1.2));
    transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5);
  }

  .push-btn:hover:not(:disabled) .push-btn__shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5);
  }

  .push-btn:active:not(:disabled) .push-btn__front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  .push-btn:active:not(:disabled) .push-btn__shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  .push-btn:disabled {
    cursor: not-allowed;
    filter: grayscale(1) opacity(0.5);
    box-shadow: none;
  }

  /* Sizes */
  .push-btn--sm { --depth: 5px; }
  .push-btn--sm .push-btn__front { padding: 8px 18px; font-size: 0.85rem; }
  
  .push-btn--md { --depth: 8px; }
  .push-btn--md .push-btn__front { padding: 12px 32px; font-size: 1rem; }
  
  .push-btn--lg { --depth: 12px; }
  .push-btn--lg .push-btn__front { padding: 16px 42px; font-size: 1.15rem; }
</style>
`,
    usage: `<3dPushButton href="#" type="button" color="#6366f1" size="md" disabled={false}>Push Me</3dPushButton>`,
  },
  {
    slug: 'loading-button',
    name: 'Loading Spinner Button',
    description: 'A button that shows a built-in spinner when in a loading state.',
    category: 'buttons',
    tags: ['button', 'loading', 'state'],
    code: `---
interface Props {
  isLoading?: boolean;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const { 
  isLoading = false, 
  href, 
  type = 'button', 
  variant = 'primary', 
  size = 'md',
  disabled = false 
} = Astro.props;

const Tag = href ? 'a' : 'button';
---

<Tag 
  href={href} 
  type={href ? undefined : type}
  disabled={disabled || isLoading}
  class:list={[
    "load-btn", 
    \`load-btn--\${variant}\`, 
    \`load-btn--\${size}\`, 
    { "is-loading": isLoading }
  ]}
>
  <span class="load-btn__content">
    <slot />
  </span>
  <span class="load-btn__spinner">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>
  </span>
</Tag>

<style>
  .load-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-sans, inherit);
    font-weight: 600;
    letter-spacing: 0.02em;
    border-radius: var(--r-md, 12px);
    cursor: pointer;
    text-decoration: none;
    border: 1px solid transparent;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    white-space: nowrap;
    user-select: none;
  }

  .load-btn__content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .load-btn__spinner {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.2s ease;
    pointer-events: none;
  }

  .load-btn__spinner svg {
    width: 1.25em;
    height: 1.25em;
    animation: spin 1s linear infinite;
  }

  /* Loading State */
  .load-btn.is-loading {
    cursor: wait;
  }
  
  .load-btn.is-loading .load-btn__content {
    opacity: 0;
    transform: translateY(5px);
  }

  .load-btn.is-loading .load-btn__spinner {
    opacity: 1;
    transform: scale(1);
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Variants */
  .load-btn--primary {
    background: var(--c-primary, #6366f1);
    color: #fff;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
  }
  .load-btn--primary:hover:not(:disabled) {
    background: var(--c-primary-light, #818cf8);
    transform: translateY(-1px);
  }

  .load-btn--secondary {
    background: rgba(255, 255, 255, 0.05);
    color: var(--c-text-1, #f8fafc);
    border-color: var(--c-border, rgba(255, 255, 255, 0.1));
  }
  .load-btn--secondary:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.08);
  }

  .load-btn--ghost {
    background: transparent;
    color: var(--c-primary-light, #818cf8);
    border-color: rgba(99, 102, 241, 0.3);
  }
  .load-btn--ghost:hover:not(:disabled) {
    background: rgba(99, 102, 241, 0.05);
  }

  /* Sizes / Layout */
  .load-btn--sm { padding: 0.45rem 1rem; font-size: 0.825rem; min-width: 100px; }
  .load-btn--md { padding: 0.75rem 1.6rem; font-size: 0.95rem; min-width: 140px; }
  .load-btn--lg { padding: 1rem 2.2rem; font-size: 1.1rem; min-width: 180px; }

  .load-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(1);
  }
</style>

`,
    usage: `<LoadingButton isLoading={false} href="#" type="button" variant="primary" size="md">Submit Form</LoadingButton>`,
  },
  {
    slug: 'shimmer-button',
    name: 'Shimmer Button',
    description: 'A highly elegant button with a moving shimmer outline.',
    category: 'buttons',
    tags: ['button', 'shimmer', 'elegant'],
    code: `---
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const { 
  href, 
  type = 'button', 
  variant = 'primary', 
  size = 'md',
  disabled = false 
} = Astro.props;

const Tag = href ? 'a' : 'button';
---

<Tag 
  href={href} 
  type={href ? undefined : type}
  disabled={disabled}
  class={\`shimmer-btn shimmer-btn--\${variant} shimmer-btn--\${size}\`}
>
  <span class="shimmer-btn__content"><slot /></span>
</Tag>

<style>
  .shimmer-btn {
    --shimmer-speed: 3s;
    --shimmer-color: rgba(255, 255, 255, 0.3);
    
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    border-radius: var(--r-full, 9999px);
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    transition: all 0.3s ease;
    user-select: none;
    font-family: var(--font-sans, inherit);
    font-weight: 600;
    white-space: nowrap;
  }

  .shimmer-btn__content {
    display: block;
    padding: 0.75rem 1.8rem;
    z-index: 2;
  }

  .shimmer-btn::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg, 
      transparent 30%, 
      var(--shimmer-color) 50%, 
      transparent 70%
    );
    background-size: 200% 100%;
    transform: translateX(-100%);
    animation: sweep var(--shimmer-speed) infinite;
    z-index: 1;
  }

  @keyframes sweep {
    0% { transform: translateX(-100%); }
    40%, 100% { transform: translateX(100%); }
  }

  .shimmer-btn:hover:not(:disabled) {
    transform: scale(1.02);
  }

  .shimmer-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(1);
  }

  /* Variants */
  .shimmer-btn--primary {
    background: var(--c-bg-2, #1e293b);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .shimmer-btn--secondary {
    background: var(--c-primary, #6366f1);
    color: #fff;
  }

  .shimmer-btn--ghost {
    background: transparent;
    color: var(--c-primary-light, #818cf8);
    border: 1px solid rgba(99, 102, 241, 0.4);
    --shimmer-color: rgba(99, 102, 241, 0.2);
  }

  /* Sizes */
  .shimmer-btn--sm .shimmer-btn__content { padding: 0.45rem 1.2rem; font-size: 0.8rem; }
  .shimmer-btn--md .shimmer-btn__content { padding: 0.75rem 1.8rem; font-size: 0.95rem; }
  .shimmer-btn--lg .shimmer-btn__content { padding: 1.1rem 2.6rem; font-size: 1.1rem; }
</style>

`,
    usage: `<ShimmerButton href="#" type="button" variant="primary" size="md" disabled={false}>Unlock Premium</ShimmerButton>`,
  },
  {
    slug: 'magnetic-button',
    name: 'Magnetic Button',
    description: 'A button that follows the cursor slightly when hovered (requires component-level JS).',
    category: 'buttons',
    tags: ['button', 'interactive', 'magnetic'],
    code: `---
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  strength?: number;
  disabled?: boolean;
}

const { 
  href, 
  type = 'button', 
  variant = 'secondary', 
  size = 'md',
  strength = 0.5,
  disabled = false 
} = Astro.props;

const Tag = href ? 'a' : 'button';
---

<Tag 
  href={href} 
  type={href ? undefined : type}
  disabled={disabled}
  class={\`magnetic-btn magnetic-btn--\${variant} magnetic-btn--\${size}\`}
  data-strength={strength}
>
  <span class="magnetic-btn__inner">
    <slot />
  </span>
</Tag>

<style>
  .magnetic-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    border-radius: var(--r-full, 9999px);
    cursor: pointer;
    text-decoration: none;
    position: relative;
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease;
    user-select: none;
    font-family: var(--font-sans, inherit);
    font-weight: 600;
    white-space: nowrap;
  }

  .magnetic-btn__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    pointer-events: none;
  }

  /* Variants */
  .magnetic-btn--primary {
    background: var(--c-primary, #6366f1);
    color: #fff;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  }

  .magnetic-btn--secondary {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    color: var(--c-text-1, #f8fafc);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .magnetic-btn--ghost {
    background: transparent;
    color: var(--c-primary-light, #818cf8);
    border: 1px solid rgba(99, 102, 241, 0.3);
  }

  .magnetic-btn:hover:not(:disabled) {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  .magnetic-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(1);
  }

  /* Sizes */
  .magnetic-btn--sm { min-width: 80px; min-height: 40px; }
  .magnetic-btn--sm .magnetic-btn__inner { padding: 0.5rem 1.2rem; font-size: 0.8rem; }
  
  .magnetic-btn--md { min-width: 120px; min-height: 50px; }
  .magnetic-btn--md .magnetic-btn__inner { padding: 0.8rem 1.8rem; font-size: 0.95rem; }
  
  .magnetic-btn--lg { min-width: 160px; min-height: 64px; }
  .magnetic-btn--lg .magnetic-btn__inner { padding: 1.1rem 2.5rem; font-size: 1.1rem; }
</style>

<script>
  function initMagnetic() {
    const btns = document.querySelectorAll('.magnetic-btn:not([data-magnetic-init])');
    
    btns.forEach(btn => {
      btn.setAttribute('data-magnetic-init', 'true');
      const inner = btn.querySelector('.magnetic-btn__inner') as HTMLElement;
      const strengthAttr = btn.getAttribute('data-strength');
      const strength = strengthAttr ? parseFloat(strengthAttr) : 0.5;

      btn.addEventListener('mousemove', (e: any) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * strength;
        const y = (e.clientY - rect.top - rect.height / 2) * strength;

        (btn as HTMLElement).style.transform = \`translate(\${x}px, \${y}px)\`;
        if (inner) inner.style.transform = \`translate(\${x * 0.4}px, \${y * 0.4}px)\`;
      });

      btn.addEventListener('mouseleave', () => {
        (btn as HTMLElement).style.transform = \`translate(0px, 0px)\`;
        if (inner) inner.style.transform = \`translate(0px, 0px)\`;
      });
    });
  }

  // Initial and view transition support
  initMagnetic();
  document.addEventListener('astro:after-swap', initMagnetic);
</script>

`,
    usage: `<MagneticButton href="#" type="button" variant="primary" size="md">Interact</MagneticButton>`,
  },
  {
    slug: 'double-border-button',
    name: 'Double Border Button',
    description: 'Elegant button with nested borders and smooth scaling.',
    category: 'buttons',
    tags: ['button', 'minimalist', 'border'],
    code: `---
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const { 
  href, 
  type = 'button', 
  variant = 'primary', 
  size = 'md',
  disabled = false 
} = Astro.props;

const Tag = href ? 'a' : 'button';
---

<Tag 
  href={href} 
  type={href ? undefined : type}
  disabled={disabled}
  class={\`double-border-btn double-border-btn--\${variant} double-border-btn--\${size}\`}
>
  <span class="double-border-btn__content"><slot /></span>
</Tag>

<style>
  .double-border-btn {
    --offset: 5px;
    --border-color: rgba(255, 255, 255, 0.4);
    --hover-color: #fff;
    
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: transparent;
    color: #fff;
    border: 1px solid var(--border-color);
    border-radius: var(--r-sm, 4px);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
    user-select: none;
    white-space: nowrap;
    font-family: var(--font-sans, inherit);
    font-weight: 500;
  }

  .double-border-btn__content {
    display: block;
    padding: 0.6rem 1.6rem;
  }

  .double-border-btn::before {
    content: '';
    position: absolute;
    top: var(--offset);
    left: var(--offset);
    width: 100%;
    height: 100%;
    border: 1px solid var(--border-color);
    border-radius: inherit;
    z-index: -1;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.5;
  }

  .double-border-btn:hover:not(:disabled) {
    color: var(--hover-color);
    border-color: var(--hover-color);
    transform: translate(calc(var(--offset) * -0.5), calc(var(--offset) * -0.5));
  }

  .double-border-btn:hover:not(:disabled)::before {
    top: calc(var(--offset) * 1.5);
    left: calc(var(--offset) * 1.5);
    border-color: var(--hover-color);
    opacity: 1;
  }

  .double-border-btn:active:not(:disabled) {
    transform: translate(0, 0);
  }

  .double-border-btn:active:not(:disabled)::before {
    top: 0;
    left: 0;
  }

  .double-border-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(1);
  }

  /* Variants */
  .double-border-btn--primary {
    --border-color: rgba(99, 102, 241, 0.5);
    --hover-color: #818cf8;
    color: #818cf8;
  }

  .double-border-btn--secondary {
    --border-color: rgba(255, 255, 255, 0.3);
    --hover-color: #fff;
    color: #fff;
  }

  .double-border-btn--ghost {
    --border-color: rgba(255, 255, 255, 0.1);
    --hover-color: rgba(255, 255, 255, 0.8);
    color: rgba(255, 255, 255, 0.6);
  }

  /* Sizes */
  .double-border-btn--sm { --offset: 3px; }
  .double-border-btn--sm .double-border-btn__content { padding: 0.45rem 1rem; font-size: 0.85rem; }
  
  .double-border-btn--md { --offset: 5px; }
  .double-border-btn--md .double-border-btn__content { padding: 0.65rem 1.6rem; font-size: 1rem; }
  
  .double-border-btn--lg { --offset: 8px; }
  .double-border-btn--lg .double-border-btn__content { padding: 0.85rem 2.2rem; font-size: 1.15rem; }
</style>

`,
    usage: `<DoubleBorderButton href="#" type="button" variant="primary" size="md" disabled={false}>Sign Up</DoubleBorderButton>`,
  },
  {
    slug: 'animated-icon-button',
    name: 'Animated Icon Button',
    description: 'A premium button generated dynamically from codebase.',
    category: 'buttons',
    tags: ['button', 'premium'],
    code: `---
/**
 * AnimatedIconButton — A button that elegantly slides an icon into view on hover.
 * 
 * @param {string} href - Optional. If provided, renders an <a> tag instead of <button>.
 * @param {'button'|'submit'|'reset'} type - Optional. The HTML button type. Default is 'button'.
 * @param {'primary'|'secondary'|'ghost'} variant - Optional. The visual style variant. Default is 'primary'.
 * @param {'sm'|'md'|'lg'} size - Optional. The size variant of the button. Default is 'md'.
 * @param {'left'|'right'} iconPos - Optional. Side where the icon slides in. Default is 'right'.
 * @param {boolean} disabled - Optional. Whether the button is disabled. Default is false.
 */
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  iconPos?: 'left' | 'right';
  disabled?: boolean;
}

const { 
  href, 
  type = 'button', 
  variant = 'primary', 
  size = 'md',
  iconPos = 'right',
  disabled = false 
} = Astro.props;

const Tag = href ? 'a' : 'button';
---

<Tag 
  href={href} 
  type={href ? undefined : type}
  disabled={disabled}
  class:list={[
    "icon-anim-btn",
    \`icon-anim-btn--\${variant}\`,
    \`icon-anim-btn--\${size}\`,
    \`icon-anim-btn--\${iconPos}\`
  ]}
>
  <span class="icon-anim-btn__inner">
    {iconPos === 'left' && (
      <span class="icon-anim-btn__icon">
        <slot name="icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </slot>
      </span>
    )}
    <span class="icon-anim-btn__text"><slot /></span>
    {iconPos === 'right' && (
      <span class="icon-anim-btn__icon">
        <slot name="icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </slot>
      </span>
    )}
  </span>
</Tag>

<style>
  .icon-anim-btn {
    --btn-bg: var(--c-primary, #6366f1);
    --btn-color: #fff;
    --btn-hover-bg: var(--c-primary-light, #818cf8);
    
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--btn-bg);
    color: var(--btn-color);
    border: none;
    border-radius: var(--r-md, 12px);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 600;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;
    font-family: var(--font-sans, inherit);
  }

  .icon-anim-btn__inner {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    transition: transform 0.3s ease;
  }

  .icon-anim-btn__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25em;
    height: 1.25em;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .icon-anim-btn__icon svg {
    width: 100%;
    height: 100%;
  }

  /* Hover Animations */
  .icon-anim-btn--right:hover:not(:disabled) .icon-anim-btn__icon {
    transform: translateX(4px) scale(1.1);
  }

  .icon-anim-btn--left:hover:not(:disabled) .icon-anim-btn__icon {
    transform: translateX(-4px) scale(1.1);
  }

  .icon-anim-btn:hover:not(:disabled) {
    background: var(--btn-hover-bg);
    box-shadow: 0 4px 20px -5px color-mix(in srgb, var(--btn-bg), transparent 40%);
  }

  .icon-anim-btn:active:not(:disabled) {
    transform: scale(0.97);
  }

  .icon-anim-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(1);
  }

  /* Variants */
  .icon-anim-btn--secondary {
    --btn-bg: rgba(255, 255, 255, 0.05);
    --btn-color: var(--c-text-1, #f8fafc);
    --btn-hover-bg: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .icon-anim-btn--ghost {
    --btn-bg: transparent;
    --btn-color: var(--c-primary-light, #818cf8);
    --btn-hover-bg: rgba(99, 102, 241, 0.08);
    border: 1px solid rgba(99, 102, 241, 0.2);
  }

  /* Sizes */
  .icon-anim-btn--sm { padding: 0.45rem 1.2rem; font-size: 0.85rem; }
  .icon-anim-btn--md { padding: 0.75rem 1.8rem; font-size: 1rem; }
  .icon-anim-btn--lg { padding: 1rem 2.5rem; font-size: 1.15rem; }
</style>

`,
    usage: `<AnimatedIconButton href="#" type="button" variant="primary" size="md">Click Me</AnimatedIconButton>`,
  },
  {
    slug: 'border-draw-button',
    name: 'Border Draw Button',
    description: 'A premium button generated dynamically from codebase.',
    category: 'buttons',
    tags: ['button', 'premium'],
    code: `---
/**
 * BorderDrawButton — A button that animates its SVG border being drawn on hover.
 * 
 * @param {string} href - Optional. If provided, renders an <a> tag instead of <button>.
 * @param {'button'|'submit'|'reset'} type - Optional. The HTML button type. Default is 'button'.
 * @param {string} color - Optional. The stroke color of the drawing border. Default is '#3b82f6'.
 * @param {'sm'|'md'|'lg'} size - Optional. The size variant of the button. Default is 'md'.
 * @param {boolean} disabled - Optional. Whether the button is disabled. Default is false.
 */
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const { 
  href, 
  type = 'button', 
  color = '#6366f1',
  size = 'md',
  disabled = false 
} = Astro.props;

const Tag = href ? 'a' : 'button';
---

<Tag 
  href={href} 
  type={href ? undefined : type}
  disabled={disabled}
  class={\`draw-btn draw-btn--\${size}\`}
  style={\`--btn-color: \${color}\`}
>
  <span class="draw-btn__text"><slot /></span>
</Tag>

<style>
  .draw-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: var(--c-text-2, #94a3b8);
    border: 2px solid rgba(255, 255, 255, 0.05);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 600;
    user-select: none;
    white-space: nowrap;
    font-family: var(--font-sans, inherit);
  }

  .draw-btn__text {
    position: relative;
    z-index: 2;
    transition: color 0.5s ease;
  }

  .draw-btn::before,
  .draw-btn::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 2px solid transparent;
    z-index: 1;
    transition: width 0.2s 0.2s ease-out, height 0.2s ease-out, border-color 0.1s;
  }

  .draw-btn::before {
    top: -2px;
    left: -2px;
  }

  .draw-btn::after {
    bottom: -2px;
    right: -2px;
  }

  .draw-btn:hover:not(:disabled) {
    color: #fff;
    border-color: transparent;
  }

  .draw-btn:hover:not(:disabled)::before {
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-top-color: var(--btn-color);
    border-right-color: var(--btn-color);
    transition: width 0.2s ease-out, height 0.2s 0.2s ease-out;
  }

  .draw-btn:hover:not(:disabled)::after {
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-bottom-color: var(--btn-color);
    border-left-color: var(--btn-color);
    transition: width 0.2s ease-out, height 0.2s 0.2s ease-out;
  }

  .draw-btn:active:not(:disabled) {
    transform: scale(0.98);
  }

  .draw-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(1);
  }

  /* Sizes */
  .draw-btn--sm { padding: 0.45rem 1.2rem; font-size: 0.85rem; }
  .draw-btn--md { padding: 0.75rem 1.8rem; font-size: 1rem; }
  .draw-btn--lg { padding: 1.1rem 2.5rem; font-size: 1.2rem; }
</style>

`,
    usage: `<BorderDrawButton href="#" type="button" variant="primary" size="md">Click Me</BorderDrawButton>`,
  },
  {
    slug: 'ghost-outline-button',
    name: 'Ghost Outline Button',
    description: 'A premium button generated dynamically from codebase.',
    category: 'buttons',
    tags: ['button', 'premium'],
    code: `---
/**
 * GhostOutlineButton — A minimalist transparent button with gradient outlines and animated borders.
 * 
 * @param {string} href - Optional. If provided, renders an <a> tag instead of <button>.
 * @param {'button'|'submit'|'reset'} type - Optional. The HTML button type. Default is 'button'.
 * @param {string} primaryColor - Optional. Starts the gradient outline color.
 * @param {string} secondaryColor - Optional. Ends the gradient outline color.
 * @param {'sm'|'md'|'lg'} size - Optional. The size variant of the button. Default is 'md'.
 * @param {boolean} disabled - Optional. Whether the button is disabled. Default is false.
 */
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  primaryColor?: string;
  secondaryColor?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const { 
  href, 
  type = 'button', 
  primaryColor = '#6366f1',
  secondaryColor = '#c084fc',
  size = 'md',
  disabled = false 
} = Astro.props;

const Tag = href ? 'a' : 'button';
---

<Tag 
  href={href} 
  type={href ? undefined : type}
  disabled={disabled}
  class={\`ghost-grad-btn ghost-grad-btn--\${size}\`}
  style={\`--primary-color: \${primaryColor}; --secondary-color: \${secondaryColor};\`}
>
  <span class="ghost-grad-btn__text"><slot /></span>
</Tag>

<style>
  .ghost-grad-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #0f172a;
    color: #fff;
    padding: 2px;
    border: none;
    border-radius: var(--r-md, 12px);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 700;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;
    font-family: var(--font-sans, inherit);
  }

  .ghost-grad-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    z-index: 1;
    transition: opacity 0.3s ease;
  }

  .ghost-grad-btn:hover:not(:disabled)::before {
    opacity: 0.8;
  }

  .ghost-grad-btn__text {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background: #0f172a;
    padding: 0.7rem 1.8rem;
    border-radius: calc(var(--r-md, 12px) - 2px);
    z-index: 2;
    transition: background 0.3s ease, color 0.3s ease;
  }

  .ghost-grad-btn:hover:not(:disabled) .ghost-grad-btn__text {
    background: transparent;
    color: #fff;
  }

  .ghost-grad-btn:hover:not(:disabled) {
    box-shadow: 0 10px 25px -5px color-mix(in srgb, var(--primary-color), transparent 50%);
    transform: translateY(-1px);
  }

  .ghost-grad-btn:active:not(:disabled) {
    transform: scale(0.98);
  }

  .ghost-grad-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(1);
  }

  /* Sizes */
  .ghost-grad-btn--sm { font-size: 0.85rem; }
  .ghost-grad-btn--sm .ghost-grad-btn__text { padding: 0.45rem 1.2rem; }
  
  .ghost-grad-btn--md { font-size: 1rem; }
  .ghost-grad-btn--md .ghost-grad-btn__text { padding: 0.75rem 1.8rem; }
  
  .ghost-grad-btn--lg { font-size: 1.15rem; }
  .ghost-grad-btn--lg .ghost-grad-btn__text { padding: 1.1rem 2.5rem; }
</style>

`,
    usage: `<GhostOutlineButton href="#" type="button" variant="primary" size="md">Click Me</GhostOutlineButton>`,
  },
  {
    slug: 'liquid-button',
    name: 'Liquid Button',
    description: 'A premium button generated dynamically from codebase.',
    category: 'buttons',
    tags: ['button', 'premium'],
    code: `---
/**
 * LiquidButton — A button featuring a fluid, liquid-like animated background layer.
 * 
 * @param {string} href - Optional. If provided, renders an <a> tag instead of <button>.
 * @param {'button'|'submit'|'reset'} type - Optional. The HTML button type. Default is 'button'.
 * @param {string} color - Optional. The base color for the fluid liquid effect. Default is '#3b82f6'.
 * @param {'sm'|'md'|'lg'} size - Optional. The size variant of the button. Default is 'md'.
 * @param {boolean} disabled - Optional. Whether the button is disabled. Default is false.
 */
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const { 
  href, 
  type = 'button', 
  color = '#6366f1',
  size = 'md',
  disabled = false 
} = Astro.props;

const Tag = href ? 'a' : 'button';
// Create a unique filter ID to avoid conflicts when multiple buttons are on screen
const filterId = \`gooey-\${Math.random().toString(36).substr(2, 9)}\`;
---

<Tag 
  href={href} 
  type={href ? undefined : type}
  disabled={disabled}
  class={\`liquid-btn liquid-btn--\${size}\`}
  style={\`--liquid-color: \${color}\`}
>
  <span class="liquid-btn__text"><slot /></span>
  
  <div class="liquid-wrapper">
    <div class="liquid-main"></div>
    <div class="liquid-container">
      <div class="liquid-blob"></div>
      <div class="liquid-blob"></div>
      <div class="liquid-blob"></div>
      <div class="liquid-blob"></div>
    </div>
  </div>

  <svg style="position: absolute; width: 0; height: 0; pointer-events: none;">
    <defs>
      <filter id={filterId}>
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </defs>
  </svg>
</Tag>

<style define:vars={{ filterId: \`url(#\${filterId})\` }}>
  .liquid-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #080b14;
    color: #fff;
    border: none;
    border-radius: var(--r-md, 14px);
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    z-index: 1;
    font-family: var(--font-sans, inherit);
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    user-select: none;
    white-space: nowrap;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .liquid-btn__text {
    position: relative;
    z-index: 10;
    padding: 0 4px;
    transition: color 0.4s ease;
  }

  .liquid-wrapper {
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    filter: var(--filterId);
    border-radius: inherit;
    /* Subtle base fill */
    opacity: 0.95;
  }

  .liquid-main {
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--liquid-color);
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .liquid-container {
    position: absolute;
    inset: 0;
    z-index: 3;
  }

  .liquid-blob {
    position: absolute;
    top: 100%;
    background: var(--liquid-color);
    border-radius: 50%;
    transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .liquid-blob:nth-child(1) { left: 10%; width: 60px; height: 60px; transition-delay: 0s; }
  .liquid-blob:nth-child(2) { left: 40%; width: 80px; height: 80px; transition-delay: 0.05s; }
  .liquid-blob:nth-child(3) { left: 70%; width: 50px; height: 50px; transition-delay: 0.02s; }
  .liquid-blob:nth-child(4) { left: 30%; width: 70px; height: 70px; transition-delay: 0.08s; }

  /* Hover States */
  .liquid-btn:hover:not(:disabled) {
    border-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 20px 40px -10px color-mix(in srgb, var(--liquid-color), transparent 70%);
  }

  .liquid-btn:hover:not(:disabled) .liquid-main {
    transform: translateY(-100%);
  }

  .liquid-btn:hover:not(:disabled) .liquid-blob {
    transform: translateY(-180%) scale(1.4);
  }

  /* Movement animation for blobs when hovered */
  .liquid-btn:hover:not(:disabled) .liquid-blob:nth-child(odd) {
    animation: liquid-wiggle 3s ease-in-out infinite alternate;
  }
  .liquid-btn:hover:not(:disabled) .liquid-blob:nth-child(even) {
    animation: liquid-wiggle 4s ease-in-out infinite alternate-reverse;
  }

  @keyframes liquid-wiggle {
    0% { margin-left: -5px; }
    100% { margin-left: 5px; }
  }

  .liquid-btn:active:not(:disabled) {
    transform: scale(0.96);
  }

  .liquid-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    filter: grayscale(1);
  }

  /* Sizes */
  .liquid-btn--sm { padding: 0.6rem 1.6rem; font-size: 0.8rem; }
  .liquid-btn--md { padding: 0.9rem 2.4rem; font-size: 0.95rem; }
  .liquid-btn--lg { padding: 1.2rem 3.5rem; font-size: 1.1rem; }
</style>

`,
    usage: `<LiquidButton href="#" type="button" variant="primary" size="md">Click Me</LiquidButton>`,
  },
  {
    slug: 'minimal-pill-button',
    name: 'Minimal Pill Button',
    description: 'A premium button generated dynamically from codebase.',
    category: 'buttons',
    tags: ['button', 'premium'],
    code: `---
/**
 * MinimalPillButton — A cleanly rounded pill button optimized for minimal interactions and tags.
 * 
 * @param {string} href - Optional. If provided, renders an <a> tag instead of <button>.
 * @param {'button'|'submit'|'reset'} type - Optional. The HTML button type. Default is 'button'.
 * @param {'primary'|'secondary'|'ghost'} variant - Optional. The visual style variant. Default is 'primary'.
 * @param {'sm'|'md'|'lg'} size - Optional. The size variant of the button. Default is 'md'.
 * @param {boolean} disabled - Optional. Whether the button is disabled. Default is false.
 */
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const { 
  href, 
  type = 'button', 
  variant = 'primary', 
  size = 'md',
  disabled = false 
} = Astro.props;

const Tag = href ? 'a' : 'button';
---

<Tag 
  href={href} 
  type={href ? undefined : type}
  disabled={disabled}
  class={\`pill-btn pill-btn--\${variant} pill-btn--\${size}\`}
>
  <slot />
</Tag>

<style>
  .pill-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1.5rem;
    border-radius: var(--r-full, 9999px);
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    user-select: none;
    white-space: nowrap;
    border: 1px solid transparent;
    font-family: var(--font-sans, inherit);
  }

  .pill-btn:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  .pill-btn:active:not(:disabled) {
    transform: translateY(0);
  }

  .pill-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(1);
  }

  /* Variants */
  .pill-btn--primary {
    background: rgba(255, 255, 255, 0.05);
    color: var(--c-text-2, #94a3b8);
    border-color: rgba(255, 255, 255, 0.1);
  }
  .pill-btn--primary:hover:not(:disabled) {
    background: #fff;
    color: #000;
    border-color: #fff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  .pill-btn--secondary {
    background: var(--c-primary, #6366f1);
    color: #fff;
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
  }
  .pill-btn--secondary:hover:not(:disabled) {
    background: var(--c-primary-light, #818cf8);
    box-shadow: 0 6px 16px rgba(99, 102, 241, 0.3);
  }

  .pill-btn--ghost {
    background: transparent;
    color: var(--c-text-2, #94a3b8);
    border-color: rgba(255, 255, 255, 0.1);
  }
  .pill-btn--ghost:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.3);
  }

  /* Sizes */
  .pill-btn--sm { padding: 0.35rem 1.2rem; font-size: 0.75rem; }
  .pill-btn--md { padding: 0.55rem 1.6rem; font-size: 0.85rem; }
  .pill-btn--lg { padding: 0.8rem 2.2rem; font-size: 1rem; }
</style>

`,
    usage: `<MinimalPillButton href="#" type="button" variant="primary" size="md">Click Me</MinimalPillButton>`,
  },
  {
    slug: 'retro-shadow-button',
    name: 'Retro Shadow Button',
    description: 'A premium button generated dynamically from codebase.',
    category: 'buttons',
    tags: ['button', 'premium'],
    code: `---
/**
 * RetroShadowButton — A sharp-edged neo-brutalist button with a thick solid block shadow.
 * 
 * @param {string} href - Optional. If provided, renders an <a> tag instead of <button>.
 * @param {'button'|'submit'|'reset'} type - Optional. The HTML button type. Default is 'button'.
 * @param {'pink'|'cyan'|'yellow'|'lime'} variant - Optional. The visual highly saturated retro style variant. Default is 'pink'.
 * @param {'sm'|'md'|'lg'} size - Optional. The size variant of the button. Default is 'md'.
 * @param {boolean} disabled - Optional. Whether the button is disabled. Default is false.
 */
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'pink' | 'cyan' | 'yellow' | 'lime';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const { 
  href, 
  type = 'button', 
  variant = 'pink', 
  size = 'md',
  disabled = false 
} = Astro.props;

const Tag = href ? 'a' : 'button';
---

<Tag 
  href={href} 
  type={href ? undefined : type}
  disabled={disabled}
  class={\`retro-shadow-btn retro-shadow-btn--\${variant} retro-shadow-btn--\${size}\`}
>
  <slot />
</Tag>

<style>
  .retro-shadow-btn {
    --btn-bg: #ff7eb3;
    --shadow-color: #000;
    --shadow-offset: 6px;
    
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--btn-bg);
    color: #000;
    border: 3px solid #000;
    font-family: var(--font-sans, inherit);
    font-weight: 800;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.1s;
    box-shadow: var(--shadow-offset) var(--shadow-offset) 0 var(--shadow-color);
    user-select: none;
    white-space: nowrap;
  }

  .retro-shadow-btn:hover:not(:disabled) {
    transform: translate(calc(var(--shadow-offset) * -0.2), calc(var(--shadow-offset) * -0.2));
    box-shadow: calc(var(--shadow-offset) * 1.2) calc(var(--shadow-offset) * 1.2) 0 var(--shadow-color);
  }

  .retro-shadow-btn:active:not(:disabled) {
    transform: translate(calc(var(--shadow-offset) * 0.5), calc(var(--shadow-offset) * 0.5));
    box-shadow: calc(var(--shadow-offset) * 0.5) calc(var(--shadow-offset) * 0.5) 0 var(--shadow-color);
  }

  .retro-shadow-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    filter: grayscale(0.5);
    box-shadow: 2px 2px 0 var(--shadow-color);
  }

  /* Variants (90s Palette) */
  .retro-shadow-btn--pink { --btn-bg: #ff7eb3; }
  .retro-shadow-btn--cyan { --btn-bg: #00f5ff; }
  .retro-shadow-btn--yellow { --btn-bg: #fff01f; }
  .retro-shadow-btn--lime { --btn-bg: #bfff00; }

  /* Sizes */
  .retro-shadow-btn--sm { padding: 0.4rem 1rem; font-size: 0.85rem; --shadow-offset: 4px; border-width: 2px; }
  .retro-shadow-btn--md { padding: 0.7rem 1.6rem; font-size: 1rem; --shadow-offset: 6px; border-width: 3px; }
  .retro-shadow-btn--lg { padding: 1rem 2.2rem; font-size: 1.2rem; --shadow-offset: 8px; border-width: 4px; }
</style>

`,
    usage: `<RetroShadowButton href="#" type="button" variant="primary" size="md">Click Me</RetroShadowButton>`,
  },
  {
    slug: 'tilt-glow-button',
    name: 'Tilt Glow Button',
    description: 'A premium button generated dynamically from codebase.',
    category: 'buttons',
    tags: ['button', 'premium'],
    code: `---
/**
 * TiltGlowButton — An interactive 3D button that tilts towards the cursor with dynamic lighting.
 * 
 * @param {string} href - Optional. If provided, renders an <a> tag instead of <button>.
 * @param {'button'|'submit'|'reset'} type - Optional. The HTML button type. Default is 'button'.
 * @param {string} primaryColor - Optional. The primary light/gradient effect color.
 * @param {string} secondaryColor - Optional. The secondary lighting/gradient reflection color.
 * @param {'sm'|'md'|'lg'} size - Optional. The size variant of the button. Default is 'md'.
 * @param {boolean} disabled - Optional. Whether the button is disabled. Default is false.
 */
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  primaryColor?: string;
  secondaryColor?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const { 
  href, 
  type = 'button', 
  primaryColor = '#6366f1', 
  secondaryColor = '#c084fc',
  size = 'md',
  disabled = false 
} = Astro.props;

const Tag = href ? 'a' : 'button';
---

<div class={\`tilt-wrapper tilt-wrapper--\${size}\`}>
  <Tag 
    href={href} 
    type={href ? undefined : type}
    disabled={disabled}
    class="tilt-card"
    style={\`--primary-color: \${primaryColor}; --secondary-color: \${secondaryColor};\`}
  >
    <div class="tilt-card__glow"></div>
    <div class="tilt-card__content">
      <slot />
    </div>
  </Tag>
</div>

<style>
  .tilt-wrapper {
    perspective: 1000px;
    display: inline-block;
  }

  .tilt-card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0f172a;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--r-md, 12px);
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    transition: transform 0.15s ease-out, box-shadow 0.3s ease;
    transform-style: preserve-3d;
    user-select: none;
    font-family: var(--font-sans, inherit);
    font-weight: 600;
  }

  .tilt-card__glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      color-mix(in srgb, var(--primary-color), white 20%) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 1;
  }

  .tilt-card__content {
    position: relative;
    z-index: 2;
    transform: translateZ(20px);
    white-space: nowrap;
  }

  .tilt-card:hover {
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .tilt-card:hover .tilt-card__glow {
    opacity: 0.15;
  }

  .tilt-card:active {
    transform: scale(0.98) translateZ(0);
  }

  .tilt-card:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(1);
  }

  /* Sizes */
  .tilt-wrapper--sm .tilt-card { padding: 0.5rem 1.4rem; font-size: 0.8rem; }
  .tilt-wrapper--md .tilt-card { padding: 0.8rem 2rem; font-size: 0.95rem; }
  .tilt-wrapper--lg .tilt-card { padding: 1.1rem 3rem; font-size: 1.1rem; }
</style>

<script>
  function initTilt() {
    const cards = document.querySelectorAll('.tilt-card:not([data-tilt-init])');
    
    cards.forEach(card => {
      card.setAttribute('data-tilt-init', 'true');
      const htmlCard = card as HTMLElement;

      card.addEventListener('mousemove', (e: any) => {
        const rect = htmlCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate percentages for the glow highlight
        const xPerc = (x / rect.width) * 100;
        const yPerc = (y / rect.height) * 100;
        htmlCard.style.setProperty('--mouse-x', \`\${xPerc}%\`);
        htmlCard.style.setProperty('--mouse-y', \`\${yPerc}%\`);

        // Calculate rotation
        const rotateY = (x / rect.width - 0.5) * 25;
        const rotateX = (y / rect.height - 0.5) * -25;
        htmlCard.style.transform = \`rotateY(\${rotateY}deg) rotateX(\${rotateX}deg)\`;
      });

      card.addEventListener('mouseleave', () => {
        htmlCard.style.transform = 'rotateY(0deg) rotateX(0deg)';
        htmlCard.style.setProperty('--mouse-x', '50%');
        htmlCard.style.setProperty('--mouse-y', '50%');
      });
    });
  }

  initTilt();
  document.addEventListener('astro:after-swap', initTilt);
</script>

`,
    usage: `<TiltGlowButton href="#" type="button" variant="primary" size="md">Click Me</TiltGlowButton>`,
  }
];
