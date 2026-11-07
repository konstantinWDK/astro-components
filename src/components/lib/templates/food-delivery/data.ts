// src/components/lib/templates/food-delivery/data.ts
// Domain entities, mock menu data, kitchen tickets and routing helpers for BiteFlow · Food Delivery & Kitchen OS.

export interface FoodModifierOption {
  id: string;
  name: string;
  priceDelta: number;
}

export interface FoodModifierGroup {
  id: string;
  title: string;
  required: boolean;
  minSelect?: number;
  maxSelect?: number;
  options: FoodModifierOption[];
}

export interface FoodDish {
  id: string;
  name: string;
  category: 'burgers' | 'pizza' | 'bowls' | 'sides' | 'drinks' | 'desserts';
  price: number;
  description: string;
  calories: number;
  dietary: ('vegan' | 'vegetarian' | 'gluten_free' | 'spicy' | 'halal')[];
  allergens: string[];
  stockStatus: 'in_stock' | 'low_stock' | 'sold_out';
  prepTimeMin: number;
  popular?: boolean;
  modifiers?: FoodModifierGroup[];
}

export interface FoodOrderItem {
  dishId: string;
  name: string;
  qty: number;
  unitPrice: number;
  selectedModifiers?: string[];
}

export interface FoodOrder {
  id: string;
  reference: string;
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  floorDoor: string;
  orderTime: string;
  items: FoodOrderItem[];
  subtotal: number;
  deliveryFee: number;
  tip: number;
  total: number;
  paymentMethod: 'card' | 'apple_pay' | 'cash';
  status: 'new' | 'kitchen_prep' | 'ready_for_pickup' | 'out_for_delivery' | 'delivered';
  courier?: {
    name: string;
    phone: string;
    vehicle: 'ebike' | 'scooter';
    etaMin: number;
  };
  notes?: string;
}

export interface KitchenTicket {
  id: string;
  orderRef: string;
  channel: 'delivery' | 'takeaway';
  placedTime: string;
  elapsedMin: number;
  targetMin: number;
  status: 'new' | 'prepping' | 'ready';
  urgent?: boolean;
  items: {
    name: string;
    qty: number;
    modifiers?: string[];
    allergies?: string[];
  }[];
}

export interface FoodRider {
  id: string;
  name: string;
  vehicle: 'ebike' | 'scooter';
  phone: string;
  status: 'delivering' | 'waiting_pickup' | 'idle' | 'offline';
  activeOrderRef?: string;
  completedToday: number;
  rating: number;
}

export const foodCategories = [
  { id: 'all', label: 'Full Menu', icon: 'utensils' },
  { id: 'burgers', label: 'Smash Burgers', icon: 'flame' },
  { id: 'pizza', label: 'Artisan Pizza', icon: 'utensils' },
  { id: 'bowls', label: 'Healthy Bowls', icon: 'utensils' },
  { id: 'sides', label: 'Sides & Fries', icon: 'package' },
  { id: 'drinks', label: 'Drinks & Craft', icon: 'shoppingBag' },
  { id: 'desserts', label: 'Desserts', icon: 'sparkles' },
];

