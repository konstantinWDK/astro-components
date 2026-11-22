---
title: 'Nueva plantilla: Cota, un estudio de arquitectura con área de obra para el cliente'
description: 'Cota es una nueva plantilla completa para un estudio de arquitectura: un alzado que se dibuja solo, plantas generadas, un estudio solar interactivo con posiciones reales del sol y una calculadora de coste, más un área de cliente para seguir la obra, todo con componentes propios.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Cota: un estudio de arquitectura que dibuja sus propios planos, en ocho páginas

Cota (`templates/architecture`) es una plantilla completa para un estudio de arquitectura. Tiene su propio lenguaje visual de grafito y verde ácido con una grotesca pesada (Archivo) y una monoespaciada (IBM Plex Mono) para las medidas, sin fotografía, sin rejillas de iconos ni nubes de etiquetas: lo sostienen los dibujos generados, la tipografía y los cálculos. Está construida solo con sus propios componentes (`reusedComponents: []`).

---

### Cota · Estudio de arquitectura (`templates/architecture`)

- **Vista previa en vivo**: [/preview/architecture/](/preview/architecture/) · **Documentación de la plantilla**: [/templates/architecture/](/templates/architecture/)
- **Web pública (5 páginas)**: una home cuyo hero dibuja un alzado línea a línea, con cotas de plano, obra reciente como índice con plantas generadas por partición binaria del espacio, un estudio solar interactivo y los principios del estudio; el índice completo de obra construida con filtro por tipo, planta, alzado y datos; el estudio, con el proceso como acordeón Gantt; el presupuesto, con una calculadora de coste (rango de precio, desglose y calendario de proyecto, licencia y obra) y un formulario de solicitud; y el acceso de clientes.
- **El estudio solar**: calcula la altura y el azimut reales del sol para la latitud del estudio. Mueve la hora, cambia el mes o sube el edificio vecino del sur y mira cómo cae la sombra sobre la casa, con el porcentaje de fachada iluminada y las horas de sol directo a 3 m escritas.
- **Área de cliente (3 páginas)**: un inicio de obra con una cifra enorme de avance junto a un alzado construido planta a planta hasta ese avance, las fases, el equipo y lo que espera respuesta; un presupuesto con barras de pagado frente a presupuesto por partida, modificados por aprobar o rechazar con totales en vivo y decisiones pendientes con el pro y el contra de cada opción en palabras; y documentos con filtro de estado y firma más un diario de obra con buscador.
- **Accesible por defecto**: controles de rango, radio y `<details>` nativos, cada número que muestra un dibujo está también escrito como texto, regiones en vivo para cada cambio, objetivos de 44–48px, foco visible, equivalentes de texto para cada dibujo y soporte de `prefers-reduced-motion`. Variantes oscura y clara.
- **Páginas**: [Inicio](/preview/architecture/) · [Obras](/preview/architecture/obras/) · [Estudio](/preview/architecture/estudio/) · [Presupuesto](/preview/architecture/presupuesto/) · [Acceso](/preview/architecture/acceso/) · [Resumen de obra](/preview/architecture/obra/) · [Presupuesto de obra](/preview/architecture/obra/presupuesto/) · [Documentos](/preview/architecture/obra/documentos/).
- **19 componentes propios**: [`ArchHero`](/sections/arch-hero/), [`ArchProjects`](/sections/arch-projects/), [`ArchSun`](/sections/arch-sun/), [`ArchProcess`](/sections/arch-process/), [`ArchEstimate`](/sections/arch-estimate/), [`ArchPrinciples`](/sections/arch-principles/), [`ArchFaq`](/sections/arch-faq/), [`ArchFooter`](/sections/arch-footer/), [`ArchElevation`](/docs/arch-elevation/), [`ArchPlan`](/docs/arch-plan/), [`ArchWorkSummary`](/docs/arch-work-summary/), [`ArchBudget`](/docs/arch-budget/), [`ArchDecisions`](/docs/arch-decisions/), [`ArchDiary`](/docs/arch-diary/), [`ArchDocuments`](/docs/arch-documents/), [`ArchAccountNav`](/docs/arch-account-nav/), [`ArchAccountTopbar`](/docs/arch-account-topbar/), [`ArchAccountHeading`](/docs/arch-account-heading/), y [`ArchSignIn`](/docs/arch-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/architecture/" title="Vista previa en vivo de Cota (inicio)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/architecture/obra/" title="Vista previa en vivo de Cota (obra del cliente)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
