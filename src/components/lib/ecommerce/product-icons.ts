// src/components/lib/ecommerce/product-icons.ts
// Line-art product illustrations (64×64 viewBox, stroke = currentColor).
// Used by ProductMedia so demo stores look finished without any external images.

export const productIcons = {
  headphones: '<path d="M12 38v-6a20 20 0 0 1 40 0v6"/><rect x="8" y="36" width="10" height="16" rx="4"/><rect x="46" y="36" width="10" height="16" rx="4"/><path d="M18 44h-2M46 44h2"/>',
  watch: '<rect x="18" y="18" width="28" height="28" rx="9"/><path d="M24 18l2-10h12l2 10M24 46l2 10h12l2-10"/><path d="M32 25v7l5 4"/><path d="M46 30h3"/>',
  sneaker: '<path d="M6 44c0-6 2-14 6-20l8 4c3 2 7 2 10 0l4-3c6 8 14 11 22 12 2 0 3 2 3 4v3H6z"/><path d="M6 47v3h53v-3"/><path d="M22 30l3 4M27 28l3 4M32 26l2 4"/>',
  backpack: '<rect x="14" y="16" width="36" height="42" rx="10"/><path d="M24 16v-4a8 8 0 0 1 16 0v4"/><rect x="21" y="36" width="22" height="13" rx="4"/><path d="M21 42h22"/>',
  camera: '<rect x="6" y="18" width="52" height="34" rx="7"/><path d="M22 18l4-7h12l4 7"/><circle cx="32" cy="35" r="10"/><circle cx="32" cy="35" r="4"/><path d="M48 25h3"/>',
  lamp: '<path d="M20 10h24l8 20H12z"/><path d="M32 30v20"/><path d="M20 56h24"/><path d="M26 50h12"/>',
  keyboard: '<rect x="4" y="20" width="56" height="26" rx="5"/><path d="M11 28h3M19 28h3M27 28h3M35 28h3M43 28h3M51 28h2M13 35h3M21 35h3M29 35h3M37 35h3M45 35h4M18 41h28"/>',
  sunglasses: '<path d="M4 26h56"/><path d="M8 26c0 9 3 14 10 14s10-5 10-14"/><path d="M36 26c0 9 3 14 10 14s10-5 10-14"/><path d="M28 30c2-2 6-2 8 0"/>',
  bottle: '<path d="M26 6h12v8l4 6v34a4 4 0 0 1-4 4H26a4 4 0 0 1-4-4V20l4-6z"/><path d="M22 28h20M22 44h20"/>',
  speaker: '<rect x="16" y="6" width="32" height="52" rx="8"/><circle cx="32" cy="38" r="10"/><circle cx="32" cy="38" r="3"/><circle cx="32" cy="17" r="4"/>',
  jacket: '<path d="M22 8l10 6 10-6 12 8 4 22-8 2v18H14V40l-8-2 4-22z"/><path d="M32 14v42"/><path d="M22 8l-2 12 6 6M42 8l2 12-6 6"/><path d="M38 34h4M38 42h4"/>',
  mug: '<path d="M12 18h32v28a8 8 0 0 1-8 8H20a8 8 0 0 1-8-8z"/><path d="M44 24h4a6 6 0 0 1 0 12h-4"/><path d="M22 8c-2 3 2 4 0 7M30 8c-2 3 2 4 0 7"/>',
  plant: '<path d="M20 40h24l-3 18H23z"/><path d="M32 40V22"/><path d="M32 30c-8 0-12-6-12-14 8 0 12 6 12 14zM32 26c0-8 4-14 12-14 0 8-4 14-12 14z"/>',
  shirt: '<path d="M22 8l-14 8 5 12 7-3v31h24V25l7 3 5-12-14-8c-1 4-5 6-10 6s-9-2-10-6z"/>',
  bag: '<path d="M12 22h40l-4 34H16z"/><path d="M24 22v-6a8 8 0 0 1 16 0v6"/><path d="M24 30v2M40 30v2"/>',
  phone: '<rect x="18" y="4" width="28" height="56" rx="7"/><path d="M28 10h8"/><circle cx="32" cy="52" r="2"/>',
} as const;

export type ProductIcon = keyof typeof productIcons;

export function productIcon(name?: string): string {
  return productIcons[(name as ProductIcon) ?? 'bag'] ?? productIcons.bag;
}
