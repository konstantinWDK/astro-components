/**
 * Data and types for the "Umbra" perfumery template.
 * Every page and component reads from here, so you can swap it for your own catalog, formulas,
 * customer and orders without touching markup.
 */

export interface PerfRoutes {
  home: string;
  fragrances: string;
  atelier: string;
  discover: string;
  signIn: string;
  dashboard: string;
  shelf: string;
  orders: string;
}

export type PerfLayer = 'top' | 'heart' | 'base';

/** A raw material in a formula. `from`, `peak` and `to` are hours on skin. */
export interface PerfNote {
  name: string;
  layer: PerfLayer;
  from: number;
  peak: number;
  to: number;
}

export interface PerfSize {
  ml: number;
  price: number;
}

export interface PerfFragrance {
  id: string;
  number: string;
  name: string;
  family: string;
  tagline: string;
  description: string;
  /** Three colours that paint the liquid and the cloud of the fragrance. */
  accord: [string, string, string];
  notes: PerfNote[];
  /** Position on the scent map: 0 fresh → 100 warm, 0 light → 100 dense. */
  x: number;
  y: number;
  sillage: number;
  longevity: number;
  concentration: string;
  perfumer: string;
  year: number;
  sizes: PerfSize[];
  wearWhen: string;
}

export interface PerfMaterial {
  id: string;
  name: string;
  origin: string;
  method: string;
  /** Kilos of raw material needed for one kilo of essence. */
  kgPerKg: number;
  text: string;
  color: string;
}

export interface PerfQuizOption {
  label: string;
  weights: Record<string, number>;
}

export interface PerfQuizQuestion {
  id: string;
  question: string;
  options: PerfQuizOption[];
}

export interface PerfSample {
  fragranceId: string;
  price: number;
}

export interface PerfFaq {
  q: string;
  a: string;
}

export interface PerfMember {
  id: string;
  name: string;
  email: string;
  since: string;
  tier: string;
  credit: number;
}

export interface PerfShelfItem {
  fragranceId: string;
  ml: number;
  /** Liquid left, 0–100. */
  level: number;
  rating?: number;
  boughtAt: string;
}

export interface PerfOrderStep {
  label: string;
  date: string;
  done: boolean;
}

export interface PerfOrder {
  id: string;
  date: string;
  status: 'Preparando' | 'En reparto' | 'Entregado';
  items: Array<{ fragranceId: string; ml: number; qty: number }>;
  total: number;
  carrier: string;
  tracking: string;
  steps: PerfOrderStep[];
}

export interface PerfCombo {
  id: string;
  a: string;
  b: string;
  /** Share of the first fragrance, 0–100. */
  ratio: number;
  name: string;
}

export interface PerfStat {
  value: string;
  label: string;
}

export const perfRoutes: PerfRoutes = {
  home: '/',
  fragrances: '/fragancias',
  atelier: '/atelier',
  discover: '/descubrir',
  signIn: '/acceso',
  dashboard: '/cuenta',
  shelf: '/cuenta/estanteria',
  orders: '/cuenta/pedidos',
};

export const perfBrand = {
  name: 'Umbra',
  tagline: 'Perfumería de autor',
  address: 'Calle del Pez 14, 28004 Madrid',
  phone: '+34 910 000 318',
  email: 'atelier@umbra.example',
};

/** Windows (hours on skin) by layer; a note can override peak and end. */
const WINDOW: Record<PerfLayer, [number, number, number]> = {
  top: [0, 0.2, 1.8],
  heart: [0.4, 2.2, 6],
  base: [1.6, 5.5, 14],
};

function n(name: string, layer: PerfLayer, peak?: number, to?: number): PerfNote {
  const [f, p, t] = WINDOW[layer];
  return { name, layer, from: f, peak: peak ?? p, to: to ?? t };
}

const sizes = (a: number): PerfSize[] => [
  { ml: 30, price: a },
  { ml: 50, price: Math.round(a * 1.55) },
  { ml: 100, price: Math.round(a * 2.45) },
];

