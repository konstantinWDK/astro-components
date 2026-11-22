/**
 * Data and types for the "Lumbre" restaurant template.
 * Every page and component reads from here, so you can swap it for your own menu, tables,
 * reservations and customer without touching markup.
 */

export interface RestRoutes {
  home: string;
  menu: string;
  origin: string;
  reserve: string;
  signIn: string;
  dashboard: string;
  reservations: string;
  preferences: string;
}

export interface RestCourse {
  id: string;
  number: number;
  name: string;
  text: string;
  ingredients: string[];
  pairing: string;
  temperature: string;
  km: number;
  /** Three colours that paint the generated plate: plate food, sauce and garnish. */
  palette: [string, string, string];
  /** Seeds the generated arrangement on the plate. */
  seed: number;
  style: 'swoosh' | 'stack' | 'scatter' | 'bowl';
}

export type RestDiet = 'vegetariano' | 'vegano' | 'sin gluten';

export interface RestDish {
  id: string;
  name: string;
  text: string;
  price: number;
  section: 'Para empezar' | 'A la brasa' | 'Postres';
  diet: RestDiet[];
  soldOut?: boolean;
}

export interface RestProducer {
  id: string;
  name: string;
  product: string;
  place: string;
  km: number;
  text: string;
}

export type RestZone = 'Barra' | 'Sala' | 'Patio';

export interface RestTable {
  id: string;
  name: string;
  seats: number;
  zone: RestZone;
  x: number;
  y: number;
  shape: 'round' | 'rect';
}

export interface RestFaq {
  q: string;
  a: string;
}

export interface RestMember {
  id: string;
  name: string;
  email: string;
  since: string;
  visits: number;
  tier: string;
}

export interface RestReservation {
  id: string;
  date: string;
  time: string;
  guests: number;
  tableId: string;
  menu: 'Menú degustación' | 'Carta';
  status: 'Confirmada' | 'Pendiente' | 'Completada' | 'Cancelada';
  note?: string;
}

export interface RestPreferences {
  allergies: string[];
  diet: string;
  zone: RestZone | 'Indiferente';
  chefNote: string;
  celebrations: Array<{ label: string; date: string }>;
}

export interface RestGiftCard {
  code: string;
  balance: number;
  expires: string;
}

export interface RestStat {
  value: string;
  label: string;
}

export const restRoutes: RestRoutes = {
  home: '/',
  menu: '/menu',
  origin: '/origen',
  reserve: '/reservar',
  signIn: '/acceso',
  dashboard: '/mesa',
  reservations: '/mesa/reservas',
  preferences: '/mesa/preferencias',
};

export const restBrand = {
  name: 'Lumbre',
  tagline: 'Cocina a la brasa de autor',
  address: 'Calle de la Palma 22, 28004 Madrid',
  phone: '+34 910 000 422',
  email: 'mesa@lumbre.example',
  hours: 'Miércoles a domingo · 13:30–15:30 y 20:30–23:00',
};

export const restStats: RestStat[] = [
  { value: '26', label: 'comensales por servicio' },
  { value: '1', label: 'brasa, encendida desde las 9' },
  { value: '125 km', label: 'distancia media de cada producto' },
];

