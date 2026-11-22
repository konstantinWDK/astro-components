---
title: 'Nueva plantilla: Lumbre, un restaurante a la brasa con reserva sobre plano'
description: 'Lumbre es una nueva plantilla completa para un restaurante: un hero de brasas, un menú degustación contado plato a plato con platos generados, un radar de productores y reserva de mesa sobre un plano de sala, más un área de cliente con reservas, preferencias y vales regalo, todo con componentes propios.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Lumbre: un restaurante en el que reservas eligiendo tu mesa, en ocho páginas

Lumbre (`templates/restaurant`) es una plantilla completa para un restaurante. Tiene su propio lenguaje visual de carbón y brasa con un serif de display condensado (Instrument Serif), sin fotografía, sin rejillas de iconos ni nubes de etiquetas: lo sostienen los platos dibujados, la tipografía y las interacciones. Está construida solo con sus propios componentes (`reusedComponents: []`).

---

### Lumbre · Restaurante a la brasa (`templates/restaurant`)

- **Vista previa en vivo**: [/preview/restaurant/](/preview/restaurant/) · **Documentación de la plantilla**: [/templates/restaurant/](/templates/restaurant/)
- **Web pública (5 páginas)**: una home con un logotipo enorme relleno de un degradado de brasa y chispas CSS que suben por detrás, el menú degustación contado plato a plato (elige un pase y un plato generado en SVG se redibuja con sus ingredientes, maridaje, temperatura y kilómetros recorridos) y un radar de productores; el menú, con el degustación de ocho pases y una carta con puntos guía y filtro de dieta; el origen, con un radar que sitúa cada productor a su distancia real y calcula la media; la reserva, donde eliges fecha, hora y comensales y luego tu mesa en un plano del comedor, y las mesas ocupadas, pequeñas o en día cerrado se desactivan y dicen por qué; y el acceso de clientes.
- **Área de cliente (3 páginas)**: un inicio con la próxima reserva como una fecha enorme con cuenta atrás en vivo, las cifras del cliente y una tarjeta para reservar de nuevo; reservas en vistas de próximas y pasadas con acciones de cancelar (gratis hasta 24 h antes) y cambiar; y preferencias con alergias, dieta, zona preferida y celebraciones, seguidas de los vales regalo con botón de copiar código.
- **Accesible por defecto**: las mesas son radios reales dentro de etiquetas (la reserva funciona sin el dibujo), las mesas desactivadas llevan el motivo como texto, grupos de radio y acordeones `<details>` nativos, regiones en vivo para cada cambio, objetivos de 44–48px, foco visible, equivalentes de texto para cada dibujo y soporte de `prefers-reduced-motion`. Variantes oscura y clara.
- **Páginas**: [Inicio](/preview/restaurant/) · [Menú](/preview/restaurant/menu/) · [Origen](/preview/restaurant/origen/) · [Reservar](/preview/restaurant/reservar/) · [Acceso](/preview/restaurant/acceso/) · [Resumen](/preview/restaurant/mesa/) · [Reservas](/preview/restaurant/mesa/reservas/) · [Preferencias](/preview/restaurant/mesa/preferencias/).
- **16 componentes propios**: [`RestHero`](/sections/rest-hero/), [`RestTasting`](/sections/rest-tasting/), [`RestMenu`](/sections/rest-menu/), [`RestOrigin`](/sections/rest-origin/), [`RestBooking`](/sections/rest-booking/), [`RestFaq`](/sections/rest-faq/), [`RestFooter`](/sections/rest-footer/), [`RestPlate`](/docs/rest-plate/), [`RestAccountSummary`](/docs/rest-account-summary/), [`RestReservations`](/docs/rest-reservations/), [`RestPreferences`](/docs/rest-preferences/), [`RestGiftCards`](/docs/rest-gift-cards/), [`RestAccountNav`](/docs/rest-account-nav/), [`RestAccountTopbar`](/docs/rest-account-topbar/), [`RestAccountHeading`](/docs/rest-account-heading/), y [`RestSignIn`](/docs/rest-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/restaurant/" title="Vista previa en vivo de Lumbre (inicio)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/restaurant/reservar/" title="Vista previa en vivo de Lumbre (reserva sobre plano)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
