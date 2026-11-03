---
title: 'AstroComponents.dev: un kit de UI gratuito para Astro en plena evolución'
description: 'Descubre AstroComponents.dev, un kit de UI de código abierto con más de 200 componentes Astro gratuitos, secciones y componentes glassmorphism para crear aplicaciones web modernas.'
date: '2025-05-02'
tag: 'Anuncio'
heroImage: '/galaxy-bg.svg'
---

## Presentamos AstroComponents.dev

**AstroComponents.dev** es un **kit de UI para Astro** de código abierto pensado para desarrolladores que quieren lanzar interfaces bonitas y accesibles sin tener que construir cada componente desde cero.

Nació como un proyecto personal y está **en evolución y desarrollo activo**: cada semana se añaden componentes nuevos, mejoras y optimizaciones a la librería.

## ¿Qué es?

AstroComponents.dev es una colección completa de **más de 200 componentes Astro gratuitos** con una estética coherente de modo oscuro y glassmorphism. Piensa en ella como tu **librería de componentes Astro** de referencia para:

- **Landing pages**: secciones hero, cuadrículas de características, tablas de precios
- **Dashboards**: tarjetas, gráficos, visualización de datos, barras laterales
- **Formularios**: campos, selectores, subida de archivos, validación
- **Navegación**: barras de navegación, pestañas, migas de pan, paneles laterales
- **Overlays**: modales, toasts, popovers, avisos de cookies

Todos los componentes funcionan **sin dependencias en tiempo de ejecución** (Astro + CSS puro), son accesibles (WCAG AA) y responsivos por defecto.

## Secciones: plantillas de página completas

Una de las grandes ventajas de esta colección de **componentes Astro gratis** es la categoría **Secciones**. En lugar de construir piezas sueltas y montarlas tú, las secciones ofrecen **bloques de página listos** que funcionan desde el primer momento:

- **Hero Gradient**: hero a pantalla completa con fondo degradado animado
- **Hero Split**: contenido y maqueta visual lado a lado
- **Hero Glass**: hero centrado con capa glassmorphism

Cada sección está lista para copiar y pegar y es totalmente responsiva. Sin configuración: impórtala y úsala.

## ¿Por qué AstroComponents.dev?

| Característica | Detalles |
|---|---|
| **Cero dependencias** | Astro + CSS puro. Sin React ni Tailwind |
| **Más de 200 componentes** | Botones, tarjetas, formularios, navbars, overlays, gráficos y más |
| **Accesible** | HTML semántico, atributos ARIA, navegación por teclado |
| **Modo oscuro primero** | Diseñado para fondos oscuros con efectos glassmorphism |
| **Licencia MIT** | Gratis para siempre, en proyectos personales y comerciales |
| **Tree-shakeable** | Importa solo lo que necesitas por categoría |

## Inicio rápido

```bash
npm install astro-component-kit
```

```astro
---
import { GlassButton } from 'astro-component-kit/buttons';
import { GlassCard } from 'astro-component-kit/cards';
import { GlassNavbar } from 'astro-component-kit/navigation';
---

<GlassNavbar brand="MyApp" brandHref="/">
  <div slot="actions">
    <GlassButton>Empezar</GlassButton>
  </div>
</GlassNavbar>
```

Y ya está. Sin configuración, sin archivos de ajustes, sin pasos de build más allá de los que ya ofrece Astro.

## Lo que viene

El proyecto está **en desarrollo activo**. Esto es lo que tenemos en el horizonte:

- **Más plantillas de secciones**: precios, FAQ, testimonios, equipos
- **Componentes de gráficos**: con integración de ApexCharts
- **Componentes 3D**: fondos de galaxia y capas de texto con Three.js
- **Optimizaciones de rendimiento**: bundles más pequeños y builds más rápidos
- **Mejor documentación**: tablas de props, referencias de API y ejemplos de uso

Cada aportación y cada comentario ayudan a definir el rumbo de la librería. Si trabajas con Astro y buscas un **kit de UI gratuito para Astro** que simplemente funcione, es este.

## ¿Para quién es?

- **Desarrolladores independientes** que necesitan una librería de componentes sin complicaciones
- **Agencias** que crean webs de clientes con Astro y quieren piezas listas para producción
- **Diseñadores** que prototipan en Astro y necesitan componentes pulidos y accesibles
- **Cualquiera** que busque **componentes Astro gratuitos** con acabado premium

## Enlaces

- **Ver componentes**: [astrocomponents.dev/es/docs/glass-button](/es/docs/glass-button/)
- **Ver secciones**: [astrocomponents.dev/es/sections](/es/sections/)
- **Guía de instalación**: [astrocomponents.dev/es/install](/es/install/)
- **GitHub**: [github.com/konstantinWDK/astro-components](https://github.com/konstantinWDK/astro-components)

*AstroComponents.dev: construye más rápido, publica con estilo.*
