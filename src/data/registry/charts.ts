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
];
