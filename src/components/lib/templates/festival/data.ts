// src/components/lib/templates/festival/data.ts
// Demo data for "Sonora" · Music festival with line-up, timetable, tickets and a personal agenda.
// Replace with your own CMS / ticketing data; every page and component takes these shapes as props.

export type FestivalDayId = 'fri' | 'sat' | 'sun';

export interface FestivalDay {
  id: FestivalDayId;
  /** Short label, e.g. "Vie". */
  short: string;
  label: string;
  /** ISO date. */
  date: string;
  /** Display date, e.g. "16 jul". */
  display: string;
}

export interface FestivalStage {
  id: string;
  name: string;
  description: string;
  capacity: number;
  hue: number;
}

export interface FestivalArtist {
  id: string;
  name: string;
  genre: string;
  country: string;
  dayId: FestivalDayId;
  stageId: string;
  /** "HH:MM" 24 h, a time after midnight (e.g. 01:30) means the night of that day. */
  start: string;
  end: string;
  headliner?: boolean;
  bio: string;
  hue: number;
}

export interface FestivalTicket {
  id: string;
  name: string;
  tagline: string;
  /** Price in EUR. */
  price: number;
  /** Remaining units; 0 = sold out. */
  left: number;
  perks: string[];
  highlighted?: boolean;
  /** Days covered. */
  days: FestivalDayId[];
}

export interface FestivalAddon {
  id: string;
  name: string;
  price: number;
}

export interface FestivalFaq {
  q: string;
  a: string;
}

export interface FestivalRoutes {
  home: string;
  lineup: string;
  schedule: string;
  tickets: string;
  info: string;
  myFestival: string;
}

export const festivalRoutes: FestivalRoutes = {
  home: '/',
  lineup: '/cartel',
  schedule: '/horarios',
  tickets: '/entradas',
  info: '/info',
  myFestival: '/mi-sonora',
};

export const festivalDays: FestivalDay[] = [
  { id: 'fri', short: 'Vie', label: 'Viernes', date: '2027-07-16', display: '16 jul' },
  { id: 'sat', short: 'Sáb', label: 'Sábado', date: '2027-07-17', display: '17 jul' },
  { id: 'sun', short: 'Dom', label: 'Domingo', date: '2027-07-18', display: '18 jul' },
];

export const festivalStages: FestivalStage[] = [
  { id: 'sol', name: 'Escenario Sol', description: 'El principal, junto al lago. Pop, rock y electrónica en directo.', capacity: 24000, hue: 8 },
  { id: 'luna', name: 'Escenario Luna', description: 'Carpa cubierta con sonido envolvente. Indie, hip hop y R&B.', capacity: 9000, hue: 268 },
  { id: 'bosque', name: 'Bosque', description: 'Pista de baile entre pinos. Techno, house y sesiones de amanecer.', capacity: 5000, hue: 98 },
];

