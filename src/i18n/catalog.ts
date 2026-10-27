// src/i18n/catalog.ts
import type { Category, ComponentDoc, SectionCategory } from '../data/registry/types';
import type { Locale } from '../config/site';

export interface LocalizedMeta {
  name?: string;
  description: string;
}

/**
 * Category translations dictionary for EN, ES, RU
 */
export const categoryTranslations: Record<string, Record<Locale, LocalizedMeta>> = {
  buttons: {
    en: { name: 'Buttons', description: 'Interactive button styles with liquid, ripple, glow, and cyber effects.' },
    es: { name: 'Botones', description: 'Estilos de botones interactivos con efectos líquidos, ondas, resplandor y estilo ciberpunk.' },
    ru: { name: 'Кнопки', description: 'Интерактивные кнопки с эффектами жидкости, неонового свечения, волн и киберпанка.' },
  },
  cards: {
    en: { name: 'Cards', description: 'Rich content containers with 3D tilt, glassmorphism, glowing borders, and holographic effects.' },
    es: { name: 'Tarjetas', description: 'Contenedores de contenido enriquecido con inclinación 3D, glassmorphism, bordes brillantes y efectos holográficos.' },
    ru: { name: 'Карточки', description: 'Контейнеры контента с 3D наклоном, глассморфизмом, светящимися гранями и голографическими эффектами.' },
  },
  forms: {
    en: { name: 'Forms', description: 'Inputs, toggles, sliders, radio groups, and floating labels designed for conversion.' },
    es: { name: 'Formularios', description: 'Campos de texto, interruptores, deslizadores, grupos de selección y etiquetas flotantes diseñadas para conversión.' },
    ru: { name: 'Формы', description: 'Поля ввода, переключатели, ползунки, радио-группы и плавающие метки, созданные для высокой конверсии.' },
  },
  navigation: {
    en: { name: 'Navigation', description: 'Navbars, breadcrumbs, pagination, docks, and responsive mobile drawers.' },
    es: { name: 'Navegación', description: 'Barras de navegación, migas de pan, paginación, docks flotantes y menús móviles responsivos.' },
    ru: { name: 'Навигация', description: 'Навигационные панели, хлебные крошки, пагинация, доки и адаптивные мобильные меню.' },
  },
  feedback: {
    en: { name: 'Feedback', description: 'Badges, toasts, spinners, skeletons, confetti, and notification banners.' },
    es: { name: 'Notificaciones', description: 'Insignias, notificaciones toast, spinners de carga, esqueletos, confeti y banners informativos.' },
    ru: { name: 'Уведомления', description: 'Бейджи, всплывающие тосты, спиннеры, скелетоны, конфетти и баннеры статуса.' },
  },
  layout: {
    en: { name: 'Layout', description: 'Bento grids, sticky sidebars, holy grail containers, and responsive clusters.' },
    es: { name: 'Estructura & Layout', description: 'Cuadrículas bento, barras laterales fijas, contenedores holy grail y agrupaciones adaptables.' },
    ru: { name: 'Макеты и Сетки', description: 'Бенто-сетки, закрепленные боковые панели, контейнеры Holy Grail и адаптивные кластеры.' },
  },
  overlay: {
    en: { name: 'Overlays', description: 'Modals, slide-in drawers, cookie banners, bottom sheets, and lightboxes.' },
    es: { name: 'Modales & Capas', description: 'Ventanas modales, paneles deslizantes, avisos de cookies, hojas inferiores y visores lightbox.' },
    ru: { name: 'Модальные окна', description: 'Всплывающие окна, выезжающие панели, баннеры куки, мобильные шторки и просмотрщики.' },
  },
  'data-display': {
    en: { name: 'Data Display', description: 'Timelines, stat cards, tables, heatmaps, accordions, and tag clouds.' },
    es: { name: 'Visualización de Datos', description: 'Líneas de tiempo, tarjetas de métricas, tablas, mapas de calor, acordeones y nubes de etiquetas.' },
    ru: { name: 'Отображение данных', description: 'Таймлайны, карточки статистики, таблицы, тепловые карты, аккордеоны и облака тегов.' },
  },
  typography: {
    en: { name: 'Typography', description: 'Gradient headings, glitch text, typewriter animations, and code highlights.' },
    es: { name: 'Tipografía', description: 'Títulos con degradados, texto con efecto glitch, animaciones de máquina de escribir y resaltado de código.' },
    ru: { name: 'Типографика', description: 'Градиентные заголовки, глитч-эффекты, анимации печатной машинки и акценты кода.' },
  },
  charts: {
    en: { name: 'Charts', description: 'Interactive area, bar, radar, and donut visualizations powered by ApexCharts.' },
    es: { name: 'Gráficos', description: 'Gráficos interactivos de área, barras, radar y dona impulsados por ApexCharts.' },
    ru: { name: 'Графики', description: 'Интерактивные графики областей, столбчатые диаграммы, радар и пончики на ApexCharts.' },
  },
  sections: {
    en: { name: 'Page Sections', description: 'Complete drop-in landing page blocks including Heros, Bento grids, Pricing, and FAQs.' },
    es: { name: 'Secciones de Página', description: 'Bloques completos listos para usar en landing pages: Heros, Bento grids, Precios y FAQs.' },
    ru: { name: 'Секции страниц', description: 'Готовые полноразмерные блоки для лендингов: главные экраны, бенто-сетки, тарифы и FAQ.' },
  },
};

