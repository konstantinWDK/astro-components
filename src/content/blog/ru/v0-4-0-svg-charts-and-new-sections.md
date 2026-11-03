---
title: 'v0.4.0: 41 SVG-график без зависимостей, 24 новые секции и более 290 блоков'
description: 'Самое большое обновление визуализации данных: 41 график и KPI-виджет на чистом SVG с рендером на этапе сборки, 24 новые секции лендингов и пакет astro-component-kit 0.4.0 в npm.'
date: '2026-11-03'
tag: 'Релиз'
heroImage: '/galaxy-bg.svg'
---

## Графики, сделанные правильно

Вышел **astro-component-kit 0.4.0**, и этот релиз посвящён **визуализации данных**. Мы добавили **41 новый компонент графиков и статистики**, и теперь в категории «Графики и статистика» **47 компонентов**. Вместе с 24 новыми секциями в библиотеке уже **более 290 компонентов и секций**.

Все новые графики — это **чистый SVG, который рендерится на этапе сборки**. Это значит:

- **Ноль зависимостей.** Никаких Chart.js, D3 или ApexCharts: Astro вычисляет разметку и отдаёт её как статический HTML.
- **Мгновенная отрисовка.** График уже есть на странице при загрузке — без сдвигов макета и без клиентских бандлов.
- **Доступность из коробки.** У каждого графика есть легенда, фокусируемые с клавиатуры элементы с подсказками и **таблица «Данные»**, чтобы пользователи скринридеров получали реальные цифры.
- **Гибкая тема.** Цвета берутся из токенов `--chart-1…8`, `--chart-pos` и `--chart-neg` в `global.css`: меняете палитру в одном месте — обновляются все графики.

---

## 41 новый график

### 📈 Динамика во времени
- [Line Chart](/ru/docs/line-chart/) — Несколько серий с плавной, линейной или ступенчатой кривой и опциональной заливкой.
- [Stacked Area Chart](/ru/docs/stacked-area-chart/) — Накопительные серии, показывающие вклад каждой части в итог.
- [Range Area Chart](/ru/docs/range-area-chart/) — Полосы минимума и максимума вокруг центрального значения.
- [Forecast Line Chart](/ru/docs/forecast-line-chart/) — Факт плюс пунктирный прогноз с доверительным интервалом.
- [Slope Chart](/ru/docs/slope-chart/) — Сравнение «до/после» между двумя моментами.
- [Bump Chart](/ru/docs/bump-chart/) — Изменение позиций в рейтинге по периодам.
- [Sparkline Chart](/ru/docs/sparkline-chart/) — Компактный тренд для таблиц и KPI-карточек.
- [Candlestick Chart](/ru/docs/candlestick-chart/) — Финансовые свечи: открытие, максимум, минимум, закрытие.

### 📊 Сравнение значений
- [Grouped Bar Chart](/ru/docs/grouped-bar-chart/), [Stacked Bar Chart](/ru/docs/stacked-bar-chart/) и [Horizontal Bar Chart](/ru/docs/horizontal-bar-chart/) — сравнение рядом и долей от целого.
- [Diverging Bar Chart](/ru/docs/diverging-bar-chart/) — Положительные и отрицательные значения относительно нуля.
- [Waterfall Chart](/ru/docs/waterfall-chart/) — Как начальное значение шаг за шагом превращается в итоговое.
- [Histogram Chart](/ru/docs/histogram-chart/) — Распределение значений по интервалам.
- [Lollipop Chart](/ru/docs/lollipop-chart/) и [Dumbbell Chart](/ru/docs/dumbbell-chart/) — Лёгкая альтернатива столбцам и разница между двумя значениями.
- [Bullet Chart](/ru/docs/bullet-chart/) — Факт против цели на фоне качественных диапазонов.
- [Population Pyramid](/ru/docs/population-pyramid/) — Два зеркальных распределения.

### 🥧 Части целого
- [Pie Chart](/ru/docs/pie-chart/) (круговая или кольцевая), [Waffle Chart](/ru/docs/waffle-chart/) и [Segmented Bar Chart](/ru/docs/segmented-bar-chart/).
- [Treemap Chart](/ru/docs/treemap-chart/) и [Sunburst Chart](/ru/docs/sunburst-chart/) для иерархий.
- [Funnel Chart](/ru/docs/funnel-chart/) — Шаги конверсии с долей отвала.
- [Radial Bar Chart](/ru/docs/radial-bar-chart/) и [Polar Area Chart](/ru/docs/polar-area-chart/).