export const perfList: PerfFragrance[] = [
  {
    id: 'iris-noir',
    number: 'Nº 1',
    name: 'Iris Noir',
    family: 'Floral empolvado',
    tagline: 'Una carta escrita con tinta de iris',
    description:
      'La raíz de iris se deja madurar seis años antes de tocarla. Sale polvo frío, casi de pintalabios antiguo, que aquí se tiñe de tinta y de un fondo de vetiver seco.',
    accord: ['#5b4b8a', '#a995d8', '#1b1530'],
    notes: [n('Pimienta rosa', 'top'), n('Bergamota', 'top', 0.1, 1.4), n('Manteca de iris', 'heart', 2.6, 8), n('Violeta', 'heart', 1.4, 4.5), n('Vetiver', 'base'), n('Almizcle blanco', 'base', 7, 14)],
    x: 38, y: 34, sillage: 3, longevity: 9, concentration: 'Extrait 25%', perfumer: 'Clara Montes', year: 2021, sizes: sizes(68), wearWhen: 'Tardes de lluvia y despachos con ventana',
  },
  {
    id: 'cuero-higo',
    number: 'Nº 2',
    name: 'Cuero & Higo',
    family: 'Cuero cremoso',
    tagline: 'Una chaqueta vieja bajo una higuera',
    description:
      'Abedul ahumado para el cuero, hoja de higuera verde y leche de higo para suavizarlo. Huele a piel que ya es tuya.',
    accord: ['#8a5a3b', '#d9a679', '#2a1a12'],
    notes: [n('Hoja de higuera', 'top', 0.3, 2), n('Cardamomo', 'top'), n('Leche de higo', 'heart', 2, 6.5), n('Abedul', 'heart', 2.8, 8), n('Cuero', 'base', 6, 14), n('Ámbar gris', 'base', 7.5, 14)],
    x: 78, y: 70, sillage: 4, longevity: 11, concentration: 'Extrait 25%', perfumer: 'Clara Montes', year: 2022, sizes: sizes(74), wearWhen: 'Otoño, cenas largas, abrigos',
  },
  {
    id: 'sal-marina',
    number: 'Nº 3',
    name: 'Sal Marina',
    family: 'Mineral acuático',
    tagline: 'La piel después de un día de playa',
    description:
      'Alga absoluta, sal de Guérande y una madera blanqueada por el agua. No es un perfume de gel de baño: es el olor de un acantilado.',
    accord: ['#3f7d8c', '#9ad1d9', '#10262c'],
    notes: [n('Sal', 'top', 0.2, 2.4), n('Limón', 'top', 0, 1.2), n('Alga absoluta', 'heart', 2, 5.5), n('Salvia', 'heart', 1.6, 5), n('Madera flotada', 'base'), n('Almizcle', 'base', 6, 12)],
    x: 12, y: 22, sillage: 2, longevity: 6, concentration: 'Eau de Parfum 18%', perfumer: 'Álvaro Reyes', year: 2023, sizes: sizes(62), wearWhen: 'Verano, mañanas, viajes',
  },
  {
    id: 'incienso-blanco',
    number: 'Nº 4',
    name: 'Incienso Blanco',
    family: 'Resina luminosa',
    tagline: 'Una iglesia vacía a las diez de la mañana',
    description:
      'Olíbano de Omán, lágrima a lágrima, sobre una base de cera de abeja y madera de cedro. Más luz que humo.',
    accord: ['#c9b48a', '#f1e6c9', '#2b2519'],
    notes: [n('Elemí', 'top', 0.2, 2), n('Mandarina', 'top', 0, 1.3), n('Olíbano', 'heart', 2.4, 7.5), n('Cera de abeja', 'heart', 3, 8), n('Cedro', 'base'), n('Benjuí', 'base', 7, 14)],
    x: 62, y: 52, sillage: 3, longevity: 10, concentration: 'Extrait 25%', perfumer: 'Álvaro Reyes', year: 2022, sizes: sizes(70), wearWhen: 'Domingos, invierno, para estar a solas',
  },
  {
    id: 'te-humo',
    number: 'Nº 5',
    name: 'Té de Humo',
    family: 'Ahumado seco',
    tagline: 'Hojas de lapsang secándose sobre pino',
    description:
      'Té negro ahumado, un poco de miel de brezo y brea de pino. Un olor oscuro pero limpio, de los que la gente pregunta qué llevas.',
    accord: ['#6e4a2f', '#b98c5a', '#1f140d'],
    notes: [n('Té lapsang', 'top', 0.4, 2.2), n('Naranja amarga', 'top', 0, 1.2), n('Miel de brezo', 'heart', 2.2, 6), n('Brea de pino', 'heart', 3, 8), n('Haba tonka', 'base', 6, 14), n('Vetiver', 'base', 5, 13)],
    x: 70, y: 82, sillage: 4, longevity: 12, concentration: 'Extrait 25%', perfumer: 'Clara Montes', year: 2024, sizes: sizes(72), wearWhen: 'Noches de frío, lectura, chimeneas',
  },
  {
    id: 'neroli-seco',
    number: 'Nº 6',
    name: 'Neroli Seco',
    family: 'Cítrico seco',
    tagline: 'Flor de azahar al final de agosto',
    description:
      'Neroli de Túnez sin dulzor, en una caja de paja y cedro. Cítrico que no se evapora a la primera hora, porque su fondo es de madera tostada.',
    accord: ['#e0c36a', '#fff0b0', '#2a2410'],
    notes: [n('Bergamota', 'top', 0, 1.4), n('Cedrat', 'top', 0.2, 1.8), n('Neroli', 'heart', 1.6, 5), n('Paja', 'heart', 2.2, 6), n('Cedro', 'base', 5, 12), n('Almizcle', 'base', 6.5, 13)],
    x: 22, y: 12, sillage: 2, longevity: 5, concentration: 'Eau de Parfum 18%', perfumer: 'Álvaro Reyes', year: 2024, sizes: sizes(58), wearWhen: 'Primavera, oficina, días sin prisa',
  },
];

