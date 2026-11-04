// src/components/lib/ecommerce/catalog-filter.ts
// Client-side filter + sort for any grid of `[data-product]` cards
// (StoreProductCard and ProductCardMinimal both expose the same data attributes).

export interface CatalogState {
  categories: string[];
  colors: string[];
  maxPrice: number;
  minRating: number;
  inStockOnly: boolean;
  sort: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'name' | string;
}

/** Filters and re-orders the cards inside `grid`. Returns the number of visible cards. */
export function applyCatalogFilter(grid: HTMLElement, state: CatalogState): number {
  const cards = Array.from(grid.querySelectorAll<HTMLElement>('[data-product]'));
  cards.forEach((c, i) => { if (c.dataset.index === undefined) c.dataset.index = String(i); });
  let visible = 0;

  for (const card of cards) {
    const d = card.dataset;
    const colors = (d.colors || '').split(',').filter(Boolean);
    const ok =
      (!state.categories.length || state.categories.includes(d.category || '')) &&
      Number(d.price) <= state.maxPrice &&
      Number(d.rating || 0) >= state.minRating &&
      (!state.inStockOnly || d.stock === 'in') &&
      (!state.colors.length || state.colors.some((c) => colors.includes(c)));
    // Cards may be wrapped (e.g. in <li>): hide the direct child of the grid.
    const item = card.parentElement === grid ? card : (card.closest(`#${CSS.escape(grid.id)} > *`) as HTMLElement | null) ?? card;
    item.hidden = !ok;
    if (ok) visible++;
  }

  const items = cards.map((card) => ({ card, item: card.parentElement === grid ? card : ((card.closest(`#${CSS.escape(grid.id)} > *`) as HTMLElement | null) ?? card) }));
  items.sort((a, b) => {
    const A = a.card.dataset, B = b.card.dataset;
    switch (state.sort) {
      case 'price-asc': return Number(A.price) - Number(B.price);
      case 'price-desc': return Number(B.price) - Number(A.price);
      case 'rating': return Number(B.rating) - Number(A.rating);
      case 'name': return (A.name || '').localeCompare(B.name || '');
      default: return Number(A.index) - Number(B.index);
    }
  });
  grid.append(...items.map((i) => i.item));

  const empty = grid.parentElement?.querySelector<HTMLElement>('[data-product-empty]');
  if (empty) empty.hidden = visible > 0;
  document.querySelectorAll<HTMLElement>(`[data-result-count="${grid.id}"]`).forEach((n) => { n.textContent = String(visible); });
  return visible;
}

/** Reads/writes `?category=` and `?sort=` so filtered views can be shared. */
export function syncCatalogUrl(state: Pick<CatalogState, 'categories' | 'sort'>): void {
  const url = new URL(window.location.href);
  if (state.categories.length) url.searchParams.set('category', state.categories.join(','));
  else url.searchParams.delete('category');
  if (state.sort && state.sort !== 'featured') url.searchParams.set('sort', state.sort);
  else url.searchParams.delete('sort');
  window.history.replaceState(null, '', url);
}
