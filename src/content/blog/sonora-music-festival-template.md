---
title: 'New Template: Pulso, a Music Festival Site with Tickets & Personal Agenda'
description: 'Pulso is a new complete template for music festivals: countdown, line-up, timetable with a personal agenda, tickets with a live total and a digital pass, all with its own components.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Pulso: line-up, timetable, tickets and a digital pass

Coming in the next release. **Pulso** (`templates/festival`) is a complete template for a music festival or live event. It has its own deep-violet look with hot coral and electric lime accents and a condensed display face, light and dark variants, and it is built only from its own dedicated components (`reusedComponents: []`).

---

### 🎪 Pulso · Music Festival & Tickets (`templates/festival`)

- **Live preview**: [/preview/festival/](/preview/festival/) · **Template docs**: [/templates/festival/](/templates/festival/)
- **Home**: hero with a live countdown, line-up by day with wide headliner cards, stage cards, ticket tiers and sponsors.
- **Timetable**: day tabs, stage filter chips and an "add to my agenda" toggle on every set; overlapping sets are flagged. The agenda is stored in the browser.
- **Tickets**: tiers with quantity steppers, camping and shuttle add-ons, and an order total that updates as you choose. Sold-out tiers say so in text.
- **My Pulso**: a digital pass with a generated QR-style code, scan mode and print, next to the saved agenda.
- **Info**: site map, getting there, gates, camping, accessibility and a FAQ with native disclosure elements.
- **Accessible by default**: WAI-ARIA tabs with arrow-key navigation, a countdown that speaks once a minute, 44px targets, visible focus rings and reduced-motion support.
- **Pages**: [Home](/preview/festival/) · [Line-up](/preview/festival/cartel/) · [Timetable](/preview/festival/horarios/) · [Tickets](/preview/festival/entradas/) · [Info](/preview/festival/info/) · [My Pulso](/preview/festival/mi-pulso/)
- **11 dedicated components**: [`FestivalHero`](/sections/festival-hero/), [`FestivalLineup`](/sections/festival-lineup/), [`FestivalSchedule`](/sections/festival-schedule/), [`FestivalStages`](/sections/festival-stages/), [`FestivalTickets`](/sections/festival-tickets/), [`FestivalVenueInfo`](/sections/festival-venue-info/), [`FestivalSponsors`](/sections/festival-sponsors/), [`FestivalFooter`](/sections/festival-footer/), [`FestivalCountdown`](/docs/festival-countdown/), [`FestivalAgendaPlanner`](/docs/festival-agenda-planner/), [`FestivalTicketWallet`](/docs/festival-ticket-wallet/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/festival/" title="Pulso live preview (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/festival/horarios/" title="Pulso live preview (timetable)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
