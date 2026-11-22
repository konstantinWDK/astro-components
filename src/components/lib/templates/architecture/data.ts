/**
 * Data and types for the "Cota" architecture-studio template.
 * Every page and component reads from here, so you can swap it for your own projects, estimate
 * rules and client works without touching markup.
 */

export interface ArchRoutes {
  home: string;
  projects: string;
  studio: string;
  estimate: string;
  signIn: string;
  dashboard: string;
  budget: string;
  documents: string;
}

export type ArchType = 'Vivienda' | 'Cultural' | 'Rehabilitación' | 'Oficinas';
export type ArchRoof = 'flat' | 'gable' | 'saw';

export interface ArchProject {
  id: string;
  name: string;
  type: ArchType;
  year: number;
  place: string;
  area: number;
  cost: number;
  material: string;
  text: string;
  program: string;
  /** Seeds the generated floor plan and elevation. */
  seed: number;
  floors: number;
  bays: number;
  roof: ArchRoof;
}

export interface ArchPhase {
  id: string;
  name: string;
  weeks: number;
  text: string;
}

export interface ArchPrinciple {
  title: string;
  text: string;
}

export interface ArchFaq {
  q: string;
  a: string;
}

export interface ArchStat {
  value: string;
  label: string;
}

export interface ArchMember {
  id: string;
  name: string;
  email: string;
  tier: string;
}

export interface ArchWork {
  id: string;
  name: string;
  address: string;
  seed: number;
  floors: number;
  bays: number;
  roof: ArchRoof;
  /** Overall progress 0–100. */
  progress: number;
  phaseIndex: number;
  start: string;
  end: string;
  architect: string;
  siteManager: string;
}

export interface ArchBudgetLine {
  id: string;
  name: string;
  budget: number;
  spent: number;
}

export interface ArchChangeOrder {
  id: string;
  text: string;
  amount: number;
  status: 'Pendiente' | 'Aprobado' | 'Rechazado';
}

export interface ArchDecision {
  id: string;
  title: string;
  due: string;
  options: Array<{ id: string; label: string; note: string; extra: number }>;
  chosen?: string;
}

export interface ArchDiaryEntry {
  id: string;
  date: string;
  title: string;
  text: string;
  phase: string;
}

export interface ArchDocument {
  id: string;
  name: string;
  kind: string;
  date: string;
  status: 'Firmado' | 'Pendiente de firma' | 'Para revisar';
  size: string;
}

export interface ArchEstimateRules {
  perM2: Record<'basica' | 'media' | 'alta', number>;
  kind: Record<'nueva' | 'reforma', number>;
  floorSurcharge: number;
  fees: number;
  permits: number;
  spread: number;
}

export const archRoutes: ArchRoutes = {
  home: '/',
  projects: '/obras',
  studio: '/estudio',
  estimate: '/presupuesto',
  signIn: '/acceso',
  dashboard: '/obra',
  budget: '/obra/presupuesto',
  documents: '/obra/documentos',
};

export const archBrand = {
  name: 'Cota',
  tagline: 'Arquitectura sin adjetivos',
  address: 'Calle de Fuencarral 71, 28004 Madrid',
  phone: '+34 910 000 071',
  email: 'estudio@cota.example',
  latitude: 40.4,
};

export const archStats: ArchStat[] = [
  { value: '112', label: 'obras entregadas desde 2009' },
  { value: '41', label: 'semanas de media entre licencia y llaves' },
  { value: '3,1 %', label: 'desvío medio sobre el presupuesto' },
];

