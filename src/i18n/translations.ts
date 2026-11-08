// src/i18n/translations.ts
import { DEFAULT_LOCALE, type Locale } from '../config/site';

export const ui = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.install': 'Installation',
    'nav.components': 'Components',
    'nav.sections': 'Sections',
    'nav.blog': 'Notes',
    'nav.notes': 'Notes',
    'templates.newSections': 'New sections',
    'templates.newSectionsDesc': 'Full-width blocks of this template, available in Sections. Open any of them to see it on its own page with code.',
    'templates.viewSection': 'View section',
    'templates.viewComponent': 'View component',
    'templates.kindSection': 'Section',
    'templates.kindComponent': 'Component',
    'sidebar.navLabel': 'Documentation',
    'sidebar.getStarted': 'Get started',
    'sidebar.search': 'Search {n} components',
    'sidebar.results': '{n} results',
    'sidebar.noResultsFor': 'Nothing matches',
    'sidebar.clear': 'Clear search',
    'sidebar.viewAll': 'View all',
    'sidebar.new': 'New',
    'sidebar.pages': 'pages',
    'nav.templates': 'Templates',
    'nav.mcp': 'MCP',
    'templates.badge': 'Full templates',
    'templates.title': 'Astro Templates',
    'templates.seoTitle': 'Free Astro Templates — complete multi-page sites',
    'templates.desc': 'Complete, multi-page sites built only from library components. Preview every page live, then import the whole template or just the pieces you need.',
    'templates.pagesCount': 'pages',
    'templates.componentsCount': 'components',
    'templates.view': 'View template',
    'templates.livePreview': 'Live preview',
    'templates.openPreview': 'Open live preview',
    'templates.source': 'Source on GitHub',
    'templates.soon': 'More templates are on the way: SaaS landing, dashboard, blog and portfolio.',
    'templates.highlights': 'What is included',
    'templates.pages': 'Pages',
    'templates.pagesDesc': 'Every page is a real, interactive preview: links, forms and state work across pages.',
    'templates.openPage': 'Open page',
    'templates.install': 'Install & use',
    'templates.step1': 'Install the package',
    'templates.step2': 'Create one Astro page per template page',
    'templates.step3': 'Use your own catalogue, currency and routes',
    'templates.step3Desc': 'Spread the demo store and replace what you need. Products accept a real image or one of 16 built-in illustrations.',
    'templates.newComponents': 'New e-commerce components',
    'templates.newComponentsDesc': 'Built for this template and available on their own in the library.',
    'templates.reused': 'Reused library components',
    'templates.reusedDesc': 'Existing components the template is assembled from.',
    'nav.github': 'GitHub',
    'nav.docs': 'Documentation',

    // Search & Sidebar
    'search.placeholder': 'Search 320+ components, sections & templates...',
    'search.noResults': 'No components found',
    'sidebar.components': 'UI Components',
    'sidebar.sections': 'Page Sections',
    'sidebar.componentsCount': '252 Components',
    'sidebar.sectionsCount': '41 Sections',
    'sidebar.explore': 'Explore',
    'sidebar.onThisPage': 'On this page',

    // Doc Page
    'doc.livePreview': 'Live Preview',
    'doc.usage': 'Usage',
    'doc.usageDesc': 'Copy and paste this code into your Astro page:',
    'doc.manualInstall': 'Manual Installation',
    'doc.manualInstallDesc': 'If you are not using the npm package, create a new file and paste the following code:',
    'doc.quickInfo': 'Quick Info',
    'doc.category': 'Category',
    'doc.filename': 'Filename',
    'doc.dependencies': 'Dependencies',
    'doc.depsNone': 'None — pure Astro + CSS',
    'doc.tags': 'Tags',
    'doc.copy': 'Copy',
    'doc.copied': 'Copied!',
    'doc.previous': 'Previous',
    'doc.next': 'Next',
    'doc.backToCatalog': 'Back to catalog',
    'doc.viewSection': 'View Section',
    'doc.filterAll': 'All',

    // Hero & Common
    'hero.badge': 'Astro 5 Ready • Zero Dependencies',
    'hero.copyInstall': 'Copy install command',
    'lang.select': 'Language',
    // A11y, install steps, GitHub prompt
    'a11y.breadcrumb': "Breadcrumb",
    'a11y.selectLanguage': "Select language",
    'a11y.menu': "Toggle site menu",
    'a11y.postNav': "Post navigation",
    'a11y.filterSections': "Filter sections by category",
    'sidebar.exploreLabel': "Explore components",
    'install.step': "Step",
    'install.checkWith': "Check with",
    'install.toc1': "Prerequisites",
    'install.toc2': "Install the library",
    'install.toc3': "Peer dependencies",
    'install.toc4': "Import and use",
    'install.toc5': "Build your first page",
    'install.toc6': "Quick reference",
    'gh.badge': "Open Source · MIT",
    'gh.title': "Support on GitHub",
    'gh.desc': "Every GitHub star = one new component. If the kit saves you time, a star helps us keep shipping more! ⭐",
    'gh.star': "Star on GitHub",
    'gh.later': "Maybe later",
    'gh.close': "Close star prompt",

    // Sections page & relations
    'sections.partOfTemplate': 'Part of a complete template',
    'sections.partOfTemplateDesc': 'This section was crafted as a core block for the following template. You can preview the full interactive multi-page experience or explore all related components.',
    'sections.viewTemplate': 'View full template',
    'sections.moreSections': 'More Sections to Explore',
    'sections.moreSectionsDesc': 'Discover other full-width landing blocks and production-ready sections from our library.',
    'sections.exploreAll': 'All sections',

    // Footer
    'footer.builtWith': 'Built with ❤️ for the Astro community',
    'footer.developedBy': 'Developed by',
    'footer.license': 'MIT License · Free and open-source',
    'footer.tagline': 'Accessible, dark-mode-first components, sections, and full templates for Astro.',
    'footer.navTitle': 'Navigation',
    'footer.communityTitle': 'Community',
    'footer.starOnGh': 'Star on GitHub',
  },
  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.install': 'Instalación',
    'nav.components': 'Componentes',
    'nav.sections': 'Secciones',
    'nav.blog': 'Notas',
    'nav.notes': 'Notas',
    'templates.newSections': 'Secciones nuevas',
    'templates.newSectionsDesc': 'Bloques a todo el ancho de esta plantilla, disponibles en Secciones. Abre cualquiera para verla en su página con el código.',
    'templates.viewSection': 'Ver sección',
    'templates.viewComponent': 'Ver componente',
    'templates.kindSection': 'Sección',
    'templates.kindComponent': 'Componente',
    'sidebar.navLabel': 'Documentación',
    'sidebar.getStarted': 'Primeros pasos',
    'sidebar.search': 'Buscar en {n} piezas',
    'sidebar.results': '{n} resultados',
    'sidebar.noResultsFor': 'No hay resultados para',
    'sidebar.clear': 'Borrar búsqueda',
    'sidebar.viewAll': 'Ver todas',
    'sidebar.new': 'Nuevo',
    'sidebar.pages': 'páginas',
    'nav.templates': 'Plantillas',
    'nav.mcp': 'MCP',
    'templates.badge': 'Plantillas completas',
    'templates.title': 'Plantillas para Astro',
    'templates.seoTitle': 'Plantillas Astro gratis — sitios completos multipágina',
    'templates.desc': 'Sitios completos de varias páginas construidos solo con componentes de la librería. Mira cada página en vivo e importa la plantilla entera o solo las piezas que necesites.',
    'templates.pagesCount': 'páginas',
    'templates.componentsCount': 'componentes',
    'templates.view': 'Ver plantilla',
    'templates.livePreview': 'Vista previa en vivo',
    'templates.openPreview': 'Abrir demo en vivo',
    'templates.source': 'Código en GitHub',
    'templates.soon': 'Vienen más plantillas: landing SaaS, dashboard, blog y portfolio.',
    'templates.highlights': 'Qué incluye',
    'templates.pages': 'Páginas',
    'templates.pagesDesc': 'Cada página es una vista previa real e interactiva: enlaces, formularios y estado funcionan entre páginas.',
    'templates.openPage': 'Abrir página',
    'templates.install': 'Instalar y usar',
    'templates.step1': 'Instala el paquete',
    'templates.step2': 'Crea una página de Astro por cada página de la plantilla',
    'templates.step3': 'Usa tu propio catálogo, moneda y rutas',
    'templates.step3Desc': 'Parte de la tienda demo y reemplaza lo que necesites. Los productos aceptan una imagen real o una de las 16 ilustraciones incluidas.',
    'templates.newComponents': 'Componentes e-commerce nuevos',
    'templates.newComponentsDesc': 'Creados para esta plantilla y disponibles por separado en la librería.',
    'templates.reused': 'Componentes de la librería reutilizados',
    'templates.reusedDesc': 'Componentes existentes con los que se monta la plantilla.',
    'nav.github': 'GitHub',
    'nav.docs': 'Documentación',

    // Search & Sidebar
    'search.placeholder': 'Buscar entre 320+ componentes, secciones y plantillas...',
    'search.noResults': 'No se encontraron componentes',
    'sidebar.components': 'Componentes UI',
    'sidebar.sections': 'Secciones de Página',
    'sidebar.componentsCount': '252 Componentes',
    'sidebar.sectionsCount': '41 Secciones',
    'sidebar.explore': 'Explorar',
    'sidebar.onThisPage': 'En esta página',

    // Doc Page
    'doc.livePreview': 'Vista Previa en Vivo',
    'doc.usage': 'Uso',
    'doc.usageDesc': 'Copia y pega este código directamente en tu página de Astro:',
    'doc.manualInstall': 'Instalación Manual',
    'doc.manualInstallDesc': 'Si no estás usando el paquete npm, crea un archivo nuevo y pega el siguiente código:',
    'doc.quickInfo': 'Información Rápida',
    'doc.category': 'Categoría',
    'doc.filename': 'Nombre de archivo',
    'doc.dependencies': 'Dependencias',
    'doc.depsNone': 'Ninguna — Astro nativo + CSS puro',
    'doc.tags': 'Etiquetas',
    'doc.copy': 'Copiar',
    'doc.copied': '¡Copiado!',
    'doc.previous': 'Anterior',
    'doc.next': 'Siguiente',
    'doc.backToCatalog': 'Volver al catálogo',
    'doc.viewSection': 'Ver Sección',
    'doc.filterAll': 'Todos',

    // Hero & Common
    'hero.badge': 'Listo para Astro 5 • Cero Dependencias',
    'hero.copyInstall': 'Copiar comando de instalación',
    'lang.select': 'Idioma',
    // A11y, install steps, GitHub prompt
    'a11y.breadcrumb': "Ruta de navegación",
    'a11y.selectLanguage': "Seleccionar idioma",
    'a11y.menu': "Abrir o cerrar el menú",
    'a11y.postNav': "Navegación entre notas",
    'a11y.filterSections': "Filtrar secciones por categoría",
    'sidebar.exploreLabel': "Explorar componentes",
    'install.step': "Paso",
    'install.checkWith': "Compruébalo con",
    'install.toc1': "Requisitos previos",
    'install.toc2': "Instalar la librería",
    'install.toc3': "Dependencias peer",
    'install.toc4': "Importar y usar",
    'install.toc5': "Crea tu primera página",
    'install.toc6': "Referencia rápida",
    'gh.badge': "Código abierto · MIT",
    'gh.title': "Apóyanos en GitHub",
    'gh.desc': "Cada estrella en GitHub = un componente nuevo. Si el kit te ahorra tiempo, una estrella nos ayuda a seguir publicando más. ⭐",
    'gh.star': "Dar una estrella",
    'gh.later': "Quizás luego",
    'gh.close': "Cerrar aviso de GitHub",

    // Sections page & relations
    'sections.partOfTemplate': 'Forma parte de una plantilla',
    'sections.partOfTemplateDesc': 'Esta sección fue diseñada como un bloque clave para la siguiente plantilla. Puedes ver la experiencia multipágina interactiva completa o explorar todos sus componentes.',
    'sections.viewTemplate': 'Ver plantilla completa',
    'sections.moreSections': 'Más secciones para explorar',
    'sections.moreSectionsDesc': 'Descubre otros bloques para landing pages y secciones listas para producción de nuestra librería.',
    'sections.exploreAll': 'Todas las secciones',

    // Footer
    'footer.builtWith': 'Creado con ❤️ para la comunidad de Astro',
    'footer.developedBy': 'Desarrollado por',
    'footer.license': 'Licencia MIT · Libre y de código abierto',
    'footer.tagline': 'Componentes, secciones y plantillas completas para Astro, accesibles y dark-mode nativo.',
    'footer.navTitle': 'Navegación',
    'footer.communityTitle': 'Comunidad',
    'footer.starOnGh': 'Danos una estrella en GitHub',
  },
  ru: {
    // Nav
    'nav.home': 'Главная',
    'nav.install': 'Установка',
    'nav.components': 'Компоненты',
    'nav.sections': 'Секции',
    'nav.blog': 'Заметки',
    'nav.notes': 'Заметки',
    'templates.newSections': 'Новые секции',
    'templates.newSectionsDesc': 'Полноширинные блоки шаблона из раздела «Секции». Откройте любую, чтобы увидеть её отдельно вместе с кодом.',
    'templates.viewSection': 'Открыть секцию',
    'templates.viewComponent': 'Открыть компонент',
    'templates.kindSection': 'Секция',
    'templates.kindComponent': 'Компонент',
    'sidebar.navLabel': 'Документация',
    'sidebar.getStarted': 'Начало работы',
    'sidebar.search': 'Поиск по {n} блокам',
    'sidebar.results': 'Найдено: {n}',
    'sidebar.noResultsFor': 'Ничего не найдено по запросу',
    'sidebar.clear': 'Очистить поиск',
    'sidebar.viewAll': 'Все',
    'sidebar.new': 'Новое',
    'sidebar.pages': 'стр.',
    'nav.templates': 'Шаблоны',
    'nav.mcp': 'MCP',
    'templates.badge': 'Готовые шаблоны',
    'templates.title': 'Шаблоны для Astro',
    'templates.seoTitle': 'Бесплатные шаблоны Astro — готовые многостраничные сайты',
    'templates.desc': 'Полноценные многостраничные сайты, собранные только из компонентов библиотеки. Посмотрите каждую страницу вживую и импортируйте весь шаблон или нужные части.',
    'templates.pagesCount': 'страниц',
    'templates.componentsCount': 'компонентов',
    'templates.view': 'Открыть шаблон',
    'templates.livePreview': 'Живой просмотр',
    'templates.openPreview': 'Открыть демо',
    'templates.source': 'Код на GitHub',
    'templates.soon': 'Скоро новые шаблоны: SaaS-лендинг, дашборд, блог и портфолио.',
    'templates.highlights': 'Что внутри',
    'templates.pages': 'Страницы',
    'templates.pagesDesc': 'Каждая страница — настоящий интерактивный предпросмотр: ссылки, формы и состояние работают между страницами.',
    'templates.openPage': 'Открыть страницу',
    'templates.install': 'Установка и использование',
    'templates.step1': 'Установите пакет',
    'templates.step2': 'Создайте по странице Astro для каждой страницы шаблона',
    'templates.step3': 'Подключите свой каталог, валюту и маршруты',
    'templates.step3Desc': 'Возьмите демо-магазин за основу и замените нужное. Товары принимают реальное фото или одну из 16 встроенных иллюстраций.',
    'templates.newComponents': 'Новые e-commerce компоненты',
    'templates.newComponentsDesc': 'Созданы для этого шаблона и доступны в библиотеке по отдельности.',
    'templates.reused': 'Повторно используемые компоненты',
    'templates.reusedDesc': 'Существующие компоненты, из которых собран шаблон.',
    'nav.github': 'GitHub',
    'nav.docs': 'Документация',

    // Search & Sidebar
    'search.placeholder': 'Поиск среди 320+ компонентов, секций и шаблонов...',
    'search.noResults': 'Компоненты не найдены',
    'sidebar.components': 'UI Компоненты',
    'sidebar.sections': 'Секции Страниц',
    'sidebar.componentsCount': '252 Компонентов',
    'sidebar.sectionsCount': '41 Секция',
    'sidebar.explore': 'Обзор',
    'sidebar.onThisPage': 'На этой странице',

    // Doc Page
    'doc.livePreview': 'Живое превью',
    'doc.usage': 'Использование',
    'doc.usageDesc': 'Скопируйте и вставьте этот код на вашу страницу Astro:',
    'doc.manualInstall': 'Ручная установка',
    'doc.manualInstallDesc': 'Если вы не используете пакет npm, создайте файл и вставьте следующий код:',
    'doc.quickInfo': 'Краткая информация',
    'doc.category': 'Категория',
    'doc.filename': 'Имя файла',
    'doc.dependencies': 'Зависимости',
    'doc.depsNone': 'Нет — чистый Astro + CSS',
    'doc.tags': 'Теги',
    'doc.copy': 'Копировать',
    'doc.copied': 'Скопировано!',
    'doc.previous': 'Предыдущий',
    'doc.next': 'Следующий',
    'doc.backToCatalog': 'Вернуться в каталог',
    'doc.viewSection': 'Смотреть секцию',
    'doc.filterAll': 'Все',

    // Hero & Common
    'hero.badge': 'Готов к Astro 5 • Без зависимостей',
    'hero.copyInstall': 'Скопировать команду установки',
    'lang.select': 'Язык',
    // A11y, install steps, GitHub prompt
    'a11y.breadcrumb': "Навигационная цепочка",
    'a11y.selectLanguage': "Выбрать язык",
    'a11y.menu': "Открыть или закрыть меню",
    'a11y.postNav': "Навигация по заметкам",
    'a11y.filterSections': "Фильтр секций по категориям",
    'sidebar.exploreLabel': "Обзор компонентов",
    'install.step': "Шаг",
    'install.checkWith': "Проверьте командой",
    'install.toc1': "Требования",
    'install.toc2': "Установка библиотеки",
    'install.toc3': "Peer-зависимости",
    'install.toc4': "Импорт и использование",
    'install.toc5': "Первая страница",
    'install.toc6': "Краткая справка",
    'gh.badge': "Открытый код · MIT",
    'gh.title': "Поддержите на GitHub",
    'gh.desc': "Каждая звезда на GitHub = новый компонент. Если набор экономит вам время, звезда помогает нам выпускать больше! ⭐",
    'gh.star': "Поставить звезду",
    'gh.later': "Может, позже",
    'gh.close': "Закрыть подсказку GitHub",

    // Sections page & relations
    'sections.partOfTemplate': 'Входит в состав шаблона',
    'sections.partOfTemplateDesc': 'Эта секция разработана как ключевой блок для следующего шаблона. Вы можете открыть полный многостраничный интерактивный сайт или изучить все связанные компоненты.',
    'sections.viewTemplate': 'Открыть весь шаблон',
    'sections.moreSections': 'Ещё секции для изучения',
    'sections.moreSectionsDesc': 'Откройте для себя другие готовые блоки для лендингов и страниц из нашей библиотеки.',
    'sections.exploreAll': 'Все секции',

    // Footer
    'footer.builtWith': 'Создано с ❤️ для сообщества Astro',
    'footer.developedBy': 'Разработано',
    'footer.license': 'Лицензия MIT · Свободный и открытый исходный код',
    'footer.tagline': 'Доступные dark-mode компоненты, секции и готовые шаблоны для Astro.',
    'footer.navTitle': 'Навигация',
    'footer.communityTitle': 'Сообщество',
    'footer.starOnGh': 'Поставить звезду на GitHub',
  },
} as const;

