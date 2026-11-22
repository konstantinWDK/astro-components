import type { Category, ComponentDoc, SectionCategory } from '../data/registry/types';
import type { Locale } from '../config/site';
import { componentTranslations } from './componentTranslations';
import { componentTranslationsExtra } from './componentTranslationsExtra';

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
  overlays: {
    en: { name: 'Overlays', description: 'Modals, slide-in drawers, cookie banners, bottom sheets, and lightboxes.' },
    es: { name: 'Modales & Capas', description: 'Ventanas modales, paneles deslizantes, avisos de cookies, hojas inferiores y visores lightbox.' },
    ru: { name: 'Модальные окна', description: 'Всплывающие окна, выезжающие панели, баннеры куки, мобильные шторки и просмотрщики.' },
  },
  data: {
    en: { name: 'Data Display', description: 'Timelines, stat cards, tables, heatmaps, accordions, and tag clouds.' },
    es: { name: 'Visualización de Datos', description: 'Líneas de tiempo, tarjetas de métricas, tablas, mapas de calor, acordeones y nubes de etiquetas.' },
    ru: { name: 'Отображение данных', description: 'Таймлайны, карточки статистики, таблицы, тепловые карты, аккордеоны и облака тегов.' },
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
  app: {
    en: { name: 'App & Dashboard', description: 'SaaS building blocks: app sidebar and topbar, data table, timeline and status boards, settings, team and auth.' },
    es: { name: 'App y Dashboard', description: 'Piezas para SaaS: barra lateral y superior, tabla de datos, timeline y tableros de estado, ajustes, equipo y login.' },
    ru: { name: 'Приложение и дашборд', description: 'Блоки для SaaS: боковое и верхнее меню, таблица данных, таймлайн и доски статусов, настройки, команда и вход.' },
  },
  ecommerce: {
    en: { name: 'E-commerce', description: 'Shop building blocks: product cards, cart drawer, filters, product page and checkout — all sharing one cart.' },
    es: { name: 'E-commerce', description: 'Piezas para tiendas: tarjetas de producto, carrito lateral, filtros, ficha de producto y checkout, con un carrito compartido.' },
    ru: { name: 'E-commerce', description: 'Блоки для магазина: карточки товаров, корзина, фильтры, страница товара и оформление заказа с общей корзиной.' },
  },
  charts: {
    en: { name: 'Charts & Stats', description: '45 charts and statistics: zero-dependency SVG lines, bars, pies, funnels, heatmaps, KPI tiles and more.' },
    es: { name: 'Gráficos y Estadísticas', description: '45 gráficos y estadísticas: líneas, barras, tartas, embudos, mapas de calor y KPIs en SVG sin dependencias.' },
    ru: { name: 'Графики и статистика', description: '45 графиков и статистики: линии, столбцы, круговые, воронки, тепловые карты и KPI на SVG без зависимостей.' },
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
  content: {
    en: { name: 'Blog & Content', description: 'Article grids, featured posts and release-notes changelog timelines.' },
    es: { name: 'Blog y Contenido', description: 'Cuadrículas de artículos, posts destacados y líneas de tiempo de novedades.' },
    ru: { name: 'Блог и контент', description: 'Сетки статей, избранные публикации и таймлайны изменений.' },
  },
  footer: {
    en: { name: 'Footers', description: 'Complete site footers with link columns, newsletter signup and social links.' },
    es: { name: 'Pies de Página', description: 'Pies de página completos con columnas de enlaces, newsletter y redes sociales.' },
    ru: { name: 'Футеры', description: 'Полные подвалы сайта с колонками ссылок, подпиской и соцсетями.' },
  },
  portfolio: {
    en: { name: 'Developer Portfolio', description: 'Monochrome, keyboard-inspired sections for developer portfolios: retyping hero, 3D projects showcase, typing 3D keyboard, repository list, 3D contribution matrix, 3D monitor, project case study, blog and contact.' },
    es: { name: 'Portfolio de desarrollador', description: 'Secciones monocromas inspiradas en un teclado para portfolios de desarrollador: hero que se reescribe, escaparate 3D de proyectos, teclado 3D que escribe, lista de repositorios, matriz 3D de contribuciones, monitor 3D, caso de proyecto, blog y contacto.' },
    ru: { name: 'Портфолио разработчика', description: 'Монохромные секции в стиле клавиатуры для портфолио разработчика: hero с перепечатывающимся заголовком, 3D-витрина проектов, печатающая 3D-клавиатура, список репозиториев, 3D-матрица вкладов, 3D-монитор, кейс проекта, блог и контакты.' },
  },
  agency: {
    en: { name: 'Agency & Marketing', description: 'Sections for marketing, SEO and web agencies: kinetic hero, services, results, ROI calculator, free audit, pricing, case studies and contact brief.' },
    es: { name: 'Agencia y Marketing', description: 'Secciones para agencias de marketing, SEO y desarrollo web: hero cinético, servicios, resultados, calculadora de ROI, auditoría gratis, precios, casos de éxito y brief de contacto.' },
    ru: { name: 'Агентство и маркетинг', description: 'Секции для маркетинговых, SEO и веб-агентств: кинетический hero, услуги, результаты, калькулятор ROI, бесплатный аудит, цены, кейсы и бриф.' },
  },
  cyberpunk: {
    en: { name: 'Cyberpunk & Brutalist', description: 'Futuristic-brutalist sections with neon, glitch and HUD effects: header, hero with live telemetry, ticker, bento, node map, spec sheet, pricing calculator, manifesto, crew badges, status board, terminal contact form and footer.' },
    es: { name: 'Cyberpunk y brutalista', description: 'Secciones futuristas brutalistas con neón, glitch y efectos HUD: cabecera, hero con telemetría en vivo, ticker, bento, mapa de nodos, ficha técnica, calculadora de precios, manifiesto, credenciales del equipo, panel de estado, formulario de contacto tipo terminal y footer.' },
    ru: { name: 'Киберпанк и брутализм', description: 'Футуристичные бруталистские секции с неоном, глитчем и HUD: шапка, hero с живой телеметрией, бегущая строка, бенто, карта узлов, техпаспорт, калькулятор цен, манифест, бейджи команды, панель статуса, контактная форма-терминал и футер.' },
  },
  healthcare: {
    en: { name: 'Healthcare', description: 'Sections for clinics and medical SaaS: healthcare landing hero, find-a-doctor directory with filters and a four-step online appointment booking wizard.' },
    es: { name: 'Salud', description: 'Secciones para clínicas y SaaS médicos: hero de landing sanitaria, directorio de médicos con filtros y asistente de reserva de citas online en cuatro pasos.' },
    ru: { name: 'Медицина', description: 'Секции для клиник и медицинских SaaS: hero для медицинского лендинга, каталог врачей с фильтрами и мастер онлайн-записи на приём в четыре шага.' },
  },
  toys: {
    en: { name: 'Toy Store', description: 'Comic "toy box" sections for toy and collectibles stores: hero, shop-by-character rail and filters, character roster and profile, gift finder by age, figure spec sheet and collector club.' },
    es: { name: 'Juguetería', description: 'Secciones estilo cómic para tiendas de juguetes y coleccionables: hero, carril y filtros por personaje, plantel y ficha de personajes, buscador de regalos por edad, ficha técnica de figura y club de coleccionistas.' },
    ru: { name: 'Магазин игрушек', description: 'Секции в стиле комикса для магазинов игрушек и коллекционных фигурок: hero, лента и фильтры по персонажам, каталог и профиль персонажа, подбор подарка по возрасту, характеристики фигурки и клуб коллекционеров.' },
  },
  commerce: {
    en: { name: 'E-commerce', description: 'Editorial store sections: shop header with mega menu, hero, collections, product rail, lookbook, reviews and footer.' },
    es: { name: 'E-commerce', description: 'Secciones editoriales para tiendas: cabecera con mega menú, hero, colecciones, carrusel de productos, lookbook, reseñas y footer.' },
    ru: { name: 'E-commerce', description: 'Редакционные секции магазина: шапка с мега-меню, hero, коллекции, карусель товаров, лукбук, отзывы и футер.' },
  },
  dental: {
    en: { name: 'Dental Care', description: 'Sections for dental practices: hero with urgent toothache hotline, treatment fee catalog, smile transformation before/after gallery, 4-step dental booking wizard, specialists directory, and emergency care banner.' },
    es: { name: 'Odontología y Dental', description: 'Secciones para clínicas dentales: hero con teléfono de urgencias, catálogo de tarifas, transformaciones antes/después, asistente de reserva en 4 pasos, especialistas y urgencias 24/7.' },
    ru: { name: 'Стоматология', description: 'Секции для стоматологических клиник: главный экран с горячей линией острой боли, прайс-лист, фото до/после, мастер записи в 4 шага, каталог врачей и экстренная помощь.' },
  },
  moving: {
    en: { name: 'Moving & Logistics', description: 'Sections for removals and van logistics: instant route quote hero, housing volume guide, commercial van fleet, transparent pricing tiers, careers recruitment banner, and driver job application form.' },
    es: { name: 'Mudanzas y Logística', description: 'Secciones para mudanzas y portes con furgonetas: hero con cotizador de ruta, guía de volumen en m³, flota de furgonetas, tarifas transparentes, banner de empleo y formulario de contratación.' },
    ru: { name: 'Переезды и логистика', description: 'Секции для переездов и грузоперевозок: главный экран с расчётом маршрута, гид по объёму жилья, каталог фургонов, прозрачные тарифы, баннер вакансий и форма найма водителей.' },
  },
  food: {
    en: { name: 'Food & Delivery', description: 'Pop sticker sections for food delivery platforms and restaurants: animated hero plate, scroll-spy menu board with flying cart items, scroll-driven order story, B2B partner savings pitch, and coupon footer.' },
    es: { name: 'Restauración y Delivery', description: 'Secciones estilo sticker para plataformas de comida a domicilio y restaurantes: hero con plato animado, carta con scroll-spy y carrito volante, historia con el scroll, comparativa de ahorro B2B y pie con cupón.' },
    ru: { name: 'Доставка еды и рестораны', description: 'Секции в стиле поп-стикеров для доставки еды и ресторанов: главный экран с анимированной тарелкой, меню со scroll-spy и корзиной, история по скроллу, калькулятор выгоды B2B и подвал с купоном.' },
  },
  construction: {
    en: { name: 'Construction & Real Estate', description: 'Blueprint sections for general contractors and developers: self-drawing hero with coordinate crosshair, architectural project sheets, scroll-driven build sequence, tender request form, and title-block footer.' },
    es: { name: 'Construcción e Inmobiliaria', description: 'Secciones de plano azul para constructoras y promotoras: hero autodibujado con cruceta de coordenadas, fichas de proyecto en plano, secuencia de obra con el scroll, formulario de licitación y pie tipo cajetín.' },
    ru: { name: 'Строительство и девелопмент', description: 'Секции в стиле чертежа для строительных компаний и девелоперов: саморисующийся hero с перекрестием координат, листы проектов, поэтажная сборка при скролле, форма тендера и подвал-штамп.' },
  },
  'real-estate': {
    en: { name: 'Real Estate Agency', description: 'Sections for real estate agencies and property portals: search hero with buy/rent filters, filterable listings with favourites and zone map, neighbourhood price guide, property photo gallery, agent directory, and owner valuation call to action.' },
    es: { name: 'Inmobiliaria', description: 'Secciones para agencias inmobiliarias y portales de pisos: hero con buscador de compra y alquiler, listado filtrable con favoritos y mapa por zonas, guía de precios por barrio, galería de fotos, directorio de agentes y llamada a la valoración para propietarios.' },
    ru: { name: 'Агентство недвижимости', description: 'Секции для агентств недвижимости и порталов объявлений: главный экран с поиском покупки и аренды, каталог с фильтрами, избранным и картой районов, цены по районам, фотогалерея объекта, команда агентов и призыв оценить жильё.' },
  },
  gym: {
    en: { name: 'Gym & Fitness', description: 'Sections for gyms, boxes and fitness studios: bold hero with today’s classes, discipline cards with intensity, weekly timetable with day tabs and filters, membership plans with monthly/yearly billing, coaching team, and free-trial sign-up.' },
    es: { name: 'Gimnasio y fitness', description: 'Secciones para gimnasios, boxes y estudios: hero con las clases de hoy, disciplinas con intensidad, horario semanal con pestañas y filtros, tarifas con pago mensual o anual, equipo de entrenadores y alta de prueba gratis.' },
    ru: { name: 'Спортзал и фитнес', description: 'Секции для спортзалов и фитнес-студий: главный экран с занятиями на сегодня, направления с интенсивностью, недельное расписание с вкладками и фильтрами, абонементы с оплатой помесячно или за год, команда тренеров и запись на пробный период.' },
  },
  academy: {
    en: { name: 'Online Academy', description: 'Sections for online course platforms and academies: hero with course search, learning-path cards, filterable course catalog, course page header with enrolment card, syllabus accordion, subscription plans, instructor team, student reviews, instructor application form and footer.' },
    es: { name: 'Academia online', description: 'Secciones para plataformas de cursos y academias online: hero con buscador de cursos, rutas de aprendizaje, catálogo filtrable, cabecera de curso con tarjeta de matrícula, temario desplegable, planes de suscripción, equipo de instructores, opiniones de alumnos, solicitud para enseñar y pie de página.' },
    ru: { name: 'Онлайн-академия', description: 'Секции для платформ онлайн-курсов и академий: главный экран с поиском курсов, карточки направлений, каталог с фильтрами, шапка курса с карточкой записи, программа-аккордеон, тарифы подписки, команда преподавателей, отзывы учеников, заявка преподавателя и подвал.' },
  },
  fintech: {
    en: { name: 'Fintech & Banking', description: 'Sections for neobanks and fintech products: hero with product mock, bento benefits, card picker, plans, fee comparison, savings calculator, security and trust, account-opening wizard, FAQ and footer.' },
    es: { name: 'Fintech y banca', description: 'Secciones para neobancos y productos fintech: hero con mock del producto, ventajas en cuadrícula bento, selector de tarjetas, planes, comparativa de comisiones, calculadora de ahorro, seguridad y confianza, asistente de apertura de cuenta, preguntas frecuentes y pie de página.' },
    ru: { name: 'Финтех и банкинг', description: 'Секции для необанков и финтех-продуктов: главный экран с макетом продукта, бенто-преимущества, выбор карты, тарифы, сравнение комиссий, калькулятор накоплений, безопасность и доверие, мастер открытия счёта, FAQ и подвал.' },
  },
  law: {
    en: { name: 'Law Firm', description: 'Sections for law firms and professional services: hero with case-file card, practice areas as tabs, team with area filter, process steps, results and testimonials, fee models, consultation booking, legal articles, FAQ and footer.' },
    es: { name: 'Despacho de abogados', description: 'Secciones para despachos de abogados y servicios profesionales: hero con tarjeta de expediente, áreas de práctica en pestañas, equipo con filtro por área, pasos del proceso, resultados y testimonios, modelos de honorarios, reserva de consulta, artículos jurídicos, preguntas frecuentes y pie de página.' },
    ru: { name: 'Юридическая фирма', description: 'Секции для юридических фирм и профессиональных услуг: главный экран с карточкой дела, направления практики во вкладках, команда с фильтром, шаги процесса, результаты и отзывы, модели гонораров, запись на консультацию, юридические статьи, FAQ и подвал.' },
  },
  winery: {
    en: { name: 'Winery', description: 'Sections for wineries and artisan producers: hero with a tilting bottle, a pinned scroll scene of the vintage, wine list as an editorial index, interactive plot map, family story, visit booking, wine-club configurator, press scores, FAQ and footer.' },
    es: { name: 'Bodega', description: 'Secciones para bodegas y productores artesanales: hero con botella que se inclina, escena de scroll fijada de la añada, carta de vinos como índice editorial, mapa interactivo de parcelas, historia familiar, reserva de visitas, configurador del club de vino, puntuaciones de prensa, preguntas frecuentes y pie de página.' },
    ru: { name: 'Винодельня', description: 'Секции для виноделен и ремесленных производителей: главный экран с наклоняющейся бутылкой, закреплённая сцена урожая, карта вин как редакционный индекс, интерактивная карта участков, история семьи, запись на визиты, конфигуратор винного клуба, оценки прессы, FAQ и подвал.' },
  },
  perfumery: {
    en: { name: 'Perfumery', description: 'Sections for niche perfumeries: hero with drifting colour clouds, evolution-on-skin slider, fragrance rail, olfactory map, raw-materials atelier, scent profile quiz, discovery-set builder, FAQ and footer.' },
    es: { name: 'Perfumería', description: 'Secciones para perfumerías de autor: hero con nubes de color, deslizador de evolución en piel, carril de fragancias, mapa olfativo, atelier de materias primas, test de perfil olfativo, constructor de set de descubrimiento, preguntas frecuentes y pie de página.' },
    ru: { name: 'Парфюмерия', description: 'Секции для нишевых парфюмерных домов: главный экран с облаками цвета, ползунок эволюции на коже, лента ароматов, ольфакторная карта, ателье сырья, тест аромапрофиля, конструктор набора для знакомства, FAQ и подвал.' },
  },
  restaurant: {
    en: { name: 'Restaurant', description: 'Sections for restaurants: ember hero with rising sparks, tasting menu plate by plate with generated plates, à la carte with diet filter, producer radar, table booking on a floor plan, FAQ and footer.' },
    es: { name: 'Restaurante', description: 'Secciones para restaurantes: hero de brasas con chispas, menú degustación plato a plato con platos generados, carta con filtro de dieta, radar de productores, reserva de mesa sobre un plano de sala, preguntas frecuentes y pie de página.' },
    ru: { name: 'Ресторан', description: 'Секции для ресторанов: главный экран с углями и искрами, дегустационное меню блюдо за блюдом со сгенерированными тарелками, меню à la carte с фильтром по диете, радар производителей, бронирование стола на плане зала, FAQ и подвал.' },
  },
  architecture: {
    en: { name: 'Architecture', description: 'Sections for architecture studios: hero with a self-drawing elevation, built work with generated plans, interactive solar study, process as a Gantt accordion, cost calculator, principles, FAQ and footer.' },
    es: { name: 'Arquitectura', description: 'Secciones para estudios de arquitectura: hero con un alzado que se dibuja solo, obra construida con plantas generadas, estudio solar interactivo, proceso como acordeón Gantt, calculadora de coste, principios, preguntas frecuentes y pie de página.' },
    ru: { name: 'Архитектура', description: 'Секции для архитектурных бюро: главный экран с самопрорисовывающимся фасадом, объекты со сгенерированными планами, интерактивный расчёт инсоляции, процесс как аккордеон Ганта, калькулятор стоимости, принципы, FAQ и подвал.' },
  },
  theater: {
    en: { name: 'Theater', description: 'Sections for theatre-ticket shops: hero with scroll-driven curtains, title marquee, billboard grid with filters, show page with an interactive seat map, cart with a ten-minute hold, FAQ and footer.' },
    es: { name: 'Teatro', description: 'Secciones para tiendas de entradas de teatro: hero con telón guiado por el scroll, cinta de títulos, cartelera con filtros, ficha con plano de butacas interactivo, carrito con reserva de diez minutos, preguntas frecuentes y pie de página.' },
    ru: { name: 'Театр', description: 'Секции для театральных касс: главный экран с занавесом, управляемым прокруткой, бегущая строка, афиша с фильтрами, страница спектакля с интерактивным планом мест, корзина с удержанием десять минут, FAQ и подвал.' },
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
export function getLocalizedCategory(catOrId: Category | string, lang: Locale): { id: string; name: string; description: string; icon?: string } {
  const catId = typeof catOrId === 'string' ? catOrId : catOrId.id;
  const originalName = typeof catOrId === 'string' ? catOrId : catOrId.name;
  const originalDesc = typeof catOrId === 'string' ? '' : catOrId.description;
  const icon = typeof catOrId === 'string' ? '' : catOrId.icon;

  const translation = categoryTranslations[catId]?.[lang];

  return {
    id: catId,
    name: translation?.name || originalName,
    description: translation?.description || originalDesc,
    icon,
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
 * Helper to translate component description into EN, ES, or RU
 * Uses the exact componentTranslations dictionary with fallback to regex rules.
 */
export function getLocalizedComponent(comp: ComponentDoc, lang: Locale): ComponentDoc {
  const trans = componentTranslations[comp.slug] ?? componentTranslationsExtra[comp.slug];

  if (trans) {
    if (lang === 'es' && trans.es) {
      return { ...comp, description: trans.es };
    }
    if (lang === 'ru' && trans.ru) {
      return { ...comp, description: trans.ru };
    }
    if (lang === 'en' && trans.en) {
      return { ...comp, description: trans.en };
    }
  }

  if (lang === 'en') return comp;

  let desc = comp.description;

  if (lang === 'es') {
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

export interface ComponentSeoMeta {
  title: string;
  description: string;
}

/**
 * Generates search-engine optimized title and meta description (130-155 characters)
 * for any component or section in EN, ES, and RU.
 */
export function getComponentSeoMeta(comp: ComponentDoc, lang: Locale): ComponentSeoMeta {
  const localizedComp = getLocalizedComponent(comp, lang);
  const base = localizedComp.description.trim().replace(/\.$/, '');

  let title = `${comp.name} - Free Astro Component`;
  let description = '';

  if (lang === 'es') {
    title = `${comp.name} - Componente Astro Gratis`;
    if (base.length <= 90) {
      description = `${base}. Componente Astro gratis y accesible listo para usar.`;
    } else if (base.length <= 115) {
      description = `${base}. Componente Astro gratis sin dependencias.`;
    } else if (base.length <= 145) {
      description = `${base} para Astro con cero dependencias.`;
    } else {
      description = `${base}.`;
    }
  } else if (lang === 'ru') {
    title = `${comp.name} - Бесплатный компонент Astro`;
    if (base.length <= 90) {
      description = `${base}. Бесплатный и доступный компонент для Astro.`;
    } else if (base.length <= 115) {
      description = `${base}. Готовый компонент Astro без зависимостей.`;
    } else if (base.length <= 145) {
      description = `${base} для Astro без внешних зависимостей.`;
    } else {
      description = `${base}.`;
    }
  } else {
    // English
    title = `${comp.name} - Free Astro Component`;
    if (base.length <= 90) {
      description = `${base}. Free, responsive Astro component with zero dependencies.`;
    } else if (base.length <= 115) {
      description = `${base}. Free and accessible Astro UI component.`;
    } else if (base.length <= 145) {
      description = `${base} for Astro with zero dependencies.`;
    } else {
      description = `${base}.`;
    }
  }

  return { title, description };
}
