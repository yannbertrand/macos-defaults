import { defineConfig } from 'vuepress/config'

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
        property: 'og:site_name',
        content: 'macOS defaults',
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://macos-defaults.netlify.app',
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
  evergreen: true,
  plugins: {
    sitemap: {
      hostname: 'https://macos-defaults.com',
      changefreq: 'weekly',
      exclude: ['/404.html'],
    },
  },
  locales: {
    '/': {
      lang: 'en-US',
    },
    '/fr/': {
      lang: 'fr-FR',
    },
  },
  themeConfig: {
    repo: 'yannbertrand/macos-defaults',
    logo: '/logo.svg',
    algolia: {
      apiKey: '',
      indexName: '',
      appId: '',
    },
    locales: {
      '/': {
        nav: [
          {
            text: 'Home',
            link: '/',
          },
        ],
        activeHeaderLinks: false,
        sidebar: [
          {
            title: 'Home',
            path: '/',
          },
          {
            title: 'Dock',
            collapsable: false,
            path: '/dock/',
            children: [
              '/dock/orientation',
              '/dock/tilesize',
              '/dock/autohide',
              '/dock/autohide-time-modifier',
              '/dock/autohide-delay',
              '/dock/show-recents',
              '/dock/mineffect',
              '/dock/static-only',
              '/dock/scroll-to-open',
            ],
          },
          {
            title: 'Screenshots',
            collapsable: false,
            path: '/screenshots/',
            children: [
              '/screenshots/disable-shadow',
              '/screenshots/include-date',
              '/screenshots/location',
              '/screenshots/show-thumbnail',
              '/screenshots/type',
            ],
          },
          {
            title: 'Safari',
            collapsable: false,
            path: '/safari/',
            children: ['/safari/showfullurlinsmartsearchfield'],
          },
          {
            title: 'Finder',
            collapsable: false,
            path: '/finder/',
            children: [
              '/finder/quitmenuitem',
              '/finder/appleshowallextensions',
              '/finder/appleshowallfiles',
              '/finder/showpathbar',
              '/finder/fxpreferredviewstyle',
              '/finder/_fxsortfoldersfirst',
              '/finder/fxdefaultsearchscope',
              '/finder/fxremoveoldtrashitems',
              '/finder/fxenableextensionchangewarning',
              '/finder/nsdocumentsavenewdocumentstocloud',
              '/finder/showwindowtitlebaricons',
              '/finder/nstoolbartitleviewrolloverdelay',
              '/finder/nstableviewdefaultsizemode',
            ],
          },
          {
            title: 'Desktop',
            collapsable: false,
            path: '/desktop/',
            children: [
              '/desktop/_fxsortfoldersfirstondesktop',
              '/desktop/createdesktop',
              '/desktop/showharddrivesondesktop',
              '/desktop/showexternalharddrivesondesktop',
              '/desktop/showremovablemediaondesktop',
              '/desktop/showmountedserversondesktop',
            ],
          },
          {
            title: 'Menu Bar',
            collapsable: false,
            path: '/menubar/',
            children: ['/menubar/flashdateseparators', '/menubar/dateformat'],
          },
          {
            title: 'Trackpad',
            collapsable: false,
            path: '/trackpad/',
            children: [
              '/trackpad/firstclickthreshold',
              '/trackpad/draglock',
              '/trackpad/dragging',
              '/trackpad/trackpadthreefingerdrag',
            ],
          },
          {
            title: 'Mission Control',
            collapsable: false,
            path: '/mission-control/',
            children: [
              '/mission-control/mru-spaces',
              '/mission-control/expose-group-apps',
              '/mission-control/applespacesswitchonactivate',
              '/mission-control/spans-displays',
            ],
          },
          {
            title: 'Feedback Assistant',
            collapsable: false,
            path: '/feedback-assistant/',
            children: ['/feedback-assistant/autogather'],
          },
          {
            title: 'Xcode',
            collapsable: false,
            path: '/xcode/',
            children: [
              '/xcode/ideadditionalcounterpartsuffixes',
              '/xcode/showbuildoperationduration',
            ],
          },
          {
            title: 'Simulator',
            collapsable: false,
            path: '/simulator/',
            children: ['/simulator/screenshotsavelocation'],
          },
          {
            title: 'TextEdit',
            collapsable: false,
            path: '/textedit/',
            children: ['/textedit/richtext'],
          },
          {
            title: 'Time Machine',
            collapsable: false,
            path: '/timemachine/',
            children: ['/timemachine/donotoffernewdisksforbackup'],
          },
          {
            title: 'Activity Monitor',
            collapsable: false,
            path: '/activity-monitor/',
            children: [
              '/activity-monitor/updateperiod',
              '/activity-monitor/icontype',
            ],
          },
          {
            title: 'Miscellaneous',
            collapsable: false,
            path: '/misc/',
            children: [
              '/misc/devmode',
              '/misc/enable-spring-load-actions-on-all-items',
              '/misc/userwantsplaybacknotifications',
              '/misc/lsquarantine',
              '/misc/applepressandholdenabled',
              '/misc/focusfollowsmouse',
              '/misc/nsclosealwaysconfirmschanges',
            ],
          },
        ],
      },
      '/fr/': {
        nav: [
          {
            text: 'Accueil',
            link: '/fr/',
          },
        ],
        activeHeaderLinks: false,
        sidebar: [
          {
            title: 'Accueil',
            path: '/fr/',
          },
          {
            title: 'Dock',
            collapsable: false,
            path: '/fr/dock/',
            children: [
              '/fr/dock/orientation',
              '/fr/dock/tilesize',
              '/fr/dock/autohide',
              '/fr/dock/autohide-time-modifier',
              '/fr/dock/autohide-delay',
              '/fr/dock/show-recents',
              '/fr/dock/mineffect',
              '/fr/dock/static-only',
            ],
          },
          {
            title: "Capture d'écran",
            collapsable: false,
            path: '/fr/screenshots/',
            children: [
              '/fr/screenshots/disable-shadow',
              '/fr/screenshots/include-date',
              '/fr/screenshots/location',
              '/fr/screenshots/show-thumbnail',
              '/fr/screenshots/type',
            ],
          },
          {
            title: 'Safari',
            collapsable: false,
            path: '/fr/safari/',
            children: ['/fr/safari/showfullurlinsmartsearchfield'],
          },
          {
            title: 'Finder',
            collapsable: false,
            path: '/fr/finder/',
            children: [
              '/fr/finder/quitmenuitem',
              '/fr/finder/appleshowallextensions',
              '/fr/finder/appleshowallfiles',
              '/fr/finder/showpathbar',
              '/fr/finder/fxpreferredviewstyle',
              '/fr/finder/_fxsortfoldersfirst',
              '/fr/finder/fxdefaultsearchscope',
              '/fr/finder/fxremoveoldtrashitems',
              '/fr/finder/fxenableextensionchangewarning',
              '/fr/finder/nsdocumentsavenewdocumentstocloud',
              '/fr/finder/showwindowtitlebaricons',
              '/fr/finder/nstoolbartitleviewrolloverdelay',
              '/fr/finder/nstableviewdefaultsizemode',
            ],
          },
          {
            title: 'Bureau',
            collapsable: false,
            path: '/fr/desktop/',
            children: [
              '/fr/desktop/_fxsortfoldersfirstondesktop',
              '/fr/desktop/createdesktop',
              '/fr/desktop/showharddrivesondesktop',
              '/fr/desktop/showexternalharddrivesondesktop',
              '/fr/desktop/showremovablemediaondesktop',
              '/fr/desktop/showmountedserversondesktop',
            ],
          },
          {
            title: 'Barre des menus',
            collapsable: false,
            path: '/fr/menubar/',
            children: [
              '/fr/menubar/flashdateseparators',
              '/fr/menubar/dateformat',
            ],
          },
          {
            title: 'Mission Control',
            collapsable: false,
            path: '/fr/mission-control/',
            children: ['/fr/mission-control/mru-spaces'],
          },
          {
            title: "Assistant d'évaluation",
            collapsable: false,
            path: '/fr/feedback-assistant/',
            children: ['/fr/feedback-assistant/autogather'],
          },
          {
            title: 'Xcode',
            collapsable: false,
            path: '/fr/xcode/',
            children: [
              '/fr/xcode/ideadditionalcounterpartsuffixes',
              '/fr/xcode/showbuildoperationduration',
            ],
          },
          {
            title: 'Simulateur',
            collapsable: false,
            path: '/fr/simulator/',
            children: ['/fr/simulator/screenshotsavelocation'],
          },
          {
            title: 'TextEdit',
            collapsable: false,
            path: '/fr/textedit/',
            children: ['/fr/textedit/richtext'],
          },
          {
            title: 'Time Machine',
            collapsable: false,
            path: '/fr/timemachine/',
            children: ['/fr/timemachine/donotoffernewdisksforbackup'],
          },
          {
            title: "Moniteur d'activité",
            collapsable: false,
            path: '/fr/activity-monitor/',
            children: [
              '/fr/activity-monitor/updateperiod',
              '/fr/activity-monitor/icontype',
            ],
          },
          {
            title: 'Divers',
            collapsable: false,
            path: '/fr/misc/',
            children: [
              '/fr/misc/devmode',
              '/fr/misc/enable-spring-load-actions-on-all-items',
              '/fr/misc/userwantsplaybacknotifications',
              '/fr/misc/applepressandholdenabled',
              '/fr/misc/focusfollowsmouse',
            ],
          },
        ],
      },
    },
  },
})
