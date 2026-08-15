// src/data/registry/feedback.ts
import type { ComponentDoc } from './types';

export const feedback: ComponentDoc[] = [
  {
    slug: 'animated-checkmark',
    name: 'Success Checkmark',
    description: 'Animated SVG success icon.',
    category: 'feedback',
    tags: ["icon","success"],
    featured: true,
    code: `---
/**
 * AnimatedCheckmark — A decorative SVG checkmark with a circular fill and draw animation.
 * 
 * @param {number|string} size - The width/height of the checkmark in pixels. Default is 56.
 * @param {string} color - The primary color of the success state. Default is '#7ac142'.
 */
interface Props {
  size?: number | string;
  color?: string;
}

const { size = 56, color = '#7ac142' } = Astro.props;
---

<div class="checkmark-container" style={\`--check-size: \${size}px; --check-color: \${color};\`}>
  <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
    <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
  </svg>
</div>

<style>
  .checkmark-container {
    width: var(--check-size);
    height: var(--check-size);
    margin: var(--sp-4, 1rem) auto;
  }
  
  .checkmark { 
    width: 100%; 
    height: 100%; 
    border-radius: var(--r-full, 50%); 
    display: block; 
    stroke-width: 2; 
    stroke: #fff; 
    stroke-miterlimit: 10; 
    box-shadow: inset 0px 0px 0px transparent; 
    animation: checkmark-fill .4s ease-in-out .4s forwards, checkmark-scale .3s ease-in-out .9s both; 
  }
  
  .checkmark__circle { 
    stroke-dasharray: 166; 
    stroke-dashoffset: 166; 
    stroke-width: 2; 
    stroke-miterlimit: 10; 
    stroke: var(--check-color); 
    fill: none; 
    animation: checkmark-stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards; 
  }
  
  .checkmark__check { 
    transform-origin: 50% 50%; 
    stroke-dasharray: 48; 
    stroke-dashoffset: 48; 
    animation: checkmark-stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards; 
  }
  
  @keyframes checkmark-stroke { 100% { stroke-dashoffset: 0; } }
  @keyframes checkmark-fill { 100% { box-shadow: inset 0px 0px 0px 30px var(--check-color); } }
  @keyframes checkmark-scale { 0%, 100% { transform: none; } 50% { transform: scale3d(1.1, 1.1, 1); } }
</style>
`,
    usage: `<AnimatedCheckmark size={64} />`,
  },
  {
    slug: 'badge',
    name: 'Badge',
    description: 'Versatile status tags.',
    category: 'feedback',
    tags: ["badge","tag"],
    featured: true,
    code: `---
/**
 * Badge — A compact visual indicator for labels, categories, or status tags.
 * 
 * @param {string} variant - Visual theme (default|success|warning|danger|info). Default is 'default'.
 * @param {boolean} dot - If true, displays a small decorative circle inside the badge.
 * @param {boolean} pulse - If true, adds a subtle breathing animation to the internal dot.
 * @param {string} className - Optional additional CSS classes.
 */
interface Props {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  dot?: boolean;
  pulse?: boolean;
  className?: string;
}

const { variant = 'default', dot = false, pulse = false, className = '' } = Astro.props;
---

<span class:list={['badge', \`badge--\${variant}\`, className]}>
  {dot && <span class:list={['badge__dot', { 'badge__dot--pulse': pulse }]}></span>}
  <slot />
</span>

<style>
  .badge { 
    display: inline-flex; 
    align-items: center; 
    gap: var(--sp-2, 0.4rem); 
    padding: var(--sp-1, 0.25rem) var(--sp-3, 0.7rem); 
    border-radius: var(--r-full, 100px); 
    font-size: 0.72rem; 
    font-weight: 700; 
    letter-spacing: 0.05em; 
    text-transform: uppercase; 
    white-space: nowrap; 
    border: 1px solid transparent;
    transition: 0.2s;
  }
  
  .badge--default { background: rgba(148, 163, 184, 0.12); color: var(--c-text-2, #94a3b8); border-color: var(--c-border, rgba(148, 163, 184, 0.2)); }
  .badge--success { background: rgba(52, 211, 153, 0.12); color: #34d399; border-color: rgba(52, 211, 153, 0.25); }
  .badge--warning { background: rgba(251, 191, 36, 0.12); color: #fbbf24; border-color: rgba(251, 191, 36, 0.25); }
  .badge--danger { background: rgba(248, 113, 113, 0.12); color: #f87171; border-color: rgba(248, 113, 113, 0.25); }
  .badge--info { background: rgba(129, 140, 248, 0.12); color: var(--c-primary-light, #818cf8); border-color: rgba(129, 140, 248, 0.25); }
  
  .badge__dot { width: 6px; height: 6px; border-radius: var(--r-full, 50%); background: currentColor; flex-shrink: 0; }
  .badge__dot--pulse { animation: badge-dot-pulse 2s ease-in-out infinite; }
  
  @keyframes badge-dot-pulse { 
    0%, 100% { opacity: 1; transform: scale(1); } 
    50% { opacity: 0.4; transform: scale(0.7); } 
  }
</style>
`,
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
    code: `---
/**
 * CircleProgress — A circular chart indicating a percentage of completion.
 * 
 * @param {number} percent - Completion percentage (0 to 100).
 * @param {number} size - Pixel size of the square SVG container. Default is 80.
 * @param {string} color - Primary gauge color. Default is 'var(--c-primary)'.
 */
interface Props {
  percent: number;
  size?: number;
  color?: string;
}

const { percent, size = 80, color = 'var(--c-primary, #6366f1)' } = Astro.props;

const radius = (size / 2) - 10;
const circum = 2 * Math.PI * radius;
const offset = circum - (Math.min(100, Math.max(0, percent)) / 100) * circum;
---

<div class="circle-box" style={\`--gauge-size: \${size}px; --gauge-color: \${color};\`}>
  <svg width={size} height={size}>
    <circle class="circle-bg" cx={size/2} cy={size/2} r={radius} />
    <circle 
      class="circle-val" 
      cx={size/2} cy={size/2} r={radius} 
      stroke-dasharray={circum} 
      stroke-dashoffset={offset} 
      stroke={color}
    />
  </svg>
  <div class="circle-label" role="presentation">{percent}%</div>
</div>

<style>
  .circle-box { 
    position: relative; 
    width: var(--gauge-size); 
    height: var(--gauge-size); 
    display: grid; place-items: center; 
  }
  
  svg { transform: rotate(-90deg); }
  
  circle { fill: transparent; stroke-width: 6; stroke-linecap: round; }
  
  .circle-bg { 
    stroke: var(--c-bg-elev, rgba(255,255,255,0.05)); 
    stroke-width: 5;
  }
  
  .circle-val { 
    transition: stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1); 
    filter: drop-shadow(0 0 3px var(--gauge-color));
  }
  
  .circle-label { 
    position: absolute; 
    font-size: 0.85rem; 
    font-weight: 800; 
    color: var(--c-text-1, #fff); 
    font-family: inherit;
  }
</style>
`,
    usage: `<CircleProgress percent={75} />`,
  },
  {
    slug: 'confetti-feedback',
    name: 'Confetti Success',
    description: 'Feedback with falling confetti celebration.',
    category: 'feedback',
    tags: ["feedback","animation"],
    featured: true,
    code: `---
/**
 * ConfettiFeedback — A celebration component that triggers a falling confetti animation.
 * 
 * @param {string} label - Text to display briefly before/during confetti. Default is "Success!".
 * @param {string} color - Primary color of the confetti pieces. Default is 'var(--c-primary)'.
 * @param {boolean} active - If true, starts the animation immediately. Default is true.
 */
interface Props {
  label?: string;
  color?: string;
  active?: boolean;
}

const { label = "Success!", color = 'var(--c-primary, #6366f1)', active = true } = Astro.props;
---

<div class:list={["confetti-trigger", { "confetti-trigger--active": active }]}>
  <span class="confetti-label">{label}</span>
  <div class="confetti-container" aria-hidden="true" style={\`--confetti-color: \${color}\`}>
    {Array.from({ length: 12 }).map((_, i) => (
      <div 
        class="confetti-piece" 
        style={\`--l: \${Math.random() * 100}%; --d: \${Math.random() * 2}s; --r: \${Math.random() * 360}deg; --s: \${0.5 + Math.random()} \`}
      ></div>
    ))}
  </div>
</div>

<style>
  .confetti-trigger { 
    position: relative; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    padding: var(--sp-4, 1rem);
    width: fit-content;
    overflow: hidden;
  }
  
  .confetti-label { 
    font-size: 1.25rem; 
    font-weight: 800; 
    color: var(--c-text-1, #fff); 
    z-index: 1; 
    text-shadow: 0 4px 10px rgba(0,0,0,0.3);
  }
  
  .confetti-container { 
    position: absolute; 
    inset: 0; 
    pointer-events: none; 
    opacity: 0; 
    transition: opacity 0.3s;
  }
  
  .confetti-trigger--active .confetti-container { opacity: 1; }
  
  .confetti-piece { 
    position: absolute; 
    left: var(--l); 
    top: -20px; 
    width: 10px; height: 10px; 
    background: var(--confetti-color); 
    border-radius: 2px; 
    transform: rotate(var(--r)) scale(var(--s));
    opacity: 0; 
  }
  
  .confetti-trigger--active .confetti-piece {
    animation: confetti-fall 2.5s linear infinite var(--d); 
  }
  
  @keyframes confetti-fall {
    0% { transform: translateY(0) rotate(0deg) scale(var(--s)); opacity: 1; }
    25% { transform: translateY(40px) rotate(90deg) translateX(10px); }
    50% { transform: translateY(80px) rotate(180deg) translateX(-10px); }
    75% { transform: translateY(120px) rotate(270deg) translateX(5px); }
    100% { transform: translateY(160px) rotate(360deg); opacity: 0; }
  }
</style>
`,
    usage: `<ConfettiFeedback label="Mission Accomplished" />`,
  },
  {
    slug: 'cyber-glitch-alert',
    name: 'Glitch Alert',
    description: 'Loud cyberpunk-style alert.',
    category: 'feedback',
    tags: ["alert","cyber"],
    featured: true,
    code: `---
/**
 * CyberGlitchAlert — A loud, high-contrast alert box with a CSS glitch animation effect.
 * 
 * @param {string} message - Primary alert text. Default is "CRITICAL ERROR".
 * @param {string} accentColor - The secondary glitch shadow color. Default is '#00e0ff'.
 */
interface Props {
  message?: string;
  accentColor?: string;
}

const { message = "CRITICAL ERROR", accentColor = "#00e0ff" } = Astro.props;
---

<div class="glitch-alert" role="alert" style={\`--glitch-accent: \${accentColor}\`}>
  <span class="glitch-text" data-text={message}>{message}</span>
</div>

<style>
  .glitch-alert { 
    background: var(--c-primary, #ff003c); 
    padding: var(--sp-6, 1.5rem); 
    border: 3px solid var(--c-text-1, #fff); 
    position: relative; 
    overflow: hidden; 
    width: 100%;
    box-sizing: border-box;
    box-shadow: 8px 8px 0 rgba(0,0,0,0.5);
  }
  
  .glitch-text { 
    font-family: 'Courier New', Courier, monospace; 
    font-weight: 900; 
    color: var(--c-text-1, #fff); 
    font-size: 1.25rem; 
    display: block;
    text-align: center;
    position: relative;
    letter-spacing: 0.1em;
  }
  
  .glitch-text::before,
  .glitch-text::after { 
    content: attr(data-text); 
    position: absolute; 
    top: 0; left: 0; 
    width: 100%; height: 100%;
    background: var(--c-primary, #ff003c);
  }

  .glitch-text::before {
    left: 2px;
    text-shadow: -2px 0 var(--glitch-accent);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 2s infinite linear alternate-reverse;
  }

  .glitch-text::after {
    left: -2px;
    text-shadow: -2px 0 #fff;
    clip: rect(12px, 450px, 80px, 0);
    animation: glitch-anim 3s infinite linear alternate-reverse;
  }
  
  @keyframes glitch-anim { 
    0% { clip: rect(10px, 9999px, 30px, 0); }
    20% { clip: rect(40px, 9999px, 60px, 0); }
    40% { clip: rect(70px, 9999px, 10px, 0); }
    60% { clip: rect(20px, 9999px, 50px, 0); }
    80% { clip: rect(90px, 9999px, 20px, 0); }
    100% { clip: rect(50px, 9999px, 80px, 0); }
  }
</style>
`,
    usage: `<CyberGlitchAlert message="SYSTEM BREACH" />`,
  },
  {
    slug: 'empty-state-card',
    name: 'Empty State',
    description: 'Placeholder for missing content or results.',
    category: 'feedback',
    tags: ["placeholder","empty"],
    featured: true,
    code: `---
/**
 * EmptyStateCard — A placeholder component for empty views or failed searches.
 * 
 * @param {string} icon - The emoji or symbol to display. Default is '📁'.
 * @param {string} title - The primary bold headline. Default is 'No results found'.
 * @param {string} message - Supporting descriptive text.
 * @param {string} ctaLabel - Optional button text for an action.
 */
interface Props {
  icon?: string;
  title?: string;
  message?: string;
  ctaLabel?: string;
}

const { 
  icon = "📁", 
  title = "No results found", 
  message = "Try adjusting your filters or adding a new item.",
  ctaLabel
} = Astro.props;
---

<div class="empty-state">
  <div class="empty-state__icon" aria-hidden="true">{icon}</div>
  <h4 class="empty-state__title">{title}</h4>
  <p class="empty-state__message">{message}</p>
  {ctaLabel && <button class="empty-state__btn" type="button">{ctaLabel}</button>}
</div>

<style>
  .empty-state { 
    text-align: center; 
    padding: var(--sp-16, 4rem) var(--sp-8, 2rem); 
    border: 2px dashed var(--c-border, rgba(255,255,255,0.1)); 
    border-radius: var(--r-xl, 24px); 
    color: var(--c-text-2, #94a3b8); 
    background: var(--c-bg-elev, rgba(255,255,255,0.02)); 
    width: 100%;
    box-sizing: border-box;
  }
  
  .empty-state__icon { font-size: 3.5rem; margin-bottom: var(--sp-4, 1rem); opacity: 0.6; filter: grayscale(0.5); }
  
  .empty-state__title { color: var(--c-text-1, #fff); margin: 0; font-size: 1.25rem; font-weight: 700; }
  
  .empty-state__message { font-size: 0.95rem; margin-top: 0.75rem; max-width: 320px; margin-inline: auto; line-height: 1.5; }
  
  .empty-state__btn { 
    margin-top: var(--sp-6, 1.5rem); 
    background: var(--c-primary, #6366f1); 
    color: #fff; border: none; 
    padding: 0.6rem 1.4rem; 
    border-radius: var(--r-md, 8px); 
    font-weight: 700; cursor: pointer; 
    transition: transform 0.2s;
  }
  
  .empty-state__btn:hover { transform: translateY(-2px); filter: brightness(1.1); }
</style>
`,
    usage: `<EmptyStateCard icon="🔍" title="No Matches" message="Try again." ctaLabel="Reset" />`,
  },
  {
    slug: 'glass-alert',
    name: 'Glass Alert',
    description: 'Translucent feedback bar.',
    category: 'feedback',
    tags: ["alert","glass"],
    featured: true,
    code: `---
/**
 * GlassAlert — A translucent feedback bar for displaying situational messages.
 * 
 * @param {'info'|'success'|'warning'|'error'} type - The severity or nature of the alert. Default is 'info'.
 * @param {string} title - Bold header text for the alert.
 */
interface Props { 
  type?: 'info' | 'success' | 'warning' | 'error'; 
  title: string; 
}

const { type = 'info', title } = Astro.props;

const icons = {
  info: "i",
  success: "✓",
  warning: "!",
  error: "✕"
};
---

<div class:list={['glass-alert', \`glass-alert--\${type}\` ]} role="alert">
  <div class="glass-alert__icon" aria-hidden="true">{icons[type]}</div>
  <div class="glass-alert__content">
    <div class="glass-alert__title">{title}</div>
    <div class="glass-alert__body"><slot /></div>
  </div>
</div>

<style>
  .glass-alert { 
    display: flex; 
    gap: var(--sp-4, 1rem); 
    padding: var(--sp-5, 1.25rem); 
    border-radius: var(--r-md, 16px); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    backdrop-filter: blur(12px); 
    background: var(--c-bg-elev, rgba(255,255,255,0.03)); 
    width: 100%;
    box-sizing: border-box;
  }
  
  .glass-alert--success { border-color: rgba(52, 211, 153, 0.3); background: rgba(52, 211, 153, 0.05); }
  .glass-alert--warning { border-color: rgba(245, 158, 11, 0.3); background: rgba(245, 158, 11, 0.05); }
  .glass-alert--error { border-color: rgba(239, 68, 68, 0.3); background: rgba(239, 68, 68, 0.05); }
  
  .glass-alert__icon { 
    font-weight: 900; 
    background: rgba(255, 255, 255, 0.1); 
    width: 24px; height: 24px; 
    display: grid; place-items: center; 
    border-radius: var(--r-full, 50%); 
    font-size: 0.8rem; 
    flex-shrink: 0;
    font-family: monospace;
    color: var(--c-text-1, #fff);
  }
  
  .glass-alert--success .glass-alert__icon { background: #10b981; color: #fff; }
  .glass-alert--warning .glass-alert__icon { background: #f59e0b; color: #fff; }
  .glass-alert--error .glass-alert__icon { background: #ef4444; color: #fff; }
  
  .glass-alert__title { font-weight: 700; color: var(--c-text-1, #fff); margin-bottom: 2px; font-size: 0.95rem; }
  .glass-alert__body { font-size: 0.85rem; color: var(--c-text-2, #94a3b8); line-height: 1.5; }
</style>
`,
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
    code: `---
/**
 * GlassModal — A premium overlay dialog for critical confirmations or focused interactions.
 * 
 * @param {string} id - HTML ID for toggle and script and association.
 * @param {string} title - Header text. Default is "Confirm Action".
 * @param {string} confirmLabel - Label for the primary button. Default is "Confirm".
 * @param {string} cancelLabel - Label for the secondary button. Default is "Cancel".
 */
interface Props {
  id: string;
  title?: string;
  confirmLabel?: string;
  cancelLabel?: string;
}

const { 
  id, 
  title = "Confirm Action", 
  confirmLabel = "Confirm", 
  cancelLabel = "Cancel" 
} = Astro.props;
---

<dialog id={id} class="modal-dialog">
  <div class="modal-box">
    <div class="modal-header"><h3>{title}</h3></div>
    <div class="modal-body">
      <slot />
    </div>
    <div class="modal-footer">
      <form method="dialog">
        <button class="modal-btn modal-btn--sec" type="submit">{cancelLabel}</button>
      </form>
      <button class="modal-btn modal-btn--pri" data-modal-confirm>{confirmLabel}</button>
    </div>
  </div>
</dialog>

<style>
  .modal-dialog { 
    background: transparent; 
    border: none; 
    padding: 0;
    max-width: 400px;
    width: 100%;
    overflow: visible;
  }
  
  .modal-dialog::backdrop {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    animation: fade-in 0.3s forwards;
  }
  
  .modal-box { 
    background: var(--c-bg-elev, rgba(255,255,255,0.05)); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    border-radius: var(--r-xl, 24px); 
    padding: var(--sp-8, 2rem); 
    box-shadow: 0 30px 100px rgba(0,0,0,0.6);
    color: var(--c-text-1, #fff);
  }
  
  .animate-open { animation: scale-up 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }

  .modal-header h3 { margin: 0 0 var(--sp-4, 1rem); color: var(--c-text-1, #fff); font-size: 1.25rem; }
  
  .modal-body { color: var(--c-text-2, #94a3b8); font-size: 0.95rem; line-height: 1.6; }
  
  .modal-footer { display: flex; justify-content: flex-end; gap: var(--sp-4, 1rem); margin-top: var(--sp-8, 2rem); }
  
  .modal-btn { 
    padding: 0.7rem 1.4rem; 
    border-radius: var(--r-md, 12px); 
    border: none; 
    font-weight: 700; 
    cursor: pointer; 
    font-family: inherit;
    transition: 0.2s;
  }
  
  .modal-btn--sec { background: transparent; color: var(--c-text-1, #fff); border: 1px solid var(--c-border, rgba(255,255,255,0.1)); }
  .modal-btn--sec:hover { background: rgba(255,255,255,0.05); }
  
  .modal-btn--pri { 
    background: var(--c-primary, #6366f1); 
    color: #fff; 
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  }
  .modal-btn--pri:hover { transform: translateY(-2px); filter: brightness(1.1); }
  
  @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
  @keyframes scale-up { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
</style>

<script>
  // Add simple show/hide logic helper if needed, but <dialog> works natively
  document.querySelectorAll('dialog').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.close();
    });
  });
</script>
`,
    usage: `<GlassModal id="m1" title="Delete Account" confirmLabel="Delete">Proceed with caution.</GlassModal>`,
  },
  {
    slug: 'glass-progress',
    name: 'Glass Progress',
    description: 'Linear progress bar with glass effect.',
    category: 'feedback',
    tags: ["progress","bar"],
    featured: true,
    code: `---
/**
 * GlassProgress — A horizontal linear progress bar with glassmorphism and gradient fill.
 * 
 * @param {number} value - The current progress from 0 to 100.
 * @param {string} label - Optional accessible label message.
 */
interface Props {
  value: number;
  label?: string;
}

const { value, label = "Progress bar" } = Astro.props;
---

<div 
  class="progress-container" 
  role="progressbar" 
  aria-valuenow={value} 
  aria-valuemin="0" 
  aria-valuemax="100"
  aria-label={label}
>
  <div class="progress-fill" style={\`width: \${Math.min(100, Math.max(0, value))}%\`}></div>
</div>

<style>
  .progress-container { 
    height: 10px; 
    background: var(--c-bg-elev, rgba(255,255,255,0.05)); 
    border-radius: var(--r-full, 10px); 
    overflow: hidden; 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    width: 100%;
  }
  
  .progress-fill { 
    height: 100%; 
    background: linear-gradient(90deg, var(--c-primary, #6366f1), var(--c-primary-light, #c084fc)); 
    border-radius: inherit; 
    transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1); 
    box-shadow: 0 0 10px rgba(99,102,241,0.3); 
  }
</style>
`,
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
    code: `---
/**
 * IndicatorBadgeMinimal — A small notification dot typically placed on the corner of an icon or avatar.
 * 
 * @param {string} color - CSS color for the indicator dot. Default is 'var(--c-primary)'.
 * @param {string} position - Corner position (top-right|top-left|bottom-right|bottom-left). Default is 'top-right'.
 * @param {boolean} pulse - If true, adds a glowing pulse animation.
 */
interface Props {
  color?: string;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  pulse?: boolean;
}

const { 
  color = 'var(--c-primary, #6366f1)', 
  position = 'top-right',
  pulse = false 
} = Astro.props;

const positionStyles = {
  'top-right': 'top: 0; right: 0; transform: translate(25%, -25%);',
  'top-left': 'top: 0; left: 0; transform: translate(-25%, -25%);',
  'bottom-right': 'bottom: 0; right: 0; transform: translate(25%, 25%);',
  'bottom-left': 'bottom: 0; left: 0; transform: translate(-25%, 25%);'
};
---

<div class="indicator-wrap">
  <slot />
  <span 
    class:list={['dot-indicator', { 'dot-indicator--pulse': pulse }]} 
    style={\`background: \${color}; \${positionStyles[position]}\`}
    aria-hidden="true"
  ></span>
</div>

<style>
  .indicator-wrap { position: relative; width: fit-content; display: inline-flex; }
  .dot-indicator { 
    position: absolute; 
    width: 10px; height: 10px; 
    border: 2px solid var(--c-bg, #080b14); 
    border-radius: var(--r-full, 50%); 
    z-index: 10;
  }
  
  .dot-indicator--pulse::after {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    border: 2px solid inherit;
    background: inherit;
    opacity: 0.6;
    animation: indicator-pulse 2s infinite;
  }
  
  @keyframes indicator-pulse {
    0% { transform: scale(1); opacity: 0.6; }
    100% { transform: scale(2.5); opacity: 0; }
  }
</style>
`,
    usage: `<IndicatorBadgeMinimal color="#ef4444" position="top-right" pulse><button>Inbox</button></IndicatorBadgeMinimal>`,
  },
  {
    slug: 'neon-spinner',
    name: 'Neon Spinner',
    description: 'Glow-style loading spinner.',
    category: 'feedback',
    tags: ["loading","spinner"],
    featured: true,
    code: `---
/**
 * NeonSpinner — A sleek, glowing loading spinner with customizable color and size.
 * 
 * @param {string} color - CSS color for the primary spinning segment. Default is 'var(--c-primary)'.
 * @param {'sm'|'md'|'lg'} size - Predetermined size variant. Default is 'md'.
 */
interface Props {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

const { color = 'var(--c-primary, #6366f1)', size = 'md' } = Astro.props;

const dimensions = {
  sm: '24px',
  md: '40px',
  lg: '64px'
};
---

<div 
  class="neon-spinner" 
  style={\`--spinner-color: \${color}; --spinner-size: \${dimensions[size]};\`}
  role="status"
  aria-label="Loading"
></div>

<style>
  .neon-spinner { 
    width: var(--spinner-size); 
    height: var(--spinner-size); 
    border: 3px solid var(--c-bg-elev, #111); 
    border-top-color: var(--spinner-color); 
    border-radius: var(--r-full, 50%); 
    animation: neon-spin 0.8s linear infinite; 
    filter: drop-shadow(0 0 5px var(--spinner-color)); 
  }
  
  @keyframes neon-spin { 
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); } 
  }
</style>
`,
    usage: `<NeonSpinner size="md" />`,
  },
  {
    slug: 'pulse-dot',
    name: 'Pulse Dot',
    description: 'Status label with pulsing effect.',
    category: 'feedback',
    tags: ["indicator","status"],
    featured: true,
    code: `---
/**
 * PulseDot — A status indicator with a labeled text and a pulsing dot animation.
 * 
 * @param {string} label - Text label (e.g. "System Active").
 * @param {string} color - CSS color for the pulse and text. Default is '#34d399' (Success).
 */
interface Props {
  label: string;
  color?: string;
}

const { label, color = '#34d399' } = Astro.props;
---

<div class="status-wrap" style={\`--status-color: \${color};\`}>
  <div class="pulse-dot" aria-hidden="true"></div>
  <span class="status-text">{label}</span>
</div>

<style>
  .status-wrap { 
    display: flex; 
    align-items: center; 
    gap: var(--sp-3, 0.6rem); 
    color: var(--status-color); 
    font-weight: 700; 
    font-size: 0.75rem; 
    text-transform: uppercase; 
    letter-spacing: 0.05em;
  }
  
  .pulse-dot { 
    width: 8px; 
    height: 8px; 
    background: var(--status-color); 
    border-radius: var(--r-full, 50%); 
    position: relative; 
  }
  
  .pulse-dot::after { 
    content: ""; 
    position: absolute; 
    inset: 0; 
    border-radius: 50%; 
    border: 2px solid var(--status-color); 
    animation: status-pulse 1.8s infinite; 
  }
  
  @keyframes status-pulse { 
    0% { transform: scale(1); opacity: 0.8; }
    100% { transform: scale(3.5); opacity: 0; } 
  }
  
  .status-text { white-space: nowrap; }
</style>
`,
    usage: `<PulseDot label="Recording" color="#ef4444" />`,
  },
  {
    slug: 'rating-pill',
    name: 'Rating Pill',
    description: 'Compact numeric score badge.',
    category: 'feedback',
    tags: ["rating","score"],
    featured: true,
    code: `---
/**
 * RatingPill — A compact badge displaying a numeric score or rating stars.
 * 
 * @param {number} score - The rating value (0 to 5).
 * @param {boolean} showStar - If true, displays a star icon suffix. Default is true.
 */
interface Props {
  score: number;
  showStar?: boolean;
}

const { score, showStar = true } = Astro.props;

const status = score >= 4 ? 'high' : score >= 3 ? 'mid' : 'low';
---

<div class:list={["rate-pill", \`rate-pill--\${status}\`]}>
  <span class="rate-pill__val">{score.toFixed(1)}</span>
  {showStar && <span class="rate-pill__star" aria-hidden="true">★</span>}
</div>

<style>
  .rate-pill { 
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: var(--sp-1, 4px) var(--sp-3, 12px); 
    border-radius: var(--r-full, 100px); 
    font-weight: 800; 
    font-size: 0.75rem; 
    color: #fff; 
    width: fit-content; 
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
  
  .rate-pill--high { background: #10b981; }
  .rate-pill--mid { background: #f59e0b; }
  .rate-pill--low { background: #ef4444; }
  
  .rate-pill__star { font-size: 0.8rem; margin-top: -1px; }
  .rate-pill__val { font-family: inherit; }
</style>
`,
    usage: `<RatingPill score={4.8} />`,
  },
  {
    slug: 'shake-error-group',
    name: 'Shake Feedback',
    description: 'Horizontal shake indicator for errors.',
    category: 'feedback',
    tags: ["error","feedback"],
    featured: true,
    code: `---
/**
 * ShakeError — A feedback container that shakes horizontally to indicate failure or invalid input.
 * 
 * @param {string} message - The error message to display.
 * @param {boolean} active - If true, triggers the shake animation once.
 */
interface Props {
  message: string;
  active?: boolean;
}

const { message, active = false } = Astro.props;
---

<div class:list={["shake-box", { "shake-box--active": active }]} role="alert">
  <span class="shake-box__icon" aria-hidden="true">⚠️</span>
  <span class="shake-box__msg">{message}</span>
</div>

<style>
  .shake-box { 
    display: flex; 
    align-items: center; 
    gap: var(--sp-3, 0.75rem);
    background: rgba(239, 68, 68, 0.08); 
    border: 1px solid var(--c-error, #ef4444); 
    color: #f87171; 
    padding: var(--sp-4, 1rem); 
    border-radius: var(--r-md, 10px); 
    text-align: center; 
    font-weight: 600; 
    width: 100%;
    box-sizing: border-box;
  }
  
  .shake-box--active { animation: shake-kb 0.5s cubic-bezier(.36,.07,.19,.97) both; }
  
  .shake-box__icon { font-size: 1rem; }
  .shake-box__msg { font-size: 0.9rem; }

  @keyframes shake-kb { 
    10%, 90% { transform: translateX(-1px); } 
    20%, 80% { transform: translateX(2px); } 
    30%, 50%, 70% { transform: translateX(-4px); } 
    40%, 60% { transform: translateX(4px); } 
  }
</style>
`,
    usage: `<ShakeErrorGroup message="Wrong password" active />`,
  },
  {
    slug: 'simple-tooltip',
    name: 'Simple Tooltip',
    description: 'Hover-based hint message.',
    category: 'feedback',
    tags: ["tooltip","hint"],
    featured: true,
    code: `---
/**
 * SimpleTooltip — A lightweight hover-based hint for buttons or icons.
 * 
 * @param {string} text - The tooltip content text.
 * @param {'top'|'bottom'|'left'|'right'} position - Preferred placement relative to the child. Default is 'top'.
 */
interface Props {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const { text, position = 'top' } = Astro.props;
---

<div class:list={["tooltip-wrap", \`tooltip-wrap--\${position}\`]} data-tip={text}>
  <slot />
</div>

<style>
  .tooltip-wrap { 
    position: relative; 
    display: inline-flex; 
    cursor: help; 
  }
  
  .tooltip-wrap::after { 
    content: attr(data-tip); 
    position: absolute; 
    padding: var(--sp-2, 6px) var(--sp-3, 12px); 
    background: var(--c-bg-elev, #111); 
    color: var(--c-text-1, #fff); 
    font-size: 0.72rem; 
    font-weight: 600;
    border-radius: var(--r-sm, 6px); 
    white-space: nowrap; 
    opacity: 0; 
    pointer-events: none; 
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    box-shadow: 0 10px 30px rgba(0,0,0,0.5); 
    z-index: 100;
  }
  
  /* Positions */
  .tooltip-wrap--top::after { bottom: 125%; left: 50%; transform: translateX(-50%) translateY(5px); }
  .tooltip-wrap--bottom::after { top: 125%; left: 50%; transform: translateX(-50%) translateY(-5px); }
  .tooltip-wrap--left::after { right: 125%; top: 50%; transform: translateY(-50%) translateX(5px); }
  .tooltip-wrap--right::after { left: 125%; top: 50%; transform: translateY(-50%) translateX(-5px); }

  /* Hover States */
  .tooltip-wrap:hover::after { 
    opacity: 1; 
  }
  .tooltip-wrap--top:hover::after { transform: translateX(-50%) translateY(0); }
  .tooltip-wrap--bottom:hover::after { transform: translateX(-50%) translateY(0); }
  .tooltip-wrap--left:hover::after { transform: translateY(-50%) translateX(0); }
  .tooltip-wrap--right:hover::after { transform: translateY(-50%) translateX(0); }
</style>
`,
    usage: `<SimpleTooltip text="Edit profile" position="top"><button>Settings</button></SimpleTooltip>`,
  },
  {
    slug: 'skeleton-list',
    name: 'Skeleton Loader',
    description: 'Placeholder content for loading feeds.',
    category: 'feedback',
    tags: ["loading","skeleton"],
    featured: true,
    code: `---
/**
 * SkeletonList — Shimmering loading placeholder for lists or feed items.
 * 
 * @param {number} count - Number of skeleton items to render. Default is 3.
 */
interface Props {
  count?: number;
}

const { count = 3 } = Astro.props;
---

<div class="skeleton-list" aria-hidden="true">
  {Array.from({ length: count }).map(() => (
    <div class="skeleton-item">
      <div class="skeleton-avatar"></div>
      <div class="skeleton-content">
        <div class="skeleton-line skeleton-line--title"></div>
        <div class="skeleton-line skeleton-line--body"></div>
      </div>
    </div>
  ))}
</div>

<style>
  .skeleton-list { display: flex; flex-direction: column; width: 100%; }
  
  .skeleton-item { 
    display: flex; gap: var(--sp-4, 1rem); 
    padding: var(--sp-4, 1rem) 0; 
    border-bottom: 1px solid var(--c-border, rgba(255,255,255,0.05)); 
  }
  
  .skeleton-avatar { 
    width: 48px; height: 48px; 
    border-radius: var(--r-full, 50%); 
    background: var(--c-bg-elev, rgba(255,255,255,0.05)); 
    flex-shrink: 0;
  }
  
  .skeleton-content { flex: 1; display: flex; flex-direction: column; gap: 10px; justify-content: center; }
  
  .skeleton-line { 
    height: 12px; 
    background: var(--c-bg-elev, rgba(255,255,255,0.05)); 
    border-radius: var(--r-sm, 6px); 
    position: relative; overflow: hidden;
  }

  .skeleton-line--title { width: 40%; height: 14px; }
  .skeleton-line--body { width: 85%; }
  
  .skeleton-item div::after { 
    content: ""; 
    position: absolute; 
    inset: 0; 
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent); 
    animation: skeleton-shimmer 1.8s infinite; 
    transform: translateX(-100%);
  }
  
  @keyframes skeleton-shimmer { 
    100% { transform: translateX(100%); } 
  }
</style>
`,
    usage: `<SkeletonList count={4} />`,
  },
  {
    slug: 'spotlight',
    name: 'Focus Spotlight',
    description: 'Highlighting effect for specific elements.',
    category: 'feedback',
    tags: ["focus","highlight"],
    featured: true,
    code: `---
/**
 * Spotlight — A visual emphasis component that dims the page and highlights its children.
 * 
 * @param {boolean} active - If true, the spotlight overlay is visible. Default is false.
 * @param {number} opacity - Background overlay opacity (0 to 1). Default is 0.7.
 */
interface Props {
  active?: boolean;
  opacity?: number;
}

const { active = false, opacity = 0.7 } = Astro.props;
---

<div class:list={["spotlight-wrap", { "spotlight-wrap--active": active }]} style={\`--spotlight-opacity: \${opacity};\`}>
  <div class="spotlight-content">
    <slot />
  </div>
</div>

<style>
  .spotlight-wrap { 
    position: relative; 
    display: inline-block;
    transition: z-index 0.3s;
  }
  
  .spotlight-wrap--active { z-index: 2000; }
  
  .spotlight-wrap--active::after {
    content: "";
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,var(--spotlight-opacity));
    backdrop-filter: blur(4px);
    z-index: -1;
    animation: spotlight-fade 0.3s forwards;
    pointer-events: none;
  }
  
  .spotlight-content { 
    position: relative;
    border-radius: var(--r-md, 12px); 
    transition: transform 0.3s;
  }
  
  .spotlight-wrap--active .spotlight-content {
    transform: scale(1.05);
    box-shadow: 0 0 50px rgba(255,255,255,0.1);
  }

  @keyframes spotlight-fade { from { opacity: 0; } to { opacity: 1; } }
</style>
`,
    usage: `<Spotlight active opacity={0.8}><div style="padding: 20px; background: #fff; color: #000">Focused Content</div></Spotlight>`,
  },
  {
    slug: 'step-progress',
    name: 'Step Tracker',
    description: 'Multi-stage progress tracker.',
    category: 'feedback',
    tags: ["stepper","workflow"],
    featured: true,
    code: `---
/**
 * StepProgress — A multi-stage stepper indicating flow through several discrete points.
 * 
 * @param {Array<{label: string}>} steps - List of steps to represent.
 * @param {number} activeIndex - The index (0-based) of the current step. Default is 0.
 */
interface Props {
  steps?: Array<{ label: string }>;
  activeIndex?: number;
}

const { 
  steps = [
    { label: 'Details' }, 
    { label: 'Payment' }, 
    { label: 'Finish' }
  ], 
  activeIndex = 0 
} = Astro.props;
---

<div class="steps-container">
  <div class="steps-line" aria-hidden="true" style={\`--progress: \${(activeIndex / (steps.length - 1)) * 100}%\`}></div>
  <div class="steps-list">
    {steps.map((step, i) => (
      <div 
        class:list={['step-item', { 'step-item--active': i === activeIndex, 'step-item--complete': i < activeIndex }]}
        aria-current={i === activeIndex ? "step" : undefined}
      >
        <div class="step-circle">{i + 1}</div>
        <span class="step-label">{step.label}</span>
      </div>
    ))}
  </div>
</div>

<style>
  .steps-container { position: relative; margin-bottom: var(--sp-8, 2rem); width: 100%; padding: 0 var(--sp-4, 1rem); box-sizing: border-box; }
  
  .steps-line { 
    position: absolute; 
    top: 16px; left: 0; right: 0; 
    height: 3px; 
    background: var(--c-bg-elev, rgba(255,255,255,0.05)); 
    z-index: 0; 
  }
  
  .steps-line::after {
    content: "";
    position: absolute;
    left: 0; top: 0;
    height: 100%;
    width: var(--progress);
    background: var(--c-primary, #6366f1);
    transition: width 0.4s ease-in-out;
    box-shadow: 0 0 10px rgba(99,102,241,0.3);
  }

  .steps-list { display: flex; justify-content: space-between; position: relative; z-index: 1; }
  
  .step-circle { 
    width: 32px; height: 32px; 
    border-radius: var(--r-full, 50%); 
    background: var(--c-bg, #1e293b); 
    color: var(--c-text-2, #64748b); 
    border: 2px solid var(--c-border, rgba(255,255,255,0.1)); 
    display: grid; place-items: center; 
    font-size: 0.85rem; font-weight: 800; 
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .step-item--active .step-circle { 
    background: var(--c-primary, #6366f1); 
    border-color: var(--c-primary, #6366f1); 
    color: #fff; 
    box-shadow: 0 0 20px rgba(99,102,241,0.5); 
    transform: scale(1.1);
  }

  .step-item--complete .step-circle {
    background: var(--c-primary, #6366f1);
    border-color: var(--c-primary, #6366f1);
    color: #fff;
  }
  
  .step-label { 
    position: absolute; 
    top: 100%; left: 50%;
    transform: translateX(-50%);
    margin-top: 8px; 
    font-size: 0.7rem; 
    font-weight: 700;
    white-space: nowrap; 
    color: var(--c-text-2, #64748b); 
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .step-item--active .step-label, .step-item--complete .step-label { color: var(--c-text-1, #fff); }
</style>
`,
    usage: `<StepProgress activeIndex={1} steps={[{label: "Step 1"}, {label: "Step 2"}, {label: "Step 3"}]} />`,
  },
  {
    slug: 'toast-notif',
    name: 'Toast Message',
    description: 'Transient snackbar notification.',
    category: 'feedback',
    tags: ["toast","notification"],
    featured: true,
    code: `---
/**
 * ToastNotif — A transient snackbar notification that appears at the corner of the screen.
 * 
 * @param {string} message - The notification content.
 * @param {string} icon - Emoji or SVG icon. Default is '✅'.
 * @param {'success'|'info'|'error'} variant - Theme of the toast. Default is 'success'.
 * @param {boolean} show - Initial visibility. Default is true.
 */
interface Props {
  message: string;
  icon?: string;
  variant?: 'success' | 'info' | 'error';
  show?: boolean;
}

const { 
  message, 
  icon = "✅", 
  variant = 'success',
  show = true 
} = Astro.props;
---

<div class:list={['toast', \`toast--\${variant}\`, { 'toast--show': show }]} role="status">
  <div class="toast__icon" aria-hidden="true">{icon}</div>
  <span class="toast__msg">{message}</span>
</div>

<style>
  .toast { 
    position: fixed; 
    bottom: 2rem; 
    right: 2rem; 
    background: var(--c-bg-elev, #0f172a); 
    color: var(--c-text-1, #fff); 
    padding: var(--sp-4, 1rem) var(--sp-6, 1.5rem); 
    border-radius: var(--r-md, 14px); 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1)); 
    display: flex; 
    align-items: center; 
    gap: var(--sp-3, 0.8rem); 
    box-shadow: 0 15px 45px rgba(0,0,0,0.4); 
    transform: translateY(150%) scale(0.9); 
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
    z-index: 10000; 
  }
  
  .toast--show { transform: translateY(0) scale(1); }
  
  .toast--success { border-left: 4px solid #10b981; }
  .toast--info { border-left: 4px solid var(--c-primary, #6366f1); }
  .toast--error { border-left: 4px solid #ef4444; }
  
  .toast__icon { 
    background: rgba(255,255,255,0.05); 
    width: 28px; height: 28px;
    display: grid; place-items: center;
    border-radius: var(--r-sm, 6px); 
    font-size: 1rem;
    flex-shrink: 0;
  }
  
  .toast__msg { font-size: 0.9rem; font-weight: 500; white-space: nowrap; }
</style>
`,
    usage: `<ToastNotif message="File uploaded" variant="success" />`,
  },
  {
    slug: 'typing-indicator',
    name: 'Typing Dots',
    description: 'Classic messenger-style typing indicator.',
    category: 'feedback',
    tags: ["loading","typing"],
    featured: true,
    code: `---
/**
 * TypingIndicator — A classic three-dot animation indicating a message is being composed.
 * 
 * @param {string} dotColor - CSS color for the dots. Default is 'var(--c-primary)'.
 * @param {string} label - Accessible ARIA label. Default is "Typing...".
 */
interface Props {
  dotColor?: string;
  label?: string;
}

const { 
  dotColor = 'var(--c-primary, #6366f1)', 
  label = "Someone is typing..." 
} = Astro.props;
---

<div class="typing-wrap" role="status" aria-label={label}>
  <div class="typing-dots" style={\`--dot-color: \${dotColor};\`}>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

<style>
  .typing-wrap { 
    display: flex; 
    padding: var(--sp-3, 0.75rem) var(--sp-5, 1.25rem); 
    background: var(--c-bg-elev, rgba(255,255,255,0.05)); 
    border-radius: var(--r-xl, 20px); 
    width: fit-content; 
    border: 1px solid var(--c-border, rgba(255,255,255,0.1));
  }
  
  .typing-dots { display: flex; gap: var(--sp-1, 4px); }
  
  .typing-dots span { 
    width: 6px; 
    height: 6px; 
    background: var(--c-text-muted, #64748b); 
    border-radius: var(--r-full, 50%); 
    animation: typing-bounce 0.8s infinite alternate cubic-bezier(0.455, 0.03, 0.515, 0.955); 
  }
  
  .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
  .typing-dots span:nth-child(3) { animation-delay: 0.4s; }
  
  @keyframes typing-bounce { 
    to { 
      transform: translateY(-4px); 
      background: var(--dot-color); 
      filter: drop-shadow(0 0 2px var(--dot-color));
    } 
  }
</style>
`,
    usage: `<TypingIndicator />`,
  },
];
