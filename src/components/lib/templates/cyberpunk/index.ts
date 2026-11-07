// src/components/lib/templates/cyberpunk/index.ts
// Futuristic-brutalist cyberpunk template ("NULL/SECTOR"): a six-page site for a tech product with
// glitch headlines, HUD telemetry, a dot-matrix node map, classified spec sheet, usage-based pricing,
// manifesto, crew badges, uptime board and a command-line contact form. NIGHT and DAY themes.
//
//   import { CyberHomePage } from 'astro-component-kit/templates/cyberpunk';
//   <CyberHomePage routes={{ home: '/', protocol: '/protocol/', pricing: '/pricing/', manifesto: '/manifesto/', logs: '/logs/', terminal: '/terminal/' }} />

export { default as CyberLayout } from './CyberLayout.astro';
export { default as CyberHomePage } from './CyberHomePage.astro';
export { default as CyberProtocolPage } from './CyberProtocolPage.astro';
export { default as CyberPricingPage } from './CyberPricingPage.astro';
export { default as CyberManifestoPage } from './CyberManifestoPage.astro';
export { default as CyberLogsPage } from './CyberLogsPage.astro';
export { default as CyberTerminalPage } from './CyberTerminalPage.astro';

export { nullSector, cyberRoutes, cyberHref } from './data';
export type { CyberData, CyberRoutes, CyberNode } from './data';
