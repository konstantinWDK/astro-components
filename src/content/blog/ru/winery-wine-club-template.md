---
title: 'Новый шаблон: Solera — винодельня с кабинетом участника винного клуба'
description: 'Solera — новый полный шаблон для винодельни: главный экран с наклоняющейся бутылкой, закреплённая сцена прокрутки, меняющая нарисованный виноградник в течение года, интерактивная карта участков, запись на визиты и конфигуратор винного клуба, плюс кабинет участника с погребом, дневником дегустаций, отправлениями и планом, всё на собственных компонентах.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Solera: винодельня, которую читают как журнал, на девяти страницах

Solera (`templates/winery`) — полный шаблон для винодельни или ремесленного производителя с клубом по подписке. У него собственный визуальный язык: тёмный погреб, старое золото и глубокий красный с оптической антиквой (Fraunces), без сеток иконок и облаков тегов: всё держится на рисунках, типографике и взаимодействиях. Он собран только из собственных компонентов (`reusedComponents: []`).

---

### Solera · Винодельня & Винный клуб (`templates/winery`)

- **Живое превью**: [/preview/winery/](/preview/winery/) · **Документация шаблона**: [/ru/templates/winery/](/ru/templates/winery/)
- **Публичный сайт (6 страниц)**: главная с героем, где сгенерированная бутылка наклоняется за курсором над топографическими линиями, первый взгляд на вина, закреплённая сцена прокрутки, в которой небо, холмы, листья и гроздья нарисованного виноградника плавно меняются от обрезки до выдержки, и оценки прессы огромными цифрами; полная карта вин как редакционный индекс с фильтром по типу, нотами дегустации, профилем 1–5 и шкалой окна употребления; поместье с хронологией семьи и интерактивной картой участков; запись на визиты с итогом на лету; конфигуратор клуба, перерисовывающий ящик бутылка за бутылкой и пересчитывающий цену; и вход участников.
- **Кабинет участника (3 страницы)**: главная с ближайшей коробкой и живым отсчётом, цифрами участника и подсказкой, что открыть в этом месяце; личный погреб с окнами употребления, оценками 1–5 и кнопкой «открыть одну», затем дневник дегустаций с ползунками тела, кислотности, танинов и дуба; и отправления с хронологией, действиями «отложить», «пропустить» и «сменить адрес», плюс управление планом с переключателем паузы.
- **Доступно по умолчанию**: сцена прокрутки превращается в обычный список без JavaScript, нативные аккордеоны `<details>`, настоящие группы radio, `role="switch"`, живые регионы для каждого изменения, цели 44–48 px, видимый фокус, текстовые эквиваленты для каждого рисунка и поддержка `prefers-reduced-motion`. Тёмный и светлый варианты.
- **Страницы**: [Главная](/preview/winery/) · [Вина](/preview/winery/vinos/) · [Поместье](/preview/winery/finca/) · [Визиты](/preview/winery/visitas/) · [Клуб](/preview/winery/club/) · [Вход](/preview/winery/acceso/) · [Обзор](/preview/winery/socios/) · [Погреб](/preview/winery/socios/bodega/) · [Отправления](/preview/winery/socios/envios/).
- **20 собственных компонентов**: [`WineHero`](/ru/sections/wine-hero/), [`WineVintageScene`](/ru/sections/wine-vintage-scene/), [`WineCollection`](/ru/sections/wine-collection/), [`WineTerroir`](/ru/sections/wine-terroir/), [`WineStory`](/ru/sections/wine-story/), [`WineVisits`](/ru/sections/wine-visits/), [`WineClub`](/ru/sections/wine-club/), [`WineAwards`](/ru/sections/wine-awards/), [`WineFaq`](/ru/sections/wine-faq/), [`WineFooter`](/ru/sections/wine-footer/), [`WineBottleLabel`](/ru/docs/wine-bottle-label/), [`WineMemberSummary`](/ru/docs/wine-member-summary/), [`WineShipmentTracker`](/ru/docs/wine-shipment-tracker/), [`WineCellar`](/ru/docs/wine-cellar/), [`WineTastingNotebook`](/ru/docs/wine-tasting-notebook/), [`WinePlanManager`](/ru/docs/wine-plan-manager/), [`WineMemberNav`](/ru/docs/wine-member-nav/), [`WineMemberTopbar`](/ru/docs/wine-member-topbar/), [`WineMemberHeading`](/ru/docs/wine-member-heading/), and [`WineSignIn`](/ru/docs/wine-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/winery/" title="Превью Solera (главная)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/winery/socios/bodega/" title="Превью Solera (кабинет участника)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