export const perfMaterials: PerfMaterial[] = [
  { id: 'iris', name: 'Raíz de iris', origin: 'Toscana, Italia', method: 'La raíz se seca y madura seis años antes de destilarse.', kgPerKg: 2000, text: 'Tardamos más en esperar que en trabajar. Nos llega en sacos y huele a zanahoria; seis años después huele a pintalabios y a papel.', color: '#a995d8' },
  { id: 'neroli', name: 'Flor de azahar', origin: 'Nabeul, Túnez', method: 'Destilación al vapor de la flor recogida a mano al amanecer.', kgPerKg: 1000, text: 'Se recoge en tres semanas de abril y hay que destilarla el mismo día. Una hora de retraso y se apaga.', color: '#e0c36a' },
  { id: 'olibano', name: 'Olíbano', origin: 'Dhofar, Omán', method: 'Resina en lágrimas, destilada con agua a baja presión.', kgPerKg: 20, text: 'El árbol sangra una resina que se endurece al aire. Usamos solo la primera calidad, la plateada, casi sin humo.', color: '#c9b48a' },
  { id: 'alga', name: 'Alga absoluta', origin: 'Bretaña, Francia', method: 'Extracción con disolvente volátil de alga recién cortada.', kgPerKg: 180, text: 'Verde oscuro y espesa como una brea. Diluida, huele a la marea baja y a yodo; sin diluir, a nada que quieras oler.', color: '#3f7d8c' },
  { id: 'higo', name: 'Hoja de higuera', origin: 'Aydın, Turquía', method: 'Destilación de hoja verde y extracción de la leche del tallo.', kgPerKg: 600, text: 'Huele a coco verde, a hoja pisada, a leche. Por eso el higo en perfumería casi nunca viene del fruto.', color: '#8a9a5b' },
  { id: 'te', name: 'Té lapsang', origin: 'Wuyi, China', method: 'Hoja ahumada sobre pino y extraída en frío.', kgPerKg: 300, text: 'El humo es parte de la receta, no un defecto. Lo secan sobre fuego de pino y se queda a medio camino entre el té y la hoguera.', color: '#b98c5a' },
  { id: 'vetiver', name: 'Vetiver', origin: 'Les Cayes, Haití', method: 'Raíces lavadas y destiladas durante 24 horas.', kgPerKg: 120, text: 'Una hierba cuyas raíces huelen a tierra mojada, a pomelo y a humo. Es el esqueleto de media colección.', color: '#6d7d4a' },
];

