import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  site: 'https://astro-components.dev',
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
      }
    }
  }
});
