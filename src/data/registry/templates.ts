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
];

export function getTemplateBySlug(slug: string): TemplateDoc | undefined {
  return templates.find((t) => t.slug === slug);
}
