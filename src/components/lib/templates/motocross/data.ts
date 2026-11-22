/**
 * Data and types for the "Barro" motocross shop template.
 * Every page and component reads from here, so you can swap it for your own bikes, gear, customer,
 * garage and orders without touching markup.
 */

export interface MotoRoutes {
  home: string;
  shop: string;
  kit: string;
  product: string;
  cart: string;
  signIn: string;
  dashboard: string;
  orders: string;
  wishlist: string;
}

export type MotoCategory = 'Motos' | 'Cascos' | 'Botas y guantes' | 'Ropa' | 'Recambios';
export type MotoArtKind = 'bike' | 'helmet' | 'boots' | 'gloves' | 'jersey' | 'part';

export interface MotoOption {
  label: string;
  values: Array<{ value: string; extra?: number }>;
}

export interface MotoProduct {
  id: string;
  name: string;
  brand: string;
  category: MotoCategory;
  price: number;
  oldPrice?: number;
  stock: number;
  rating: number;
  reviews: number;
  text: string;
  specs: Array<{ k: string; v: string }>;
  options: MotoOption[];
  art: { kind: MotoArtKind; seed: number; palette: [string, string, string] };
  /** Numeric figures for the bike comparison (bikes only). */
  bike?: { cc: number; hp: number; kg: number; seat: number; travel: number; stroke: 2 | 4 };
}

export interface MotoFaq {
  q: string;
  a: string;
}

export interface MotoStat {
  value: string;
  label: string;
}

export interface MotoMember {
  id: string;
  name: string;
  email: string;
  since: string;
  tier: string;
  points: number;
}

export interface MotoCartLine {
  productId: string;
  qty: number;
  options: Record<string, string>;
}

export interface MotoOrder {
  id: string;
  date: string;
  status: 'Preparando' | 'En reparto' | 'Entregado' | 'Devuelto';
  lines: MotoCartLine[];
  total: number;
  carrier: string;
  tracking: string;
  steps: Array<{ label: string; date: string; done: boolean }>;
}

export interface MotoGarageBike {
  id: string;
  productId: string;
  nickname: string;
  year: number;
  hours: number;
  /** Maintenance items: what, every how many hours, hours when last done. */
  service: Array<{ what: string; every: number; last: number }>;
}

export interface MotoSizeRow {
  size: string;
  height: [number, number];
  chest: [number, number];
  waist: [number, number];
}

export const motoRoutes: MotoRoutes = {
  home: '/',
  shop: '/tienda',
  kit: '/tu-moto',
  product: '/producto',
  cart: '/carrito',
  signIn: '/acceso',
  dashboard: '/cuenta',
  orders: '/cuenta/pedidos',
  wishlist: '/cuenta/deseos',
};

export const motoBrand = {
  name: 'Barro',
  tagline: 'Motos y equipo de cross',
  address: 'Polígono La Dehesa, nave 9, 28860 Paracuellos',
  phone: '+34 910 000 250',
  email: 'taller@barro.example',
  freeFrom: 150,
  shipping: 9.9,
  rate: 7.9,
};

export const motoStats: MotoStat[] = [
  { value: '48 h', label: 'a tu casa, y la moto a punto con aceite y filtros nuevos' },
  { value: '12', label: 'meses de garantía en cada moto, 24 con el pack de taller' },
  { value: '0 €', label: 'de gastos de transporte en equipación desde 150 €' },
];