export const festivalArtists: FestivalArtist[] = [
  { id: 'a1', name: 'Marea Roja', genre: 'Pop alternativo', country: 'ES', dayId: 'fri', stageId: 'sol', start: '23:30', end: '01:00', headliner: true, bio: 'Cuarteto de Valencia que llena estadios con sintetizadores y letras en valenciano.', hue: 6 },
  { id: 'a2', name: 'Noa Kerr', genre: 'Indie folk', country: 'IE', dayId: 'fri', stageId: 'luna', start: '21:00', end: '22:15', bio: 'Voz íntima de Cork y guitarras de madera; presenta su tercer disco.', hue: 30 },
  { id: 'a3', name: 'Kōdai', genre: 'Techno', country: 'JP', dayId: 'fri', stageId: 'bosque', start: '00:00', end: '02:30', bio: 'Residente de Tokio con sets hipnóticos de dos horas y media.', hue: 120 },
  { id: 'a4', name: 'La Última Ola', genre: 'Rock', country: 'ES', dayId: 'fri', stageId: 'sol', start: '20:30', end: '21:45', bio: 'Rock de guitarras con himnos de verano desde Cádiz.', hue: 200 },
  { id: 'a5', name: 'Sable', genre: 'R&B', country: 'UK', dayId: 'fri', stageId: 'luna', start: '23:00', end: '00:15', bio: 'Londres, voces en capas y producción minimalista.', hue: 290 },
  { id: 'a6', name: 'Orquesta Marfil', genre: 'Latin disco', country: 'CO', dayId: 'fri', stageId: 'bosque', start: '21:30', end: '23:00', bio: 'Quince músicos y una sola idea: bailar hasta que salga el sol.', hue: 50 },
  { id: 'a7', name: 'Helena Vox', genre: 'Electropop', country: 'SE', dayId: 'sat', stageId: 'sol', start: '23:45', end: '01:15', headliner: true, bio: 'La gran revelación escandinava; espectáculo audiovisual con 40 pantallas.', hue: 320 },
  { id: 'a8', name: 'Dos Veranos', genre: 'Indie pop', country: 'ES', dayId: 'sat', stageId: 'sol', start: '21:15', end: '22:30', bio: 'Dúo madrileño de estribillos pegadizos y bajos saltarines.', hue: 160 },
  { id: 'a9', name: 'Blackwater Choir', genre: 'Hip hop', country: 'US', dayId: 'sat', stageId: 'luna', start: '22:30', end: '00:00', headliner: true, bio: 'Colectivo de Atlanta con banda en directo y coro gospel.', hue: 250 },
  { id: 'a10', name: 'Pía Montalvo', genre: 'Neo soul', country: 'AR', dayId: 'sat', stageId: 'luna', start: '20:00', end: '21:15', bio: 'Soul de Buenos Aires con cuerdas y vientos.', hue: 20 },
  { id: 'a11', name: 'Lindqvist', genre: 'House', country: 'DE', dayId: 'sat', stageId: 'bosque', start: '01:00', end: '03:30', bio: 'Berlín, groove cálido y sets largos que cierran la noche.', hue: 110 },
  { id: 'a12', name: 'Amanecer Colectivo', genre: 'Downtempo', country: 'PT', dayId: 'sat', stageId: 'bosque', start: '05:00', end: '07:00', bio: 'La sesión de amanecer: electrónica suave mientras sale el sol.', hue: 70 },
  { id: 'a13', name: 'Los Cometas', genre: 'Rock clásico', country: 'MX', dayId: 'sun', stageId: 'sol', start: '22:30', end: '00:15', headliner: true, bio: 'Cuarenta años de carretera. Cierran el festival con todos sus himnos.', hue: 40 },
  { id: 'a14', name: 'Yara', genre: 'Afrobeats', country: 'NG', dayId: 'sun', stageId: 'luna', start: '21:00', end: '22:15', bio: 'Percusión, metales y baile desde Lagos.', hue: 140 },
  { id: 'a15', name: 'Iris & Bruma', genre: 'Dream pop', country: 'FR', dayId: 'sun', stageId: 'sol', start: '19:30', end: '20:45', bio: 'Paisajes sonoros para el atardecer junto al lago.', hue: 230 },
  { id: 'a16', name: 'Tomás Rey', genre: 'Cantautor', country: 'ES', dayId: 'sun', stageId: 'luna', start: '19:00', end: '20:15', bio: 'Letras que se cantan a coro, guitarra y voz.', hue: 0 },
  { id: 'a17', name: 'Nube Negra', genre: 'Drum & bass', country: 'UK', dayId: 'sun', stageId: 'bosque', start: '23:00', end: '01:00', bio: 'Graves que se sienten en el pecho, directo desde Bristol.', hue: 180 },
  { id: 'a18', name: 'Coral del Sur', genre: 'Flamenco fusión', country: 'ES', dayId: 'sun', stageId: 'bosque', start: '20:30', end: '22:00', bio: 'Palmas, cajón y sintetizador en una misma tarima.', hue: 15 },
];

