// src/data/registry/charts-svg.ts
// Zero-dependency SVG charts & statistics. Source code is loaded from the real
// component files via `source()` so the docs always show the shipped code.
import type { ComponentDoc } from './types';
import { source } from './sources';

interface ChartMeta {
  slug: string;
  name: string;
  file: string;
  description: string;
  tags: string[];
  featured?: boolean;
  usage: string;
}

const HELPERS = 'ChartFrame.astro, chart-utils.ts and chart-tooltip.ts';

function chart(meta: ChartMeta): ComponentDoc {
  return {
    slug: meta.slug,
    name: meta.name,
    description: meta.description,
    category: 'charts',
    tags: ['chart', 'svg', 'zero-dependency', ...meta.tags],
    featured: meta.featured ?? false,
    code: source(`charts/${meta.file}`),
    usage: `---
import { ${meta.file.replace('.astro', '')} } from 'astro-component-kit/charts';
---

${meta.usage.trim()}`,
    installation: {
      manual: `1. No npm dependencies — pure SVG rendered at build time.
2. Copy the shared chart helpers (${HELPERS}) from the "Chart Frame" page into src/components/charts/.
3. Copy ${meta.file} next to them.
4. Add the --chart-* color tokens from global.css (they also have hex fallbacks).
5. Import the component and pass your data.`,
    },
  };
}

