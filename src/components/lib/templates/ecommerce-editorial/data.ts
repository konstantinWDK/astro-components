// src/components/lib/templates/ecommerce-editorial/data.ts
// Demo catalogue and settings for the editorial e-commerce template ("Forma Studio").
// Copy this file, swap in your products and pass it as `store` to every page.

import type { Product, ShippingRate, StoreCategory } from '../../ecommerce/types';

export interface EditorialRoutes {
  home: string;
  shop: string;
  /** Product URL prefix — pages live at `${product}${slug}/`. */
  product: string;
  bag: string;
  checkout: string;
}

export interface EditorialStore {
  name: string;
  tagline: string;
  announcement: string;
  currency: string;
  locale: string;
  cartKey: string;
  freeShippingThreshold: number;
  shippingFlat: number;
  taxRate: number;
  promoCodes: Record<string, number>;
  shippingRates: ShippingRate[];
  categories: StoreCategory[];
  products: Product[];
  newIn: string[];
  look: Array<{ slug: string; x: number; y: number }>;
  reviews: Array<{ quote: string; name: string; place?: string; product?: string; rating?: number }>;
  values: Array<{ title: string; text: string }>;
  contact: { title: string; lines: string[] };
}

export const editorialRoutes: EditorialRoutes = {
  home: '/',
  shop: '/shop/',
  product: '/product/',
  bag: '/bag/',
  checkout: '/checkout/',
};

const C = {
  oat: { name: 'Oat', hex: '#d9cbb3' },
  ink: { name: 'Ink', hex: '#22252b' },
  rust: { name: 'Rust', hex: '#9c3d1c' },
  sage: { name: 'Sage', hex: '#8a9a7b' },
  chalk: { name: 'Chalk', hex: '#ece7de' },
  clay: { name: 'Clay', hex: '#b07a5a' },
};