export const festivalTickets: FestivalTicket[] = [
  { id: 'day', name: 'Abono de un día', tagline: 'Elige tu jornada', price: 69, left: 1840, days: ['fri'], perks: ['Acceso a los 3 escenarios', 'Un día a elegir', 'Pulsera sin contacto'] },
  { id: 'full', name: 'Abono 3 días', tagline: 'La experiencia completa', price: 165, left: 312, highlighted: true, days: ['fri', 'sat', 'sun'], perks: ['Los 3 días, todos los escenarios', 'Entrada rápida', 'Recarga de vaso reutilizable', 'Acceso a la sesión de amanecer'] },
  { id: 'vip', name: 'VIP', tagline: 'Zona elevada y sin colas', price: 340, left: 0, days: ['fri', 'sat', 'sun'], perks: ['Zona VIP frente a Escenario Sol', 'Barras y baños exclusivos', 'Acceso al backstage ambient', 'Parking incluido'] },
];

export const festivalAddons: FestivalAddon[] = [
  { id: 'camping', name: 'Camping (3 noches)', price: 45 },
  { id: 'bus', name: 'Autobús lanzadera ida y vuelta', price: 18 },
  { id: 'cup', name: 'Pack vaso reutilizable', price: 6 },
];

export const festivalFaq: FestivalFaq[] = [
  { q: '¿Puedo devolver mi entrada?', a: 'Sí, hasta 30 días antes del festival con un 100% de reembolso. Después puedes ceder tu abono a otra persona desde tu cuenta.' },
  { q: '¿Hay zona de acampada?', a: 'Sí. El camping abre el jueves a las 12:00, tiene duchas, carga de móviles y vigilancia 24 horas. Se añade como extra al comprar.' },
  { q: '¿Qué puedo llevar al recinto?', a: 'Bolsos pequeños, cantimploras vacías y protección solar. No se admiten botellas de cristal, cámaras profesionales ni objetos punzantes.' },
  { q: '¿Es accesible?', a: 'El recinto tiene plataformas elevadas, baños adaptados, pasarelas y un punto de atención. Escríbenos para reservar tu acompañante gratis.' },
  { q: '¿Cómo llego al festival?', a: 'Hay lanzaderas desde las estaciones de la ciudad cada 20 minutos y un parking disuasorio. En coche son 35 minutos desde el centro.' },
];

export const festivalSponsors: string[] = ['Cervezas Altamar', 'Nova Mobile', 'Radio Frecuencia', 'Eco Cups', 'Rutas Verdes', 'Sonic Gear', 'Banco Litoral', 'Agua Fuente Clara'];

export const festivalData = {
  brand: {
    name: 'Sonora',
    legalName: 'Sonora Festival S.L.',
    tagline: 'Tres días de música junto al lago',
    phone: '+34 960 330 210',
    email: 'hola@sonora.example',
    address: 'Parque del Lago · Camino de la Albufera s/n, 46012 Valencia',
    hours: 'Atención L–V 10:00–18:00',
  },
  /** ISO date-time of the opening, used by the countdown. */
  startsAt: '2027-07-16T16:00:00+02:00',
  venue: 'Parque del Lago, Valencia',
  dateRange: '16–18 julio 2027',
  stats: [
    { value: '60+', label: 'artistas' },
    { value: '3', label: 'escenarios' },
    { value: '45.000', label: 'asistentes por edición' },
  ],
  days: festivalDays,
  stages: festivalStages,
  artists: festivalArtists,
  tickets: festivalTickets,
  addons: festivalAddons,
  faq: festivalFaq,
  sponsors: festivalSponsors,
};

export function getFestivalDay(id: string, list: FestivalDay[] = festivalDays): FestivalDay | undefined {
  return list.find((d) => d.id === id);
}

export function getFestivalStage(id: string, list: FestivalStage[] = festivalStages): FestivalStage | undefined {
  return list.find((s) => s.id === id);
}

/** Minutes since 12:00 of the festival day, so after-midnight sets sort after evening ones. */
export function festivalSortKey(time: string): number {
  const [h, m] = time.split(':').map(Number);
  const mins = h * 60 + m;
  return mins < 12 * 60 ? mins + 24 * 60 : mins;
}

export function festivalByTime(list: FestivalArtist[]): FestivalArtist[] {
  return [...list].sort((a, b) => festivalSortKey(a.start) - festivalSortKey(b.start));
}

export function formatFestivalPrice(price: number): string {
  return price === 0 ? 'Gratis' : `${price} €`;
}