export const chartsSvg: ComponentDoc[] = [
  {
    slug: 'chart-frame',
    name: 'Chart Frame',
    description: 'Shared accessible chart shell: card surface, header, legend, hover tooltip and a data-table fallback used by every SVG chart.',
    category: 'charts',
    tags: ['chart', 'svg', 'a11y', 'foundation', 'tooltip'],
    featured: false,
    code: `${source('charts/ChartFrame.astro')}

// ─────────────────────────────────────────────────────────────
// chart-utils.ts
// ─────────────────────────────────────────────────────────────
${source('charts/chart-utils.ts')}

// ─────────────────────────────────────────────────────────────
// chart-tooltip.ts
// ─────────────────────────────────────────────────────────────
${source('charts/chart-tooltip.ts')}`,
    usage: `---
import { ChartFrame } from 'astro-component-kit/charts';
---

<ChartFrame
  title="Custom visual"
  subtitle="Any SVG you like"
  legend={[{ label: 'A', color: 'var(--chart-1)' }, { label: 'B', color: 'var(--chart-2)' }]}
  table={{ headers: ['Item', 'Value'], rows: [['A', 10], ['B', 20]] }}
>
  <svg viewBox="0 0 640 200" role="img" aria-label="Custom visual">…</svg>
</ChartFrame>`,
  },
  chart({
    slug: 'line-chart',
    name: 'Line Chart',
    file: 'LineChart.astro',
    description: 'Multi-series SVG line chart with smooth, linear or step curves, gradient area fill and a crosshair tooltip.',
    tags: ['line', 'trend', 'time-series', 'area'],
    featured: true,
    usage: `<LineChart
  title="Revenue"
  categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
  series={[{ name: 'Revenue', data: [12, 19, 15, 24, 28, 33] }]}
  prefix="$"
  curve="smooth"
/>`,
  }),
  chart({
    slug: 'stacked-area-chart', name: 'Stacked Area Chart', file: 'StackedAreaChart.astro',
    description: 'Stacked or 100% normalised area chart showing how each layer contributes to a changing total.',
    tags: ['area', 'stacked', 'composition', 'time-series'], featured: true,
    usage: `<StackedAreaChart
  categories={['Jan', 'Feb', 'Mar', 'Apr']}
  series={[
    { name: 'Organic', data: [320, 340, 390, 420] },
    { name: 'Paid', data: [180, 210, 200, 240] },
  ]}
  normalized={false}
/>`,
  }),
  chart({
    slug: 'range-area-chart', name: 'Range Area Chart', file: 'RangeAreaChart.astro',
    description: 'Min/max band with a central median line, ideal for latency percentiles, temperatures or price ranges.',
    tags: ['area', 'band', 'range', 'percentile'],
    usage: `<RangeAreaChart
  categories={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
  min={[42, 45, 40, 48, 52]}
  avg={[74, 80, 70, 92, 101]}
  max={[120, 135, 118, 160, 172]}
  suffix="ms"
/>`,
  }),
  chart({
    slug: 'forecast-line-chart', name: 'Forecast Line Chart', file: 'ForecastLineChart.astro',
    description: 'Actuals as a solid line and projections as a dashed line with a widening confidence cone and a Today divider.',
    tags: ['line', 'forecast', 'projection', 'confidence'],
    usage: `<ForecastLineChart
  categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
  actual={[48, 51, 55, 54]}
  forecast={[59, 63]}
  confidence={0.12}
  prefix="$" suffix="k"
/>`,
  }),
  chart({
    slug: 'slope-chart', name: 'Slope Chart', file: 'SlopeChart.astro',
    description: 'Before/after comparison between two points in time with rising and falling lines in status colors.',
    tags: ['slope', 'comparison', 'before-after'],
    usage: `<SlopeChart
  fromLabel="2025" toLabel="2026"
  items={[
    { label: 'Enterprise', from: 7.8, to: 9.6 },
    { label: 'Pro', from: 5.4, to: 4.6 },
  ]}
  suffix="%"
/>`,
  }),
  chart({
    slug: 'bump-chart', name: 'Bump Chart', file: 'BumpChart.astro',
    description: 'Rank-over-time chart tracking each entity\'s position across periods with labelled rank nodes.',
    tags: ['rank', 'bump', 'leaderboard', 'time-series'],
    usage: `<BumpChart
  periods={['2024', '2025', '2026']}
  series={[
    { name: 'Astro', ranks: [3, 2, 1] },
    { name: 'Next', ranks: [1, 1, 2] },
    { name: 'Svelte', ranks: [2, 3, 3] },
  ]}
/>`,
  }),
  chart({
    slug: 'sparkline-chart', name: 'Sparkline Chart', file: 'SparklineChart.astro',
    description: 'Compact inline trend line, area or micro-bars for tables, KPI tiles and running text.',
    tags: ['sparkline', 'inline', 'micro', 'trend'],
    usage: `<SparklineChart data={[12, 15, 11, 18, 22, 19, 25]} variant="area" size="md" label="Signups, last 7 days" />`,
  }),
  chart({
    slug: 'grouped-bar-chart', name: 'Grouped Bar Chart', file: 'GroupedBarChart.astro',
    description: 'Side-by-side vertical bars comparing several series across categories, with rounded data-ends.',
    tags: ['bar', 'grouped', 'comparison', 'column'], featured: true,
    usage: `<GroupedBarChart
  categories={['NA', 'EMEA', 'APAC']}
  series={[
    { name: '2025', data: [420, 310, 260] },
    { name: '2026', data: [510, 365, 340] },
  ]}
  prefix="$" suffix="k"
/>`,
  }),
  chart({
    slug: 'stacked-bar-chart', name: 'Stacked Bar Chart', file: 'StackedBarChart.astro',
    description: 'Vertical or horizontal stacked bars with optional 100% mode and 2px surface gaps between segments.',
    tags: ['bar', 'stacked', 'composition', 'horizontal'],
    usage: `<StackedBarChart
  categories={['S1', 'S2', 'S3']}
  series={[
    { name: 'Done', data: [42, 48, 51] },
    { name: 'Blocked', data: [5, 7, 3] },
  ]}
  horizontal={false}
  normalized={false}
/>`,
  }),
  chart({
    slug: 'horizontal-bar-chart', name: 'Horizontal Bar Chart', file: 'HorizontalBarChart.astro',
    description: 'Ranked horizontal bars with labels and values, single color and optional highlight of one item.',
    tags: ['bar', 'horizontal', 'ranking', 'top-list'],
    usage: `<HorizontalBarChart
  items={[
    { label: '/pricing', value: 18420 },
    { label: '/docs', value: 15210 },
    { label: '/', value: 12980 },
  ]}
  highlight="/pricing"
/>`,
  }),
  chart({
    slug: 'diverging-bar-chart', name: 'Diverging Bar Chart', file: 'DivergingBarChart.astro',
    description: 'Horizontal bars extending left or right from zero for variance, sentiment and P&L deltas.',
    tags: ['bar', 'diverging', 'variance', 'positive-negative'],
    usage: `<DivergingBarChart
  items={[
    { label: 'Engineering', value: -42 },
    { label: 'Sales', value: 64 },
  ]}
  prefix="$" suffix="k"
/>`,
  }),
  chart({
    slug: 'waterfall-chart', name: 'Waterfall Chart', file: 'WaterfallChart.astro',
    description: 'Bridge chart showing how a starting value is built up or eroded by positive and negative steps.',
    tags: ['waterfall', 'bridge', 'finance', 'variance'],
    usage: `<WaterfallChart
  startLabel="Jan" start={1200000}
  steps={[
    { label: 'New', value: 380000 },
    { label: 'Churn', value: -160000 },
  ]}
  endLabel="Jun"
  prefix="$"
/>`,
  }),
  chart({
    slug: 'histogram-chart', name: 'Histogram Chart', file: 'HistogramChart.astro',
    description: 'Bins raw values into equal-width buckets and shows the distribution with mean and median markers.',
    tags: ['histogram', 'distribution', 'statistics'],
    usage: `<HistogramChart values={loadTimes} bins={12} unit="s" showStats />`,
  }),
  chart({
    slug: 'lollipop-chart', name: 'Lollipop Chart', file: 'LollipopChart.astro',
    description: 'Thin stems with value dots and an optional goal line; a lighter alternative to bar charts.',
    tags: ['lollipop', 'dot', 'target', 'score'],
    usage: `<LollipopChart
  items={[
    { label: 'Home', value: 98 },
    { label: 'Search', value: 69 },
  ]}
  target={90}
  targetLabel="Goal"
/>`,
  }),
  chart({
    slug: 'dumbbell-chart', name: 'Dumbbell Chart', file: 'DumbbellChart.astro',
    description: 'Two connected dots per row showing the gap between before/after or two groups.',
    tags: ['dumbbell', 'gap', 'comparison', 'before-after'],
    usage: `<DumbbellChart
  items={[
    { label: 'Startups', a: 41, b: 18 },
    { label: 'Enterprise', a: 88, b: 54 },
  ]}
  aLabel="Before" bLabel="After" suffix="m"
/>`,
  }),
  chart({
    slug: 'bullet-chart', name: 'Bullet Chart', file: 'BulletChart.astro',
    description: 'Compact KPI-vs-target bars with qualitative performance bands and an explicit on-target status.',
    tags: ['bullet', 'kpi', 'target', 'performance'],
    usage: `<BulletChart
  metrics={[
    { label: 'Revenue', value: 270, target: 250, ranges: [150, 225, 300], unit: '$k' },
    { label: 'NPS', value: 54, target: 50, ranges: [30, 50, 70] },
  ]}
/>`,
  }),
  chart({
    slug: 'population-pyramid', name: 'Population Pyramid', file: 'PopulationPyramid.astro',
    description: 'Back-to-back horizontal bars comparing two groups across ordered bands like age groups.',
    tags: ['pyramid', 'demographics', 'butterfly', 'comparison'],
    usage: `<PopulationPyramid
  bands={['35–44', '25–34', '18–24']}
  left={[12.6, 15.4, 7.9]}
  right={[11.8, 16.2, 8.8]}
  leftLabel="Women" rightLabel="Men"
/>`,
  }),
  chart({
    slug: 'radial-bar-chart', name: 'Radial Bar Chart', file: 'RadialBarChart.astro',
    description: 'Concentric progress arcs sharing a 0–100% scale with a labelled breakdown list.',
    tags: ['radial', 'progress', 'arc', 'adoption'],
    usage: `<RadialBarChart
  items={[
    { label: 'Dashboards', value: 86 },
    { label: 'API', value: 47 },
  ]}
  sweep={270}
/>`,
  }),
  chart({
    slug: 'segmented-bar-chart', name: 'Segmented Bar Chart', file: 'SegmentedBarChart.astro',
    description: 'A single tall part-to-whole bar with labelled segments and a breakdown list; clearer than a pie.',
    tags: ['segmented', 'part-to-whole', 'storage', 'breakdown'],
    usage: `<SegmentedBarChart
  segments={[
    { label: 'Media', value: 182 },
    { label: 'Backups', value: 96 },
    { label: 'Other', value: 22 },
  ]}
  suffix=" GB"
/>`,
  }),
  chart({
    slug: 'pie-chart', name: 'Pie Chart', file: 'PieChart.astro',
    description: 'Pure SVG pie or donut with slice gaps, centre total and a value breakdown list.',
    tags: ['pie', 'donut', 'part-to-whole', 'share'], featured: true,
    usage: `<PieChart
  slices={[
    { label: 'Enterprise', value: 48200 },
    { label: 'Team', value: 31400 },
    { label: 'Pro', value: 18900 },
  ]}
  donut
  prefix="$"
/>`,
  }),
  chart({
    slug: 'gauge-chart', name: 'Gauge Chart', file: 'GaugeChart.astro',
    description: 'Semicircular progress gauge for a single KPI against a goal with the number always shown as text.',
    tags: ['gauge', 'kpi', 'goal', 'progress'],
    usage: `<GaugeChart title="Sales goal" value={73400} max={100000} prefix="$" label="of $100k goal" />`,
  }),
  chart({
    slug: 'waffle-chart', name: 'Waffle Chart', file: 'WaffleChart.astro',
    description: '10×10 grid where each square is 1% of the whole; an intuitive view of percentages.',
    tags: ['waffle', 'percentage', 'part-to-whole', 'grid'],
    usage: `<WaffleChart
  parts={[
    { label: 'Desktop', value: 54 },
    { label: 'Mobile', value: 38 },
    { label: 'Tablet', value: 8 },
  ]}
/>`,
  }),
  chart({
    slug: 'treemap-chart', name: 'Treemap Chart', file: 'TreemapChart.astro',
    description: 'Squarified treemap where tile area is proportional to value, grouped by color.',
    tags: ['treemap', 'hierarchy', 'part-to-whole', 'bundle'],
    usage: `<TreemapChart
  groups={['Vendor', 'App']}
  items={[
    { label: 'react-dom', value: 42, group: 0 },
    { label: 'charts', value: 24, group: 1 },
    { label: 'utils', value: 5, group: 1 },
  ]}
  suffix=" KB"
/>`,
  }),
  chart({
    slug: 'funnel-chart', name: 'Funnel Chart', file: 'FunnelChart.astro',
    description: 'Conversion funnel with tapered stages, step drop-off and overall conversion rate.',
    tags: ['funnel', 'conversion', 'marketing', 'drop-off'], featured: true,
    usage: `<FunnelChart
  stages={[
    { label: 'Visited', value: 48200 },
    { label: 'Trial', value: 6400 },
    { label: 'Paid', value: 1240 },
  ]}
/>`,
  }),
  chart({
    slug: 'sunburst-chart', name: 'Sunburst Chart', file: 'SunburstChart.astro',
    description: 'Two-level hierarchical donut with parent categories inside and their children on the outer ring.',
    tags: ['sunburst', 'hierarchy', 'donut', 'breakdown'],
    usage: `<SunburstChart
  data={[
    { label: 'Compute', children: [{ label: 'VMs', value: 4200 }, { label: 'Functions', value: 1800 }] },
    { label: 'Storage', children: [{ label: 'Object', value: 1900 }] },
  ]}
  prefix="$"
/>`,
  }),
  chart({
    slug: 'activity-rings', name: 'Activity Rings', file: 'ActivityRings.astro',
    description: 'Concentric goal rings with values, targets and progress percentages; over-100% wraps around.',
    tags: ['rings', 'goals', 'progress', 'fitness'],
    usage: `<ActivityRings
  rings={[
    { label: 'Focus time', value: 5.2, goal: 6, unit: 'h' },
    { label: 'Tasks done', value: 11, goal: 8 },
  ]}
/>`,
  }),
  chart({
    slug: 'scatter-plot', name: 'Scatter Plot', file: 'ScatterPlot.astro',
    description: 'X/Y relationship plot for up to three groups with distinct shapes and a least-squares trend line.',
    tags: ['scatter', 'correlation', 'regression', 'statistics'],
    usage: `<ScatterPlot
  groups={[
    { name: 'Search', points: [{ x: 10, y: 40 }, { x: 25, y: 70 }, { x: 40, y: 98 }] },
  ]}
  xLabel="Spend ($k)" yLabel="Signups"
  trend
/>`,
  }),
  chart({
    slug: 'bubble-chart', name: 'Bubble Chart', file: 'BubbleChart.astro',
    description: 'Three-variable scatter where bubble area encodes a third measure such as revenue.',
    tags: ['bubble', 'scatter', 'portfolio', 'three-variables'],
    usage: `<BubbleChart
  groups={['Core', 'Emerging']}
  items={[
    { label: 'Analytics', x: 34, y: 62, z: 120, group: 0 },
    { label: 'AI tools', x: 71, y: 48, z: 70, group: 1 },
  ]}
/>`,
  }),
  chart({
    slug: 'box-plot-chart', name: 'Box Plot Chart', file: 'BoxPlotChart.astro',
    description: 'Distribution summary per group with median, IQR box, whiskers and outliers computed from raw data.',
    tags: ['box-plot', 'distribution', 'statistics', 'quartiles'],
    usage: `<BoxPlotChart
  groups={[
    { label: 'us-east', values: [62, 70, 81, 85, 90, 120] },
    { label: 'eu-west', values: [55, 60, 66, 71, 79, 160] },
  ]}
  suffix="ms"
/>`,
  }),
  chart({
    slug: 'heatmap-chart', name: 'Heatmap Chart', file: 'HeatmapChart.astro',
    description: 'Matrix heatmap on a single-hue sequential ramp with values, scale legend and keyboard-focusable cells.',
    tags: ['heatmap', 'matrix', 'sequential', 'grid'],
    usage: `<HeatmapChart
  rows={['auth', 'billing']}
  columns={['Mon', 'Tue', 'Wed']}
  values={[[0.2, 0.3, 0.2], [0.8, 1.2, 0.9]]}
  suffix="%"
/>`,
  }),
  chart({
    slug: 'punch-card-chart', name: 'Punch Card Chart', file: 'PunchCardChart.astro',
    description: 'Day × hour dot matrix where dot area encodes volume; shows when activity happens.',
    tags: ['punch-card', 'activity', 'time-of-day', 'dots'],
    usage: `<PunchCardChart
  days={['Mon', 'Tue']}
  hours={[9, 12, 15, 18]}
  values={[[4, 12, 9, 2], [6, 15, 11, 3]]}
  unit="deploys"
/>`,
  }),
  chart({
    slug: 'polar-area-chart', name: 'Polar Area Chart', file: 'PolarAreaChart.astro',
    description: 'Equal-angle wedges with area-correct radius for cyclical categories like months or hours.',
    tags: ['polar', 'seasonality', 'radial', 'cyclical'],
    usage: `<PolarAreaChart
  items={[
    { label: 'Q1', value: 320 },
    { label: 'Q2', value: 410 },
    { label: 'Q3', value: 380 },
    { label: 'Q4', value: 690 },
  ]}
/>`,
  }),
  chart({
    slug: 'radar-chart', name: 'Radar Chart', file: 'RadarChart.astro',
    description: 'Pure SVG spider chart comparing up to three entities across 5–8 attributes on a shared scale.',
    tags: ['radar', 'spider', 'comparison', 'attributes'],
    usage: `<RadarChart
  axes={['Speed', 'DX', 'Ecosystem', 'SEO', 'Flexibility']}
  series={[
    { name: 'Astro', data: [9.5, 8.5, 7, 9.5, 8] },
    { name: 'Next', data: [7.5, 8, 9.5, 8, 8.5] },
  ]}
  max={10}
/>`,
  }),
  chart({
    slug: 'sankey-chart', name: 'Sankey Chart', file: 'SankeyChart.astro',
    description: 'Two-column flow diagram where ribbon thickness encodes the volume moving from sources to targets.',
    tags: ['sankey', 'flow', 'attribution', 'journey'],
    usage: `<SankeyChart
  flows={[
    { source: 'Organic', target: 'Free', value: 820 },
    { source: 'Organic', target: 'Pro', value: 310 },
    { source: 'Referral', target: 'Pro', value: 220 },
  ]}
/>`,
  }),
  chart({
    slug: 'candlestick-chart', name: 'Candlestick Chart', file: 'CandlestickChart.astro',
    description: 'OHLC price chart with hollow up-candles and filled down-candles so direction never relies on color.',
    tags: ['candlestick', 'ohlc', 'finance', 'trading'],
    usage: `<CandlestickChart
  title="ACME / USD"
  candles={[
    { label: 'Oct 1', open: 182, high: 186, low: 180, close: 185 },
    { label: 'Oct 2', open: 185, high: 187, low: 181, close: 182 },
  ]}
/>`,
  }),
  chart({
    slug: 'kpi-stat-tile', name: 'KPI Stat Tile', file: 'KpiStatTile.astro',
    description: 'Hero-number statistic tile with change chip (icon + text), comparison period and sparkline.',
    tags: ['kpi', 'stat', 'metric', 'dashboard', 'sparkline'], featured: true,
    usage: `<KpiStatTile label="MRR" value="$84,210" change={12.4} period="vs last month" trend={[52, 60, 63, 72, 84]} />
<KpiStatTile label="Churn" value="2.3%" change={-0.6} invert variant="solid" size="sm" />`,
  }),
  chart({
    slug: 'kpi-trend-grid', name: 'KPI Trend Grid', file: 'KpiTrendGrid.astro',
    description: 'Responsive grid of KPI tiles with sparklines; the classic top row of an analytics dashboard.',
    tags: ['kpi', 'dashboard', 'grid', 'overview'],
    usage: `<KpiTrendGrid
  metrics={[
    { label: 'Revenue', value: '$128.4k', change: 9.2, trend: [80, 90, 96, 110, 128] },
    { label: 'Churn', value: '2.3%', change: -0.6, invert: true },
  ]}
/>`,
  }),
  chart({
    slug: 'meter-gauge', name: 'Meter Gauge', file: 'MeterGauge.astro',
    description: 'Speedometer dial with labelled status zones and an animated needle for live readings.',
    tags: ['gauge', 'meter', 'speedometer', 'threshold'],
    usage: `<MeterGauge
  title="CPU load" value={68} unit="%"
  zones={[
    { to: 60, label: 'Healthy', tone: 'good' },
    { to: 85, label: 'Elevated', tone: 'warn' },
    { to: 100, label: 'Critical', tone: 'bad' },
  ]}
/>`,
  }),
  chart({
    slug: 'goal-progress-chart', name: 'Goal Progress Chart', file: 'GoalProgressChart.astro',
    description: 'Cumulative progress toward a goal versus the ideal linear pace with an ahead/behind readout.',
    tags: ['goal', 'burnup', 'pace', 'target'],
    usage: `<GoalProgressChart
  periods={['W1', 'W2', 'W3', 'W4', 'W5', 'W6']}
  values={[22, 31, 28]}
  goal={160}
  prefix="$" suffix="k"
/>`,
  }),
  chart({
    slug: 'retention-cohort-table', name: 'Retention Cohort Table', file: 'RetentionCohortTable.astro',
    description: 'Triangular cohort retention matrix shaded on a single-hue ramp with per-period averages.',
    tags: ['cohort', 'retention', 'saas', 'table', 'heatmap'],
    usage: `<RetentionCohortTable
  cohorts={[
    { cohort: 'Aug', size: 1720, retention: [100, 71, 57] },
    { cohort: 'Sep', size: 1890, retention: [100, 73] },
    { cohort: 'Oct', size: 2050, retention: [100] },
  ]}
/>`,
  }),
  chart({
    slug: 'metric-delta-table', name: 'Metric Delta Table', file: 'MetricDeltaTable.astro',
    description: 'Comparison table with inline bars, current vs previous values, signed deltas and sparklines.',
    tags: ['table', 'comparison', 'delta', 'sparkline'],
    usage: `<MetricDeltaTable
  rows={[
    { label: 'Organic', current: 4820, previous: 4310, trend: [30, 34, 38, 44, 48] },
    { label: 'Paid', current: 1310, previous: 1480 },
  ]}
/>`,
  }),
];
