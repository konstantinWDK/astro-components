import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import path from 'path';

function ackPreviewBarIntegration() {
  return {
    name: 'ack-preview-bar-integration',
    hooks: {
      'astro:config:setup': ({ injectScript }) => {
        injectScript('page', `import '/src/scripts/preview-bar.ts';`);
      },
    },
  };
}

export default defineConfig({
  site: 'https://astrocomponents.dev',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // `/blog/*` are legacy redirects to `/notes/*`; keep them out of the sitemap.
      filter: (page) => !/^\/((es|ru)\/)?blog\/|^\/preview\//.test(new URL(page).pathname),
      // Emit hreflang alternates so search engines link the en/es/ru versions of each page.
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es', ru: 'ru' },
      },
    }),
    ackPreviewBarIntegration(),
  ],
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
      }
    }
  }
});