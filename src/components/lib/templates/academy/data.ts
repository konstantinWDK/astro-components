// src/components/lib/templates/academy/data.ts
// Demo data for "Lumen" · Online academy & learning platform with learner area and instructor studio.
// Replace with your own LMS / API data; every page and component takes these shapes as props.

export type AcademyLevel = 'Inicial' | 'Intermedio' | 'Avanzado';
export type AcademyLessonType = 'video' | 'lectura' | 'quiz' | 'proyecto';
export type AcademyCourseStatus = 'Publicado' | 'Borrador' | 'En revisión';

export interface AcademyCategory {
  id: string;
  name: string;
  description: string;
  hue: number;
  /** Icon key: code | design | data | business | language | music */
  icon: string;
}

export interface AcademyInstructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  students: number;
  courses: number;
  rating: number;
  hue: number;
}

export interface AcademyLesson {
  id: string;
  title: string;
  minutes: number;
  type: AcademyLessonType;
  /** Free preview without enrolling. */
  preview?: boolean;
}

export interface AcademyModule {
  id: string;
  title: string;
  lessons: AcademyLesson[];
}

export interface AcademyCourse {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  categoryId: string;
  instructorId: string;
  level: AcademyLevel;
  hours: number;
  lessons: number;
  rating: number;
  reviews: number;
  students: number;
  /** Price in EUR. 0 = free. */
  price: number;
  oldPrice?: number;
  hue: number;
  updated: string;
  bestseller?: boolean;
  isNew?: boolean;
  learn: string[];
  modules: AcademyModule[];
}

