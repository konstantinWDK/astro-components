// src/components/lib/templates/saas-hotel/index.ts
// Hotel SaaS template ("Lobby · Hotel OS"): marketing landing, sign-in and a complete app
// (dashboard, reservations, rooms, guests, reports, settings) built from library components.
//
//   import { DashboardPage } from 'astro-component-kit/templates/saas-hotel';
//   <DashboardPage theme="light" />

export { default as AppLayout } from './AppLayout.astro';
export { default as LandingPage } from './LandingPage.astro';
export { default as SignInPage } from './SignInPage.astro';
export { default as DashboardPage } from './DashboardPage.astro';
export { default as ReservationsPage } from './ReservationsPage.astro';
export { default as RoomsPage } from './RoomsPage.astro';
export { default as GuestsPage } from './GuestsPage.astro';
export { default as ReportsPage } from './ReportsPage.astro';
export { default as SettingsPage } from './SettingsPage.astro';

export { lobbyData, saasRoutes } from './data';
export type { LobbyData, SaasRoutes } from './data';
