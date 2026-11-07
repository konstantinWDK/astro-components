// src/components/lib/templates/toy-store/data.ts
// Demo catalogue for the toy store template ("Kapow"): action figures, vehicles, playsets and
// minis from five original universes. Copy this file, replace the data with yours and pass it as `store`.
//
// Characters drive the "shop by character" filters: every product lists its `characters`, and
// `toyProducts()` turns them (plus universe, scale and age group) into `product.facets`, which the
// cards expose as `data-f-*` attributes for FilterSidebar.

import type { Product, ShippingRate, StoreCategory, ToyCardMeta } from '../../ecommerce/types';
import type { ProductIcon } from '../../ecommerce/product-icons';

export interface ToyRoutes {
  /** Store home. */
  home: string;
  /** Catalogue. Filters use `?character=`, `?universe=`, `?scale=`, `?age=` and `?category=`. */
  shop: string;
  /** Characters index. */
  characters: string;
  /** Character page prefix — pages live at `${character}${id}/`. */
  character: string;
  /** Product page prefix — pages live at `${product}${slug}/`. */
  product: string;
  /** Checkout page. */
  checkout: string;
}

export interface ToyUniverse {
  id: string;
  name: string;
  description: string;
  icon: ProductIcon;
  hue: number;
}

export interface ToyCharacter {
  id: string;
  name: string;
  /** Short title shown under the name. */
  alias: string;
  universe: string;
  faction: 'hero' | 'villain';
  icon: ProductIcon;
  hue: number;
  bio: string;
  quote?: string;
  /** 0–10 stats shown as power meters. */
  powers: Array<{ label: string; value: number }>;
  /** First appearance, free text. */
  debut?: string;
}

export interface ToyScale {
  id: string;
  name: string;
}

export interface ToyAgeGroup {
  id: string;
  name: string;
  /** Visible range, e.g. "6–8". */
  range: string;
  min: number;
  max: number;
  description: string;
  icon: ProductIcon;
  hue: number;
}

export interface ToyProduct extends Product {
  /** Character ids featured in the product (first = main character). */
  characters: string[];
  /** Scale id (see `ToyStore.scales`). */
  scale: string;
  /** Human-readable height, e.g. "15 cm / 6 in". */
  height: string;
  /** Points of articulation (omit for playsets). */
  articulation?: number;
  /** Minimum recommended age. */
  ageMin: number;
  /** Adult collector item — only listed under the collectors age group. */
  collectible?: boolean;
  accessories: string[];
  materials?: string;
  batteries?: string;
  /** Limited edition note, e.g. "Limited · 1 of 2,500". */
  edition?: string;
  /** Pre-order shipping note, e.g. "Ships March 2027". */
  preorder?: string;
}

export interface ToyStore {
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
  /** Product types (action figures, vehicles…). */
  categories: StoreCategory[];
  universes: ToyUniverse[];
  characters: ToyCharacter[];
  scales: ToyScale[];
  ages: ToyAgeGroup[];
  products: ToyProduct[];
  recentBuyers: Array<{ name: string; city: string; product: string; ago: string }>;
  bestSellers: string[];
  newArrivals: string[];
  /** Product slug promoted by the countdown banner. */
  featuredDrop: string;
  footer: Array<{ title: string; links: Array<{ label: string; href: string }> }>;
}

export const toyRoutes: ToyRoutes = {
  home: '/',
  shop: '/shop/',
  characters: '/characters/',
  character: '/characters/',
  product: '/product/',
  checkout: '/checkout/',
};

const BASE_SAFETY = 'PVC and ABS plastic, painted by hand. Contains small parts.';

