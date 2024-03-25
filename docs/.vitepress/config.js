import { defineConfig } from 'vitepress'

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
    sidebar: [
      {
        text: 'Dock',
        items: [
          {
            text: 'Position',
            link: '/dock/orientation.md',
          },
          {
            text: 'Change Dock icon size',
            link: '/dock/tilesize.md',
          },
          {
            text: 'Autohide',
            link: '/dock/autohide.md',
          },
          {
            text: 'Autohide animation time',
            link: '/dock/autohide-time-modifier.md',
          },
          {
            text: 'Autohide delay',
            link: '/dock/autohide-delay.md',
          },
          {
            text: 'Show recents',
            link: '/dock/show-recents.md',
          },
          {
            text: 'Minimize animation effect',
            link: '/dock/mineffect.md',
          },
          {
            text: 'Active applications only',
            link: '/dock/static-only.md',
          },
          {
            text: 'Scroll to Exposé app',
            link: '/dock/scroll-to-open.md',
          },
        ],
      },
      {
        text: 'Screenshots',
        items: [
          { text: 'Disable shadow', link: '/screenshots/disable-shadow.md' },
          { text: 'Include date', link: '/screenshots/include-date.md' },
          { text: 'Set location', link: '/screenshots/location.md' },
          {
            text: 'Display thumbnail',
            link: '/screenshots/show-thumbnail.md',
          },
          { text: 'Choose screenshot format', link: '/screenshots/type.md' },
        ],
      },
      {
        text: 'Safari',
        items: [
          {
            text: 'Show full URL',
            link: '/safari/showfullurlinsmartsearchfield.md',
          },
        ],
      },
      {
        text: 'Finder',
        items: [
          { text: 'Quit', link: '/finder/quitmenuitem.md' },
          {
            text: 'Show extensions',
            link: '/finder/appleshowallextensions.md',
          },
          { text: 'Show hidden files', link: '/finder/appleshowallfiles.md' },
          { text: 'Path bar', link: '/finder/showpathbar.md' },
          {
            text: 'Default view style',
            link: '/finder/fxpreferredviewstyle.md',
          },
          {
            text: 'Keep folders on top',
            link: '/finder/_fxsortfoldersfirst.md',
          },
          {
            text: 'Default search scope',
            link: '/finder/fxdefaultsearchscope.md',
          },
          {
            text: 'Empty bin items after 30 days',
            link: '/finder/fxremoveoldtrashitems.md',
          },
          {
            text: 'Changing file extension warning',
            link: '/finder/fxenableextensionchangewarning.md',
          },
          {
            text: 'Save to disk or iCloud by default',
            link: '/finder/nsdocumentsavenewdocumentstocloud.md',
          },
          {
            text: 'Title bar icons',
            link: '/finder/showwindowtitlebaricons.md',
          },
          {
            text: 'Adjust toolbar title rollover delay',
            link: '/finder/nstoolbartitleviewrolloverdelay.md',
          },
          {
            text: 'Set sidebar icon size',
            link: '/finder/nstableviewdefaultsizemode.md',
          },
        ],
      },
      {
        text: 'Desktop',
        items: [
          {
            text: 'Keep folders on top',
            link: '/desktop/_fxsortfoldersfirstondesktop.md',
          },
          { text: 'All icons', link: '/desktop/createdesktop.md' },
          { text: 'Disks', link: '/desktop/showharddrivesondesktop.md' },
          {
            text: 'External disks',
            link: '/desktop/showexternalharddrivesondesktop.md',
          },
          {
            text: 'Removable media',
            link: '/desktop/showremovablemediaondesktop.md',
          },
          {
            text: 'Connected servers',
            link: '/desktop/showmountedserversondesktop.md',
          },
        ],
      },
      {
        text: 'Menu Bar',
        items: [
          {
            text: 'Flash clock time separators',
            link: '/menubar/flashdateseparators.md',
          },
          {
            text: 'Set menubar digital clock format',
            link: '/menubar/dateformat.md',
          },
        ],
      },
      {
        text: 'Mouse',
        items: [
          { text: 'Disable acceleration', link: '/mouse/linear.md' },
          {
            text: 'Set movement speed',
            link: '/mouse/scaling.md',
          },
          { text: 'Focus Follows Mouse', link: '/mouse/focusfollowsmouse.md' },
        ],
      },
      {
        text: 'Trackpad',
        items: [
          {
            text: 'Click weight (threshold)',
            link: '/trackpad/firstclickthreshold.md',
          },
          {
            text: 'Enable dragging with drag lock',
            link: '/trackpad/draglock.md',
          },
          {
            text: 'Enable dragging without drag lock',
            link: '/trackpad/dragging.md',
          },
          {
            text: 'Enable dragging with three finger drag',
            link: '/trackpad/trackpadthreefingerdrag.md',
          },
        ],
      },
      {
        text: 'Mission Control',
        items: [
          {
            text: 'Rearrange automatically',
            link: '/mission-control/mru-spaces.md',
          },
          {
            text: 'Group windows by application',
            link: '/mission-control/expose-group-apps.md',
          },
          {
            text: 'Switch to Space with open windows',
            link: '/mission-control/applespacesswitchonactivate.md',
          },
          {
            text: 'Displays have separate Spaces',
            link: '/mission-control/spans-displays.md',
          },
        ],
      },
      {
        text: 'Feedback Assistant',
        items: [
          { text: 'Autogather', link: '/feedback-assistant/autogather.md' },
        ],
      },
      {
        text: 'Xcode',
        items: [
          {
            text: 'Add Additional Counterpart Suffixes',
            link: '/xcode/ideadditionalcounterpartsuffixes.md',
          },
          {
            text: 'Show Build Durations',
            link: '/xcode/showbuildoperationduration.md',
          },
        ],
      },
      {
        text: 'Simulator',
        items: [
          {
            text: 'Set screenshot location',
            link: '/simulator/screenshotsavelocation.md',
          },
        ],
      },
      {
        text: 'TextEdit',
        items: [
          {
            text: 'Set default document format',
            link: '/textedit/richtext.md',
          },
          {
            text: 'Set smart quotes',
            link: '/textedit/smartquotes.md',
          },
        ],
      },
      {
        text: 'Time Machine',
        items: [
          {
            text: "Don't offer new disks for Time Machine backup",
            link: '/timemachine/donotoffernewdisksforbackup.md',
          },
        ],
      },
      {
        text: 'Activity Monitor',
        items: [
          {
            text: 'Update Frequency',
            link: '/activity-monitor/updateperiod.md',
          },
          { text: 'Dock Icon type', link: '/activity-monitor/icontype.md' },
        ],
      },
      {
        text: 'Messages',
        items: [
          {
            text: 'Show Subject Field',
            link: '/messages/show-subject-field.md',
          },
        ],
      },
      {
        text: 'Miscellaneous',
        items: [
          { text: 'Help Menu position', link: '/misc/devmode.md' },
          {
            text: 'Enable spring loading for all Dock items',
            link: '/misc/enable-spring-load-actions-on-all-items.md',
          },
          {
            text: 'Show Music song notifications',
            link: '/misc/userwantsplaybacknotifications.md',
          },
          {
            text: 'Disable application quarantine message',
            link: '/misc/lsquarantine.md',
          },
          {
            text: 'Key held down behavior',
            link: '/misc/applepressandholdenabled.md',
          },
          {
            text: 'Close confirm changes popup',
            link: '/misc/nsclosealwaysconfirmschanges.md',
          },
          {
            text: 'Function keys behavior',
            link: '/misc/applekeyboardfnstate.md',
          },
        ],
      },
    ],
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
