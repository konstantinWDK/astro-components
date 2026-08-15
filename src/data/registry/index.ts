// src/data/registry/index.ts
import { buttons } from './buttons';
import { forms } from './forms';
import { cards } from './cards';
import { feedback } from './feedback';
import { navigation } from './navigation';
import { layout } from './layout';
import { overlays } from './overlays';
import { data } from './data';
import { typography } from './typography';
import { sections } from './sections';
import { charts } from './charts';

import { type ComponentDoc, type Category } from './types';
export type { ComponentDoc, Category };

export const categories: Category[] = [
  { id: 'buttons', name: 'Buttons', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="8" rx="4"/><circle cx="12" cy="12" r="1"/></svg>`, description: 'Interactive button components with premium styles and animations.' },
  { id: 'forms', name: 'Forms', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>`, description: 'Form elements with clean animations and validation states.' },
  { id: 'cards', name: 'Cards', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M3 15h18"/></svg>`, description: 'Versatile card containers for content display.' },
  { id: 'feedback', name: 'Feedback', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`, description: 'Badges, alerts, and notification components.' },
  { id: 'navigation', name: 'Navigation', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>`, description: 'Navbars, tabs, breadcrumbs and navigation patterns.' },
  { id: 'layout', name: 'Layout', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>`, description: 'Grids, containers, and structural sections.' },
  { id: 'overlays', name: 'Overlays', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v16"/></svg>`, description: 'Modals, drawers, and popovers.' },
  { id: 'data', name: 'Data Display', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`, description: 'Stats, tables, and visualization elements.' },
  { id: 'typography', name: 'Typography', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>`, description: 'Headings and text patterns.' },
  { id: 'charts', name: 'Charts', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`, description: 'Premium data visualization and analytics charts.' },
  { id: 'sections', name: 'Sections', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`, description: 'Complete page sections: heroes, features, pricing, CTAs, and more.' },
];

export const components: ComponentDoc[] = [
  ...buttons,
  ...forms,
  ...cards,
  ...feedback,
  ...navigation,
  ...layout,
  ...overlays,
  ...data,
  ...typography,
  ...charts,
  ...sections,
];

export function getComponentsByCategory(categoryId: string): ComponentDoc[] {
  return (components || []).filter((c) => c && c.category === categoryId);
}

export function getComponentBySlug(slug: string): ComponentDoc | undefined {
  return (components || []).find((c) => c && c.slug === slug);
}

export function getFeaturedComponents(): ComponentDoc[] {
  return (components || []).filter((c) => c && c.featured);
}