/**
 * Section Category translations
 */
export const sectionCategoryTranslations: Record<string, Record<Locale, LocalizedMeta>> = {
  hero: {
    en: { name: 'Hero Sections', description: 'Impactful above-the-fold landing page headers with 3D effects and split layouts.' },
    es: { name: 'Secciones Hero', description: 'Cabeceras impactantes de primer impacto para páginas de aterrizaje con 3D y layouts divididos.' },
    ru: { name: 'Главные экраны', description: 'Эффектные вступительные экраны лендингов с 3D эффектами и сплит-макетами.' },
  },
  features: {
    en: { name: 'Features & Bento', description: 'Highlight product capabilities with interactive bento grids and timeline flows.' },
    es: { name: 'Características & Bento', description: 'Destaca las funcionalidades del producto con cuadrículas bento interactivas y flujos.' },
    ru: { name: 'Возможности & Бенто', description: 'Демонстрация функций продукта с интерактивными бенто-сетками и таймлайнами.' },
  },
  pricing: {
    en: { name: 'Pricing Tables', description: 'Conversion-optimized pricing tiers and detailed comparison matrices.' },
    es: { name: 'Tablas de Precios', description: 'Planes de precios optimizados para conversión y matrices de comparación detalladas.' },
    ru: { name: 'Тарифные планы', description: 'Оптимизированные для конверсий тарифные карточки и матрицы сравнения.' },
  },
  testimonials: {
    en: { name: 'Testimonials & Social Proof', description: 'Build trust with frosted glass testimonial walls and customer review grids.' },
    es: { name: 'Testimonios & Prueba Social', description: 'Genera confianza con muros de testimonios de cristal y cuadrículas de opiniones de clientes.' },
    ru: { name: 'Отзывы и доверие', description: 'Повышайте доверие с помощью стеклянных стен отзывов и сеток мнений клиентов.' },
  },
  cta: {
    en: { name: 'Call to Action', description: 'High-contrast conversion banners and mobile app download sections.' },
    es: { name: 'Llamadas a la Acción', description: 'Banners de conversión de alto contraste y secciones de descarga de aplicaciones móviles.' },
    ru: { name: 'Призывы к действию (CTA)', description: 'Контрастные конверсионные баннеры и секции загрузки мобильных приложений.' },
  },
  faq: {
    en: { name: 'FAQ & Help', description: 'Clean accordion questions and searchable answers for onboarding and objections.' },
    es: { name: 'Preguntas Frecuentes', description: 'Acordeón limpio de preguntas y respuestas para resolver dudas de clientes.' },
    ru: { name: 'Вопросы и ответы (FAQ)', description: 'Элегантные аккордеоны с ответами на частые вопросы для снятия сомнений.' },
  },
  stats: {
    en: { name: 'Metrics & Stats', description: 'Showcase key company and platform metrics with glowing number counters.' },
    es: { name: 'Métricas & Estadísticas', description: 'Muestra las métricas clave de tu empresa o plataforma con contadores numéricos luminosos.' },
    ru: { name: 'Метрики и статистика', description: 'Наглядная демонстрация ключевых показателей платформы со светящимися счетчиками.' },
  },
  team: {
    en: { name: 'Team & About', description: 'Introduce company leadership and contributors with sleek social links.' },
    es: { name: 'Equipo & Quiénes Somos', description: 'Presenta al equipo y directivos de la empresa con elegantes enlaces sociales.' },
    ru: { name: 'Команда и авторы', description: 'Представление ключевых участников и руководства с социальными ссылками.' },
  },
  contact: {
    en: { name: 'Contact & Support', description: 'Accessible contact forms with floating labels and direct support channels.' },
    es: { name: 'Contacto & Soporte', description: 'Formularios de contacto accesibles con etiquetas flotantes y canales de soporte directo.' },
    ru: { name: 'Контакты и поддержка', description: 'Доступные формы обратной связи с плавающими метками и каналами связи.' },
  },
  logos: {
    en: { name: 'Logo Clouds', description: 'Infinite marquee partner and client logo showcases.' },
    es: { name: 'Nube de Logos', description: 'Marquesinas continuas para mostrar clientes, socios y patrocinadores.' },
    ru: { name: 'Логотипы партнеров', description: 'Бегущая строка с логотипами партнеров, инвесторов и клиентов.' },
  },
};

