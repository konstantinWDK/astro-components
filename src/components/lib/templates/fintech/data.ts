// src/components/lib/templates/fintech/data.ts
// Demo data for "Cobre" · Neobank for freelancers and small businesses, with an account area.
// Replace with your own banking API data; every page and component takes these shapes as props.

export type BankCategoryId = 'income' | 'software' | 'food' | 'transport' | 'taxes' | 'office' | 'travel' | 'leisure';
export type BankTxStatus = 'Completado' | 'Pendiente' | 'Rechazado';

export interface BankCategory {
  id: BankCategoryId;
  name: string;
  hue: number;
}

export interface BankAccount {
  id: string;
  name: string;
  iban: string;
  /** Balance in EUR. */
  balance: number;
  kind: 'Corriente' | 'Ahorro' | 'Impuestos';
  /** Annual rate in percent (savings only). */
  rate?: number;
}

export interface BankTransaction {
  id: string;
  /** ISO date. */
  date: string;
  merchant: string;
  category: BankCategoryId;
  /** Negative = money out. */
  amount: number;
  status: BankTxStatus;
  accountId: string;
}

export interface BankCard {
  id: string;
  name: string;
  kind: 'Física' | 'Virtual';
  /** Last 4 digits. */
  last4: string;
  expires: string;
  holder: string;
  limit: number;
  spent: number;
  frozen: boolean;
  hue: number;
}

