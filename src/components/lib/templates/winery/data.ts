// src/components/lib/templates/winery/data.ts
// Demo data for "Solera" · Winery with a wine-club members area (wines, parcels, visits, club plans,
// cellar, shipments and tasting notes). Replace with your own data; every page and component takes
// these shapes as props.

export type WineType = 'Tinto' | 'Blanco' | 'Rosado' | 'Espumoso';
export type WineShipmentStatus = 'Preparando' | 'En ruta' | 'Entregado' | 'Pausado';

export interface WineRoutes {
  home: string;
  wines: string;
  estate: string;
  visits: string;
  club: string;
  signIn: string;
  dashboard: string;
  cellar: string;
  shipments: string;
}

export interface WineProfile {
  /** 1–5 */
  cuerpo: number;
  acidez: number;
  taninos: number;
  madera: number;
}

export interface WineLabelColors {
  bg: string;
  ink: string;
  accent: string;
}

export interface WineItem {
  id: string;
  name: string;
  type: WineType;
  variety: string;
  vintage: number;
  parcelId: string;
  price: number;
  alcohol: number;
  bottles: number;
  aging: string;
  nose: string;
  palate: string;
  pairing: string;
  profile: WineProfile;
  drinkFrom: number;
  drinkTo: number;
  score: number;
  label: WineLabelColors;
}

export interface WineParcel {
  id: string;
  name: string;
  variety: string;
  altitude: number;
  soil: string;
  planted: number;
  hectares: number;
  exposure: string;
  note: string;
  /** SVG polygon points in a 480×320 box. */
  points: string;
}

export interface WineStage {
  id: string;
  month: string;
  title: string;
  text: string;
  fact: string;
}

export interface WineMilestone {
  year: string;
  title: string;
  text: string;
}

export interface WineVisit {
  id: string;
  name: string;
  summary: string;
  duration: string;
  price: number;
  maxGuests: number;
  includes: string[];
  slots: string[];
  /** Months (1–12) when it is offered. */
  months: number[];
}

export interface WineAward {
  source: string;
  score: string;
  wine: string;
  year: string;
}

export interface WineFaq {
  q: string;
  a: string;
}

export interface WineClubStyle {
  id: string;
  name: string;
  text: string;
}

export interface WineClubFrequency {
  id: string;
  name: string;
  every: string;
}

export interface WineMember {
  id: string;
  name: string;
  since: string;
  tier: string;
  credit: number;
}

export interface WineCellarBottle {
  id: string;
  wineId: string;
  qty: number;
  acquired: string;
  rating?: number;
}

export interface WineShipmentEvent {
  date: string;
  title: string;
  done: boolean;
}

export interface WineShipment {
  id: string;
  date: string;
  status: WineShipmentStatus;
  items: Array<{ wineId: string; qty: number }>;
  carrier: string;
  tracking: string;
  address: string;
  events: WineShipmentEvent[];
}

export interface WineNote {
  id: string;
  wineId: string;
  date: string;
  rating: number;
  profile: WineProfile;
  text: string;
}

export interface WinePlan {
  bottles: number;
  style: string;
  frequency: string;
  nextShipment: string;
  paused: boolean;
}

export const wineRoutes: WineRoutes = {
  home: '/',
  wines: '/vinos',
  estate: '/finca',
  visits: '/visitas',
  club: '/club',
  signIn: '/acceso',
  dashboard: '/socios',
  cellar: '/socios/bodega',
  shipments: '/socios/envios',
};

export const wineBrand = {
  name: 'Solera',
  tagline: 'Vino de altura, hecho a mano',
  place: 'Peñafiel · Ribera del Duero',
  address: 'Camino del Cerro s/n, 47300 Peñafiel, Valladolid',
  phone: '+34 983 000 000',
  email: 'bodega@solera.example',
  altitude: 920,
  founded: 1921,
};

