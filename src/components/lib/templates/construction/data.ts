// src/components/lib/templates/construction/data.ts
// Domain entities, project catalog, unit inventories, daily logs and routing for Strukto · Construction, Developments & Site OS.

export type ProjectTypology = 'residential' | 'commercial' | 'industrial' | 'rehabilitation';
export type ProjectStatus = 'in_progress' | 'completed' | 'off_plan';
export type UnitTypology = 'apartment' | 'penthouse' | 'ground_floor' | 'commercial_local';
export type UnitStatus = 'available' | 'reserved' | 'sold';

export interface ConstructionMilestone {
  id: string;
  stage: 'licensing' | 'excavation' | 'structure' | 'enclosures' | 'mep' | 'finishes' | 'handover';
  title: string;
  plannedDate: string;
  progressPct: number;
  status: 'done' | 'in_progress' | 'pending';
}

export interface ConstructionProject {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  typology: ProjectTypology;
  status: ProjectStatus;
  location: string;
  city: string;
  surfaceM2: number;
  budgetEur: number;
  certifiedBudgetEur: number;
  certifiedPercent: number;
  startDate: string;
  completionDate: string;
  unitsTotal: number;
  unitsAvailable: number;
  architect: string;
  energyRating: 'A' | 'B' | 'Passivhaus';
  tags: string[];
  specs: {
    concreteVolumeM3: number;
    steelTonnes: number;
    craneCount: number;
    solarKWp: number;
  };
  description: string;
  milestones: ConstructionMilestone[];
}

export interface ConstructionUnit {
  id: string;
  projectId: string;
  unitNumber: string;
  floor: string;
  typology: UnitTypology;
  surfaceUsableM2: number;
  surfaceBuiltM2: number;
  bedrooms: number;
  bathrooms: number;
  terraceM2: number;
  garageSpaces: number;
  priceEur: number;
  status: UnitStatus;
  orientation: 'South' | 'North' | 'East' | 'West' | 'Dual';
  features: string[];
}

export interface SiteDailyLog {
  id: string;
  siteId: string;
  siteName: string;
  date: string;
  weather: {
    tempC: number;
    condition: 'Sunny' | 'Overcast' | 'Rain' | 'Wind';
    windKmh: number;
    rainMm: number;
  };
  crewTotal: number;
  activeTrades: {
    trade: string;
    subcontractor: string;
    workers: number;
    zone: string;
  }[];
  materialDeliveries: {
    material: string;
    quantity: string;
    supplier: string;
    qualityTicket: string;
  }[];
  safetyInspectionPassed: boolean;
  notes: string;
  supervisor: string;
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
  home: '/preview/construction',
  projects: '/preview/construction/projects',
  projectDetail: '/preview/construction/projects/caelum-chamberi',
  estimator: '/preview/construction/estimator',
  contact: '/preview/construction/contact',
  signIn: '/preview/construction/sign-in',
  dashboard: '/preview/construction/app',
  sites: '/preview/construction/app/sites',
  dailyLog: '/preview/construction/app/daily-log',
  unitsCms: '/preview/construction/app/units',
  settings: '/preview/construction/app/settings',
};

