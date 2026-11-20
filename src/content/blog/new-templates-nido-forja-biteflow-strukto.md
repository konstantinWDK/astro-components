---
title: 'New Templates & Redesigns: Nido, Forja, BiteFlow & Strukto'
description: 'Two brand-new templates (Nido real estate + CRM and Forja gym + member area) and complete ground-up redesigns of BiteFlow (food delivery) and Strukto (construction & Site OS) with zero reused generic components.'
date: '2026-11-20'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Four self-contained templates, each with its own visual language

This update adds two new full-stack templates (**Nido** and **Forja**) and rebuilds **BiteFlow** and **Strukto** from scratch. Every template now ships exclusively with its own dedicated components (`reusedComponents: []`), custom theme tokens, and interactive backoffice flows.

---

### 🏠 Nido · Real Estate Agency & Agent CRM (`templates/real-estate`)

- **Public portal**: buy/rent search hero, filterable property grid with browser-saved favourites and zone map, property detail pages with gallery, viewing scheduler, mortgage simulator or rental terms, and a 3-step owner valuation wizard.
- **Agent CRM**: sign-in portal, executive overview, listings table and drag/status lead pipeline.
- **16 dedicated components**: `EstateHero`, `EstateListingsGrid`, `EstateNeighborhoods`, `EstatePropertyGallery`, `EstateAgentsGrid`, `EstateValuationCta`, `EstateFooter`, `EstateMortgageCalculator`, `EstateValuationWizard`, `EstateVisitScheduler`, `EstateLeadsPipeline`, `EstateCrmSidebar`, `EstateCrmTopbar`, `EstateCrmHeading`, `EstateListingsTable`, and `EstateAgentSignIn`.

---

### 🏋️ Forja · Gym, Studio & Member Area (`templates/gym`)

- **Club storefront**: bold hero with today's classes, discipline cards with intensity ratings, live occupancy meter, weekly timetable with day tabs and filters, monthly/yearly membership plans, coaching team and free-trial pass.
- **Member & staff area**: member sign-in, progress tracker, class booking with waitlist, staff members table and occupancy controls.
- **15 dedicated components**: `GymHero`, `GymDisciplines`, `GymSchedule`, `GymMembershipPlans`, `GymTrainersGrid`, `GymTrialForm`, `GymFooter`, `GymClassBooking`, `GymProgressTracker`, `GymOccupancyMeter`, `GymAreaNav`, `GymAreaTopbar`, `GymAreaHeading`, `GymMembersTable`, and `GymSignIn`.

---

### 🍔 BiteFlow · Food Delivery & Kitchen OS Redesign (`templates/food-delivery`)

- **Pop "sticker" aesthetic**: warm cream paper, bold dark ink outlines, tomato and mustard accents, and custom SVG dish illustrations.
- **Interactive effects**: dishes fly into the cart drawer on add, live animated courier route map, scroll-driven *"From the fire to your door"* story, and a Kitchen Display System (KDS) moving tickets across columns with View Transitions.
- **16 dedicated components & 11 pages** with Spanish preview routes (`/carta`, `/pedido`, `/restaurantes`, `/acceso`, `/cocina/...`).

---

### 📐 Strukto · Construction & Site OS Redesign (`templates/construction`)

- **Architectural blueprint theme**: navy drafting sheet (with a light tracing-paper variant), `Archivo` + `IBM Plex Mono` typography and a procedural SVG elevation generator.
- **Interactive effects**: self-drawing hero with coordinate crosshair, floor-by-floor scroll-scrubbed building sequence, rotatable/explodable 3D isometric unit picker, and a live-growing building cost estimator.
- **15 dedicated components & 11 pages**: 6 public pages (home, projects, development sheet, estimator, contact, sign-in) + 5 Site OS views (executive dashboard with Gantt programme, active sites map, digital daily logbook, units sales ledger, and technical settings).

