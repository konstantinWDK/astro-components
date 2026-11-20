// src/components/lib/templates/food-delivery/data.ts
// Demo data for "BiteFlow" · food delivery storefront + kitchen OS (Madrid).
// Replace with your own POS / API data: every page and component takes these shapes as props.

export type FoodArt = 'burger' | 'pizza' | 'ramen' | 'taco' | 'poke' | 'salad' | 'dessert' | 'drink';
export type FoodTag = 'vegano' | 'picante' | 'sin-gluten' | 'nuevo' | 'top';
export type FoodOrderStatus = 'nuevo' | 'cocina' | 'listo' | 'reparto' | 'entregado' | 'cancelado';
export type FoodStation = 'parrilla' | 'horno' | 'wok' | 'frio';
export type FoodRiderStatus = 'libre' | 'recogiendo' | 'repartiendo' | 'descanso';

export interface FoodCategory {
  id: string;
  label: string;
  art: FoodArt;
}

export interface FoodDish {
  id: string;
  name: string;
  description: string;
  /** Price in EUR. */
  price: number;
  category: string;
  art: FoodArt;
  kcal: number;
  prepMin: number;
  tags: FoodTag[];
  allergens: string[];
  available: boolean;
  station: FoodStation;
}

export interface FoodOrderLine {
  dishId: string;
  qty: number;
}

export interface FoodOrder {
  id: string;
  customer: string;
  phone: string;
  address: string;
  zone: string;
  lines: FoodOrderLine[];
  total: number;
  status: FoodOrderStatus;
  /** HH:MM local time. */
  placedAt: string;
  channel: 'app' | 'web' | 'teléfono';
  payment: 'tarjeta' | 'bizum' | 'efectivo';
  riderId?: string;
  etaMin: number;
  note?: string;
}

export interface FoodTicket {
  id: string;
  orderId: string;
  station: FoodStation;
  items: Array<{ name: string; qty: number; mods?: string[] }>;
  /** Seconds since the ticket was fired. */
  elapsedSec: number;
  /** Target prep time in seconds. */
  targetSec: number;
  allergy?: string;
  channel: 'app' | 'web' | 'teléfono';
  status: 'nuevo' | 'marcha' | 'listo';
}

export interface FoodRider {
  id: string;
  name: string;
  vehicle: 'bici' | 'moto' | 'patinete';
  status: FoodRiderStatus;
  battery: number;
  deliveriesToday: number;
  rating: number;
  /** Position on the 0–100 demo map. */
  x: number;
  y: number;
  orderId?: string;
}

export interface FoodRoutes {
  home: string;
  menu: string;
  tracking: string;
  partner: string;
  signIn: string;
  dashboard: string;
  kds: string;
  menuCms: string;
  orders: string;
  riders: string;
  settings: string;
}

export const foodRoutes: FoodRoutes = {
  home: '/',
  menu: '/carta',
  tracking: '/pedido',
  partner: '/restaurantes',
  signIn: '/acceso',
  dashboard: '/cocina',
  kds: '/cocina/kds',
  menuCms: '/cocina/carta',
  orders: '/cocina/pedidos',
  riders: '/cocina/riders',
  settings: '/cocina/ajustes',
};

export const foodBrand = {
  name: 'BiteFlow',
  kitchen: 'Cocina Lavapiés',
  city: 'Madrid',
  address: 'Calle del Ave María 31, 28012 Madrid',
  phone: '+34 910 555 214',
  email: 'hola@biteflow.es',
  hours: 'Todos los días · 12:30–00:00',
  legalName: 'BiteFlow Kitchens S.L.',
  freeDeliveryFrom: 25,
  deliveryFee: 2.49,
  avgMinutes: 24,
};

export const foodCategories: FoodCategory[] = [
  { id: 'burgers', label: 'Smash burgers', art: 'burger' },
  { id: 'pizzas', label: 'Pizzas', art: 'pizza' },
  { id: 'ramen', label: 'Ramen y wok', art: 'ramen' },
  { id: 'tacos', label: 'Tacos', art: 'taco' },
  { id: 'bowls', label: 'Poke y bowls', art: 'poke' },
  { id: 'postres', label: 'Postres', art: 'dessert' },
  { id: 'bebidas', label: 'Bebidas', art: 'drink' },
];