export const perfStats: PerfStat[] = [
  { value: '6', label: 'fragancias de autor' },
  { value: '25%', label: 'de concentración de extracto' },
  { value: '0', label: 'colonias de temporada' },
];

export const perfQuiz: PerfQuizQuestion[] = [
  {
    id: 'morning',
    question: '¿Cómo huele tu mañana ideal?',
    options: [
      { label: 'A ropa recién planchada y una ventana abierta', weights: { 'neroli-seco': 3, 'sal-marina': 2 } },
      { label: 'A café fuerte y una manta', weights: { 'cuero-higo': 3, 'te-humo': 2 } },
      { label: 'A una iglesia vacía y silencio', weights: { 'incienso-blanco': 3, 'iris-noir': 1 } },
      { label: 'A tierra mojada después de la lluvia', weights: { 'iris-noir': 3, 'sal-marina': 1 } },
    ],
  },
  {
    id: 'place',
    question: 'Eliges un lugar para pasar la tarde',
    options: [
      { label: 'Un acantilado con viento', weights: { 'sal-marina': 3, 'neroli-seco': 1 } },
      { label: 'Una biblioteca con estufa', weights: { 'te-humo': 3, 'iris-noir': 2 } },
      { label: 'Un taller de carpintero', weights: { 'cuero-higo': 2, 'incienso-blanco': 2 } },
      { label: 'Un jardín seco a final del verano', weights: { 'neroli-seco': 3, 'incienso-blanco': 1 } },
    ],
  },
  {
    id: 'presence',
    question: '¿Cuánto quieres que se note?',
    options: [
      { label: 'Un susurro: que lo huela quien se acerque', weights: { 'neroli-seco': 3, 'sal-marina': 3 } },
      { label: 'Presencia: que se note al entrar', weights: { 'iris-noir': 3, 'incienso-blanco': 2 } },
      { label: 'Una estela: que se recuerde cuando me vaya', weights: { 'cuero-higo': 3, 'te-humo': 3 } },
    ],
  },
  {
    id: 'hour',
    question: '¿A qué hora lo usarás más?',
    options: [
      { label: 'A primera hora, antes de salir', weights: { 'neroli-seco': 2, 'sal-marina': 2 } },
      { label: 'Al caer la tarde', weights: { 'iris-noir': 2, 'incienso-blanco': 2 } },
      { label: 'Por la noche', weights: { 'cuero-higo': 2, 'te-humo': 2 } },
    ],
  },
];

export const perfSamples: PerfSample[] = perfList.map((f) => ({ fragranceId: f.id, price: 6 }));

export const perfDiscovery = {
  perSample: 6,
  creditBack: true,
  freeShippingFrom: 18,
  maxPick: 6,
};

export const perfFaqs: PerfFaq[] = [
  { q: '¿Qué es la concentración de extracto?', a: 'Es la proporción de esencia pura en el frasco. Un Eau de Parfum lleva un 18% y un Extrait un 25%. Cuanto más extracto, más dura y menos hace falta: dos pulverizaciones bastan.' },
  { q: '¿Puedo probarlos antes de comprar un frasco?', a: 'Sí. El set de descubrimiento son viales de 2 ml por 6 € cada uno. Si después compras el frasco, te devolvemos lo que pagaste por el vial como crédito.' },
  { q: '¿Cuánto tarda un envío?', a: 'Preparamos cada pedido a mano en el atelier y sale en 48 horas laborables. Gratis a partir de 60 €.' },
  { q: '¿Se pueden devolver?', a: 'Los frascos sin abrir, durante 30 días. Los abiertos no, por higiene, pero si no te convence te cambiamos el frasco por un vial de otra fragancia.' },
  { q: '¿Hacéis perfumes a medida?', a: 'Una vez al año abrimos seis plazas para crear una fragancia contigo, en cuatro sesiones. Escríbenos y te avisamos cuando se abra la lista.' },
];

export const perfMember: PerfMember = {
  id: 'UMB-0318',
  name: 'Marta Vidal',
  email: 'marta.vidal@example.com',
  since: '2022-03-11',
  tier: 'Cliente Atelier',
  credit: 18,
};