export const constructionProjects: ConstructionProject[] = [
  {
    id: 'proj-01',
    slug: 'caelum-chamberi',
    title: 'Residencial Caelum Chamberí',
    subtitle: '24 Luxury apartments, rooftop infinity pool & 2 ground commercial locals',
    typology: 'residential',
    status: 'in_progress',
    location: 'Calle Bretón de los Herreros 42',
    city: 'Madrid, Chamberí',
    surfaceM2: 5400,
    budgetEur: 7850000,
    certifiedBudgetEur: 5495000,
    certifiedPercent: 70,
    startDate: '2025-02-15',
    completionDate: '2026-12-20',
    unitsTotal: 26,
    unitsAvailable: 7,
    architect: 'Rafael Moneo & Partners Studio',
    energyRating: 'A',
    tags: ['Obra Nueva', 'Aerotermia', 'Suelo Radiante', 'Piscina Rooftop', 'Locales Comerciales'],
    specs: {
      concreteVolumeM3: 2450,
      steelTonnes: 320,
      craneCount: 2,
      solarKWp: 45,
    },
    description: 'Promoción residencial premium en pleno corazón de Chamberí. Estructura de hormigón armado con losas aligeradas, cerramiento térmico con fachada ventilada de piedra caliza y carpintería de rotura de puente térmico triple acristalamiento.',
    milestones: [
      { id: 'm1', stage: 'licensing', title: 'Licencia Urbanística y Proyecto Básico', plannedDate: '2025-01-10', progressPct: 100, status: 'done' },
      { id: 'm2', stage: 'excavation', title: 'Vaciado, Muros Pantalla y Cimentación', plannedDate: '2025-04-15', progressPct: 100, status: 'done' },
      { id: 'm3', stage: 'structure', title: 'Estructura de Forjados 7 Plantas', plannedDate: '2025-09-30', progressPct: 100, status: 'done' },
      { id: 'm4', stage: 'enclosures', title: 'Fachada Ventilada y Carpinterías', plannedDate: '2026-03-20', progressPct: 90, status: 'in_progress' },
      { id: 'm5', stage: 'mep', title: 'Instalaciones MEP, Suelo Radiante y Clima', plannedDate: '2026-07-15', progressPct: 45, status: 'in_progress' },
      { id: 'm6', stage: 'finishes', title: 'Solados Porcelanosa, Cocinas y Pintura', plannedDate: '2026-10-30', progressPct: 10, status: 'pending' },
      { id: 'm7', stage: 'handover', title: 'LPO (Licencia de Primera Ocupación) y Llaves', plannedDate: '2026-12-20', progressPct: 0, status: 'pending' },
    ],
  },
  {
    id: 'proj-02',
    slug: 'torre-norte-tech',
    title: 'Torre Norte Tech & Commercial Hub',
    subtitle: 'Headquarters corporativo, auditorio y 4 locales comerciales diáfanos',
    typology: 'commercial',
    status: 'completed',
    location: 'Paseo de la Castellana 280',
    city: 'Madrid, Chamartín',
    surfaceM2: 14200,
    budgetEur: 18400000,
    certifiedBudgetEur: 18400000,
    certifiedPercent: 100,
    startDate: '2023-04-10',
    completionDate: '2025-10-05',
    unitsTotal: 18,
    unitsAvailable: 2,
    architect: 'Estudio Lamela Arquitectos',
    energyRating: 'A',
    tags: ['LEED Platinum', 'Fachada Doble Piel', 'Locales Diáfanos', 'Comercial'],
    specs: {
      concreteVolumeM3: 6800,
      steelTonnes: 940,
      craneCount: 3,
      solarKWp: 120,
    },
    description: 'Edificio terciario de alta eficiencia con muro cortina de doble piel bioclimática y espacios diáfanos de hasta 950 m² sin pilares intermedios mediante postensado.',
    milestones: [
      { id: 'm1', stage: 'structure', title: 'Estructura Postensada', plannedDate: '2024-03-15', progressPct: 100, status: 'done' },
      { id: 'm2', stage: 'enclosures', title: 'Muro Cortina Bioclimático', plannedDate: '2024-11-20', progressPct: 100, status: 'done' },
      { id: 'm3', stage: 'handover', title: 'Entrega Definitiva y Recepción', plannedDate: '2025-10-05', progressPct: 100, status: 'done' },
    ],
  },
  {
    id: 'proj-03',
    slug: 'villas-passivhaus-moraleja',
    title: 'Residencial Enclave Moraleja',
    subtitle: '6 Villas bioclimáticas Passivhaus Premium con parcela privada y geotermia',
    typology: 'residential',
    status: 'in_progress',
    location: 'Camino Ancho 18',
    city: 'Madrid, La Moraleja',
    surfaceM2: 3800,
    budgetEur: 6200000,
    certifiedBudgetEur: 3100000,
    certifiedPercent: 50,
    startDate: '2025-06-01',
    completionDate: '2027-02-15',
    unitsTotal: 6,
    unitsAvailable: 2,
    architect: 'A-cero / Joaquín Torres',
    energyRating: 'Passivhaus',
    tags: ['Passivhaus', 'Geotermia', 'Villas de Lujo', 'Consumo Casi Nulo'],
    specs: {
      concreteVolumeM3: 1850,
      steelTonnes: 210,
      craneCount: 2,
      solarKWp: 60,
    },
    description: 'Conjunto de 6 exclusivas viviendas unifamiliares con certificación Passivhaus Plus, climatización por geotermia y sistema de ventilación mecánica con recuperación de calor del 92%.',
    milestones: [
      { id: 'm1', stage: 'structure', title: 'Estructura Muros Hormigón Blanco', plannedDate: '2025-12-10', progressPct: 100, status: 'done' },
      { id: 'm2', stage: 'enclosures', title: 'Aislamiento SATE 16cm y Envolvente', plannedDate: '2026-05-15', progressPct: 75, status: 'in_progress' },
      { id: 'm3', stage: 'finishes', title: 'Interiores y Piscinas Salinas', plannedDate: '2026-11-30', progressPct: 10, status: 'pending' },
    ],
  },
  {
    id: 'proj-04',
    slug: 'logistica-san-fernando',
    title: 'Parque Logístico San Fernando E-Hub',
    subtitle: 'Nave logística inteligente para distribución última milla con 32 muelles de carga',
    typology: 'industrial',
    status: 'completed',
    location: 'Polígono Industrial Puerta de Madrid',
    city: 'San Fernando de Henares',
    surfaceM2: 28500,
    budgetEur: 14700000,
    certifiedBudgetEur: 14700000,
    certifiedPercent: 100,
    startDate: '2023-09-01',
    completionDate: '2025-03-30',
    unitsTotal: 4,
    unitsAvailable: 0,
    architect: 'Ghesa Ingeniería y Arquitectura',
    energyRating: 'A',
    tags: ['BREEAM Very Good', 'Nave Logística', 'Suelo Alta Resistencia', 'Solera Láser'],
    specs: {
      concreteVolumeM3: 11200,
      steelTonnes: 1450,
      craneCount: 4,
      solarKWp: 450,
    },
    description: 'Plataforma logística clase A con altura libre de 12,5 metros, solera continua sin juntas ejecutada con tecnología láser y certificación de sostenibilidad BREEAM.',
    milestones: [
      { id: 'm1', stage: 'handover', title: 'Puesta en Marcha y Licencia de Actividad', plannedDate: '2025-03-30', progressPct: 100, status: 'done' },
    ],
  },
];

