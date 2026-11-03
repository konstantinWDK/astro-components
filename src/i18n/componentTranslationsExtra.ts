// src/i18n/componentTranslationsExtra.ts
// Localized descriptions for the SVG charts & statistics and the additional sections.
import type { ComponentTranslation } from './componentTranslations';

export const componentTranslationsExtra: Record<string, ComponentTranslation> = {
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
};
