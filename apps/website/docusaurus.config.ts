import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BugofBook\'s website',
  favicon: 'https://github.com/bugofbook.png',

  url: 'https://bugofbook.github.io',
  baseUrl: '/',
  projectName: 'bugofbook.github.io',
  organizationName: 'bugofbook',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'react-docs',
        path: '../../software-docs/react-docs',
        routeBasePath: 'react-docs',
        sidebarPath: require.resolve('../../software-docs/sidebars.js'),
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'react-docs',
    //     path: '../../software-docs/react-docs',
    //     routeBasePath: 'react-docs',
    //     sidebarPath: require.resolve('../../software-docs/sidebars.js'),
    //   },
    // ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'https://github.com/bugofbook.png',
    navbar: {
      title: 'BugofBook\'s website',
      logo: {
        alt: 'bugofbook',
        src: 'https://github.com/bugofbook.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'javascriptSidebar',
        //   position: 'left',
        //   label: 'Javascript',
        // },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/bugofbook/bugofbook.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Website',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'Docusaurus',
          items: [
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BugofBook. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