export const motoProducts: MotoProduct[] = [
  { id: 'moto-125-dash', name: 'Dash 125 2T', brand: 'Barro Racing', category: 'Motos', price: 5490, oldPrice: 5890, stock: 4, rating: 4.7, reviews: 38, text: 'La moto para empezar a competir. Ligera, con una entrega de potencia que no te asusta y suspensión que perdona los errores.', specs: [{ k: 'Cilindrada', v: '125 cc · 2T' }, { k: 'Potencia', v: '38 CV' }, { k: 'Peso', v: '88 kg' }, { k: 'Altura del asiento', v: '945 mm' }, { k: 'Recorrido susp.', v: '300 mm' }], options: [{ label: 'Color', values: [{ value: 'Naranja' }, { value: 'Negro mate', extra: 150 }, { value: 'Blanco' }] }, { label: 'Pack', values: [{ value: 'Solo moto' }, { value: 'Pack taller 24 meses', extra: 290 }] }], art: { kind: 'bike', seed: 11, palette: ['#ff5a1f', '#1a1a1a', '#f4efe4'] }, bike: { cc: 125, hp: 38, kg: 88, seat: 945, travel: 300, stroke: 2 } },
  { id: 'moto-250-roca', name: 'Roca 250 4T', brand: 'Barro Racing', category: 'Motos', price: 8290, stock: 3, rating: 4.8, reviews: 52, text: 'La más vendida en las carreras de club. Motor de cuatro tiempos, arranque eléctrico y una caja de cambios que acepta cualquier brusquedad.', specs: [{ k: 'Cilindrada', v: '250 cc · 4T' }, { k: 'Potencia', v: '42 CV' }, { k: 'Peso', v: '103 kg' }, { k: 'Altura del asiento', v: '960 mm' }, { k: 'Recorrido susp.', v: '310 mm' }], options: [{ label: 'Color', values: [{ value: 'Naranja' }, { value: 'Azul' }, { value: 'Negro mate', extra: 150 }] }, { label: 'Pack', values: [{ value: 'Solo moto' }, { value: 'Pack taller 24 meses', extra: 390 }] }], art: { kind: 'bike', seed: 23, palette: ['#2b6bff', '#151515', '#e9eef9'] }, bike: { cc: 250, hp: 42, kg: 103, seat: 960, travel: 310, stroke: 4 } },
  { id: 'moto-450-cima', name: 'Cima 450 4T', brand: 'Barro Racing', category: 'Motos', price: 10490, stock: 2, rating: 4.9, reviews: 41, text: 'Para el que ya sabe. Potencia de sobra, mapas de motor seleccionables desde el manillar y un chasis que se deja llevar en las curvas largas.', specs: [{ k: 'Cilindrada', v: '450 cc · 4T' }, { k: 'Potencia', v: '58 CV' }, { k: 'Peso', v: '106 kg' }, { k: 'Altura del asiento', v: '965 mm' }, { k: 'Recorrido susp.', v: '315 mm' }], options: [{ label: 'Color', values: [{ value: 'Naranja' }, { value: 'Verde' }, { value: 'Negro mate', extra: 150 }] }, { label: 'Pack', values: [{ value: 'Solo moto' }, { value: 'Pack taller 24 meses', extra: 490 }] }], art: { kind: 'bike', seed: 37, palette: ['#ff7a1f', '#101010', '#ffd23f'] }, bike: { cc: 450, hp: 58, kg: 106, seat: 965, travel: 315, stroke: 4 } },
  { id: 'moto-85-mini', name: 'Mini 85 2T', brand: 'Barro Racing', category: 'Motos', price: 3990, stock: 6, rating: 4.6, reviews: 24, text: 'La primera moto de competición para los más jóvenes, con limitador de potencia y asiento bajo.', specs: [{ k: 'Cilindrada', v: '85 cc · 2T' }, { k: 'Potencia', v: '22 CV' }, { k: 'Peso', v: '71 kg' }, { k: 'Altura del asiento', v: '850 mm' }, { k: 'Recorrido susp.', v: '260 mm' }], options: [{ label: 'Color', values: [{ value: 'Naranja' }, { value: 'Blanco' }] }], art: { kind: 'bike', seed: 41, palette: ['#ff5a1f', '#222222', '#f4efe4'] }, bike: { cc: 85, hp: 22, kg: 71, seat: 850, travel: 260, stroke: 2 } },
  { id: 'casco-pro', name: 'Casco Pro Carbono', brand: 'Barro Gear', category: 'Cascos', price: 389, oldPrice: 449, stock: 18, rating: 4.8, reviews: 112, text: 'Carcasa de carbono de 1.150 gramos, ventilación que se limpia sin herramientas y forro lavable.', specs: [{ k: 'Material', v: 'Carbono' }, { k: 'Peso', v: '1.150 g' }, { k: 'Homologación', v: 'ECE 22.06' }, { k: 'Visera', v: 'Regulable' }], options: [{ label: 'Talla', values: [{ value: 'S' }, { value: 'M' }, { value: 'L' }, { value: 'XL' }] }, { label: 'Color', values: [{ value: 'Naranja' }, { value: 'Negro' }, { value: 'Blanco' }] }], art: { kind: 'helmet', seed: 53, palette: ['#ff5a1f', '#111111', '#f4efe4'] } },
  { id: 'casco-club', name: 'Casco Club Composite', brand: 'Barro Gear', category: 'Cascos', price: 179, stock: 40, rating: 4.4, reviews: 87, text: 'Composite ligero con buena ventilación, para entrenar cada fin de semana sin gastarte media moto.', specs: [{ k: 'Material', v: 'Fibra composite' }, { k: 'Peso', v: '1.350 g' }, { k: 'Homologación', v: 'ECE 22.06' }], options: [{ label: 'Talla', values: [{ value: 'S' }, { value: 'M' }, { value: 'L' }, { value: 'XL' }] }], art: { kind: 'helmet', seed: 67, palette: ['#2b6bff', '#151515', '#e9eef9'] } },
  { id: 'botas-race', name: 'Botas Race Pro', brand: 'Barro Gear', category: 'Botas y guantes', price: 279, stock: 22, rating: 4.7, reviews: 64, text: 'Caña rígida con bisagra de articulación, suela recambiable y cierres de aluminio que no se rompen en la primera caída.', specs: [{ k: 'Material', v: 'Cuero y composite' }, { k: 'Cierres', v: '4 de aluminio' }, { k: 'Suela', v: 'Recambiable' }], options: [{ label: 'Talla', values: [{ value: '41' }, { value: '42' }, { value: '43' }, { value: '44' }, { value: '45' }] }], art: { kind: 'boots', seed: 71, palette: ['#1a1a1a', '#ff5a1f', '#d9d2c0'] } },
  { id: 'guantes-grip', name: 'Guantes Grip', brand: 'Barro Gear', category: 'Botas y guantes', price: 39, stock: 60, rating: 4.5, reviews: 140, text: 'Palma de microfibra sin costuras que molestan y dorso ventilado para que no se suden las manos.', specs: [{ k: 'Material', v: 'Microfibra' }, { k: 'Dorso', v: 'Ventilado' }, { k: 'Cierre', v: 'Velcro' }], options: [{ label: 'Talla', values: [{ value: 'S' }, { value: 'M' }, { value: 'L' }, { value: 'XL' }] }, { label: 'Color', values: [{ value: 'Naranja' }, { value: 'Negro' }] }], art: { kind: 'gloves', seed: 83, palette: ['#ff5a1f', '#1a1a1a', '#f4efe4'] } },
  { id: 'jersey-flow', name: 'Camiseta Flow', brand: 'Barro Gear', category: 'Ropa', price: 44, stock: 75, rating: 4.3, reviews: 95, text: 'Tejido técnico que expulsa el sudor y no se pega al cuerpo. Mangas largas con sublimado que no se desgasta.', specs: [{ k: 'Material', v: 'Poliéster técnico' }, { k: 'Mangas', v: 'Largas' }, { k: 'Estampado', v: 'Sublimado' }], options: [{ label: 'Talla', values: [{ value: 'S' }, { value: 'M' }, { value: 'L' }, { value: 'XL' }, { value: 'XXL' }] }, { label: 'Color', values: [{ value: 'Naranja' }, { value: 'Azul' }, { value: 'Verde' }] }], art: { kind: 'jersey', seed: 97, palette: ['#ff5a1f', '#1a1a1a', '#ffd23f'] } },
  { id: 'filtro-aire', name: 'Filtro de aire de alto flujo', brand: 'Barro Parts', category: 'Recambios', price: 24, stock: 120, rating: 4.6, reviews: 56, text: 'Espuma de doble capa con aceite incluido. Compatible con Dash, Roca y Cima.', specs: [{ k: 'Compatible', v: 'Dash, Roca, Cima' }, { k: 'Material', v: 'Espuma doble capa' }, { k: 'Aceite', v: 'Incluido' }], options: [], art: { kind: 'part', seed: 107, palette: ['#d9a93a', '#2a2a2a', '#f4efe4'] } },
  { id: 'cadena-kit', name: 'Kit de transmisión Race', brand: 'Barro Parts', category: 'Recambios', price: 89, stock: 30, rating: 4.7, reviews: 33, text: 'Cadena de 520 con retenes, piñón y corona de aluminio. Se monta en una tarde y se nota en cada salida.', specs: [{ k: 'Cadena', v: '520 · 114 eslabones' }, { k: 'Piñón', v: '13 dientes' }, { k: 'Corona', v: '50 dientes' }], options: [{ label: 'Corona', values: [{ value: '48 dientes', extra: -4 }, { value: '50 dientes' }, { value: '52 dientes', extra: 4 }] }], art: { kind: 'part', seed: 117, palette: ['#9aa3a8', '#2a2a2a', '#ff5a1f'] } },
];