export const foodDishes: FoodDish[] = [
  { id: 'd01', name: 'Doble Smash Lavapiés', description: 'Dos smash de vaca madurada, cheddar fundido, cebolla a la plancha y salsa de la casa en pan brioche.', price: 12.9, category: 'burgers', art: 'burger', kcal: 920, prepMin: 9, tags: ['top'], allergens: ['gluten', 'lácteos', 'huevo', 'mostaza'], available: true, station: 'parrilla' },
  { id: 'd02', name: 'Smash Chipotle', description: 'Smash simple, jalapeño encurtido, mayo de chipotle ahumado y queso pepper jack.', price: 10.5, category: 'burgers', art: 'burger', kcal: 780, prepMin: 8, tags: ['picante'], allergens: ['gluten', 'lácteos', 'huevo'], available: true, station: 'parrilla' },
  { id: 'd03', name: 'Burger Verde', description: 'Medallón de garbanzo y remolacha, aguacate, rúcula y mayonesa vegana de lima.', price: 11.2, category: 'burgers', art: 'burger', kcal: 640, prepMin: 8, tags: ['vegano', 'nuevo'], allergens: ['gluten', 'sésamo'], available: true, station: 'parrilla' },
  { id: 'd04', name: 'Margarita de horno', description: 'Masa de 48 h, tomate San Marzano, fior di latte y albahaca fresca.', price: 11.5, category: 'pizzas', art: 'pizza', kcal: 810, prepMin: 7, tags: [], allergens: ['gluten', 'lácteos'], available: true, station: 'horno' },
  { id: 'd05', name: 'Diavola Picantona', description: 'Salami picante, nduja, miel de romero y guindilla en aceite.', price: 13.9, category: 'pizzas', art: 'pizza', kcal: 980, prepMin: 7, tags: ['picante', 'top'], allergens: ['gluten', 'lácteos'], available: true, station: 'horno' },
  { id: 'd06', name: 'Tonkotsu 18 h', description: 'Caldo de cerdo de 18 horas, chashu, huevo marinado, cebolleta y nori.', price: 14.5, category: 'ramen', art: 'ramen', kcal: 870, prepMin: 6, tags: ['top'], allergens: ['gluten', 'huevo', 'soja', 'sésamo'], available: true, station: 'wok' },
  { id: 'd07', name: 'Yakisoba de verduras', description: 'Fideos salteados al wok con col, setas shiitake, zanahoria y salsa yakisoba.', price: 11.9, category: 'ramen', art: 'ramen', kcal: 690, prepMin: 6, tags: ['vegano'], allergens: ['gluten', 'soja'], available: false, station: 'wok' },
  { id: 'd08', name: 'Tacos al pastor (3)', description: 'Cerdo adobado al trompo, piña asada, cilantro y cebolla en tortilla de maíz.', price: 10.9, category: 'tacos', art: 'taco', kcal: 620, prepMin: 6, tags: ['sin-gluten', 'top'], allergens: [], available: true, station: 'parrilla' },
  { id: 'd09', name: 'Tacos de coliflor (3)', description: 'Coliflor asada con achiote, pico de gallo, guacamole y salsa macha.', price: 9.9, category: 'tacos', art: 'taco', kcal: 480, prepMin: 6, tags: ['vegano', 'sin-gluten', 'picante'], allergens: ['frutos secos'], available: true, station: 'parrilla' },
  { id: 'd10', name: 'Poke de salmón', description: 'Arroz de sushi, salmón marinado, edamame, mango, pepino y mayo de sriracha.', price: 13.5, category: 'bowls', art: 'poke', kcal: 640, prepMin: 5, tags: ['top'], allergens: ['pescado', 'soja', 'sésamo', 'huevo'], available: true, station: 'frio' },
  { id: 'd11', name: 'Bowl de tofu crujiente', description: 'Tofu al panko, quinoa, col lombarda, zanahoria encurtida y salsa de cacahuete.', price: 11.9, category: 'bowls', art: 'poke', kcal: 590, prepMin: 5, tags: ['vegano', 'nuevo'], allergens: ['gluten', 'soja', 'cacahuete'], available: true, station: 'frio' },
  { id: 'd12', name: 'Ensalada César', description: 'Romana, pollo a la brasa, parmesano, picatostes y aliño César de anchoa.', price: 10.2, category: 'bowls', art: 'salad', kcal: 520, prepMin: 4, tags: [], allergens: ['gluten', 'lácteos', 'huevo', 'pescado'], available: true, station: 'frio' },
  { id: 'd13', name: 'Donut de pistacho', description: 'Brioche frito relleno de crema de pistacho y cubierto de glaseado.', price: 4.9, category: 'postres', art: 'dessert', kcal: 410, prepMin: 1, tags: ['nuevo'], allergens: ['gluten', 'lácteos', 'huevo', 'frutos secos'], available: true, station: 'frio' },
  { id: 'd14', name: 'Tarta de queso tostada', description: 'Ración generosa de tarta de queso al horno con base de galleta.', price: 5.5, category: 'postres', art: 'dessert', kcal: 460, prepMin: 1, tags: ['top'], allergens: ['gluten', 'lácteos', 'huevo'], available: true, station: 'frio' },
  { id: 'd15', name: 'Limonada de hierbabuena', description: 'Limón exprimido, hierbabuena y un toque de jengibre. 500 ml.', price: 3.5, category: 'bebidas', art: 'drink', kcal: 120, prepMin: 1, tags: ['vegano', 'sin-gluten'], allergens: [], available: true, station: 'frio' },
  { id: 'd16', name: 'Kombucha de frutos rojos', description: 'Fermentada en Madrid, sin pasteurizar. 330 ml.', price: 3.9, category: 'bebidas', art: 'drink', kcal: 60, prepMin: 1, tags: ['vegano', 'sin-gluten'], allergens: [], available: true, station: 'frio' },
];

