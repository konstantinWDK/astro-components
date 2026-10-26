import type { ComponentDoc } from './types';

export const charts: ComponentDoc[] = [
  {
    slug: 'area-chart',
    name: 'Area Chart',
    description: 'A premium, smooth area chart with gradient fills and glassmorphism tooltips.',
    category: 'charts',
    tags: ['data', 'analytics', 'chart', 'area', 'premium'],
    featured: true,
    code: `---
import { AreaChart } from 'astro-component-kit/charts';

// Example 1: Basic Revenue
const cat1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const ser1 = [{ name: 'Revenue', data: [31, 40, 28, 51, 42] }];

// Example 2: Comparison
const cat2 = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const ser2 = [
  { name: 'Direct', data: [45, 52, 38, 24, 33] },
  { name: 'Social', data: [12, 17, 11, 9, 15] }
];
---

<!-- Single Series -->
<AreaChart 
  title="Monthly Revenue" 
  categories={cat1}
  series={ser1}
/>

<!-- Multi-series Comparison -->
<AreaChart 
  title="Traffic Sources" 
  subtitle="Comparing direct vs social traffic"
  categories={cat2}
  series={ser2}
  colors={['#b8860b', '#3b82f6']}
/>`,
    installation: {
      command: `npm install apexcharts`,
      manual: `1. Install apexcharts as a dependency.
2. Copy the AreaChart.astro file to your components folder.
3. Import and use the component in your pages.`
    },
    usage: `---
import { AreaChart } from 'astro-component-kit';

const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const series = [{ 
  name: 'Sales', 
  data: [31, 40, 28, 51, 42] 
}];
---

<AreaChart 
  title="Monthly Sales" 
  categories={categories}
  series={series}
  variant="primary"
/>`,
  },
  {
    slug: 'bar-chart',
    name: 'Bar Chart',
    description: 'A clean bar chart with rounded corners and multi-series support.',
    category: 'charts',
    tags: ['data', 'analytics', 'chart', 'bar'],
    featured: false,
    code: `---
import { BarChart } from 'astro-component-kit/charts';

// Example 1: Vertical Bars
const cat1 = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const ser1 = [{ name: 'Sessions', data: [44, 55, 41, 67, 22] }];

// Example 2: Horizontal Stacked
const cat2 = ['Q1', 'Q2', 'Q3', 'Q4'];
const ser2 = [
  { name: 'Product A', data: [12, 17, 11, 9] },
  { name: 'Product B', data: [15, 11, 14, 18] }
];
---

<!-- Basic Vertical -->
<BarChart 
  title="Daily Sessions" 
  categories={cat1}
  series={ser1}
/>

<!-- Horizontal Stacked -->
<BarChart 
  title="Quarterly Sales" 
  subtitle="Product distribution by quarter"
  categories={cat2}
  series={ser2}
  horizontal={true}
  stacked={true}
/>`,
    installation: {
      command: `npm install apexcharts`,
      manual: `1. Install apexcharts as a dependency.
2. Copy the BarChart.astro file to your components folder.
3. Import and use the component in your pages.`
    },
    usage: `---
import { BarChart } from 'astro-component-kit';

const categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const series = [{ name: 'Sessions', data: [44, 55, 41, 67, 22] }];
---

<BarChart 
  title="Daily Traffic" 
  categories={categories}
  series={series}
/>`,
  },
  {
    slug: 'donut-chart',
    name: 'Donut Chart',
    description: 'A minimalist donut chart with a centered label and interactive segments.',
    category: 'charts',
    tags: ['data', 'analytics', 'chart', 'donut', 'pie'],
    featured: false,
    code: `---
import { DonutChart } from 'astro-component-kit/charts';

// Example 1: Standard Donut
const labels1 = ['Desktop', 'Mobile', 'Tablet'];
const series1 = [65, 25, 10];

// Example 2: Full Pie
const labels2 = ['Completed', 'Pending', 'Delayed'];
const series2 = [70, 20, 10];
---

<!-- Standard Donut -->
<DonutChart 
  title="Device Distribution"
  labels={labels1}
  series={series1}
  centerLabel="Devices"
/>

<!-- Full Pie Chart -->
<DonutChart 
  title="Task Status"
  labels={labels2}
  series={series2}
  pie={true}
  colors={['#10b981', '#f59e0b', '#ef4444']}
/>`,
    installation: {
      command: `npm install apexcharts`,
      manual: `1. Install apexcharts as a dependency.
2. Copy the DonutChart.astro file to your components folder.
3. Import and use the component in your pages.`
    },
    usage: `---
import { DonutChart } from 'astro-component-kit';

const labels = ['Desktop', 'Mobile', 'Tablet'];
const series = [65, 25, 10];
---

<DonutChart 
  title="Device Share"
  labels={labels}
  series={series}
  centerLabel="Devices"
/>`,
  },
  {
    slug: 'radar-metric-chart',
    name: 'Radar Metric Chart',
    description: 'Polygon spider radar chart visualizing multi-attribute scores (e.g. Speed, SEO, Accessibility, Security) with SVG canvas.',
    category: 'charts',
    tags: ["charts","radar","polygon","spider","metrics"],
    featured: true,
    code: `---
/**
 * RadarMetricChart — Pure SVG radar / spider chart for multi-axis skill and performance visualization.
 * 
 * @param {string} title - Chart title. Default is 'Performance Metrics'.
 * @param {Array<{axis: string, value: number}>} data - 5 or 6 axis points (values 0 to 100).
 * @param {string} color - Primary chart fill & stroke color. Default is '#d4a017'.
 * @param {number} size - Pixel width/height of the radar. Default is 320.
 */
interface Props {
  title?: string;
  data?: Array<{ axis: string; value: number }>;
  color?: string;
  size?: number;
}

const {
  title = 'System Capabilities',
  data = [
    { axis: 'Speed', value: 95 },
    { axis: 'A11y', value: 98 },
    { axis: 'SEO', value: 100 },
    { axis: 'Design', value: 92 },
    { axis: 'Zero-JS', value: 96 },
    { axis: 'Security', value: 90 },
  ],
  color = '#d4a017',
  size = 320,
} = Astro.props;

const center = size / 2;
const radius = (size - 70) / 2;
const totalAxes = data.length;
const angleSlice = (Math.PI * 2) / totalAxes;

// Concentric polygon grid levels (20%, 40%, 60%, 80%, 100%)
const levels = [0.2, 0.4, 0.6, 0.8, 1.0];
const gridPolygons = levels.map((lvl) => {
  return data
    .map((_, i) => {
      const r = radius * lvl;
      const x = center + r * Math.cos(angleSlice * i - Math.PI / 2);
      const y = center + r * Math.sin(angleSlice * i - Math.PI / 2);
      return \`\${x},\${y}\`;
    })
    .join(' ');
});

// Data polygon points
const dataPoints = data
  .map((d, i) => {
    const r = radius * (Math.min(100, Math.max(0, d.value)) / 100);
    const x = center + r * Math.cos(angleSlice * i - Math.PI / 2);
    const y = center + r * Math.sin(angleSlice * i - Math.PI / 2);
    return \`\${x},\${y}\`;
  })
  .join(' ');
---

<div class="radar-card" style={\`--radar-size: \${size}px; --radar-color: \${color};\`}>
  {title && <h5 class="radar-card__title">{title}</h5>}

  <div class="radar-card__wrap">
    <svg width={size} height={size} class="radar-card__svg">
      <!-- Background concentric webs -->
      {gridPolygons.map((pts) => (
        <polygon points={pts} class="radar-web" />
      ))}

      <!-- Axes radial spokes -->
      {data.map((_, i) => {
        const x2 = center + radius * Math.cos(angleSlice * i - Math.PI / 2);
        const y2 = center + radius * Math.sin(angleSlice * i - Math.PI / 2);
        return <line x1={center} y1={center} x2={x2} y2={y2} class="radar-spoke" />;
      })}

      <!-- Data polygon -->
      <polygon points={dataPoints} class="radar-data" />

      <!-- Data nodes -->
      {data.map((d, i) => {
        const r = radius * (d.value / 100);
        const cx = center + r * Math.cos(angleSlice * i - Math.PI / 2);
        const cy = center + r * Math.sin(angleSlice * i - Math.PI / 2);
        return <circle cx={cx} cy={cy} r="4" class="radar-node" />;
      })}

      <!-- Axis Labels -->
      {data.map((d, i) => {
        const labelRadius = radius + 22;
        const lx = center + labelRadius * Math.cos(angleSlice * i - Math.PI / 2);
        const ly = center + labelRadius * Math.sin(angleSlice * i - Math.PI / 2);
        return (
          <text
            x={lx}
            y={ly}
            class="radar-label"
            text-anchor="middle"
            dominant-baseline="central"
          >
            {d.axis} ({d.value})
          </text>
        );
      })}
    </svg>
  </div>
</div>

<style>
  .radar-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--sp-6, 1.5rem);
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--r-xl, 24px);
    width: 100%;
    max-width: fit-content;
    font-family: var(--font-sans, system-ui, sans-serif);
  }

  .radar-card__title {
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--c-text-1, #ffffff);
    margin: 0 0 12px 0;
  }

  .radar-card__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .radar-web {
    fill: none;
    stroke: rgba(255, 255, 255, 0.08);
    stroke-width: 1;
  }

  .radar-spoke {
    stroke: rgba(255, 255, 255, 0.08);
    stroke-width: 1;
  }

  .radar-data {
    fill: rgba(184, 134, 11, 0.25);
    stroke: var(--radar-color);
    stroke-width: 2.5;
    transition: all 0.4s ease;
  }

  .radar-node {
    fill: var(--radar-color);
    stroke: #050505;
    stroke-width: 2;
  }

  .radar-label {
    fill: var(--c-text-2, #a3a3a3);
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
</style>
`,
    usage: `<RadarMetricChart title="Performance Audit" metrics={[{ label: 'Speed', value: 92 }, { label: 'SEO', value: 98 }, { label: 'a11y', value: 100 }, { label: 'Security', value: 95 }, { label: 'PWA', value: 88 }]} />`,
  },
  {
    slug: 'linear-progress-gauge',
    name: 'Linear Progress Gauge',
    description: 'Segmented target quota and budget gauge bar with colored threshold markers and percent label.',
    category: 'charts',
    tags: ["charts","gauge","linear","progress","quota"],
    featured: false,
    code: `---
/**
 * LinearProgressGauge — Multi-segmented horizontal memory or budget progress bar with breakdown legend.
 * 
 * @param {string} title - Gauge header label. Default is 'Resource Allocation'.
 * @param {Array<{label: string, value: number, color: string}>} segments - Proportion breakdown chunks.
 * @param {string} total - Formatted total capacity string (e.g. '16 GB', '100%'). Default is '100%'.
 */
interface Props {
  title?: string;
  segments?: Array<{ label: string; value: number; color: string }>;
  total?: string;
}

const {
  title = 'System Resource Allocation',
  segments = [
    { label: 'SSR Execution', value: 45, color: '#d4a017' },
    { label: 'Asset Caching', value: 25, color: '#38bdf8' },
    { label: 'Edge Worker', value: 15, color: '#a855f7' },
    { label: 'Free Headroom', value: 15, color: 'rgba(255,255,255,0.1)' },
  ],
  total = '100%',
} = Astro.props;

const totalSum = segments.reduce((acc, s) => acc + s.value, 0) || 100;
---

<div class="linear-gauge">
  <div class="linear-gauge__header">
    <span class="linear-gauge__title">{title}</span>
    <span class="linear-gauge__total">{total}</span>
  </div>

  <div class="linear-gauge__bar" role="progressbar" aria-valuemax="100" aria-valuemin="0">
    {segments.map((seg) => {
      const pct = (seg.value / totalSum) * 100;
      return (
        <div
          class="linear-gauge__chunk"
          style={\`width: \${pct}%; background-color: \${seg.color};\`}
          title={\`\${seg.label}: \${seg.value}%\`}
        />
      );
    })}
  </div>

  <div class="linear-gauge__legend">
    {segments.map((seg) => (
      <div class="legend-item">
        <span class="legend-item__dot" style={\`background-color: \${seg.color};\`}></span>
        <span class="legend-item__name">{seg.label}</span>
        <span class="legend-item__val">{seg.value}%</span>
      </div>
    ))}
  </div>
</div>

<style>
  .linear-gauge {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-width: 440px;
    padding: var(--sp-6, 1.5rem);
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--r-xl, 20px);
    font-family: var(--font-sans, system-ui, sans-serif);
  }

  .linear-gauge__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .linear-gauge__title {
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--c-text-1, #ffffff);
  }

  .linear-gauge__total {
    font-size: 0.82rem;
    font-weight: 800;
    color: var(--c-primary-light, #d4a017);
  }

  .linear-gauge__bar {
    display: flex;
    height: 10px;
    border-radius: var(--r-full, 9999px);
    overflow: hidden;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5);
  }

  .linear-gauge__chunk {
    height: 100%;
    transition: width 0.4s ease;
  }

  .linear-gauge__legend {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px 12px;
    margin-top: 4px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.75rem;
  }

  .legend-item__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .legend-item__name {
    color: var(--c-text-2, #a3a3a3);
    flex: 1;
  }

  .legend-item__val {
    font-weight: 700;
    color: var(--c-text-1, #ffffff);
  }
</style>
`,
    usage: `<LinearProgressGauge title="Monthly Storage Quota" current={42.8} max={50} unit="GB" />`,
  },
];
