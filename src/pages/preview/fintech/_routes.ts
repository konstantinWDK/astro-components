// src/pages/preview/fintech/_routes.ts
import type { BankRoutes } from '../../../components/lib/templates/fintech/data';

export const previewBankRoutes: BankRoutes = {
  home: '/preview/fintech',
  pricing: '/preview/fintech/precios',
  security: '/preview/fintech/seguridad',
  open: '/preview/fintech/abrir-cuenta',
  signIn: '/preview/fintech/acceso',
  dashboard: '/preview/fintech/app',
  transactions: '/preview/fintech/app/movimientos',
  cards: '/preview/fintech/app/tarjetas',
  transfers: '/preview/fintech/app/transferencias',
};