export const motoSizes: MotoSizeRow[] = [
  { size: 'S', height: [160, 170], chest: [86, 94], waist: [72, 80] },
  { size: 'M', height: [170, 178], chest: [94, 102], waist: [80, 88] },
  { size: 'L', height: [178, 185], chest: [102, 110], waist: [88, 96] },
  { size: 'XL', height: [185, 192], chest: [110, 118], waist: [96, 104] },
  { size: 'XXL', height: [192, 200], chest: [118, 128], waist: [104, 114] },
];

export const motoFaqs: MotoFaq[] = [
  { q: '¿La moto llega lista para rodar?', a: 'Sí. Cada moto pasa por el taller antes de salir: le cambiamos el aceite y los filtros, apretamos la tornillería y la probamos en pista. Te la entregamos con la documentación de entrega y el manual.' },
  { q: '¿Puedo financiarla?', a: 'Hasta 60 meses, con una entrada mínima del 10 %. Tienes un simulador en la página del garaje y una respuesta en el mismo día.' },
  { q: '¿Qué incluye la garantía?', a: 'Doce meses en motor y chasis, y veinticuatro con el pack de taller. No cubre el desgaste normal (cadena, pastillas, neumáticos) ni los daños por caídas.' },
  { q: '¿Cómo sé qué talla de equipación me va?', a: 'En la página del garaje tienes una guía: pones tu altura, pecho y cintura y te decimos la talla. Si no te sienta bien, cambiamos la talla sin coste en 30 días.' },
  { q: '¿Se pueden devolver las motos?', a: 'Una moto sin usar con menos de dos horas de motor se devuelve en 14 días. Las que ya han rodado se pueden cambiar por otra con un descuento sobre el precio de recompra.' },
];

