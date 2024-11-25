import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Angor Documentation',
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
          label: 'Getting started',
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'Creating a project',
          autogenerate: { directory: 'creating-a-project' },
        },
        {
          label: 'Investing in a project',
          autogenerate: { directory: 'investing-in-a-project' },
        },
        {
          label: 'Project updates',
          autogenerate: { directory: 'project-updates' },
        },
        {
          label: 'Fees and charges',
          autogenerate: { directory: 'fees-and-charges' },
        },
        {
          label: 'Security and control',
          autogenerate: { directory: 'security-and-control' },
        },
        {
          label: 'FAQs',
          autogenerate: { directory: 'faqs' },
        },
        {
          label: 'Support',
          autogenerate: { directory: 'support' },
        },
      ],
    }),
  ],
});
