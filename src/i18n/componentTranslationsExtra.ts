// src/i18n/componentTranslationsExtra.ts
// Localized descriptions for the SVG charts & statistics and the additional sections.
import type { ComponentTranslation } from './componentTranslations';

export const componentTranslationsExtra: Record<string, ComponentTranslation> = {
  // ── App & Dashboard ─────────────────────────────────────────
  'app-sidebar': {
    es: "Barra lateral SaaS con selector de espacio de trabajo, navegación agrupada con iconos y contadores, modo compacto y tarjeta de plan.",
    ru: "Боковое меню SaaS: переключатель рабочего пространства, группы пунктов с иконками и счётчиками, компактный режим и карточка тарифа.",
  },
  'app-topbar': {
    es: "Barra superior con búsqueda ⌘K, notificaciones con no leídas, cambio de tema y menú de usuario.",
    ru: "Верхняя панель с поиском ⌘K, уведомлениями, переключателем темы и меню пользователя.",
  },
  'page-header': {
    es: "Cabecera de página de app con migas, descripción, selector de periodo, botones y pestañas.",
    ru: "Заголовок страницы приложения: хлебные крошки, описание, выбор периода, кнопки и вкладки.",
  },
  'data-table': {
    es: "Tabla con búsqueda, chips de estado, columnas ordenables, selección de filas, acciones masivas, paginación y celdas tipadas.",
    ru: "Таблица с поиском, фильтрами статусов, сортировкой, выбором строк, массовыми действиями, пагинацией и типизированными ячейками.",
  },
  'room-rack': {
    es: "Línea de tiempo de reservas: habitaciones por días con barras de color por estado, marca de hoy y panel de detalle.",
    ru: "Шахматка бронирований: номера по дням, цветные полосы по статусу, отметка «сегодня» и панель деталей.",
  },
  'housekeeping-board': {
    es: "Tablero de estado de habitaciones por planta (limpia, sucia, en revisión, ocupada, fuera de servicio) con filtros y cambio rápido.",
    ru: "Доска статусов номеров по этажам: чистый, грязный, проверка, занят, не работает — с фильтрами и быстрым переключением.",
  },
  'arrivals-board': {
    es: "Lista de recepción con llegadas, salidas y huéspedes alojados, con check-in / check-out en un clic.",
    ru: "Список ресепшена: заезды, выезды и проживающие, заселение и выселение в один клик.",
  },
  'guest-profile-card': {
    es: "Ficha CRM con avatar, nivel de fidelidad, contacto, estadísticas, preferencias, próxima estancia y notas.",
    ru: "Карточка CRM: аватар, уровень лояльности, контакты, статистика, предпочтения, ближайший заезд и заметки.",
  },
  'settings-section': {
    es: "Bloque de ajustes con título y ayuda junto a una tarjeta de campos con Guardar / Cancelar y confirmación.",
    ru: "Блок настроек: заголовок и подсказка рядом с карточкой полей, кнопки «Сохранить/Отмена» и подтверждение.",
  },
  'switch-row': {
    es: "Fila de ajustes con etiqueta, descripción e interruptor accesible.",
    ru: "Строка настроек с подписью, описанием и доступным переключателем.",
  },
  'team-members': {
    es: "Gestión de equipo con roles, estado, invitaciones y eliminación en dos pasos.",
    ru: "Управление командой: роли, статусы, приглашения и удаление в два шага.",
  },
  'plan-usage-card': {
    es: "Resumen de facturación con plan, renovación, medidores de uso con umbrales, método de pago y mejora de plan.",
    ru: "Сводка по оплате: тариф, продление, счётчики использования с порогами, способ оплаты и повышение тарифа.",
  },
  'auth-card': {
    es: "Inicio de sesión / registro a pantalla partida con SSO, mostrar contraseña, validación y panel de marca.",
    ru: "Вход и регистрация на разделённом экране: SSO, показ пароля, проверка и панель бренда.",
  },
  // ── E-commerce ──────────────────────────────────────────────
  'shop-header-editorial': {
    es: "Cabecera editorial de tienda: línea de aviso, logotipo centrado, mega menú con destacado, cambio de tema y contador de la bolsa en vivo.",
    ru: "Редакционная шапка магазина: строка объявления, логотип по центру, мега-меню, переключатель темы и живой счётчик корзины.",
  },
  'shop-hero-editorial': {
    es: "Hero de tienda estilo revista con titular serif gigante, palabra en cursiva, imagen destacada con pie y cinta en movimiento.",
    ru: "Hero магазина в журнальном стиле: крупный serif-заголовок, курсивное слово, главное фото с подписью и бегущая строка.",
  },
  'shop-collection-mosaic': {
    es: "Cuadrícula asimétrica de colecciones con una pieza destacada, numeración, recuento y enlaces subrayados.",
    ru: "Асимметричная сетка коллекций с главной плиткой, нумерацией, количеством товаров и ссылками.",
  },
  'shop-product-rail': {
    es: "Carrusel de productos con scroll-snap, tarjetas minimalistas numeradas, flechas y barra de progreso.",
    ru: "Карусель товаров со scroll-snap, нумерованными минималистичными карточками, стрелками и прогрессом.",
  },
  'shop-lookbook': {
    es: "«Compra el look»: imagen con puntos numerados que abren fichas con añadir a la bolsa, con lista accesible equivalente.",
    ru: "«Купить образ»: фото с точками, открывающими карточки товаров с кнопкой «в корзину», и доступный список.",
  },
  'shop-values-marquee': {
    es: "Franja de valores de marca: marquesina en cursiva gigante y columnas numeradas.",
    ru: "Полоса ценностей бренда: крупная курсивная бегущая строка и нумерованные колонки.",
  },
  'shop-reviews-editorial': {
    es: "Opiniones de clientes en grandes citas serif, una a una, con producto, paginación numerada y nota media.",
    ru: "Отзывы покупателей крупными serif-цитатами по одной, с товаром, нумерацией и общей оценкой.",
  },
  'shop-newsletter-editorial': {
    es: "Suscripción editorial de gran tamaño con campo subrayado, consentimiento y validación en línea.",
    ru: "Крупная редакционная подписка с полем-подчёркиванием, согласием и проверкой.",
  },
  'shop-footer-wordmark': {
    es: "Footer de tienda con columnas de enlaces, contacto, métodos de pago y logotipo gigante de borde a borde.",
    ru: "Футер магазина с колонками ссылок, контактами, способами оплаты и огромным логотипом.",
  },
  'shop-category-hero': {
    es: "Cabecera de catálogo con migas, título de categoría gigante con recuento, intro, subcategorías y franja de imágenes.",
    ru: "Шапка каталога: хлебные крошки, крупное название категории с количеством, описание, подкатегории и изображения.",
  },
  'product-card-minimal': {
    es: "Tarjeta de producto editorial: imagen alta que cambia al pasar el ratón, tallas de añadido rápido, nombre, precio y colores.",
    ru: "Редакционная карточка товара: высокое фото со сменой при наведении, быстрый выбор размера, название, цена и цвета.",
  },
  'filter-bar': {
    es: "Barra horizontal de catálogo con chips de categoría, panel de refinado (precio, color, stock), orden y contador.",
    ru: "Горизонтальная панель каталога: чипы категорий, панель уточнения (цена, цвет, наличие), сортировка и счётчик.",
  },
  'cart-page-list': {
    es: "Página completa de la bolsa: productos con cantidad y eliminar, nota de regalo, progreso a envío gratis y resumen.",
    ru: "Полная страница корзины: товары с количеством и удалением, подарочная записка, прогресс бесплатной доставки и итог.",
  },
  'cart-toast': {
    es: "Notificaciones apiladas en vivo: «Añadido al carrito» con acción para ver el carrito y cualquier aviso propio enviado con el evento ack:notify.",
    ru: "Живые всплывающие уведомления: «Добавлено в корзину» с кнопкой корзины и любые свои сообщения через событие ack:notify.",
  },
  'live-activity-toast': {
    es: "Aviso rotativo de compras recientes (prueba social) que entra y sale; se pausa al pasar el ratón y se puede cerrar durante la sesión.",
    ru: "Сменяющиеся уведомления о недавних покупках (социальное доказательство); пауза при наведении и закрытие на сессию.",
  },
  'countdown-banner': {
    es: "Cuenta atrás en vivo para ofertas con días, horas, minutos y segundos, CTA y estado finalizado; fecha fija o plazo por visitante.",
    ru: "Живой обратный отсчёт распродажи — дни, часы, минуты, секунды, кнопка и состояние «завершено»; фиксированная дата или срок для каждого посетителя.",
  },
  'stock-indicator': {
    es: "Aviso de stock bajo con barra de nivel y contador en vivo de personas viendo el producto.",
    ru: "Уведомление о малом остатке со шкалой и живым счётчиком просматривающих товар.",
  },
  'cart-store': {
    es: "Estado del carrito sin frameworks compartido por todos los componentes de tienda: persistencia en localStorage, sincronización entre pestañas, botones de añadir y formato de precios.",
    ru: "Состояние корзины без фреймворков для всех компонентов магазина: хранение в localStorage, синхронизация вкладок, кнопки «в корзину» и формат цен.",
  },
  'store-product-card': {
    es: "Tarjeta de producto con ilustración o foto, insignia, valoración, colores, precio anterior, favoritos y botón de añadir al carrito.",
    ru: "Карточка товара с иллюстрацией или фото, бейджем, рейтингом, цветами, старой ценой, избранным и кнопкой «в корзину».",
  },
  'product-grid': {
    es: "Cuadrícula responsiva de tarjetas de producto con estado vacío; es el objetivo de FilterSidebar y ProductToolbar.",
    ru: "Адаптивная сетка карточек товаров с пустым состоянием — цель для FilterSidebar и ProductToolbar.",
  },
  'store-header': {
    es: "Barra de navegación de tienda con desplegables de categorías, buscador, cuenta y carrito con contador en vivo; menú móvil incluido.",
    ru: "Шапка магазина с выпадающими категориями, поиском, аккаунтом и корзиной с живым счётчиком; мобильное меню в комплекте.",
  },
  'cart-drawer': {
    es: "Carrito lateral con cantidades, eliminar, progreso hacia envío gratis y subtotal. Modal accesible con foco atrapado.",
    ru: "Выезжающая корзина с количеством, удалением, прогрессом до бесплатной доставки и итогом. Доступное модальное окно.",
  },
  'promo-bar': {
    es: "Barra de anuncios con mensajes rotativos, pausa al pasar el ratón y botón de cerrar recordado durante la sesión.",
    ru: "Тонкая панель объявлений с ротацией сообщений, паузой при наведении и кнопкой закрытия.",
  },
  'store-hero': {
    es: "Hero de tienda con titular en degradado, CTAs, cifras de confianza y producto destacado flotante.",
    ru: "Hero магазина с градиентным заголовком, кнопками, цифрами доверия и парящим избранным товаром.",
  },
  'category-tiles': {
    es: "Cuadrícula de categorías con ilustraciones, número de productos y flecha animada.",
    ru: "Сетка категорий с иллюстрациями, количеством товаров и анимированной стрелкой.",
  },
  'trust-badges': {
    es: "Fila de garantías de la tienda (envío, devoluciones, pago seguro y soporte) en estilo tarjeta, en línea o dividido.",
    ru: "Ряд гарантий магазина — доставка, возврат, безопасная оплата и поддержка — в виде карточек, строки или с разделителями.",
  },
  'filter-sidebar': {
    es: "Filtros de categoría, precio, color, valoración y stock que filtran y ordenan una ProductGrid al instante, sincronizados con la URL.",
    ru: "Фильтры по категории, цене, цвету, рейтингу и наличию, мгновенно фильтрующие и сортирующие ProductGrid с синхронизацией URL.",
  },
  'product-toolbar': {
    es: "Cabecera de catálogo con contador de resultados en vivo y selector de orden (ModernSelect) conectado a FilterSidebar.",
    ru: "Заголовок каталога с живым счётчиком результатов и сортировкой (ModernSelect), связанной с FilterSidebar.",
  },
  'product-gallery': {
    es: "Visor de imágenes de producto con escenario grande y miniaturas navegables con teclado; genera vistas ilustradas si no hay fotos.",
    ru: "Просмотр изображений товара с большим окном и миниатюрами с клавиатурной навигацией; без фото создаёт иллюстрированные ракурсы.",
  },
  'variant-picker': {
    es: "Muestras de color o tallas como grupo de radios nativo que mantiene sincronizado el botón de añadir al carrito.",
    ru: "Выбор цвета или размера как нативная группа радиокнопок, синхронизированная с кнопкой «в корзину».",
  },
  'product-buy-box': {
    es: "Bloque de compra de la ficha: precio, ahorro, color y talla, cantidad, añadir al carrito, comprar ya y detalles desplegables.",
    ru: "Блок покупки на странице товара: цена, скидка, цвет и размер, количество, «в корзину», «купить сейчас» и раскрывающиеся детали.",
  },
  'order-summary': {
    es: "Resumen lateral del checkout con productos, códigos promocionales, envío, impuestos y total en vivo según el método de envío.",
    ru: "Боковая сводка заказа с товарами, промокодами, доставкой, налогом и живым итогом по выбранному способу доставки.",
  },
  'checkout-form': {
    es: "Checkout en una página (contacto, entrega, envío y pago) con autocompletado, validación y confirmación animada.",
    ru: "Оформление заказа на одной странице — контакты, доставка, способ доставки и оплата — с автозаполнением, проверкой и анимированным подтверждением.",
  },
  'product-media': {
    es: "Imagen de producto: una foto real o un fondo tintado con una de 16 ilustraciones de producto a línea.",
    ru: "Изображение товара: реальное фото или цветной фон с одной из 16 линейных иллюстраций товаров.",
  },
  'product-rating': {
    es: "Valoración con estrellas de solo lectura con relleno fraccionario, valor y número de reseñas, con una única etiqueta accesible.",
    ru: "Рейтинг звёздами только для чтения с дробной заливкой, значением и числом отзывов и единой доступной подписью.",
  },
  // ── Charts & statistics ─────────────────────────────────────
  'chart-frame': {
    es: 'Contenedor accesible compartido por todos los gráficos SVG: tarjeta, cabecera, leyenda, tooltip y tabla de datos alternativa.',
    ru: 'Общая доступная оболочка для всех SVG-графиков: карточка, заголовок, легенда, подсказка и таблица данных.',
  },
  'line-chart': {
    es: 'Gráfico de líneas SVG multiserie con curvas suaves, lineales o escalonadas, relleno degradado y tooltip con cruceta.',
    ru: 'Многосерийный SVG-график линий с плавными, линейными или ступенчатыми кривыми, градиентной заливкой и перекрестием.',
  },
  'stacked-area-chart': {
    es: 'Gráfico de áreas apiladas o normalizadas al 100% que muestra cómo cada capa contribuye al total.',
    ru: 'Накопительный график областей (или нормированный до 100%), показывающий вклад каждого слоя в общий итог.',
  },
  'range-area-chart': {
    es: 'Banda de mínimo/máximo con línea de mediana, ideal para percentiles de latencia, temperaturas o rangos de precio.',
    ru: 'Полоса минимума/максимума с линией медианы — для перцентилей задержки, температур и ценовых диапазонов.',
  },
  'forecast-line-chart': {
    es: 'Datos reales en línea continua y proyección discontinua con cono de confianza y divisor de «Hoy».',
    ru: 'Факт сплошной линией, прогноз пунктиром с расширяющимся коридором доверия и отметкой «Сегодня».',
  },
  'slope-chart': {
    es: 'Comparación antes/después entre dos momentos con líneas ascendentes y descendentes en colores de estado.',
    ru: 'Сравнение «до/после» между двумя моментами времени с растущими и падающими линиями в цветах статуса.',
  },
  'bump-chart': {
    es: 'Gráfico de ranking en el tiempo que sigue la posición de cada entidad con nodos numerados.',
    ru: 'График изменения рейтинга во времени с пронумерованными узлами позиций для каждой сущности.',
  },
  'sparkline-chart': {
    es: 'Mini tendencia en línea, área o micro-barras para tablas, tarjetas KPI y texto corrido.',
    ru: 'Компактный спарклайн (линия, область или микро-столбцы) для таблиц, KPI-карточек и текста.',
  },
  'grouped-bar-chart': {
    es: 'Barras verticales agrupadas para comparar varias series entre categorías, con extremos redondeados.',
    ru: 'Сгруппированные вертикальные столбцы для сравнения нескольких серий по категориям со скруглёнными концами.',
  },
  'stacked-bar-chart': {
    es: 'Barras apiladas verticales u horizontales con modo 100% y separación de 2px entre segmentos.',
    ru: 'Вертикальные или горизонтальные накопительные столбцы с режимом 100% и зазором 2px между сегментами.',
  },
  'horizontal-bar-chart': {
    es: 'Ranking en barras horizontales con etiquetas y valores, un solo color y resaltado opcional.',
    ru: 'Рейтинг в горизонтальных столбцах с подписями и значениями, одним цветом и опциональной подсветкой.',
  },
  'diverging-bar-chart': {
    es: 'Barras horizontales que divergen desde cero para varianzas, sentimiento y deltas de resultados.',
    ru: 'Горизонтальные столбцы, расходящиеся от нуля, для отклонений, тональности и дельт P&L.',
  },
  'waterfall-chart': {
    es: 'Gráfico de cascada que muestra cómo un valor inicial crece o se reduce con pasos positivos y negativos.',
    ru: 'Каскадная диаграмма: как начальное значение растёт или снижается за счёт положительных и отрицательных шагов.',
  },
  'histogram-chart': {
    es: 'Agrupa valores en intervalos iguales y muestra la distribución con marcadores de media y mediana.',
    ru: 'Разбивает значения на равные интервалы и показывает распределение с отметками среднего и медианы.',
  },
  'lollipop-chart': {
    es: 'Tallos finos con puntos de valor y línea de objetivo opcional; alternativa ligera a las barras.',
    ru: 'Тонкие стержни с точками значений и опциональной линией цели — лёгкая альтернатива столбцам.',
  },
  'dumbbell-chart': {
    es: 'Dos puntos conectados por fila que muestran la diferencia entre antes/después o dos grupos.',
    ru: 'Две соединённые точки в каждой строке показывают разрыв между «до/после» или двумя группами.',
  },
  'bullet-chart': {
    es: 'Barras KPI frente a objetivo con bandas cualitativas de rendimiento y estado explícito.',
    ru: 'Компактные KPI-полосы против цели с качественными диапазонами и явным статусом выполнения.',
  },
  'population-pyramid': {
    es: 'Barras horizontales enfrentadas que comparan dos grupos en franjas ordenadas como edades.',
    ru: 'Встречные горизонтальные столбцы для сравнения двух групп по упорядоченным диапазонам, например возрасту.',
  },
  'radial-bar-chart': {
    es: 'Arcos de progreso concéntricos sobre una escala 0–100% con lista de desglose etiquetada.',
    ru: 'Концентрические дуги прогресса по шкале 0–100% с подписанным списком значений.',
  },
  'segmented-bar-chart': {
    es: 'Una barra segmentada de parte-del-todo con etiquetas y desglose; más clara que una tarta.',
    ru: 'Одна сегментированная полоса «часть целого» с подписями и разбивкой — нагляднее круговой диаграммы.',
  },
  'pie-chart': {
    es: 'Tarta o dona en SVG puro con separación entre porciones, total central y lista de valores.',
    ru: 'Круговая или кольцевая диаграмма на чистом SVG с зазорами, итогом в центре и списком значений.',
  },
  'gauge-chart': {
    es: 'Indicador semicircular de progreso hacia un objetivo con el valor siempre visible como texto.',
    ru: 'Полукруглый индикатор прогресса к цели со значением, всегда показанным текстом.',
  },
  'waffle-chart': {
    es: 'Cuadrícula de 10×10 donde cada casilla es un 1% del total; visión intuitiva de porcentajes.',
    ru: 'Сетка 10×10, где каждая клетка — 1% целого; интуитивное отображение процентов.',
  },
  'treemap-chart': {
    es: 'Treemap cuadriculado donde el área de cada bloque es proporcional a su valor, agrupado por color.',
    ru: 'Squarified-тримап, где площадь плитки пропорциональна значению, с группировкой по цвету.',
  },
  'funnel-chart': {
    es: 'Embudo de conversión con etapas, caída entre pasos y tasa de conversión global.',
    ru: 'Воронка конверсии с этапами, потерями между шагами и общей конверсией.',
  },
  'sunburst-chart': {
    es: 'Dona jerárquica de dos niveles con categorías padre en el interior y sus hijos en el anillo exterior.',
    ru: 'Двухуровневая иерархическая диаграмма: родительские категории внутри, дочерние — во внешнем кольце.',
  },
  'activity-rings': {
    es: 'Anillos concéntricos de objetivos con valores, metas y porcentaje; superar el 100% da otra vuelta.',
    ru: 'Концентрические кольца целей со значениями и процентами; более 100% продолжает новый круг.',
  },
  'scatter-plot': {
    es: 'Diagrama de dispersión X/Y para hasta tres grupos con formas distintas y línea de tendencia.',
    ru: 'Диаграмма рассеяния X/Y для трёх групп с разными формами маркеров и линией тренда.',
  },
  'bubble-chart': {
    es: 'Dispersión de tres variables donde el área de la burbuja codifica una tercera medida.',
    ru: 'Пузырьковая диаграмма трёх переменных: площадь пузыря кодирует третью величину.',
  },
  'box-plot-chart': {
    es: 'Resumen de distribución por grupo con mediana, caja IQR, bigotes y valores atípicos.',
    ru: 'Ящик с усами по группам: медиана, межквартильный размах, усы и выбросы из сырых данных.',
  },
  'heatmap-chart': {
    es: 'Mapa de calor matricial con rampa secuencial de un solo tono, valores y leyenda de escala.',
    ru: 'Матричная тепловая карта с одноцветной последовательной шкалой, значениями и легендой.',
  },
  'punch-card-chart': {
    es: 'Matriz día × hora de puntos cuyo tamaño codifica el volumen de actividad.',
    ru: 'Матрица «день × час», где площадь точки отражает объём активности.',
  },
  'polar-area-chart': {
    es: 'Sectores de igual ángulo con radio proporcional al área para categorías cíclicas como meses.',
    ru: 'Секторы равного угла с радиусом по площади для цикличных категорий, например месяцев.',
  },
  'radar-chart': {
    es: 'Gráfico de araña SVG que compara hasta tres entidades en 5–8 atributos con escala común.',
    ru: 'SVG-радар для сравнения до трёх сущностей по 5–8 атрибутам на общей шкале.',
  },
  'sankey-chart': {
    es: 'Diagrama de flujo de dos columnas donde el grosor de cada cinta codifica el volumen.',
    ru: 'Двухколоночная диаграмма потоков, где толщина ленты отражает объём перехода.',
  },
  'candlestick-chart': {
    es: 'Gráfico de velas OHLC con velas alcistas huecas y bajistas rellenas para no depender del color.',
    ru: 'Свечной график OHLC: растущие свечи полые, падающие — заполненные, чтобы не зависеть от цвета.',
  },
  'kpi-stat-tile': {
    es: 'Tarjeta de estadística con número destacado, variación con icono y texto, periodo y sparkline.',
    ru: 'Плитка KPI с крупным числом, изменением (иконка + текст), периодом сравнения и спарклайном.',
  },
  'kpi-trend-grid': {
    es: 'Cuadrícula responsive de tarjetas KPI con sparklines; la fila superior clásica de un dashboard.',
    ru: 'Адаптивная сетка KPI-плиток со спарклайнами — классический верхний ряд дашборда.',
  },
  'meter-gauge': {
    es: 'Velocímetro con zonas de estado etiquetadas y aguja animada para lecturas en directo.',
    ru: 'Спидометр с подписанными зонами статуса и анимированной стрелкой для живых показаний.',
  },
  'goal-progress-chart': {
    es: 'Progreso acumulado hacia un objetivo frente al ritmo lineal ideal, con indicador de adelanto o retraso.',
    ru: 'Накопленный прогресс к цели против идеального линейного темпа с показателем опережения/отставания.',
  },
  'retention-cohort-table': {
    es: 'Matriz triangular de retención por cohortes sombreada en un solo tono con medias por periodo.',
    ru: 'Треугольная матрица удержания по когортам с одноцветной шкалой и средними по периодам.',
  },
  'metric-delta-table': {
    es: 'Tabla comparativa con barras en línea, valores actuales y previos, variaciones y sparklines.',
    ru: 'Сравнительная таблица со встроенными полосами, текущими и прошлыми значениями, дельтами и спарклайнами.',
  },

  // ── Sections ────────────────────────────────────────────────
  'hero-minimal-centered': {
    es: 'Hero centrado y tipográfico con píldora de anuncio, palabra destacada, dos CTAs y señales de confianza.',
    ru: 'Типографский центрированный hero с плашкой-анонсом, выделенным словом, двумя CTA и сигналами доверия.',
  },
  'hero-terminal': {
    es: 'Hero para desarrolladores con terminal animada y comando de instalación con copiar al portapapeles.',
    ru: 'Hero для разработчиков с анимированным терминалом и командой установки с копированием.',
  },
  'hero-waitlist': {
    es: 'Hero de prelanzamiento con fondo aurora, captura de email accesible, validación y prueba social.',
    ru: 'Hero перед запуском с фоном «аврора», доступной формой email, валидацией и социальным доказательством.',
  },
  'hero-dashboard-preview': {
    es: 'Hero SaaS con maqueta de dashboard en vivo construida con tarjetas KPI y gráfico de líneas del kit.',
    ru: 'SaaS-hero с живым макетом дашборда из KPI-плиток и SVG-графика линий набора.',
  },
  'feature-icon-grid': {
    es: 'Cuadrícula de características de 2–4 columnas con iconos SVG, descripciones y enlaces accesibles.',
    ru: 'Адаптивная сетка возможностей в 2–4 колонки с SVG-иконками, описаниями и доступными ссылками.',
  },
  'feature-alternating-rows': {
    es: 'Filas en zigzag que alternan texto e ilustraciones CSS (gráfico, código, tokens).',
    ru: 'Зигзагообразные блоки, чередующие текст и CSS-иллюстрации (график, код, токены).',
  },
  'feature-tabs-showcase': {
    es: 'Pestañas de características según el patrón WAI-ARIA con navegación por flechas y paneles de métricas.',
    ru: 'Интерактивные вкладки по паттерну WAI-ARIA с навигацией стрелками и панелями показателей.',
  },
  'how-it-works-steps': {
    es: 'Pasos numerados del proceso unidos por una línea, horizontales en escritorio y verticales en móvil.',
    ru: 'Пронумерованные шаги процесса, соединённые линией: горизонтально на десктопе, вертикально на мобильных.',
  },
  'integrations-grid': {
    es: 'Directorio de integraciones con filtros por categoría, monogramas y estado de disponibilidad.',
    ru: 'Каталог интеграций с фильтрами по категориям, монограммами и бейджами доступности.',
  },
  'pricing-toggle-cards': {
    es: 'Tres planes de precios con interruptor mensual/anual accesible, insignia de ahorro y plan destacado.',
    ru: 'Три тарифа с доступным переключателем месяц/год, бейджем экономии и выделенным планом.',
  },
  'pricing-single-plan': {
    es: 'Precio de plan único con tarjeta, precio original tachado, lista de funciones y garantía.',
    ru: 'Единый тариф: карточка цены, зачёркнутая старая цена, список возможностей и гарантия.',
  },
  'testimonial-carousel': {
    es: 'Carrusel de testimonios con scroll-snap, botones anterior/siguiente, estrellas y sin autoplay.',
    ru: 'Карусель отзывов со scroll-snap, кнопками вперёд/назад, рейтингом и без автопрокрутки.',
  },
  'testimonial-featured': {
    es: 'Sección tipo caso de éxito con una gran cita, logotipo de la empresa y métricas de resultados.',
    ru: 'Блок в стиле кейса: крупная цитата, логотип компании и ключевые метрики результата.',
  },
  'cta-newsletter-section': {
    es: 'Banda de suscripción al newsletter con beneficios, campo etiquetado, validación y nota de privacidad.',
    ru: 'Блок подписки на рассылку с преимуществами, полем email, валидацией и заметкой о приватности.',
  },
  'cta-split-image': {
    es: 'Banner de conversión dividido: texto y CTAs junto a un visual degradado con chips de estadísticas.',
    ru: 'Разделённый баннер конверсии: текст и CTA рядом с градиентным визуалом и плашками статистики.',
  },
  'stats-counter-band': {
    es: 'Cifras destacadas que cuentan al hacer scroll, con el valor real en el HTML para lectores de pantalla.',
    ru: 'Ключевые цифры с анимацией счёта при прокрутке; реальные значения в HTML для скринридеров.',
  },
  'stats-dashboard-section': {
    es: 'Sección de analítica completa con tarjetas KPI, gráfico de áreas apiladas y ranking en barras.',
    ru: 'Полный аналитический блок: KPI-плитки, накопительный график областей и рейтинг в столбцах.',
  },
  'careers-openings': {
    es: 'Ofertas de empleo agrupadas por departamento con ubicación, tipo, remoto y beneficios.',
    ru: 'Вакансии по отделам с локацией, типом занятости, удалёнкой и списком преимуществ.',
  },
  'faq-two-column': {
    es: 'FAQ a dos columnas con introducción fija y acordeones nativos <details> que funcionan sin JS.',
    ru: 'FAQ в две колонки с закреплённым вступлением и нативными аккордеонами <details> без JS.',
  },
  'contact-split-map': {
    es: 'Canales de contacto y oficinas junto a un mapa SVG de puntos con marcadores animados.',
    ru: 'Каналы связи и адреса офисов рядом с точечной SVG-картой и анимированными метками.',
  },
  'logo-wall-grid': {
    es: 'Muro de logotipos de clientes con divisores finos; marcas de texto o imágenes reales.',
    ru: 'Стена логотипов клиентов с тонкими разделителями: текстовые знаки или настоящие изображения.',
  },
  'blog-grid-section': {
    es: 'Últimos artículos con un post destacado y tarjetas con portadas degradadas, categoría y tiempo de lectura.',
    ru: 'Последние статьи: избранный пост и карточки с градиентными обложками, категорией и временем чтения.',
  },
  'changelog-section': {
    es: 'Línea de tiempo de versiones con etiquetas, fechas y cambios nuevos/mejorados/corregidos.',
    ru: 'Таймлайн релизов с версиями, датами и изменениями «новое / улучшено / исправлено».',
  },
  'footer-mega-section': {
    es: 'Pie de página completo con marca, newsletter, columnas de enlaces, estado del sistema y redes.',
    ru: 'Полный футер сайта: бренд, подписка, колонки ссылок, статус системы и соцсети.',
  },
  // ── Agency & Marketing ──────────────────────────────────────
  'agency-header': {
    es: "Navegación flotante tipo píldora para agencias: logo, enlaces, cambio de tema, CTA y menú móvil a pantalla completa animado.",
    ru: "Плавающая навигация-«таблетка» для агентств: логотип, ссылки, смена темы, CTA и анимированное мобильное меню на весь экран.",
  },
  'agency-hero-kinetic': {
    es: "Hero de agencia con titular gigante cuya última palabra rota resaltada como con rotulador, CTAs, prueba social y pegatinas flotantes.",
    ru: "Hero агентства с огромным заголовком, последнее слово которого меняется с маркерной подсветкой, CTA, соцдоказательство и стикеры.",
  },
  'agency-page-hero': {
    es: "Hero de página interior: migas de pan, antetítulo, titular gigante con palabra resaltada, intro, CTA y cifras clave.",
    ru: "Hero внутренней страницы: хлебные крошки, надзаголовок, крупный заголовок с выделенным словом, вступление, CTA и ключевые цифры.",
  },
  'agency-service-pillars': {
    es: "Tarjetas de servicios para agencia de marketing (Ads, SEO, Web): icono, propuesta, KPI destacado, entregables, precio y enlace.",
    ru: "Карточки услуг маркетингового агентства (реклама, SEO, сайты): иконка, описание, ключевой KPI, состав работ, цена и ссылка.",
  },
  'agency-services-list': {
    es: "Filas de servicios numeradas y desplegables: nombres grandes, propuesta, entregables, plazos y precio «desde».",
    ru: "Нумерованные раскрывающиеся строки услуг: крупные названия, описание, состав работ, сроки и цена «от».",
  },
  'agency-results-band': {
    es: "Franja de resultados grandes (€42M, 4.8×, +212%) que cuentan al hacer scroll, con etiquetas y letra pequeña.",
    ru: "Полоса крупных результатов (€42M, 4.8×, +212%) со счётчиками при прокрутке, подписями и пояснениями.",
  },
  'agency-platforms-marquee': {
    es: "Dos filas en movimiento opuesto con plataformas y herramientas (Google Ads, Meta, Search Console…) e insignias de partner.",
    ru: "Две встречные бегущие строки платформ и инструментов (Google Ads, Meta, Search Console…) с партнёрскими бейджами.",
  },
  'agency-process-steps': {
    es: "Línea de tiempo «Cómo trabajamos» con fases numeradas y duración, unidas por una línea que se rellena al hacer scroll.",
    ru: "Таймлайн «Как мы работаем»: нумерованные этапы со сроками, соединённые линией, заполняющейся при прокрутке.",
  },
  'agency-audit-cta': {
    es: "Gancho de captación «auditoría gratis»: formulario web + email con validación, escaneo animado y medidor de puntuación con hallazgos.",
    ru: "Лид-магнит «бесплатный аудит»: форма сайта и email с проверкой, анимированное сканирование и шкала оценки с выводами.",
  },
  'agency-roi-calculator': {
    es: "Calculadora de ROI para anuncios: deslizadores de inversión, CPC, conversión y ticket medio con ingresos, ROAS y proyección en vivo.",
    ru: "Калькулятор ROI рекламы: ползунки бюджета, CPC, конверсии и среднего чека с выручкой, ROAS и прогнозом после оптимизации.",
  },
  'agency-pricing-packages': {
    es: "Precios de agencia con una pestaña por servicio, tres paquetes cada una y selector mensual / 6 meses para las cuotas.",
    ru: "Цены агентства: вкладка на каждую услугу, по три пакета и переключатель оплаты помесячно / 6 месяцев.",
  },
  'agency-service-overview': {
    es: "Detalle de servicio: columna fija con propuesta, cifras de resultado, herramientas y CTA junto a una lista numerada de lo incluido.",
    ru: "Описание услуги: закреплённая колонка с предложением, результатами, инструментами и CTA рядом с нумерованным списком «Что входит».",
  },
  'agency-work-grid': {
    es: "Cuadrícula de casos de éxito con filtros por categoría, imágenes grandes, cliente, título, servicios y resultado destacado.",
    ru: "Сетка кейсов с фильтрами по категориям, крупными обложками, клиентом, заголовком, услугами и главным результатом.",
  },
  'agency-case-study-hero': {
    es: "Cabecera de caso de éxito: enlace atrás, cliente y categoría, titular, resumen, datos del proyecto y gran resultado sobre ilustración.",
    ru: "Шапка кейса: ссылка назад, клиент и категория, заголовок, краткое описание, факты проекта и крупный результат на иллюстрации.",
  },
  'agency-case-results': {
    es: "Cuerpo del caso: reto, enfoque numerado, tabla de métricas antes/después, gráfico SVG de 12 meses y cita del cliente.",
    ru: "Тело кейса: задача, шаги решения, таблица «до/после», SVG-график за 12 месяцев и цитата клиента.",
  },
  'agency-quotes': {
    es: "Testimonios de clientes con una cita principal grande, el resultado medible de cada uno, avatares y valoración media.",
    ru: "Отзывы клиентов: крупная главная цитата, измеримый результат каждого, аватары и общий рейтинг.",
  },
  'agency-team-grid': {
    es: "Retratos del equipo con cargo, ciudad, dato curioso al pasar el ratón o enfocar, redes y tarjeta «estamos contratando».",
    ru: "Портреты команды с должностью, городом, интересным фактом при наведении или фокусе, соцсетями и карточкой вакансий.",
  },
  'agency-contact-brief': {
    es: "Formulario «Empezar un proyecto»: servicios, presupuesto, plazos, datos y mensaje con validación, más contactos directos.",
    ru: "Бриф «Начать проект»: услуги, бюджет, сроки, контакты и сообщение с проверкой, плюс прямые каналы связи.",
  },
  'agency-footer-cta': {
    es: "Pie de agencia encabezado por un gigantesco «Hablemos», con columnas de enlaces, oficinas, redes y línea legal.",
    ru: "Футер агентства с огромной ссылкой «Давайте поговорим», колонками ссылок, офисами, соцсетями и юридической строкой.",
  },
  // ── Developer Portfolio ("Keycap") ───────────────────────────
  'dev-header': {
    es: "Navegación flotante con un logo partido que se contrae al hacer scroll (N·OALINDQVIST·.DEV → N.DEV), enlaces en píldora, cambio de tema claro/oscuro y menú móvil a pantalla completa.",
    ru: "Плавающая навигация с разделённым логотипом, который сворачивается при прокрутке (N·OALINDQVIST·.DEV → N.DEV), ссылки-«таблетки», переключатель темы и мобильное меню на весь экран.",
  },
  'dev-hero': {
    es: "Hero de desarrollador: un título enorme que se reescribe solo, el nombre cayendo con bloques flotantes, un indicador de estado y una cinta infinita de habilidades con tooltips, sobre una matriz de puntos 3D que se aparta del cursor.",
    ru: "Hero разработчика: огромный заголовок, который перепечатывается сам, имя с падающими блоками, статус и бесконечная лента навыков с подсказками на фоне 3D-матрицы точек, расступающейся вокруг курсора.",
  },
  'dev-projects-showcase': {
    es: "Slider 3D de proyectos: tarjetas de papel con contornos de tinta en perspectiva, cada una con un visual animado elegido por datos (código, terminal, ecualizador, monitor, endpoints, pintura, átomo). Arrastra, usa las teclas o las flechas; haz clic para abrir la ficha.",
    ru: "3D-слайдер проектов: бумажные карточки с чернильным контуром в перспективе, у каждой анимированный визуал по данным (код, терминал, эквалайзер, монитор, эндпоинты, рисунок, атом). Перетаскивайте, используйте клавиши или стрелки; клик открывает карточку проекта.",
  },
  'dev-keyboard': {
    es: "Teclado mecánico 3D a todo el ancho que escribe tu stack solo y lo repite como una palabra gigante de fondo; el contenido del slot (p. ej. una lista de repos) flota sobre las filas inferiores.",
    ru: "3D-механическая клавиатура во всю ширину, которая сама печатает ваш стек и повторяет каждое слово огромными буквами на фоне; содержимое слота (например, список репозиториев) лежит поверх нижних рядов.",
  },
  'dev-repo-list': {
    es: "Lista esmerilada de repositorios open source con lenguaje, estrellas, descripción, enlace al código y un ojo para la web en vivo; muestra el resto con «Ver todos».",
    ru: "Матовый список open-source репозиториев: язык, звёзды, описание, ссылка на код и «глаз» живого сайта; остальные раскрываются кнопкой «Показать все».",
  },
  'dev-contributions': {
    es: "Matriz de contribuciones estilo GitHub en 3D: cubos apenas redondeados que llegan volando y se montan, se siguen reconstruyendo y ondulan como agua alrededor del cursor; tooltips con fecha y número. Acepta semanas, una URL o datos demo.",
    ru: "3D-матрица вкладов в стиле GitHub: слегка скруглённые кубики прилетают и собираются, продолжают перестраиваться и расходятся волнами вокруг курсора; подсказки с датой и числом. Данные — недели, URL или демо.",
  },
  'dev-monitor': {
    es: "Monitor CRT 3D con contornos de tinta que cae en su sitio, se mece con el cursor y escribe líneas de terminal en una pantalla invertida.",
    ru: "3D-монитор CRT с чернильными контурами: опускается на место, покачивается за курсором и печатает строки терминала на инвертированном экране.",
  },
  'dev-contact': {
    es: "Bloque de contacto con una cápsula de tarjetas (email, GitHub, LinkedIn…) y un CTA opcional a la página de contacto.",
    ru: "Блок контактов с капсулой карточек (email, GitHub, LinkedIn…) и необязательной кнопкой на страницу контактов.",
  },
  'dev-footer': {
    es: "Pie de página mínimo con una fila de enlaces monoespaciados, copyright y una nota de «hecho con».",
    ru: "Минималистичный футер: строка моноширинных ссылок, копирайт и короткая заметка «сделано на».",
  },
  'dev-page-hero': {
    es: "Hero de página interior con migas de pan, etiqueta HUD, título en dos líneas que se desliza, intro y un slot opcional a la derecha (p. ej. un monitor 3D).",
    ru: "Hero внутренней страницы: хлебные крошки, HUD-метка, двухстрочный выезжающий заголовок, вступление и необязательный слот справа (например, 3D-монитор).",
  },
  'dev-project-grid': {
    es: "Tarjetas de proyecto estilo tecla (contorno de tinta y sombra dura que se «pulsa» al pasar el ratón) con número, categoría, stack, estado y estrellas, más filtros por categoría.",
    ru: "Карточки проектов в виде клавиш (чернильный контур и жёсткая тень, которая «нажимается» при наведении): номер, категория, стек, статус и звёзды, плюс фильтры по категориям.",
  },
  'dev-project-detail': {
    es: "Caso de proyecto: resumen, reto, solución y puntos clave junto a una ficha técnica fija (rol, año, estado, stack, métricas, enlaces), con teclas anterior / siguiente.",
    ru: "Кейс проекта: обзор, задача, решение и ключевые пункты рядом с закреплённым техпаспортом (роль, год, статус, стек, метрики, ссылки) и клавиши «назад / вперёд».",
  },
  'dev-post-list': {
    es: "Índice del blog con el último artículo destacado y una lista fina (fecha, categoría, tiempo de lectura, extracto) filtrable por categoría.",
    ru: "Список статей блога: последняя статья выделена, остальные — тонкий список (дата, категория, время чтения, анонс) с фильтром по категориям.",
  },
  'dev-article': {
    es: "Plantilla de artículo: línea de metadatos, título, entradilla, etiquetas, barra de progreso de lectura, prosa monocroma con bloques de código y teclas anterior / siguiente.",
    ru: "Шаблон статьи: метаданные, заголовок, лид, теги, индикатор прогресса чтения, монохромная типографика с блоками кода и клавиши «назад / вперёд».",
  },
  'dev-contact-form': {
    es: "Formulario de solicitud de proyecto con teclas de tipo de proyecto, presupuesto y mensaje, validación en línea, estado de éxito y un lateral con disponibilidad y contactos directos.",
    ru: "Форма заявки на проект: клавиши типа проекта, бюджет и сообщение, встроенная проверка, состояние успеха и колонка с доступностью и прямыми контактами.",
  },
  // ── Toy Store ("Kapow") ───────────────────────────
  'toy-figure-card': {
    es: "Tarjeta de producto tipo cromo para juguetes y coleccionables: franja de universo y escala, panel con trama de puntos, personaje, chips de edad y articulaciones, notas de preventa y edición limitada.",
    ru: "Карточка товара в виде коллекционной карточки для игрушек: полоса со вселенной и масштабом, панель с растром, персонаж, чипы возраста и точек артикуляции, предзаказ и лимитированная серия.",
  },
  'toy-figure-grid': {
    es: "Cuadrícula responsive de Toy Figure Cards con estado vacío; las facetas de FilterSidebar (personaje, universo, escala, edad) y la ordenación la filtran al instante.",
    ru: "Адаптивная сетка карточек Toy Figure Card с пустым состоянием; фасеты FilterSidebar (персонаж, вселенная, масштаб, возраст) и сортировка фильтруют её мгновенно.",
  },
  'toy-hero': {
    es: "Hero de tienda estilo cómic: etiqueta explosiva, titular gigante con palabra resaltada, CTAs y cifras junto a un escenario con trama de puntos, la figura destacada, una pegatina de precio en estrella y avatares flotantes.",
    ru: "Hero магазина в стиле комикса: взрывной ярлык, огромный заголовок с выделенным словом, кнопки и цифры рядом со сценой с растром, избранной фигуркой, ценником-звездой и летающими аватарами.",
  },
  'toy-character-rail': {
    es: "Carril «compra por personaje» con avatares redondos de cómic. Enlaza a la página de cada personaje o, en modo filtro, activa la faceta de personaje de FilterSidebar para ver solo sus figuras — selección múltiple y sincronizada con la URL.",
    ru: "Лента «покупки по персонажу» с круглыми комикс-аватарами. Ведёт на страницы персонажей или в режиме фильтра включает фасет персонажа в FilterSidebar, показывая только его фигурки — мультивыбор и синхронизация с URL.",
  },
  'toy-character-grid': {
    es: "Plantel de personajes como cromos (avatar, alias, universo, sello héroe / villano, medidores de poder, número de figuras) con filtros instantáneos por bando y universo y contador en vivo.",
    ru: "Каталог персонажей в виде коллекционных карточек (аватар, прозвище, вселенная, отметка герой / злодей, шкалы силы, число фигурок) с мгновенными фильтрами по стороне и вселенной и живым счётчиком.",
  },
  'toy-character-hero': {
    es: "Cabecera de ficha de personaje: viñeta de cómic con ilustración, sello héroe / villano y bocadillo con su frase, más universo, nombre, alias, biografía, medidores de poder, datos y CTAs.",
    ru: "Шапка профиля персонажа: комикс-панель с рисунком, отметкой герой / злодей и репликой в облачке, а также вселенная, имя, прозвище, биография, шкалы силы, факты и кнопки.",
  },
  'toy-age-finder': {
    es: "Buscador de regalos «¿Para quién es?»: tarjetas de colores por edad (rango, nombre, descripción, número de juguetes) que llevan al catálogo filtrado, más enlaces opcionales por presupuesto.",
    ru: "Подбор подарка «Для кого?»: яркие плитки возрастных групп (диапазон, название, описание, число игрушек) ведут в отфильтрованный каталог; дополнительно — ссылки по бюджету.",
  },
  'toy-spec-sheet': {
    es: "«Ficha de figura» para páginas de producto: especificaciones (escala, tamaño, edad, materiales, pilas), insignia de articulaciones, lista «En la caja» y aviso de seguridad por piezas pequeñas.",
    ru: "«Досье фигурки» для страницы товара: характеристики (масштаб, размер, возраст, материалы, батарейки), значок точек артикуляции, список «В коробке» и предупреждение о мелких деталях.",
  },
  // ── Cyberpunk / Brutalist ("NULL/SECTOR") ───────────────────────────
  'cyber-header': {
    es: 'Navegación cyberpunk brutalista: logotipo entre corchetes, enlaces numerados sobre reglas gruesas, estado del sistema parpadeante, interruptor NOCHE / DÍA, CTA ácido y menú móvil a pantalla completa.',
    ru: 'Бруталистская киберпанк-навигация: логотип в скобках, нумерованные ссылки на жёстких линиях, мигающий статус системы, переключатель НОЧЬ / ДЕНЬ, кислотная кнопка и полноэкранное мобильное меню.',
  },
  'cyber-hero': {
    es: 'Hero futurista brutalista: barra HUD con reloj UTC en vivo, titular gigante con una línea con glitch y otra en contorno, CTAs CyberpunkButton + NeonBorderButton y panel de telemetría sobre un suelo de rejilla en perspectiva.',
    ru: 'Футуристичный бруталистский hero: HUD-полоса с часами UTC, огромный заголовок со строкой-глитчем и контурной строкой, кнопки CyberpunkButton + NeonBorderButton и панель живой телеметрии над перспективной сеткой.',
  },
  'cyber-ticker': {
    es: 'Marquesina de estado brutalista en ácido, tinta o contorno, inclinable y reversible, con botón de pausa y versión estática con movimiento reducido.',
    ru: 'Бруталистская бегущая строка статусов: кислотная, чернильная или контурная, с наклоном и реверсом, кнопкой паузы и статичным видом при reduced motion.',
  },
  'cyber-bento': {
    es: 'Rejilla de funciones sobre reglas gruesas con celdas numeradas, anchas y altas, y grandes cifras; cada celda es un CyberFeatureCard.',
    ru: 'Сетка возможностей на жёстких линиях: нумерованные ячейки, широкие и высокие, с крупными цифрами; каждая ячейка — CyberFeatureCard.',
  },
  'cyber-node-map': {
    es: 'Mapa del mundo en matriz de puntos con nodos por latitud / longitud, enlaces animados, anillos de estado y barrido de escáner, junto a una tabla de regiones en vivo.',
    ru: 'Карта мира из точек с узлами по широте / долготе, анимированными связями, пульсирующими кольцами статуса и сканером рядом с живой таблицей регионов.',
  },
  'cyber-page-hero': {
    es: 'Cabecera de página interior: migas SYS://, enorme número índice en contorno, título en mayúsculas con línea en contorno, entradilla y etiquetas; fondo de escaneo, liso o ácido.',
    ru: 'Шапка внутренней страницы: крошки SYS://, огромный контурный номер, заголовок капсом с контурной строкой, вступление и теги; фон-сканлайн, простой или кислотный.',
  },
  'cyber-spec-table': {
    es: 'Ficha técnica agrupada sobre rejilla brutalista con valores clasificados que se descifran con efecto de codificación, botón para descifrar todo y título HackerDecodeText.',
    ru: 'Техпаспорт по группам на бруталистской сетке: засекреченные значения расшифровываются с эффектом перебора, кнопка «расшифровать всё» и заголовок HackerDecodeText.',
  },
  'cyber-pricing': {
    es: 'Precios brutalistas con interruptor mensual / anual y un deslizador de uso que recalcula en vivo la factura estimada de cada plan; plan destacado invertido en ácido y CTAs CyberpunkButton.',
    ru: 'Бруталистские тарифы с переключателем месяц / год и ползунком использования, который пересчитывает счёт каждого тарифа; выделенный тариф в кислотной инверсии и кнопки CyberpunkButton.',
  },
  'cyber-manifesto': {
    es: 'Tesis numeradas con números gigantes en contorno y declaraciones en mayúsculas que se iluminan al entrar en pantalla, con una firma final.',
    ru: 'Нумерованные тезисы с огромными контурными цифрами и заявлениями капсом, которые подсвечиваются при прокрутке, с подписью в конце.',
  },
  'cyber-crew-grid': {
    es: 'El equipo como credenciales de acceso: avatares de píxeles generados, alias, código ID, rol, ubicación y nivel de acceso, con desplazamiento glitch al pasar el ratón.',
    ru: 'Команда в виде пропусков: сгенерированные пиксельные аватары, ник, ID, роль, город и уровень допуска, с глитч-сдвигом при наведении.',
  },
  'cyber-status-board': {
    es: 'Panel de disponibilidad: banner de estado general y una fila por región con franja de 60 días, % de uptime, ping y estado actual.',
    ru: 'Панель доступности: общий баннер статуса и строка на регион с полосой за 60 дней, процентом аптайма, пингом и текущим состоянием.',
  },
  'cyber-terminal-form': {
    es: 'Formulario de contacto que se usa como línea de comandos: una pregunta cada vez, comandos /help /back /clear /status, ticket al enviar y cambio a formulario normal. Usa CyberpunkCheckbox y NeonSpinner.',
    ru: 'Контактная форма в виде командной строки: по одному вопросу, команды /help /back /clear /status, номер тикета после отправки и переключение на обычную форму. Использует CyberpunkCheckbox и NeonSpinner.',
  },
  'cyber-footer': {
    es: 'Footer brutalista con suscripción «uplink», columnas de enlaces sobre reglas gruesas, contador de bloques en vivo y un logotipo gigante en contorno.',
    ru: 'Бруталистский футер с подпиской «uplink», колонками ссылок на жёстких линиях, живым счётчиком блоков и огромным контурным логотипом.',
  },
  // ── Healthcare ("Pulso") ───────────────────────────
  'med-agenda-timeline': {
    es: "La jornada de un profesional en una línea de tiempo: citas con estado, presencial o vídeo, sala y motivo, marcador de «ahora», resumen y filtros rápidos.",
    ru: "День врача на шкале времени: приёмы со статусом, очно или по видео, кабинет и причина, отметка «сейчас», сводка и быстрые фильтры.",
  },
  'med-waiting-room': {
    es: "Cola de sala de espera en vivo: prioridad, tiempos de espera que pasan a ámbar y rojo al superar el objetivo y acciones de llamar y empezar la consulta.",
    ru: "Живая очередь в зале ожидания: приоритет, таймеры ожидания (жёлтый и красный при превышении цели) и кнопки «вызвать» и «начать приём».",
  },
  'med-schedule-calendar': {
    es: "Calendario semanal / diario de la clínica: citas coloreadas por profesional con carriles para solapes, línea de «ahora», filtros por médico, leyenda de vídeo y panel de detalle.",
    ru: "Календарь клиники на неделю / день: приёмы с цветом врача, дорожки для пересечений, линия «сейчас», фильтры по врачам, легенда видео и панель деталей.",
  },
  'med-patient-summary': {
    es: "Resumen de historia clínica: identidad, alerta de alergias, constantes con minigráficos de tendencia y rangos, problemas activos, medicación y últimas visitas.",
    ru: "Сводка медкарты: данные пациента, предупреждение об аллергиях, показатели с мини-графиками и нормами, активные проблемы, лекарства и последние визиты.",
  },
  'med-consultation-note': {
    es: "Nota clínica SOAP con aviso de constantes fuera de rango, buscador combobox de diagnósticos CIE-10, plantillas, autoguardado local y firma con bloqueo.",
    ru: "Протокол приёма SOAP: отметка показателей вне нормы, поиск диагнозов МКБ-10 (combobox), шаблоны, автосохранение и подпись с блокировкой.",
  },
  'med-prescription-pad': {
    es: "Receta electrónica: búsqueda en el vademécum, dosis, frecuencia y duración con cantidad automática, alertas de alergia y duplicidad, imprimir y enviar a farmacia.",
    ru: "Электронный рецепт: поиск по справочнику, доза, частота и длительность с расчётом количества, предупреждения об аллергии и дублировании, печать и отправка в аптеку.",
  },
  'med-video-visit': {
    es: "Interfaz de videoconsulta: escena del paciente, vista propia, temporizador, calidad de conexión, controles de micro, cámara, pantalla y chat, panel de chat y resumen al terminar.",
    ru: "Интерфейс видеоприёма: окно пациента, своё изображение, таймер, качество связи, кнопки микрофона, камеры, экрана и чата, панель чата и итог звонка.",
  },
  'med-availability-editor': {
    es: "Horario semanal de consulta: interruptor y franjas por día, presencial / vídeo por franja, copiar a días laborables, control de solapes y resumen de huecos.",
    ru: "Недельный график приёма: переключатель и интервалы по дням, очно / видео для каждого интервала, копирование на будни, проверка пересечений и сводка слотов.",
  },
  'med-hero': {
    es: "Hero para software sanitario: insignia, titular con frase destacada, CTAs y puntos de confianza junto a una maqueta HTML con la agenda del día, una videoconsulta y un aviso de reserva.",
    ru: "Hero для медицинского ПО: бейдж, заголовок с выделенной фразой, кнопки и пункты доверия рядом с HTML-макетом расписания, видеоприёма и уведомления о записи.",
  },
  'med-doctor-directory': {
    es: "Sección «encuentra a tu médico»: búsqueda por nombre o idioma, chips de especialidad y filtro de vídeo sobre tarjetas con valoración, precio, disponibilidad y botón de reservar.",
    ru: "Раздел «найдите врача»: поиск по имени или языку, чипы специальностей и фильтр видео для карточек с рейтингом, ценой, доступностью и кнопкой записи.",
  },
  'med-booking-wizard': {
    es: "Reserva de citas online en cuatro pasos accesibles — servicio, profesional y tipo de visita, día y hora, datos y consentimiento — con referencia y archivo .ics para el calendario.",
    ru: "Онлайн-запись на приём в четыре доступных шага — услуга, врач и тип визита, день и время, данные и согласие — с номером записи и файлом .ics для календаря.",
  },
  'toy-collector-club': {
    es: "Banda de fidelización para tiendas de juguetes y coleccionables: ventajas, tarjeta de sellos animada, niveles de socio y formulario de alta con validación en línea.",
    ru: "Блок программы лояльности для магазинов игрушек: преимущества, анимированная карта штампов, уровни участия и форма вступления с проверкой полей.",
  },
  // ── Dental Practice & Clinic ──────────────────────────────────
  'dental-odontogram': {
    es: "Odontograma interactivo de 32 piezas dentales con numeración Universal y FDI, estados clínicos por color (sano, caries, obturación, corona, implante, ausente), filtros por arcada y cajón de hallazgos.",
    ru: "Интерактивная зубная формула (одонтограмма) на 32 зуба с нотацией Universal и FDI, цветовыми статусами и панелью клинических находок.",
  },
  'dental-chair-timeline': {
    es: "Cronograma y matriz de sillones dentales por gabinete (quirófano, higiene, boxes) con estados de ocupación, desinfección entre citas y panel de detalles.",
    ru: "Расписание стоматологических кресел по кабинетам с индикацией занятости, санобработки и карточкой пациента.",
  },
  'dental-treatment-plan-builder': {
    es: "Constructor de planes de tratamiento y presupuestos dentales por fases con códigos de procedimiento ADA, cobertura de aseguradora y copago estimado.",
    ru: "Конструктор планов лечения и смет по этапам с кодами процедур ADA, процентом страховки и расчётом доплаты пациента.",
  },
  'dental-recall-manager': {
    es: "Gestor de revisiones y limpiezas periódicas semestrales con filtro por vencimiento (vencidas, próximas) y recordatorios automáticos por WhatsApp y SMS.",
    ru: "Менеджер профилактических визитов и гигиены с фильтрами по срокам и шаблонами автоматических напоминаний по WhatsApp и SMS.",
  },
  'dental-hero': {
    es: "Hero para clínica dental de estética y cirugía con teléfono de urgencias por dolor agudo, formulario rápido de primera consulta y métricas clínicas de confianza.",
    ru: "Главный экран стоматологической клиники с круглосуточной горячей линией острой боли, быстрой записью и метриками доверия.",
  },
  'dental-treatments-grid': {
    es: "Catálogo de tratamientos odontológicos con filtrado por especialidad, duración del procedimiento, tipo de anestesia y precio base estimado.",
    ru: "Каталог стоматологических услуг с фильтром по направлениям, длительностью, типом анестезии и ориентировочной ценой.",
  },
  'dental-before-after': {
    es: "Galería de casos clínicos antes y después de sonrisas (carillas, ortodoncia invisible, implantes) con ficha de duración y especialista.",
    ru: "Галерея преображения улыбок до и после (виниры, элайнеры, имплантаты) с описанием процедур и лечащего врача.",
  },
  'dental-booking-wizard': {
    es: "Asistente de reserva dental en 4 pasos (motivo de consulta, doctor o sillón, fecha/hora y datos del paciente) con generación de archivo de calendario .ics.",
    ru: "Пошаговый мастер онлайн-записи к стоматологу в 4 шага с выбором причины, врача, времени и созданием события календаря .ics.",
  },
  'dental-team-directory': {
    es: "Directorio de odontólogos, ortodoncistas y cirujanos maxilofaciales con número de colegiado, biografía y botón directo de reserva.",
    ru: "Каталог врачей-стоматологов, ортодонтов и хирургов с номером лицензии, описанием квалификации и кнопкой записи.",
  },
  'dental-emergency-banner': {
    es: "Banner de urgencias odontológicas 24/7 para dolor agudo, traumatismos y flemones con botón de llamada inmediata y huecos reservados el mismo día.",
    ru: "Баннер экстренной стоматологической помощи 24/7 при острой боли и травмах с кнопкой прямого звонка и слотами «день в день».",
  },
  // ── Moving & Logistics ────────────────────────────────────────
  'move-inventory-calculator': {
    es: "Calculadora interactiva de volumen (m³) y presupuesto de mudanza: desglose pieza a pieza de muebles con recomendación de furgoneta y precio en tiempo real.",
    ru: "Интерактивный калькулятор объёма мебели (м³) и стоимости переезда: попредметный выбор с расчётом кубометров, подбором фургона и точной ценой.",
  },
  'fleet-dispatch-timeline': {
    es: "Panel de control y matriz de despacho de furgonetas: porcentaje de carga volumétrica, asignación de conductor, estado en ruta y horarios.",
    ru: "Диспетчерский пульт и матрица расписания фургонов: шкала загрузки по объёму, назначенные водители, статус на линии и таймлайн.",
  },
  'hiring-pipeline-board': {
    es: "Tablero Kanban de selección de personal para transportistas y mozos: seguimiento de candidatos por fases (solicitud, entrevista, prueba y contratado) con datos de vehículo propio.",
    ru: "Канбан-доска найма водителей и грузчиков: воронка кандидатов по этапам (заявка, интервью, тестовый рейс, оформлен) с данными о собственном авто.",
  },
  'move-manifest-card': {
    es: "Albarán detallado de mudanza y porte: direcciones de origen y destino, condición de ascensor/escaleras, inventario de muebles y seguimiento de estado.",
    ru: "Подробный путевой лист переезда: адреса погрузки/выгрузки, условия подъёма по этажам, опись мебели и прогресс выполнения.",
  },
  'moving-hero': {
    es: "Hero para empresas de mudanzas y portes: formulario de cálculo rápido de ruta, distintivo de furgoneta en el día y sellos de seguro de mercancías.",
    ru: "Главный экран для сервиса переездов и перевозок: быстрый расчёт по маршруту, выезд день-в-день и гарантия страховки груза.",
  },
  'moving-volume-estimator': {
    es: "Guía visual de cubicaje por tipo de vivienda (estudio, piso de 1-2 habitaciones, piso de 3 habitaciones, casa) con furgoneta y mozos recomendados.",
    ru: "Наглядный гид по объёму жилья (студия, 1-2 комнатная, 3 комнатная, дом) с рекомендацией фургона и количества грузчиков.",
  },
  'moving-fleet-grid': {
    es: "Catálogo de furgonetas y camiones de mudanza: dimensiones interiores de la caja, carga útil en kg, plataforma elevadora y adecuación de mudanza.",
    ru: "Каталог автопарка для переездов: внутренние габариты кузова, грузоподъёмность, гидролифт и подходящий тип переезда.",
  },
  'moving-careers-banner': {
    es: "Banner de captación de empleo para conductores con furgoneta propia, chóferes de flota y mozos: tarifas por hora, cobros semanales y solicitud online.",
    ru: "Баннер найма водителей со своим авто, в штат и грузчиков: почасовые ставки, еженедельные выплаты и быстрая онлайн-заявка.",
  },
  'moving-pricing-tiers': {
    es: "Planes de precios transparentes: Furgoneta + Conductor, Mudanza Completa con 2 Mozos y Servicio Llave en Mano con embalaje completo.",
    ru: "Тарифные планы: Фургон с водителем, Полный переезд с 2 грузчиками и Переезд под ключ с упаковкой всех вещей.",
  },
  'moving-application-form': {
    es: "Formulario accesible de solicitud de empleo para transportistas y mozos: tipo de carnet de conducir (B, C1, C), datos de furgoneta propia y experiencia.",
    ru: "Доступная форма онлайн-заявки на работу водителем или грузчиком: категория прав (B, C1, C), параметры своего авто и опыт работы.",
  },
  // ── Food Delivery & Kitchen OS ("BiteFlow") ─────────────────
  'food-hero-plate': {
    es: "Hero pop tipo sticker: un plato gigante cambia de receta al ritmo del titular, los ingredientes orbitan, pasa un repartidor y gira con el scroll; incluye buscador de dirección, marquesina y botón de pausa.",
    ru: "Главный экран в стиле поп-стикеров: большая тарелка меняет блюда в такт заголовку, ингредиенты вращаются по орбите, проезжает курьер и тарелка крутится при скролле; поиск адреса и пауза анимации.",
  },
  'food-menu-board': {
    es: "Carta de reparto con pestañas fijas y scroll-spy, búsqueda en vivo y filtros dietéticos, tarjetas sticker que aparecen al hacer scroll y botón de añadir que lanza el plato hacia la cesta.",
    ru: "Меню доставки с липкими вкладками и scroll-spy, живым поиском и диетическими фильтрами, карточками-стикерами и кнопкой добавления с анимацией полёта блюда в корзину.",
  },
  'food-scroll-story': {
    es: "Historia interactiva «Del fuego a tu puerta»: un escenario fijo cambia de escena (pedido, cocina, repartidor, mesa) al avanzar cada paso con el scroll, con barra de progreso.",
    ru: "Скролл-история «От огня до вашей двери»: закреплённая сцена переключает этапы (заказ, кухня, курьер, стол) по мере прокрутки с индикатором прогресса.",
  },
  'food-partner-pitch': {
    es: "Sección B2B para restaurantes: calculadora de ahorro que compara agregadores frente a plataforma propia con cifra anual animada, y formulario validado con sello de confirmación.",
    ru: "B2B-секция для ресторанов: калькулятор экономии, сравнивающий агрегаторы с собственной платформой, и форма заявки со штампом подтверждения.",
  },
  'food-footer': {
    es: "Pie de tienda con pegatina inclinada de cupón de descuento, columnas de enlaces, horario de cocina y contacto, y marca gigante con ola animada.",
    ru: "Подвал магазина со стикером купона, колонками ссылок, графиком кухни и контактами, а также крупным логотипом с волновой анимацией.",
  },
  'food-cart-drawer': {
    es: "Cesta lateral en <dialog> nativo: selector de raciones, barra de envío gratis, extras sugeridos en 1 clic, código promocional y paso rápido a cocina.",
    ru: "Боковая корзина на нативном <dialog>: счётчик порций, шкала бесплатной доставки, допродажи в 1 клик, промокод и быстрое оформление заказа.",
  },
  'food-order-map': {
    es: "Seguimiento en vivo del pedido: mapa animado con repartidor avanzando por la ruta, tiempo estimado, línea de fases, tarjeta del rider y resumen del ticket.",
    ru: "Отслеживание заказа в реальном времени: анимированная карта с движущимся курьером, таймер прибытия, шкала этапов, карточка курьера и чек.",
  },
  'food-kitchen-board': {
    es: "Pantalla de cocina (KDS) con tres columnas (En cola, En marcha, Listas): cronómetros de espera, alergias destacadas, botón de avanzar con View Transitions y modo compacto.",
    ru: "Экран кухни (KDS) с тремя колонками (Очередь, В работе, Готово): таймеры ожидания, выделенные аллергены, перенос карточек через View Transitions и компактный режим.",
  },
  'food-menu-manager': {
    es: "Gestor de carta y stock (CMS): interruptores 86 que suben los platos agotados arriba, edición de precio en línea por pasos, filtros y barra de guardado multicanal.",
    ru: "CMS меню и стоп-листа: переключатели 86 для мгновенного скрытия позиций, редактирование цены на месте, фильтры и панель сохранения по каналам.",
  },
  'food-rider-dispatch': {
    es: "Despacho de flota: mapa en vivo con cocina y repartidores, cola de pedidos sin asignar y flota ordenada por distancia; asignar dibuja la ruta y actualiza al rider.",
    ru: "Диспетчерская курьеров: живая карта кухни и курьеров, очередь неназначенных заказов и список по расстоянию; назначение строит маршрут.",
  },
  'food-orders-table': {
    es: "Libro de pedidos con buscador, filtros por estado con contadores, ordenación por hora o importe, cambio de estado por fila y tickets desplegables.",
    ru: "Журнал заказов с поиском, фильтрами по статусу со счётчиками, сортировкой по времени или сумме, сменой статуса и раскрывающимися чеками.",
  },
  'food-service-pulse': {
    es: "Cuadro de mando de servicio: KPIs animados, gráfica de pedidos por hora frente a la semana pasada, carga por partida, platos estrella y feed en vivo pausable.",
    ru: "Дашборд смены: анимированные KPI, график заказов по часам, загрузка станций кухни, хиты продаж и лента событий с паузой.",
  },
  'food-ops-nav': {
    es: "Navegación de Kitchen OS: columna tipo sticker con marca, enlaces con contadores y objetivo del turno en escritorio; tira deslizable de chips en móvil.",
    ru: "Навигация Kitchen OS: боковая панель в стиле стикеров со счётчиками и целью смены на десктопе; прокручиваемая полоса чипов на мобильных.",
  },
  'food-ops-topbar': {
    es: "Barra superior de Kitchen OS con buscador de pedidos, interruptores de aceptación y hora punta, cambio de tema, alertas y menú de equipo.",
    ru: "Верхняя панель Kitchen OS с поиском заказов, тумблерами приёма и пиковой нагрузки, темой, уведомлениями и меню команды.",
  },
  'food-ops-heading': {
    es: "Cabecera de página para Kitchen OS con kicker tipo sticker, título contundente, reloj de servicio en vivo y botones de acción.",
    ru: "Заголовок страницы Kitchen OS со стикер-кикером, крупным шрифтом, живыми часами смены и кнопками действий.",
  },
  'food-crew-sign-in': {
    es: "Acceso de personal por estación, número de empleado y PIN de 4 dígitos con teclado táctil grande; cada perfil entra directo a su pantalla.",
    ru: "Вход персонала по станции, номеру сотрудника и 4-значному PIN-коду с крупной экранной клавиатурой; каждая роль открывает свой экран.",
  },
  // ── Construction, Developments & Site OS ("Strukto") ────────
  'construction-blueprint-hero': {
    es: "Hero de plano azul que se dibuja solo con cruceta de coordenadas, alzado arquitectónico con grúa, ticker de obras activas y acceso a la calculadora.",
    ru: "Главный экран в стиле синего чертежа с саморисующимся фасадом, краном, перекрестием координат, лентой строек и переходом к смете.",
  },
  'construction-project-sheets': {
    es: "Catálogo filtrable de obras dibujadas como láminas de plano con alzados vectoriales, barras de avance y filtros por tipología o estado.",
    ru: "Фильтруемый каталог объектов в виде чертёжных листов с векторными фасадами, шкалой готовности и фильтрами по типу и статусу.",
  },
  'construction-build-sequence': {
    es: "Secuencia de obra guiada por el scroll: el edificio se levanta planta a planta conforme avanzan las fases estructurales y de acabados.",
    ru: "Последовательность строительства по скроллу: здание вырастает этаж за этажом по мере прохождения фаз от фундамента до отделки.",
  },
  'construction-tender-form': {
    es: "Formulario de solicitud de estudio y licitación con tipología de obra, superficie, presupuesto estimado y confirmación sellada.",
    ru: "Форма заявки на расчёт и тендер с выбором типа объекта, площади, ориентировочного бюджета и штампом подтверждения.",
  },
  'construction-footer': {
    es: "Pie arquitectónico con formato de cajetín de plano: datos registrales de la constructora, columnas de enlaces, certificaciones y retícula técnica.",
    ru: "Архитектурный подвал в виде чертёжного штампа: реквизиты компании, колонки ссылок, сертификаты и техническая сетка.",
  },
  'construction-cost-estimator': {
    es: "Calculadora técnica de presupuesto con edificio SVG que crece en tiempo real: calcula PEM, PEC, honorarios, licencias, IVA y plazo estimado.",
    ru: "Инженерный калькулятор сметы с растущим SVG-зданием: расчёт PEM, PEC, гонораров, лицензий, НДС и сроков строительства.",
  },
  'construction-iso-unit-picker': {
    es: "Selector isométrico 3D de viviendas: permite girar el edificio, explosionar plantas, revisar el plano acotado, filtrar libres y pedir dossier.",
    ru: "Изометрический 3D-выбор квартир: вращение здания, раздвижение этажей, поэтажный план, фильтр свободных и запрос досье.",
  },
  'construction-gantt-board': {
    es: "Diagrama de Gantt en plano azul con línea de hoy, ruta crítica resaltada, zoom por semanas o meses y reporte interactivo de avance por fase.",
    ru: "Диаграмма Ганта на чертеже с линией «сегодня», критическим путём, масштабом недели/месяцы и отчётом прогресса по этапам.",
  },
  'construction-sites-board': {
    es: "Tablero de obras activas con plano de situación interactivo, pines con pulso en retrasos, anillos de avance, certificación vs plan y filtros.",
    ru: "Мониторинг активных строек с картой города, пульсирующими метками рисков, кольцами прогресса, план/фактом бюджета и фильтрами.",
  },
  'construction-site-logbook': {
    es: "Diario digital de obra (libro de órdenes): tiempo meteorológico, contadores de cuadrillas por oficio, entradas con hora, checklist PRL y firma.",
    ru: "Электронный журнал работ: погода, счётчики бригад по специальностям, лента записей с временем, чек-лист охраны труда и подпись.",
  },
  'construction-units-ledger': {
    es: "Libro comercial de viviendas: barra apilada de libres, reservadas y vendidas, plano de ventas por planta y tabla ordenable con edición en línea.",
    ru: "Реестр продаж квартир: стек-диаграмма статусов, поэтажная матрица, сортируемая таблица и редактирование цен и статусов на месте.",
  },
  'construction-os-sidebar': {
    es: "Barra lateral de Site OS dibujada como panel de capas CAD con tarjeta de obra activa; se convierte en cajón desplegable en móvil.",
    ru: "Боковая панель Site OS в стиле панели слоёв CAD с карточкой активной стройки; на мобильных сворачивается в выдвижное меню.",
  },
  'construction-os-topbar': {
    es: "Barra superior de Site OS con ruta de hoja, selector de obra con meteorología, cambio entre plano azul y papel de calco, alertas y usuario.",
    ru: "Верхняя панель Site OS с номером листа, выбором объекта с погодой, переключением тем (синька/калька), уведомлениями и профилем.",
  },
  'construction-os-heading': {
    es: "Cabecera de página de Site OS con referencia de hoja, título sobre línea de cota con remates y botones de acción.",
    ru: "Заголовок страницы Site OS с номером листа, размерной линией с засечками и кнопками действий.",
  },
  'construction-sign-in': {
    es: "Portal de acceso a Site OS con tarjetas de perfil (Obra, Dirección, PRL, Comercial) que dirigen a cada usuario a su pantalla.",
    ru: "Портал входа в Site OS с карточками ролей (Участок, Дирекция, Охрана труда, Продажи), направляющими на нужный экран.",
  },
  // ── Real estate agency & CRM ("Nido") ────────────────────
  'estate-hero': {
    es: 'Hero inmobiliario con buscador de compra y alquiler (zona, tipo y precio máximo) que abre el listado ya filtrado, cifras de confianza y una propiedad destacada.',
    ru: 'Главный экран агентства с поиском покупки и аренды (район, тип, максимальная цена), который открывает отфильтрованный каталог, показатели доверия и избранный объект.',
  },
  'estate-listings-grid': {
    es: 'Listado de propiedades con filtros en vivo (operación, zona, tipo, habitaciones y precio), orden, favoritos guardados en el navegador, URL sincronizada y mapa opcional con precios.',
    ru: 'Каталог объектов с живыми фильтрами (сделка, район, тип, комнаты, цена), сортировкой, избранным в браузере, синхронизацией URL и картой с ценами.',
  },
  'estate-neighborhoods': {
    es: 'Guía de barrios con precio medio por m² y evolución anual; cada tarjeta abre el listado filtrado por zona.',
    ru: 'Гид по районам со средней ценой за м² и годовой динамикой; каждая карточка открывает каталог по району.',
  },
  'estate-property-gallery': {
    es: 'Galería de fotos de la vivienda con miniaturas, botones y flechas del teclado; dibuja estancias ilustradas si el anuncio aún no tiene fotos.',
    ru: 'Фотогалерея объекта с миниатюрами, кнопками и стрелками клавиатуры; рисует иллюстрации комнат, если фотографий ещё нет.',
  },
  'estate-agents-grid': {
    es: 'Directorio de agentes con iniciales, zonas, idiomas, operaciones cerradas, valoración y botones de llamada y email.',
    ru: 'Команда агентов: инициалы, районы, языки, закрытые сделки, рейтинг и кнопки звонка и email.',
  },
  'estate-valuation-cta': {
    es: 'Llamada a la acción para propietarios: cuánto vale tu casa, tres ventajas y enlace al asistente de valoración. Variante banner o sutil.',
    ru: 'Призыв для владельцев: сколько стоит ваше жильё, три преимущества и ссылка на мастер оценки. Варианты баннер и спокойный.',
  },
  'estate-mortgage-calculator': {
    es: 'Simulador de hipoteca con deslizadores y campos numéricos: cuota mensual, importe del préstamo, intereses totales y ahorro necesario con impuestos.',
    ru: 'Ипотечный калькулятор с ползунками и числовыми полями: ежемесячный платёж, сумма кредита, переплата и необходимые накопления с налогами.',
  },
  'estate-valuation-wizard': {
    es: 'Valoración de vivienda en tres pasos: dirección y tipo, superficie, estado y extras, y una horquilla de precio por €/m² de la zona con formulario de contacto.',
    ru: 'Оценка жилья в три шага: адрес и тип, площадь, состояние и опции, затем диапазон цены по району и форма для связи с агентом.',
  },
  'estate-visit-scheduler': {
    es: 'Reserva de visitas: agente, próximos seis días, horas con huecos ocupados desactivados, visita en persona o por vídeo y confirmación en la página.',
    ru: 'Запись на просмотр: агент, ближайшие шесть дней, слоты с занятыми временами, очно или по видео и подтверждение на странице.',
  },
  'estate-leads-pipeline': {
    es: 'Pipeline kanban de leads de compra y alquiler (nuevo, contactado, visita, oferta, cerrado) con botones para mover accesibles por teclado, contadores, llamada y notas.',
    ru: 'Канбан лидов покупателей и арендаторов (новый, связались, просмотр, оффер, закрыт) с кнопками перемещения с клавиатуры, счётчиками, звонком и заметками.',
  },
  // ── Gym & training club ("Forja") ────────────────────────
  'gym-hero': {
    es: 'Hero de gimnasio con llamadas a la prueba gratis y al horario, cifras del club y las próximas clases del día con plazas libres.',
    ru: 'Главный экран спортзала с кнопками пробного периода и расписания, цифрами клуба и ближайшими занятиями дня со свободными местами.',
  },
  'gym-disciplines': {
    es: 'Tarjetas de disciplinas con duración, kcal aproximadas e intensidad; cada una abre el horario filtrado.',
    ru: 'Карточки направлений с длительностью, примерными ккал и интенсивностью; каждая открывает отфильтрованное расписание.',
  },
  'gym-schedule': {
    es: 'Horario semanal con pestañas accesibles por día, filtros por disciplina, nivel, entrenador, sala, plazas libres y enlace para reservar. Se abre en el día de hoy.',
    ru: 'Недельное расписание с доступными вкладками по дням, фильтрами по направлениям, уровнем, тренером, залом, местами и ссылкой на запись. Открывается на сегодня.',
  },
  'gym-membership-plans': {
    es: 'Tarifas con interruptor mensual o anual que actualiza precios, el total anual y el ahorro.',
    ru: 'Абонементы с переключателем помесячно или за год, который обновляет цены, годовую сумму и экономию.',
  },
  'gym-trainers-grid': {
    es: 'Tarjetas del equipo de entrenadores con iniciales, especialidad, años, titulaciones, clases que imparten y una cita.',
    ru: 'Карточки тренеров с инициалами, специализацией, стажем, сертификатами, занятиями и цитатой.',
  },
  'gym-trial-form': {
    es: 'Alta de prueba gratis con datos del club; al enviar muestra un pase de 7 días con código de acceso y fechas. Preselecciona ?plan=.',
    ru: 'Запись на бесплатную пробу с контактами клуба; после отправки показывает пропуск на 7 дней с кодом и датами. Учитывает ?plan=.',
  },
  'gym-class-booking': {
    es: 'Reserva de clases para socios: día de la semana, clases con barra de aforo, reservar, cancelar o lista de espera, límite de reservas y lista de mis reservas en vivo.',
    ru: 'Запись на занятия для участников: день недели, занятия с заполненностью, запись, отмена или лист ожидания, лимит и список своих записей.',
  },
  'gym-progress-tracker': {
    es: 'Progreso del socio: anillo del objetivo mensual, racha semanal, sesiones por semana, marcas personales con su mejora y evolución del peso. SVG sin JavaScript.',
    ru: 'Прогресс участника: кольцо месячной цели, серия недель, тренировки по неделям, личные рекорды и динамика веса. SVG без JavaScript.',
  },
  'gym-occupancy-meter': {
    es: 'Aforo del club en directo con nivel tranquilo, moderado o lleno y la afluencia habitual por horas, resaltando la hora actual.',
    ru: 'Заполненность клуба в реальном времени (спокойно, средне, полно) и обычная посещаемость по часам с текущим часом.',
  },
  'estate-footer': {
    es: 'Pie de página para inmobiliaria con presentación, columnas de enlaces, tarjeta de oficina (dirección, teléfono, email y horario) y fila legal con el registro de la agencia.',
    ru: 'Подвал агентства недвижимости: описание, колонки ссылок, карточка офиса (адрес, телефон, email, часы) и юридическая строка с регистрацией.',
  },
  'estate-crm-sidebar': {
    es: 'Navegación del CRM inmobiliario con insignia de la agencia, enlaces agrupados con contadores y objetivo trimestral; en pantallas pequeñas se abre como panel lateral.',
    ru: 'Навигация CRM агентства: значок агентства, группы ссылок со счётчиками и квартальная цель; на маленьких экранах — выдвижная панель.',
  },
  'estate-crm-topbar': {
    es: 'Barra superior del CRM inmobiliario con botón de menú, buscador, cambio de tema, notificaciones y menú de usuario con popover nativo.',
    ru: 'Верхняя панель CRM: кнопка меню, поиск, смена темы, уведомления и меню пользователя на нативном popover.',
  },
  'estate-crm-heading': {
    es: 'Encabezado de página del CRM inmobiliario con migas de pan, título, descripción, botones de acción y selector de periodo opcional.',
    ru: 'Заголовок страницы CRM: хлебные крошки, заголовок, описание, кнопки действий и выбор периода.',
  },
  'estate-listings-table': {
    es: 'Tabla de gestión de anuncios: búsqueda, filtros por estado, orden por precio, visitas, leads y días publicados, aviso de precio a revisar y enlace a cada ficha.',
    ru: 'Таблица объявлений: поиск, фильтр по статусу, сортировка по цене, просмотрам, лидам и дням, пометка «пересмотреть цену» и ссылка на объект.',
  },
  'estate-agent-sign-in': {
    es: 'Acceso de agentes a pantalla partida: panel de marca con testimonio, cifras y calle ilustrada, y formulario con mostrar contraseña, recordar sesión y acceso con Google o Microsoft.',
    ru: 'Экран входа агентов: панель бренда с отзывом, цифрами и иллюстрацией улицы и форма с показом пароля, запоминанием и входом через Google или Microsoft.',
  },
  'gym-footer': {
    es: 'Pie de página de gimnasio con llamada a la prueba gratis a todo el ancho, tabla de horarios, columnas de enlaces, contacto y fila legal.',
    ru: 'Подвал спортзала: широкий призыв к бесплатной пробе, таблица часов работы, ссылки, контакты и юридическая строка.',
  },
  'gym-area-nav': {
    es: 'Navegación del área de socios: barra lateral con marca y objetivo mensual en escritorio y barra de pestañas fija abajo en móvil. Sin JavaScript.',
    ru: 'Навигация кабинета участника: боковая панель с логотипом и целью на десктопе и нижняя панель вкладок на телефоне. Без JavaScript.',
  },
  'gym-area-topbar': {
    es: 'Barra superior del área de socios con fecha de hoy, aforo en directo, pase de acceso con código, avisos y menú del socio (popovers nativos).',
    ru: 'Верхняя панель кабинета: сегодняшняя дата, заполненность клуба, пропуск с кодом доступа, уведомления и меню участника (нативные popover).',
  },
  'gym-area-heading': {
    es: 'Encabezado en mayúsculas para el área de socios con antetítulo, descripción, enlace de vuelta y botones de acción.',
    ru: 'Крупный заголовок кабинета участника с надзаголовком, описанием, ссылкой назад и кнопками.',
  },
  'gym-members-table': {
    es: 'Tabla de socios para el staff: búsqueda, filtros por estado y riesgo de baja, orden por visitas, última visita y alta, barras de actividad y recordatorio en un clic.',
    ru: 'Таблица участников для персонала: поиск, фильтры по статусу и риску ухода, сортировка по посещениям и датам, полосы активности и напоминание в один клик.',
  },
  'gym-sign-in': {
    es: 'Acceso al gimnasio con selector socio o staff, número de socio o email, PIN con mostrar y botones de acceso de demostración sobre fondo de rayas.',
    ru: 'Вход в спортзал: переключатель участник/персонал, номер или email, PIN с показом и демо-кнопки на полосатом фоне.',
  },
  // ── Online academy ("Lumen") ────────────────────────
  'academy-hero': {
    es: 'Hero de academia online con titular serif, buscador de cursos con temas populares, cifras de alumnos y tarjeta del curso destacado sobre un resplandor ámbar.',
    ru: 'Главный экран онлайн-академии с засечным заголовком, поиском курсов и популярными темами, цифрами и карточкой популярного курса на янтарном свечении.',
  },
  'academy-tracks': {
    es: 'Tarjetas de rutas por área con icono, descripción y número de cursos; cada una abre el catálogo filtrado por esa categoría.',
    ru: 'Карточки направлений с иконкой, описанием и числом курсов; каждая открывает каталог, отфильтрованный по категории.',
  },
  'academy-course-grid': {
    es: 'Catálogo de cursos con buscador, categorías, filtro por nivel y orden. Lee ?q= y ?cat= de la URL y anuncia el número de resultados.',
    ru: 'Каталог курсов с поиском, категориями, фильтром по уровню и сортировкой. Читает ?q= и ?cat= из URL и озвучивает число результатов.',
  },
  'academy-course-hero': {
    es: 'Cabecera de la ficha de curso: migas de pan, valoración y datos, instructor, qué aprenderás y tarjeta de matrícula fija con precio, descuento y contenido incluido.',
    ru: 'Шапка страницы курса: хлебные крошки, рейтинг и данные, преподаватель, чему вы научитесь и закреплённая карточка записи с ценой, скидкой и составом.',
  },
  'academy-curriculum': {
    es: 'Temario del curso como acordeón de módulos con tipo de clase, duración, clases de muestra gratuitas y botón para expandir o contraer todo.',
    ru: 'Программа курса в виде аккордеона модулей с типом урока, длительностью, бесплатными пробными уроками и кнопкой «развернуть всё».',
  },
  'academy-pricing-plans': {
    es: 'Planes de suscripción con interruptor mensual o anual que actualiza precios, el total anual y el ahorro.',
    ru: 'Тарифы подписки с переключателем помесячно или за год, который обновляет цены, годовую сумму и экономию.',
  },
  'academy-instructors': {
    es: 'Tarjetas del equipo docente con iniciales, cargo, biografía breve y cifras de alumnos, cursos y valoración.',
    ru: 'Карточки преподавателей с инициалами, должностью, краткой биографией и цифрами: ученики, курсы, рейтинг.',
  },
  'academy-reviews': {
    es: 'Resultados de alumnos: puntuación grande y tarjetas de opiniones con estrellas, cita, autor, ocupación y curso realizado.',
    ru: 'Результаты учеников: крупная оценка и карточки отзывов со звёздами, цитатой, автором, профессией и пройденным курсом.',
  },
  'academy-teach-form': {
    es: 'Solicitud para instructores: lista de ventajas junto a un formulario validado que envía a tu backend o muestra una confirmación en la página.',
    ru: 'Заявка преподавателя: список преимуществ рядом с проверяемой формой, которая отправляет данные на ваш бэкенд или показывает подтверждение на странице.',
  },
  'academy-footer': {
    es: 'Pie de página de academia con banda de llamada a la acción, columnas de enlaces, contacto y fila legal.',
    ru: 'Подвал академии с призывом к действию, колонками ссылок, контактами и юридической строкой.',
  },
  'academy-lesson-player': {
    es: 'Reproductor de curso: zona de clase con play, pausa, barra de posición y velocidad, anterior y siguiente, marcar como completada, temario con checks por clase, progreso total y apuntes guardados en el navegador.',
    ru: 'Плеер курса: зона урока с воспроизведением, паузой, перемоткой и скоростью, предыдущий и следующий урок, отметка о завершении, программа с отметками, общий прогресс и заметки в браузере.',
  },
  'academy-progress-board': {
    es: 'Inicio del alumno: anillo de meta semanal, semana de racha con minutos por día y tarjetas para seguir cada curso con su progreso. SVG y CSS puros.',
    ru: 'Главная ученика: кольцо недельной цели, неделя серии с минутами по дням и карточки продолжения курсов с прогрессом. Чистые SVG и CSS.',
  },
  'academy-quiz': {
    es: 'Test de opción múltiple: una pregunta cada vez, respuesta inmediata con explicación, nota final con mínimo para aprobar y repetir.',
    ru: 'Тест с выбором ответа: по одному вопросу, мгновенная обратная связь с объяснением, итоговый балл с проходным порогом и повтор.',
  },
  'academy-studio-stats': {
    es: 'Resumen del estudio del instructor: cuatro KPIs con cambio frente al mes anterior y gráfico de barras de 12 meses de ingresos y matrículas con cambio de métrica y tabla de datos para lectores de pantalla.',
    ru: 'Обзор студии преподавателя: четыре KPI с изменением к прошлому месяцу и столбчатый график выручки и записей за 12 месяцев с переключением метрики и таблицей для скринридеров.',
  },
  'academy-courses-table': {
    es: 'Gestor de cursos del instructor: búsqueda, filtros por estado, orden por alumnos, valoración, finalización e ingresos, estados en texto y enlace para editar.',
    ru: 'Менеджер курсов преподавателя: поиск, фильтры по статусу, сортировка по ученикам, рейтингу, завершаемости и выручке, статусы текстом и ссылка редактирования.',
  },
  'academy-area-nav': {
    es: 'Navegación del aula: barra lateral con marca y meta semanal en escritorio y barra de pestañas fija abajo en móvil. Sin JavaScript.',
    ru: 'Навигация кабинета: боковая панель с логотипом и недельной целью на десктопе и нижняя панель вкладок на телефоне. Без JavaScript.',
  },
  'academy-area-topbar': {
    es: 'Barra superior del aula con fecha de hoy, racha de estudio, cambio de tema, avisos y menú de usuario (popovers nativos).',
    ru: 'Верхняя панель кабинета с сегодняшней датой, серией занятий, сменой темы, уведомлениями и меню пользователя (нативные popover).',
  },
  'academy-area-heading': {
    es: 'Encabezado serif para el aula con antetítulo, descripción, enlace de vuelta y botones de acción.',
    ru: 'Заголовок кабинета с засечным шрифтом, надзаголовком, описанием, ссылкой назад и кнопками.',
  },
  'academy-sign-in': {
    es: 'Acceso a pantalla partida con panel ilustrado de la lámpara, selector alumno o instructor, mostrar contraseña y accesos de demostración.',
    ru: 'Вход на двух панелях с иллюстрацией лампы, переключателем ученик/преподаватель, показом пароля и демо-ссылками.',
  },
  // ── Fintech neobank ("Cobre") ────────────────────────
  'bank-hero': {
    es: 'Hero de neobanco con titular grotesco, llamadas a abrir cuenta y ver precios, cifras clave y un mock del producto con tarjeta metálica cobre, panel de saldo e insignia de reserva de impuestos.',
    ru: 'Главный экран необанка с заголовком, кнопками открытия счёта и тарифов, цифрами и макетом продукта: медная карта, панель баланса и налоговый резерв.',
  },
  'bank-features': {
    es: 'Cuadrícula bento de ventajas del producto con iconos; la primera ocupa dos columnas como punto focal.',
    ru: 'Бенто-сетка преимуществ продукта с иконками; первое занимает две колонки как акцент.',
  },
  'bank-card-showcase': {
    es: 'Selector de tarjetas: elige metal, virtual o de equipo y cambian la ilustración, el precio y las ventajas. Grupo de radios nativo, sin backend.',
    ru: 'Выбор карты: металлическая, виртуальная или командная — меняются иллюстрация, цена и преимущества. Нативные радиокнопки, без бэкенда.',
  },
  'bank-plans': {
    es: 'Planes con interruptor mensual o anual que actualiza precios y ahorro, con un plan recomendado destacado.',
    ru: 'Тарифы с переключателем помесячно или за год, который обновляет цены и экономию, с выделенным рекомендуемым тарифом.',
  },
  'bank-fee-table': {
    es: 'Tabla comparativa de lo que cuesta cada concepto en el neobanco frente a un banco tradicional, con la columna del neobanco destacada.',
    ru: 'Таблица сравнения стоимости услуг в необанке и в традиционном банке с выделенной колонкой необанка.',
  },
  'bank-savings-calculator': {
    es: 'Simulador de ahorro con deslizadores de ingreso inicial, aportación mensual y plazo; muestra el saldo final, los intereses y una barra comparativa.',
    ru: 'Симулятор накоплений с ползунками первоначального взноса, ежемесячного пополнения и срока; показывает итог, проценты и полосу соотношения.',
  },
  'bank-security': {
    es: 'Sección de confianza con la cifra de garantía de depósitos, cuatro pilares de protección y una fila de sellos regulatorios.',
    ru: 'Блок доверия с суммой гарантии вкладов, четырьмя опорами защиты и рядом регуляторных знаков.',
  },
  'bank-faq': {
    es: 'Preguntas frecuentes en acordeón nativo con una línea de contacto.',
    ru: 'Частые вопросы в виде нативного аккордеона со строкой контакта.',
  },
  'bank-onboarding': {
    es: 'Asistente para abrir cuenta en tres pasos con progreso, validación por paso, plan preseleccionado desde ?plan= y confirmación con el nuevo IBAN.',
    ru: 'Мастер открытия счёта из трёх шагов с прогрессом, проверкой на каждом шаге, предвыбором тарифа из ?plan= и подтверждением с новым IBAN.',
  },
  'bank-footer': {
    es: 'Pie de página de neobanco con banda de llamada a la acción, columnas de enlaces, contacto y el bloque legal regulatorio y de garantía de depósitos.',
    ru: 'Подвал необанка с призывом к действию, колонками ссылок, контактами и юридическим блоком о регулировании и гарантии вкладов.',
  },
  'bank-balance-card': {
    es: 'Saldo total con botón para ocultar o mostrar y lista de cuentas (corriente, ahorro, impuestos) con IBAN enmascarado, saldo, TAE y botón para copiar el IBAN.',
    ru: 'Общий баланс с кнопкой скрыть/показать и список счетов (текущий, накопительный, налоговый) с маскированным IBAN, балансом, ставкой и копированием IBAN.',
  },
  'bank-cashflow-chart': {
    es: 'Gráfico de barras agrupadas de ingresos y gastos en SVG puro con cambio de 6 o 12 meses, resultado neto y tabla de datos accesible.',
    ru: 'Групповая столбчатая диаграмма доходов и расходов на чистом SVG с переключением 6/12 месяцев, чистым результатом и доступной таблицей данных.',
  },
  'bank-spending-breakdown': {
    es: 'Gráfico de anillo del gasto por categoría a partir de tus movimientos, con leyenda de importe y porcentaje. SVG puro.',
    ru: 'Кольцевая диаграмма расходов по категориям на основе операций с легендой сумм и процентов. Чистый SVG.',
  },
  'bank-transactions-table': {
    es: 'Tabla de movimientos con búsqueda, filtros por categoría y tipo, orden por fecha o importe, estados, recuento y balance en vivo y exportación a CSV de lo filtrado.',
    ru: 'Таблица операций с поиском, фильтрами по категории и типу, сортировкой по дате или сумме, статусами, живым счётчиком и балансом и экспортом отфильтрованного в CSV.',
  },
  'bank-card-manager': {
    es: 'Gestión de tarjetas: elige una, muestra su número, congélala con un interruptor y fija su límite mensual con un medidor de gasto en vivo.',
    ru: 'Управление картами: выбор карты, показ номера, заморозка переключателем и месячный лимит с живым индикатором расходов.',
  },
  'bank-transfer-form': {
    es: 'Transferencia en dos pasos: cuenta de origen, beneficiario guardado o nuevo con validación IBAN (mod 97), importe con control de saldo, revisión y justificante.',
    ru: 'Перевод в два шага: счёт списания, сохранённый или новый получатель с проверкой IBAN (mod 97), сумма с контролем баланса, проверка и квитанция.',
  },
  'bank-app-nav': {
    es: 'Navegación del área de cliente: barra lateral con marca y medidor de reserva de impuestos en escritorio y barra de pestañas fija abajo en móvil. Sin JavaScript.',
    ru: 'Навигация кабинета клиента: боковая панель с логотипом и индикатором налогового резерва на десктопе и нижняя панель вкладок на телефоне. Без JavaScript.',
  },
  'bank-app-topbar': {
    es: 'Barra superior del área de cliente con fecha de hoy, indicador de estado, cambio de tema, avisos y menú de usuario (popovers nativos).',
    ru: 'Верхняя панель кабинета клиента: сегодняшняя дата, статус-чип, смена темы, уведомления и меню пользователя (нативные popover).',
  },
  'bank-app-heading': {
    es: 'Encabezado de página del área de cliente con antetítulo, descripción, enlace de vuelta y botones de acción.',
    ru: 'Заголовок страницы кабинета клиента с надзаголовком, описанием, ссылкой назад и кнопками.',
  },
  'bank-sign-in': {
    es: 'Acceso a pantalla partida con ilustración de tarjetas flotantes, testimonio, cifras, mostrar contraseña y acceso de demostración.',
    ru: 'Вход на двух панелях с иллюстрацией парящих карт, отзывом, цифрами, показом пароля и демо-ссылкой.',
  },
  // ── Law firm ("Fuero") ────────────────────────
  'law-hero': {
    es: 'Hero de despacho de abogados con titular serif, llamadas a la consulta gratuita y a las áreas, teléfono directo, cifras clave y una tarjeta "expediente" que muestra cómo el cliente sigue su caso.',
    ru: 'Главный экран юридической фирмы с засечным заголовком, кнопками бесплатной консультации и направлений, прямым телефоном, цифрами и карточкой «дело», показывающей, как клиент следит за делом.',
  },
  'law-practice-areas': {
    es: 'Áreas de práctica como pestañas accesibles: elige un área y lee su resumen, asuntos habituales y enlace a la consulta. Abre el área desde ?area=.',
    ru: 'Направления практики в виде доступных вкладок: выберите направление и прочитайте описание, типичные дела и ссылку на консультацию. Открывает направление из ?area=.',
  },
  'law-team': {
    es: 'Equipo de abogados con retratos de iniciales, cargo, años de ejercicio, idiomas y biografía, con filtro opcional por área de práctica.',
    ru: 'Команда юристов с портретами-инициалами, должностью, стажем, языками и биографией, с необязательным фильтром по направлению.',
  },
  'law-process': {
    es: '"Cómo trabajamos" en pasos numerados a lo largo de una línea vertical con grandes numerales serif.',
    ru: '«Как мы работаем» — пронумерованные шаги вдоль вертикальной линии с крупными засечными цифрами.',
  },
  'law-results': {
    es: 'Trayectoria: una fila de cifras de resultados y testimonios de clientes con el tipo de asunto y el resultado como etiqueta.',
    ru: 'Результаты: ряд цифр и отзывы клиентов с типом дела и итогом в виде метки.',
  },
  'law-fees': {
    es: 'Modelos de honorarios transparentes lado a lado (fijos, a resultado, iguala mensual) con precio, explicación y los asuntos a los que mejor encajan.',
    ru: 'Прозрачные модели гонораров рядом (фиксированный, за результат, месячная подписка) с ценой, описанием и подходящими делами.',
  },
  'law-consultation': {
    es: 'Reserva de consulta gratuita: elige área, uno de los próximos días laborables, hora y formato, y deja tus datos. Incluye un resumen de confirmación.',
    ru: 'Запись на бесплатную консультацию: направление, один из ближайших рабочих дней, время и формат, затем контактные данные. Есть итоговое подтверждение.',
  },
  'law-insights': {
    es: 'Artículos jurídicos en tres tarjetas con área, fecha, tiempo de lectura, título y extracto; la primera es destacada.',
    ru: 'Юридические статьи тремя карточками с направлением, датой, временем чтения, заголовком и анонсом; первая — крупная.',
  },
  'law-faq': {
    es: 'Preguntas frecuentes en acordeón nativo con una línea de contacto.',
    ru: 'Частые вопросы в виде нативного аккордеона со строкой контакта.',
  },
  'law-footer': {
    es: 'Pie de página de despacho con banda de llamada a la consulta, columnas de enlaces, contacto y el bloque legal de colegiación y secreto profesional.',
    ru: 'Подвал юридической фирмы с призывом к консультации, колонками ссылок, контактами и юридическим блоком о членстве в коллегии и адвокатской тайне.',
  },
  'law-case-summary': {
    es: 'Resumen del portal: expedientes activos, próxima cita, documentos pendientes de firma y saldo pendiente, con una lista "necesita tu atención" con enlaces para actuar.',
    ru: 'Обзор кабинета: активные дела, ближайшая встреча, документы на подпись и задолженность, плюс список «требует внимания» со ссылками.',
  },
  'law-case-explorer': {
    es: 'Explorador de expedientes: lista con filtros de estado y, para el seleccionado, abogado, barra de progreso, siguiente paso destacado y cronología vertical de hitos hechos y próximos.',
    ru: 'Обзор дел: список с фильтрами по статусу и для выбранного дела — юрист, прогресс, выделенный следующий шаг и вертикальная хронология выполненных и предстоящих этапов.',
  },
  'law-document-vault': {
    es: 'Caja de documentos del cliente con búsqueda, filtros por tipo y expediente, tabla de archivos, acción de firma electrónica y zona de subida por clic o arrastrando.',
    ru: 'Хранилище документов клиента с поиском, фильтрами по типу и делу, таблицей файлов, электронной подписью и зоной загрузки кликом или перетаскиванием.',
  },
  'law-message-thread': {
    es: 'Mensajería segura con tu abogado: conversación agrupada por día con burbujas del despacho y del cliente y un editor (Enter envía, Shift+Enter añade línea).',
    ru: 'Защищённая переписка с юристом: диалог по дням с пузырями фирмы и клиента и поле ввода (Enter отправляет, Shift+Enter — новая строка).',
  },
  'law-appointments': {
    es: 'Próximas citas con bloque de fecha, lugar o enlace de vídeo y abogado, calendario mensual con días marcados y descarga .ics para añadir al calendario.',
    ru: 'Ближайшие встречи с блоком даты, местом или видеоссылкой и юристом, календарь месяца с отмеченными днями и загрузка .ics.',
  },
  'law-invoices': {
    es: 'Honorarios y facturas: saldo pendiente, lista con concepto, vencimiento, importe y estado, y botón de pago que marca como pagada y actualiza el saldo (demo).',
    ru: 'Гонорары и счета: задолженность, список с назначением, сроком, суммой и статусом и кнопка оплаты, которая отмечает счёт оплаченным и обновляет сумму (демо).',
  },
  'law-portal-nav': {
    es: 'Navegación del portal del cliente: barra lateral con marca y medidor de progreso de casos en escritorio y barra de pestañas fija abajo en móvil. Sin JavaScript.',
    ru: 'Навигация кабинета клиента: боковая панель с логотипом и индикатором прогресса дел на десктопе и нижняя панель вкладок на телефоне. Без JavaScript.',
  },
  'law-portal-topbar': {
    es: 'Barra superior del portal del cliente con fecha de hoy, indicador de conexión segura, cambio de tema, avisos y menú de usuario (popovers nativos).',
    ru: 'Верхняя панель кабинета клиента: сегодняшняя дата, чип защищённого соединения, смена темы, уведомления и меню пользователя (нативные popover).',
  },
  'law-portal-heading': {
    es: 'Encabezado de página del portal del cliente con antetítulo, descripción, enlace de vuelta y botones de acción.',
    ru: 'Заголовок страницы кабинета клиента с надзаголовком, описанием, ссылкой назад и кнопками.',
  },
  'law-sign-in': {
    es: 'Acceso a pantalla partida con ilustración de la balanza, testimonio, cifras, mostrar contraseña y acceso de demostración.',
    ru: 'Вход на двух панелях с иллюстрацией весов, отзывом, цифрами, показом пароля и демо-ссылкой.',
  },
  // ── Winery ("Solera") ────────────────────────
  'wine-hero': {
    es: 'Hero de bodega con titular serif enorme, curvas de nivel topográficas, cifras clave y una gran botella generada que se inclina con el puntero.',
    ru: 'Главный экран винодельни с огромным засечным заголовком, топографическими линиями, ключевыми цифрами и большой сгенерированной бутылкой, наклоняющейся за курсором.',
  },
  'wine-vintage-scene': {
    es: 'Escena de scroll fijada "un año en el viñedo": cielo, colinas, hojas y uvas de un viñedo dibujado cambian de forma continua entre poda, brotación, envero, vendimia y crianza mientras entra el texto.',
    ru: 'Закреплённая сцена прокрутки «год на винограднике»: небо, холмы, листья и гроздья нарисованного виноградника плавно меняются от обрезки до выдержки, пока меняется текст.',
  },
  'wine-collection': {
    es: 'Carta de vinos como índice editorial: cada fila se abre (una a la vez) con la botella generada, notas de cata, perfil de 1 a 5, ventana de consumo y enlace a la caja del club, con filtro por tipo.',
    ru: 'Карта вин как крупный редакционный индекс: каждая строка раскрывается (по одной) с бутылкой, нотами дегустации, профилем 1–5, окном употребления и ссылкой на коробку клуба, с фильтром по типу.',
  },
  'wine-terroir': {
    es: 'Mapa interactivo de parcelas de la finca: elige una parcela (lista o dibujo) para ver variedad, altitud, suelo, año de plantación, orientación y los vinos que salen de ella.',
    ru: 'Интерактивная карта участков: выберите участок (список или схема), чтобы увидеть сорт, высоту, почву, год посадки, экспозицию и вина с него.',
  },
  'wine-story': {
    es: 'Historia familiar como cronología editorial: una cita destacada de la enóloga fija junto a cinco hitos con grandes años en contorno.',
    ru: 'История семьи как редакционная хронология: закреплённая цитата винодела рядом с пятью вехами и крупными контурными годами.',
  },
  'wine-visits': {
    es: 'Reserva de visitas: elige experiencia, fecha, hora y personas, mira cómo se actualiza el total y envía la solicitud. Las experiencias de temporada avisan si la fecha queda fuera.',
    ru: 'Запись на визит: выберите программу, дату, время и число гостей, следите за итогом и отправьте заявку. Сезонные программы предупреждают, если дата не в сезон.',
  },
  'wine-club': {
    es: 'Configurador del club de vino: elige botellas, estilo y frecuencia; la caja dibujada junto al formulario cambia botella a botella y el precio (con descuento por volumen) se actualiza en vivo.',
    ru: 'Конфигуратор винного клуба: выберите бутылки, стиль и частоту; нарисованный ящик меняется бутылка за бутылкой, а цена (со скидкой за объём) обновляется на лету.',
  },
  'wine-awards': {
    es: 'Puntuaciones de prensa como lista tipográfica: un número enorme por fila con el vino, la guía y el año. Sin insignias ni iconos.',
    ru: 'Оценки прессы как типографский список: огромное число в каждой строке с вином, гидом и годом. Без значков и иконок.',
  },
  'wine-faq': {
    es: 'Preguntas frecuentes en acordeón nativo con una línea de contacto.',
    ru: 'Частые вопросы в виде нативного аккордеона со строкой контакта.',
  },
  'wine-footer': {
    es: 'Pie de página de bodega con llamada final a la acción, columnas de enlaces, boletín y un gran logotipo en contorno.',
    ru: 'Подвал винодельни с финальным призывом, колонками ссылок, рассылкой и огромным контурным логотипом.',
  },
  'wine-bottle-label': {
    es: 'Botella o etiqueta tipográfica dibujada en SVG a partir de los datos del vino (nombre, variedad, añada y sus colores de etiqueta). No necesita imágenes.',
    ru: 'Типографская бутылка или этикетка в SVG по данным вина (название, сорт, год и цвета этикетки). Картинки не нужны.',
  },
  'wine-member-summary': {
    es: 'Inicio del área de socios: próxima caja con cuenta atrás y sus botellas, cifras de la socia (botellas, nota media, crédito, años) y una sugerencia de qué abrir este mes.',
    ru: 'Главная кабинета участника: ближайшая коробка с обратным отсчётом и бутылками, цифры участника (бутылки, средняя оценка, кредит, годы) и подсказка, что открыть в этом месяце.',
  },
  'wine-shipment-tracker': {
    es: 'Envíos como lista desplegable con botellas, cronología vertical, transportista y seguimiento. Las cajas próximas se pueden aplazar, saltar o enviar a otra dirección (demo).',
    ru: 'Отправления в раскрывающемся списке с бутылками, вертикальной хронологией, перевозчиком и трекингом. Ближайшие коробки можно отложить, пропустить или отправить на другой адрес (демо).',
  },
  'wine-cellar': {
    es: 'Bodega personal: botellas que quedan, barra de ventana de consumo con marca de hoy y estado en lenguaje claro, nota de 1 a 5, botón "abrir una" y filtro en bodega / terminadas / todas.',
    ru: 'Личный погреб: остаток бутылок, шкала окна употребления с отметкой «сегодня» и понятным статусом, оценка 1–5, кнопка «открыть одну» и фильтр: в погребе / допиты / все.',
  },
  'wine-tasting-notebook': {
    es: 'Cuaderno de cata: elige un vino, ajusta cuerpo, acidez, taninos y madera, valóralo y escribe una nota; las catas se listan de más reciente a más antigua y se pueden borrar (guardadas en localStorage).',
    ru: 'Дневник дегустаций: выберите вино, задайте тело, кислотность, танины и дуб, оцените и напишите заметку; записи идут от новых к старым и удаляются (хранятся в localStorage).',
  },
  'wine-plan-manager': {
    es: 'Gestión del plan del club: botellas por envío, estilo, frecuencia e interruptor de pausa, con el precio por envío y al año recalculado en vivo (demo).',
    ru: 'Управление планом клуба: бутылки в отправке, стиль, частота и переключатель паузы, цена за отправку и за год пересчитывается на лету (демо).',
  },
  'wine-member-nav': {
    es: 'Navegación del área de socios: logotipo y pestañas de texto en una fila de cabecera en escritorio y barra de pestañas fija abajo en móvil. Solo texto, sin JavaScript.',
    ru: 'Навигация кабинета участника: логотип и текстовые вкладки в шапке на десктопе и закреплённая нижняя панель на телефонах. Только текст, без JavaScript.',
  },
  'wine-member-topbar': {
    es: 'Lado derecho de la cabecera de socios: logotipo en móvil, fecha de hoy, cambio de tema, avisos y menú de la socia (popovers nativos).',
    ru: 'Правая часть шапки кабинета: логотип на телефоне, сегодняшняя дата, смена темы, уведомления и меню участника (нативные popover).',
  },
  'wine-member-heading': {
    es: 'Encabezado de página del área de socios con antetítulo, título serif grande, descripción, enlace de vuelta y un hueco para acciones.',
    ru: 'Заголовок страницы кабинета участника с надзаголовком, крупным засечным названием, описанием, ссылкой назад и слотом для действий.',
  },
  'wine-sign-in': {
    es: 'Acceso a pantalla partida con una gran etiqueta de vino generada y un testimonio de socia, mostrar/ocultar contraseña, recordarme y acceso de demostración.',
    ru: 'Вход на двух панелях с большой сгенерированной этикеткой и отзывом участницы, показ пароля, «запомнить меня» и демо-ссылка.',
  },
  // ── Perfumery ("Umbra") ────────────────────────
  'perf-hero': {
    es: 'Hero de perfumería con un titular serif enorme sobre nubes lentas de color tomadas del acorde de la fragancia (derivan y siguen al puntero), un gran frasco generado y sus notas flotando alrededor como texto.',
    ru: 'Главный экран парфюмерии с огромным заголовком на дрейфующих облаках цвета из аккорда аромата (они следуют за курсором), большим сгенерированным флаконом и парящими вокруг нотами в виде текста.',
  },
  'perf-skin': {
    es: '"Evolución en piel": mueve un deslizador de horas (0–10 h) y mira cómo se despliega una fragancia. Una curva por capas muestra cómo suben y se apagan las notas de salida, corazón y fondo, y cada nota tiene un estado escrito que se actualiza en vivo.',
    ru: '«Эволюция на коже»: двигайте ползунок часов (0–10 ч) и смотрите, как раскрывается аромат. Кривая по слоям показывает, как поднимаются и затихают верхние, сердечные и базовые ноты, а у каждой ноты есть текстовый статус.',
  },
  'perf-collection': {
    es: 'Las fragancias como carril horizontal de tarjetas altas: cada una dibuja su frasco en sus colores, lista sus notas por capas y deja elegir tamaño con el precio actualizándose antes del botón de añadir.',
    ru: 'Ароматы в виде горизонтальной ленты высоких карточек: каждая рисует свой флакон в своих цветах, перечисляет ноты по слоям и даёт выбрать объём с ценой, меняющейся перед кнопкой добавления.',
  },
  'perf-map': {
    es: 'Mapa olfativo: cada fragancia es un punto luminoso entre fresco y cálido (horizontal) y ligero y denso (vertical). Elige una en la lista o en el mapa para leer su historia, perfumista, estela, duración y vecina más cercana.',
    ru: 'Ольфакторная карта: каждый аромат — светящаяся точка между свежим и тёплым (по горизонтали) и лёгким и плотным (по вертикали). Выберите его в списке или на карте, чтобы узнать историю, парфюмера, шлейф, стойкость и ближайшего соседа.',
  },
  'perf-atelier': {
    es: 'Materias primas como lista tipográfica: nombre, origen y método, una gran proporción en contorno de kilos de materia por kilo de esencia y una barra logarítmica que la hace visible. Sin imágenes ni iconos.',
    ru: 'Сырьё как типографский список: название, происхождение и метод, огромное контурное соотношение килограммов сырья на килограмм эссенции и логарифмическая шкала. Без картинок и иконок.',
  },
  'perf-quiz': {
    es: 'Test de perfil olfativo de cuatro preguntas: una a una con grandes respuestas y contador de pasos; el resultado muestra la mejor coincidencia con su frasco, sus notas y una segunda opción, puntuada con un voto ponderado.',
    ru: 'Тест ароматического профиля из четырёх вопросов: по одному, с крупными вариантами и счётчиком шагов; результат показывает лучший вариант с флаконом, нотами и второй вариант по взвешенному голосованию.',
  },
  'perf-discovery': {
    es: 'Constructor del set de descubrimiento: elige hasta seis viales de 2 ml en tarjetas grandes que dibujan su frasco, mira cómo se actualizan el total y el avance hacia el envío gratis y envía la solicitud.',
    ru: 'Конструктор набора для знакомства: выберите до шести флакончиков по 2 мл на крупных карточках с рисунком флакона, следите за итогом и прогрессом до бесплатной доставки и отправьте заявку.',
  },
  'perf-faq': {
    es: 'Preguntas frecuentes en acordeón nativo con una línea de contacto.',
    ru: 'Частые вопросы в виде нативного аккордеона со строкой контакта.',
  },
  'perf-footer': {
    es: 'Pie de página de perfumería con llamada final a la acción, columnas de enlaces, boletín y un gran logotipo en contorno.',
    ru: 'Подвал парфюмерии с финальным призывом, колонками ссылок, рассылкой и огромным контурным логотипом.',
  },
  'perf-bottle': {
    es: 'Frasco de perfume dibujado en SVG a partir de los datos de la fragancia: base de vidrio grueso, líquido en sus colores de acorde a cualquier nivel, tapón metálico y etiqueta tipográfica. No necesita imágenes.',
    ru: 'Флакон духов в SVG по данным аромата: толстое стеклянное дно, жидкость в цветах аккорда на любом уровне, металлический колпачок и типографская этикетка. Картинки не нужны.',
  },
  'perf-account-summary': {
    es: 'Inicio del área de cliente: el pedido en curso con una cronología escrita de cuatro pasos y sus frascos, las cifras de la clienta (frascos, crédito, años, pedidos) y un aviso del frasco que se acaba.',
    ru: 'Главная кабинета клиента: заказ в работе с текстовой хронологией из четырёх шагов и флаконами, цифры клиента (флаконы, кредит, годы, заказы) и напоминание о заканчивающемся флаконе.',
  },
  'perf-shelf': {
    es: 'La estantería de la clienta: cada frasco dibujado a su nivel real. Un deslizador marca cuánto queda (el frasco se vacía en pantalla), el estado se escribe en lenguaje claro, aparece un enlace para reponer por debajo del 25% y cada frasco se valora de 1 a 5.',
    ru: 'Полка клиента: каждый флакон нарисован на реальном уровне жидкости. Ползунок задаёт остаток (флакон опустошается на экране), статус написан простыми словами, ниже 25% появляется ссылка на повторный заказ, каждый флакон оценивается от 1 до 5.',
  },
  'perf-layering': {
    es: 'Laboratorio de capas: elige dos fragancias y una proporción; un vial mezcla sus colores en esa proporción y se listan las notas de ambas por capas. Ponle nombre a una mezcla y guárdala (localStorage); las guardadas se cargan o se borran.',
    ru: 'Лаборатория слоёв: выберите два аромата и пропорцию; флакончик смешивает их цвета в этой пропорции, ноты обоих перечислены по слоям. Назовите смесь и сохраните (localStorage); сохранённые можно загрузить или удалить.',
  },
  'perf-order-tracker': {
    es: 'Pedidos como acordeón nativo exclusivo: id, fecha, estado y total; el cuerpo lista los frascos, una cronología escrita, transportista y seguimiento. Los pedidos en preparación se pueden cambiar de dirección o cancelar (demo).',
    ru: 'Заказы в эксклюзивном нативном аккордеоне: номер, дата, статус и сумма; внутри — флаконы, текстовая хронология, перевозчик и трекинг. Заказы в подготовке можно изменить по адресу или отменить (демо).',
  },
  'perf-account-nav': {
    es: 'Navegación del área de cliente: logotipo y pestañas de texto en una fila de cabecera en escritorio y barra de pestañas fija abajo en móvil. Solo texto, sin JavaScript.',
    ru: 'Навигация кабинета клиента: логотип и текстовые вкладки в шапке на десктопе и закреплённая нижняя панель на телефонах. Только текст, без JavaScript.',
  },
  'perf-account-topbar': {
    es: 'Lado derecho de la cabecera de cliente: logotipo en móvil, fecha de hoy, cambio de tema, avisos y menú de la clienta (popovers nativos).',
    ru: 'Правая часть шапки кабинета: логотип на телефоне, сегодняшняя дата, смена темы, уведомления и меню клиента (нативные popover).',
  },
  'perf-account-heading': {
    es: 'Encabezado de página del área de cliente con antetítulo, título serif grande, descripción, enlace de vuelta y un hueco para acciones.',
    ru: 'Заголовок страницы кабинета клиента с надзаголовком, крупным засечным названием, описанием, ссылкой назад и слотом для действий.',
  },
  'perf-sign-in': {
    es: 'Acceso a pantalla partida con un gran frasco generado y un testimonio, mostrar/ocultar contraseña, recordarme y acceso de demostración.',
    ru: 'Вход на двух панелях с большим сгенерированным флаконом и отзывом, показ пароля, «запомнить меня» и демо-ссылка.',
  },
};
