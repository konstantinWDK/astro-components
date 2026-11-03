---
title: 'v0.4.0: 41 gráficos SVG sin dependencias, 24 secciones nuevas y más de 290 bloques'
description: 'Nuestra mayor actualización de visualización de datos: 41 gráficos y widgets de KPI en SVG puro renderizados en build, 24 secciones de landing nuevas y el paquete astro-component-kit 0.4.0 en npm.'
date: '2026-11-03'
tag: 'Lanzamiento'
heroImage: '/galaxy-bg.svg'
---

## Gráficos, por fin bien hechos

Ya está disponible **astro-component-kit 0.4.0**, y esta versión gira en torno a la **visualización de datos**. Hemos añadido **41 componentes nuevos de gráficos y estadísticas**, así que la categoría Gráficos y Estadísticas tiene ahora **47 componentes**. Sumando 24 secciones nuevas, la librería supera los **290 componentes y secciones**.

Todos los gráficos nuevos son **SVG puro, renderizado en tiempo de build**. Eso significa:

- **Cero dependencias.** Nada de Chart.js, D3 ni ApexCharts. Astro calcula el marcado y lo entrega como HTML estático.
- **Se pintan al instante.** El gráfico ya está en la página al cargarla, sin saltos de layout ni librerías que descargar en el cliente.
- **Accesibles de serie.** Cada gráfico incluye leyenda, marcas enfocables con teclado y tooltip, y una **tabla «Ver datos»** para que los lectores de pantalla accedan a los números reales.
- **Personalizables.** Los colores salen de los tokens `--chart-1…8`, `--chart-pos` y `--chart-neg` de `global.css`: cambias la paleta en un sitio y se actualizan todos los gráficos.

---

## Los 41 gráficos nuevos

### 📈 Tendencias en el tiempo
- [Line Chart](/es/docs/line-chart) — Varias series con curva suave, lineal o escalonada y relleno de área opcional.
- [Stacked Area Chart](/es/docs/stacked-area-chart) — Series acumuladas para ver cuánto aporta cada parte al total.
- [Range Area Chart](/es/docs/range-area-chart) — Bandas de mínimo y máximo alrededor de un valor central.
- [Forecast Line Chart](/es/docs/forecast-line-chart) — Datos reales más una proyección discontinua con banda de confianza.
- [Slope Chart](/es/docs/slope-chart) — Comparación antes/después entre dos momentos.
- [Bump Chart](/es/docs/bump-chart) — Cambios de posición en un ranking a lo largo del tiempo.
- [Sparkline Chart](/es/docs/sparkline-chart) — Mini tendencia en línea para tablas y tarjetas de KPI.
- [Candlestick Chart](/es/docs/candlestick-chart) — Velas financieras de apertura, máximo, mínimo y cierre.

### 📊 Comparar valores
- [Grouped Bar Chart](/es/docs/grouped-bar-chart), [Stacked Bar Chart](/es/docs/stacked-bar-chart) y [Horizontal Bar Chart](/es/docs/horizontal-bar-chart) para comparar en paralelo o como parte de un total.
- [Diverging Bar Chart](/es/docs/diverging-bar-chart) — Positivos frente a negativos alrededor de cero.
- [Waterfall Chart](/es/docs/waterfall-chart) — Cómo un valor inicial llega al final, paso a paso.
- [Histogram Chart](/es/docs/histogram-chart) — Distribución de valores por intervalos.
- [Lollipop Chart](/es/docs/lollipop-chart) y [Dumbbell Chart](/es/docs/dumbbell-chart) — Alternativas más ligeras a las barras y diferencias entre dos valores.
- [Bullet Chart](/es/docs/bullet-chart) — Real frente a objetivo sobre rangos cualitativos.
- [Population Pyramid](/es/docs/population-pyramid) — Dos distribuciones enfrentadas.

### 🥧 Partes de un todo
- [Pie Chart](/es/docs/pie-chart) (tarta o donut), [Waffle Chart](/es/docs/waffle-chart) y [Segmented Bar Chart](/es/docs/segmented-bar-chart).
- [Treemap Chart](/es/docs/treemap-chart) y [Sunburst Chart](/es/docs/sunburst-chart) para jerarquías.
- [Funnel Chart](/es/docs/funnel-chart) — Pasos de conversión con su tasa de abandono.
- [Radial Bar Chart](/es/docs/radial-bar-chart) y [Polar Area Chart](/es/docs/polar-area-chart).