export interface AcademyPlan {
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

export interface AcademyReview {
  id: string;
  name: string;
  role: string;
  courseId: string;
  rating: number;
  text: string;
}

export interface AcademyEnrollment {
  courseId: string;
  /** 0–100. */
  progress: number;
  lastLessonId: string;
  /** Lesson ids already completed. */
  done: string[];
}

export interface AcademyRoutes {
  home: string;
  courses: string;
  course: string;
  pricing: string;
  teach: string;
  signIn: string;
  dashboard: string;
  player: string;
  studio: string;
}

export const academyRoutes: AcademyRoutes = {
  home: '/',
  courses: '/cursos',
  course: '/cursos/diseno-de-interfaces-desde-cero',
  pricing: '/precios',
  teach: '/ensena',
  signIn: '/acceso',
  dashboard: '/aula',
  player: '/aula/clase',
  studio: '/aula/estudio',
};

export const academyCategories: AcademyCategory[] = [
  { id: 'code', name: 'Programación', description: 'Web, backend y automatización con proyectos reales.', hue: 258, icon: 'code' },
  { id: 'design', name: 'Diseño', description: 'Interfaces, producto y sistemas de diseño.', hue: 24, icon: 'design' },
  { id: 'data', name: 'Datos e IA', description: 'Análisis, SQL, visualización y machine learning aplicado.', hue: 168, icon: 'data' },
  { id: 'business', name: 'Negocio', description: 'Producto, marketing y finanzas para equipos pequeños.', hue: 44, icon: 'business' },
  { id: 'language', name: 'Idiomas', description: 'Inglés profesional y comunicación escrita.', hue: 330, icon: 'language' },
  { id: 'music', name: 'Música', description: 'Teoría, producción y mezcla desde casa.', hue: 205, icon: 'music' },
];

export const academyInstructors: AcademyInstructor[] = [
  { id: 'i1', name: 'Elena Marqués', role: 'Product designer · ex-Typeform', bio: 'Diez años diseñando producto en startups. Enseña a pensar en sistemas, no en pantallas sueltas.', students: 18400, courses: 4, rating: 4.9, hue: 24 },
  { id: 'i2', name: 'Iván Cordero', role: 'Ingeniero de software sénior', bio: 'Backend, rendimiento y APIs. Prefiere proyectos pequeños bien acabados a tutoriales infinitos.', students: 22100, courses: 6, rating: 4.8, hue: 258 },
  { id: 'i3', name: 'Nuria Salgado', role: 'Data scientist · banca y retail', bio: 'Explica estadística con hojas de cálculo antes de tocar una línea de Python.', students: 12750, courses: 3, rating: 4.8, hue: 168 },
  { id: 'i4', name: 'Marcos Heredia', role: 'Growth lead', bio: 'Ha lanzado 14 productos digitales. Enseña a validar antes de construir.', students: 9300, courses: 3, rating: 4.7, hue: 44 },
  { id: 'i5', name: 'Clara Whitfield', role: 'Formadora de inglés profesional', bio: 'Nativa, con 15 años formando equipos técnicos en reuniones, emails y entrevistas.', students: 15600, courses: 2, rating: 4.9, hue: 330 },
  { id: 'i6', name: 'Tomás Beltrán', role: 'Productor y compositor', bio: 'Produce desde un dormitorio desde 2009. Todo el curso se hace con equipo asequible.', students: 6200, courses: 2, rating: 4.7, hue: 205 },
];

const mod = (id: string, title: string, lessons: Array<[string, number, AcademyLessonType, boolean?]>): AcademyModule => ({
  id,
  title,
  lessons: lessons.map(([t, minutes, type, preview], i) => ({ id: `${id}-l${i + 1}`, title: t, minutes, type, preview })),
});

export const academyCourses: AcademyCourse[] = [
  {
    id: 'c1', slug: 'diseno-de-interfaces-desde-cero', title: 'Diseño de interfaces desde cero', subtitle: 'Aprende jerarquía, color, tipografía y sistemas de diseño construyendo una app completa en Figma.',
    categoryId: 'design', instructorId: 'i1', level: 'Inicial', hours: 14, lessons: 38, rating: 4.9, reviews: 2140, students: 11800, price: 69, oldPrice: 99, hue: 24, updated: 'octubre de 2026', bestseller: true,
    learn: ['Construir una jerarquía visual clara', 'Elegir paleta y tipografía con criterio', 'Montar componentes y variantes reutilizables', 'Presentar un caso de estudio para tu portfolio'],
    modules: [
      mod('m1', 'Mirar antes de diseñar', [['Qué hace buena a una interfaz', 9, 'video', true], ['Anatomía de una pantalla', 14, 'video', true], ['Lectura: principios de jerarquía', 8, 'lectura'], ['Test de fundamentos', 6, 'quiz']]),
      mod('m2', 'Color y tipografía', [['Escalas tipográficas', 18, 'video'], ['Paletas accesibles', 21, 'video'], ['Contraste y modo oscuro', 16, 'video'], ['Ejercicio: tu primera paleta', 25, 'proyecto']]),
      mod('m3', 'Componentes y sistemas', [['Botones, campos y estados', 24, 'video'], ['Auto layout sin dolor', 19, 'video'], ['Variantes y tokens', 22, 'video'], ['Test de componentes', 8, 'quiz']]),
      mod('m4', 'Proyecto final', [['Brief y flujos', 15, 'video'], ['Diseño de las pantallas clave', 35, 'video'], ['Prototipo y presentación', 28, 'video'], ['Entrega y revisión por pares', 40, 'proyecto']]),
    ],
  },
  {
    id: 'c2', slug: 'apis-con-node-y-postgres', title: 'APIs con Node y Postgres', subtitle: 'Diseña, prueba y despliega una API real con autenticación, migraciones y tests.',
    categoryId: 'code', instructorId: 'i2', level: 'Intermedio', hours: 18, lessons: 46, rating: 4.8, reviews: 3010, students: 14200, price: 89, oldPrice: 129, hue: 258, updated: 'noviembre de 2026', bestseller: true,
    learn: ['Modelar datos relacionales con criterio', 'Escribir endpoints testeables', 'Gestionar autenticación y permisos', 'Desplegar con CI y observabilidad básica'],
    modules: [
      mod('m1', 'Fundamentos de una API', [['REST sin dogmas', 12, 'video', true], ['Tu primer servidor', 17, 'video', true], ['Validación de entrada', 14, 'video'], ['Test de fundamentos', 6, 'quiz']]),
      mod('m2', 'Datos con Postgres', [['Modelado y relaciones', 26, 'video'], ['Migraciones', 18, 'video'], ['Consultas y rendimiento', 24, 'video'], ['Ejercicio: el esquema', 30, 'proyecto']]),
      mod('m3', 'Seguridad', [['Sesiones y tokens', 22, 'video'], ['Permisos por rol', 19, 'video'], ['Lectura: OWASP en 10 minutos', 10, 'lectura']]),
    ],
  },
  {
    id: 'c3', slug: 'sql-y-analisis-de-datos', title: 'SQL y análisis de datos', subtitle: 'Responde preguntas de negocio con SQL y presenta tus hallazgos con gráficos claros.',
    categoryId: 'data', instructorId: 'i3', level: 'Inicial', hours: 11, lessons: 32, rating: 4.8, reviews: 1620, students: 8900, price: 49, hue: 168, updated: 'septiembre de 2026', isNew: false,
    learn: ['Escribir consultas con JOIN y agregaciones', 'Limpiar datos sucios', 'Elegir el gráfico adecuado', 'Contar una historia con datos'],
    modules: [
      mod('m1', 'Primeras consultas', [['Tablas, filas y columnas', 8, 'video', true], ['SELECT y filtros', 15, 'video', true], ['Test de consultas', 6, 'quiz']]),
      mod('m2', 'Combinar tablas', [['JOIN paso a paso', 22, 'video'], ['Agregaciones y GROUP BY', 20, 'video'], ['Ejercicio: informe de ventas', 30, 'proyecto']]),
    ],
  },
  {
    id: 'c4', slug: 'producto-digital-de-idea-a-lanzamiento', title: 'Producto digital: de idea a lanzamiento', subtitle: 'Valida, prioriza y lanza un producto con presupuesto pequeño y feedback real.',
    categoryId: 'business', instructorId: 'i4', level: 'Intermedio', hours: 9, lessons: 26, rating: 4.7, reviews: 980, students: 5400, price: 59, hue: 44, updated: 'agosto de 2026', isNew: true,
    learn: ['Entrevistar a usuarios sin sesgos', 'Priorizar un backlog', 'Medir con métricas que importan', 'Planificar un lanzamiento'],
    modules: [
      mod('m1', 'Validar', [['Problemas que merecen solución', 11, 'video', true], ['Entrevistas útiles', 19, 'video'], ['Test de validación', 6, 'quiz']]),
      mod('m2', 'Construir y lanzar', [['MVP sin construir de más', 17, 'video'], ['Plan de lanzamiento', 21, 'video'], ['Proyecto: tu plan', 35, 'proyecto']]),
    ],
  },
  {
    id: 'c5', slug: 'ingles-para-reuniones-tecnicas', title: 'Inglés para reuniones técnicas', subtitle: 'Habla con seguridad en dailies, demos y entrevistas con el vocabulario que de verdad se usa.',
    categoryId: 'language', instructorId: 'i5', level: 'Intermedio', hours: 8, lessons: 30, rating: 4.9, reviews: 1890, students: 10300, price: 39, oldPrice: 59, hue: 330, updated: 'noviembre de 2026', bestseller: true,
    learn: ['Intervenir en una reunión sin bloquearte', 'Escribir emails claros y breves', 'Presentar una demo', 'Superar una entrevista técnica'],
    modules: [
      mod('m1', 'Reuniones', [['Pedir aclaraciones', 10, 'video', true], ['Dar tu opinión', 12, 'video'], ['Test de frases clave', 5, 'quiz']]),
      mod('m2', 'Escritura', [['Emails que se leen', 14, 'video'], ['Mensajes de Slack', 9, 'lectura']]),
    ],
  },
  {
    id: 'c6', slug: 'produccion-musical-en-casa', title: 'Producción musical en casa', subtitle: 'Graba, arregla y mezcla tu primera canción con un equipo asequible y mucho oído.',
    categoryId: 'music', instructorId: 'i6', level: 'Inicial', hours: 12, lessons: 34, rating: 4.7, reviews: 760, students: 4100, price: 54, hue: 205, updated: 'julio de 2026', isNew: true,
    learn: ['Montar un estudio mínimo', 'Grabar voz e instrumentos', 'Arreglar con intención', 'Mezclar con referencias'],
    modules: [
      mod('m1', 'Tu estudio', [['Qué necesitas de verdad', 12, 'video', true], ['Acústica de dormitorio', 16, 'video']]),
      mod('m2', 'Grabar y mezclar', [['Micrófonos y posición', 20, 'video'], ['Ecualización básica', 24, 'video'], ['Proyecto: tu primera mezcla', 45, 'proyecto']]),
    ],
  },
  {
    id: 'c7', slug: 'design-systems-con-tokens', title: 'Design systems con tokens', subtitle: 'Lleva tus decisiones de diseño a código con tokens, documentación y gobernanza ligera.',
    categoryId: 'design', instructorId: 'i1', level: 'Avanzado', hours: 10, lessons: 28, rating: 4.8, reviews: 540, students: 3200, price: 79, hue: 12, updated: 'octubre de 2026',
    learn: ['Definir tokens semánticos', 'Versionar y publicar un sistema', 'Documentar para adopción', 'Medir el uso'],
    modules: [mod('m1', 'Tokens', [['De decisiones a variables', 18, 'video', true], ['Capas semánticas', 22, 'video']]), mod('m2', 'Adopción', [['Documentación viva', 16, 'video'], ['Gobernanza ligera', 14, 'lectura']])],
  },
  {
    id: 'c8', slug: 'python-para-automatizar-tareas', title: 'Python para automatizar tareas', subtitle: 'Deja de copiar y pegar: scripts útiles con archivos, correos, hojas de cálculo y APIs.',
    categoryId: 'code', instructorId: 'i2', level: 'Inicial', hours: 7, lessons: 24, rating: 4.7, reviews: 2250, students: 13800, price: 0, hue: 280, updated: 'junio de 2026',
    learn: ['Leer y escribir archivos', 'Automatizar hojas de cálculo', 'Consumir una API', 'Programar tareas periódicas'],
    modules: [mod('m1', 'Primeros scripts', [['Instalar y ejecutar', 8, 'video', true], ['Variables y bucles', 15, 'video', true]]), mod('m2', 'Automatizar', [['Archivos y carpetas', 17, 'video'], ['Hojas de cálculo', 20, 'video'], ['Proyecto: tu informe semanal', 30, 'proyecto']])],
  },
];

export const academyPlans: AcademyPlan[] = [
  { id: 'free', name: 'Explora', tagline: 'Para probar sin compromiso', monthly: 0, yearly: 0, features: ['Cursos gratuitos y clases de muestra', 'Comunidad y foros', 'Seguimiento de tu progreso'] },
  { id: 'pro', name: 'Pro', tagline: 'Todo el catálogo, sin límites', monthly: 24, yearly: 16, highlighted: true, features: ['Más de 120 cursos incluidos', 'Certificados verificables', 'Proyectos con revisión por pares', 'Descarga de clases para ver sin conexión'] },
  { id: 'team', name: 'Equipos', tagline: 'Formación para toda la empresa', monthly: 39, yearly: 29, features: ['Todo lo de Pro, por persona', 'Rutas de aprendizaje compartidas', 'Panel de progreso del equipo', 'Facturación única y soporte prioritario'] },
];

export const academyReviews: AcademyReview[] = [
  { id: 'r1', name: 'Lucía Fernández', role: 'Ahora diseñadora junior en Madrid', courseId: 'c1', rating: 5, text: 'Pasé de copiar plantillas a entender por qué funcionan. Mi caso de estudio del proyecto final me consiguió dos entrevistas.' },
  { id: 'r2', name: 'Diego Ramos', role: 'Desarrollador backend', courseId: 'c2', rating: 5, text: 'El curso de APIs es lo más parecido a trabajar con alguien sénior al lado. Los tests desde el primer día marcan la diferencia.' },
  { id: 'r3', name: 'Sara Molina', role: 'Analista de marketing', courseId: 'c3', rating: 4, text: 'Empecé sin saber qué era un JOIN y ahora preparo mis propios informes. Los ejercicios con datos reales son oro.' },
  { id: 'r4', name: 'Pablo Ortiz', role: 'Ingeniero de datos', courseId: 'c5', rating: 5, text: 'Dejé de quedarme callado en las reuniones en inglés. Las frases clave las uso cada semana.' },
];

export const academyLearner = {
  name: 'Lucía Fernández',
  email: 'lucia@example.com',
  plan: 'Pro',
  since: 'marzo de 2026',
  id: 'A-4821',
  streakDays: 12,
  weeklyGoalMinutes: 180,
  minutesThisWeek: 126,
  /** Minutes studied Monday → Sunday. */
  daily: [35, 20, 45, 0, 26, 0, 0],
  certificates: 2,
  enrollments: [
    { courseId: 'c1', progress: 42, lastLessonId: 'm2-l3', done: ['m1-l1', 'm1-l2', 'm1-l3', 'm1-l4', 'm2-l1', 'm2-l2'] },
    { courseId: 'c3', progress: 78, lastLessonId: 'm2-l2', done: ['m1-l1', 'm1-l2', 'm1-l3', 'm2-l1'] },
    { courseId: 'c5', progress: 100, lastLessonId: 'm2-l2', done: ['m1-l1', 'm1-l2', 'm1-l3', 'm2-l1', 'm2-l2'] },
  ] as AcademyEnrollment[],
};

export const academyStudio = {
  instructor: 'Elena Marqués',
  /** Net revenue per month, Dec 2025 → Nov 2026 (EUR). */
  revenue: [3120, 3380, 2950, 3610, 4020, 3880, 4310, 4120, 4690, 5240, 5010, 5860],
  /** New enrolments per month, same period. */
  enrolments: [62, 71, 58, 77, 90, 84, 95, 88, 103, 121, 114, 138],
  months: ['D', 'E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N'],
  courses: [
    { id: 'c1', title: 'Diseño de interfaces desde cero', status: 'Publicado' as AcademyCourseStatus, students: 11800, rating: 4.9, completion: 64, revenue: 31240, updated: '2026-10-14' },
    { id: 'c7', title: 'Design systems con tokens', status: 'Publicado' as AcademyCourseStatus, students: 3200, rating: 4.8, completion: 51, revenue: 14860, updated: '2026-10-02' },
    { id: 'c9', title: 'Prototipado con IA para diseñadores', status: 'En revisión' as AcademyCourseStatus, students: 0, rating: 0, completion: 0, revenue: 0, updated: '2026-11-18' },
    { id: 'c10', title: 'Microinteracciones con CSS', status: 'Borrador' as AcademyCourseStatus, students: 0, rating: 0, completion: 0, revenue: 0, updated: '2026-11-09' },
    { id: 'c11', title: 'Accesibilidad para diseñadores', status: 'Publicado' as AcademyCourseStatus, students: 1450, rating: 4.7, completion: 58, revenue: 6120, updated: '2026-08-21' },
  ],
};

export const academyData = {
  brand: {
    name: 'Lumen',
    legalName: 'Lumen Academia Online S.L.',
    tagline: 'Aprende haciendo, a tu ritmo',
    phone: '+34 910 440 120',
    email: 'hola@lumen.example',
    address: 'Calle de Alcalá, 120 · 28009 Madrid',
    hours: 'Soporte L–V 9:00–19:00',
  },
  stats: [
    { value: '120+', label: 'cursos con proyecto' },
    { value: '86.000', label: 'alumnos activos' },
    { value: '4,8/5', label: 'valoración media' },
  ],
  categories: academyCategories,
  instructors: academyInstructors,
  courses: academyCourses,
  plans: academyPlans,
  reviews: academyReviews,
  learner: academyLearner,
  studio: academyStudio,
};

export function getAcademyCourse(slugOrId: string, list: AcademyCourse[] = academyCourses): AcademyCourse | undefined {
  return list.find((c) => c.slug === slugOrId || c.id === slugOrId);
}

export function getAcademyInstructor(id: string, list: AcademyInstructor[] = academyInstructors): AcademyInstructor | undefined {
  return list.find((i) => i.id === id);
}

export function getAcademyCategory(id: string, list: AcademyCategory[] = academyCategories): AcademyCategory | undefined {
  return list.find((c) => c.id === id);
}

/** Base URL of the course pages, taken from `routes.course` (its last segment is a sample slug). */
export function academyCourseBase(routes: AcademyRoutes): string {
  return routes.course.replace(/\/[^/]*$/, '');
}

/** Link of a course page: `${routes.course}` points at a sample; swap its last segment. */
export function academyCourseHref(routes: AcademyRoutes, slug: string): string {
  return `${routes.course.replace(/\/[^/]*$/, '')}/${slug}`;
}

/** 90 → "1 h 30 min", 45 → "45 min". */
export function formatAcademyMinutes(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h ? (m ? `${h} h ${m} min` : `${h} h`) : `${m} min`;
}

export function formatAcademyPrice(price: number): string {
  return price === 0 ? 'Gratis' : `${price} €`;
}

export function academyModuleMinutes(m: AcademyModule): number {
  return m.lessons.reduce((sum, l) => sum + l.minutes, 0);
}
