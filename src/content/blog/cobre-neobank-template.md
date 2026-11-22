---
title: 'New Template: Cobre, a Neobank with Account Area'
description: 'Cobre is a new complete template for a neobank or fintech: plans, card picker, savings calculator, account opening, and an account area with balances, cash flow, movements, card controls and transfers, all with its own components.'
date: '2026-11-22'
tag: 'Release'
heroImage: '/galaxy-bg.svg'
---

## Cobre: a neobank for freelancers, in nine pages

Cobre (`templates/fintech`) is a complete template for a neobank, fintech or payments product. It has its own deep-green, copper and mint visual language with monospaced figures, and it is built only from its own dedicated components (`reusedComponents: []`).

---

### 🏦 Cobre · Neobank & Account Area (`templates/fintech`)

- **Live preview**: [/preview/fintech/](/preview/fintech/) · **Template docs**: [/templates/fintech/](/templates/fintech/)
- **Public site (5 pages)**: home with a product mock, benefits, a card picker, a savings calculator with live compound interest and a fee comparison; plans with a monthly/yearly switch; security and regulation; a three-step account-opening wizard that returns a new IBAN; and sign-in.
- **Account area (4 pages)**: a dashboard with balances (hide/show and copy IBAN), income vs. expenses chart and a spending donut; a movements table with search, filters, sorting and CSV export; card management with freeze, reveal number and limits; and a two-step transfer form with IBAN (mod 97) validation and balance check.
- **Accessible by default**: real tables with captions, text alternatives and data tables for every chart, switches with `role="switch"`, 44px targets, visible focus and reduced-motion support. Dark and light variants.
- **Pages**: [Home](/preview/fintech/) · [Pricing](/preview/fintech/precios/) · [Security](/preview/fintech/seguridad/) · [Open account](/preview/fintech/abrir-cuenta/) · [Sign in](/preview/fintech/acceso/) · [Dashboard](/preview/fintech/app/) · [Transactions](/preview/fintech/app/movimientos/) · [Cards](/preview/fintech/app/tarjetas/) · [Transfers](/preview/fintech/app/transferencias/).
- **20 dedicated components**: [`BankHero`](/sections/bank-hero/), [`BankFeatures`](/sections/bank-features/), [`BankCardShowcase`](/sections/bank-card-showcase/), [`BankPlans`](/sections/bank-plans/), [`BankFeeTable`](/sections/bank-fee-table/), [`BankSavingsCalculator`](/sections/bank-savings-calculator/), [`BankSecurity`](/sections/bank-security/), [`BankFaq`](/sections/bank-faq/), [`BankOnboarding`](/sections/bank-onboarding/), [`BankFooter`](/sections/bank-footer/), [`BankBalanceCard`](/docs/bank-balance-card/), [`BankCashflowChart`](/docs/bank-cashflow-chart/), [`BankSpendingBreakdown`](/docs/bank-spending-breakdown/), [`BankTransactionsTable`](/docs/bank-transactions-table/), [`BankCardManager`](/docs/bank-card-manager/), [`BankTransferForm`](/docs/bank-transfer-form/), [`BankAppNav`](/docs/bank-app-nav/), [`BankAppTopbar`](/docs/bank-app-topbar/), [`BankAppHeading`](/docs/bank-app-heading/), and [`BankSignIn`](/docs/bank-sign-in/).

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/fintech/" title="Cobre live preview (home)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>

<div style="margin:1.25rem 0 2rem;border:1px solid var(--c-border,#2a2d3a);border-radius:12px;overflow:hidden;background:#0b0d13;">
  <iframe src="/preview/fintech/app/" title="Cobre live preview (account)" loading="lazy" style="width:100%;height:380px;border:0;display:block;"></iframe>
</div>