export const archProjects: ArchProject[] = [
  { id: 'casa-pinar', name: 'Casa en el Pinar', type: 'Vivienda', year: 2025, place: 'Las Rozas, Madrid', area: 240, cost: 612000, material: 'Hormigón visto y madera de pino', text: 'Una vivienda que se abre al sur con un patio entre dos volúmenes y se cierra al norte con un muro ciego.', program: 'Salón, cocina, cuatro dormitorios y estudio', seed: 17, floors: 2, bays: 5, roof: 'flat' },
  { id: 'centro-vecinal', name: 'Centro vecinal de Usera', type: 'Cultural', year: 2024, place: 'Usera, Madrid', area: 920, cost: 1780000, material: 'Ladrillo cerámico y cubierta en diente de sierra', text: 'Una sala diáfana que se ilumina por lucernarios al norte y que el barrio usa de la mañana a la noche.', program: 'Sala polivalente, biblioteca, talleres y cafetería', seed: 29, floors: 2, bays: 7, roof: 'saw' },
  { id: 'granero', name: 'Granero reformado', type: 'Rehabilitación', year: 2024, place: 'Ávila', area: 310, cost: 498000, material: 'Piedra existente y acero patinado', text: 'Se conserva la envolvente de piedra y se introduce una estructura nueva de acero que sostiene las plantas.', program: 'Vivienda, taller y galería', seed: 41, floors: 2, bays: 4, roof: 'gable' },
  { id: 'oficinas-lavapies', name: 'Oficinas en Lavapiés', type: 'Oficinas', year: 2023, place: 'Lavapiés, Madrid', area: 1450, cost: 2640000, material: 'Estructura de madera laminada y vidrio', text: 'Cuatro plantas de madera laminada con un patio de luces que ventila el edificio en verano.', program: 'Oficinas abiertas, salas y terraza', seed: 53, floors: 4, bays: 6, roof: 'flat' },
  { id: 'casa-patio', name: 'Casa del patio', type: 'Vivienda', year: 2023, place: 'Toledo', area: 180, cost: 396000, material: 'Cal, teja y suelos de barro', text: 'Una casa de una planta alrededor de un patio que regula la temperatura sin aire acondicionado.', program: 'Salón, cocina y tres dormitorios', seed: 67, floors: 1, bays: 5, roof: 'gable' },
  { id: 'biblioteca', name: 'Biblioteca de barrio', type: 'Cultural', year: 2022, place: 'Getafe, Madrid', area: 640, cost: 1190000, material: 'Hormigón blanco y vidrio', text: 'Un volumen blanco levantado sobre una plaza cubierta, con las estanterías colgadas de la fachada.', program: 'Sala de lectura, fondo infantil y auditorio', seed: 79, floors: 3, bays: 6, roof: 'flat' },
];

export const archPhases: ArchPhase[] = [
  { id: 'estudio', name: 'Estudio previo', weeks: 3, text: 'Vamos al solar, medimos y miramos el sol. Entregamos un informe de lo que se puede construir y cuánto costaría.' },
  { id: 'basico', name: 'Proyecto básico', weeks: 6, text: 'Dibujamos la casa: plantas, secciones y volumen. Hacemos maquetas y se las enseñamos a quien vaya a vivir allí.' },
  { id: 'licencia', name: 'Licencia', weeks: 14, text: 'Presentamos el proyecto en el ayuntamiento y respondemos a sus requerimientos hasta tener el permiso.' },
  { id: 'ejecucion', name: 'Proyecto de ejecución', weeks: 8, text: 'Detallamos cada junta y cada material para pedir precios cerrados a tres constructoras.' },
  { id: 'obra', name: 'Obra', weeks: 32, text: 'Visitamos la obra cada semana y escribimos un diario de lo que vemos. Aprobamos cada certificación antes de pagarla.' },
  { id: 'entrega', name: 'Entrega', weeks: 2, text: 'Revisamos la casa contigo, listamos lo pendiente y entregamos los planos finales y el manual de uso.' },
];

export const archPrinciples: ArchPrinciple[] = [
  { title: 'Primero el solar', text: 'Antes de dibujar nada pasamos un día entero en el terreno. El sol, el viento y las vistas deciden más que nosotros.' },
  { title: 'Un presupuesto que se cumple', text: 'Pedimos precios cerrados y no empezamos la obra hasta que el presupuesto y el proyecto dicen lo mismo.' },
  { title: 'Menos materiales, mejor usados', text: 'Cada casa se hace con tres o cuatro materiales. Lo que no hace falta no se pone, y eso también abarata.' },
  { title: 'Semana a semana', text: 'En obra, una visita por semana y un diario escrito. Lo que pasa en tu obra lo ves en tu cuenta cuando pasa.' },
];

