// src/components/lib/ecommerce/types.ts
// Shared data shapes for the e-commerce components and the store template.

import type { ProductIcon } from './product-icons';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  /** URL-safe id, also used as cart line id. */
  slug: string;
  name: string;
  /** Price in major units (e.g. 129.9). */
  price: number;
  /** Optional "before" price, shown struck through. */
  compareAt?: number;
  /** Category id (matches `StoreCategory.id`). */
  category: string;
  /** 0–5 average rating. */
  rating?: number;
  reviews?: number;
  /** Short highlight such as "New" or "-20%". */
  badge?: string;
  badgeVariant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  colors?: ProductColor[];
  sizes?: string[];
  /** Built-in illustration used when no `image` is given. */
  icon?: ProductIcon;
  /** Hue (0–360) of the generated product backdrop. */
  hue?: number;
  /** Real product photo; replaces the illustration. */
  image?: string;
  description?: string;
  inStock?: boolean;
  /** Units left; StockIndicator shows urgency at or below its threshold. */
  stock?: number;
}

export interface StoreCategory {
  id: string;
  name: string;
  description?: string;
  icon?: ProductIcon;
  hue?: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  variant?: string;
  image?: string;
  icon?: ProductIcon;
  hue?: number;
}

export interface ShippingRate {
  id: string;
  label: string;
  eta: string;
  price: number;
}

export interface MoneyFormat {
  currency?: string;
  locale?: string;
}