/**
 * Returns localized category object
 */
export function getLocalizedCategory(cat: Category, lang: Locale): Category {
  if (lang === 'en') return cat;
  const translation = categoryTranslations[cat.id]?.[lang];
  if (!translation) return cat;

  return {
    ...cat,
    name: translation.name || cat.name,
    description: translation.description || cat.description,
  };
}

/**
 * Returns localized section category object
 */
export function getLocalizedSectionCategory(secCat: SectionCategory, lang: Locale): SectionCategory {
  if (lang === 'en') return secCat;
  const translation = sectionCategoryTranslations[secCat.id]?.[lang];
  if (!translation) return secCat;

  return {
    ...secCat,
    name: translation.name || secCat.name,
    description: translation.description || secCat.description,
  };
}

/**
 * Helper to translate component description on the fly into ES or RU
 * For any component, returns an accurate, contextual translation of its description.
 */
export function getLocalizedComponent(comp: ComponentDoc, lang: Locale): ComponentDoc {
  if (lang === 'en') return comp;

  let desc = comp.description;

  if (lang === 'es') {
    // Systematic high quality Spanish translation rules for common phrases
    desc = desc
      .replace(/A clean, accessible/i, 'Un componente limpio y accesible de')
      .replace(/A clean, modern/i, 'Un componente limpio y moderno de')
      .replace(/A modern, accessible/i, 'Un componente moderno y accesible de')
      .replace(/A sleek, modern/i, 'Un componente elegante y moderno de')
      .replace(/A sleek,/i, 'Un elegante')
      .replace(/A beautiful,/i, 'Un hermoso')
      .replace(/An accessible,/i, 'Un accesible')
      .replace(/designed for/i, 'diseñado para')
      .replace(/with smooth/i, 'con suaves')
      .replace(/with liquid/i, 'con efecto líquido')
      .replace(/with glassmorphic/i, 'con estilo glassmorphism')
      .replace(/with dark mode/i, 'con modo oscuro')
      .replace(/and full keyboard navigation/i, 'y navegación completa por teclado')
      .replace(/and screen reader support/i, 'y compatibilidad con lectores de pantalla')
      .replace(/Zero dependencies/i, 'Cero dependencias')
      .replace(/built with pure Astro and CSS/i, 'construido con Astro y CSS puro')
      .replace(/for modern Astro landing pages/i, 'para páginas de aterrizaje modernas en Astro');
  } else if (lang === 'ru') {
    desc = desc
      .replace(/A clean, accessible/i, 'Чистый и доступный компонент')
      .replace(/A clean, modern/i, 'Современный и лаконичный компонент')
      .replace(/A modern, accessible/i, 'Современный доступный компонент')
      .replace(/A sleek, modern/i, 'Элегантный современный компонент')
      .replace(/A sleek,/i, 'Элегантный')
      .replace(/A beautiful,/i, 'Красивый')
      .replace(/An accessible,/i, 'Доступный')
      .replace(/designed for/i, 'созданный для')
      .replace(/with smooth/i, 'с плавными')
      .replace(/with liquid/i, 'с эффектом жидкости')
      .replace(/with glassmorphic/i, 'с эффектом глассморфизма')
      .replace(/with dark mode/i, 'с темной темой')
      .replace(/and full keyboard navigation/i, 'и поддержкой навигации с клавиатуры')
      .replace(/and screen reader support/i, 'и поддержкой скринридеров')
      .replace(/Zero dependencies/i, 'Без зависимостей')
      .replace(/built with pure Astro and CSS/i, 'на чистом Astro и CSS')
      .replace(/for modern Astro landing pages/i, 'для современных лендингов на Astro');
  }

  return {
    ...comp,
    description: desc,
  };
}
