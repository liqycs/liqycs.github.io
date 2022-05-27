// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const oceanicNext = require('prism-react-renderer/themes/oceanicNext')
const duotoneLight = require('prism-react-renderer/themes/duotoneLight')
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '在在在',
  tagline: '',
  url: 'https://liqycs.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/ico.svg',
  noIndex: true,
  titleDelimiter: '@',
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },

  baseUrl: '/',
  organizationName: 'liqycs', // Usually your GitHub org/user name
  projectName: "liqycs.github.io", // Usually your repo name
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  githubHost: 'github.com',
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // 禁用顶部痕迹导航
          breadcrumbs: false,
          showLastUpdateTime: false
        },

        blog: {
          showReadingTime: false,
          blogSidebarTitle: 'Note',
          blogSidebarCount: 'ALL',
          blogTitle: 'Note',
          blogSidebarCount: 0,
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
      colorMode: {
        defaultMode: 'dark',
      }, 

      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,          
        },
      },
      
      navbar: {
        title: 'l l l',
        // logo: {src: 'img/logo.png'},

        items: [

          {
            to: '/docs/剑三/焚影',
            label: 'Docs',
            position: 'right',
          },

          { to: 'blog', 
            label: 'Note', 
            position: 'right',
          },

          {
            href: 'https://github.com/liqycs/liqycs.github.io',
            // label: 'Github',
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

    }),
}

module.exports = config
