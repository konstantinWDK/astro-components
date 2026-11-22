// src/components/lib/templates/law-firm/data.ts
// Demo data for "Fuero" · Law firm with a client portal (cases, documents, messages, appointments, invoices).
// Replace with your own case-management data; every page and component takes these shapes as props.

export type LawCaseStatus = 'En curso' | 'Pendiente de cliente' | 'Señalado' | 'Cerrado';
export type LawDocType = 'Contrato' | 'Escrito' | 'Resolución' | 'Prueba' | 'Factura';
export type LawInvoiceStatus = 'Pagada' | 'Pendiente' | 'Vencida';

export interface LawArea {
  id: string;
  name: string;
  summary: string;
  /** Icon key used by LawPracticeAreas. */
  icon: string;
  examples: string[];
}

export interface LawLawyer {
  id: string;
  name: string;
  role: string;
  areas: string[];
  years: number;
  bio: string;
  languages: string[];
  hue: number;
}

export interface LawTimelineEvent {
  /** ISO date. */
  date: string;
  title: string;
  text: string;
  done: boolean;
}

export interface LawCase {
  id: string;
  ref: string;
  title: string;
  areaId: string;
  lawyerId: string;
  status: LawCaseStatus;
  opened: string;
  /** 0–100. */
  progress: number;
  nextStep: string;
  timeline: LawTimelineEvent[];
}

export interface LawDocument {
  id: string;
  name: string;
  type: LawDocType;
  caseId: string;
  /** ISO date. */
  date: string;
  sizeKb: number;
  by: string;
  needsSignature?: boolean;
}

export interface LawMessage {
  id: string;
  from: 'client' | 'firm';
  author: string;
  text: string;
  /** ISO datetime. */
  at: string;
}

export interface LawAppointment {
  id: string;
  /** ISO datetime. */
  at: string;
  title: string;
  where: string;
  lawyerId: string;
  online: boolean;
}

export interface LawInvoice {
  id: string;
  concept: string;
  /** EUR. */
  amount: number;
  /** ISO date. */
  due: string;
  status: LawInvoiceStatus;
}

export interface LawFeeOption {
  id: string;
  name: string;
  price: string;
  text: string;
  best: string[];
  highlighted?: boolean;
}

export interface LawInsight {
  id: string;
  title: string;
  excerpt: string;
  area: string;
  date: string;
  minutes: number;
}

export interface LawFaq {
  q: string;
  a: string;
}

export interface LawRoutes {
  home: string;
  areas: string;
  team: string;
  consult: string;
  signIn: string;
  dashboard: string;
  cases: string;
  documents: string;
  messages: string;
}

export const lawRoutes: LawRoutes = {
  home: '/',
  areas: '/areas',
  team: '/equipo',
  consult: '/consulta',
  signIn: '/acceso',
  dashboard: '/portal',
  cases: '/portal/expedientes',
  documents: '/portal/documentos',
  messages: '/portal/mensajes',
};

export const lawAreas: LawArea[] = [
  { id: 'family', name: 'Derecho de familia', summary: 'Divorcios, custodia, pensiones y herencias con una mirada humana y estrategia clara.', icon: 'heart', examples: ['Divorcio de mutuo acuerdo', 'Guarda y custodia', 'Régimen de visitas', 'Herencias y testamentos'] },
  { id: 'business', name: 'Mercantil y empresas', summary: 'Constitución de sociedades, pactos de socios, contratos y asesoramiento recurrente.', icon: 'building', examples: ['Constitución de sociedades', 'Pactos de socios', 'Contratos comerciales', 'Reestructuraciones'] },
  { id: 'labor', name: 'Laboral', summary: 'Despidos, reclamaciones, negociación de salidas y compliance laboral para empresas.', icon: 'briefcase', examples: ['Despido improcedente', 'Reclamación de cantidad', 'Acoso laboral', 'Planes de igualdad'] },
  { id: 'realestate', name: 'Inmobiliario', summary: 'Compraventas, arrendamientos, comunidades de propietarios y urbanismo.', icon: 'home', examples: ['Compraventa de vivienda', 'Arrendamientos', 'Comunidades de propietarios', 'Licencias y urbanismo'] },
  { id: 'criminal', name: 'Penal', summary: 'Defensa en procedimientos penales, delitos económicos y asistencia 24 horas.', icon: 'scale', examples: ['Defensa penal', 'Delitos económicos', 'Violencia de género', 'Asistencia al detenido'] },
  { id: 'immigration', name: 'Extranjería', summary: 'Residencia, arraigo, nacionalidad y reagrupación familiar, con seguimiento paso a paso.', icon: 'globe', examples: ['Arraigo y residencia', 'Nacionalidad española', 'Reagrupación familiar', 'Visados para empresas'] },
];

