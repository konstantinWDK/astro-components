---
title: 'Nueva plantilla: Fuero, despacho de abogados con portal del cliente'
description: 'Fuero es una plantilla completa para un despacho de abogados: áreas de práctica, equipo, honorarios y reserva de consulta, más un portal del cliente con expedientes y cronologías, documentos con firma electrónica, mensajes seguros, citas y facturas, todo con componentes propios.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Fuero: un despacho cuyos clientes siguen su caso, en nueve páginas

Fuero (`templates/law-firm`) es una plantilla completa para un despacho de abogados o servicios profesionales. Tiene su propio lenguaje visual negro cálido, rosa vino y marfil con una serif clásica, y se construye únicamente con sus propios componentes (`reusedComponents: []`).

---

### ⚖️ Fuero · Despacho de abogados y portal del cliente (`templates/law-firm`)

- **Vista previa**: [/preview/law-firm/](/preview/law-firm/) · **Ficha**: [/es/templates/law-firm/](/es/templates/law-firm/)
- **Web pública (5 páginas)**: home con hero de "expediente", áreas de práctica, proceso, resultados, honorarios, equipo, artículos y preguntas frecuentes; áreas de práctica como pestañas accesibles que se abren desde enlaces `?area=`; página de equipo con filtro por área; reserva de consulta gratuita con día, franja horaria y formato; y acceso de clientes.
- **Portal del cliente (4 páginas)**: inicio con lo que necesita tu atención, citas (con descarga .ics) y facturas que puedes pagar; explorador de expedientes con filtro de estado, progreso, siguiente paso y cronología vertical; caja de documentos con búsqueda, filtros, subida por clic o arrastrando y firma electrónica; y mensajería segura con tu abogado.
- **Accesible de serie**: pestañas WAI-ARIA con navegación por flechas, `<details>` nativo, tablas reales con título, mensajería con `role="log"`, estado en texto y color, objetivos táctiles de 44px, foco visible y movimiento reducido. Variantes oscura y clara.
- **Páginas**: [Inicio](/preview/law-firm/) · [Áreas](/preview/law-firm/areas/) · [Equipo](/preview/law-firm/equipo/) · [Consulta](/preview/law-firm/consulta/) · [Acceso](/preview/law-firm/acceso/) · [Resumen](/preview/law-firm/portal/) · [Expedientes](/preview/law-firm/portal/expedientes/) · [Documentos](/preview/law-firm/portal/documentos/) · [Mensajes](/preview/law-firm/portal/mensajes/).
- **20 componentes propios**: [`LawHero`](/es/sections/law-hero/), [`LawPracticeAreas`](/es/sections/law-practice-areas/), [`LawTeam`](/es/sections/law-team/), [`LawProcess`](/es/sections/law-process/), [`LawResults`](/es/sections/law-results/), [`LawFees`](/es/sections/law-fees/), [`LawConsultation`](/es/sections/law-consultation/), [`LawInsights`](/es/sections/law-insights/), [`LawFaq`](/es/sections/law-faq/), [`LawFooter`](/es/sections/law-footer/), [`LawCaseSummary`](/es/docs/law-case-summary/), [`LawCaseExplorer`](/es/docs/law-case-explorer/), [`LawDocumentVault`](/es/docs/law-document-vault/), [`LawMessageThread`](/es/docs/law-message-thread/), [`LawAppointments`](/es/docs/law-appointments/), [`LawInvoices`](/es/docs/law-invoices/), [`LawPortalNav`](/es/docs/law-portal-nav/), [`LawPortalTopbar`](/es/docs/law-portal-topbar/), [`LawPortalHeading`](/es/docs/law-portal-heading/) y [`LawSignIn`](/es/docs/law-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/law-firm/" title="Vista previa de Fuero (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/law-firm/portal/expedientes/" title="Vista previa de Fuero (portal)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
