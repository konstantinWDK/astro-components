---
title: 'New Template: Fuero, a Law Firm with Client Portal'
description: 'Fuero is a new complete template for a law firm: practice areas, team, fee models and consultation booking, plus a client portal with cases and timelines, documents with e-signature, secure messages, appointments and invoices, all with its own components.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Fuero: a law firm that lets clients follow their case, in nine pages

Fuero (`templates/law-firm`) is a complete template for a law firm or professional services practice. It has its own warm-black, wine-rose and ivory visual language with a classical serif, and it is built only from its own dedicated components (`reusedComponents: []`).

---

### ⚖️ Fuero · Law Firm & Client Portal (`templates/law-firm`)

- **Live preview**: [/preview/law-firm/](/preview/law-firm/) · **Template docs**: [/templates/law-firm/](/templates/law-firm/)
- **Public site (5 pages)**: home with a "case file" hero, practice areas, process, results, fee models, team, articles and FAQ; practice areas as accessible tabs that open from `?area=` links; a team page with an area filter; free-consultation booking with day, time slot and format; and client sign-in.
- **Client portal (4 pages)**: a portal home that lists what needs your attention, appointments (with .ics download) and invoices you can pay; a case explorer with status filter, progress, next step and a vertical timeline; a document vault with search, filters, upload by click or drag & drop and e-signature; and secure messaging with your lawyer.
- **Accessible by default**: WAI-ARIA tabs with arrow-key navigation, native `<details>`, real tables with captions, `role="log"` messaging, status in text and colour, 44px targets, visible focus and reduced-motion support. Dark and light variants.
- **Pages**: [Home](/preview/law-firm/) · [Practice areas](/preview/law-firm/areas/) · [Team](/preview/law-firm/equipo/) · [Consultation](/preview/law-firm/consulta/) · [Sign in](/preview/law-firm/acceso/) · [Portal home](/preview/law-firm/portal/) · [Cases](/preview/law-firm/portal/expedientes/) · [Documents](/preview/law-firm/portal/documentos/) · [Messages](/preview/law-firm/portal/mensajes/).
- **20 dedicated components**: [`LawHero`](/sections/law-hero/), [`LawPracticeAreas`](/sections/law-practice-areas/), [`LawTeam`](/sections/law-team/), [`LawProcess`](/sections/law-process/), [`LawResults`](/sections/law-results/), [`LawFees`](/sections/law-fees/), [`LawConsultation`](/sections/law-consultation/), [`LawInsights`](/sections/law-insights/), [`LawFaq`](/sections/law-faq/), [`LawFooter`](/sections/law-footer/), [`LawCaseSummary`](/docs/law-case-summary/), [`LawCaseExplorer`](/docs/law-case-explorer/), [`LawDocumentVault`](/docs/law-document-vault/), [`LawMessageThread`](/docs/law-message-thread/), [`LawAppointments`](/docs/law-appointments/), [`LawInvoices`](/docs/law-invoices/), [`LawPortalNav`](/docs/law-portal-nav/), [`LawPortalTopbar`](/docs/law-portal-topbar/), [`LawPortalHeading`](/docs/law-portal-heading/), and [`LawSignIn`](/docs/law-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/law-firm/" title="Fuero live preview (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/law-firm/portal/expedientes/" title="Fuero live preview (portal)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
