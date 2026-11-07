// src/components/lib/templates/dental/data.ts
// Domain models and realistic demo data for the dental clinic & backoffice booking SaaS ("Dentis").

export type ChairType = 'restorative' | 'ortho' | 'hygiene' | 'surgery';
export type ChairStatus = 'ready' | 'occupied' | 'sanitizing' | 'maintenance';
export type ToothStatus = 'sound' | 'caries' | 'filling' | 'crown' | 'implant' | 'endo' | 'missing';
export type TreatmentCategory = 'preventive' | 'restorative' | 'cosmetic' | 'orthodontics' | 'implant' | 'emergency';
export type ApptStatus = 'confirmed' | 'in-chair' | 'completed' | 'cancelled' | 'pending';
export type RecallStatus = 'up-to-date' | 'due' | 'overdue';

export interface DentalChair {
  id: string;
  name: string;
  code: string;
  type: ChairType;
  status: ChairStatus;
  currentPatient?: string;
  currentDoctor?: string;
  currentTreatment?: string;
  since?: string;
}

export interface DentalDoctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  education: string;
  rating: number;
  reviewsCount: number;
  availableDays: string[];
}

export interface DentalTreatment {
  id: string;
  code: string;
  name: string;
  category: TreatmentCategory;
  durationMin: number;
  priceStarting: number;
  priceMax?: number;
  anesthesia: string;
  description: string;
  popular?: boolean;
}

export interface ToothCondition {
  toothNumber: number; // 1 to 32 (Universal System)
  fdiNumber: string;   // ISO / FDI notation (e.g. "18", "11", "26")
  name: string;
  status: ToothStatus;
  surfaces?: ('O' | 'M' | 'D' | 'B' | 'L')[];
  notes?: string;
  proposedTreatment?: string;
  estimatedCost?: number;
}

export interface DentalPatient {
  id: string;
  name: string;
  phone: string;
  email: string;
  dob: string;
  insuranceProvider: string;
  policyNumber: string;
  lastCleaningDate: string;
  nextRecallDate: string;
  recallStatus: RecallStatus;
  teeth: ToothCondition[];
  medicalAlerts: string[];
  treatmentPlanTotal: number;
  outstandingBalance: number;
}

export interface DentalAppointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  chairId: string;
  chairName: string;
  treatmentCode: string;
  treatmentName: string;
  day: string; // YYYY-MM-DD
  time: string; // HH:mm
  durationMin: number;
  status: ApptStatus;
  copay: number;
  notes?: string;
}

export interface DentalRecallItem {
  id: string;
  patientId: string;
  patientName: string;
  phone: string;
  recallType: '6-mo Routine Prophy' | '3-mo Perio Maintenance' | 'Aligner Checkup' | 'Crown Follow-up';
  dueDate: string;
  status: 'overdue' | 'due' | 'contacted';
  lastContactDate?: string;
}

export interface DentalRoutes {
  home: string;
  treatments: string;
  book: string;
  signIn: string;
  dashboard: string;
  schedule: string;
  patients: string;
  patientDetail: string; // '/preview/dental/app/patients/' (append id)
  treatmentPlans: string;
  recalls: string;
  settings: string;
}

export const dentalRoutes: DentalRoutes = {
  home: '/preview/dental/',
  treatments: '/preview/dental/treatments',
  book: '/preview/dental/book',
  signIn: '/preview/dental/sign-in',
  dashboard: '/preview/dental/app/',
  schedule: '/preview/dental/app/schedule',
  patients: '/preview/dental/app/patients/',
  patientDetail: '/preview/dental/app/patients/',
  treatmentPlans: '/preview/dental/app/treatment-plans',
  recalls: '/preview/dental/app/recalls',
  settings: '/preview/dental/app/settings',
};