export interface BankPlan {
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

export interface BankFeature {
  id: string;
  title: string;
  text: string;
  /** Icon key used by BankFeatures. */
  icon: string;
}

export interface BankFaq {
  q: string;
  a: string;
}

export interface BankBeneficiary {
  id: string;
  name: string;
  iban: string;
}

export interface BankRoutes {
  home: string;
  pricing: string;
  security: string;
  open: string;
  signIn: string;
  dashboard: string;
  transactions: string;
  cards: string;
  transfers: string;
}

export const bankRoutes: BankRoutes = {
  home: '/',
  pricing: '/precios',
  security: '/seguridad',
  open: '/abrir-cuenta',
  signIn: '/acceso',
  dashboard: '/app',
  transactions: '/app/movimientos',
  cards: '/app/tarjetas',
  transfers: '/app/transferencias',
};

export const bankCategories: BankCategory[] = [
  { id: 'income', name: 'Ingresos', hue: 160 },
  { id: 'software', name: 'Software y suscripciones', hue: 258 },
  { id: 'food', name: 'Restauración', hue: 24 },
  { id: 'transport', name: 'Transporte', hue: 205 },
  { id: 'taxes', name: 'Impuestos y gestoría', hue: 44 },
  { id: 'office', name: 'Oficina y material', hue: 330 },
  { id: 'travel', name: 'Viajes', hue: 185 },
  { id: 'leisure', name: 'Ocio', hue: 300 },
];

export const bankAccounts: BankAccount[] = [
  { id: 'a1', name: 'Cuenta principal', iban: 'ES91 2100 0418 4502 0005 1332', balance: 12480.35, kind: 'Corriente' },
  { id: 'a2', name: 'Hucha de ahorro', iban: 'ES12 2100 0418 4502 0005 7741', balance: 8200, kind: 'Ahorro', rate: 2.5 },
  { id: 'a3', name: 'Reserva de impuestos', iban: 'ES54 2100 0418 4502 0005 9028', balance: 3150.6, kind: 'Impuestos' },
];

const tx = (id: string, date: string, merchant: string, category: BankCategoryId, amount: number, status: BankTxStatus = 'Completado', accountId = 'a1'): BankTransaction => ({ id, date, merchant, category, amount, status, accountId });

export const bankTransactions: BankTransaction[] = [
  tx('t01', '2026-11-21', 'Estudio Brisa · factura 2026-114', 'income', 2400),
  tx('t02', '2026-11-21', 'Figma', 'software', -15),
  tx('t03', '2026-11-20', 'Cafetería Lumbre', 'food', -6.8),
  tx('t04', '2026-11-20', 'Cabify', 'transport', -12.4),
  tx('t05', '2026-11-19', 'Gestoría Ríos · cuota mensual', 'taxes', -49, 'Pendiente'),
  tx('t06', '2026-11-18', 'Notion', 'software', -9.5),
  tx('t07', '2026-11-18', 'Papelería Delta', 'office', -34.2),
  tx('t08', '2026-11-17', 'Vueling · MAD–BCN', 'travel', -128.9),
  tx('t09', '2026-11-16', 'Cliente Nube SL · factura 2026-113', 'income', 1850),
  tx('t10', '2026-11-15', 'Restaurante Casa Pepa', 'food', -42.5),
  tx('t11', '2026-11-14', 'Adobe Creative Cloud', 'software', -64.99),
  tx('t12', '2026-11-13', 'Cinesa', 'leisure', -18),
  tx('t13', '2026-11-12', 'Traspaso a Reserva de impuestos', 'taxes', -420, 'Completado'),
  tx('t14', '2026-11-12', 'Traspaso desde Cuenta principal', 'taxes', 420, 'Completado', 'a3'),
  tx('t15', '2026-11-11', 'Renfe · AVE', 'travel', -86, 'Completado'),
  tx('t16', '2026-11-10', 'Amazon Business', 'office', -219.9),
  tx('t17', '2026-11-09', 'Taller Mecánico Pérez', 'transport', -310, 'Rechazado'),
  tx('t18', '2026-11-08', 'Agencia Tributaria · modelo 303', 'taxes', -812.4),
  tx('t19', '2026-11-07', 'Cliente Costa SL · factura 2026-112', 'income', 3200),
  tx('t20', '2026-11-06', 'Slack', 'software', -7.25),
  tx('t21', '2026-11-05', 'Mercado Central', 'food', -23.1),
  tx('t22', '2026-11-04', 'Spotify', 'leisure', -10.99),
  tx('t23', '2026-11-03', 'Intereses de la hucha', 'income', 17.1, 'Completado', 'a2'),
  tx('t24', '2026-11-02', 'Cowork La Nave · puesto fijo', 'office', -180),
  tx('t25', '2026-11-01', 'Cliente Nube SL · factura 2026-111', 'income', 1500),
];

export const bankCards: BankCard[] = [
  { id: 'c1', name: 'Cobre Metal', kind: 'Física', last4: '4821', expires: '09/29', holder: 'ELENA MARQUÉS', limit: 3000, spent: 1180.4, frozen: false, hue: 22 },
  { id: 'c2', name: 'Suscripciones', kind: 'Virtual', last4: '0357', expires: '03/28', holder: 'ELENA MARQUÉS', limit: 300, spent: 96.7, frozen: false, hue: 160 },
  { id: 'c3', name: 'Viajes', kind: 'Virtual', last4: '9164', expires: '11/27', holder: 'ELENA MARQUÉS', limit: 1500, spent: 214.9, frozen: true, hue: 258 },
];

export const bankPlans: BankPlan[] = [
  { id: 'basic', name: 'Base', tagline: 'Para empezar a facturar', monthly: 0, yearly: 0, features: ['Cuenta con IBAN español', 'Tarjeta virtual gratuita', '5 transferencias SEPA al mes', 'Soporte por chat'] },
  { id: 'pro', name: 'Autónomo', tagline: 'Todo para tu actividad', monthly: 9, yearly: 6, highlighted: true, features: ['Tarjeta física Cobre Metal', 'Transferencias y bizum ilimitados', 'Hucha con 2,5 % TAE', 'Reserva automática de impuestos', 'Facturas y exportación a tu gestoría'] },
  { id: 'team', name: 'Empresa', tagline: 'Para equipos y sociedades', monthly: 29, yearly: 22, features: ['Todo lo de Autónomo', 'Hasta 10 tarjetas de equipo con límites', 'Roles y aprobaciones de pagos', 'Conciliación contable', 'Gestor de cuenta dedicado'] },
];

export const bankFeatures: BankFeature[] = [
  { id: 'f1', title: 'Impuestos sin sorpresas', text: 'Aparta un porcentaje de cada cobro en tu reserva de impuestos y mira siempre cuánto es tuyo de verdad.', icon: 'shield' },
  { id: 'f2', title: 'Cobra en minutos', text: 'IBAN español, transferencias instantáneas y enlaces de cobro que tus clientes pagan con tarjeta.', icon: 'bolt' },
  { id: 'f3', title: 'Tarjetas con control', text: 'Crea tarjetas virtuales por proveedor, fija límites y congélalas desde el móvil en un toque.', icon: 'card' },
  { id: 'f4', title: 'Tu gestoría, conectada', text: 'Exporta movimientos y facturas cada trimestre sin perseguir justificantes.', icon: 'doc' },
  { id: 'f5', title: 'Ahorro que rinde', text: 'Una hucha con interés diario y sin permanencia para el dinero que no vas a usar este mes.', icon: 'chart' },
];

export const bankFaqs: BankFaq[] = [
  { q: '¿Mi dinero está protegido?', a: 'Sí. Los depósitos están cubiertos por el Fondo de Garantía de Depósitos hasta 100.000 € por titular y entidad.' },
  { q: '¿Cuánto tarda abrir la cuenta?', a: 'Unos 6 minutos: datos, verificación de identidad con vídeo selfie y ya puedes recibir tu primer cobro.' },
  { q: '¿Hay comisión de mantenimiento?', a: 'El plan Base es gratuito. Los planes de pago se pueden cancelar cuando quieras, sin permanencia.' },
  { q: '¿Puedo domiciliar recibos y cobrar a clientes de otros países?', a: 'Sí, admitimos adeudos SEPA y cobros en toda la zona euro sin comisión adicional.' },
];

export const bankBeneficiaries: BankBeneficiary[] = [
  { id: 'b1', name: 'Gestoría Ríos', iban: 'ES66 0182 5555 4102 0112 3344' },
  { id: 'b2', name: 'Cowork La Nave', iban: 'ES21 0049 1500 0524 1010 2020' },
  { id: 'b3', name: 'Carlos Ibáñez · colaborador', iban: 'ES07 2038 1175 4560 0013 9981' },
];

export const bankCashflow = {
  /** Dec 2025 → Nov 2026. */
  months: ['D', 'E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N'],
  income: [4120, 3890, 4400, 5250, 4780, 5100, 4610, 3980, 4300, 5640, 6020, 6967],
  expenses: [2310, 2480, 2275, 2940, 2610, 2890, 2450, 2380, 2190, 3120, 3340, 2150],
};

export const bankUser = {
  name: 'Elena Marqués',
  email: 'elena@example.com',
  id: 'C-20418',
  since: 'febrero de 2025',
};

export const bankData = {
  brand: {
    name: 'Cobre',
    legalName: 'Cobre Pagos Digitales S.A.',
    tagline: 'El banco de quien trabaja por cuenta propia',
    phone: '+34 900 100 220',
    email: 'hola@cobre.example',
    address: 'Paseo de la Castellana, 95 · 28046 Madrid',
    hours: 'Soporte 24/7 por chat · teléfono L–V 8:00–22:00',
    legal: 'Entidad de pago supervisada por el Banco de España (demo, no es una entidad real).',
  },
  stats: [
    { value: '120.000', label: 'autónomos y pymes' },
    { value: '2,5 %', label: 'TAE en tu hucha' },
    { value: '6 min', label: 'para abrir la cuenta' },
  ],
  categories: bankCategories,
  accounts: bankAccounts,
  transactions: bankTransactions,
  cards: bankCards,
  plans: bankPlans,
  features: bankFeatures,
  faqs: bankFaqs,
  beneficiaries: bankBeneficiaries,
  cashflow: bankCashflow,
  user: bankUser,
};

const eurFmt = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });
const eurFmt0 = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

/** 1234.5 → "1.234,50 €". */
export function formatBankMoney(amount: number, decimals = true): string {
  return (decimals ? eurFmt : eurFmt0).format(amount);
}

/** "2026-11-21" → "21 nov". */
export function formatBankDate(iso: string): string {
  return new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'short' }).format(new Date(`${iso}T12:00:00`)).replace('.', '');
}

export function getBankCategory(id: string, list: BankCategory[] = bankCategories): BankCategory | undefined {
  return list.find((c) => c.id === id);
}

/** "ES91 2100 0418 4502 0005 1332" → "ES91 •••• 1332". */
export function maskBankIban(iban: string): string {
  const p = iban.split(' ');
  return `${p[0]} •••• ${p[p.length - 1]}`;
}