export const wineList: WineItem[] = [
  {
    id: 'solera', name: 'Solera Reserva', type: 'Tinto', variety: 'Tempranillo', vintage: 2019, parcelId: 'la-solana', price: 36, alcohol: 14.5, bottles: 28000,
    aging: '24 meses en roble francés y americano',
    nose: 'Ciruela madura, cuero fino, cacao y una nota de tabaco rubio.',
    palate: 'Redondo y con tensión; taninos pulidos y un final largo de especias dulces.',
    pairing: 'Cordero lechal asado, quesos curados, setas de otoño.',
    profile: { cuerpo: 4, acidez: 3, taninos: 4, madera: 3 }, drinkFrom: 2023, drinkTo: 2033, score: 94,
    label: { bg: '#4a0f1b', ink: '#f2e6cf', accent: '#d9a441' },
  },
  {
    id: 'cumbre', name: 'Cumbre', type: 'Tinto', variety: 'Tempranillo y Garnacha', vintage: 2020, parcelId: 'el-cerro', price: 58, alcohol: 14, bottles: 9000,
    aging: '18 meses en barricas de 500 litros',
    nose: 'Violetas, frambuesa negra, piedra mojada y romero.',
    palate: 'Fresco y mineral, de tanino fino y mucha energía; sabe a altitud.',
    pairing: 'Pichón, caza menor, arroces de monte.',
    profile: { cuerpo: 3, acidez: 5, taninos: 3, madera: 2 }, drinkFrom: 2024, drinkTo: 2036, score: 96,
    label: { bg: '#1d2a2b', ink: '#efe6d2', accent: '#c9d6a3' },
  },
  {
    id: 'pizarra', name: 'Pizarra', type: 'Blanco', variety: 'Albillo mayor', vintage: 2022, parcelId: 'pizarral', price: 24, alcohol: 13, bottles: 6500,
    aging: '8 meses sobre lías en foudre',
    nose: 'Manzana asada, flor de acacia, almendra y humo de pedernal.',
    palate: 'Untuoso pero muy vivo; sal y cítricos en un final preciso.',
    pairing: 'Pescados azules, pollo de corral, quesos de oveja jóvenes.',
    profile: { cuerpo: 3, acidez: 4, taninos: 1, madera: 2 }, drinkFrom: 2023, drinkTo: 2028, score: 92,
    label: { bg: '#e9dcae', ink: '#2a2310', accent: '#7a5a14' },
  },
  {
    id: 'cierzo', name: 'Cierzo', type: 'Rosado', variety: 'Garnacha', vintage: 2023, parcelId: 'los-pozos', price: 16, alcohol: 13, bottles: 12000,
    aging: 'Sin madera, 4 meses en depósito',
    nose: 'Fresa de monte, pétalo de rosa y pomelo rosado.',
    palate: 'Seco, crujiente y gastronómico, con un punto salino al final.',
    pairing: 'Ensaladas templadas, arroces, embutidos ibéricos.',
    profile: { cuerpo: 2, acidez: 4, taninos: 1, madera: 1 }, drinkFrom: 2024, drinkTo: 2026, score: 90,
    label: { bg: '#e8b6b0', ink: '#3a1218', accent: '#8f1f33' },
  },
  {
    id: 'alba', name: 'Alba Brut Nature', type: 'Espumoso', variety: 'Albillo mayor', vintage: 2021, parcelId: 'pizarral', price: 28, alcohol: 12, bottles: 5000,
    aging: '30 meses en rima, sin dosificación',
    nose: 'Brioche, pera, avellana tostada y cal.',
    palate: 'Burbuja cremosa y fina, seco y largo.',
    pairing: 'Ostras, tempura, jamón de bellota.',
    profile: { cuerpo: 2, acidez: 5, taninos: 1, madera: 1 }, drinkFrom: 2024, drinkTo: 2030, score: 93,
    label: { bg: '#cbd6b0', ink: '#1c2a14', accent: '#4a5d2c' },
  },
  {
    id: 'madre', name: 'Madre', type: 'Tinto', variety: 'Tempranillo de cepas de 90 años', vintage: 2018, parcelId: 'el-cerro', price: 120, alcohol: 14.5, bottles: 2400,
    aging: '30 meses en roble francés nuevo y 12 en botella',
    nose: 'Fruta negra confitada, tierra, incienso y trufa.',
    palate: 'Profundo y envolvente, con una acidez que lo sostiene todo hasta el final.',
    pairing: 'Carnes de caza, estofados lentos, trufa.',
    profile: { cuerpo: 5, acidez: 4, taninos: 5, madera: 4 }, drinkFrom: 2025, drinkTo: 2045, score: 98,
    label: { bg: '#0f0a0a', ink: '#e8d9b8', accent: '#c1272d' },
  },
];

