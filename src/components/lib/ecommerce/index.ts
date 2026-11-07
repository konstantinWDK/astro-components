// src/components/lib/ecommerce/index.ts
// Barrel export for e-commerce components (shop UI + client cart store).

export { default as ProductMedia } from './ProductMedia.astro';
export { default as ProductRating } from './ProductRating.astro';
export { default as StoreProductCard } from './StoreProductCard.astro';
export { default as ProductGrid } from './ProductGrid.astro';
export { default as PromoBar } from './PromoBar.astro';
export { default as StoreHeader } from './StoreHeader.astro';
export { default as CartDrawer } from './CartDrawer.astro';
export { default as StoreHero } from './StoreHero.astro';
export { default as CategoryTiles } from './CategoryTiles.astro';
export { default as TrustBadges } from './TrustBadges.astro';
export { default as FilterSidebar } from './FilterSidebar.astro';
export { default as ProductToolbar } from './ProductToolbar.astro';
export { default as ProductGallery } from './ProductGallery.astro';
export { default as VariantPicker } from './VariantPicker.astro';
export { default as ProductBuyBox } from './ProductBuyBox.astro';
export { default as OrderSummary } from './OrderSummary.astro';
export { default as CheckoutForm } from './CheckoutForm.astro';
export { default as CartToast } from './CartToast.astro';
export { default as LiveActivityToast } from './LiveActivityToast.astro';
export { default as CountdownBanner } from './CountdownBanner.astro';
export { default as StockIndicator } from './StockIndicator.astro';
export { default as ProductCardMinimal } from './ProductCardMinimal.astro';
export { default as FilterBar } from './FilterBar.astro';
export { default as CartPageList } from './CartPageList.astro';
export { default as ToyFigureCard } from './ToyFigureCard.astro';
export { default as ToyFigureGrid } from './ToyFigureGrid.astro';

export { createCart, bindAddToCart, formatMoney, lineId, CART_EVENT, ADDED_EVENT, NOTIFY_EVENT } from './cart-store';
export { applyCatalogFilter, syncCatalogUrl, facetAttrs, matchesFacets } from './catalog-filter';
export type { CatalogState } from './catalog-filter';
export { productIcons, productIcon } from './product-icons';
export type { ProductIcon } from './product-icons';
export type { Product, ProductColor, StoreCategory, CartItem, ShippingRate, MoneyFormat, ToyCardMeta } from './types';
