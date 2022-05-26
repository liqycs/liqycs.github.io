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
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/ico.svg',
  noIndex: true,

  url: 'https://liqycs.github.io',
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // 禁用顶部痕迹导航
          breadcrumbs: false,
          showLastUpdateTime: false
        },
        blog: {
          showReadingTime: false,
          blogSidebarTitle: 'NOTE',
          blogSidebarCount: 'ALL',
          postsPerPage: 1
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
      }, 
      
      navbar: {
        title: '🔴 🟠 🟡 🟢 ⚪ 🔵 🟣',
        // logo: {src: 'img/ico.svg'},

        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'right',
            label: 'Home',
          },

          { to: '/blog', 
            label: 'Note', 
            position: 'right', 
            showLastUpdateTime : false,
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
        maxHeadingLevel: 4,
      },
      // announcementBar 顶部公告栏
    }),
}

module.exports = config
