---
title: 'Новый шаблон: Fuero — юридическая фирма с кабинетом клиента'
description: 'Fuero — новый полный шаблон для юридической фирмы: направления практики, команда, гонорары и запись на консультацию, плюс кабинет клиента с делами и хронологиями, документами с электронной подписью, защищёнными сообщениями, встречами и счетами, всё на собственных компонентах.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Fuero: фирма, где клиенты следят за своим делом, на девяти страницах

Fuero (`templates/law-firm`) — полный шаблон для юридической фирмы или профессиональных услуг. У него собственный визуальный язык: тёплый чёрный, винно-розовый и слоновая кость с классической антиквой; он собран только из собственных компонентов (`reusedComponents: []`).

---

### ⚖️ Fuero · Юридическая фирма и кабинет клиента (`templates/law-firm`)

- **Превью**: [/preview/law-firm/](/preview/law-firm/) · **Описание**: [/ru/templates/law-firm/](/ru/templates/law-firm/)
- **Публичный сайт (5 страниц)**: главная с героем-«делом», направлениями, процессом, результатами, гонорарами, командой, статьями и FAQ; направления в виде доступных вкладок, открываются по ссылкам `?area=`; страница команды с фильтром; запись на бесплатную консультацию с днём, временем и форматом; и вход для клиентов.
- **Кабинет клиента (4 страницы)**: главная со списком того, что требует внимания, встречами (с загрузкой .ics) и счетами, которые можно оплатить; обзор дел с фильтром статуса, прогрессом, следующим шагом и вертикальной хронологией; хранилище документов с поиском, фильтрами, загрузкой кликом или перетаскиванием и электронной подписью; и защищённая переписка с юристом.
- **Доступность из коробки**: вкладки WAI-ARIA с навигацией стрелками, нативные `<details>`, настоящие таблицы с заголовками, сообщения с `role="log"`, статус текстом и цветом, цели касания 44px, видимый фокус и reduced-motion. Тёмная и светлая темы.
- **Страницы**: [Главная](/preview/law-firm/) · [Направления](/preview/law-firm/areas/) · [Команда](/preview/law-firm/equipo/) · [Консультация](/preview/law-firm/consulta/) · [Вход](/preview/law-firm/acceso/) · [Обзор](/preview/law-firm/portal/) · [Дела](/preview/law-firm/portal/expedientes/) · [Документы](/preview/law-firm/portal/documentos/) · [Сообщения](/preview/law-firm/portal/mensajes/).
- **20 собственных компонентов**: [`LawHero`](/ru/sections/law-hero/), [`LawPracticeAreas`](/ru/sections/law-practice-areas/), [`LawTeam`](/ru/sections/law-team/), [`LawProcess`](/ru/sections/law-process/), [`LawResults`](/ru/sections/law-results/), [`LawFees`](/ru/sections/law-fees/), [`LawConsultation`](/ru/sections/law-consultation/), [`LawInsights`](/ru/sections/law-insights/), [`LawFaq`](/ru/sections/law-faq/), [`LawFooter`](/ru/sections/law-footer/), [`LawCaseSummary`](/ru/docs/law-case-summary/), [`LawCaseExplorer`](/ru/docs/law-case-explorer/), [`LawDocumentVault`](/ru/docs/law-document-vault/), [`LawMessageThread`](/ru/docs/law-message-thread/), [`LawAppointments`](/ru/docs/law-appointments/), [`LawInvoices`](/ru/docs/law-invoices/), [`LawPortalNav`](/ru/docs/law-portal-nav/), [`LawPortalTopbar`](/ru/docs/law-portal-topbar/), [`LawPortalHeading`](/ru/docs/law-portal-heading/) и [`LawSignIn`](/ru/docs/law-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/law-firm/" title="Превью Fuero (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/law-firm/portal/expedientes/" title="Превью Fuero (portal)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
