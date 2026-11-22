---
title: 'Nueva plantilla: Barro, una tienda de motos de cross cuya moto salta al hacer scroll'
description: 'Barro es una nueva plantilla e-commerce completa para una tienda de motos de cross: una moto que rueda y salta al hacer scroll, motos y equipación ilustradas en SVG, filtros reales de catálogo, un comparador de motos, un simulador de financiación y un garaje con seguimiento del mantenimiento, todo con componentes propios.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Barro: una tienda de motos de cross cuya moto salta al hacer scroll, en nueve páginas

Barro (`templates/motocross`) es una plantilla e-commerce completa para una tienda de motos de cross. Tiene su propio lenguaje visual de negro asfalto y naranja intenso con una tipografía condensada de impacto (Barlow Condensed), sin fotografía, sin rejillas de iconos ni nubes de etiquetas: lo sostienen las ilustraciones de motos generadas, la animación de scroll y las barras del comparador. Está construida solo con sus propios componentes (`reusedComponents: []`).

---

### Barro · Motos de cross (`templates/motocross`)

- **Vista previa en vivo**: [/preview/motocross/](/preview/motocross/) · **Documentación de la plantilla**: [/templates/motocross/](/templates/motocross/)
- **Tienda pública (6 páginas)**: una home con un hero de rayas de velocidad diagonales y una gran lista tipográfica de categorías, y luego una escena fija que funciona como un corto al hacer scroll — una moto rueda por una pista de tierra al atardecer, las montañas pasan a dos velocidades, las ruedas giran, llega una rampa y la moto salta, se inclina en el aire y aterriza entre polvo — seguida de lo más pedido y preguntas frecuentes; la tienda, con búsqueda, filtro por categoría, precio máximo, interruptor de stock y orden sobre motos, cascos, botas, guantes, camisetas y recambios ilustrados en SVG; la ficha de producto, cuyos selectores de opciones (color, talla, pack de taller) cambian el precio en vivo; "tu moto", con un comparador de hasta tres motos (barras a escala del mejor valor, el ganador de cada fila escrito con palabras), un simulador de financiación con un gráfico de capital frente a interés por año y una guía de tallas que recomienda una talla a partir de tus medidas; el carrito y el pago, con progreso de envío gratis, un código promocional y un pago de demostración; y el acceso de pilotos.
- **Área de cliente (3 páginas)**: un inicio con el pedido en camino y su cronología escrita, más "tu garaje": para cada moto, las horas de motor y cada tarea de mantenimiento como una barra de horas desde el último servicio frente a su intervalo, con un estado en palabras (al día, pronto, toca ya) — anota dos horas de pista y las barras se mueven; pedidos con artículos, seguimiento y devoluciones en 30 días, que también listan los pedidos pagados en este navegador; y una lista de deseos.
- **Accesible por defecto**: controles de búsqueda, radio, rango, casilla y `<details>` nativos, una `<table>` real de comparación con cabeceras de fila y columna, cada cifra que muestra un dibujo está también escrita como texto, los estados son palabras (nunca solo color), regiones en vivo para cada cambio, objetivos de 44–48px, foco visible y soporte de `prefers-reduced-motion` (la escena muestra un fotograma a medio salto). Variantes oscura y clara.
- **Páginas**: [Inicio](/preview/motocross/) · [Tienda](/preview/motocross/tienda/) · [Producto](/preview/motocross/producto/) · [Tu moto](/preview/motocross/tu-moto/) · [Carrito](/preview/motocross/carrito/) · [Acceso](/preview/motocross/acceso/) · [Resumen](/preview/motocross/cuenta/) · [Pedidos](/preview/motocross/cuenta/pedidos/) · [Deseos](/preview/motocross/cuenta/deseos/).
- **18 componentes propios**: [`MotoHero`](/sections/moto-hero/), [`MotoRide`](/sections/moto-ride/), [`MotoShop`](/sections/moto-shop/), [`MotoProduct`](/sections/moto-product/), [`MotoCompare`](/sections/moto-compare/), [`MotoFinance`](/sections/moto-finance/), [`MotoSizeGuide`](/sections/moto-size-guide/), [`MotoCart`](/sections/moto-cart/), [`MotoFaq`](/sections/moto-faq/), [`MotoFooter`](/sections/moto-footer/), [`MotoArt`](/docs/moto-art/), [`MotoAccountSummary`](/docs/moto-account-summary/), [`MotoOrders`](/docs/moto-orders/), [`MotoWishlist`](/docs/moto-wishlist/), [`MotoAccountNav`](/docs/moto-account-nav/), [`MotoAccountTopbar`](/docs/moto-account-topbar/), [`MotoAccountHeading`](/docs/moto-account-heading/), y [`MotoSignIn`](/docs/moto-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/motocross/" title="Vista previa en vivo de Barro (inicio)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/motocross/tu-moto/" title="Vista previa en vivo de Barro (comparador y financiación)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
