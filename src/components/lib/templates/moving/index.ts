// src/components/lib/templates/moving/index.ts
// Barrel exports for Muvr · Moving, Logistics & Van Fleet Management Template.

export { default as MovingSiteLayout } from './MovingSiteLayout.astro';
export { default as MovingLayout } from './MovingLayout.astro';
export { default as MovingHomePage } from './MovingHomePage.astro';
export { default as MovingQuotePage } from './MovingQuotePage.astro';
export { default as MovingFleetPage } from './MovingFleetPage.astro';
export { default as MovingCareersPage } from './MovingCareersPage.astro';
export { default as MovingSignInPage } from './MovingSignInPage.astro';
export { default as MovingDashboardPage } from './MovingDashboardPage.astro';
export { default as MovingDispatchPage } from './MovingDispatchPage.astro';
export { default as MovingOrdersPage } from './MovingOrdersPage.astro';
export { default as MovingOrderDetailPage } from './MovingOrderDetailPage.astro';
export { default as MovingHiringPage } from './MovingHiringPage.astro';
export { default as MovingSettingsPage } from './MovingSettingsPage.astro';

export {
  movingVehicles,
  furnitureCatalog,
  movingOrders,
  jobOpenings,
  jobCandidates,
  movingPricingTiers,
  movingRoutes,
  movingData,
} from './data';

export type {
  MovingVehicle,
  FurnitureItem,
  MoveOrderItem,
  MoveOrder,
  JobOpening,
  JobCandidate,
  MovingRoutes,
} from './data';