// Doctors
export const dentalDoctors: DentalDoctor[] = [
  {
    id: 'dr-ramos',
    name: 'Dr. Adrián Ramos, DDS',
    title: 'Lead Cosmetic Dentist & Implant Specialist',
    specialty: 'Oral Surgery & Implants',
    bio: 'Over 14 years specializing in full-mouth dental implants, 3D guided restorations and complex smile redesigns.',
    education: 'Univ. Complutense Madrid · Fellow ICOI',
    rating: 4.98,
    reviewsCount: 420,
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  },
  {
    id: 'dr-silva',
    name: 'Dr. Elena Silva, DDS, MS',
    title: 'Orthodontics & Invisalign Diamond Provider',
    specialty: 'Orthodontics & Clear Aligners',
    bio: 'Pioneer in digital smile diagnostics and invisible aligners with more than 1,800 successful smile transformations.',
    education: 'King’s College London Dental Institute',
    rating: 4.95,
    reviewsCount: 380,
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu'],
  },
  {
    id: 'dr-vance',
    name: 'Dr. Marcus Vance, DMD',
    title: 'Restorative & Endodontics Specialist',
    specialty: 'Microscopic Root Canals & Fillings',
    bio: 'Specialist in single-visit painless root canal therapy with Zeiss dental microscopes and minimally invasive composites.',
    education: 'Boston University Henry M. Goldman School',
    rating: 4.92,
    reviewsCount: 265,
    availableDays: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
  {
    id: 'vega-rdh',
    name: 'Carla Vega, RDH',
    title: 'Head Dental Hygienist & Prevention',
    specialty: 'Guided Biofilm Therapy & AirFlow',
    bio: 'Dedicated to comfortable, pain-free cleanings using Swiss EMS AirFlow technology and periodontal prevention programs.',
    education: 'European Institute of Dental Hygiene',
    rating: 4.99,
    reviewsCount: 512,
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
];

// Operatories / Chairs
export const dentalChairs: DentalChair[] = [
  {
    id: 'chair-1',
    name: 'Operatory 1 · Restorative',
    code: 'CH-01',
    type: 'restorative',
    status: 'occupied',
    currentPatient: 'Lucía Santos',
    currentDoctor: 'Dr. Marcus Vance',
    currentTreatment: 'Composite Restoration #19',
    since: '09:15',
  },
  {
    id: 'chair-2',
    name: 'Operatory 2 · Orthodontics',
    code: 'CH-02',
    type: 'ortho',
    status: 'ready',
    since: '09:40',
  },
  {
    id: 'chair-3',
    name: 'Hygiene Bay · AirFlow Care',
    code: 'CH-03',
    type: 'hygiene',
    status: 'occupied',
    currentPatient: 'Carlos Mendoza',
    currentDoctor: 'Carla Vega, RDH',
    currentTreatment: 'Deep Clean & Fluoride',
    since: '09:00',
  },
  {
    id: 'chair-4',
    name: 'Surgical Suite · Guided 3D',
    code: 'CH-04',
    type: 'surgery',
    status: 'sanitizing',
    since: '09:45',
  },
];

// Treatments
export const dentalTreatments: DentalTreatment[] = [
  {
    id: 'prophy-clean',
    code: 'D1110',
    name: 'Ultrasonic Hygiene & AirFlow Polish',
    category: 'preventive',
    durationMin: 45,
    priceStarting: 75,
    anesthesia: 'None needed',
    description: 'Painless guided biofilm removal with warm air-water spray, tartar scaling, polish and remineralizing fluoride.',
    popular: true,
  },
  {
    id: 'invisalign-scan',
    code: 'D8080',
    name: 'Invisalign & Clear Aligner Consultation',
    category: 'orthodontics',
    durationMin: 40,
    priceStarting: 0,
    anesthesia: 'None',
    description: 'Complimentary high-res 3D intraoral iTero scan with instant before-and-after smile simulation and timeline plan.',
    popular: true,
  },
  {
    id: 'implant-single',
    code: 'D6010',
    name: 'Guided Titanium Dental Implant',
    category: 'implant',
    durationMin: 60,
    priceStarting: 890,
    priceMax: 1450,
    anesthesia: 'Local computer-assisted anesthesia',
    description: 'Digitally planned titanium post placement with biocompatible ceramic abutment and custom zirconium crown.',
  },
  {
    id: 'composite-filling',
    code: 'D2391',
    name: 'Aesthetic Tooth-Colored Composite Filling',
    category: 'restorative',
    durationMin: 40,
    priceStarting: 85,
    priceMax: 140,
    anesthesia: 'Local gentle numbness',
    description: 'Mercury-free, multi-layered nano-hybrid composite bonded to match the exact shade and luster of your natural enamel.',
  },
  {
    id: 'teeth-whitening',
    code: 'D9972',
    name: 'In-Office Philips Zoom Laser Whitening',
    category: 'cosmetic',
    durationMin: 60,
    priceStarting: 290,
    anesthesia: 'None',
    description: 'Instant whitening up to 8 shades in a single comfortable hour, with anti-sensitivity desensitizing treatment included.',
    popular: true,
  },
  {
    id: 'root-canal',
    code: 'D3330',
    name: 'Microscopic Painless Endodontics',
    category: 'emergency',
    durationMin: 75,
    priceStarting: 280,
    priceMax: 420,
    anesthesia: 'Precision local anesthesia',
    description: 'Immediate relief for severe toothache. Single-visit canal cleaning and hermetic sealing under surgical dental microscope.',
  },
  {
    id: 'porcelain-veneer',
    code: 'D2962',
    name: 'Minimal-Prep Ceramic Veneers',
    category: 'cosmetic',
    durationMin: 60,
    priceStarting: 450,
    anesthesia: 'Local optional',
    description: 'Ultra-thin handcrafted ceramic laminates designed digitally to transform alignment, shape, and luminosity.',
  },
];

// Helper to build a full 32-tooth dental arch with sample conditions
function buildSampleTeeth(): ToothCondition[] {
  const toothNames: Record<number, { fdi: string; name: string }> = {
    1: { fdi: '18', name: 'Upper Right 3rd Molar (Wisdom)' },
    2: { fdi: '17', name: 'Upper Right 2nd Molar' },
    3: { fdi: '16', name: 'Upper Right 1st Molar' },
    4: { fdi: '15', name: 'Upper Right 2nd Premolar' },
    5: { fdi: '14', name: 'Upper Right 1st Premolar' },
    6: { fdi: '13', name: 'Upper Right Canine' },
    7: { fdi: '12', name: 'Upper Right Lateral Incisor' },
    8: { fdi: '11', name: 'Upper Right Central Incisor' },
    9: { fdi: '21', name: 'Upper Left Central Incisor' },
    10: { fdi: '22', name: 'Upper Left Lateral Incisor' },
    11: { fdi: '23', name: 'Upper Left Canine' },
    12: { fdi: '24', name: 'Upper Left 1st Premolar' },
    13: { fdi: '25', name: 'Upper Left 2nd Premolar' },
    14: { fdi: '26', name: 'Upper Left 1st Molar' },
    15: { fdi: '27', name: 'Upper Left 2nd Molar' },
    16: { fdi: '28', name: 'Upper Left 3rd Molar (Wisdom)' },
    17: { fdi: '38', name: 'Lower Left 3rd Molar (Wisdom)' },
    18: { fdi: '37', name: 'Lower Left 2nd Molar' },
    19: { fdi: '36', name: 'Lower Left 1st Molar' },
    20: { fdi: '35', name: 'Lower Left 2nd Premolar' },
    21: { fdi: '34', name: 'Lower Left 1st Premolar' },
    22: { fdi: '33', name: 'Lower Left Canine' },
    23: { fdi: '32', name: 'Lower Left Lateral Incisor' },
    24: { fdi: '31', name: 'Lower Left Central Incisor' },
    25: { fdi: '41', name: 'Lower Right Central Incisor' },
    26: { fdi: '42', name: 'Lower Right Lateral Incisor' },
    27: { fdi: '43', name: 'Lower Right Canine' },
    28: { fdi: '44', name: 'Lower Right 1st Premolar' },
    29: { fdi: '45', name: 'Lower Right 2nd Premolar' },
    30: { fdi: '46', name: 'Lower Right 1st Molar' },
    31: { fdi: '47', name: 'Lower Right 2nd Molar' },
    32: { fdi: '48', name: 'Lower Right 3rd Molar (Wisdom)' },
  };

  const teeth: ToothCondition[] = [];
  for (let num = 1; num <= 32; num++) {
    const meta = toothNames[num]!;
    let status: ToothStatus = 'sound';
    let surfaces: ('O' | 'M' | 'D' | 'B' | 'L')[] | undefined;
    let notes: string | undefined;
    let proposedTreatment: string | undefined;
    let estimatedCost: number | undefined;

    // Selected clinical conditions for realistic chart display
    if (num === 1 || num === 16 || num === 17) {
      status = 'missing';
      notes = 'Extracted previously (third molar)';
    } else if (num === 3) {
      status = 'crown';
      notes = 'Porcelain-fused-to-zirconia crown placed 2024. Margins intact.';
    } else if (num === 14) {
      status = 'caries';
      surfaces = ['O', 'D'];
      notes = 'Moderate interproximal decay detected via bitewing X-ray.';
      proposedTreatment = 'Class II Composite Restoration (MOD)';
      estimatedCost = 125;
    } else if (num === 19) {
      status = 'endo';
      notes = 'Root canal completed with gutta-percha seal. Needs post & core.';
      proposedTreatment = 'Porcelain Crown (CEREC)';
      estimatedCost = 480;
    } else if (num === 30) {
      status = 'implant';
      notes = 'Titanium fixture with custom titanium abutment. Excellent osseointegration.';
    } else if (num === 12 || num === 20) {
      status = 'filling';
      surfaces = ['O'];
      notes = 'Composite resin filling (shade A2), functioning well.';
    }

    teeth.push({
      toothNumber: num,
      fdiNumber: meta.fdi,
      name: meta.name,
      status,
      surfaces,
      notes,
      proposedTreatment,
      estimatedCost,
    });
  }
  return teeth;
}

// Demo Patients
export const dentalPatients: DentalPatient[] = [
  {
    id: 'pat-101',
    name: 'Lucía Santos Morales',
    phone: '+34 612 849 012',
    email: 'lucia.santos@example.com',
    dob: '1989-05-14 (37 yrs)',
    insuranceProvider: 'Sanitas Dental Premium',
    policyNumber: 'SAN-883901-B',
    lastCleaningDate: '2026-05-10',
    nextRecallDate: '2026-11-10',
    recallStatus: 'due',
    teeth: buildSampleTeeth(),
    medicalAlerts: ['Penicillin Allergy', 'Mild Bruxim / Night clenching'],
    treatmentPlanTotal: 605,
    outstandingBalance: 125,
  },
  {
    id: 'pat-102',
    name: 'Carlos Mendoza Ruiz',
    phone: '+34 654 112 908',
    email: 'carlos.mendoza@example.com',
    dob: '1976-11-23 (50 yrs)',
    insuranceProvider: 'Adeslas Dental Max',
    policyNumber: 'ADE-449120',
    lastCleaningDate: '2026-09-18',
    nextRecallDate: '2027-03-18',
    recallStatus: 'up-to-date',
    teeth: buildSampleTeeth(),
    medicalAlerts: ['Hypertension (medicated)', 'No known drug allergies'],
    treatmentPlanTotal: 1450,
    outstandingBalance: 0,
  },
  {
    id: 'pat-103',
    name: 'Beatriz Navarro Peña',
    phone: '+34 688 903 214',
    email: 'b.navarro@example.com',
    dob: '1995-02-08 (31 yrs)',
    insuranceProvider: 'Bupa Global Smile',
    policyNumber: 'BUP-902148',
    lastCleaningDate: '2025-10-04',
    nextRecallDate: '2026-04-04',
    recallStatus: 'overdue',
    teeth: buildSampleTeeth(),
    medicalAlerts: ['Latex sensitivity'],
    treatmentPlanTotal: 3200,
    outstandingBalance: 450,
  },
  {
    id: 'pat-104',
    name: 'Mateo Delgado Varela',
    phone: '+34 633 456 789',
    email: 'mateo.delgado@example.com',
    dob: '2012-08-19 (14 yrs)',
    insuranceProvider: 'Mapfre Salud Dental',
    policyNumber: 'MAP-119823',
    lastCleaningDate: '2026-08-12',
    nextRecallDate: '2027-02-12',
    recallStatus: 'up-to-date',
    teeth: buildSampleTeeth(),
    medicalAlerts: ['Asthma (inhaler available)'],
    treatmentPlanTotal: 2800,
    outstandingBalance: 200,
  },
];

// Today's Appointments
export const dentalAppointments: DentalAppointment[] = [
  {
    id: 'apt-01',
    patientId: 'pat-101',
    patientName: 'Lucía Santos Morales',
    doctorId: 'dr-vance',
    doctorName: 'Dr. Marcus Vance',
    chairId: 'chair-1',
    chairName: 'Operatory 1',
    treatmentCode: 'D2391',
    treatmentName: 'Composite Restoration #19',
    day: '2026-11-07',
    time: '09:00',
    durationMin: 45,
    status: 'in-chair',
    copay: 40,
    notes: 'Shade A2 nano-hybrid composite. Isolation with rubber dam.',
  },
  {
    id: 'apt-02',
    patientId: 'pat-102',
    patientName: 'Carlos Mendoza Ruiz',
    doctorId: 'vega-rdh',
    doctorName: 'Carla Vega, RDH',
    chairId: 'chair-3',
    chairName: 'Hygiene Bay',
    treatmentCode: 'D1110',
    treatmentName: 'AirFlow Polish & Prophylaxis',
    day: '2026-11-07',
    time: '09:30',
    durationMin: 45,
    status: 'in-chair',
    copay: 0,
    notes: 'Gentle biofilm therapy. Mild tea staining on lingual incisors.',
  },
  {
    id: 'apt-03',
    patientId: 'pat-103',
    patientName: 'Beatriz Navarro Peña',
    doctorId: 'dr-silva',
    doctorName: 'Dr. Elena Silva',
    chairId: 'chair-2',
    chairName: 'Operatory 2',
    treatmentCode: 'D8080',
    treatmentName: 'Invisalign Tray 8 Review & iTero Scan',
    day: '2026-11-07',
    time: '10:30',
    durationMin: 30,
    status: 'confirmed',
    copay: 0,
    notes: 'Check tracking on upper premolar rotation.',
  },
  {
    id: 'apt-04',
    patientId: 'pat-104',
    patientName: 'Mateo Delgado Varela',
    doctorId: 'dr-ramos',
    doctorName: 'Dr. Adrián Ramos',
    chairId: 'chair-4',
    chairName: 'Surgical Suite',
    treatmentCode: 'D6010',
    treatmentName: 'Implant Post-Op Check #30',
    day: '2026-11-07',
    time: '11:15',
    durationMin: 30,
    status: 'confirmed',
    copay: 0,
    notes: 'Suture removal and stability resonance frequency check.',
  },
  {
    id: 'apt-05',
    patientId: 'pat-101',
    patientName: 'Alejandro Cruz',
    doctorId: 'dr-vance',
    doctorName: 'Dr. Marcus Vance',
    chairId: 'chair-1',
    chairName: 'Operatory 1',
    treatmentCode: 'D3330',
    treatmentName: 'Emergency Toothache Evaluation #14',
    day: '2026-11-07',
    time: '12:00',
    durationMin: 45,
    status: 'confirmed',
    copay: 65,
    notes: 'Pain on hot/cold since yesterday. Bitewing x-ray needed.',
  },
];

// Recalls / Preventative Followups
export const dentalRecalls: DentalRecallItem[] = [
  {
    id: 'rec-01',
    patientId: 'pat-103',
    patientName: 'Beatriz Navarro Peña',
    phone: '+34 688 903 214',
    recallType: '6-mo Routine Prophy',
    dueDate: '2026-04-04',
    status: 'overdue',
    lastContactDate: '2026-10-15',
  },
  {
    id: 'rec-02',
    patientId: 'pat-101',
    patientName: 'Lucía Santos Morales',
    phone: '+34 612 849 012',
    recallType: '6-mo Routine Prophy',
    dueDate: '2026-11-10',
    status: 'due',
  },
  {
    id: 'rec-03',
    patientId: 'pat-102',
    patientName: 'Carlos Mendoza Ruiz',
    phone: '+34 654 112 908',
    recallType: '3-mo Perio Maintenance',
    dueDate: '2026-12-18',
    status: 'due',
  },
];

export interface DentalClinicWorkspace {
  name: string;
  tagline: string;
  phone: string;
  emergencyPhone: string;
  address: string;
  city: string;
  hours: string;
  openChairs: number;
  totalChairs: number;
}

export interface DentalClinicData {
  workspace: DentalClinicWorkspace;
  today: string;
  doctors: DentalDoctor[];
  chairs: DentalChair[];
  treatments: DentalTreatment[];
  patients: DentalPatient[];
  appointments: DentalAppointment[];
  recalls: DentalRecallItem[];
}

export const dentalData: DentalClinicData = {
  workspace: {
    name: 'Dentis Dental Studio',
    tagline: 'Modern Dentistry, Painless Technology & Aesthetic Smile Care',
    phone: '+34 910 882 144',
    emergencyPhone: '+34 600 911 200',
    address: 'Calle Serrano 48, 1º Izquierda',
    city: 'Madrid, 28001',
    hours: 'Mon – Fri: 08:30 – 20:00 · Sat: 09:00 – 14:00',
    openChairs: 4,
    totalChairs: 4,
  },
  today: '2026-11-07',
  doctors: dentalDoctors,
  chairs: dentalChairs,
  treatments: dentalTreatments,
  patients: dentalPatients,
  appointments: dentalAppointments,
  recalls: dentalRecalls,
};

