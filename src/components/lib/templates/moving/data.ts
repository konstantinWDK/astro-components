// src/components/lib/templates/moving/data.ts
// Domain entities, mock data and routing helpers for Muvr · Moving, Logistics & Van Fleet Management.

export interface MovingVehicle {
  id: string;
  name: string;
  code: string;
  category: 'compact_van' | 'medium_van' | 'luton_box' | 'truck_lift';
  model: string;
  plate: string;
  volumeM3: number;
  payloadKg: number;
  dimensions: { lengthM: number; widthM: number; heightM: number };
  hasTailLift: boolean;
  status: 'active' | 'en_route' | 'maintenance' | 'reserved';
  currentDriver?: string;
  fuelType: string;
  mileageKm: number;
}

export interface FurnitureItem {
  id: string;
  name: string;
  category: 'living' | 'bedroom' | 'dining' | 'appliances' | 'boxes';
  volumeM3: number;
  weightEstKg: number;
  disassembleable: boolean;
  iconName: string;
}

export interface MoveOrderItem {
  itemId: string;
  name: string;
  qty: number;
  volumeTotalM3: number;
  requiresDisassembly?: boolean;
}

export interface MoveOrder {
  id: string;
  reference: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  originAddress: string;
  originFloor: number;
  originElevator: boolean;
  destinationAddress: string;
  destinationFloor: number;
  destinationElevator: boolean;
  distanceKm: number;
  moveDate: string;
  timeSlot: string;
  volumeM3: number;
  vehicleId: string;
  assignedDriver: string;
  assignedMovers: string[];
  status: 'scheduled' | 'loading' | 'in_transit' | 'unloading' | 'completed';
  priceTotal: number;
  paid: boolean;
  notes?: string;
  items: MoveOrderItem[];
}

export interface JobOpening {
  id: string;
  title: string;
  roleType: 'driver_own_van' | 'driver_company_van' | 'furniture_mover' | 'assembly_tech';
  contractType: 'freelance' | 'full_time' | 'weekend';
  payRate: string;
  bonus: string;
  location: string;
  openings: number;
  requirements: string[];
}

export interface JobCandidate {
  id: string;
  name: string;
  phone: string;
  email: string;
  role: string;
  status: 'applied' | 'interview' | 'trial' | 'hired' | 'rejected';
  license: string;
  hasOwnVan: boolean;
  vanModel?: string;
  experienceYears: number;
  appliedDate: string;
  rating: number;
  notes: string;
}

export const movingVehicles: MovingVehicle[] = [
  {
    id: 'van-01',
    name: 'Van Express L1H1',
    code: 'VAN-01',
    category: 'compact_van',
    model: 'Renault Trafic 2.0 dCi',
    plate: '4821-MVR',
    volumeM3: 6.0,
    payloadKg: 1050,
    dimensions: { lengthM: 2.5, widthM: 1.6, heightM: 1.4 },
    hasTailLift: false,
    status: 'en_route',
    currentDriver: 'Marco Salgado',
    fuelType: 'Diesel Euro 6',
    mileageKm: 64200,
  },
  {
    id: 'van-02',
    name: 'High Roof Van L3H2',
    code: 'VAN-02',
    category: 'medium_van',
    model: 'Mercedes Sprinter 315 CDI',
    plate: '9144-LGT',
    volumeM3: 13.5,
    payloadKg: 1350,
    dimensions: { lengthM: 3.7, widthM: 1.7, heightM: 1.9 },
    hasTailLift: false,
    status: 'en_route',
    currentDriver: 'Raúl Morales',
    fuelType: 'Diesel Euro 6',
    mileageKm: 88400,
  },
  {
    id: 'van-03',
    name: 'Luton Box with Tail-Lift',
    code: 'BOX-03',
    category: 'luton_box',
    model: 'Iveco Daily 35C16 Box',
    plate: '3318-MVX',
    volumeM3: 20.0,
    payloadKg: 1100,
    dimensions: { lengthM: 4.2, widthM: 2.1, heightM: 2.2 },
    hasTailLift: true,
    status: 'active',
    currentDriver: 'Javier Domínguez',
    fuelType: 'Diesel Euro 6',
    mileageKm: 42100,
  },
  {
    id: 'van-04',
    name: 'Heavy City Truck 7.5T',
    code: 'TRK-04',
    category: 'truck_lift',
    model: 'MAN TGL 8.190 Box Lift',
    plate: '7021-HVY',
    volumeM3: 36.0,
    payloadKg: 3400,
    dimensions: { lengthM: 6.1, widthM: 2.4, heightM: 2.4 },
    hasTailLift: true,
    status: 'reserved',
    currentDriver: 'Unassigned',
    fuelType: 'Diesel',
    mileageKm: 112000,
  },
];

