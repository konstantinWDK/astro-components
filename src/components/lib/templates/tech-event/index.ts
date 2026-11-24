// src/components/lib/templates/tech-event/index.ts
// Complete multi-page template: Pulse Tech Summit 2027.

export { default as PulseSiteLayout } from './PulseSiteLayout.astro';
export { default as PulseHomePage } from './PulseHomePage.astro';
export { default as PulseSchedulePage } from './PulseSchedulePage.astro';
export { default as PulseSpeakersPage } from './PulseSpeakersPage.astro';
export { default as PulseTicketsPage } from './PulseTicketsPage.astro';
export { default as PulseVenuePage } from './PulseVenuePage.astro';

export {
  pulseRoutes,
  pulseTracks,
  pulseSpeakers,
  pulseSessions,
  pulseTickets,
  pulseSponsors,
  pulseVenue,
  pulseFaqs,
  type PulseRoutes,
  type PulseTrack,
  type PulseSpeaker,
  type PulseSession,
  type PulseTicket,
  type PulseSponsor,
  type PulseVenueInfo,
  type PulseFaq,
} from './data';