export const perfShelf: PerfShelfItem[] = [
  { fragranceId: 'iris-noir', ml: 50, level: 64, rating: 5, boughtAt: '2025-02-14' },
  { fragranceId: 'te-humo', ml: 30, level: 18, rating: 4, boughtAt: '2024-11-03' },
  { fragranceId: 'sal-marina', ml: 100, level: 91, boughtAt: '2026-08-20' },
];

export const perfOrders: PerfOrder[] = [
  {
    id: 'UM-24-0412',
    date: '2026-11-19',
    status: 'Preparando',
    items: [
      { fragranceId: 'cuero-higo', ml: 50, qty: 1 },
      { fragranceId: 'incienso-blanco', ml: 2, qty: 1 },
    ],
    total: 112,
    carrier: 'Correos Express',
    tracking: 'Pendiente de salida',
    steps: [
      { label: 'Pedido recibido', date: '2026-11-19', done: true },
      { label: 'Preparado en el atelier', date: '2026-11-21', done: true },
      { label: 'Entregado al transportista', date: 'previsto el 24 de noviembre', done: false },
      { label: 'Entrega', date: 'previsto el 26 de noviembre', done: false },
    ],
  },
  {
    id: 'UM-24-0301',
    date: '2026-08-20',
    status: 'Entregado',
    items: [{ fragranceId: 'sal-marina', ml: 100, qty: 1 }],
    total: 152,
    carrier: 'Correos Express',
    tracking: 'CE0482217733',
    steps: [
      { label: 'Pedido recibido', date: '2026-08-20', done: true },
      { label: 'Preparado en el atelier', date: '2026-08-21', done: true },
      { label: 'Entregado al transportista', date: '2026-08-22', done: true },
      { label: 'Entrega', date: '2026-08-24', done: true },
    ],
  },
  {
    id: 'UM-23-0877',
    date: '2025-02-14',
    status: 'Entregado',
    items: [{ fragranceId: 'iris-noir', ml: 50, qty: 1 }],
    total: 105,
    carrier: 'SEUR',
    tracking: 'SE771904221',
    steps: [
      { label: 'Pedido recibido', date: '2025-02-14', done: true },
      { label: 'Preparado en el atelier', date: '2025-02-15', done: true },
      { label: 'Entregado al transportista', date: '2025-02-17', done: true },
      { label: 'Entrega', date: '2025-02-19', done: true },
    ],
  },
];

export const perfCombos: PerfCombo[] = [
  { id: 'c1', a: 'iris-noir', b: 'te-humo', ratio: 70, name: 'Biblioteca de invierno' },
];

export const perfData = {
  brand: perfBrand,
  stats: perfStats,
  fragrances: perfList,
  materials: perfMaterials,
  quiz: perfQuiz,
  samples: perfSamples,
  discovery: perfDiscovery,
  faqs: perfFaqs,
  member: perfMember,
  shelf: perfShelf,
  orders: perfOrders,
  combos: perfCombos,
};

export function perfById(id: string, list: PerfFragrance[] = perfList): PerfFragrance | undefined {
  return list.find((f) => f.id === id);
}

export function perfMoney(n: number): string {
  return `${n.toLocaleString('es-ES', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 })} €`;
}

/** Strength of a note 0–1 at hour `t` on skin (rises to its peak, then fades out). */
export function perfNoteLevel(note: PerfNote, t: number): number {
  if (t <= note.from || t >= note.to) return 0;
  if (t <= note.peak) {
    const k = (t - note.from) / Math.max(0.0001, note.peak - note.from);
    return Math.sin((k * Math.PI) / 2);
  }
  const k = (t - note.peak) / Math.max(0.0001, note.to - note.peak);
  return Math.cos((k * Math.PI) / 2);
}

/** Mixes two hex colours; `t` is the share of `b` (0–1). */
export function perfMix(a: string, b: string, t: number): string {
  const p = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [ar, ag, ab] = p(a);
  const [br, bg, bb] = p(b);
  const c = (x: number, y: number) => Math.round(x + (y - x) * t).toString(16).padStart(2, '0');
  return `#${c(ar, br)}${c(ag, bg)}${c(ab, bb)}`;
}