export type TranslationKey = keyof (typeof ui)['en'];

/**
 * Extract language from URL pathname.
 * Root default is 'en', '/es/...' is 'es', '/ru/...' is 'ru'.
 */
export function getLangFromUrl(url: URL | string): Locale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];

  if (first === 'es' || first === 'ru') {
    return first as Locale;
  }
  return DEFAULT_LOCALE;
}

/**
 * Hook to get translation function for given locale
 */
export function useTranslations(lang: Locale) {
  return function t(key: TranslationKey): string {
    const dict = ui[lang] || ui[DEFAULT_LOCALE];
    return (dict as any)[key] || (ui[DEFAULT_LOCALE] as any)[key] || key;
  };
}

/**
 * Remove locale prefix from pathname to get clean canonical route
 */
export function cleanPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] === 'es' || segments[0] === 'ru') {
    return '/' + segments.slice(1).join('/');
  }
  return pathname.startsWith('/') ? pathname : '/' + pathname;
}

/**
 * Generates localized path for any route given a target locale.
 * Default locale 'en' has no prefix.
 */
export function getLocalizedPath(pathname: string, targetLang: Locale): string {
  const rawPath = cleanPath(pathname).replace(/\/$/, '');
  const cleanRoute = rawPath === '' ? '' : rawPath;
  const localized = targetLang === DEFAULT_LOCALE
    ? (cleanRoute === '' ? '/' : cleanRoute)
    : `/${targetLang}${cleanRoute}`;
  return withTrailingSlash(localized);
}

/**
 * Pages are built as `<route>/index.html`, so the canonical URL ends with `/`.
 * Linking without it costs a redirect per click/crawl and breaks hreflang ↔ canonical matching.
 * Files (last segment with a dot), hashes and query strings are left untouched.
 */
function withTrailingSlash(path: string): string {
  if (path.endsWith('/') || /[?#]/.test(path)) return path;
  const last = path.split('/').pop() ?? '';
  return last.includes('.') ? path : `${path}/`;
}

/**
 * Generates alternate hreflang links for SEO and Search Console
 */
export function getAlternateHreflangs(pathname: string, siteUrl = 'https://astrocomponents.dev') {
  const basePath = cleanPath(pathname);
  
  return [
    { lang: 'en', href: `${siteUrl}${getLocalizedPath(basePath, 'en')}` },
    { lang: 'es', href: `${siteUrl}${getLocalizedPath(basePath, 'es')}` },
    { lang: 'ru', href: `${siteUrl}${getLocalizedPath(basePath, 'ru')}` },
    { lang: 'x-default', href: `${siteUrl}${getLocalizedPath(basePath, 'en')}` },
  ];
}
