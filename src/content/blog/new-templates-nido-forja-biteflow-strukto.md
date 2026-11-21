---
title: 'New Templates & Redesigns: Nido, Forja, BiteFlow & Strukto'
description: 'Two brand-new templates (Nido real estate + CRM and Forja gym + member area) and complete ground-up redesigns of BiteFlow (food delivery) and Strukto (construction & Site OS) with zero reused generic components.'
date: '2026-11-21'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Four self-contained templates, each with its own visual language

Shipped in **v0.8.1**. This update adds two new full-stack templates (**Nido** and **Forja**) and rebuilds **BiteFlow** and **Strukto** from scratch. Every template now ships exclusively with its own dedicated components (`reusedComponents: []`), custom theme tokens, and interactive backoffice flows.

---

### 🏠 Nido · Real Estate Agency & Agent CRM (`templates/real-estate`)

- **Live preview**: [/preview/real-estate/](/preview/real-estate/) · **Template docs**: [/templates/real-estate/](/templates/real-estate/)
- **Public portal**: buy/rent search hero, filterable property grid with browser-saved favourites and zone map, property detail pages with gallery, viewing scheduler, mortgage simulator or rental terms, and a 3-step owner valuation wizard.
- **Agent CRM**: sign-in portal, executive overview, listings table and drag/status lead pipeline.
- **16 dedicated components**: [`EstateHero`](/sections/estate-hero/), [`EstateListingsGrid`](/sections/estate-listings-grid/), [`EstateNeighborhoods`](/sections/estate-neighborhoods/), [`EstatePropertyGallery`](/sections/estate-property-gallery/), [`EstateAgentsGrid`](/sections/estate-agents-grid/), [`EstateValuationCta`](/sections/estate-valuation-cta/), [`EstateFooter`](/sections/estate-footer/), [`EstateMortgageCalculator`](/docs/estate-mortgage-calculator/), [`EstateValuationWizard`](/docs/estate-valuation-wizard/), [`EstateVisitScheduler`](/docs/estate-visit-scheduler/), [`EstateLeadsPipeline`](/docs/estate-leads-pipeline/), [`EstateCrmSidebar`](/docs/estate-crm-sidebar/), [`EstateCrmTopbar`](/docs/estate-crm-topbar/), [`EstateCrmHeading`](/docs/estate-crm-heading/), [`EstateListingsTable`](/docs/estate-listings-table/), and [`EstateAgentSignIn`](/docs/estate-agent-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/real-estate/" title="Nido live preview" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

---

### 🏋️ Forja · Gym, Studio & Member Area (`templates/gym`)

- **Live preview**: [/preview/gym/](/preview/gym/) · **Template docs**: [/templates/gym/](/templates/gym/)
- **Club storefront**: bold hero with today's classes, discipline cards with intensity ratings, live occupancy meter, weekly timetable with day tabs and filters, monthly/yearly membership plans, coaching team and free-trial pass.
- **Member & staff area**: member sign-in, progress tracker, class booking with waitlist, staff members table and occupancy controls.
- **15 dedicated components**: [`GymHero`](/sections/gym-hero/), [`GymDisciplines`](/sections/gym-disciplines/), [`GymSchedule`](/sections/gym-schedule/), [`GymMembershipPlans`](/sections/gym-membership-plans/), [`GymTrainersGrid`](/sections/gym-trainers-grid/), [`GymTrialForm`](/sections/gym-trial-form/), [`GymFooter`](/sections/gym-footer/), [`GymClassBooking`](/docs/gym-class-booking/), [`GymProgressTracker`](/docs/gym-progress-tracker/), [`GymOccupancyMeter`](/docs/gym-occupancy-meter/), [`GymAreaNav`](/docs/gym-area-nav/), [`GymAreaTopbar`](/docs/gym-area-topbar/), [`GymAreaHeading`](/docs/gym-area-heading/), [`GymMembersTable`](/docs/gym-members-table/), and [`GymSignIn`](/docs/gym-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/gym/" title="Forja live preview" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

---

### 🍔 BiteFlow · Food Delivery & Kitchen OS Redesign (`templates/food-delivery`)

- **Live preview**: [/preview/food-delivery/](/preview/food-delivery/) · **Kitchen OS (KDS)**: [/preview/food-delivery/cocina/kds/](/preview/food-delivery/cocina/kds/) · **Template docs**: [/templates/food-delivery/](/templates/food-delivery/)
- **Pop "sticker" aesthetic**: warm cream paper, bold dark ink outlines, tomato and mustard accents, and custom SVG dish illustrations.
- **Interactive effects**: centered poster stage hero, dishes fly into the cart drawer on add, live animated courier route map, scroll-driven *"From the fire to your door"* story, and a Kitchen Display System (KDS) moving tickets across columns with View Transitions.
- **16 dedicated components & 11 pages** with Spanish preview routes (`/carta`, `/pedido`, `/restaurantes`, `/acceso`, `/cocina/...`): [`FoodHeroPlate`](/sections/food-hero-plate/), [`FoodMenuBoard`](/sections/food-menu-board/), [`FoodScrollStory`](/sections/food-scroll-story/), [`FoodPartnerPitch`](/sections/food-partner-pitch/), [`FoodFooter`](/sections/food-footer/), [`FoodCartDrawer`](/docs/food-cart-drawer/), [`FoodOrderMap`](/docs/food-order-map/), [`FoodKitchenBoard`](/docs/food-kitchen-board/), [`FoodMenuManager`](/docs/food-menu-manager/), [`FoodRiderDispatch`](/docs/food-rider-dispatch/), [`FoodOrdersTable`](/docs/food-orders-table/), [`FoodServicePulse`](/docs/food-service-pulse/), [`FoodOpsNav`](/docs/food-ops-nav/), [`FoodOpsTopbar`](/docs/food-ops-topbar/), [`FoodOpsHeading`](/docs/food-ops-heading/), and [`FoodCrewSignIn`](/docs/food-crew-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/food-delivery/" title="BiteFlow live preview" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

---

### 📐 Strukto · Construction & Site OS Redesign (`templates/construction`)

- **Live preview**: [/preview/construction/](/preview/construction/) · **Site OS**: [/preview/construction/app/sites/](/preview/construction/app/sites/) · **Template docs**: [/templates/construction/](/templates/construction/)
- **Architectural blueprint theme**: navy drafting sheet (with a light tracing-paper variant), `Archivo` + `IBM Plex Mono` typography and a procedural SVG elevation generator.
- **Interactive effects**: panoramic self-drawing blueprint sheet hero with coordinate crosshair and title-block *cajetín*, floor-by-floor scroll-scrubbed building sequence, rotatable/explodable 3D isometric unit picker, and a live-growing building cost estimator.
- **15 dedicated components & 11 pages**: [`ConstructionBlueprintHero`](/sections/construction-blueprint-hero/), [`ConstructionProjectSheets`](/sections/construction-project-sheets/), [`ConstructionBuildSequence`](/sections/construction-build-sequence/), [`ConstructionTenderForm`](/sections/construction-tender-form/), [`ConstructionFooter`](/sections/construction-footer/), [`ConstructionCostEstimator`](/docs/construction-cost-estimator/), [`ConstructionIsoUnitPicker`](/docs/construction-iso-unit-picker/), [`ConstructionGanttBoard`](/docs/construction-gantt-board/), [`ConstructionSitesBoard`](/docs/construction-sites-board/), [`ConstructionSiteLogbook`](/docs/construction-site-logbook/), [`ConstructionUnitsLedger`](/docs/construction-units-ledger/), [`ConstructionOsSidebar`](/docs/construction-os-sidebar/), [`ConstructionOsTopbar`](/docs/construction-os-topbar/), [`ConstructionOsHeading`](/docs/construction-os-heading/), and [`ConstructionSignIn`](/docs/construction-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/construction/" title="Strukto live preview" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

