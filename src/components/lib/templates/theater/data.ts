/**
 * Data and types for the "Telón" theatre-ticket shop template.
 * Every page and component reads from here, so you can swap it for your own shows, sessions,
 * halls, customer and orders without touching markup.
 */

export interface TheaRoutes {
  home: string;
  shows: string;
  show: string;
  cart: string;
  signIn: string;
  dashboard: string;
  tickets: string;
  orders: string;
}

export type TheaGenre = 'Drama' | 'Musical' | 'Comedia' | 'Danza' | 'Infantil';

export interface TheaSession {
  id: string;
  date: string;
  time: string;
}

export interface TheaShow {
  id: string;
  title: string;
  genre: TheaGenre;
  venue: string;
  city: string;
  minutes: number;
  minAge: number;
  /** Base price in euros (stalls, centre). */
  price: number;
  text: string;
  director: string;
  cast: string[];
  sessions: TheaSession[];
  /** Three colours that paint the generated poster. */
  palette: [string, string, string];
  seed: number;
  style: 'curtain' | 'spot' | 'mask' | 'stage';
  rating: number;
}

export interface TheaSeat {
  id: string;
  row: string;
  num: number;
  zone: 'Patio' | 'Palco' | 'Anfiteatro';
  x: number;
  y: number;
}

export interface TheaFaq {
  q: string;
  a: string;
}

export interface TheaStat {
  value: string;
  label: string;
}

export interface TheaMember {
  id: string;
  name: string;
  email: string;
  since: string;
  tier: string;
}

export interface TheaCartLine {
  showId: string;
  sessionId: string;
  seats: string[];
}

export interface TheaTicket {
  id: string;
  showId: string;
  sessionId: string;
  seat: string;
  order: string;
  seed: number;
}

export interface TheaOrder {
  id: string;
  date: string;
  status: 'Confirmado' | 'Pendiente de pago' | 'Cancelado';
  lines: TheaCartLine[];
  total: number;
}

export interface TheaVenue {
  name: string;
  city: string;
  seats: number;
  text: string;
}

export const theaRoutes: TheaRoutes = {
  home: '/',
  shows: '/cartelera',
  show: '/espectaculo',
  cart: '/carrito',
  signIn: '/acceso',
  dashboard: '/cuenta',
  tickets: '/cuenta/entradas',
  orders: '/cuenta/pedidos',
};

export const theaBrand = {
  name: 'Telón',
  tagline: 'Entradas de teatro sin colas',
  address: 'Calle de la Montera 8, 28013 Madrid',
  phone: '+34 910 000 081',
  email: 'ayuda@telon.example',
  fee: 1.5,
};

export const theaStats: TheaStat[] = [
  { value: '38', label: 'salas con venta directa' },
  { value: '10 min', label: 'para pagar con tus butacas reservadas' },
  { value: '0 €', label: 'de gastos si cancelas 48 horas antes' },
];

