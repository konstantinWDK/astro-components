// src/components/lib/templates/saas-hotel/data.ts
// Demo data for the hotel SaaS template ("Lobby · Hotel OS" with the Hotel Mirador workspace).
// Replace with your API data; every page reads from this shape.

export interface SaasRoutes {
  landing: string;
  signIn: string;
  dashboard: string;
  reservations: string;
  rooms: string;
  guests: string;
  reports: string;
  settings: string;
}

export const saasRoutes: SaasRoutes = {
  landing: '/',
  signIn: '/sign-in/',
  dashboard: '/app/',
  reservations: '/app/reservations/',
  rooms: '/app/rooms/',
  guests: '/app/guests/',
  reports: '/app/reports/',
  settings: '/app/settings/',
};

type Status = 'Confirmed' | 'Checked in' | 'Checked out' | 'Pending' | 'Cancelled';
type RoomStatus = 'clean' | 'dirty' | 'inspecting' | 'occupied' | 'ooo';

const GUESTS = [
  ['Elena Duarte', 'Spain'], ['James Whitfield', 'UK'], ['Aiko Tanaka', 'Japan'], ['Marco Bellini', 'Italy'],
  ['Sofía Ramos', 'Mexico'], ['Hans Müller', 'Germany'], ['Priya Nair', 'India'], ['The Okafor family', 'Nigeria'],
  ['Chloé Martin', 'France'], ['Tom Becker', 'Austria'], ['Ana Costa', 'Portugal'], ['Liam O’Connor', 'Ireland'],
  ['Mei Chen', 'Singapore'], ['Lucas Silva', 'Brazil'], ['Nora Lindqvist', 'Sweden'], ['David Cohen', 'USA'],
] as const;
const CHANNELS = ['Direct', 'Booking.com', 'Expedia', 'Airbnb', 'Direct', 'Booking.com'];
const PRICES: Record<string, number> = { Standard: 118, Deluxe: 176, Suite: 312 };

const rooms = [
  ...['101', '102', '103', '104', '105', '106'].map((n) => ({ id: n, name: n, type: 'Standard', floor: 'Floor 1' })),
  ...['201', '202', '203', '204', '205', '206'].map((n) => ({ id: n, name: n, type: 'Deluxe', floor: 'Floor 2' })),
  ...['301', '302', '303', '304'].map((n) => ({ id: n, name: n, type: 'Suite', floor: 'Floor 3' })),
];

/** Day labels starting yesterday (built at build time; demo data only). */
function buildDays(count: number, locale: string): { labels: string[]; iso: string[] } {
  const start = new Date();
  start.setUTCHours(0, 0, 0, 0);
  start.setUTCDate(start.getUTCDate() - 1);
  const fmt = new Intl.DateTimeFormat(locale, { weekday: 'short', day: 'numeric', timeZone: 'UTC' });
  const labels: string[] = [];
  const iso: string[] = [];
  for (let i = 0; i < count; i++) {
    const d = new Date(start);
    d.setUTCDate(start.getUTCDate() + i);
    labels.push(fmt.format(d).replace(',', ''));
    iso.push(d.toISOString().slice(0, 10));
  }
  return { labels, iso };
}

const locale = 'en-GB';
const days = buildDays(14, locale);

// Deterministic bookings across the rack.
const rackBookings = [
  ['101', 0, 3, 'checked-in'], ['101', 4, 2, 'confirmed'], ['101', 8, 4, 'pending'],
  ['102', 1, 5, 'confirmed'], ['102', 7, 3, 'confirmed'],
  ['103', 0, 2, 'checked-in'], ['103', 3, 6, 'confirmed'],
  ['104', 2, 2, 'blocked'], ['104', 5, 4, 'confirmed'],
  ['105', 0, 4, 'checked-in'], ['105', 6, 3, 'pending'], ['105', 10, 3, 'confirmed'],
  ['106', 1, 2, 'confirmed'], ['106', 4, 5, 'confirmed'],
  ['201', 0, 6, 'checked-in'], ['201', 7, 2, 'confirmed'],
  ['202', 2, 3, 'confirmed'], ['202', 6, 5, 'pending'],
  ['203', 0, 1, 'checked-in'], ['203', 3, 4, 'confirmed'], ['203', 9, 3, 'confirmed'],
  ['204', 1, 3, 'confirmed'], ['204', 5, 2, 'blocked'],
  ['205', 0, 3, 'checked-in'], ['205', 4, 4, 'confirmed'],
  ['206', 2, 6, 'confirmed'],
  ['301', 1, 6, 'confirmed'], ['301', 9, 3, 'pending'],
  ['302', 0, 2, 'checked-in'], ['302', 4, 4, 'confirmed'],
  ['303', 3, 3, 'confirmed'],
  ['304', 0, 5, 'checked-in'], ['304', 8, 4, 'confirmed'],
] as const;

