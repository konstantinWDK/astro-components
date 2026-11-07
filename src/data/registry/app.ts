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

  // Healthcare / clinic apps ("Pulso")
  item({ slug: 'med-agenda-timeline', name: 'Med Agenda Timeline', file: 'MedAgendaTimeline.astro', featured: true,
    description: "A clinician's day on a time rail: appointments with status, in-person or video, room and reason, a now marker, summary and quick filters.",
    tags: ['healthcare', 'agenda', 'appointments', 'timeline', 'clinic'],
    usage: `<MedAgendaTimeline now="10:40" appointments={[
  { id: '1', start: '10:30', duration: 30, patient: { name: 'Elena Duarte', sub: '42 · F' }, type: 'in-person', reason: 'BP follow-up', status: 'in-progress', room: 'Room 1' },
  { id: '2', start: '11:30', duration: 20, patient: { name: 'Lucas Silva' }, type: 'video', reason: 'Inhaler check', status: 'confirmed' },
]} />` }),
  item({ slug: 'med-waiting-room', name: 'Med Waiting Room', file: 'MedWaitingRoom.astro',
    description: 'Live waiting-room queue: priority, wait timers that turn amber and red past the target, and call-in / start-visit actions.',
    tags: ['healthcare', 'queue', 'waiting-room', 'live', 'clinic'],
    usage: `<MedWaitingRoom target={15} patients={[{ id: 'p1', name: 'Hans Müller', waited: 31, appointment: '11:00', priority: 'urgent', reason: 'Shortness of breath' }]} />` }),
  item({ slug: 'med-schedule-calendar', name: 'Med Schedule Calendar', file: 'MedScheduleCalendar.astro', featured: true,
    description: 'Clinic week / day calendar: appointments coloured by clinician with overlap lanes, now line, doctor filters, video legend and a detail panel.',
    tags: ['healthcare', 'calendar', 'schedule', 'week-view', 'clinic'],
    usage: `<MedScheduleCalendar today={2} now="10:40"
  days={['Mon 2', 'Tue 3', 'Wed 4', 'Thu 5', 'Fri 6']}
  doctors={[{ id: 'navarro', name: 'Dr. Navarro', hue: 190 }]}
  appointments={[{ id: '1', day: 2, start: '10:30', duration: 30, doctor: 'navarro', patient: 'Elena Duarte', type: 'in-person', status: 'in-progress' }]} />` }),
  item({ slug: 'med-patient-summary', name: 'Med Patient Summary', file: 'MedPatientSummary.astro', featured: true,
    description: 'Patient chart summary: identity, allergy alert, vitals with trend sparklines and range flags, problems, medications and recent visits.',
    tags: ['healthcare', 'patient', 'ehr', 'vitals', 'profile'],
    usage: `<MedPatientSummary
  patient={{ name: 'Elena Duarte', age: 42, sex: 'F', mrn: 'MRN-001042' }}
  allergies={[{ name: 'Penicillin', severity: 'severe' }]}
  vitals={[{ label: 'Blood pressure', value: '136/86', unit: 'mmHg', trend: [148, 142, 136], status: 'high' }]}
/>` }),
  item({ slug: 'med-consultation-note', name: 'Med Consultation Note', file: 'MedConsultationNote.astro', featured: true,
    description: 'SOAP consultation note with out-of-range vitals flags, an ICD-10 diagnosis combobox, templates, local autosave and sign & lock.',
    tags: ['healthcare', 'soap', 'form', 'combobox', 'autosave'],
    usage: `<MedConsultationNote patient="Elena Duarte" clinician="Dr. Laura Navarro"
  diagnoses={[{ code: 'I10', label: 'Essential (primary) hypertension' }]} />` }),
  item({ slug: 'med-prescription-pad', name: 'Med Prescription Pad', file: 'MedPrescriptionPad.astro',
    description: 'e-Prescription builder: formulary search, dose, frequency and duration with auto quantity, allergy and duplicate-therapy alerts, print and send.',
    tags: ['healthcare', 'prescription', 'pharmacy', 'safety', 'form'],
    usage: `<MedPrescriptionPad patient="Elena Duarte" allergies={[{ name: 'Penicillin', class: 'penicillin' }]}
  formulary={[{ id: 'amoxicillin-500', name: 'Amoxicillin', strength: '500 mg', form: 'capsule', class: 'penicillin' }]} />` }),
  item({ slug: 'med-video-visit', name: 'Med Video Visit', file: 'MedVideoVisit.astro', featured: true,
    description: 'Telemedicine call room UI: patient stage, self-view, live timer, connection quality, mic / camera / share / chat controls, chat panel and end-of-call summary.',
    tags: ['healthcare', 'telemedicine', 'video', 'call', 'chat'],
    usage: `<MedVideoVisit patient={{ name: 'Lucas Silva', sub: '6 y · with a parent' }} reason="Inhaler technique" noteHref="/app/consultation/">
  <video slot="remote" autoplay playsinline></video>
</MedVideoVisit>` }),
  item({ slug: 'med-availability-editor', name: 'Med Availability Editor', file: 'MedAvailabilityEditor.astro',
    description: 'Weekly consultation hours: per-day switches and time ranges, in-person / video per range, copy to weekdays, overlap checks and a slots summary.',
    tags: ['healthcare', 'availability', 'settings', 'hours', 'form'],
    usage: `<MedAvailabilityEditor slot={20} week={[{ day: 'Monday', ranges: [{ from: '09:00', to: '13:00', mode: 'both' }] }]} />` }),

  // Dental practice apps ("Dentis")
  item({ slug: 'dental-odontogram', name: 'Dental Odontogram', file: 'DentalOdontogram.astro', featured: true,
    description: 'Interactive 32-tooth dental arch chart (Universal & FDI numbering) with color-coded conditions (sound, caries, composite filling, crown, implant, endodontics, missing) and clinical detail drawer.',
    tags: ['dental', 'odontogram', 'tooth-chart', 'healthcare', 'chart', 'interactive'],
    usage: `<DentalOdontogram teeth={teethList} editable={true} />` }),
  item({ slug: 'dental-chair-timeline', name: 'Dental Chair Timeline', file: 'DentalChairTimeline.astro', featured: true,
    description: 'Multi-operatory dental chair schedule and chair turnover monitor: live status (occupied, ready, sanitizing), ongoing treatments, and day timeline grid.',
    tags: ['dental', 'operatory', 'chairs', 'schedule', 'timeline', 'appointments'],
    usage: `<DentalChairTimeline chairs={chairs} appointments={appointments} />` }),
  item({ slug: 'dental-treatment-plan-builder', name: 'Dental Treatment Plan Builder', file: 'DentalTreatmentPlanBuilder.astro', featured: true,
    description: 'Phased dental care planner and quote estimator: procedure lines with ADA/CDT codes, insurance benefit coverage calculations, patient co-pay, and patient acceptance.',
    tags: ['dental', 'treatment-plan', 'quotes', 'insurance', 'billing', 'ada-codes'],
    usage: `<DentalTreatmentPlanBuilder patientName="Lucía Santos" insurance="Sanitas Dental (80% Basic / 50% Major)" />` }),
  item({ slug: 'dental-recall-manager', name: 'Dental Recall Manager', file: 'DentalRecallManager.astro',
    description: 'Preventative dental hygiene recall manager: tracks 6-month prophy and perio due dates with 1-click automated WhatsApp and SMS patient reminders.',
    tags: ['dental', 'recall', 'hygiene', 'prevention', 'reminders', 'sms'],
    usage: `<DentalRecallManager recalls={recallsList} />` }),

  // Moving & Logistics apps ("Muvr")
  item({ slug: 'move-inventory-calculator', name: 'Move Inventory Calculator', file: 'MoveInventoryCalculator.astro', featured: true,
    description: 'Interactive furniture volume (m³) and moving estimate calculator: item-by-item selector with live cubic meter tally, recommended van fleet, and instant quote.',
    tags: ['logistics', 'moving', 'calculator', 'furniture', 'volume', 'pricing'],
    usage: `<MoveInventoryCalculator items={furnitureCatalog} baseRatePerM3={28} />` }),
  item({ slug: 'fleet-dispatch-timeline', name: 'Fleet Dispatch Timeline', file: 'FleetDispatchTimeline.astro', featured: true,
    description: 'Commercial van fleet dispatch board: displays vehicle payload utilization %, driver assignments, live status, and time slot schedules.',
    tags: ['logistics', 'fleet', 'dispatch', 'timeline', 'vans', 'schedule'],
    usage: `<FleetDispatchTimeline vehicles={vehicles} orders={orders} />` }),
  item({ slug: 'hiring-pipeline-board', name: 'Hiring Pipeline Board', file: 'HiringPipelineBoard.astro', featured: true,
    description: 'Kanban-style recruitment pipeline for van drivers and movers: tracks applicants across interview, trial shift, and hired stages with vehicle details.',
    tags: ['logistics', 'hiring', 'recruitment', 'kanban', 'drivers', 'careers'],
    usage: `<HiringPipelineBoard candidates={candidates} />` }),
  item({ slug: 'move-manifest-card', name: 'Move Manifest Card', file: 'MoveManifestCard.astro',
    description: 'Detailed removal job manifest card with origin & destination addresses, floor elevator access, distance, itemized furniture list, and progress tracker.',
    tags: ['logistics', 'manifest', 'order', 'moving', 'card', 'bill-of-lading'],
    usage: `<MoveManifestCard order={moveOrder} />` }),

  // Food delivery & Kitchen OS apps ("BiteFlow")
  item({ slug: 'food-kitchen-display', name: 'Food Kitchen Display (KDS)', file: 'FoodKitchenDisplay.astro', featured: true,
    description: 'Commercial kitchen display system (KDS) for line cooks: live prep countdown timers, color-coded urgency thresholds, allergen highlights, and stage bump actions.',
    tags: ['food', 'restaurant', 'kds', 'kitchen', 'display', 'timers', 'orders'],
    usage: `<FoodKitchenDisplay tickets={kitchenTickets} stationName="Station #01 · Smash Grill" />` }),
  item({ slug: 'food-menu-cms-editor', name: 'Food Menu CMS Editor', file: 'FoodMenuCmsEditor.astro', featured: true,
    description: 'Restaurant digital menu CMS and stock controller: live price editor, calorie counter, and 1-click 86’d out-of-stock emergency switches across all storefronts.',
    tags: ['food', 'restaurant', 'cms', 'menu', 'stock', 'pricing', 'allergens'],
    usage: `<FoodMenuCmsEditor dishes={dishesList} />` }),
  item({ slug: 'food-order-tracker', name: 'Food Order Tracker', file: 'FoodOrderTracker.astro', featured: true,
    description: 'Real-time customer delivery tracker: step-by-step cooking progress, rider contact and vehicle details, address instructions, and itemized receipt breakdown.',
    tags: ['food', 'tracker', 'delivery', 'receipt', 'courier', 'gps', 'status'],
    usage: `<FoodOrderTracker order={activeOrder} />` }),
  item({ slug: 'food-dish-customizer', name: 'Food Dish Customizer', file: 'FoodDishCustomizer.astro', featured: true,
    description: 'Interactive dish configuration drawer: required single-choice options, optional multi-select toppings, live price recalculation, and kitchen prep notes.',
    tags: ['food', 'customizer', 'modifiers', 'burger', 'pricing', 'cart', 'interactive'],
    usage: `<FoodDishCustomizer dish={sampleDish} checkoutHref="/preview/food-delivery/menu#checkout" />` }),

  // Construction, Developments & Site OS apps ("Strukto")
  item({ slug: 'construction-site-progress', name: 'Construction Site Progress', file: 'ConstructionSiteProgress.astro', featured: true,
    description: 'Site progress timeline, stage tracker and certified budget dashboard: % completion, milestone tracker, technical supervisor stamp and site photos.',
    tags: ['construction', 'progress', 'site', 'timeline', 'budget', 'certifications', 'dashboard'],
    usage: `<ConstructionSiteProgress project={constructionProjects[0]} showMilestones={true} showFinancials={true} />` }),
  item({ slug: 'construction-unit-selector', name: 'Construction Unit Selector', file: 'ConstructionUnitSelector.astro', featured: true,
    description: 'Interactive building floorplan & unit selector: browse available apartments, penthouses and commercial spaces with m², bedrooms, orientation and reservation trigger.',
    tags: ['construction', 'real-estate', 'units', 'apartments', 'floorplan', 'selector', 'pricing'],
    usage: `<ConstructionUnitSelector units={constructionUnits} projectName="Residencial Caelum" />` }),
  item({ slug: 'construction-daily-log', name: 'Construction Daily Log', file: 'ConstructionDailyLog.astro', featured: true,
    description: 'Daily site work log (cuaderno de bitácora): meteorological conditions, active trade workers per subcontractor, material deliveries with tickets, and safety notes.',
    tags: ['construction', 'log', 'diary', 'safety', 'trades', 'inspections', 'subcontractors'],
    usage: `<ConstructionDailyLog log={siteDailyLogs[0]} />` }),
  item({ slug: 'construction-budget-estimator', name: 'Construction Budget Estimator', file: 'ConstructionBudgetEstimator.astro', featured: true,
    description: 'Technical construction cost estimator: calculate PEM, PEC, architect fees, licenses and timeline duration based on m² and building typology.',
    tags: ['construction', 'calculator', 'budget', 'pem', 'pec', 'estimator', 'pricing'],
    usage: `<ConstructionBudgetEstimator defaultM2={350} contactHref="/preview/construction/contact" />` }),
];
