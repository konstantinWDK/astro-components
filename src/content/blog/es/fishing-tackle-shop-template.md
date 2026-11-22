---
title: 'Nueva plantilla: Corcho, una tienda de pesca con una escena de lanzado guiada por el scroll'
description: 'Corcho es una nueva plantilla e-commerce completa para una tienda de pesca: una escena de lanzado que se reproduce al hacer scroll, ilustraciones de producto generadas en SVG, filtros reales de catálogo, un configurador de equipo por especies y un carrito, más un área de pedidos y deseos, todo con componentes propios.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Corcho: una tienda de pesca con una escena de lanzado que se reproduce al hacer scroll, en nueve páginas

Corcho (`templates/fishing`) es una plantilla e-commerce completa para una tienda de pesca. Tiene su propio lenguaje visual de azul-verde profundo y aqua con una grotesca con carácter (Bricolage Grotesque), sin fotografía, sin rejillas de iconos ni nubes de etiquetas: lo sostienen las ilustraciones de producto generadas, la animación de scroll y el gráfico de especies. Está construida solo con sus propios componentes (`reusedComponents: []`).

---

### Corcho · Tienda de pesca (`templates/fishing`)

- **Vista previa en vivo**: [/preview/fishing/](/preview/fishing/) · **Documentación de la plantilla**: [/templates/fishing/](/templates/fishing/)
- **Tienda pública (6 páginas)**: una home con un hero de ondas que se expanden despacio y una gran lista tipográfica de categorías, y luego una escena fija que funciona como un corto al hacer scroll — el cielo pasa de primera luz a pleno día, la caña se balancea, la línea vuela en arco y se dibuja sola, el corcho cae, se expanden las ondas y un pez pica — seguida de lo más pedido y preguntas frecuentes; la tienda, con búsqueda, filtro por categoría, precio máximo, interruptor de stock y orden sobre ilustraciones de producto generadas en SVG (cañas, carretes, señuelos, línea, sacaderas); la ficha de producto, cuyos selectores de opciones cambian el precio en vivo; un configurador de equipo por especies, con un gráfico de barras de doce meses de cuándo pica mejor cada pez, consejos y material recomendado que se puede marcar y añadir al carrito de un clic; el carrito y el pago, con progreso de envío gratis, un código promocional y un pago de demostración; y el acceso de clientes.
- **Área de cliente (3 páginas)**: un inicio con el pedido en camino y su cronología escrita, las cifras del cliente y "qué pica este mes", calculado con las épocas de cada especie; pedidos con artículos, seguimiento y devoluciones en 30 días, que también listan los pedidos pagados en este navegador; y una lista de deseos con acciones de mover al carrito y quitar.
- **Accesible por defecto**: controles de búsqueda, radio, rango, casilla y `<details>` nativos, cada cifra que muestra un dibujo está también escrita como texto, regiones en vivo para cada cambio, objetivos de 44–48px, foco visible, equivalentes de texto para cada dibujo y soporte de `prefers-reduced-motion` (la escena muestra su fotograma final). Variantes oscura y clara.
- **Páginas**: [Inicio](/preview/fishing/) · [Tienda](/preview/fishing/tienda/) · [Producto](/preview/fishing/producto/) · [Configurador](/preview/fishing/equipo/) · [Carrito](/preview/fishing/carrito/) · [Acceso](/preview/fishing/acceso/) · [Resumen](/preview/fishing/cuenta/) · [Pedidos](/preview/fishing/cuenta/pedidos/) · [Deseos](/preview/fishing/cuenta/deseos/).
- **16 componentes propios**: [`FishHero`](/sections/fish-hero/), [`FishCast`](/sections/fish-cast/), [`FishShop`](/sections/fish-shop/), [`FishProduct`](/sections/fish-product/), [`FishKit`](/sections/fish-kit/), [`FishCart`](/sections/fish-cart/), [`FishFaq`](/sections/fish-faq/), [`FishFooter`](/sections/fish-footer/), [`FishArt`](/docs/fish-art/), [`FishAccountSummary`](/docs/fish-account-summary/), [`FishOrders`](/docs/fish-orders/), [`FishWishlist`](/docs/fish-wishlist/), [`FishAccountNav`](/docs/fish-account-nav/), [`FishAccountTopbar`](/docs/fish-account-topbar/), [`FishAccountHeading`](/docs/fish-account-heading/), y [`FishSignIn`](/docs/fish-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/fishing/" title="Vista previa en vivo de Corcho (inicio)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/fishing/equipo/" title="Vista previa en vivo de Corcho (configurador de equipo)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