export const archFaqs: ArchFaq[] = [
  { q: '¿Cuánto cobráis?', a: 'Nuestros honorarios son un 9 % del presupuesto de obra para vivienda nueva y un 11 % para rehabilitación. Los pagamos por fases: nunca más del 30 % antes de tener la licencia.' },
  { q: '¿Cuánto tarda hacer una casa?', a: 'Entre once y catorce meses desde el estudio previo hasta las llaves, de los cuales la licencia suele llevarse tres o cuatro.' },
  { q: '¿Qué pasa si la obra se pasa de presupuesto?', a: 'Cualquier cambio con coste se plantea por escrito en tu cuenta, con su importe, y solo se ejecuta cuando lo apruebas. El desvío medio de nuestras obras es del 3,1 %.' },
  { q: '¿Trabajáis fuera de Madrid?', a: 'Sí, en toda España. Para obras a más de dos horas colaboramos con un arquitecto técnico local que visita la obra a diario.' },
  { q: '¿Puedo ver una obra terminada?', a: 'Siempre. Cada primer sábado de mes abrimos una de nuestras casas a quien quiera visitarla. Pídenos fecha.' },
];

export const archEstimateRules: ArchEstimateRules = {
  perM2: { basica: 1250, media: 1650, alta: 2300 },
  kind: { nueva: 1, reforma: 0.82 },
  floorSurcharge: 0.04,
  fees: 0.09,
  permits: 0.035,
  spread: 0.12,
};

export const archMember: ArchMember = {
  id: 'COT-0092',
  name: 'Inés y Pablo Roldán',
  email: 'roldan@example.com',
  tier: 'Promotores',
};

export const archWork: ArchWork = {
  id: 'O-2026-014',
  name: 'Casa en el Pinar',
  address: 'Calle de los Almendros 9, Las Rozas',
  seed: 17,
  floors: 2,
  bays: 5,
  roof: 'flat',
  progress: 58,
  phaseIndex: 4,
  start: '2025-09-15',
  end: '2026-12-18',
  architect: 'Lucía Ramos',
  siteManager: 'Tomás Gil',
};

export const archBudgetLines: ArchBudgetLine[] = [
  { id: 'cim', name: 'Movimiento de tierras y cimentación', budget: 58000, spent: 58000 },
  { id: 'est', name: 'Estructura de hormigón', budget: 142000, spent: 142000 },
  { id: 'cer', name: 'Cerramientos y fachada', budget: 96000, spent: 61000 },
  { id: 'cub', name: 'Cubierta e impermeabilización', budget: 44000, spent: 44000 },
  { id: 'ins', name: 'Instalaciones', budget: 88000, spent: 21000 },
  { id: 'car', name: 'Carpintería y vidrios', budget: 71000, spent: 18000 },
  { id: 'aca', name: 'Acabados y pavimentos', budget: 82000, spent: 0 },
  { id: 'ext', name: 'Urbanización y patio', budget: 31000, spent: 0 },
];

export const archChangeOrders: ArchChangeOrder[] = [
  { id: 'M-07', text: 'Ampliar la ventana del salón a 3,2 m de ancho', amount: 2800, status: 'Pendiente' },
  { id: 'M-06', text: 'Suelo radiante también en el estudio', amount: 1900, status: 'Pendiente' },
  { id: 'M-05', text: 'Cambiar la escalera de hormigón por una de acero', amount: 4200, status: 'Rechazado' },
  { id: 'M-04', text: 'Añadir un toldo en el patio sur', amount: 1500, status: 'Aprobado' },
];

