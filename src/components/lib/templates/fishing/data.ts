/**
 * Data and types for the "Corcho" fishing-tackle shop template.
 * Every page and component reads from here, so you can swap it for your own catalog, species,
 * customer and orders without touching markup.
 */

export interface FishRoutes {
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

export type FishCategory = 'Cañas' | 'Carretes' | 'Señuelos' | 'Línea y anzuelos' | 'Accesorios';
export type FishArtKind = 'rod' | 'reel' | 'lure' | 'line' | 'gear';

export interface FishOption {
  label: string;
  values: Array<{ value: string; extra?: number }>;
}

export interface FishProduct {
  id: string;
  name: string;
  brand: string;
  category: FishCategory;
  price: number;
  oldPrice?: number;
  stock: number;
  rating: number;
  reviews: number;
  text: string;
  specs: Array<{ k: string; v: string }>;
  options: FishOption[];
  art: { kind: FishArtKind; seed: number; palette: [string, string, string] };
  /** Species ids this product is good for. */
  species: string[];
}

export interface FishSpecies {
  id: string;
  name: string;
  water: 'Río' | 'Embalse' | 'Mar' | 'Lago';
  text: string;
  /** Activity by month, 0 (closed or dead) to 3 (best), January to December. */
  season: number[];
  tips: string;
  recommended: string[];
}

export interface FishFaq {
  q: string;
  a: string;
}

export interface FishStat {
  value: string;
  label: string;
}

export interface FishMember {
  id: string;
  name: string;
  email: string;
  since: string;
  tier: string;
  points: number;
}

export interface FishCartLine {
  productId: string;
  qty: number;
  options: Record<string, string>;
}

export interface FishOrder {
  id: string;
  date: string;
  status: 'Preparando' | 'En reparto' | 'Entregado' | 'Devuelto';
  lines: FishCartLine[];
  total: number;
  carrier: string;
  tracking: string;
  steps: Array<{ label: string; date: string; done: boolean }>;
}

export const fishRoutes: FishRoutes = {
  home: '/',
  shop: '/tienda',
  kit: '/equipo',
  product: '/producto',
  cart: '/carrito',
  signIn: '/acceso',
  dashboard: '/cuenta',
  orders: '/cuenta/pedidos',
  wishlist: '/cuenta/deseos',
};

export const fishBrand = {
  name: 'Corcho',
  tagline: 'Material de pesca con criterio',
  address: 'Calle del Río 4, 28005 Madrid',
  phone: '+34 910 000 054',
  email: 'hola@corcho.example',
  freeFrom: 60,
  shipping: 4.9,
};

export const fishStats: FishStat[] = [
  { value: '1.800', label: 'referencias probadas en el río por el equipo' },
  { value: '24 h', label: 'para que salga tu pedido, mojado o no' },
  { value: '30 días', label: 'de devolución aunque hayas mojado el cebo' },
];

export const fishProducts: FishProduct[] = [
  { id: 'cana-spinning-lince', name: 'Caña spinning Lince 2,40 m', brand: 'Corcho Pro', category: 'Cañas', price: 129, oldPrice: 159, stock: 14, rating: 4.7, reviews: 86, text: 'Caña de carbono de acción rápida para señuelos de 7 a 28 gramos. Lleva el peso en el carrete, no en la mano.', specs: [{ k: 'Longitud', v: '2,40 m' }, { k: 'Acción', v: 'Rápida' }, { k: 'Lanzado', v: '7–28 g' }, { k: 'Peso', v: '118 g' }, { k: 'Tramos', v: '2' }], options: [{ label: 'Longitud', values: [{ value: '2,10 m', extra: -10 }, { value: '2,40 m' }, { value: '2,70 m', extra: 12 }] }], art: { kind: 'rod', seed: 11, palette: ['#1f2a2e', '#f0b429', '#b3541e'] }, species: ['lucio', 'black-bass', 'lubina'] },
  { id: 'cana-trucha-alba', name: 'Caña de trucha Alba 2,70 m', brand: 'Río Norte', category: 'Cañas', price: 98, stock: 9, rating: 4.8, reviews: 54, text: 'Larga, ligera y con punta fina para señuelos de 2 a 10 gramos. Pensada para ríos de montaña con vegetación.', specs: [{ k: 'Longitud', v: '2,70 m' }, { k: 'Acción', v: 'Media-rápida' }, { k: 'Lanzado', v: '2–10 g' }, { k: 'Peso', v: '96 g' }, { k: 'Tramos', v: '3' }], options: [{ label: 'Longitud', values: [{ value: '2,40 m', extra: -8 }, { value: '2,70 m' }] }], art: { kind: 'rod', seed: 23, palette: ['#3c5a3a', '#e8d9a0', '#8a5a2b'] }, species: ['trucha'] },
  { id: 'cana-surf-atlas', name: 'Caña surfcasting Atlas 4,20 m', brand: 'Corcho Pro', category: 'Cañas', price: 189, stock: 6, rating: 4.6, reviews: 31, text: 'Para lanzar plomos de hasta 200 gramos desde la playa con tres tramos que encajan sin holgura.', specs: [{ k: 'Longitud', v: '4,20 m' }, { k: 'Acción', v: 'Progresiva' }, { k: 'Lanzado', v: '100–200 g' }, { k: 'Peso', v: '420 g' }, { k: 'Tramos', v: '3' }], options: [], art: { kind: 'rod', seed: 37, palette: ['#1b2b3a', '#6fb6d9', '#d9d2c0'] }, species: ['lubina', 'dorada'] },
  { id: 'carrete-spin-3000', name: 'Carrete spinning Brisa 3000', brand: 'Corcho Pro', category: 'Carretes', price: 84, stock: 22, rating: 4.5, reviews: 142, text: 'Ocho rodamientos, freno suave y 5,2:1 de recuperación. Aguanta un lucio sin quejarse.', specs: [{ k: 'Tamaño', v: '3000' }, { k: 'Recuperación', v: '5,2:1' }, { k: 'Rodamientos', v: '8 + 1' }, { k: 'Freno máx.', v: '8 kg' }, { k: 'Peso', v: '232 g' }], options: [{ label: 'Tamaño', values: [{ value: '2500', extra: -6 }, { value: '3000' }, { value: '4000', extra: 9 }] }], art: { kind: 'reel', seed: 41, palette: ['#d9d2c0', '#1f2a2e', '#f0b429'] }, species: ['lucio', 'black-bass', 'trucha'] },
  { id: 'carrete-mosca-14', name: 'Carrete de mosca Tramo #5/6', brand: 'Río Norte', category: 'Carretes', price: 119, stock: 7, rating: 4.9, reviews: 27, text: 'Cuerpo de aluminio mecanizado con freno de disco sellado. Ligero para estar todo el día en el agua.', specs: [{ k: 'Línea', v: '#5/6' }, { k: 'Cuerpo', v: 'Aluminio 6061' }, { k: 'Freno', v: 'Disco sellado' }, { k: 'Peso', v: '148 g' }], options: [], art: { kind: 'reel', seed: 53, palette: ['#2f3b2d', '#c9a24a', '#e8e4d2'] }, species: ['trucha'] },
  { id: 'carrete-surf-6000', name: 'Carrete surfcasting Ola 6000', brand: 'Corcho Pro', category: 'Carretes', price: 99, stock: 11, rating: 4.4, reviews: 63, text: 'Bobina profunda para 300 metros de 0,35 y manivela larga para recuperar con guantes.', specs: [{ k: 'Tamaño', v: '6000' }, { k: 'Capacidad', v: '300 m · 0,35' }, { k: 'Recuperación', v: '4,6:1' }, { k: 'Peso', v: '545 g' }], options: [], art: { kind: 'reel', seed: 67, palette: ['#1b2b3a', '#d9d2c0', '#e05a3a'] }, species: ['lubina', 'dorada'] },
  { id: 'senuelo-minnow', name: 'Minnow flotante Plata 9 cm', brand: 'Anzuelo Vivo', category: 'Señuelos', price: 11.5, stock: 80, rating: 4.7, reviews: 203, text: 'Nada a un metro y se mueve como un alevín herido. Dos anzuelos triples afilados químicamente.', specs: [{ k: 'Longitud', v: '9 cm' }, { k: 'Peso', v: '9 g' }, { k: 'Profundidad', v: '0,8–1,2 m' }, { k: 'Tipo', v: 'Flotante' }], options: [{ label: 'Color', values: [{ value: 'Plata' }, { value: 'Perca' }, { value: 'Trucha' }, { value: 'Fantasma' }] }], art: { kind: 'lure', seed: 71, palette: ['#c9d3d8', '#2f5d73', '#f0b429'] }, species: ['lucio', 'black-bass', 'lubina'] },
  { id: 'senuelo-cuchara', name: 'Cucharilla ondulante Oro 14 g', brand: 'Anzuelo Vivo', category: 'Señuelos', price: 5.9, stock: 120, rating: 4.8, reviews: 311, text: 'La de toda la vida. Cuchara de latón con un reflejo que se ve desde el otro lado del río.', specs: [{ k: 'Peso', v: '14 g' }, { k: 'Material', v: 'Latón' }, { k: 'Anzuelo', v: 'Triple n.º 4' }], options: [{ label: 'Acabado', values: [{ value: 'Oro' }, { value: 'Plata' }, { value: 'Cobre' }] }], art: { kind: 'lure', seed: 84, palette: ['#d9a93a', '#7a4d12', '#f6e7b0'] }, species: ['trucha', 'lucio'] },
  { id: 'senuelo-vinilo', name: 'Vinilo shad Verde Pradera 12 cm', brand: 'Anzuelo Vivo', category: 'Señuelos', price: 7.4, stock: 64, rating: 4.5, reviews: 98, text: 'Cola paleta que vibra a poca velocidad. Va en cabeza plomada y se pesca en cualquier embalse.', specs: [{ k: 'Longitud', v: '12 cm' }, { k: 'Unidades', v: '4 por bolsa' }, { k: 'Material', v: 'Vinilo blando' }], options: [{ label: 'Color', values: [{ value: 'Verde pradera' }, { value: 'Natural' }, { value: 'Chartreuse' }] }], art: { kind: 'lure', seed: 97, palette: ['#7fb23a', '#2d4a1a', '#e8f2c0'] }, species: ['black-bass', 'lucio'] },
  { id: 'trenzado-x8', name: 'Trenzado Hilo X8 0,16 mm · 150 m', brand: 'Corcho Pro', category: 'Línea y anzuelos', price: 24, stock: 45, rating: 4.6, reviews: 77, text: 'Ocho hebras para un lanzado suave y casi cero elasticidad. Se nota la picada antes de que el pez lo sepa.', specs: [{ k: 'Diámetro', v: '0,16 mm' }, { k: 'Carga', v: '10,4 kg' }, { k: 'Metros', v: '150' }, { k: 'Hebras', v: '8' }], options: [{ label: 'Color', values: [{ value: 'Verde musgo' }, { value: 'Amarillo' }] }], art: { kind: 'line', seed: 103, palette: ['#7fb23a', '#2d4a1a', '#e8f2c0'] }, species: ['lucio', 'black-bass', 'lubina'] },
  { id: 'anzuelos-circulo', name: 'Anzuelos circulares n.º 2/0 · 20 uds.', brand: 'Anzuelo Vivo', category: 'Línea y anzuelos', price: 6.5, stock: 150, rating: 4.4, reviews: 41, text: 'Acero de carbono con punta química. El pez se engancha en la comisura y se puede devolver al agua.', specs: [{ k: 'Medida', v: '2/0' }, { k: 'Unidades', v: '20' }, { k: 'Acabado', v: 'Negro mate' }], options: [], art: { kind: 'line', seed: 113, palette: ['#2a2a2a', '#b3b3b3', '#f0b429'] }, species: ['dorada', 'lubina'] },
  { id: 'sacadera', name: 'Sacadera plegable con goma', brand: 'Río Norte', category: 'Accesorios', price: 38, stock: 18, rating: 4.7, reviews: 59, text: 'Red de goma que no enreda los anzuelos y protege las escamas. Plegable, cabe en la mochila.', specs: [{ k: 'Aro', v: '45 cm' }, { k: 'Mango', v: 'Telescópico 1,2 m' }, { k: 'Red', v: 'Goma' }], options: [], art: { kind: 'gear', seed: 127, palette: ['#3c5a3a', '#d9d2c0', '#1f2a2e'] }, species: ['trucha', 'lucio', 'black-bass'] },
  { id: 'cubo-cebos', name: 'Cubo de cebo con oxigenador', brand: 'Corcho Pro', category: 'Accesorios', price: 29, stock: 25, rating: 4.3, reviews: 36, text: 'Mantiene vivo el cebo durante toda la jornada con una bomba de aire a pilas casi silenciosa.', specs: [{ k: 'Capacidad', v: '8 litros' }, { k: 'Aire', v: 'Bomba a pilas' }, { k: 'Material', v: 'PP reciclado' }], options: [], art: { kind: 'gear', seed: 137, palette: ['#1f4a5a', '#7fc8d9', '#f0b429'] }, species: ['carpa', 'dorada'] },
];

export const fishSpecies: FishSpecies[] = [
  { id: 'trucha', name: 'Trucha común', water: 'Río', text: 'La reina de los ríos de montaña. Esquiva, rápida y muy sensible a la presión del anzuelo.', season: [0, 0, 1, 2, 3, 3, 2, 2, 3, 1, 0, 0], tips: 'Pesca a primera hora y a última tarde, con cucharillas ligeras o mosca seca. Pisa poco el agua.', recommended: ['cana-trucha-alba', 'carrete-spin-3000', 'senuelo-cuchara'] },
  { id: 'lucio', name: 'Lucio', water: 'Embalse', text: 'Depredador de dientes largos que ataca cualquier cosa que se mueva. Pide línea fuerte y un cable de acero.', season: [2, 2, 3, 3, 2, 1, 1, 1, 2, 3, 3, 2], tips: 'Mejor en aguas frías, con minnows lentos y vinilos grandes. Usa siempre un bajo de línea de acero.', recommended: ['cana-spinning-lince', 'carrete-spin-3000', 'senuelo-minnow', 'trenzado-x8'] },
  { id: 'black-bass', name: 'Black bass', water: 'Embalse', text: 'Peleón y listo. Se esconde en la vegetación y en los troncos hundidos de los embalses.', season: [0, 1, 2, 3, 3, 3, 2, 2, 3, 3, 2, 0], tips: 'Vinilos en cabeza plomada junto a vegetación. Recupera lento y deja caer el señuelo.', recommended: ['cana-spinning-lince', 'senuelo-vinilo', 'senuelo-minnow', 'trenzado-x8'] },
  { id: 'lubina', name: 'Lubina', water: 'Mar', text: 'Plata y rápida. Caza en las rompientes al amanecer, con la marea subiendo.', season: [2, 2, 2, 3, 3, 2, 1, 1, 2, 3, 3, 3], tips: 'Minnows y vinilos en espigones y desembocaduras. El mejor momento es una hora antes de la pleamar.', recommended: ['cana-surf-atlas', 'carrete-surf-6000', 'senuelo-minnow', 'trenzado-x8'] },
  { id: 'dorada', name: 'Dorada', water: 'Mar', text: 'Desconfiada y de boca dura. Se pesca a fondo con cebo natural en fondos de arena.', season: [1, 1, 1, 2, 3, 3, 3, 3, 3, 2, 1, 1], tips: 'Cebo de gamba o marisco con un bajo largo y fino. Paciencia: pica con suavidad.', recommended: ['cana-surf-atlas', 'carrete-surf-6000', 'anzuelos-circulo', 'cubo-cebos'] },
  { id: 'carpa', name: 'Carpa', water: 'Lago', text: 'Grande, fuerte y de apetito caprichoso. Es la pesca de la paciencia en los lagos y balsas.', season: [1, 1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 1], tips: 'Maíz o boilies con cebado previo. Deja que el pez coja el cebo antes de clavar.', recommended: ['cubo-cebos', 'anzuelos-circulo', 'sacadera'] },
];

export const fishFaqs: FishFaq[] = [
  { q: '¿Cuándo sale mi pedido?', a: 'Si lo haces antes de las 15:00 sale el mismo día laborable; si no, al siguiente. Lo preparamos a mano y revisamos cada caña antes de embalarla.' },
  { q: '¿Cuánto cuesta el envío?', a: 'Son 4,90 € y es gratis a partir de 60 €. Si el pedido incluye una caña de más de 2 metros va en tubo rígido sin coste adicional.' },
  { q: '¿Puedo devolver algo si ya lo he usado?', a: 'Sí, durante 30 días, incluso si has mojado el cebo. Los señuelos usados en agua dulce o salada los aceptamos igual, pero no los anzuelos afilados sin su protector.' },
  { q: '¿Necesito licencia de pesca?', a: 'Sí, en todas las comunidades. No la vendemos, pero te explicamos en cada especie qué tipo de licencia pide y en qué meses está abierta la veda.' },
  { q: '¿Montáis cañas a medida?', a: 'Si pides una caña y un carrete juntos te los montamos y equilibramos sin coste, con la línea ya cargada. Solo tienes que decirlo al finalizar la compra.' },
];

export const fishMember: FishMember = {
  id: 'COR-2207',
  name: 'Mario Lasa',
  email: 'mario.lasa@example.com',
  since: '2023-04-12',
  tier: 'Socio del río',
  points: 340,
};

export const fishOrders: FishOrder[] = [
  { id: 'C-8412', date: '2026-11-19', status: 'En reparto', lines: [{ productId: 'cana-spinning-lince', qty: 1, options: { Longitud: '2,40 m' } }, { productId: 'senuelo-minnow', qty: 3, options: { Color: 'Perca' } }], total: 163.4, carrier: 'SEUR', tracking: 'SE88123091', steps: [{ label: 'Pedido recibido', date: '2026-11-19', done: true }, { label: 'Preparado y revisado', date: '2026-11-19', done: true }, { label: 'En reparto', date: '2026-11-21', done: true }, { label: 'Entrega prevista', date: 'el 23 de noviembre', done: false }] },
  { id: 'C-8190', date: '2026-10-02', status: 'Entregado', lines: [{ productId: 'carrete-spin-3000', qty: 1, options: { Tamaño: '3000' } }, { productId: 'trenzado-x8', qty: 1, options: { Color: 'Verde musgo' } }], total: 108, carrier: 'Correos Express', tracking: 'CE5539120', steps: [{ label: 'Pedido recibido', date: '2026-10-02', done: true }, { label: 'Preparado y revisado', date: '2026-10-02', done: true }, { label: 'En reparto', date: '2026-10-03', done: true }, { label: 'Entregado', date: '2026-10-05', done: true }] },
  { id: 'C-7755', date: '2026-06-14', status: 'Entregado', lines: [{ productId: 'sacadera', qty: 1, options: {} }], total: 42.9, carrier: 'SEUR', tracking: 'SE77341120', steps: [{ label: 'Pedido recibido', date: '2026-06-14', done: true }, { label: 'Preparado y revisado', date: '2026-06-14', done: true }, { label: 'En reparto', date: '2026-06-15', done: true }, { label: 'Entregado', date: '2026-06-17', done: true }] },
];

export const fishWishlist: string[] = ['cana-trucha-alba', 'carrete-mosca-14', 'cubo-cebos'];

export const fishData = {
  brand: fishBrand,
  stats: fishStats,
  products: fishProducts,
  species: fishSpecies,
  faqs: fishFaqs,
  member: fishMember,
  orders: fishOrders,
  wishlist: fishWishlist,
};

export function fishById(id: string, list: FishProduct[] = fishProducts): FishProduct | undefined {
  return list.find((p) => p.id === id);
}

export function fishMoney(n: number): string {
  return `${n.toLocaleString('es-ES', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 })} €`;
}

/** Seeded random generator (mulberry32) used by the generated product art. */
export function fishRng(seed: number): () => number {
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
export function fishUnitPrice(p: FishProduct, options: Record<string, string>): number {
  let extra = 0;
  for (const o of p.options) {
    const v = o.values.find((x) => x.value === options[o.label]);
    if (v?.extra) extra += v.extra;
  }
  return p.price + extra;
}

export const fishMonths = ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
