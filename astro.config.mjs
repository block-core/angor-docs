import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Angor Docs',
      customCss: [
        './src/styles/style.css',
      ],
      social: {
        twitter: 'https://twitter.com/blockcoredev',
        discord: 'https://www.blockcore.net/discord',
        github: 'https://github.com/block-core/angor',
      },
      sidebar: [
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