export const furnitureCatalog: FurnitureItem[] = [
  // Living Room
  { id: 'f-sofa-3', name: '3-Seater Sofa / Chaise', category: 'living', volumeM3: 2.4, weightEstKg: 75, disassembleable: true, iconName: 'package' },
  { id: 'f-armchair', name: 'Armchair / Recliner', category: 'living', volumeM3: 0.8, weightEstKg: 28, disassembleable: false, iconName: 'package' },
  { id: 'f-tv-stand', name: 'TV Unit & Media Console', category: 'living', volumeM3: 0.7, weightEstKg: 35, disassembleable: false, iconName: 'package' },
  { id: 'f-tv-65', name: 'Big TV Box (55"-75")', category: 'living', volumeM3: 0.3, weightEstKg: 22, disassembleable: false, iconName: 'package' },
  { id: 'f-bookshelf', name: 'Tall Bookcase / Display Shelf', category: 'living', volumeM3: 0.9, weightEstKg: 40, disassembleable: true, iconName: 'package' },
  // Bedroom
  { id: 'f-bed-double', name: 'Double Bed (150x190) + Mattress', category: 'bedroom', volumeM3: 1.8, weightEstKg: 65, disassembleable: true, iconName: 'bed' },
  { id: 'f-bed-single', name: 'Single Bed (90x190) + Mattress', category: 'bedroom', volumeM3: 1.1, weightEstKg: 40, disassembleable: true, iconName: 'bed' },
  { id: 'f-wardrobe-3', name: '3-Door Wardrobe (Dismantled)', category: 'bedroom', volumeM3: 2.2, weightEstKg: 95, disassembleable: true, iconName: 'package' },
  { id: 'f-dresser', name: 'Chest of Drawers / Dresser', category: 'bedroom', volumeM3: 0.8, weightEstKg: 45, disassembleable: false, iconName: 'package' },
  { id: 'f-nightstand', name: 'Nightstands (Pair)', category: 'bedroom', volumeM3: 0.4, weightEstKg: 18, disassembleable: false, iconName: 'package' },
  // Dining & Office
  { id: 'f-dining-table', name: 'Extendable Dining Table', category: 'dining', volumeM3: 1.2, weightEstKg: 50, disassembleable: true, iconName: 'package' },
  { id: 'f-chairs-4', name: 'Dining Chairs (Set of 4)', category: 'dining', volumeM3: 0.9, weightEstKg: 24, disassembleable: false, iconName: 'chair' },
  { id: 'f-desk-office', name: 'Office Desk + Ergonomic Chair', category: 'dining', volumeM3: 1.0, weightEstKg: 38, disassembleable: true, iconName: 'chair' },
  // Appliances
  { id: 'f-washing-mach', name: 'Washing Machine / Dryer', category: 'appliances', volumeM3: 0.5, weightEstKg: 70, disassembleable: false, iconName: 'package' },
  { id: 'f-fridge', name: 'Full Fridge / Freezer (Combí)', category: 'appliances', volumeM3: 1.4, weightEstKg: 80, disassembleable: false, iconName: 'package' },
  // Boxes
  { id: 'f-boxes-medium', name: 'Standard Moving Boxes (x10)', category: 'boxes', volumeM3: 0.8, weightEstKg: 120, disassembleable: false, iconName: 'package' },
  { id: 'f-boxes-large', name: 'Wardrobe Garment Boxes (x2)', category: 'boxes', volumeM3: 0.9, weightEstKg: 40, disassembleable: false, iconName: 'package' },
];

