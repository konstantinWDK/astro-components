// src/components/lib/templates/gym/data.ts
// Demo data for "Forja" · Gym & functional training club with member area.
// Replace with your own booking system / API data; every page and component takes these shapes as props.

export type GymLevel = 'Todos' | 'Inicial' | 'Avanzado';
export type GymMemberStatus = 'Activo' | 'Congelado' | 'Impago' | 'Prueba';

export interface GymDiscipline {
  id: string;
  name: string;
  description: string;
  /** 1 (gentle) to 5 (very intense). */
  intensity: number;
  minutes: number;
  /** Approximate kcal per session. */
  kcal: number;
  hue: number;
}

export interface GymTrainer {
  id: string;
  name: string;
  specialty: string;
  disciplines: string[];
  certifications: string[];
  years: number;
  quote: string;
}

export interface GymClass {
  id: string;
  disciplineId: string;
  trainerId: string;
  /** 0 = Monday … 6 = Sunday. */
  day: number;
  start: string;
  minutes: number;
  room: string;
  capacity: number;
  booked: number;
  level: GymLevel;
}

export interface GymPlan {
  id: string;
  name: string;
  tagline: string;
  /** Monthly price on a monthly contract (EUR). */
  monthly: number;
  /** Monthly price when paid yearly (EUR). */
  yearly: number;
  features: string[];
  highlighted?: boolean;
}

export interface GymMember {
  id: string;
  name: string;
  email: string;
  plan: string;
  status: GymMemberStatus;
  joined: string;
  lastVisit: string;
  visits30: number;
}

export interface GymRoutes {
  home: string;
  classes: string;
  plans: string;
  trainers: string;
  trial: string;
  signIn: string;
  dashboard: string;
  booking: string;
  members: string;
}

export const gymRoutes: GymRoutes = {
  home: '/',
  classes: '/clases',
  plans: '/tarifas',
  trainers: '/entrenadores',
  trial: '/prueba-gratis',
  signIn: '/acceso',
  dashboard: '/socios',
  booking: '/socios/reservar',
  members: '/socios/staff',
};

export const gymDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

export const gymDisciplines: GymDiscipline[] = [
  { id: 'fuerza', name: 'Fuerza', description: 'Técnica de básicos (sentadilla, peso muerto, press) con progresión semanal y cargas medidas.', intensity: 4, minutes: 60, kcal: 450, hue: 74 },
  { id: 'hiit', name: 'HIIT', description: 'Intervalos cortos de alta intensidad con remo, bici de aire y peso corporal.', intensity: 5, minutes: 45, kcal: 600, hue: 12 },
  { id: 'cross', name: 'Funcional', description: 'Circuitos con kettlebells, barras y gimnásticos. Escalable a cualquier nivel.', intensity: 4, minutes: 60, kcal: 550, hue: 36 },
  { id: 'boxeo', name: 'Boxeo', description: 'Técnica de golpeo, trabajo de saco y cardio por asaltos. Guantes incluidos.', intensity: 4, minutes: 50, kcal: 520, hue: 350 },
  { id: 'spinning', name: 'Ciclo indoor', description: 'Sesiones con música por zonas de potencia y luz. Ideal para ganar fondo.', intensity: 3, minutes: 45, kcal: 480, hue: 200 },
  { id: 'yoga', name: 'Yoga y movilidad', description: 'Flexibilidad, respiración y control para recuperar y prevenir lesiones.', intensity: 1, minutes: 60, kcal: 200, hue: 160 },
];

export const gymTrainers: GymTrainer[] = [
  { id: 'ane', name: 'Ane Etxeberria', specialty: 'Fuerza y halterofilia', disciplines: ['fuerza', 'cross'], certifications: ['NSCA-CSCS', 'Halterofilia nivel 2'], years: 9, quote: 'La técnica primero; el peso llega solo.' },
  { id: 'jon', name: 'Jon Mendiola', specialty: 'Boxeo y acondicionamiento', disciplines: ['boxeo', 'hiit'], certifications: ['Técnico de boxeo FEB', 'Primeros auxilios'], years: 12, quote: 'Cada asalto cuenta, también el último.' },
  { id: 'leire', name: 'Leire Ortiz', specialty: 'Yoga y movilidad', disciplines: ['yoga'], certifications: ['RYT-500', 'Pilates mat'], years: 7, quote: 'Moverse bien es moverse más años.' },
  { id: 'unai', name: 'Unai Garmendia', specialty: 'Cardio y ciclo indoor', disciplines: ['spinning', 'hiit'], certifications: ['Spinning® instructor', 'Nutrición deportiva'], years: 6, quote: 'Hoy un poco más que ayer.' },
];

