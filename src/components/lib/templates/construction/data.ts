// src/components/lib/templates/construction/data.ts
// Demo data for "Strukto" · construction company, developments and Site OS (Madrid).
// Replace with your own ERP / project data: every page and component takes these shapes as props.

export type ConstructionKind = 'residencial' | 'terciario' | 'rehabilitacion' | 'industrial';
export type ConstructionStatus = 'obra' | 'entregado' | 'plano';
export type ConstructionUnitStatus = 'libre' | 'reservada' | 'vendida';
export type ConstructionUnitType = 'piso' | 'atico' | 'local';
export type ConstructionSiteHealth = 'en-plazo' | 'riesgo' | 'retraso';

export interface ConstructionPhase {
  id: string;
  name: string;
  /** Start week (1 = first week of the works). */
  start: number;
  weeks: number;
  /** 0–100. */
  progress: number;
  owner: string;
  critical?: boolean;
}

export interface ConstructionProject {
  id: string;
  slug: string;
  name: string;
  kind: ConstructionKind;
  status: ConstructionStatus;
  district: string;
  city: string;
  address: string;
  /** Floors above ground (for the elevation drawing). */
  floors: number;
  /** Window bays per floor (for the elevation drawing). */
  bays: number;
  units: number;
  unitsFree: number;
  areaM2: number;
  budget: number;
  /** Works progress 0–100. */
  progress: number;
  start: string;
  end: string;
  architect: string;
  energy: 'A' | 'A+' | 'Passivhaus';
  tags: string[];
  summary: string;
  phases: ConstructionPhase[];
}

export interface ConstructionUnit {
  id: string;
  /** 0 = ground floor. */
  floor: number;
  letter: string;
  type: ConstructionUnitType;
  beds: number;
  baths: number;
  areaM2: number;
  terraceM2: number;
  orientation: 'Norte' | 'Sur' | 'Este' | 'Oeste' | 'Sur-Este' | 'Sur-Oeste';
  price: number;
  status: ConstructionUnitStatus;
  /** Rectangle on the 100 × 60 floor plan. */
  plan: { x: number; y: number; w: number; h: number };
}

export interface ConstructionSite {
  id: string;
  projectSlug: string;
  name: string;
  district: string;
  health: ConstructionSiteHealth;
  progress: number;
  /** Planned certification to date, % of budget. */
  planned: number;
  /** Certified to date, % of budget. */
  certified: number;
  budget: number;
  crew: number;
  foreman: string;
  phase: string;
  weather: string;
  alerts: string[];
  /** Position on the 0–100 situation map. */
  x: number;
  y: number;
}

export interface ConstructionLogEntry {
  time: string;
  type: 'avance' | 'incidencia' | 'visita' | 'material';
  text: string;
  author: string;
}

export interface ConstructionDailyLog {
  date: string;
  siteId: string;
  weather: 'Despejado' | 'Nublado' | 'Lluvia' | 'Viento';
  tempC: number;
  crews: Array<{ trade: string; company: string; workers: number }>;
  entries: ConstructionLogEntry[];
  checklist: string[];
}

export interface ConstructionRoutes {
  home: string;
  projects: string;
  projectDetail: string;
  estimator: string;
  contact: string;
  signIn: string;
  dashboard: string;
  sites: string;
  dailyLog: string;
  unitsCms: string;
  settings: string;
}

export const constructionRoutes: ConstructionRoutes = {
  home: '/',
  projects: '/proyectos',
  projectDetail: '/proyectos/caelum-chamberi',
  estimator: '/presupuesto',
  contact: '/contacto',
  signIn: '/acceso',
  dashboard: '/obra',
  sites: '/obra/obras',
  dailyLog: '/obra/diario',
  unitsCms: '/obra/viviendas',
  settings: '/obra/ajustes',
};

export const constructionCompany = {
  name: 'Strukto',
  legalName: 'Strukto Construcciones S.L.',
  address: 'Calle de Alcalá 182, 28028 Madrid',
  phone: '+34 912 400 900',
  email: 'obras@strukto.es',
  hours: 'L–V · 8:00–18:00',
  rea: 'REA 13/28/0004512',
  iso: ['ISO 9001', 'ISO 14001', 'ISO 45001'],
  founded: 1989,
  stats: { activeSites: 7, deliveredM2: 148000, years: 37, onTimePct: 96 },
};

