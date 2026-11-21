---
title: 'Nuevas plantillas y rediseños: Nido, Forja, BiteFlow y Strukto'
description: 'Dos plantillas nuevas completas (Nido inmobiliaria + CRM y Forja gimnasio + área de socios) y el rediseño integral de BiteFlow (delivery y Kitchen OS) y Strukto (constructora y Site OS) sin componentes genéricos compartidos.'
date: '2026-11-21'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Cuatro plantillas autónomas, cada una con su propio lenguaje visual

Incluido en la **v0.8.1**. Esta actualización incorpora dos nuevas plantillas completas (**Nido** y **Forja**) y reconstruye desde cero **BiteFlow** y **Strukto**. Cada plantilla utiliza únicamente sus propios componentes (`reusedComponents: []`), tokens de diseño dedicados y flujos interactivos de backoffice.

---

### 🏠 Nido · Inmobiliaria y CRM de agentes (`templates/real-estate`)

- **Vista previa**: [/preview/real-estate/](/preview/real-estate/) · **Ficha**: [/es/templates/real-estate/](/es/templates/real-estate/)
- **Portal público**: hero con buscador de compra y alquiler, catálogo filtrable con favoritos guardados y mapa por zonas, ficha de inmueble con galería, reserva de visitas, simulador de hipoteca o condiciones de alquiler y valoración en 3 pasos para propietarios.
- **CRM de agentes**: acceso, resumen general, tabla de propiedades y pipeline de leads.
- **16 componentes propios**: [`EstateHero`](/es/sections/estate-hero/), [`EstateListingsGrid`](/es/sections/estate-listings-grid/), [`EstateNeighborhoods`](/es/sections/estate-neighborhoods/), [`EstatePropertyGallery`](/es/sections/estate-property-gallery/), [`EstateAgentsGrid`](/es/sections/estate-agents-grid/), [`EstateValuationCta`](/es/sections/estate-valuation-cta/), [`EstateFooter`](/es/sections/estate-footer/), [`EstateMortgageCalculator`](/es/docs/estate-mortgage-calculator/), [`EstateValuationWizard`](/es/docs/estate-valuation-wizard/), [`EstateVisitScheduler`](/es/docs/estate-visit-scheduler/), [`EstateLeadsPipeline`](/es/docs/estate-leads-pipeline/), [`EstateCrmSidebar`](/es/docs/estate-crm-sidebar/), [`EstateCrmTopbar`](/es/docs/estate-crm-topbar/), [`EstateCrmHeading`](/es/docs/estate-crm-heading/), [`EstateListingsTable`](/es/docs/estate-listings-table/) y [`EstateAgentSignIn`](/es/docs/estate-agent-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/real-estate/" title="Vista previa de Nido" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

---

### 🏋️ Forja · Gimnasio y área de socios (`templates/gym`)

- **Vista previa**: [/preview/gym/](/preview/gym/) · **Ficha**: [/es/templates/gym/](/es/templates/gym/)
- **Web del club**: hero con las clases de hoy, disciplinas con nivel de intensidad, ocupación en directo, horario semanal con pestañas y filtros, tarifas con pago mensual o anual, equipo de entrenadores y pase de prueba gratis.
- **Área de socios y staff**: acceso, seguimiento de progreso, reserva de clases con lista de espera, tabla de socios y control de aforo.
- **15 componentes propios**: [`GymHero`](/es/sections/gym-hero/), [`GymDisciplines`](/es/sections/gym-disciplines/), [`GymSchedule`](/es/sections/gym-schedule/), [`GymMembershipPlans`](/es/sections/gym-membership-plans/), [`GymTrainersGrid`](/es/sections/gym-trainers-grid/), [`GymTrialForm`](/es/sections/gym-trial-form/), [`GymFooter`](/es/sections/gym-footer/), [`GymClassBooking`](/es/docs/gym-class-booking/), [`GymProgressTracker`](/es/docs/gym-progress-tracker/), [`GymOccupancyMeter`](/es/docs/gym-occupancy-meter/), [`GymAreaNav`](/es/docs/gym-area-nav/), [`GymAreaTopbar`](/es/docs/gym-area-topbar/), [`GymAreaHeading`](/es/docs/gym-area-heading/), [`GymMembersTable`](/es/docs/gym-members-table/) y [`GymSignIn`](/es/docs/gym-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/gym/" title="Vista previa de Forja" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

---

### 🍔 BiteFlow · Rediseño de delivery y Kitchen OS (`templates/food-delivery`)

- **Vista previa**: [/preview/food-delivery/](/preview/food-delivery/) · **Cocina (KDS)**: [/preview/food-delivery/cocina/kds/](/preview/food-delivery/cocina/kds/) · **Ficha**: [/es/templates/food-delivery/](/es/templates/food-delivery/)
- **Estética pop tipo *sticker***: papel crema, contornos oscuros, acentos tomate y mostaza e ilustraciones vectoriales propias.
- **Efectos principales**: hero tipo póster centrado, el plato vuela hacia la cesta al añadirlo, mapa animado con repartidor avanzando por la ruta, sección *«Del fuego a tu puerta»* sincronizada con el scroll y pantalla de cocina (KDS) que mueve comandas entre columnas con View Transitions.
- **16 componentes propios y 11 páginas**: [`FoodHeroPlate`](/es/sections/food-hero-plate/), [`FoodMenuBoard`](/es/sections/food-menu-board/), [`FoodScrollStory`](/es/sections/food-scroll-story/), [`FoodPartnerPitch`](/es/sections/food-partner-pitch/), [`FoodFooter`](/es/sections/food-footer/), [`FoodCartDrawer`](/es/docs/food-cart-drawer/), [`FoodOrderMap`](/es/docs/food-order-map/), [`FoodKitchenBoard`](/es/docs/food-kitchen-board/), [`FoodMenuManager`](/es/docs/food-menu-manager/), [`FoodRiderDispatch`](/es/docs/food-rider-dispatch/), [`FoodOrdersTable`](/es/docs/food-orders-table/), [`FoodServicePulse`](/es/docs/food-service-pulse/), [`FoodOpsNav`](/es/docs/food-ops-nav/), [`FoodOpsTopbar`](/es/docs/food-ops-topbar/), [`FoodOpsHeading`](/es/docs/food-ops-heading/) y [`FoodCrewSignIn`](/es/docs/food-crew-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/food-delivery/" title="Vista previa de BiteFlow" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

---

### 📐 Strukto · Rediseño de constructora y Site OS (`templates/construction`)

- **Vista previa**: [/preview/construction/](/preview/construction/) · **Site OS**: [/preview/construction/app/sites/](/preview/construction/app/sites/) · **Ficha**: [/es/templates/construction/](/es/templates/construction/)
- **Tema plano azul (*blueprint*)**: lámina azul técnico con variante clara en papel de calco, tipografía `Archivo` + `IBM Plex Mono` y generador procedural de alzados en SVG.
- **Efectos principales**: hero en lámina panorámica autodibujada con cruceta de coordenadas y cajetín inferior, edificio que se levanta planta a planta con el scroll, selector isométrico 3D de viviendas (girar y explosionar plantas) y calculadora de presupuesto con edificio que crece en vivo.
- **15 componentes propios y 11 páginas**: [`ConstructionBlueprintHero`](/es/sections/construction-blueprint-hero/), [`ConstructionProjectSheets`](/es/sections/construction-project-sheets/), [`ConstructionBuildSequence`](/es/sections/construction-build-sequence/), [`ConstructionTenderForm`](/es/sections/construction-tender-form/), [`ConstructionFooter`](/es/sections/construction-footer/), [`ConstructionCostEstimator`](/es/docs/construction-cost-estimator/), [`ConstructionIsoUnitPicker`](/es/docs/construction-iso-unit-picker/), [`ConstructionGanttBoard`](/es/docs/construction-gantt-board/), [`ConstructionSitesBoard`](/es/docs/construction-sites-board/), [`ConstructionSiteLogbook`](/es/docs/construction-site-logbook/), [`ConstructionUnitsLedger`](/es/docs/construction-units-ledger/), [`ConstructionOsSidebar`](/es/docs/construction-os-sidebar/), [`ConstructionOsTopbar`](/es/docs/construction-os-topbar/), [`ConstructionOsHeading`](/es/docs/construction-os-heading/) y [`ConstructionSignIn`](/es/docs/construction-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/construction/" title="Vista previa de Strukto" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

