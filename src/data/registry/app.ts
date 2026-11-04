// src/data/registry/app.ts
// App & Dashboard components (SaaS shells, tables, boards, settings). Source via `source()`.
import type { ComponentDoc } from './types';
import { source } from './sources';

interface Meta { slug: string; name: string; file: string; description: string; tags: string[]; featured?: boolean; usage: string }

function item(meta: Meta): ComponentDoc {
  const component = meta.file.replace('.astro', '');
  return {
    slug: meta.slug,
    name: meta.name,
    description: meta.description,
    category: 'app',
    tags: ['app', 'dashboard', 'saas', ...meta.tags],
    featured: meta.featured ?? false,
    code: source(`app/${meta.file}`),
    usage: `---
import { ${component} } from 'astro-component-kit/app';
---

${meta.usage.trim()}`,
    installation: {
      manual: [
        'Zero runtime dependencies — server-rendered HTML with a small progressive script.',
        'Copy app-icons.ts (icons, initials and avatar hues) into src/components/app/.',
        `Copy ${meta.file} next to it.`,
        'Set --app-accent (and optionally the light/dark tokens) to match your brand.',
      ].map((s, i) => `${i + 1}. ${s}`).join('\n'),
    },
  };
}

export const app: ComponentDoc[] = [
  item({ slug: 'app-sidebar', name: 'App Sidebar', file: 'AppSidebar.astro', featured: true,
    description: 'SaaS sidebar with workspace switcher, grouped nav with icons and badges, collapsible icon rail and plan card.',
    tags: ['sidebar', 'navigation', 'shell'],
    usage: `<AppSidebar currentHref="/app/" groups={[{ items: [{ label: 'Dashboard', href: '/app/', icon: 'dashboard' }, { label: 'Reservations', href: '/app/reservations/', icon: 'calendar', badge: 4 }] }]} />` }),
  item({ slug: 'app-topbar', name: 'App Topbar', file: 'AppTopbar.astro', featured: true,
    description: 'App top bar with ⌘K search, notifications dropdown with unread count, theme toggle and user menu.',
    tags: ['topbar', 'header', 'notifications', 'user-menu'],
    usage: `<AppTopbar user={{ name: 'Lucía Ortega', role: 'General manager' }} />` }),
  item({ slug: 'page-header', name: 'Page Header', file: 'PageHeader.astro',
    description: 'App page heading with breadcrumb, description, period switcher, action buttons and underline tabs.',
    tags: ['header', 'toolbar', 'tabs'],
    usage: `<PageHeader title="Reports" periods={['7d', '30d', 'Year']} actions={[{ label: 'Export', icon: 'download' }]} />` }),
  item({ slug: 'data-table', name: 'Data Table', file: 'DataTable.astro', featured: true,
    description: 'Client-side table with search, status chips, sortable columns, row selection, bulk bar, pagination and typed cells.',
    tags: ['table', 'data', 'sort', 'pagination', 'filter'],
    usage: `<DataTable title="Customers" rows={rows} columns={[
  { key: 'name', label: 'Name', type: 'person', sortable: true },
  { key: 'status', label: 'Status', type: 'status' },
  { key: 'total', label: 'Total', type: 'money', align: 'right', sortable: true },
]} />` }),
  item({ slug: 'room-rack', name: 'Room Rack', file: 'RoomRack.astro', featured: true,
    description: 'Booking timeline (tape chart): rooms by days with status-coloured reservation bars, today marker and detail panel.',
    tags: ['timeline', 'calendar', 'booking', 'gantt', 'hotel'],
    usage: `<RoomRack days={['Mon 3', 'Tue 4', 'Wed 5']} rooms={[{ id: '101', name: '101', type: 'Standard' }]} bookings={[{ room: '101', guest: 'Elena', start: 0, nights: 2, status: 'confirmed' }]} />` }),
  item({ slug: 'housekeeping-board', name: 'Housekeeping Board', file: 'HousekeepingBoard.astro',
    description: 'Room status board by floor — clean, dirty, inspecting, occupied, out of order — with filters and quick status changes.',
    tags: ['status', 'board', 'grid', 'hotel', 'operations'],
    usage: `<HousekeepingBoard rooms={[{ number: '101', floor: 'Floor 1', status: 'dirty', assignee: 'Rosa' }]} />` }),
  item({ slug: 'arrivals-board', name: 'Arrivals Board', file: 'ArrivalsBoard.astro',
    description: 'Front-desk list with arrivals, departures and in-house tabs plus one-click check-in / check-out.',
    tags: ['list', 'tabs', 'check-in', 'hotel'],
    usage: `<ArrivalsBoard arrivals={[{ guest: 'Elena Duarte', room: '204', time: '14:00', vip: true }]} />` }),
  item({ slug: 'guest-profile-card', name: 'Guest Profile Card', file: 'GuestProfileCard.astro',
    description: 'CRM profile with avatar, loyalty tier, contact links, lifetime stats, preferences, upcoming stay and staff notes.',
    tags: ['profile', 'crm', 'customer', 'card'],
    usage: `<GuestProfileCard guest={{ name: 'Elena Duarte', email: 'elena@mail.com' }} tier="Gold" />` }),
  item({ slug: 'settings-section', name: 'Settings Section', file: 'SettingsSection.astro',
    description: 'Settings block with title and help text beside a fields card with Save / Cancel and a saved confirmation.',
    tags: ['settings', 'form', 'account'],
    usage: `<SettingsSection title="Notifications" description="Choose what reaches you.">
  <SwitchRow name="bookings" label="New bookings" />
</SettingsSection>` }),
  item({ slug: 'switch-row', name: 'Switch Row', file: 'SwitchRow.astro',
    description: 'Settings row with label, description and an accessible on/off switch.',
    tags: ['switch', 'toggle', 'settings', 'form'],
    usage: `<SwitchRow name="weekly" label="Weekly report" description="Every Monday at 9:00." checked />` }),
  item({ slug: 'team-members', name: 'Team Members', file: 'TeamMembers.astro',
    description: 'Team management with roles, status, invite form and two-step remove.',
    tags: ['team', 'users', 'roles', 'invite'],
    usage: `<TeamMembers seats={10} members={[{ name: 'Lucía Ortega', email: 'lucia@hotel.com', role: 'Owner', you: true }]} />` }),
  item({ slug: 'plan-usage-card', name: 'Plan Usage Card', file: 'PlanUsageCard.astro',
    description: 'Billing summary with plan, renewal, usage meters with thresholds, payment method and upgrade action.',
    tags: ['billing', 'plan', 'usage', 'meter'],
    usage: `<PlanUsageCard plan="Pro" usage={[{ label: 'Rooms', used: 42, limit: 50 }]} />` }),
  item({ slug: 'auth-card', name: 'Auth Card', file: 'AuthCard.astro', featured: true,
    description: 'Split-screen sign-in / sign-up with SSO buttons, show-password toggle, validation and a brand panel.',
    tags: ['auth', 'login', 'sign-in', 'form'],
    usage: `<AuthCard mode="signin" brand="Lobby" successHref="/app/" />` }),
];