const caelumPhases: ConstructionPhase[] = [
  { id: 'p1', name: 'Movimiento de tierras', start: 1, weeks: 6, progress: 100, owner: 'Excavaciones Tajo' },
  { id: 'p2', name: 'Cimentación y muros', start: 5, weeks: 9, progress: 100, owner: 'Strukto', critical: true },
  { id: 'p3', name: 'Estructura (7 forjados)', start: 13, weeks: 20, progress: 100, owner: 'Strukto', critical: true },
  { id: 'p4', name: 'Cerramientos y fachada', start: 28, weeks: 16, progress: 82, owner: 'Fachadas Lumen', critical: true },
  { id: 'p5', name: 'Instalaciones (MEP)', start: 34, weeks: 22, progress: 48, owner: 'Instalaciones Meridiano' },
  { id: 'p6', name: 'Carpintería y vidrio', start: 40, weeks: 10, progress: 35, owner: 'Carpinterías Ébano' },
  { id: 'p7', name: 'Acabados interiores', start: 48, weeks: 18, progress: 6, owner: 'Strukto', critical: true },
  { id: 'p8', name: 'Urbanización y entrega', start: 64, weeks: 6, progress: 0, owner: 'Strukto' },
];

export const constructionProjects: ConstructionProject[] = [
  {
    id: 'pr01', slug: 'caelum-chamberi', name: 'Residencial Caelum', kind: 'residencial', status: 'obra',
    district: 'Chamberí', city: 'Madrid', address: 'Calle de Bretón de los Herreros 42', floors: 7, bays: 6,
    units: 24, unitsFree: 7, areaM2: 5400, budget: 7850000, progress: 64, start: '2025-02', end: '2026-12',
    architect: 'Estudio Arenal Arquitectos', energy: 'A', tags: ['Aerotermia', 'Suelo radiante', 'Piscina en cubierta'],
    summary: '24 viviendas y 2 locales con estructura de hormigón, fachada ventilada de piedra caliza y carpintería con triple vidrio.',
    phases: caelumPhases,
  },
  {
    id: 'pr02', slug: 'torre-norte', name: 'Torre Norte', kind: 'terciario', status: 'entregado',
    district: 'Chamartín', city: 'Madrid', address: 'Paseo de la Castellana 280', floors: 12, bays: 8,
    units: 18, unitsFree: 2, areaM2: 14200, budget: 18400000, progress: 100, start: '2023-04', end: '2025-10',
    architect: 'Lamela & Asociados', energy: 'A+', tags: ['LEED Platinum', 'Doble piel', 'Postensado'],
    summary: 'Oficinas con muro cortina de doble piel y plantas diáfanas de 950 m² sin pilares intermedios.',
    phases: [],
  },
  {
    id: 'pr03', slug: 'enclave-moraleja', name: 'Enclave Moraleja', kind: 'residencial', status: 'obra',
    district: 'La Moraleja', city: 'Alcobendas', address: 'Camino Ancho 15', floors: 2, bays: 4,
    units: 6, unitsFree: 2, areaM2: 2350, budget: 6200000, progress: 38, start: '2025-09', end: '2027-03',
    architect: 'Taller Bioclima', energy: 'Passivhaus', tags: ['Passivhaus', 'Geotermia', 'Madera CLT'],
    summary: 'Seis villas Passivhaus con estructura de madera contralaminada, geotermia y parcela privada.',
    phases: [],
  },
  {
    id: 'pr04', slug: 'fabrica-arganzuela', name: 'La Fábrica Arganzuela', kind: 'rehabilitacion', status: 'obra',
    district: 'Arganzuela', city: 'Madrid', address: 'Calle de Méndez Álvaro 9', floors: 4, bays: 7,
    units: 32, unitsFree: 11, areaM2: 4100, budget: 5300000, progress: 81, start: '2024-11', end: '2026-06',
    architect: 'Ruiz Barbarín Estudio', energy: 'A', tags: ['Rehabilitación', 'Ladrillo visto', 'Lofts'],
    summary: 'Antigua fábrica de 1924 convertida en 32 lofts conservando la fachada de ladrillo y las cerchas de acero.',
    phases: [],
  },
  {
    id: 'pr05', slug: 'nave-coslada', name: 'Hub Logístico Coslada', kind: 'industrial', status: 'entregado',
    district: 'Coslada', city: 'Madrid', address: 'Av. de la Industria 50', floors: 1, bays: 10,
    units: 4, unitsFree: 0, areaM2: 22000, budget: 9900000, progress: 100, start: '2023-09', end: '2024-12',
    architect: 'Ingeniería Vértice', energy: 'A', tags: ['Prefabricado', '1,2 MWp solar', 'Muelles de carga'],
    summary: 'Nave logística con estructura prefabricada, 24 muelles de carga y 1,2 MWp de fotovoltaica en cubierta.',
    phases: [],
  },
  {
    id: 'pr06', slug: 'mirador-valdebebas', name: 'Mirador Valdebebas', kind: 'residencial', status: 'plano',
    district: 'Valdebebas', city: 'Madrid', address: 'Av. de las Fuerzas Armadas 120', floors: 9, bays: 5,
    units: 64, unitsFree: 41, areaM2: 8900, budget: 12600000, progress: 0, start: '2026-05', end: '2028-09',
    architect: 'Estudio Arenal Arquitectos', energy: 'A+', tags: ['Sobre plano', 'Zonas comunes', 'Cooperativa'],
    summary: '64 viviendas sobre plano con piscina, coworking y huertos urbanos en cubierta.',
    phases: [],
  },
];