const cls = (id: string, disciplineId: string, trainerId: string, day: number, start: string, minutes: number, room: string, capacity: number, booked: number, level: GymLevel = 'Todos'): GymClass =>
  ({ id, disciplineId, trainerId, day, start, minutes, room, capacity, booked, level });

export const gymClasses: GymClass[] = [
  cls('c01', 'fuerza', 'ane', 0, '07:00', 60, 'Sala Hierro', 12, 9),
  cls('c02', 'spinning', 'unai', 0, '09:30', 45, 'Sala Ciclo', 24, 24),
  cls('c03', 'yoga', 'leire', 0, '13:00', 60, 'Estudio', 16, 7, 'Inicial'),
  cls('c04', 'hiit', 'jon', 0, '18:30', 45, 'Box', 18, 18),
  cls('c05', 'boxeo', 'jon', 0, '20:00', 50, 'Ring', 14, 11),
  cls('c06', 'cross', 'ane', 1, '07:00', 60, 'Box', 16, 12),
  cls('c07', 'yoga', 'leire', 1, '10:00', 60, 'Estudio', 16, 5),
  cls('c08', 'spinning', 'unai', 1, '14:00', 45, 'Sala Ciclo', 24, 13),
  cls('c09', 'fuerza', 'ane', 1, '19:00', 60, 'Sala Hierro', 12, 12, 'Avanzado'),
  cls('c10', 'hiit', 'unai', 1, '20:15', 45, 'Box', 18, 10),
  cls('c11', 'boxeo', 'jon', 2, '07:30', 50, 'Ring', 14, 6, 'Inicial'),
  cls('c12', 'cross', 'ane', 2, '12:00', 60, 'Box', 16, 9),
  cls('c13', 'spinning', 'unai', 2, '18:00', 45, 'Sala Ciclo', 24, 21),
  cls('c14', 'yoga', 'leire', 2, '20:00', 60, 'Estudio', 16, 14),
  cls('c15', 'fuerza', 'ane', 3, '07:00', 60, 'Sala Hierro', 12, 8),
  cls('c16', 'hiit', 'jon', 3, '13:30', 45, 'Box', 18, 7),
  cls('c17', 'cross', 'ane', 3, '19:00', 60, 'Box', 16, 16),
  cls('c18', 'boxeo', 'jon', 3, '20:15', 50, 'Ring', 14, 12, 'Avanzado'),
  cls('c19', 'spinning', 'unai', 4, '08:00', 45, 'Sala Ciclo', 24, 15),
  cls('c20', 'yoga', 'leire', 4, '13:00', 60, 'Estudio', 16, 10),
  cls('c21', 'hiit', 'unai', 4, '18:00', 45, 'Box', 18, 17),
  cls('c22', 'fuerza', 'ane', 4, '19:15', 60, 'Sala Hierro', 12, 6, 'Inicial'),
  cls('c23', 'cross', 'ane', 5, '10:00', 60, 'Box', 16, 14),
  cls('c24', 'yoga', 'leire', 5, '11:30', 60, 'Estudio', 16, 9),
  cls('c25', 'spinning', 'unai', 6, '10:30', 45, 'Sala Ciclo', 24, 11),
];

export const gymPlans: GymPlan[] = [
  {
    id: 'libre',
    name: 'Sala libre',
    tagline: 'Entrena a tu ritmo',
    monthly: 39,
    yearly: 32,
    features: ['Sala de musculación y cardio', 'Horario 6:00–23:00', 'App con rutinas', '1 sesión de valoración inicial'],
  },
  {
    id: 'completo',
    name: 'Completo',
    tagline: 'Sala y clases sin límite',
    monthly: 59,
    yearly: 49,
    features: ['Todo lo de Sala libre', 'Clases ilimitadas', 'Reserva con 7 días de antelación', 'Revisión de progreso mensual', 'Toalla y taquilla'],
    highlighted: true,
  },
  {
    id: 'personal',
    name: 'Personal',
    tagline: 'Con entrenador asignado',
    monthly: 129,
    yearly: 109,
    features: ['Todo lo de Completo', '4 sesiones 1:1 al mes', 'Plan de nutrición', 'Medición corporal mensual', 'Acceso a todas las sedes'],
  },
];

