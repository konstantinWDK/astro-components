import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import path from 'path';

export default defineConfig({
  site: 'https://astrocomponents.dev',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
      }
    }
  }
});