export const wineParcels: WineParcel[] = [
  { id: 'el-cerro', name: 'El Cerro', variety: 'Tempranillo viejo', altitude: 920, soil: 'Caliza con canto rodado', planted: 1921, hectares: 3.2, exposure: 'Sur-sureste', note: 'La parcela más antigua y alta. Cepas en vaso, sin riego, con rendimientos de apenas 1,2 kg por cepa. De aquí sale Madre.', points: '60,60 190,40 230,120 150,170 70,140' },
  { id: 'la-solana', name: 'La Solana', variety: 'Tempranillo', altitude: 880, soil: 'Arcilla y caliza', planted: 1987, hectares: 5.1, exposure: 'Sur', note: 'El corazón del Reserva. Más sol, más cuerpo y una maduración pausada gracias a las noches frías.', points: '230,120 190,40 330,50 360,130 290,170' },
  { id: 'pizarral', name: 'El Pizarral', variety: 'Albillo mayor', altitude: 940, soil: 'Pizarra y cuarcita', planted: 1954, hectares: 1.8, exposure: 'Norte', note: 'Un rincón de pizarra donde el albillo madura despacio y conserva toda su acidez. Origen de Pizarra y Alba.', points: '330,50 430,70 440,150 360,130' },
  { id: 'los-pozos', name: 'Los Pozos', variety: 'Garnacha', altitude: 860, soil: 'Arena y canto rodado', planted: 1975, hectares: 2.6, exposure: 'Este', note: 'Suelos sueltos y calientes, donde la garnacha da fruta fresca y color justo. Aquí nace Cierzo.', points: '70,140 150,170 140,260 50,240' },
  { id: 'la-umbria', name: 'La Umbría', variety: 'Tempranillo y Garnacha', altitude: 900, soil: 'Mezcla de arcilla y grava', planted: 2008, hectares: 4, exposure: 'Noroeste', note: 'La más joven, plantada en un campo de ensayo de clones; ayuda a Cumbre con frescura y equilibrio.', points: '150,170 230,120 290,170 360,130 440,150 400,250 300,290 140,260' },
];

export const wineStages: WineStage[] = [
  { id: 'poda', month: 'Diciembre — Febrero', title: 'Poda', text: 'La cepa duerme y nosotros la leemos. Cada cepa se poda a mano, una a una, decidiendo cuántos brazos tendrá la próxima cosecha. Aquí se decide media añada.', fact: '24 horas de poda a mano por hectárea' },
  { id: 'brotacion', month: 'Marzo — Mayo', title: 'Brotación', text: 'Con los primeros 10 °C despiertan las yemas. Es el mes más inquieto: una helada tardía a 900 metros puede llevarse el año entero. Velamos con estufas de leña y paciencia.', fact: 'Una helada de −2 °C basta para perder la brotación' },
  { id: 'envero', month: 'Junio — Agosto', title: 'Envero', text: 'La uva cambia de color y el viñedo huele distinto. Días de 35 grados y noches de 12: esa amplitud térmica dibuja la acidez y el color que luego encontrarás en la copa.', fact: '23 °C de diferencia entre el día y la noche' },
  { id: 'vendimia', month: 'Septiembre — Octubre', title: 'Vendimia', text: 'Se vendimia a mano, de madrugada, en cajas de 12 kilos. Cada parcela entra en su momento y viaja a la bodega en menos de una hora. Aquí ya no hay vuelta atrás.', fact: 'Menos de 60 minutos de la cepa al depósito' },
  { id: 'crianza', month: 'Noviembre — Siempre', title: 'Crianza', text: 'El vino reposa en la oscuridad de la bodega subterránea. Escuchamos las barricas, probamos, esperamos. Un gran vino no se hace: se deja hacer.', fact: '14 °C y 78 % de humedad todo el año' },
];

