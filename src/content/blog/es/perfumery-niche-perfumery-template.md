---
title: 'Nueva plantilla: Umbra, una perfumería de autor con área de cliente'
description: 'Umbra es una nueva plantilla completa para una casa de perfumería de autor: un deslizador de evolución en piel, un mapa olfativo, un test de perfil y un constructor de set de descubrimiento, más un área de cliente con una estantería de frascos dibujados a su nivel real, un laboratorio de capas y pedidos, todo con componentes propios.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Umbra: una perfumería que se lee con los ojos, en ocho páginas

Umbra (`templates/perfumery`) es una plantilla completa para una casa de perfumería de autor. Tiene su propio lenguaje visual de tinta violeta e iris con un serif de display de alto contraste (Bodoni Moda), sin rejillas de iconos ni nubes de etiquetas: lo sostienen los frascos generados, la tipografía y las interacciones. Está construida solo con sus propios componentes (`reusedComponents: []`).

---

### Umbra · Perfumería de autor (`templates/perfumery`)

- **Vista previa en vivo**: [/preview/perfumery/](/preview/perfumery/) · **Documentación de la plantilla**: [/templates/perfumery/](/templates/perfumery/)
- **Web pública (5 páginas)**: una home cuyo hero tiene nubes lentas de color tomadas del acorde de la fragancia que siguen al puntero, un primer carril de fragancias, un deslizador de "evolución en piel" donde las notas de salida, corazón y fondo suben y se apagan sobre una curva por capas, y las primeras materias primas; las seis fragancias con tamaños, precios y un mapa olfativo que sitúa cada una entre fresco y cálido, ligero y denso; el atelier, con los kilos de materia necesarios por kilo de esencia como grandes cifras en contorno; descubrir, con un test de perfil de cuatro preguntas y un constructor de set de viales de 2 ml con total en vivo; y el acceso de clientes.
- **Área de cliente (3 páginas)**: un inicio con el pedido en curso y su cronología escrita, las cifras de la clienta y un aviso del frasco que se acaba; una estantería donde cada frasco se dibuja a su nivel real de líquido y se vacía en pantalla al mover un deslizador, seguida de un laboratorio de capas que mezcla dos fragancias en cualquier proporción y guarda mezclas; y pedidos con cronología, transportista, seguimiento y acciones de cancelar o cambiar dirección.
- **Accesible por defecto**: grupos de radio, controles de rango y acordeones `<details>` nativos, el estado de cada nota escrito como texto (no solo con opacidad), regiones en vivo para cada cambio, objetivos de 44–48px, foco visible, equivalentes de texto para cada dibujo y soporte de `prefers-reduced-motion`. Variantes oscura y clara.
- **Páginas**: [Inicio](/preview/perfumery/) · [Fragancias](/preview/perfumery/fragancias/) · [Atelier](/preview/perfumery/atelier/) · [Descubrir](/preview/perfumery/descubrir/) · [Acceso](/preview/perfumery/acceso/) · [Resumen](/preview/perfumery/cuenta/) · [Estantería](/preview/perfumery/cuenta/estanteria/) · [Pedidos](/preview/perfumery/cuenta/pedidos/).
- **18 componentes propios**: [`PerfHero`](/sections/perf-hero/), [`PerfSkin`](/sections/perf-skin/), [`PerfCollection`](/sections/perf-collection/), [`PerfMap`](/sections/perf-map/), [`PerfAtelier`](/sections/perf-atelier/), [`PerfQuiz`](/sections/perf-quiz/), [`PerfDiscovery`](/sections/perf-discovery/), [`PerfFaq`](/sections/perf-faq/), [`PerfFooter`](/sections/perf-footer/), [`PerfBottle`](/docs/perf-bottle/), [`PerfAccountSummary`](/docs/perf-account-summary/), [`PerfShelf`](/docs/perf-shelf/), [`PerfLayering`](/docs/perf-layering/), [`PerfOrderTracker`](/docs/perf-order-tracker/), [`PerfAccountNav`](/docs/perf-account-nav/), [`PerfAccountTopbar`](/docs/perf-account-topbar/), [`PerfAccountHeading`](/docs/perf-account-heading/), y [`PerfSignIn`](/docs/perf-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/perfumery/" title="Vista previa en vivo de Umbra (inicio)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/perfumery/cuenta/estanteria/" title="Vista previa en vivo de Umbra (estantería de la clienta)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
