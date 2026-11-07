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
];

export function getTemplateBySlug(slug: string): TemplateDoc | undefined {
  return templates.find((t) => t.slug === slug);
}
