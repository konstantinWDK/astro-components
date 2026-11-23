---
title: 'Nueva plantilla: Biela, un taller de bicis a medida con configurador en vivo'
description: 'Biela es una nueva plantilla multipágina para un taller de bicis a medida: un configurador en vivo con la bici dibujada en SVG, precio y plazo, una galería de bicis construidas, una calculadora de talla y ajuste, la cola de plazas por mes y la reserva de visitas.'
date: '2026-11-23'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Biela: una bici que diseñas en la propia página, en seis páginas y once componentes

Biela (`templates/bike-workshop`) es una plantilla para un taller que construye bicicletas a medida. El centro es un **configurador**: eliges el tipo, el material del cuadro, la transmisión, las ruedas, el color y los extras, y una bici dibujada en SVG a partir de una geometría real cambia ante ti mientras se recalculan el precio y el plazo. Tiene su propio aspecto verde inglés y amarillo de maillot, sin cuadrículas de iconos ni nubes de etiquetas, y está hecha solo con componentes propios (`reusedComponents: []`). Todo es UI con datos de demostración: no se envía ni se cobra nada.

---

### Biela · Taller de bicis a medida (`templates/bike-workshop`)

- **Vista previa en vivo**: [/preview/bike-workshop/](/preview/bike-workshop/) · **Documentación de la plantilla**: [/templates/bike-workshop/](/templates/bike-workshop/)
- **Configurador**: cuatro tipos de bici con su propia geometría (gravel, ruta, ciudad, pista), tres materiales de cuadro con distinto grosor de tubos, transmisiones que se filtran solas por tipo, ruedas, diez colores y cuatro extras (guardabarros, portabultos, luz con dinamo, cuero). El precio y el plazo se escriben en una región en vivo, un diálogo nativo reserva plaza con un código de demostración y toda la bici viaja en la URL.
- **Bicis**: nueve bicis construidas, cada una con para quién se hizo, su ficha como lista de definiciones y un enlace «partir de esta bici»; filtro por tipo y orden por precio o fecha.
- **El taller**: seis etapas como details exclusivos, una tabla que compara los materiales del cuadro y pasa a tarjetas con etiquetas en móvil, y la cola de plazas por mes con lista de espera cuando un mes está completo.
- **Talla y ajuste**: altura, entrepierna, flexibilidad y tipo de bici dan una talla de cuadro, altura del sillín, potencia, ancho del manillar, bielas y caída; los deslizadores van emparejados con campos numéricos y la talla se puede enviar al configurador.
- **Visita**: los próximos días abiertos (de martes a sábado) se generan en el navegador, con horas, algunas ya ocupadas, y solo mañanas los sábados. El pie de página dice si el taller está abierto ahora mismo.
- **Scroll y color**: las ruedas de la bici de la portada giran con el scroll (no con movimiento reducido) y su cuadro se puede repintar eligiendo un color.
- **Accesible de serie**: radios, casillas, diálogos, popovers y `<details>` nativos; cada elección está escrita con palabras, nunca solo como color; objetivos de 44px, foco visible y temas claro y oscuro.
- **Páginas**: [Inicio](/preview/bike-workshop/) · [Configurador](/preview/bike-workshop/configurador/) · [Bicis](/preview/bike-workshop/bicis/) · [Taller](/preview/bike-workshop/taller/) · [Talla](/preview/bike-workshop/talla/) · [Visita](/preview/bike-workshop/visita/).
- **11 componentes propios**: [`BielaBike`](/docs/biela-bike/), [`BielaConfigurator`](/docs/biela-configurator/), [`BielaBuilds`](/docs/biela-builds/), [`BielaFit`](/docs/biela-fit/), [`BielaSlots`](/docs/biela-slots/), [`BielaVisit`](/docs/biela-visit/), [`BielaHero`](/docs/biela-hero/), [`BielaProcess`](/docs/biela-process/), [`BielaMaterials`](/docs/biela-materials/), [`BielaHeader`](/docs/biela-header/), [`BielaFooter`](/docs/biela-footer/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0c1511;">
  <iframe src="/preview/bike-workshop/" title="Vista previa en vivo de Biela (inicio)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0c1511;">
  <iframe src="/preview/bike-workshop/configurador/" title="Vista previa en vivo de Biela (configurador)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
