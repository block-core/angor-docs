import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Angor Documentation',
      customCss: ['./src/styles/custom.scss'],
      logo: {
        dark: './src/assets/logo.svg',
        light: './src/assets/logo.svg',
        replacesTitle: true,
      },
      social: {
        twitter: 'https://twitter.com/blockcoredev',
        discord: 'https://www.blockcore.net/discord',
        github: 'https://github.com/block-core/angor',
      },
      components: {
        Header: './src/components/overrides/Header.astro',
        Footer: 'src/components/overrides/Footer.astro',
        ThemeSelect: 'src/components/overrides/ThemeSelect.astro',
        ToolButton: './src/components/starlight/ToolButton.astro',
       },
      sidebar: [
        {
          label: 'Quick Start',
          autogenerate: { directory: 'start' },
        },
        {
          label: 'General',
          autogenerate: { directory: 'general' },
        },
        {
          label: 'Investor',
          autogenerate: { directory: 'investor' },
        },
        {
          label: 'Founder',
          autogenerate: { directory: 'founder' },
        },
        {
          label: 'Developer',
          autogenerate: { directory: 'developer' },
        },
        {
          label: 'FAQs',
          autogenerate: { directory: 'faqs' },
        },
        {
          label: 'Support',
          autogenerate: { directory: 'support' },
        },

        // {
        //   label: 'Getting started',
        //   autogenerate: { directory: 'getting-started' },
        // },
        // {
        //   label: 'Creating a project',
        //   autogenerate: { directory: 'creating-a-project' },
        // },
        // {
        //   label: 'Investing in a project',
        //   autogenerate: { directory: 'investing-in-a-project' },
        // },
        // {
        //   label: 'Project updates',
        //   autogenerate: { directory: 'project-updates' },
        // },
        // {
        //   label: 'Fees and charges',
        //   autogenerate: { directory: 'fees-and-charges' },
        // },
        // {
        //   label: 'Security and control',
        //   autogenerate: { directory: 'security-and-control' },
        // },
        // {
        //   label: 'FAQs',
        //   autogenerate: { directory: 'faqs' },
        // },
        // {
        //   label: 'Support',
        //   autogenerate: { directory: 'support' },
        // },
      ],
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components'
      }
    }
  }
});
