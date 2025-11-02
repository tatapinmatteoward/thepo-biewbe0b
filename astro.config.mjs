import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://the-poultry-post.pages.dev',
  build: {
    format: 'directory'
  }
});
