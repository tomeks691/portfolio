import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tomek-mcclintock.github.io',
  base: '/portfolio',
  integrations: [tailwind()],
});
