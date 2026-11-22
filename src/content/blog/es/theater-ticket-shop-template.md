---
title: 'Nueva plantilla: Telón, una tienda de entradas de teatro con telón que se abre y elección de butacas'
description: 'Telón es una nueva plantilla e-commerce completa para vender entradas de teatro: un telón que se abre con el scroll, carteles generados, un plano de butacas interactivo, un carrito con reserva de diez minutos y una cartera de entradas, todo con componentes propios.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Telón: una tienda de entradas donde el telón sube al hacer scroll, en ocho páginas

Telón (`templates/theater`) es una plantilla e-commerce completa para una tienda de entradas de teatro. Tiene su propio lenguaje visual de vino oscuro y rojo telón con un serif de display clásico (Playfair Display), sin fotografía, sin rejillas de iconos ni nubes de etiquetas: lo sostienen los carteles generados, la animación de scroll y el plano de butacas. Está construida solo con sus propios componentes (`reusedComponents: []`).

---

### Telón · Entradas de teatro (`templates/theater`)

- **Vista previa en vivo**: [/preview/theater/](/preview/theater/) · **Documentación de la plantilla**: [/templates/theater/](/templates/theater/)
- **Tienda pública (5 páginas)**: una home cuyo hero es un escenario con dos telones de terciopelo que se abren al hacer scroll (la animación va ligada al progreso de scroll y un foco sigue al puntero), una cinta de títulos, la cartelera de la semana y preguntas frecuentes; la cartelera, con búsqueda, filtro por género y orden sobre carteles generados en SVG a partir de la paleta y la semilla de cada espectáculo; la ficha del espectáculo, con funciones y un plano de sala interactivo donde las butacas ocupadas se desactivan, los precios varían por zona, se pueden elegir hasta seis butacas y un botón de "mejores butacas juntas" elige una fila para el grupo; el carrito y el pago, con una reserva de diez minutos que libera las butacas al llegar a cero, un código promocional, totales en vivo y un pago de demostración; y el acceso de clientes.
- **Área de cliente (3 páginas)**: un inicio con la próxima función como una fecha enorme con cuenta atrás en vivo junto a su cartel, y sugerencias; una cartera de entradas con billetes clásicos perforados cuyo código se abre a pantalla completa en un diálogo nativo para escanearlo en la puerta; y pedidos con acciones de cambiar y devolver, que también listan los pedidos pagados en este navegador.
- **Accesible por defecto**: cada butaca es una casilla nativa dentro de una etiqueta con fila, número, zona, precio y estado como texto; el plano se desplaza en una región enfocable y "mejores butacas juntas" da una alternativa por teclado; regiones en vivo para cada cambio, objetivos de 44–48px, foco visible, equivalentes de texto para cada dibujo y soporte de `prefers-reduced-motion` (el telón ya está abierto). Variantes oscura y clara.
- **Páginas**: [Inicio](/preview/theater/) · [Cartelera](/preview/theater/cartelera/) · [Espectáculo y butacas](/preview/theater/espectaculo/) · [Carrito](/preview/theater/carrito/) · [Acceso](/preview/theater/acceso/) · [Resumen](/preview/theater/cuenta/) · [Entradas](/preview/theater/cuenta/entradas/) · [Pedidos](/preview/theater/cuenta/pedidos/).
- **16 componentes propios**: [`TheaHero`](/sections/thea-hero/), [`TheaMarquee`](/sections/thea-marquee/), [`TheaShows`](/sections/thea-shows/), [`TheaShowDetail`](/sections/thea-show-detail/), [`TheaCart`](/sections/thea-cart/), [`TheaFaq`](/sections/thea-faq/), [`TheaFooter`](/sections/thea-footer/), [`TheaPoster`](/docs/thea-poster/), [`TheaSeatMap`](/docs/thea-seat-map/), [`TheaTickets`](/docs/thea-tickets/), [`TheaAccountSummary`](/docs/thea-account-summary/), [`TheaOrders`](/docs/thea-orders/), [`TheaAccountNav`](/docs/thea-account-nav/), [`TheaAccountTopbar`](/docs/thea-account-topbar/), [`TheaAccountHeading`](/docs/thea-account-heading/), y [`TheaSignIn`](/docs/thea-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/theater/" title="Vista previa en vivo de Telón (inicio)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/theater/espectaculo/" title="Vista previa en vivo de Telón (plano de butacas)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