export const constructionUnits: ConstructionUnit[] = [
  {
    id: 'unit-1a',
    projectId: 'proj-01',
    unitNumber: 'Vivienda 1º A',
    floor: 'Planta 1ª',
    typology: 'apartment',
    surfaceUsableM2: 118,
    surfaceBuiltM2: 142,
    bedrooms: 3,
    bathrooms: 2,
    terraceM2: 16,
    garageSpaces: 1,
    priceEur: 685000,
    status: 'available',
    orientation: 'South',
    features: ['Cocina isla Porcelanosa', 'Suelo radiante/refrescante', 'Suite principal con vestidor', 'Doble orientación cruzada'],
  },
  {
    id: 'unit-3b',
    projectId: 'proj-01',
    unitNumber: 'Vivienda 3º B',
    floor: 'Planta 3ª',
    typology: 'apartment',
    surfaceUsableM2: 92,
    surfaceBuiltM2: 115,
    bedrooms: 2,
    bathrooms: 2,
    terraceM2: 12,
    garageSpaces: 1,
    priceEur: 535000,
    status: 'reserved',
    orientation: 'East',
    features: ['Gran salón acristalado', 'Domótica KNX integrada', 'Armarios empotrados lacados', 'Trastero incluido'],
  },
  {
    id: 'unit-atico-a',
    projectId: 'proj-01',
    unitNumber: 'Ático Dúplex Ático A',
    floor: 'Planta Ático 7ª',
    typology: 'penthouse',
    surfaceUsableM2: 184,
    surfaceBuiltM2: 228,
    bedrooms: 4,
    bathrooms: 3,
    terraceM2: 85,
    garageSpaces: 2,
    priceEur: 1390000,
    status: 'available',
    orientation: 'Dual',
    features: ['Jacuzzi privado en terraza', 'Vistas panorámicas 360° Madrid', 'Acceso directo de ascensor con llave', 'Acabados en mármol Calacatta'],
  },
  {
    id: 'unit-local-01',
    projectId: 'proj-01',
    unitNumber: 'Local Comercial 01 (Chamberí)',
    floor: 'Planta Baja / Calle',
    typology: 'commercial_local',
    surfaceUsableM2: 240,
    surfaceBuiltM2: 275,
    bedrooms: 0,
    bathrooms: 2,
    terraceM2: 0,
    garageSpaces: 1,
    priceEur: 820000,
    status: 'available',
    orientation: 'South',
    features: ['Salida de humos reglamentaria', 'Fachada lineal de 18 metros a calle', 'Altura libre 4.20 m', 'Idóneo restauración o clínica'],
  },
  {
    id: 'unit-local-02',
    projectId: 'proj-01',
    unitNumber: 'Local Comercial 02 (Escaparate)',
    floor: 'Planta Baja',
    typology: 'commercial_local',
    surfaceUsableM2: 165,
    surfaceBuiltM2: 190,
    bedrooms: 0,
    bathrooms: 1,
    terraceM2: 0,
    garageSpaces: 1,
    priceEur: 560000,
    status: 'sold',
    orientation: 'East',
    features: ['Gran visibilidad peatonal', 'Apto para cualquier actividad comercial', 'Carga y descarga en sótano'],
  },
];

