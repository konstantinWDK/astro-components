// src/components/lib/templates/real-estate/data.ts
// Demo data for "Nido" · Real estate agency, listings portal & agent CRM.
// Replace with your own CMS / API data; every page and component takes these shapes as props.

export type EstateOperation = 'sale' | 'rent';
export type EstatePropertyType = 'flat' | 'penthouse' | 'house' | 'studio' | 'villa';
export type EstateEnergy = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
export type EstateListingStatus = 'active' | 'reserved' | 'sold' | 'draft';
export type EstateLeadStage = 'new' | 'contacted' | 'visit' | 'offer' | 'closed';

export interface EstateProperty {
  slug: string;
  title: string;
  operation: EstateOperation;
  type: EstatePropertyType;
  zone: string;
  city: string;
  address: string;
  /** Sale price, or monthly rent when operation = 'rent' (EUR). */
  price: number;
  /** Previous price, shown as a price drop. */
  previousPrice?: number;
  m2: number;
  beds: number;
  baths: number;
  floor?: string;
  energy: EstateEnergy;
  features: string[];
  description: string;
  agentId: string;
  status: EstateListingStatus;
  badge?: string;
  /** Optional photos. Without them the components draw an illustrated facade. */
  images?: Array<{ src: string; alt: string }>;
  /** Hue (0–360) used by the illustrated placeholder. */
  hue: number;
  /** Position on the illustrated zone map, in % of width / height. */
  map: { x: number; y: number };
  publishedDays: number;
  views: number;
  leads: number;
}

export interface EstateAgent {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  zones: string[];
  languages: string[];
  closedDeals: number;
  rating: number;
}

export interface EstateZone {
  slug: string;
  name: string;
  tagline: string;
  avgPriceM2: number;
  /** Year-on-year change, in %. */
  trend: number;
  hue: number;
}

export interface EstateLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  propertySlug: string;
  stage: EstateLeadStage;
  source: 'Portal' | 'Web' | 'Referido' | 'Llamada' | 'Valoración';
  budget: number;
  createdAgo: string;
  agentId: string;
  note?: string;
}

export interface EstateVisit {
  id: string;
  day: string;
  time: string;
  propertySlug: string;
  client: string;
  agentId: string;
  confirmed: boolean;
}

export interface EstateRoutes {
  home: string;
  listings: string;
  property: string;
  valuation: string;
  contact: string;
  signIn: string;
  dashboard: string;
  listingsCms: string;
  leads: string;
}

export const estateRoutes: EstateRoutes = {
  home: '/',
  listings: '/propiedades',
  property: '/propiedades/atico-terraza-ruzafa',
  valuation: '/valoracion',
  contact: '/contacto',
  signIn: '/acceso',
  dashboard: '/app',
  listingsCms: '/app/propiedades',
  leads: '/app/leads',
};

export const estateTypeLabels: Record<EstatePropertyType, string> = {
  flat: 'Piso',
  penthouse: 'Ático',
  house: 'Casa',
  studio: 'Estudio',
  villa: 'Chalet',
};

export const estateOperationLabels: Record<EstateOperation, string> = {
  sale: 'Venta',
  rent: 'Alquiler',
};

export const estateStageLabels: Record<EstateLeadStage, string> = {
  new: 'Nuevo',
  contacted: 'Contactado',
  visit: 'Visita',
  offer: 'Oferta',
  closed: 'Cerrado',
};

export const estateAgents: EstateAgent[] = [
  {
    id: 'lucia',
    name: 'Lucía Ferrer',
    role: 'Directora comercial',
    phone: '+34 961 204 310',
    email: 'lucia@nido.example',
    zones: ['Ruzafa', 'Pla del Real'],
    languages: ['Español', 'Valenciano', 'Inglés'],
    closedDeals: 214,
    rating: 4.9,
  },
  {
    id: 'marc',
    name: 'Marc Soler',
    role: 'Agente senior',
    phone: '+34 961 204 311',
    email: 'marc@nido.example',
    zones: ['Cabanyal', 'Patacona'],
    languages: ['Español', 'Valenciano', 'Francés'],
    closedDeals: 132,
    rating: 4.8,
  },
  {
    id: 'ines',
    name: 'Inés Navarro',
    role: 'Especialista en alquiler',
    phone: '+34 961 204 312',
    email: 'ines@nido.example',
    zones: ['El Carmen', 'Benimaclet'],
    languages: ['Español', 'Inglés', 'Italiano'],
    closedDeals: 168,
    rating: 4.9,
  },
  {
    id: 'david',
    name: 'David Ortega',
    role: 'Obra nueva y chalets',
    phone: '+34 961 204 313',
    email: 'david@nido.example',
    zones: ['Campanar', 'Rocafort'],
    languages: ['Español', 'Inglés', 'Alemán'],
    closedDeals: 97,
    rating: 4.7,
  },
];

