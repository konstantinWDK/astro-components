// src/components/lib/templates/saas-clinic/data.ts
// Demo data for the medical consultations SaaS template ("Pulso · Clinic OS", workspace
// "Clínica Alameda"). Every person, record and figure is fictional and for demonstration only —
// replace this file with data from your own API. Nothing here is medical advice.

export interface ClinicRoutes {
  landing: string;
  signIn: string;
  /** Public booking page for patients. */
  book: string;
  dashboard: string;
  schedule: string;
  patients: string;
  /** Patient record prefix — records live at `${patient}${id}/`. */
  patient: string;
  consultation: string;
  telehealth: string;
  reports: string;
  settings: string;
}

export const clinicRoutes: ClinicRoutes = {
  landing: '/',
  signIn: '/sign-in/',
  book: '/book/',
  dashboard: '/app/',
  schedule: '/app/schedule/',
  patients: '/app/patients/',
  patient: '/app/patients/',
  consultation: '/app/consultation/',
  telehealth: '/app/telehealth/',
  reports: '/app/reports/',
  settings: '/app/settings/',
};

export type VisitType = 'in-person' | 'video';
export type ApptStatus = 'confirmed' | 'checked-in' | 'in-progress' | 'completed' | 'no-show' | 'cancelled';

export interface ClinicDoctor {
  id: string;
  name: string;
  specialty: string;
  hue: number;
  room: string;
  rating: number;
  reviews: number;
  languages: string[];
  fee: number;
  telehealth: boolean;
  /** Weekdays with consultations (0 = Monday). */
  days: number[];
  bio: string;
}