export const foodDishes: FoodDish[] = [
  {
    id: 'dish-01',
    name: 'Truffle Smash Double Cheeseburger',
    category: 'burgers',
    price: 13.90,
    description: 'Two 100g dry-aged beef smash patties, aged cheddar, black truffle aioli, caramelized shallots in a toasted potato brioche bun.',
    calories: 780,
    dietary: ['halal'],
    allergens: ['gluten', 'dairy', 'eggs'],
    stockStatus: 'in_stock',
    prepTimeMin: 10,
    popular: true,
    modifiers: [
      {
        id: 'doneness',
        title: 'Burger Patty Style',
        required: true,
        options: [
          { id: 'opt-crisp-edges', name: 'Ultra-Crispy Lacy Edges', priceDelta: 0 },
          { id: 'opt-juicy', name: 'Juicy Medium Smash', priceDelta: 0 },
        ],
      },
      {
        id: 'extras',
        title: 'Add Extra Toppings',
        required: false,
        maxSelect: 3,
        options: [
          { id: 'extra-bacon', name: 'Smoked Crispy Bacon', priceDelta: 1.80 },
          { id: 'extra-cheese', name: 'Extra Melted Cheddar Slice', priceDelta: 1.20 },
          { id: 'extra-jalapeno', name: 'Pickled Jalapeños', priceDelta: 0.80 },
        ],
      },
    ],
  },
  {
    id: 'dish-02',
    name: 'Spicy Hot Honey Fried Chicken Sando',
    category: 'burgers',
    price: 12.50,
    description: 'Crispy buttermilk chicken thigh tossed in habanero hot honey glaze, crunchy cabbage slaw, dill pickles on toasted brioche.',
    calories: 820,
    dietary: ['spicy'],
    allergens: ['gluten', 'dairy', 'eggs'],
    stockStatus: 'in_stock',
    prepTimeMin: 12,
    popular: true,
  },
  {
    id: 'dish-03',
    name: 'Burrata & San Marzano Margherita Pizza',
    category: 'pizza',
    price: 14.50,
    description: '48h slow-fermented Neapolitan dough, San Marzano D.O.P. tomato sauce, fresh creamy burrata heart, basil oil, Maldon sea salt.',
    calories: 890,
    dietary: ['vegetarian'],
    allergens: ['gluten', 'dairy'],
    stockStatus: 'in_stock',
    prepTimeMin: 8,
    popular: true,
  },
  {
    id: 'dish-04',
    name: 'Diavola Nduja & Spianata Calabrese',
    category: 'pizza',
    price: 15.00,
    description: 'Fiery Calabrian nduja sausage, crispy spicy salami, fior di latte mozzarella, hot chili flakes, fresh oregano.',
    calories: 960,
    dietary: ['spicy'],
    allergens: ['gluten', 'dairy'],
    stockStatus: 'in_stock',
    prepTimeMin: 9,
  },
  {
    id: 'dish-05',
    name: 'Pacific Salmon & Edamame Poke Bowl',
    category: 'bowls',
    price: 13.80,
    description: 'Fresh sushi-grade Atlantic salmon cubes, seasoned sushi rice, creamy avocado, edamame, wakame, crispy shallots, ponzu-sesame dressing.',
    calories: 610,
    dietary: ['gluten_free', 'halal'],
    allergens: ['fish', 'sesame', 'soy'],
    stockStatus: 'in_stock',
    prepTimeMin: 7,
    popular: true,
  },
  {
    id: 'dish-06',
    name: 'Roasted Sweet Potato & Miso Tofu Bowl',
    category: 'bowls',
    price: 11.90,
    description: 'Glazed crispy organic tofu, charred sweet potato wedges, tri-color quinoa, pickled ginger, tender baby spinach, ginger-tahini crema.',
    calories: 520,
    dietary: ['vegan', 'gluten_free'],
    allergens: ['sesame', 'soy'],
    stockStatus: 'in_stock',
    prepTimeMin: 7,
  },
  {
    id: 'dish-07',
    name: 'Parmesan & Rosemary Crinkle Cut Fries',
    category: 'sides',
    price: 4.80,
    description: 'Hand-cut skin-on Yukon gold potatoes fried golden, tossed with fresh rosemary, sea salt, aged grated Grana Padano and garlic aioli dip.',
    calories: 390,
    dietary: ['vegetarian'],
    allergens: ['dairy', 'eggs'],
    stockStatus: 'in_stock',
    prepTimeMin: 5,
  },
  {
    id: 'dish-08',
    name: 'Smoked Jalapeño Mac & Cheese Bites (6 pcs)',
    category: 'sides',
    price: 6.20,
    description: 'Creamy three-cheese macaroni croquettes infused with charred jalapeños, panko crust, served with sriracha mayo.',
    calories: 440,
    dietary: ['vegetarian', 'spicy'],
    allergens: ['gluten', 'dairy', 'eggs'],
    stockStatus: 'low_stock',
    prepTimeMin: 6,
  },
  {
    id: 'dish-09',
    name: 'Cold-Pressed Dragonfruit Citrus Refresher (400ml)',
    category: 'drinks',
    price: 3.90,
    description: 'Organic pink dragonfruit, freshly squeezed Valencia oranges, crushed mint and sparkling mineral water. No added sugar.',
    calories: 120,
    dietary: ['vegan', 'gluten_free'],
    allergens: [],
    stockStatus: 'in_stock',
    prepTimeMin: 3,
  },
  {
    id: 'dish-10',
    name: 'Warm Pistachio Lava Cookie & Vanilla Gelato',
    category: 'desserts',
    price: 6.50,
    description: 'Oven-baked chocolate chip cookie with molten Bronte pistachio cream core, served with a separate cold tub of artisan Madagascar vanilla gelato.',
    calories: 540,
    dietary: ['vegetarian'],
    allergens: ['gluten', 'dairy', 'eggs', 'nuts'],
    stockStatus: 'in_stock',
    prepTimeMin: 5,
    popular: true,
  },
];