export const estateZones: EstateZone[] = [
  { slug: 'ruzafa', name: 'Ruzafa', tagline: 'Mercado, cafés y vida de barrio', avgPriceM2: 3850, trend: 9.4, hue: 18 },
  { slug: 'el-carmen', name: 'El Carmen', tagline: 'Casco histórico y calles peatonales', avgPriceM2: 3620, trend: 6.1, hue: 36 },
  { slug: 'cabanyal', name: 'Cabanyal', tagline: 'Casas modernistas junto al mar', avgPriceM2: 3180, trend: 12.8, hue: 196 },
  { slug: 'pla-del-real', name: 'Pla del Real', tagline: 'Avenidas amplias y Jardín del Turia', avgPriceM2: 4420, trend: 5.2, hue: 152 },
  { slug: 'benimaclet', name: 'Benimaclet', tagline: 'Universitario, tranquilo y con huerta', avgPriceM2: 2540, trend: 7.6, hue: 88 },
  { slug: 'patacona', name: 'Patacona', tagline: 'Primera línea de playa', avgPriceM2: 3960, trend: 10.3, hue: 205 },
];

export const estateProperties: EstateProperty[] = [
  {
    slug: 'atico-terraza-ruzafa',
    title: 'Ático con terraza de 48 m² en Ruzafa',
    operation: 'sale',
    type: 'penthouse',
    zone: 'Ruzafa',
    city: 'Valencia',
    address: 'Carrer de Cuba, 46',
    price: 589000,
    previousPrice: 615000,
    m2: 124,
    beds: 3,
    baths: 2,
    floor: '6.ª planta · ascensor',
    energy: 'B',
    features: ['Terraza 48 m²', 'Ascensor', 'Aire acondicionado', 'Plaza de garaje', 'Trastero', 'Orientación sur'],
    description:
      'Ático reformado en 2024 con salón de doble altura abierto a una terraza de 48 m² con vistas a la cúpula del mercado. Cocina integrada con isla, suite principal con vestidor y dos dormitorios dobles. Suelo radiante, carpintería con rotura de puente térmico y aerotermia.',
    agentId: 'lucia',
    status: 'active',
    badge: 'Bajada de precio',
    hue: 18,
    map: { x: 46, y: 62 },
    publishedDays: 6,
    views: 1842,
    leads: 23,
  },
  {
    slug: 'casa-modernista-cabanyal',
    title: 'Casa modernista rehabilitada en el Cabanyal',
    operation: 'sale',
    type: 'house',
    zone: 'Cabanyal',
    city: 'Valencia',
    address: 'Carrer de la Reina, 112',
    price: 465000,
    m2: 168,
    beds: 4,
    baths: 3,
    energy: 'C',
    features: ['Fachada de azulejo original', 'Patio interior', 'Azotea', 'A 400 m de la playa', 'Bodega'],
    description:
      'Casa de dos plantas de 1912 con fachada de azulejo restaurada, patio con naranjo y azotea transitable. Estructura reforzada, instalaciones nuevas y techos de 3,6 m.',
    agentId: 'marc',
    status: 'active',
    badge: 'Exclusiva',
    hue: 196,
    map: { x: 82, y: 44 },
    publishedDays: 12,
    views: 1320,
    leads: 17,
  },
  {
    slug: 'piso-luminoso-pla-del-real',
    title: 'Piso luminoso junto al Jardín del Turia',
    operation: 'sale',
    type: 'flat',
    zone: 'Pla del Real',
    city: 'Valencia',
    address: 'Avinguda de Blasco Ibáñez, 18',
    price: 720000,
    m2: 156,
    beds: 4,
    baths: 2,
    floor: '3.ª planta · exterior',
    energy: 'C',
    features: ['Balcón corrido', 'Conserje', 'Calefacción central', 'Garaje doble', 'Vistas al jardín'],
    description:
      'Vivienda señorial de cuatro dormitorios con balcón corrido sobre el jardín. Distribución en dos zonas, suelos de mármol y carpintería de madera restaurada.',
    agentId: 'lucia',
    status: 'reserved',
    hue: 152,
    map: { x: 58, y: 30 },
    publishedDays: 21,
    views: 2104,
    leads: 31,
  },
  {
    slug: 'estudio-el-carmen',
    title: 'Estudio con vigas vistas en El Carmen',
    operation: 'rent',
    type: 'studio',
    zone: 'El Carmen',
    city: 'Valencia',
    address: 'Carrer de Dalt, 9',
    price: 950,
    m2: 42,
    beds: 1,
    baths: 1,
    floor: '2.ª planta',
    energy: 'D',
    features: ['Amueblado', 'Vigas de madera', 'Admite mascotas', 'Fibra 1 Gb'],
    description:
      'Estudio diáfano con altillo, vigas de madera y ventanales a una calle peatonal. Se entrega amueblado y con electrodomésticos nuevos.',
    agentId: 'ines',
    status: 'active',
    badge: 'Nuevo',
    hue: 36,
    map: { x: 34, y: 38 },
    publishedDays: 2,
    views: 640,
    leads: 12,
  },
  {
    slug: 'piso-familiar-benimaclet',
    title: 'Piso familiar con balcones en Benimaclet',
    operation: 'rent',
    type: 'flat',
    zone: 'Benimaclet',
    city: 'Valencia',
    address: 'Carrer de Barón de San Petrillo, 27',
    price: 1350,
    m2: 96,
    beds: 3,
    baths: 2,
    floor: '4.ª planta · ascensor',
    energy: 'C',
    features: ['Ascensor', 'Cocina equipada', 'Dos balcones', 'Cerca del metro'],
    description:
      'Piso exterior de tres dormitorios a dos minutos del metro y de la universidad. Cocina independiente equipada, armarios empotrados y dos balcones.',
    agentId: 'ines',
    status: 'active',
    hue: 88,
    map: { x: 64, y: 16 },
    publishedDays: 9,
    views: 980,
    leads: 15,
  },
  {
    slug: 'apartamento-primera-linea-patacona',
    title: 'Apartamento en primera línea de Patacona',
    operation: 'rent',
    type: 'flat',
    zone: 'Patacona',
    city: 'Alboraya',
    address: 'Passeig del Mar, 31',
    price: 1750,
    m2: 88,
    beds: 2,
    baths: 2,
    floor: '5.ª planta · vistas al mar',
    energy: 'B',
    features: ['Vistas al mar', 'Piscina comunitaria', 'Terraza', 'Garaje', 'Aire acondicionado'],
    description:
      'Apartamento de dos dormitorios con terraza frente al mar, piscina comunitaria y plaza de garaje. Contrato de larga duración.',
    agentId: 'marc',
    status: 'active',
    badge: 'Vistas al mar',
    hue: 205,
    map: { x: 88, y: 18 },
    publishedDays: 4,
    views: 1210,
    leads: 19,
  },
  {
    slug: 'chalet-jardin-campanar',
    title: 'Chalet con jardín y piscina en Campanar',
    operation: 'sale',
    type: 'villa',
    zone: 'Campanar',
    city: 'Valencia',
    address: 'Carrer de Grau Moreno, 4',
    price: 985000,
    m2: 285,
    beds: 5,
    baths: 4,
    energy: 'A',
    features: ['Parcela 620 m²', 'Piscina', 'Placas solares', 'Domótica', 'Garaje 3 coches'],
    description:
      'Chalet de obra nueva con certificación energética A, parcela de 620 m², piscina, placas solares y domótica. Cinco dormitorios en suite.',
    agentId: 'david',
    status: 'active',
    badge: 'Obra nueva',
    hue: 168,
    map: { x: 14, y: 26 },
    publishedDays: 15,
    views: 1590,
    leads: 9,
  },
  {
    slug: 'piso-reformado-ruzafa',
    title: 'Piso reformado con techos altos en Ruzafa',
    operation: 'sale',
    type: 'flat',
    zone: 'Ruzafa',
    city: 'Valencia',
    address: 'Carrer de Sueca, 61',
    price: 349000,
    m2: 82,
    beds: 2,
    baths: 1,
    floor: '1.ª planta',
    energy: 'D',
    features: ['Techos de 3,4 m', 'Suelo hidráulico', 'Balcón', 'Reformado'],
    description:
      'Piso de dos dormitorios con suelo hidráulico original, techos altos y balcón. Reforma integral con cocina abierta.',
    agentId: 'lucia',
    status: 'sold',
    hue: 8,
    map: { x: 42, y: 74 },
    publishedDays: 40,
    views: 2620,
    leads: 38,
  },
];