export const restCourses: RestCourse[] = [
  { id: 'c1', number: 1, name: 'Cebolla quemada', text: 'Una cebolla dulce cocinada entera entre brasas hasta que la piel es ceniza. Se come con una nata ahumada y su propio caldo.', ingredients: ['Cebolla de Fuentes', 'Nata ahumada', 'Caldo de piel de cebolla', 'Hierbas de la brasa'], pairing: 'Fino en rama, Montilla', temperature: 'Servida a 58 °C', km: 41, palette: ['#d9a35a', '#f2e4cb', '#5d7a3e'], seed: 11, style: 'bowl' },
  { id: 'c2', number: 2, name: 'Alcachofa y anchoa', text: 'Alcachofa de Tudela asada en su propia hoja, con anchoa del Cantábrico curada en casa y un aceite de cenizas.', ingredients: ['Alcachofa de Tudela', 'Anchoa de Santoña', 'Aceite de cenizas', 'Limón en sal'], pairing: 'Txakoli de Getaria', temperature: 'Servida a 46 °C', km: 310, palette: ['#8f9a5b', '#e8d9a4', '#2d2a22'], seed: 23, style: 'stack' },
  { id: 'c3', number: 3, name: 'Yema curada', text: 'Una yema curada cuarenta días en sal y azúcar, rallada sobre un puré de patata ahumada y un fondo de mantequilla tostada.', ingredients: ['Yema de gallina de corral', 'Patata de Valdeolea', 'Mantequilla tostada', 'Cebollino'], pairing: 'Albariño con crianza', temperature: 'Servida a 52 °C', km: 28, palette: ['#e8b94a', '#f0e6d3', '#8a6f3b'], seed: 37, style: 'swoosh' },
  { id: 'c4', number: 4, name: 'Calabaza al carbón', text: 'Calabaza asada al carbón durante tres horas hasta caramelizar, con un salado de miso de garbanzo y semillas tostadas.', ingredients: ['Calabaza de la Sierra Norte', 'Miso de garbanzo', 'Pipas de calabaza', 'Aceite de laurel'], pairing: 'Amontillado joven', temperature: 'Servida a 60 °C', km: 54, palette: ['#d9742c', '#f3c88b', '#4d5a2c'], seed: 41, style: 'scatter' },
  { id: 'c5', number: 5, name: 'Merluza sobre la parrilla', text: 'Merluza de pincho cocinada sobre una sola brasa de encina, con un caldo corto de sus espinas y berros.', ingredients: ['Merluza de pincho', 'Caldo de espinas', 'Berros', 'Aceite de encina'], pairing: 'Godello sobre lías', temperature: 'Servida a 62 °C', km: 540, palette: ['#e8e2d2', '#9db8a4', '#3e5a49'], seed: 53, style: 'swoosh' },
  { id: 'c6', number: 6, name: 'Cordero lechal', text: 'Costilla de lechal de Guadarrama lacada con su jugo y servida con un puré de ajo negro y cardillo.', ingredients: ['Lechal de Guadarrama', 'Ajo negro', 'Cardillo', 'Jugo de brasa'], pairing: 'Tinto de Gredos', temperature: 'Servido a 64 °C', km: 62, palette: ['#a8552f', '#3a2a22', '#c9a26b'], seed: 67, style: 'stack' },
  { id: 'c7', number: 7, name: 'Queso y membrillo asado', text: 'Un queso de oveja curado en cueva, templado junto a la brasa, con membrillo asado y una infusión de hoja de higuera.', ingredients: ['Queso de oveja de cueva', 'Membrillo asado', 'Hoja de higuera', 'Miel de brezo'], pairing: 'Oloroso dulce', temperature: 'Servido a 38 °C', km: 120, palette: ['#e6c98a', '#a8442f', '#6a7a3a'], seed: 71, style: 'bowl' },
  { id: 'c8', number: 8, name: 'Helado de brasa', text: 'Helado de leche ahumada sobre una cama de cenizas de pan, con aceite de oliva verde y sal en escamas.', ingredients: ['Leche ahumada', 'Pan de ceniza', 'Aceite de oliva verde', 'Sal en escamas'], pairing: 'Café de filtro o Pedro Ximénez', temperature: 'Servido a −8 °C', km: 18, palette: ['#f0e9dc', '#2a2420', '#b9c27a'], seed: 83, style: 'scatter' },
];

