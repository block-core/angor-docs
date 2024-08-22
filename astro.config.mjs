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
          label: 'Overview',
          autogenerate: { directory: 'overview' },
        },
        {
          label: 'getting started',
          autogenerate: { directory: 'creating-a-wallet' },
        },
        {
          label: 'creating a project',
          autogenerate: { directory: 'creating-a-project' },
        },
        {
          label: 'investing in a project',
          autogenerate: { directory: 'how-to-invest' },
        },
        {
          label: 'project updates',
          autogenerate: { directory: 'posting-updates' },
        },
        {
          label: 'Fees and Charges',
          autogenerate: { directory: 'Our-Fee-Structure' },
        },
        {
          label: 'Security and Control',
          autogenerate: { directory: 'Time-Lock-Contracts' },
        },
        {
          label: 'FAQs',
          autogenerate: { directory: 'Common-Questions' },
        },
        {
          label: 'Support',
          autogenerate: { directory: 'Getting-Help' },
        },
      ],
    }),
  ],
});
