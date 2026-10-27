// src/i18n/componentTranslations.ts
// Accurate localized descriptions for all 227 components and sections in EN, ES, RU

export interface ComponentTranslation {
  en?: string;
  es: string;
  ru: string;
}

export const componentTranslations: Record<string, ComponentTranslation> = {
  "glass-button": {
    "es": "Botón premium con efecto glassmorphism, borde en degradado y suaves animaciones al pasar el cursor.",
    "ru": "Премиальная кнопка с эффектом глассморфизма, градиентной рамкой и плавной анимацией при наведении.",
    "en": "A premium button with glassmorphism effect, gradient border and smooth hover animations."
  },
  "glow-button": {
    "es": "Botón interactivo con efecto de resplandor animado que pulsa suavemente al pasar el cursor.",
    "ru": "Кнопка с анимированным эффектом неонового свечения, пульсирующим при наведении.",
    "en": "A button with an animated glow effect that pulsates on hover."
  },
  "neumorphic-button": {
    "es": "Botón Soft UI de estilo neumórfico con degradados biselados y sombras volumétricas.",
    "ru": "Неоморфная Soft UI кнопка со скошенными градиентами и мягкими объемными тенями.",
    "en": "A premium Soft UI button with beveled surface gradients and hue-tinted shadows."
  },
  "cyberpunk-button": {
    "es": "Botón de estilo ciberpunk con efecto glitch y estética futurista de ciencia ficción.",
    "ru": "Кнопка в стиле киберпанк с эффектом глитча и футуристичной неоновой эстетикой.",
    "en": "A glitchy, neon-styled button inspired by futuristic sci-fi aesthetics."
  },
  "pulse-button": {
    "es": "Botón con efecto de pulso circular continuo diseñado para atraer la atención hacia llamadas a la acción.",
    "ru": "Кнопка с постоянным круговым пульсирующим эффектом для привлечения внимания к действию.",
    "en": "A button with a persistent circular pulse effect to draw attention."
  },
  "shiny-button": {
    "es": "Botón con un destello metálico brillante que recorre la superficie al pasar el cursor.",
    "ru": "Кнопка с эффектом металлического блеска, пробегающего по поверхности при наведении.",
    "en": "A button with a metallic shine effect that sweeps across on hover."
  },
  "retro-arcade-button": {
    "es": "Botón clásico de estilo arcade de 8 bits con bordes pixelados y colores vibrantes retro.",
    "ru": "Классическая кнопка в стиле 8-битных аркад с пиксельными краями и яркими цветами.",
    "en": "Classic 8-bit style button with sharp pixelated edges and vibrant colors."
  },
  "3d-push-button": {
    "es": "Botón interactivo 3D con efecto táctil que se hunde físicamente en la interfaz al pulsar.",
    "ru": "Интерактивная 3D-кнопка, физически продавливающаяся внутрь интерфейса при нажатии.",
    "en": "A button that physically sinks into the interface when clicked."
  },
  "loading-button": {
    "es": "Botón con indicador spinner integrado para mostrar estados de carga y envío.",
    "ru": "Кнопка со встроенным индикатором загрузки (спиннером) для отображения состояния отправки.",
    "en": "A button that shows a built-in spinner when in a loading state."
  },
  "shimmer-button": {
    "es": "Botón elegante con un contorno brillante continuo en movimiento y fondo semitransparente.",
    "ru": "Элегантная кнопка со скользящим светящимся контуром и полупрозрачным фоном.",
    "en": "A highly elegant button with a moving shimmer outline."
  },
  "magnetic-button": {
    "es": "Botón magnético que sigue sutilmente el movimiento del cursor al interactuar.",
    "ru": "Магнитная кнопка, плавно следующая за курсором мыши при взаимодействии.",
    "en": "A button that follows the cursor slightly when hovered."
  },
  "double-border-button": {
    "es": "Botón elegante con bordes concéntricos dobles y escala fluida al interactuar.",
    "ru": "Элегантная кнопка с двойными вложенными границами и плавным масштабированием.",
    "en": "Elegant button with nested borders and smooth scaling."
  },
  "animated-icon-button": {
    "es": "Botón interactivo con microanimación de icono SVG suave al pasar el cursor.",
    "ru": "Интерактивная кнопка с плавной анимацией SVG-иконки при наведении курсора.",
    "en": "Interactive button with smooth animated SVG icon transitions on hover."
  },
  "border-draw-button": {
    "es": "Botón con animación de trazado dinámico del borde mediante trazos vectoriales SVG.",
    "ru": "Кнопка с динамическим эффектом обводки контура через векторную анимацию SVG.",
    "en": "Button with an animated border tracing effect using SVG stroke animations."
  },
  "ghost-outline-button": {
    "es": "Botón fantasma minimalista con contorno limpio y transición suave de relleno.",
    "ru": "Минималистичная прозрачная кнопка с изящным контуром и мягким заполнением.",
    "en": "Minimalist ghost button with subtle outline and smooth fill transition."
  },
  "liquid-button": {
    "es": "Botón fluido con efecto líquido viscoso SVG y animaciones orgánicas de salpicadura.",
    "ru": "Эффектная кнопка с имитацией текучей жидкости и морфинг-анимацией на SVG.",
    "en": "Fluid button with SVG gooey liquid effect and morphing splash transitions."
  },
  "minimal-pill-button": {
    "es": "Botón compacto en forma de píldora redondeada para interfaces modernas y limpias.",
    "ru": "Лаконичная кнопка-пилюля со скругленными краями для чистых современных интерфейсов.",
    "en": "Compact pill-shaped button designed for clean, modern interfaces."
  },
  "retro-shadow-button": {
    "es": "Botón neobrutalista con sombra dura en bloque y respuesta táctil al hacer clic.",
    "ru": "Необруталистическая кнопка с жесткой тенью и физическим откликом при клике.",
    "en": "Hard-shadow neo-brutalist button with responsive click depression."
  },
  "tilt-glow-button": {
    "es": "Botón con inclinación interactiva 3D y resplandor dinámico que acompaña al ratón.",
    "ru": "Интерактивная кнопка с 3D-наклоном и динамическим свечением по движению мыши.",
    "en": "Interactive 3D tilt button with dynamic mouse-following glow highlight."
  },
  "ripple-button": {
    "es": "Botón interactivo con ondas expansivas dinámicas al hacer clic en cualquier punto.",
    "ru": "Интерактивная кнопка с расходящимися волнами (ripple) в точке нажатия.",
    "en": "A sleek interactive button that triggers localized expanding ripple rings on click."
  },
  "neon-border-button": {
    "es": "Botón futurista con borde láser de neón cónico giratorio y reflejos de luz.",
    "ru": "Футуристическая кибер-кнопка с вращающейся лазерной неоновой рамкой и свечением.",
    "en": "A futuristic cyber button with rotating conical neon laser border and glow reflection."
  },
  "slide-reveal-button": {
    "es": "Botón de doble estado que desplaza el texto principal para revelar acciones secundarias.",
    "ru": "Двухпозиционная кнопка со скользящим текстом, открывающим скрытое действие.",
    "en": "A dual-state button that slides primary text out and reveals hidden secondary action text or icons."
  },
  "blog-horizontal-card": {
    "es": "Tarjeta horizontal panorámica para feeds de noticias, publicaciones de blog o artículos.",
    "ru": "Горизонтальная карточка для новостных лент, заметок и блогов.",
    "en": "Landscape card layout for blog feeds or news items."
  },
  "cyber-feature-card": {
    "es": "Tarjeta de funcionalidades con estética angular futurista y trazos de neón animados.",
    "ru": "Карточка возможностей с острыми углами и анимированными неоновыми линиями.",
    "en": "A feature card with sharp angles and neon stroke animations."
  },
  "ecommerce-product-card": {
    "es": "Tarjeta comercial de producto con selector de opciones, precios, valoración y botón de compra.",
    "ru": "Товарная карточка интернет-магазина с ценами, рейтингом и кнопкой добавления в корзину.",
    "en": "Commercial card with price, rating and action buttons."
  },
  "glass-card": {
    "es": "Tarjeta versátil con estética glassmorphism, desenfoque de fondo y borde iluminado.",
    "ru": "Универсальная карточка в стиле глассморфизма с матовым размытием и подсветкой.",
    "en": "A versatile card component with glassmorphism blur and border glow."
  },
  "glow-border-card": {
    "es": "Tarjeta elegante con borde luminiscente reactivo al movimiento del cursor del ratón.",
    "ru": "Элегантная карточка со светящейся границей, реагирующей на движение курсора.",
    "en": "A card with a glowing border that follows the mouse cursor."
  },
  "gradient-border-card": {
    "es": "Tarjeta moderna con un borde en degradado animado multicolor y fondo oscuro.",
    "ru": "Современная карточка с градиентной переливающейся рамкой и темным фоном.",
    "en": "A card with an animated gradient border."
  },
  "holo-card": {
    "es": "Tarjeta holográfica con reflejos iridiscentes y efecto de brillo prismático interactivo.",
    "ru": "Голографическая карточка с переливающимися радужными бликами и призматическим эффектом.",
    "en": "Holographic card with iridescent sheen and rainbow reflection effects."
  },
  "interactive-kanban-card": {
    "es": "Tarjeta para tablero Kanban con etiquetas de prioridad, avatares asignados y checklist.",
    "ru": "Карточка канбан-доски с тегами приоритета, аватарами исполнителей и чек-листом.",
    "en": "Kanban card with priority tags, assignee avatars, and checklist progress."
  },
  "interactive-podcast-card": {
    "es": "Tarjeta de reproductor de audio y podcast con barra de progreso y control de reproducción.",
    "ru": "Карточка подкаста с аудиоплеером, прогресс-баром и кнопками управления воспроизведением.",
    "en": "Podcast episode player card with playback controls and wave progress."
  },
  "isometric-stat-card": {
    "es": "Tarjeta de estadísticas con perspectiva isométrica 3D y cuadrícula de datos decorativa.",
    "ru": "Карточка статистики с 3D изометрической проекцией и декоративной сеткой данных.",
    "en": "3D isometric stats card with pseudo-isometric grid and depth shadow."
  },
  "media-action-card": {
    "es": "Tarjeta multimedia con imagen de portada, título superpuesto y acciones rápidas.",
    "ru": "Медиа-карточка с обложкой, наложенным заголовком и кнопками быстрых действий.",
    "en": "Media card with overlay content and quick action buttons."
  },
  "minimal-link-card": {
    "es": "Tarjeta minimalista con flecha interactiva para navegación y directorios de secciones.",
    "ru": "Лаконичная карточка-ссылка со стрелкой для навигации по разделам.",
    "en": "Elegant arrow-link card for site navigation sections."
  },
  "morphing-depth-card": {
    "es": "Tarjeta con efecto de profundidad multicapa que se expande orgánicamente al interactuar.",
    "ru": "Многослойная карточка с эффектом глубины, трансформирующаяся при взаимодействии.",
    "en": "Layered card with morphing depth effects on hover."
  },
  "neon-accent-card": {
    "es": "Tarjeta con acentos de color neón de alto contraste para destacar elementos clave.",
    "ru": "Карточка с контрастными неоновыми акцентами для выделения ключевых элементов.",
    "en": "High-contrast card with bright neon accent lines."
  },
  "pricing-card": {
    "es": "Tarjeta de precios optimizada para conversión con lista de características y badge destacado.",
    "ru": "Карточка тарифов с перечнем включенных функций и значком популярного плана.",
    "en": "A conversion-optimized pricing card with feature list and CTA."
  },
  "profile-card": {
    "es": "Tarjeta de perfil de usuario con avatar, biografía breve y enlaces a redes sociales.",
    "ru": "Карточка профиля пользователя с аватаром, краткой биографией и социальными ссылками.",
    "en": "User profile card with avatar, bio, and social links."
  },
  "recipe-nutrition-card": {
    "es": "Tarjeta de receta gastronómica con desglose de información nutricional e ingredientes.",
    "ru": "Кулинарная карточка рецепта с пищевой ценностью и списком ингредиентов.",
    "en": "Recipe card with cooking time, calories, and nutrition macro breakdown."
  },
  "service-tier-card": {
    "es": "Tarjeta de nivel de servicio con soporte para planes de suscripción y niveles de soporte.",
    "ru": "Карточка уровня сервиса с подробным описанием тарифов и условий поддержки.",
    "en": "Service tier card for feature-heavy SaaS offerings."
  },
  "split-action-card": {
    "es": "Tarjeta dividida en dos paneles con área de información y panel lateral de acción.",
    "ru": "Разделенная карточка с информационным блоком и боковой панелью действий.",
    "en": "Two-column card with separate media and action panels."
  },
  "testimonial-card": {
    "es": "Tarjeta de testimonio de clientes con valoración por estrellas, cita y avatar verificado.",
    "ru": "Карточка отзыва с оценкой звездами, цитатой клиента и проверенным аватаром.",
    "en": "Customer testimonial card with quote, rating stars, and author info."
  },
  "tilt-card": {
    "es": "Tarjeta interactiva 3D con inclinación realista calculada según la posición del cursor.",
    "ru": "Интерактивная 3D-карточка с физическим наклоном по траектории курсора мыши.",
    "en": "A 3D perspective tilt card that responds to mouse movement."
  },
  "weather-widget-card": {
    "es": "Tarjeta widget del tiempo con efecto glassmorphism, previsión y temperatura en tiempo real.",
    "ru": "Виджет погоды в стиле глассморфизма с прогнозом и текущей температурой.",
    "en": "Glassmorphism card showing weather conditions."
  },
  "checkbox-switch-toggle": {
    "es": "Interruptor animado con estados activos y transiciones suaves para configuraciones.",
    "ru": "Анимированный переключатель-тумблер с мягкими переходами для настроек.",
    "en": "Animated switch toggle with smooth transitions."
  },
  "chip-input": {
    "es": "Campo de entrada interactivo para etiquetas y chips extraíbles mediante teclado.",
    "ru": "Интерактивное поле ввода тегов и удаляемых чипов с клавиатурным управлением.",
    "en": "Tag/chip input component with keyboard navigation."
  },
  "color-picker-input": {
    "es": "Selector visual de color con previsualización en vivo y copia de código hexadecimal.",
    "ru": "Визуальный выбор цвета с живым предпросмотром и копированием HEX-кода.",
    "en": "Color picker input with hex display."
  },
  "custom-radio-group": {
    "es": "Grupo de selección radial con tarjetas visuales, iconos descriptivos y bordes activos.",
    "ru": "Группа радиокнопок в виде карточек с иконками и активной подсветкой границ.",
    "en": "Radio button group with card-style options."
  },
  "date-picker-input": {
    "es": "Campo de selección de fechas con formato accesible y selector de calendario integrado.",
    "ru": "Поле выбора даты со встроенным календарем и доступным форматированием.",
    "en": "Date picker input with calendar trigger."
  },
  "drag-drop-upload": {
    "es": "Zona interactiva para arrastrar y soltar archivos con previsualización y barra de progreso.",
    "ru": "Зона перетаскивания файлов (Drag & Drop) с предпросмотром и индикатором загрузки.",
    "en": "Large interactive file upload zone."
  },
  "file-upload-zone": {
    "es": "Área de subida de archivos compacta con indicador de tamaño máximo y validación.",
    "ru": "Компактная область загрузки файлов с индикацией формата и максимального размера.",
    "en": "Compact file upload zone with drop target."
  },
  "floating-input": {
    "es": "Campo de texto con etiqueta flotante animada al enfocar y escribir.",
    "ru": "Поле ввода с плавающей анимированной меткой при фокусе и вводе текста.",
    "en": "Text input with smooth floating label animation."
  },
  "form-stepper-progress": {
    "es": "Indicador de progreso de formulario multipaso con estados completados y activos.",
    "ru": "Пошаговый индикатор прогресса формы с отображением завершенных этапов.",
    "en": "Step progress indicator for multi-step forms."
  },
  "glass-input": {
    "es": "Campo de texto con estética glassmorphism, desenfoque de fondo y borde iluminado.",
    "ru": "Поле ввода в стиле глассморфизма с размытым фоном и светящейся рамкой.",
    "en": "Text input with glassmorphism blur background."
  },
  "glass-textarea": {
    "es": "Área de texto multilínea con estilo glassmorphism y redimensionamiento controlado.",
    "ru": "Многострочное поле ввода (текстовая область) с размытием фона в стиле глассморфизма.",
    "en": "Glassmorphism styled multiline input."
  },
  "inline-search-input": {
    "es": "Barra de búsqueda integrada con atajo de teclado visible y botón de borrado rápido.",
    "ru": "Поисковая строка со значком горячей клавиши и кнопкой быстрой очистки.",
    "en": "Search input with keyboard shortcut hint."
  },
  "multi-select-dropdown": {
    "es": "Desplegable de selección múltiple con chips seleccionados y filtrado de opciones.",
    "ru": "Выпадающий список множественного выбора с чипами и поисковой фильтрацией.",
    "en": "Select dropdown supporting multiple selections with tags."
  },
  "newsletter-inline-form": {
    "es": "Formulario compacto de suscripción a newsletter en una línea con botón integrado.",
    "ru": "Компактная однострочная форма подписки на рассылку со встроенной кнопкой.",
    "en": "Single-line newsletter signup with integrated button."
  },
  "number-stepper-input": {
    "es": "Control numérico con botones de incremento y decremento con paso configurable.",
    "ru": "Счетчик числовых значений с кнопками увеличения и уменьшения с заданным шагом.",
    "en": "Numeric stepper input with increment and decrement buttons."
  },
  "otp-pin-input": {
    "es": "Entrada de código de verificación OTP/PIN con salto automático entre casillas.",
    "ru": "Поле ввода проверочного кода OTP/PIN с автоматическим переходом между ячейками.",
    "en": "One-time password / PIN verification input."
  },
  "password-strength-input": {
    "es": "Campo de contraseña con indicador de fortaleza en tiempo real y alternador de visibilidad.",
    "ru": "Поле ввода пароля с индикатором надежности и переключателем видимости знаков.",
    "en": "Password input with strength meter and show/hide toggle."
  },
  "phone-number-input": {
    "es": "Campo de teléfono con selector de prefijo de país y formateo automático de números.",
    "ru": "Поле ввода телефона с селектором кода страны и автоматическим форматированием.",
    "en": "Phone input with country code selector."
  },
  "range-slider-dual": {
    "es": "Deslizador de rango numérico con dos controles para seleccionar valores mínimos y máximos.",
    "ru": "Двойной ползунок для выбора диапазона числовых значений (минимум и максимум).",
    "en": "Dual-thumb slider for selecting numeric ranges."
  },
  "rating-stars-input": {
    "es": "Selector interactivo de calificación con estrellas para reseñas y encuestas de satisfacción.",
    "ru": "Интерактивный выбор рейтинга звездами для отзывов и опросов удовлетворенности.",
    "en": "Star rating input for reviews and feedback."
  },
  "search-filter-bar": {
    "es": "Barra completa de búsqueda y filtrado con menús desplegables para tablas de datos.",
    "ru": "Поисковая панель с фильтрами и выпадающими списками для каталогов и таблиц.",
    "en": "Search bar with integrated filter dropdowns."
  },
  "signature-pad-input": {
    "es": "Panel de firma digital sobre lienzo interactivo con opciones de borrado y guardado.",
    "ru": "Холст для цифровой подписи с кнопками очистки и сохранения штрихов.",
    "en": "Digital signature canvas input."
  },
  "slider-range": {
    "es": "Control deslizante fluido para ajustes de valor único con etiqueta de lectura en vivo.",
    "ru": "Ползунок диапазона для плавного изменения одного значения с числовым бейджем.",
    "en": "Range slider with customizable track and thumb."
  },
  "toggle-switch": {
    "es": "Interruptor booleano accesible para alternar opciones de configuración y preferencias.",
    "ru": "Доступный переключатель (тумблер) для включения и выключения опций.",
    "en": "Toggle switch with accessible markup and smooth sliding."
  },
  "anchor-side-nav": {
    "es": "Menú lateral fijo para navegar suavemente entre secciones de una misma página.",
    "ru": "Боковое меню якорной навигации для плавного перехода между блоками одной страницы.",
    "en": "Side menu for navigating between sections of a single page."
  },
  "bottom-nav-bar": {
    "es": "Barra de navegación fija inferior optimizada para aplicaciones web móviles.",
    "ru": "Нижняя панель навигации с иконками, оптимизированная для мобильных устройств.",
    "en": "Icon-based navigation bar fixed to the bottom, optimized for mobile."
  },
  "breadcrumb-nav": {
    "es": "Indicador de ruta de navegación accesible con separadores personalizables.",
    "ru": "Навигационная цепочка (хлебные крошки) с разделителями и микроразметкой.",
    "en": "Lean navigation path indicator with subtle separators."
  },
  "command-palette-modal": {
    "es": "Paleta de comandos accesible mediante atajo de teclado (Cmd+K) con búsqueda rápida.",
    "ru": "Командная строка быстрого доступа (Cmd+K) со встроенным поиском и горячими клавишами.",
    "en": "Keyboard-driven command menu overlay (Cmd+K)."
  },
  "dock-navigation": {
    "es": "Barra dock flotante inspirada en macOS con efecto de magnificación al pasar el cursor.",
    "ru": "Плавающая док-панель в стиле macOS с эффектом плавного увеличения иконок.",
    "en": "macOS-inspired floating dock with magnification."
  },
  "dropdown-mega-menu": {
    "es": "Mega menú desplegable multicelular con enlaces destacados, categorías e iconos.",
    "ru": "Многоколоночное мега-меню с категориями ссылок, описаниями и иконками.",
    "en": "Multi-column dropdown navigation panel."
  },
  "glass-navbar": {
    "es": "Barra de navegación fija con desenfoque glassmorphism y desplazamiento suave.",
    "ru": "Закрепленная навигационная панель с эффектом глассморфизма и плавным скроллом.",
    "en": "A sticky top navigation bar with glassmorphism blur and smooth scroll behavior."
  },
  "jump-to-top-btn": {
    "es": "Botón flotante inteligente para volver al inicio de página con indicador de scroll.",
    "ru": "Плавающая кнопка возврата наверх с индикатором прогресса прокрутки.",
    "en": "Floating button that returns the page to top with scroll progress indicator."
  },
  "minimal-sidebar": {
    "es": "Barra lateral vertical para paneles de administración y aplicaciones web complejas.",
    "ru": "Вертикальная панель навигации для панелей управления и личных кабинетов.",
    "en": "A vertical navigation sidebar for dashboard-style interfaces."
  },
  "mobile-drawer-nav": {
    "es": "Menú lateral deslizante accesible para dispositivos móviles con fondo difuminado.",
    "ru": "Выдвижное мобильное меню со шторкой, анимацией и затемнением фона.",
    "en": "Slide-in navigation drawer for mobile viewports."
  },
  "multi-tier-navbar": {
    "es": "Barra de navegación de dos niveles con banner superior y enlaces principales de producto.",
    "ru": "Двухуровневая навигационная панель с верхней информационной строкой.",
    "en": "Two-row navbar with top announcement bar and main links."
  },
  "nested-folder-nav": {
    "es": "Árbol de navegación jerárquico desplegable para documentación y exploradores de archivos.",
    "ru": "Иерархическая навигация по вложенным папкам и разделам документации.",
    "en": "Collapsible tree navigation for documentation."
  },
  "pagination-nav": {
    "es": "Control de paginación con estado activo difuminado y botones de página anterior y siguiente.",
    "ru": "Компонент пагинации с переключением страниц и мягкой подсветкой активного номера.",
    "en": "Stylish page switcher with blurred background and active states."
  },
  "quick-action-fab": {
    "es": "Botón flotante de acción rápida (FAB) con menú radial de accesos directos.",
    "ru": "Плавающая кнопка быстрого действия (FAB) с радиальным раскрывающимся меню.",
    "en": "Floating Action Button with expanding sub-actions."
  },
  "scroll-indicator-bar": {
    "es": "Barra delgada superior que indica el porcentaje de lectura y scroll de la página.",
    "ru": "Тонкая полоса прогресса прокрутки страницы, закрепленная вверху экрана.",
    "en": "Thin progress bar at top showing page scroll percentage."
  },
  "split-pill-nav": {
    "es": "Navegación segmentada en píldoras con indicador activo deslizante.",
    "ru": "Сегментированная навигация в виде пилюль с плавным скользящим бегунком.",
    "en": "Pill-style navigation with sliding active indicator."
  },
  "step-progress-nav": {
    "es": "Barra de navegación por fases numeradas con estados de progreso para formularios largos.",
    "ru": "Пошаговая навигация по этапам с номерами и статусом выполнения.",
    "en": "Horizontal step indicator with numbered checkpoints."
  },
  "sub-navbar-pills": {
    "es": "Barra secundaria de píldoras con brillo de estado activo y scroll horizontal para paneles.",
    "ru": "Вспомогательная навигационная панель с бейджами и горизонтальной прокруткой.",
    "en": "A secondary sub-navigation pill bar with active glow background and smooth scroll."
  },
  "tab-group-nav": {
    "es": "Grupo de pestañas accesibles con transiciones suaves entre paneles de contenido.",
    "ru": "Группа доступных вкладок (табов) с плавным переключением панелей контента.",
    "en": "Horizontal tab bar with animated indicator."
  },
  "tag-filter-cloud": {
    "es": "Nube de etiquetas interactivas con estados de alternancia para filtrar listados.",
    "ru": "Облако интерактивных тегов-фильтров для сортировки каталогов и записей.",
    "en": "Clickable tag cloud with toggle states for filtering."
  },
  "timeline-milestone-nav": {
    "es": "Línea de navegación cronológica por hitos con puntos de anclaje interactivos.",
    "ru": "Хронологическая навигационная шкала по ключевым этапам проекта.",
    "en": "Timeline-based step navigation with dates and status."
  },
  "vertical-toc-nav": {
    "es": "Tabla de contenidos vertical con detección automática de encabezado activo al hacer scroll.",
    "ru": "Вертикальное оглавление страницы с подсветкой активного заголовка при чтении.",
    "en": "Vertical Table of Contents with active heading spy indicator."
  },
  "wizard-steps-nav": {
    "es": "Navegación de asistente de configuración con validación de pasos y controles adelante/atrás.",
    "ru": "Навигация мастера настройки (визарда) с проверкой шагов и кнопками управления.",
    "en": "Wizard navigation with step validation icons."
  },
  "accordion-notice": {
    "es": "Aviso colapsable en acordeón para mostrar advertencias y detalles ampliables.",
    "ru": "Сворачиваемое предупреждение-аккордеон для раскрытия подробностей уведомления.",
    "en": "Expandable alert banner with toggle for details."
  },
  "action-banner": {
    "es": "Banner informativo superior de ancho completo con botón de acción y cierre.",
    "ru": "Полноразмерный информационный баннер с кнопкой действия и возможностью закрытия.",
    "en": "Full-width announcement banner with CTA button."
  },
  "activity-status-dot": {
    "es": "Punto de estado en tiempo real con efecto de pulso luminoso para indicar actividad online.",
    "ru": "Индикатор онлайн-статуса с мягким пульсирующим свечением в реальном времени.",
    "en": "Pulsing status dot indicator with multiple color states."
  },
  "alert-banner": {
    "es": "Banner de alerta para mensajes de error, advertencia, éxito o información destacada.",
    "ru": "Баннер системных уведомлений об ошибках, предупреждениях и успешных операциях.",
    "en": "Notification alert banner with icon and dismiss button."
  },
  "confetti-feedback": {
    "es": "Animación festiva de lluvia de confeti para celebrar hitos y acciones exitosas.",
    "ru": "Праздничная анимация падающего конфетти для поздравления с успешным действием.",
    "en": "Feedback with falling confetti celebration."
  },
  "countdown-timer": {
    "es": "Temporizador de cuenta regresiva con dígitos animados para ofertas o lanzamientos.",
    "ru": "Таймер обратного отсчета с анимированными цифрами для акций и запусков.",
    "en": "Animated countdown timer with day/hour/min/sec blocks."
  },
  "dot-badge": {
    "es": "Insignia compacta con indicador circular de color para notificaciones discretas.",
    "ru": "Компактный бейдж с цветной точкой для деликатных уведомлений.",
    "en": "Minimal status badge with colored dot."
  },
  "empty-state": {
    "es": "Contenedor de estado vacío con ilustración, mensaje descriptivo y botón de acción.",
    "ru": "Блок пустого состояния с иллюстрацией, поясняющим текстом и призывом к действию.",
    "en": "Empty state placeholder with illustration and action button."
  },
  "floating-toast": {
    "es": "Notificación toast flotante con temporizador de desaparición y barra de cuenta atrás.",
    "ru": "Плавающее toast-уведомление с таймером исчезновения и прогресс-баром.",
    "en": "Floating toast notification with progress timer."
  },
  "glass-badge": {
    "es": "Insignia estilizada con efecto glassmorphism, brillo suave y colores de estado.",
    "ru": "Стильный бейдж с эффектом глассморфизма и полупрозрачным фоном.",
    "en": "Glassmorphism-styled status badge with glow."
  },
  "glass-progress": {
    "es": "Barra de progreso lineal con efecto de cristal esmerilado y porcentaje numérico.",
    "ru": "Линейная полоса прогресса с эффектом матового стекла и процентами.",
    "en": "Linear progress bar with glass effect."
  },
  "glow-spinner": {
    "es": "Indicador de carga circular con estela luminosa giratoria en degradado.",
    "ru": "Круговой индикатор загрузки с ярким вращающимся градиентным хвостом.",
    "en": "Glowing spinner animation for loading states."
  },
  "inline-status-pill": {
    "es": "Píldora de estado en línea para tablas de datos y badges de estado de proyecto.",
    "ru": "Компактная плашка статуса для таблиц данных и меток состояния задач.",
    "en": "Compact pill badge with status colors."
  },
  "loading-shimmer-bar": {
    "es": "Barra de carga con efecto de brillo lineal deslizante para estados de espera.",
    "ru": "Полоса ожидания со скользящим переливающимся световым эффектом.",
    "en": "Indeterminate loading bar with sweeping shimmer."
  },
  "notification-stack": {
    "es": "Pila de notificaciones superpuestas que se expande al pasar el cursor o hacer clic.",
    "ru": "Стопка входящих уведомлений, раскрывающаяся при наведении или клике.",
    "en": "Stacked notification cards that expand on hover."
  },
  "pulse-beacon": {
    "es": "Baliza luminosa con ondas concéntricas para resaltar elementos nuevos en la interfaz.",
    "ru": "Маяк с расходящимися световыми волнами для привлечения взгляда к новым функциям.",
    "en": "Concentric pulsing beacon for highlighting new features."
  },
  "quota-meter": {
    "es": "Medidor de uso de cuota con umbrales de color y porcentaje de consumo disponible.",
    "ru": "Индикатор расхода лимитов и квот с цветовыми порогами предупреждения.",
    "en": "Resource usage meter with percentage and warning thresholds."
  },
  "radial-progress": {
    "es": "Indicador de progreso circular vectorial con valor central y animación suave.",
    "ru": "Круговой индикатор выполнения с процентом в центре и плавной анимацией.",
    "en": "Circular SVG progress indicator with percentage text."
  },
  "skeleton-loader": {
    "es": "Estructura de carga skeleton con efecto shimmer para precargar textos e imágenes.",
    "ru": "Скелетная заглушка (скелетон) со скользящим блеском для предзагрузки контента.",
    "en": "Animated skeleton placeholder for loading cards and text."
  },
  "status-banner": {
    "es": "Banner de estado de servicio y disponibilidad con indicadores en vivo.",
    "ru": "Информационный баннер состояния сервиса и доступности платформы.",
    "en": "System status banner with uptime and incident link."
  },
  "step-counter": {
    "es": "Contador de progreso numerado para tutoriales guiados y formularios por etapas.",
    "ru": "Счетчик шагов с номерами для интерактивных обучающих подсказок и форм.",
    "en": "Numbered step indicator with completion states."
  },
  "toast-notif": {
    "es": "Mensaje emergente transitorio tipo snackbar con botón de descarte manual.",
    "ru": "Всплывающее кратковременное снэкбар-уведомление с кнопкой закрытия.",
    "en": "Transient snackbar notification."
  },
  "aspect-ratio-box": {
    "es": "Contenedor con relación de aspecto fija (16:9, 4:3, 1:1) para imágenes y vídeos.",
    "ru": "Контейнер с фиксированным соотношением сторон (16:9, 4:3, 1:1) для медиа.",
    "en": "Container that enforces consistent aspect ratios (16:9, 4:3, 1:1)."
  },
  "bento-grid": {
    "es": "Cuadrícula estilo bento con tarjetas asimétricas y proporciones de impacto visual.",
    "ru": "Сетка в стиле бенто с асимметричными блоками и адаптивным расположением.",
    "en": "A modern bento-box grid layout with variable-sized cards."
  },
  "centered-container": {
    "es": "Contenedor centrado horizontalmente con ancho máximo y relleno responsive.",
    "ru": "Центрированный контейнер с ограничением максимальной ширины и отступами.",
    "en": "Content-centering layout with responsive max-widths."
  },
  "divider-gradient": {
    "es": "Línea divisoria con degradado sutil y soporte para texto o icono central.",
    "ru": "Разделительная линия с мягким градиентом и местом для центрального значка.",
    "en": "Horizontal divider with gradient fade and optional center badge."
  },
  "glass-header": {
    "es": "Cabecera fija con efecto glassmorphism, logo animado y navegación responsive.",
    "ru": "Фиксированная шапка сайта с глассморфизмом, логотипом и адаптивным меню.",
    "en": "A sticky page header with blurred backdrop and border."
  },
  "grid-auto-fit": {
    "es": "Cuadrícula responsiva automática con CSS Grid sin necesidad de media queries complejas.",
    "ru": "Адаптивная сетка на чистом CSS Grid с автоматическим заполнением колонок.",
    "en": "Responsive grid that automatically fits columns using minmax."
  },
  "hero-centered": {
    "es": "Sección hero centrada de alto impacto con titular grande, subtítulo y grupo de botones.",
    "ru": "Центрированный главный экран с крупным заголовком, описанием и кнопками.",
    "en": "Centered hero section with headline, subtitle, and CTA button group."
  },
  "hero-split": {
    "es": "Hero dividido clásico con titular persuasivo, botones principales y previsualización gráfica a la derecha.",
    "ru": "Классический сплит-экран: убедительный текст с кнопками слева и графический блок справа.",
    "en": "Classic split-column hero with headline, badges, and side preview illustration."
  },
  "holy-grail-layout": {
    "es": "Estructura clásica holy grail con cabecera, dos barras laterales, contenido y pie de página.",
    "ru": "Классическая трехколоночная раскладка Holy Grail с боковыми панелями и футером.",
    "en": "Classic header, 2 sidebars, main content, and footer layout."
  },
  "masonry-gallery-grid": {
    "es": "Galería de imágenes tipo masonry con columnas fluidas y alturas adaptables.",
    "ru": "Галерея в стиле Masonry с динамической высотой блоков и колонками.",
    "en": "CSS column-based masonry grid for variable-height cards."
  },
  "minimal-footer": {
    "es": "Pie de página minimalista con enlaces esenciales, copyright e iconos sociales.",
    "ru": "Лаконичный футер с основными ссылками, копирайтом и социальными иконками.",
    "en": "Clean and minimal footer with links and copyright."
  },
  "multi-column-footer": {
    "es": "Pie de página completo con múltiples columnas de navegación, newsletter y redes.",
    "ru": "Полноразмерный подвал сайта с несколькими колонками навигации и формой рассылки.",
    "en": "Multi-column footer layout with navigation sections and newsletter."
  },
  "overlapping-cards-grid": {
    "es": "Cuadrícula con tarjetas parcialmente superpuestas para dar sensación de profundidad.",
    "ru": "Сетка с частично перекрывающимися карточками для создания иллюзии глубины.",
    "en": "Offset grid where cards overlap slightly for visual depth."
  },
  "responsive-cluster": {
    "es": "Contenedor flexwrap para agrupar elementos interactivos con espaciado consistente.",
    "ru": "Контейнер автовыравнивания для группировки тегов и кнопок с едиными отступами.",
    "en": "Flexbox cluster with consistent gap and automatic wrapping."
  },
  "responsive-table-wrapper": {
    "es": "Contenedor para tablas con scroll horizontal suave y sombras indicadoras de desbordamiento.",
    "ru": "Обертка для адаптивных таблиц с горизонтальной прокруткой и тенями-подсказками.",
    "en": "Overflow wrapper for data tables on small screens with shadow hints."
  },
  "scroll-snap-carousel": {
    "es": "Carrusel de tarjetas con desplazamiento fluido y anclaje scroll snap nativo de CSS.",
    "ru": "Карусель карточек с плавной прокруткой и нативной привязкой CSS Scroll Snap.",
    "en": "Horizontal scroll container with CSS scroll snap points."
  },
  "section-wrapper": {
    "es": "Contenedor de sección estructurado con encabezado, subtítulo y contenido delimitado.",
    "ru": "Универсальный блок секции с заголовком, подзаголовком и выверенными отступами.",
    "en": "Standardized page section container with title, subtitle, and content."
  },
  "sidebar-layout": {
    "es": "Diseño de dos columnas con barra lateral fija y área de contenido principal.",
    "ru": "Двухколоночный макет с закрепленной боковой панелью и областью контента.",
    "en": "Two-column layout with fixed-width sidebar and fluid main content."
  },
  "split-screen-layout": {
    "es": "Diseño de pantalla dividida al 50% ideal para inicios de sesión y páginas de aterrizaje.",
    "ru": "Экран, разделенный пополам, для страниц входа, регистрации и промо-лендингов.",
    "en": "A layout divided into two equal halves, perfect for landing pages."
  },
  "step-layout-vertical": {
    "es": "Estructura vertical por pasos con numeración y espacio amplio para explicaciones.",
    "ru": "Вертикальная пошаговая раскладка с номерами и пространством для подробных описаний.",
    "en": "Large scale vertical steps with space for detailed descriptions."
  },
  "sticky-sidebar-wrapper": {
    "es": "Contenedor con barra lateral pegajosa que permanece visible durante el scroll de página.",
    "ru": "Контейнер с липкой боковой панелью, остающейся на экране при прокрутке страницы.",
    "en": "Sidebar container that sticks while main content scrolls."
  },
  "z-pattern-section": {
    "es": "Sección con patrón visual en Z alternando imágenes y textos para guiar la lectura.",
    "ru": "Секция с чередованием текста и изображений по Z-траектории взгляда пользователя.",
    "en": "Alternating text-and-image rows following the Z-reading pattern."
  },
  "action-sheet-bottom": {
    "es": "Hoja de acciones táctiles deslizante desde la parte inferior para interfaces móviles.",
    "ru": "Нижняя шторка быстрых действий для мобильных интерфейсов.",
    "en": "iOS-style action sheet with cancel button."
  },
  "bottom-sheet-mobile": {
    "es": "Panel deslizante inferior optimizado para móviles con asa de arrastre interactiva.",
    "ru": "Мобильная шторка, плавно выезжающая снизу с ручкой для перетаскивания.",
    "en": "A mobile-optimized overlay that slides up from the bottom of the screen."
  },
  "confirmation-dialog": {
    "es": "Diálogo modal de confirmación con acciones de peligro destacadas y botones claros.",
    "ru": "Диалоговое окно подтверждения критических действий с кнопкой отмены.",
    "en": "Modal dialog for destructive/important actions with confirm/cancel."
  },
  "context-menu-floating": {
    "es": "Menú contextual flotante que aparece al hacer clic derecho con opciones rápidas.",
    "ru": "Всплывающее контекстное меню по правому клику мыши с быстрыми действиями.",
    "en": "Custom right-click / trigger context menu."
  },
  "cookie-consent-bar": {
    "es": "Barra de consentimiento de cookies conforme a RGPD con botones de aceptar y personalizar.",
    "ru": "Панель согласия на использование файлов cookie (GDPR) с кнопками настройки.",
    "en": "GDPR-compliant cookie banner with accept/manage buttons."
  },
  "cookie-preferences-drawer": {
    "es": "Panel lateral para configurar categorías detalladas de cookies técnicas y analíticas.",
    "ru": "Выдвижная панель детальной настройки категорий cookie-файлов.",
    "en": "Slide-in drawer for managing granular cookie categories."
  },
  "exit-intent-overlay": {
    "es": "Modal inteligente que se activa al detectar intención de salida del usuario de la página.",
    "ru": "Всплывающее окно удержания пользователя при попытке покинуть страницу.",
    "en": "Overlay triggered when the mouse leaves the viewport."
  },
  "floating-feedback-widget": {
    "es": "Widget flotante de feedback con selector de satisfacción y campo de sugerencias.",
    "ru": "Плавающий виджет обратной связи с выбором смайликов и полем отзыва.",
    "en": "Floating button that opens a quick rating/feedback form."
  },
  "fullscreen-search-overlay": {
    "es": "Buscador a pantalla completa con sugerencias instantáneas y resultados destacados.",
    "ru": "Полноэкранный поиск с живыми подсказками и популярными запросами.",
    "en": "Full-screen takeover search overlay."
  },
  "glass-modal": {
    "es": "Ventana modal con estética glassmorphism, fondo oscuro difuminado y foco accesible.",
    "ru": "Модальное окно с глассморфизмом, размытым задним фоном и доступным фокусом.",
    "en": "A glassmorphism styled modal dialog with backdrop blur."
  },
  "image-compare-slider": {
    "es": "Deslizador interactivo para comparar dos imágenes del antes y después en tiempo real.",
    "ru": "Интерактивный слайдер сравнения двух изображений «До и После».",
    "en": "Split-view slider to compare before/after images."
  },
  "lightbox-gallery": {
    "es": "Visor lightbox a pantalla completa para explorar galerías de imágenes con zoom.",
    "ru": "Полноэкранный просмотрщик изображений (лайтбокс) с навигацией по галерее.",
    "en": "Full-screen image viewer overlay with next/prev navigation."
  },
  "media-preview-modal": {
    "es": "Modal para previsualizar vídeos, audios y documentos sin abandonar la página.",
    "ru": "Модальное окно для предпросмотра видео, аудио и документов без перехода.",
    "en": "Modal designed for viewing video/media embeds."
  },
  "notification-center-drawer": {
    "es": "Panel lateral deslizante para gestionar notificaciones y alertas acumuladas del usuario.",
    "ru": "Боковая панель центра уведомлений со списком входящих оповещений.",
    "en": "Slide-out panel for viewing and dismissing notifications."
  },
  "quick-view-modal": {
    "es": "Modal de vista rápida para consultar detalles de productos sin recargar la página.",
    "ru": "Окно быстрого просмотра деталей товара без перехода на отдельную страницу.",
    "en": "E-commerce quick view modal for product previews."
  },
  "side-drawer": {
    "es": "Panel lateral deslizante con transiciones suaves para carritos o filtros avanzados.",
    "ru": "Выдвижная боковая панель для корзины покупок, фильтров или настроек.",
    "en": "A slide-in drawer from the edge of the screen."
  },
  "splash-intro-overlay": {
    "es": "Capa de presentación animada que da la bienvenida al usuario en su primera visita.",
    "ru": "Вступительный приветственный экран с анимацией при первом входе на сайт.",
    "en": "Full-screen welcome/loading splash that dismisses on interaction."
  },
  "spotlight-indicator": {
    "es": "Foco luminoso interactivo para guiar la atención del usuario a elementos específicos.",
    "ru": "Эффект светового пятна (прожектора) для акцентирования внимания на элементах.",
    "en": "Spotlight circle that darkens the rest of the page for feature tours."
  },
  "toast-stack-overlay": {
    "es": "Contenedor de notificaciones toast apilables en la esquina con auto-cierre temporizado.",
    "ru": "Менеджер стопки всплывающих уведомлений в углу экрана с таймером закрытия.",
    "en": "Stacking toast container in the viewport corner."
  },
  "tooltip": {
    "es": "Mensaje emergente accesible con indicador de flecha y posicionamiento flexible.",
    "ru": "Доступная всплывающая подсказка с указателем-стрелкой и удобным позиционированием.",
    "en": "A minimal tooltip component with arrow and positioning options."
  },
  "tooltip-action-tray": {
    "es": "Tooltip enriquecido que incluye botones de acción interactivos además de texto.",
    "ru": "Расширенная подсказка с интерактивными кнопками действий вместо простого текста.",
    "en": "Tooltip that contains interactive buttons instead of just text."
  },
  "tour-step-popover": {
    "es": "Bocadillo explicativo para guías interactivas y onboarding de nuevos usuarios.",
    "ru": "Всплывающая подсказка для пошагового обучения и знакомства с интерфейсом.",
    "en": "Guided tour popover with step counter, next/prev and skip buttons."
  },
  "zoom-image-overlay": {
    "es": "Ampliación de imagen fluida que expande miniaturas al centro de la pantalla.",
    "ru": "Плавное увеличение миниатюр изображений по центру экрана при нажатии.",
    "en": "Smooth image expand overlay on click."
  },
  "accordion-group-glass": {
    "es": "Grupo de acordeones con estilo glassmorphism para preguntas frecuentes y listas plegables.",
    "ru": "Группа аккордеонов с глассморфизмом для списков FAQ и раскрывающихся секций.",
    "en": "Collapsible accordion group with smooth chevron animations."
  },
  "activity-heatmap-grid": {
    "es": "Mapa de calor de actividad diaria estilo GitHub con intensidades de color y fechas.",
    "ru": "Тепловая карта активности в стиле GitHub с градацией цветов и подсказками дат.",
    "en": "GitHub-style contribution/activity heatmap grid."
  },
  "avatar-group-stack": {
    "es": "Pila de avatares superpuestos con recuento numérico de miembros adicionales.",
    "ru": "Стопка перекрывающихся аватаров с бейджем количества остальных участников.",
    "en": "Overlapping avatars with overflow count indicator."
  },
  "calendar-grid-view": {
    "es": "Vista de calendario mensual con eventos destacados, días activos y selector de mes.",
    "ru": "Месячный календарный вид с отмеченными событиями и активными датами.",
    "en": "Monthly calendar grid with event dots and active state."
  },
  "data-chips-group": {
    "es": "Grupo de chips de datos con valores numéricos y badges de incremento/decremento.",
    "ru": "Группа чипов данных с ключевыми показателями и значками изменений.",
    "en": "Dense cluster of data badges with icons and values."
  },
  "description-list-horiz": {
    "es": "Lista de descripciones con etiquetas en columna izquierda y valores alineados.",
    "ru": "Список определений с горизонтальным выравниванием терминов и значений.",
    "en": "Two-column key-value list with subtle borders."
  },
  "file-tree-view": {
    "es": "Explorador de estructura de archivos y carpetas con iconos de tipo de archivo.",
    "ru": "Дерево файлов и каталогов проекта с иконками расширений и папок.",
    "en": "Collapsible file and folder tree structure."
  },
  "gantt-chart-minimal": {
    "es": "Diagrama de Gantt minimalista para seguimiento de fases temporales y tareas.",
    "ru": "Минималистичная диаграмма Ганта для отслеживания этапов и сроков задач.",
    "en": "Horizontal timeline bar chart showing project task durations."
  },
  "glass-table": {
    "es": "Tabla de datos moderna con filas alternas, cabecera fija y estética glassmorphism.",
    "ru": "Таблица данных с матовым размытием, полосатыми строками и плавной подсветкой.",
    "en": "A modern data table with glassmorphism styling and row highlights."
  },
  "key-value-pill-group": {
    "es": "Agrupación de píldoras de atributos clave-valor para especificaciones técnicas.",
    "ru": "Группа плашек «ключ-значение» для компактного вывода характеристик.",
    "en": "Attribute pill badges showing key: value pairs."
  },
  "metric-comparison-row": {
    "es": "Fila comparativa de métricas enfrentadas con indicadores de diferencia porcentual.",
    "ru": "Строка сравнения двух метрик с процентным индикатором разницы показателей.",
    "en": "Side-by-side metric comparison with delta indicators."
  },
  "price-compare-table": {
    "es": "Tabla comparativa de planes con columnas destacadas e iconos de verificación.",
    "ru": "Сравнительная таблица тарифов с галочками включенных опций и акцентными колонками.",
    "en": "Feature comparison table with check/cross icons."
  },
  "progress-list-small": {
    "es": "Lista de barras de progreso compactas para comparar porcentajes de categorías.",
    "ru": "Список компактных полос прогресса для сравнения распределения категорий.",
    "en": "List of labeled progress bars for category breakdowns."
  },
  "rating-breakdown-bar": {
    "es": "Desglose visual de calificaciones con barras de distribución de 5 a 1 estrellas.",
    "ru": "Визуальное распределение оценок от 1 до 5 звезд с полосами долей голосов.",
    "en": "Five-star review distribution breakdown."
  },
  "sparkline-stat-card": {
    "es": "Tarjeta de métricas con gráfico sparkline SVG en miniatura y tendencia reciente.",
    "ru": "Карточка показателя с миниатюрным SVG-графиком (спарклайном) тренда.",
    "en": "Compact stat card with inline SVG trend sparkline."
  },
  "stats-grid-dashboard": {
    "es": "Panel de cuadrícula con tarjetas de estadísticas, valores destacados y porcentajes.",
    "ru": "Сетка аналитических показателей дашборда с крупными цифрами и динамикой роста.",
    "en": "Dashboard stat card grid with trend badges."
  },
  "status-timeline-feed": {
    "es": "Feed de eventos cronológicos con iconos de estado y registros de actividad.",
    "ru": "Хронологическая лента событий с иконками статуса и отметками времени.",
    "en": "Activity log timeline with timestamped status updates."
  },
  "stepper-data-vertical": {
    "es": "Línea temporal con pasos de progreso verticales y descripciones de estado.",
    "ru": "Вертикальный пошаговый таймлайн с описанием выполненных и текущих задач.",
    "en": "Vertical step indicator with complete, current, and pending states."
  },
  "tag-cloud-data": {
    "es": "Nube de etiquetas con recuentos numéricos de elementos para categorización rápida.",
    "ru": "Облако тегов с числовыми счетчиками количества записей по темам.",
    "en": "Tag cloud with item count badges."
  },
  "timeline-horiz-steps": {
    "es": "Seguimiento horizontal de eventos con marcas temporales distintivas y scroll.",
    "ru": "Горизонтальная временная шкала с датами и карточками ключевых вех.",
    "en": "Side-scrolling event tracker with distinct timestamps."
  },
  "tree-item-interactive": {
    "es": "Elemento de árbol interactivo con soporte para selecciones y ramas anidadas.",
    "ru": "Интерактивный узел дерева с поддержкой выбора и вложенных ветвей.",
    "en": "Selectable tree node with expandable children."
  },
  "user-directory-item": {
    "es": "Fila de directorio de usuarios con avatar, datos de contacto, rol y acciones.",
    "ru": "Строка каталога пользователей с аватаром, ролью, контактами и меню действий.",
    "en": "User list item with avatar, role, and action menu."
  },
  "vertical-timeline": {
    "es": "Línea de tiempo vertical para hitos históricos, evolución de producto y lanzamientos.",
    "ru": "Вертикальная временная шкала для истории развития продукта и этапов дорожной карты.",
    "en": "A vertical timeline component with glowing milestone nodes."
  },
  "animated-counter-text": {
    "es": "Texto con contador numérico que se anima fluidamente hasta alcanzar el valor objetivo.",
    "ru": "Анимированный числовой счетчик, плавно нарастающий до заданного значения.",
    "en": "Animated numeric counter that counts up to target."
  },
  "animated-underline-link": {
    "es": "Enlace interactivo con animación de subrayado expansivo que nace desde el centro.",
    "ru": "Ссылка с красивым эффектом расширяющегося подчеркивания от центра.",
    "en": "A link with a smooth underline animation that expands from the center."
  },
  "background-clip-mask": {
    "es": "Titular de texto con máscara de recorte que deja ver una imagen o degradado de fondo.",
    "ru": "Крупный заголовок с фоновым изображением или видео через маску текста.",
    "en": "Large text with background-clip mask revealing image/video pattern."
  },
  "code-inline-glass": {
    "es": "Fragmento de código en línea con fondo de cristal, borde sutil y tipografía monospace.",
    "ru": "Строчный фрагмент кода с полупрозрачным фоном, рамкой и моноширинным шрифтом.",
    "en": "Inline code tag with frosted glass background."
  },
  "curved-path-heading": {
    "es": "Titular curvo trazado sobre arco SVG ideal para sellos, insignias y emblemas creativos.",
    "ru": "Изогнутый по дуге SVG-заголовок для круглых печатей, значков и бейджей.",
    "en": "SVG textOnPath arc headline for playful badges, stamp seals, and emblems."
  },
  "cyberpunk-glitch-text": {
    "es": "Texto con animación de distorsión glitch y aberración cromática estilo cyberpunk.",
    "ru": "Текст с киберпанк-эффектом цифровых помех (глитча) и хроматической аберрацией.",
    "en": "Glitch text animation with RGB split."
  },
  "drop-cap-paragraph": {
    "es": "Párrafo editorial clásico con letra capitular inicial grande y estilizada.",
    "ru": "Журнальный абзац с крупной декоративной буквицей в начале статьи.",
    "en": "Editorial paragraph with styled drop cap first letter."
  },
  "faded-vertical-text": {
    "es": "Texto vertical decorativo con degradado transparente para fondos de diseño modernos.",
    "ru": "Вертикальный полупрозрачный текст для стильного оформления фона страниц.",
    "en": "Rotated vertical text with gradient fade for side decorations."
  },
  "floating-text-label": {
    "es": "Etiqueta tipográfica flotante con resplandor suave para resaltar características de producto.",
    "ru": "Плавающая текстовая метка со свечением для акцента на ключевых свойствах.",
    "en": "Badge label with floating bounce animation."
  },
  "glass-block-quote": {
    "es": "Bloque de cita estilizado con fondo glassmorphism, comillas grandes y autor.",
    "ru": "Цитата в рамке из матового стекла с крупными кавычками и автором.",
    "en": "Blockquote with glassmorphic backdrop and quote mark."
  },
  "glass-text-reveal": {
    "es": "Animación de revelado gradual de texto con efecto de desenfoque y brillo de cristal.",
    "ru": "Появление текста с эффектом рассеивания матового стекла и подсветкой.",
    "en": "Text that transitions from blurred to crisp."
  },
  "gradient-heading": {
    "es": "Encabezado de texto con degradado fluido multicolor y compatibilidad visual amplia.",
    "ru": "Яркий заголовок с многоцветным градиентным заполнением текста.",
    "en": "Bold heading with smooth gradient fill."
  },
  "gradient-text-marquee": {
    "es": "Marquesina continua de texto en degradado que se desplaza infinitamente en bucle.",
    "ru": "Бегущая строка с градиентным текстом, плавно перемещающаяся по экрану.",
    "en": "Infinite scrolling horizontal marquee with gradient text."
  },
  "gradient-underline-link": {
    "es": "Enlace elegante con línea de subrayado en degradado multicolor animada al interactuar.",
    "ru": "Ссылка с анимированным градиентным подчеркиванием при наведении.",
    "en": "Link with animated gradient underline."
  },
  "hacker-decode-text": {
    "es": "Efecto de decodificación de texto que pasa de caracteres aleatorios al texto final.",
    "ru": "Эффект декодирования текста хакером со случайными символами перед показом слова.",
    "en": "Scrambled character reveal that decodes into clear text."
  },
  "kbd-indicator": {
    "es": "Indicador visual de tecla de teclado (Kbd) con relieve táctil 3D para atajos.",
    "ru": "Элегантная клавиша клавиатуры (Kbd) с 3D-объемом для показа горячих клавиш.",
    "en": "Keyboard shortcut badge with 3D keycap style."
  },
  "letter-spacing-wide": {
    "es": "Titular en mayúsculas con espaciado entre letras ultra ancho para estilo editorial de lujo.",
    "ru": "Заголовок в верхнем регистре с широким трекингом (разрядкой букв) в стиле премиум.",
    "en": "Uppercase tracking-wide header for luxury aesthetics."
  },
  "minimal-list-markers": {
    "es": "Lista ordenada con marcadores geométricos minimalistas en lugar de viñetas estándar.",
    "ru": "Список с минималистичными геометрическими маркерами вместо стандартных точек.",
    "en": "Unordered list with custom minimal geometric markers."
  },
  "monospace-stat-line": {
    "es": "Línea de estadísticas en tipografía monoespaciada para consolas y datos técnicos.",
    "ru": "Строка технической статистики с моноширинным шрифтом для консолей и метрик.",
    "en": "Code/terminal styled stat line with green accent."
  },
  "neon-text-highlight": {
    "es": "Resaltador de texto con resplandor de neón vibrante para destacar palabras clave.",
    "ru": "Яркий маркерный акцент на тексте с неоновым свечением ключевых слов.",
    "en": "Text highlight with neon background glow."
  },
  "shadow-reveal-text": {
    "es": "Efecto de texto que emerge de las sombras con iluminación progresiva al pasar el ratón.",
    "ru": "Текст с эффектом объемной глубины и подсветкой теней при наведении.",
    "en": "Text that appears with dramatic drop shadow on hover."
  },
  "stroke-heading-outline": {
    "es": "Titular con texto hueco delimitado únicamente por contornos vectoriales sin relleno.",
    "ru": "Контурный полый заголовок без заливки с четкой векторной обводкой букв.",
    "en": "Outlined hollow text heading."
  },
  "text-3d-layer": {
    "es": "Capas tipográficas superpuestas que generan un efecto de profundidad tridimensional 3D.",
    "ru": "Многослойный объемный 3D-текст с реалистичными тенями глубины.",
    "en": "Text layers that create a three-dimensional depth effect."
  },
  "typewriter-text": {
    "es": "Efecto de máquina de escribir que redacta y borra frases dinámicamente con cursor intermitente.",
    "ru": "Эффект печатной машинки с набором текста и мигающим курсором.",
    "en": "Animated typewriter effect with blinking cursor."
  },
  "area-chart": {
    "es": "Gráfico de área interactivo con degradados suaves y soporte para múltiples series temporales.",
    "ru": "Интерактивный график областей с мягкими градиентами и временными рядами данных.",
    "en": "An interactive area chart with smooth gradients and multi-series support."
  },
  "bar-chart": {
    "es": "Gráfico de barras vertical con esquinas redondeadas y datos comparativos por categorías.",
    "ru": "Столбчатая диаграмма со скругленными углами и сравнением серий по категориям.",
    "en": "A clean bar chart with rounded corners and multi-series support."
  },
  "donut-chart": {
    "es": "Gráfico circular de tipo dona con proporciones porcentuales y leyenda de colores interactiva.",
    "ru": "Круговая диаграмма-пончик с процентным распределением долей и легендой.",
    "en": "An interactive donut chart with percentage breakdown and glowing segments."
  },
  "linear-progress-gauge": {
    "es": "Medidor de progreso lineal con marcas de umbral, indicador de objetivo y valores porcentuales.",
    "ru": "Линейная шкала прогресса с контрольными метками целей и процентами.",
    "en": "A linear progress gauge with threshold markers and target indicators."
  },
  "radar-metric-chart": {
    "es": "Gráfico de radar multidimensional para comparar habilidades, rendimiento y métricas técnicas.",
    "ru": "Лепестковая диаграмма (радар) для оценки навыков, производительности и метрик.",
    "en": "A multi-axis radar chart for comparing metrics across multiple dimensions."
  },
  "contact-glass-form": {
    "es": "Sección de contacto completa con formulario en tarjeta de cristal, campos interactivos y soporte directo.",
    "ru": "Секция контактов с формой на стеклянной панели, интерактивными полями и каналами связи.",
    "en": "Modern split-screen contact section featuring frosted glass form and quick support details."
  },
  "cta-app-download": {
    "es": "Sección de descarga de app móvil con mockup de teléfono, insignias de App Store y Google Play.",
    "ru": "Секция загрузки мобильного приложения с мокапом смартфона и кнопками магазинов приложений.",
    "en": "Mobile application showcase section with phone mockup preview and app store badges."
  },
  "cta-glow-banner": {
    "es": "Banner de llamada a la acción de alto impacto con resplandor radial, formulario y botones de conversión.",
    "ru": "Контрастный призыв к действию (CTA) с неоновым свечением, формой подписки и кнопками.",
    "en": "High-impact call to action banner featuring radial glow background and newsletter input."
  },
  "faq-accordion-section": {
    "es": "Sección de preguntas frecuentes con acordeón interactivo y cuadro de contacto de soporte adicional.",
    "ru": "Секция частых вопросов (FAQ) с плавным аккордеоном и блоком обращения в службу поддержки.",
    "en": "Clean FAQ section with animated accordions and support contact card."
  },
  "feature-bento-grid": {
    "es": "Cuadrícula bento de funcionalidades con tarjetas de distintos tamaños y efectos visuales modernos.",
    "ru": "Бенто-сетка функций продукта с разноразмерными блоками и современными визуальными эффектами.",
    "en": "Interactive bento-box features showcase with variable grid spans."
  },
  "feature-timeline-flow": {
    "es": "Flujo de pasos del producto en línea de tiempo con hitos numerados e imágenes descriptivas.",
    "ru": "Пошаговый процесс работы продукта в виде таймлайна с иллюстрациями каждого этапа.",
    "en": "Step-by-step product workflow section with connected milestones."
  },
  "hero-glass": {
    "es": "Cabecera hero con tarjeta de cristal esmerilado, titulares con degradado y badges interactivos.",
    "ru": "Главный экран с центральной стеклянной панелью, градиентным текстом и кнопками действий.",
    "en": "Impactful landing hero with floating glassmorphism card and gradient typography."
  },
  "hero-gradient": {
    "es": "Hero principal con orbes de luz en movimiento, titulares grandes y botones de llamada a la acción.",
    "ru": "Эффектный главный экран с анимированными световыми сферами и акцентными кнопками.",
    "en": "Stunning above-the-fold hero section with dynamic mesh gradients and glowing accents."
  },
  "hero-showcase-split": {
    "es": "Hero dividido de dos columnas con maqueta interactiva de producto, selector de temas y métricas.",
    "ru": "Двухколоночный главный экран с интерактивным макетом интерфейса и ключевыми метриками.",
    "en": "Dynamic two-column hero with interactive dashboard mockup and theme toggles."
  },
  "logo-cloud-section": {
    "es": "Sección de prueba social con marquesina continua de logos de clientes, socios y patrocinadores.",
    "ru": "Секция доверия с бегущей строкой логотипов партнеров, клиентов и спонсоров проекта.",
    "en": "Infinite scrolling logo marquee section building credibility and trust."
  },
  "pricing-comparison-matrix": {
    "es": "Matriz detallada de comparación de precios con desglose exhaustivo de funcionalidades por plan.",
    "ru": "Подробная таблица сравнения тарифов с поэтапным перечнем возможностей каждого плана.",
    "en": "Detailed SaaS pricing table with feature checkboxes and plan switcher."
  },
  "pricing-tier-cards": {
    "es": "Sección de tres tarjetas de precios con selector de facturación mensual/anual y badge popular.",
    "ru": "Секция из трех тарифных карточек с переключателем периода оплаты и отметкой хита продаж.",
    "en": "Three-tier pricing layout with monthly/annual billing switch and highlighted popular tier."
  },
  "stats-metric-showcase": {
    "es": "Sección de métricas clave de plataforma con números grandes, iconos luminosos y descripciones breves.",
    "ru": "Блок ключевых показателей с крупными цифрами, светящимися иконками и описаниями.",
    "en": "Grid of high-impact metric counters with gradient numbers and icons."
  },
  "team-grid-section": {
    "es": "Sección de equipo con tarjetas de miembros, fotos de perfil, cargos y enlaces a redes sociales.",
    "ru": "Секция представления команды с карточками участников, ролями и социальными сетями.",
    "en": "Grid of team member profiles with avatar cards and social media links."
  },
  "testimonial-grid-section": {
    "es": "Cuadrícula bento de testimonios de clientes con valoraciones de avatar, insignias verificadas y citas.",
    "ru": "Бенто-сетка отзывов клиентов с рейтингами, верифицированными бейджами и цитатами.",
    "en": "High-converting customer review bento grid featuring avatar ratings and verified badges."
  },
  "testimonial-wall-glass": {
    "es": "Muro completo de testimonios con tarjetas de cristal esmerilado, valoraciones y citas destacadas.",
    "ru": "Стена отзывов с карточками из матового стекла, рейтингом звездочек и мнениями пользователей.",
    "en": "Masonry-style customer review wall with frosted glass cards."
  },
  "glass-event-card": {
    "es": "Tarjeta vibrante para eventos y conferencias con insignia de fecha y efecto de cristal.",
    "ru": "Яркая карточка мероприятий и событий со значком даты и эффектом матового стекла.",
    "en": "Vibrant card for events with date badge and glass effect."
  },
  "glow-portfolio-card": {
    "es": "Tarjeta de portafolio con resplandor perimetral flotante que sigue los bordes.",
    "ru": "Карточка портфолио с плавающим фоновым свечением вдоль контура.",
    "en": "Card with a hovering background glow that follows the card edges."
  },
  "interactive-tilt-card": {
    "es": "Tarjeta con inclinación interactiva en el espacio 3D según la posición del cursor.",
    "ru": "Карточка с реалистичным 3D-наклоном в пространстве по положению курсора.",
    "en": "Card that tilts in 3D space based on mouse position."
  },
  "kanban-item-card": {
    "es": "Tarjeta compacta optimizada para flujos de gestión de proyectos y tareas en listas.",
    "ru": "Компактная карточка, оптимизированная для колонок управления проектами.",
    "en": "Small card optimized for list-based project management."
  },
  "music-player-mini": {
    "es": "Widget reproductor de música compacto con controles interactivos y barra de progreso.",
    "ru": "Мини-виджет аудиоплеера с кнопками управления и полосой воспроизведения.",
    "en": "Compact player widget with controls and progress bar."
  },
  "neumorphic-card": {
    "es": "Tarjeta de estilo neumórfico con sombras profundas y volumen visual realista.",
    "ru": "Неоморфная карточка с глубокими мягкими тенями для реалистичного объема.",
    "en": "A soft UI card with deep shadows for a realistic elevated look."
  },
  "notification-card": {
    "es": "Tarjeta de notificación emergente para alertas y avisos del sistema en la aplicación.",
    "ru": "Карточка уведомлений в виде всплывающего тоста для системных оповещений.",
    "en": "Toast-like card for app notifications and alerts."
  },
  "retro-game-card": {
    "es": "Tarjeta retro de videojuegos con tipografías pixeladas y líneas de escaneo CRT.",
    "ru": "Игровая карточка в ретро-стиле с пиксельными шрифтами и CRT-эффектом развертки.",
    "en": "Bold gaming card with scanlines and pixel fonts."
  },
  "stat-card": {
    "es": "Tarjeta de estadística compacta para métricas clave con icono ilustrativo.",
    "ru": "Компактная карточка статистики для отображения ключевых метрик с иконкой.",
    "en": "Compact card for displaying key metrics with an icon."
  },
  "task-kanban-card": {
    "es": "Tarjeta de tarea ágil con etiquetas de prioridad, fechas límite y avatares.",
    "ru": "Карточка задач для Agile-команд с приоритетами и сроками выполнения.",
    "en": "Agile task card with priority labels and due dates."
  },
  "testimonial-card-clean": {
    "es": "Tarjeta de testimonio limpia y minimalista para citas y opiniones de usuarios.",
    "ru": "Лаконичная карточка отзыва для цитат и рекомендаций клиентов.",
    "en": "Minimalist card for user quotes and reviews."
  },
  "pricing-compare-mini-card": {
    "es": "Tarjeta compacta de plan de precios con foco de luz en degradado y verificación de opciones.",
    "ru": "Компактная карточка тарифа с градиентным спотлайтом и галочками функций.",
    "en": "A compact pricing tier card with gradient spotlight highlight and checkmarks."
  },
  "github-repo-card": {
    "es": "Tarjeta de repositorio GitHub con indicador de lenguaje, estrellas, forks y descripción.",
    "ru": "Карточка репозитория GitHub с языком программирования, звездами и форками.",
    "en": "Developer card displaying GitHub repository name, language dot, stars, and forks."
  },
  "stats-trend-card": {
    "es": "Tarjeta analítica de KPI con valor actual, badge de tendencia y minigráfico sparkline.",
    "ru": "KPI-карточка аналитики со значением, бейджем динамики и мини-спарклайном.",
    "en": "Modern analytics KPI metric card with values, trend badge, and mini sparkline."
  },
  "animated-checkmark": {
    "es": "Icono animado de verificación SVG para confirmar operaciones completadas.",
    "ru": "Анимированная SVG-иконка галочки для подтверждения успешного действия.",
    "en": "Animated SVG success icon."
  },
  "badge": {
    "es": "Insignia versátil con variantes de color, tamaño y bordes para estados.",
    "ru": "Универсальный бейдж с вариантами цветов, размеров и контуров для статусов.",
    "en": "Versatile badge component with color, size, and border variants."
  },
  "circle-progress": {
    "es": "Indicador de progreso circular con porcentaje numérico central y animación suave.",
    "ru": "Круговой индикатор выполнения с процентом в центре и плавной анимацией.",
    "en": "Circular SVG progress bar with percentage value."
  },
  "cyber-glitch-alert": {
    "es": "Alerta futurista con efecto de distorsión glitch y estética cibernética.",
    "ru": "Футуристическое уведомление с эффектом цифрового сбоя (глитча) и неоном.",
    "en": "Futuristic alert with animated cyber glitch distortion."
  },
  "empty-state-card": {
    "es": "Tarjeta de estado vacío con gráfico decorativo, mensaje explicativo y acción principal.",
    "ru": "Карточка пустого состояния с иллюстрацией, описанием и кнопкой действия.",
    "en": "Empty state container with placeholder visual and call to action."
  },
  "glass-alert": {
    "es": "Caja de alerta estilizada con fondo glassmorphism, icono de estado y botón de cierre.",
    "ru": "Окно оповещения в стиле глассморфизма с иконкой статуса и кнопкой закрытия.",
    "en": "Glassmorphism alert box with status icon and dismiss option."
  },
  "indicator-badge-minimal": {
    "es": "Insignia indicadora minimalista para estados activos, pendientes o advertencias.",
    "ru": "Минималистичный индикатор статуса для активных или ожидающих задач.",
    "en": "Minimal status indicator badge for active or pending states."
  },
  "neon-spinner": {
    "es": "Indicador de carga circular con halo de luz de neón y rotación continua.",
    "ru": "Круговой индикатор загрузки с ярким неоновым ореолом и вращением.",
    "en": "Circular loading spinner with glowing neon aura."
  },
  "pulse-dot": {
    "es": "Punto de estado con pulso luminoso intermitente para indicar conexión en vivo.",
    "ru": "Пульсирующая точка статуса для обозначения живого подключения и онлайна.",
    "en": "Pulsing dot indicator for real-time connection status."
  },
  "rating-pill": {
    "es": "Píldora de puntuación con estrella e indicación numérica de valoración de clientes.",
    "ru": "Компактная плашка рейтинга со звездой и числовой оценкой отзывов.",
    "en": "Compact rating pill badge with star and numerical score."
  },
  "shake-error-group": {
    "es": "Contenedor de error con animación de sacudida (shake) para avisos de validación.",
    "ru": "Блок ошибки с анимацией встряхивания для привлечения внимания к валидации.",
    "en": "Error container with shake animation on invalid input."
  },
  "simple-tooltip": {
    "es": "Mensaje emergente ligero con flecha indicadora y posicionamiento automático.",
    "ru": "Легкая всплывающая подсказка со стрелочным указателем и автопозицией.",
    "en": "Lightweight tooltip with arrow and automatic positioning."
  },
  "skeleton-list": {
    "es": "Estructura de lista esqueleto con efecto de brillo simulado para precargar datos.",
    "ru": "Скелетный список с эффектом мерцания для предзагрузки строк контента.",
    "en": "Skeleton placeholder list with animated shimmer lines."
  },
  "spotlight": {
    "es": "Efecto de reflector focal que ilumina componentes específicos en la pantalla.",
    "ru": "Эффект светового луча прожектора для подсветки целевых компонентов.",
    "en": "Spotlight focus effect highlighting target components."
  },
  "step-progress": {
    "es": "Barra de progreso por pasos con estados completado, activo y pendiente.",
    "ru": "Пошаговый индикатор с завершенными, активными и ожидающими этапами.",
    "en": "Step progress indicator for multi-stage processes."
  },
  "typing-indicator": {
    "es": "Indicador de tres puntos pulsantes que simula escritura en chats y soporte en vivo.",
    "ru": "Индикатор набора текста с тремя анимированными точками для чатов поддержки.",
    "en": "Three-dot pulsing typing indicator for chat interfaces."
  },
  "progress-ring-counter": {
    "es": "Anillo de progreso circular con contador numérico animado y trazo en degradado.",
    "ru": "Круговое кольцо прогресса с анимированным числовым счетчиком и градиентом.",
    "en": "Circular SVG progress ring with animated numerical counter."
  },
  "toast-notification-group": {
    "es": "Grupo de notificaciones toast apiladas en esquina con transiciones de entrada y salida.",
    "ru": "Стек всплывающих уведомлений в углу экрана с анимацией появления и скрытия.",
    "en": "Stacked toast notifications manager with enter/exit transitions."
  },
  "animated-input": {
    "es": "Campo de texto interactivo con animación reactiva de borde y etiqueta al enfocar.",
    "ru": "Интерактивное поле ввода с анимацией рамки и метки при получении фокуса.",
    "en": "Interactive text input with dynamic border and label transitions."
  },
  "currency-input": {
    "es": "Entrada de importes monetarios con símbolo de divisa y formateo numérico automático.",
    "ru": "Поле ввода денежных сумм со знаком валюты и автоформатированием разрядов.",
    "en": "Currency input with symbol prefix and automatic formatting."
  },
  "cyberpunk-checkbox": {
    "es": "Casilla de verificación de estilo cyberpunk con colores neón y esquinas cortadas.",
    "ru": "Чекбокс в стиле киберпанк со скошенными углами и неоновым маркером.",
    "en": "Cyberpunk-styled checkbox with neon accents and angled corners."
  },
  "error-input": {
    "es": "Campo de formulario con estado de validación de error, icono y mensaje de ayuda.",
    "ru": "Поле ввода в состоянии ошибки с иконкой предупреждения и поясняющим текстом.",
    "en": "Form field showing error validation state with message."
  },
  "floating-password": {
    "es": "Campo de contraseña con etiqueta flotante y botón interactivo para mostrar/ocultar clave.",
    "ru": "Поле ввода пароля с плавающей меткой и кнопкой переключения видимости знаков.",
    "en": "Password field with floating label and toggle visibility button."
  },
  "form-group-vertical": {
    "es": "Grupo vertical de campos de formulario con etiquetas accesibles y espaciado consistente.",
    "ru": "Вертикальная группа полей формы с доступными метками и отступами.",
    "en": "Vertical form field grouping with labels and hint text."
  },
  "glass-slider": {
    "es": "Control deslizante con estética glassmorphism y pista difuminada semitransparente.",
    "ru": "Ползунок диапазона с полупрозрачным фоном дорожки в стиле глассморфизма.",
    "en": "Range slider with frosted glass track and glowing thumb."
  },
  "modern-select": {
    "es": "Menú desplegable de selección moderna con flecha animada y opciones estilizadas.",
    "ru": "Современный выпадающий список (селект) с анимированной стрелкой и стилизацией.",
    "en": "Custom styled select dropdown with animated arrow indicator."
  },
  "neumorphic-switch": {
    "es": "Interruptor táctil de estilo neumórfico con relieve suave y estados cóncavo/convexo.",
    "ru": "Неоморфный переключатель с мягким объемом и эффектом вдавливания при нажатии.",
    "en": "Soft UI switch toggle with realistic tactile depth."
  },
  "otp-input": {
    "es": "Entrada de código de un solo uso (OTP) con casillas divididas y salto automático.",
    "ru": "Поле ввода одноразового кода OTP с отдельными ячейками и автопереходом.",
    "en": "Split-cell OTP/2FA code input with automatic focus forwarding."
  },
  "rating-stars": {
    "es": "Selector interactivo de puntuación mediante estrellas para encuestas y opiniones.",
    "ru": "Интерактивный выбор рейтинга звездами для отзывов и оценок сервиса.",
    "en": "Star rating input component for user reviews."
  },
  "search-reveal": {
    "es": "Barra de búsqueda expandible que se despliega de forma fluida al pulsar sobre el icono.",
    "ru": "Раскрывающаяся строка поиска, плавно выезжающая при клике на иконку лупы.",
    "en": "Expandable search bar that slides open on icon click."
  },
  "segmented-control": {
    "es": "Control segmentado multichoice con indicador deslizante continuo entre opciones.",
    "ru": "Сегментированный переключатель с плавающим индикатором выбранного варианта.",
    "en": "Segmented option control with sliding selection indicator."
  },
  "simple-file-input": {
    "es": "Campo de selección de archivos limpio y accesible con botón de exploración customizado.",
    "ru": "Лаконичное поле выбора файла с настраиваемой кнопкой обзора.",
    "en": "Clean and accessible file upload input with custom trigger."
  },
  "stepper-input": {
    "es": "Selector numérico con botones más/menos para ajustar cantidades y unidades.",
    "ru": "Числовой шаговый счетчик с кнопками «плюс» и «минус» для изменения количества.",
    "en": "Quantity stepper with plus and minus buttons."
  },
  "tags-autocomplete-input": {
    "es": "Campo de etiquetas con sugerencias desplegables de autocompletado y borrado rápido.",
    "ru": "Поле ввода тегов с выпадающими подсказками автодополнения и удалением чипов.",
    "en": "Tag input with autocomplete dropdown suggestions."
  },
  "glass-inline-toggle-group": {
    "es": "Grupo de botones de alternancia en línea con acabado glassmorphism y selección única.",
    "ru": "Ряд кнопок-переключателей в стиле глассморфизма с единичным выбором.",
    "en": "Inline toggle button group with frosted glass finish."
  },
  "phone-country-input": {
    "es": "Selector de número de teléfono con menú de banderas y prefijos internacionales.",
    "ru": "Поле ввода телефона с выбором флага страны и международного кода.",
    "en": "International phone input with country code flags dropdown."
  },
  "glass-card-grid": {
    "es": "Cuadrícula responsiva de tarjetas con desenfoque de cristal y bordes luminosos.",
    "ru": "Адаптивная сетка карточек с матовым размытием и светящимися рамками.",
    "en": "Responsive grid of frosted glass cards with border highlights."
  },
  "masonry-grid": {
    "es": "Disposición tipo masonry para organizar tarjetas de alturas dispares en columnas fluidas.",
    "ru": "Сетка в стиле Masonry для размещения карточек разной высоты без разрывов.",
    "en": "Masonry column grid for variable-height cards."
  },
  "section-divider-text": {
    "es": "Línea separadora con texto o etiqueta central para delimitar bloques temáticos.",
    "ru": "Горизонтальный разделитель с текстом по центру для разграничения блоков.",
    "en": "Divider line with centered text badge or label."
  },
  "feature-hero": {
    "es": "Sección hero centrada en el producto con titulares llamativos y llamada a la acción.",
    "ru": "Главный экран с акцентом на преимущества продукта, заголовком и CTA.",
    "en": "Feature-focused hero section with headline and product highlights."
  },
  "vertical-stack": {
    "es": "Contenedor de pila vertical con espaciado uniforme y alineación adaptable.",
    "ru": "Вертикальный стек элементов с единообразными отступами и выравниванием.",
    "en": "Vertical stack layout container with consistent element spacing."
  },
  "sidebar-layout-wrapper": {
    "es": "Estructura envolvente para aplicaciones con barra lateral de navegación y área central.",
    "ru": "Каркас веб-приложения с боковой панелью навигации и основной рабочей областью.",
    "en": "Application shell wrapper with sidebar and main content zone."
  },
  "bento-grid-3": {
    "es": "Variante de cuadrícula bento de tres columnas para exhibir prestaciones de producto.",
    "ru": "Трехколоночная бенто-сетка для наглядной презентации ключевых возможностей.",
    "en": "Three-column bento grid variation for showcasing product capabilities."
  },
  "glass-section-header": {
    "es": "Encabezado de sección con badge decorativo, título principal y estética glassmorphic.",
    "ru": "Заголовок секции со значком категории, крупным текстом и легким стеклянным фоном.",
    "en": "Page section header with category badge and subtitle."
  },
  "full-bleed-section": {
    "es": "Sección de ancho completo de borde a borde para contenidos inmersivos.",
    "ru": "Полноэкранная секция от края до края для иммерсивных баннеров и медиа.",
    "en": "Full-bleed edge-to-edge section container."
  },
  "minimal-footer-grid": {
    "es": "Pie de página estructurado en cuadrícula con enlaces ordenados y aviso de copyright.",
    "ru": "Лаконичный подвал сайта с сеткой категорий ссылок и копирайтом.",
    "en": "Structured footer grid with organized link columns and copyright."
  },
  "scroll-snap-section": {
    "es": "Contenedor con desplazamiento anclado por páginas mediante CSS Scroll Snap.",
    "ru": "Постраничная прокрутка секций с фиксацией нативного CSS Scroll Snap.",
    "en": "Full-height section container with CSS scroll snap snapping."
  },
  "cluster-horizontal": {
    "es": "Agrupador horizontal flexible para botones e insignias con ajuste automático de línea.",
    "ru": "Горизонтальный кластер для кнопок и меток с автоматическим переносом строк.",
    "en": "Horizontal cluster container with flex wrap and uniform gap."
  },
  "center-fixed-box": {
    "es": "Caja de contenido centrada exacta en el visor con dimensiones máximas controladas.",
    "ru": "Точно центрированный блок по осям экрана с ограничением ширины.",
    "en": "Center-aligned box container fixed in viewport center."
  },
  "gallery-grid-4": {
    "es": "Galería de cuatro columnas responsiva para portfolios fotográficos y proyectos.",
    "ru": "Четырехколоночная адаптивная галерея для фотографий и проектов портфолио.",
    "en": "Four-column responsive image gallery grid."
  },
  "landing-section-split": {
    "es": "Sección dividida para páginas de inicio con texto argumental y elemento visual lateral.",
    "ru": "Сплит-секция для лендингов с аргументирующим текстом и графикой сбоку.",
    "en": "Two-column landing section with value proposition copy and side graphic."
  },
  "footer-centered-minimal": {
    "es": "Pie de página centrado minimalista con enlaces horizontales y firma del proyecto.",
    "ru": "Центрированный лаконичный подвал с горизонтальными ссылками и копирайтом.",
    "en": "Centered minimal footer layout with horizontal links."
  },
  "holy-grail-grid": {
    "es": "Esquema moderno Holy Grail implementado sobre CSS Grid para layouts complejos.",
    "ru": "Современная раскладка Holy Grail на CSS Grid для сложных порталов.",
    "en": "Holy grail layout implemented with modern CSS grid."
  },
  "diagonal-section-divider": {
    "es": "Separador angular oblicuo que crea transiciones dinámicas entre secciones de página.",
    "ru": "Диагональный скошенный разделитель для динамичного перехода между секциями.",
    "en": "Diagonal angled section divider creating energetic page transitions."
  },
  "bottom-nav-mobile": {
    "es": "Barra de navegación fija en la parte inferior para aplicaciones móviles táctiles.",
    "ru": "Закрепленная нижняя панель навигации для мобильных веб-приложений.",
    "en": "Fixed bottom navigation bar for mobile web apps."
  },
  "pagination-glass": {
    "es": "Control de paginación con acabado glassmorphism y realce luminoso de página activa.",
    "ru": "Пагинация со стеклянным фоном и яркой подсветкой активного номера страницы.",
    "en": "Pagination controls with frosted glass styling and active glow."
  },
  "breadcrumbs-minimal": {
    "es": "Ruta de navegación con separadores sutiles y enlaces a niveles superiores.",
    "ru": "Минималистичные хлебные крошки для понятной навигации по иерархии страниц.",
    "en": "Minimal breadcrumb trail with subtle separators."
  },
  "vertical-tabs": {
    "es": "Pestañas dispuestas verticalmente a la izquierda con paneles de contenido a la derecha.",
    "ru": "Вертикальные вкладки с левым списком переключения и правым блоком контента.",
    "en": "Vertical tab navigation list with corresponding content panels."
  },
  "scroll-progress-top": {
    "es": "Barra superior ultrafina que refleja el progreso de desplazamiento en tiempo real.",
    "ru": "Ультратонкая верхняя полоса, показывающая прогресс прокрутки страницы.",
    "en": "Top scroll progress bar reflecting reading progress."
  },
  "command-palette-ui": {
    "es": "Interfaz de paleta de comandos con buscador rápido y lista de acciones sugeridas.",
    "ru": "Интерфейс командной палитры быстрого поиска с горячими клавишами.",
    "en": "Command palette modal with search input and filtered actions."
  },
  "mega-menu-glass": {
    "es": "Mega menú con paneles traslúcidos glassmorphism y columnas organizadas por áreas.",
    "ru": "Мега-меню с полупрозрачным фоном и структурированными колонками разделов.",
    "en": "Frosted glass mega menu dropdown with grouped navigation columns."
  },
  "tab-underline": {
    "es": "Pestañas con línea de subrayado deslizante animada que resalta la sección activa.",
    "ru": "Вкладки с плавной скользящей линией подчеркивания активного раздела.",
    "en": "Tabs with animated sliding underline highlight."
  },
  "retro-arcade-menu": {
    "es": "Menú retro de estilo arcade con efectos de selección luminosa y tipografía pixel.",
    "ru": "Ретро-меню в стиле аркадных игр с пиксельным шрифтом и неоновым маркером.",
    "en": "Arcade-styled menu with pixel font and highlighted cursor."
  },
  "dot-navigation-slider": {
    "es": "Indicadores de puntos para navegación entre diapositivas de carruseles interactivos.",
    "ru": "Точечная навигация (буллеты) для переключения слайдов в каруселях.",
    "en": "Dot pagination bullets for slide carousels and multi-step flows."
  },
  "radial-icon-menu": {
    "es": "Menú radial con iconos dispuestos en abanico circular alrededor de un botón central.",
    "ru": "Радиальное меню с иконками, раскрывающимися по кругу вокруг центральной кнопки.",
    "en": "Radial circular menu expanding outward from central trigger."
  },
  "burger-morph-icon": {
    "es": "Icono de hamburguesa con animación de metamorfosis hacia una X de cierre al activarse.",
    "ru": "Иконка-гамбургер с плавной анимацией превращения в крестик закрытия.",
    "en": "Hamburger icon with morphing transition to close X."
  },
  "lang-switcher-pill": {
    "es": "Selector compacto de idioma en píldora con indicador de bandera y código de idioma.",
    "ru": "Компактный переключатель языка в виде пилюли с кодами локалей.",
    "en": "Pill-style language switcher with locale code triggers."
  },
  "user-profile-nav": {
    "es": "Menú de usuario desplegable con avatar, nombre, correo y enlaces de configuración.",
    "ru": "Выпадающее меню пользователя с аватаром, почтой и ссылками профиля.",
    "en": "User profile dropdown menu with avatar and account options."
  },
  "pagination-infinite-ui": {
    "es": "Indicador de carga para paginación continua con botón de cargar más resultados.",
    "ru": "Компонент для бесконечной ленты с кнопкой подгрузки следующих результатов.",
    "en": "Load-more trigger bar for infinite scroll list views."
  },
  "floating-tab-bar": {
    "es": "Barra flotante de pestañas elevada con sombra difuminada y bordes redondeados.",
    "ru": "Плавающая панель вкладок со скругленными краями и мягкой тенью.",
    "en": "Elevated floating tab bar with soft backdrop shadow."
  },
  "simple-footer-glass": {
    "es": "Pie de página sencillo con acabado de cristal esmerilado, logo y derechos reservados.",
    "ru": "Простой стеклянный футер с логотипом, ссылками и копирайтом.",
    "en": "Minimal frosted glass footer with logo and essential links."
  },
  "quick-jump-dock": {
    "es": "Dock lateral de salto rápido a las secciones principales de la página actual.",
    "ru": "Боковая док-панель для быстрого перемещения между ключевыми разделами.",
    "en": "Compact side dock for fast section jumping."
  },
  "step-breadcrumb-bar": {
    "es": "Barra combinada de migas de pan y progreso por etapas para procesos secuenciales.",
    "ru": "Комбинированная строка хлебных крошек и шагов выполнения процесса.",
    "en": "Sequential breadcrumb trail with step status indicators."
  },
  "overlay-modal": {
    "es": "Ventana modal accesible con fondo oscurecido, foco bloqueado y cierre con Escape.",
    "ru": "Доступное модальное окно с затемнением фона, захватом фокуса и закрытием по Esc.",
    "en": "Accessible dialog modal with backdrop scrim and keyboard trap."
  },
  "side-drawer-right": {
    "es": "Panel deslizante desde el lateral derecho para filtros, carritos y opciones avanzadas.",
    "ru": "Выдвижная шторка с правого края экрана для корзины покупок и фильтров.",
    "en": "Right-hand slide-over drawer panel with smooth backdrop fade."
  },
  "popover-menu-glass": {
    "es": "Menú popover flotante con efecto glassmorphism anclado a un botón disparador.",
    "ru": "Всплывающее меню (поповер) с глассморфизмом, привязанное к кнопке-триггеру.",
    "en": "Floating popover card attached to trigger button."
  },
  "command-dialog": {
    "es": "Diálogo modal para paleta de comandos con buscador rápido de acciones y atajos.",
    "ru": "Модальное окно командной строки быстрого поиска действий по проекту.",
    "en": "Command palette dialog with keyboard search focus."
  },
  "lightbox-overlay": {
    "es": "Visor de imágenes sobre capa oscura a pantalla completa con controles de cierre.",
    "ru": "Полноэкранный просмотрщик изображений с затемнением фона и кнопкой закрытия.",
    "en": "Image viewer overlay with dimmed background and close button."
  },
  "cookie-banner-glass": {
    "es": "Banner flotante de aviso de cookies con diseño de cristal y opciones de configuración.",
    "ru": "Плавающий баннер файлов cookie в стеклянном стиле с кнопками согласия.",
    "en": "Frosted glass cookie notice with accept and preferences actions."
  },
  "loading-overlay-full": {
    "es": "Capa de carga a pantalla completa con spinner luminoso para transiciones pesadas.",
    "ru": "Полноэкранный экран ожидания со светящимся спиннером для долгих операций.",
    "en": "Full-screen loading overlay with animated glowing spinner."
  },
  "backdrop-blur-mask": {
    "es": "Máscara de desenfoque de fondo para concentrar la atención en el elemento central.",
    "ru": "Маска глубокого размытия фона для фокусировки внимания на диалоге.",
    "en": "Full viewport backdrop blur scrim."
  },
  "help-bubble-overlay": {
    "es": "Burbuja flotante de ayuda y preguntas frecuentes accesible en la esquina inferior.",
    "ru": "Плавающая круглая кнопка справки с выпадающим меню частых вопросов.",
    "en": "Floating corner help bubble with popout FAQ list."
  },
  "search-overlay-fullscreen": {
    "es": "Capa de búsqueda a pantalla completa con entrada de texto grande y resultados rápidos.",
    "ru": "Полноэкранный поисковый слой с крупным полем ввода и мгновенными результатами.",
    "en": "Full-screen search interface with prominent search field."
  },
  "age-verification-overlay": {
    "es": "Modal de verificación de mayoría de edad con botones de confirmación y rechazo.",
    "ru": "Окно подтверждения возраста с кнопками согласия и перенаправления.",
    "en": "Age gate verification dialog overlay."
  },
  "context-menu-overlay": {
    "es": "Menú contextual de opciones rápidas que se posiciona según las coordenadas del ratón.",
    "ru": "Контекстное меню быстрых действий с привязкой к координатам мыши.",
    "en": "Positioned context menu overlay triggered by secondary click."
  },
  "mobile-nav-overlay": {
    "es": "Menú de navegación para móviles a pantalla completa con enlaces de gran tamaño.",
    "ru": "Полноэкранное мобильное меню с крупными ссылками и анимацией открытия.",
    "en": "Full-screen mobile navigation menu overlay."
  },
  "floating-tray-actions": {
    "es": "Bandeja flotante inferior de acciones rápidas con botones de acceso directo.",
    "ru": "Плавающая панель быстрых действий внизу экрана для мобильных устройств.",
    "en": "Bottom floating action tray with icon quick-actions."
  }
};