export const kapowStore: ToyStore = {
  name: 'Kapow',
  tagline: 'Action figures, vehicles and playsets for heroes of every age — and the grown-ups who still collect them.',
  currency: 'USD',
  locale: 'en-US',
  cartKey: 'kapow-cart',
  freeShippingThreshold: 50,
  taxRate: 0.08,
  promoCodes: { KAPOW10: 10, HERO15: 15 },
  promoMessages: [
    'Free shipping on orders over $50',
    'Wave 3 pre-orders are open — lock in launch price',
    'Use code KAPOW10 for 10% off your first order',
  ],
  shippingRates: [
    { id: 'standard', label: 'Standard', eta: '3–5 business days', price: 5 },
    { id: 'express', label: 'Express', eta: '1–2 business days', price: 12 },
    { id: 'pickup', label: 'Store pickup', eta: 'Ready in 2 hours', price: 0 },
  ],
  categories: [
    { id: 'figures', name: 'Action figures', description: 'Poseable heroes and villains in 6" and 12" scale.', icon: 'figure', hue: 8 },
    { id: 'collector', name: 'Collector editions', description: 'Limited runs, premium paint and fabric goods for display.', icon: 'monster', hue: 280 },
    { id: 'vehicles', name: 'Vehicles & mechs', description: 'Cruisers, battle suits and robo-dinos that fit your figures.', icon: 'rocket', hue: 205 },
    { id: 'playsets', name: 'Playsets', description: 'Bases, dojos and cities to stage the next big battle.', icon: 'castle', hue: 140 },
    { id: 'minis', name: 'Minis & packs', description: 'Mystery boxes and multi-packs of 2" mini figures.', icon: 'mystery', hue: 46 },
  ],
  universes: [
    { id: 'star-rangers', name: 'Star Rangers', description: 'A crew of space rangers guarding the outer rim.', icon: 'rocket', hue: 215 },
    { id: 'mech-legion', name: 'Mech Legion', description: 'Rescue robots versus scrapyard warlords.', icon: 'mech', hue: 4 },
    { id: 'kaiju-clash', name: 'Kaiju Clash', description: 'Building-sized monsters that wreck cities.', icon: 'monster', hue: 140 },
    { id: 'shadow-clan', name: 'Shadow Clan', description: 'Rival ninja clans fighting over the storm blade.', icon: 'ninja', hue: 270 },
    { id: 'dino-strike', name: 'Dino Strike', description: 'Raptor riders and a fossil-obsessed mad scientist.', icon: 'dino', hue: 36 },
  ],
  characters: [
    {
      id: 'captain-nova', name: 'Captain Nova', alias: 'Leader of the Star Rangers', universe: 'star-rangers', faction: 'hero', icon: 'figure', hue: 212,
      bio: 'Ace pilot, terrible cook and the only ranger who has flown through the Void Nebula and come back. Captain Nova leads with a grin and a blaster that never runs out of charge.',
      quote: 'Stars up, rangers!', debut: 'Star Rangers #1 · 2019',
      powers: [{ label: 'Strength', value: 7 }, { label: 'Speed', value: 8 }, { label: 'Tech', value: 6 }, { label: 'Courage', value: 10 }],
    },
    {
      id: 'vex', name: 'Vex', alias: 'The Void Empress', universe: 'star-rangers', faction: 'villain', icon: 'figure', hue: 286,
      bio: 'Ruler of the Void Nebula, Vex bends gravity to swallow entire star systems. She wants the rangers’ star core to power her throne — and she is patient.',
      quote: 'Every star burns out.', debut: 'Star Rangers #4 · 2019',
      powers: [{ label: 'Strength', value: 6 }, { label: 'Speed', value: 5 }, { label: 'Tech', value: 9 }, { label: 'Cunning', value: 10 }],
    },
    {
      id: 'bolt-x', name: 'Bolt-X', alias: 'Rescue mech, model 7', universe: 'mech-legion', faction: 'hero', icon: 'robot', hue: 194,
      bio: 'Built to pull people out of collapsed buildings, Bolt-X converts from rescue truck to battle mech in three seconds flat. Still learning what jokes are.',
      quote: 'Rescue protocol: engaged.', debut: 'Mech Legion pilot · 2021',
      powers: [{ label: 'Strength', value: 9 }, { label: 'Speed', value: 6 }, { label: 'Tech', value: 8 }, { label: 'Armor', value: 9 }],
    },
    {
      id: 'ironmaw', name: 'Ironmaw', alias: 'Scrapyard warlord', universe: 'mech-legion', faction: 'villain', icon: 'robot', hue: 20,
      bio: 'Assembled from a thousand broken machines, Ironmaw eats scrap metal to grow bigger. His crushing jaw can bite through a bank vault.',
      quote: 'Everything is scrap.', debut: 'Mech Legion #2 · 2021',
      powers: [{ label: 'Strength', value: 10 }, { label: 'Speed', value: 3 }, { label: 'Tech', value: 7 }, { label: 'Armor', value: 10 }],
    },
    {
      id: 'terra-titan', name: 'Terra Titan', alias: 'Guardian of the deep', universe: 'kaiju-clash', faction: 'hero', icon: 'monster', hue: 150,
      bio: 'A gentle giant that sleeps under the ocean floor and only wakes when the city is in danger. Her roar can be heard from three islands away.',
      quote: '(A very loud roar.)', debut: 'Kaiju Clash · 2020',
      powers: [{ label: 'Strength', value: 10 }, { label: 'Speed', value: 4 }, { label: 'Size', value: 10 }, { label: 'Heart', value: 9 }],
    },
    {
      id: 'gorgonax', name: 'Gorgonax', alias: 'Three-horned destroyer', universe: 'kaiju-clash', faction: 'villain', icon: 'monster', hue: 322,
      bio: 'Gorgonax glows brighter with every building it knocks down. Scientists still argue about whether it has three horns or four.',
      quote: '(An even louder roar.)', debut: 'Kaiju Clash · 2020',
      powers: [{ label: 'Strength', value: 10 }, { label: 'Speed', value: 5 }, { label: 'Size', value: 9 }, { label: 'Fury', value: 10 }],
    },
    {
      id: 'kira-blaze', name: 'Kira Blaze', alias: 'Fire-blade ninja', universe: 'shadow-clan', faction: 'hero', icon: 'ninja', hue: 12,
      bio: 'The youngest master of the Ember Dojo, Kira fights with a blade that glows hotter the braver she feels. She never misses training — or dessert.',
      quote: 'Fear is just fuel.', debut: 'Shadow Clan · 2022',
      powers: [{ label: 'Strength', value: 6 }, { label: 'Speed', value: 10 }, { label: 'Stealth', value: 8 }, { label: 'Focus', value: 9 }],
    },
    {
      id: 'raikou', name: 'Raikou', alias: 'Storm oni', universe: 'shadow-clan', faction: 'villain', icon: 'ninja', hue: 252,
      bio: 'Raikou stole the storm blade a hundred years ago and has been hiding in thunderclouds ever since. Lightning follows him everywhere.',
      quote: 'Hear the thunder? That is me.', debut: 'Shadow Clan · 2022',
      powers: [{ label: 'Strength', value: 8 }, { label: 'Speed', value: 9 }, { label: 'Stealth', value: 7 }, { label: 'Storm', value: 10 }],
    },
    {
      id: 'rexa', name: 'Rexa', alias: 'Raptor rider', universe: 'dino-strike', faction: 'hero', icon: 'dino', hue: 40,
      bio: 'Rexa and her raptor Pip patrol the Lost Valley, protecting the last dinosaurs from poachers. Pip is fast; Rexa is faster at making plans.',
      quote: 'Saddle up, Pip!', debut: 'Dino Strike · 2023',
      powers: [{ label: 'Strength', value: 6 }, { label: 'Speed', value: 9 }, { label: 'Tracking', value: 10 }, { label: 'Courage', value: 9 }],
    },
    {
      id: 'dr-fang', name: 'Dr. Fang', alias: 'Fossil mad scientist', universe: 'dino-strike', faction: 'villain', icon: 'dino', hue: 118,
      bio: 'Dr. Fang builds robotic dinosaurs from fossils and spare parts. His masterpiece, the Robo-Rex, is mostly lasers and bad intentions.',
      quote: 'Extinction is temporary.', debut: 'Dino Strike · 2023',
      powers: [{ label: 'Strength', value: 4 }, { label: 'Speed', value: 3 }, { label: 'Tech', value: 10 }, { label: 'Cunning', value: 9 }],
    },
  ],
  scales: [
    { id: 'mini', name: 'Mini · 2 in' },
    { id: '6in', name: '6 in · 15 cm' },
    { id: '8in', name: '8 in · 20 cm' },
    { id: '12in', name: '12 in · 30 cm' },
    { id: '1-12', name: '1:12 collector' },
  ],
  ages: [
    { id: 'little', name: 'Little heroes', range: '3–5', min: 3, max: 5, description: 'Chunky, sturdy and easy to pose.', icon: 'monster', hue: 150 },
    { id: 'kids', name: 'Kids', range: '6–8', min: 6, max: 8, description: 'Figures, vehicles and the first playsets.', icon: 'figure', hue: 8 },
    { id: 'big-kids', name: 'Big kids', range: '9–12', min: 9, max: 12, description: 'Converting mechs and battle builds.', icon: 'robot', hue: 200 },
    { id: 'collectors', name: 'Collectors', range: '14+', min: 14, max: 99, description: 'Limited editions made for the shelf.', icon: 'ninja', hue: 280 },
  ],
  products: [
    {
      slug: 'captain-nova-6in', name: 'Captain Nova · Hero Pose', price: 24.99, category: 'figures',
      characters: ['captain-nova'], scale: '6in', height: '15 cm / 6 in', articulation: 28, ageMin: 4,
      rating: 4.8, reviews: 412, badge: 'Bestseller', badgeVariant: 'warning', icon: 'figure', hue: 212, inStock: true,
      accessories: ['Star blaster', 'Soft-goods cape', '2 swap hands', 'Display stand'],
      materials: BASE_SAFETY,
      description: 'The leader of the Star Rangers in her classic flight suit, with 28 points of articulation, a soft-goods cape and a star blaster that fits either hand.',
    },
    {
      slug: 'captain-nova-legends', name: 'Captain Nova · Legends 1:12', price: 79.99, category: 'collector',
      characters: ['captain-nova'], scale: '1-12', height: '16 cm / 6.3 in', articulation: 34, ageMin: 14, collectible: true,
      rating: 4.9, reviews: 128, badge: 'Limited', badgeVariant: 'danger', icon: 'figure', hue: 205, inStock: true, stock: 4,
      edition: 'Limited · 1 of 2,500',
      accessories: ['Tailored fabric cape', '3 portrait heads', '6 swap hands', 'Energy-blast FX', 'Numbered display base'],
      materials: 'PVC, ABS and tailored fabric. Hand-applied paint with matte and pearl finishes.',
      description: 'A premium 1:12 Captain Nova with a tailored fabric cape, three portrait heads and a numbered base. Only 2,500 made.',
    },
    {
      slug: 'vex-6in', name: 'Vex · Void Empress', price: 24.99, category: 'figures',
      characters: ['vex'], scale: '6in', height: '16 cm / 6.3 in', articulation: 26, ageMin: 4,
      rating: 4.7, reviews: 233, icon: 'figure', hue: 286, inStock: true,
      accessories: ['Gravity staff', 'Void orb FX', 'Display stand'],
      materials: BASE_SAFETY,
      description: 'The Void Empress with her gravity staff and a translucent void orb that clips onto either hand.',
    },
    {
      slug: 'void-throne', name: 'Void Throne Playset', price: 64.99, category: 'playsets',
      characters: ['vex', 'captain-nova'], scale: '6in', height: '38 cm / 15 in', ageMin: 6,
      rating: 4.6, reviews: 88, badge: 'New', badgeVariant: 'info', icon: 'castle', hue: 286, inStock: true,
      accessories: ['Rotating throne', 'Trap-door floor', 'Light-up void core', '20 stickers'],
      materials: BASE_SAFETY, batteries: '2 × AAA (included)',
      description: 'Vex’s throne room with a trap-door floor, a light-up void core and a rotating throne. Fits 6" figures (sold separately).',
    },
    {
      slug: 'star-cruiser', name: 'Star Ranger Cruiser', price: 89.99, compareAt: 109.99, category: 'vehicles',
      characters: ['captain-nova'], scale: '6in', height: '52 cm / 20 in wingspan', ageMin: 6,
      rating: 4.8, reviews: 156, badge: '-18%', badgeVariant: 'danger', icon: 'rocket', hue: 215, inStock: true, stock: 6,
      accessories: ['Opening cockpit', '2 spring-loaded missiles', 'Lights and engine sounds'],
      materials: BASE_SAFETY, batteries: '3 × AA (included)',
      description: 'The Star Rangers’ flagship cruiser with an opening cockpit for one 6" figure, launching missiles and engine sounds.',
    },
    {
      slug: 'bolt-x-converting', name: 'Bolt-X Converting Mech', price: 39.99, category: 'figures',
      characters: ['bolt-x'], scale: '8in', height: '20 cm / 8 in', articulation: 22, ageMin: 8,
      rating: 4.7, reviews: 301, badge: 'Bestseller', badgeVariant: 'warning', icon: 'robot', hue: 194, inStock: true,
      accessories: ['Rescue claw', 'Ladder', 'Instruction sheet'],
      materials: BASE_SAFETY,
      description: 'Converts from rescue truck to battle mech in 18 steps. Die-cast chest plate and a rescue claw that really grips.',
    },
    {
      slug: 'ironmaw-deluxe', name: 'Ironmaw Scrapyard Deluxe', price: 54.99, category: 'collector',
      characters: ['ironmaw'], scale: '8in', height: '22 cm / 8.7 in', articulation: 24, ageMin: 8,
      rating: 4.5, reviews: 97, icon: 'robot', hue: 20, inStock: true, stock: 3,
      accessories: ['Chomping jaw action', 'Scrap cannon', '4 scrap pieces'],
      materials: BASE_SAFETY,
      description: 'Squeeze the lever and Ironmaw’s jaw chomps. Weathered paint and four pieces of scrap to feed him.',
    },
    {
      slug: 'legion-titan-suit', name: 'Legion Titan Battle Suit', price: 119.99, category: 'vehicles',
      characters: ['bolt-x'], scale: '6in', height: '45 cm / 17.7 in', articulation: 18, ageMin: 8,
      rating: 4.9, reviews: 64, badge: 'Pre-order', badgeVariant: 'info', icon: 'mech', hue: 4, inStock: true,
      preorder: 'Ships March 2027',
      accessories: ['Pilot cockpit', 'Twin cannons', 'Light-up reactor', 'Display stand'],
      materials: BASE_SAFETY, batteries: '3 × AAA (included)',
      description: 'The biggest suit in the Mech Legion: an 18-inch walker with a cockpit for any 6" figure and a light-up reactor.',
    },
    {
      slug: 'terra-titan-12in', name: 'Terra Titan · Roaring 12"', price: 34.99, category: 'figures',
      characters: ['terra-titan'], scale: '12in', height: '30 cm / 12 in', articulation: 11, ageMin: 3,
      rating: 4.6, reviews: 188, icon: 'monster', hue: 150, inStock: true,
      accessories: ['Roar sound (press the back)', 'Tail swipe action'],
      materials: 'Soft, chunky vinyl with no small parts.', batteries: '2 × LR44 (included)',
      description: 'A big, soft and very loud Terra Titan for little hands. Press her back to roar; swing her tail to knock things over.',
    },
    {
      slug: 'gorgonax-vinyl', name: 'Gorgonax · Glow Collector Vinyl', price: 69.99, category: 'collector',
      characters: ['gorgonax'], scale: '12in', height: '25 cm / 10 in', ageMin: 14, collectible: true,
      rating: 4.8, reviews: 54, badge: 'Limited', badgeVariant: 'danger', icon: 'monster', hue: 322, inStock: true, stock: 2,
      edition: 'Glow-in-the-dark variant · 1 of 800',
      accessories: ['Numbered certificate', 'Collector box with window'],
      materials: 'Rotocast vinyl with glow-in-the-dark pigment.',
      description: 'A glow-in-the-dark Gorgonax in rotocast vinyl, numbered and boxed for display. 800 pieces worldwide.',
    },
    {
      slug: 'kaiju-city', name: 'Kaiju City Smash Playset', price: 49.99, category: 'playsets',
      characters: ['terra-titan', 'gorgonax'], scale: '12in', height: '40 cm / 15.7 in', ageMin: 4,
      rating: 4.4, reviews: 71, icon: 'castle', hue: 140, inStock: true,
      accessories: ['3 smash-apart towers', 'Bridge', 'Tiny city sign'],
      materials: BASE_SAFETY,
      description: 'Three towers that fall apart when a kaiju hits them — and click back together in seconds.',
    },
    {
      slug: 'kira-blaze-6in', name: 'Kira Blaze · Fire Blade', price: 22.99, category: 'figures',
      characters: ['kira-blaze'], scale: '6in', height: '14 cm / 5.5 in', articulation: 30, ageMin: 6,
      rating: 4.8, reviews: 276, badge: 'New', badgeVariant: 'info', icon: 'ninja', hue: 12, inStock: true,
      accessories: ['Fire blade with flame FX', 'Sheath', '2 throwing stars', 'Swap hands'],
      materials: BASE_SAFETY,
      description: 'The fire-blade ninja with 30 points of articulation for real ninja poses and a blade with a translucent flame effect.',
    },
    {
      slug: 'raikou-6in', name: 'Raikou · Storm Oni', price: 22.99, category: 'figures',
      characters: ['raikou'], scale: '6in', height: '16 cm / 6.3 in', articulation: 28, ageMin: 6,
      rating: 4.6, reviews: 140, icon: 'ninja', hue: 252, inStock: false,
      accessories: ['Storm blade', 'Lightning FX', 'Oni mask'],
      materials: BASE_SAFETY,
      description: 'Raikou with the stolen storm blade, a removable oni mask and lightning effects. Back in stock soon.',
    },
    {
      slug: 'shadow-dojo', name: 'Shadow Clan Dojo', price: 74.99, category: 'playsets',
      characters: ['kira-blaze', 'raikou'], scale: '6in', height: '42 cm / 16.5 in', ageMin: 6,
      rating: 4.7, reviews: 59, icon: 'castle', hue: 270, inStock: true,
      accessories: ['Training dummy', 'Rotating wall', 'Weapon rack', 'Secret trap door'],
      materials: BASE_SAFETY,
      description: 'A two-floor dojo with a spinning wall, a weapon rack and a secret trap door. Fits 6" figures.',
    },
    {
      slug: 'rexa-raptor-pack', name: 'Rexa & Pip · Raptor Rider Pack', price: 29.99, category: 'figures',
      characters: ['rexa'], scale: '6in', height: '15 cm / 6 in', articulation: 24, ageMin: 4,
      rating: 4.9, reviews: 342, badge: 'Bestseller', badgeVariant: 'warning', icon: 'dino', hue: 40, inStock: true,
      accessories: ['Pip the raptor (9 points)', 'Saddle', 'Tracking scope', 'Lasso'],
      materials: BASE_SAFETY,
      description: 'Rexa and her raptor Pip, with a saddle that fits Pip’s back and a tracking scope for spotting poachers.',
    },
    {
      slug: 'robo-rex', name: 'Dr. Fang’s Robo-Rex', price: 59.99, compareAt: 69.99, category: 'vehicles',
      characters: ['dr-fang'], scale: '6in', height: '35 cm / 13.8 in', articulation: 12, ageMin: 6,
      rating: 4.5, reviews: 83, badge: '-14%', badgeVariant: 'danger', icon: 'dino', hue: 118, inStock: true,
      accessories: ['Dr. Fang mini figure', 'Chomping jaw', 'Light-up eyes', 'Missile launcher'],
      materials: BASE_SAFETY, batteries: '2 × AA (included)',
      description: 'A robotic T-rex with light-up eyes, a chomping jaw and a seat for Dr. Fang (included).',
    },
    {
      slug: 'mini-heroes-s1', name: 'Mini Heroes Mystery Box · Series 1', price: 7.99, category: 'minis',
      characters: ['captain-nova', 'bolt-x', 'terra-titan', 'kira-blaze', 'rexa'], scale: 'mini', height: '5 cm / 2 in', articulation: 5, ageMin: 4,
      rating: 4.7, reviews: 520, badge: 'New', badgeVariant: 'info', icon: 'mystery', hue: 46, inStock: true,
      accessories: ['1 mystery mini figure', 'Collector checklist', 'Stand'],
      materials: BASE_SAFETY,
      description: 'One of five hero minis in every box — plus a rare gold variant. Which one will you get?',
    },
    {
      slug: 'villains-4pack', name: 'Villains Mini 4-Pack', price: 24.99, compareAt: 31.96, category: 'minis',
      characters: ['vex', 'ironmaw', 'raikou', 'dr-fang'], scale: 'mini', height: '5 cm / 2 in', articulation: 5, ageMin: 4,
      rating: 4.6, reviews: 112, badge: 'Save 22%', badgeVariant: 'danger', icon: 'figure', hue: 300, inStock: true,
      accessories: ['4 villain minis', '4 stands', 'Villain lair backdrop'],
      materials: BASE_SAFETY,
      description: 'Four villain minis with stands and a fold-out lair backdrop. The easy way to start a rogues gallery.',
    },
  ],
  recentBuyers: [
    { name: 'Leo', city: 'Austin', product: 'rexa-raptor-pack', ago: '1 min ago' },
    { name: 'Sofía', city: 'Madrid', product: 'captain-nova-legends', ago: '4 min ago' },
    { name: 'Noah', city: 'Toronto', product: 'bolt-x-converting', ago: '7 min ago' },
    { name: 'Mia', city: 'Berlin', product: 'kira-blaze-6in', ago: '12 min ago' },
    { name: 'Yuki', city: 'Osaka', product: 'gorgonax-vinyl', ago: '18 min ago' },
  ],
  bestSellers: ['rexa-raptor-pack', 'captain-nova-6in', 'bolt-x-converting', 'kira-blaze-6in'],
  newArrivals: ['legion-titan-suit', 'void-throne', 'mini-heroes-s1', 'captain-nova-legends'],
  featuredDrop: 'legion-titan-suit',
  footer: [
    { title: 'Shop', links: [] },
    { title: 'Help', links: [{ label: 'Shipping', href: '#' }, { label: 'Returns', href: '#' }, { label: 'Pre-orders', href: '#' }, { label: 'Toy safety', href: '#' }] },
    { title: 'Kapow', links: [{ label: 'About', href: '#' }, { label: 'Collector Club', href: '#' }, { label: 'Stores', href: '#' }] },
    { title: 'Legal', links: [{ label: 'Privacy', href: '#' }, { label: 'Terms', href: '#' }, { label: 'Cookies', href: '#' }] },
  ],
};

