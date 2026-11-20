---
title: 'Nuevas plantillas y rediseños: Nido, Forja, BiteFlow y Strukto'
description: 'Dos plantillas nuevas completas (Nido inmobiliaria + CRM y Forja gimnasio + área de socios) y el rediseño integral de BiteFlow (delivery y Kitchen OS) y Strukto (constructora y Site OS) sin componentes genéricos compartidos.'
date: '2026-11-20'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Cuatro plantillas autónomas, cada una con su propio lenguaje visual

Esta actualización incorpora dos nuevas plantillas completas (**Nido** y **Forja**) y reconstruye desde cero **BiteFlow** y **Strukto**. Cada plantilla utiliza únicamente sus propios componentes (`reusedComponents: []`), tokens de diseño dedicados y flujos interactivos de backoffice.

---

### 🏠 Nido · Inmobiliaria y CRM de agentes (`templates/real-estate`)

- **Portal público**: hero con buscador de compra y alquiler, catálogo filtrable con favoritos guardados y mapa por zonas, ficha de inmueble con galería, reserva de visitas, simulador de hipoteca o condiciones de alquiler y valoración en 3 pasos para propietarios.
- **CRM de agentes**: acceso, resumen general, tabla de propiedades y pipeline de leads.
- **16 componentes propios**: `EstateHero`, `EstateListingsGrid`, `EstateNeighborhoods`, `EstatePropertyGallery`, `EstateAgentsGrid`, `EstateValuationCta`, `EstateFooter`, `EstateMortgageCalculator`, `EstateValuationWizard`, `EstateVisitScheduler`, `EstateLeadsPipeline`, `EstateCrmSidebar`, `EstateCrmTopbar`, `EstateCrmHeading`, `EstateListingsTable` y `EstateAgentSignIn`.

---

### 🏋️ Forja · Gimnasio y área de socios (`templates/gym`)

- **Web del club**: hero con las clases de hoy, disciplinas con nivel de intensidad, ocupación en directo, horario semanal con pestañas y filtros, tarifas con pago mensual o anual, equipo de entrenadores y pase de prueba gratis.
- **Área de socios y staff**: acceso, seguimiento de progreso, reserva de clases con lista de espera, tabla de socios y control de aforo.
- **15 componentes propios**: `GymHero`, `GymDisciplines`, `GymSchedule`, `GymMembershipPlans`, `GymTrainersGrid`, `GymTrialForm`, `GymFooter`, `GymClassBooking`, `GymProgressTracker`, `GymOccupancyMeter`, `GymAreaNav`, `GymAreaTopbar`, `GymAreaHeading`, `GymMembersTable` y `GymSignIn`.

---

### 🍔 BiteFlow · Rediseño de delivery y Kitchen OS (`templates/food-delivery`)

- **Estética pop tipo *sticker***: papel crema, contornos oscuros, acentos tomate y mostaza e ilustraciones vectoriales propias.
- **Efectos principales**: el plato vuela hacia la cesta al añadirlo, mapa animado con repartidor avanzando por la ruta, sección *«Del fuego a tu puerta»* sincronizada con el scroll y pantalla de cocina (KDS) que mueve comandas entre columnas con View Transitions.
- **16 componentes propios y 11 páginas** con rutas en español (`/carta`, `/pedido`, `/restaurantes`, `/acceso`, `/cocina/...`).

---

### 📐 Strukto · Rediseño de constructora y Site OS (`templates/construction`)

- **Tema plano azul (*blueprint*)**: lámina azul técnico con variante clara en papel de calco, tipografía `Archivo` + `IBM Plex Mono` y generador procedural de alzados en SVG.
- **Efectos principales**: hero que se dibuja solo con cruceta de coordenadas, edificio que se levanta planta a planta con el scroll, selector isométrico 3D de viviendas (girar y explosionar plantas) y calculadora de presupuesto con edificio que crece en vivo.
- **15 componentes propios y 11 páginas**: 6 públicas (inicio, proyectos, ficha de promoción, presupuesto, contacto y acceso) + 5 vistas de Site OS (cuadro de mando con Gantt, mapa de obras activas, diario digital de obra, libro comercial de viviendas y ajustes técnicos).

