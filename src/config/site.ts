// src/config/site.ts
/**
 * Global Site, SEO, Analytics & i18n Configuration
 * 
 * Supports environment variables:
 * - PUBLIC_GTM_ID: Google Tag Manager container ID (e.g., GTM-XXXXXXX)
 * - PUBLIC_GA_ID: Google Analytics 4 Measurement ID (e.g., G-XXXXXXXXXX)
 * - PUBLIC_GSC_VERIFICATION: Google Search Console verification meta content
 */

export type Locale = 'en' | 'es' | 'ru';

export interface LocaleConfig {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
  htmlLang: string;
  ogLocale: string;
  dir: 'ltr' | 'rtl';
}

export const LOCALES: Record<Locale, LocaleConfig> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    htmlLang: 'en',
    ogLocale: 'en_US',
    dir: 'ltr',
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    htmlLang: 'es',
    ogLocale: 'es_ES',
    dir: 'ltr',
  },
  ru: {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    htmlLang: 'ru',
    ogLocale: 'ru_RU',
    dir: 'ltr',
  },
};

export const DEFAULT_LOCALE: Locale = 'en';
export const SUPPORTED_LOCALES: Locale[] = ['en', 'es', 'ru'];

export const siteConfig = {
  name: 'Astro Components Kit',
  shortName: 'AstroKit',
  url: 'https://astrocomponents.dev',
  author: 'Astro Components Kit',
  github: 'https://github.com/konstantinWDK/astro-components',
  ogImage: '/og-image.png',
  
  // Google Services (configurable via environment variables)
  googleTagManagerId: import.meta.env.PUBLIC_GTM_ID || '',
  googleAnalyticsId: import.meta.env.PUBLIC_GA_ID || '',
  googleSearchConsoleVerification: import.meta.env.PUBLIC_GSC_VERIFICATION || '',

  // Localized SEO Defaults
  seo: {
    en: {
      title: 'Astro Components Kit — 320+ Free Production-Ready Astro UI Components & Templates',
      description: 'The ultimate free open-source Astro 5 component library. 320+ free, accessible, dark & light mode UI components, SVG charts, complete landing sections, and production templates. Zero dependencies. MIT licensed.',
      keywords: 'astro, astro 5, components, free components, templates, ecommerce, saas dashboard, ui library, open source, astro components, glassmorphism, accessible, web development, frontend, design system',
    },
    es: {
      title: 'Astro Components Kit — 320+ Componentes UI y Plantillas Gratis para Astro',
      description: 'La librería open-source definitiva para Astro 5. Más de 320 componentes UI 100% gratuitos y accesibles, con modo claro y oscuro, gráficos SVG, plantillas completas de producción e-commerce y SaaS. Cero dependencias. Licencia MIT.',
      keywords: 'astro, astro 5, componentes gratis, plantillas, ecommerce, saas, dashboard, libreria ui, codigo abierto, componentes astro, glassmorphism, accesible, desarrollo web, frontend, sistema de diseño',
    },
    ru: {
      title: 'Astro Components Kit — 320+ Бесплатных UI Компонентов и Шаблонов для Astro',
      description: 'Современная бесплатная библиотека компонентов для Astro 5 с открытым исходным кодом. Более 320 бесплатных и доступных UI-компонентов, SVG-графиков и готовых шаблонов интернет-магазинов и SaaS без зависимостей. Лицензия MIT.',
      keywords: 'astro, astro 5, компоненты, бесплатные компоненты, шаблоны, интернет-магазин, дашборд, ui библиотека, открытый исходный код, компоненты astro, глассморфизм, доступность, веб-разработка, фронтенд, дизайн-система',
    },
  },
};
