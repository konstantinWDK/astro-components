// src/components/lib/templates/ecommerce-editorial/index.ts
// Editorial e-commerce template ("E-commerce 2"): complete store pages built from
// library sections (ShopHeaderEditorial, ShopHeroEditorial, ShopProductRail…) and components.
//
//   import { EditorialHomePage } from 'astro-component-kit/templates/ecommerce-editorial';
//   <EditorialHomePage theme="light" />

export { default as EditorialLayout } from './EditorialLayout.astro';
export { default as EditorialHomePage } from './EditorialHomePage.astro';
export { default as EditorialShopPage } from './EditorialShopPage.astro';
export { default as EditorialProductPage } from './EditorialProductPage.astro';
export { default as EditorialBagPage } from './EditorialBagPage.astro';
export { default as EditorialCheckoutPage } from './EditorialCheckoutPage.astro';

export { formaStore, editorialRoutes, editorialProductHref, editorialCategoryHref, pickEditorial } from './data';
export type { EditorialStore, EditorialRoutes } from './data';
