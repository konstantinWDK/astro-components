// src/components/lib/templates/university/data.ts
// Veritas University — Model data, programs, admissions, research, campus and routes

export interface UnivRouteMap {
  home: string;
  programs: string;
  admissions: string;
  research: string;
  campus: string;
}

export const univRoutes: UnivRouteMap = {
  home: '/preview/university/',
  programs: '/preview/university/programas/',
  admissions: '/preview/university/admisiones/',
  research: '/preview/university/investigacion/',
  campus: '/preview/university/campus/',
};

export interface UnivBrand {
  name: string;
  tagline: string;
  motto: string;
  founded: number;
  location: string;
  admissionsPhone: string;
  admissionsEmail: string;
  openDayDate: string;
}

export const univBrand: UnivBrand = {
  name: 'Universidad Veritas',
  tagline: 'Campus Internacional de Estudios Superiores e Investigación',
  motto: 'Veritas, Scientia et Excellentia',
  founded: 1984,
  location: 'Campus Moncloa, Madrid · 14.500 estudiantes de 68 países',
  admissionsPhone: '+34 910 882 400',
  admissionsEmail: 'admisiones@veritas.edu.es',
  openDayDate: 'Sábado, 12 de Diciembre 2026',
};

export interface UnivKPI {
  value: string;
  label: string;
  subtext: string;
}

export const univKPIs: UnivKPI[] = [
  { value: '#1', label: 'Empleabilidad Nacional', subtext: 'Ranking Forbes Universidades 2026' },
  { value: '96.4%', label: 'Inserción Laboral', subtext: 'Alumnos colocados en los primeros 6 meses' },
  { value: '120+', label: 'Convenios Internacionales', subtext: 'Programas de intercambio en 38 países' },
  { value: '42', label: 'Grupos de I+D+i', subtext: 'Liderazgo en Inteligencia Artificial y Salud' },
];

export type DegreeLevel = 'grado' | 'master' | 'doctorado' | 'executive';

export interface UnivProgram {
  id: string;
  level: DegreeLevel;
  levelLabel: string;
  title: string;
  faculty: string;
  facultyId: 'tech' | 'business' | 'health' | 'humanities';
  duration: string;
  ects: number;
  modality: 'Presencial' | 'Híbrida' | 'Online';
  language: 'Español' | 'Bilingüe (ES/EN)' | '100% Inglés';
  tuitionYear: number;
  highlight: string;
  careerOutlets: string[];
}

