// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const oceanicNext = require('prism-react-renderer/themes/oceanicNext')
const duotoneLight = require('prism-react-renderer/themes/duotoneLight')
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '在吗',
  tagline: '在在在',
  url: 'https://liqycs.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/ico.png',
  organizationName: 'liqycs', // Usually your GitHub org/user name.
  projectName: "liqycs.github.io", // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  deploymentBranch: 'gh-pages',
  githubHost: 'github.com',

  noIndex: true,
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: false,
          blogSidebarTitle: '琐碎',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      }, 
      
      navbar: {
        title: 'QYCS',
        logo: {src: 'img/favicon.ico'},

        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: '文档',
          },
          { to: '/blog', label: '琐碎', position: 'left' },

          {
            href: 'https://github.com/liqycs/liqycs.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: oceanicNext,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      // announcementBar 顶部公告栏
    }),
}

module.exports = config