export const estateLeads: EstateLead[] = [
  { id: 'L-1042', name: 'Carmen Ruiz', email: 'carmen.ruiz@example.com', phone: '+34 600 111 201', propertySlug: 'atico-terraza-ruzafa', stage: 'new', source: 'Portal', budget: 600000, createdAgo: 'hace 12 min', agentId: 'lucia', note: 'Pregunta por la plaza de garaje.' },
  { id: 'L-1041', name: 'Tom Becker', email: 'tom.becker@example.com', phone: '+34 600 111 202', propertySlug: 'apartamento-primera-linea-patacona', stage: 'new', source: 'Web', budget: 1800, createdAgo: 'hace 40 min', agentId: 'marc' },
  { id: 'L-1039', name: 'Pablo Martí', email: 'pablo.marti@example.com', phone: '+34 600 111 203', propertySlug: 'estudio-el-carmen', stage: 'contacted', source: 'Portal', budget: 1000, createdAgo: 'hace 3 h', agentId: 'ines' },
  { id: 'L-1037', name: 'Elena Vidal', email: 'elena.vidal@example.com', phone: '+34 600 111 204', propertySlug: 'casa-modernista-cabanyal', stage: 'contacted', source: 'Referido', budget: 480000, createdAgo: 'ayer', agentId: 'marc', note: 'Necesita hipoteca, preaprobada al 80 %.' },
  { id: 'L-1034', name: 'Javier Gil', email: 'javier.gil@example.com', phone: '+34 600 111 205', propertySlug: 'atico-terraza-ruzafa', stage: 'visit', source: 'Llamada', budget: 590000, createdAgo: 'hace 2 días', agentId: 'lucia' },
  { id: 'L-1031', name: 'Sofía Lambert', email: 'sofia.lambert@example.com', phone: '+34 600 111 206', propertySlug: 'chalet-jardin-campanar', stage: 'visit', source: 'Web', budget: 1000000, createdAgo: 'hace 3 días', agentId: 'david' },
  { id: 'L-1028', name: 'Nuria Pons', email: 'nuria.pons@example.com', phone: '+34 600 111 207', propertySlug: 'piso-luminoso-pla-del-real', stage: 'offer', source: 'Portal', budget: 705000, createdAgo: 'hace 5 días', agentId: 'lucia', note: 'Oferta de 695.000 € pendiente de respuesta.' },
  { id: 'L-1024', name: 'Andrés Llorca', email: 'andres.llorca@example.com', phone: '+34 600 111 208', propertySlug: 'piso-familiar-benimaclet', stage: 'offer', source: 'Portal', budget: 1350, createdAgo: 'hace 6 días', agentId: 'ines' },
  { id: 'L-1019', name: 'Marta Esteve', email: 'marta.esteve@example.com', phone: '+34 600 111 209', propertySlug: 'piso-reformado-ruzafa', stage: 'closed', source: 'Valoración', budget: 350000, createdAgo: 'hace 2 sem.', agentId: 'lucia' },
];

