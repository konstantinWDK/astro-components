import type { ComponentDoc } from './types';
import { source } from './sources';

export const charts: ComponentDoc[] = [
  {
    slug: 'area-chart',
    name: 'Area Chart',
    description: 'A premium, smooth area chart with gradient fills and glassmorphism tooltips.',
    category: 'charts',
    tags: ['data', 'analytics', 'chart', 'area', 'premium'],
    featured: true,
    code: source('charts/AreaChart.astro'),
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
    code: source('charts/BarChart.astro'),
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
    code: source('charts/DonutChart.astro'),
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
    code: source('charts/RadarMetricChart.astro'),
    usage: `<RadarMetricChart title="Performance Audit" metrics={[{ label: 'Speed', value: 92 }, { label: 'SEO', value: 98 }, { label: 'a11y', value: 100 }, { label: 'Security', value: 95 }, { label: 'PWA', value: 88 }]} />`,
  },
  {
    slug: 'linear-progress-gauge',
    name: 'Linear Progress Gauge',
    description: 'Segmented target quota and budget gauge bar with colored threshold markers and percent label.',
    category: 'charts',
    tags: ["charts","gauge","linear","progress","quota"],
    featured: false,
    code: source('charts/LinearProgressGauge.astro'),
    usage: `<LinearProgressGauge title="Monthly Storage Quota" current={42.8} max={50} unit="GB" />`,
  },
];
