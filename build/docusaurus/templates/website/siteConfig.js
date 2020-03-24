const siteConfig = {
  title: 'macOS defaults list',
  tagline: 'Incomplete list of macOS defaults write commands with demos ✨',
  baseUrl: '/',

  projectName: 'macos-defaults-list',
  organizationName: 'yannbertrand',

  headerLinks: [
    { doc: 'index', label: 'Home' },
    { href: '//github.com/yannbertrand/macos-defaults-list', label: 'GitHub', external: true },
  ],

  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  highlight: {
    theme: 'default',
  },

  onPageNav: 'separate',
  cleanUrl: true,

  twitterUsername: '_YannBertrand'
};

module.exports = siteConfig;
