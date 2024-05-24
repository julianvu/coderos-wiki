import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Coderos Wiki',
    customCss: [
        './src/tailwind.css',
    ],
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'The Wiki',
      autogenerate: {
        directory: 'about',
      },
    }]
  }), tailwind({
    applyBaseStyles: false,
  })]
});