const bookings = rackBookings.map(([room, start, nights, status], i) => {
  const [guest] = GUESTS[i % GUESTS.length];
  return { room, guest: status === 'blocked' ? 'Maintenance' : guest, start, nights, status, ref: status === 'blocked' ? undefined : `MR-${2810 + i}`, channel: status === 'blocked' ? undefined : CHANNELS[i % CHANNELS.length] };
});

const tableStatus = (s: string, i: number): Status =>
  s === 'checked-in' ? 'Checked in' : s === 'pending' ? 'Pending' : i % 9 === 4 ? 'Cancelled' : 'Confirmed';

const reservations = bookings
  .filter((b) => b.status !== 'blocked')
  .map((b, i) => {
    const room = rooms.find((r) => r.id === b.room)!;
    const st = tableStatus(b.status, i);
    return {
      ref: b.ref!,
      guest: { name: b.guest, sub: b.channel },
      room: `${room.name} · ${room.type}`,
      checkIn: days.iso[b.start],
      nights: b.nights,
      status: st,
      total: st === 'Cancelled' ? 0 : b.nights * PRICES[room.type],
    };
  });

const housekeeping: Array<{ number: string; floor: string; type: string; status: RoomStatus; guest?: string; note?: string; assignee?: string }> = rooms.map((r, i) => {
  const occ = bookings.find((b) => b.room === r.id && b.status === 'checked-in');
  const cycle: RoomStatus[] = ['clean', 'dirty', 'inspecting', 'clean', 'dirty'];
  if (r.id === '104') return { number: r.name, floor: r.floor, type: r.type, status: 'ooo', note: 'Plumbing repair' };
  if (occ) return { number: r.name, floor: r.floor, type: r.type, status: 'occupied', guest: occ.guest.split(' ').slice(-1)[0] };
  const status = cycle[i % cycle.length];
  return { number: r.name, floor: r.floor, type: r.type, status, assignee: status !== 'clean' ? ['Rosa', 'Luis', 'Inés'][i % 3] : undefined };
});

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const lobbyData = {
  product: 'Lobby',
  workspace: { name: 'Hotel Mirador', plan: 'Pro plan', initials: 'HM' },
  user: { name: 'Lucía Ortega', role: 'General manager', email: 'lucia@mirador.com' },
  currency: 'EUR',
  locale,
  days: days.labels,
  rooms,
  bookings,
  reservations,
  housekeeping,
  kpis: [
    { label: 'Occupancy', value: '84%', change: 6.2, trend: [62, 66, 70, 68, 74, 78, 80, 84] },
    { label: 'ADR', value: '€168', change: 3.4, trend: [150, 152, 158, 155, 160, 162, 165, 168] },
    { label: 'RevPAR', value: '€141', change: 9.1, trend: [98, 104, 110, 106, 118, 124, 132, 141] },
    { label: 'Cancellations', value: '3.1%', change: -1.2, invert: true, trend: [5, 4.6, 4.8, 4.1, 3.9, 3.6, 3.4, 3.1] },
  ],
  revenue: {
    categories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'],
    series: [
      { name: 'Rooms', data: [38, 41, 39, 44, 47, 52, 49, 55, 58, 61, 57, 64] },
      { name: 'F&B', data: [9, 10, 9, 11, 12, 13, 12, 14, 15, 16, 15, 17] },
      { name: 'Spa & extras', data: [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9] },
    ],
  },
  occupancyByType: {
    categories: months.slice(4, 11),
    series: [
      { name: 'Standard', data: [72, 78, 88, 91, 84, 76, 81] },
      { name: 'Deluxe', data: [64, 71, 85, 89, 79, 70, 77] },
      { name: 'Suite', data: [48, 55, 74, 80, 66, 58, 63] },
    ],
  },
  channels: [
    { label: 'Direct', value: 38 },
    { label: 'Booking.com', value: 31 },
    { label: 'Expedia', value: 17 },
    { label: 'Airbnb', value: 9 },
    { label: 'Corporate', value: 5 },
  ],
  forecast: {
    categories: ['Oct 28', 'Oct 31', 'Nov 3', 'Nov 6', 'Nov 9', 'Nov 12', 'Nov 15', 'Nov 18', 'Nov 21', 'Nov 24'],
    actual: [71, 74, 80, 84],
    forecast: [84, 82, 79, 86, 91, 88, 76, 72],
  },
  pace: {
    rows: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    columns: ['0–7d', '8–14d', '15–30d', '31–60d', '61–90d', '90d+'],
    values: [
      [12, 9, 14, 8, 4, 2], [10, 8, 12, 7, 3, 2], [11, 10, 13, 9, 4, 3], [14, 12, 15, 10, 6, 3],
      [22, 18, 20, 14, 9, 5], [26, 21, 22, 16, 10, 6], [15, 11, 12, 8, 5, 3],
    ],
  },
  funnel: [
    { label: 'Website visits', value: 18400 },
    { label: 'Searched dates', value: 7350 },
    { label: 'Viewed rooms', value: 3920 },
    { label: 'Started booking', value: 1180 },
    { label: 'Booked', value: 612 },
  ],
  segments: [
    { label: 'Leisure', value: 46 },
    { label: 'Business', value: 28 },
    { label: 'Groups', value: 14 },
    { label: 'Long stay', value: 12 },
  ],
  arrivals: [
    { guest: 'Elena Duarte', room: '204', time: '14:00', nights: 3, vip: true, note: 'Anniversary, late arrival' },
    { guest: 'Aiko Tanaka', room: '102', time: '15:30', nights: 5 },
    { guest: 'The Okafor family', room: '301', time: '16:00', nights: 6, note: 'Baby cot', done: true },
    { guest: 'David Cohen', room: '106', time: '18:45', nights: 2 },
  ],
  departures: [
    { guest: 'Hans Müller', room: '203', time: '11:00', balance: '€0', done: true },
    { guest: 'Priya Nair', room: '302', time: '12:00', balance: '€48' },
    { guest: 'Lucas Silva', room: '105', time: '12:00', balance: '€0' },
  ],
  inHouse: [
    { guest: 'James Whitfield', room: '201', until: days.labels[6] },
    { guest: 'Mei Chen', room: '304', until: days.labels[5] },
    { guest: 'Nora Lindqvist', room: '205', until: days.labels[3] },
  ],
  activity: [
    { title: 'Check-in completed', desc: 'The Okafor family · Suite 301', time: '09:42', status: 'done' as const },
    { title: 'Payment captured', desc: 'MR-2840 · €890 · Visa', time: '09:15', status: 'done' as const },
    { title: 'Room 104 out of order', desc: 'Plumbing — technician on site', time: '08:50', status: 'active' as const },
    { title: 'Rate update pushed', desc: 'Weekend +8% on all channels', time: '08:05', status: 'pending' as const },
  ],
  notifications: [
    { title: 'New booking from Booking.com', text: 'Deluxe King · 3 nights · €528', time: '2 min ago', unread: true, tone: 'success' as const },
    { title: 'Room 104 out of order', text: 'Plumbing repair scheduled', time: '1 h ago', unread: true, tone: 'warning' as const },
    { title: 'Weekly report ready', text: 'Occupancy up 6.2% vs last week', time: 'Yesterday', tone: 'info' as const },
  ],
  guests: GUESTS.slice(0, 12).map(([name, country], i) => ({
    guest: { name, sub: `${name.toLowerCase().replace(/[^a-z]+/g, '.').replace(/^\.|\.$/g, '')}@mail.com` },
    country,
    stays: [7, 3, 1, 2, 4, 9, 1, 2, 5, 1, 3, 6][i],
    spend: [4820, 2140, 476, 980, 1730, 6120, 290, 1880, 2410, 340, 1290, 3980][i],
    tier: ['Gold', 'Silver', 'Member', 'Member', 'Silver', 'Platinum', 'Member', 'Silver', 'Gold', 'Member', 'Silver', 'Gold'][i],
    tags: [['VIP', 'Anniversary'], ['Business'], ['First stay'], ['Repeat'], ['Spa'], ['VIP', 'Long stay'], [], ['Family'], ['Business'], [], ['Repeat'], ['VIP']][i],
  })),
  team: [
    { name: 'Lucía Ortega', email: 'lucia@mirador.com', role: 'Owner', status: 'active' as const, you: true },
    { name: 'Daniel Kim', email: 'daniel@mirador.com', role: 'Manager', status: 'active' as const },
    { name: 'Rosa Jiménez', email: 'rosa@mirador.com', role: 'Housekeeping', status: 'active' as const },
    { name: 'Omar Haddad', email: 'omar@mirador.com', role: 'Front desk', status: 'invited' as const },
  ],
};

export type LobbyData = typeof lobbyData;
