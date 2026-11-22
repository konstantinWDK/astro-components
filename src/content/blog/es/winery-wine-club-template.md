---
title: 'Nueva plantilla: Solera, una bodega con área de socios del club de vino'
description: 'Solera es una plantilla completa para una bodega: hero con botella que se inclina, una escena de scroll fijada que cambia un viñedo dibujado a lo largo del año, mapa interactivo de parcelas, reserva de visitas y configurador del club de vino, más un área de socios con bodega, cuaderno de cata, envíos y plan, todo con componentes propios.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Solera: una bodega que se lee como una revista, en nueve páginas

Solera (`templates/winery`) es una plantilla completa para una bodega o productor artesanal con club de suscripción. Tiene su propio lenguaje visual de bodega oscura, oro viejo y rojo profundo con una serif óptica (Fraunces), sin rejillas de iconos ni nubes de etiquetas: lo llevan los dibujos, la tipografía y las interacciones. Se construye únicamente con sus propios componentes (`reusedComponents: []`).

---

### Solera · Bodega & Club de vino (`templates/winery`)

- **Vista previa en vivo**: [/preview/winery/](/preview/winery/) · **Documentación de la plantilla**: [/es/templates/winery/](/es/templates/winery/)
- **Sitio público (6 páginas)**: inicio con un hero donde una botella generada se inclina con el puntero sobre curvas de nivel topográficas, un primer vistazo a los vinos, una escena de scroll fijada en la que el cielo, las colinas, las hojas y las uvas de un viñedo dibujado cambian de forma continua entre poda, brotación, envero, vendimia y crianza, y puntuaciones de prensa como numerales enormes; la carta completa como índice editorial con filtro por tipo, notas de cata, perfil de 1 a 5 y barra de ventana de consumo; la finca con cronología familiar y mapa interactivo de parcelas; reserva de visitas con total en vivo; un configurador del club que redibuja la caja botella a botella y recalcula el precio; y acceso de socios.
- **Área de socios (3 páginas)**: inicio con la próxima caja y su cuenta atrás, las cifras de la socia y una sugerencia de qué abrir este mes; bodega personal con ventanas de consumo, notas de 1 a 5 y un botón "abrir una", seguida de un cuaderno de cata con deslizadores de cuerpo, acidez, taninos y madera; y envíos con cronología, acciones de aplazar, saltar y cambiar dirección, más gestión del plan con interruptor de pausa.
- **Accesible de serie**: una escena de scroll que se degrada a lista simple sin JavaScript, acordeones `<details>` nativos, grupos de radio reales, `role="switch"`, regiones en vivo para cada cambio, objetivos de 44–48px, foco visible, equivalentes de texto para cada dibujo y soporte de `prefers-reduced-motion`. Variantes oscura y clara.
- **Páginas**: [Inicio](/preview/winery/) · [Vinos](/preview/winery/vinos/) · [La finca](/preview/winery/finca/) · [Visitas](/preview/winery/visitas/) · [Club](/preview/winery/club/) · [Acceso](/preview/winery/acceso/) · [Resumen de socios](/preview/winery/socios/) · [Bodega](/preview/winery/socios/bodega/) · [Envíos](/preview/winery/socios/envios/).
- **20 componentes propios**: [`WineHero`](/es/sections/wine-hero/), [`WineVintageScene`](/es/sections/wine-vintage-scene/), [`WineCollection`](/es/sections/wine-collection/), [`WineTerroir`](/es/sections/wine-terroir/), [`WineStory`](/es/sections/wine-story/), [`WineVisits`](/es/sections/wine-visits/), [`WineClub`](/es/sections/wine-club/), [`WineAwards`](/es/sections/wine-awards/), [`WineFaq`](/es/sections/wine-faq/), [`WineFooter`](/es/sections/wine-footer/), [`WineBottleLabel`](/es/docs/wine-bottle-label/), [`WineMemberSummary`](/es/docs/wine-member-summary/), [`WineShipmentTracker`](/es/docs/wine-shipment-tracker/), [`WineCellar`](/es/docs/wine-cellar/), [`WineTastingNotebook`](/es/docs/wine-tasting-notebook/), [`WinePlanManager`](/es/docs/wine-plan-manager/), [`WineMemberNav`](/es/docs/wine-member-nav/), [`WineMemberTopbar`](/es/docs/wine-member-topbar/), [`WineMemberHeading`](/es/docs/wine-member-heading/), and [`WineSignIn`](/es/docs/wine-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/winery/" title="Vista previa de Solera (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/winery/socios/bodega/" title="Vista previa de Solera (área de socios)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
