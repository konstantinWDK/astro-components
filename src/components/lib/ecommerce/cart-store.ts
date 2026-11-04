// src/components/lib/ecommerce/cart-store.ts
// Tiny framework-free cart store shared by every e-commerce component.
//
// - Persists to localStorage (per `storageKey`), falls back to memory when storage is blocked.
// - Broadcasts `ack:cart` on `document` after every change, and syncs across tabs.
// - `formatMoney` is pure and also safe to call at build time.

import type { CartItem, MoneyFormat } from './types';

export const CART_EVENT = 'ack:cart';
/** Fired after an add-to-cart button adds an item: `{ key, item, openCart }`. */
export const ADDED_EVENT = 'ack:cart-added';
/** Fire this to show any notice in CartToast: `{ title, text?, tone?: 'info'|'success'|'warning'|'danger' }`. */
export const NOTIFY_EVENT = 'ack:notify';
const DEFAULT_KEY = 'ack-cart';

const memory: Record<string, CartItem[]> = {};

export function formatMoney(value: number, { currency = 'USD', locale = 'en-US' }: MoneyFormat = {}): string {
  try {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
  } catch {
    return `${value.toFixed(2)} ${currency}`;
  }
}

function read(key: string): CartItem[] {
  try {
    const raw = window.localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.filter((i) => i && typeof i.id === 'string');
    }
    return memory[key] ?? [];
  } catch {
    return memory[key] ?? [];
  }
}

function write(key: string, items: CartItem[]): void {
  memory[key] = items;
  try {
    window.localStorage.setItem(key, JSON.stringify(items));
  } catch {
    /* storage blocked — memory copy is enough for this page view */
  }
  document.dispatchEvent(new CustomEvent(CART_EVENT, { detail: { key, items } }));
}

/** Line id: product id + variant, so "Tee / M" and "Tee / L" are separate lines. */
export function lineId(id: string, variant?: string): string {
  return variant ? `${id}::${variant}` : id;
}

export function createCart(storageKey: string = DEFAULT_KEY) {
  const api = {
    key: storageKey,
    items: (): CartItem[] => read(storageKey),
    count: (): number => read(storageKey).reduce((n, i) => n + i.qty, 0),
    subtotal: (): number => read(storageKey).reduce((n, i) => n + i.price * i.qty, 0),
    add(item: Omit<CartItem, 'qty'> & { qty?: number }): void {
      const items = read(storageKey);
      const id = lineId(item.id, item.variant);
      const existing = items.find((i) => i.id === id);
      if (existing) existing.qty = Math.min(99, existing.qty + (item.qty ?? 1));
      else items.push({ ...item, id, qty: Math.max(1, item.qty ?? 1) });
      write(storageKey, items);
    },
    setQty(id: string, qty: number): void {
      const items = read(storageKey)
        .map((i) => (i.id === id ? { ...i, qty: Math.min(99, Math.max(0, Math.round(qty))) } : i))
        .filter((i) => i.qty > 0);
      write(storageKey, items);
    },
    remove(id: string): void {
      write(storageKey, read(storageKey).filter((i) => i.id !== id));
    },
    clear(): void {
      write(storageKey, []);
    },
    /** Fills an empty cart once (demo stores). Never overwrites a real cart. */
    seed(items: CartItem[]): void {
      const flag = `${storageKey}:seeded`;
      try {
        if (window.localStorage.getItem(flag)) return;
        window.localStorage.setItem(flag, '1');
      } catch {
        if (memory[flag]) return;
        memory[flag] = [];
      }
      if (read(storageKey).length === 0 && items.length) write(storageKey, items);
    },
    subscribe(fn: (items: CartItem[]) => void): () => void {
      const onLocal = (e: Event) => {
        const detail = (e as CustomEvent).detail;
        if (!detail || detail.key === storageKey) fn(read(storageKey));
      };
      const onStorage = (e: StorageEvent) => {
        if (e.key === storageKey) fn(read(storageKey));
      };
      document.addEventListener(CART_EVENT, onLocal);
      window.addEventListener('storage', onStorage);
      return () => {
        document.removeEventListener(CART_EVENT, onLocal);
        window.removeEventListener('storage', onStorage);
      };
    },
  };
  return api;
}

export type Cart = ReturnType<typeof createCart>;

/**
 * Wires every `[data-add-to-cart]` button inside `root` to the cart.
 * The attribute holds the item JSON; an optional `data-cart-key` picks the store.
 * Variant pickers can update `data-variant` on the button before the click.
 */
export function bindAddToCart(root: ParentNode = document): void {
  root.querySelectorAll<HTMLButtonElement>('[data-add-to-cart]:not([data-cart-bound])').forEach((btn) => {
    btn.dataset.cartBound = '';
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      let item: CartItem;
      try {
        item = JSON.parse(btn.dataset.addToCart || '{}');
      } catch {
        return;
      }
      if (!item.id) return;
      const qtyInput = btn.dataset.qtyFrom ? document.getElementById(btn.dataset.qtyFrom) as HTMLInputElement | null : null;
      const qty = qtyInput ? Number(qtyInput.value) || 1 : 1;
      const added = { ...item, variant: btn.dataset.variant || item.variant, qty };
      createCart(btn.dataset.cartKey || DEFAULT_KEY).add(added);
      document.dispatchEvent(new CustomEvent(ADDED_EVENT, { detail: { key: btn.dataset.cartKey || DEFAULT_KEY, item: added, openCart: btn.dataset.openCart !== 'false' } }));

      const label = btn.querySelector<HTMLElement>('[data-label]');
      const original = label?.textContent;
      btn.classList.add('is-added');
      if (label && btn.dataset.addedLabel) label.textContent = btn.dataset.addedLabel;
      window.setTimeout(() => {
        btn.classList.remove('is-added');
        if (label && original) label.textContent = original;
      }, 1400);

      if (btn.dataset.openCart !== 'false') {
        document.dispatchEvent(new CustomEvent('ack:cart-open', { detail: { key: btn.dataset.cartKey || DEFAULT_KEY } }));
      }
    });
  });
}
