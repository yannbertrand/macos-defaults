import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: 'macOS defaults',
  description: 'Uncomplete list of macOS defaults commands with demos ✨',
  head: [
    [
      'link',
      {
        rel: 'preload',
        href: '/logo.svg',
        as: 'image',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#004bbd',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#da532c',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    [
      'meta',
      {
        'http-equiv': 'Content-Type',
        content: 'text/html; charset=utf-8',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:site',
        content: '@macos_defaults',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:creator',
        content: '@_YannBertrand',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'https://macos-defaults.com/media-1x1.webp',
      },
    ],
    [
      'meta',
      {
        property: 'og:site_name',
        content: 'macOS defaults',
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://macos-defaults.com',
      },
    ],
    [
      'meta',
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://macos-defaults.com/media-1x1.jpg',
      },
    ],
    [
      'meta',
      {
        property: 'og:image:alt',
        content: '',
      },
    ],
    [
      'meta',
      {
        name: 'author',
        content: 'Yann Bertrand',
      },
    ],
  ],
  markdown: {
    anchor: { level: [1, 2, 3] },
  },
  themeConfig: {
    siteTitle: 'macOS defaults',
    logo: { src: '/logo.svg', width: 410 / 16, height: 385 / 16 },
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY || '',
      indexName: process.env.ALGOLIA_INDEX_NAME || '',
      appId: process.env.ALGOLIA_APP_ID || '',
    },
    nav: [
      {
        text: 'Home',
        link: '/',
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/yannbertrand/macos-defaults',
      },
    ],
    sidebar: generateSidebar({
      documentRootPath: 'docs',
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: true,
      useTitleFromFileHeading: true,
      manualSortFileNameByPriority: [
        'dock',
        'orientation.md',
        'tilesize.md',
        'autohide.md',
        'autohide-time-modifier.md',
        'autohide-delay.md',
        'show-recents.md',
        'mineffect.md',
        'static-only.md',
        'scroll-to-open.md',

        'screenshots',
        'disable-shadow.md',
        'include-date.md',
        'location.md',
        'show-thumbnail.md',
        'type.md',

        'safari',
        'showfullurlinsmartsearchfield.md',

        'finder',
        'quitmenuitem.md',
        'appleshowallextensions.md',
        'appleshowallfiles.md',
        'showpathbar.md',
        'fxpreferredviewstyle.md',
        '_fxsortfoldersfirst.md',
        'fxdefaultsearchscope.md',
        'fxremoveoldtrashitems.md',
        'fxenableextensionchangewarning.md',
        'nsdocumentsavenewdocumentstocloud.md',
        'showwindowtitlebaricons.md',
        'nstoolbartitleviewrolloverdelay.md',
        'nstableviewdefaultsizemode.md',

        'desktop',
        '_fxsortfoldersfirstondesktop.md',
        'createdesktop.md',
        'showharddrivesondesktop.md',
        'showexternalharddrivesondesktop.md',
        'showremovablemediaondesktop.md',
        'showmountedserversondesktop.md',

        'menubar',
        'flashdateseparators.md',
        'dateformat.md',

        'mouse',
        'linear.md',
        'scaling.md',
        'focusfollowsmouse.md',

        'trackpad',
        'firstclickthreshold.md',
        'draglock.md',
        'dragging.md',
        'trackpadthreefingerdrag.md',

        'keyboard',
        'applepressandholdenabled.md',
        'applefnusagetype.md',
        'applekeyboardfnstate.md',

        'mission-control',
        'mru-spaces.md',
        'expose-group-apps.md',
        'applespacesswitchonactivate.md',
        'mission-control/spans-displays.md',

        'feedback-assistant',
        'autogather.md',

        'xcode',
        'ideadditionalcounterpartsuffixes.md',
        'showbuildoperationduration.md',

        'simulator',
        'screenshotsavelocation.md',

        'textedit',
        'richtext.md',
        'smartquotes.md',

        'timemachine',
        'donotoffernewdisksforbackup.md',

        'activity-monitor',
        'updateperiod.md',
        'icontype.md',

        'messages',
        'show-subject-field.md',

        'miscellaneous',
        'devmode.md',
        'enable-spring-load-actions-on-all-items.md',
        'userwantsplaybacknotifications.md',
        'lsquarantine.md',
        'nsclosealwaysconfirmschanges.md',
      ],
    }),
    editLink: {
      pattern:
        'https://github.com/yannbertrand/macos-defaults/edit/main/docs/:path',
    },
  },
  lastUpdated: true,
  sitemap: {
    hostname: 'https://macos-defaults.com',
    transformItems: (items) => {
      return items.map((item) => ({ ...item, changefreq: 'weekly' }))
    },
  },
})