export const movingOrders: MoveOrder[] = [
  {
    id: 'ord-01',
    reference: 'MVR-8291',
    customerName: 'Santiago Berrocal',
    customerPhone: '+34 622 841 092',
    customerEmail: 'santiago.b@gmail.com',
    originAddress: 'Calle Princesa 42, 3º Izq, Madrid',
    originFloor: 3,
    originElevator: true,
    destinationAddress: 'Avenida de Europa 18, Pozuelo de Alarcón',
    destinationFloor: 1,
    destinationElevator: true,
    distanceKm: 14.5,
    moveDate: '2026-11-08',
    timeSlot: '09:00 - 13:00',
    volumeM3: 14.2,
    vehicleId: 'van-02',
    assignedDriver: 'Raúl Morales',
    assignedMovers: ['Dani Castro', 'Mateo Ruiz'],
    status: 'in_transit',
    priceTotal: 460,
    paid: true,
    notes: 'Fragile porcelain tableware marked with red tape. Couch legs unscrewed.',
    items: [
      { itemId: 'f-sofa-3', name: '3-Seater Sofa / Chaise', qty: 1, volumeTotalM3: 2.4, requiresDisassembly: true },
      { itemId: 'f-bed-double', name: 'Double Bed + Mattress', qty: 1, volumeTotalM3: 1.8, requiresDisassembly: true },
      { itemId: 'f-dining-table', name: 'Extendable Dining Table', qty: 1, volumeTotalM3: 1.2, requiresDisassembly: true },
      { itemId: 'f-chairs-4', name: 'Dining Chairs (Set of 4)', qty: 1, volumeTotalM3: 0.9 },
      { itemId: 'f-fridge', name: 'Full Fridge Combí', qty: 1, volumeTotalM3: 1.4 },
      { itemId: 'f-boxes-medium', name: 'Standard Moving Boxes (x10)', qty: 3, volumeTotalM3: 2.4 },
    ],
  },
  {
    id: 'ord-02',
    reference: 'MVR-8292',
    customerName: 'Beatriz Soler Gómez',
    customerPhone: '+34 651 908 311',
    customerEmail: 'beatriz.soler@outlook.com',
    originAddress: 'Paseo de la Habana 88, 5º A, Madrid',
    originFloor: 5,
    originElevator: false,
    destinationAddress: 'Calle Velázquez 110, 2º B, Madrid',
    destinationFloor: 2,
    destinationElevator: true,
    distanceKm: 5.2,
    moveDate: '2026-11-08',
    timeSlot: '14:30 - 18:30',
    volumeM3: 8.5,
    vehicleId: 'van-01',
    assignedDriver: 'Marco Salgado',
    assignedMovers: ['Carlos Peña'],
    status: 'scheduled',
    priceTotal: 340,
    paid: false,
    notes: 'No elevator at origin (5th floor). Ladder lift considered but stairs are wide.',
    items: [
      { itemId: 'f-bed-double', name: 'Double Bed + Mattress', qty: 1, volumeTotalM3: 1.8, requiresDisassembly: true },
      { itemId: 'f-wardrobe-3', name: '3-Door Wardrobe', qty: 1, volumeTotalM3: 2.2, requiresDisassembly: true },
      { itemId: 'f-boxes-medium', name: 'Standard Moving Boxes (x10)', qty: 2, volumeTotalM3: 1.6 },
    ],
  },
  {
    id: 'ord-03',
    reference: 'MVR-8293',
    customerName: 'Studio Arquitectura Nórdica SL',
    customerPhone: '+34 910 442 119',
    customerEmail: 'admin@nordicstudio.es',
    originAddress: 'Calle Alcalá 210, Planta 1, Madrid',
    originFloor: 1,
    originElevator: true,
    destinationAddress: 'Calle Serrano 94, Planta 4, Madrid',
    destinationFloor: 4,
    destinationElevator: true,
    distanceKm: 7.8,
    moveDate: '2026-11-09',
    timeSlot: '08:00 - 15:00',
    volumeM3: 19.5,
    vehicleId: 'van-03',
    assignedDriver: 'Javier Domínguez',
    assignedMovers: ['Dani Castro', 'Mateo Ruiz', 'Hugo Vera'],
    status: 'scheduled',
    priceTotal: 780,
    paid: true,
    notes: 'Office relocation: 6 workstations, architectural scale models, server rack.',
    items: [
      { itemId: 'f-desk-office', name: 'Office Desks + Chairs', qty: 6, volumeTotalM3: 6.0, requiresDisassembly: true },
      { itemId: 'f-bookshelf', name: 'Tall Bookcase / Archives', qty: 4, volumeTotalM3: 3.6 },
      { itemId: 'f-boxes-medium', name: 'Standard Moving Boxes (x10)', qty: 5, volumeTotalM3: 4.0 },
    ],
  },
  {
    id: 'ord-04',
    reference: 'MVR-8294',
    customerName: 'Gonzalo Navarro',
    customerPhone: '+34 689 312 770',
    customerEmail: 'g.navarro@gmail.com',
    originAddress: 'Calle Fuencarral 12, 1º Ext, Madrid',
    originFloor: 1,
    originElevator: true,
    destinationAddress: 'Calle Toledo 65, Bajo, Madrid',
    destinationFloor: 0,
    destinationElevator: false,
    distanceKm: 4.0,
    moveDate: '2026-11-07',
    timeSlot: '10:00 - 12:30',
    volumeM3: 5.5,
    vehicleId: 'van-01',
    assignedDriver: 'Marco Salgado',
    assignedMovers: ['Carlos Peña'],
    status: 'completed',
    priceTotal: 210,
    paid: true,
    notes: 'Single room move (IKEA furniture + 8 boxes). Fast delivery.',
    items: [
      { itemId: 'f-bed-single', name: 'Single Bed + Mattress', qty: 1, volumeTotalM3: 1.1 },
      { itemId: 'f-desk-office', name: 'Desk + Chair', qty: 1, volumeTotalM3: 1.0 },
      { itemId: 'f-boxes-medium', name: 'Standard Moving Boxes (x10)', qty: 1, volumeTotalM3: 0.8 },
    ],
  },
];

