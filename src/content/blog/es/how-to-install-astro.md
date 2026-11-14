---
title: 'Cómo instalar Astro: guía completa paso a paso (npm, pnpm, yarn y Bun)'
description: 'Aprende cómo instalar Astro en menos de 2 minutos con npm, pnpm, yarn o Bun. Incluye comandos CLI, instalación manual, fuentes oficiales y librería UI recomendada.'
date: '2026-11-14'
tag: 'Guide'
heroImage: '/galaxy-bg.svg'
---

Para **instalar Astro** y crear un proyecto nuevo, ejecuta el asistente oficial desde tu terminal con tu gestor de paquetes favorito:

```bash
npm create astro@latest
```

El asistente interactivo `create astro` te guiará para elegir la carpeta del proyecto, seleccionar una plantilla inicial, inicializar Git e instalar las dependencias. Al terminar, inicia el servidor de desarrollo con `npm run dev` y abre `http://localhost:4321`.

---

## Requisitos previos

Antes de instalar Astro, asegúrate de cumplir los requisitos mínimos:

- **Node.js** — `v18.20.8+`, `v20.3.0+` o `v22.12.0+` (se recomienda Node.js 22 LTS)
- **Editor de código** — VS Code, Cursor o cualquier editor con la [extensión oficial de Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- **Terminal** — Terminal de macOS, shell de Linux o PowerShell / WSL en Windows

Comprueba tu versión actual de Node.js con:

```bash
node -v
```

---

## Método 1: Instalar Astro con el asistente CLI (Recomendado)

La forma más rápida de instalar Astro es mediante el CLI oficial `create astro`. Elige el comando según tu gestor de paquetes:

### npm

```bash
npm create astro@latest
```

### pnpm

```bash
pnpm create astro@latest
```

### yarn

```bash
yarn create astro
```

### Bun

```bash
bun create astro@latest
```

### Instalación rápida sin preguntas interactivas

Si quieres omitir el asistente y crear un proyecto mínimo directamente:

```bash
npm create astro@latest mi-proyecto-astro -- --template minimal --install --git
```

### Iniciar el servidor de desarrollo

Entra en la carpeta del proyecto y arranca el entorno local:

```bash
cd mi-proyecto-astro
npm run dev
```

Tu sitio Astro estará disponible en **`http://localhost:4321`**.

---

## Método 2: Instalación manual de Astro

Si prefieres configurar Astro manualmente en un directorio existente sin usar el asistente CLI:

```bash
mkdir mi-proyecto-astro
cd mi-proyecto-astro
npm init -y
npm install astro
```

Añade los scripts estándar de Astro a tu `package.json`:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

Crea tu primera página en `src/pages/index.astro`:

```astro
---
const title = 'Bienvenido a Astro';
---

<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
  </body>
</html>
```

Ejecuta `npm run dev` para previsualizar tu página.

---

## Añadir integraciones (Tailwind, React, Sitemap, etc.)

Astro incluye el comando `astro add` para instalar integraciones oficiales y actualizar `astro.config.mjs` automáticamente:

```bash
# Ejemplos:
npx astro add tailwind
npx astro add react
npx astro add sitemap
```

---

## Recomendado: Instala una librería de componentes UI (`astro-component-kit`)

Una vez que hayas instalado Astro, no necesitas diseñar botones, barras de navegación, formularios, tarjetas o secciones completas desde cero.

Te recomendamos instalar **[astro-component-kit](https://astrocomponents.dev)** — una librería UI open-source con licencia MIT que incluye **más de 400 componentes accesibles** y **12 plantillas completas de producción**, sin dependencias en runtime.

### Instalar `astro-component-kit`

```bash
npm install astro-component-kit
```

O con `pnpm` / `yarn`:

```bash
pnpm add astro-component-kit
# o
yarn add astro-component-kit
```

### Usar componentes en tus páginas `.astro`

```astro
---
import 'astro-component-kit/global.css';
import { GlassNavbar } from 'astro-component-kit/navigation';
import { GlassCard } from 'astro-component-kit/cards';
import { GlassButton } from 'astro-component-kit/buttons';
---

<GlassNavbar brand="MiWeb" brandHref="/">
  <div slot="actions">
    <GlassButton>Empezar</GlassButton>
  </div>
</GlassNavbar>

<GlassCard title="Listo en minutos">
  Cero dependencias en runtime, accesibilidad WCAG AA y puro Astro + CSS.
</GlassCard>
```

### Opcional: Configuración MCP en 1 clic para editores con IA

Si usas Cursor, Claude o Codex, puedes conectar el servidor MCP de AstroComponents con un solo comando:

```bash
npx astro-component-kit mcp install cursor
```

- **Guía de instalación de la librería**: [/es/install/](/es/install/)
- **Explorar componentes**: [/es/docs/glass-button/](/es/docs/glass-button/)
- **Ver secciones y plantillas**: [/es/sections/](/es/sections/) · [/es/templates/](/es/templates/)

---

## Fuentes oficiales de Astro

Consulta siempre la documentación oficial de Astro para detalles actualizados de cada versión:

- **Guía oficial de instalación**: [docs.astro.build/es/install-and-setup/](https://docs.astro.build/es/install-and-setup/)
- **Referencia oficial del CLI de Astro**: [docs.astro.build/es/reference/cli-reference/](https://docs.astro.build/es/reference/cli-reference/)
- **Sitio oficial de Astro**: [astro.build](https://astro.build)
- **Repositorio oficial en GitHub**: [github.com/withastro/astro](https://github.com/withastro/astro)

---

## Preguntas frecuentes (FAQ)

### ¿Cómo compruebo si Astro se instaló correctamente?
Ejecuta `npx astro info` dentro de la carpeta del proyecto. Mostrará la versión de Astro, Node.js, sistema operativo e integraciones activas.

### ¿Cómo actualizo Astro a la última versión?
Ejecuta `npx @astrojs/upgrade` dentro de tu proyecto para actualizar automáticamente `astro` y todos los paquetes `@astrojs/*`.

### ¿Necesito React o Tailwind para usar Astro?
No. Astro no envía JavaScript al cliente por defecto y funciona con HTML y CSS estándar. Librerías como `astro-component-kit` también funcionan con Astro puro y CSS sin depender de React ni Tailwind.