### 🔬 Распределения и связи
- [Scatter Plot](/ru/docs/scatter-plot/) с опциональной линией регрессии и R², а также [Bubble Chart](/ru/docs/bubble-chart/).
- [Box Plot Chart](/ru/docs/box-plot-chart/) — Медиана, квартили и выбросы.
- [Heatmap Chart](/ru/docs/heatmap-chart/) и [Punch Card Chart](/ru/docs/punch-card-chart/) — Интенсивность по двум измерениям.
- [Radar Chart](/ru/docs/radar-chart/) — Сравнение профилей по нескольким осям.
- [Sankey Chart](/ru/docs/sankey-chart/) — Потоки между этапами.

### 🎯 KPI и прогресс
- [KPI Stat Tile](/ru/docs/kpi-stat-tile/) и [KPI Trend Grid](/ru/docs/kpi-trend-grid/) — Ключевые цифры с изменением и спарклайном.
- [Gauge Chart](/ru/docs/gauge-chart/), [Meter Gauge](/ru/docs/meter-gauge/) и [Goal Progress Chart](/ru/docs/goal-progress-chart/).
- [Activity Rings](/ru/docs/activity-rings/) — Концентрические кольца прогресса.
- [Retention Cohort Table](/ru/docs/retention-cohort-table/) и [Metric Delta Table](/ru/docs/metric-delta-table/) — Таблицы данных со встроенной цветовой шкалой и изменениями.

Все графики используют общий [Chart Frame](/ru/docs/chart-frame/) для заголовка, легенды, подсказок и таблицы данных и поддерживают варианты `glass`, `solid` и `ghost` в размерах `sm`, `md` и `lg`.

```astro
---
import 'astro-component-kit/global.css';
import { LineChart, KpiStatTile } from 'astro-component-kit/charts';
---

<KpiStatTile label="Выручка" value="48,2 тыс. $" change={24} period="к прошлому месяцу" />
<LineChart
  title="Активные пользователи за месяц"
  categories={['Янв', 'Фев', 'Мар', 'Апр']}
  series={[{ name: 'Web', data: [120, 180, 160, 240] }]}
/>
```

---

## 24 новые секции лендингов

Библиотека секций выросла до **41 готовой секции**, и некоторые из них построены на новых графиках:

- **Hero:** [Minimal Centered](/ru/sections/hero-minimal-centered/), [Terminal](/ru/sections/hero-terminal/), [Waitlist](/ru/sections/hero-waitlist/) и [Dashboard Preview](/ru/sections/hero-dashboard-preview/).
- **Возможности:** [Icon Grid](/ru/sections/feature-icon-grid/), [Alternating Rows](/ru/sections/feature-alternating-rows/), [Tabs Showcase](/ru/sections/feature-tabs-showcase/), [How It Works](/ru/sections/how-it-works-steps/) и [Integrations Grid](/ru/sections/integrations-grid/).
- **Тарифы и отзывы:** [Pricing Toggle Cards](/ru/sections/pricing-toggle-cards/), [Single Plan](/ru/sections/pricing-single-plan/), [Testimonial Carousel](/ru/sections/testimonial-carousel/), [Featured Testimonial](/ru/sections/testimonial-featured/) и [Logo Wall](/ru/sections/logo-wall-grid/).
- **Данные:** [Stats Counter Band](/ru/sections/stats-counter-band/) и [Stats Dashboard](/ru/sections/stats-dashboard-section/).
- **Конверсия и контент:** [Newsletter CTA](/ru/sections/cta-newsletter-section/), [Split Image CTA](/ru/sections/cta-split-image/), [Careers](/ru/sections/careers-openings/), [FAQ в две колонки](/ru/sections/faq-two-column/), [Контакты с картой](/ru/sections/contact-split-map/), [Blog Grid](/ru/sections/blog-grid-section/), [Changelog](/ru/sections/changelog-section/) и [Mega Footer](/ru/sections/footer-mega-section/).

---

## Обновление

```bash
npm install astro-component-kit@0.4.0
```

Релиз обратно совместим: существующие импорты продолжают работать, а новые компоненты доступны из `astro-component-kit/charts`, `astro-component-kit/sections` или корневой точки входа.

Смотрите всё на страницах [Графики и статистика](/ru/docs/line-chart/) и [Секции](/ru/sections/) и расскажите нам на [GitHub](https://github.com/konstantinwdk/astro-components), что хотите увидеть дальше.