export const foodOrders: FoodOrder[] = [
  { id: 'BF-4821', customer: 'Lucía Martín', phone: '+34 611 204 118', address: 'C/ Argumosa 14, 3.º B', zone: 'Lavapiés', lines: [{ dishId: 'd01', qty: 2 }, { dishId: 'd15', qty: 2 }], total: 32.8, status: 'cocina', placedAt: '21:02', channel: 'app', payment: 'tarjeta', etaMin: 18, note: 'Timbre roto, llamar al llegar' },
  { id: 'BF-4822', customer: 'Diego Álvarez', phone: '+34 622 908 441', address: 'C/ Embajadores 52, 1.º A', zone: 'Embajadores', lines: [{ dishId: 'd06', qty: 1 }, { dishId: 'd13', qty: 1 }], total: 21.89, status: 'nuevo', placedAt: '21:05', channel: 'web', payment: 'bizum', etaMin: 26 },
  { id: 'BF-4819', customer: 'Aitana Ruiz', phone: '+34 633 112 870', address: 'C/ Santa Isabel 9, 4.º', zone: 'Atocha', lines: [{ dishId: 'd10', qty: 2 }, { dishId: 'd16', qty: 2 }], total: 34.8, status: 'reparto', placedAt: '20:48', channel: 'app', payment: 'tarjeta', riderId: 'r02', etaMin: 6 },
  { id: 'BF-4818', customer: 'Marcos Gil', phone: '+34 644 551 023', address: 'Plaza de Tirso de Molina 3', zone: 'Sol', lines: [{ dishId: 'd05', qty: 1 }, { dishId: 'd04', qty: 1 }], total: 27.89, status: 'listo', placedAt: '20:51', channel: 'teléfono', payment: 'efectivo', etaMin: 12 },
  { id: 'BF-4817', customer: 'Nerea Campos', phone: '+34 655 330 912', address: 'C/ Mesón de Paredes 71', zone: 'Lavapiés', lines: [{ dishId: 'd08', qty: 2 }, { dishId: 'd09', qty: 1 }], total: 31.7, status: 'reparto', placedAt: '20:44', channel: 'app', payment: 'tarjeta', riderId: 'r04', etaMin: 3 },
  { id: 'BF-4815', customer: 'Javier Soto', phone: '+34 666 801 274', address: 'C/ Atocha 88, 2.º D', zone: 'Atocha', lines: [{ dishId: 'd02', qty: 1 }, { dishId: 'd14', qty: 1 }], total: 18.49, status: 'entregado', placedAt: '20:21', channel: 'web', payment: 'bizum', riderId: 'r01', etaMin: 0 },
  { id: 'BF-4814', customer: 'Carmen Vidal', phone: '+34 677 193 055', address: 'Ronda de Valencia 6', zone: 'Embajadores', lines: [{ dishId: 'd11', qty: 1 }, { dishId: 'd12', qty: 1 }], total: 24.59, status: 'entregado', placedAt: '20:12', channel: 'app', payment: 'tarjeta', riderId: 'r03', etaMin: 0 },
  { id: 'BF-4813', customer: 'Óscar Prieto', phone: '+34 688 420 667', address: 'C/ Valencia 21, bajo', zone: 'Lavapiés', lines: [{ dishId: 'd03', qty: 2 }], total: 24.89, status: 'cancelado', placedAt: '20:05', channel: 'app', payment: 'tarjeta', etaMin: 0, note: 'Cliente canceló: dirección fuera de zona' },
  { id: 'BF-4812', customer: 'Irene Lozano', phone: '+34 699 017 348', address: 'C/ Lavapiés 40, 3.º', zone: 'Lavapiés', lines: [{ dishId: 'd06', qty: 2 }, { dishId: 'd15', qty: 1 }], total: 32.5, status: 'entregado', placedAt: '19:58', channel: 'teléfono', payment: 'efectivo', riderId: 'r02', etaMin: 0 },
];