export const restDishes: RestDish[] = [
  { id: 'd1', name: 'Pan de masa madre y mantequilla de brasa', text: 'Horneado cada mañana en la propia brasa.', price: 5, section: 'Para empezar', diet: ['vegetariano'] },
  { id: 'd2', name: 'Tomate de huerta con sal ahumada', text: 'Tomate de agosto, aceite verde y su sal.', price: 14, section: 'Para empezar', diet: ['vegano', 'sin gluten'] },
  { id: 'd3', name: 'Croqueta de cocido', text: 'La de siempre, pero con la sopa de la noche anterior.', price: 3.5, section: 'Para empezar', diet: [] },
  { id: 'd4', name: 'Puerro a la brasa con romesco', text: 'Entero, quemado por fuera y tierno por dentro.', price: 12, section: 'Para empezar', diet: ['vegano', 'sin gluten'] },
  { id: 'd5', name: 'Chuletón de vaca madurada', text: 'Cuarenta días de maduración, por kilo, para compartir.', price: 78, section: 'A la brasa', diet: ['sin gluten'] },
  { id: 'd6', name: 'Lubina entera a la parrilla', text: 'Con ajada suave y escabeche de cítricos.', price: 34, section: 'A la brasa', diet: ['sin gluten'] },
  { id: 'd7', name: 'Setas de temporada y yema', text: 'Cocinadas en cazuela de hierro sobre la brasa.', price: 22, section: 'A la brasa', diet: ['vegetariano', 'sin gluten'], soldOut: true },
  { id: 'd8', name: 'Pollo de corral en dos tiempos', text: 'Pechuga rosada y muslo confitado, jugo de brasa.', price: 26, section: 'A la brasa', diet: ['sin gluten'] },
  { id: 'd9', name: 'Tarta de queso quemada', text: 'La que se cuece al borde de la brasa.', price: 9, section: 'Postres', diet: ['vegetariano'] },
  { id: 'd10', name: 'Manzana asada, nata y canela', text: 'Una manzana entera, a fuego lento toda la tarde.', price: 8, section: 'Postres', diet: ['vegetariano', 'sin gluten'] },
  { id: 'd11', name: 'Sorbete de limón y hierbabuena', text: 'Para despejar el paladar.', price: 6, section: 'Postres', diet: ['vegano', 'sin gluten'] },
];

export const restProducers: RestProducer[] = [
  { id: 'p1', name: 'Huerta de Fuentes', product: 'Cebollas y verduras', place: 'Fuentes de la Alcarria', km: 41, text: 'Tres hectáreas con riego por goteo. Las cebollas llegan con tierra y las pelamos nosotros.' },
  { id: 'p2', name: 'Cabañas de Guadarrama', product: 'Cordero lechal', place: 'Guadarrama', km: 62, text: 'Una familia con 300 ovejas que no vende a nadie más en Madrid.' },
  { id: 'p3', name: 'Gallinas de Santorcaz', product: 'Huevos y pollo', place: 'Santorcaz', km: 38, text: 'Cuarenta gallinas por gallinero y mucho campo. Las yemas son casi naranjas.' },
  { id: 'p4', name: 'Quesería La Cueva', product: 'Queso de oveja', place: 'Sierra Norte', km: 120, text: 'Curado en una cueva a 11 °C. Solo hacen 60 quesos a la semana.' },
  { id: 'p5', name: 'Lonja de Santoña', product: 'Anchoas y pescado', place: 'Cantabria', km: 405, text: 'La única distancia larga de la carta. La compensamos con un solo camión semanal.' },
  { id: 'p6', name: 'Leña de encina de Cadalso', product: 'Leña y carbón', place: 'Cadalso de los Vidrios', km: 83, text: 'Encina seca de dos años de la sierra. Es el ingrediente que más se nota.' },
];

export const restTables: RestTable[] = [
  { id: 'b1', name: 'Barra 1', seats: 2, zone: 'Barra', x: 70, y: 70, shape: 'round' },
  { id: 'b2', name: 'Barra 2', seats: 2, zone: 'Barra', x: 70, y: 130, shape: 'round' },
  { id: 'b3', name: 'Barra 3', seats: 2, zone: 'Barra', x: 70, y: 190, shape: 'round' },
  { id: 's1', name: 'Sala 1', seats: 4, zone: 'Sala', x: 200, y: 80, shape: 'rect' },
  { id: 's2', name: 'Sala 2', seats: 4, zone: 'Sala', x: 200, y: 180, shape: 'rect' },
  { id: 's3', name: 'Sala 3', seats: 2, zone: 'Sala', x: 300, y: 80, shape: 'round' },
  { id: 's4', name: 'Sala 4', seats: 6, zone: 'Sala', x: 310, y: 190, shape: 'rect' },
  { id: 'p1', name: 'Patio 1', seats: 4, zone: 'Patio', x: 430, y: 90, shape: 'round' },
  { id: 'p2', name: 'Patio 2', seats: 2, zone: 'Patio', x: 430, y: 170, shape: 'round' },
];

