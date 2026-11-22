// src/data/registry/templates.ts
// Complete multi-page templates built from library components.
import type { Locale } from '../../config/site';

export interface TemplatePage {
  id: string;
  /** Path relative to the template preview base ('' = home). */
  path: string;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  /** Astro file the user creates for this page. */
  file: string;
  code: string;
}

export interface TemplateDoc {
  slug: string;
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  tags: string[];
  /** Where the live preview lives on this site. */
  previewBase: string;
  importPath: string;
  pages: TemplatePage[];
  /** Components created for this template (registry slugs). */
  newComponents: string[];
  /** Existing library components reused by the template (registry slugs). */
  reusedComponents: string[];
  storeConfigExample: string;
  /** Optional peer dependencies the template needs (shown instead of "0 deps"). */
  peerDeps?: string[];
}

const IMPORT = 'astro-component-kit/templates/ecommerce';

export const templates: TemplateDoc[] = [
  {
    slug: 'ecommerce',
    name: { en: 'E-commerce Store', es: 'Tienda e-commerce', ru: 'Интернет-магазин' },
    tagline: {
      en: 'A complete, accessible online store: home, catalogue, product page, cart and checkout.',
      es: 'Una tienda online completa y accesible: home, catálogo, ficha de producto, carrito y checkout.',
      ru: 'Полноценный доступный интернет-магазин: главная, каталог, карточка товара, корзина и оформление заказа.',
    },
    description: {
      en: 'Nova Store is a production-ready e-commerce template for Astro. Five pages share one cart that persists in the browser, the catalogue filters instantly without a backend, and the checkout validates, totals shipping, tax and promo codes and confirms the order. Every block is a library component, so you can use the whole store or just the pieces you need.',
      es: 'Nova Store es una plantilla e-commerce lista para producción en Astro. Cinco páginas comparten un carrito que se guarda en el navegador, el catálogo filtra al instante sin backend y el checkout valida, calcula envío, impuestos y códigos promocionales y confirma el pedido. Cada bloque es un componente de la librería: puedes usar la tienda entera o solo las piezas que necesites.',
      ru: 'Nova Store — готовый к продакшену шаблон интернет-магазина на Astro. Пять страниц используют общую корзину, которая сохраняется в браузере, каталог фильтруется мгновенно без бэкенда, а оформление заказа проверяет данные, считает доставку, налог и промокоды и подтверждает заказ. Каждый блок — компонент библиотеки: используйте весь магазин или только нужные части.',
    },
    highlights: {
      en: ['Persistent cart with drawer and live badge', 'Instant filters: category, price, colour, rating, stock', 'Checkout with shipping, tax and promo codes', 'Zero runtime dependencies, WCAG AA, mobile-first', 'Product illustrations included — no images needed', 'Light and dark mode with a toggle', 'Live notices: cart toasts, sale countdown, low stock and recent purchases'],
      es: ['Carrito persistente con panel lateral y contador en vivo', 'Filtros instantáneos: categoría, precio, color, valoración y stock', 'Checkout con envío, impuestos y códigos promocionales', 'Sin dependencias en runtime, WCAG AA y mobile-first', 'Ilustraciones de producto incluidas: no necesitas imágenes', 'Modo claro y oscuro con selector', 'Avisos en vivo: toasts del carrito, cuenta atrás, stock bajo y compras recientes'],
      ru: ['Сохраняемая корзина с панелью и живым счётчиком', 'Мгновенные фильтры: категория, цена, цвет, рейтинг, наличие', 'Оформление заказа с доставкой, налогом и промокодами', 'Без runtime-зависимостей, WCAG AA, mobile-first', 'Иллюстрации товаров в комплекте — изображения не нужны', 'Светлая и тёмная тема с переключателем', 'Живые уведомления: корзина, обратный отсчёт, малый остаток и недавние покупки'],
    },
    tags: ['ecommerce', 'shop', 'store', 'cart', 'checkout', 'catalog'],
    previewBase: '/preview/ecommerce/',
    importPath: IMPORT,
    pages: [
      {
        id: 'home',
        path: '',
        name: { en: 'Store home', es: 'Home de la tienda', ru: 'Главная магазина' },
        description: {
          en: 'Hero with featured product, guarantees, categories, best sellers, editorial banner, new arrivals and newsletter.',
          es: 'Hero con producto destacado, garantías, categorías, más vendidos, banner editorial, novedades y newsletter.',
          ru: 'Hero с избранным товаром, гарантии, категории, хиты продаж, баннер, новинки и рассылка.',
        },
        file: 'src/pages/index.astro',
        code: `---
import { StoreHomePage } from '${IMPORT}';
---

<StoreHomePage />`,
      },
      {
        id: 'category',
        path: 'shop/',
        name: { en: 'Category page', es: 'Página de categoría', ru: 'Страница категории' },
        description: {
          en: 'Catalogue with breadcrumb, category chips, sticky filters, live result count and sorting.',
          es: 'Catálogo con migas de pan, chips de categoría, filtros fijos, contador de resultados y ordenación.',
          ru: 'Каталог с хлебными крошками, чипами категорий, фильтрами, счётчиком результатов и сортировкой.',
        },
        file: 'src/pages/shop.astro',
        code: `---
import { StoreCategoryPage } from '${IMPORT}';
---

<!-- Category links use /shop/?category=audio -->
<StoreCategoryPage />`,
      },
      {
        id: 'product',
        path: 'product/aurora-headphones/',
        name: { en: 'Product page', es: 'Ficha de producto', ru: 'Карточка товара' },
        description: {
          en: 'Gallery, buy box with colour/size pickers and quantity, reviews summary and related products.',
          es: 'Galería, bloque de compra con color, talla y cantidad, resumen de reseñas y productos relacionados.',
          ru: 'Галерея, блок покупки с выбором цвета, размера и количества, отзывы и похожие товары.',
        },
        file: 'src/pages/product/[slug].astro',
        code: `---
import { StoreProductPage, demoStore } from '${IMPORT}';

export function getStaticPaths() {
  return demoStore.products.map((p) => ({ params: { slug: p.slug } }));
}
---

<StoreProductPage slug={Astro.params.slug} />`,
      },
      {
        id: 'checkout',
        path: 'checkout/',
        name: { en: 'Checkout', es: 'Checkout', ru: 'Оформление заказа' },
        description: {
          en: 'Focus-mode checkout with steps, contact, delivery, shipping, payment and live order summary.',
          es: 'Checkout en modo foco con pasos, contacto, entrega, envío, pago y resumen del pedido en vivo.',
          ru: 'Оформление заказа в режиме фокуса: шаги, контакты, доставка, оплата и итог заказа.',
        },
        file: 'src/pages/checkout.astro',
        code: `---
import { StoreCheckoutPage } from '${IMPORT}';
---

<StoreCheckoutPage />`,
      },
    ],
    newComponents: [
      'store-header', 'promo-bar', 'cart-drawer', 'store-hero', 'category-tiles', 'trust-badges',
      'store-product-card', 'product-grid', 'filter-sidebar', 'product-toolbar', 'product-gallery',
      'variant-picker', 'product-buy-box', 'order-summary', 'checkout-form', 'product-media', 'product-rating', 'cart-toast', 'live-activity-toast', 'countdown-banner', 'stock-indicator', 'cart-store',
    ],
    reusedComponents: [
      'badge', 'stepper-input', 'animated-input', 'modern-select', 'custom-radio-group', 'animated-checkmark',
      'step-breadcrumb-bar', 'footer-mega-section', 'logo-cloud-section', 'cta-newsletter-section',
    ],
    storeConfigExample: `---
// src/pages/index.astro — same store + routes on every page
import { StoreHomePage, demoStore, type StoreConfig } from '${IMPORT}';

const store: StoreConfig = {
  ...demoStore,
  name: 'My Shop',
  currency: 'EUR',
  locale: 'es-ES',
  cartKey: 'my-shop-cart',
  products: [
    {
      slug: 'linen-shirt',
      name: 'Linen Shirt',
      price: 59,
      category: 'apparel',
      image: '/products/linen-shirt.webp', // or icon: 'shirt'
      sizes: ['S', 'M', 'L'],
      rating: 4.7,
      reviews: 40,
    },
  ],
};
---

<StoreHomePage store={store} routes={{ home: '/', shop: '/shop/', product: '/product/', checkout: '/checkout/' }} />`,
  },
  {
    slug: 'ecommerce-editorial',
    name: { en: 'E-commerce 2 · Editorial', es: 'E-commerce 2 · Editorial', ru: 'E-commerce 2 · Editorial' },
    tagline: {
      en: 'A magazine-style store for fashion and objects: serif type, square corners, a dedicated bag page.',
      es: 'Una tienda estilo revista para moda y objetos: tipografía serif, esquinas rectas y página de bolsa propia.',
      ru: 'Магазин в журнальном стиле для одежды и предметов: serif-шрифт, прямые углы и отдельная страница корзины.',
    },
    description: {
      en: 'Forma Studio is the second e-commerce template and deliberately different from the first: an editorial layout with oversized serif headlines, a terracotta accent, thin rules and numbered indexes. Shoppers browse with a horizontal filter bar, add sizes straight from the grid, see a shoppable lookbook and review everything on a full bag page before a split-screen checkout. Every block is a section in the library, so you can drop the header, hero, product rail or lookbook into any site — in light or dark mode.',
      es: 'Forma Studio es la segunda plantilla e-commerce y es distinta a propósito: un diseño editorial con titulares serif gigantes, acento terracota, líneas finas e índices numerados. Se navega con una barra de filtros horizontal, se añaden tallas directamente desde la cuadrícula, hay un lookbook comprable y una página de bolsa completa antes de un checkout a pantalla partida. Cada bloque es una sección de la librería, así que puedes usar la cabecera, el hero, el carrusel o el lookbook en cualquier web, en modo claro u oscuro.',
      ru: 'Forma Studio — второй шаблон интернет-магазина, намеренно непохожий на первый: редакционная вёрстка с крупными serif-заголовками, терракотовым акцентом, тонкими линиями и нумерацией. Каталог фильтруется горизонтальной панелью, размер можно добавить прямо из сетки, есть лукбук с покупкой и полноценная страница корзины перед оформлением заказа на разделённом экране. Каждый блок — секция библиотеки, поэтому шапку, hero, карусель или лукбук можно использовать на любом сайте в светлой или тёмной теме.',
    },
    highlights: {
      en: ['Editorial design: serif display type, square corners, terracotta accent', 'Light mode by default, dark mode with a toggle', 'Dedicated bag page with gift note and free-shipping progress', 'Quick-add sizes from the grid + horizontal filter bar', 'Shoppable lookbook with hotspots', '10 reusable sections in Sections → E-commerce'],
      es: ['Diseño editorial: tipografía serif, esquinas rectas y acento terracota', 'Modo claro por defecto y modo oscuro con selector', 'Página de bolsa con nota de regalo y progreso a envío gratis', 'Añadir tallas desde la cuadrícula + barra de filtros horizontal', 'Lookbook comprable con puntos interactivos', '10 secciones reutilizables en Secciones → E-commerce'],
      ru: ['Редакционный дизайн: serif-шрифт, прямые углы, терракотовый акцент', 'Светлая тема по умолчанию и тёмная с переключателем', 'Отдельная страница корзины с подарочной запиской', 'Быстрый выбор размера в сетке + горизонтальные фильтры', 'Лукбук с интерактивными точками', '10 секций в разделе «Секции → E-commerce»'],
    },
    tags: ['ecommerce', 'editorial', 'fashion', 'store', 'light-mode', 'lookbook'],
    previewBase: '/preview/ecommerce-editorial/',
    importPath: 'astro-component-kit/templates/ecommerce-editorial',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Home', es: 'Home', ru: 'Главная' },
        description: { en: 'Magazine hero, collection mosaic, new-in rail, shoppable lookbook, values, reviews and newsletter.', es: 'Hero de revista, mosaico de colecciones, novedades, lookbook comprable, valores, reseñas y newsletter.', ru: 'Журнальный hero, мозаика коллекций, новинки, лукбук, ценности, отзывы и подписка.' },
        file: 'src/pages/index.astro',
        code: `---
import { EditorialHomePage } from 'astro-component-kit/templates/ecommerce-editorial';
---

<EditorialHomePage theme="light" />`,
      },
      {
        id: 'shop', path: 'shop/',
        name: { en: 'Shop / category', es: 'Tienda / categoría', ru: 'Каталог' },
        description: { en: 'Category hero, sticky filter bar with refine panel and an editorial grid with quick add.', es: 'Hero de categoría, barra de filtros fija con panel de refinado y cuadrícula editorial con añadido rápido.', ru: 'Hero категории, липкая панель фильтров и редакционная сетка с быстрым добавлением.' },
        file: 'src/pages/shop.astro',
        code: `---
import { EditorialShopPage } from 'astro-component-kit/templates/ecommerce-editorial';
---

<EditorialShopPage />`,
      },
      {
        id: 'product', path: 'product/linen-overshirt/',
        name: { en: 'Product', es: 'Producto', ru: 'Товар' },
        description: { en: 'Stacked images, sticky info with colour and size, stock notice, care notes and "Complete the look".', es: 'Imágenes apiladas, info fija con color y talla, aviso de stock, cuidados y «Completa el look».', ru: 'Фото столбцом, закреплённая информация с цветом и размером, остаток, уход и «Дополните образ».' },
        file: 'src/pages/product/[slug].astro',
        code: `---
import { EditorialProductPage, formaStore } from 'astro-component-kit/templates/ecommerce-editorial';

export function getStaticPaths() {
  return formaStore.products.map((p) => ({ params: { slug: p.slug } }));
}
---

<EditorialProductPage slug={Astro.params.slug} />`,
      },
      {
        id: 'bag', path: 'bag/',
        name: { en: 'Bag', es: 'Bolsa', ru: 'Корзина' },
        description: { en: 'Full bag page with quantities, gift note, free-shipping progress and summary.', es: 'Página de bolsa con cantidades, nota de regalo, progreso a envío gratis y resumen.', ru: 'Страница корзины с количеством, запиской, прогрессом доставки и итогом.' },
        file: 'src/pages/bag.astro',
        code: `---
import { EditorialBagPage } from 'astro-component-kit/templates/ecommerce-editorial';
---

<EditorialBagPage />`,
      },
      {
        id: 'checkout', path: 'checkout/',
        name: { en: 'Checkout', es: 'Checkout', ru: 'Оформление' },
        description: { en: 'Split-screen checkout with the form on paper and a tinted order-summary panel.', es: 'Checkout a pantalla partida con el formulario y un panel tintado con el resumen.', ru: 'Оформление на разделённом экране: форма и тонированная панель итога.' },
        file: 'src/pages/checkout.astro',
        code: `---
import { EditorialCheckoutPage } from 'astro-component-kit/templates/ecommerce-editorial';
---

<EditorialCheckoutPage />`,
      },
    ],
    newComponents: [
      'shop-header-editorial', 'shop-hero-editorial', 'shop-collection-mosaic', 'shop-product-rail', 'shop-lookbook',
      'shop-values-marquee', 'shop-reviews-editorial', 'shop-newsletter-editorial', 'shop-footer-wordmark', 'shop-category-hero',
      'product-card-minimal', 'filter-bar', 'cart-page-list',
    ],
    reusedComponents: [
      'cart-store', 'cart-toast', 'product-media', 'product-rating', 'variant-picker', 'stock-indicator',
      'checkout-form', 'order-summary', 'animated-input', 'modern-select', 'custom-radio-group', 'animated-checkmark', 'badge',
    ],
    storeConfigExample: `---
// src/pages/index.astro — same store + routes on every page
import { EditorialHomePage, formaStore, type EditorialStore } from 'astro-component-kit/templates/ecommerce-editorial';

const store: EditorialStore = {
  ...formaStore,
  name: 'Atelier',
  currency: 'USD',
  locale: 'en-US',
  cartKey: 'atelier-bag',
};
---

<EditorialHomePage
  store={store}
  theme="auto"
  routes={{ home: '/', shop: '/shop/', product: '/product/', bag: '/bag/', checkout: '/checkout/' }}
/>`,
  },
  {
    slug: 'saas-hotel',
    name: { en: 'SaaS · Hotel management', es: 'SaaS · Gestión hotelera', ru: 'SaaS · Управление отелем' },
    tagline: {
      en: 'A complete SaaS for hotels: marketing site, sign-in and a full operations dashboard.',
      es: 'Un SaaS completo para hoteles: web de marketing, inicio de sesión y un dashboard de operaciones entero.',
      ru: 'Полноценный SaaS для отелей: маркетинговый сайт, вход и полный операционный дашборд.',
    },
    description: {
      en: 'Lobby is a hotel operating system built from the library: a landing page made of existing sections, a sign-in screen and an app with dashboard, room rack, reservations table, housekeeping board, guest CRM, revenue reports and account settings with team and billing. Every chart is a zero-dependency SVG chart from the library, and the whole app switches between light and dark mode.',
      es: 'Lobby es un sistema operativo hotelero hecho con la librería: una landing con secciones existentes, una pantalla de acceso y una app con dashboard, rack de habitaciones, tabla de reservas, tablero de limpieza, CRM de huéspedes, informes de ingresos y ajustes de cuenta con equipo y facturación. Todos los gráficos son gráficos SVG sin dependencias de la librería y toda la app cambia entre modo claro y oscuro.',
      ru: 'Lobby — операционная система для отеля, собранная из библиотеки: лендинг из готовых секций, экран входа и приложение с дашбордом, шахматкой, таблицей бронирований, доской уборки, CRM гостей, отчётами о выручке и настройками аккаунта с командой и оплатой. Все графики — SVG-графики библиотеки без зависимостей, а приложение переключается между светлой и тёмной темой.',
    },
    highlights: {
      en: ['8 pages: landing, sign-in and a 6-screen app', 'Room rack, housekeeping board and front-desk check-in', 'Sortable data tables with search, filters and bulk actions', '13 SVG charts reused from the library', 'Settings with team roles, invites and plan usage', 'Light and dark mode with a topbar toggle'],
      es: ['8 páginas: landing, acceso y una app de 6 pantallas', 'Rack de habitaciones, tablero de limpieza y check-in en recepción', 'Tablas ordenables con búsqueda, filtros y acciones masivas', '13 gráficos SVG reutilizados de la librería', 'Ajustes con roles de equipo, invitaciones y uso del plan', 'Modo claro y oscuro con selector en la barra superior'],
      ru: ['8 страниц: лендинг, вход и приложение из 6 экранов', 'Шахматка, доска уборки и заселение на ресепшене', 'Сортируемые таблицы с поиском, фильтрами и массовыми действиями', '13 SVG-графиков из библиотеки', 'Настройки с ролями, приглашениями и использованием тарифа', 'Светлая и тёмная тема с переключателем'],
    },
    tags: ['saas', 'dashboard', 'hotel', 'admin', 'charts', 'crm'],
    previewBase: '/preview/saas-hotel/',
    importPath: 'astro-component-kit/templates/saas-hotel',
    pages: [
      {
        id: 'landing', path: '',
        name: { en: 'Landing', es: 'Landing', ru: 'Лендинг' },
        description: { en: 'Marketing site: hero, logos, features, how it works, stats, pricing toggle, testimonials and FAQ.', es: 'Web de marketing: hero, logos, funciones, cómo funciona, cifras, precios con selector, testimonios y FAQ.', ru: 'Маркетинговый сайт: hero, логотипы, функции, как это работает, цифры, тарифы, отзывы и FAQ.' },
        file: 'src/pages/index.astro',
        code: `---
import { LandingPage } from 'astro-component-kit/templates/saas-hotel';
---

<LandingPage />`,
      },
      {
        id: 'signin', path: 'sign-in/',
        name: { en: 'Sign in', es: 'Inicio de sesión', ru: 'Вход' },
        description: { en: 'Split-screen sign-in with SSO, password toggle and validation.', es: 'Inicio de sesión a pantalla partida con SSO, mostrar contraseña y validación.', ru: 'Вход на разделённом экране с SSO, показом пароля и проверкой.' },
        file: 'src/pages/sign-in.astro',
        code: `---
import { SignInPage } from 'astro-component-kit/templates/saas-hotel';
---

<SignInPage />`,
      },
      {
        id: 'dashboard', path: 'app/',
        name: { en: 'Dashboard', es: 'Dashboard', ru: 'Дашборд' },
        description: { en: 'KPIs, revenue mix, tonight gauge, front desk, channel mix, occupancy by room type and live activity.', es: 'KPIs, ingresos, ocupación de esta noche, recepción, canales, ocupación por tipo y actividad en vivo.', ru: 'KPI, выручка, загрузка на сегодня, ресепшен, каналы, загрузка по типам номеров и активность.' },
        file: 'src/pages/app/index.astro',
        code: `---
import { DashboardPage } from 'astro-component-kit/templates/saas-hotel';
---

<DashboardPage />`,
      },
      {
        id: 'reservations', path: 'app/reservations/',
        name: { en: 'Reservations', es: 'Reservas', ru: 'Бронирования' },
        description: { en: 'Room rack for 14 days and a searchable, sortable reservations table with bulk actions.', es: 'Rack de habitaciones de 14 días y tabla de reservas con búsqueda, orden y acciones masivas.', ru: 'Шахматка на 14 дней и таблица бронирований с поиском, сортировкой и массовыми действиями.' },
        file: 'src/pages/app/reservations.astro',
        code: `---
import { ReservationsPage } from 'astro-component-kit/templates/saas-hotel';
---

<ReservationsPage />`,
      },
      {
        id: 'rooms', path: 'app/rooms/',
        name: { en: 'Rooms & housekeeping', es: 'Habitaciones y limpieza', ru: 'Номера и уборка' },
        description: { en: 'Status KPIs, inventory by type and an interactive housekeeping board by floor.', es: 'KPIs de estado, inventario por tipo y tablero de limpieza interactivo por planta.', ru: 'KPI статусов, фонд по типам и интерактивная доска уборки по этажам.' },
        file: 'src/pages/app/rooms.astro',
        code: `---
import { RoomsPage } from 'astro-component-kit/templates/saas-hotel';
---

<RoomsPage />`,
      },
      {
        id: 'guests', path: 'app/guests/',
        name: { en: 'Guests', es: 'Huéspedes', ru: 'Гости' },
        description: { en: 'Guest directory with tiers, stays and spend next to a CRM profile.', es: 'Directorio de huéspedes con niveles, estancias y gasto junto a una ficha CRM.', ru: 'Справочник гостей с уровнями, визитами и тратами рядом с CRM-карточкой.' },
        file: 'src/pages/app/guests.astro',
        code: `---
import { GuestsPage } from 'astro-component-kit/templates/saas-hotel';
---

<GuestsPage />`,
      },
      {
        id: 'reports', path: 'app/reports/',
        name: { en: 'Reports', es: 'Informes', ru: 'Отчёты' },
        description: { en: 'Forecast, booking pace heatmap, funnel, segments, ADR by channel and month-over-month table.', es: 'Previsión, mapa de ritmo de reservas, embudo, segmentos, ADR por canal y comparativa mensual.', ru: 'Прогноз, тепловая карта темпа бронирований, воронка, сегменты, ADR по каналам и сравнение месяцев.' },
        file: 'src/pages/app/reports.astro',
        code: `---
import { ReportsPage } from 'astro-component-kit/templates/saas-hotel';
---

<ReportsPage />`,
      },
      {
        id: 'settings', path: 'app/settings/',
        name: { en: 'Settings & account', es: 'Ajustes y cuenta', ru: 'Настройки и аккаунт' },
        description: { en: 'Profile, property, notification switches, team roles and invites, plan and billing.', es: 'Perfil, propiedad, notificaciones, equipo con roles e invitaciones, plan y facturación.', ru: 'Профиль, отель, уведомления, команда с ролями и приглашениями, тариф и оплата.' },
        file: 'src/pages/app/settings.astro',
        code: `---
import { SettingsPage } from 'astro-component-kit/templates/saas-hotel';
---

<SettingsPage />`,
      },
    ],
    newComponents: [
      'app-sidebar', 'app-topbar', 'page-header', 'data-table', 'room-rack', 'housekeeping-board', 'arrivals-board',
      'guest-profile-card', 'settings-section', 'switch-row', 'team-members', 'plan-usage-card', 'auth-card',
    ],
    reusedComponents: [
      'kpi-stat-tile', 'stacked-area-chart', 'gauge-chart', 'pie-chart', 'grouped-bar-chart', 'forecast-line-chart',
      'heatmap-chart', 'funnel-chart', 'segmented-bar-chart', 'horizontal-bar-chart', 'metric-delta-table',
      'status-timeline-feed', 'animated-input', 'modern-select',
      'hero-dashboard-preview', 'logo-wall-grid', 'feature-icon-grid', 'how-it-works-steps', 'stats-counter-band',
      'pricing-toggle-cards', 'testimonial-carousel', 'faq-two-column', 'footer-mega-section',
    ],
    storeConfigExample: `---
// src/pages/app/index.astro — pass your own data (e.g. fetched from your API at build time)
import { DashboardPage, lobbyData, type LobbyData } from 'astro-component-kit/templates/saas-hotel';

const data: LobbyData = {
  ...lobbyData,
  workspace: { name: 'Casa Alba', plan: 'Starter', initials: 'CA' },
  user: { name: 'Marta Gil', role: 'Owner', email: 'marta@casaalba.com' },
};
---

<DashboardPage data={data} theme="auto" />`,
  },
  {
    slug: 'agency',
    name: { en: 'Marketing Agency', es: 'Agencia de marketing', ru: 'Маркетинговое агентство' },
    tagline: {
      en: 'A complete website for a performance marketing agency selling Paid Ads, SEO and web development.',
      es: 'Una web completa para una agencia de marketing de resultados que vende Ads, SEO y desarrollo web.',
      ru: 'Полноценный сайт агентства performance-маркетинга: реклама, SEO и разработка сайтов.',
    },
    description: {
      en: 'Volta is an eight-page agency template built to turn visitors into qualified leads. A kinetic hero and animated results prove credibility, every service (Paid Ads, SEO, Web) has its own page with what is included, process, pricing and FAQ, case studies show before/after metrics with a 12-month chart, and two lead magnets — a free audit that "scans" the visitor’s site and an ads ROI calculator — feed the contact brief. Every block is a section in the library, so you can reuse the pricing, calculator or audit on any site, in dark or light mode.',
      es: 'Volta es una plantilla de agencia de ocho páginas pensada para convertir visitas en leads cualificados. Un hero cinético y resultados animados aportan credibilidad, cada servicio (Ads, SEO, Web) tiene su propia página con lo incluido, proceso, precios y FAQ, los casos de éxito muestran métricas antes/después con un gráfico de 12 meses, y dos ganchos de captación — una auditoría gratis que «escanea» la web del visitante y una calculadora de ROI publicitario — llevan al formulario de contacto. Cada bloque es una sección de la librería, así que puedes reutilizar los precios, la calculadora o la auditoría en cualquier web, en modo oscuro o claro.',
      ru: 'Volta — восьмистраничный шаблон агентства, который превращает посетителей в квалифицированные заявки. Кинетический hero и анимированные результаты создают доверие, у каждой услуги (реклама, SEO, сайты) есть своя страница с составом работ, процессом, ценами и FAQ, кейсы показывают метрики «до/после» с графиком за 12 месяцев, а два лид-магнита — бесплатный аудит, «сканирующий» сайт посетителя, и калькулятор ROI рекламы — ведут к брифу. Каждый блок — секция библиотеки: цены, калькулятор или аудит можно использовать на любом сайте в тёмной или светлой теме.',
    },
    highlights: {
      en: ['8 pages: home, services, service detail, case studies, case study, pricing, about and contact', 'Free audit lead magnet with animated scan and score', 'Paid-ads ROI calculator with live ROAS', 'Pricing tabs per service with monthly / 6-month switch', 'Case studies with before/after table and SVG chart', 'Dark by default, light mode with a toggle', '19 reusable sections in Sections → Agency & Marketing'],
      es: ['8 páginas: inicio, servicios, detalle de servicio, casos, caso de éxito, precios, nosotros y contacto', 'Gancho de auditoría gratis con escaneo animado y puntuación', 'Calculadora de ROI publicitario con ROAS en vivo', 'Precios por servicio en pestañas con selector mensual / 6 meses', 'Casos de éxito con tabla antes/después y gráfico SVG', 'Oscuro por defecto y modo claro con selector', '19 secciones reutilizables en Secciones → Agencia y Marketing'],
      ru: ['8 страниц: главная, услуги, страница услуги, кейсы, кейс, цены, о нас и контакты', 'Лид-магнит «бесплатный аудит» с анимированным сканированием', 'Калькулятор ROI рекламы с живым ROAS', 'Цены по услугам во вкладках с оплатой помесячно / 6 месяцев', 'Кейсы с таблицей «до/после» и SVG-графиком', 'Тёмная тема по умолчанию и светлая с переключателем', '19 секций в разделе «Секции → Агентство и маркетинг»'],
    },
    tags: ['agency', 'marketing', 'seo', 'ads', 'web-design', 'lead-generation'],
    previewBase: '/preview/agency/',
    importPath: 'astro-component-kit/templates/agency',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Home', es: 'Inicio', ru: 'Главная' },
        description: { en: 'Kinetic hero, platforms marquee, service pillars, animated results, case studies, process, quotes and free audit.', es: 'Hero cinético, plataformas, pilares de servicio, resultados animados, casos, proceso, testimonios y auditoría gratis.', ru: 'Кинетический hero, платформы, услуги, анимированные результаты, кейсы, процесс, отзывы и бесплатный аудит.' },
        file: 'src/pages/index.astro',
        code: `---
import { AgencyHomePage } from 'astro-component-kit/templates/agency';
---

<AgencyHomePage theme="dark" />`,
      },
      {
        id: 'services', path: 'services/',
        name: { en: 'Services', es: 'Servicios', ru: 'Услуги' },
        description: { en: 'Services overview with channel cards, expandable service rows, process, results and audit.', es: 'Resumen de servicios con tarjetas por canal, filas desplegables, proceso, resultados y auditoría.', ru: 'Обзор услуг: карточки каналов, раскрывающиеся строки, процесс, результаты и аудит.' },
        file: 'src/pages/services/index.astro',
        code: `---
import { AgencyServicesPage } from 'astro-component-kit/templates/agency';
---

<AgencyServicesPage />`,
      },
      {
        id: 'service', path: 'services/ads/',
        name: { en: 'Service detail', es: 'Detalle de servicio', ru: 'Страница услуги' },
        description: { en: 'One page per service: what is included, ROI calculator or free audit, process, results, pricing and FAQ.', es: 'Una página por servicio: qué incluye, calculadora de ROI o auditoría, proceso, resultados, precios y FAQ.', ru: 'Страница каждой услуги: состав, калькулятор ROI или аудит, процесс, результаты, цены и FAQ.' },
        file: 'src/pages/services/[slug].astro',
        code: `---
import { AgencyServicePage, voltaAgency } from 'astro-component-kit/templates/agency';

export function getStaticPaths() {
  return voltaAgency.services.map((s) => ({ params: { slug: s.slug } }));
}
---

<AgencyServicePage slug={Astro.params.slug} />`,
      },
      {
        id: 'work', path: 'work/',
        name: { en: 'Case studies', es: 'Casos de éxito', ru: 'Кейсы' },
        description: { en: 'Filterable case-study grid (Ads, SEO, Web), results band and client quotes.', es: 'Cuadrícula filtrable de casos (Ads, SEO, Web), franja de resultados y testimonios.', ru: 'Сетка кейсов с фильтром (реклама, SEO, сайты), результаты и отзывы.' },
        file: 'src/pages/work/index.astro',
        code: `---
import { AgencyWorkPage } from 'astro-component-kit/templates/agency';
---

<AgencyWorkPage />`,
      },
      {
        id: 'case', path: 'work/nordlys-skincare/',
        name: { en: 'Case study', es: 'Caso de éxito', ru: 'Кейс' },
        description: { en: 'Headline result, challenge, approach, before/after metrics, 12-month chart, quote and more work.', es: 'Resultado principal, reto, enfoque, métricas antes/después, gráfico de 12 meses, cita y más casos.', ru: 'Главный результат, задача, решение, метрики «до/после», график за 12 месяцев, цитата и другие кейсы.' },
        file: 'src/pages/work/[slug].astro',
        code: `---
import { AgencyCaseStudyPage, voltaAgency } from 'astro-component-kit/templates/agency';

export function getStaticPaths() {
  return voltaAgency.cases.map((c) => ({ params: { slug: c.slug } }));
}
---

<AgencyCaseStudyPage slug={Astro.params.slug} />`,
      },
      {
        id: 'pricing', path: 'pricing/',
        name: { en: 'Pricing', es: 'Precios', ru: 'Цены' },
        description: { en: 'Packages per service with billing switch, ads ROI calculator and pricing FAQ.', es: 'Paquetes por servicio con selector de facturación, calculadora de ROI y FAQ de precios.', ru: 'Пакеты по услугам с выбором оплаты, калькулятор ROI и FAQ по ценам.' },
        file: 'src/pages/pricing.astro',
        code: `---
import { AgencyPricingPage } from 'astro-component-kit/templates/agency';
---

<AgencyPricingPage />`,
      },
      {
        id: 'about', path: 'about/',
        name: { en: 'About', es: 'Nosotros', ru: 'О нас' },
        description: { en: 'Story, values, results, team with fun facts and hiring card, certified platforms.', es: 'Historia, valores, resultados, equipo con datos curiosos y vacantes, plataformas certificadas.', ru: 'История, ценности, результаты, команда с фактами и вакансиями, сертифицированные платформы.' },
        file: 'src/pages/about.astro',
        code: `---
import { AgencyAboutPage } from 'astro-component-kit/templates/agency';
---

<AgencyAboutPage />`,
      },
      {
        id: 'contact', path: 'contact/',
        name: { en: 'Contact', es: 'Contacto', ru: 'Контакты' },
        description: { en: 'Project brief with services, budget and timeline, direct contacts, office and FAQ.', es: 'Brief del proyecto con servicios, presupuesto y plazos, contactos directos, oficina y FAQ.', ru: 'Бриф проекта с услугами, бюджетом и сроками, прямые контакты, офис и FAQ.' },
        file: 'src/pages/contact.astro',
        code: `---
import { AgencyContactPage } from 'astro-component-kit/templates/agency';
---

<!-- Pass action="https://your-backend/brief" to post the form -->
<AgencyContactPage />`,
      },
    ],
    newComponents: [
      'agency-header', 'agency-hero-kinetic', 'agency-page-hero', 'agency-service-pillars', 'agency-services-list', 'agency-results-band', 'agency-platforms-marquee', 'agency-process-steps', 'agency-audit-cta', 'agency-roi-calculator', 'agency-pricing-packages', 'agency-service-overview', 'agency-work-grid', 'agency-case-study-hero', 'agency-case-results', 'agency-quotes', 'agency-team-grid', 'agency-contact-brief', 'agency-footer-cta'
    ],
    reusedComponents: ['faq-two-column'],
    storeConfigExample: `---
// src/pages/index.astro — pass the same site + routes to every page
import { AgencyHomePage, voltaAgency, type AgencySite } from 'astro-component-kit/templates/agency';

const site: AgencySite = {
  ...voltaAgency,
  name: 'Northwind',
  email: 'hello@northwind.agency',
  currency: 'USD',
  locale: 'en-US',
  // services, cases, pricing, team… — edit or replace any list
};
---

<AgencyHomePage
  site={site}
  theme="auto"
  routes={{ home: '/', services: '/services/', service: '/services/', work: '/work/', caseStudy: '/work/', pricing: '/pricing/', about: '/about/', contact: '/contact/' }}
/>`,
  },
  {
    slug: 'portfolio',
    name: { en: 'Developer Portfolio', es: 'Portfolio de desarrollador', ru: 'Портфолио разработчика' },
    tagline: {
      en: 'A monochrome, keyboard-inspired portfolio with 3D projects, a typing keyboard and a contribution matrix of flying cubes.',
      es: 'Un portfolio monocromo inspirado en un teclado, con proyectos en 3D, un teclado que escribe y una matriz de contribuciones de cubos que vuelan.',
      ru: 'Монохромное портфолио в стиле клавиатуры: 3D-проекты, печатающая клавиатура и матрица вкладов из летающих кубиков.',
    },
    description: {
      en: 'Keycap is a six-page personal site for developers, designed for konstantink.dev and rebuilt as reusable sections. The home page pairs a retyping hero over a breathing dot matrix with a 3D projects showcase whose cards animate code, terminals, equalizers or a paint canvas from your data, a mechanical keyboard that types your stack under your repositories, and a GitHub-style contribution matrix whose cubes fly in and ripple like water. Projects get filterable keycap cards and case studies with a 3D monitor and a spec sheet; the blog has a featured index and a reading-progress article layout; the contact page validates a project brief. Pure white and black by default, with a dark mode the 3D scenes follow.',
      es: 'Keycap es una web personal de seis páginas para desarrolladores, diseñada para konstantink.dev y reconstruida como secciones reutilizables. La home combina un hero que se reescribe sobre una matriz de puntos que respira con un escaparate 3D de proyectos cuyas tarjetas animan código, terminales, ecualizadores o un lienzo de pintura a partir de tus datos, un teclado mecánico que escribe tu stack bajo tus repositorios y una matriz de contribuciones estilo GitHub cuyos cubos llegan volando y ondulan como agua. Los proyectos tienen tarjetas tipo tecla filtrables y casos con un monitor 3D y ficha técnica; el blog tiene índice con destacado y artículo con barra de progreso; el contacto valida un brief de proyecto. Blanco y negro puros por defecto, con un modo oscuro que siguen también las escenas 3D.',
      ru: 'Keycap — шестистраничный персональный сайт для разработчиков, созданный для konstantink.dev и пересобранный из переиспользуемых секций. На главной — перепечатывающийся hero на «дышащей» матрице точек, 3D-витрина проектов, где карточки по вашим данным анимируют код, терминал, эквалайзер или холст для рисования, механическая клавиатура, печатающая ваш стек под списком репозиториев, и матрица вкладов в стиле GitHub, кубики которой прилетают и расходятся волнами. У проектов — карточки-клавиши с фильтром и кейсы с 3D-монитором и техпаспортом; у блога — список с избранной статьёй и статья с индикатором чтения; контакты проверяют бриф. По умолчанию чистый белый и чёрный, есть тёмная тема, которой следуют и 3D-сцены.',
    },
    highlights: {
      en: ['6 pages: home, projects, project case study, blog, article and contact', '3D projects showcase with 7 data-driven card visuals', 'Typing 3D keyboard and a 3D monitor', '3D contribution matrix: flying cubes and water ripples, real or demo data', 'Light and dark mode — the 3D scenes redraw with the theme', 'Accessible: real buttons and dialogs beside every 3D block, reduced motion respected', '15 reusable sections in Sections → Developer Portfolio'],
      es: ['6 páginas: inicio, proyectos, caso de proyecto, blog, artículo y contacto', 'Escaparate 3D de proyectos con 7 visuales de tarjeta según tus datos', 'Teclado 3D que escribe y un monitor 3D', 'Matriz de contribuciones 3D: cubos que vuelan y ondas de agua, con datos reales o demo', 'Modo claro y oscuro: las escenas 3D se redibujan con el tema', 'Accesible: botones y diálogos reales junto a cada bloque 3D y respeto a «reducir movimiento»', '15 secciones reutilizables en Secciones → Portfolio de desarrollador'],
      ru: ['6 страниц: главная, проекты, кейс проекта, блог, статья и контакты', '3D-витрина проектов с 7 визуалами карточек по данным', 'Печатающая 3D-клавиатура и 3D-монитор', '3D-матрица вкладов: летающие кубики и волны, реальные или демо-данные', 'Светлая и тёмная тема — 3D-сцены перерисовываются', 'Доступность: настоящие кнопки и диалоги рядом с каждым 3D-блоком, учёт reduced motion', '15 секций в разделе «Секции → Портфолио разработчика»'],
    },
    tags: ['portfolio', 'developer', 'personal', 'three', '3d', 'blog', 'resume'],
    previewBase: '/preview/portfolio/',
    importPath: 'astro-component-kit/templates/portfolio',
    peerDeps: ['three'],
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Home', es: 'Inicio', ru: 'Главная' },
        description: { en: 'Retyping hero with skill tape, 3D projects showcase, typing 3D keyboard with repositories, 3D contribution matrix and contact.', es: 'Hero que se reescribe con cinta de habilidades, escaparate 3D de proyectos, teclado 3D con repositorios, matriz 3D de contribuciones y contacto.', ru: 'Перепечатывающийся hero с лентой навыков, 3D-витрина проектов, 3D-клавиатура с репозиториями, 3D-матрица вкладов и контакты.' },
        file: 'src/pages/index.astro',
        code: `---
// npm install three
import { PortfolioHomePage } from 'astro-component-kit/templates/portfolio';
---

<!-- contributionsSrc: a URL returning { weeks: [{ days: [{ date, count }] }] } -->
<PortfolioHomePage theme="light" />`,
      },
      {
        id: 'projects', path: 'projects/',
        name: { en: 'Projects', es: 'Proyectos', ru: 'Проекты' },
        description: { en: 'Keycap-style project cards with category filter keys, stack, status and stars.', es: 'Tarjetas de proyecto tipo tecla con filtros por categoría, stack, estado y estrellas.', ru: 'Карточки проектов в виде клавиш с фильтрами по категориям, стеком, статусом и звёздами.' },
        file: 'src/pages/projects/index.astro',
        code: `---
import { PortfolioProjectsPage } from 'astro-component-kit/templates/portfolio';
---

<PortfolioProjectsPage />`,
      },
      {
        id: 'project', path: 'projects/tidy/',
        name: { en: 'Project case study', es: 'Caso de proyecto', ru: 'Кейс проекта' },
        description: { en: 'Hero with a 3D monitor typing the project terminal, overview, challenge, solution, highlights and a sticky spec sheet.', es: 'Hero con un monitor 3D que escribe el terminal del proyecto, resumen, reto, solución, puntos clave y ficha técnica fija.', ru: 'Hero с 3D-монитором, печатающим терминал проекта, обзор, задача, решение, ключевые пункты и закреплённый техпаспорт.' },
        file: 'src/pages/projects/[slug].astro',
        code: `---
import { PortfolioProjectPage, keycapPortfolio } from 'astro-component-kit/templates/portfolio';

export function getStaticPaths() {
  return keycapPortfolio.projects.map((p) => ({ params: { slug: p.slug } }));
}
---

<PortfolioProjectPage slug={Astro.params.slug} />`,
      },
      {
        id: 'blog', path: 'blog/',
        name: { en: 'Blog', es: 'Blog', ru: 'Блог' },
        description: { en: 'Featured latest article and a filterable list with date, category and reading time.', es: 'Último artículo destacado y lista filtrable con fecha, categoría y tiempo de lectura.', ru: 'Избранная последняя статья и список с фильтром, датой, категорией и временем чтения.' },
        file: 'src/pages/blog/index.astro',
        code: `---
import { PortfolioBlogPage } from 'astro-component-kit/templates/portfolio';
---

<PortfolioBlogPage />`,
      },
      {
        id: 'post', path: 'blog/instanced-meshes-for-ui/',
        name: { en: 'Article', es: 'Artículo', ru: 'Статья' },
        description: { en: 'Meta line, lead, tags, reading-progress bar, monochrome prose with code blocks and previous / next keys.', es: 'Metadatos, entradilla, etiquetas, barra de progreso de lectura, prosa monocroma con código y teclas anterior / siguiente.', ru: 'Метаданные, лид, теги, индикатор чтения, монохромная типографика с кодом и клавиши «назад / вперёд».' },
        file: 'src/pages/blog/[slug].astro',
        code: `---
import { PortfolioPostPage, keycapPortfolio } from 'astro-component-kit/templates/portfolio';

export function getStaticPaths() {
  return keycapPortfolio.posts.map((p) => ({ params: { slug: p.slug } }));
}
---

<PortfolioPostPage slug={Astro.params.slug} />`,
      },
      {
        id: 'contact', path: 'contact/',
        name: { en: 'Contact', es: 'Contacto', ru: 'Контакты' },
        description: { en: 'Hero with a 3D monitor, project brief with type keys, budget and message, inline validation and direct contacts.', es: 'Hero con monitor 3D, brief del proyecto con teclas de tipo, presupuesto y mensaje, validación en línea y contactos directos.', ru: 'Hero с 3D-монитором, бриф с клавишами типа проекта, бюджетом и сообщением, проверка полей и прямые контакты.' },
        file: 'src/pages/contact.astro',
        code: `---
import { PortfolioContactPage } from 'astro-component-kit/templates/portfolio';
---

<!-- Pass action="https://your-backend/contact" to post the form -->
<PortfolioContactPage />`,
      },
    ],
    newComponents: [
      'dev-header', 'dev-hero', 'dev-projects-showcase', 'dev-keyboard', 'dev-repo-list', 'dev-contributions', 'dev-monitor', 'dev-contact', 'dev-footer', 'dev-page-hero', 'dev-project-grid', 'dev-project-detail', 'dev-post-list', 'dev-article', 'dev-contact-form'
    ],
    reusedComponents: [],
    storeConfigExample: `---
// src/pages/index.astro — pass the same site + routes to every page
import { PortfolioHomePage, keycapPortfolio, type PortfolioSite } from 'astro-component-kit/templates/portfolio';

const site: PortfolioSite = {
  ...keycapPortfolio,
  name: 'Ada Example',
  logo: { initial: 'A', middle: 'DAEXAMPLE', suffix: '.DEV' },
  phrases: ['ASTRO', 'SVELTE', 'GO'],
  // projects (with visual: { kind: 'code' | 'terminal' | 'equalizer' | 'monitor' | 'endpoints' | 'paint' | 'atom' }),
  // repos, posts, skills, contacts… — edit or replace any list
};
---

<PortfolioHomePage
  site={site}
  theme="auto"
  contributionsSrc="/api/contributions.json"
  routes={{ home: '/', projects: '/projects/', project: '/projects/', blog: '/blog/', post: '/blog/', contact: '/contact/' }}
/>`,
  },
  {
    slug: 'toy-store',
    name: { en: 'Toy Store · Action figures', es: 'Juguetería · Figuras de acción', ru: 'Магазин игрушек · Фигурки' },
    tagline: {
      en: 'A comic-book toy store for action figures and collectibles, with shop-by-character filters, character pages and a gift finder by age.',
      es: 'Una juguetería estilo cómic para figuras de acción y coleccionables, con filtros por personaje, páginas de personaje y buscador de regalos por edad.',
      ru: 'Магазин игрушек в стиле комикса для фигурок и коллекционных вещей: фильтры по персонажам, страницы персонажей и подбор подарка по возрасту.',
    },
    description: {
      en: 'Kapow is the third e-commerce template, built for toy shops selling action figures, vehicles, playsets and collector editions. Every product knows which characters it features, so shoppers can tap a hero or villain in the avatar rail — or combine character, universe, age group, scale, type and price in the sidebar — and the grid filters instantly with a shareable URL. Each character gets a roster card and a profile page with art, quote, bio and power levels plus all of their figures. Product pages add a figure file with scale, articulation, what is in the box and a safety warning. The look is a bold comic "toy box": thick ink outlines, hard shadows, halftone panels and Russo One type, in light and dark. It reuses the e-commerce kit — header, cart drawer, filters, toolbar, gallery, buy box, checkout and order summary — so the cart, promo codes and checkout work exactly like the other stores.',
      es: 'Kapow es la tercera plantilla e-commerce, pensada para jugueterías que venden figuras de acción, vehículos, playsets y ediciones de coleccionista. Cada producto sabe qué personajes incluye, así que se puede pulsar un héroe o villano en el carril de avatares — o combinar personaje, universo, edad, escala, tipo y precio en el lateral — y la cuadrícula se filtra al instante con una URL que se puede compartir. Cada personaje tiene su cromo en el plantel y una página propia con ilustración, frase, biografía y niveles de poder, además de todas sus figuras. La ficha de producto añade una «ficha de figura» con escala, articulaciones, contenido de la caja y aviso de seguridad. El estilo es una «caja de juguetes» de cómic: contornos gruesos, sombras duras, tramas de puntos y tipografía Russo One, en claro y oscuro. Reutiliza el kit e-commerce — cabecera, carrito lateral, filtros, barra de orden, galería, bloque de compra, checkout y resumen — así que el carrito, los códigos promocionales y el checkout funcionan igual que en las otras tiendas.',
      ru: 'Kapow — третий шаблон интернет-магазина, созданный для магазинов игрушек: фигурки, техника, игровые наборы и коллекционные издания. Каждый товар знает, каких персонажей он включает, поэтому можно нажать на героя или злодея в ленте аватаров — или сочетать персонажа, вселенную, возраст, масштаб, тип и цену в боковой панели — и сетка мгновенно фильтруется, а ссылкой можно поделиться. У каждого персонажа есть карточка в каталоге и страница с рисунком, цитатой, биографией и уровнями силы, а также всеми его фигурками. Страница товара дополнена «досье фигурки»: масштаб, артикуляция, комплектация и предупреждение о безопасности. Стиль — яркая «коробка с игрушками» в духе комиксов: толстые контуры, жёсткие тени, растровые панели и шрифт Russo One, в светлой и тёмной теме. Шаблон переиспользует e-commerce-кит — шапку, корзину, фильтры, сортировку, галерею, блок покупки, оформление и итог заказа, — так что корзина, промокоды и оформление работают как в других магазинах.',
    },
    highlights: {
      en: ['6 pages: home, shop, characters, character profile, product and checkout', 'Filter by character from an avatar rail or the sidebar — multi-select, URL-synced', 'Facets: character, universe, age group, scale, type, price, rating, stock', 'Character pages with quote, bio and power-level meters', 'Gift finder by age and budget, figure spec sheet with safety warning', 'Pre-orders, limited editions and a collector club with stamp card', 'Comic "toy box" look, light and dark mode', '7 sections in Sections → Toy Store + 2 new e-commerce components'],
      es: ['6 páginas: inicio, tienda, personajes, ficha de personaje, producto y checkout', 'Filtra por personaje desde un carril de avatares o el lateral — selección múltiple y sincronizada con la URL', 'Facetas: personaje, universo, edad, escala, tipo, precio, valoración y stock', 'Páginas de personaje con frase, biografía y medidores de poder', 'Buscador de regalos por edad y presupuesto, ficha de figura con aviso de seguridad', 'Preventas, ediciones limitadas y club de coleccionistas con tarjeta de sellos', 'Estilo «caja de juguetes» de cómic, modo claro y oscuro', '7 secciones en Secciones → Juguetería + 2 componentes e-commerce nuevos'],
      ru: ['6 страниц: главная, каталог, персонажи, профиль персонажа, товар и оформление', 'Фильтр по персонажу из ленты аватаров или боковой панели — мультивыбор, синхронизация с URL', 'Фасеты: персонаж, вселенная, возраст, масштаб, тип, цена, рейтинг, наличие', 'Страницы персонажей с цитатой, биографией и шкалами силы', 'Подбор подарка по возрасту и бюджету, досье фигурки с предупреждением', 'Предзаказы, лимитированные серии и клуб коллекционеров с картой штампов', 'Комикс-стиль «коробки с игрушками», светлая и тёмная тема', '7 секций в разделе «Секции → Магазин игрушек» + 2 новых e-commerce компонента'],
    },
    tags: ['ecommerce', 'toys', 'action-figures', 'collectibles', 'characters', 'filters', 'kids'],
    previewBase: '/preview/toy-store/',
    importPath: 'astro-component-kit/templates/toy-store',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Home', es: 'Inicio', ru: 'Главная' },
        description: { en: 'Comic hero, guarantees, shop by character, best sellers, universes, pre-order countdown, gift finder by age, new arrivals and collector club.', es: 'Hero de cómic, garantías, compra por personaje, más vendidos, universos, cuenta atrás de preventa, buscador de regalos por edad, novedades y club de coleccionistas.', ru: 'Комикс-hero, гарантии, покупки по персонажу, хиты, вселенные, отсчёт предзаказа, подбор подарка по возрасту, новинки и клуб коллекционеров.' },
        file: 'src/pages/index.astro',
        code: `---
import { ToyHomePage } from 'astro-component-kit/templates/toy-store';
---

<ToyHomePage />`,
      },
      {
        id: 'shop', path: 'shop/?character=captain-nova',
        name: { en: 'Shop & filters', es: 'Tienda y filtros', ru: 'Каталог и фильтры' },
        description: { en: 'Character avatar rail, sidebar facets (type, character, universe, age, scale, price, rating, stock), sort and live count — all in the URL.', es: 'Carril de avatares de personaje, facetas laterales (tipo, personaje, universo, edad, escala, precio, valoración, stock), orden y contador en vivo — todo en la URL.', ru: 'Лента аватаров, фасеты (тип, персонаж, вселенная, возраст, масштаб, цена, рейтинг, наличие), сортировка и живой счётчик — всё в URL.' },
        file: 'src/pages/shop.astro',
        code: `---
import { ToyShopPage } from 'astro-component-kit/templates/toy-store';
---

<!-- Shareable filters: /shop/?character=vex,raikou&age=kids&scale=6in&max=25 -->
<ToyShopPage />`,
      },
      {
        id: 'characters', path: 'characters/',
        name: { en: 'Characters', es: 'Personajes', ru: 'Персонажи' },
        description: { en: 'Trading-card roster with hero / villain and universe filters, universe tiles and gift finder.', es: 'Plantel en cromos con filtros héroe / villano y por universo, tarjetas de universo y buscador de regalos.', ru: 'Каталог-карточки с фильтрами герой / злодей и по вселенной, плитки вселенных и подбор подарка.' },
        file: 'src/pages/characters/index.astro',
        code: `---
import { ToyCharactersPage } from 'astro-component-kit/templates/toy-store';
---

<ToyCharactersPage />`,
      },
      {
        id: 'character', path: 'characters/kira-blaze/',
        name: { en: 'Character profile', es: 'Ficha de personaje', ru: 'Профиль персонажа' },
        description: { en: 'Comic panel, quote, bio and power levels, every figure of the character, allies and rivals.', es: 'Viñeta de cómic, frase, biografía y niveles de poder, todas las figuras del personaje, aliados y rivales.', ru: 'Комикс-панель, цитата, биография и уровни силы, все фигурки персонажа, союзники и соперники.' },
        file: 'src/pages/characters/[id].astro',
        code: `---
import { ToyCharacterPage, kapowStore } from 'astro-component-kit/templates/toy-store';

export function getStaticPaths() {
  return kapowStore.characters.map((c) => ({ params: { id: c.id } }));
}
---

<ToyCharacterPage id={Astro.params.id} />`,
      },
      {
        id: 'product', path: 'product/captain-nova-legends/',
        name: { en: 'Product', es: 'Producto', ru: 'Товар' },
        description: { en: 'Gallery, buy box with stock urgency, meet the character, figure file with articulation and what is in the box, reviews and related figures.', es: 'Galería, bloque de compra con urgencia de stock, conoce al personaje, ficha de figura con articulaciones y contenido de la caja, reseñas y figuras relacionadas.', ru: 'Галерея, блок покупки с остатком, знакомство с персонажем, досье фигурки с артикуляцией и комплектацией, отзывы и похожие фигурки.' },
        file: 'src/pages/product/[slug].astro',
        code: `---
import { ToyProductPage, kapowStore } from 'astro-component-kit/templates/toy-store';

export function getStaticPaths() {
  return kapowStore.products.map((p) => ({ params: { slug: p.slug } }));
}
---

<ToyProductPage slug={Astro.params.slug} />`,
      },
      {
        id: 'checkout', path: 'checkout/',
        name: { en: 'Checkout', es: 'Checkout', ru: 'Оформление' },
        description: { en: 'Focus-mode checkout with steps, delivery, shipping, payment and a live order summary (try code KAPOW10).', es: 'Checkout en modo foco con pasos, entrega, envío, pago y resumen del pedido en vivo (prueba el código KAPOW10).', ru: 'Оформление в режиме фокуса: шаги, доставка, оплата и живой итог заказа (промокод KAPOW10).' },
        file: 'src/pages/checkout.astro',
        code: `---
import { ToyCheckoutPage } from 'astro-component-kit/templates/toy-store';
---

<ToyCheckoutPage />`,
      },
    ],
    newComponents: [
      'toy-hero', 'toy-character-rail', 'toy-character-grid', 'toy-character-hero', 'toy-age-finder', 'toy-spec-sheet', 'toy-collector-club',
      'toy-figure-card', 'toy-figure-grid',
    ],
    reusedComponents: [
      'store-header', 'promo-bar', 'cart-drawer', 'cart-toast', 'live-activity-toast', 'filter-sidebar', 'product-toolbar',
      'product-gallery', 'product-buy-box', 'stock-indicator', 'product-media', 'product-rating', 'category-tiles', 'trust-badges',
      'countdown-banner', 'checkout-form', 'order-summary', 'cart-store', 'badge', 'step-breadcrumb-bar', 'footer-mega-section',
    ],
    storeConfigExample: `---
// src/pages/index.astro — pass the same store + routes to every page
import { ToyHomePage, kapowStore, type ToyStore } from 'astro-component-kit/templates/toy-store';

const store: ToyStore = {
  ...kapowStore,
  name: 'Hero Hangar',
  currency: 'EUR',
  locale: 'es-ES',
  cartKey: 'hero-hangar-cart',
  characters: [
    { id: 'nova', name: 'Nova', alias: 'Space ranger', universe: 'star-rangers', faction: 'hero', icon: 'figure', hue: 212,
      bio: '…', powers: [{ label: 'Speed', value: 8 }] },
  ],
  products: [
    { slug: 'nova-6in', name: 'Nova 6"', price: 24.99, category: 'figures',
      characters: ['nova'],          // ← powers the character filter and character pages
      scale: '6in', height: '15 cm', articulation: 28, ageMin: 4,
      accessories: ['Blaster', 'Stand'], image: '/toys/nova.webp' },   // or icon: 'figure'
  ],
};
---

<ToyHomePage
  store={store}
  theme="auto"
  routes={{ home: '/', shop: '/shop/', characters: '/characters/', character: '/characters/', product: '/product/', checkout: '/checkout/' }}
/>`,
  },
  {
    slug: 'saas-clinic',
    name: { en: 'SaaS · Medical consultations', es: 'SaaS · Consultas médicas', ru: 'SaaS · Медицинские консультации' },
    tagline: {
      en: 'A complete SaaS for clinics and private practices: online booking, schedule, patient records, consultations, e-prescriptions and video visits.',
      es: 'Un SaaS completo para clínicas y consultas privadas: reservas online, agenda, historias clínicas, consultas, recetas electrónicas y videoconsultas.',
      ru: 'Полноценный SaaS для клиник и частных практик: онлайн-запись, расписание, медкарты, приёмы, электронные рецепты и видеоконсультации.',
    },
    description: {
      en: 'Pulso is a practice-management SaaS built from the library. Patients find a doctor and book in four accessible steps on the clinic’s public page; clinicians start the day on a dashboard with their agenda and a live waiting room, plan the week on a colour-coded calendar, open records with allergy alerts and vitals trends, write SOAP notes with ICD-10 diagnoses that autosave and lock when signed, prescribe with allergy and duplicate-therapy checks, and see patients by video. The style follows healthcare accessibility guidance: medical teal, Figtree, AA contrast and calm motion, in light and dark. All people and records are fictional demo data.',
      es: 'Pulso es un SaaS de gestión de consultas hecho con la librería. Los pacientes encuentran a su médico y reservan en cuatro pasos accesibles en la página pública de la clínica; los profesionales empiezan el día en un dashboard con su agenda y la sala de espera en vivo, planifican la semana en un calendario por colores, abren historias con alertas de alergias y tendencias de constantes, escriben notas SOAP con diagnósticos CIE-10 que se autoguardan y se bloquean al firmar, recetan con control de alergias y duplicidades y atienden por vídeo. El estilo sigue las pautas de accesibilidad sanitaria: turquesa médico, Figtree, contraste AA y movimiento sereno, en claro y oscuro. Todas las personas y registros son datos de demostración ficticios.',
      ru: 'Pulso — SaaS для управления медицинской практикой, собранный из библиотеки. Пациенты находят врача и записываются в четыре доступных шага на публичной странице клиники; врачи начинают день с дашборда с расписанием и живым залом ожидания, планируют неделю в цветном календаре, открывают медкарты с предупреждениями об аллергиях и трендами показателей, пишут протоколы SOAP с диагнозами МКБ-10, которые автосохраняются и блокируются после подписи, выписывают рецепты с проверкой аллергий и дублирования и проводят видеоприёмы. Стиль следует рекомендациям по доступности в медицине: медицинский бирюзовый, Figtree, контраст AA и спокойная анимация, в светлой и тёмной теме. Все люди и записи — вымышленные демо-данные.',
    },
    highlights: {
      en: ['11 pages: landing, patient booking, sign-in and an 8-screen practice app', 'Four-step online booking with .ics confirmation', 'Week / day calendar, agenda and live waiting room', 'SOAP notes: vitals flags, ICD-10 combobox, autosave, sign & lock', 'e-Prescriptions with allergy and duplicate-therapy alerts', 'Telemedicine room UI — bring your own video SDK', '8 new app components + 3 healthcare sections', 'Light and dark mode, WCAG AA'],
      es: ['11 páginas: landing, reservas para pacientes, acceso y una app de 8 pantallas', 'Reserva online en cuatro pasos con confirmación .ics', 'Calendario semanal / diario, agenda y sala de espera en vivo', 'Notas SOAP: aviso de constantes, CIE-10, autoguardado y firma', 'Recetas electrónicas con alertas de alergia y duplicidad', 'Interfaz de videoconsulta: conecta tu SDK de vídeo', '8 componentes de app nuevos + 3 secciones de salud', 'Modo claro y oscuro, WCAG AA'],
      ru: ['11 страниц: лендинг, запись пациентов, вход и приложение из 8 экранов', 'Онлайн-запись в четыре шага с подтверждением .ics', 'Календарь на неделю / день, расписание и живой зал ожидания', 'Протоколы SOAP: отметка показателей, МКБ-10, автосохранение, подпись', 'Электронные рецепты с проверкой аллергий и дублирования', 'Интерфейс видеоприёма — подключите свой видео-SDK', '8 новых компонентов приложения + 3 медицинские секции', 'Светлая и тёмная тема, WCAG AA'],
    },
    tags: ['saas', 'healthcare', 'medical', 'clinic', 'booking', 'telemedicine', 'dashboard'],
    previewBase: '/preview/saas-clinic/',
    importPath: 'astro-component-kit/templates/saas-clinic',
    pages: [
      {
        id: 'landing', path: '',
        name: { en: 'Landing', es: 'Landing', ru: 'Лендинг' },
        description: { en: 'Healthcare hero with product mock-up, features, how it works, a live booking widget, outcomes, pricing per clinician, testimonials and FAQ.', es: 'Hero sanitario con maqueta del producto, funciones, cómo funciona, widget de reserva en vivo, resultados, precios por profesional, testimonios y FAQ.', ru: 'Медицинский hero с макетом продукта, функции, как это работает, живой виджет записи, результаты, цены за врача, отзывы и FAQ.' },
        file: 'src/pages/index.astro',
        code: `---
import { ClinicLandingPage } from 'astro-component-kit/templates/saas-clinic';
---

<ClinicLandingPage />`,
      },
      {
        id: 'book', path: 'book/',
        name: { en: 'Patient booking page', es: 'Página de reservas para pacientes', ru: 'Страница записи для пациентов' },
        description: { en: 'The clinic’s public page: opening hours, urgent-care notice, find-a-doctor directory and the four-step booking wizard with .ics confirmation.', es: 'La página pública de la clínica: horario, aviso de urgencias, directorio de médicos y asistente de reserva en cuatro pasos con confirmación .ics.', ru: 'Публичная страница клиники: часы работы, предупреждение о неотложке, каталог врачей и мастер записи в четыре шага с подтверждением .ics.' },
        file: 'src/pages/book.astro',
        code: `---
import { ClinicBookingPage } from 'astro-component-kit/templates/saas-clinic';
---

<!-- Book links use ?doctor=<id>#book -->
<ClinicBookingPage />`,
      },
      {
        id: 'signin', path: 'sign-in/',
        name: { en: 'Sign in', es: 'Acceso', ru: 'Вход' },
        description: { en: 'Split-screen sign-in with SSO, show-password and a brand panel.', es: 'Acceso a pantalla partida con SSO, mostrar contraseña y panel de marca.', ru: 'Вход на разделённом экране с SSO, показом пароля и панелью бренда.' },
        file: 'src/pages/sign-in.astro',
        code: `---
import { ClinicSignInPage } from 'astro-component-kit/templates/saas-clinic';
---

<ClinicSignInPage />`,
      },
      {
        id: 'dashboard', path: 'app/',
        name: { en: 'Dashboard', es: 'Dashboard', ru: 'Дашборд' },
        description: { en: 'KPIs, the clinician’s agenda with a now marker, live waiting room, activity, weekly volume, visits by specialty and busy hours.', es: 'KPIs, agenda del profesional con marcador de «ahora», sala de espera en vivo, actividad, volumen semanal, visitas por especialidad y horas punta.', ru: 'KPI, расписание врача с отметкой «сейчас», живой зал ожидания, активность, объём за неделю, визиты по специальностям и часы пик.' },
        file: 'src/pages/app/index.astro',
        code: `---
import { ClinicDashboardPage } from 'astro-component-kit/templates/saas-clinic';
---

<ClinicDashboardPage />`,
      },
      {
        id: 'schedule', path: 'app/schedule/',
        name: { en: 'Schedule', es: 'Agenda', ru: 'Расписание' },
        description: { en: 'Week / day calendar coloured by clinician with filters and detail panel, plus today’s appointment table.', es: 'Calendario semanal / diario por profesional con filtros y panel de detalle, más la tabla de citas de hoy.', ru: 'Календарь на неделю / день с цветами врачей, фильтрами и панелью деталей, плюс таблица приёмов на сегодня.' },
        file: 'src/pages/app/schedule.astro',
        code: `---
import { ClinicSchedulePage } from 'astro-component-kit/templates/saas-clinic';
---

<ClinicSchedulePage />`,
      },
      {
        id: 'patients', path: 'app/patients/',
        name: { en: 'Patients', es: 'Pacientes', ru: 'Пациенты' },
        description: { en: 'Searchable patient directory with status filters next to a patient summary.', es: 'Directorio de pacientes con búsqueda y filtros de estado junto a un resumen del paciente.', ru: 'Каталог пациентов с поиском и фильтрами рядом со сводкой по пациенту.' },
        file: 'src/pages/app/patients/index.astro',
        code: `---
import { ClinicPatientsPage } from 'astro-component-kit/templates/saas-clinic';
---

<ClinicPatientsPage />`,
      },
      {
        id: 'patient', path: 'app/patients/p-1042/',
        name: { en: 'Patient record', es: 'Historia del paciente', ru: 'Медкарта пациента' },
        description: { en: 'Allergy alert, vitals with trends, problems, medications, visits, upcoming appointments and a blood-pressure chart.', es: 'Alerta de alergias, constantes con tendencias, problemas, medicación, visitas, próximas citas y gráfico de tensión arterial.', ru: 'Предупреждение об аллергиях, показатели с трендами, проблемы, лекарства, визиты, ближайшие приёмы и график давления.' },
        file: 'src/pages/app/patients/[id].astro',
        code: `---
import { ClinicPatientPage, clinicData } from 'astro-component-kit/templates/saas-clinic';

export function getStaticPaths() {
  return clinicData.patients.map((p) => ({ params: { id: p.id } }));
}
---

<ClinicPatientPage id={Astro.params.id} />`,
      },
      {
        id: 'consultation', path: 'app/consultation/',
        name: { en: 'Consultation', es: 'Consulta', ru: 'Приём' },
        description: { en: 'SOAP note with vitals flags, ICD-10 diagnoses, templates, autosave and sign & lock, beside an e-prescription with allergy checks.', es: 'Nota SOAP con aviso de constantes, diagnósticos CIE-10, plantillas, autoguardado y firma, junto a una receta electrónica con control de alergias.', ru: 'Протокол SOAP с отметкой показателей, диагнозами МКБ-10, шаблонами, автосохранением и подписью рядом с электронным рецептом с проверкой аллергий.' },
        file: 'src/pages/app/consultation.astro',
        code: `---
import { ClinicConsultationPage } from 'astro-component-kit/templates/saas-clinic';
---

<ClinicConsultationPage />`,
      },
      {
        id: 'telehealth', path: 'app/telehealth/',
        name: { en: 'Video visit', es: 'Videoconsulta', ru: 'Видеоприём' },
        description: { en: 'Telemedicine room with timer, controls, chat and end-of-call summary, plus patient summary and today’s video visits.', es: 'Sala de videoconsulta con temporizador, controles, chat y resumen final, más resumen del paciente y videoconsultas del día.', ru: 'Комната видеоприёма с таймером, управлением, чатом и итогом звонка, плюс сводка пациента и видеоприёмы на сегодня.' },
        file: 'src/pages/app/telehealth.astro',
        code: `---
import { ClinicTelehealthPage } from 'astro-component-kit/templates/saas-clinic';
---

<ClinicTelehealthPage />`,
      },
      {
        id: 'reports', path: 'app/reports/',
        name: { en: 'Reports', es: 'Informes', ru: 'Отчёты' },
        description: { en: 'In person vs video volume, no-show trend, satisfaction gauge, revenue by clinician, specialties and month-over-month table.', es: 'Volumen presencial vs vídeo, tendencia de ausencias, satisfacción, ingresos por profesional, especialidades y comparativa mensual.', ru: 'Объём очно vs видео, тренд неявок, удовлетворённость, выручка по врачам, специальности и сравнение по месяцам.' },
        file: 'src/pages/app/reports.astro',
        code: `---
import { ClinicReportsPage } from 'astro-component-kit/templates/saas-clinic';
---

<ClinicReportsPage />`,
      },
      {
        id: 'settings', path: 'app/settings/',
        name: { en: 'Settings', es: 'Ajustes', ru: 'Настройки' },
        description: { en: 'Profile, weekly consultation hours editor, patient reminders, team roles and plan usage.', es: 'Perfil, editor de horario semanal de consulta, recordatorios a pacientes, roles del equipo y uso del plan.', ru: 'Профиль, редактор графика приёма, напоминания пациентам, роли команды и использование тарифа.' },
        file: 'src/pages/app/settings.astro',
        code: `---
import { ClinicSettingsPage } from 'astro-component-kit/templates/saas-clinic';
---

<ClinicSettingsPage />`,
      },
    ],
    newComponents: [
      'med-hero', 'med-doctor-directory', 'med-booking-wizard',
      'med-agenda-timeline', 'med-waiting-room', 'med-schedule-calendar', 'med-patient-summary', 'med-consultation-note', 'med-prescription-pad', 'med-video-visit', 'med-availability-editor',
    ],
    reusedComponents: [
      'app-sidebar', 'app-topbar', 'page-header', 'data-table', 'auth-card', 'settings-section', 'switch-row', 'team-members', 'plan-usage-card',
      'kpi-stat-tile', 'stacked-bar-chart', 'grouped-bar-chart', 'line-chart', 'pie-chart', 'heatmap-chart', 'horizontal-bar-chart', 'gauge-chart', 'metric-delta-table', 'sparkline-chart',
      'status-timeline-feed', 'animated-input', 'modern-select', 'logo-wall-grid', 'feature-icon-grid', 'how-it-works-steps', 'stats-counter-band', 'pricing-toggle-cards', 'testimonial-carousel', 'faq-two-column', 'footer-mega-section',
    ],
    storeConfigExample: `---
// src/pages/app/index.astro — pass the same data + routes to every page
import { ClinicDashboardPage, clinicData, type ClinicData } from 'astro-component-kit/templates/saas-clinic';

const data: ClinicData = {
  ...clinicData,
  product: 'MyClinic',
  workspace: { name: 'Centro Médico Sol', plan: 'Practice plan', initials: 'CS' },
  user: { name: 'Dr. Ana Ruiz', role: 'GP', email: 'ana@sol.clinic' },
  // doctors, patients, appointments, diagnoses, formulary… from your API
};
---

<ClinicDashboardPage
  data={data}
  theme="auto"
  routes={{ landing: '/', signIn: '/sign-in/', book: '/book/', dashboard: '/app/', schedule: '/app/schedule/', patients: '/app/patients/', patient: '/app/patients/', consultation: '/app/consultation/', telehealth: '/app/telehealth/', reports: '/app/reports/', settings: '/app/settings/' }}
/>`,
  },
  {
    slug: 'cyberpunk',
    name: { en: 'Cyberpunk · Futuristic brutalist', es: 'Cyberpunk · Brutalista futurista', ru: 'Киберпанк · Футуристичный брутализм' },
    tagline: {
      en: 'A futuristic-brutalist site for a tech product: glitch headlines, HUD telemetry, neon on hard rules, scanlines — in NIGHT and DAY.',
      es: 'Una web brutalista futurista para un producto tecnológico: titulares con glitch, telemetría HUD, neón sobre reglas gruesas y scanlines, en NOCHE y DÍA.',
      ru: 'Футуристичный бруталистский сайт для техпродукта: глитч-заголовки, HUD-телеметрия, неон на жёстких линиях и сканлайны — в режимах НОЧЬ и ДЕНЬ.',
    },
    description: {
      en: 'NULL/SECTOR is a six-page site for a fictional decentralised GPU network, built to show how far the library goes beyond glass and gradients. Orbitron and JetBrains Mono, zero radius, 2px ink rules, acid yellow, magenta and cyan, and a CRT scanline overlay. The home page stacks a glitching hero with live telemetry over a perspective grid, a status ticker, a bento of CyberFeatureCards, a dot-matrix world map of nodes and an access-window banner. Inner pages bring a classified spec sheet that decrypts, usage-based pricing with a live calculator, a manifesto that lights up on scroll, crew access badges with generated pixel avatars, a 60-day uptime board and a contact form you drive like a command line. A DAY mode turns it into concrete-and-ink brutalism. Every animation stops with reduced motion.',
      es: 'NULL/SECTOR es una web de seis páginas para una red descentralizada de GPUs ficticia, pensada para mostrar lo lejos que llega la librería más allá del cristal y los degradados. Orbitron y JetBrains Mono, radio cero, reglas de tinta de 2px, amarillo ácido, magenta y cian, y una capa de scanlines CRT. La home apila un hero con glitch y telemetría en vivo sobre una rejilla en perspectiva, un ticker de estado, un bento de CyberFeatureCards, un mapa del mundo en matriz de puntos con nodos y un banner de acceso. Las páginas interiores traen una ficha técnica clasificada que se descifra, precios por uso con calculadora en vivo, un manifiesto que se ilumina al hacer scroll, credenciales del equipo con avatares de píxeles generados, un panel de uptime de 60 días y un formulario de contacto que se usa como línea de comandos. El modo DÍA lo convierte en brutalismo de hormigón y tinta. Toda animación se detiene con movimiento reducido.',
      ru: 'NULL/SECTOR — шестистраничный сайт вымышленной децентрализованной GPU-сети, показывающий, что библиотека умеет больше, чем стекло и градиенты. Orbitron и JetBrains Mono, нулевые радиусы, чернильные линии 2px, кислотный жёлтый, мадженту и циан, а также слой ЭЛТ-сканлайнов. На главной — hero с глитчем и живой телеметрией над перспективной сеткой, бегущая строка статусов, бенто из CyberFeatureCard, точечная карта мира с узлами и баннер доступа. Внутренние страницы: засекреченный техпаспорт с расшифровкой, тарифы с живым калькулятором, манифест с подсветкой при прокрутке, бейджи команды со сгенерированными пиксельными аватарами, панель аптайма за 60 дней и контактная форма в виде командной строки. Режим ДЕНЬ превращает всё в бетонно-чернильный брутализм. Все анимации отключаются при reduced motion.',
    },
    highlights: {
      en: ['6 pages: home, protocol, pricing, manifesto, logs and terminal contact', 'Glitch hero with HUD telemetry over a perspective grid', 'Dot-matrix world map of nodes with live table', 'Classified spec sheet that decrypts', 'Pricing with a live usage calculator', 'Command-line contact form with a plain-form fallback', 'NIGHT and concrete DAY themes, scanlines, reduced-motion safe', '13 new sections in Sections → Cyberpunk & Brutalist'],
      es: ['6 páginas: inicio, protocolo, precios, manifiesto, logs y contacto tipo terminal', 'Hero con glitch y telemetría HUD sobre rejilla en perspectiva', 'Mapa del mundo en matriz de puntos con tabla en vivo', 'Ficha técnica clasificada que se descifra', 'Precios con calculadora de uso en vivo', 'Formulario tipo línea de comandos con alternativa de formulario normal', 'Temas NOCHE y DÍA de hormigón, scanlines, respeta el movimiento reducido', '13 secciones nuevas en Secciones → Cyberpunk y brutalista'],
      ru: ['6 страниц: главная, протокол, цены, манифест, логи и контакты-терминал', 'Глитч-hero с HUD-телеметрией над перспективной сеткой', 'Точечная карта мира с живой таблицей узлов', 'Засекреченный техпаспорт с расшифровкой', 'Тарифы с живым калькулятором', 'Контактная форма-терминал с обычной формой как запасным вариантом', 'Темы НОЧЬ и бетонный ДЕНЬ, сканлайны, учёт reduced motion', '13 новых секций в разделе «Секции → Киберпанк и брутализм»'],
    },
    tags: ['cyberpunk', 'brutalist', 'futuristic', 'neon', 'glitch', 'saas', 'landing'],
    previewBase: '/preview/cyberpunk/',
    importPath: 'astro-component-kit/templates/cyberpunk',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Home', es: 'Inicio', ru: 'Главная' },
        description: { en: 'Glitch hero with live telemetry, status ticker, partners, bento of capabilities, dot-matrix node map, stats and an access-window banner.', es: 'Hero con glitch y telemetría en vivo, ticker de estado, partners, bento de capacidades, mapa de nodos en matriz de puntos, cifras y banner de acceso.', ru: 'Hero с глитчем и живой телеметрией, бегущая строка, партнёры, бенто возможностей, точечная карта узлов, цифры и баннер доступа.' },
        file: 'src/pages/index.astro',
        code: `---
import { CyberHomePage } from 'astro-component-kit/templates/cyberpunk';
---

<CyberHomePage />`,
      },
      {
        id: 'protocol', path: 'protocol/',
        name: { en: 'Protocol', es: 'Protocolo', ru: 'Протокол' },
        description: { en: 'Boot sequence of five layers, classified spec sheet that decrypts, guarantees and FAQ.', es: 'Secuencia de arranque en cinco capas, ficha técnica clasificada que se descifra, garantías y FAQ.', ru: 'Последовательность загрузки из пяти слоёв, засекреченный техпаспорт с расшифровкой, гарантии и FAQ.' },
        file: 'src/pages/protocol.astro',
        code: `---
import { CyberProtocolPage } from 'astro-component-kit/templates/cyberpunk';
---

<CyberProtocolPage />`,
      },
      {
        id: 'pricing', path: 'pricing/',
        name: { en: 'Pricing', es: 'Precios', ru: 'Цены' },
        description: { en: 'Acid page hero, three tiers with monthly / annual switch and a live usage calculator, spot-price ticker and billing FAQ.', es: 'Hero ácido, tres planes con mensual / anual y calculadora de uso en vivo, ticker de precios spot y FAQ de facturación.', ru: 'Кислотный hero, три тарифа с переключателем месяц / год и живым калькулятором, бегущая строка цен и FAQ по оплате.' },
        file: 'src/pages/pricing.astro',
        code: `---
import { CyberPricingPage } from 'astro-component-kit/templates/cyberpunk';
---

<CyberPricingPage />`,
      },
      {
        id: 'manifesto', path: 'manifesto/',
        name: { en: 'Manifesto', es: 'Manifiesto', ru: 'Манифест' },
        description: { en: 'Theses that light up on scroll, crew access badges and stats.', es: 'Tesis que se iluminan al hacer scroll, credenciales del equipo y cifras.', ru: 'Тезисы, подсвечивающиеся при прокрутке, бейджи команды и цифры.' },
        file: 'src/pages/manifesto.astro',
        code: `---
import { CyberManifestoPage } from 'astro-component-kit/templates/cyberpunk';
---

<CyberManifestoPage />`,
      },
      {
        id: 'logs', path: 'logs/',
        name: { en: 'Logs & status', es: 'Logs y estado', ru: 'Логи и статус' },
        description: { en: '60-day uptime board per region, incident feed and changelog.', es: 'Panel de uptime de 60 días por región, incidencias y changelog.', ru: 'Панель аптайма за 60 дней по регионам, инциденты и changelog.' },
        file: 'src/pages/logs.astro',
        code: `---
import { CyberLogsPage } from 'astro-component-kit/templates/cyberpunk';
---

<CyberLogsPage />`,
      },
      {
        id: 'terminal', path: 'terminal/',
        name: { en: 'Terminal (contact)', es: 'Terminal (contacto)', ru: 'Терминал (контакты)' },
        description: { en: 'Command-line contact form with /help commands and a plain-form switch, plus direct channels.', es: 'Formulario de contacto tipo línea de comandos con comandos /help y cambio a formulario normal, más canales directos.', ru: 'Контактная форма-терминал с командами /help и переключением на обычную форму, плюс прямые каналы.' },
        file: 'src/pages/terminal.astro',
        code: `---
import { CyberTerminalPage } from 'astro-component-kit/templates/cyberpunk';
---

<!-- Pass action="https://your-backend/contact" to send the form -->
<CyberTerminalPage />`,
      },
    ],
    newComponents: [
      'cyber-header', 'cyber-hero', 'cyber-ticker', 'cyber-bento', 'cyber-node-map', 'cyber-page-hero', 'cyber-spec-table',
      'cyber-pricing', 'cyber-manifesto', 'cyber-crew-grid', 'cyber-status-board', 'cyber-terminal-form', 'cyber-footer',
    ],
    reusedComponents: [
      'cyberpunk-button', 'neon-border-button', 'cyber-feature-card', 'cyber-glitch-alert', 'cyberpunk-checkbox', 'hacker-decode-text', 'neon-spinner',
      'logo-wall-grid', 'stats-counter-band', 'faq-two-column', 'changelog-section', 'status-timeline-feed',
    ],
    storeConfigExample: `---
// src/pages/index.astro — pass the same data + routes to every page
import { CyberHomePage, nullSector, type CyberData } from 'astro-component-kit/templates/cyberpunk';

const data: CyberData = {
  ...nullSector,
  brand: 'VOID/LABS',
  status: 'ALL SYSTEMS GO',
  hero: { ...nullSector.hero, lines: ['SHIP THE', 'FUTURE', 'TONIGHT'] },
  // features, nodes, plans, theses, crew, regions, releases…
};
---

<CyberHomePage
  data={data}
  theme="dark"
  routes={{ home: '/', protocol: '/protocol/', pricing: '/pricing/', manifesto: '/manifesto/', logs: '/logs/', terminal: '/terminal/' }}
/>`,
  },
  {
    slug: 'dental',
    name: { en: 'Dental Clinic & Practice OS', es: 'Clínica Dental y Gestión de Citas', ru: 'Стоматологическая клиника и онлайн-запись' },
    tagline: {
      en: 'A comprehensive dental practice solution: public clinic site, treatments catalog, 4-step booking wizard, and practice backoffice with interactive 32-tooth odontogram and chair agenda.',
      es: 'Una solución dental integral: web pública de la clínica, catálogo de tratamientos, reservas en 4 pasos y gestión de clínica con odontograma interactivo de 32 dientes y agenda de sillones.',
      ru: 'Комплексное решение для стоматологии: публичный сайт, каталог услуг, онлайн-запись в 4 шага и панель управления с интерактивной зубной формулой и расписанием кресел.',
    },
    description: {
      en: 'Dentis is a complete dental clinic website and backoffice management SaaS. Patients book visits in four intuitive steps with .ics calendar export; dentists and clinic staff manage real-time operatory chair occupancy, inspect visual 32-tooth odontograms with surface-level decay and restorations, build phased treatment plans with ADA codes and insurance co-pays, and automate 6-month hygiene recall reminders via SMS and WhatsApp.',
      es: 'Dentis es una plantilla completa de web para clínica dental y SaaS de gestión de consultas odontológicas. Los pacientes reservan cita en cuatro pasos con exportación a calendario .ics; los dentistas y el equipo gestionan la ocupación de sillones en tiempo real, consultan un odontograma interactivo de 32 dientes con patologías y restauraciones, generan presupuestos por fases con códigos ADA y copago de seguro, y automatizan recordatorios de higiene preventiva por SMS y WhatsApp.',
      ru: 'Dentis — полноценный сайт стоматологии и SaaS-система управления клиникой. Пациенты записываются на приём за 4 шага с экспортом .ics в календарь; врачи и администраторы контролируют занятость кресел в реальном времени, ведут интерактивную зубную формулу из 32 зубов, составляют поэтапные планы лечения с расчётом страховки и автоматизируют напоминания о гигиене через SMS и WhatsApp.',
    },
    highlights: {
      en: [
        '11 pages: clinic website, treatments, online booking, staff login and a 7-screen practice app',
        'Interactive 32-tooth Odontogram with Universal and FDI numbering',
        'Multi-operatory chair turnover and live schedule timeline',
        '4-step patient booking wizard with .ics calendar invitation',
        'Phased treatment plan builder with ADA codes and insurance estimates',
        'Preventative hygiene recall manager with automated WhatsApp/SMS outreach',
        'Emergency 24/7 dental triage banner and acute toothache protocol',
        'Light and dark mode, zero runtime dependencies, WCAG AA',
      ],
      es: [
        '11 páginas: web de clínica, tratamientos, reserva online, acceso y app de 7 pantallas',
        'Odontograma interactivo de 32 dientes con numeración Universal y FDI',
        'Monitor de ocupación e higiene de sillones dentales en tiempo real',
        'Asistente de reserva para pacientes en 4 pasos con descarga .ics',
        'Generador de planes de tratamiento por fases con códigos ADA y copagos',
        'Gestión de revisiones e higiene preventiva con avisos por WhatsApp y SMS',
        'Banner de urgencias dentales 24/7 y protocolo de dolor agudo',
        'Modo claro y oscuro, cero dependencias en runtime, WCAG AA',
      ],
      ru: [
        '11 страниц: сайт клиники, услуги, онлайн-запись, вход и приложение из 7 экранов',
        'Интерактивная зубная формула на 32 зуба (системы Universal и FDI)',
        'Мониторинг занятости и стерилизации стоматологических кресел',
        'Мастер онлайн-записи пациента за 4 шага с сохранением события .ics',
        'Конструктор поэтапных планов лечения с кодами ADA и расчётом страховки',
        'Управление профилактическими визитами и авторассылка в WhatsApp/SMS',
        'Блок экстренной стоматологической помощи 24/7 и триаж острой боли',
        'Светлая и тёмная темы, 0 runtime-зависимостей, WCAG AA',
      ],
    },
    tags: ['dental', 'dentist', 'clinic', 'odontogram', 'booking', 'appointments', 'saas', 'healthcare'],
    previewBase: '/preview/dental/',
    importPath: 'astro-component-kit/templates/dental',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Clinic home', es: 'Home de la clínica', ru: 'Главная клиники' },
        description: { en: 'Dental landing hero with emergency hotline, treatments grid, before/after smile transformations, specialists directory and emergency care banner.', es: 'Hero dental con teléfono de urgencias, catálogo de tratamientos, transformaciones antes/después, especialistas y urgencias.', ru: 'Главная с телефоном неотложной помощи, услугами, фото до/после, врачами и экстренной помощью.' },
        file: 'src/pages/index.astro',
        code: `---
import { DentalHomePage } from 'astro-component-kit/templates/dental';
---

<DentalHomePage />`,
      },
      {
        id: 'treatments', path: 'treatments/',
        name: { en: 'Treatments & fees', es: 'Tratamientos y tarifas', ru: 'Услуги и цены' },
        description: { en: 'Transparent procedure fee schedule with procedure duration, anesthesia details and starting prices.', es: 'Tarifario transparente con duración de citas, tipo de anestesia y precios desde.', ru: 'Прозрачный прайс-лист с длительностью процедур, анестезией и ценами.' },
        file: 'src/pages/treatments.astro',
        code: `---
import { DentalTreatmentsPage } from 'astro-component-kit/templates/dental';
---

<DentalTreatmentsPage />`,
      },
      {
        id: 'book', path: 'book/',
        name: { en: 'Patient booking wizard', es: 'Reserva de citas para pacientes', ru: 'Онлайн-запись пациента' },
        description: { en: '4-step appointment booking wizard with specialist selection, live slot matrix, insurance selection and .ics calendar export.', es: 'Asistente de reserva en 4 pasos con selección de doctor, horario, seguro dental y descarga de evento .ics.', ru: 'Мастер записи в 4 шага: выбор услуги, врача, времени, страховки и сохранение .ics.' },
        file: 'src/pages/book.astro',
        code: `---
import { DentalBookingPage } from 'astro-component-kit/templates/dental';
---

<DentalBookingPage />`,
      },
      {
        id: 'sign-in', path: 'sign-in/',
        name: { en: 'Staff sign in', es: 'Acceso de personal', ru: 'Вход для персонала' },
        description: { en: 'Dental team login with 1-click fast login presets for Lead Dentist, Orthodontist, and Office Manager.', es: 'Acceso de equipo con perfiles rápidos de 1 clic para Dentista Titular, Ortodoncista y Recepción.', ru: 'Вход для сотрудников с демо-кнопками в 1 клик для главного врача, ортодонта и администратора.' },
        file: 'src/pages/sign-in.astro',
        code: `---
import { DentalSignInPage } from 'astro-component-kit/templates/dental';
---

<DentalSignInPage />`,
      },
      {
        id: 'dashboard', path: 'app/',
        name: { en: 'Practice dashboard', es: 'Dashboard de la clínica', ru: 'Дашборд клиники' },
        description: { en: 'Real-time operatory chair monitor, daily revenue KPIs, next patient arrivals, and pending treatment estimates.', es: 'Monitor de sillones dentales en vivo, ingresos del día, próximas llegadas de pacientes y presupuestos pendientes.', ru: 'Монитор стоматологических кресел в реальном времени, выручка, прибытие пациентов и сметы.' },
        file: 'src/pages/app/index.astro',
        code: `---
import { DentalDashboardPage } from 'astro-component-kit/templates/dental';
---

<DentalDashboardPage />`,
      },
      {
        id: 'schedule', path: 'app/schedule/',
        name: { en: 'Operatories schedule', es: 'Agenda de sillones', ru: 'Расписание кресел' },
        description: { en: 'Multi-chair timeline schedule with chair turnover, sanitation state, and patient chair check-in.', es: 'Agenda en cuadrícula por sillones con control de desinfección y asignación rápida de pacientes.', ru: 'Сетка расписания по креслам со статусами дезинфекции и приёмом пациентов.' },
        file: 'src/pages/app/schedule.astro',
        code: `---
import { DentalSchedulePage } from 'astro-component-kit/templates/dental';
---

<DentalSchedulePage />`,
      },
      {
        id: 'patients', path: 'app/patients/',
        name: { en: 'Patients directory', es: 'Directorio de pacientes', ru: 'База пациентов' },
        description: { en: 'Patient records list with insurance policy numbers, last prophylaxis date, recall status, and outstanding balances.', es: 'Directorio de pacientes con pólizas de seguro, fecha de última limpieza, estado de revisión y saldo pendiente.', ru: 'Список пациентов с полисами страхования, датой последней гигиены и статусом профосмотра.' },
        file: 'src/pages/app/patients/index.astro',
        code: `---
import { DentalPatientsPage } from 'astro-component-kit/templates/dental';
---

<DentalPatientsPage />`,
      },
      {
        id: 'patient', path: 'app/patients/pat-101/',
        name: { en: 'Patient dental chart', es: 'Ficha dental y odontograma', ru: 'Зубная карта пациента' },
        description: { en: 'Interactive 32-tooth odontogram with condition flags, medical alerts, bitewing radiographic notes, and treatment plan overview.', es: 'Odontograma interactivo de 32 piezas dentales con registro de caries, coronas, implantes y endodoncias.', ru: 'Интерактивная зубная карта на 32 зуба с отметками кариеса, коронок, имплантов и эндодонтии.' },
        file: 'src/pages/app/patients/[id].astro',
        code: `---
import { DentalPatientPage, dentalData } from 'astro-component-kit/templates/dental';

export function getStaticPaths() {
  return dentalData.patients.map((p) => ({ params: { id: p.id } }));
}
---

<DentalPatientPage patientId={Astro.params.id} />`,
      },
      {
        id: 'treatment-plans', path: 'app/treatment-plans/',
        name: { en: 'Treatment plans', es: 'Presupuestos y planes', ru: 'Планы лечения' },
        description: { en: 'Phased clinical quote generator with ADA/CDT codes, insurance benefit deductions, patient co-pays, and signature status.', es: 'Generador de presupuestos clínicos por fases con códigos ADA, deducción de seguro y estado de firma.', ru: 'Генератор поэтапных смет с кодами ADA, расчётом страховки и статусом согласования.' },
        file: 'src/pages/app/treatment-plans.astro',
        code: `---
import { DentalTreatmentPlansPage } from 'astro-component-kit/templates/dental';
---

<DentalTreatmentPlansPage />`,
      },
      {
        id: 'recalls', path: 'app/recalls/',
        name: { en: 'Hygiene recalls', es: 'Revisiones preventivas', ru: 'Профосмотры и гигиена' },
        description: { en: 'Preventative recall center for 6-month cleanings with 1-click WhatsApp and SMS patient reactivation.', es: 'Gestor de revisiones semestrales y periodontales con envío rápido de recordatorios por WhatsApp y SMS.', ru: 'Центр профосмотров для 6-месячной гигиены с быстрой отправкой приглашений в WhatsApp и SMS.' },
        file: 'src/pages/app/recalls.astro',
        code: `---
import { DentalRecallsPage } from 'astro-component-kit/templates/dental';
---

<DentalRecallsPage />`,
      },
      {
        id: 'settings', path: 'app/settings/',
        name: { en: 'Practice settings', es: 'Ajustes de la clínica', ru: 'Настройки клиники' },
        description: { en: 'Operatory chairs setup, clinical hours, recall automation triggers, and insurance fee schedule tables.', es: 'Configuración de sillones, horario de la clínica, automatización de avisos y baremos de aseguradoras.', ru: 'Настройка кресел, графика работы, правил авторассылки и страховых тарифов.' },
        file: 'src/pages/app/settings.astro',
        code: `---
import { DentalSettingsPage } from 'astro-component-kit/templates/dental';
---

<DentalSettingsPage />`,
      },
    ],
    newComponents: [
      'dental-odontogram', 'dental-chair-timeline', 'dental-treatment-plan-builder', 'dental-recall-manager',
      'dental-hero', 'dental-treatments-grid', 'dental-before-after', 'dental-booking-wizard', 'dental-team-directory', 'dental-emergency-banner',
    ],
    reusedComponents: [
      'app-sidebar', 'app-topbar', 'page-header', 'data-table', 'settings-section', 'switch-row', 'footer-mega-section', 'badge', 'modern-select',
    ],
    storeConfigExample: `---
// src/pages/index.astro — pass the same data + routes across all dental pages
import { DentalHomePage, dentalData, type DentalClinicData } from 'astro-component-kit/templates/dental';

const data: DentalClinicData = {
  ...dentalData,
  workspace: { ...dentalData.workspace, name: 'Aura Dental Studio' },
};
---

<DentalHomePage />`,
  },
  {
    slug: 'moving',
    name: {
      en: 'Muvr · Logistics, Removals & Van Fleet',
      es: 'Muvr · Portes, Mudanzas de Muebles y Flota de Furgonetas',
      ru: 'Muvr · Переезды, грузоперевозки и автопарк фургонов',
    },
    tagline: {
      en: 'Express furniture removals, commercial van dispatch, and driver hiring portal.',
      es: 'Portes y mudanzas de muebles, gestión de flota de furgonetas y contratación de transportistas.',
      ru: 'Грузоперевозки мебели, диспетчеризация автопарка и найм водителей и грузчиков.',
    },
    description: {
      en: 'Full-stack removals and logistics template: marketing landing with instant furniture m³ calculator, fleet specifications, and driver recruitment portal, backed by a SaaS operations dashboard with van dispatch timeline, move order manifests, and candidate hiring pipeline.',
      es: 'Plantilla integral de mudanzas y logística: web pública con calculadora de volumen de muebles en m³, catálogo de furgonetas y portal de empleo para transportistas y mozos, respaldado por un panel SaaS de operaciones con matriz de despacho, órdenes de mudanza y pipeline de contratación.',
      ru: 'Комплексный шаблон для сервиса переездов и логистики: публичный сайт с калькулятором объёма мебели (м³), каталогом автопарка и порталом найма водителей, плюс SaaS-панель управления с таймлайном диспетчеризации, путевыми листами и воронкой кандидатов.',
    },
    highlights: {
      en: [
        '11 production pages: 5 public customer/recruitment pages + 6 backoffice dispatch and operations pages.',
        'Interactive Volume & Van Estimator: live cubic meters (m³) tally, payload weight, elevator access factors, and instant transparent quote.',
        'Commercial Van Fleet Showcase: compact vans, high-roof Sprinters, and Luton box trucks with hydraulic tail-lifts (dimensions & payload specs).',
        'Driver & Mover Recruitment Portal ("We are Hiring"): vacancies for own-van drivers, company fleet drivers, and movers with 2-minute application form.',
        'Fleet Dispatch Timeline Matrix: multi-van schedule with time slots, real-time payload capacity bars, and driver allocation.',
        'Move Orders & Bill of Lading Manifests: origin/destination addresses, floor & elevator access, itemized furniture list, and progress tracker.',
        'Recruitment Pipeline Kanban Board: tracks applicants across Applied, Interview, Trial Shift, and Hired stages with vehicle details.',
      ],
      es: [
        '11 páginas completas: 5 públicas de clientes y empleo + 6 páginas de backoffice de despacho y operaciones.',
        'Calculadora interactiva de volumen en m³: suma de muebles pieza a pieza, estimación de peso, factores de ascensor/escaleras y presupuesto en vivo.',
        'Escaparate de flota de furgonetas: modelos compactos L1H1, L3H2 gran volumen y carrozados con plataforma elevadora hidráulica de 500kg.',
        'Portal de empleo para conductores y mozos («Trabaja con nosotros»): vacantes para autónomos con furgoneta propia y personal en plantilla con formulario ágil.',
        'Matriz de despacho y cronograma de flota: cuadrícula horaria por vehículo con medidores de carga volumétrica y asignación de conductores.',
        'Gestión de órdenes y albaranes de mudanza: direcciones de origen/destino, acceso por ascensor o escaleras, inventario desglosado y seguimiento en vivo.',
        'Tablero Kanban de contratación: flujo de selección de transportistas (solicitud, entrevista, ruta de prueba, contratado).',
      ],
      ru: [
        '11 готовых страниц: 5 публичных (клиенты и вакансии) + 6 страниц бэкофиса диспетчеризации и операций.',
        'Интерактивный калькулятор объёма (м³): выбор мебели, расчёт веса, учёт этажей и лифта, мгновенный расчёт стоимости.',
        'Каталог автопарка: компактные L1H1, цельнометаллические Sprinter L3H2 и мебельные фургоны с гидробортом на 500 кг.',
        'Портал найма водителей и грузчиков («Работа у нас»): вакансии для водителей со своим авто и в штат с быстрой анкетой.',
        'Матрица диспетчеризации автопарка: почасовое расписание рейсов, шкала загрузки по объёму и назначение бригад.',
        'Путевые листы и карточки переездов: адреса с этажами, опись перевозимой мебели и статус рейса.',
        'Канбан-доска найма персонала: отбор кандидатов по этапам (заявка, интервью, тестовый рейс, оформление).',
      ],
    },
    tags: ['logistics', 'moving', 'fleet', 'van', 'dispatch', 'careers', 'hiring', 'calculator', 'saas', 'transport'],
    previewBase: '/preview/moving/',
    importPath: 'astro-component-kit/templates/moving',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Public Home', es: 'Inicio', ru: 'Главная' },
        description: { en: 'Landing page with route estimate calculator, housing volume guide, fleet grid, pricing packages, and hiring banner.', es: 'Página de inicio con estimador de rutas, guía de volumen por tipo de vivienda, flota de furgonetas, tarifas y banner de empleo.', ru: 'Главная страница с быстрым расчётом маршрута, гидом по объёму квартир, автопарком, тарифами и блоком вакансий.' },
        file: 'src/pages/index.astro',
        code: `---
import { MovingHomePage } from 'astro-component-kit/templates/moving';
---

<MovingHomePage />`,
      },
      {
        id: 'quote', path: 'quote/',
        name: { en: 'Volume & Quote Calculator', es: 'Calculadora de Volumen y Presupuesto', ru: 'Калькулятор объёма и сметы' },
        description: { en: 'Interactive furniture inventory builder room-by-room with cubic meter tally, recommended van, and guaranteed quote.', es: 'Calculadora interactiva de inventario pieza a pieza con cubicaje m³, recomendación de furgoneta y presupuesto cerrado.', ru: 'Интерактивный калькулятор мебели по комнатам с подсчётом кубометров, подбором фургона и точной ценой.' },
        file: 'src/pages/quote.astro',
        code: `---
import { MovingQuotePage } from 'astro-component-kit/templates/moving';
---

<MovingQuotePage />`,
      },
      {
        id: 'fleet', path: 'fleet/',
        name: { en: 'Commercial Van Fleet', es: 'Flota de Furgonetas y Camiones', ru: 'Автопарк фургонов' },
        description: { en: 'Detailed vehicle catalog: cargo dimensions, payload weight, tail-lift platforms, and Euro 6 city credentials.', es: 'Catálogo de vehículos con dimensiones de caja de carga, carga útil, plataformas elevadoras y distintivo ambiental.', ru: 'Подробный каталог автопарка: габариты кузова, грузоподъёмность, гидролифты и экостандарты Euro 6.' },
        file: 'src/pages/fleet.astro',
        code: `---
import { MovingFleetPage } from 'astro-component-kit/templates/moving';
---

<MovingFleetPage />`,
      },
      {
        id: 'careers', path: 'careers/',
        name: { en: 'Careers & Driver Hiring', es: 'Empleo y Contratación', ru: 'Вакансии и найм водителей' },
        description: { en: 'Job openings for drivers with own vehicle, company fleet drivers, and heavy movers, with 2-minute application form.', es: 'Ofertas de empleo para transportistas con furgoneta propia, conductores de flota y mozos, con formulario de postulación.', ru: 'Вакансии для водителей со своим авто, штатных водителей и грузчиков с быстрой онлайн-анкетой.' },
        file: 'src/pages/careers.astro',
        code: `---
import { MovingCareersPage } from 'astro-component-kit/templates/moving';
---

<MovingCareersPage />`,
      },
      {
        id: 'sign-in', path: 'sign-in/',
        name: { en: 'Staff & Dispatch Login', es: 'Acceso de Personal y Despacho', ru: 'Вход для персонала и диспетчера' },
        description: { en: 'Staff login with 1-click demo profiles for Fleet Dispatcher, Recruitment Lead, and Lead Van Captain.', es: 'Portal de acceso para empleados con 1 clic para Jefe de Operaciones, Responsable de Selección y Conductor Líder.', ru: 'Вход для сотрудников с демо-профилями в один клик: начальник автопарка, HR-менеджер и старший водитель.' },
        file: 'src/pages/sign-in.astro',
        code: `---
import { MovingSignInPage } from 'astro-component-kit/templates/moving';
---

<MovingSignInPage />`,
      },
      {
        id: 'dashboard', path: 'app/',
        name: { en: 'Operations Dashboard', es: 'Panel de Operaciones', ru: 'Панель управления' },
        description: { en: 'Central operations command: active vans on road, today’s booked revenue, active moves table, and applicant metrics.', es: 'Panel principal: furgonetas en ruta, ingresos del día, tabla de mudanzas activas y candidatos pendientes.', ru: 'Главный пульт управления: фургоны на линии, выручка за день, активные перевозки и статус найма.' },
        file: 'src/pages/app/index.astro',
        code: `---
import { MovingDashboardPage } from 'astro-component-kit/templates/moving';
---

<MovingDashboardPage />`,
      },
      {
        id: 'dispatch', path: 'app/dispatch/',
        name: { en: 'Fleet Dispatch Matrix', es: 'Matriz de Despacho de Flota', ru: 'Матрица диспетчеризации' },
        description: { en: 'Van dispatch schedule matrix with time slots, live volumetric payload utilization, and driver assignment.', es: 'Matriz horaria de despacho por vehículo con utilización volumétrica de carga y asignación de choferes.', ru: 'Почасовая матрица рейсов по автомобилям с контролем заполнения объёма кузова и назначения водителей.' },
        file: 'src/pages/app/dispatch.astro',
        code: `---
import { MovingDispatchPage } from 'astro-component-kit/templates/moving';
---

<MovingDispatchPage />`,
      },
      {
        id: 'moves', path: 'app/moves/',
        name: { en: 'Move Orders Directory', es: 'Directorio de Mudanzas', ru: 'Журнал заказов' },
        description: { en: 'Master directory of customer removal jobs with route details, assigned team, floor accessibility, and payment tags.', es: 'Directorio de mudanzas con detalles de ruta, equipo asignado, dificultad de pisos/ascensor y cobro.', ru: 'Каталог заказов на переезд с деталями маршрута, назначенной бригадой, условиями подъёма и оплатой.' },
        file: 'src/pages/app/moves/index.astro',
        code: `---
import { MovingOrdersPage } from 'astro-component-kit/templates/moving';
---

<MovingOrdersPage />`,
      },
      {
        id: 'move-detail', path: 'app/moves/ord-01/',
        name: { en: 'Move Manifest & Waybill', es: 'Albarán y Hoja de Ruta', ru: 'Путевой лист и опись' },
        description: { en: 'Detailed move manifest sheet with customer contacts, floor elevator access, itemized furniture checklist, and driver dialer.', es: 'Albarán de mudanza con datos de cliente, acceso por escaleras, inventario desglosado y botón de llamada al chófer.', ru: 'Детальный путевой лист с контактами клиента, условиями этажей, описью вещей и связью с водителем.' },
        file: 'src/pages/app/moves/[id].astro',
        code: `---
import { MovingOrderDetailPage } from 'astro-component-kit/templates/moving';
---

<MovingOrderDetailPage orderId={Astro.params.id} />`,
      },
      {
        id: 'hiring', path: 'app/hiring/',
        name: { en: 'Hiring Pipeline (Kanban)', es: 'Pipeline de Contratación', ru: 'Воронка найма персонала' },
        description: { en: 'Recruitment Kanban board: screen van driver and mover candidates across interview, trial route, and hired stages.', es: 'Tablero Kanban de selección: evalúa transportistas con furgoneta y mozos en fases de entrevista, ruta de prueba y alta.', ru: 'Канбан-доска найма: отбор кандидатов с собственными фургонами и грузчиков по стадиям до выхода на смену.' },
        file: 'src/pages/app/hiring.astro',
        code: `---
import { MovingHiringPage } from 'astro-component-kit/templates/moving';
---

<MovingHiringPage />`,
      },
      {
        id: 'settings', path: 'app/settings/',
        name: { en: 'Fleet & Rate Settings', es: 'Ajustes de Flota y Tarifas', ru: 'Настройки тарифов и автопарка' },
        description: { en: 'Base rate per m³ formula, stair carrying fees, commercial cargo insurance policy numbers, and vehicle registry.', es: 'Fórmula de tarifa por m³, suplementos por escaleras, póliza de seguro de mercancías y registro de vehículos.', ru: 'Базовый тариф за м³, надбавки за этажи без лифта, полис страхования грузов и реестр транспорта.' },
        file: 'src/pages/app/settings.astro',
        code: `---
import { MovingSettingsPage } from 'astro-component-kit/templates/moving';
---

<MovingSettingsPage />`,
      },
    ],
    newComponents: [
      'move-inventory-calculator', 'fleet-dispatch-timeline', 'hiring-pipeline-board', 'move-manifest-card',
      'moving-hero', 'moving-volume-estimator', 'moving-fleet-grid', 'moving-careers-banner', 'moving-pricing-tiers', 'moving-application-form',
    ],
    reusedComponents: [
      'app-sidebar', 'app-topbar', 'page-header', 'data-table', 'settings-section', 'switch-row', 'badge',
    ],
    storeConfigExample: `---
// src/pages/index.astro — pass the same data + routes across all moving pages
import { MovingHomePage, movingData, type MovingRoutes } from 'astro-component-kit/templates/moving';

const data = {
  ...movingData,
  brand: { ...movingData.brand, name: 'Muvr Express Madrid' },
};
---

<MovingHomePage />`,
  },
  {
    slug: 'food-delivery',
    name: {
      en: 'BiteFlow · Food Delivery & Kitchen OS',
      es: 'BiteFlow · Comida a domicilio & Kitchen OS',
      ru: 'BiteFlow · Доставка еды & Kitchen OS',
    },
    tagline: {
      en: 'Pop sticker storefront where dishes fly into the cart and the rider drives across an animated map, plus a kitchen OS with KDS, menu stock, orders and rider dispatch.',
      es: 'Tienda pop estilo sticker donde los platos vuelan a la cesta y el rider cruza un mapa animado, y un Kitchen OS con KDS, stock de carta, pedidos y despacho de riders.',
      ru: 'Яркая витрина в стиле стикеров: блюда летят в корзину, курьер едет по анимированной карте; плюс Kitchen OS с KDS, стоп-листом, заказами и диспетчером курьеров.',
    },
    description: {
      en: 'Complete template for a delivery kitchen or ghost kitchen, in a warm pop "sticker" style (cream paper, ink outlines, tomato and mustard, chunky Bricolage Grotesque). 11 page types: home with a spinning plate hero, best sellers and a scroll story; full menu with scroll-spy tabs and filters where dishes fly into the cart and a 3-step checkout; live tracking on an animated city map; a restaurant partner page with a savings calculator; plus crew sign-in with a PIN keypad and a kitchen OS: service dashboard, KDS with timers and bump, menu & stock (86) CMS, order book, rider dispatch and settings. Dish illustrations are included, no photos needed.',
      es: 'Plantilla completa para una cocina de reparto o dark kitchen, en estilo pop "sticker" cálido (papel crema, contornos de tinta, tomate y mostaza, tipografía Bricolage Grotesque). 11 tipos de página: home con plato giratorio, lo más pedido e historia con scroll; carta completa con pestañas que siguen el scroll y filtros, donde los platos vuelan a la cesta y el pedido se cierra en 3 pasos; seguimiento en directo sobre un mapa animado; página para restaurantes con calculadora de ahorro; y además acceso del equipo con teclado de PIN y un Kitchen OS: panel del servicio, KDS con cronómetros, carta y stock (86), pedidos, despacho de riders y ajustes. Incluye ilustraciones de los platos: no hacen falta fotos.',
      ru: 'Полный шаблон для кухни доставки или dark kitchen в тёплом стиле стикеров (кремовая бумага, контуры, томатный и горчичный, шрифт Bricolage Grotesque). 11 типов страниц: главная с вращающейся тарелкой, хитами и scroll-историей; меню с вкладками и фильтрами, где блюда летят в корзину, и оформление в 3 шага; отслеживание на анимированной карте; страница для ресторанов с калькулятором экономии; а также вход команды с PIN-клавиатурой и Kitchen OS: обзор смены, KDS с таймерами, меню и стоп-лист, заказы, диспетчер курьеров и настройки. Иллюстрации блюд включены.',
    },
    highlights: {
      en: [
        'Add to cart sends the dish flying into the bouncing cart button',
        'Live tracking: the route draws itself and the rider drives to the door',
        'Scroll-driven hero and a sticky scroll story, with a pause button',
        'KDS with urgency rings, allergy bands and View Transitions between lanes',
        'Own shell, tables and sign-in: no shared library components',
      ],
      es: [
        'Al añadir, el plato vuela a la cesta y el botón rebota',
        'Seguimiento en directo: la ruta se dibuja y el rider llega a tu puerta',
        'Hero con animación ligada al scroll e historia con escena fija, con botón de pausa',
        'KDS con anillos de urgencia, alergias resaltadas y View Transitions entre carriles',
        'Shell, tablas y acceso propios: sin componentes compartidos de la librería',
      ],
      ru: [
        'При добавлении блюдо летит в корзину, а кнопка подпрыгивает',
        'Живое отслеживание: маршрут рисуется, курьер едет к двери',
        'Hero с анимацией по прокрутке и scroll-история с кнопкой паузы',
        'KDS с кольцами срочности, аллергенами и View Transitions между колонками',
        'Свои оболочка, таблицы и вход: без общих компонентов библиотеки',
      ],
    },
    tags: ['food-delivery', 'restaurant', 'kitchen-os', 'kds', 'cart', 'tracking', 'scroll-driven', 'animation'],
    previewBase: '/preview/food-delivery/',
    importPath: 'astro-component-kit/templates/food-delivery',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Home', es: 'Inicio', ru: 'Главная' },
        description: { en: 'Plate hero with address finder, best sellers you can add to the cart, scroll story and partner band.', es: 'Hero con plato giratorio y buscador de dirección, los más pedidos con añadir a la cesta, historia con scroll y banda para restaurantes.', ru: 'Hero с вращающейся тарелкой и поиском адреса, хиты с добавлением в корзину, scroll-история и блок для ресторанов.' },
        file: 'src/pages/index.astro',
        code: `---
import { FoodHomePage } from 'astro-component-kit/templates/food-delivery';
---

<FoodHomePage />`,
      },
      {
        id: 'menu', path: 'carta/',
        name: { en: 'Menu & checkout', es: 'Carta y checkout', ru: 'Меню и оформление' },
        description: { en: 'Full menu with category scroll-spy, search and dietary filters; dishes fly into the cart and check out in 3 steps.', es: 'Carta completa con pestañas que siguen el scroll, búsqueda y filtros de dieta; los platos vuelan a la cesta y el pedido se cierra en 3 pasos.', ru: 'Полное меню с вкладками по прокрутке, поиском и фильтрами; блюда летят в корзину, оформление в 3 шага.' },
        file: 'src/pages/carta.astro',
        code: `---
import { FoodMenuPage } from 'astro-component-kit/templates/food-delivery';
---

<FoodMenuPage />`,
      },
      {
        id: 'tracking', path: 'pedido/',
        name: { en: 'Live tracking', es: 'Seguimiento en directo', ru: 'Отслеживание' },
        description: { en: 'Animated map with the rider driving to the door, ETA countdown, status steps, rider call, receipt and rating.', es: 'Mapa animado con el rider camino de tu puerta, cuenta atrás, pasos del pedido, llamada al rider, ticket y valoración.', ru: 'Анимированная карта с курьером, обратный отсчёт, этапы заказа, звонок курьеру, чек и оценка.' },
        file: 'src/pages/pedido.astro',
        code: `---
import { FoodTrackingPage } from 'astro-component-kit/templates/food-delivery';
---

<FoodTrackingPage />`,
      },
      {
        id: 'partner', path: 'restaurantes/',
        name: { en: 'For restaurants', es: 'Para restaurantes', ru: 'Для ресторанов' },
        description: { en: 'Perks, savings calculator vs aggregators, sign-up form and FAQ.', es: 'Ventajas, calculadora de ahorro frente a agregadores, formulario de alta y preguntas frecuentes.', ru: 'Преимущества, калькулятор экономии против агрегаторов, форма заявки и FAQ.' },
        file: 'src/pages/restaurantes.astro',
        code: `---
import { FoodPartnerPage } from 'astro-component-kit/templates/food-delivery';
---

<FoodPartnerPage action="/api/partners" />`,
      },
      {
        id: 'sign-in', path: 'acceso/',
        name: { en: 'Crew sign in', es: 'Acceso del equipo', ru: 'Вход для команды' },
        description: { en: 'Station cards and a 4-digit PIN keypad; each station lands on its own screen.', es: 'Tarjetas de partida y teclado de PIN de 4 cifras; cada partida entra en su pantalla.', ru: 'Карточки участков и клавиатура PIN; каждый участок попадает на свой экран.' },
        file: 'src/pages/acceso.astro',
        code: `---
import { FoodSignInPage } from 'astro-component-kit/templates/food-delivery';
---

<FoodSignInPage />`,
      },
      {
        id: 'dashboard', path: 'cocina/',
        name: { en: 'Service overview', es: 'Servicio', ru: 'Обзор смены' },
        description: { en: 'Count-up KPIs, orders per hour vs last week, station load, best sellers and a live feed.', es: 'KPIs animados, pedidos por hora frente a la semana pasada, carga por partida, lo más pedido y feed en directo.', ru: 'Анимированные KPI, заказы по часам против прошлой недели, загрузка участков, хиты и живая лента.' },
        file: 'src/pages/cocina/index.astro',
        code: `---
import { FoodDashboardPage } from 'astro-component-kit/templates/food-delivery';
---

<FoodDashboardPage />`,
      },
      {
        id: 'kds', path: 'cocina/kds/',
        name: { en: 'Kitchen display (KDS)', es: 'Pantalla de cocina (KDS)', ru: 'Кухонный экран (KDS)' },
        description: { en: 'Lanes with live timers, allergy bands, item tick-off, bump with undo and station filters.', es: 'Carriles con cronómetros, alergias resaltadas, marcar platos, avanzar comandas con deshacer y filtro por partida.', ru: 'Колонки с таймерами, аллергены, отметка блюд, перевод заказов с отменой и фильтр участков.' },
        file: 'src/pages/cocina/kds.astro',
        code: `---
import { FoodKdsPage } from 'astro-component-kit/templates/food-delivery';
---

<FoodKdsPage />`,
      },
      {
        id: 'menu-cms', path: 'cocina/carta/',
        name: { en: 'Menu & stock', es: 'Carta y stock', ru: 'Меню и стоп-лист' },
        description: { en: '86 switches, inline prices, filters and a save bar for every channel.', es: 'Interruptores de agotado (86), precios en línea, filtros y barra de guardado para todos los canales.', ru: 'Переключатели стоп-листа, цены прямо в карточке, фильтры и сохранение для всех каналов.' },
        file: 'src/pages/cocina/carta.astro',
        code: `---
import { FoodMenuCmsPage } from 'astro-component-kit/templates/food-delivery';
---

<FoodMenuCmsPage />`,
      },
      {
        id: 'orders', path: 'cocina/pedidos/',
        name: { en: 'Orders', es: 'Pedidos', ru: 'Заказы' },
        description: { en: 'Order book with search, status chips, sorting, status change and expandable tickets.', es: 'Libro de pedidos con búsqueda, chips de estado, orden, cambio de estado y ticket desplegable.', ru: 'Журнал заказов с поиском, фильтрами статусов, сортировкой и раскрывающимся чеком.' },
        file: 'src/pages/cocina/pedidos.astro',
        code: `---
import { FoodOrdersPage } from 'astro-component-kit/templates/food-delivery';
---

<FoodOrdersPage />`,
      },
      {
        id: 'riders', path: 'cocina/riders/',
        name: { en: 'Rider dispatch', es: 'Despacho de riders', ru: 'Диспетчер курьеров' },
        description: { en: 'Live fleet map, queue of orders without rider and assignment by distance.', es: 'Mapa de la flota en directo, cola de pedidos sin rider y asignación por cercanía.', ru: 'Карта флота, очередь заказов без курьера и назначение по расстоянию.' },
        file: 'src/pages/cocina/riders.astro',
        code: `---
import { FoodRidersPage } from 'astro-component-kit/templates/food-delivery';
---

<FoodRidersPage />`,
      },
      {
        id: 'settings', path: 'cocina/ajustes/',
        name: { en: 'Kitchen settings', es: 'Ajustes de cocina', ru: 'Настройки кухни' },
        description: { en: 'Delivery radius with map preview, fees, opening hours, ticket printer test and kitchen alarms.', es: 'Radio de reparto con vista en mapa, envío, horarios, prueba de impresora y avisos de cocina.', ru: 'Радиус доставки с картой, тарифы, часы работы, тест принтера и сигналы кухни.' },
        file: 'src/pages/cocina/ajustes.astro',
        code: `---
import { FoodSettingsPage } from 'astro-component-kit/templates/food-delivery';
---

<FoodSettingsPage />`,
      },
    ],
    newComponents: [
      'food-hero-plate', 'food-menu-board', 'food-scroll-story', 'food-partner-pitch', 'food-footer',
      'food-cart-drawer', 'food-order-map', 'food-kitchen-board', 'food-menu-manager', 'food-rider-dispatch', 'food-orders-table', 'food-service-pulse',
      'food-ops-nav', 'food-ops-topbar', 'food-ops-heading', 'food-crew-sign-in',
    ],
    reusedComponents: [],
    storeConfigExample: `---
// Pass your own data and routes to every page (e.g. from your POS)
import { FoodHomePage, foodDeliveryData, foodRoutes } from 'astro-component-kit/templates/food-delivery';

const data = {
  ...foodDeliveryData,
  brand: { ...foodDeliveryData.brand, name: 'Smash & Co', phone: '+34 900 000 000' },
  dishes: await fetch('https://api.example.com/menu').then((r) => r.json()),
};

const routes = { ...foodRoutes, menu: '/menu', tracking: '/track' };
---

<FoodHomePage data={data} routes={routes} />`,
  },
  {
    slug: 'construction',
    name: {
      en: 'Strukto · Construction, Developments & Site OS',
      es: 'Strukto · Constructora, Promociones & Site OS',
      ru: 'Strukto · Строительство, Девелопмент & Site OS',
    },
    tagline: {
      en: 'High-precision building, residential developments, commercial premises, turnkey workflow, and full site management backoffice.',
      es: 'Construcción de alta precisión, promociones residenciales, locales comerciales, metodología llave en mano y panel de control de jefatura de obra.',
      ru: 'Высокоточное строительство, жилые комплексы, коммерческая недвижимость, сдача под ключ и панель управления стройплощадками.',
    },
    description: {
      en: 'Complete turnkey template for construction contractors, real estate developers and engineering firms. 11 total pages: 5 public storefront pages (architectural hero with active sites ticker, filterable projects grid, flagship project blueprint dossier with interactive floorplan selector, cost calculator, and feasibility inquiry form) + 1 auth portal + 5 backoffice / Site OS views (portfolio KPI dashboard with certified budget execution, active building sites tracker, digital site journal / cuaderno de bitácora, promotions units CMS, and ISO/CAE safety settings).',
      es: 'Plantilla integral para empresas constructoras, promotoras inmobiliarias y estudios de arquitectura técnica. 11 páginas totales: 5 páginas públicas corporativas (hero con ticker de obras activas, catálogo filtrable de edificios y locales, dossier de promoción con selector interactivo de viviendas y planos acotados, calculadora técnica de presupuesto y formulario de licitación) + 1 portal de acceso + 5 vistas de backoffice / Site OS (cuadro de mando de certificaciones y producción, control técnico de obras, libro digital de bitácora y órdenes, CMS de viviendas y locales, y configuración técnica ISO/PRL).',
      ru: 'Готовый шаблон для строительных компаний, девелоперов и проектных бюро. 11 страниц: 5 публичных страниц (архитектурный hero с активными стройками, каталог проектов, карточка жилого комплекса с планами этажей, калькулятор сметы и форма заявки) + 1 страница входа + 5 разделов Site OS (дашборд сертификации и бюджета, контроль строек, электронный журнал работ, CMS квартир и помещений, стандарты ISO и безопасность).',
    },
    highlights: {
      en: [
        'Real-time site execution tracker with certified budget vs planned',
        'Interactive building unit & floorplan selector with m² and pricing',
        'Digital site journal (cuaderno de bitácora) with trade logs & weather',
        'Technical construction budget calculator conforming to CTE standards',
        'Executive Site OS backoffice with ISO 9001/14001 compliance rules',
      ],
      es: [
        'Control de ejecución de obra y certificaciones mensuales en tiempo real',
        'Selector interactivo de viviendas y planos acotados con reserva de fianza',
        'Libro digital de bitácora y órdenes con albaranes de laboratorio y operarios',
        'Calculadora de presupuestos técnicos con desglose de PEM, PEC y licencias',
        'Backoffice Site OS con normativa ISO, REA y coordinación de subcontratas',
      ],
      ru: [
        'Контроль хода строительства и сертификации бюджета в реальном времени',
        'Интерактивный выбор квартир и поэтажные планы с ценами за м²',
        'Электронный журнал производства работ с фиксацией погоды и актов',
        'Инженерный калькулятор сметы по нормативам CTE с расчётом сроков',
        'Панель Site OS с сертификацией ISO, REA и контролем подрядчиков',
      ],
    },
    tags: ['construction', 'real-estate', 'developments', 'site-os', 'contractor', 'passivhaus', 'breeam', 'architecture'],
    previewBase: '/preview/construction/',
    importPath: 'astro-component-kit/templates/construction',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Corporate Home', es: 'Portada Constructora', ru: 'Главная страница' },
        description: { en: 'Architectural hero with active sites ticker, featured developments grid, 5-stage turnkey timeline, and feasibility study form.', es: 'Hero arquitectónico con ticker de obras activas, catálogo de promociones, metodología en 5 fases y formulario de viabilidad.', ru: 'Главная с активными объектами, галереей проектов, этапами работ и формой консультации.' },
        file: 'src/pages/index.astro',
        code: `---
import { ConstructionHomePage } from 'astro-component-kit/templates/construction';
---

<ConstructionHomePage />`,
      },
      {
        id: 'projects', path: 'projects/',
        name: { en: 'Projects & Developments', es: 'Proyectos & Promociones', ru: 'Каталог проектов' },
        description: { en: 'Filterable portfolio of buildings, residential promotions, commercial hubs, and logistics parks.', es: 'Catálogo filtrable de edificios residenciales, locales comerciales y plataformas logísticas.', ru: 'Каталог жилых домов, коммерческих помещений и логистических парков.' },
        file: 'src/pages/projects/index.astro',
        code: `---
import { ConstructionProjectsPage } from 'astro-component-kit/templates/construction';
---

<ConstructionProjectsPage />`,
      },
      {
        id: 'project-detail', path: 'projects/caelum-chamberi/',
        name: { en: 'Project Blueprint & Units', es: 'Dossier de Promoción & Planos', ru: 'Паспорт проекта и квартиры' },
        description: { en: 'Flagship development dossier: real-time site progress %, interactive apartment & commercial unit selector, and vector floor plans.', es: 'Dossier técnico: progreso de obra en tiempo real, selector interactivo de viviendas y planos acotados.', ru: 'Карточка жилого комплекса: процент готовности, интерактивный выбор квартир и поэтажные планы.' },
        file: 'src/pages/projects/[slug].astro',
        code: `---
import { ConstructionProjectDetailPage, constructionProjects } from 'astro-component-kit/templates/construction';

export function getStaticPaths() {
  return constructionProjects.map((p) => ({ params: { slug: p.slug } }));
}

const { slug } = Astro.params;
---

<ConstructionProjectDetailPage slug={slug} />`,
      },
      {
        id: 'estimator', path: 'estimator/',
        name: { en: 'Budget & Cost Calculator', es: 'Calculadora de Presupuesto', ru: 'Калькулятор сметы' },
        description: { en: 'Interactive construction estimator: PEM, PEC, architect fees, licenses, and duration by surface m².', es: 'Simulador técnico: cálculo de PEM, PEC, honorarios facultativos, licencias y meses de obra según m².', ru: 'Калькулятор стоимости строительства: материалы, подрядчики, разрешения и сроки.' },
        file: 'src/pages/estimator.astro',
        code: `---
import { ConstructionEstimatorPage } from 'astro-component-kit/templates/construction';
---

<ConstructionEstimatorPage />`,
      },
      {
        id: 'contact', path: 'contact/',
        name: { en: 'Contact & Tenders', es: 'Contacto & Licitaciones', ru: 'Контакты и тендеры' },
        description: { en: 'Contractor headquarters address, direct telephone lines, tender submission info, and feasibility inquiry.', es: 'Sede central, líneas telefónicas de atención técnica, licitaciones de proyectos y formulario comercial.', ru: 'Центральный офис, телефоны инженерного отдела и подача документации для тендеров.' },
        file: 'src/pages/contact.astro',
        code: `---
import { ConstructionContactPage } from 'astro-component-kit/templates/construction';
---

<ConstructionContactPage />`,
      },
      {
        id: 'sign-in', path: 'sign-in/',
        name: { en: 'Staff & Site Sign In', es: 'Acceso a Jefatura de Obra', ru: 'Вход для специалистов' },
        description: { en: 'Technical authentication portal with 1-click test roles for Site Supervisor, Execution Architect, and Safety Officer.', es: 'Acceso técnico con perfiles demo de 1 clic para Jefe de Obra, Dirección Facultativa y Seguridad.', ru: 'Вход в Site OS с готовыми ролями: начальник участка, технадзор и специалист по безопасности.' },
        file: 'src/pages/sign-in.astro',
        code: `---
import { ConstructionSignInPage } from 'astro-component-kit/templates/construction';
---

<ConstructionSignInPage />`,
      },
      {
        id: 'dashboard', path: 'app/',
        name: { en: 'Site OS Dashboard', es: 'Cuadro de Mando Obra OS', ru: 'Главная Site OS' },
        description: { en: 'Executive site dashboard: total certified budget vs planned, active workers on site, zero-accident days counter, and trade breakdown.', es: 'Cuadro de mando: producción certificada acumulada, operarios en tajo, días sin accidentes y subcontratas.', ru: 'Панель руководителя: объём сертификации, план/факт расходов, рабочие на объектах и охрана труда.' },
        file: 'src/pages/app/index.astro',
        code: `---
import { ConstructionDashboardPage } from 'astro-component-kit/templates/construction';
---

<ConstructionDashboardPage />`,
      },
      {
        id: 'sites', path: 'app/sites/',
        name: { en: 'Active Building Sites', es: 'Obras en Ejecución', ru: 'Активные стройплощадки' },
        description: { en: 'Full technical monitoring of ongoing sites: milestones progress, structural stages, and certified financials.', es: 'Seguimiento técnico de obras activas: hitos de cimentación y estructura, porcentajes y certificaciones.', ru: 'Контроль объектов: этапы строительства, фундаменты, каркасы и финансовые акты.' },
        file: 'src/pages/app/sites.astro',
        code: `---
import { ConstructionSitesPage } from 'astro-component-kit/templates/construction';
---

<ConstructionSitesPage />`,
      },
      {
        id: 'daily-log', path: 'app/daily-log/',
        name: { en: 'Digital Site Logbook', es: 'Cuaderno de Bitácora Digital', ru: 'Электронный журнал работ' },
        description: { en: 'Regulatory site diary: weather conditions, workers per trade, concrete delivery tickets, and safety sign-off.', es: 'Libro de órdenes diario: meteorología, operarios por subcontrata, albaranes de laboratorio y firma técnica.', ru: 'Журнал производства работ: погода, персонал по подрядчикам, акты приёмки бетона и подпись прораба.' },
        file: 'src/pages/app/daily-log.astro',
        code: `---
import { ConstructionDailyLogPage } from 'astro-component-kit/templates/construction';
---

<ConstructionDailyLogPage />`,
      },
      {
        id: 'units-cms', path: 'app/units/',
        name: { en: 'Promotions Units CMS', es: 'CMS de Viviendas y Locales', ru: 'CMS квартир и помещений' },
        description: { en: 'Real estate inventory manager: apartment availability status, reserved units with deposits, price per m², and floorplan filters.', es: 'Control de inventario inmobiliario: pisos disponibles, reservados con arras, vendidos y precios por m².', ru: 'Управление недвижимостью: статус квартир, бронирования с задатком, стоимость за м².' },
        file: 'src/pages/app/units.astro',
        code: `---
import { ConstructionUnitsCmsPage } from 'astro-component-kit/templates/construction';
---

<ConstructionUnitsCmsPage />`,
      },
      {
        id: 'settings', path: 'app/settings/',
        name: { en: 'Contractor & ISO Settings', es: 'Ajustes Técnicos & ISO', ru: 'Параметры и стандарты ISO' },
        description: { en: 'Corporate details, REA construction registry, TRC insurance policy, ISO 9001/14001 certificates, and subcontractor rules.', es: 'Datos fiscales, número de registro REA, seguro todo riesgo, sellos ISO y requisitos de prevención laboral.', ru: 'Реквизиты компании, лицензии СРО, страхование рисков, сертификаты ISO и правила для субподрядчиков.' },
        file: 'src/pages/app/settings.astro',
        code: `---
import { ConstructionSettingsPage } from 'astro-component-kit/templates/construction';
---

<ConstructionSettingsPage />`,
      },
    ],
    newComponents: [
      'construction-blueprint-hero', 'construction-project-sheets', 'construction-build-sequence', 'construction-tender-form', 'construction-footer',
      'construction-cost-estimator', 'construction-iso-unit-picker', 'construction-gantt-board', 'construction-sites-board', 'construction-site-logbook',
      'construction-units-ledger', 'construction-os-sidebar', 'construction-os-topbar', 'construction-os-heading', 'construction-sign-in',
    ],
    reusedComponents: [],
    storeConfigExample: `---
// src/pages/index.astro — pass the same data + routes across all construction pages
import { ConstructionHomePage, constructionData, type ConstructionRoutes } from 'astro-component-kit/templates/construction';

const data = {
  ...constructionData,
  company: { ...constructionData.company, name: 'Strukto Constructora S.L.' },
};
---

<ConstructionHomePage />`,
  },
  {
    slug: 'real-estate',
    name: {
      en: 'Nido · Real Estate Agency & CRM',
      es: 'Nido · Inmobiliaria & CRM',
      ru: 'Nido · Агентство недвижимости & CRM',
    },
    tagline: {
      en: 'Property search, listings with filters and map, property pages with viewing booking and mortgage simulator, owner valuation and an agent CRM.',
      es: 'Buscador de pisos, listado con filtros y mapa, fichas con reserva de visitas y simulador de hipoteca, valoración para propietarios y CRM de agentes.',
      ru: 'Поиск жилья, каталог с фильтрами и картой, карточки объектов с записью на просмотр и ипотечным калькулятором, оценка для владельцев и CRM агентов.',
    },
    description: {
      en: 'Complete template for a neighbourhood real estate agency. 9 page types: home with buy/rent search, listings with live filters, favourites and zone map, a property page per listing (gallery, facts, energy rating, visit booking, mortgage simulator or rental terms, similar homes), a 3-step valuation for owners, contact and agents, plus agent sign-in and a CRM with overview, listings table and lead pipeline.',
      es: 'Plantilla completa para una inmobiliaria de barrio. 9 tipos de página: home con buscador de compra y alquiler, listado con filtros en vivo, favoritos y mapa por zonas, ficha por propiedad (galería, datos, certificado energético, reserva de visita, simulador de hipoteca o condiciones de alquiler y viviendas similares), valoración en 3 pasos para propietarios, contacto y agentes, y además acceso de agentes y un CRM con resumen, tabla de propiedades y pipeline de leads.',
      ru: 'Полный шаблон для районного агентства недвижимости. 9 типов страниц: главная с поиском покупки и аренды, каталог с живыми фильтрами, избранным и картой, страница каждого объекта (галерея, характеристики, энергокласс, запись на просмотр, ипотечный калькулятор или условия аренды, похожие объекты), оценка в 3 шага для владельцев, контакты и агенты, а также вход для агентов и CRM с обзором, таблицей объектов и воронкой лидов.',
    },
    highlights: {
      en: [
        'Hero search opens the listings already filtered, and filters stay in the URL',
        'Listings with sorting, favourites saved in the browser and price pins on a zone map',
        'Property page with gallery, viewing booking and live mortgage simulator',
        '3-step valuation that estimates a price range from each zone’s €/m²',
        'Agent CRM: KPIs, upcoming viewings, listings table and keyboard-friendly lead pipeline',
      ],
      es: [
        'El buscador del hero abre el listado filtrado y los filtros se guardan en la URL',
        'Listado con orden, favoritos guardados en el navegador y mapa por zonas con precios',
        'Ficha con galería, reserva de visitas y simulador de hipoteca en vivo',
        'Valoración en 3 pasos que estima una horquilla con el €/m² de cada zona',
        'CRM de agentes: KPIs, próximas visitas, tabla de propiedades y pipeline de leads usable con teclado',
      ],
      ru: [
        'Поиск на главной открывает отфильтрованный каталог, фильтры сохраняются в URL',
        'Каталог с сортировкой, избранным в браузере и ценами на карте районов',
        'Страница объекта с галереей, записью на просмотр и ипотечным калькулятором',
        'Оценка в 3 шага с диапазоном цены по €/м² района',
        'CRM агентов: KPI, ближайшие просмотры, таблица объектов и воронка лидов с управлением с клавиатуры',
      ],
    },
    tags: ['real-estate', 'property', 'listings', 'mortgage', 'valuation', 'crm', 'agency', 'booking'],
    previewBase: '/preview/real-estate/',
    importPath: 'astro-component-kit/templates/real-estate',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Home', es: 'Inicio', ru: 'Главная' },
        description: { en: 'Buy/rent search hero, latest listings, neighbourhood price guide, valuation CTA and agents.', es: 'Hero con buscador de compra y alquiler, últimas propiedades, guía de precios por barrio, llamada a valorar y agentes.', ru: 'Поиск покупки и аренды, новые объекты, цены по районам, призыв к оценке и агенты.' },
        file: 'src/pages/index.astro',
        code: `---
import { EstateHomePage } from 'astro-component-kit/templates/real-estate';
---

<EstateHomePage />`,
      },
      {
        id: 'listings', path: 'propiedades/',
        name: { en: 'Listings', es: 'Propiedades', ru: 'Каталог' },
        description: { en: 'Live filters by operation, zone, type, rooms and price, sorting, favourites and a zone map.', es: 'Filtros en vivo por operación, zona, tipo, habitaciones y precio, orden, favoritos y mapa por zonas.', ru: 'Живые фильтры по сделке, району, типу, комнатам и цене, сортировка, избранное и карта.' },
        file: 'src/pages/propiedades/index.astro',
        code: `---
import { EstateListingsPage } from 'astro-component-kit/templates/real-estate';
---

<EstateListingsPage />`,
      },
      {
        id: 'property', path: 'propiedades/atico-terraza-ruzafa/',
        name: { en: 'Property page', es: 'Ficha de propiedad', ru: 'Страница объекта' },
        description: { en: 'Gallery, key facts, description, energy rating, viewing booking, mortgage simulator or rental terms, and similar homes.', es: 'Galería, datos clave, descripción, certificado energético, reserva de visita, simulador de hipoteca o condiciones de alquiler y similares.', ru: 'Галерея, характеристики, описание, энергокласс, запись на просмотр, ипотека или условия аренды и похожие объекты.' },
        file: 'src/pages/propiedades/[slug].astro',
        code: `---
import { EstatePropertyPage, estateProperties } from 'astro-component-kit/templates/real-estate';

export function getStaticPaths() {
  return estateProperties.map((p) => ({ params: { slug: p.slug } }));
}

const { slug } = Astro.params;
---

<EstatePropertyPage slug={slug} />`,
      },
      {
        id: 'valuation', path: 'valoracion/',
        name: { en: 'Home valuation', es: 'Valoración', ru: 'Оценка жилья' },
        description: { en: '3-step valuation wizard for owners, how selling works and prices per neighbourhood.', es: 'Asistente de valoración en 3 pasos, cómo vendemos y precios por barrio.', ru: 'Мастер оценки в 3 шага, как проходит продажа и цены по районам.' },
        file: 'src/pages/valoracion.astro',
        code: `---
import { EstateValuationPage } from 'astro-component-kit/templates/real-estate';
---

<EstateValuationPage action="/api/valuation" />`,
      },
      {
        id: 'contact', path: 'contacto/',
        name: { en: 'Contact & agents', es: 'Contacto y agentes', ru: 'Контакты и агенты' },
        description: { en: 'Office, hours, phone and email, contact form and the agent directory.', es: 'Oficina, horario, teléfono y email, formulario de contacto y directorio de agentes.', ru: 'Офис, часы работы, телефон и email, форма связи и команда агентов.' },
        file: 'src/pages/contacto.astro',
        code: `---
import { EstateContactPage } from 'astro-component-kit/templates/real-estate';
---

<EstateContactPage action="/api/contact" />`,
      },
      {
        id: 'sign-in', path: 'acceso/',
        name: { en: 'Agent sign in', es: 'Acceso agentes', ru: 'Вход для агентов' },
        description: { en: 'Split sign-in for the agent CRM with a testimonial and agency figures.', es: 'Acceso al CRM de agentes con testimonio y cifras de la agencia.', ru: 'Вход в CRM агентов с отзывом и показателями агентства.' },
        file: 'src/pages/acceso.astro',
        code: `---
import { EstateSignInPage } from 'astro-component-kit/templates/real-estate';
---

<EstateSignInPage />`,
      },
      {
        id: 'dashboard', path: 'app/',
        name: { en: 'CRM overview', es: 'Resumen del CRM', ru: 'Обзор CRM' },
        description: { en: 'KPIs, upcoming viewings, most viewed listings and a compact lead pipeline.', es: 'KPIs, próximas visitas, propiedades más vistas y pipeline compacto.', ru: 'KPI, ближайшие просмотры, популярные объекты и компактная воронка.' },
        file: 'src/pages/app/index.astro',
        code: `---
import { EstateDashboardPage } from 'astro-component-kit/templates/real-estate';
---

<EstateDashboardPage />`,
      },
      {
        id: 'listings-cms', path: 'app/propiedades/',
        name: { en: 'Listings manager', es: 'Gestión de propiedades', ru: 'Управление объектами' },
        description: { en: 'Inventory summary and a searchable, sortable table with status filters, views and leads.', es: 'Resumen de cartera y tabla con búsqueda, orden, filtros de estado, visitas y leads.', ru: 'Сводка портфеля и таблица с поиском, сортировкой, статусами, просмотрами и лидами.' },
        file: 'src/pages/app/propiedades.astro',
        code: `---
import { EstateListingsCmsPage } from 'astro-component-kit/templates/real-estate';
---

<EstateListingsCmsPage />`,
      },
      {
        id: 'leads', path: 'app/leads/',
        name: { en: 'Lead pipeline', es: 'Pipeline de leads', ru: 'Воронка лидов' },
        description: { en: 'Every buyer and tenant lead by stage, with move buttons, call links and notes.', es: 'Todos los leads de compra y alquiler por etapa, con botones para moverlos, llamada y notas.', ru: 'Все лиды покупателей и арендаторов по этапам с кнопками перемещения, звонком и заметками.' },
        file: 'src/pages/app/leads.astro',
        code: `---
import { EstateLeadsPage } from 'astro-component-kit/templates/real-estate';
---

<EstateLeadsPage />`,
      },
    ],
    newComponents: [
      'estate-hero', 'estate-listings-grid', 'estate-neighborhoods', 'estate-property-gallery', 'estate-agents-grid', 'estate-valuation-cta',
      'estate-mortgage-calculator', 'estate-valuation-wizard', 'estate-visit-scheduler', 'estate-leads-pipeline',
      'estate-footer', 'estate-crm-sidebar', 'estate-crm-topbar', 'estate-crm-heading', 'estate-listings-table', 'estate-agent-sign-in',
    ],
    reusedComponents: [],
    storeConfigExample: `---
// Pass your own data and routes to every page (e.g. from a CMS or an API)
import { EstateHomePage, estateData, estateRoutes } from 'astro-component-kit/templates/real-estate';

const data = {
  ...estateData,
  brand: { ...estateData.brand, name: 'Casa Norte', phone: '+34 900 000 000' },
  properties: await fetch('https://api.example.com/listings').then((r) => r.json()),
};

const routes = { ...estateRoutes, listings: '/homes', property: '/homes/sample' };
---

<EstateHomePage data={data} routes={routes} />`,
  },
  {
    slug: 'gym',
    name: {
      en: 'Forja · Gym & Member Area',
      es: 'Forja · Gimnasio & Área de socios',
      ru: 'Forja · Спортзал & Кабинет участника',
    },
    tagline: {
      en: 'Gym site with weekly timetable, plans and free trial, plus a member area with class booking and progress, and a staff view with members and occupancy.',
      es: 'Web de gimnasio con horario semanal, tarifas y prueba gratis, más un área de socios con reservas y progreso, y una vista de staff con socios y aforo.',
      ru: 'Сайт спортзала с недельным расписанием, абонементами и пробным периодом, кабинет участника с записью и прогрессом и панель персонала с участниками и заполненностью.',
    },
    description: {
      en: 'Complete template for a gym, box or fitness studio. 9 page types: home with today\'s classes, disciplines, live occupancy, plans, coaches and trial form; weekly timetable with day tabs and filters; plans with monthly/yearly billing and FAQ; coaches; free-trial pass; plus member sign-in, a progress dashboard (goal, streak, sessions, records, weight), class booking with waitlist, and a staff view with membership KPIs, occupancy and a members table.',
      es: 'Plantilla completa para un gimnasio, box o estudio. 9 tipos de página: home con las clases de hoy, disciplinas, aforo en directo, tarifas, entrenadores y formulario de prueba; horario semanal con pestañas y filtros; tarifas con pago mensual o anual y preguntas frecuentes; entrenadores; pase de prueba gratis; y además acceso de socios, panel de progreso (objetivo, racha, sesiones, marcas y peso), reserva de clases con lista de espera y vista de staff con KPIs, aforo y tabla de socios.',
      ru: 'Полный шаблон для спортзала, бокса или фитнес-студии. 9 типов страниц: главная с занятиями на сегодня, направлениями, заполненностью, абонементами, тренерами и формой пробы; недельное расписание с вкладками и фильтрами; абонементы с оплатой помесячно или за год и FAQ; тренеры; пропуск на пробный период; а также вход для участников, панель прогресса (цель, серия, тренировки, рекорды, вес), запись на занятия с листом ожидания и панель персонала с KPI, заполненностью и таблицей участников.',
    },
    highlights: {
      en: [
        'Timetable with accessible day tabs that opens on today and filters by discipline',
        'Plans with a monthly/yearly switch that recalculates prices and savings',
        'Class booking with live spots, waitlist and booking limit',
        'Member progress with goal ring, streak, records and weight trend in plain SVG',
        'Live occupancy with usual crowd per hour so members pick quiet times',
      ],
      es: [
        'Horario con pestañas accesibles que se abre en el día de hoy y filtra por disciplina',
        'Tarifas con interruptor mensual o anual que recalcula precios y ahorro',
        'Reserva de clases con plazas en vivo, lista de espera y límite de reservas',
        'Progreso del socio con objetivo, racha, marcas y peso en SVG puro',
        'Aforo en directo y afluencia habitual por horas para elegir momentos tranquilos',
      ],
      ru: [
        'Расписание с доступными вкладками, открывается на сегодня и фильтрует по направлениям',
        'Абонементы с переключателем помесячно или за год и пересчётом экономии',
        'Запись на занятия с местами в реальном времени, листом ожидания и лимитом',
        'Прогресс участника: цель, серия, рекорды и вес на чистом SVG',
        'Заполненность клуба и обычная посещаемость по часам',
      ],
    },
    tags: ['gym', 'fitness', 'schedule', 'booking', 'membership', 'pricing', 'dashboard', 'classes'],
    previewBase: '/preview/gym/',
    importPath: 'astro-component-kit/templates/gym',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Home', es: 'Inicio', ru: 'Главная' },
        description: { en: 'Hero with today\'s classes, disciplines, live occupancy, plans, coaches and trial form.', es: 'Hero con las clases de hoy, disciplinas, aforo en directo, tarifas, entrenadores y prueba gratis.', ru: 'Главный экран с занятиями на сегодня, направления, заполненность, абонементы, тренеры и проба.' },
        file: 'src/pages/index.astro',
        code: `---
import { GymHomePage } from 'astro-component-kit/templates/gym';
---

<GymHomePage />`,
      },
      {
        id: 'classes', path: 'clases/',
        name: { en: 'Timetable', es: 'Clases y horario', ru: 'Расписание' },
        description: { en: 'Weekly timetable with day tabs, discipline filters and booking links, plus what each class is.', es: 'Horario semanal con pestañas por día, filtros por disciplina y enlaces para reservar, y qué es cada clase.', ru: 'Недельное расписание с вкладками, фильтрами и ссылками на запись, плюс описание занятий.' },
        file: 'src/pages/clases.astro',
        code: `---
import { GymClassesPage } from 'astro-component-kit/templates/gym';
---

<GymClassesPage />`,
      },
      {
        id: 'plans', path: 'tarifas/',
        name: { en: 'Plans', es: 'Tarifas', ru: 'Абонементы' },
        description: { en: 'Membership plans with monthly/yearly billing and membership FAQ.', es: 'Tarifas con pago mensual o anual y preguntas frecuentes.', ru: 'Абонементы с оплатой помесячно или за год и частые вопросы.' },
        file: 'src/pages/tarifas.astro',
        code: `---
import { GymPlansPage } from 'astro-component-kit/templates/gym';
---

<GymPlansPage />`,
      },
      {
        id: 'trainers', path: 'entrenadores/',
        name: { en: 'Coaches', es: 'Entrenadores', ru: 'Тренеры' },
        description: { en: 'Coaching team with certifications, years and classes.', es: 'Equipo de entrenadores con titulaciones, años y clases.', ru: 'Команда тренеров с сертификатами, стажем и занятиями.' },
        file: 'src/pages/entrenadores.astro',
        code: `---
import { GymTrainersPage } from 'astro-component-kit/templates/gym';
---

<GymTrainersPage />`,
      },
      {
        id: 'trial', path: 'prueba-gratis/',
        name: { en: 'Free trial', es: 'Prueba gratis', ru: 'Пробный период' },
        description: { en: 'Free-trial sign-up that returns a 7-day pass with an access code; club address and hours.', es: 'Alta de prueba que devuelve un pase de 7 días con código; dirección y horario del club.', ru: 'Запись на пробу с пропуском на 7 дней и кодом; адрес и часы клуба.' },
        file: 'src/pages/prueba-gratis.astro',
        code: `---
import { GymTrialPage } from 'astro-component-kit/templates/gym';
---

<GymTrialPage action="/api/trial" />`,
      },
      {
        id: 'sign-in', path: 'acceso/',
        name: { en: 'Member sign in', es: 'Acceso socios', ru: 'Вход для участников' },
        description: { en: 'Split sign-in for members and staff with a testimonial and club figures.', es: 'Acceso para socios y staff con testimonio y cifras del club.', ru: 'Вход для участников и персонала с отзывом и цифрами клуба.' },
        file: 'src/pages/acceso.astro',
        code: `---
import { GymSignInPage } from 'astro-component-kit/templates/gym';
---

<GymSignInPage />`,
      },
      {
        id: 'dashboard', path: 'socios/',
        name: { en: 'Member progress', es: 'Mi progreso', ru: 'Мой прогресс' },
        description: { en: 'Goal, streak, weekly sessions, records, weight, upcoming classes and occupancy.', es: 'Objetivo, racha, sesiones por semana, marcas, peso, próximas clases y aforo.', ru: 'Цель, серия, тренировки, рекорды, вес, ближайшие занятия и заполненность.' },
        file: 'src/pages/socios/index.astro',
        code: `---
import { GymDashboardPage } from 'astro-component-kit/templates/gym';
---

<GymDashboardPage />`,
      },
      {
        id: 'booking', path: 'socios/reservar/',
        name: { en: 'Class booking', es: 'Reservar clase', ru: 'Запись на занятие' },
        description: { en: 'Pick a day, book, cancel or join the waitlist; my bookings update live.', es: 'Elige día, reserva, cancela o apúntate a la lista de espera; mis reservas se actualizan al momento.', ru: 'Выбор дня, запись, отмена или лист ожидания; список записей обновляется сразу.' },
        file: 'src/pages/socios/reservar.astro',
        code: `---
import { GymBookingPage } from 'astro-component-kit/templates/gym';
---

<GymBookingPage />`,
      },
      {
        id: 'members', path: 'socios/staff/',
        name: { en: 'Staff: members & occupancy', es: 'Staff: socios y aforo', ru: 'Персонал: участники и заполненность' },
        description: { en: 'Membership KPIs, live occupancy and a searchable members table.', es: 'KPIs de cuotas, aforo en directo y tabla de socios con búsqueda.', ru: 'KPI абонементов, заполненность и таблица участников с поиском.' },
        file: 'src/pages/socios/staff.astro',
        code: `---
import { GymMembersPage } from 'astro-component-kit/templates/gym';
---

<GymMembersPage />`,
      },
    ],
    newComponents: [
      'gym-hero', 'gym-disciplines', 'gym-schedule', 'gym-membership-plans', 'gym-trainers-grid', 'gym-trial-form',
      'gym-class-booking', 'gym-progress-tracker', 'gym-occupancy-meter',
      'gym-footer', 'gym-area-nav', 'gym-area-topbar', 'gym-area-heading', 'gym-members-table', 'gym-sign-in',
    ],
    reusedComponents: [],
    storeConfigExample: `---
// Pass your own data and routes to every page (e.g. from your booking system)
import { GymHomePage, gymData, gymRoutes } from 'astro-component-kit/templates/gym';

const data = {
  ...gymData,
  brand: { ...gymData.brand, name: 'Iron Hall', phone: '+34 900 000 000' },
  classes: await fetch('https://api.example.com/classes').then((r) => r.json()),
};

const routes = { ...gymRoutes, classes: '/timetable', trial: '/free-trial' };
---

<GymHomePage data={data} routes={routes} />`,
  },
  {
    slug: 'academy',
    name: { en: 'Lumen · Online Academy & Studio', es: 'Lumen · Academia online & Estudio', ru: 'Lumen · Онлайн-академия & Студия' },
    tagline: { en: 'Online course platform with a filterable catalog, course pages, plans and a teaching application, plus a learner area with a lesson player and quizzes, and an instructor studio with analytics.', es: 'Plataforma de cursos online con catálogo filtrable, fichas de curso, planes y solicitud de instructores, más un aula con reproductor de clases y tests, y un estudio para instructores con analítica.', ru: 'Платформа онлайн-курсов с каталогом и фильтрами, страницами курсов, тарифами и заявкой преподавателя, плюс кабинет ученика с плеером уроков и тестами и студия преподавателя с аналитикой.' },
    description: { en: 'Complete template for an online academy, bootcamp or course marketplace. 9 page types: home with search, learning paths, featured courses, instructors, reviews and plans; filterable catalog; course page with enrolment card and syllabus accordion; plans with monthly/yearly billing and FAQ; instructor application; plus sign-in, a learner dashboard (weekly goal, streak, courses in progress), a lesson player with outline, notes and a quiz, and an instructor studio with KPIs, a 12-month chart and a course manager.', es: 'Plantilla completa para una academia online, bootcamp o marketplace de cursos. 9 tipos de página: home con buscador, rutas de aprendizaje, cursos destacados, instructores, opiniones y planes; catálogo filtrable; ficha de curso con tarjeta de matrícula y temario desplegable; planes con pago mensual o anual y preguntas frecuentes; solicitud de instructores; y además acceso, panel del alumno (meta semanal, racha, cursos en curso), reproductor de clases con temario, apuntes y test, y estudio del instructor con KPIs, gráfico de 12 meses y gestor de cursos.', ru: 'Полный шаблон для онлайн-академии, буткемпа или маркетплейса курсов. 9 типов страниц: главная с поиском, направлениями, популярными курсами, преподавателями, отзывами и тарифами; каталог с фильтрами; страница курса с карточкой записи и программой-аккордеоном; тарифы с оплатой помесячно или за год и FAQ; заявка преподавателя; а также вход, панель ученика (недельная цель, серия, курсы в процессе), плеер уроков с программой, заметками и тестом и студия преподавателя с KPI, графиком за 12 месяцев и менеджером курсов.' },
    highlights: {
      en: [
        'Catalog that filters by search, category, level and sorting, and opens pre-filtered from the hero and category cards',
        'Course page with a sticky enrolment card, discount and a syllabus accordion with free previews',
        'Lesson player with scrubber, speed, per-lesson completion, progress and notes saved in the browser',
        'Learner dashboard with weekly-goal ring, streak week and per-course progress in plain SVG',
        'Instructor studio with KPIs, a metric-switch bar chart (with a data table) and a sortable course manager',
      ],
      es: [
        'Catálogo que filtra por búsqueda, categoría, nivel y orden, y se abre ya filtrado desde el hero y las rutas',
        'Ficha de curso con tarjeta de matrícula fija, descuento y temario desplegable con clases de muestra',
        'Reproductor con barra de posición, velocidad, clases completadas, progreso y apuntes guardados en el navegador',
        'Panel del alumno con anillo de meta semanal, racha de la semana y progreso por curso en SVG puro',
        'Estudio del instructor con KPIs, gráfico con cambio de métrica (y tabla de datos) y gestor de cursos ordenable',
      ],
      ru: [
        'Каталог с поиском, категориями, уровнем и сортировкой, открывается уже отфильтрованным из героя и карточек направлений',
        'Страница курса с закреплённой карточкой записи, скидкой и программой-аккордеоном с бесплатными уроками',
        'Плеер с перемоткой, скоростью, отметками о завершении, прогрессом и заметками в браузере',
        'Панель ученика с кольцом недельной цели, неделей серии и прогрессом по курсам на чистом SVG',
        'Студия преподавателя с KPI, графиком с переключением метрики (и таблицей данных) и сортируемым менеджером курсов',
      ],
    },
    tags: ['education', 'courses', 'academy', 'lms', 'e-learning', 'dashboard', 'pricing', 'quiz'],
    previewBase: '/preview/academy/',
    importPath: 'astro-component-kit/templates/academy',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Home', es: 'Inicio', ru: 'Главная' },
        description: { en: 'Hero with course search, learning paths, featured courses, instructors, reviews and plans.', es: 'Hero con buscador de cursos, rutas de aprendizaje, cursos destacados, instructores, opiniones y planes.', ru: 'Главный экран с поиском курсов, направлениями, популярными курсами, преподавателями, отзывами и тарифами.' },
        file: 'src/pages/index.astro',
        code: `---
import { AcademyHomePage } from 'astro-component-kit/templates/academy';
---

<AcademyHomePage />`,
      },
      {
        id: 'courses', path: 'cursos/',
        name: { en: 'Catalog', es: 'Catálogo', ru: 'Каталог' },
        description: { en: 'Filterable catalog with search, category chips, level and sorting; reads ?q= and ?cat=.', es: 'Catálogo filtrable con buscador, categorías, nivel y orden; lee ?q= y ?cat=.', ru: 'Каталог с поиском, категориями, уровнем и сортировкой; читает ?q= и ?cat=.' },
        file: 'src/pages/cursos/index.astro',
        code: `---
import { AcademyCoursesPage } from 'astro-component-kit/templates/academy';
---

<AcademyCoursesPage />`,
      },
      {
        id: 'course', path: 'cursos/diseno-de-interfaces-desde-cero/',
        name: { en: 'Course page', es: 'Ficha de curso', ru: 'Страница курса' },
        description: { en: 'Header with enrolment card, syllabus accordion, instructor, reviews and related courses.', es: 'Cabecera con tarjeta de matrícula, temario desplegable, instructor, opiniones y cursos relacionados.', ru: 'Шапка с карточкой записи, программа-аккордеон, преподаватель, отзывы и похожие курсы.' },
        file: 'src/pages/cursos/[slug].astro',
        code: `---
import { AcademyCoursePage } from 'astro-component-kit/templates/academy';
export function getStaticPaths() {
  return [{ params: { slug: 'diseno-de-interfaces-desde-cero' } }]; // one per course slug
}
---

<AcademyCoursePage slug={Astro.params.slug} />`,
      },
      {
        id: 'pricing', path: 'precios/',
        name: { en: 'Plans', es: 'Planes', ru: 'Тарифы' },
        description: { en: 'Subscription plans with monthly/yearly billing and billing FAQ.', es: 'Planes de suscripción con pago mensual o anual y preguntas frecuentes.', ru: 'Тарифы подписки с оплатой помесячно или за год и частые вопросы.' },
        file: 'src/pages/precios.astro',
        code: `---
import { AcademyPricingPage } from 'astro-component-kit/templates/academy';
---

<AcademyPricingPage />`,
      },
      {
        id: 'teach', path: 'ensena/',
        name: { en: 'Teach', es: 'Enseña', ru: 'Преподавайте' },
        description: { en: 'Instructor application form and the current teaching team.', es: 'Formulario de solicitud para instructores y equipo docente actual.', ru: 'Форма заявки для преподавателей и текущая команда.' },
        file: 'src/pages/ensena.astro',
        code: `---
import { AcademyTeachPage } from 'astro-component-kit/templates/academy';
---

<AcademyTeachPage action="/api/teach" />`,
      },
      {
        id: 'sign-in', path: 'acceso/',
        name: { en: 'Sign in', es: 'Acceso', ru: 'Вход' },
        description: { en: 'Split sign-in for learners and instructors with a testimonial and figures.', es: 'Acceso para alumnos e instructores con testimonio y cifras.', ru: 'Вход для учеников и преподавателей с отзывом и цифрами.' },
        file: 'src/pages/acceso.astro',
        code: `---
import { AcademySignInPage } from 'astro-component-kit/templates/academy';
---

<AcademySignInPage />`,
      },
      {
        id: 'dashboard', path: 'aula/',
        name: { en: 'My learning', es: 'Mi aprendizaje', ru: 'Моё обучение' },
        description: { en: 'Weekly goal, study streak and courses in progress.', es: 'Meta semanal, racha de estudio y cursos en curso.', ru: 'Недельная цель, серия занятий и курсы в процессе.' },
        file: 'src/pages/aula/index.astro',
        code: `---
import { AcademyDashboardPage } from 'astro-component-kit/templates/academy';
---

<AcademyDashboardPage />`,
      },
      {
        id: 'player', path: 'aula/clase/',
        name: { en: 'Course player', es: 'Reproductor de clase', ru: 'Плеер урока' },
        description: { en: 'Lesson player with outline, progress, notes saved per lesson and a quiz.', es: 'Reproductor con temario, progreso, apuntes por clase y test.', ru: 'Плеер урока с программой, прогрессом, заметками к каждому уроку и тестом.' },
        file: 'src/pages/aula/clase.astro',
        code: `---
import { AcademyPlayerPage } from 'astro-component-kit/templates/academy';
---

<AcademyPlayerPage />`,
      },
      {
        id: 'studio', path: 'aula/estudio/',
        name: { en: 'Instructor studio', es: 'Estudio del instructor', ru: 'Студия преподавателя' },
        description: { en: 'Revenue and enrolment KPIs, 12-month chart and a course manager table.', es: 'KPIs de ingresos y matrículas, gráfico de 12 meses y tabla de cursos.', ru: 'KPI выручки и записей, график за 12 месяцев и таблица курсов.' },
        file: 'src/pages/aula/estudio.astro',
        code: `---
import { AcademyStudioPage } from 'astro-component-kit/templates/academy';
---

<AcademyStudioPage />`,
      },
    ],
    newComponents: [
      'academy-hero', 'academy-tracks', 'academy-course-grid', 'academy-course-hero', 'academy-curriculum', 'academy-pricing-plans',
      'academy-instructors', 'academy-reviews', 'academy-teach-form', 'academy-footer',
      'academy-lesson-player', 'academy-progress-board', 'academy-quiz', 'academy-studio-stats', 'academy-courses-table',
      'academy-area-nav', 'academy-area-topbar', 'academy-area-heading', 'academy-sign-in',
    ],
    reusedComponents: [],
    storeConfigExample: `---
// Pass your own data and routes to every page (e.g. from your LMS)
import { AcademyHomePage, academyData, academyRoutes } from 'astro-component-kit/templates/academy';

const data = {
  ...academyData,
  brand: { ...academyData.brand, name: 'Aula Norte', phone: '+34 900 000 000' },
  courses: await fetch('https://api.example.com/courses').then((r) => r.json()),
};

const routes = { ...academyRoutes, courses: '/catalog', pricing: '/plans' };
---

<AcademyHomePage data={data} routes={routes} />`,
  },
  {
    slug: 'fintech',
    name: { en: 'Cobre · Neobank & Account Area', es: 'Cobre · Neobanco & Área de cliente', ru: 'Cobre · Необанк & Кабинет клиента' },
    tagline: { en: 'Neobank for freelancers and small businesses with plans, a card picker, savings calculator and account opening, plus an account area with balances, cash flow, movements, cards and transfers.', es: 'Neobanco para autónomos y pymes con planes, selector de tarjetas, calculadora de ahorro y apertura de cuenta, más un área de cliente con saldos, flujo de caja, movimientos, tarjetas y transferencias.', ru: 'Необанк для самозанятых и малого бизнеса с тарифами, выбором карты, калькулятором накоплений и открытием счёта, плюс кабинет клиента с балансами, денежным потоком, операциями, картами и переводами.' },
    description: { en: 'Complete template for a neobank, fintech or payments product. 9 page types: home with a product mock, benefits, card picker, savings calculator, fee comparison, security and FAQ; plans with monthly/yearly billing; security and regulation; a three-step account-opening wizard; plus sign-in, a dashboard (balances, income vs. expenses, spending donut, latest movements), a movements table with filters and CSV export, card management with freeze and limits, and a two-step transfer form with IBAN validation.', es: 'Plantilla completa para un neobanco, fintech o producto de pagos. 9 tipos de página: home con mock del producto, ventajas, selector de tarjetas, calculadora de ahorro, comparativa de comisiones, seguridad y preguntas frecuentes; precios con pago mensual o anual; seguridad y regulación; asistente de apertura de cuenta en tres pasos; y además acceso, panel (saldos, ingresos y gastos, anillo de gasto, últimos movimientos), tabla de movimientos con filtros y exportación CSV, gestión de tarjetas con congelado y límites y transferencia en dos pasos con validación de IBAN.', ru: 'Полный шаблон для необанка, финтеха или платёжного продукта. 9 типов страниц: главная с макетом продукта, преимуществами, выбором карты, калькулятором накоплений, сравнением комиссий, безопасностью и FAQ; тарифы с оплатой помесячно или за год; безопасность и регулирование; мастер открытия счёта из трёх шагов; а также вход, панель (балансы, доходы и расходы, кольцо расходов, последние операции), таблица операций с фильтрами и экспортом CSV, управление картами с заморозкой и лимитами и перевод в два шага с проверкой IBAN.' },
    highlights: {
      en: [
        'Savings simulator with live compound interest and a growth bar',
        'Card picker that swaps the card art, price and perks',
        'Movements with search, filters, sorting and CSV export of the filtered rows',
        'Card manager with freeze switch, reveal number and a live spend meter',
        'Transfer form with mod-97 IBAN validation and balance check',
      ],
      es: [
        'Simulador de ahorro con interés compuesto en vivo y barra de crecimiento',
        'Selector de tarjetas que cambia ilustración, precio y ventajas',
        'Movimientos con búsqueda, filtros, orden y exportación CSV de lo filtrado',
        'Gestor de tarjetas con interruptor de congelado, mostrar número y medidor de gasto en vivo',
        'Transferencia con validación IBAN (mod 97) y control de saldo',
      ],
      ru: [
        'Симулятор накоплений со сложным процентом в реальном времени и полосой роста',
        'Выбор карты меняет изображение, цену и преимущества',
        'Операции с поиском, фильтрами, сортировкой и экспортом отфильтрованного в CSV',
        'Менеджер карт с заморозкой, показом номера и живым индикатором расходов',
        'Форма перевода с проверкой IBAN (mod 97) и контролем баланса',
      ],
    },
    tags: ['fintech', 'banking', 'neobank', 'payments', 'dashboard', 'cards', 'transfers', 'pricing'],
    previewBase: '/preview/fintech/',
    importPath: 'astro-component-kit/templates/fintech',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Home', es: 'Inicio', ru: 'Главная' },
        description: { en: 'Hero with product mock, benefits, card picker, savings calculator, fee comparison, security and FAQ.', es: 'Hero con mock del producto, ventajas, selector de tarjetas, calculadora de ahorro, comparativa de comisiones, seguridad y preguntas frecuentes.', ru: 'Главный экран с макетом продукта, преимуществами, выбором карты, калькулятором накоплений, сравнением комиссий, безопасностью и FAQ.' },
        file: 'src/pages/index.astro',
        code: `---
import { BankHomePage } from 'astro-component-kit/templates/fintech';
---

<BankHomePage />`,
      },
      {
        id: 'pricing', path: 'precios/',
        name: { en: 'Pricing', es: 'Precios', ru: 'Тарифы' },
        description: { en: 'Plans with monthly/yearly billing, fee comparison and FAQ.', es: 'Planes con pago mensual o anual, comparativa de comisiones y preguntas frecuentes.', ru: 'Тарифы с оплатой помесячно или за год, сравнение комиссий и FAQ.' },
        file: 'src/pages/precios.astro',
        code: `---
import { BankPricingPage } from 'astro-component-kit/templates/fintech';
---

<BankPricingPage />`,
      },
      {
        id: 'security', path: 'seguridad/',
        name: { en: 'Security', es: 'Seguridad', ru: 'Безопасность' },
        description: { en: 'Deposit guarantee, protection pillars, regulatory badges and FAQ.', es: 'Garantía de depósitos, pilares de protección, sellos regulatorios y preguntas frecuentes.', ru: 'Гарантия вкладов, опоры защиты, регуляторные знаки и FAQ.' },
        file: 'src/pages/seguridad.astro',
        code: `---
import { BankSecurityPage } from 'astro-component-kit/templates/fintech';
---

<BankSecurityPage />`,
      },
      {
        id: 'open', path: 'abrir-cuenta/',
        name: { en: 'Open account', es: 'Abrir cuenta', ru: 'Открыть счёт' },
        description: { en: 'Three-step account-opening wizard that returns a new IBAN; pre-selects the plan from ?plan=.', es: 'Asistente de apertura de cuenta en tres pasos que devuelve un IBAN nuevo; preselecciona el plan desde ?plan=.', ru: 'Мастер открытия счёта из трёх шагов, возвращает новый IBAN; предвыбирает тариф из ?plan=.' },
        file: 'src/pages/abrir-cuenta.astro',
        code: `---
import { BankOpenAccountPage } from 'astro-component-kit/templates/fintech';
---

<BankOpenAccountPage action="/api/open-account" />`,
      },
      {
        id: 'sign-in', path: 'acceso/',
        name: { en: 'Sign in', es: 'Acceso', ru: 'Вход' },
        description: { en: 'Split sign-in with floating cards, testimonial and figures.', es: 'Acceso a pantalla partida con tarjetas flotantes, testimonio y cifras.', ru: 'Вход на двух панелях с парящими картами, отзывом и цифрами.' },
        file: 'src/pages/acceso.astro',
        code: `---
import { BankSignInPage } from 'astro-component-kit/templates/fintech';
---

<BankSignInPage />`,
      },
      {
        id: 'dashboard', path: 'app/',
        name: { en: 'Dashboard', es: 'Resumen', ru: 'Обзор' },
        description: { en: 'Balances, income vs. expenses, spending by category and latest movements.', es: 'Saldos, ingresos y gastos, gasto por categoría y últimos movimientos.', ru: 'Балансы, доходы и расходы, расходы по категориям и последние операции.' },
        file: 'src/pages/app/index.astro',
        code: `---
import { BankDashboardPage } from 'astro-component-kit/templates/fintech';
---

<BankDashboardPage />`,
      },
      {
        id: 'transactions', path: 'app/movimientos/',
        name: { en: 'Transactions', es: 'Movimientos', ru: 'Операции' },
        description: { en: 'Searchable, filterable and sortable movements with CSV export.', es: 'Movimientos con búsqueda, filtros, orden y exportación a CSV.', ru: 'Операции с поиском, фильтрами, сортировкой и экспортом в CSV.' },
        file: 'src/pages/app/movimientos.astro',
        code: `---
import { BankTransactionsPage } from 'astro-component-kit/templates/fintech';
---

<BankTransactionsPage />`,
      },
      {
        id: 'cards', path: 'app/tarjetas/',
        name: { en: 'Cards', es: 'Tarjetas', ru: 'Карты' },
        description: { en: 'Pick a card, reveal its number, freeze it and set its limit.', es: 'Elige tarjeta, muestra su número, congélala y fija su límite.', ru: 'Выбор карты, показ номера, заморозка и установка лимита.' },
        file: 'src/pages/app/tarjetas.astro',
        code: `---
import { BankCardsPage } from 'astro-component-kit/templates/fintech';
---

<BankCardsPage />`,
      },
      {
        id: 'transfers', path: 'app/transferencias/',
        name: { en: 'Transfers', es: 'Transferencias', ru: 'Переводы' },
        description: { en: 'Two-step transfer with IBAN validation, balance check and receipt.', es: 'Transferencia en dos pasos con validación de IBAN, control de saldo y justificante.', ru: 'Перевод в два шага с проверкой IBAN, контролем баланса и квитанцией.' },
        file: 'src/pages/app/transferencias.astro',
        code: `---
import { BankTransfersPage } from 'astro-component-kit/templates/fintech';
---

<BankTransfersPage />`,
      },
    ],
    newComponents: [
      'bank-hero', 'bank-features', 'bank-card-showcase', 'bank-plans', 'bank-fee-table', 'bank-savings-calculator', 'bank-security', 'bank-faq', 'bank-onboarding', 'bank-footer',
      'bank-balance-card', 'bank-cashflow-chart', 'bank-spending-breakdown', 'bank-transactions-table', 'bank-card-manager', 'bank-transfer-form', 'bank-app-nav', 'bank-app-topbar', 'bank-app-heading', 'bank-sign-in',
    ],
    reusedComponents: [],
    storeConfigExample: `---
// Pass your own data and routes to every page (e.g. from your banking API)
import { BankHomePage, bankData, bankRoutes } from 'astro-component-kit/templates/fintech';

const data = {
  ...bankData,
  brand: { ...bankData.brand, name: 'Aurum', phone: '+34 900 000 000' },
  transactions: await fetch('https://api.example.com/transactions').then((r) => r.json()),
};

const routes = { ...bankRoutes, pricing: '/plans', open: '/open-account' };
---

<BankHomePage data={data} routes={routes} />`,
  },
  {
    slug: 'law-firm',
    name: { en: 'Fuero · Law Firm & Client Portal', es: 'Fuero · Despacho de abogados & Portal del cliente', ru: 'Fuero · Юридическая фирма & Кабинет клиента' },
    tagline: { en: 'Law firm site with practice areas, team, fee models and consultation booking, plus a client portal with cases and timelines, documents with e-signature, secure messages, appointments and invoices.', es: 'Web de despacho de abogados con áreas de práctica, equipo, honorarios y reserva de consulta, más un portal del cliente con expedientes y cronologías, documentos con firma electrónica, mensajes seguros, citas y facturas.', ru: 'Сайт юридической фирмы с направлениями, командой, гонорарами и записью на консультацию, плюс кабинет клиента с делами и хронологиями, документами с электронной подписью, защищёнными сообщениями, встречами и счетами.' },
    description: { en: 'Complete template for a law firm or professional services practice. 9 page types: home with a case-file hero, practice areas, process, results, fee models, team, articles and FAQ; interactive practice areas; team with area filter; free-consultation booking; plus client sign-in, a portal home (what needs your attention, appointments, invoices), a case explorer with timeline, a document vault with upload and e-signature, and secure messaging.', es: 'Plantilla completa para un despacho de abogados o servicios profesionales. 9 tipos de página: home con hero de expediente, áreas de práctica, proceso, resultados, honorarios, equipo, artículos y preguntas frecuentes; áreas de práctica interactivas; equipo con filtro por área; reserva de consulta gratuita; y además acceso de clientes, inicio del portal (lo que necesita tu atención, citas, facturas), explorador de expedientes con cronología, caja de documentos con subida y firma electrónica y mensajería segura.', ru: 'Полный шаблон для юридической фирмы или профессиональных услуг. 9 типов страниц: главная с героем-«делом», направлениями, процессом, результатами, гонорарами, командой, статьями и FAQ; интерактивные направления; команда с фильтром; запись на бесплатную консультацию; а также вход клиентов, главная кабинета (что требует внимания, встречи, счета), обзор дел с хронологией, хранилище документов с загрузкой и электронной подписью и защищённые сообщения.' },
    highlights: {
      en: [
        'Practice areas as accessible tabs that open from ?area= links',
        'Consultation booking with day, time slot and format and a confirmation summary',
        'Case explorer with status filter, progress, next step and a vertical timeline',
        'Document vault with upload by click or drag & drop and e-signature action',
        'Secure messaging log, .ics calendar download and invoice payment flow',
      ],
      es: [
        'Áreas de práctica como pestañas accesibles que se abren desde enlaces ?area=',
        'Reserva de consulta con día, franja horaria y formato y resumen de confirmación',
        'Explorador de expedientes con filtro de estado, progreso, siguiente paso y cronología vertical',
        'Caja de documentos con subida por clic o arrastrando y acción de firma electrónica',
        'Mensajería segura, descarga .ics de citas y flujo de pago de facturas',
      ],
      ru: [
        'Направления в виде доступных вкладок, открываются по ссылкам ?area=',
        'Запись на консультацию: день, время, формат и итоговое подтверждение',
        'Обзор дел с фильтром статуса, прогрессом, следующим шагом и вертикальной хронологией',
        'Хранилище документов: загрузка кликом или перетаскиванием и электронная подпись',
        'Защищённые сообщения, загрузка .ics для встреч и оплата счетов',
      ],
    },
    tags: ['law', 'legal', 'lawyers', 'professional-services', 'portal', 'booking', 'dashboard', 'documents'],
    previewBase: '/preview/law-firm/',
    importPath: 'astro-component-kit/templates/law-firm',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Home', es: 'Inicio', ru: 'Главная' },
        description: { en: 'Hero, practice areas, process, results, fee models, team, articles and FAQ.', es: 'Hero, áreas de práctica, proceso, resultados, modelos de honorarios, equipo, artículos y preguntas frecuentes.', ru: 'Главный экран, направления, процесс, результаты, модели гонораров, команда, статьи и FAQ.' },
        file: 'src/pages/index.astro',
        code: `---
import { LawHomePage } from 'astro-component-kit/templates/law-firm';
---

<LawHomePage />`,
      },
      {
        id: 'areas', path: 'areas/',
        name: { en: 'Practice areas', es: 'Áreas', ru: 'Направления' },
        description: { en: 'Interactive practice areas (?area= opens one), fee models and FAQ.', es: 'Áreas de práctica interactivas (?area= abre una), modelos de honorarios y preguntas frecuentes.', ru: 'Интерактивные направления (?area= открывает одно), модели гонораров и FAQ.' },
        file: 'src/pages/areas.astro',
        code: `---
import { LawAreasPage } from 'astro-component-kit/templates/law-firm';
---

<LawAreasPage />`,
      },
      {
        id: 'team', path: 'equipo/',
        name: { en: 'Team', es: 'Equipo', ru: 'Команда' },
        description: { en: 'Lawyers with a filter by area, how we work and results.', es: 'Abogados con filtro por área, cómo trabajamos y resultados.', ru: 'Юристы с фильтром по направлению, как мы работаем и результаты.' },
        file: 'src/pages/equipo.astro',
        code: `---
import { LawTeamPage } from 'astro-component-kit/templates/law-firm';
---

<LawTeamPage />`,
      },
      {
        id: 'consult', path: 'consulta/',
        name: { en: 'Free consultation', es: 'Consulta gratuita', ru: 'Бесплатная консультация' },
        description: { en: 'Book area, day, time and format, then confirm; pre-selects the area from ?area=.', es: 'Reserva área, día, hora y formato y confirma; preselecciona el área desde ?area=.', ru: 'Запись: направление, день, время и формат, затем подтверждение; предвыбирает направление из ?area=.' },
        file: 'src/pages/consulta.astro',
        code: `---
import { LawConsultPage } from 'astro-component-kit/templates/law-firm';
---

<LawConsultPage action="/api/consulta" />`,
      },
      {
        id: 'sign-in', path: 'acceso/',
        name: { en: 'Client sign in', es: 'Acceso clientes', ru: 'Вход для клиентов' },
        description: { en: 'Split sign-in with scales illustration, testimonial and figures.', es: 'Acceso a pantalla partida con ilustración de la balanza, testimonio y cifras.', ru: 'Вход на двух панелях с иллюстрацией весов, отзывом и цифрами.' },
        file: 'src/pages/acceso.astro',
        code: `---
import { LawSignInPage } from 'astro-component-kit/templates/law-firm';
---

<LawSignInPage />`,
      },
      {
        id: 'dashboard', path: 'portal/',
        name: { en: 'Portal home', es: 'Resumen', ru: 'Обзор' },
        description: { en: 'Overview, what needs your attention, appointments and invoices.', es: 'Resumen, lo que necesita tu atención, citas y facturas.', ru: 'Обзор, что требует внимания, встречи и счета.' },
        file: 'src/pages/portal/index.astro',
        code: `---
import { LawDashboardPage } from 'astro-component-kit/templates/law-firm';
---

<LawDashboardPage />`,
      },
      {
        id: 'cases', path: 'portal/expedientes/',
        name: { en: 'Cases', es: 'Expedientes', ru: 'Дела' },
        description: { en: 'Cases with status filter, progress, next step and timeline.', es: 'Expedientes con filtro de estado, progreso, siguiente paso y cronología.', ru: 'Дела с фильтром статуса, прогрессом, следующим шагом и хронологией.' },
        file: 'src/pages/portal/expedientes.astro',
        code: `---
import { LawCasesPage } from 'astro-component-kit/templates/law-firm';
---

<LawCasesPage />`,
      },
      {
        id: 'documents', path: 'portal/documentos/',
        name: { en: 'Documents', es: 'Documentos', ru: 'Документы' },
        description: { en: 'Vault with search, filters, upload and e-signature.', es: 'Caja de documentos con búsqueda, filtros, subida y firma electrónica.', ru: 'Хранилище с поиском, фильтрами, загрузкой и электронной подписью.' },
        file: 'src/pages/portal/documentos.astro',
        code: `---
import { LawDocumentsPage } from 'astro-component-kit/templates/law-firm';
---

<LawDocumentsPage />`,
      },
      {
        id: 'messages', path: 'portal/mensajes/',
        name: { en: 'Messages', es: 'Mensajes', ru: 'Сообщения' },
        description: { en: 'Secure chat with your lawyer and upcoming appointments.', es: 'Chat seguro con tu abogado y próximas citas.', ru: 'Защищённый чат с юристом и ближайшие встречи.' },
        file: 'src/pages/portal/mensajes.astro',
        code: `---
import { LawMessagesPage } from 'astro-component-kit/templates/law-firm';
---

<LawMessagesPage />`,
      },
    ],
    newComponents: [
      'law-hero', 'law-practice-areas', 'law-team', 'law-process', 'law-results', 'law-fees', 'law-consultation', 'law-insights', 'law-faq', 'law-footer',
      'law-case-summary', 'law-case-explorer', 'law-document-vault', 'law-message-thread', 'law-appointments', 'law-invoices', 'law-portal-nav', 'law-portal-topbar', 'law-portal-heading', 'law-sign-in',
    ],
    reusedComponents: [],
    storeConfigExample: `---
// Pass your own data and routes to every page (e.g. from your case-management system)
import { LawHomePage, lawData, lawRoutes } from 'astro-component-kit/templates/law-firm';

const data = {
  ...lawData,
  brand: { ...lawData.brand, name: 'Mora Abogados', phone: '+34 900 000 000' },
  cases: await fetch('https://api.example.com/cases').then((r) => r.json()),
};

const routes = { ...lawRoutes, areas: '/practice', consult: '/book' };
---

<LawHomePage data={data} routes={routes} />`,
  },
  {
    slug: 'winery',
    name: { en: 'Solera · Winery & Wine Club', es: 'Solera · Bodega & Club de vino', ru: 'Solera · Винодельня & Винный клуб' },
    tagline: { en: 'Winery site with a tilting-bottle hero, a pinned scroll scene of the vintage, an interactive plot map, visit booking and a wine-club configurator, plus a members area with cellar, tasting notebook, shipments and plan.', es: 'Web de bodega con hero de botella que se inclina, escena de scroll fijada de la añada, mapa interactivo de parcelas, reserva de visitas y configurador del club, más un área de socios con bodega, cuaderno de cata, envíos y plan.', ru: 'Сайт винодельни с наклоняющейся бутылкой, закреплённой сценой урожая, интерактивной картой участков, записью на визиты и конфигуратором клуба, плюс кабинет участника с погребом, дневником дегустаций, отправлениями и планом.' },
    description: { en: 'Complete template for a winery or artisan producer with a subscription club. 9 page types: home with a tilting-bottle hero, wine preview, a pinned scroll scene that changes the vineyard through the year and press scores; the full wine list as an editorial index; the estate with a family story and an interactive plot map; visit booking with a live total; a wine-club configurator that draws the crate; members sign-in; and a members area with a home (next box with countdown), a cellar with drinking windows and a tasting notebook, and shipments with plan management.', es: 'Plantilla completa para una bodega o productor artesanal con club de suscripción. 9 tipos de página: home con hero de botella que se inclina, vista previa de vinos, una escena de scroll fijada que cambia el viñedo a lo largo del año y puntuaciones de prensa; la carta completa como índice editorial; la finca con historia familiar y mapa interactivo de parcelas; reserva de visitas con total en vivo; un configurador del club que dibuja la caja; acceso de socios; y un área de socios con inicio (próxima caja con cuenta atrás), bodega con ventanas de consumo y cuaderno de cata, y envíos con gestión del plan.', ru: 'Полный шаблон для винодельни или ремесленного производителя с клубом по подписке. 9 типов страниц: главная с наклоняющейся бутылкой, превью вин, закреплённой сценой прокрутки, меняющей виноградник в течение года, и оценками прессы; полная карта вин как редакционный индекс; поместье с историей семьи и интерактивной картой участков; запись на визиты с итогом на лету; конфигуратор клуба, рисующий ящик; вход участников; и кабинет с главной (ближайшая коробка с отсчётом), погребом с окнами употребления и дневником дегустаций, отправлениями и управлением планом.' },
    highlights: {
      en: [
        'Pinned scroll scene: the sky, hills, leaves and grapes of a drawn vineyard change continuously through the five stages of the vintage',
        'Interactive plot map with altitude, soil, planting year and the wines that come from each parcel',
        'Wine club configurator that redraws the crate bottle by bottle and recalculates the price live',
        'Personal cellar with drinking windows, ratings and a tasting notebook with sliders',
        'Typographic bottles and labels generated in SVG from the wine data, with no image files',
      ],
      es: [
        'Escena de scroll fijada: el cielo, las colinas, las hojas y las uvas de un viñedo dibujado cambian de forma continua entre las cinco etapas de la añada',
        'Mapa interactivo de parcelas con altitud, suelo, año de plantación y los vinos que salen de cada una',
        'Configurador del club que redibuja la caja botella a botella y recalcula el precio en vivo',
        'Bodega personal con ventanas de consumo, notas y un cuaderno de cata con deslizadores',
        'Botellas y etiquetas tipográficas generadas en SVG a partir de los datos del vino, sin archivos de imagen',
      ],
      ru: [
        'Закреплённая сцена прокрутки: небо, холмы, листья и гроздья нарисованного виноградника плавно меняются через пять этапов урожая',
        'Интерактивная карта участков с высотой, почвой, годом посадки и винами с каждого участка',
        'Конфигуратор клуба перерисовывает ящик бутылка за бутылкой и пересчитывает цену на лету',
        'Личный погреб с окнами употребления, оценками и дневником дегустаций с ползунками',
        'Типографские бутылки и этикетки генерируются в SVG из данных вина, без файлов изображений',
      ],
    },
    tags: ['wine', 'winery', 'subscription', 'club', 'booking', 'storytelling', 'portal', 'dashboard'],
    previewBase: '/preview/winery/',
    importPath: 'astro-component-kit/templates/winery',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Home', es: 'Inicio', ru: 'Главная' },
        description: { en: 'Hero with a tilting bottle, a first look at the wines, the pinned vintage scene and press scores.', es: 'Hero con botella que se inclina, primer vistazo a los vinos, la escena fijada de la añada y puntuaciones de prensa.', ru: 'Главный экран с наклоняющейся бутылкой, первый взгляд на вина, закреплённая сцена урожая и оценки прессы.' },
        file: 'src/pages/index.astro',
        code: `---
import { WineHomePage } from 'astro-component-kit/templates/winery';
---

<WineHomePage />`,
      },
      {
        id: 'wines', path: 'vinos/',
        name: { en: 'Wines', es: 'Vinos', ru: 'Вина' },
        description: { en: 'Full wine list as an editorial index with type filter, notes, profile and drinking window.', es: 'Carta completa como índice editorial con filtro por tipo, notas, perfil y ventana de consumo.', ru: 'Полная карта вин как редакционный индекс с фильтром по типу, нотами, профилем и окном употребления.' },
        file: 'src/pages/vinos.astro',
        code: `---
import { WineWinesPage } from 'astro-component-kit/templates/winery';
---

<WineWinesPage />`,
      },
      {
        id: 'estate', path: 'finca/',
        name: { en: 'Estate', es: 'La finca', ru: 'Поместье' },
        description: { en: 'Family story with a pinned quote, interactive plot map and the year in the vineyard.', es: 'Historia familiar con cita fija, mapa interactivo de parcelas y el año en el viñedo.', ru: 'История семьи с закреплённой цитатой, интерактивная карта участков и год на винограднике.' },
        file: 'src/pages/finca.astro',
        code: `---
import { WineEstatePage } from 'astro-component-kit/templates/winery';
---

<WineEstatePage />`,
      },
      {
        id: 'visits', path: 'visitas/',
        name: { en: 'Visits', es: 'Visitas', ru: 'Визиты' },
        description: { en: 'Book an experience with date, time, guests and a live total, plus FAQ.', es: 'Reserva una experiencia con fecha, hora, personas y total en vivo, más preguntas frecuentes.', ru: 'Запись на программу с датой, временем, гостями и итогом на лету, плюс FAQ.' },
        file: 'src/pages/visitas.astro',
        code: `---
import { WineVisitsPage } from 'astro-component-kit/templates/winery';
---

<WineVisitsPage action="/api/visitas" />`,
      },
      {
        id: 'club', path: 'club/',
        name: { en: 'Wine club', es: 'El club', ru: 'Клуб' },
        description: { en: 'Live configurator for bottles, style and frequency with the crate drawn beside the form.', es: 'Configurador en vivo de botellas, estilo y frecuencia con la caja dibujada junto al formulario.', ru: 'Конфигуратор бутылок, стиля и частоты с нарисованным рядом ящиком.' },
        file: 'src/pages/club.astro',
        code: `---
import { WineClubPage } from 'astro-component-kit/templates/winery';
---

<WineClubPage action="/api/club" />`,
      },
      {
        id: 'sign-in', path: 'acceso/',
        name: { en: 'Members sign in', es: 'Acceso socios', ru: 'Вход для участников' },
        description: { en: 'Split sign-in with a large generated wine label and a member quote.', es: 'Acceso a pantalla partida con una gran etiqueta de vino generada y un testimonio.', ru: 'Вход на двух панелях с большой сгенерированной этикеткой и отзывом.' },
        file: 'src/pages/acceso.astro',
        code: `---
import { WineSignInPage } from 'astro-component-kit/templates/winery';
---

<WineSignInPage />`,
      },
      {
        id: 'dashboard', path: 'socios/',
        name: { en: 'Members home', es: 'Resumen', ru: 'Обзор' },
        description: { en: 'Next box with countdown, cellar figures and a suggestion of what to open.', es: 'Próxima caja con cuenta atrás, cifras de bodega y una sugerencia de qué abrir.', ru: 'Ближайшая коробка с отсчётом, цифры погреба и подсказка, что открыть.' },
        file: 'src/pages/socios/index.astro',
        code: `---
import { WineDashboardPage } from 'astro-component-kit/templates/winery';
---

<WineDashboardPage />`,
      },
      {
        id: 'cellar', path: 'socios/bodega/',
        name: { en: 'Cellar & notebook', es: 'Bodega y cuaderno', ru: 'Погреб и дневник' },
        description: { en: 'Personal cellar with drinking windows and ratings, plus the tasting notebook.', es: 'Bodega personal con ventanas de consumo y notas, más el cuaderno de cata.', ru: 'Личный погреб с окнами употребления и оценками, плюс дневник дегустаций.' },
        file: 'src/pages/socios/bodega.astro',
        code: `---
import { WineCellarPage } from 'astro-component-kit/templates/winery';
---

<WineCellarPage />`,
      },
      {
        id: 'shipments', path: 'socios/envios/',
        name: { en: 'Shipments & plan', es: 'Envíos y plan', ru: 'Отправления и план' },
        description: { en: 'Shipments with tracking and actions, and club plan management.', es: 'Envíos con seguimiento y acciones, y gestión del plan del club.', ru: 'Отправления с трекингом и действиями, управление планом клуба.' },
        file: 'src/pages/socios/envios.astro',
        code: `---
import { WineShipmentsPage } from 'astro-component-kit/templates/winery';
---

<WineShipmentsPage />`,
      },
    ],
    newComponents: [
      'wine-hero', 'wine-vintage-scene', 'wine-collection', 'wine-terroir', 'wine-story', 'wine-visits', 'wine-club', 'wine-awards', 'wine-faq', 'wine-footer',
      'wine-bottle-label', 'wine-member-summary', 'wine-shipment-tracker', 'wine-cellar', 'wine-tasting-notebook', 'wine-plan-manager', 'wine-member-nav', 'wine-member-topbar', 'wine-member-heading', 'wine-sign-in',
    ],
    reusedComponents: [],
    storeConfigExample: `---
// Pass your own data and routes to every page (e.g. from your catalog or club system)
import { WineHomePage, wineData, wineRoutes } from 'astro-component-kit/templates/winery';

const data = {
  ...wineData,
  brand: { ...wineData.brand, name: 'Bodegas Ribera', phone: '+34 900 000 000' },
  wines: await fetch('https://api.example.com/wines').then((r) => r.json()),
};

const routes = { ...wineRoutes, wines: '/vinos', club: '/socios-club' };
---

<WineHomePage data={data} routes={routes} />`,
  },
  {
    slug: 'perfumery',
    name: { en: 'Umbra · Niche Perfumery', es: 'Umbra · Perfumería de autor', ru: 'Umbra · Нишевая парфюмерия' },
    tagline: { en: 'Niche perfumery with a hero of drifting colour clouds, an evolution-on-skin slider, an olfactory map, a scent profile quiz and a discovery-set builder, plus a customer area with a shelf of bottles at their real level, a layering lab and orders.', es: 'Perfumería de autor con un hero de nubes de color, un deslizador de evolución en piel, un mapa olfativo, un test de perfil y un constructor de set de descubrimiento, más un área de cliente con una estantería de frascos a su nivel real, laboratorio de capas y pedidos.', ru: 'Нишевая парфюмерия с героем из облаков цвета, ползунком эволюции на коже, ольфакторной картой, тестом профиля и конструктором набора, плюс кабинет клиента с полкой флаконов на реальном уровне, лабораторией слоёв и заказами.' },
    description: { en: 'Complete template for a niche perfume house. 8 page types: home with drifting colour clouds, a first rail of fragrances, an evolution-on-skin slider and raw materials; the six fragrances with sizes, prices and an olfactory map; the atelier with kilos of matter per kilo of essence; discovery with a four-question profile test and a 2 ml set builder; customer sign-in; and a customer area with a home (order in progress), a shelf where every flacon is drawn at its real level plus a layering lab, and orders with tracking.', es: 'Plantilla completa para una casa de perfumería de autor. 8 tipos de página: home con nubes de color, un primer carril de fragancias, un deslizador de evolución en piel y materias primas; las seis fragancias con tamaños, precios y un mapa olfativo; el atelier con kilos de materia por kilo de esencia; descubrir con un test de perfil de cuatro preguntas y un constructor de set de 2 ml; acceso de clientes; y un área de cliente con inicio (pedido en curso), una estantería donde cada frasco se dibuja a su nivel real más un laboratorio de capas, y pedidos con seguimiento.', ru: 'Полный шаблон для нишевого парфюмерного дома. 8 типов страниц: главная с облаками цвета, первой лентой ароматов, ползунком эволюции на коже и сырьём; шесть ароматов с объёмами, ценами и ольфакторной картой; ателье с килограммами материала на килограмм эссенции; знакомство с тестом профиля из четырёх вопросов и конструктором набора по 2 мл; вход клиентов; и кабинет с главной (заказ в работе), полкой, где каждый флакон нарисован на реальном уровне, лабораторией слоёв и заказами с трекингом.' },
    highlights: {
      en: [
        'Evolution on skin: a 0–10 h slider makes top, heart and base notes rise and fade over a layered curve, each with a written state',
        'Olfactory map placing every fragrance between fresh and warm, light and dense, with its nearest neighbour',
        'Customer shelf where each flacon is drawn at its real liquid level and empties on screen as you move the slider',
        'Layering lab that blends two fragrances at any ratio, with saved mixes in localStorage',
        'Flacons and labels generated in SVG from the fragrance data, with no image files',
      ],
      es: [
        'Evolución en piel: un deslizador de 0 a 10 h hace subir y apagarse las notas de salida, corazón y fondo sobre una curva por capas, cada una con un estado escrito',
        'Mapa olfativo que sitúa cada fragancia entre fresco y cálido, ligero y denso, con su vecina más cercana',
        'Estantería de la clienta donde cada frasco se dibuja a su nivel real y se vacía en pantalla al mover el deslizador',
        'Laboratorio de capas que mezcla dos fragancias en cualquier proporción, con mezclas guardadas en localStorage',
        'Frascos y etiquetas generados en SVG a partir de los datos de la fragancia, sin archivos de imagen',
      ],
      ru: [
        'Эволюция на коже: ползунок 0–10 ч поднимает и затихает верхние, сердечные и базовые ноты на кривой по слоям, у каждой есть текстовый статус',
        'Ольфакторная карта размещает каждый аромат между свежим и тёплым, лёгким и плотным, с ближайшим соседом',
        'Полка клиента, где каждый флакон нарисован на реальном уровне жидкости и опустошается на экране при движении ползунка',
        'Лаборатория слоёв смешивает два аромата в любой пропорции, сохранённые смеси хранятся в localStorage',
        'Флаконы и этикетки генерируются в SVG из данных аромата, без файлов изображений',
      ],
    },
    tags: ['perfume', 'perfumery', 'ecommerce', 'quiz', 'storytelling', 'portal', 'dashboard', 'svg'],
    previewBase: '/preview/perfumery/',
    importPath: 'astro-component-kit/templates/perfumery',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Home', es: 'Inicio', ru: 'Главная' },
        description: { en: 'Hero with drifting colour clouds, three fragrances to start, the evolution-on-skin slider and the first raw materials.', es: 'Hero con nubes de color, tres fragancias para empezar, el deslizador de evolución en piel y las primeras materias primas.', ru: 'Главный экран с облаками цвета, три аромата для начала, ползунок эволюции на коже и первое сырьё.' },
        file: 'src/pages/index.astro',
        code: `---
import { PerfHomePage } from 'astro-component-kit/templates/perfumery';
---

<PerfHomePage />`,
      },
      {
        id: 'fragrances', path: 'fragancias/',
        name: { en: 'Fragrances', es: 'Fragancias', ru: 'Ароматы' },
        description: { en: 'The six fragrances as a rail with sizes and prices, the olfactory map and FAQ.', es: 'Las seis fragancias como carril con tamaños y precios, el mapa olfativo y preguntas frecuentes.', ru: 'Шесть ароматов лентой с объёмами и ценами, ольфакторная карта и FAQ.' },
        file: 'src/pages/fragancias.astro',
        code: `---
import { PerfFragrancesPage } from 'astro-component-kit/templates/perfumery';
---

<PerfFragrancesPage />`,
      },
      {
        id: 'atelier', path: 'atelier/',
        name: { en: 'Atelier', es: 'El atelier', ru: 'Ателье' },
        description: { en: 'Raw materials with kilos of matter per kilo of essence, plus the evolution of each fragrance.', es: 'Materias primas con kilos de materia por kilo de esencia, más la evolución de cada fragancia.', ru: 'Сырьё с килограммами материала на килограмм эссенции и эволюция каждого аромата.' },
        file: 'src/pages/atelier.astro',
        code: `---
import { PerfAtelierPage } from 'astro-component-kit/templates/perfumery';
---

<PerfAtelierPage />`,
      },
      {
        id: 'discover', path: 'descubrir/',
        name: { en: 'Discover', es: 'Descubrir', ru: 'Знакомство' },
        description: { en: 'Four-question profile test and the 2 ml discovery-set builder with live total.', es: 'Test de perfil de cuatro preguntas y constructor del set de viales de 2 ml con total en vivo.', ru: 'Тест профиля из четырёх вопросов и конструктор набора флакончиков по 2 мл с итогом на лету.' },
        file: 'src/pages/descubrir.astro',
        code: `---
import { PerfDiscoverPage } from 'astro-component-kit/templates/perfumery';
---

<PerfDiscoverPage action="/api/set" />`,
      },
      {
        id: 'sign-in', path: 'acceso/',
        name: { en: 'Customer sign in', es: 'Acceso clientes', ru: 'Вход для клиентов' },
        description: { en: 'Split sign-in with a large generated flacon and a customer quote.', es: 'Acceso a pantalla partida con un gran frasco generado y un testimonio.', ru: 'Вход на двух панелях с большим сгенерированным флаконом и отзывом.' },
        file: 'src/pages/acceso.astro',
        code: `---
import { PerfSignInPage } from 'astro-component-kit/templates/perfumery';
---

<PerfSignInPage />`,
      },
      {
        id: 'dashboard', path: 'cuenta/',
        name: { en: 'Account home', es: 'Resumen', ru: 'Обзор' },
        description: { en: 'Order in progress with a written timeline, customer figures and the bottle running out.', es: 'Pedido en curso con cronología escrita, cifras de la clienta y el frasco que se acaba.', ru: 'Заказ в работе с текстовой хронологией, цифры клиента и заканчивающийся флакон.' },
        file: 'src/pages/cuenta/index.astro',
        code: `---
import { PerfDashboardPage } from 'astro-component-kit/templates/perfumery';
---

<PerfDashboardPage />`,
      },
      {
        id: 'shelf', path: 'cuenta/estanteria/',
        name: { en: 'Shelf & layering lab', es: 'Estantería y capas', ru: 'Полка и слои' },
        description: { en: 'Every bottle at its real liquid level, ratings, and the layering lab with saved mixes.', es: 'Cada frasco a su nivel real, notas, y el laboratorio de capas con mezclas guardadas.', ru: 'Каждый флакон на реальном уровне, оценки и лаборатория слоёв с сохранёнными смесями.' },
        file: 'src/pages/cuenta/estanteria.astro',
        code: `---
import { PerfShelfPage } from 'astro-component-kit/templates/perfumery';
---

<PerfShelfPage />`,
      },
      {
        id: 'orders', path: 'cuenta/pedidos/',
        name: { en: 'Orders', es: 'Pedidos', ru: 'Заказы' },
        description: { en: 'Orders with timeline, carrier and tracking, and actions for orders being prepared.', es: 'Pedidos con cronología, transportista y seguimiento, y acciones para los que se preparan.', ru: 'Заказы с хронологией, перевозчиком и трекингом и действиями для заказов в подготовке.' },
        file: 'src/pages/cuenta/pedidos.astro',
        code: `---
import { PerfOrdersPage } from 'astro-component-kit/templates/perfumery';
---

<PerfOrdersPage />`,
      },
    ],
    newComponents: [
      'perf-hero', 'perf-skin', 'perf-collection', 'perf-map', 'perf-atelier', 'perf-quiz', 'perf-discovery', 'perf-faq', 'perf-footer',
      'perf-bottle', 'perf-account-summary', 'perf-shelf', 'perf-layering', 'perf-order-tracker', 'perf-account-nav', 'perf-account-topbar', 'perf-account-heading', 'perf-sign-in',
    ],
    reusedComponents: [],
    storeConfigExample: `---
// Pass your own data and routes to every page (e.g. from your catalog or customer system)
import { PerfHomePage, perfData, perfRoutes } from 'astro-component-kit/templates/perfumery';

const data = {
  ...perfData,
  brand: { ...perfData.brand, name: 'Atelier Nube', phone: '+34 900 000 000' },
  fragrances: await fetch('https://api.example.com/fragrances').then((r) => r.json()),
};

const routes = { ...perfRoutes, fragrances: '/perfumes', discover: '/muestras' };
---

<PerfHomePage data={data} routes={routes} />`,
  },
  {
    slug: 'restaurant',
    name: { en: 'Lumbre · Fire-cooking Restaurant', es: 'Lumbre · Restaurante a la brasa', ru: 'Lumbre · Ресторан на углях' },
    tagline: { en: 'Fire-cooking restaurant with an ember hero, a tasting menu told plate by plate with generated plates, a producer radar and table booking on a floor plan, plus a customer area with reservations, preferences and gift cards.', es: 'Restaurante a la brasa con un hero de brasas, un menú degustación contado plato a plato con platos generados, un radar de productores y reserva de mesa sobre un plano de sala, más un área de cliente con reservas, preferencias y vales regalo.', ru: 'Ресторан на углях с героем из углей, дегустационным меню блюдо за блюдом со сгенерированными тарелками, радаром производителей и бронированием стола на плане зала, плюс кабинет клиента с бронями, предпочтениями и сертификатами.' },
    description: { en: 'Complete template for a fire-cooking restaurant. 8 page types: home with an ember hero, the tasting menu and the producer radar; the menu with the eight-course tasting menu and an à la carte list with diet filter; origin with a radar of producers at their real distance; booking with date, time, guests and a floor plan where taken or too-small tables are disabled; customer sign-in; and a customer area with a home (next reservation with a countdown), reservations with cancel and change actions, and preferences with allergies, celebrations and gift cards.', es: 'Plantilla completa para un restaurante a la brasa. 8 tipos de página: home con un hero de brasas, el menú degustación y el radar de productores; el menú con el degustación de ocho pases y una carta con filtro de dieta; el origen con un radar de productores a su distancia real; la reserva con fecha, hora, comensales y un plano de sala donde las mesas ocupadas o pequeñas se desactivan; acceso de clientes; y un área de cliente con inicio (próxima reserva con cuenta atrás), reservas con acciones de cancelar y cambiar, y preferencias con alergias, celebraciones y vales regalo.', ru: 'Полный шаблон для ресторана на углях. 8 типов страниц: главная с героем из углей, дегустационным меню и радаром производителей; меню с дегустационным из восьми подач и картой à la carte с фильтром по диете; происхождение с радаром производителей на реальном расстоянии; бронирование с датой, временем, гостями и планом зала, где занятые или слишком маленькие столы отключены; вход клиентов; и кабинет с главной (ближайшая бронь с отсчётом), бронями с действиями отмены и изменения и предпочтениями с аллергиями, торжествами и сертификатами.' },
    highlights: {
      en: [
        'Tasting menu told plate by plate: pick a course and a plate generated in SVG redraws with its ingredients, pairing, temperature and kilometres travelled',
        'Table booking on a floor plan of the dining room: tables that are taken, too small or on a closed day are disabled and say why',
        'Producer radar that places every supplier at its real distance, with the average computed from the data',
        'Ember hero with a gradient wordmark and CSS sparks that stop under prefers-reduced-motion',
        'Customer area with reservations you can cancel or change, preferences for the kitchen and gift cards',
      ],
      es: [
        'Menú degustación contado plato a plato: elige un pase y un plato generado en SVG se redibuja con sus ingredientes, maridaje, temperatura y kilómetros recorridos',
        'Reserva de mesa sobre un plano del comedor: las mesas ocupadas, pequeñas o en día cerrado se desactivan y dicen por qué',
        'Radar de productores que sitúa cada proveedor a su distancia real, con la media calculada a partir de los datos',
        'Hero de brasas con un logotipo en degradado y chispas CSS que se detienen con prefers-reduced-motion',
        'Área de cliente con reservas que se pueden cancelar o cambiar, preferencias para la cocina y vales regalo',
      ],
      ru: [
        'Дегустационное меню блюдо за блюдом: выберите подачу — сгенерированная в SVG тарелка перерисуется с ингредиентами, сочетанием, температурой и пройденными километрами',
        'Бронирование стола на плане зала: занятые, слишком маленькие столы и выходные дни отключены с объяснением причины',
        'Радар производителей размещает каждого поставщика на реальном расстоянии, среднее считается по данным',
        'Главный экран с углями, градиентным логотипом и CSS-искрами, которые останавливаются при prefers-reduced-motion',
        'Кабинет клиента с бронями, которые можно отменить или изменить, предпочтениями для кухни и подарочными сертификатами',
      ],
    },
    tags: ['restaurant', 'food', 'booking', 'reservations', 'menu', 'storytelling', 'portal', 'dashboard'],
    previewBase: '/preview/restaurant/',
    importPath: 'astro-component-kit/templates/restaurant',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Home', es: 'Inicio', ru: 'Главная' },
        description: { en: 'Ember hero with rising sparks, the tasting menu plate by plate and the producer radar.', es: 'Hero de brasa con chispas, el menú degustación plato a plato y el radar de productores.', ru: 'Главный экран с углями и искрами, дегустационное меню блюдо за блюдом и радар производителей.' },
        file: 'src/pages/index.astro',
        code: `---
import { RestHomePage } from 'astro-component-kit/templates/restaurant';
---

<RestHomePage />`,
      },
      {
        id: 'menu', path: 'menu/',
        name: { en: 'Menu', es: 'Menú y carta', ru: 'Меню' },
        description: { en: 'The eight-course tasting menu with generated plates, the à la carte list with diet filter and FAQ.', es: 'El menú degustación de ocho pases con platos generados, la carta con filtro de dieta y preguntas frecuentes.', ru: 'Дегустационное меню из восьми подач со сгенерированными тарелками, меню à la carte с фильтром по диете и FAQ.' },
        file: 'src/pages/menu.astro',
        code: `---
import { RestMenuPage } from 'astro-component-kit/templates/restaurant';
---

<RestMenuPage />`,
      },
      {
        id: 'origin', path: 'origen/',
        name: { en: 'Origin', es: 'Origen', ru: 'Происхождение' },
        description: { en: 'A radar of producers at their real distance with who they are and what they send.', es: 'Un radar de productores a su distancia real con quiénes son y qué mandan.', ru: 'Радар производителей на реальном расстоянии: кто они и что присылают.' },
        file: 'src/pages/origen.astro',
        code: `---
import { RestOriginPage } from 'astro-component-kit/templates/restaurant';
---

<RestOriginPage />`,
      },
      {
        id: 'reserve', path: 'reservar/',
        name: { en: 'Book a table', es: 'Reservar mesa', ru: 'Забронировать стол' },
        description: { en: 'Date, time and guests, then pick your table on the floor plan; unavailable tables say why.', es: 'Fecha, hora y comensales, y eliges tu mesa en el plano; las mesas no disponibles dicen por qué.', ru: 'Дата, время и гости, затем выбор стола на плане; недоступные столы объясняют причину.' },
        file: 'src/pages/reservar.astro',
        code: `---
import { RestReservePage } from 'astro-component-kit/templates/restaurant';
---

<RestReservePage action="/api/reservar" />`,
      },
      {
        id: 'sign-in', path: 'acceso/',
        name: { en: 'Customer sign in', es: 'Acceso clientes', ru: 'Вход для клиентов' },
        description: { en: 'Split sign-in with a large generated plate and a customer quote.', es: 'Acceso a pantalla partida con un gran plato generado y un testimonio.', ru: 'Вход на двух панелях с большой сгенерированной тарелкой и отзывом.' },
        file: 'src/pages/acceso.astro',
        code: `---
import { RestSignInPage } from 'astro-component-kit/templates/restaurant';
---

<RestSignInPage />`,
      },
      {
        id: 'dashboard', path: 'mesa/',
        name: { en: 'Account home', es: 'Resumen', ru: 'Обзор' },
        description: { en: 'Next reservation with a countdown, customer figures and a rebook card.', es: 'Próxima reserva con cuenta atrás, cifras del cliente y tarjeta para reservar de nuevo.', ru: 'Ближайшая бронь с отсчётом, цифры клиента и карточка повторной брони.' },
        file: 'src/pages/mesa/index.astro',
        code: `---
import { RestDashboardPage } from 'astro-component-kit/templates/restaurant';
---

<RestDashboardPage />`,
      },
      {
        id: 'reservations', path: 'mesa/reservas/',
        name: { en: 'Reservations', es: 'Reservas', ru: 'Брони' },
        description: { en: 'Upcoming and past reservations with cancel and change actions.', es: 'Reservas próximas y pasadas con acciones de cancelar y cambiar.', ru: 'Предстоящие и прошедшие брони с действиями отмены и изменения.' },
        file: 'src/pages/mesa/reservas.astro',
        code: `---
import { RestReservationsPage } from 'astro-component-kit/templates/restaurant';
---

<RestReservationsPage />`,
      },
      {
        id: 'preferences', path: 'mesa/preferencias/',
        name: { en: 'Preferences & gift cards', es: 'Preferencias y vales', ru: 'Предпочтения и сертификаты' },
        description: { en: 'Allergies, diet, zone, celebrations and gift cards.', es: 'Alergias, dieta, zona, celebraciones y vales regalo.', ru: 'Аллергии, диета, зона, торжества и подарочные сертификаты.' },
        file: 'src/pages/mesa/preferencias.astro',
        code: `---
import { RestPreferencesPage } from 'astro-component-kit/templates/restaurant';
---

<RestPreferencesPage />`,
      },
    ],
    newComponents: [
      'rest-hero', 'rest-tasting', 'rest-menu', 'rest-origin', 'rest-booking', 'rest-faq', 'rest-footer',
      'rest-plate', 'rest-account-summary', 'rest-reservations', 'rest-preferences', 'rest-gift-cards', 'rest-account-nav', 'rest-account-topbar', 'rest-account-heading', 'rest-sign-in',
    ],
    reusedComponents: [],
    storeConfigExample: `---
// Pass your own data and routes to every page (e.g. from your menu and booking system)
import { RestHomePage, restData, restRoutes } from 'astro-component-kit/templates/restaurant';

const data = {
  ...restData,
  brand: { ...restData.brand, name: 'Fogón Norte', phone: '+34 900 000 000' },
  dishes: await fetch('https://api.example.com/dishes').then((r) => r.json()),
};

const routes = { ...restRoutes, menu: '/carta', reserve: '/mesa-libre' };
---

<RestHomePage data={data} routes={routes} />`,
  },
  {
    slug: 'architecture',
    name: { en: 'Cota · Architecture Studio', es: 'Cota · Estudio de arquitectura', ru: 'Cota · Архитектурное бюро' },
    tagline: { en: 'Architecture studio with a hero elevation that draws itself, built work with generated floor plans, an interactive solar study with real sun positions and a cost calculator with a calendar, plus a client area to follow the works: progress, budget, change orders, decisions, documents and diary.', es: 'Estudio de arquitectura con un hero cuyo alzado se dibuja solo, obra construida con plantas generadas, un estudio solar interactivo con posiciones reales del sol y una calculadora de coste con calendario, más un área de cliente para seguir la obra: avance, presupuesto, modificados, decisiones, documentos y diario.', ru: 'Архитектурное бюро с главным экраном, фасад которого рисуется сам, построенными объектами со сгенерированными планами, интерактивным расчётом инсоляции с реальным положением солнца и калькулятором стоимости с календарём, плюс кабинет клиента для наблюдения за стройкой: прогресс, бюджет, изменения, решения, документы и журнал.' },
    description: { en: 'Complete template for an architecture studio. 8 page types: home with a self-drawing elevation hero, recent work with generated plans, the solar study and the principles; built work with a type filter, plan, elevation and facts; the studio with the process as a Gantt accordion; the estimate with a calculator and a request form; client sign-in; and a client area with a work home (progress drawn floor by floor, phases, pending items), a budget with change orders and decisions to approve, and documents with signing plus a searchable site diary.', es: 'Plantilla completa para un estudio de arquitectura. 8 tipos de página: home con un hero de alzado que se dibuja solo, obra reciente con plantas generadas, el estudio solar y los principios; obra construida con filtro por tipo, planta, alzado y datos; el estudio con el proceso como acordeón Gantt; el presupuesto con una calculadora y un formulario de solicitud; acceso de clientes; y un área de cliente con inicio de obra (avance dibujado planta a planta, fases, pendientes), un presupuesto con modificados y decisiones por aprobar, y documentos con firma más un diario de obra con buscador.', ru: 'Полный шаблон для архитектурного бюро. 8 типов страниц: главная с самопрорисовывающимся фасадом, недавние объекты со сгенерированными планами, расчёт инсоляции и принципы; построенные объекты с фильтром по типу, планом, фасадом и данными; бюро с процессом как аккордеон Ганта; смета с калькулятором и формой заявки; вход клиентов; и кабинет с обзором стройки (прогресс, нарисованный этаж за этажом, фазы, ожидающее), бюджетом с изменениями и решениями на утверждение и документами с подписью, плюс журнал стройки с поиском.' },
    highlights: {
      en: [
        'Hero elevation that draws itself line by line, with blueprint dimension lines whose figures come from the data',
        'Floor plans generated by binary space partition from a seed, named by size and labelled with real square metres',
        'Interactive solar study with real sun altitude and azimuth for the latitude, shadows cast by a neighbouring building and hours of direct sun in text',
        'Cost calculator with a price range, breakdown and a calendar bar of design, permit and works weeks',
        'Client area where the building is drawn floor by floor as far as the progress, with budget, change orders to approve, decisions, signing and a searchable diary',
      ],
      es: [
        'Hero con un alzado que se dibuja línea a línea, con cotas de plano cuyas cifras salen de los datos',
        'Plantas generadas por partición binaria del espacio a partir de una semilla, nombradas por tamaño y con sus metros cuadrados reales',
        'Estudio solar interactivo con altura y azimut reales del sol para la latitud, sombras de un edificio vecino y horas de sol directo en texto',
        'Calculadora de coste con rango de precio, desglose y una barra de calendario de proyecto, licencia y obra',
        'Área de cliente donde el edificio se dibuja planta a planta hasta el avance, con presupuesto, modificados por aprobar, decisiones, firma y un diario con buscador',
      ],
      ru: [
        'Главный экран с фасадом, который прорисовывается линия за линией, с размерными линиями, цифры которых берутся из данных',
        'Планы этажей, сгенерированные бинарным разбиением по зерну, названные по размеру и с реальными квадратными метрами',
        'Интерактивный расчёт инсоляции с реальными высотой и азимутом солнца для широты, тенями соседнего здания и часами прямого солнца текстом',
        'Калькулятор стоимости с диапазоном цены, разбивкой и календарной полосой проекта, разрешений и работ',
        'Кабинет клиента, где здание нарисовано этаж за этажом до достигнутого прогресса, с бюджетом, изменениями на утверждение, решениями, подписью и журналом с поиском',
      ],
    },
    tags: ['architecture', 'studio', 'portfolio', 'calculator', 'construction', 'portal', 'dashboard', 'svg'],
    previewBase: '/preview/architecture/',
    importPath: 'astro-component-kit/templates/architecture',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Home', es: 'Inicio', ru: 'Главная' },
        description: { en: 'Self-drawing elevation hero, recent work with generated plans, the solar study and the studio principles.', es: 'Hero con alzado que se dibuja solo, obra reciente con plantas generadas, el estudio solar y los principios del estudio.', ru: 'Главный экран с самопрорисовывающимся фасадом, недавние объекты со сгенерированными планами, расчёт инсоляции и принципы бюро.' },
        file: 'src/pages/index.astro',
        code: `---
import { ArchHomePage } from 'astro-component-kit/templates/architecture';
---

<ArchHomePage />`,
      },
      {
        id: 'projects', path: 'obras/',
        name: { en: 'Projects', es: 'Obras', ru: 'Объекты' },
        description: { en: 'The full index of built work with type filter, generated plan and elevation and facts.', es: 'El índice completo de obra construida con filtro por tipo, planta y alzado generados y datos.', ru: 'Полный указатель построенных объектов с фильтром по типу, сгенерированными планом и фасадом и данными.' },
        file: 'src/pages/obras.astro',
        code: `---
import { ArchProjectsPage } from 'astro-component-kit/templates/architecture';
---

<ArchProjectsPage />`,
      },
      {
        id: 'studio', path: 'estudio/',
        name: { en: 'Studio', es: 'Estudio', ru: 'Бюро' },
        description: { en: 'Four principles, the process as a Gantt accordion, the solar study and FAQ.', es: 'Cuatro principios, el proceso como acordeón Gantt, el estudio solar y preguntas frecuentes.', ru: 'Четыре принципа, процесс как аккордеон Ганта, расчёт инсоляции и FAQ.' },
        file: 'src/pages/estudio.astro',
        code: `---
import { ArchStudioPage } from 'astro-component-kit/templates/architecture';
---

<ArchStudioPage />`,
      },
      {
        id: 'estimate', path: 'presupuesto/',
        name: { en: 'Estimate', es: 'Presupuesto', ru: 'Смета' },
        description: { en: 'Cost calculator with price range, breakdown and calendar, plus the request form.', es: 'Calculadora de coste con rango de precio, desglose y calendario, más el formulario de solicitud.', ru: 'Калькулятор стоимости с диапазоном цены, разбивкой и календарём, плюс форма заявки.' },
        file: 'src/pages/presupuesto.astro',
        code: `---
import { ArchEstimatePage } from 'astro-component-kit/templates/architecture';
---

<ArchEstimatePage action="/api/estudio" />`,
      },
      {
        id: 'sign-in', path: 'acceso/',
        name: { en: 'Client sign in', es: 'Acceso clientes', ru: 'Вход для клиентов' },
        description: { en: 'Split sign-in with a large generated elevation and a client quote.', es: 'Acceso a pantalla partida con un gran alzado generado y un testimonio.', ru: 'Вход на двух панелях с большим сгенерированным фасадом и отзывом.' },
        file: 'src/pages/acceso.astro',
        code: `---
import { ArchSignInPage } from 'astro-component-kit/templates/architecture';
---

<ArchSignInPage />`,
      },
      {
        id: 'dashboard', path: 'obra/',
        name: { en: 'Work home', es: 'Resumen de obra', ru: 'Обзор стройки' },
        description: { en: 'Progress with a building drawn floor by floor, phases, team, pending items and the latest diary entries.', es: 'Avance con un edificio dibujado planta a planta, fases, equipo, pendientes y las últimas entradas del diario.', ru: 'Прогресс со зданием, нарисованным этаж за этажом, фазы, команда, ожидающее и последние записи журнала.' },
        file: 'src/pages/obra/index.astro',
        code: `---
import { ArchDashboardPage } from 'astro-component-kit/templates/architecture';
---

<ArchDashboardPage />`,
      },
      {
        id: 'budget', path: 'obra/presupuesto/',
        name: { en: 'Budget & decisions', es: 'Presupuesto y decisiones', ru: 'Бюджет и решения' },
        description: { en: 'Paid vs budget per line, change orders to approve and pending decisions.', es: 'Pagado frente a presupuesto por partida, modificados por aprobar y decisiones pendientes.', ru: 'Оплачено и бюджет по статьям, изменения на утверждение и ожидающие решения.' },
        file: 'src/pages/obra/presupuesto.astro',
        code: `---
import { ArchBudgetPage } from 'astro-component-kit/templates/architecture';
---

<ArchBudgetPage />`,
      },
      {
        id: 'documents', path: 'obra/documentos/',
        name: { en: 'Documents & diary', es: 'Documentos y diario', ru: 'Документы и журнал' },
        description: { en: 'Documents with status filter and signing, and the full searchable diary.', es: 'Documentos con filtro de estado y firma, y el diario completo con buscador.', ru: 'Документы с фильтром статуса и подписью и полный журнал с поиском.' },
        file: 'src/pages/obra/documentos.astro',
        code: `---
import { ArchDocumentsPage } from 'astro-component-kit/templates/architecture';
---

<ArchDocumentsPage />`,
      },
    ],
    newComponents: [
      'arch-hero', 'arch-projects', 'arch-sun', 'arch-process', 'arch-estimate', 'arch-principles', 'arch-faq', 'arch-footer',
      'arch-elevation', 'arch-plan', 'arch-work-summary', 'arch-budget', 'arch-decisions', 'arch-diary', 'arch-documents', 'arch-account-nav', 'arch-account-topbar', 'arch-account-heading', 'arch-sign-in',
    ],
    reusedComponents: [],
    storeConfigExample: `---
// Pass your own data and routes to every page (e.g. from your project and works system)
import { ArchHomePage, archData, archRoutes } from 'astro-component-kit/templates/architecture';

const data = {
  ...archData,
  brand: { ...archData.brand, name: 'Estudio Norte', latitude: 41.65 },
  projects: await fetch('https://api.example.com/projects').then((r) => r.json()),
};

const routes = { ...archRoutes, projects: '/proyectos', estimate: '/calcula-tu-obra' };
---

<ArchHomePage data={data} routes={routes} />`,
  },
  {
    slug: 'theater',
    name: { en: 'Telón · Theatre Tickets', es: 'Telón · Entradas de teatro', ru: 'Telón · Театральные билеты' },
    tagline: { en: 'Theatre-ticket shop with a hero whose curtains part as you scroll, generated posters, a billboard with filters, an interactive seat map, a cart with a ten-minute hold and a ticket wallet with codes shown full screen.', es: 'Tienda de entradas de teatro con un hero cuyo telón se abre con el scroll, carteles generados, cartelera con filtros, plano de butacas interactivo, carrito con reserva de diez minutos y cartera de entradas con códigos a pantalla completa.', ru: 'Театральная касса с главным экраном, где занавес раздвигается при скролле, сгенерированными афишами, афишей с фильтрами, интерактивным планом мест, корзиной с удержанием десять минут и кошельком билетов с кодами на весь экран.' },
    description: { en: 'Complete e-commerce template for selling theatre tickets. 8 page types: home with a curtain hero driven by scroll, a title marquee, this week\'s billboard and FAQ; the billboard with search, genre filter and sorting; the show page with sessions and an interactive hall plan where taken seats are disabled, prices vary by zone and "best seats together" picks a row; cart and checkout with a ten-minute hold, promo code and demo payment; customer sign-in; and a customer area with a home (next performance with a countdown), a ticket wallet with perforated stubs and full-screen codes, and orders with change and return actions.', es: 'Plantilla e-commerce completa para vender entradas de teatro. 8 tipos de página: home con un hero de telón guiado por el scroll, una cinta de títulos, la cartelera de la semana y preguntas frecuentes; la cartelera con búsqueda, filtro por género y orden; la ficha del espectáculo con funciones y un plano de sala interactivo donde las butacas ocupadas se desactivan, los precios varían por zona y "mejores butacas juntas" elige una fila; carrito y pago con reserva de diez minutos, código promocional y pago de demostración; acceso de clientes; y un área de cliente con inicio (próxima función con cuenta atrás), una cartera de entradas con talones perforados y códigos a pantalla completa, y pedidos con acciones de cambiar y devolver.', ru: 'Полный e-commerce шаблон для продажи театральных билетов. 8 типов страниц: главная с занавесом, управляемым прокруткой, бегущей строкой, афишей недели и FAQ; афиша с поиском, фильтром по жанру и сортировкой; страница спектакля с сеансами и интерактивным планом зала, где занятые места отключены, цены зависят от зоны, а «лучшие места рядом» выбирают ряд; корзина и оплата с удержанием десять минут, промокодом и демо-оплатой; вход клиентов; и кабинет с главной (ближайший спектакль с отсчётом), кошельком билетов с перфорированными корешками и кодами на весь экран и заказами с действиями замены и возврата.' },
    highlights: {
      en: [
        'Hero whose velvet curtains part as you scroll, driven by scroll progress with a spotlight that follows the pointer',
        'Interactive hall plan with real checkbox seats: taken seats disabled, prices by zone, up to six seats and "best seats together"',
        'Cart with a ten-minute hold that releases the seats, promo code, live totals and a demo checkout',
        'Ticket wallet with classic perforated tickets and codes shown full screen in a native dialog',
        'Posters generated in SVG from each show\'s palette and seed, with no image files',
      ],
      es: [
        'Hero cuyo telón de terciopelo se abre con el scroll, guiado por el progreso de scroll con un foco que sigue al puntero',
        'Plano de sala interactivo con butacas reales como casillas: ocupadas desactivadas, precios por zona, hasta seis butacas y "mejores butacas juntas"',
        'Carrito con reserva de diez minutos que libera las butacas, código promocional, totales en vivo y pago de demostración',
        'Cartera de entradas con billetes clásicos perforados y códigos a pantalla completa en un diálogo nativo',
        'Carteles generados en SVG a partir de la paleta y la semilla de cada espectáculo, sin archivos de imagen',
      ],
      ru: [
        'Главный экран, где бархатный занавес раздвигается при скролле, с прожектором, следующим за курсором',
        'Интерактивный план зала с настоящими местами-чекбоксами: занятые отключены, цены по зонам, до шести мест и «лучшие места рядом»',
        'Корзина с удержанием десять минут, освобождающим места, промокодом, итогами на лету и демо-оплатой',
        'Кошелёк билетов с классическими перфорированными билетами и кодами на весь экран в нативном диалоге',
        'Афиши генерируются в SVG из палитры и зерна каждого спектакля, без файлов изображений',
      ],
    },
    tags: ['theater', 'tickets', 'ecommerce', 'booking', 'cart', 'checkout', 'portal', 'dashboard'],
    previewBase: '/preview/theater/',
    importPath: 'astro-component-kit/templates/theater',
    pages: [
      {
        id: 'home', path: '',
        name: { en: 'Home', es: 'Inicio', ru: 'Главная' },
        description: { en: 'Curtain hero opened by scroll, title marquee, this week\'s billboard and FAQ.', es: 'Hero con telón que se abre con el scroll, cinta de títulos, cartelera de la semana y preguntas frecuentes.', ru: 'Главный экран с занавесом, открывающимся при скролле, бегущая строка, афиша недели и FAQ.' },
        file: 'src/pages/index.astro',
        code: `---
import { TheaHomePage } from 'astro-component-kit/templates/theater';
---

<TheaHomePage />`,
      },
      {
        id: 'shows', path: 'cartelera/',
        name: { en: 'Billboard', es: 'Cartelera', ru: 'Афиша' },
        description: { en: 'All shows with search, genre filter and sorting over generated posters.', es: 'Todos los espectáculos con búsqueda, filtro por género y orden sobre carteles generados.', ru: 'Все спектакли с поиском, фильтром по жанру и сортировкой на сгенерированных афишах.' },
        file: 'src/pages/cartelera.astro',
        code: `---
import { TheaShowsPage } from 'astro-component-kit/templates/theater';
---

<TheaShowsPage />`,
      },
      {
        id: 'show', path: 'espectaculo/',
        name: { en: 'Show & seats', es: 'Espectáculo y butacas', ru: 'Спектакль и места' },
        description: { en: 'Show page with sessions and the interactive hall plan; reads ?show=id.', es: 'Ficha con funciones y el plano de sala interactivo; lee ?show=id.', ru: 'Страница спектакля с сеансами и интерактивным планом зала; читает ?show=id.' },
        file: 'src/pages/espectaculo.astro',
        code: `---
import { TheaShowPage } from 'astro-component-kit/templates/theater';
---

<TheaShowPage />`,
      },
      {
        id: 'cart', path: 'carrito/',
        name: { en: 'Cart', es: 'Carrito', ru: 'Корзина' },
        description: { en: 'Cart and checkout with a ten-minute seat hold, promo code and demo payment.', es: 'Carrito y pago con reserva de butacas de diez minutos, código promocional y pago de demostración.', ru: 'Корзина и оплата с удержанием мест десять минут, промокод и демо-оплата.' },
        file: 'src/pages/carrito.astro',
        code: `---
import { TheaCartPage } from 'astro-component-kit/templates/theater';
---

<TheaCartPage />`,
      },
      {
        id: 'sign-in', path: 'acceso/',
        name: { en: 'Customer sign in', es: 'Acceso clientes', ru: 'Вход для клиентов' },
        description: { en: 'Split sign-in with a large generated show poster and a customer quote.', es: 'Acceso a pantalla partida con un gran cartel generado y un testimonio.', ru: 'Вход на двух панелях с большой сгенерированной афишей и отзывом.' },
        file: 'src/pages/acceso.astro',
        code: `---
import { TheaSignInPage } from 'astro-component-kit/templates/theater';
---

<TheaSignInPage />`,
      },
      {
        id: 'dashboard', path: 'cuenta/',
        name: { en: 'Account home', es: 'Resumen', ru: 'Обзор' },
        description: { en: 'Next performance with a countdown, customer figures and suggestions.', es: 'Próxima función con cuenta atrás, cifras de la clienta y sugerencias.', ru: 'Ближайший спектакль с отсчётом, цифры клиента и предложения.' },
        file: 'src/pages/cuenta/index.astro',
        code: `---
import { TheaDashboardPage } from 'astro-component-kit/templates/theater';
---

<TheaDashboardPage />`,
      },
      {
        id: 'tickets', path: 'cuenta/entradas/',
        name: { en: 'Tickets', es: 'Mis entradas', ru: 'Билеты' },
        description: { en: 'The ticket wallet with perforated stubs and a code shown full screen.', es: 'La cartera de entradas con talones perforados y un código a pantalla completa.', ru: 'Кошелёк билетов с перфорированными корешками и кодом на весь экран.' },
        file: 'src/pages/cuenta/entradas.astro',
        code: `---
import { TheaTicketsPage } from 'astro-component-kit/templates/theater';
---

<TheaTicketsPage />`,
      },
      {
        id: 'orders', path: 'cuenta/pedidos/',
        name: { en: 'Orders', es: 'Pedidos', ru: 'Заказы' },
        description: { en: 'Orders with return and change actions, including those paid in this browser.', es: 'Pedidos con acciones de devolver y cambiar, incluidos los pagados en este navegador.', ru: 'Заказы с действиями возврата и замены, включая оплаченные в этом браузере.' },
        file: 'src/pages/cuenta/pedidos.astro',
        code: `---
import { TheaOrdersPage } from 'astro-component-kit/templates/theater';
---

<TheaOrdersPage />`,
      },
    ],
    newComponents: [
      'thea-hero', 'thea-marquee', 'thea-shows', 'thea-show-detail', 'thea-cart', 'thea-faq', 'thea-footer',
      'thea-poster', 'thea-seat-map', 'thea-tickets', 'thea-account-summary', 'thea-orders', 'thea-account-nav', 'thea-account-topbar', 'thea-account-heading', 'thea-sign-in',
    ],
    reusedComponents: [],
    storeConfigExample: `---
// Pass your own data and routes to every page (e.g. from your ticketing system)
import { TheaHomePage, theaData, theaRoutes } from 'astro-component-kit/templates/theater';

const data = {
  ...theaData,
  brand: { ...theaData.brand, name: 'Entradas Norte', fee: 2 },
  shows: await fetch('https://api.example.com/shows').then((r) => r.json()),
};

const routes = { ...theaRoutes, shows: '/programacion', show: '/butacas' };
---

<TheaHomePage data={data} routes={routes} />`,
  },
];

export function getTemplateBySlug(slug: string): TemplateDoc | undefined {
  return templates.find((t) => t.slug === slug);
}