/** Units of Residencial Caelum: ground floor shops, floors 1–5 (A–D) and two penthouses. */
const orient = ['Sur', 'Sur-Este', 'Norte', 'Oeste'] as const;
const quad = [
  { x: 0, y: 0, w: 50, h: 30 },
  { x: 50, y: 0, w: 50, h: 30 },
  { x: 50, y: 30, w: 50, h: 30 },
  { x: 0, y: 30, w: 50, h: 30 },
];
const sold = new Set(['1A', '1C', '2A', '2B', '2D', '3A', '3C', '4B', '4C', '5A', '5D', '6A', '0A']);
const reserved = new Set(['1B', '3D', '4A', '5B', '0B']);

export const constructionUnits: ConstructionUnit[] = [
  ...['A', 'B'].map((l, i): ConstructionUnit => ({
    id: `0${l}`, floor: 0, letter: l, type: 'local', beds: 0, baths: 1, areaM2: i ? 118 : 146, terraceM2: 0,
    orientation: i ? 'Este' : 'Sur', price: i ? 420000 : 515000,
    status: sold.has(`0${l}`) ? 'vendida' : reserved.has(`0${l}`) ? 'reservada' : 'libre',
    plan: { x: i * 50, y: 0, w: 50, h: 60 },
  })),
  ...[1, 2, 3, 4, 5].flatMap((f) =>
    ['A', 'B', 'C', 'D'].map((l, i): ConstructionUnit => {
      const big = i % 2 === 0;
      const area = (big ? 104 : 82) + f * 2;
      const key = `${f}${l}`;
      return {
        id: key, floor: f, letter: l, type: 'piso', beds: big ? 3 : 2, baths: big ? 2 : 1, areaM2: area,
        terraceM2: i === 0 ? 9 : i === 1 ? 6 : 0, orientation: orient[i], price: Math.round((area * (6900 + f * 120)) / 1000) * 1000,
        status: sold.has(key) ? 'vendida' : reserved.has(key) ? 'reservada' : 'libre',
        plan: quad[i],
      };
    }),
  ),
  ...['A', 'B'].map((l, i): ConstructionUnit => ({
    id: `6${l}`, floor: 6, letter: l, type: 'atico', beds: 4, baths: 3, areaM2: i ? 168 : 184, terraceM2: i ? 62 : 85,
    orientation: i ? 'Sur-Oeste' : 'Sur', price: i ? 1690000 : 1890000,
    status: sold.has(`6${l}`) ? 'vendida' : reserved.has(`6${l}`) ? 'reservada' : 'libre',
    plan: { x: i * 50, y: 0, w: 50, h: 60 },
  })),
];