### 🔬 Distribución y relaciones
- [Scatter Plot](/es/docs/scatter-plot) con recta de regresión y R² opcionales, y [Bubble Chart](/es/docs/bubble-chart).
- [Box Plot Chart](/es/docs/box-plot-chart) — Mediana, cuartiles y valores atípicos.
- [Heatmap Chart](/es/docs/heatmap-chart) y [Punch Card Chart](/es/docs/punch-card-chart) — Intensidad en dos dimensiones.
- [Radar Chart](/es/docs/radar-chart) — Comparación de perfiles en varios ejes.
- [Sankey Chart](/es/docs/sankey-chart) — Flujos entre etapas.

### 🎯 KPIs y progreso
- [KPI Stat Tile](/es/docs/kpi-stat-tile) y [KPI Trend Grid](/es/docs/kpi-trend-grid) — Cifras clave con variación y sparkline.
- [Gauge Chart](/es/docs/gauge-chart), [Meter Gauge](/es/docs/meter-gauge) y [Goal Progress Chart](/es/docs/goal-progress-chart).
- [Activity Rings](/es/docs/activity-rings) — Anillos de progreso concéntricos.
- [Retention Cohort Table](/es/docs/retention-cohort-table) y [Metric Delta Table](/es/docs/metric-delta-table) — Tablas de datos con escala de color y variaciones integradas.

Todos comparten un mismo [Chart Frame](/es/docs/chart-frame) para el título, la leyenda, el tooltip y la tabla de datos, y admiten las variantes `glass`, `solid` y `ghost` en tamaños `sm`, `md` y `lg`.

```astro
---
import 'astro-component-kit/global.css';
import { LineChart, KpiStatTile } from 'astro-component-kit/charts';
---

<KpiStatTile label="Ingresos" value="48,2k €" change={24} period="vs. mes anterior" />
<LineChart
  title="Usuarios activos mensuales"
  categories={['Ene', 'Feb', 'Mar', 'Abr']}
  series={[{ name: 'Web', data: [120, 180, 160, 240] }]}
/>
```

---

## 24 secciones de landing nuevas

La librería de secciones crece hasta **41 secciones completas**, varias de ellas construidas con los nuevos gráficos:

- **Heroes:** [Minimal Centered](/es/sections/hero-minimal-centered), [Terminal](/es/sections/hero-terminal), [Waitlist](/es/sections/hero-waitlist) y [Dashboard Preview](/es/sections/hero-dashboard-preview).
- **Características:** [Icon Grid](/es/sections/feature-icon-grid), [Alternating Rows](/es/sections/feature-alternating-rows), [Tabs Showcase](/es/sections/feature-tabs-showcase), [How It Works](/es/sections/how-it-works-steps) e [Integrations Grid](/es/sections/integrations-grid).
- **Precios y prueba social:** [Pricing Toggle Cards](/es/sections/pricing-toggle-cards), [Single Plan](/es/sections/pricing-single-plan), [Testimonial Carousel](/es/sections/testimonial-carousel), [Featured Testimonial](/es/sections/testimonial-featured) y [Logo Wall](/es/sections/logo-wall-grid).
- **Datos:** [Stats Counter Band](/es/sections/stats-counter-band) y [Stats Dashboard](/es/sections/stats-dashboard-section).
- **Conversión y contenido:** [Newsletter CTA](/es/sections/cta-newsletter-section), [Split Image CTA](/es/sections/cta-split-image), [Careers](/es/sections/careers-openings), [FAQ a dos columnas](/es/sections/faq-two-column), [Contacto con mapa](/es/sections/contact-split-map), [Blog Grid](/es/sections/blog-grid-section), [Changelog](/es/sections/changelog-section) y [Mega Footer](/es/sections/footer-mega-section).

---

## Actualizar

```bash
npm install astro-component-kit@0.4.0
```

Es una versión sin cambios incompatibles: tus imports actuales siguen funcionando y los componentes nuevos están disponibles desde `astro-component-kit/charts`, `astro-component-kit/sections` o el punto de entrada raíz.

Explora todo en las páginas de [Gráficos y Estadísticas](/es/docs/line-chart) y [Secciones](/es/sections), y cuéntanos en [GitHub](https://github.com/konstantinwdk/astro-components) qué te gustaría ver después.
