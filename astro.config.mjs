import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import path from 'path';

export default defineConfig({
  site: 'https://astrocomponents.dev',
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
      }
    }
  }
});