export const lawLawyers: LawLawyer[] = [
  { id: 'l1', name: 'Carmen Arbós', role: 'Socia fundadora', areas: ['family', 'realestate'], years: 24, bio: 'Litigante de familia y propiedad. Cree en negociar primero y pleitear cuando de verdad hace falta.', languages: ['Español', 'Inglés'], hue: 350 },
  { id: 'l2', name: 'Julián Vidal', role: 'Socio · Mercantil', areas: ['business'], years: 19, bio: 'Acompaña a startups y pymes desde la constitución hasta la venta de la compañía.', languages: ['Español', 'Inglés', 'Francés'], hue: 20 },
  { id: 'l3', name: 'Marta Iglesias', role: 'Abogada sénior · Laboral', areas: ['labor'], years: 12, bio: 'Defiende a personas trabajadoras y asesora a empresas en prevención de conflictos.', languages: ['Español', 'Catalán'], hue: 300 },
  { id: 'l4', name: 'Rodrigo Fuentes', role: 'Abogado · Penal', areas: ['criminal'], years: 15, bio: 'Presente en comisaría y en sala. Preparación meticulosa y comunicación constante con el cliente.', languages: ['Español'], hue: 220 },
  { id: 'l5', name: 'Amina Benali', role: 'Abogada · Extranjería', areas: ['immigration', 'family'], years: 9, bio: 'Tramitaciones ágiles y trato cercano, en español, árabe y francés.', languages: ['Español', 'Árabe', 'Francés'], hue: 170 },
];

