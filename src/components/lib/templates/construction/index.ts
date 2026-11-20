// src/components/lib/templates/construction/index.ts
// Barrel export for Strukto · Construction, Developments & Site OS template

// Layouts
export { default as ConstructionSiteLayout } from './ConstructionSiteLayout.astro';
export { default as ConstructionAppLayout } from './ConstructionAppLayout.astro';

// Storefront
export { default as ConstructionHomePage } from './ConstructionHomePage.astro';
export { default as ConstructionProjectsPage } from './ConstructionProjectsPage.astro';
export { default as ConstructionProjectDetailPage } from './ConstructionProjectDetailPage.astro';
export { default as ConstructionEstimatorPage } from './ConstructionEstimatorPage.astro';
export { default as ConstructionContactPage } from './ConstructionContactPage.astro';
export { default as ConstructionSignInPage } from './ConstructionSignInPage.astro';

// Site OS
export { default as ConstructionDashboardPage } from './ConstructionDashboardPage.astro';
export { default as ConstructionSitesPage } from './ConstructionSitesPage.astro';
export { default as ConstructionDailyLogPage } from './ConstructionDailyLogPage.astro';
export { default as ConstructionUnitsCmsPage } from './ConstructionUnitsCmsPage.astro';
export { default as ConstructionSettingsPage } from './ConstructionSettingsPage.astro';

export * from './data';
export { elevationSvg, blueprintDrawInit } from './construction-draw';
