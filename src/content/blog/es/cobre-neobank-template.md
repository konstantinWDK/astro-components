---
title: 'Nueva plantilla: Cobre, neobanco con área de cliente'
description: 'Cobre es una plantilla completa para un neobanco o fintech: planes, selector de tarjetas, calculadora de ahorro, apertura de cuenta y un área de cliente con saldos, flujo de caja, movimientos, control de tarjetas y transferencias, todo con componentes propios.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Cobre: un neobanco para autónomos, en nueve páginas

Cobre (`templates/fintech`) es una plantilla completa para un neobanco, fintech o producto de pagos. Tiene su propio lenguaje visual verde profundo, cobre y menta con cifras en monoespaciada, y se construye únicamente con sus propios componentes (`reusedComponents: []`).

---

### 🏦 Cobre · Neobanco y área de cliente (`templates/fintech`)

- **Vista previa**: [/preview/fintech/](/preview/fintech/) · **Ficha**: [/es/templates/fintech/](/es/templates/fintech/)
- **Web pública (5 páginas)**: home con mock del producto, ventajas, selector de tarjetas, calculadora de ahorro con interés compuesto en vivo y comparativa de comisiones; precios con interruptor mensual o anual; seguridad y regulación; asistente de apertura de cuenta en tres pasos que devuelve un IBAN nuevo; y acceso.
- **Área de cliente (4 páginas)**: panel con saldos (ocultar/mostrar y copiar IBAN), gráfico de ingresos y gastos y anillo de gasto por categoría; tabla de movimientos con búsqueda, filtros, orden y exportación CSV; gestión de tarjetas con congelado, mostrar número y límites; y transferencia en dos pasos con validación de IBAN (mod 97) y control de saldo.
- **Accesible de serie**: tablas reales con título, alternativas de texto y tablas de datos para cada gráfico, interruptores con `role="switch"`, objetivos táctiles de 44px, foco visible y soporte de movimiento reducido. Variantes oscura y clara.
- **Páginas**: [Inicio](/preview/fintech/) · [Precios](/preview/fintech/precios/) · [Seguridad](/preview/fintech/seguridad/) · [Abrir cuenta](/preview/fintech/abrir-cuenta/) · [Acceso](/preview/fintech/acceso/) · [Resumen](/preview/fintech/app/) · [Movimientos](/preview/fintech/app/movimientos/) · [Tarjetas](/preview/fintech/app/tarjetas/) · [Transferencias](/preview/fintech/app/transferencias/).
- **20 componentes propios**: [`BankHero`](/es/sections/bank-hero/), [`BankFeatures`](/es/sections/bank-features/), [`BankCardShowcase`](/es/sections/bank-card-showcase/), [`BankPlans`](/es/sections/bank-plans/), [`BankFeeTable`](/es/sections/bank-fee-table/), [`BankSavingsCalculator`](/es/sections/bank-savings-calculator/), [`BankSecurity`](/es/sections/bank-security/), [`BankFaq`](/es/sections/bank-faq/), [`BankOnboarding`](/es/sections/bank-onboarding/), [`BankFooter`](/es/sections/bank-footer/), [`BankBalanceCard`](/es/docs/bank-balance-card/), [`BankCashflowChart`](/es/docs/bank-cashflow-chart/), [`BankSpendingBreakdown`](/es/docs/bank-spending-breakdown/), [`BankTransactionsTable`](/es/docs/bank-transactions-table/), [`BankCardManager`](/es/docs/bank-card-manager/), [`BankTransferForm`](/es/docs/bank-transfer-form/), [`BankAppNav`](/es/docs/bank-app-nav/), [`BankAppTopbar`](/es/docs/bank-app-topbar/), [`BankAppHeading`](/es/docs/bank-app-heading/) y [`BankSignIn`](/es/docs/bank-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/fintech/" title="Vista previa de Cobre (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/fintech/app/" title="Vista previa de Cobre (account)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