export const jobOpenings: JobOpening[] = [
  {
    id: 'job-01',
    title: 'Van Driver with Own Vehicle (L2/L3)',
    roleType: 'driver_own_van',
    contractType: 'freelance',
    payRate: '€32 - €45 / hour',
    bonus: '+€15 per extra delivery stop',
    location: 'Madrid & Metropolitan Ring',
    openings: 4,
    requirements: [
      'Own van in good condition (minimum L2H2 or box van)',
      'Valid B driving license (minimum 2 years)',
      'High-capacity transport liability insurance',
      'Clean driving record and smartphone for route tracking',
    ],
  },
  {
    id: 'job-02',
    title: 'Company Fleet Van Driver & Team Lead',
    roleType: 'driver_company_van',
    contractType: 'full_time',
    payRate: '€1,850 - €2,200 / month',
    bonus: '+ Performance and punctuality bonus',
    location: 'Madrid Headquarters (San Fernando)',
    openings: 2,
    requirements: [
      'Valid B driving license (C1 license appreciated for Luton box)',
      'Experience maneuvering commercial vehicles in urban centers',
      'Customer-friendly attitude and basic cargo securing skills',
      'Immediate availability for 40h/week shift',
    ],
  },
  {
    id: 'job-03',
    title: 'Furniture Mover & Heavy Lift Specialist',
    roleType: 'furniture_mover',
    contractType: 'full_time',
    payRate: '€16 - €20 / hour',
    bonus: '+ Staircase bonus on floors without lift',
    location: 'Madrid Centre & Surrounds',
    openings: 6,
    requirements: [
      'Good physical fitness and ergonomic lifting techniques',
      'Punctual, trustworthy and polite patient handling of furniture',
      'Experience carrying bulky items, sofas, appliances through stairs',
      'Safety boots and company uniform provided',
    ],
  },
  {
    id: 'job-04',
    title: 'Furniture Disassembly & Assembly Technician',
    roleType: 'assembly_tech',
    contractType: 'weekend',
    payRate: '€22 - €28 / hour',
    bonus: '+ Tool allowance provided',
    location: 'Flexible across Madrid',
    openings: 3,
    requirements: [
      'Deep experience assembling IKEA, BoConcept and custom cabinetry',
      'Own cordless drill/driver set and precision hand tools',
      'Ability to mount wall brackets and hanging units securely',
    ],
  },
];

