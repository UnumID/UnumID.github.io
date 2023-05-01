/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Verified Inc. Docs',
  tagline: 'Documentation for the Verified Inc. platform.',
  url: 'https://docs.verified.inc',
  baseUrl: '/',
  /* revert to throw when possible, was unable to fix a broken link issue */
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'UnumID', // Usually your GitHub org/user name.
  projectName: 'UnumID.github.io', // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ['swift', 'kotlin', 'java', 'dart', 'groovy'],
    },
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Verified Inc. Logo',
        src:  'img/logo.png',
        srcDark: 'img/logo_dark.png',
      },
      items: [
        {
          to: 'https://www.verified.inc',
          activeBasePath: '/',
          label: 'Home',
          position: 'right',
        },
        {
          to: 'https://github.com/UnumID',
          activeBasePath: 'github',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Introduction',
          items: [
            {
              label: 'About Verified Inc.',
              to: '/',
            },
            {
              label: 'Terminology',
              to: '/terminology',
            },
            {
              label: 'Architecture',
              to: '/architecture',
            },
            {
              label: 'Deployment Overview',
              to: '/deployment-overview',
            },
            {
              label: 'Quick Start Guide',
              to: '/1-click-or-free-use-case',
            },
            {
              label: 'Privacy and Security',
              to: '/privacy-and-security',
            },
          ],
        },
        {
          title: 'Components',
          items: [
            {
              label: 'Server SDK',
              to: '/server-sdk',
            },
            {
              label: 'Mobile SDK',
              to: '/mobile-sdk-overview',
            },
            {
              label: 'Web SDK',
              to: '/web-sdk',
            },
          ],
        },
        {
          title: 'Demos',
          items: [
            {
              label: 'Developer Demo',
              to: '/developer-demo',
            },
            {
              label: 'ACME Demo',
              to: '/acme-demo',
            },
            {
              label: 'Hooli Demo',
              to: '/hooli-demo',
            },
            {
              label: 'Kredita Demo',
              to: '/kredita-demo'
            },
            {
              label: 'Hooli Demo IDV',
              to: '/hooli-demo'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Home',
              href: 'https://www.Unum.ID',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/UnumID',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Verified Inc., Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: [
    '@docusaurus/theme-live-codeblock',
  ],
};