export const foodTickets: FoodTicket[] = [
  { id: 't1', orderId: 'BF-4822', station: 'wok', items: [{ name: 'Tonkotsu 18 h', qty: 1, mods: ['Sin cebolleta', 'Huevo extra'] }, { name: 'Donut de pistacho', qty: 1 }], elapsedSec: 45, targetSec: 600, channel: 'web', status: 'nuevo' },
  { id: 't2', orderId: 'BF-4821', station: 'parrilla', items: [{ name: 'Doble Smash Lavapiés', qty: 2, mods: ['Punto: al punto', 'Sin pepinillo'] }, { name: 'Limonada de hierbabuena', qty: 2 }], elapsedSec: 312, targetSec: 540, channel: 'app', status: 'marcha', allergy: 'Alergia a la mostaza' },
  { id: 't3', orderId: 'BF-4823', station: 'horno', items: [{ name: 'Diavola Picantona', qty: 2 }, { name: 'Tarta de queso tostada', qty: 1 }], elapsedSec: 505, targetSec: 480, channel: 'app', status: 'marcha' },
  { id: 't4', orderId: 'BF-4824', station: 'frio', items: [{ name: 'Poke de salmón', qty: 1, mods: ['Sin sésamo'] }, { name: 'Bowl de tofu crujiente', qty: 1 }], elapsedSec: 150, targetSec: 360, channel: 'teléfono', status: 'marcha', allergy: 'Alergia al sésamo' },
  { id: 't5', orderId: 'BF-4825', station: 'parrilla', items: [{ name: 'Tacos al pastor (3)', qty: 2 }, { name: 'Tacos de coliflor (3)', qty: 1 }], elapsedSec: 20, targetSec: 420, channel: 'app', status: 'nuevo' },
  { id: 't6', orderId: 'BF-4818', station: 'horno', items: [{ name: 'Margarita de horno', qty: 1 }, { name: 'Diavola Picantona', qty: 1 }], elapsedSec: 470, targetSec: 480, channel: 'teléfono', status: 'listo' },
];

export const foodRiders: FoodRider[] = [
  { id: 'r01', name: 'Leo Fernández', vehicle: 'bici', status: 'libre', battery: 82, deliveriesToday: 11, rating: 4.9, x: 46, y: 54 },
  { id: 'r02', name: 'Samira Benali', vehicle: 'moto', status: 'repartiendo', battery: 64, deliveriesToday: 14, rating: 4.8, x: 70, y: 66, orderId: 'BF-4819' },
  { id: 'r03', name: 'Pablo Ortega', vehicle: 'patinete', status: 'recogiendo', battery: 38, deliveriesToday: 8, rating: 4.7, x: 40, y: 40 },
  { id: 'r04', name: 'Inés Navarro', vehicle: 'bici', status: 'repartiendo', battery: 91, deliveriesToday: 12, rating: 5, x: 28, y: 72, orderId: 'BF-4817' },
  { id: 'r05', name: 'Tomás Rey', vehicle: 'moto', status: 'descanso', battery: 55, deliveriesToday: 9, rating: 4.6, x: 58, y: 30 },
];

/** Orders per hour today (12 h → 23 h) and the same weekday last week. */
export const foodHourly = {
  hours: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
  today: [18, 46, 61, 34, 12, 9, 15, 38, 72, 88, 54, 0],
  lastWeek: [15, 40, 58, 30, 14, 11, 17, 35, 64, 79, 60, 31],
};

export const foodStats = {
  revenueToday: 3184.6,
  ordersToday: 211,
  avgTicket: 15.09,
  avgDeliveryMin: 23,
  onTimePct: 94,
  rating: 4.8,
};

/** Demo delivery for the tracking page. Map coordinates use a 0–100 grid. */
export const foodTracking = {
  orderId: 'BF-4821',
  customer: 'Lucía',
  address: 'C/ Argumosa 14, 3.º B',
  placedAt: '21:02',
  etaMin: 18,
  rider: { name: 'Samira', vehicle: 'moto' as const, rating: 4.8, phone: '+34 600 000 000' },
  lines: [{ dishId: 'd01', qty: 2 }, { dishId: 'd15', qty: 2 }],
  kitchen: { x: 18, y: 26, label: 'Cocina Lavapiés' },
  home: { x: 82, y: 78, label: 'Tu casa' },
  /** Route waypoints (street corners) from the kitchen to the door. */
  route: [
    [18, 26], [18, 44], [42, 44], [42, 60], [64, 60], [64, 78], [82, 78],
  ] as Array<[number, number]>,
};

export const foodDeliveryData = {
  brand: foodBrand,
  categories: foodCategories,
  dishes: foodDishes,
  orders: foodOrders,
  tickets: foodTickets,
  riders: foodRiders,
  hourly: foodHourly,
  stats: foodStats,
  tracking: foodTracking,
};

export const formatEur = (n: number) =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(n);
