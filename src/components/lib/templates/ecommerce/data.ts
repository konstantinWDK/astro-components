// src/components/lib/templates/ecommerce/data.ts
// Demo catalogue and settings for the e-commerce template.
// Copy this file, replace the products and settings with yours, and pass it as `store`.

import type { Product, ShippingRate, StoreCategory } from '../../ecommerce/types';

export interface StoreRoutes {
  /** Store home. */
  home: string;
  /** Catalogue / category page. Category links add `?category=<id>`. */
  shop: string;
  /** Product URL prefix — product pages live at `${product}${slug}/`. */
  product: string;
  /** Checkout page. */
  checkout: string;
}

export interface StoreConfig {
  name: string;
  tagline: string;
  currency: string;
  locale: string;
  cartKey: string;
  freeShippingThreshold: number;
  taxRate: number;
  promoCodes: Record<string, number>;
  promoMessages: string[];
  shippingRates: ShippingRate[];
  categories: StoreCategory[];
  products: Product[];
  /** Recent purchases shown by LiveActivityToast (product = slug). */
  recentBuyers: Array<{ name: string; city: string; product: string; ago: string }>;
  /** Product slugs featured on the home page. */
  bestSellers: string[];
  newArrivals: string[];
  footer: Array<{ title: string; links: Array<{ label: string; href: string }> }>;
}

export const defaultRoutes: StoreRoutes = {
  home: '/',
  shop: '/shop/',
  product: '/product/',
  checkout: '/checkout/',
};

const C = {
  graphite: { name: 'Graphite', hex: '#2b2b2f' },
  sand: { name: 'Sand', hex: '#d8c3a5' },
  ocean: { name: 'Ocean', hex: '#3d6f9e' },
  moss: { name: 'Moss', hex: '#5f7a4e' },
  clay: { name: 'Clay', hex: '#b5654a' },
  snow: { name: 'Snow', hex: '#e9e9ea' },
};