export const univPrograms: UnivProgram[] = [
  {
    id: 'grado-ingenieria-ia',
    level: 'grado',
    levelLabel: 'Grado Oficial (4 años)',
    title: 'Grado en Ingeniería de Inteligencia Artificial y Datos',
    faculty: 'Escuela Politécnica y Tecnologías',
    facultyId: 'tech',
    duration: '4 años · 240 ECTS',
    ects: 240,
    modality: 'Presencial',
    language: 'Bilingüe (ES/EN)',
    tuitionYear: 11800,
    highlight: 'Prácticas garantizadas en centros de I+D punteros y laboratorios GPU propios',
    careerOutlets: ['Machine Learning Engineer', 'Data Architect', 'AI Researcher', 'Robotics Specialist'],
  },
  {
    id: 'grado-biotecnologia-salud',
    level: 'grado',
    levelLabel: 'Grado Oficial (4 años)',
    title: 'Grado en Biotecnología y Ciencias Biomédicas',
    faculty: 'Facultad de Medicina y Ciencias de la Salud',
    facultyId: 'health',
    duration: '4 años · 240 ECTS',
    ects: 240,
    modality: 'Presencial',
    language: 'Español',
    tuitionYear: 12500,
    highlight: 'Rotaciones clínicas en 6 hospitales universitarios y bioincubadora de startups',
    careerOutlets: ['Investigador Farmacéutico', 'Bioinformático', 'Especialista en Terapia Génica'],
  },
  {
    id: 'grado-ade-analitica',
    level: 'grado',
    levelLabel: 'Grado Oficial (4 años)',
    title: 'Grado en Administración de Empresas & Business Analytics',
    faculty: 'Veritas School of Economics & Management',
    facultyId: 'business',
    duration: '4 años · 240 ECTS',
    ects: 240,
    modality: 'Presencial',
    language: '100% Inglés',
    tuitionYear: 10900,
    highlight: 'Acreditación internacional EQUIS y estancia obligatoria en Londres o Singapur',
    careerOutlets: ['Consultor Estratégico', 'Analista Financiero', 'Product Manager', 'Venture Capital'],
  },
  {
    id: 'master-ciberseguridad-cloud',
    level: 'master',
    levelLabel: 'Máster Universitario Oficial',
    title: 'Máster en Ciberseguridad Ofensiva & Arquitectura Cloud',
    faculty: 'Escuela Politécnica y Tecnologías',
    facultyId: 'tech',
    duration: '1 año · 60 ECTS',
    ects: 60,
    modality: 'Híbrida',
    language: 'Bilingüe (ES/EN)',
    tuitionYear: 13900,
    highlight: 'Simulaciones en Cyber Range universitario y certificaciones OSCP / AWS incluidas',
    careerOutlets: ['Lead Security Architect', 'Ethical Hacker', 'SOC Manager', 'DevSecOps Lead'],
  },
  {
    id: 'master-gestion-hospitalaria',
    level: 'master',
    levelLabel: 'Máster Universitario Oficial',
    title: 'Máster en Dirección y Transformación Digital de Hospitales',
    faculty: 'Facultad de Medicina y Ciencias de la Salud',
    facultyId: 'health',
    duration: '1 año · 60 ECTS',
    ects: 60,
    modality: 'Híbrida',
    language: 'Español',
    tuitionYear: 12800,
    highlight: 'Diseñado junto a directores de los principales grupos hospitalarios de Europa',
    careerOutlets: ['Director Médico', 'Gerente Hospitalario', 'Consultor Sanitario'],
  },
  {
    id: 'master-finanzas-cuantitativas',
    level: 'master',
    levelLabel: 'Máster Universitario Oficial',
    title: 'Máster en Finanzas Cuantitativas & FinTech',
    faculty: 'Veritas School of Economics & Management',
    facultyId: 'business',
    duration: '1 año · 60 ECTS',
    ects: 60,
    modality: 'Presencial',
    language: '100% Inglés',
    tuitionYear: 14500,
    highlight: 'Sala de Trading Bloomberg en el campus y 100% de empleabilidad en banca de inversión',
    careerOutlets: ['Quant Trader', 'Portfolio Manager', 'Risk Analyst', 'Fintech Founder'],
  },
  {
    id: 'master-diseno-estrategico',
    level: 'master',
    levelLabel: 'Máster Universitario Oficial',
    title: 'Máster en Diseño Estratégico, UX & Tecnologías Creativas',
    faculty: 'Facultad de Comunicación y Humanidades',
    facultyId: 'humanities',
    duration: '1 año · 60 ECTS',
    ects: 60,
    modality: 'Presencial',
    language: 'Español',
    tuitionYear: 11200,
    highlight: 'Proyectos reales con empresas líderes en diseño de servicios e innovación',
    careerOutlets: ['Design Lead', 'Design Strategist', 'Head of UX', 'Creative Director'],
  },
  {
    id: 'doctorado-ciencias-computacion',
    level: 'doctorado',
    levelLabel: 'Programa de Doctorado Oficial',
    title: 'Doctorado en Ciencias de la Computación y Sistemas Autónomos',
    faculty: 'Escuela Internacional de Doctorado Veritas',
    facultyId: 'tech',
    duration: '3-4 años',
    ects: 180,
    modality: 'Presencial',
    language: '100% Inglés',
    tuitionYear: 4500,
    highlight: 'Contratos predoctorales FPI/FPU con financiación completa y estancias en MIT y ETH Zurich',
    careerOutlets: ['Investigador Principal', 'Catedrático de Universidad', 'Director de I+D Corporativo'],
  },
  {
    id: 'executive-liderazgo-ia',
    level: 'executive',
    levelLabel: 'Executive Education & Diplomas',
    title: 'Global Executive Program: Inteligencia Artificial para Alta Dirección',
    faculty: 'Veritas School of Economics & Management',
    facultyId: 'business',
    duration: '4 meses · Fin de semana',
    ects: 30,
    modality: 'Híbrida',
    language: 'Bilingüe (ES/EN)',
    tuitionYear: 8900,
    highlight: 'Formato intensivo compatible con responsabilidades directivas; red alumni de alto nivel',
    careerOutlets: ['Chief AI Officer (CAIO)', 'Chief Technology Officer (CTO)', 'Consejero de Administración'],
  },
];

export interface UnivFacultyFilter {
  id: 'all' | 'tech' | 'business' | 'health' | 'humanities';
  label: string;
}

export const univFaculties: UnivFacultyFilter[] = [
  { id: 'all', label: 'Todas las Facultades' },
  { id: 'tech', label: 'Politécnica & IA' },
  { id: 'business', label: 'Economía & Negocios' },
  { id: 'health', label: 'Salud & Medicina' },
  { id: 'humanities', label: 'Comunicación & Diseño' },
];