export const estateVisits: EstateVisit[] = [
  { id: 'V-311', day: 'Hoy', time: '10:30', propertySlug: 'atico-terraza-ruzafa', client: 'Javier Gil', agentId: 'lucia', confirmed: true },
  { id: 'V-312', day: 'Hoy', time: '12:00', propertySlug: 'estudio-el-carmen', client: 'Pablo Martí', agentId: 'ines', confirmed: true },
  { id: 'V-313', day: 'Hoy', time: '17:15', propertySlug: 'chalet-jardin-campanar', client: 'Sofía Lambert', agentId: 'david', confirmed: false },
  { id: 'V-314', day: 'Mañana', time: '09:45', propertySlug: 'casa-modernista-cabanyal', client: 'Elena Vidal', agentId: 'marc', confirmed: true },
  { id: 'V-315', day: 'Mañana', time: '18:30', propertySlug: 'apartamento-primera-linea-patacona', client: 'Tom Becker', agentId: 'marc', confirmed: false },
];

export const estateData = {
  brand: {
    name: 'Nido',
    legalName: 'Nido Inmobiliaria S.L.',
    tagline: 'Casas con historia en Valencia',
    phone: '+34 961 204 300',
    email: 'hola@nido.example',
    address: 'Carrer de Russafa, 12 · 46004 Valencia',
    hours: 'L–V 9:30–20:00 · S 10:00–14:00',
  },
  stats: [
    { value: '1.240', label: 'viviendas vendidas' },
    { value: '28 días', label: 'tiempo medio de venta' },
    { value: '4,9/5', label: 'valoración de clientes' },
  ],
  agents: estateAgents,
  zones: estateZones,
  properties: estateProperties,
  leads: estateLeads,
  visits: estateVisits,
};

/** Formats a price in EUR; rentals get a "/mes" suffix. */
export function formatEstatePrice(price: number, operation: EstateOperation = 'sale'): string {
  const value = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price);
  return operation === 'rent' ? `${value}/mes` : value;
}

export function getEstateAgent(id: string, agents: EstateAgent[] = estateAgents): EstateAgent | undefined {
  return agents.find((a) => a.id === id);
}

export function getEstateProperty(slug: string, properties: EstateProperty[] = estateProperties): EstateProperty | undefined {
  return properties.find((p) => p.slug === slug);
}
