// ============================================================
// Astro Components Library - Main Barrel Export
// ============================================================
// Import any component from a single root entry point:
//   import { GlowButton, GlassCard, StatsMetricShowcase } from 'astro-component-kit';
// Or from category subpaths:
//   import { GlowButton } from 'astro-component-kit/buttons';
//   import { StatsMetricShowcase } from 'astro-component-kit/sections';
// ============================================================

// Root-level unique components
export { default as AnimatedGalaxy } from './lib/AnimatedGalaxy.astro';
export { default as Galaxy3D } from './lib/Galaxy3D.astro';
export { default as LogoWithGalaxy } from './lib/LogoWithGalaxy.astro';

// Re-export all categories completely
export * from './lib/buttons';
export * from './lib/cards';
export * from './lib/charts';
export * from './lib/data';
export * from './lib/feedback';
export * from './lib/forms';
export * from './lib/layout';
export * from './lib/navigation';
export * from './lib/overlays';
export * from './lib/sections';
export * from './lib/typography';
