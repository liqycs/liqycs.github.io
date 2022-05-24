// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const oceanicNext = require('prism-react-renderer/themes/oceanicNext')
const duotoneLight = require('prism-react-renderer/themes/duotoneLight')
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '在在在',
  tagline: '在在在',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/ico.png',

  url: 'https://liqycs.github.io',
  baseUrl: '/',
  organizationName: 'liqycs', // Usually your GitHub org/user name.
  projectName: "liqycs.github.io", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  githubHost: 'github.com',

  noIndex: true,
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },
  
  customFields: {

    showLastUpdateTime : false
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
          blogSidebarTitle: 'NOTE',
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
        // title: 'QYCS',
        // logo: {src: 'img/favicon.ico'},

        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'DOCS',
          },
          { to: '/blog', label: 'NOTE', position: 'left', showLastUpdateTime : false,},

          {
            href: 'https://github.com/liqycs/liqycs.github.io',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.bilibili.com/video/BV1194y1f79C?p=38&share_source=copy_web',
            // label: 'Bilibili',
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