export const motoMember: MotoMember = {
  id: 'BAR-0731',
  name: 'Dani Ferrer',
  email: 'dani.ferrer@example.com',
  since: '2022-05-20',
  tier: 'Piloto de club',
  points: 1240,
};

export const motoOrders: MotoOrder[] = [
  { id: 'B-4410', date: '2026-11-18', status: 'En reparto', lines: [{ productId: 'casco-pro', qty: 1, options: { Talla: 'L', Color: 'Naranja' } }, { productId: 'guantes-grip', qty: 2, options: { Talla: 'L', Color: 'Negro' } }], total: 467, carrier: 'DHL', tracking: 'DH7731200', steps: [{ label: 'Pedido recibido', date: '2026-11-18', done: true }, { label: 'Preparado en el taller', date: '2026-11-19', done: true }, { label: 'En reparto', date: '2026-11-20', done: true }, { label: 'Entrega prevista', date: 'el 24 de noviembre', done: false }] },
  { id: 'B-4102', date: '2026-08-04', status: 'Entregado', lines: [{ productId: 'moto-250-roca', qty: 1, options: { Color: 'Azul', Pack: 'Pack taller 24 meses' } }], total: 8680, carrier: 'Transporte propio', tracking: 'Entrega en taller', steps: [{ label: 'Pedido recibido', date: '2026-08-04', done: true }, { label: 'Puesta a punto en el taller', date: '2026-08-07', done: true }, { label: 'Probada en pista', date: '2026-08-08', done: true }, { label: 'Entregada', date: '2026-08-10', done: true }] },
  { id: 'B-3950', date: '2026-05-12', status: 'Entregado', lines: [{ productId: 'botas-race', qty: 1, options: { Talla: '43' } }, { productId: 'cadena-kit', qty: 1, options: { Corona: '50 dientes' } }], total: 368, carrier: 'DHL', tracking: 'DH6611840', steps: [{ label: 'Pedido recibido', date: '2026-05-12', done: true }, { label: 'Preparado en el taller', date: '2026-05-12', done: true }, { label: 'En reparto', date: '2026-05-13', done: true }, { label: 'Entregado', date: '2026-05-15', done: true }] },
];