export const theaShows: TheaShow[] = [
  { id: 'la-casa-de-bernarda', title: 'La casa de Bernarda Alba', genre: 'Drama', venue: 'Teatro Español', city: 'Madrid', minutes: 105, minAge: 12, price: 28, text: 'Lorca en una puesta en escena sin decorado: cinco mujeres, una sola puerta y un luto de ocho años.', director: 'Natalia Rueda', cast: ['Inma Cuesta', 'Pilar Castro', 'Carmen Machi'], sessions: [{ id: 's1', date: '2026-12-04', time: '20:00' }, { id: 's2', date: '2026-12-05', time: '19:00' }, { id: 's3', date: '2026-12-06', time: '18:00' }, { id: 's4', date: '2026-12-11', time: '20:00' }], palette: ['#8a1c1c', '#e8c27a', '#1a0d0d'], seed: 11, style: 'curtain', rating: 4.8 },
  { id: 'el-fantasma', title: 'El fantasma de la ópera', genre: 'Musical', venue: 'Teatro Lope de Vega', city: 'Madrid', minutes: 150, minAge: 7, price: 45, text: 'El musical de siempre con una lámpara de cristal de verdad y veinte músicos en directo.', director: 'Mario Gas', cast: ['Daniel Diges', 'Marina Prior'], sessions: [{ id: 's1', date: '2026-12-04', time: '20:30' }, { id: 's2', date: '2026-12-05', time: '17:00' }, { id: 's3', date: '2026-12-05', time: '21:00' }, { id: 's4', date: '2026-12-12', time: '20:30' }], palette: ['#4a1a6b', '#f1d58a', '#10071a'], seed: 23, style: 'mask', rating: 4.9 },
  { id: 'una-noche-en-el-bar', title: 'Una noche en el bar', genre: 'Comedia', venue: 'Teatro Alcázar', city: 'Madrid', minutes: 85, minAge: 16, price: 22, text: 'Cuatro amigos, una última ronda y la conversación que llevaban años aplazando.', director: 'Pablo Gómez', cast: ['Javier Gutiérrez', 'Ana Wagener'], sessions: [{ id: 's1', date: '2026-12-03', time: '21:00' }, { id: 's2', date: '2026-12-04', time: '22:00' }, { id: 's3', date: '2026-12-10', time: '21:00' }], palette: ['#c2581f', '#f6e3b4', '#241109'], seed: 37, style: 'spot', rating: 4.5 },
  { id: 'giselle', title: 'Giselle', genre: 'Danza', venue: 'Teatro de la Zarzuela', city: 'Madrid', minutes: 120, minAge: 6, price: 35, text: 'El ballet romántico por excelencia, con el cuerpo de baile completo y orquesta en el foso.', director: 'Aurora Pons', cast: ['Compañía Nacional de Danza'], sessions: [{ id: 's1', date: '2026-12-06', time: '19:00' }, { id: 's2', date: '2026-12-07', time: '19:00' }, { id: 's3', date: '2026-12-13', time: '18:00' }], palette: ['#d9d4ec', '#7a68b8', '#15121f'], seed: 41, style: 'stage', rating: 4.7 },
  { id: 'el-principito', title: 'El Principito', genre: 'Infantil', venue: 'Teatro Infanta Isabel', city: 'Madrid', minutes: 65, minAge: 4, price: 16, text: 'Teatro de sombras y marionetas para los más pequeños, con un asteroide que se puede tocar.', director: 'Leo Marín', cast: ['Compañía Títeres del Alba'], sessions: [{ id: 's1', date: '2026-12-05', time: '12:00' }, { id: 's2', date: '2026-12-06', time: '12:00' }, { id: 's3', date: '2026-12-13', time: '12:00' }], palette: ['#2b5f8a', '#f2c94c', '#0c1a26'], seed: 53, style: 'spot', rating: 4.6 },
  { id: 'hamlet', title: 'Hamlet', genre: 'Drama', venue: 'Teatro María Guerrero', city: 'Madrid', minutes: 170, minAge: 14, price: 30, text: 'Una versión de tres horas recortada a la mitad, con un solo actor y todos los personajes.', director: 'Calixto Bieito', cast: ['Blanca Portillo'], sessions: [{ id: 's1', date: '2026-12-04', time: '20:00' }, { id: 's2', date: '2026-12-11', time: '20:00' }, { id: 's3', date: '2026-12-18', time: '20:00' }], palette: ['#1f2933', '#c9d1d9', '#07090b'], seed: 67, style: 'curtain', rating: 4.8 },
  { id: 'chicago', title: 'Chicago', genre: 'Musical', venue: 'Teatro Calderón', city: 'Madrid', minutes: 135, minAge: 12, price: 40, text: 'Jazz, corrupción y dos asesinas que quieren ser famosas. Plumas, medias de rejilla y un guion afilado.', director: 'Ricard Reguant', cast: ['Nuria Fergó', 'Tamara Rojas'], sessions: [{ id: 's1', date: '2026-12-05', time: '20:00' }, { id: 's2', date: '2026-12-12', time: '20:00' }, { id: 's3', date: '2026-12-13', time: '19:00' }], palette: ['#b8182a', '#f4d38b', '#140507'], seed: 79, style: 'stage', rating: 4.6 },
  { id: 'monologos', title: 'Monólogos al límite', genre: 'Comedia', venue: 'Sala Mirador', city: 'Madrid', minutes: 90, minAge: 16, price: 18, text: 'Seis cómicos, quince minutos cada uno y un reloj que no perdona.', director: 'Varios', cast: ['Elenco rotativo'], sessions: [{ id: 's1', date: '2026-12-04', time: '22:30' }, { id: 's2', date: '2026-12-11', time: '22:30' }, { id: 's3', date: '2026-12-18', time: '22:30' }], palette: ['#7a3ea1', '#ffd36b', '#13081c'], seed: 83, style: 'mask', rating: 4.3 },
];

export const theaVenues: TheaVenue[] = [
  { name: 'Teatro Español', city: 'Madrid', seats: 740, text: 'El teatro más antiguo de la ciudad, con patio de butacas de herradura.' },
  { name: 'Teatro Lope de Vega', city: 'Madrid', seats: 1400, text: 'Gran sala de musicales en plena Gran Vía.' },
  { name: 'Teatro Alcázar', city: 'Madrid', seats: 480, text: 'Una sala íntima para comedia, a cinco filas del escenario.' },
];

/** Seat plan of the hall: curved stalls, balcony and four boxes. */
export function theaSeats(): TheaSeat[] {
  const seats: TheaSeat[] = [];
  const stallRows = 'ABCDEFGH'.split('');
  stallRows.forEach((row, r) => {
    const n = 10 + Math.min(r, 4) * 1;
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n;
      const x = 12 + t * 56;
      const curve = Math.pow(t - 0.5, 2) * 10;
      seats.push({ id: `${row}${i + 1}`, row, num: i + 1, zone: 'Patio', x, y: 30 + r * 6.2 + curve });
    }
  });
  'IJKL'.split('').forEach((row, r) => {
    const n = 14;
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n;
      seats.push({ id: `${row}${i + 1}`, row, num: i + 1, zone: 'Anfiteatro', x: 10 + t * 60, y: 82 + r * 4.8 + Math.pow(t - 0.5, 2) * 6 });
    }
  });
  [0, 1].forEach((side) => {
    [0, 1].forEach((level) => {
      for (let i = 0; i < 4; i++) {
        seats.push({ id: `P${side * 2 + level + 1}-${i + 1}`, row: `Palco ${side * 2 + level + 1}`, num: i + 1, zone: 'Palco', x: side ? 74.5 + (i % 2) * 3.6 : 3 + (i % 2) * 3.6, y: 34 + level * 16 + Math.floor(i / 2) * 5.6 });
      }
    });
  });
  return seats;
}

