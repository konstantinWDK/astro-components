// src/components/lib/templates/food-delivery/index.ts
// Barrel export for "BiteFlow" · food delivery storefront + kitchen OS template.

// Layouts
export { default as FoodSiteLayout } from './FoodSiteLayout.astro';
export { default as FoodAppLayout } from './FoodAppLayout.astro';

// Storefront
export { default as FoodHomePage } from './FoodHomePage.astro';
export { default as FoodMenuPage } from './FoodMenuPage.astro';
export { default as FoodTrackingPage } from './FoodTrackingPage.astro';
export { default as FoodPartnerPage } from './FoodPartnerPage.astro';
export { default as FoodSignInPage } from './FoodSignInPage.astro';

// Kitchen OS
export { default as FoodDashboardPage } from './FoodDashboardPage.astro';
export { default as FoodKdsPage } from './FoodKdsPage.astro';
export { default as FoodMenuCmsPage } from './FoodMenuCmsPage.astro';
export { default as FoodOrdersPage } from './FoodOrdersPage.astro';
export { default as FoodRidersPage } from './FoodRidersPage.astro';
export { default as FoodSettingsPage } from './FoodSettingsPage.astro';

// Data, types and illustrations
export * from './data';
export { foodArt } from './food-art';