export const lawCases: LawCase[] = [
  {
    id: 'e1', ref: 'EXP-2026-0412', title: 'Divorcio de mutuo acuerdo', areaId: 'family', lawyerId: 'l1', status: 'En curso', opened: '2026-09-14', progress: 70,
    nextStep: 'Firmar el convenio regulador ante notario',
    timeline: [
      { date: '2026-09-14', title: 'Apertura del expediente', text: 'Primera reunión y análisis de la situación familiar y patrimonial.', done: true },
      { date: '2026-09-28', title: 'Borrador del convenio', text: 'Redactamos el convenio con custodia compartida y pensión.', done: true },
      { date: '2026-10-19', title: 'Acuerdo con la otra parte', text: 'Ambas partes aceptan los términos tras dos rondas de ajustes.', done: true },
      { date: '2026-11-26', title: 'Firma ante notario', text: 'Cita en la notaría para firmar el convenio regulador.', done: false },
      { date: '2026-12-15', title: 'Inscripción en el registro', text: 'Tramitamos la inscripción y te entregamos la copia.', done: false },
    ],
  },
  {
    id: 'e2', ref: 'EXP-2026-0388', title: 'Reclamación por despido improcedente', areaId: 'labor', lawyerId: 'l3', status: 'Señalado', opened: '2026-08-03', progress: 55,
    nextStep: 'Juicio señalado el 10 de diciembre a las 10:30',
    timeline: [
      { date: '2026-08-03', title: 'Apertura del expediente', text: 'Revisión de la carta de despido y de la documentación laboral.', done: true },
      { date: '2026-08-20', title: 'Papeleta de conciliación', text: 'Presentada en el servicio de mediación. Sin acuerdo.', done: true },
      { date: '2026-09-18', title: 'Demanda presentada', text: 'Admitida a trámite por el Juzgado de lo Social nº 4.', done: true },
      { date: '2026-12-10', title: 'Juicio', text: 'Vista oral a las 10:30. Te prepararemos el día anterior.', done: false },
    ],
  },
  {
    id: 'e3', ref: 'EXP-2026-0431', title: 'Compraventa de vivienda en Chamberí', areaId: 'realestate', lawyerId: 'l1', status: 'Pendiente de cliente', opened: '2026-10-27', progress: 35,
    nextStep: 'Necesitamos tu nota simple y la tasación actualizada',
    timeline: [
      { date: '2026-10-27', title: 'Apertura del expediente', text: 'Revisión de las arras y de la situación registral.', done: true },
      { date: '2026-11-10', title: 'Estudio de cargas', text: 'Sin cargas relevantes. Pendiente confirmar una servidumbre.', done: true },
      { date: '2026-11-30', title: 'Documentación del cliente', text: 'Debes aportar nota simple y tasación para la hipoteca.', done: false },
      { date: '2026-12-22', title: 'Escritura de compraventa', text: 'Firma ante notario prevista antes de Navidad.', done: false },
    ],
  },
  {
    id: 'e4', ref: 'EXP-2025-0977', title: 'Reclamación de honorarios a cliente', areaId: 'business', lawyerId: 'l2', status: 'Cerrado', opened: '2025-11-02', progress: 100,
    nextStep: 'Expediente cerrado con sentencia favorable',
    timeline: [
      { date: '2025-11-02', title: 'Apertura del expediente', text: 'Requerimiento previo de pago.', done: true },
      { date: '2026-03-12', title: 'Sentencia favorable', text: 'Se estima íntegramente la reclamación.', done: true },
      { date: '2026-04-30', title: 'Cobro y cierre', text: 'Cobro íntegro con intereses. Expediente archivado.', done: true },
    ],
  },
];

export const lawDocuments: LawDocument[] = [
  { id: 'd1', name: 'Convenio regulador (borrador final)', type: 'Contrato', caseId: 'e1', date: '2026-11-18', sizeKb: 412, by: 'Carmen Arbós', needsSignature: true },
  { id: 'd2', name: 'Certificado de empadronamiento', type: 'Prueba', caseId: 'e1', date: '2026-10-02', sizeKb: 96, by: 'Tú' },
  { id: 'd3', name: 'Demanda por despido', type: 'Escrito', caseId: 'e2', date: '2026-09-18', sizeKb: 688, by: 'Marta Iglesias' },
  { id: 'd4', name: 'Providencia de señalamiento', type: 'Resolución', caseId: 'e2', date: '2026-11-05', sizeKb: 154, by: 'Juzgado de lo Social nº 4' },
  { id: 'd5', name: 'Cartas de despido y nóminas', type: 'Prueba', caseId: 'e2', date: '2026-08-04', sizeKb: 1240, by: 'Tú' },
  { id: 'd6', name: 'Contrato de arras firmado', type: 'Contrato', caseId: 'e3', date: '2026-10-27', sizeKb: 530, by: 'Tú' },
  { id: 'd7', name: 'Informe de estudio de cargas', type: 'Escrito', caseId: 'e3', date: '2026-11-10', sizeKb: 301, by: 'Carmen Arbós' },
  { id: 'd8', name: 'Hoja de encargo EXP-2026-0431', type: 'Contrato', caseId: 'e3', date: '2026-10-27', sizeKb: 118, by: 'Fuero', needsSignature: true },
  { id: 'd9', name: 'Factura noviembre · provisión de fondos', type: 'Factura', caseId: 'e1', date: '2026-11-01', sizeKb: 74, by: 'Fuero' },
];