export const motoWishlist: string[] = ['moto-450-cima', 'botas-race', 'filtro-aire'];

export const motoGarage: MotoGarageBike[] = [
  { id: 'g1', productId: 'moto-250-roca', nickname: 'La Azul', year: 2026, hours: 38, service: [{ what: 'Cambio de aceite de motor', every: 10, last: 30 }, { what: 'Filtro de aire', every: 5, last: 35 }, { what: 'Cadena y transmisión', every: 25, last: 8 }, { what: 'Revisión de suspensión', every: 40, last: 0 }] },
];

export const motoData = {
  brand: motoBrand,
  stats: motoStats,
  products: motoProducts,
  sizes: motoSizes,
  faqs: motoFaqs,
  member: motoMember,
  orders: motoOrders,
  wishlist: motoWishlist,
  garage: motoGarage,
};

export function motoById(id: string, list: MotoProduct[] = motoProducts): MotoProduct | undefined {
  return list.find((p) => p.id === id);
}

export function motoMoney(n: number): string {
  return `${Math.round(n * 100) / 100 === Math.round(n) ? Math.round(n).toLocaleString('es-ES') : n.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
}

/** Seeded random generator (mulberry32) used by the generated product art. */
export function motoRng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Unit price of a product with the extras of its selected options. */
export function motoUnitPrice(p: MotoProduct, options: Record<string, string>): number {
  let extra = 0;
  for (const o of p.options) {
    const v = o.values.find((x) => x.value === options[o.label]);
    if (v?.extra) extra += v.extra;
  }
  return p.price + extra;
}

/** Monthly payment of a loan (French amortisation) with a yearly nominal rate in percent. */
export function motoMonthly(principal: number, months: number, ratePct: number): number {
  const r = ratePct / 100 / 12;
  if (principal <= 0 || months <= 0) return 0;
  if (r === 0) return principal / months;
  return (principal * r) / (1 - Math.pow(1 + r, -months));
}

/** Suggested size for a rider's measurements, from the size table. */
export function motoSizeFor(rows: MotoSizeRow[], height: number, chest: number, waist: number): string {
  const score = (r: MotoSizeRow) => {
    const d = (v: number, [a, b]: [number, number]) => (v < a ? a - v : v > b ? v - b : 0);
    return d(height, r.height) + d(chest, r.chest) * 1.2 + d(waist, r.waist);
  };
  return [...rows].sort((a, b) => score(a) - score(b))[0].size;
}
