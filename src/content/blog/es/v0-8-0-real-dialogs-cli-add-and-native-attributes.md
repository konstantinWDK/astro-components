---
title: 'v0.8.0: Diálogos reales, un CLI para copiar componentes y atributos HTML nativos'
description: 'astro-component-kit 0.8.0 reconstruye el modal, el drawer y el bottom sheet sobre el <dialog> nativo, añade `npx astro-component-kit add`, divide el CSS en tokens/base/fonts y permite pasar class y cualquier atributo HTML a botones, formularios y cards.'
date: '2026-11-20'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Una versión para usar el kit, no solo para mirarlo

**astro-component-kit 0.8.0** trae sobre todo mejoras para que los existentes funcionen como esperas dentro de un proyecto real: diálogos de verdad, atributos que llegan al DOM, CSS que puedes adoptar por partes y ejemplos de código que siempre coinciden con lo que se publica. Además incluye dos plantillas nuevas, **Nido** (inmobiliaria + CRM de agentes) y **Forja** (gimnasio + área de socios), y el rediseño integral de **BiteFlow** y **Strukto**.

---

### 🪟 El modal, el drawer y el bottom sheet ahora son diálogos reales

`OverlayModal`, `SideDrawerRight` y `BottomSheetMobile` se han reconstruido sobre el elemento nativo `<dialog>`. El navegador se encarga de atrapar el foco, cerrar con Escape, mostrarlos en la capa superior y devolver el foco al botón que los abrió, sin JavaScript extra que conectar.

```astro
<GlassButton data-dialog-open="delete-project">Eliminar proyecto</GlassButton>

<OverlayModal id="delete-project" size="sm" title="¿Eliminar el proyecto?">
  <Fragment slot="footer">
    <GlassButton variant="ghost" data-dialog-close="cancel">Cancelar</GlassButton>
    <GlassButton data-dialog-close="confirm">Eliminar</GlassButton>
  </Fragment>
</OverlayModal>
```

- Se abren con `data-dialog-open="<id>"` en cualquier elemento y se cierran con `data-dialog-close`, Escape o el fondo
- `variant` (`glass`, `solid`, `minimal`), `size` (`sm`, `md`, `lg`), `title`, `description` y un slot `footer`
- El drawer se desliza desde la `right` o la `left`; el sheet ocupa todo el ancho en móvil y flota en escritorio
- Animaciones de entrada con `@starting-style`, desactivadas con movimiento reducido

> **Cambio incompatible:** estos tres componentes ahora necesitan un `id` y permanecen cerrados hasta que se abren. Si los usabas como bloques estáticos, añade un `id` y un disparador, o pasa `open` para mostrarlos al cargar.

---

### ⌨️ Copia componentes a tu proyecto

¿Prefieres tener el código? El CLI copia un componente y todos los archivos locales que importa:

```bash
npx astro-component-kit add glass-button animated-input --dir src/components/ui
npx astro-component-kit list overlays
```

Avisa cuando un componente necesita `three` o `apexcharts` y sugiere nombres si escribes uno mal.

---

### 🏷️ `class` y atributos nativos donde los necesitas

Los botones, los campos de formulario y las cards aceptan ahora `class` y cualquier atributo HTML, como `aria-*`, `data-*`, `target`, `rel` o `autocomplete`. Los componentes de formulario los pasan al `<input>`, `<select>` o `<textarea>` nativo, así que la validación y el autocompletado funcionan.

```astro
<GlassButton href="/docs" target="_blank" rel="noopener" class="hero-cta">Docs</GlassButton>
<AnimatedInput id="email" label="Email" type="email" autocomplete="email" required />
```

---

### 🎨 CSS que puedes adoptar por partes

`global.css` sigue funcionando, y ahora está dividido en tres archivos:

- `astro-component-kit/tokens.css`: solo variables CSS, seguro en cualquier sitio existente
- `astro-component-kit/base.css`: reset y estilos de página; impórtalo en una capa para que tus estilos manden
- `astro-component-kit/fonts.css`: Inter y JetBrains Mono

---

### 🏗️ Dos plantillas nuevas y dos rediseños

La 0.8.0 añade **Nido** (inmobiliaria + CRM de agentes, `templates/real-estate`) y **Forja** (gimnasio + área de socios, `templates/gym`), y reconstruye **BiteFlow** (`templates/food-delivery`) y **Strukto** (`templates/construction`). Cada una usa solo sus propios componentes (`reusedComponents: []`): 62 componentes dedicados en total, todos con página de documentación y vista previa en vivo.

| Plantilla | Vista previa | Componentes |
|---|---|---|
| Nido · inmobiliaria + CRM | [/preview/real-estate/](/preview/real-estate/) | [`EstateHero`](/es/sections/estate-hero/), [`EstateListingsGrid`](/es/sections/estate-listings-grid/), [`EstateMortgageCalculator`](/es/docs/estate-mortgage-calculator/), [`EstateLeadsPipeline`](/es/docs/estate-leads-pipeline/) y 12 más |
| Forja · gimnasio + área de socios | [/preview/gym/](/preview/gym/) | [`GymHero`](/es/sections/gym-hero/), [`GymSchedule`](/es/sections/gym-schedule/), [`GymClassBooking`](/es/docs/gym-class-booking/), [`GymOccupancyMeter`](/es/docs/gym-occupancy-meter/) y 11 más |
| BiteFlow · delivery + Kitchen OS | [/preview/food-delivery/](/preview/food-delivery/) | [`FoodHeroPlate`](/es/sections/food-hero-plate/), [`FoodCartDrawer`](/es/docs/food-cart-drawer/), [`FoodOrderMap`](/es/docs/food-order-map/), [`FoodKitchenBoard`](/es/docs/food-kitchen-board/) y 12 más |
| Strukto · constructora + Site OS | [/preview/construction/](/preview/construction/) | [`ConstructionBlueprintHero`](/es/sections/construction-blueprint-hero/), [`ConstructionIsoUnitPicker`](/es/docs/construction-iso-unit-picker/), [`ConstructionGanttBoard`](/es/docs/construction-gantt-board/) y 12 más |

El servidor MCP también las lista (`get_template` con los slugs `real-estate` y `gym`). Las listas completas de componentes y las vistas previas están en [Nuevas plantillas y rediseños](/es/notes/new-templates-nido-forja-biteflow-strukto/).

---

### 🐛 Correcciones

- Los bloques de código de la documentación y del servidor MCP leen ahora los archivos reales de los componentes. 188 de ellos se habían desincronizado del código publicado.
- Los botones-enlace deshabilitados ya no se pueden pulsar, y `LoadingButton` anuncia que está cargando
- Tres botones que enviaban formularios por defecto ahora usan `type="button"`
- Las capas decorativas quedan ocultas para los lectores de pantalla, y el textarea del widget de feedback muestra el foco del teclado
- El servidor MCP informa de su propia versión y sus tokens cuando se lanza con `npx` desde otro proyecto

Todos los detalles están en el [changelog](https://github.com/konstantinWDK/astro-components/blob/main/CHANGELOG.md).
