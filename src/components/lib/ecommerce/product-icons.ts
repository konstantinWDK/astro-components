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
  // Toys & action figures
  figure: '<circle cx="31" cy="11" r="6"/><path d="M24 21h15l-2 17H26z"/><path d="M24 21l-8 12 3 5"/><path d="M39 21l7-10"/><circle cx="47.5" cy="8.5" r="2.5"/><path d="M26 30h12"/><path d="M27 38l-3 19h6l2-12 2 12h6l-3-19"/><path d="M24 22c-6 9-8 20-7 31l8-3"/>',
  robot: '<rect x="22" y="7" width="20" height="14" rx="3"/><path d="M32 7V2"/><circle cx="28" cy="14" r="2"/><circle cx="36" cy="14" r="2"/><rect x="18" y="23" width="28" height="20" rx="4"/><path d="M26 30h12M26 36h12"/><rect x="8" y="25" width="8" height="15" rx="3"/><rect x="48" y="25" width="8" height="15" rx="3"/><rect x="22" y="45" width="8" height="14" rx="2"/><rect x="34" y="45" width="8" height="14" rx="2"/>',
  dino: '<path d="M8 41c4-13 14-20 26-20h9c6 0 11 4 11 9v4h-9l-2 3c-2 4-6 6-10 6l-2 14h-6l-2-9-4 9h-6l3-13c-4 0-6-1-8-3z"/><circle cx="46" cy="27" r="1.6"/><path d="M38 36l4 4M45 34h3"/><path d="M14 33l-4-5M20 27l-3-6M27 23l-1-6"/>',
  monster: '<path d="M16 58V31c0-10 7-18 16-18s16 8 16 18v27"/><path d="M21 18l-5-11 11 6M43 18l5-11-11 6"/><path d="M24 28l6 2M40 28l-6 2"/><path d="M23 40h18l-3 5-3-4-3 4-3-4-3 4z"/><path d="M16 38l-9 7M48 38l9 7M14 58h12M38 58h12"/>',
  ninja: '<circle cx="32" cy="14" r="8"/><path d="M24 13h16"/><path d="M28 15h2M34 15h2"/><path d="M40 12l9-4M40 15l8 3"/><path d="M24 25h16l3 15H21z"/><path d="M50 18 18 56"/><path d="M25 40l-3 18M39 40l3 18"/><path d="M24 26l-8 10M40 26l7 8"/>',
  rocket: '<path d="M32 4c8 6 12 16 12 28v14H20V32c0-12 4-22 12-28z"/><circle cx="32" cy="24" r="5"/><path d="M20 36l-8 10v7h8M44 36l8 10v7h-8"/><path d="M27 50c0 6 2 10 5 10s5-4 5-10"/>',
  mech: '<path d="M18 13h28l4 15H14z"/><rect x="26" y="17" width="12" height="7" rx="2"/><path d="M7 18h11M46 18h11"/><path d="M21 28l-5 14 4 16M43 28l5 14-4 16"/><circle cx="16" cy="42" r="2.5"/><circle cx="48" cy="42" r="2.5"/><path d="M15 58h10M39 58h10"/>',
  castle: '<path d="M8 58V25h7v6h6v-6h7v6h8v-6h7v6h6v-6h7v33z"/><path d="M26 58V47a6 6 0 0 1 12 0v11"/><path d="M32 25V8l10 4-10 4"/><path d="M15 38h4M45 38h4"/>',
  mystery: '<path d="M12 21l20-9 20 9v25l-20 11-20-11z"/><path d="M12 21l20 9 20-9M32 30v27"/><path d="M19 35c0-4 6-4 6 0 0 3-3 3-3 6M22 46v1"/><path d="M39 36l6-3M39 42l6-3"/>',
} as const;

export type ProductIcon = keyof typeof productIcons;

export function productIcon(name?: string): string {
  return productIcons[(name as ProductIcon) ?? 'bag'] ?? productIcons.bag;
}