/* ---------- Helpers shared by the template pages ---------- */

export function toyProductHref(routes: ToyRoutes, slug: string): string {
  return `${routes.product}${slug}/`;
}

export function toyCharacterHref(routes: ToyRoutes, id: string): string {
  return `${routes.character}${id}/`;
}

/** Catalogue URL with filters, e.g. `toyShopHref(routes, { character: 'vex' })`. */
export function toyShopHref(routes: ToyRoutes, filters: Record<string, string> = {}): string {
  const q = new URLSearchParams(filters).toString();
  return q ? `${routes.shop}?${q}` : routes.shop;
}

/** Age-group ids a product belongs to. Collector groups only list `collectible` products. */
export function toyAgeGroups(store: ToyStore, product: ToyProduct): string[] {
  return store.ages
    .filter((a) => (a.min >= 14 ? Boolean(product.collectible) || product.ageMin >= 14 : product.ageMin <= a.max && !product.collectible))
    .map((a) => a.id);
}

/** Products with `facets` filled in (character, universe, scale, age) for the filters. */
export function toyProducts(store: ToyStore, list: ToyProduct[] = store.products): ToyProduct[] {
  return list.map((p) => ({
    ...p,
    facets: {
      character: p.characters,
      universe: Array.from(new Set(p.characters.map((c) => store.characters.find((x) => x.id === c)?.universe).filter((u): u is string => Boolean(u)))),
      scale: p.scale,
      age: toyAgeGroups(store, p),
    },
  }));
}