export const lawMessages: LawMessage[] = [
  { id: 'm1', from: 'firm', author: 'Carmen Arbós', text: 'Hola Elena, ya está el borrador final del convenio en tu carpeta. Revísalo con calma y dime si cambiarías algo antes de firmar.', at: '2026-11-18T10:12:00' },
  { id: 'm2', from: 'client', author: 'Tú', text: 'Gracias, Carmen. Lo leo esta noche. ¿La pensión de alimentos queda como acordamos en la reunión?', at: '2026-11-18T18:40:00' },
  { id: 'm3', from: 'firm', author: 'Carmen Arbós', text: 'Sí, 450 € mensuales con actualización anual por IPC. La custodia compartida está en la cláusula 4.', at: '2026-11-19T09:05:00' },
  { id: 'm4', from: 'client', author: 'Tú', text: 'Perfecto, entonces para mí está bien. ¿Cuándo vamos a la notaría?', at: '2026-11-19T09:31:00' },
  { id: 'm5', from: 'firm', author: 'Carmen Arbós', text: 'El jueves 26 a las 12:00 en la notaría de la calle Serrano. Te mando la dirección exacta y qué documentación llevar.', at: '2026-11-19T10:02:00' },
];

export const lawAppointments: LawAppointment[] = [
  { id: 'a1', at: '2026-11-26T12:00:00', title: 'Firma del convenio regulador', where: 'Notaría · C/ Serrano, 41', lawyerId: 'l1', online: false },
  { id: 'a2', at: '2026-12-09T17:30:00', title: 'Preparación del juicio', where: 'Videollamada', lawyerId: 'l3', online: true },
  { id: 'a3', at: '2026-12-10T10:30:00', title: 'Juicio · Juzgado de lo Social nº 4', where: 'Juzgados de Plaza de Castilla', lawyerId: 'l3', online: false },
];

export const lawInvoices: LawInvoice[] = [
  { id: 'f1', concept: 'Provisión de fondos · divorcio (noviembre)', amount: 450, due: '2026-12-05', status: 'Pendiente' },
  { id: 'f2', concept: 'Honorarios iniciales · compraventa', amount: 900, due: '2026-11-12', status: 'Vencida' },
  { id: 'f3', concept: 'Hoja de encargo · reclamación laboral', amount: 600, due: '2026-08-10', status: 'Pagada' },
  { id: 'f4', concept: 'Provisión de fondos · divorcio (octubre)', amount: 450, due: '2026-11-05', status: 'Pagada' },
];

export const lawFees: LawFeeOption[] = [
  { id: 'fixed', name: 'Honorarios fijos', price: 'Desde 390 €', text: 'Presupuesto cerrado antes de empezar. Sabes lo que pagas desde el primer día.', best: ['Trámites y contratos', 'Divorcios de mutuo acuerdo', 'Constitución de sociedades'] },
  { id: 'success', name: 'A resultado', price: '10 – 20 % del resultado', text: 'Pagas una cuota inicial reducida y un porcentaje solo si ganamos o cobramos.', best: ['Reclamaciones de cantidad', 'Despidos', 'Indemnizaciones'], highlighted: true },
  { id: 'retainer', name: 'Iguala mensual', price: 'Desde 190 € / mes', text: 'Asesoramiento recurrente para empresas, con horas incluidas y respuesta en 24 horas.', best: ['Pymes y startups', 'Compliance', 'Contratación continua'] },
];

export const lawInsights: LawInsight[] = [
  { id: 'i1', title: 'Qué firmar (y qué no) en el convenio regulador de un divorcio', excerpt: 'Cinco cláusulas que conviene revisar con lupa antes de acudir a la notaría.', area: 'Familia', date: '2026-11-12', minutes: 6 },
  { id: 'i2', title: 'Despido improcedente: plazos que no puedes dejar pasar', excerpt: 'Tienes 20 días hábiles. Te contamos qué hacer desde el primer día.', area: 'Laboral', date: '2026-10-30', minutes: 5 },
  { id: 'i3', title: 'Pacto de socios: lo que nadie te cuenta hasta la primera discusión', excerpt: 'Vesting, drag-along y salida de un socio fundador, explicados con ejemplos.', area: 'Mercantil', date: '2026-10-18', minutes: 8 },
];