export const constructionSites: ConstructionSite[] = [
  { id: 's1', projectSlug: 'caelum-chamberi', name: 'Residencial Caelum', district: 'Chamberí', health: 'en-plazo', progress: 64, planned: 66, certified: 63, budget: 7850000, crew: 46, foreman: 'Raúl Garrido', phase: 'Cerramientos y fachada', weather: '14 °C · despejado', alerts: ['Inspección de fachada el jueves'], x: 44, y: 34 },
  { id: 's2', projectSlug: 'enclave-moraleja', name: 'Enclave Moraleja', district: 'Alcobendas', health: 'riesgo', progress: 38, planned: 44, certified: 37, budget: 6200000, crew: 22, foreman: 'Nuria Peña', phase: 'Estructura de madera CLT', weather: '12 °C · viento 38 km/h', alerts: ['Viento fuerte: grúa parada', 'Retraso de 6 días en paneles CLT'], x: 66, y: 10 },
  { id: 's3', projectSlug: 'fabrica-arganzuela', name: 'La Fábrica Arganzuela', district: 'Arganzuela', health: 'en-plazo', progress: 81, planned: 80, certified: 82, budget: 5300000, crew: 31, foreman: 'Iván Lozano', phase: 'Acabados interiores', weather: '15 °C · nublado', alerts: [], x: 40, y: 62 },
  { id: 's4', projectSlug: 'mirador-valdebebas', name: 'Mirador Valdebebas · vaciado', district: 'Valdebebas', health: 'retraso', progress: 9, planned: 15, certified: 8, budget: 12600000, crew: 12, foreman: 'Sonia Prieto', phase: 'Movimiento de tierras', weather: '13 °C · lluvia 6 mm', alerts: ['Licencia de vaciado pendiente de visado', 'Lluvia: tajo parado por la tarde'], x: 78, y: 22 },
  { id: 's5', projectSlug: 'caelum-chamberi', name: 'Reforma Hotel Prado', district: 'Retiro', health: 'en-plazo', progress: 52, planned: 50, certified: 51, budget: 2900000, crew: 18, foreman: 'Álvaro Méndez', phase: 'Instalaciones', weather: '15 °C · despejado', alerts: [], x: 52, y: 52 },
];

export const constructionDailyLog: ConstructionDailyLog = {
  date: '2026-11-20',
  siteId: 's1',
  weather: 'Despejado',
  tempC: 14,
  crews: [
    { trade: 'Fachada ventilada', company: 'Fachadas Lumen', workers: 12 },
    { trade: 'Fontanería y clima', company: 'Instalaciones Meridiano', workers: 9 },
    { trade: 'Electricidad', company: 'Instalaciones Meridiano', workers: 7 },
    { trade: 'Albañilería', company: 'Strukto', workers: 14 },
    { trade: 'Carpintería exterior', company: 'Carpinterías Ébano', workers: 4 },
  ],
  entries: [
    { time: '07:58', type: 'visita', text: 'Charla de seguridad en caseta: trabajos en altura en fachada norte.', author: 'R. Garrido' },
    { time: '09:20', type: 'material', text: 'Recepción de 28 paneles de piedra caliza (albarán 22-4471).', author: 'R. Garrido' },
    { time: '11:05', type: 'avance', text: 'Fachada sur terminada hasta planta 5. Andamio baja a planta 4.', author: 'Fachadas Lumen' },
    { time: '12:40', type: 'incidencia', text: 'Falta un premarco en 3.º C. Se pide reposición para el lunes.', author: 'Carpinterías Ébano' },
  ],
  checklist: ['Andamios revisados y etiquetados', 'Líneas de vida en cubierta', 'Orden y limpieza en plantas', 'Accesos y vallado de obra', 'EPIs del personal subcontratado'],
};

export const constructionData = {
  company: constructionCompany,
  projects: constructionProjects,
  units: constructionUnits,
  sites: constructionSites,
  dailyLog: constructionDailyLog,
};

export const constructionKindLabel: Record<ConstructionKind, string> = {
  residencial: 'Residencial',
  terciario: 'Oficinas',
  rehabilitacion: 'Rehabilitación',
  industrial: 'Industrial',
};

export const constructionStatusLabel: Record<ConstructionStatus, string> = {
  obra: 'En obra',
  entregado: 'Entregado',
  plano: 'Sobre plano',
};

export const formatEurShort = (n: number) =>
  n >= 1_000_000
    ? `${(n / 1_000_000).toLocaleString('es-ES', { maximumFractionDigits: 1 })} M€`
    : `${Math.round(n / 1000).toLocaleString('es-ES')} k€`;
