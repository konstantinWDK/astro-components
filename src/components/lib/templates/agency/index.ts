// src/components/lib/templates/agency/index.ts
// Marketing agency template ("Volta"): a complete site for an agency selling Paid Ads, SEO and
// Web Development, built from the Agency* sections in the library.
//
//   import { AgencyHomePage } from 'astro-component-kit/templates/agency';
//   <AgencyHomePage theme="dark" />

export { default as AgencyLayout } from './AgencyLayout.astro';
export { default as AgencyHomePage } from './AgencyHomePage.astro';
export { default as AgencyServicesPage } from './AgencyServicesPage.astro';
export { default as AgencyServicePage } from './AgencyServicePage.astro';
export { default as AgencyWorkPage } from './AgencyWorkPage.astro';
export { default as AgencyCaseStudyPage } from './AgencyCaseStudyPage.astro';
export { default as AgencyPricingPage } from './AgencyPricingPage.astro';
export { default as AgencyAboutPage } from './AgencyAboutPage.astro';
export { default as AgencyContactPage } from './AgencyContactPage.astro';

export { voltaAgency, agencyRoutes, agencyServiceHref, agencyCaseHref, agencyMoney } from './data';
export type { AgencySite, AgencyRoutes, AgencyService, AgencyCase, AgencyPackage, AgencyServiceSlug } from './data';
