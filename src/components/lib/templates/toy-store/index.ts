// src/components/lib/templates/toy-store/index.ts
// Toy store template ("Kapow"): a comic-book "toy box" store for action figures, vehicles, playsets
// and collectibles, with shop-by-character filters, character pages, a gift finder by age and a
// collector club — built from the e-commerce kit and the Toy* sections.
//
//   import { ToyHomePage } from 'astro-component-kit/templates/toy-store';
//   <ToyHomePage routes={{ home: '/', shop: '/shop/', characters: '/characters/', character: '/characters/', product: '/product/', checkout: '/checkout/' }} />

export { default as ToyLayout } from './ToyLayout.astro';
export { default as ToyHomePage } from './ToyHomePage.astro';
export { default as ToyShopPage } from './ToyShopPage.astro';
export { default as ToyCharactersPage } from './ToyCharactersPage.astro';
export { default as ToyCharacterPage } from './ToyCharacterPage.astro';
export { default as ToyProductPage } from './ToyProductPage.astro';
export { default as ToyCheckoutPage } from './ToyCheckoutPage.astro';

export {
  kapowStore, toyRoutes, toyProductHref, toyCharacterHref, toyShopHref, toyAgeGroups, toyProducts,
  pickToyProducts, toyCharacter, toyUniverse, productsForCharacter, toyCardMeta, toyCharacterItems,
} from './data';
export type { ToyStore, ToyRoutes, ToyProduct, ToyCharacter, ToyUniverse, ToyScale, ToyAgeGroup } from './data';
