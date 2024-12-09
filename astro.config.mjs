// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://LR13-stack.github.io',
  base: 'user-manual-agrologistics',
  integrations: [tailwind()],
});