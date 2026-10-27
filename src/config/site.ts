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
      title: 'Astro Components Kit — 236+ Free Production-Ready Astro UI Components',
      description: 'The ultimate open-source Astro 5 component library. 236+ copy-paste accessible, dark mode & glassmorphism UI components and complete landing page sections. Zero dependencies.',
      keywords: 'astro, astro 5, components, ui library, open source, astro components, glassmorphism, accessible, web development, frontend, design system',
    },
    es: {
      title: 'Astro Components Kit — 236+ Componentes UI Listos para Producción en Astro',
      description: 'La librería definitiva de componentes para Astro 5. Más de 236 componentes UI accesibles con modo oscuro y glassmorphism, listos para copiar y pegar, y secciones completas. Cero dependencias.',
      keywords: 'astro, astro 5, componentes, libreria ui, codigo abierto, componentes astro, glassmorphism, accesible, desarrollo web, frontend, sistema de diseño',
    },
    ru: {
      title: 'Astro Components Kit — 236+ Готовых UI Компонентов для Astro',
      description: 'Современная библиотека компонентов для Astro 5 с открытым исходным кодом. Более 236 доступных UI-компонентов с темной темой и глассморфизмом, готовых к копированию, и целые секции страниц. Без внешних зависимостей.',
      keywords: 'astro, astro 5, компоненты, ui библиотека, открытый исходный код, компоненты astro, глассморфизм, доступность, веб-разработка, фронтенд, дизайн-система',
    },
  },
};
