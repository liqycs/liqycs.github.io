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
  organizationName: 'liqycs', // your GitHub user name
  projectName: "liqycs.github.io", // your repo name
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
          breadcrumbs: false, // 文章顶部痕迹导航
          showLastUpdateTime: false, // 最后更新时间
        },

        blog: {
          showReadingTime: false,
          blogSidebarTitle: 'Note',
          blogSidebarCount: 'ALL', //blog左侧边栏展示数量
          blogTitle: 'Note',  
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
        defaultMode: 'dark', //默认主题
      }, 

      docs: {
        sidebar: {
          hideable: false, //可隐藏的侧边栏
          autoCollapseCategories: true, //自动折叠边栏类别
        },
      },
      
      navbar: {
        title: 'lll',
        // logo: {src: 'img/ico.svg'},
        hideOnScroll: true, //当用户向下滚动时导航栏是否隐藏
        
        items: [

          {
            to: '/docs/剑三/焚影',
            label: 'Docs',
            position: 'left',
          },

          // { to: 'blog', 
          //   label: 'Note', 
          //   position: 'right',
          // },

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
