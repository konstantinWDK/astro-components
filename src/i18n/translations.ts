// src/i18n/translations.ts
import { DEFAULT_LOCALE, type Locale } from '../config/site';

export const ui = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.install': 'Installation',
    'nav.components': 'Components',
    'nav.sections': 'Sections',
    'nav.blog': 'Blog',
    'nav.github': 'GitHub',
    'nav.docs': 'Documentation',

    // Search & Sidebar
    'search.placeholder': 'Search 236+ components & sections...',
    'search.noResults': 'No components found',
    'sidebar.components': 'UI Components',
    'sidebar.sections': 'Page Sections',
    'sidebar.componentsCount': '219 Components',
    'sidebar.sectionsCount': '17 Sections',
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
  },
  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.install': 'Instalación',
    'nav.components': 'Componentes',
    'nav.sections': 'Secciones',
    'nav.blog': 'Blog',
    'nav.github': 'GitHub',
    'nav.docs': 'Documentación',

    // Search & Sidebar
    'search.placeholder': 'Buscar entre 236+ componentes y secciones...',
    'search.noResults': 'No se encontraron componentes',
    'sidebar.components': 'Componentes UI',
    'sidebar.sections': 'Secciones de Página',
    'sidebar.componentsCount': '219 Componentes',
    'sidebar.sectionsCount': '17 Secciones',
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
  },
  ru: {
    // Nav
    'nav.home': 'Главная',
    'nav.install': 'Установка',
    'nav.components': 'Компоненты',
    'nav.sections': 'Секции',
    'nav.blog': 'Блог',
    'nav.github': 'GitHub',
    'nav.docs': 'Документация',

    // Search & Sidebar
    'search.placeholder': 'Поиск среди 236+ компонентов и секций...',
    'search.noResults': 'Компоненты не найдены',
    'sidebar.components': 'UI Компоненты',
    'sidebar.sections': 'Секции Страниц',
    'sidebar.componentsCount': '219 Компонентов',
    'sidebar.sectionsCount': '17 Секций',
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

  if (targetLang === DEFAULT_LOCALE) {
    return cleanRoute === '' ? '/' : cleanRoute;
  }

  return `/${targetLang}${cleanRoute}`;
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
