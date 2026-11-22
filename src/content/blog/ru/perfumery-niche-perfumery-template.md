---
title: 'Новый шаблон: Umbra — нишевая парфюмерия с кабинетом клиента'
description: 'Umbra — новый полный шаблон для нишевого парфюмерного дома: ползунок эволюции на коже, ольфакторная карта, тест профиля и конструктор набора для знакомства, а также кабинет клиента с полкой флаконов на реальном уровне, лабораторией слоёв и заказами — всё на собственных компонентах.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Umbra: парфюмерия, которую читают глазами, в восьми страницах

Umbra (`templates/perfumery`) — полный шаблон для нишевого парфюмерного дома. У него собственный визуальный язык чернильно-фиолетового и ирисового цветов с контрастным дисплейным засечным шрифтом (Bodoni Moda), без сеток иконок и облаков тегов: его держат сгенерированные флаконы, типографика и взаимодействия. Он собран только из собственных компонентов (`reusedComponents: []`).

---

### Umbra · Нишевая парфюмерия (`templates/perfumery`)

- **Живой просмотр**: [/preview/perfumery/](/preview/perfumery/) · **Документация шаблона**: [/templates/perfumery/](/templates/perfumery/)
- **Публичный сайт (5 страниц)**: главная, где в главном экране медленные облака цвета из аккорда аромата следуют за курсором, первая лента ароматов, ползунок «эволюции на коже», на котором верхние, сердечные и базовые ноты поднимаются и затихают на кривой по слоям, и первое сырьё; шесть ароматов с объёмами, ценами и ольфакторной картой, размещающей каждый между свежим и тёплым, лёгким и плотным; ателье с килограммами материала на килограмм эссенции в виде огромных контурных цифр; знакомство с тестом профиля из четырёх вопросов и конструктором набора флакончиков по 2 мл с итогом на лету; и вход для клиентов.
- **Кабинет клиента (3 страницы)**: главная с заказом в работе и его текстовой хронологией, цифрами клиента и напоминанием о заканчивающемся флаконе; полка, где каждый флакон нарисован на реальном уровне жидкости и опустошается на экране при движении ползунка, а затем лаборатория слоёв, смешивающая два аромата в любой пропорции и сохраняющая смеси; и заказы с хронологией, перевозчиком, трекингом и действиями отмены или смены адреса.
- **Доступность по умолчанию**: нативные группы радио, поля диапазона и аккордеоны `<details>`, состояние каждой ноты написано текстом (а не только прозрачностью), live-регионы для каждого изменения, цели 44–48px, видимый фокус, текстовые эквиваленты каждого рисунка и поддержка `prefers-reduced-motion`. Тёмная и светлая версии.
- **Страницы**: [Главная](/preview/perfumery/) · [Ароматы](/preview/perfumery/fragancias/) · [Ателье](/preview/perfumery/atelier/) · [Знакомство](/preview/perfumery/descubrir/) · [Вход](/preview/perfumery/acceso/) · [Resumen](/preview/perfumery/cuenta/) · [Полка](/preview/perfumery/cuenta/estanteria/) · [Заказы](/preview/perfumery/cuenta/pedidos/).
- **18 собственных компонентов**: [`PerfHero`](/sections/perf-hero/), [`PerfSkin`](/sections/perf-skin/), [`PerfCollection`](/sections/perf-collection/), [`PerfMap`](/sections/perf-map/), [`PerfAtelier`](/sections/perf-atelier/), [`PerfQuiz`](/sections/perf-quiz/), [`PerfDiscovery`](/sections/perf-discovery/), [`PerfFaq`](/sections/perf-faq/), [`PerfFooter`](/sections/perf-footer/), [`PerfBottle`](/docs/perf-bottle/), [`PerfAccountSummary`](/docs/perf-account-summary/), [`PerfShelf`](/docs/perf-shelf/), [`PerfLayering`](/docs/perf-layering/), [`PerfOrderTracker`](/docs/perf-order-tracker/), [`PerfAccountNav`](/docs/perf-account-nav/), [`PerfAccountTopbar`](/docs/perf-account-topbar/), [`PerfAccountHeading`](/docs/perf-account-heading/), и [`PerfSignIn`](/docs/perf-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/perfumery/" title="Живой просмотр Umbra (главная)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/perfumery/cuenta/estanteria/" title="Живой просмотр Umbra (полка клиента)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