export const jobCandidates: JobCandidate[] = [
  {
    id: 'cand-01',
    name: 'Andrés Gil Carmona',
    phone: '+34 611 204 883',
    email: 'andres.gil@gmail.com',
    role: 'Van Driver with Own Vehicle',
    status: 'interview',
    license: 'B (6 years)',
    hasOwnVan: true,
    vanModel: 'Ford Transit 350 L3H2 (2022)',
    experienceYears: 4,
    appliedDate: '2026-11-05',
    rating: 4.9,
    notes: 'Has own clean van with ramp. Worked 3 years with Amazon DSP and local removals.',
  },
  {
    id: 'cand-02',
    name: 'Mikel Otxoa',
    phone: '+34 634 892 110',
    email: 'mikel.otxoa@hotmail.com',
    role: 'Furniture Mover & Heavy Lift',
    status: 'trial',
    license: 'B (3 years)',
    hasOwnVan: false,
    experienceYears: 2,
    appliedDate: '2026-11-04',
    rating: 4.8,
    notes: 'Trial day completed on Nov 6th with Captain Dani. Fast mover, careful with doorframes.',
  },
  {
    id: 'cand-03',
    name: 'Valeriu Ionescu',
    phone: '+34 670 412 900',
    email: 'ionescu.valeriu@yahoo.com',
    role: 'Company Fleet Van Driver',
    status: 'hired',
    license: 'B + C1 (8 years)',
    hasOwnVan: false,
    experienceYears: 7,
    appliedDate: '2026-10-28',
    rating: 5.0,
    notes: 'CAP certificate updated. Starts Monday driving Iveco Luton Box #03.',
  },
  {
    id: 'cand-04',
    name: 'Cristian Almonte',
    phone: '+34 699 018 344',
    email: 'c.almonte@gmail.com',
    role: 'Furniture Disassembly Technician',
    status: 'applied',
    license: 'B (1 year)',
    hasOwnVan: false,
    experienceYears: 3,
    appliedDate: '2026-11-06',
    rating: 4.5,
    notes: 'Worked as carpenter assistant. Fast with flat-pack furniture.',
  },
];

export const movingPricingTiers = [
  {
    id: 'tier-van',
    name: 'Van + Driver',
    tag: 'Quick Moves & Single Items',
    basePrice: 65,
    unit: 'from €65/hr',
    includedMovers: 1, // driver assists at ground
    minHours: 2,
    bestFor: 'Sofas, beds, appliances, marketplace pickups, student rooms',
    features: [
      'High-roof 13.5m³ van included',
      'Professional driver assists loading/securing',
      'Protective moving blankets & ratchet straps',
      'Up to 20 km fuel included in base rate',
      'Full transit cargo insurance included',
    ],
  },
  {
    id: 'tier-full',
    name: 'Full Move & 2 Movers',
    tag: 'Most Popular for Apartments',
    basePrice: 95,
    unit: 'from €95/hr',
    popular: true,
    includedMovers: 2,
    minHours: 3,
    bestFor: '1 to 3-bedroom flats, complete furniture removals',
    features: [
      '20m³ Luton Box van with hydraulic tail-lift',
      '2 experienced movers do 100% of the heavy lifting',
      'Furniture disassembly & reassembly included',
      'Mattress protective covers & wardrobe boxes',
      'Stair climbing & narrow corridor handling',
    ],
  },
  {
    id: 'tier-turnkey',
    name: 'VIP Turnkey & Packing',
    tag: 'Zero Stress · Everything Packed',
    basePrice: 145,
    unit: 'from €145/hr',
    includedMovers: 3,
    minHours: 4,
    bestFor: 'Family homes, offices, premium delicate moves',
    features: [
      'Heavy 36m³ truck + 3 senior movers',
      'All boxes, bubble wrap & tape provided free',
      'Complete packing of dishware, clothes & books',
      'Full furniture placement in your new home',
      'Debris & box collection after unpacking',
    ],
  },
];

export interface MovingRoutes {
  home: string;
  quote: string;
  fleet: string;
  careers: string;
  signIn: string;
  dashboard: string;
  dispatch: string;
  moves: string;
  hiring: string;
  settings: string;
}

export const movingRoutes: MovingRoutes = {
  home: '/preview/moving',
  quote: '/preview/moving/quote',
  fleet: '/preview/moving/fleet',
  careers: '/preview/moving/careers',
  signIn: '/preview/moving/sign-in',
  dashboard: '/preview/moving/app',
  dispatch: '/preview/moving/app/dispatch',
  moves: '/preview/moving/app/moves',
  hiring: '/preview/moving/app/hiring',
  settings: '/preview/moving/app/settings',
};

export const movingData = {
  brand: {
    name: 'Muvr Logistics',
    tagline: 'Reliable Furniture Removals, Van Fleet & Driver Careers',
    phone: '+34 910 882 400',
    whatsapp: '+34610882400',
    email: 'hola@muvr.es',
    address: 'C/ del Transporte 14, Polígono Industrial San Fernando, Madrid',
  },
  vehicles: movingVehicles,
  orders: movingOrders,
  furniture: furnitureCatalog,
  jobs: jobOpenings,
  candidates: jobCandidates,
  pricing: movingPricingTiers,
  routes: movingRoutes,
};

