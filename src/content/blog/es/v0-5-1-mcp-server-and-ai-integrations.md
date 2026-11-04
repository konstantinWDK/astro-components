---
title: 'v0.5.1: Servidor MCP Oficial, Integración de IA en 1 Clic y Experiencia 21st.dev'
description: 'Conecta Cursor, Claude Desktop, Codex, Lovable o cualquier cliente MCP directamente a más de 340 componentes, gráficos SVG y plantillas completas con astro-component-kit 0.5.1 en npm.'
date: '2026-11-04'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Desarrollo en Astro impulsado por IA

Ya está disponible **astro-component-kit 0.5.1**, una actualización mayor que transforma nuestra librería en un **ecosistema de diseño e ingeniería pensado para la Inteligencia Artificial**.

Gracias al nuevo servidor oficial **Model Context Protocol (MCP)**, tu asistente de IA en **Cursor**, **Claude**, **Codex**, **Lovable** o cualquier entorno compatible con MCP tiene acceso directo y en tiempo real a todo el catálogo de **más de 340 componentes**, **41 gráficos SVG** y **3 plantillas de aplicaciones multipágina**.

---

## 🌟 Novedades en la versión 0.5.1

### 1. Servidor MCP Remoto oficial (SSE)
- **Endpoint en vivo:** `https://mcp.astrocomponents.dev/sse`
- Construido sobre Node.js 22 con Server-Sent Events (SSE) y rate limiting estricto (120 req/min por IP) para garantizar alta disponibilidad.
- **Descubrimiento dinámico sin desincronización:** Se actualiza automáticamente desde el registro maestro de componentes. Cuando se añaden nuevos bloques o plantillas a la librería, tu asistente los detecta al instante sin configuraciones adicionales.

### 2. Instalador CLI en 1 solo comando
Olvídate de buscar carpetas ocultas de configuración. Ejecuta un único comando en tu terminal según tu editor:

```bash
# Para Cursor (.cursor/mcp.json)
npx astro-component-kit mcp install cursor

# Para Claude Desktop (claude_desktop_config.json)
npx astro-component-kit mcp install claude

# Para OpenAI Codex / Agentes de código (.codex/mcp.json)
npx astro-component-kit mcp install codex

# Para proyectos de Lovable (.lovable/mcp.json)
npx astro-component-kit mcp install lovable

# Para MCP Universal (Windsurf, Cline, Zed, etc.)
npx astro-component-kit mcp install mcp
```

### 3. Centro interactivo estilo 21st.dev (`/mcp`)
Descubre la nueva página interactiva **[MCP Hub](/es/mcp/)** disponible directamente desde el menú principal:
- Pestañas con comandos e instrucciones para cada editor.
- Prompts de ejemplo listos para copiar sobre e-commerce, gráficos, paneles SaaS y variables de diseño.
- Documentación completa de las 8 herramientas integradas.

### 4. 8 Herramientas MCP integradas
1. `search_components`: Búsqueda entre más de 340 componentes por nombre, categoría y etiquetas.
2. `get_component`: Inspecciona interfaces Props en TypeScript, accesibilidad y modo de importación.
3. `get_component_code`: Obtiene el código fuente completo `.astro` listo para pegar en tu proyecto.
4. `list_categories`: Lista las 13 categorías disponibles con el conteo de elementos en tiempo real.
5. `list_templates`: Explora las 3 plantillas completas (E-Commerce, Editorial, SaaS Hotel).
6. `get_template`: Obtiene arquitectura, páginas y archivos de estado de cada plantilla.
7. `get_design_tokens`: Consulta los tokens CSS, variables de modo claro/oscuro y colores.
8. `get_library_info`: Información general de versiones, totales y guía rápida.

---

## ⚡ Prueba estos prompts en tu IA

Una vez conectado el servidor, pídele a tu editor:

> *"Busca en astro-components botones con efecto glow y campos de texto estilo neón."*

> *"Crea una página de checkout completa para e-commerce usando la plantilla Nova Store y el carrito CartDrawer."*

> *"Añade una tarjeta KPI de ingresos y un gráfico SVG LineChart con tokens de tema oscuro."*

---

## 📦 Actualizar a v0.5.1

```bash
npm install astro-component-kit@0.5.1
```

O configura tu asistente de IA directamente con:

```bash
npx astro-component-kit mcp install cursor
```