export const restSlots = ['13:30', '14:00', '14:30', '20:30', '21:00', '21:30'];

export const restFaqs: RestFaq[] = [
  { q: '¿Qué días abrís?', a: 'De miércoles a domingo, con dos turnos: comida a las 13:30 y 14:30 y cena a las 20:30 y 21:30. Lunes y martes cerramos para encender la brasa con calma.' },
  { q: '¿Puedo reservar la mesa que quiero?', a: 'Sí. En la página de reservas ves el plano de la sala y eliges mesa. Si prefieres que lo decidamos nosotros, dejas la zona en "Indiferente".' },
  { q: '¿Cómo funciona el menú degustación?', a: 'Son ocho pases y dura unas dos horas y media. Se pide para toda la mesa. Avísanos de alergias al reservar, ya que cambiamos pases sin coste.' },
  { q: '¿Tenéis opción vegetariana?', a: 'La carta tiene platos vegetarianos y veganos, y el menú degustación tiene versión vegetariana con 48 horas de aviso.' },
  { q: '¿Qué pasa si no puedo ir?', a: 'Puedes cancelar sin coste hasta 24 horas antes desde tu cuenta. Después cobramos 20 € por persona para cubrir el producto.' },
];

export const restMember: RestMember = {
  id: 'LUM-0156',
  name: 'Álex Beltrán',
  email: 'alex.beltran@example.com',
  since: '2024-02-17',
  visits: 7,
  tier: 'Cliente de la casa',
};

export const restReservations: RestReservation[] = [
  { id: 'R-3021', date: '2026-12-04', time: '21:00', guests: 4, tableId: 's2', menu: 'Menú degustación', status: 'Confirmada', note: 'Cumpleaños de Marina. Una persona sin gluten.' },
  { id: 'R-2988', date: '2026-12-19', time: '14:00', guests: 2, tableId: 'p2', menu: 'Carta', status: 'Pendiente' },
  { id: 'R-2710', date: '2026-10-09', time: '21:30', guests: 2, tableId: 'b2', menu: 'Menú degustación', status: 'Completada' },
  { id: 'R-2455', date: '2026-07-18', time: '14:30', guests: 6, tableId: 's4', menu: 'Carta', status: 'Completada' },
  { id: 'R-2301', date: '2026-05-02', time: '20:30', guests: 2, tableId: 's3', menu: 'Menú degustación', status: 'Cancelada' },
];

export const restPreferences: RestPreferences = {
  allergies: ['Frutos secos'],
  diet: 'Sin restricciones',
  zone: 'Sala',
  chefNote: 'Prefiero los pases ahumados antes que los dulces.',
  celebrations: [{ label: 'Cumpleaños de Marina', date: '2026-12-04' }],
};

export const restGiftCards: RestGiftCard[] = [
  { code: 'LUM-6F2K-91AD', balance: 120, expires: '2027-09-30' },
  { code: 'LUM-A83C-55QP', balance: 40, expires: '2027-03-14' },
];

export const restData = {
  brand: restBrand,
  stats: restStats,
  courses: restCourses,
  dishes: restDishes,
  producers: restProducers,
  tables: restTables,
  slots: restSlots,
  faqs: restFaqs,
  member: restMember,
  reservations: restReservations,
  preferences: restPreferences,
  giftCards: restGiftCards,
};

export function restMoney(n: number): string {
  return `${n.toLocaleString('es-ES', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 })} €`;
}

export function restTableById(id: string, list: RestTable[] = restTables): RestTable | undefined {
  return list.find((t) => t.id === id);
}

/** Small deterministic hash so the demo availability is stable for a date and time. */
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) % 100;
}

/** Closed on Monday and Tuesday. */
export function restIsClosed(date: string): boolean {
  const d = new Date(`${date}T12:00:00`).getDay();
  return d === 1 || d === 2;
}

/** True when a table is free for that date and time (demo: ~35% are taken). */
export function restTableFree(tableId: string, date: string, time: string): boolean {
  if (restIsClosed(date)) return false;
  return hash(`${tableId}|${date}|${time}`) >= 35;
}

/** Seeded random generator (mulberry32) used by the generated plates. */
export function restRng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
