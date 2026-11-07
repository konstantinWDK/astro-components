// src/data/registry/ecommerce.ts
// E-commerce components. Source code is loaded from the real files via `source()`.
import type { ComponentDoc } from './types';
import { source } from './sources';

interface Meta {
  slug: string;
  name: string;
  file: string;
  description: string;
  tags: string[];
  featured?: boolean;
  usage: string;
  deps?: string[];
}

const SHARED = 'types.ts, cart-store.ts and product-icons.ts';

function item(meta: Meta): ComponentDoc {
  const component = meta.file.replace('.astro', '');
  const steps = [
    'Zero runtime dependencies — the cart is a tiny localStorage store.',
    `Copy the shared helpers (${SHARED}) from the "Cart Store" page into src/components/ecommerce/.`,
    `Copy ${meta.file} next to them.`,
    ...(meta.deps?.length ? [`It also uses ${meta.deps.join(', ')} — copy those from their pages too.`] : []),
    'Import the component and pass your products.',
  ];
  return {
    slug: meta.slug,
    name: meta.name,
    description: meta.description,
    category: 'ecommerce',
    tags: ['ecommerce', 'shop', ...meta.tags],
    featured: meta.featured ?? false,
    code: source(`ecommerce/${meta.file}`),
    usage: `---
import { ${component} } from 'astro-component-kit/ecommerce';
---

${meta.usage.trim()}`,
    installation: {
      manual: steps.map((step, i) => `${i + 1}. ${step}`).join('\n'),
    },
  };
}

