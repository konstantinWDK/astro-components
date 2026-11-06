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
};
