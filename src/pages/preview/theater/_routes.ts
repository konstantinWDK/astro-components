// src/pages/preview/theater/_routes.ts
import type { TheaRoutes } from '../../../components/lib/templates/theater/data';

export const previewTheaRoutes: TheaRoutes = {
  home: '/preview/theater',
  shows: '/preview/theater/cartelera',
  show: '/preview/theater/espectaculo',
  cart: '/preview/theater/carrito',
  signIn: '/preview/theater/acceso',
  dashboard: '/preview/theater/cuenta',
  tickets: '/preview/theater/cuenta/entradas',
  orders: '/preview/theater/cuenta/pedidos',
};
