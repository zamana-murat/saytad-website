import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.saytad.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
    assets: '_astro',
  },
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
});