export interface AdmissionStep {
  step: number;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export const admissionSteps: AdmissionStep[] = [
  {
    step: 1,
    title: 'Solicitud y Documentación Telemática',
    duration: 'Plazo abierto · Trámite 15 min',
    description: 'Completa el formulario de admisión y sube tu expediente académico, DNI/pasaporte y carta de motivación personal.',
    deliverables: ['Expediente académico oficial', 'Carta de motivación (máx. 500 palabras)', 'Curriculum vitae o porfolio (según titulación)'],
  },
  {
    step: 2,
    title: 'Pruebas Competenciales y de Idiomas',
    duration: 'Online o presencial · 90 min',
    description: 'Evaluación psicotécnica de razonamiento lógico, comprensión analítica y acreditación del nivel B2/C1 de inglés para programas bilingües.',
    deliverables: ['Test de competencias cognitivas', 'Prueba de nivel de inglés (Oxford/Cambridge)', 'Prueba técnica específica para ingeniería'],
  },
  {
    step: 3,
    title: 'Entrevista Personal con la Dirección Académica',
    duration: 'Videollamada o Campus · 30 min',
    description: 'Conversación individual con el decanato o coordinador del programa para evaluar tu vocación, afinidad e inquietud investigadora.',
    deliverables: ['Revisión del perfil de vocación', 'Resolución de dudas sobre el plan docente', 'Dictamen del comité de admisiones'],
  },
  {
    step: 4,
    title: 'Resolución de Plaza y Matrícula',
    duration: 'Respuesta en 72 horas',
    description: 'Recepción de la carta oficial de admisión con las condiciones de la beca asignada y reserva telemática de la plaza.',
    deliverables: ['Carta oficial de admisión', 'Asignación de tutor y mentoría alumni', 'Abono de reserva y matrícula'],
  },
];

export interface AdmissionDeadline {
  convocatoria: string;
  deadline: string;
  examDate: string;
  resolutionDate: string;
  status: 'Abierta' | 'Próxima' | 'Cerrada';
}

export const admissionDeadlines: AdmissionDeadline[] = [
  {
    convocatoria: 'Convocatoria Preferente (Bonificación 10% matrícula)',
    deadline: '28 de Febrero 2027',
    examDate: '7 de Marzo 2027',
    resolutionDate: '12 de Marzo 2027',
    status: 'Abierta',
  },
  {
    convocatoria: 'Convocatoria Ordinaria (Acceso General y Becas Mérito)',
    deadline: '30 de Mayo 2027',
    examDate: '6 de Junio 2027',
    resolutionDate: '12 de Junio 2027',
    status: 'Próxima',
  },
  {
    convocatoria: 'Convocatoria Extraordinaria (Últimas plazas disponibles)',
    deadline: '15 de Julio 2027',
    examDate: '20 de Julio 2027',
    resolutionDate: '24 de Julio 2027',
    status: 'Próxima',
  },
];

export interface ResearchInstitute {
  id: string;
  name: string;
  director: string;
  description: string;
  leadProjects: string[];
  metrics: { papers: number; citations: string; budget: string };
  iconSvg: string;
}

export const researchInstitutes: ResearchInstitute[] = [
  {
    id: 'instituto-ia-robotica',
    name: 'Instituto de IA Avanzada & Robótica Cognitiva',
    director: 'Dra. Elena Alarcón (PhD Cambridge, Catedrática de IA)',
    description: 'Pioneros en modelos de razonamiento causal, robótica quirúrgica asistida y visión artificial para navegación en entornos adversos.',
    leadProjects: ['Proyecto NeuroGlove: prótesis biónica controlada por IA', 'Horizon Europe: Algoritmos explicables para diagnosis clínica'],
    metrics: { papers: 94, citations: '12.4K', budget: '18.2M €' },
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>`,
  },
  {
    id: 'centro-biomedicina-molecular',
    name: 'Centro de Biomedicina y Terapias Avanzadas',
    director: 'Dr. Marcos Sotomayor (PhD Harvard, Miembro EMBO)',
    description: 'Desarrollo de nanopartículas para liberación dirigida de fármacos antitumorales y edición genética CRISPR para enfermedades raras.',
    leadProjects: ['Terapia CAR-T de segunda generación para leucemia', 'Biomarcadores de diagnóstico precoz en enfermedades neurodegenerativas'],
    metrics: { papers: 112, citations: '16.8K', budget: '22.5M €' },
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 2 4 4-4 4M16 2l-4 4 4 4M2 12h20M2 18h20M7 8l10 8"/></svg>`,
  },
  {
    id: 'catedra-transicion-energetica',
    name: 'Cátedra de Transición Energética & Materiales Cuánticos',
    director: 'Dra. Beatriz Lindqvist (PhD ETH Zurich)',
    description: 'Investigación en celdas solares de perovskita de ultra alta eficiencia, electrolizadores de hidrógeno verde y baterías de estado sólido.',
    leadProjects: ['Almacenamiento de energía en redes inteligentes', 'Catalizadores no nobles para producción de H2 verde a gran escala'],
    metrics: { papers: 68, citations: '8.9K', budget: '14.1M €' },
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  },
];

export interface CampusFacility {
  id: string;
  name: string;
  category: 'académico' | 'laboratorio' | 'residencial' | 'deportivo';
  description: string;
  highlights: string[];
  schedule: string;
  capacity: string;
}

export const campusFacilities: CampusFacility[] = [
  {
    id: 'biblioteca-central',
    name: 'Biblioteca Central & Centro de Recursos de Aprendizaje',
    category: 'académico',
    description: 'Edificio bioclimático de 4 plantas con 850 puestos de estudio, 28 salas insonorizadas de trabajo en equipo y acceso a 300.000 volúmenes y bases de datos Scopus/IEEE.',
    highlights: ['Abierta 24 horas en periodo de exámenes', 'Estaciones de préstamo digital y tabletas', 'Cabinas individuales de concentración y videoconferencia'],
    schedule: 'Lunes a Domingo · 07:00 a 23:00 (24h exámenes)',
    capacity: '850 puestos de lectura',
  },
  {
    id: 'fablab-prototipado',
    name: 'FabLab & Centro de Innovación Abierta',
    category: 'laboratorio',
    description: 'Espacio maker equipado con impresoras 3D industriales de resina y metal, cortadoras láser de fibra, fresadoras CNC de 5 ejes y laboratorio de electrónica PCB.',
    highlights: ['Acceso libre para proyectos de grado y tesis', 'Supervisión técnica de ingenieros especialistas', 'Área de testeo de drones y robótica móvil'],
    schedule: 'Lunes a Viernes · 08:30 a 20:30',
    capacity: '120 puestos de trabajo simultáneos',
  },
  {
    id: 'residencia-colegio-mayor',
    name: 'Colegio Mayor Universitario Veritas Hall',
    category: 'residencial',
    description: 'Residencia en el propio campus universitario con 340 habitaciones individuales con baño privado, pensión completa, gimnasio, lavandería y salas de convivencia.',
    highlights: ['A 3 minutos a pie de todas las facultades', 'Menús saludables diseñados por nutricionistas', 'Programa de actividades culturales y deportivas'],
    schedule: 'Recepción y seguridad 24 horas, 365 días',
    capacity: '340 residentes',
  },
  {
    id: 'complejo-deportivo',
    name: 'Polideportivo Olímpico y Centro Wellness',
    category: 'deportivo',
    description: 'Pabellón cubierto multideporte, piscina semiolímpica climatizada, pista de atletismo homologada, pistas de pádel y sala de fitness de última generación.',
    highlights: ['Acceso gratuito para toda la comunidad universitaria', 'Entrenadores personales y clases dirigidas', 'Competiciones interuniversitarias de atletismo y baloncesto'],
    schedule: 'Lunes a Sábado · 07:00 a 22:30 / Domingos hasta 15:00',
    capacity: 'Aforo de 1.200 espectadores',
  },
];

export interface OpenDaySession {
  date: string;
  time: string;
  modality: 'Presencial en Campus' | 'Sesión Online Streaming';
  spotsAvailable: number;
  activities: string[];
}

export const openDaySessions: OpenDaySession[] = [
  {
    date: 'Sábado, 12 de Diciembre 2026',
    time: '10:00 - 14:00 CET',
    modality: 'Presencial en Campus',
    spotsAvailable: 45,
    activities: ['Presentación institucional del Rectorado', 'Talleres prácticos en laboratorios y FabLab', 'Reunión con directores de titulación y tutores', 'Visita guiada al Colegio Mayor y Polideportivo'],
  },
  {
    date: 'Miércoles, 16 de Diciembre 2026',
    time: '18:00 - 19:30 CET',
    modality: 'Sesión Online Streaming',
    spotsAvailable: 150,
    activities: ['Tour virtual interactivo 360° por el campus', 'Sesión de preguntas y respuestas en vivo sobre becas', 'Mesa redonda con alumnos y egresados'],
  },
  {
    date: 'Sábado, 23 de Enero 2027',
    time: '10:00 - 14:00 CET',
    modality: 'Presencial en Campus',
    spotsAvailable: 80,
    activities: ['Simulacro de pruebas competenciales de acceso', 'Feria de salidas profesionales y convenios con empresas', 'Degustación en el comedor universitario'],
  },
];