export const siteDailyLogs: SiteDailyLog[] = [
  {
    id: 'log-01',
    siteId: 'proj-01',
    siteName: 'Residencial Caelum Chamberí',
    date: '2026-11-07',
    weather: {
      tempC: 17,
      condition: 'Sunny',
      windKmh: 12,
      rainMm: 0,
    },
    crewTotal: 34,
    activeTrades: [
      { trade: 'Fachadas Ventiladas', subcontractor: 'Castecon Fachadas S.L.', workers: 10, zone: 'Fachada Sur y Este (Plantas 4 a 6)' },
      { trade: 'Fontanería & Climatización', subcontractor: 'Instalaciones TermoSol', workers: 8, zone: 'Plantas 2 y 3 (Suelo radiante)' },
      { trade: 'Electricidad y Domótica', subcontractor: 'ElecSur Ingeniería', workers: 6, zone: 'Plantas 1 a 3 (Tendido de tubos)' },
      { trade: 'Yesos y Pladur', subcontractor: 'Tabiquerías Madrid', workers: 10, zone: 'Planta 2 (Distribución interior)' },
    ],
    materialDeliveries: [
      { material: 'Placas Lana de Roca Aislante 100mm', quantity: '480 m²', supplier: 'Rockwool Ibérica', qualityTicket: 'ISO-CERT-8841' },
      { material: 'Tubería PEX multicapa suelo radiante', quantity: '2.400 m', supplier: 'Uponor', qualityTicket: 'UP-2026-11' },
      { material: 'Mortero autonivelante para recrecido', quantity: '18 t', supplier: 'Cementos Portland', qualityTicket: 'ALB-99214' },
    ],
    safetyInspectionPassed: true,
    notes: 'Jornada transcurrida sin incidencias de seguridad. Se completa el aislamiento de lana de roca en fachada Sur. Se realiza prueba de estanqueidad en suelo radiante de Planta 2 superada a 6 bar de presión sin fugas.',
    supervisor: 'Ing. Carlos Mendoza (Jefe de Obra)',
  },
  {
    id: 'log-02',
    siteId: 'proj-03',
    siteName: 'Residencial Enclave Moraleja',
    date: '2026-11-06',
    weather: {
      tempC: 15,
      condition: 'Overcast',
      windKmh: 18,
      rainMm: 0,
    },
    crewTotal: 19,
    activeTrades: [
      { trade: 'Muros de Hormigón Visto', subcontractor: 'Estructuras y Encofrados Sierra', workers: 12, zone: 'Villa 3 y Villa 4' },
      { trade: 'Geotermia y Sondeos', subcontractor: 'GeoEnergía Ibérica', workers: 4, zone: 'Zona de pozos geotérmicos Villa 1' },
      { trade: 'Impermeabilización', subcontractor: 'Danosa Protect', workers: 3, zone: 'Cubiertas planas Villa 2' },
    ],
    materialDeliveries: [
      { material: 'Hormigón Blanco Autocompactante HA-30', quantity: '42 m³', supplier: 'Hormigones Holcim', qualityTicket: 'HOL-4410' },
      { material: 'Armadura Acero Corrugado B-500S', quantity: '6.200 kg', supplier: 'Celsa Group', qualityTicket: 'CELSA-099' },
    ],
    safetyInspectionPassed: true,
    notes: 'Hormigonado de muros exteriores de hormigón blanco autocompactante en Villa 3 ejecutado según pliego. Probetas de control tomadas por laboratorio acreditado Ensayos Técnicos S.A.',
    supervisor: 'Arq. Técnica Laura Vidal',
  },
];

