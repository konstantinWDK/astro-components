---
title: 'Nueva plantilla: Pulso, web de festival de música con entradas y agenda personal'
description: 'Pulso es una nueva plantilla completa para festivales de música: cuenta atrás, cartel, horarios con agenda personal, entradas con total en vivo y pase digital, con componentes propios.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Pulso: cartel, horarios, entradas y pase digital

Llega en la próxima versión. **Pulso** (`templates/festival`) es una plantilla completa para un festival de música o evento en directo. Tiene su propio aspecto violeta profundo con acentos coral y lima eléctrico y tipografía condensada, variantes clara y oscura, y se construye solo con sus propios componentes (`reusedComponents: []`).

---

### 🎪 Pulso · Festival de música & Entradas (`templates/festival`)

- **Vista previa**: [/preview/festival/](/preview/festival/) · **Documentación**: [/es/templates/festival/](/es/templates/festival/)
- **Inicio**: hero con cuenta atrás en vivo, cartel por días con tarjetas anchas para cabezas de cartel, escenarios, entradas y patrocinadores.
- **Horarios**: pestañas por día, filtros por escenario y botón «añadir a mi agenda» en cada concierto; se avisa de los que coinciden. La agenda se guarda en el navegador.
- **Entradas**: tipos con selector de cantidad, extras de camping y autobús y un total que se actualiza al elegir. Las agotadas lo dicen con texto.
- **Mi Pulso**: pase digital con código tipo QR generado, modo escaneo e impresión, junto a la agenda guardada.
- **Información**: plano del recinto, cómo llegar, puertas, camping, accesibilidad y preguntas frecuentes con elementos nativos desplegables.
- **Accesible de serie**: pestañas WAI-ARIA con flechas, cuenta atrás que se anuncia una vez por minuto, objetivos de 44px, foco visible y soporte de movimiento reducido.
- **Páginas**: [Inicio](/preview/festival/) · [Cartel](/preview/festival/cartel/) · [Horarios](/preview/festival/horarios/) · [Entradas](/preview/festival/entradas/) · [Info](/preview/festival/info/) · [Mi Pulso](/preview/festival/mi-pulso/)
- **11 componentes propios**: [`FestivalHero`](/es/sections/festival-hero/), [`FestivalLineup`](/es/sections/festival-lineup/), [`FestivalSchedule`](/es/sections/festival-schedule/), [`FestivalStages`](/es/sections/festival-stages/), [`FestivalTickets`](/es/sections/festival-tickets/), [`FestivalVenueInfo`](/es/sections/festival-venue-info/), [`FestivalSponsors`](/es/sections/festival-sponsors/), [`FestivalFooter`](/es/sections/festival-footer/), [`FestivalCountdown`](/es/docs/festival-countdown/), [`FestivalAgendaPlanner`](/es/docs/festival-agenda-planner/), [`FestivalTicketWallet`](/es/docs/festival-ticket-wallet/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/festival/" title="Pulso live preview (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/festival/horarios/" title="Pulso live preview (timetable)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
