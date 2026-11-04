// src/components/docs/ecommerce-previews.ts
// Demo props + preferred width for e-commerce components rendered outside a store
// (docs preview stage and template miniatures). Components render without children.

const demoCart = [
  { id: 'aurora-headphones::Graphite', name: 'Aurora Wireless Headphones', price: 189, qty: 1, variant: 'Graphite', icon: 'headphones', hue: 38 },
  { id: 'ember-mug::Clay', name: 'Ember Stoneware Mug', price: 34, qty: 2, variant: 'Clay', icon: 'mug', hue: 12 },
];
// Props + max width for e-commerce previews (they render without children).
export const ecommercePreview: Record<string, { props?: Record<string, any>; maxWidth?: string }> = {
  'cart-store': { props: { inline: true, demoItems: demoCart, cartKey: 'docs-cart' }, maxWidth: '440px' },
  'cart-drawer': { props: { inline: true, demoItems: demoCart, cartKey: 'docs-cart' }, maxWidth: '440px' },
  'store-header': { props: { sticky: false } },
  'store-product-card': { maxWidth: '300px' },
  'product-media': { maxWidth: '320px' },
  'product-rating': { props: { size: 'lg', count: 128 }, maxWidth: '320px' },
  'variant-picker': { maxWidth: '360px' },
  'product-buy-box': { maxWidth: '520px' },
  'product-gallery': { maxWidth: '640px' },
  'filter-sidebar': { maxWidth: '300px' },
  'cart-toast': { props: { demo: true }, maxWidth: '400px' },
  'live-activity-toast': { props: { demo: true }, maxWidth: '380px' },
  'stock-indicator': { maxWidth: '420px' },
  'product-card-minimal': { maxWidth: '300px' },
  'cart-page-list': { props: { demoItems: demoCart, cartKey: 'docs-cart' } },
  'filter-bar': { props: { sticky: false } },
  'app-sidebar': { props: { fullHeight: false }, maxWidth: '280px' },
  'switch-row': { maxWidth: '520px' },
  'plan-usage-card': { maxWidth: '520px' },
  'guest-profile-card': { maxWidth: '640px' },
  'arrivals-board': { maxWidth: '640px' },
  'order-summary': { props: { sticky: false, cartKey: 'docs-cart' }, maxWidth: '420px' },
};

/** Props for sections that need tweaks when shown as a miniature (no sticky headers, etc.). */
export const sectionPreviewProps: Record<string, Record<string, any>> = {
  'shop-header-editorial': { sticky: false },
};