export const demoStore: StoreConfig = {
  name: 'Nova Store',
  tagline: 'Considered gear for everyday life. Designed in small batches, built to last.',
  currency: 'USD',
  locale: 'en-US',
  cartKey: 'nova-cart',
  freeShippingThreshold: 75,
  taxRate: 0.08,
  promoCodes: { ASTRO10: 10, WELCOME15: 15 },
  promoMessages: [
    'Free shipping on orders over $75',
    'Use code ASTRO10 for 10% off your first order',
    '30-day free returns on everything',
  ],
  shippingRates: [
    { id: 'standard', label: 'Standard', eta: '3–5 business days', price: 6 },
    { id: 'express', label: 'Express', eta: '1–2 business days', price: 14 },
    { id: 'pickup', label: 'Store pickup', eta: 'Ready in 2 hours', price: 0 },
  ],
  categories: [
    { id: 'audio', name: 'Audio', description: 'Headphones and speakers tuned for warm, detailed sound.', icon: 'headphones', hue: 38 },
    { id: 'wearables', name: 'Wearables', description: 'Watches and eyewear that keep up with your day.', icon: 'watch', hue: 205 },
    { id: 'bags', name: 'Bags', description: 'Backpacks and totes for commutes and weekends.', icon: 'backpack', hue: 150 },
    { id: 'home', name: 'Home', description: 'Lamps, mugs and planters for calmer spaces.', icon: 'lamp', hue: 22 },
    { id: 'apparel', name: 'Apparel', description: 'Layers and sneakers made from better materials.', icon: 'jacket', hue: 280 },
  ],
  products: [
    {
      slug: 'aurora-headphones', name: 'Aurora Wireless Headphones', price: 189, compareAt: 229, category: 'audio',
      rating: 4.8, reviews: 312, badge: 'Bestseller', badgeVariant: 'warning', icon: 'headphones', hue: 38,
      colors: [C.graphite, C.sand, C.ocean], inStock: true, stock: 4,
      description: 'Adaptive noise cancelling, 40-hour battery and memory-foam cushions that disappear after five minutes. Tuned in-house for a warm, detailed sound.',
    },
    {
      slug: 'pulse-speaker', name: 'Pulse Portable Speaker', price: 129, category: 'audio',
      rating: 4.6, reviews: 184, badge: 'New', badgeVariant: 'info', icon: 'speaker', hue: 262,
      colors: [C.graphite, C.clay, C.moss], inStock: true,
      description: '360° sound in a waterproof aluminium shell. 20 hours of playback and a strap that clips to anything.',
    },
    {
      slug: 'orbit-watch', name: 'Orbit Smart Watch', price: 249, category: 'wearables',
      rating: 4.7, reviews: 226, badge: 'New', badgeVariant: 'info', icon: 'watch', hue: 205,
      colors: [C.graphite, C.snow, C.ocean, C.clay, C.moss], inStock: true, stock: 2,
      description: 'Sapphire glass, seven-day battery and health tracking that stays out of your way until you need it.',
    },
    {
      slug: 'solace-sunglasses', name: 'Solace Polarised Sunglasses', price: 139, category: 'wearables',
      rating: 4.5, reviews: 98, icon: 'sunglasses', hue: 18,
      colors: [C.graphite, C.sand], inStock: true,
      description: 'Hand-polished acetate frames with polarised, UV400 lenses and a lifetime hinge warranty.',
    },
    {
      slug: 'trail-backpack', name: 'Trail 24L Backpack', price: 119, category: 'bags',
      rating: 4.9, reviews: 402, badge: 'Bestseller', badgeVariant: 'warning', icon: 'backpack', hue: 150,
      colors: [C.moss, C.graphite, C.sand], inStock: true,
      description: 'Recycled ripstop, a padded 16" laptop sleeve and a clamshell opening that packs like a suitcase.',
    },
    {
      slug: 'city-tote', name: 'City Canvas Tote', price: 69, compareAt: 89, category: 'bags',
      rating: 4.4, reviews: 76, badge: '-22%', badgeVariant: 'danger', icon: 'bag', hue: 32,
      colors: [C.sand, C.graphite], inStock: true,
      description: 'Waxed organic canvas with leather handles and an inner zip pocket. Gets better with age.',
    },
    {
      slug: 'halo-lamp', name: 'Halo Desk Lamp', price: 89, category: 'home',
      rating: 4.6, reviews: 143, icon: 'lamp', hue: 45,
      colors: [C.snow, C.graphite, C.clay], inStock: true,
      description: 'Dimmable, flicker-free light with a warm-to-cool range and a touch strip on the base.',
    },
    {
      slug: 'ember-mug', name: 'Ember Stoneware Mug', price: 34, category: 'home',
      rating: 4.8, reviews: 268, icon: 'mug', hue: 12,
      colors: [C.clay, C.snow, C.ocean], inStock: true,
      description: 'Hand-thrown stoneware, 350 ml, dishwasher and microwave safe. Every glaze is slightly unique.',
    },
    {
      slug: 'fern-planter', name: 'Fern Ceramic Planter', price: 42, category: 'home',
      rating: 4.3, reviews: 51, icon: 'plant', hue: 120,
      colors: [C.snow, C.moss], inStock: true,
      description: 'Matte ceramic planter with a hidden drainage tray, sized for 15 cm pots.',
    },
    {
      slug: 'nomad-bottle', name: 'Nomad Insulated Bottle', price: 39, category: 'home',
      rating: 4.7, reviews: 189, icon: 'bottle', hue: 190,
      colors: [C.ocean, C.graphite, C.moss], inStock: false,
      description: 'Keeps drinks cold for 24 hours or hot for 12. Leak-proof lid, 750 ml.',
    },
    {
      slug: 'drift-sneakers', name: 'Drift Everyday Sneakers', price: 149, category: 'apparel',
      rating: 4.6, reviews: 211, badge: 'Restocked', badgeVariant: 'success', icon: 'sneaker', hue: 0,
      colors: [C.snow, C.graphite, C.sand], sizes: ['38', '39', '40', '41', '42', '43', '44'], inStock: true, stock: 3,
      description: 'A cushioned sugarcane-foam sole and a knit upper you can throw in the washing machine.',
    },
    {
      slug: 'storm-jacket', name: 'Storm Shell Jacket', price: 219, compareAt: 259, category: 'apparel',
      rating: 4.8, reviews: 133, badge: '-15%', badgeVariant: 'danger', icon: 'jacket', hue: 280,
      colors: [C.graphite, C.ocean, C.clay], sizes: ['XS', 'S', 'M', 'L', 'XL'], inStock: true, stock: 6,
      description: 'Three-layer waterproof shell with taped seams, pit zips and a helmet-compatible hood.',
    },
  ],
  recentBuyers: [
    { name: 'Lucía', city: 'Madrid', product: 'aurora-headphones', ago: '2 min ago' },
    { name: 'Tom', city: 'Berlin', product: 'trail-backpack', ago: '5 min ago' },
    { name: 'Aiko', city: 'Osaka', product: 'orbit-watch', ago: '9 min ago' },
    { name: 'Marco', city: 'Milan', product: 'drift-sneakers', ago: '14 min ago' },
    { name: 'Chloé', city: 'Lyon', product: 'ember-mug', ago: '21 min ago' },
  ],
  bestSellers: ['aurora-headphones', 'trail-backpack', 'orbit-watch', 'ember-mug'],
  newArrivals: ['pulse-speaker', 'drift-sneakers', 'storm-jacket', 'halo-lamp'],
  footer: [
    { title: 'Shop', links: [{ label: 'Audio', href: '#' }, { label: 'Wearables', href: '#' }, { label: 'Bags', href: '#' }, { label: 'Home', href: '#' }] },
    { title: 'Help', links: [{ label: 'Shipping', href: '#' }, { label: 'Returns', href: '#' }, { label: 'Order status', href: '#' }, { label: 'Contact', href: '#' }] },
    { title: 'Company', links: [{ label: 'About', href: '#' }, { label: 'Journal', href: '#' }, { label: 'Stores', href: '#' }] },
    { title: 'Legal', links: [{ label: 'Privacy', href: '#' }, { label: 'Terms', href: '#' }, { label: 'Cookies', href: '#' }] },
  ],
};

/** Helpers shared by the template pages. */
export function productHref(routes: StoreRoutes, slug: string): string {
  return `${routes.product}${slug}/`;
}

export function categoryHref(routes: StoreRoutes, id?: string): string {
  return id ? `${routes.shop}?category=${encodeURIComponent(id)}` : routes.shop;
}

export function categoryNames(store: StoreConfig): Record<string, string> {
  return Object.fromEntries(store.categories.map((c) => [c.id, c.name]));
}

export function pickProducts(store: StoreConfig, slugs: string[]): Product[] {
  return slugs.map((s) => store.products.find((p) => p.slug === s)).filter((p): p is Product => Boolean(p));
}
