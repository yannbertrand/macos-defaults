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
  markdown: {
    anchor: { level: [1, 2, 3] },
  },
  themeConfig: {
    siteTitle: 'macOS defaults',
    logo: '/logo.svg',
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
            link: '/dock/orientation.html',
          },
          {
            text: 'Change Dock icon size',
            link: '/dock/tilesize.html',
          },
          {
            text: 'Autohide',
            link: '/dock/autohide.html',
          },
          {
            text: 'Autohide animation time',
            link: '/dock/autohide-time-modifier.html',
          },
          {
            text: 'Autohide delay',
            link: '/dock/autohide-delay.html',
          },
          {
            text: 'Show recents',
            link: '/dock/show-recents.html',
          },
          {
            text: 'Minimize animation effect',
            link: '/dock/mineffect.html',
          },
          {
            text: 'Active applications only',
            link: '/dock/static-only.html',
          },
          {
            text: 'Scroll to Exposé app',
            link: '/dock/scroll-to-open.html',
          },
        ],
      },
      {
        text: 'Screenshots',
        items: [
          { text: 'Disable shadow', link: '/screenshots/disable-shadow.html' },
          { text: 'Include date', link: '/screenshots/include-date.html' },
          { text: 'Set location', link: '/screenshots/location.html' },
          {
            text: 'Display thumbnail',
            link: '/screenshots/show-thumbnail.html',
          },
          { text: 'Choose screenshot format', link: '/screenshots/type.html' },
        ],
      },
      {
        text: 'Safari',
        items: [
          {
            text: 'Show full URL',
            link: '/safari/showfullurlinsmartsearchfield.html',
          },
        ],
      },
      {
        text: 'Finder',
        items: [
          { text: 'Quit', link: '/finder/quitmenuitem.html' },
          {
            text: 'Show extensions',
            link: '/finder/appleshowallextensions.html',
          },
          { text: 'Show hidden files', link: '/finder/appleshowallfiles.html' },
          { text: 'Path bar', link: '/finder/showpathbar.html' },
          {
            text: 'Default view style',
            link: '/finder/fxpreferredviewstyle.html',
          },
          {
            text: 'Keep folders on top',
            link: '/finder/_fxsortfoldersfirst.html',
          },
          {
            text: 'Default search scope',
            link: '/finder/fxdefaultsearchscope.html',
          },
          {
            text: 'Empty bin items after 30 days',
            link: '/finder/fxremoveoldtrashitems.html',
          },
          {
            text: 'Changing file extension warning',
            link: '/finder/fxenableextensionchangewarning.html',
          },
          {
            text: 'Save to disk or iCloud by default',
            link: '/finder/nsdocumentsavenewdocumentstocloud.html',
          },
          {
            text: 'Title bar icons',
            link: '/finder/showwindowtitlebaricons.html',
          },
          {
            text: 'Adjust toolbar title rollover delay',
            link: '/finder/nstoolbartitleviewrolloverdelay.html',
          },
          {
            text: 'Set sidebar icon size',
            link: '/finder/nstableviewdefaultsizemode.html',
          },
        ],
      },
      {
        text: 'Desktop',
        items: [
          {
            text: 'Keep folders on top',
            link: '/desktop/_fxsortfoldersfirstondesktop.html',
          },
          { text: 'All icons', link: '/desktop/createdesktop.html' },
          { text: 'Disks', link: '/desktop/showharddrivesondesktop.html' },
          {
            text: 'External disks',
            link: '/desktop/showexternalharddrivesondesktop.html',
          },
          {
            text: 'Removable media',
            link: '/desktop/showremovablemediaondesktop.html',
          },
          {
            text: 'Connected servers',
            link: '/desktop/showmountedserversondesktop.html',
          },
        ],
      },
      {
        text: 'Menu Bar',
        items: [
          {
            text: 'Flash clock time separators',
            link: '/menubar/flashdateseparators.html',
          },
          {
            text: 'Set menubar digital clock format',
            link: '/menubar/dateformat.html',
          },
        ],
      },
      {
        text: 'Trackpad',
        items: [
          {
            text: 'Click weight (threshold)',
            link: '/trackpad/firstclickthreshold.html',
          },
          {
            text: 'Enable dragging with drag lock',
            link: '/trackpad/draglock.html',
          },
          {
            text: 'Enable dragging without drag lock',
            link: '/trackpad/dragging.html',
          },
          {
            text: 'Enable dragging with three finger drag',
            link: '/trackpad/trackpadthreefingerdrag.html',
          },
        ],
      },
      {
        text: 'Mission Control',
        items: [
          {
            text: 'Rearrange automatically',
            link: '/mission-control/mru-spaces.html',
          },
          {
            text: 'Group windows by application',
            link: '/mission-control/expose-group-apps.html',
          },
          {
            text: 'Switch to Space with open windows',
            link: '/mission-control/applespacesswitchonactivate.html',
          },
          {
            text: 'Displays have separate Spaces',
            link: '/mission-control/spans-displays.html',
          },
        ],
      },
      {
        text: 'Feedback Assistant',
        items: [
          { text: 'Autogather', link: '/feedback-assistant/autogather.html' },
        ],
      },
      {
        text: 'Xcode',
        items: [
          {
            text: 'Add Additional Counterpart Suffixes',
            link: '/xcode/ideadditionalcounterpartsuffixes.html',
          },
          {
            text: 'Show Build Durations',
            link: '/xcode/showbuildoperationduration.html',
          },
        ],
      },
      {
        text: 'Simulator',
        items: [
          {
            text: 'Set screenshot location',
            link: '/simulator/screenshotsavelocation.html',
          },
        ],
      },
      {
        text: 'TextEdit',
        items: [
          {
            text: 'Set default document format',
            link: '/textedit/richtext.html',
          },
        ],
      },
      {
        text: 'Time Machine',
        items: [
          {
            text: "Don't offer new disks for Time Machine backup",
            link: '/timemachine/donotoffernewdisksforbackup.html',
          },
        ],
      },
      {
        text: 'Activity Monitor',
        items: [
          {
            text: 'Update Frequency',
            link: '/activity-monitor/updateperiod.html',
          },
          { text: 'Dock Icon type', link: '/activity-monitor/icontype.html' },
        ],
      },
      {
        text: 'Miscellaneous',
        items: [
          { text: 'Help Menu position', link: '/misc/devmode.html' },
          {
            text: 'Enable spring loading for all Dock items',
            link: '/misc/enable-spring-load-actions-on-all-items.html',
          },
          {
            text: 'Show Music song notifications',
            link: '/misc/userwantsplaybacknotifications.html',
          },
          {
            text: 'Disable application quarantine message',
            link: '/misc/lsquarantine.html',
          },
          {
            text: 'Key held down behavior',
            link: '/misc/applepressandholdenabled.html',
          },
          { text: 'Focus Follows Mouse', link: '/misc/focusfollowsmouse.html' },
          {
            text: 'Close confirm changes popup',
            link: '/misc/nsclosealwaysconfirmschanges.html',
          },
        ],
      },
    ],
  },
})
