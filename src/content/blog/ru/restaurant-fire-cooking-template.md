---
title: 'Новый шаблон: Lumbre — ресторан на углях с бронированием на плане зала'
description: 'Lumbre — новый полный шаблон для ресторана: главный экран с углями, дегустационное меню блюдо за блюдом со сгенерированными тарелками, радар производителей и бронирование стола на плане зала, а также кабинет клиента с бронями, предпочтениями и сертификатами — всё на собственных компонентах.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Lumbre: ресторан, где бронируют, выбирая свой стол, в восьми страницах

Lumbre (`templates/restaurant`) — полный шаблон для ресторана. У него собственный визуальный язык угля и жара с узким дисплейным засечным шрифтом (Instrument Serif), без фотографий, сеток иконок и облаков тегов: его держат нарисованные тарелки, типографика и взаимодействия. Он собран только из собственных компонентов (`reusedComponents: []`).

---

### Lumbre · Ресторан на углях (`templates/restaurant`)

- **Живой просмотр**: [/preview/restaurant/](/preview/restaurant/) · **Документация шаблона**: [/templates/restaurant/](/templates/restaurant/)
- **Публичный сайт (5 страниц)**: главная с огромным логотипом, залитым градиентом углей, и CSS-искрами, поднимающимися позади, дегустационное меню блюдо за блюдом (выберите подачу — сгенерированная в SVG тарелка перерисуется с ингредиентами, сочетанием, температурой и пройденными километрами) и радар производителей; меню с дегустационным из восьми подач и картой à la carte с точечными линиями и фильтром по диете; происхождение с радаром, который размещает каждого производителя на реальном расстоянии и считает среднее; бронирование, где выбирают дату, время и число гостей, а затем стол на плане зала — занятые, слишком маленькие столы и выходные дни отключены с причиной; и вход для клиентов.
- **Кабинет клиента (3 страницы)**: главная с ближайшей бронью в виде огромной даты с обратным отсчётом, цифрами клиента и карточкой повторной брони; брони в видах «предстоящие» и «прошедшие» с действиями отмены (бесплатно за 24 ч) и изменения; и предпочтения с аллергиями, диетой, зоной и торжествами, а затем подарочные сертификаты с кнопкой копирования кода.
- **Доступность по умолчанию**: столы — настоящие радиокнопки в метках (бронь работает и без рисунка), у отключённых столов причина написана текстом, нативные группы радио и аккордеоны `<details>`, live-регионы для каждого изменения, цели 44–48px, видимый фокус, текстовые эквиваленты каждого рисунка и поддержка `prefers-reduced-motion`. Тёмная и светлая версии.
- **Страницы**: [Главная](/preview/restaurant/) · [Меню](/preview/restaurant/menu/) · [Происхождение](/preview/restaurant/origen/) · [Бронь](/preview/restaurant/reservar/) · [Вход](/preview/restaurant/acceso/) · [Обзор](/preview/restaurant/mesa/) · [Брони](/preview/restaurant/mesa/reservas/) · [Предпочтения](/preview/restaurant/mesa/preferencias/).
- **16 собственных компонентов**: [`RestHero`](/sections/rest-hero/), [`RestTasting`](/sections/rest-tasting/), [`RestMenu`](/sections/rest-menu/), [`RestOrigin`](/sections/rest-origin/), [`RestBooking`](/sections/rest-booking/), [`RestFaq`](/sections/rest-faq/), [`RestFooter`](/sections/rest-footer/), [`RestPlate`](/docs/rest-plate/), [`RestAccountSummary`](/docs/rest-account-summary/), [`RestReservations`](/docs/rest-reservations/), [`RestPreferences`](/docs/rest-preferences/), [`RestGiftCards`](/docs/rest-gift-cards/), [`RestAccountNav`](/docs/rest-account-nav/), [`RestAccountTopbar`](/docs/rest-account-topbar/), [`RestAccountHeading`](/docs/rest-account-heading/), и [`RestSignIn`](/docs/rest-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/restaurant/" title="Живой просмотр Lumbre (главная)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/restaurant/reservar/" title="Живой просмотр Lumbre (бронь на плане)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
