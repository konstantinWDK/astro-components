// src/data/registry/data.ts
import type { ComponentDoc } from './types';

export const data: ComponentDoc[] = [
  {
    slug: 'glass-table',
    name: 'Glass Data Table',
    description: 'A clean, translucent table for displaying structured data with sortable header styles.',
    category: 'data',
    tags: ['table', 'data', 'glass'],
    featured: true,
    code: `---
---
<div class="table-wrap">
  <table>
    <thead><tr><th>User</th><th>Status</th><th>Role</th><th>Activity</th></tr></thead>
    <tbody>
      <tr><td>Alex Smith</td><td><span class="st st-active">Active</span></td><td>Admin</td><td>2m ago</td></tr>
      <tr><td>Maria Garcia</td><td><span class="st st-away">Away</span></td><td>Editor</td><td>1h ago</td></tr>
      <tr><td>James Wilson</td><td><span class="st st-offline">Offline</span></td><td>Viewer</td><td>2d ago</td></tr>
    </tbody>
  </table>
</div>
<style>
  .table-wrap { width: 100%; overflow-x: auto; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; backdrop-filter: blur(10px); }
  table { width: 100%; border-collapse: collapse; text-align: left; }
  th { padding: 1rem 1.5rem; background: rgba(255,255,255,0.03); color: #818cf8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid rgba(255,255,255,0.06); }
  td { padding: 1rem 1.5rem; color: #e2e8f0; font-size: 0.9rem; border-bottom: 1px solid rgba(255,255,255,0.04); }
  tr:hover td { background: rgba(255,255,255,0.02); }
  .st { padding: 2px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: 700; }
  .st-active { background: rgba(16,185,129,0.1); color: #34d399; }
  .st-away { background: rgba(245,158,11,0.1); color: #fbbf24; }
  .st-offline { background: rgba(100,116,139,0.1); color: #94a3b8; }
</style>
`,
    usage: `<GlassTable>Content</GlassTable>`,
  },
  {
    slug: 'vertical-timeline',
    name: 'Vertical Timeline',
    description: 'Chronological list of events with a continuous vertical line and dot indicators.',
    category: 'data',
    tags: ['timeline', 'events', 'data'],
    code: `---
---
<div class="timeline-v">
  <div class="t-item">
    <div class="t-date">Oct 2024</div>
    <div class="t-content"><h4>V2 Release</h4><p>Launched the modular registry architecture.</p></div>
  </div>
  <div class="t-item">
    <div class="t-date">Aug 2024</div>
    <div class="t-content"><h4>Beta Phase</h4><p>Community testing and initial component set.</p></div>
  </div>
</div>
<style>
  .timeline-v { position: relative; padding-left: 2rem; }
  .timeline-v::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: rgba(99,102,241,0.2); }
  .t-item { position: relative; margin-bottom: 2.5rem; }
  .t-item::after { content: ""; position: absolute; left: -2.35rem; top: 5px; width: 12px; height: 12px; background: #6366f1; border: 3px solid #080b14; border-radius: 50%; }
  .t-date { font-size: 0.75rem; font-weight: 700; color: #6366f1; margin-bottom: 0.25rem; }
  h4 { color: #fff; margin: 0; }
  p { font-size: 0.85rem; color: #94a3b8; margin-top: 0.25rem; }
</style>
`,
    usage: `<VerticalTimeline>Content</VerticalTimeline>`,
  },
  {
    slug: 'stats-grid-dashboard',
    name: 'Metric Grid',
    description: 'High-density grid of key performance indicators for dashboards.',
    category: 'data',
    tags: ['stats', 'dashboard', 'data'],
    code: `---
---
<div class="s-grid">
  <div class="s-card"><span>Users</span><h3>12.4k</h3><small class="up">+12%</small></div>
  <div class="s-card"><span>Revenue</span><h3>$48k</h3><small class="up">+5%</small></div>
  <div class="s-card"><span>Bounce</span><h3>24%</h3><small class="down">-2%</small></div>
</div>
<style>
  .s-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; }
  .s-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255, 255, 255, 0.1); padding: 1.25rem; border-radius: 12px; }
  span { font-size: 0.75rem; color: #64748b; font-weight: 600; text-transform: uppercase; }
  h3 { font-size: 1.5rem; color: #fff; margin: 0.25rem 0; }
  small { font-size: 0.7rem; font-weight: 700; }
  .up { color: #10b981; }
  .down { color: #ef4444; }
</style>
`,
    usage: `<StatsGridDashboard>Content</StatsGridDashboard>`,
  },
  {
    slug: 'accordion-group-glass',
    name: 'Glass Accordion',
    description: 'Expandable content sections with a subtle glass effect and smooth transitions.',
    category: 'data',
    tags: ['accordion', 'data', 'glass'],
    code: `---
---
<div class="acc-wrap">
  <details open>
    <summary>How do I install the components?</summary>
    <div class="content">Simply copy the Astro and CSS code into your project.</div>
  </details>
  <details>
    <summary>Is this open source?</summary>
    <div class="content">Yes, Astro Components is free under the MIT license.</div>
  </details>
</div>
<style>
  .acc-wrap { display: flex; flex-direction: column; gap: 0.5rem; }
  details { background: rgba(255,255,255,0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; overflow: hidden; }
  summary { padding: 1rem 1.5rem; cursor: pointer; color: #fff; font-weight: 600; list-style: none; display: flex; justify-content: space-between; align-items: center; transition: 0.2s; }
  summary:hover { background: rgba(255,255,255,0.02); }
  summary::after { content: "+"; font-size: 1.25rem; transition: transform 0.3s; }
  details[open] summary::after { transform: rotate(45deg); }
  .content { padding: 0 1.5rem 1rem; color: #94a3b8; font-size: 0.9rem; line-height: 1.6; }
</style>
`,
    usage: `<AccordionGroupGlass>Content</AccordionGroupGlass>`,
  },
  {
    slug: 'avatar-group-stack',
    name: 'Overlapping Avatars',
    description: 'A set of user avatars clustered together, perfect for ',
    category: 'data',
    tags: ['avatar', 'data', 'group'],
    code: `---
---
<div class="av-group">
  <div class="av" style="background:#6366f1">AJ</div>
  <div class="av" style="background:#8b5cf6">MK</div>
  <div class="av" style="background:#ec4899">SL</div>
  <div class="av more">+4</div>
</div>
<style>
  .av-group { display: flex; align-items: center; }
  .av { width: 32px; height: 32px; border-radius: 50%; border: 2px solid #080b14; margin-left: -10px; display: grid; place-items: center; font-size: 0.65rem; font-weight: 800; color: #fff; position: relative; transition: 0.2s; cursor: pointer; }
  .av:first-child { margin-left: 0; }
  .av:hover { transform: translateY(-4px); z-index: 10; }
  .more { background: #1e293b; color: #94a3b8; border-style: dashed; }
</style>
`,
    usage: `<AvatarGroupStack>Content</AvatarGroupStack>`,
  },
  {
    slug: 'file-tree-view',
    name: 'File Tree Structure',
    description: 'A nested folder and file list hierarchy for representing directories.',
    category: 'data',
    tags: ['tree', 'data', 'files'],
    code: `---
---
<div class="tree">
  <div class="folder active">📁 src</div>
  <div class="indent">
    <div class="folder">📁 components</div>
    <div class="indent">
      <div class="file">📄 Button.astro</div>
      <div class="file">📄 Card.astro</div>
    </div>
    <div class="file">📄 styles.css</div>
  </div>
  <div class="file">📄 astro.config.mjs</div>
</div>
<style>
  .tree { font-family: monospace; font-size: 0.85rem; color: #94a3b8; line-height: 1.8; }
  .indent { padding-left: 1.25rem; border-left: 1px solid rgba(255,255,255,0.1); }
  .folder { color: #fff; font-weight: 700; cursor: pointer; }
  .folder.active { color: #818cf8; }
  .file { cursor: pointer; padding-left: 4px; }
  .file:hover { color: #fff; }
</style>
`,
    usage: `<FileTreeView>Content</FileTreeView>`,
  },
  {
    slug: 'calendar-grid-view',
    name: 'Minimal Month Calendar',
    description: 'Compact calendar grid for event scheduling and date selection.',
    category: 'data',
    tags: ['calendar', 'data', 'grid'],
    code: `---
---
<div class="cal-card">
  <div class="cal-head"><h4>October 2024</h4></div>
  <div class="cal-grid">
    <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
    {[...Array(31)].map((_, i) => <div class:list={[{ "today": i+1 === 24 }]}>{i+1}</div>)}
  </div>
</div>
<style>
  .cal-card { background: #111; border: 1px solid #333; border-radius: 16px; padding: 1.25rem; width: fit-content; }
  .cal-head { text-align: center; margin-bottom: 1rem; color: #fff; }
  .cal-grid { display: grid; grid-template-columns: repeat(7, 35px); text-align: center; font-size: 0.75rem; color: #64748b; }
  .cal-grid span { font-weight: 800; padding: 5px 0; color: #818cf8; }
  .cal-grid div { padding: 8px 0; cursor: pointer; transition: 0.2s; }
  .cal-grid div:hover { color: #fff; background: rgba(255,255,255,0.05); border-radius: 5px; }
  .today { background: #6366f1; color: #fff !important; border-radius: 5px; box-shadow: 0 0 10px rgba(99,102,241,0.4); }
</style>
`,
    usage: `<CalendarGridView>Content</CalendarGridView>`,
  },
  {
    slug: 'description-list-horiz',
    name: 'Data Key-Value List',
    description: 'Clean list for technical specifications or user details.',
    category: 'data',
    tags: ['data', 'list', 'details'],
    code: `---
---
<dl class="desc-list">
  <div class="row"><dt>Module Name</dt><dd>AuthEngine</dd></div>
  <div class="row"><dt>Version</dt><dd>1.4.2</dd></div>
  <div class="row"><dt>Status</dt><dd>Deployment Ready</dd></div>
</dl>
<style>
  .desc-list { display: flex; flex-direction: column; width: 100%; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; overflow: hidden; background: rgba(0,0,0,0.1); }
  .row { display: grid; grid-template-columns: 140px 1fr; padding: 0.75rem 1.25rem; border-bottom: 1px solid rgba(255, 255, 255, 0.1); font-size: 0.85rem; }
  .row:last-child { border-bottom: none; }
  dt { color: #64748b; font-weight: 600; }
  dd { color: #fff; margin: 0; }
</style>
`,
    usage: `<DescriptionListHoriz>Content</DescriptionListHoriz>`,
  },
  {
    slug: 'tag-cloud-data',
    name: 'Metric Tag Cloud',
    description: 'Visual group of tags or keywords for categorization.',
    category: 'data',
    tags: ['tags', 'cloud', 'data'],
    code: `---
---
<div class="t-cloud">
  <span class="t-pill">React</span>
  <span class="t-pill t-active">Astro</span>
  <span class="t-pill">Next.js</span>
  <span class="t-pill">Vue</span>
  <span class="t-pill">Svelte</span>
</div>
<style>
  .t-cloud { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .t-pill { padding: 4px 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 100px; color: #94a3b8; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: 0.2s; }
  .t-pill:hover, .t-active { background: #6366f1; color: #fff; border-color: transparent; box-shadow: 0 4px 10px rgba(99,102,241,0.3); }
</style>
`,
    usage: `<TagCloudData>Content</TagCloudData>`,
  },
  {
    slug: 'stepper-data-vertical',
    name: 'Vertical Steps',
    description: 'Visual path for multi-step data processes or wizards.',
    category: 'data',
    tags: ['steps', 'data', 'vertical'],
    code: `---
---
<div class="v-steps">
  <div class="v-step done"><span>Check</span>Account Created</div>
  <div class="v-step current"><span>2</span>Verify Email</div>
  <div class="v-step"><span>3</span>Setup Profile</div>
</div>
<style>
  .v-steps { display: flex; flex-direction: column; gap: 1rem; }
  .v-step { display: flex; align-items: center; gap: 1rem; color: #64748b; font-size: 0.9rem; font-weight: 600; }
  .v-step span { width: 24px; height: 24px; background: #1e293b; display: grid; place-items: center; border-radius: 50%; font-size: 0.7rem; border: 1px solid #334155; }
  .current { color: #fff; }
  .current span { background: #6366f1; border-color: #6366f1; box-shadow: 0 0 10px rgba(99,102,241,0.4); }
  .done span { background: #10b981; border-color: #10b981; color: #fff; }
</style>
`,
    usage: `<StepperDataVertical>Content</StepperDataVertical>`,
  },
  {
    slug: 'rating-breakdown-bar',
    name: 'Rating Distribution',
    description: 'Bar graph breakdown of user ratings/reviews.',
    category: 'data',
    tags: ['rating', 'data', 'graph'],
    code: `---
---
<div class="rating-box">
  <div class="r-row"><span>5★</span><div class="bar-bg"><div class="bar-val" style="width: 80%"></div></div></div>
  <div class="r-row"><span>4★</span><div class="bar-bg"><div class="bar-val" style="width: 15%"></div></div></div>
  <div class="r-row"><span>3★</span><div class="bar-bg"><div class="bar-val" style="width: 5%"></div></div></div>
</div>
<style>
  .rating-box { display: flex; flex-direction: column; gap: 8px; width: 220px; }
  .r-row { display: flex; align-items: center; gap: 10px; color: #94a3b8; font-size: 0.75rem; font-weight: 700; }
  .bar-bg { flex: 1; height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; border: 1px solid rgba(255, 255, 255, 0.03); }
  .bar-val { height: 100%; background: #fbbf24; border-radius: inherit; box-shadow: 0 0 8px rgba(251, 191, 36, 0.4); }
</style>
`,
    usage: `<RatingBreakdownBar>Content</RatingBreakdownBar>`,
  },
  {
    slug: 'timeline-horiz-steps',
    name: 'Horizontal Timeline',
    description: 'Side-scrolling event tracker with distinct timestamps.',
    category: 'data',
    tags: ['timeline', 'horizontal', 'data'],
    code: `---
---
<div class="h-timeline">
  <div class="h-line"></div>
  <div class="h-item"><span>2022</span><strong>Founded</strong></div>
  <div class="h-item"><span>2023</span><strong>Global</strong></div>
  <div class="h-item curr"><span>2024</span><strong>V2.0</strong></div>
</div>
<style>
  .h-timeline { display: flex; justify-content: space-between; position: relative; padding: 2rem 0; width: 100%; max-width: 600px; margin: 0 auto; }
  .h-line { position: absolute; top: 3.2rem; left: 0; width: 100%; height: 2px; background: rgba(255,255,255,0.1); }
  .h-item { text-align: center; position: relative; z-index: 1; min-width: 80px; }
  .h-item span { display: block; font-size: 0.7rem; color: #64748b; margin-bottom: 2rem; font-weight: 700; }
  .h-item::after { content: ""; position: absolute; left: 50%; top: 1.1rem; width: 16px; height: 16px; background: #1e293b; border: 3px solid #334155; border-radius: 50%; transform: translateX(-50%); transition: 0.3s; }
  strong { display: block; color: #fff; font-size: 0.85rem; }
  .curr strong { color: #6366f1; }
  .curr::after { background: #6366f1; border-color: #080b14; box-shadow: 0 0 15px rgba(99, 102, 241, 0.6); }
</style>
`,
    usage: `<TimelineHorizSteps>Content</TimelineHorizSteps>`,
  },
  {
    slug: 'price-compare-table',
    name: 'Comparison Table',
    description: 'Grid layout for comparing plan features side-by-side.',
    category: 'data',
    tags: ['table', 'pricing', 'compare'],
    code: `---
---
<div class="c-wrap">
  <table>
    <thead>
      <tr><th>Features</th><th>Free</th><th>Pro</th></tr>
    </thead>
    <tbody>
      <tr><td>Feature A</td><td>✅</td><td>✅</td></tr>
      <tr><td>Feature B</td><td>❌</td><td>✅</td></tr>
      <tr><td>Storage</td><td>10GB</td><td>100GB</td></tr>
    </tbody>
  </table>
</div>
<style>
  .c-wrap { background: #0f172a; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1); overflow: hidden; }
  table { width: 100%; font-size: 0.85rem; color: #e2e8f0; border-collapse: collapse; }
  th { padding: 1rem; background: rgba(255, 255, 255, 0.05); color: #fff; text-align: center; font-weight: 800; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
  th:first-child { text-align: left; }
  td { padding: 1rem; border: 1px solid rgba(255, 255, 255, 0.05); text-align: center; }
  td:first-child { text-align: left; background: rgba(255,255,255,0.02); width: 40%; font-weight: 600; }
</style>
`,
    usage: `<PriceCompareTable>Content</PriceCompareTable>`,
  },
  {
    slug: 'user-directory-item',
    name: 'Directory Card',
    description: 'Compact row for listing users with avatar and online status.',
    category: 'data',
    tags: ['user', 'list', 'data'],
    code: `---
---
<div class="u-item">
  <div class="u-pic">JS</div>
  <div class="u-info"><h5>John Doe</h5><p>Software Engineer</p></div>
  <div class="u-stat">Online</div>
</div>
<style>
  .u-item { display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.08); transition: 0.2s; }
  .u-item:hover { border-color: rgba(99, 102, 241, 0.4); background: rgba(99, 102, 241, 0.05); }
  .u-pic { width: 42px; height: 42px; background: linear-gradient(135deg, #6366f1, #c084fc); border-radius: 50%; display: grid; place-items: center; color: #fff; font-weight: 800; font-size: 0.8rem; }
  .u-info h5 { margin: 0; color: #fff; font-size: 1rem; }
  .u-info p { margin: 2px 0 0; font-size: 0.75rem; color: #64748b; }
  .u-stat { margin-left: auto; font-size: 0.65rem; color: #34d399; font-weight: 800; text-transform: uppercase; background: rgba(52, 211, 153, 0.1); padding: 2px 8px; border-radius: 4px; }
</style>
`,
    usage: `<UserDirectoryItem>Content</UserDirectoryItem>`,
  },
  {
    slug: 'data-chips-group',
    name: 'Filter Chips List',
    description: 'Group of interactive chips for data filtering.',
    category: 'data',
    tags: ['chips', 'filter', 'data'],
    code: `---
---
<div class="chips-row">
  <span class="chip-active">All Assets</span>
  <span>Images</span>
  <span>Videos</span>
  <span>Docs</span>
  <span>Music</span>
</div>
<style>
  .chips-row { display: flex; gap: 10px; overflow-x: auto; padding-bottom: 8px; scrollbar-width: none; }
  .chips-row::-webkit-scrollbar { display: none; }
  .chips-row span { padding: 6px 16px; background: #1e293b; border: 1px solid rgba(255, 255, 255, 0.05); color: #94a3b8; font-size: 0.8rem; border-radius: 100px; cursor: pointer; white-space: nowrap; transition: 0.2s; font-weight: 600; }
  .chips-row span:hover { color: #fff; border-color: rgba(255, 255, 255, 0.2); }
  .chip-active { background: #6366f1 !important; color: #fff !important; border-color: transparent !important; box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4); }
</style>
`,
    usage: `<DataChipsGroup>Content</DataChipsGroup>`,
  },
  {
    slug: 'sparkline-stat-card',
    name: 'Metric with Sparkline',
    description: 'Data card showing target metric and a miniature trend graph.',
    category: 'data',
    tags: ['graph', 'stat', 'data'],
    code: `---
---
<div class="spark-card">
  <div class="top"><span>Sessions</span><h3>2,415</h3></div>
  <div class="graph">
    <svg viewBox="0 0 100 30">
      <path d="M0 25 L10 20 L20 22 L30 15 L40 18 L50 25 L60 10 L70 12 L80 5 L90 8 L100 2" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</div>
<style>
  .spark-card { padding: 1.5rem; background: #111; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; min-width: 160px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
  h3 { margin: 4px 0; color: #fff; font-size: 1.5rem; font-weight: 800; }
  span { font-size: 0.75rem; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
  .graph { margin-top: 15px; height: 30px; opacity: 0.8; }
</style>
`,
    usage: `<SparklineStatCard>Content</SparklineStatCard>`,
  },
  {
    slug: 'progress-list-small',
    name: 'Minimal Progress List',
    description: 'Set of progress bars labels for small dashboards.',
    category: 'data',
    tags: ['progress', 'data', 'stat'],
    code: `---
---
<div class="p-list">
  <div class="p-row"><span>Storage</span><strong>42%</strong></div>
  <div class="p-bar"><div class="fill" style="width: 42%"></div></div>
  <div style="margin-top: 1rem"></div>
  <div class="p-row"><span>Bandwidth</span><strong>68%</strong></div>
  <div class="p-bar"><div class="fill" style="width: 68%; background: #c084fc"></div></div>
</div>
<style>
  .p-list { width: 100%; max-width: 300px; }
  .p-row { display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 6px; }
  span { color: #64748b; font-weight: 600; }
  strong { color: #fff; }
  .p-bar { height: 6px; background: rgba(255, 255, 255, 0.05); border-radius: 100px; overflow: hidden; }
  .fill { height: 100%; background: #6366f1; border-radius: inherit; }
</style>
`,
    usage: `<ProgressListSmall>Content</ProgressListSmall>`,
  },
  {
    slug: 'tree-item-interactive',
    name: 'Expandable Row',
    description: 'List item that toggles visible child data on click.',
    category: 'data',
    tags: ['tree', 'interactive', 'data'],
    code: `---
---
<div class="exp-row">
  <div class="main"><span>▶</span> Users Database</div>
  <div class="child">
    <p>Columns: id, name, email, avatar, status</p>
    <p>Rows: 1,402 entries</p>
  </div>
</div>
<style>
  .exp-row { border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding: 12px; }
  .main { color: #fff; font-size: 0.85rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: 0.2s; }
  .main span { font-size: 0.6rem; color: #64748b; transition: 0.3s; }
  .child { margin-top: 12px; padding-left: 24px; color: #64748b; font-size: 0.8rem; display: none; line-height: 1.5; }
  .exp-row:hover .main { color: #818cf8; }
  .exp-row:hover .main span { transform: rotate(90deg); color: #818cf8; }
  .exp-row:hover .child { display: block; }
</style>
`,
    usage: `<TreeItemInteractive>Content</TreeItemInteractive>`,
  },
  {
    slug: 'key-value-pill-group',
    name: 'Metadata Pill List',
    description: 'Dense grouping of status metadata for entities.',
    category: 'data',
    tags: ['metadata', 'pills', 'data'],
    code: `---
---
<div class="meta-row">
  <div class="m-pill">OS:<span>MacOS</span></div>
  <div class="m-pill">Ver:<span>14.5</span></div>
  <div class="m-pill">Arch:<span>ARM64</span></div>
</div>
<style>
  .meta-row { display: flex; gap: 8px; flex-wrap: wrap; }
  .m-pill { background: rgba(0,0,0,0.2); color: #64748b; font-size: 0.7rem; padding: 4px 12px; border-radius: 8px; font-weight: 700; border: 1px solid rgba(255, 255, 255, 0.05); }
  span { color: #e2e8f0; margin-left: 6px; }
</style>
`,
    usage: `<KeyValuePillGroup>Content</KeyValuePillGroup>`,
  },
  {
    slug: 'gantt-chart-minimal',
    name: 'Gantt Timeline UI',
    description: 'Simplified bar-based timeline for project schedules.',
    category: 'data',
    tags: ['gantt', 'project', 'data'],
    code: `---
---
<div class="gantt">
  <div class="g-row"><div class="g-bar" style="width: 40%; margin-left: 10%; background: #6366f1"></div></div>
  <div class="g-row"><div class="g-bar" style="width: 30%; margin-left: 55%; background: #c084fc"></div></div>
  <div class="g-row"><div class="g-bar" style="width: 20%; margin-left: 20%; background: #10b981"></div></div>
</div>
<style>
  .gantt { width: 100%; max-width: 500px; display: flex; flex-direction: column; gap: 8px; background: rgba(0,0,0,0.3); padding: 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.05); }
  .g-row { height: 20px; position: relative; width: 100%; background: rgba(255,255,255,0.02); border-radius: 4px; }
  .g-bar { height: 100%; border-radius: 4px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
</style>
`,
    usage: `<GanttChartMinimal>Content</GanttChartMinimal>`,
  },
];
