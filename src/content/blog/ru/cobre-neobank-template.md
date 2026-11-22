---
title: 'Новый шаблон: Cobre — необанк с кабинетом клиента'
description: 'Cobre — новый полный шаблон для необанка или финтеха: тарифы, выбор карты, калькулятор накоплений, открытие счёта и кабинет клиента с балансами, денежным потоком, операциями, управлением картами и переводами, всё на собственных компонентах.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Cobre: необанк для самозанятых на девяти страницах

Cobre (`templates/fintech`) — полный шаблон для необанка, финтеха или платёжного продукта. У него собственный визуальный язык: глубокий зелёный, медный и мятный с моноширинными цифрами; он собран только из собственных компонентов (`reusedComponents: []`).

---

### 🏦 Cobre · Необанк и кабинет клиента (`templates/fintech`)

- **Превью**: [/preview/fintech/](/preview/fintech/) · **Описание**: [/ru/templates/fintech/](/ru/templates/fintech/)
- **Публичный сайт (5 страниц)**: главная с макетом продукта, преимуществами, выбором карты, калькулятором накоплений со сложным процентом и сравнением комиссий; тарифы с переключателем помесячно или за год; безопасность и регулирование; мастер открытия счёта из трёх шагов, возвращающий новый IBAN; и вход.
- **Кабинет клиента (4 страницы)**: панель с балансами (скрыть/показать и копирование IBAN), графиком доходов и расходов и кольцом расходов по категориям; таблица операций с поиском, фильтрами, сортировкой и экспортом CSV; управление картами с заморозкой, показом номера и лимитами; и перевод в два шага с проверкой IBAN (mod 97) и контролем баланса.
- **Доступность из коробки**: настоящие таблицы с заголовками, текстовые альтернативы и таблицы данных для каждого графика, переключатели с `role="switch"`, цели касания 44px, видимый фокус и reduced-motion. Тёмная и светлая темы.
- **Страницы**: [Главная](/preview/fintech/) · [Тарифы](/preview/fintech/precios/) · [Безопасность](/preview/fintech/seguridad/) · [Открыть счёт](/preview/fintech/abrir-cuenta/) · [Вход](/preview/fintech/acceso/) · [Обзор](/preview/fintech/app/) · [Операции](/preview/fintech/app/movimientos/) · [Карты](/preview/fintech/app/tarjetas/) · [Переводы](/preview/fintech/app/transferencias/).
- **20 собственных компонентов**: [`BankHero`](/ru/sections/bank-hero/), [`BankFeatures`](/ru/sections/bank-features/), [`BankCardShowcase`](/ru/sections/bank-card-showcase/), [`BankPlans`](/ru/sections/bank-plans/), [`BankFeeTable`](/ru/sections/bank-fee-table/), [`BankSavingsCalculator`](/ru/sections/bank-savings-calculator/), [`BankSecurity`](/ru/sections/bank-security/), [`BankFaq`](/ru/sections/bank-faq/), [`BankOnboarding`](/ru/sections/bank-onboarding/), [`BankFooter`](/ru/sections/bank-footer/), [`BankBalanceCard`](/ru/docs/bank-balance-card/), [`BankCashflowChart`](/ru/docs/bank-cashflow-chart/), [`BankSpendingBreakdown`](/ru/docs/bank-spending-breakdown/), [`BankTransactionsTable`](/ru/docs/bank-transactions-table/), [`BankCardManager`](/ru/docs/bank-card-manager/), [`BankTransferForm`](/ru/docs/bank-transfer-form/), [`BankAppNav`](/ru/docs/bank-app-nav/), [`BankAppTopbar`](/ru/docs/bank-app-topbar/), [`BankAppHeading`](/ru/docs/bank-app-heading/) и [`BankSignIn`](/ru/docs/bank-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/fintech/" title="Превью Cobre (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/fintech/app/" title="Превью Cobre (account)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
