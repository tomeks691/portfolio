import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tomeks691.github.io',
  base: '/portfolio',
  integrations: [tailwind()],
});