export const foodOrders: FoodOrder[] = [
  {
    id: 'ord-01',
    reference: 'BF-4091',
    customerName: 'Mateo Garrido',
    customerPhone: '+34 611 902 334',
    deliveryAddress: 'Calle Fuencarral 84, 2º B, Madrid',
    floorDoor: '2º B · Ring bell Garrido',
    orderTime: '13:42',
    items: [
      { dishId: 'dish-01', name: 'Truffle Smash Double Cheeseburger', qty: 2, unitPrice: 13.90, selectedModifiers: ['Crispy Lacy Edges', 'Extra Bacon'] },
      { dishId: 'dish-07', name: 'Parmesan & Rosemary Crinkle Fries', qty: 1, unitPrice: 4.80 },
      { dishId: 'dish-09', name: 'Dragonfruit Citrus Refresher', qty: 2, unitPrice: 3.90 },
    ],
    subtotal: 42.20,
    deliveryFee: 1.90,
    tip: 2.00,
    total: 46.10,
    paymentMethod: 'apple_pay',
    status: 'out_for_delivery',
    courier: {
      name: 'Iker Salcedo',
      phone: '+34 670 119 203',
      vehicle: 'ebike',
      etaMin: 8,
    },
    notes: 'Please leave in hands of receptionist if not answering.',
  },
  {
    id: 'ord-02',
    reference: 'BF-4092',
    customerName: 'Lucía Santamaría',
    customerPhone: '+34 645 881 229',
    deliveryAddress: 'Paseo de la Castellana 120, 7º A, Madrid',
    floorDoor: '7º A (Elevator available)',
    orderTime: '13:48',
    items: [
      { dishId: 'dish-03', name: 'Burrata & San Marzano Margherita', qty: 1, unitPrice: 14.50 },
      { dishId: 'dish-04', name: 'Diavola Nduja & Spianata Calabrese', qty: 1, unitPrice: 15.00 },
      { dishId: 'dish-10', name: 'Warm Pistachio Lava Cookie', qty: 1, unitPrice: 6.50 },
    ],
    subtotal: 36.00,
    deliveryFee: 2.50,
    tip: 3.00,
    total: 41.50,
    paymentMethod: 'card',
    status: 'kitchen_prep',
    courier: {
      name: 'David Rivas',
      phone: '+34 633 440 918',
      vehicle: 'scooter',
      etaMin: 18,
    },
    notes: 'Gluten sensitivity for guest; please bake margherita in clean section.',
  },
  {
    id: 'ord-03',
    reference: 'BF-4093',
    customerName: 'Ignacio Montero',
    customerPhone: '+34 689 310 442',
    deliveryAddress: 'Calle Goya 33, Bajo Dcha, Madrid',
    floorDoor: 'Ground Floor, direct street door',
    orderTime: '13:54',
    items: [
      { dishId: 'dish-05', name: 'Pacific Salmon & Edamame Poke Bowl', qty: 2, unitPrice: 13.80 },
      { dishId: 'dish-08', name: 'Jalapeño Mac & Cheese Bites', qty: 1, unitPrice: 6.20 },
    ],
    subtotal: 33.80,
    deliveryFee: 1.90,
    tip: 1.50,
    total: 37.20,
    paymentMethod: 'card',
    status: 'new',
    notes: 'No cutlery needed, eco packaging please.',
  },
  {
    id: 'ord-04',
    reference: 'BF-4094',
    customerName: 'Valeria Cisneros',
    customerPhone: '+34 622 710 885',
    deliveryAddress: 'Calle Velázquez 62, 4º Ext, Madrid',
    floorDoor: '4º Ext',
    orderTime: '13:20',
    items: [
      { dishId: 'dish-02', name: 'Spicy Hot Honey Fried Chicken Sando', qty: 1, unitPrice: 12.50 },
      { dishId: 'dish-07', name: 'Parmesan & Rosemary Crinkle Fries', qty: 1, unitPrice: 4.80 },
    ],
    subtotal: 17.30,
    deliveryFee: 1.90,
    tip: 2.00,
    total: 21.20,
    paymentMethod: 'apple_pay',
    status: 'delivered',
    courier: {
      name: 'Iker Salcedo',
      phone: '+34 670 119 203',
      vehicle: 'ebike',
      etaMin: 0,
    },
    notes: 'Delivered in 22 min total.',
  },
];