export const theaZoneFactor: Record<TheaSeat['zone'], number> = { Patio: 1, Palco: 1.3, Anfiteatro: 0.7 };

/** Price of a seat for a show, in euros (rounded to the euro). */
export function theaSeatPrice(show: TheaShow, seat: TheaSeat): number {
  const centre = Math.abs(seat.x - 40) < 12 && seat.zone === 'Patio' ? 1.12 : 1;
  return Math.round(show.price * theaZoneFactor[seat.zone] * centre);
}

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) % 100;
}

/** Demo availability: ~38% of seats are taken, stable for a show and session. */
export function theaSeatTaken(showId: string, sessionId: string, seatId: string): boolean {
  return hash(`${showId}|${sessionId}|${seatId}`) < 38;
}

/** Seeded random generator (mulberry32) used by the generated posters and codes. */
export function theaRng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const theaFaqs: TheaFaq[] = [
  { q: '¿Recibo la entrada en papel?', a: 'No hace falta imprimir nada. Te llega al correo y aparece en tu cuenta con un código QR que se lee en la puerta del teatro.' },
  { q: '¿Cuánto tiempo tengo para pagar?', a: 'Diez minutos desde que eliges butacas. Mientras tanto nadie más puede comprarlas; si el reloj llega a cero, las liberamos.' },
  { q: '¿Puedo cambiar o devolver las entradas?', a: 'Hasta 48 horas antes de la función puedes cambiarlas de sesión o devolverlas sin coste desde tu cuenta. Después solo se cambian si la sala lo permite.' },
  { q: '¿Cuántas entradas puedo comprar?', a: 'Hasta seis por sesión y pedido. Si vais más, escríbenos y reservamos un grupo con descuento.' },
  { q: '¿Hay descuentos para jóvenes o mayores?', a: 'Sí. Con carné joven o mayor de 65 tienes un 15 % en las funciones de miércoles y jueves. Se comprueba en la puerta.' },
];

export const theaMember: TheaMember = {
  id: 'TEL-0412',
  name: 'Clara Domínguez',
  email: 'clara.dominguez@example.com',
  since: '2023-09-03',
  tier: 'Abonada',
};

export const theaTickets: TheaTicket[] = [
  { id: 'T-90871', showId: 'la-casa-de-bernarda', sessionId: 's1', seat: 'C5', order: 'P-5521', seed: 5521 },
  { id: 'T-90872', showId: 'la-casa-de-bernarda', sessionId: 's1', seat: 'C6', order: 'P-5521', seed: 5522 },
  { id: 'T-88114', showId: 'el-fantasma', sessionId: 's2', seat: 'P2-1', order: 'P-5390', seed: 5390 },
  { id: 'T-81003', showId: 'una-noche-en-el-bar', sessionId: 's1', seat: 'F4', order: 'P-5107', seed: 5107 },
];

export const theaOrders: TheaOrder[] = [
  { id: 'P-5521', date: '2026-11-18', status: 'Confirmado', lines: [{ showId: 'la-casa-de-bernarda', sessionId: 's1', seats: ['C5', 'C6'] }], total: 62 },
  { id: 'P-5390', date: '2026-11-02', status: 'Confirmado', lines: [{ showId: 'el-fantasma', sessionId: 's2', seats: ['P2-1'] }], total: 61.5 },
  { id: 'P-5107', date: '2026-09-21', status: 'Confirmado', lines: [{ showId: 'una-noche-en-el-bar', sessionId: 's1', seats: ['F4'] }], total: 23.5 },
  { id: 'P-4980', date: '2026-08-30', status: 'Cancelado', lines: [{ showId: 'giselle', sessionId: 's2', seats: ['H3', 'H4'] }], total: 0 },
];

export const theaData = {
  brand: theaBrand,
  stats: theaStats,
  shows: theaShows,
  venues: theaVenues,
  faqs: theaFaqs,
  member: theaMember,
  tickets: theaTickets,
  orders: theaOrders,
};

export function theaById(id: string, list: TheaShow[] = theaShows): TheaShow | undefined {
  return list.find((s) => s.id === id);
}

export function theaMoney(n: number): string {
  return `${n.toLocaleString('es-ES', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 })} €`;
}

export function theaDate(d: string, opts: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' }): string {
  return new Date(`${d}T12:00:00`).toLocaleDateString('es-ES', opts);
}
