---
title: 'v0.4.1: Plantillas multipágina para producción, suite e-commerce, app SaaS y tema claro'
description: 'Plantillas interactivas completas para Astro: tiendas e-commerce completas, aplicaciones de panel SaaS, una suite dedicada de componentes para tiendas online, modo claro y astro-component-kit 0.4.1 en npm.'
date: '2026-11-04'
tag: 'Lanzamiento'
heroImage: '/galaxy-bg.svg'
---

## Creando aplicaciones y tiendas completas en Astro

Ya está disponible **astro-component-kit 0.4.1**, marcando la evolución de una colección de componentes individuales hacia un **sistema integral de plantillas y aplicaciones para Astro**.

Hasta ahora contabas con botones, tarjetas, formularios, gráficos y secciones. Con la versión 0.4.1 añadimos **plantillas multipágina completas listas para producción** con estado compartido, compatibilidad con enrutamiento de cliente, filtrado en tiempo real, carrito de compra persistente y flujos reales de negocio: todo con **cero dependencias en tiempo de ejecución**, soporte para tema claro/oscuro y plena accesibilidad WCAG AA.

---

## 3 Plantillas completas de producción

Cada plantilla está disponible en el nuevo **[Catálogo de Plantillas](/es/templates/)** con previsualizaciones interactivas en vivo en español, inglés y ruso:

### 🛒 [Tienda E-Commerce (Nova Store)](/es/templates/ecommerce/)
Una tienda online completa de cinco páginas:
- **Páginas incluidas:** Inicio, Catálogo, Ficha de Producto (PDP), Carrito y Checkout.
- **Carrito persistente:** Carrito reactivo (`cart-store.ts`) que persiste entre recargas y se sincroniza entre pestañas del navegador sin frameworks externos.
- **Filtrado instantáneo:** Motor de filtrado en cliente por categoría, rango de precio, color, valoración y disponibilidad de stock.
- **Checkout completo:** Cálculo multietapa de envío, desglose de impuestos, motor de cupones y confirmación del pedido.
- **Ilustraciones incluidas:** 16 ilustraciones de producto vectoriales SVG hechas a mano: no requieres fotos de stock externas.

### 🏺 [E-Commerce Editorial (Forma Studio)](/es/templates/ecommerce-editorial/)
Una boutique de moda y diseño con estética editorial:
- **Línea de diseño:** Tipografía display con serifa, geometría limpia, tonos terracota cálidos y maquetación tipo revista.
- **Páginas y secciones:** Hero editorial, mosaico de colecciones, lookbook, carruseles de producto, marquesina de valores, reseñas y páginas completas de bolsa y checkout.
- **Tema claro por defecto:** Diseñada con una paleta luminosa y cálida con selector a modo oscuro.

### 🏨 [App SaaS para Hostelería (The Lobby)](/es/templates/saas-hotel/)
Un panel de control completo para hoteles y alojamientos:
- **Vistas incluidas:** Panel principal con KPIs, planificador de habitaciones (Room Rack), panel de llegadas y salidas en tiempo real, estado de limpieza (Housekeeping), directorio de huéspedes con perfil detallado, informes de ocupación e ingresos, ajustes y pantalla de inicio de sesión (Auth).
- **Interfaz interactiva:** Filtros de estado, calendarios interactivos, insignias de disponibilidad y tablas de datos ampliables.

---

## 2 Nuevas categorías de componentes

Hemos empaquetado los bloques fundamentales que dan vida a estas plantillas en dos nuevas rutas de exportación en npm:

### 🛍️ `astro-component-kit/ecommerce`
Más de 17 componentes dedicados para comercio electrónico:
- [StoreHeader](/es/docs/store-header/) y [PromoBar](/es/docs/promo-bar/)
- [CartDrawer](/es/docs/cart-drawer/) y [CartToast](/es/docs/cart-toast/)
- [ProductBuyBox](/es/docs/product-buy-box/) y [VariantPicker](/es/docs/variant-picker/)
- [ProductGrid](/es/docs/product-grid/) y [ProductCardMinimal](/es/docs/product-card-minimal/)
- [FilterSidebar](/es/docs/filter-sidebar/) y [FilterBar](/es/docs/filter-bar/)
- [OrderSummary](/es/docs/order-summary/) y [CheckoutForm](/es/docs/checkout-form/)
- [StockIndicator](/es/docs/stock-indicator/), [CountdownBanner](/es/docs/countdown-banner/) y [LiveActivityToast](/es/docs/live-activity-toast/)

```astro
---
import 'astro-component-kit/global.css';
import { ProductBuyBox, VariantPicker, CartDrawer } from 'astro-component-kit/ecommerce';
---

<ProductBuyBox
  title="Jarrón Cerámico Minimalista"
  price={64}
  rating={4.9}
  reviewsCount={128}
  inStock={true}
>
  <VariantPicker slot="variants" options={['Piedra', 'Terracota', 'Obsidiana']} />
</ProductBuyBox>

<CartDrawer />
```

### 📊 `astro-component-kit/app`
Componentes de alta densidad para paneles y aplicaciones web:
- [DataTable](/es/docs/data-table/) — Tabla de datos ordenable y filtrable con paginación y selección de filas.
- [AppSidebar](/es/docs/app-sidebar/) y [AppTopbar](/es/docs/app-topbar/) — Estructuras de navegación colapsables con estados activos y acciones rápidas.
- [RoomRack](/es/docs/room-rack/) — Cuadrícula de ocupación con línea temporal para reservas y alojamientos.
- [ArrivalsBoard](/es/docs/arrivals-board/) y [HousekeepingBoard](/es/docs/housekeeping-board/) — Paneles operativos estilo kanban con acciones rápidas de cambio de estado.
- [GuestProfileCard](/es/docs/guest-profile-card/) y [PlanUsageCard](/es/docs/plan-usage-card/) — Tarjetas métricas de perfil e indicadores de límites de plan.
- [AuthCard](/es/docs/auth-card/) — Contenedor pulido para formularios de inicio de sesión y registro.

---

## 🌓 Soporte total para Modo Claro (Light Theme)

`astro-component-kit` incorpora compatibilidad oficial con tema claro en todos los componentes, gráficos y secciones de la librería.

- Tokens CSS `--ink-rgb`, `--paper-rgb` y `--c-on-primary` añadidos en `global.css`.
- Alternancia instantánea aplicando `[data-theme="light"]` en la raíz del documento.
- Los 41 gráficos SVG y las secciones ajustan automáticamente su contraste, bordes de cuadrícula y tooltips al tema activo.

---

## 🔍 Mejoras en la barra lateral y documentación

- **Búsqueda instantánea:** Pulsa `/` en cualquier página de la documentación para enfocar de inmediato la barra de búsqueda con filtrado en tiempo real.
- **Secciones colapsables:** Navegación más limpia y organizada gracias a grupos plegables de componentes y secciones.
- **Acceso a plantillas:** Enlace directo para explorar las plantillas en vivo y su código fuente.

---

## Cómo actualizar a v0.4.1

```bash
npm install astro-component-kit@0.4.1
```

¡Descubre todas las demostraciones interactivas en la nueva galería de **[Plantillas](/es/templates/)**!