export const archDecisions: ArchDecision[] = [
  { id: 'D-12', title: 'Pavimento del salón', due: '2026-12-02', options: [
    { id: 'a', label: 'Microcemento pulido', note: 'Continuo, frío en invierno sin suelo radiante', extra: 0 },
    { id: 'b', label: 'Roble aceitado', note: 'Cálido, pide mantenimiento cada dos años', extra: 3400 },
    { id: 'c', label: 'Barro cocido', note: 'Regula la humedad, aguanta el patio abierto', extra: 1800 },
  ] },
  { id: 'D-13', title: 'Color de la carpintería exterior', due: '2026-12-10', options: [
    { id: 'a', label: 'Negro grafito', note: 'Contrasta con el hormigón', extra: 0 },
    { id: 'b', label: 'Madera natural', note: 'Se integra con los pinos', extra: 1200 },
  ] },
];

export const archDiary: ArchDiaryEntry[] = [
  { id: 'e1', date: '2026-11-20', title: 'Se cierra el forjado de la planta alta', text: 'Terminamos de hormigonar el forjado en un solo día. Mañana se retira el apeo parcial. Lucía ha revisado las armaduras antes del vertido.', phase: 'Obra' },
  { id: 'e2', date: '2026-11-13', title: 'Llegan las ventanas del salón', text: 'Los marcos de acero han llegado una semana antes de lo previsto. Se acopian bajo cubierto hasta que se cierre la fachada.', phase: 'Obra' },
  { id: 'e3', date: '2026-11-06', title: 'Muros de la planta baja', text: 'Se levantan los muros de hormigón visto del patio. El acabado del encofrado ha salido mejor que en la muestra.', phase: 'Obra' },
  { id: 'e4', date: '2026-10-23', title: 'Visita con el instalador', text: 'Se decide el recorrido del suelo radiante y se mueven dos patinillos para no cortar la viga del salón.', phase: 'Obra' },
  { id: 'e5', date: '2026-09-18', title: 'Termina la cimentación', text: 'La cimentación pasa la inspección. Empezamos con los pilares de la planta baja.', phase: 'Obra' },
];

export const archDocuments: ArchDocument[] = [
  { id: 'f1', name: 'Certificación de obra nº 5', kind: 'Certificación', date: '2026-11-18', status: 'Pendiente de firma', size: '214 KB' },
  { id: 'f2', name: 'Modificado nº 06: suelo radiante en el estudio', kind: 'Modificado', date: '2026-11-15', status: 'Para revisar', size: '98 KB' },
  { id: 'f3', name: 'Planos de instalaciones rev. C', kind: 'Planos', date: '2026-11-04', status: 'Firmado', size: '8,4 MB' },
  { id: 'f4', name: 'Certificación de obra nº 4', kind: 'Certificación', date: '2026-10-19', status: 'Firmado', size: '207 KB' },
  { id: 'f5', name: 'Licencia de obras', kind: 'Licencia', date: '2026-06-02', status: 'Firmado', size: '1,2 MB' },
  { id: 'f6', name: 'Contrato con la constructora', kind: 'Contrato', date: '2026-05-12', status: 'Firmado', size: '640 KB' },
];

export const archData = {
  brand: archBrand,
  stats: archStats,
  projects: archProjects,
  phases: archPhases,
  principles: archPrinciples,
  faqs: archFaqs,
  rules: archEstimateRules,
  member: archMember,
  work: archWork,
  budgetLines: archBudgetLines,
  changeOrders: archChangeOrders,
  decisions: archDecisions,
  diary: archDiary,
  documents: archDocuments,
};

export function archMoney(n: number): string {
  return `${Math.round(n).toLocaleString('es-ES')} €`;
}

export function archById(id: string, list: ArchProject[] = archProjects): ArchProject | undefined {
  return list.find((p) => p.id === id);
}

/** Seeded random generator (mulberry32) used by the generated drawings. */
export function archRng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface ArchRoom {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
}

const ROOM_NAMES = ['Salón', 'Cocina', 'Dormitorio', 'Estudio', 'Baño', 'Dormitorio', 'Entrada', 'Despensa', 'Aseo', 'Trastero', 'Paso', 'Almacén'];