export const ecommerce: ComponentDoc[] = [
  {
    slug: 'cart-store',
    name: 'Cart Store',
    description: 'Framework-free cart state shared by every shop component: localStorage persistence, cross-tab sync, add-to-cart binding and money formatting.',
    category: 'ecommerce',
    tags: ['ecommerce', 'cart', 'state', 'localStorage', 'foundation'],
    featured: false,
    code: source('ecommerce/cart-store.ts'),
    usage: `<script>
  import { createCart, formatMoney } from 'astro-component-kit/ecommerce';

  const cart = createCart('my-store');
  cart.add({ id: 'aurora-headphones', name: 'Aurora Headphones', price: 189 });
  cart.subscribe((items) => console.log(items.length, formatMoney(cart.subtotal())));
</script>

<!-- Any button becomes an add-to-cart button -->
<button data-add-to-cart='{"id":"mug","name":"Ember Mug","price":34}' data-cart-key="my-store">
  <span data-label>Add to cart</span>
</button>`,
    installation: {
      manual: `1. Copy cart-store.ts, types.ts and product-icons.ts into src/components/ecommerce/.
2. Import createCart() in any client <script>; components broadcast changes on the "ack:cart" event.
3. Call bindAddToCart() once to wire every [data-add-to-cart] button on the page.`,
    },
  },
  item({
    slug: 'store-product-card', name: 'Store Product Card', file: 'StoreProductCard.astro', featured: true,
    description: 'Shop product tile with illustration or photo, badge, star rating, colour swatches, compare-at price, wishlist toggle and add-to-cart.',
    tags: ['card', 'product', 'add-to-cart', 'wishlist'], deps: ['Badge', 'Product Media', 'Product Rating'],
    usage: `<StoreProductCard
  href="/product/aurora-headphones/"
  categoryLabel="Audio"
  product={{
    slug: 'aurora-headphones',
    name: 'Aurora Wireless Headphones',
    price: 189,
    compareAt: 229,
    category: 'audio',
    rating: 4.8,
    reviews: 312,
    badge: '-18%',
    icon: 'headphones',
    hue: 38,
  }}
/>`,
  }),
  item({
    slug: 'product-grid', name: 'Product Grid', file: 'ProductGrid.astro',
    description: 'Responsive grid of product cards with an empty state — the target of FilterSidebar and ProductToolbar.',
    tags: ['grid', 'catalog', 'listing'], deps: ['Store Product Card'],
    usage: `<ProductGrid products={products} productBase="/product/" columns={4} />`,
  }),
  item({
    slug: 'store-header', name: 'Store Header', file: 'StoreHeader.astro', featured: true,
    description: 'Shop navbar with category dropdowns, search, account and a cart button whose badge updates live; collapses to a mobile menu.',
    tags: ['navbar', 'header', 'menu', 'cart'],
    usage: `<StoreHeader
  brand="Nova Store"
  links={[
    { label: 'Shop', href: '/shop/', children: [
      { label: 'Audio', href: '/shop/?category=audio', description: 'Headphones & speakers' },
      { label: 'Bags', href: '/shop/?category=bags' },
    ] },
    { label: 'Sale', href: '/shop/?sort=price-asc' },
  ]}
/>`,
  }),
  item({
    slug: 'cart-drawer', name: 'Cart Drawer', file: 'CartDrawer.astro', featured: true,
    description: 'Slide-in cart with quantity steppers, remove, free-shipping progress and subtotal. Accessible modal with focus trap.',
    tags: ['cart', 'drawer', 'overlay', 'checkout'],
    usage: `<!-- Opens from StoreHeader's cart button or any [data-cart-open] element -->
<CartDrawer checkoutHref="/checkout/" freeShippingThreshold={75} />`,
  }),
  item({
    slug: 'promo-bar', name: 'Promo Bar', file: 'PromoBar.astro',
    description: 'Slim announcement bar with rotating messages, pause on hover and a dismiss button remembered per session.',
    tags: ['announcement', 'banner', 'promo'],
    usage: `<PromoBar messages={['Free shipping over $75', 'Code ASTRO10 = 10% off']} />`,
  }),
  item({
    slug: 'store-hero', name: 'Store Hero', file: 'StoreHero.astro', featured: true,
    description: 'Shop landing hero with gradient headline, CTAs, proof stats and a floating featured-product stage.',
    tags: ['hero', 'landing', 'product'], deps: ['Product Media', 'Product Rating'],
    usage: `<StoreHero
  title="Gear that feels"
  highlight="made for you"
  primary={{ label: 'Shop now', href: '/shop/' }}
/>`,
  }),
  item({
    slug: 'category-tiles', name: 'Category Tiles', file: 'CategoryTiles.astro',
    description: 'Category grid with illustrated tiles, product counts and an animated arrow.',
    tags: ['categories', 'grid', 'navigation'], deps: ['Product Media'],
    usage: `<CategoryTiles categories={[
  { id: 'audio', name: 'Audio', href: '/shop/?category=audio', count: 18, icon: 'headphones', hue: 38 },
  { id: 'bags', name: 'Bags', href: '/shop/?category=bags', count: 9, icon: 'backpack', hue: 150 },
]} />`,
  }),
  item({
    slug: 'trust-badges', name: 'Trust Badges', file: 'TrustBadges.astro',
    description: 'Row of store guarantees — shipping, returns, secure payment and support — in card, inline or divided style.',
    tags: ['trust', 'guarantee', 'features'],
    usage: `<TrustBadges variant="divided" />`,
  }),
  item({
    slug: 'filter-sidebar', name: 'Filter Sidebar', file: 'FilterSidebar.astro', featured: true,
    description: 'Category, price, colour, rating and stock filters that filter and sort a ProductGrid instantly, synced with the URL.',
    tags: ['filters', 'catalog', 'search', 'form'],
    usage: `<FilterSidebar target="shop-grid" id="shop-filters" maxPrice={300} />
<ProductToolbar target="shop-grid" filtersId="shop-filters" total={products.length} />
<ProductGrid id="shop-grid" products={products} />`,
  }),
  item({
    slug: 'product-toolbar', name: 'Product Toolbar', file: 'ProductToolbar.astro',
    description: 'Catalogue heading with a live result count and a ModernSelect sort control wired to FilterSidebar.',
    tags: ['toolbar', 'sort', 'catalog'], deps: ['Modern Select'],
    usage: `<ProductToolbar title="All products" total={12} target="shop-grid" filtersId="shop-filters" />`,
  }),
  item({
    slug: 'product-gallery', name: 'Product Gallery', file: 'ProductGallery.astro',
    description: 'Product image viewer with large stage and keyboard-navigable thumbnails; generates illustrated angles when there are no photos.',
    tags: ['gallery', 'images', 'product-page'], deps: ['Product Media'],
    usage: `<ProductGallery images={['/img/p1.webp', '/img/p2.webp']} alt="Aurora headphones" />`,
  }),
  item({
    slug: 'variant-picker', name: 'Variant Picker', file: 'VariantPicker.astro',
    description: 'Colour swatches or size pills as a native radio group that keeps an add-to-cart button in sync.',
    tags: ['variants', 'swatch', 'size', 'radio'],
    usage: `<VariantPicker label="Size" type="pill" target="add-btn" options={[{ label: 'S' }, { label: 'M' }, { label: 'L', disabled: true }]} />`,
  }),
  item({
    slug: 'product-buy-box', name: 'Product Buy Box', file: 'ProductBuyBox.astro', featured: true,
    description: 'Product detail purchase panel: price, savings, colour/size pickers, quantity stepper, add to cart, buy now and expandable details.',
    tags: ['product-page', 'add-to-cart', 'pdp'], deps: ['Badge', 'Stepper Input', 'Variant Picker', 'Product Rating', 'Trust Badges'],
    usage: `<ProductBuyBox product={product} checkoutHref="/checkout/" />`,
  }),
  item({
    slug: 'order-summary', name: 'Order Summary', file: 'OrderSummary.astro',
    description: 'Checkout sidebar with cart lines, promo codes, shipping, tax and a live total that follows the chosen shipping method.',
    tags: ['checkout', 'summary', 'totals', 'promo'],
    usage: `<OrderSummary taxRate={0.08} promoCodes={{ ASTRO10: 10 }} />`,
  }),
  item({
    slug: 'checkout-form', name: 'Checkout Form', file: 'CheckoutForm.astro', featured: true,
    description: 'One-page checkout — contact, delivery, shipping and payment — with autocomplete hints, validation and an animated confirmation.',
    tags: ['checkout', 'form', 'payment'], deps: ['Animated Input', 'Modern Select', 'Custom Radio Group', 'Animated Checkmark'],
    usage: `<div class="checkout-layout">
  <CheckoutForm continueHref="/" />
  <OrderSummary />
</div>`,
  }),
  item({
    slug: 'cart-toast', name: 'Cart Toast', file: 'CartToast.astro', featured: true,
    description: 'Live stacked notifications: "Added to cart" with a View cart action, plus any custom notice sent through the ack:notify event.',
    tags: ['toast', 'notification', 'alert', 'live'],
    usage: `<CartToast position="bottom-right" />

<script>
  // Any notice, from anywhere:
  document.dispatchEvent(new CustomEvent('ack:notify', {
    detail: { title: 'Price drop!', text: 'Aurora Headphones is now $169', tone: 'success' },
  }));
</script>`,
  }),
  item({
    slug: 'live-activity-toast', name: 'Live Activity Toast', file: 'LiveActivityToast.astro',
    description: 'Rotating social-proof notice of recent purchases that slides in and out; pauses on hover and can be dismissed for the session.',
    tags: ['social-proof', 'toast', 'notification', 'conversion'],
    usage: `<LiveActivityToast items={[
  { name: 'Lucía', city: 'Madrid', product: 'Aurora Headphones', icon: 'headphones', hue: 38, ago: '2 min ago' },
  { name: 'Tom', city: 'Berlin', product: 'Trail Backpack', icon: 'backpack', hue: 150, ago: '6 min ago' },
]} />`,
  }),
  item({
    slug: 'countdown-banner', name: 'Countdown Banner', file: 'CountdownBanner.astro', featured: true,
    description: 'Live sale countdown with days, hours, minutes and seconds, a CTA and an ended state; fixed date or rolling per-visitor deadline.',
    tags: ['countdown', 'timer', 'sale', 'banner', 'urgency'],
    usage: `<CountdownBanner endsAt="2026-12-01T00:00:00Z" title="Black Friday ends soon" cta={{ label: 'Shop deals', href: '/shop/' }} />`,
  }),
  item({
    slug: 'stock-indicator', name: 'Stock Indicator', file: 'StockIndicator.astro',
    description: 'Low-stock urgency notice with a level bar and a live "people viewing" counter for product pages.',
    tags: ['stock', 'urgency', 'inventory', 'product-page'],
    usage: `<StockIndicator stock={3} viewers={14} />`,
  }),
  item({
    slug: 'product-card-minimal', name: 'Product Card Minimal', file: 'ProductCardMinimal.astro', featured: true,
    description: 'Editorial product card: tall media that swaps view on hover, quick-add sizes, name, price and colour count.',
    tags: ['card', 'product', 'editorial', 'quick-add'], deps: ['Product Media'],
    usage: `<ProductCardMinimal href="/product/linen-overshirt/" index={1} product={{
  slug: 'linen-overshirt', name: 'Linen Overshirt', price: 145, category: 'clothing',
  sizes: ['S', 'M', 'L'], icon: 'shirt', hue: 30,
}} />`,
  }),
  item({
    slug: 'filter-bar', name: 'Filter Bar', file: 'FilterBar.astro',
    description: 'Horizontal catalogue toolbar with category chips, a refine panel (price, colour, stock), sort and live count.',
    tags: ['filters', 'toolbar', 'catalog', 'sort'],
    usage: `<FilterBar target="grid" total={12} />
<ul id="grid">{products.map((p) => <li><ProductCardMinimal product={p} /></li>)}</ul>`,
  }),
  item({
    slug: 'cart-page-list', name: 'Cart Page List', file: 'CartPageList.astro', featured: true,
    description: 'Full shopping-bag page: line items with quantity and remove, gift note, free-shipping progress and checkout summary.',
    tags: ['cart', 'bag', 'checkout', 'page'],
    usage: `<CartPageList checkoutHref="/checkout/" continueHref="/shop/" freeShippingThreshold={150} />`,
  }),
  item({
    slug: 'product-media', name: 'Product Media', file: 'ProductMedia.astro',
    description: 'Product visual: a real photo, or a hue-tinted backdrop with one of 25 line-art product illustrations (including action figures, robots, dinos and playsets).',
    tags: ['image', 'illustration', 'placeholder'],
    usage: `<ProductMedia icon="sneaker" hue={0} ratio="4 / 3" />`,
  }),
  item({
    slug: 'product-rating', name: 'Product Rating', file: 'ProductRating.astro',
    description: 'Read-only star rating with fractional fill, value and review count, exposed as a single accessible label.',
    tags: ['rating', 'stars', 'reviews'],
    usage: `<ProductRating value={4.6} count={128} size="md" />`,
  }),
  item({
    slug: 'toy-figure-card', name: 'Toy Figure Card', file: 'ToyFigureCard.astro', featured: true,
    description: 'Trading-card product card for toys and collectibles: universe and scale strip, halftone panel, character, age and articulation chips, pre-order and limited-edition notes.',
    tags: ['card', 'product', 'toys', 'collectibles', 'action-figures'], deps: ['Product Media', 'Product Rating', 'Badge'],
    usage: `<ToyFigureCard
  href="/product/captain-nova-6in/"
  product={{ slug: 'captain-nova-6in', name: 'Captain Nova · Hero Pose', price: 24.99, category: 'figures',
    rating: 4.8, reviews: 412, icon: 'figure', hue: 212, facets: { character: 'captain-nova' } }}
  meta={{ character: 'Captain Nova', universe: 'Star Rangers', scale: '6 in', age: '4+', articulation: 28 }}
/>`,
  }),
  item({
    slug: 'toy-figure-grid', name: 'Toy Figure Grid', file: 'ToyFigureGrid.astro',
    description: 'Responsive grid of Toy Figure Cards with an empty state; FilterSidebar facets (character, universe, scale, age) and sorting filter it instantly.',
    tags: ['grid', 'catalog', 'toys', 'filters', 'facets'], deps: ['Toy Figure Card', 'Product Media', 'Product Rating', 'Badge'],
    usage: `<FilterSidebar target="toy-grid" id="toy-filters" categoryLabel="Type" colors={[]}
  facets={[{ name: 'character', label: 'Character', options: [{ id: 'vex', name: 'Vex' }, { id: 'rexa', name: 'Rexa' }] }]} />
<ToyFigureGrid id="toy-grid" products={products} meta={meta} productBase="/product/" />
<!-- each product: facets: { character: ['vex'] } → filtered by ?character=vex -->`,
  }),
];