export const lawProcess = [
  { title: 'Primera consulta', text: 'Escuchamos tu caso y te decimos con franqueza qué opciones tienes y cuánto costaría cada una.' },
  { title: 'Estrategia y presupuesto', text: 'Te proponemos un plan por escrito con plazos, honorarios y riesgos. Sin sorpresas.' },
  { title: 'Seguimiento en tu portal', text: 'Ves cada novedad, documento y fecha en tu área privada, y hablas con tu abogado por mensajería segura.' },
  { title: 'Resolución', text: 'Negociamos cuando conviene y litigamos cuando hace falta. Te explicamos el resultado y los siguientes pasos.' },
];

export const lawFaqs: LawFaq[] = [
  { q: '¿La primera consulta tiene coste?', a: 'La primera consulta de 30 minutos es gratuita y sin compromiso. Si decides contratarnos, te enviamos una hoja de encargo con el presupuesto.' },
  { q: '¿Cuánto tardáis en responder?', a: 'Respondemos cualquier mensaje del portal en menos de 24 horas laborables, y en urgencias penales atendemos las 24 horas.' },
  { q: '¿Mis documentos están seguros?', a: 'Sí. El portal cifra los documentos y solo accedes tú y tu equipo jurídico. Cumplimos el secreto profesional y el RGPD.' },
  { q: '¿Puedo llevar mi caso a distancia?', a: 'Sí. Puedes hacer consultas por videollamada, firmar con firma electrónica y seguir todo el expediente desde el portal.' },
];

export const lawData = {
  brand: {
    name: 'Fuero',
    legalName: 'Arbós & Vidal Abogados, S.L.P.',
    tagline: 'Despacho de abogados con trato cercano y estrategia clara',
    phone: '+34 915 220 410',
    email: 'consultas@fuero.example',
    address: 'Calle de Serrano, 41 · 28001 Madrid',
    hours: 'L–J 9:00–19:00 · V 9:00–15:00',
    legal: 'Despacho colegiado en el ICAM (demo, no es un despacho real).',
  },
  stats: [
    { value: '1.800+', label: 'casos resueltos' },
    { value: '92 %', label: 'resultados favorables' },
    { value: '24 h', label: 'respuesta garantizada' },
  ],
  areas: lawAreas,
  lawyers: lawLawyers,
  cases: lawCases,
  documents: lawDocuments,
  messages: lawMessages,
  appointments: lawAppointments,
  invoices: lawInvoices,
  fees: lawFees,
  insights: lawInsights,
  process: lawProcess,
  faqs: lawFaqs,
  client: { name: 'Elena Marqués', email: 'elena@example.com', id: 'CL-5521', since: 'agosto de 2026' },
};

const eurFmt = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });

export function formatLawMoney(amount: number): string {
  return eurFmt.format(amount);
}

/** "2026-11-18" → "18 nov 2026". */
export function formatLawDate(iso: string, withYear = true): string {
  return new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'short', ...(withYear ? { year: 'numeric' } : {}) }).format(new Date(iso.length === 10 ? `${iso}T12:00:00` : iso)).replace(/\./g, '');
}

export function formatLawTime(iso: string): string {
  return new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit' }).format(new Date(iso));
}

export function getLawArea(id: string, list: LawArea[] = lawAreas): LawArea | undefined {
  return list.find((a) => a.id === id);
}

export function getLawLawyer(id: string, list: LawLawyer[] = lawLawyers): LawLawyer | undefined {
  return list.find((l) => l.id === id);
}

export function getLawCase(id: string, list: LawCase[] = lawCases): LawCase | undefined {
  return list.find((c) => c.id === id);
}

export function formatLawSize(kb: number): string {
  return kb >= 1024 ? `${(kb / 1024).toFixed(1).replace('.', ',')} MB` : `${kb} KB`;
}
