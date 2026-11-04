// src/components/lib/templates/ecommerce/index.ts
// E-commerce template: complete store pages built from library components.
//
//   import { StoreHomePage } from 'astro-component-kit/templates/ecommerce';
//   <StoreHomePage store={myStore} routes={{ home: '/', shop: '/shop/', product: '/product/', checkout: '/checkout/' }} />

export { default as StoreLayout } from './StoreLayout.astro';
export { default as StoreHomePage } from './StoreHomePage.astro';
export { default as StoreCategoryPage } from './StoreCategoryPage.astro';
export { default as StoreProductPage } from './StoreProductPage.astro';
export { default as StoreCheckoutPage } from './StoreCheckoutPage.astro';

export { demoStore, defaultRoutes, productHref, categoryHref, categoryNames, pickProducts } from './data';
export type { StoreConfig, StoreRoutes } from './data';