export const kitchenTickets: KitchenTicket[] = [
  {
    id: 'kds-01',
    orderRef: 'BF-4092',
    channel: 'delivery',
    placedTime: '13:48',
    elapsedMin: 7,
    targetMin: 15,
    status: 'prepping',
    urgent: false,
    items: [
      { name: 'Burrata Margherita Pizza', qty: 1, modifiers: ['Extra Basil Oil'] },
      { name: 'Diavola Nduja Pizza', qty: 1, modifiers: ['Extra spicy flakes'] },
      { name: 'Pistachio Lava Cookie', qty: 1, allergies: ['Nuts', 'Dairy'] },
    ],
  },
  {
    id: 'kds-02',
    orderRef: 'BF-4093',
    channel: 'delivery',
    placedTime: '13:54',
    elapsedMin: 2,
    targetMin: 12,
    status: 'new',
    urgent: false,
    items: [
      { name: 'Salmon Poke Bowl', qty: 2, modifiers: ['No cilantro', 'Extra ponzu'] },
      { name: 'Mac & Cheese Bites (6 pcs)', qty: 1 },
    ],
  },
  {
    id: 'kds-03',
    orderRef: 'BF-4091',
    channel: 'delivery',
    placedTime: '13:42',
    elapsedMin: 14,
    targetMin: 12,
    status: 'ready',
    urgent: true,
    items: [
      { name: 'Truffle Smash Double', qty: 2, modifiers: ['Crispy Edges', '+Bacon'] },
      { name: 'Parmesan Crinkle Fries', qty: 1 },
      { name: 'Dragonfruit Refresher', qty: 2 },
    ],
  },
];

export const foodRiders: FoodRider[] = [
  {
    id: 'rider-01',
    name: 'Iker Salcedo',
    vehicle: 'ebike',
    phone: '+34 670 119 203',
    status: 'delivering',
    activeOrderRef: 'BF-4091',
    completedToday: 11,
    rating: 4.95,
  },
  {
    id: 'rider-02',
    name: 'David Rivas',
    vehicle: 'scooter',
    phone: '+34 633 440 918',
    status: 'waiting_pickup',
    activeOrderRef: 'BF-4092',
    completedToday: 9,
    rating: 4.88,
  },
  {
    id: 'rider-03',
    name: 'Sofia Benitez',
    vehicle: 'ebike',
    phone: '+34 699 228 110',
    status: 'idle',
    completedToday: 14,
    rating: 5.0,
  },
  {
    id: 'rider-04',
    name: 'Carlos Mendoza',
    vehicle: 'scooter',
    phone: '+34 612 809 331',
    status: 'offline',
    completedToday: 7,
    rating: 4.82,
  },
];

export interface FoodDeliveryRoutes {
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

export const foodDeliveryRoutes: FoodDeliveryRoutes = {
  home: '/preview/food-delivery',
  menu: '/preview/food-delivery/menu',
  tracking: '/preview/food-delivery/track',
  partner: '/preview/food-delivery/partner',
  signIn: '/preview/food-delivery/sign-in',
  dashboard: '/preview/food-delivery/app',
  kds: '/preview/food-delivery/app/kds',
  menuCms: '/preview/food-delivery/app/menu',
  orders: '/preview/food-delivery/app/orders',
  riders: '/preview/food-delivery/app/riders',
  settings: '/preview/food-delivery/app/settings',
};

export const foodDeliveryData = {
  restaurant: {
    name: 'BiteFlow Artisan Kitchen',
    tagline: 'Gourmet Smash Burgers, Artisan Neapolitan Pizzas & Poke Bowls',
    address: 'Calle Fuencarral 102, Chamberí, Madrid',
    phone: '+34 910 774 220',
    prepTimeAvgMin: 14,
    rating: 4.9,
    reviewsCount: 2410,
    minOrderEur: 12.00,
    deliveryFeeEur: 1.90,
    freeDeliveryThresholdEur: 25.00,
    deliveryRadiusKm: 6.5,
  },
  categories: foodCategories,
  dishes: foodDishes,
  orders: foodOrders,
  tickets: kitchenTickets,
  riders: foodRiders,
  routes: foodDeliveryRoutes,
};