export const wineMilestones: WineMilestone[] = [
  { year: '1921', title: 'Las primeras cepas', text: 'Eutimio Alonso planta cuatro hectáreas de tempranillo en El Cerro, a casi mil metros de altitud, cuando nadie se atrevía.' },
  { year: '1964', title: 'La primera botella', text: 'Hasta entonces el vino se vendía a granel. Su hija Rosario embotella la primera añada con su propio nombre.' },
  { year: '1998', title: 'Viñedo sin química', text: 'Se abandonan herbicidas y fertilizantes de síntesis. Los rendimientos caen un tercio y la calidad sube el doble.' },
  { year: '2016', title: 'Bodega subterránea', text: 'Se excava a mano una nave en la ladera norte para criar los vinos por gravedad y sin climatización.' },
  { year: '2024', title: 'Club de socios', text: 'Abrimos la bodega a quienes quieren seguir el vino durante todo el año, no solo comprarlo.' },
];

export const wineVisits: WineVisit[] = [
  { id: 'clasica', name: 'Visita a la bodega y cata de tres vinos', summary: 'Del viñedo a la barrica: recorres la finca, bajas a la bodega subterránea y cierras con tres vinos y una tabla de quesos.', duration: '90 min', price: 25, maxGuests: 12, includes: ['Paseo por El Cerro', 'Bodega subterránea', 'Tres vinos', 'Tabla de quesos de la zona'], slots: ['11:00', '13:00', '17:00'], months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  { id: 'vertical', name: 'Cata vertical de Madre', summary: 'Cuatro añadas de nuestro vino más pequeño, con el enólogo y sin prisa. Para quien quiere entender cómo cambia un gran vino con los años.', duration: '2 h', price: 65, maxGuests: 8, includes: ['Cuatro añadas de Madre', 'Con el enólogo', 'Copas Zalto', 'Pan de leña y jamón'], slots: ['12:00', '18:00'], months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  { id: 'picnic', name: 'Picnic entre viñas', summary: 'Una cesta con producto local, una manta y una botella para abrir a tu ritmo en la parcela de La Solana, con vistas al valle.', duration: '3 h', price: 45, maxGuests: 6, includes: ['Cesta de producto local', 'Una botella a elegir', 'Manta y mesa baja', 'Paseo guiado de 30 min'], slots: ['12:30', '17:30'], months: [4, 5, 6, 7, 8, 9, 10] },
  { id: 'vendimia', name: 'Un día de vendimia', summary: 'Cortas uva con nuestro equipo, pisas un lagar y comes con quienes hicieron el vino. Se llevan manchas y una caja de vendimia.', duration: '6 h', price: 95, maxGuests: 10, includes: ['Corte de uva a mano', 'Pisado en lagar de piedra', 'Comida con el equipo', 'Una botella firmada'], slots: ['09:00'], months: [9, 10] },
];

export const wineAwards: WineAward[] = [
  { source: 'Guía Atalaya', score: '98', wine: 'Madre 2018', year: '2025' },
  { source: 'Revista Cepa', score: '96', wine: 'Cumbre 2020', year: '2025' },
  { source: 'Concurso Vino de Altura', score: '94', wine: 'Solera Reserva 2019', year: '2024' },
  { source: 'Guía Atalaya', score: '93', wine: 'Alba Brut Nature 2021', year: '2025' },
];

export const wineFaqs: WineFaq[] = [
  { q: '¿Necesito reservar para visitar la bodega?', a: 'Sí. Trabajamos con grupos pequeños para que cada visita sea una conversación. Reserva con al menos 24 horas; si buscas hueco el mismo día, llámanos.' },
  { q: '¿Puedo llevarme vino después de la visita?', a: 'Claro. Tenemos una tienda en la bodega y enviamos a toda la península en 48-72 horas con cajas que protegen las botellas.' },
  { q: '¿Cómo funciona el club de socios?', a: 'Eliges cuántas botellas, qué estilo y cada cuánto tiempo. Recibes las botellas con una nota de cata de la enóloga. Puedes pausar, saltar o cancelar cuando quieras, sin permanencia.' },
  { q: '¿Qué pasa si no estoy en casa al recibir la caja?', a: 'El transportista deja aviso y reintenta al día siguiente. También puedes cambiar la dirección o reprogramar el envío desde tu área de socios.' },
  { q: '¿Los vinos son ecológicos?', a: 'El viñedo se cultiva sin herbicidas ni fertilizantes de síntesis desde 1998 y estamos certificados desde 2012. En bodega usamos levaduras autóctonas y poco sulfuroso.' },
  { q: '¿Hacéis eventos privados?', a: 'Sí: celebraciones de hasta 40 personas, comidas de empresa y bodas pequeñas. Escríbenos con fecha y número de invitados.' },
];

export const wineClubBottles = [2, 3, 6];

export const wineClubStyles: WineClubStyle[] = [
  { id: 'tintos', name: 'Solo tintos', text: 'Reserva, Cumbre y ediciones de la casa.' },
  { id: 'mixto', name: 'Mixto', text: 'Tintos, un blanco y un rosado o espumoso.' },
  { id: 'blancos', name: 'Blancos y espumosos', text: 'Pizarra, Alba y lo que haya en rima.' },
  { id: 'sorpresa', name: 'Sorpréndeme', text: 'La enóloga elige lo que mejor esté ese mes.' },
];

export const wineClubFrequencies: WineClubFrequency[] = [
  { id: 'mensual', name: 'Cada mes', every: 'monthly' },
  { id: 'trimestral', name: 'Cada trimestre', every: 'quarterly' },
  { id: 'semestral', name: 'Cada seis meses', every: 'half-yearly' },
];

/** Club pricing: average price per bottle by style, volume discount by bottles per shipment, shipments per year. */
export const winePricing = {
  avg: { tintos: 38, mixto: 30, blancos: 24, sorpresa: 28 } as Record<string, number>,
  discount: { 2: 0, 3: 0.06, 4: 0.08, 6: 0.12 } as Record<number, number>,
  perYear: { mensual: 12, trimestral: 4, semestral: 2 } as Record<string, number>,
};

export const wineMember: WineMember = {
  id: 'SOC-0214',
  name: 'Lucía Ferrer',
  since: '2023-03-12',
  tier: 'Socia Reserva',
  credit: 42,
};

export const wineCellar: WineCellarBottle[] = [
  { id: 'c1', wineId: 'solera', qty: 5, acquired: '2025-02-10', rating: 5 },
  { id: 'c2', wineId: 'cumbre', qty: 3, acquired: '2025-06-02', rating: 4 },
  { id: 'c3', wineId: 'pizarra', qty: 2, acquired: '2025-09-14' },
  { id: 'c4', wineId: 'madre', qty: 1, acquired: '2024-12-05' },
  { id: 'c5', wineId: 'alba', qty: 4, acquired: '2025-10-20', rating: 5 },
  { id: 'c6', wineId: 'cierzo', qty: 0, acquired: '2025-05-22', rating: 3 },
];

export const wineShipments: WineShipment[] = [
  {
    id: 'ENV-2611', date: '2026-12-05', status: 'Preparando', carrier: 'Transportes Duero', tracking: 'TD-882104', address: 'Calle Hortaleza 48, 3.º B · 28004 Madrid',
    items: [{ wineId: 'solera', qty: 2 }, { wineId: 'pizarra', qty: 1 }, { wineId: 'alba', qty: 1 }],
    events: [
      { date: '2026-11-20', title: 'Selección de la enóloga', done: true },
      { date: '2026-12-02', title: 'Embalaje en la bodega', done: false },
      { date: '2026-12-05', title: 'Recogida del transportista', done: false },
    ],
  },
  {
    id: 'ENV-2608', date: '2026-09-05', status: 'Entregado', carrier: 'Transportes Duero', tracking: 'TD-771930', address: 'Calle Hortaleza 48, 3.º B · 28004 Madrid',
    items: [{ wineId: 'cumbre', qty: 2 }, { wineId: 'cierzo', qty: 2 }],
    events: [
      { date: '2026-08-30', title: 'Selección de la enóloga', done: true },
      { date: '2026-09-03', title: 'Embalaje en la bodega', done: true },
      { date: '2026-09-05', title: 'Recogida del transportista', done: true },
      { date: '2026-09-07', title: 'Entregado', done: true },
    ],
  },
  {
    id: 'ENV-2604', date: '2026-06-06', status: 'Entregado', carrier: 'Transportes Duero', tracking: 'TD-660248', address: 'Calle Hortaleza 48, 3.º B · 28004 Madrid',
    items: [{ wineId: 'solera', qty: 3 }, { wineId: 'alba', qty: 1 }],
    events: [
      { date: '2026-05-31', title: 'Selección de la enóloga', done: true },
      { date: '2026-06-04', title: 'Embalaje en la bodega', done: true },
      { date: '2026-06-06', title: 'Recogida del transportista', done: true },
      { date: '2026-06-08', title: 'Entregado', done: true },
    ],
  },
];

export const wineNotes: WineNote[] = [
  { id: 'n1', wineId: 'solera', date: '2026-10-18', rating: 5, profile: { cuerpo: 4, acidez: 3, taninos: 4, madera: 3 }, text: 'Con cordero en casa de mis padres. Mucho mejor tras decantar una hora; el cacao se abre y los taninos se suavizan.' },
  { id: 'n2', wineId: 'alba', date: '2026-09-27', rating: 5, profile: { cuerpo: 2, acidez: 5, taninos: 1, madera: 1 }, text: 'Ostras y una tarde de domingo. Burbuja finísima. Repetiría sin pensarlo.' },
  { id: 'n3', wineId: 'cierzo', date: '2026-07-12', rating: 3, profile: { cuerpo: 2, acidez: 4, taninos: 1, madera: 1 }, text: 'Fresco y fácil de beber, pero demasiado ligero para la paella. Mejor solo, en la terraza.' },
];

export const winePlan: WinePlan = {
  bottles: 4,
  style: 'mixto',
  frequency: 'trimestral',
  nextShipment: '2026-12-05',
  paused: false,
};

export const wineStats = [
  { value: '920 m', label: 'de altitud en la parcela más alta' },
  { value: '1921', label: 'año de las primeras cepas' },
  { value: '17 ha', label: 'trabajadas a mano' },
  { value: '63 mil', label: 'botellas al año, ni una más' },
];

export function wineById(id: string, list: WineItem[] = wineList): WineItem | undefined {
  return list.find((w) => w.id === id);
}

export function wineMoney(n: number): string {
  return n.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
}

/** Everything the pages need in one object, so you can replace it wholesale with your own data. */
export const wineData = {
  brand: wineBrand,
  stats: wineStats,
  wines: wineList,
  parcels: wineParcels,
  stages: wineStages,
  milestones: wineMilestones,
  visits: wineVisits,
  awards: wineAwards,
  faqs: wineFaqs,
  member: wineMember,
  cellar: wineCellar,
  shipments: wineShipments,
  notes: wineNotes,
  plan: winePlan,
};