/** Floor plan by binary space partition: splits a rectangle into rooms and names them by size. */
export function archPlan(seed: number, w = 120, h = 80, depth = 3): ArchRoom[] {
  const rnd = archRng(seed);
  const rects: Array<{ x: number; y: number; w: number; h: number }> = [];
  const split = (x: number, y: number, rw: number, rh: number, d: number) => {
    if (d === 0 || rw < 26 || rh < 22) {
      rects.push({ x, y, w: rw, h: rh });
      return;
    }
    const vertical = rw / rh > 1 + (rnd() - 0.5) * 0.4;
    const cut = 0.38 + rnd() * 0.24;
    if (vertical) {
      const a = Math.round(rw * cut);
      split(x, y, a, rh, d - 1);
      split(x + a, y, rw - a, rh, d - 1);
    } else {
      const a = Math.round(rh * cut);
      split(x, y, rw, a, d - 1);
      split(x, y + a, rw, rh - a, d - 1);
    }
  };
  split(0, 0, w, h, depth);
  const order = [...rects].sort((a, b) => b.w * b.h - a.w * a.h);
  return rects.map((r) => ({ ...r, label: ROOM_NAMES[order.indexOf(r) % ROOM_NAMES.length] }));
}

export type ArchOpening = 'window' | 'door' | 'balcony' | 'blank';

/** Facade grid: one entry per floor and bay. */
export function archFacade(seed: number, floors: number, bays: number): ArchOpening[][] {
  const rnd = archRng(seed + 101);
  const doorBay = Math.floor(rnd() * bays);
  return Array.from({ length: floors }, (_, f) =>
    Array.from({ length: bays }, (_, b) => {
      const r = rnd();
      if (f === floors - 1 && b === doorBay) return 'door' as const;
      if (r < 0.14) return 'blank' as const;
      if (f > 0 && r > 0.82) return 'balcony' as const;
      return 'window' as const;
    }),
  );
}

/** Sun altitude and azimuth (degrees, azimuth from south, west positive) for a latitude, day of year and solar hour. */
export function archSun(latitude: number, dayOfYear: number, hour: number): { altitude: number; azimuth: number } {
  const rad = Math.PI / 180;
  const decl = 23.44 * Math.sin(((360 / 365) * (284 + dayOfYear)) * rad);
  const ha = 15 * (hour - 12);
  const sinAlt = Math.sin(latitude * rad) * Math.sin(decl * rad) + Math.cos(latitude * rad) * Math.cos(decl * rad) * Math.cos(ha * rad);
  const altitude = Math.asin(Math.max(-1, Math.min(1, sinAlt))) / rad;
  const cosAz = (Math.sin(altitude * rad) * Math.sin(latitude * rad) - Math.sin(decl * rad)) / (Math.cos(altitude * rad) * Math.cos(latitude * rad) || 1);
  const az = Math.acos(Math.max(-1, Math.min(1, cosAz))) / rad;
  return { altitude, azimuth: ha > 0 ? az : -az };
}

/** Rough cost range for a building: [low, high] and weeks by phase. */
export function archEstimate(
  rules: ArchEstimateRules,
  input: { area: number; quality: 'basica' | 'media' | 'alta'; kind: 'nueva' | 'reforma'; floors: number },
): { build: number; fees: number; permits: number; total: number; low: number; high: number; weeksBuild: number } {
  const base = input.area * rules.perM2[input.quality] * rules.kind[input.kind] * (1 + rules.floorSurcharge * Math.max(0, input.floors - 1));
  const fees = base * rules.fees * (input.kind === 'reforma' ? 1.22 : 1);
  const permits = base * rules.permits;
  const total = base + fees + permits;
  return {
    build: base,
    fees,
    permits,
    total,
    low: total * (1 - rules.spread),
    high: total * (1 + rules.spread),
    weeksBuild: Math.round(10 + input.area * 0.11 * (input.kind === 'reforma' ? 0.85 : 1)),
  };
}
