---
title: 'Новый шаблон: Cota — архитектурное бюро с кабинетом клиента по стройке'
description: 'Cota — новый полный шаблон для архитектурного бюро: фасад, который рисуется сам, сгенерированные планы, интерактивный расчёт инсоляции с реальным положением солнца и калькулятор стоимости, а также кабинет клиента для наблюдения за стройкой — всё на собственных компонентах.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Cota: архитектурное бюро, которое само рисует свои чертежи, в восьми страницах

Cota (`templates/architecture`) — полный шаблон для архитектурного бюро. У него собственный визуальный язык графита и кислотно-лаймового с тяжёлой гротескной гарнитурой (Archivo) и моноширинной (IBM Plex Mono) для размеров, без фотографий, сеток иконок и облаков тегов: его держат сгенерированные чертежи, типографика и расчёты. Он собран только из собственных компонентов (`reusedComponents: []`).

---

### Cota · Архитектурное бюро (`templates/architecture`)

- **Живой просмотр**: [/preview/architecture/](/preview/architecture/) · **Документация шаблона**: [/templates/architecture/](/templates/architecture/)
- **Публичный сайт (5 страниц)**: главная, где в главном экране фасад рисуется линия за линией с размерными линиями, недавние объекты в виде указателя с планами, сгенерированными бинарным разбиением, интерактивный расчёт инсоляции и принципы бюро; полный указатель построенных объектов с фильтром по типу, планом, фасадом и данными; бюро с процессом как аккордеон Ганта; смета с калькулятором стоимости (диапазон цены, разбивка и календарь проекта, разрешений и работ) и формой заявки; и вход для клиентов.
- **Расчёт инсоляции**: считает реальные высоту и азимут солнца для широты бюро. Двигайте время, меняйте месяц или поднимайте соседнее здание с юга и смотрите, как тень ложится на дом, с процентом освещённого фасада и часами прямого солнца на высоте 3 м, написанными текстом.
- **Кабинет клиента (3 страницы)**: обзор стройки с огромной цифрой прогресса рядом с фасадом, построенным этаж за этажом до этого прогресса, фазами, командой и тем, что ждёт ответа; бюджет со шкалами «оплачено к бюджету» по статьям, изменениями на утверждение или отклонение с итогами на лету и ожидающими решениями с плюсами и минусами каждого варианта словами; и документы с фильтром статуса и подписью, плюс журнал стройки с поиском.
- **Доступность по умолчанию**: нативные поля диапазона, радио и `<details>`, каждое число, показанное на рисунке, дублируется текстом, live-регионы для каждого изменения, цели 44–48px, видимый фокус, текстовые эквиваленты каждого рисунка и поддержка `prefers-reduced-motion`. Тёмная и светлая версии.
- **Страницы**: [Главная](/preview/architecture/) · [Объекты](/preview/architecture/obras/) · [Бюро](/preview/architecture/estudio/) · [Смета](/preview/architecture/presupuesto/) · [Вход](/preview/architecture/acceso/) · [Обзор стройки](/preview/architecture/obra/) · [Бюджет](/preview/architecture/obra/presupuesto/) · [Документы](/preview/architecture/obra/documentos/).
- **19 собственных компонентов**: [`ArchHero`](/sections/arch-hero/), [`ArchProjects`](/sections/arch-projects/), [`ArchSun`](/sections/arch-sun/), [`ArchProcess`](/sections/arch-process/), [`ArchEstimate`](/sections/arch-estimate/), [`ArchPrinciples`](/sections/arch-principles/), [`ArchFaq`](/sections/arch-faq/), [`ArchFooter`](/sections/arch-footer/), [`ArchElevation`](/docs/arch-elevation/), [`ArchPlan`](/docs/arch-plan/), [`ArchWorkSummary`](/docs/arch-work-summary/), [`ArchBudget`](/docs/arch-budget/), [`ArchDecisions`](/docs/arch-decisions/), [`ArchDiary`](/docs/arch-diary/), [`ArchDocuments`](/docs/arch-documents/), [`ArchAccountNav`](/docs/arch-account-nav/), [`ArchAccountTopbar`](/docs/arch-account-topbar/), [`ArchAccountHeading`](/docs/arch-account-heading/), и [`ArchSignIn`](/docs/arch-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/architecture/" title="Живой просмотр Cota (главная)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/architecture/obra/" title="Живой просмотр Cota (стройка клиента)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
