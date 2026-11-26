---
title: 'v0.8.3: Tres plantillas nuevas, cuatro componentes nuevos y un shell de cuenta compartido'
description: 'astro-component-kit 0.8.3 añade las plantillas de cumbre tecnológica Pulse, universidad Veritas y festival de música Sonora, cuatro componentes base (Combobox, GlassCheckbox, DateInput, SortableTable) y sustituye unas 5.000 líneas duplicadas de las áreas de cliente por un shell compartido y adaptable por tema.'
date: '2026-11-26'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Novedades de la 0.8.3

**astro-component-kit 0.8.3** añade tres plantillas completas de varias páginas, cuatro componentes para las categorías base y una limpieza que abarata mucho el mantenimiento de las plantillas con área de cliente. Para actualizar no hace falta cambiar nada en tu código.

```bash
npm install astro-component-kit@0.8.3
```

## Tres plantillas nuevas

Cada una está hecha solo con sus propios componentes (`reusedComponents: []`), con vista previa en vivo, tema claro y oscuro, textos traducidos y entrada en el servidor MCP.

### Pulse — cumbre tecnológica

Una web de congreso con cuenta atrás en vivo, cuatro tracks, programa de varios días con filtros por track, buscador y agenda personal guardada en el navegador, directorio de ponentes, entradas por niveles con validación de códigos promocionales y un plano SVG interactivo de la sede.

- Vista previa en vivo: [/preview/tech-event/](/preview/tech-event/)
- Lee el post completo: [Pulse](/es/blog/tech-event-template/)

### Veritas — universidad

Una web de educación superior con buscador de titulaciones, catálogo de programas con filtros por facultad, guía de admisión en cuatro pasos, calculadora de matrícula y becas al mérito, institutos de investigación, vida en el campus y registro para jornadas de puertas abiertas.

- Vista previa en vivo: [/preview/university/](/preview/university/)
- Lee el post completo: [Veritas](/es/blog/university-template/)

### Sonora — festival de música

Una web de festival con cuenta atrás, cartel por días, horarios por escenario con agenda personal, entradas por niveles con total en vivo y pase digital. Se preparó con el nombre «Pulso» y se renombró antes de publicarla para que no choque con la plantilla de clínica.

- Vista previa en vivo: [/preview/festival/](/preview/festival/)
- Lee el post completo: [Sonora](/es/blog/sonora-music-festival-template/)

## Cuatro componentes base nuevos

Las categorías base llevaban tiempo sin cambios, así que la 0.8.3 cubre algunos huecos. Los cuatro siguen las reglas de la librería: props tipadas, `class` y atributos nativos reenviados al elemento correcto, variantes, tamaños, anillos de foco visibles y tokens pensados primero para modo oscuro.

- **Combobox** — un selector con búsqueda que sigue el patrón ARIA 1.2: escribe para filtrar, flechas para moverte, Enter para elegir y Escape para cancelar. El valor viaja en un input oculto, así que funciona en cualquier formulario nativo.
- **GlassCheckbox** — un `<input type="checkbox">` real rediseñado para interfaces oscuras, con descripción, estado indeterminado y variantes `primary`, `success` y `danger`.
- **DateInput** — un campo de fecha, fecha y hora o mes sobre el selector nativo, con estados de ayuda y de error.
- **SortableTable** — columnas que se ordenan al hacer clic, anunciadas con `aria-sort`, con orden natural para texto y números y una región de scroll enfocable en pantallas estrechas.

## Un shell de cuenta compartido

Las plantillas con área de cliente repetían el mismo acceso, navegación, barra superior y cabecera de página en cada plantilla, con cambios solo en los textos y en algún detalle tipográfico. La 0.8.3 lo mueve a cuatro componentes compartidos, adaptables mediante un prefijo de tokens:

- `AccountSignIn`, `AccountNav`, `AccountTopbar` y `AccountHeading`.
- Los componentes de Fish, Thea, Wine, Moto, Rest, Perf y Arch son ahora envoltorios finos sobre ellos: 28 archivos y unas 5.000 líneas menos.
- Comparamos el HTML renderizado de 59 páginas antes y después del cambio. El marcado es idéntico, salvo los ids generados al azar.

Si copias estos componentes a tu proyecto con la CLI, los archivos compartidos se copian junto con el envoltorio.

## Versiones más seguras

- `npm run audit` admite ahora `AUDIT_BASE_URL`, `AUDIT_SAMPLE`, `AUDIT_TIMEOUT` y `AUDIT_CONCURRENCY`, omite imágenes y fuentes y termina con error si falla una página o una vista previa.
- La integración continua construye ahora el sitio, lo sirve y audita una muestra de las páginas de componentes en cada pull request.

## Pruébalo

Explora las [plantillas](/es/templates/), los [componentes](/es/components/) y el [changelog](https://github.com/konstantinWDK/astro-components/blob/main/CHANGELOG.md).
