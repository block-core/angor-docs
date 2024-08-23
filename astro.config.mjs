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
          label: 'Getting Started',
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'Creating A Project',
          autogenerate: { directory: 'creating-a-project' },
        },
        {
          label: 'Investing In A Project',
          autogenerate: { directory: 'investing-in-a-project' },
        },
        {
          label: 'Project Updates',
          autogenerate: { directory: 'project-updates' },
        },
        {
          label: 'Fees And Charges',
          autogenerate: { directory: 'fees-and-charges' },
        },
        {
          label: 'Security And Control',
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