export function pickToyProducts(store: ToyStore, slugs: string[]): ToyProduct[] {
  return toyProducts(store, slugs.map((s) => store.products.find((p) => p.slug === s)).filter((p): p is ToyProduct => Boolean(p)));
}

export function toyCharacter(store: ToyStore, id?: string): ToyCharacter | undefined {
  return store.characters.find((c) => c.id === id);
}

export function toyUniverse(store: ToyStore, id?: string): ToyUniverse | undefined {
  return store.universes.find((u) => u.id === id);
}

/** Products featuring a character. */
export function productsForCharacter(store: ToyStore, id: string): ToyProduct[] {
  return toyProducts(store, store.products.filter((p) => p.characters.includes(id)));
}

/** Labels shown on ToyFigureCard (character, universe, scale, age, articulation, pre-order). */
export function toyCardMeta(store: ToyStore): Record<string, ToyCardMeta> {
  return Object.fromEntries(
    store.products.map((p) => {
      const main = toyCharacter(store, p.characters[0]);
      return [p.slug, {
        character: p.characters.length > 1 ? `${p.characters.length} characters` : main?.name,
        universe: toyUniverse(store, main?.universe)?.name,
        scale: store.scales.find((s) => s.id === p.scale)?.name.split(' · ')[0],
        age: `${p.ageMin}+`,
        articulation: p.articulation,
        preorder: p.preorder,
        edition: p.edition,
      } satisfies ToyCardMeta];
    }),
  );
}

/** Character list for ToyCharacterRail / ToyCharacterGrid. */
export function toyCharacterItems(store: ToyStore, routes: ToyRoutes, ids?: string[]) {
  const list = ids ? ids.map((id) => toyCharacter(store, id)).filter((c): c is ToyCharacter => Boolean(c)) : store.characters;
  return list.map((c) => ({
    id: c.id,
    name: c.name,
    alias: c.alias,
    icon: c.icon,
    hue: c.hue,
    faction: c.faction,
    universe: toyUniverse(store, c.universe)?.name ?? '',
    universeId: c.universe,
    href: toyCharacterHref(routes, c.id),
    count: store.products.filter((p) => p.characters.includes(c.id)).length,
    powers: c.powers,
  }));
}