export const formaStore: EditorialStore = {
  name: 'Forma',
  tagline: 'Clothing and objects made slowly, in small runs, by workshops we know by name.',
  announcement: 'Complimentary shipping over €150 · Free returns within 30 days',
  currency: 'EUR',
  locale: 'en-GB',
  cartKey: 'forma-bag',
  freeShippingThreshold: 150,
  shippingFlat: 8,
  taxRate: 0,
  promoCodes: { FORMA10: 10 },
  shippingRates: [
    { id: 'standard', label: 'Standard', eta: '2–4 business days', price: 8 },
    { id: 'express', label: 'Express', eta: 'Next business day', price: 18 },
    { id: 'studio', label: 'Collect at the studio', eta: 'Madrid · ready tomorrow', price: 0 },
  ],
  categories: [
    { id: 'clothing', name: 'Clothing', description: 'Overshirts, knitwear and outerwear in natural fibres.', icon: 'jacket', hue: 22 },
    { id: 'shoes', name: 'Shoes', description: 'Leather and suede, resoleable.', icon: 'sneaker', hue: 28 },
    { id: 'bags', name: 'Bags', description: 'Canvas and leather that soften with age.', icon: 'bag', hue: 34 },
    { id: 'objects', name: 'Objects', description: 'Stoneware, lighting and living things.', icon: 'mug', hue: 14 },
    { id: 'accessories', name: 'Accessories', description: 'Eyewear and watches, quietly made.', icon: 'sunglasses', hue: 200 },
  ],
  products: [
    { slug: 'linen-overshirt', name: 'Linen Overshirt', price: 145, category: 'clothing', badge: 'New', colors: [C.oat, C.ink, C.rust], sizes: ['XS', 'S', 'M', 'L', 'XL'], icon: 'shirt', hue: 30, rating: 4.8, reviews: 96, stock: 4,
      description: 'A relaxed overshirt in heavyweight Portuguese linen, garment-washed for softness. Corozo buttons, two patch pockets, a boxy cut that layers over knitwear.' },
    { slug: 'merino-crew', name: 'Merino Crew Knit', price: 160, category: 'clothing', colors: [C.sage, C.oat, C.ink], sizes: ['S', 'M', 'L', 'XL'], icon: 'jacket', hue: 95, rating: 4.9, reviews: 142,
      description: 'Extra-fine Italian merino knitted in a dense, flat gauge. Breathable, itch-free and made to be worn next to the skin all winter.' },
    { slug: 'wool-overcoat', name: 'Wool Overcoat', price: 320, compareAt: 380, category: 'clothing', badge: 'Archive price', colors: [C.rust, C.ink], sizes: ['S', 'M', 'L'], icon: 'jacket', hue: 18, rating: 4.7, reviews: 54, stock: 2,
      description: 'A single-breasted coat in boiled wool from a mill in Biella. Unlined, light and warm, with a soft shoulder.' },
    { slug: 'organic-tee', name: 'Organic Heavy Tee', price: 55, category: 'clothing', colors: [C.chalk, C.ink, C.sage, C.clay], sizes: ['XS', 'S', 'M', 'L', 'XL'], icon: 'shirt', hue: 40, rating: 4.6, reviews: 310,
      description: 'A 240 gsm organic cotton tee with a structured collar that keeps its shape wash after wash.' },
    { slug: 'dune-loafer', name: 'Dune Suede Loafer', price: 210, category: 'shoes', colors: [C.clay, C.ink], sizes: ['39', '40', '41', '42', '43', '44'], icon: 'sneaker', hue: 28, rating: 4.7, reviews: 77, stock: 3,
      description: 'Hand-lasted suede loafers on a Blake-stitched leather sole. Resoleable for years of wear.' },
    { slug: 'canvas-runner', name: 'Canvas Runner', price: 135, category: 'shoes', badge: 'New', colors: [C.chalk, C.sage], sizes: ['38', '39', '40', '41', '42', '43'], icon: 'sneaker', hue: 90, rating: 4.5, reviews: 41,
      description: 'Organic canvas upper, natural rubber sole and recycled laces. Light enough for everyday.' },
    { slug: 'field-tote', name: 'Field Tote', price: 120, category: 'bags', colors: [C.rust, C.oat, C.ink], icon: 'bag', hue: 18, rating: 4.9, reviews: 203,
      description: 'Waxed cotton canvas with vegetable-tanned leather handles. Holds a laptop, a lunch and a book.' },
    { slug: 'day-rucksack', name: 'Day Rucksack', price: 185, category: 'bags', colors: [C.ink, C.sage], icon: 'backpack', hue: 150, rating: 4.6, reviews: 66,
      description: 'A roll-top rucksack in recycled nylon with a padded sleeve and a quiet, magnetic closure.' },
    { slug: 'kiln-mug', name: 'Kiln Mug', price: 32, category: 'objects', colors: [C.clay, C.chalk], icon: 'mug', hue: 14, rating: 4.9, reviews: 388,
      description: 'Wheel-thrown stoneware from a family workshop in La Bisbal. Each glaze pools a little differently.' },
    { slug: 'paper-lamp', name: 'Paper Table Lamp', price: 140, category: 'objects', badge: 'New', colors: [C.chalk], icon: 'lamp', hue: 40, rating: 4.7, reviews: 29,
      description: 'Washi paper on an oak base. Throws a soft, warm light that makes small rooms feel bigger.' },
    { slug: 'olive-planter', name: 'Olive Planter', price: 58, category: 'objects', colors: [C.sage, C.chalk], icon: 'plant', hue: 110, rating: 4.4, reviews: 18, inStock: false,
      description: 'A matte terracotta planter with a saucer, sized for a young olive tree.' },
    { slug: 'acetate-frames', name: 'Acetate Frames', price: 175, category: 'accessories', colors: [C.ink, C.clay], icon: 'sunglasses', hue: 200, rating: 4.8, reviews: 61,
      description: 'Bio-acetate frames with polarised lenses, made in Cadore. Comes with a linen case.' },
  ],
  newIn: ['linen-overshirt', 'canvas-runner', 'paper-lamp', 'merino-crew', 'field-tote', 'acetate-frames'],
  look: [
    { slug: 'linen-overshirt', x: 40, y: 32 },
    { slug: 'field-tote', x: 68, y: 60 },
    { slug: 'kiln-mug', x: 26, y: 74 },
  ],
  reviews: [
    { quote: 'The overshirt has been washed forty times and it only gets softer. It is the first thing I reach for.', name: 'Inés M.', place: 'Valencia', product: 'Linen Overshirt', rating: 5 },
    { quote: 'Packaging without plastic, a handwritten note, and a mug that feels made for my hands.', name: 'Jonas P.', place: 'Hamburg', product: 'Kiln Mug', rating: 5 },
    { quote: 'They repaired the strap of my tote for free, two years after I bought it. That is rare.', name: 'Amira S.', place: 'Lyon', product: 'Field Tote', rating: 5 },
  ],
  values: [
    { title: 'Honest materials', text: 'Linen, wool, organic cotton and stoneware — traceable to the mill and the kiln.' },
    { title: 'Made in small runs', text: 'Each piece is produced in batches of a few hundred, never mass-manufactured.' },
    { title: 'Kept for years', text: 'Free repairs on everything we make, and a buy-back for pieces you have outgrown.' },
  ],
  contact: { title: 'Visit the studio', lines: ['Calle del Pez 14, Madrid', 'Tue–Sat · 11:00–20:00', 'hello@forma.studio'] },
};

export const editorialProductHref = (routes: EditorialRoutes, slug: string) => `${routes.product}${slug}/`;
export const editorialCategoryHref = (routes: EditorialRoutes, id?: string) => (id ? `${routes.shop}?category=${encodeURIComponent(id)}` : routes.shop);
export const pickEditorial = (store: EditorialStore, slugs: string[]) =>
  slugs.map((s) => store.products.find((p) => p.slug === s)).filter((p): p is Product => Boolean(p));
