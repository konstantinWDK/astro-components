// src/data/registry/typography.ts
import type { ComponentDoc } from './types';

export const typography: ComponentDoc[] = [
  {
    slug: 'gradient-heading',
    name: 'Gradient Heading',
    description: 'A punchy hero heading with a customizable multi-color gradient text effect.',
    category: 'typography',
    tags: ['typography', 'heading', 'gradient'],
    featured: true,
    code: `---
interface Props { level?: 1 | 2 | 3 | 4 | 5 | 6; from?: string; to?: string; }
const { level = 1, from = '#6366f1', to = '#c084fc' } = Astro.props;
const Tag = \`h\${level}\` as any;
---
<Tag class="grad-txt" style={\`--from: \${from}; --to: \${to}\`}><slot /></Tag>
<style>
  .grad-txt { display: inline-block; font-weight: 900; background: linear-gradient(135deg, var(--from), var(--to)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; line-height: 1.2; margin: 0; }
</style>
`,
    usage: `<GradientHeading level={2} from="#6366f1" to="#c084fc">Content</GradientHeading>`,
  },
  {
    slug: 'cyberpunk-glitch-text',
    name: 'Glitch Text',
    description: 'High-intensity cyberpunk glitch effect for attention-grabbing titles.',
    category: 'typography',
    tags: ['typography', 'glitch', 'cyberpunk'],
    code: `---
interface Props { text: string; }
const { text } = Astro.props;
---
<div class="glitch-text" data-text={text}>{text}</div>
<style>
  .glitch-text { position: relative; font-size: 3rem; font-weight: 900; color: #fff; text-transform: uppercase; }
  .glitch-text::before, .glitch-text::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
  .glitch-text::before { left: 2px; text-shadow: -2px 0 #ff003c; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim 5s infinite linear alternate-reverse; }
  .glitch-text::after { left: -2px; text-shadow: -2px 0 #00e0ff; clip: rect(12px, 450px, 80px, 0); animation: glitch-anim 2s infinite linear alternate-reverse; }
  @keyframes glitch-anim { 
    0% { clip: rect(10px, 9999px, 20px, 0); transform: skew(0.5deg); } 
    20% { clip: rect(40px, 9999px, 50px, 0); } 
    40% { clip: rect(80px, 9999px, 90px, 0); } 
    60% { clip: rect(20px, 9999px, 30px, 0); } 
    80% { clip: rect(60px, 9999px, 70px, 0); } 
    100% { clip: rect(0, 9999px, 10px, 0); transform: skew(-0.5deg); } 
  }
  @media (max-width: 768px) { .glitch-text { font-size: 2rem; } }
</style>
`,
    usage: `<CyberpunkGlitchText text="Sample text">Content</CyberpunkGlitchText>`,
  },
  {
    slug: 'glass-block-quote',
    name: 'Glass Blockquote',
    description: 'A stylish quote block with a blurred background and thick accent border.',
    category: 'typography',
    tags: ['typography', 'quote', 'glass'],
    code: `---
---
<blockquote class="glass-quote">
  <div class="q-ico">“</div>
  <p><slot /></p>
  <footer>— Team Astro Components</footer>
</blockquote>
<style>
  .glass-quote { position: relative; padding: 2.5rem; background: rgba(255,255,255,0.03); border-left: 4px solid #6366f1; border-radius: 0 20px 20px 0; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.05); }
  .q-ico { position: absolute; top: 0px; left: 1rem; font-size: 5rem; color: rgba(99,102,241,0.1); font-family: serif; line-height: 1; }
  p { font-size: 1.2rem; color: #e2e8f0; font-style: italic; line-height: 1.6; margin: 0 0 1rem; position: relative; z-index: 1; }
  footer { color: #64748b; font-size: 0.9rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
</style>
`,
    usage: `<GlassBlockQuote>Content</GlassBlockQuote>`,
  },
  {
    slug: 'typewriter-text',
    name: 'Typewriter Effect',
    description: 'Pure CSS typewriter animation for sequential text reveal.',
    category: 'typography',
    tags: ['typography', 'animation', 'typewriter'],
    code: `---
interface Props { text: string; speed?: string; }
const { text, speed = '3s' } = Astro.props;
---
<div class="tw-wrap">
  <span class="tw-text" style={\`--len: \${text.length}; --speed: \${speed}\`}>
    {text}
  </span>
</div>
<style>
  .tw-wrap { display: inline-block; }
  .tw-text { display: block; overflow: hidden; white-space: nowrap; border-right: 3px solid #6366f1; color: #fff; font-family: monospace; font-size: 1.5rem; font-weight: 700; width: 0; animation: typing var(--speed) steps(var(--len)) forwards, blink 0.75s step-end infinite; }
  @keyframes typing { from { width: 0 } to { width: 100% } }
  @keyframes blink { from, to { border-color: transparent } 50% { border-color: #6366f1 } }
</style>
`,
    usage: `<TypewriterText text="Sample text" speed="3s">Content</TypewriterText>`,
  },
  {
    slug: 'drop-cap-paragraph',
    name: 'Drop Cap Paragraph',
    description: 'Editorial-style paragraph with a large, stylized first letter.',
    category: 'typography',
    tags: ['typography', 'editorial', 'paragraph'],
    code: `---
---
<p class="drop-p"><slot /></p>
<style>
  .drop-p { color: #94a3b8; line-height: 1.8; font-size: 1.1rem; }
  .drop-p::first-letter { float: left; font-size: 4rem; font-weight: 900; line-height: 0.8; margin-right: 0.5rem; margin-top: 0.5rem; color: #fff; background: linear-gradient(135deg, #6366f1, #c084fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
</style>
`,
    usage: `<DropCapParagraph>Content</DropCapParagraph>`,
  },
  {
    slug: 'neon-text-highlight',
    name: 'Neon Highlight',
    description: 'Custom text highlight with a glowing neon border effect.',
    category: 'typography',
    tags: ['typography', 'highlight', 'neon'],
    code: `---
---
<span class="neon-hi"><slot /></span>
<style>
  .neon-hi { color: #fff; background: rgba(99,102,241,0.2); padding: 0.1em 0.3em; border-radius: 4px; box-shadow: 0 0 10px rgba(99,102,241,0.3); border: 1px solid rgba(99,102,241,0.4); }
</style>
`,
    usage: `<NeonTextHighlight>Content</NeonTextHighlight>`,
  },
  {
    slug: 'kbd-indicator',
    name: 'KBD Key Cap',
    description: 'Stylized keyboard shortcut indicator with a tactile UI look.',
    category: 'typography',
    tags: ['typography', 'utility', 'keyboard'],
    code: `---
---
<kbd class="tau-kbd"><slot /></kbd>
<style>
  .tau-kbd { background: #1e293b; border: 1px solid #334155; border-bottom-width: 3px; border-radius: 6px; padding: 2px 8px; color: #f1f5f9; font-family: sans-serif; font-weight: 700; font-size: 0.75rem; display: inline-flex; align-items: center; justify-content: center; min-width: 24px; box-shadow: 0 2px 0 rgba(0,0,0,0.4); vertical-align: middle; }
</style>
`,
    usage: `<KbdIndicator>Content</KbdIndicator>`,
  },
  {
    slug: 'animated-underline-link',
    name: 'Smart Underline Link',
    description: 'A link with a smooth underline animation that expands from the center.',
    category: 'typography',
    tags: ['typography', 'link', 'navigation'],
    code: `---
interface Props { href: string; }
const { href } = Astro.props;
---
<a href={href} class="smart-link"><slot /></a>
<style>
  .smart-link { color: #818cf8; text-decoration: none; position: relative; font-weight: 600; padding: 2px 0; }
  .smart-link::after { content: ""; position: absolute; bottom: -2px; left: 50%; width: 0; height: 2px; background: #6366f1; transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
  .smart-link:hover::after { width: 100%; left: 0; }
</style>
`,
    usage: `<AnimatedUnderlineLink href="#">Content</AnimatedUnderlineLink>`,
  },
  {
    slug: 'code-inline-glass',
    name: 'Inline Code (Glass)',
    description: 'Translucent inline code snippet for technical documentation.',
    category: 'typography',
    tags: ['typography', 'code', 'glass'],
    code: `---
---
<code class="glass-code"><slot /></code>
<style>
  .glass-code { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08); padding: 0.2rem 0.4rem; border-radius: 6px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; color: #e2e8f0; font-size: 0.9em; }
</style>
`,
    usage: `<CodeInlineGlass>Content</CodeInlineGlass>`,
  },
  {
    slug: 'stroke-heading-outline',
    name: 'Outlined Heading',
    description: 'A bold empty heading with only the stroke/outline visible.',
    category: 'typography',
    tags: ['typography', 'heading', 'outline'],
    code: `---
---
<h2 class="stroke-h"><slot /></h2>
<style>
  .stroke-h { font-size: 4rem; font-weight: 900; color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.2); text-transform: uppercase; letter-spacing: 0.05em; transition: 0.3s; margin: 0; }
  .stroke-h:hover { -webkit-text-stroke-color: #6366f1; }
  @media (max-width: 768px) { .stroke-h { font-size: 2.5rem; } }
</style>
`,
    usage: `<StrokeHeadingOutline>Content</StrokeHeadingOutline>`,
  },
  {
    slug: 'floating-text-label',
    name: 'Floating Label',
    description: 'Small text label that floats above a title or section.',
    category: 'typography',
    tags: ['typography', 'label', 'layout'],
    code: `---
---
<div class="f-label-wrap">
  <span class="f-label">PREMIUM</span>
  <slot />
</div>
<style>
  .f-label-wrap { position: relative; padding-top: 1.5rem; }
  .f-label { position: absolute; top: 0; left: 0; font-size: 0.7rem; font-weight: 800; color: #6366f1; letter-spacing: 0.2em; text-transform: uppercase; }
</style>
`,
    usage: `<FloatingTextLabel>Content</FloatingTextLabel>`,
  },
  {
    slug: 'shadow-reveal-text',
    name: 'Text Shadow Reveal',
    description: 'Heading with a subtle double shadow that adds depth.',
    category: 'typography',
    tags: ['typography', 'heading', 'shadow'],
    code: `---
---
<h2 class="rev-text"><slot /></h2>
<style>
  .rev-text { font-size: 3.5rem; font-weight: 900; color: #fff; text-shadow: 4px 4px 0px rgba(99,102,241,0.3), 8px 8px 0px rgba(0,0,0,0.5); margin: 0; line-height: 1.1; }
  @media (max-width: 768px) { .rev-text { font-size: 2rem; } }
</style>
`,
    usage: `<ShadowRevealText>Content</ShadowRevealText>`,
  },
  {
    slug: 'letter-spacing-wide',
    name: 'Cinematic Typography',
    description: 'Text with extreme letter spacing for a luxury or cinematic look.',
    category: 'typography',
    tags: ['typography', 'luxury', 'headers'],
    code: `---
---
<div class="cinema-txt"><slot /></div>
<style>
  .cinema-txt { color: #fff; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.8em; text-transform: uppercase; text-align: center; line-height: 1.5; }
</style>
`,
    usage: `<LetterSpacingWide>Content</LetterSpacingWide>`,
  },
  {
    slug: 'monospace-stat-line',
    name: 'Monospace Metrics',
    description: 'Technical line for displaying raw metrics or logs.',
    category: 'typography',
    tags: ['typography', 'metrics', 'code'],
    code: `---
---
<div class="mono-stat"><slot /></div>
<style>
  .mono-stat { background: #000; color: #00ff00; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; padding: 0.75rem 1.25rem; border-left: 3px solid #00ff00; font-size: 0.8rem; border-radius: 4px; border: 1px solid rgba(0, 255, 0, 0.1); }
</style>
`,
    usage: `<MonospaceStatLine>Content</MonospaceStatLine>`,
  },
  {
    slug: 'background-clip-mask',
    name: 'Image Masked Text',
    description: 'Text that uses an image as its background fill.',
    category: 'typography',
    tags: ['typography', 'mask', 'heading'],
    code: `---
---
<h1 class="mask-txt"><slot /></h1>
<style>
  .mask-txt { font-size: 8rem; font-weight: 900; background: url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80'); background-size: cover; background-position: center; -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0; line-height: 1; text-align: center; }
  @media (max-width: 768px) { .mask-txt { font-size: 4rem; } }
</style>
`,
    usage: `<BackgroundClipMask>Content</BackgroundClipMask>`,
  },
  {
    slug: 'glass-text-reveal',
    name: 'Glass Text Shimmer',
    description: 'Text with a moving translucent shimmer effect.',
    category: 'typography',
    tags: ['typography', 'shimmer', 'glass'],
    code: `---
---
<h3 class="shimmer-txt"><slot /></h3>
<style>
  .shimmer-txt { font-size: 2rem; color: rgba(255,255,255,0.2); background: linear-gradient(90deg, transparent, #fff, transparent); background-size: 200% 100%; -webkit-background-clip: text; animation: shimmer-anim 3s infinite linear; margin: 0; font-weight: 800; }
  @keyframes shimmer-anim { 0% { background-position: -100% 0; } 100% { background-position: 100% 0; } }
</style>
`,
    usage: `<GlassTextReveal>Content</GlassTextReveal>`,
  },
  {
    slug: 'minimal-list-markers',
    name: 'Custom List Markers',
    description: 'Unordered list with clean, styled bullet points.',
    category: 'typography',
    tags: ['typography', 'list', 'ux'],
    code: `---
---
<ul class="custom-list">
  <slot />
</ul>
<style>
  .custom-list { list-style: none; padding: 0; }
  .custom-list :global(li) { position: relative; padding-left: 1.5rem; margin-bottom: 0.85rem; color: #94a3b8; font-size: 1rem; line-height: 1.5; }
  .custom-list :global(li::before) { content: "→"; position: absolute; left: 0; color: #6366f1; font-weight: 900; }
</style>
`,
    usage: `<MinimalListMarkers>Content</MinimalListMarkers>`,
  },
  {
    slug: 'text-3d-layer',
    name: '3D Stacked Text',
    description: 'Text layers that create a three-dimensional depth effect.',
    category: 'typography',
    tags: ['typography', '3d', 'creative'],
    code: `---
---
<div class="stack-3d"><slot /></div>
<style>
  .stack-3d { font-size: 4rem; font-weight: 900; color: #fff; position: relative; text-shadow: 1px 1px #6366f1, 2px 2px #6366f1, 3px 3px #6366f1, 4px 4px #6366f1; line-height: 1.1; }
  @media (max-width: 768px) { .stack-3d { font-size: 2.5rem; } }
</style>
`,
    usage: `<Text3DLayer>3D TEXT</Text3DLayer>`,
  },
  {
    slug: 'gradient-underline-link',
    name: 'Gradient Link',
    description: 'Interactive link with a multi-color gradient underline.',
    category: 'typography',
    tags: ['typography', 'link', 'gradient'],
    code: `---
---
<a href="#" class="grad-link"><slot /></a>
<style>
  .grad-link { text-decoration: none; color: #fff; border-bottom: 3px solid transparent; border-image: linear-gradient(135deg, #6366f1, #c084fc); border-image-slice: 1; padding-bottom: 2px; font-weight: 700; transition: 0.3s; }
  .grad-link:hover { opacity: 0.8; padding-bottom: 5px; }
</style>
`,
    usage: `<GradientUnderlineLink>Content</GradientUnderlineLink>`,
  },
  {
    slug: 'faded-vertical-text',
    name: 'Side Header Text',
    description: 'Vertical text used for sidebars or decorative layout edges.',
    category: 'typography',
    tags: ['typography', 'vertical', 'decorative'],
    code: `---
---
<div class="v-txt"><slot /></div>
<style>
  .v-txt { writing-mode: vertical-rl; transform: rotate(180deg); color: #334155; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.4em; text-transform: uppercase; white-space: nowrap; }
</style>
`,
    usage: `<FadedVerticalText>Content</FadedVerticalText>`,
  },
];