export interface ClinicSpecialty {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ClinicPatient {
  id: string;
  name: string;
  age: number;
  sex: 'F' | 'M' | 'X';
  dob: string;
  mrn: string;
  phone: string;
  email: string;
  insurance: string;
  bloodType: string;
  doctor: string;
  status: 'Active' | 'New' | 'Follow-up' | 'Inactive';
  lastVisit: string;
  allergies: Array<{ name: string; severity: 'mild' | 'moderate' | 'severe'; class?: string }>;
  conditions: string[];
  medications: Array<{ name: string; dose: string }>;
  tags: string[];
}

export interface ClinicAppointment {
  id: string;
  /** Day index in the demo week (0 = Monday). */
  day: number;
  start: string;
  duration: number;
  patient: string;
  doctor: string;
  type: VisitType;
  reason: string;
  status: ApptStatus;
}

/* ---------- Static catalogue ---------- */

const specialties: ClinicSpecialty[] = [
  { id: 'general', name: 'General practice', description: 'Check-ups, colds, prescriptions and referrals.', icon: 'stethoscope' },
  { id: 'pediatrics', name: 'Pediatrics', description: 'Care for babies, children and teenagers.', icon: 'heart' },
  { id: 'dermatology', name: 'Dermatology', description: 'Skin, hair and nails — moles, acne, eczema.', icon: 'sparkle' },
  { id: 'cardiology', name: 'Cardiology', description: 'Heart health, blood pressure and ECG.', icon: 'pulse' },
  { id: 'psychology', name: 'Psychology', description: 'Talk therapy for anxiety, stress and mood.', icon: 'users' },
];

const doctors: ClinicDoctor[] = [
  { id: 'dr-navarro', name: 'Dr. Laura Navarro', specialty: 'general', hue: 190, room: 'Room 1', rating: 4.9, reviews: 312, languages: ['Spanish', 'English'], fee: 60, telehealth: true, days: [0, 1, 2, 3, 4], bio: 'Family doctor with 15 years in primary care. Special interest in preventive medicine and chronic conditions.' },
  { id: 'dr-okafor', name: 'Dr. Daniel Okafor', specialty: 'cardiology', hue: 350, room: 'Room 3', rating: 4.8, reviews: 189, languages: ['English', 'French'], fee: 95, telehealth: true, days: [0, 2, 4], bio: 'Cardiologist focused on hypertension, arrhythmias and cardiac rehabilitation.' },
  { id: 'dr-sato', name: 'Dr. Emi Sato', specialty: 'pediatrics', hue: 150, room: 'Room 2', rating: 5.0, reviews: 241, languages: ['English', 'Japanese', 'Spanish'], fee: 70, telehealth: false, days: [0, 1, 3, 4], bio: 'Pediatrician and mum of two. Calm visits, clear answers and a drawer full of stickers.' },
  { id: 'dr-ferrer', name: 'Dr. Marc Ferrer', specialty: 'dermatology', hue: 32, room: 'Room 4', rating: 4.7, reviews: 156, languages: ['Spanish', 'Catalan', 'English'], fee: 85, telehealth: true, days: [1, 3], bio: 'Dermatologist with a focus on skin cancer screening and dermatoscopy.' },
  { id: 'ps-lindqvist', name: 'Nora Lindqvist, PsyD', specialty: 'psychology', hue: 268, room: 'Room 5', rating: 4.9, reviews: 98, languages: ['English', 'Swedish'], fee: 75, telehealth: true, days: [0, 1, 2, 3], bio: 'Clinical psychologist using CBT and ACT for anxiety, burnout and sleep problems.' },
];

const patients: ClinicPatient[] = [
  {
    id: 'p-1042', name: 'Elena Duarte', age: 42, sex: 'F', dob: '1984-03-12', mrn: 'MRN-001042', phone: '+34 612 345 678', email: 'elena.duarte@example.com', insurance: 'Sanitas · Plus', bloodType: 'A+', doctor: 'dr-navarro', status: 'Follow-up', lastVisit: '2026-10-28',
    allergies: [{ name: 'Penicillin', severity: 'severe', class: 'penicillin' }, { name: 'Pollen', severity: 'mild' }],
    conditions: ['Hypertension (stage 1)', 'Seasonal allergic rhinitis'],
    medications: [{ name: 'Enalapril', dose: '10 mg · once daily' }, { name: 'Cetirizine', dose: '10 mg · as needed' }],
    tags: ['Hypertension', 'Allergy'],
  },
  {
    id: 'p-1057', name: 'James Whitfield', age: 67, sex: 'M', dob: '1959-07-02', mrn: 'MRN-001057', phone: '+44 7700 900123', email: 'j.whitfield@example.com', insurance: 'Bupa · Senior', bloodType: 'O+', doctor: 'dr-okafor', status: 'Active', lastVisit: '2026-11-02',
    allergies: [{ name: 'Ibuprofen', severity: 'moderate', class: 'nsaid' }],
    conditions: ['Atrial fibrillation', 'Type 2 diabetes'],
    medications: [{ name: 'Apixaban', dose: '5 mg · twice daily' }, { name: 'Metformin', dose: '850 mg · twice daily' }],
    tags: ['Cardio', 'Diabetes'],
  },
  {
    id: 'p-1063', name: 'Lucas Silva', age: 6, sex: 'M', dob: '2020-05-21', mrn: 'MRN-001063', phone: '+34 655 112 233', email: 'familia.silva@example.com', insurance: 'Adeslas · Family', bloodType: 'B+', doctor: 'dr-sato', status: 'Active', lastVisit: '2026-10-15',
    allergies: [], conditions: ['Mild asthma'], medications: [{ name: 'Salbutamol inhaler', dose: '100 mcg · as needed' }], tags: ['Pediatric', 'Asthma'],
  },
  {
    id: 'p-1071', name: 'Aiko Tanaka', age: 29, sex: 'F', dob: '1997-01-30', mrn: 'MRN-001071', phone: '+34 699 876 543', email: 'aiko.t@example.com', insurance: 'Private · self-pay', bloodType: 'AB+', doctor: 'dr-ferrer', status: 'New', lastVisit: '—',
    allergies: [{ name: 'Latex', severity: 'moderate' }], conditions: [], medications: [], tags: ['New patient'],
  },
  {
    id: 'p-1078', name: 'Marco Bellini', age: 51, sex: 'M', dob: '1975-09-08', mrn: 'MRN-001078', phone: '+39 333 444 5566', email: 'marco.b@example.com', insurance: 'DKV · Integral', bloodType: 'O-', doctor: 'dr-navarro', status: 'Active', lastVisit: '2026-09-30',
    allergies: [], conditions: ['High cholesterol'], medications: [{ name: 'Atorvastatin', dose: '20 mg · once daily' }], tags: ['Lipids'],
  },
  {
    id: 'p-1084', name: 'Sofía Ramos', age: 34, sex: 'F', dob: '1992-11-17', mrn: 'MRN-001084', phone: '+34 611 222 999', email: 'sofia.ramos@example.com', insurance: 'Sanitas · Basic', bloodType: 'A-', doctor: 'ps-lindqvist', status: 'Follow-up', lastVisit: '2026-10-31',
    allergies: [], conditions: ['Generalised anxiety'], medications: [], tags: ['Therapy', 'Video'],
  },
  {
    id: 'p-1090', name: 'Hans Müller', age: 72, sex: 'M', dob: '1954-02-26', mrn: 'MRN-001090', phone: '+49 151 2345 6789', email: 'h.mueller@example.com', insurance: 'Mapfre · Senior', bloodType: 'A+', doctor: 'dr-okafor', status: 'Active', lastVisit: '2026-10-20',
    allergies: [{ name: 'Sulfonamides', severity: 'moderate', class: 'sulfa' }], conditions: ['Heart failure (NYHA II)', 'Chronic kidney disease (stage 3a)'],
    medications: [{ name: 'Bisoprolol', dose: '2.5 mg · once daily' }, { name: 'Furosemide', dose: '20 mg · once daily' }], tags: ['Cardio', 'Renal'],
  },
  {
    id: 'p-1095', name: 'Priya Nair', age: 38, sex: 'F', dob: '1988-06-04', mrn: 'MRN-001095', phone: '+34 622 000 111', email: 'priya.n@example.com', insurance: 'Allianz · Care', bloodType: 'B-', doctor: 'dr-ferrer', status: 'Follow-up', lastVisit: '2026-10-09',
    allergies: [], conditions: ['Atopic dermatitis'], medications: [{ name: 'Hydrocortisone 1% cream', dose: 'Twice daily · 7 days' }], tags: ['Skin'],
  },
  {
    id: 'p-1101', name: 'Chloé Martin', age: 24, sex: 'F', dob: '2002-12-01', mrn: 'MRN-001101', phone: '+33 6 12 34 56 78', email: 'chloe.m@example.com', insurance: 'Erasmus · EHIC', bloodType: 'O+', doctor: 'dr-navarro', status: 'New', lastVisit: '—',
    allergies: [], conditions: [], medications: [], tags: ['New patient', 'Video'],
  },
  {
    id: 'p-1108', name: 'Tom Becker', age: 45, sex: 'M', dob: '1981-04-19', mrn: 'MRN-001108', phone: '+43 664 123 4567', email: 'tom.becker@example.com', insurance: 'Sanitas · Plus', bloodType: 'AB-', doctor: 'dr-navarro', status: 'Inactive', lastVisit: '2025-12-11',
    allergies: [{ name: 'Codeine', severity: 'mild', class: 'opioid' }], conditions: ['Lower back pain'], medications: [], tags: ['Musculoskeletal'],
  },
  {
    id: 'p-1112', name: 'Mei Chen', age: 9, sex: 'F', dob: '2017-08-14', mrn: 'MRN-001112', phone: '+34 677 888 999', email: 'chen.family@example.com', insurance: 'Adeslas · Family', bloodType: 'A+', doctor: 'dr-sato', status: 'Active', lastVisit: '2026-11-03',
    allergies: [{ name: 'Peanuts', severity: 'severe' }], conditions: [], medications: [{ name: 'Adrenaline auto-injector', dose: '150 mcg · emergency' }], tags: ['Pediatric', 'Allergy'],
  },
  {
    id: 'p-1119', name: 'David Cohen', age: 58, sex: 'M', dob: '1968-10-23', mrn: 'MRN-001119', phone: '+1 415 555 0142', email: 'd.cohen@example.com', insurance: 'Cigna · Global', bloodType: 'O+', doctor: 'dr-okafor', status: 'Follow-up', lastVisit: '2026-10-27',
    allergies: [], conditions: ['Hypertension (stage 2)'], medications: [{ name: 'Amlodipine', dose: '5 mg · once daily' }], tags: ['Cardio'],
  },
];

/** Demo week: 0 = Monday … 4 = Friday. "Today" is Wednesday (day 2) at 10:40. */
const TODAY = 2;
const NOW = '10:40';

const appointments: ClinicAppointment[] = [
  // Today (Wednesday)
  { id: 'a-01', day: 2, start: '08:30', duration: 20, patient: 'p-1078', doctor: 'dr-navarro', type: 'in-person', reason: 'Cholesterol results', status: 'completed' },
  { id: 'a-02', day: 2, start: '09:00', duration: 30, patient: 'p-1057', doctor: 'dr-okafor', type: 'in-person', reason: 'AF follow-up · ECG', status: 'completed' },
  { id: 'a-03', day: 2, start: '09:00', duration: 50, patient: 'p-1084', doctor: 'ps-lindqvist', type: 'video', reason: 'CBT session 6', status: 'completed' },
  { id: 'a-04', day: 2, start: '09:20', duration: 20, patient: 'p-1108', doctor: 'dr-navarro', type: 'in-person', reason: 'Back pain review', status: 'no-show' },
  { id: 'a-05', day: 2, start: '10:00', duration: 20, patient: 'p-1101', doctor: 'dr-navarro', type: 'video', reason: 'New patient · sore throat', status: 'completed' },
  { id: 'a-06', day: 2, start: '10:30', duration: 30, patient: 'p-1042', doctor: 'dr-navarro', type: 'in-person', reason: 'Blood pressure follow-up', status: 'in-progress' },
  { id: 'a-07', day: 2, start: '10:30', duration: 30, patient: 'p-1119', doctor: 'dr-okafor', type: 'in-person', reason: 'Hypertension review', status: 'checked-in' },
  { id: 'a-08', day: 2, start: '11:00', duration: 20, patient: 'p-1112', doctor: 'dr-navarro', type: 'in-person', reason: 'Allergy action plan', status: 'checked-in' },
  { id: 'a-09', day: 2, start: '11:00', duration: 40, patient: 'p-1090', doctor: 'dr-okafor', type: 'in-person', reason: 'Heart failure check', status: 'checked-in' },
  { id: 'a-10', day: 2, start: '11:30', duration: 20, patient: 'p-1063', doctor: 'dr-navarro', type: 'video', reason: 'Asthma inhaler technique', status: 'confirmed' },
  { id: 'a-11', day: 2, start: '12:00', duration: 50, patient: 'p-1084', doctor: 'ps-lindqvist', type: 'video', reason: 'Follow-up session', status: 'confirmed' },
  { id: 'a-12', day: 2, start: '12:30', duration: 20, patient: 'p-1095', doctor: 'dr-navarro', type: 'in-person', reason: 'Eczema flare', status: 'confirmed' },
  { id: 'a-13', day: 2, start: '16:00', duration: 30, patient: 'p-1057', doctor: 'dr-okafor', type: 'video', reason: 'Lab results', status: 'confirmed' },
  { id: 'a-14', day: 2, start: '17:00', duration: 20, patient: 'p-1071', doctor: 'dr-navarro', type: 'in-person', reason: 'New patient check-up', status: 'cancelled' },
  // Rest of the week
  { id: 'a-20', day: 0, start: '09:00', duration: 20, patient: 'p-1042', doctor: 'dr-navarro', type: 'in-person', reason: 'BP check', status: 'completed' },
  { id: 'a-21', day: 0, start: '10:00', duration: 30, patient: 'p-1090', doctor: 'dr-okafor', type: 'in-person', reason: 'Echo review', status: 'completed' },
  { id: 'a-22', day: 0, start: '11:00', duration: 20, patient: 'p-1063', doctor: 'dr-sato', type: 'in-person', reason: 'Vaccination', status: 'completed' },
  { id: 'a-23', day: 0, start: '15:00', duration: 50, patient: 'p-1084', doctor: 'ps-lindqvist', type: 'video', reason: 'CBT session 5', status: 'completed' },
  { id: 'a-24', day: 1, start: '09:30', duration: 30, patient: 'p-1071', doctor: 'dr-ferrer', type: 'in-person', reason: 'Mole check', status: 'completed' },
  { id: 'a-25', day: 1, start: '10:00', duration: 20, patient: 'p-1112', doctor: 'dr-sato', type: 'in-person', reason: 'Peanut allergy review', status: 'completed' },
  { id: 'a-26', day: 1, start: '12:00', duration: 30, patient: 'p-1095', doctor: 'dr-ferrer', type: 'video', reason: 'Dermatitis follow-up', status: 'completed' },
  { id: 'a-27', day: 1, start: '16:30', duration: 20, patient: 'p-1078', doctor: 'dr-navarro', type: 'in-person', reason: 'Blood test', status: 'no-show' },
  { id: 'a-30', day: 3, start: '08:30', duration: 20, patient: 'p-1119', doctor: 'dr-navarro', type: 'in-person', reason: 'Flu vaccine', status: 'confirmed' },
  { id: 'a-31', day: 3, start: '09:00', duration: 30, patient: 'p-1071', doctor: 'dr-ferrer', type: 'in-person', reason: 'Biopsy results', status: 'confirmed' },
  { id: 'a-32', day: 3, start: '10:00', duration: 20, patient: 'p-1063', doctor: 'dr-sato', type: 'in-person', reason: 'Asthma review', status: 'confirmed' },
  { id: 'a-33', day: 3, start: '11:30', duration: 50, patient: 'p-1084', doctor: 'ps-lindqvist', type: 'video', reason: 'CBT session 7', status: 'confirmed' },
  { id: 'a-34', day: 3, start: '14:00', duration: 30, patient: 'p-1095', doctor: 'dr-ferrer', type: 'in-person', reason: 'Patch test', status: 'confirmed' },
  { id: 'a-40', day: 4, start: '09:00', duration: 30, patient: 'p-1057', doctor: 'dr-okafor', type: 'in-person', reason: 'Holter fitting', status: 'confirmed' },
  { id: 'a-41', day: 4, start: '10:00', duration: 20, patient: 'p-1042', doctor: 'dr-navarro', type: 'video', reason: 'Home BP readings', status: 'confirmed' },
  { id: 'a-42', day: 4, start: '12:00', duration: 20, patient: 'p-1112', doctor: 'dr-sato', type: 'in-person', reason: 'Growth check', status: 'confirmed' },
  { id: 'a-43', day: 4, start: '15:30', duration: 40, patient: 'p-1090', doctor: 'dr-okafor', type: 'in-person', reason: 'Medication review', status: 'confirmed' },
];

/** Day labels for the current week (Mon–Fri), built at build time. Demo data only. */
function weekDays(locale: string): string[] {
  const now = new Date();
  const monday = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  monday.setUTCDate(monday.getUTCDate() - ((monday.getUTCDay() + 6) % 7));
  const fmt = new Intl.DateTimeFormat(locale, { weekday: 'short', day: 'numeric', timeZone: 'UTC' });
  return Array.from({ length: 5 }, (_, i) => {
    const d = new Date(monday);
    d.setUTCDate(monday.getUTCDate() + i);
    return fmt.format(d).replace(',', '');
  });
}

const locale = 'en-GB';

/** Diagnoses for the consultation note search (ICD-10, short list for the demo). */
const diagnoses = [
  { code: 'I10', label: 'Essential (primary) hypertension' },
  { code: 'I48.91', label: 'Atrial fibrillation, unspecified' },
  { code: 'E11.9', label: 'Type 2 diabetes mellitus without complications' },
  { code: 'E78.5', label: 'Hyperlipidaemia, unspecified' },
  { code: 'J06.9', label: 'Acute upper respiratory infection' },
  { code: 'J02.9', label: 'Acute pharyngitis, unspecified' },
  { code: 'J45.909', label: 'Asthma, uncomplicated' },
  { code: 'J30.2', label: 'Seasonal allergic rhinitis' },
  { code: 'L20.9', label: 'Atopic dermatitis, unspecified' },
  { code: 'L70.0', label: 'Acne vulgaris' },
  { code: 'M54.5', label: 'Low back pain' },
  { code: 'R51', label: 'Headache' },
  { code: 'R05', label: 'Cough' },
  { code: 'F41.1', label: 'Generalised anxiety disorder' },
  { code: 'G47.00', label: 'Insomnia, unspecified' },
  { code: 'K21.9', label: 'Gastro-oesophageal reflux disease' },
  { code: 'N39.0', label: 'Urinary tract infection' },
  { code: 'Z00.00', label: 'General adult medical examination' },
  { code: 'Z23', label: 'Encounter for immunisation' },
  { code: 'I50.9', label: 'Heart failure, unspecified' },
];

/** Formulary for the prescription pad. `class` is matched against allergy classes. */
const formulary = [
  { id: 'amoxicillin-500', name: 'Amoxicillin', strength: '500 mg', form: 'capsule', class: 'penicillin' },
  { id: 'azithromycin-500', name: 'Azithromycin', strength: '500 mg', form: 'tablet', class: 'macrolide' },
  { id: 'ibuprofen-400', name: 'Ibuprofen', strength: '400 mg', form: 'tablet', class: 'nsaid' },
  { id: 'paracetamol-1g', name: 'Paracetamol', strength: '1 g', form: 'tablet', class: 'analgesic' },
  { id: 'enalapril-10', name: 'Enalapril', strength: '10 mg', form: 'tablet', class: 'ace-inhibitor' },
  { id: 'amlodipine-5', name: 'Amlodipine', strength: '5 mg', form: 'tablet', class: 'ccb' },
  { id: 'atorvastatin-20', name: 'Atorvastatin', strength: '20 mg', form: 'tablet', class: 'statin' },
  { id: 'metformin-850', name: 'Metformin', strength: '850 mg', form: 'tablet', class: 'biguanide' },
  { id: 'omeprazole-20', name: 'Omeprazole', strength: '20 mg', form: 'capsule', class: 'ppi' },
  { id: 'cetirizine-10', name: 'Cetirizine', strength: '10 mg', form: 'tablet', class: 'antihistamine' },
  { id: 'salbutamol-100', name: 'Salbutamol', strength: '100 mcg', form: 'inhaler', class: 'beta-agonist' },
  { id: 'cotrimoxazole-960', name: 'Co-trimoxazole', strength: '960 mg', form: 'tablet', class: 'sulfa' },
  { id: 'codeine-30', name: 'Codeine', strength: '30 mg', form: 'tablet', class: 'opioid' },
  { id: 'hydrocortisone-1', name: 'Hydrocortisone', strength: '1%', form: 'cream', class: 'corticosteroid' },
];

export const clinicData = {
  product: 'Pulso',
  locale,
  currency: 'EUR',
  workspace: { name: 'Clínica Alameda', plan: 'Practice plan', initials: 'CA' },
  user: { name: 'Dr. Laura Navarro', role: 'General practitioner', email: 'laura@alameda.clinic' },
  today: TODAY,
  now: NOW,
  days: weekDays(locale),
  specialties,
  doctors,
  patients,
  appointments,
  diagnoses,
  formulary,
  notifications: [
    { title: 'Lab results ready', text: 'James Whitfield · HbA1c 7.1%', time: '4 min ago', unread: true, tone: 'info' as const },
    { title: 'New online booking', text: 'Aiko Tanaka · Dermatology · Thu 09:00', time: '22 min ago', unread: true, tone: 'success' as const },
    { title: 'Prescription renewal request', text: 'Marco Bellini · Atorvastatin', time: '1 h ago', unread: true, tone: 'warning' as const },
    { title: 'No-show recorded', text: 'Tom Becker · 09:20', time: '1 h ago', tone: 'danger' as const },
  ],
  kpis: [
    { label: 'Consultations today', value: '14', change: 8.2, trend: [9, 11, 10, 12, 13, 12, 14] },
    { label: 'Video visits (week)', value: '31%', change: 4.5, trend: [22, 24, 25, 27, 26, 29, 31] },
    { label: 'Avg. wait time', value: '9 min', change: -12.4, invert: true, trend: [16, 14, 13, 12, 11, 10, 9] },
    { label: 'No-show rate', value: '4.1%', change: -1.3, invert: true, trend: [7, 6.5, 6, 5.4, 5, 4.6, 4.1] },
  ],
  volume: {
    categories: ['W38', 'W39', 'W40', 'W41', 'W42', 'W43', 'W44', 'W45'],
    series: [
      { name: 'In person', data: [182, 190, 176, 201, 195, 188, 207, 199] },
      { name: 'Video', data: [64, 70, 72, 79, 84, 88, 91, 94] },
    ],
  },
  bySpecialty: [
    { label: 'General practice', value: 46 },
    { label: 'Cardiology', value: 18 },
    { label: 'Pediatrics', value: 16 },
    { label: 'Psychology', value: 12 },
    { label: 'Dermatology', value: 8 },
  ],
  busyHours: {
    rows: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    columns: ['8h', '9h', '10h', '11h', '12h', '13h', '15h', '16h', '17h', '18h'],
    values: [
      [4, 9, 11, 10, 8, 3, 6, 9, 8, 5],
      [3, 8, 10, 11, 9, 2, 7, 8, 7, 4],
      [5, 10, 12, 12, 9, 3, 6, 8, 9, 6],
      [4, 9, 10, 9, 8, 2, 7, 9, 8, 5],
      [3, 7, 9, 8, 7, 2, 5, 6, 4, 2],
    ],
  },
  noShows: {
    categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    series: [{ name: 'No-show rate', data: [7.4, 6.9, 6.1, 5.2, 4.6, 4.1] }],
  },
  revenueByDoctor: doctors.map((d, i) => ({ label: d.name.replace('Dr. ', ''), value: [18.4, 14.2, 11.8, 9.6, 8.1][i] })),
  satisfaction: 4.8,
  activity: [
    { title: 'Elena Duarte checked in', desc: 'Blood pressure follow-up · Room 1', time: '10:28', status: 'active' as const },
    { title: 'Prescription sent to pharmacy', desc: 'Chloé Martin · Paracetamol 1 g', time: '10:21', status: 'done' as const },
    { title: 'Video visit completed', desc: 'Chloé Martin · 18 min', time: '10:19', status: 'done' as const },
    { title: 'Marked as no-show', desc: 'Tom Becker · 09:20 · reminder SMS sent', time: '09:40', status: 'done' as const },
    { title: 'New online booking', desc: 'Aiko Tanaka · Dermatology · Thu 09:00', time: '09:12', status: 'pending' as const },
  ],
  team: [
    { name: 'Dr. Laura Navarro', email: 'laura@alameda.clinic', role: 'Owner', status: 'active' as const, you: true },
    { name: 'Dr. Daniel Okafor', email: 'daniel@alameda.clinic', role: 'Doctor', status: 'active' as const },
    { name: 'Dr. Emi Sato', email: 'emi@alameda.clinic', role: 'Doctor', status: 'active' as const },
    { name: 'Dr. Marc Ferrer', email: 'marc@alameda.clinic', role: 'Doctor', status: 'active' as const },
    { name: 'Nora Lindqvist', email: 'nora@alameda.clinic', role: 'Doctor', status: 'active' as const },
    { name: 'Rosa Jiménez', email: 'rosa@alameda.clinic', role: 'Reception', status: 'active' as const },
    { name: 'Iván Torres', email: 'ivan@alameda.clinic', role: 'Nurse', status: 'invited' as const },
  ],
};

export type ClinicData = typeof clinicData;

/* ---------- Helpers ---------- */

export function clinicPatient(data: ClinicData, id?: string): ClinicPatient | undefined {
  return data.patients.find((p) => p.id === id);
}

export function clinicDoctor(data: ClinicData, id?: string): ClinicDoctor | undefined {
  return data.doctors.find((d) => d.id === id);
}

export function patientHref(routes: ClinicRoutes, id: string): string {
  return `${routes.patient}${id}/`;
}

/** Minutes between two "HH:MM" strings (b − a). */
export function minutesBetween(a: string, b: string): number {
  const [ah, am] = a.split(':').map(Number);
  const [bh, bm] = b.split(':').map(Number);
  return (bh * 60 + bm) - (ah * 60 + am);
}

/** Today's appointments for one doctor (or everyone), sorted by time. */
export function todaysAppointments(data: ClinicData, doctorId?: string): ClinicAppointment[] {
  return data.appointments
    .filter((a) => a.day === data.today && (!doctorId || a.doctor === doctorId))
    .sort((a, b) => a.start.localeCompare(b.start));
}

/** Deterministic demo vitals history for a patient. */
export function patientVitals(p: ClinicPatient) {
  const seed = Number(p.id.replace(/\D/g, '')) % 7;
  const hyper = p.conditions.some((c) => /hypertension|heart/i.test(c));
  const sys = hyper ? [148, 145, 142, 139, 141, 136] : [118, 121, 117, 119, 116, 120];
  const dia = hyper ? [94, 92, 90, 88, 89, 86] : [76, 78, 75, 77, 74, 76];
  const hr = [72 + seed, 70 + seed, 74 + seed, 71 + seed, 69 + seed, 70 + seed];
  const child = p.age < 14;
  const weight = child ? [19.2, 19.6, 20.1, 20.4, 20.9, 21.3] : [74 + seed, 73.6 + seed, 73.1 + seed, 72.8 + seed, 72.4 + seed, 72 + seed];
  return [
    { label: 'Blood pressure', value: `${sys.at(-1)}/${dia.at(-1)}`, unit: 'mmHg', trend: sys, status: sys.at(-1)! >= 135 ? 'high' as const : 'normal' as const, range: '< 135/85' },
    { label: 'Heart rate', value: String(hr.at(-1)), unit: 'bpm', trend: hr, status: 'normal' as const, range: '60–100' },
    { label: 'Weight', value: String(weight.at(-1)!.toFixed(1)), unit: 'kg', trend: weight, status: 'normal' as const, range: child ? 'P50' : 'BMI 24.1' },
    { label: 'SpO₂', value: '98', unit: '%', trend: [97, 98, 98, 97, 99, 98], status: 'normal' as const, range: '≥ 95%' },
  ];
}

/** Demo visit history for a patient record. */
export function patientVisits(data: ClinicData, p: ClinicPatient) {
  const doc = clinicDoctor(data, p.doctor);
  const past = data.appointments.filter((a) => a.patient === p.id && a.status === 'completed');
  const fromAppts = past.map((a) => ({ date: data.days[a.day], title: a.reason, doctor: clinicDoctor(data, a.doctor)?.name ?? '', type: a.type }));
  return [
    ...fromAppts,
    { date: '12 Sep', title: 'Annual check-up', doctor: doc?.name ?? '', type: 'in-person' as const },
    { date: '03 Jun', title: p.conditions[0] ? `${p.conditions[0]} review` : 'General consultation', doctor: doc?.name ?? '', type: 'video' as const },
  ];
}