export const gymMember = {
  name: 'Maite Arrieta',
  initials: 'MA',
  plan: 'Completo',
  since: 'marzo 2024',
  goal: 'Sentadilla de 100 kg',
  streakWeeks: 11,
  visitsThisMonth: 14,
  visitsGoal: 16,
  /** Sessions per week, last 8 weeks (oldest first). */
  weekly: [2, 3, 3, 4, 2, 4, 4, 3],
  /** Body weight in kg, last 6 months (oldest first). */
  weight: [68.4, 67.9, 67.1, 66.8, 66.2, 65.9],
  records: [
    { lift: 'Sentadilla', value: 92.5, unit: 'kg', delta: 5 },
    { lift: 'Peso muerto', value: 115, unit: 'kg', delta: 7.5 },
    { lift: 'Press banca', value: 52.5, unit: 'kg', delta: 2.5 },
    { lift: 'Remo 2 km', value: 8.12, unit: 'min', delta: -0.2 },
  ],
  /** Class ids the member has booked. */
  bookings: ['c01', 'c13', 'c17'],
};

export const gymMembers: GymMember[] = [
  { id: 'S-2051', name: 'Maite Arrieta', email: 'maite@example.com', plan: 'Completo', status: 'Activo', joined: '2024-03-04', lastVisit: '2026-11-19', visits30: 14 },
  { id: 'S-2050', name: 'Iker Bilbao', email: 'iker@example.com', plan: 'Sala libre', status: 'Activo', joined: '2024-06-12', lastVisit: '2026-11-20', visits30: 18 },
  { id: 'S-2049', name: 'Nerea Gómez', email: 'nerea@example.com', plan: 'Personal', status: 'Activo', joined: '2023-09-01', lastVisit: '2026-11-18', visits30: 11 },
  { id: 'S-2047', name: 'Mikel Urrutia', email: 'mikel@example.com', plan: 'Completo', status: 'Congelado', joined: '2023-01-15', lastVisit: '2026-09-30', visits30: 0 },
  { id: 'S-2046', name: 'Sara López', email: 'sara@example.com', plan: 'Completo', status: 'Impago', joined: '2025-02-10', lastVisit: '2026-11-02', visits30: 4 },
  { id: 'S-2044', name: 'David Ruiz', email: 'david@example.com', plan: 'Sala libre', status: 'Activo', joined: '2025-05-21', lastVisit: '2026-11-20', visits30: 21 },
  { id: 'S-2043', name: 'Laura Fernández', email: 'laura@example.com', plan: 'Personal', status: 'Activo', joined: '2024-11-03', lastVisit: '2026-11-17', visits30: 9 },
  { id: 'S-2041', name: 'Asier Zubizarreta', email: 'asier@example.com', plan: 'Completo', status: 'Prueba', joined: '2026-11-14', lastVisit: '2026-11-19', visits30: 3 },
  { id: 'S-2039', name: 'Paula Castro', email: 'paula@example.com', plan: 'Sala libre', status: 'Activo', joined: '2025-08-30', lastVisit: '2026-11-03', visits30: 3 },
  { id: 'S-2036', name: 'Gorka Iriondo', email: 'gorka@example.com', plan: 'Completo', status: 'Activo', joined: '2022-10-11', lastVisit: '2026-11-20', visits30: 16 },
];

export const gymOccupancy = {
  now: 47,
  capacity: 120,
  /** Typical people in the club per hour, 6:00 to 22:00. */
  hourly: [18, 34, 41, 30, 22, 25, 38, 44, 29, 24, 26, 35, 61, 88, 97, 72, 40],
};

export const gymData = {
  brand: {
    name: 'Forja',
    legalName: 'Forja Training Club S.L.',
    tagline: 'Fuerza, clases y comunidad en Bilbao',
    phone: '+34 944 120 300',
    email: 'hola@forja.example',
    address: 'Calle Particular de Estraunza, 8 · 48011 Bilbao',
    hours: 'L–V 6:00–23:00 · S–D 8:00–21:00',
  },
  stats: [
    { value: '25', label: 'clases a la semana' },
    { value: '1.400 m²', label: 'de sala' },
    { value: '4,8/5', label: 'en reseñas' },
  ],
  disciplines: gymDisciplines,
  trainers: gymTrainers,
  classes: gymClasses,
  plans: gymPlans,
  member: gymMember,
  members: gymMembers,
  occupancy: gymOccupancy,
};

export function getGymDiscipline(id: string, list: GymDiscipline[] = gymDisciplines): GymDiscipline | undefined {
  return list.find((d) => d.id === id);
}

export function getGymTrainer(id: string, list: GymTrainer[] = gymTrainers): GymTrainer | undefined {
  return list.find((t) => t.id === id);
}

/** "07:00" + 60 → "08:00". */
export function gymEndTime(start: string, minutes: number): string {
  const [h, m] = start.split(':').map(Number);
  const total = h * 60 + m + minutes;
  return `${String(Math.floor(total / 60) % 24).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}