export const constructionSubcontractors = [
  { id: 'sub-01', name: 'Castecon Fachadas S.L.', trade: 'Fachadas Ventiladas y Piedra', rating: 4.9, activeWorkers: 10, currentSite: 'Residencial Caelum' },
  { id: 'sub-02', name: 'Estructuras y Encofrados Sierra', trade: 'Estructura y Ferralla', rating: 4.8, activeWorkers: 12, currentSite: 'Enclave Moraleja' },
  { id: 'sub-03', name: 'Instalaciones TermoSol', trade: 'Aerotermia y Suelo Radiante', rating: 4.9, activeWorkers: 8, currentSite: 'Residencial Caelum' },
  { id: 'sub-04', name: 'ElecSur Ingeniería', trade: 'Baja Tensión y Domótica KNX', rating: 4.7, activeWorkers: 6, currentSite: 'Residencial Caelum' },
  { id: 'sub-05', name: 'GeoEnergía Ibérica', trade: 'Sondeos Geotérmicos', rating: 5.0, activeWorkers: 4, currentSite: 'Enclave Moraleja' },
];

export const constructionData = {
  company: {
    name: 'Strukto Constructora & Desarrollos',
    tagline: 'Construcción residencial, comercial y obra civil de máxima eficiencia',
    establishedYear: 1991,
    yearsExperience: 35,
    m2BuiltTotal: 148000,
    activeSitesCount: 6,
    homesDelivered: 840,
    headquarters: 'Calle Velázquez 110, Barrio de Salamanca, Madrid',
    phone: '+34 912 400 900',
    email: 'contacto@strukto-constructora.es',
    certifications: ['ISO 9001 (Calidad)', 'ISO 14001 (Medio Ambiente)', 'ISO 45001 (Seguridad Laboral)', 'BREEAM Official Partner', 'Passivhaus Tradesperson'],
  },
  projects: constructionProjects,
  units: constructionUnits,
  dailyLogs: siteDailyLogs,
  subcontractors: constructionSubcontractors,
  routes: constructionRoutes,
};
