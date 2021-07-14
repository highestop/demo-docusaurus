/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: `Highestop's WorkSpace`,
  tagline:
    'Personal documents & blogs website, by Highestop Chen, powered by Docusaurus.',
  url: 'https://demo-docusaurus.highestop.me',
  baseUrl: process.env.BASE_URL ?? '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'assets/favicon.ico',
  organizationName: 'highestop',
  projectName: 'demo-docusaurus-doc',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      switchConfig: {
        lightIcon: '☀️',
        darkIcon: '🌙',
      },
    },
    navbar: {
      title: `Highestop's WorkSpace`,
      logo: {
        alt: `Highestop's WorkSpace`,
        src: 'assets/logo.svg',
      },
      items: [
        {
          to: '/docs/',
          label: 'Documents',
          position: 'left',
        },
        { to: '/blog/', label: 'Blogs', position: 'left' },
        {
          href: 'https://github.com/highestop/demo-docusaurus',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documents',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blogs',
              to: '/blog/',
            },
            {
              label: 'Github',
              href: 'https://github.com/highestop/demo-docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, by Highestop Chen, built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./docs/.sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
