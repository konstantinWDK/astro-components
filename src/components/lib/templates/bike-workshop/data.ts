// src/components/lib/templates/bike-workshop/data.ts
// Demo data and types for "Biela" · custom bicycle workshop template.

export interface BielaRoutes {
  home: string;
  configurator: string;
  builds: string;
  workshop: string;
  fit: string;
  visit: string;
}

export type BielaType = 'gravel' | 'ruta' | 'ciudad' | 'pista';
export type BielaMaterial = 'acero' | 'titanio' | 'carbono';

export interface BielaTypeInfo {
  id: BielaType;
  name: string;
  tagline: string;
  description: string;
  price: number;
  /** Typical wheel and tyre note shown under the choice. */
  note: string;
}

export interface BielaMaterialInfo {
  id: BielaMaterial;
  name: string;
  tagline: string;
  description: string;
  price: number;
  weeks: number;
  /** Frame weight in kg (size 54). */
  weight: number;
  /** Tube thickness used by the drawing. */
  tube: number;
  feel: string;
  life: string;
  repair: string;
}

export interface BielaGroupset {
  id: string;
  name: string;
  description: string;
  price: number;
  types: BielaType[];
}

export interface BielaWheels {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface BielaColour {
  id: string;
  name: string;
  hex: string;
  /** Colour of the bar tape and details that goes well with it. */
  accent: string;
}

export interface BielaExtra {
  id: 'fenders' | 'rack' | 'light' | 'leather';
  name: string;
  description: string;
  price: number;
  /** True when the extra is visible in the drawing. */
  drawn: boolean;
}

export interface BielaConfig {
  type: BielaType;
  material: BielaMaterial;
  groupset: string;
  wheels: string;
  colour: string;
  extras: string[];
}

export interface BielaBuild extends BielaConfig {
  slug: string;
  name: string;
  year: number;
  /** One sentence about who it was built for. */
  story: string;
  rider: string;
  /** Hours the build took in the workshop. */
  hours: number;
}

export interface BielaMonth {
  id: string;
  label: string;
  capacity: number;
  taken: number;
  note: string;
}

export interface BielaStep {
  id: string;
  title: string;
  weeks: string;
  summary: string;
  detail: string;
}

export const bielaRoutes: BielaRoutes = {
  home: '#',
  configurator: '#configurador',
  builds: '#bicis',
  workshop: '#taller',
  fit: '#ajuste',
  visit: '#visita',
};

export const bielaBrand = {
  name: 'Biela',
  tagline: 'Bicis hechas a la medida de quien las monta',
  address: 'Carrer de la Mestra 9, 46021 València',
  phone: '+34 960 000 000',
  email: 'taller@biela.example',
  /** 0 = Sunday. Opening windows in 24h clock. */
  hours: [
    { days: [2, 3, 4, 5], windows: [['10:00', '14:00'], ['16:00', '20:00']] },
    { days: [6], windows: [['10:00', '14:00']] },
  ],
  hoursLabel: 'Martes a viernes 10–14 h y 16–20 h · Sábado 10–14 h',
};

export const bielaTypes: BielaTypeInfo[] = [
  { id: 'gravel', name: 'Gravel', tagline: 'Asfalto, pista y lo que haya detrás', description: 'Manillar de caída, hueco para neumáticos de hasta 45 mm y geometría estable para jornadas largas.', price: 1900, note: 'Neumáticos de 40 mm, anclajes para portabultos y bidones' },
  { id: 'ruta', name: 'Ruta', tagline: 'Rápida, ligera y de tacto vivo', description: 'Geometría de carrera relajada para que se pueda aguantar cuatro horas sin quejarse.', price: 2100, note: 'Neumáticos de 28 mm, frenos de disco' },
  { id: 'ciudad', name: 'Ciudad', tagline: 'La que quieres usar cada día', description: 'Posición erguida, huecos para guardabarros y portabultos y un cuadro que aguanta bien el candado.', price: 1500, note: 'Neumáticos de 35 mm, cableado interno opcional' },
  { id: 'pista', name: 'Pista', tagline: 'Una marcha, nada que sobre', description: 'Piñón fijo o libre, líneas limpias y una posición baja y comprometida.', price: 1300, note: 'Neumáticos de 25 mm, sin frenos de serie en cuadro' },
];

export const bielaMaterials: BielaMaterialInfo[] = [
  { id: 'acero', name: 'Acero', tagline: 'El tacto de siempre', description: 'Tubos de acero al cromo-molibdeno soldados con aportación de plata. Flexa con gracia y se arregla en cualquier taller.', price: 0, weeks: 8, weight: 2.1, tube: 7, feel: 'Suave y amortiguado', life: 'Décadas con un poco de cuidado', repair: 'Se suelda o se repara casi siempre' },
  { id: 'titanio', name: 'Titanio', tagline: 'Para toda la vida', description: 'Tubos de titanio 3Al-2.5V soldados bajo argón. No se oxida ni necesita pintura, solo un acabado satinado.', price: 2300, weeks: 10, weight: 1.6, tube: 8, feel: 'Vivo pero tranquilo', life: 'Para siempre, sin corrosión', repair: 'Reparable con soldadura especializada' },
  { id: 'carbono', name: 'Carbono', tagline: 'Rigidez donde hace falta', description: 'Tubos de carbono unidireccional unidos con manguitos laminados a mano, con el trazado de fibras pensado para tu peso.', price: 1700, weeks: 12, weight: 1.2, tube: 11, feel: 'Directo y ligero', life: 'Muchos años, sensible a golpes fuertes', repair: 'Reparable por laminado, no siempre' },
];

export const bielaGroupsets: BielaGroupset[] = [
  { id: 'mec11', name: 'Mecánico 11 velocidades', description: 'Cambio por cable, fiable y fácil de ajustar en cualquier parte.', price: 650, types: ['gravel', 'ruta', 'ciudad'] },
  { id: 'elec12', name: 'Electrónico 12 velocidades', description: 'Cambios instantáneos y sin ajustes, con batería que dura meses.', price: 1900, types: ['gravel', 'ruta'] },
  { id: 'mono12', name: 'Monoplato 1×12', description: 'Un solo plato, menos que mantener y rango suficiente para el gravel.', price: 1100, types: ['gravel'] },
  { id: 'buje3', name: 'Buje de 3 velocidades', description: 'Cambio dentro del buje: se puede cambiar parado y casi no pide mantenimiento.', price: 420, types: ['ciudad'] },
  { id: 'fijo', name: 'Piñón fijo o libre', description: 'Una marcha, cadena a la vista y nada que se desajuste.', price: 240, types: ['pista', 'ciudad'] },
];

export const bielaWheelSets: BielaWheels[] = [
  { id: 'alu', name: 'Aluminio de serie', description: 'Llantas de aluminio, resistentes y fáciles de sustituir.', price: 380 },
  { id: 'hand', name: 'Hechas a mano', description: 'Radios y buje elegidos para tu peso, centradas en el taller.', price: 720 },
  { id: 'carbon', name: 'Carbono', description: 'Llantas de perfil medio, más ligeras y rígidas.', price: 1450 },
];

export const bielaColours: BielaColour[] = [
  { id: 'ingles', name: 'Verde inglés', hex: '#1f5b3d', accent: '#e8d9a8' },
  { id: 'celeste', name: 'Celeste', hex: '#6fcfd3', accent: '#f4efe0' },
  { id: 'crema', name: 'Crema', hex: '#efe4c4', accent: '#a23b2c' },
  { id: 'bermellon', name: 'Bermellón', hex: '#d9412b', accent: '#14120e' },
  { id: 'tinta', name: 'Azul tinta', hex: '#1f3a6b', accent: '#e9c16a' },
  { id: 'mostaza', name: 'Mostaza', hex: '#d9a21d', accent: '#1b2b21' },
  { id: 'rosa', name: 'Rosa viejo', hex: '#c98a94', accent: '#2f3a30' },
  { id: 'mate', name: 'Negro mate', hex: '#262826', accent: '#c9c2ae' },
  { id: 'salvia', name: 'Salvia', hex: '#8aa38a', accent: '#2a3a2c' },
  { id: 'visto', name: 'Acabado visto', hex: '#a3a9a4', accent: '#2b2e2b' },
];

export const bielaExtras: BielaExtra[] = [
  { id: 'fenders', name: 'Guardabarros', description: 'De aluminio pulido, con ajuste a medida de las ruedas.', price: 90, drawn: true },
  { id: 'rack', name: 'Portabultos trasero', description: 'Soldado al cuadro, aguanta hasta 25 kg.', price: 85, drawn: true },
  { id: 'light', name: 'Luz con dinamo de buje', description: 'Faro delantero que no depende de pilas.', price: 160, drawn: true },
  { id: 'leather', name: 'Sillín y puños de cuero', description: 'Cuero curtido al vegetal que se ablanda con el uso.', price: 140, drawn: true },
];

export const bielaBuilds: BielaBuild[] = [
  { slug: 'marta', name: 'La de Marta', year: 2026, type: 'gravel', material: 'acero', groupset: 'mono12', wheels: 'hand', colour: 'ingles', extras: ['rack', 'leather'], rider: 'Marta, 1,62 m', story: 'Para ir al trabajo entre semana y cruzar los Pirineos en agosto con alforjas.', hours: 94 },
  { slug: 'iker', name: 'La de Iker', year: 2026, type: 'ruta', material: 'titanio', groupset: 'elec12', wheels: 'carbon', colour: 'mate', extras: [], rider: 'Iker, 1,88 m', story: 'Un titanio sin pintar que acompañe a un ciclista de club durante veinte años.', hours: 88 },
  { slug: 'nuria', name: 'La de Nuria', year: 2026, type: 'ciudad', material: 'acero', groupset: 'buje3', wheels: 'hand', colour: 'crema', extras: ['fenders', 'rack', 'light'], rider: 'Nuria, 1,70 m', story: 'Una bici de reparto de flores con cesta, luz propia y sin un solo cable colgando.', hours: 76 },
  { slug: 'pau', name: 'La de Pau', year: 2025, type: 'pista', material: 'acero', groupset: 'fijo', wheels: 'alu', colour: 'bermellon', extras: [], rider: 'Pau, 1,78 m', story: 'Un cuadro corto y nervioso para el velódromo de los jueves.', hours: 62 },
  { slug: 'lola', name: 'La de Lola', year: 2025, type: 'gravel', material: 'carbono', groupset: 'elec12', wheels: 'carbon', colour: 'celeste', extras: [], rider: 'Lola, 1,66 m', story: 'Carbono laminado para quien lleva cinco años pidiendo "una que pese menos".', hours: 110 },
  { slug: 'tomas', name: 'La de Tomás', year: 2025, type: 'ciudad', material: 'titanio', groupset: 'buje3', wheels: 'hand', colour: 'mate', extras: ['fenders', 'light'], rider: 'Tomás, 1,84 m', story: 'Una bici de diario que no se pinta, no se oxida y no vuelve a comprarse.', hours: 82 },
  { slug: 'ines', name: 'La de Inés', year: 2025, type: 'ruta', material: 'acero', groupset: 'mec11', wheels: 'hand', colour: 'tinta', extras: ['leather'], rider: 'Inés, 1,58 m', story: 'Geometría pequeña de verdad, con ruedas de 650B para que los pies lleguen al suelo.', hours: 90 },
  { slug: 'oriol', name: 'La de Oriol', year: 2024, type: 'gravel', material: 'titanio', groupset: 'mec11', wheels: 'hand', colour: 'mostaza', extras: ['rack'], rider: 'Oriol, 1,92 m', story: 'Con tubos largos y un portabultos que ya ha dado dos veces la vuelta a Islandia.', hours: 104 },
  { slug: 'sara', name: 'La de Sara', year: 2024, type: 'ciudad', material: 'acero', groupset: 'mec11', wheels: 'alu', colour: 'rosa', extras: ['fenders', 'leather'], rider: 'Sara, 1,68 m', story: 'Para ir a clase todos los días con paraguas y sin dejarse el peinado.', hours: 70 },
];

export const bielaMonths: BielaMonth[] = [
  { id: '2027-02', label: 'Febrero 2027', capacity: 6, taken: 6, note: 'Completo. Lista de espera abierta.' },
  { id: '2027-03', label: 'Marzo 2027', capacity: 6, taken: 5, note: 'Queda una plaza.' },
  { id: '2027-04', label: 'Abril 2027', capacity: 6, taken: 3, note: 'Con margen para elegir.' },
  { id: '2027-05', label: 'Mayo 2027', capacity: 6, taken: 2, note: 'Buen momento para empezar el cuadro de verano.' },
  { id: '2027-06', label: 'Junio 2027', capacity: 6, taken: 1, note: 'Casi todo libre.' },
  { id: '2027-07', label: 'Julio 2027', capacity: 6, taken: 0, note: 'Todo libre. El taller cierra la primera quincena de agosto.' },
];

export const bielaSteps: BielaStep[] = [
  { id: 'charla', title: 'Una charla sin prisa', weeks: 'Semana 0', summary: 'Hablamos de cómo montas, por dónde y qué te molesta de la bici que tienes.', detail: 'Una hora en el taller, con café. Traes tu bici actual si quieres. Apuntamos distancias, terrenos, cargas y lo que nunca has dicho en voz alta, como que te duele la muñeca izquierda.' },
  { id: 'medidas', title: 'Medidas y ajuste', weeks: 'Semana 1', summary: 'Subes a una bici de ajuste y movemos hasta que no sobre nada.', detail: 'Cuarenta y cinco minutos sobre un banco regulable con cámara. Sacamos altura de sillín, alcance, caída del manillar y longitud de bielas, y los guardamos en tu ficha para siempre.' },
  { id: 'diseno', title: 'Diseño del cuadro', weeks: 'Semanas 1-2', summary: 'Dibujamos tu geometría a mano y te la enseñamos antes de cortar nada.', detail: 'Te mandamos el plano del cuadro con todas las cotas. Cambiamos lo que haga falta hasta que lo apruebes. Hasta aquí puedes echarte atrás y te devolvemos la reserva.' },
  { id: 'cuadro', title: 'Cuadro y horquilla', weeks: 'Semanas 2-8', summary: 'Cortamos, ajustamos y soldamos o laminamos tu cuadro.', detail: 'Cada tubo se corta y se limpia a mano. Soldamos con aportación de plata en el acero, bajo argón en el titanio y laminamos los manguitos en el carbono. Lo alineamos en un banco y comprobamos la rectitud con el reloj comparador.' },
  { id: 'acabado', title: 'Pintura o acabado', weeks: 'Semanas 8-10', summary: 'Pintura en cabina, a tu color, o satinado si es titanio.', detail: 'Lijado, imprimación, tres capas de color y dos de barniz. Las calcomanías las dibuja el taller y se aplican a mano. El titanio se pule con grano fino y no se pinta.' },
  { id: 'montaje', title: 'Montaje y prueba', weeks: 'Semanas 10-12', summary: 'Montamos todo, lo rodamos y lo entregamos con un último ajuste.', detail: 'Montaje completo, rodaje de 100 km por el taller y ajuste final contigo presente. Te entregamos la bici con su ficha de medidas y una primera revisión gratuita a los seis meses.' },
];

export const bielaData = {
  brand: bielaBrand,
  types: bielaTypes,
  materials: bielaMaterials,
  groupsets: bielaGroupsets,
  wheels: bielaWheelSets,
  colours: bielaColours,
  extras: bielaExtras,
  builds: bielaBuilds,
  months: bielaMonths,
  steps: bielaSteps,
};

export function bielaPrice(cfg: BielaConfig): number {
  const type = bielaTypes.find((t) => t.id === cfg.type);
  const mat = bielaMaterials.find((m) => m.id === cfg.material);
  const grp = bielaGroupsets.find((g) => g.id === cfg.groupset);
  const whl = bielaWheelSets.find((w) => w.id === cfg.wheels);
  const extras = bielaExtras.filter((e) => cfg.extras.includes(e.id)).reduce((sum, e) => sum + e.price, 0);
  return (type?.price ?? 0) + (mat?.price ?? 0) + (grp?.price ?? 0) + (whl?.price ?? 0) + extras;
}

export function bielaWeeks(cfg: BielaConfig): number {
  return bielaMaterials.find((m) => m.id === cfg.material)?.weeks ?? 10;
}

/** Integer with a dot as thousands separator ('1.300'), also for four digits. */
export function bielaNum(n: number): string {
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function bielaEuro(n: number): string {
  return `${bielaNum(n)} €`;
}
