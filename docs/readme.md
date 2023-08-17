---
metaTitle: 'macOS defaults list'
meta:
  - property: 'og:title'
    content: 'A list of macOS defaults commands with demos ✨'
  - name: 'description'
    content: "You've already copied `defaults write` commands. Sometimes you don't know what they do and are not sure they still work. This list of macOS defaults commands is here to help."
  - property: 'og:description'
    content: "You've already copied `defaults write` commands. Sometimes you don't know what they do and are not sure they still work. This list of macOS defaults commands is here to help."
  - property: 'twitter:card'
    content: 'summary_large_image'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-2x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-2x1.jpg'
---

# macOS `defaults` list

Uncomplete list of macOS `defaults` commands with demos ✨

## 🙋 What's a `defaults` command?

<div class="custom-block tip">
  <p>
    <em>macOS applications and other programs</em> use the <code>defaults</code> system to record user preferences and other information to be maintained when the application isn't running (font for new documents, or the position of an Info panel).
    Much of this information is accessible through an application's Preferences panel but sometimes they're hidden.
  </p>
  <p>
    User defaults belong to <strong>domains</strong>, which typically correspond to individual applications.
    Applications, system services, and other programs have their own domains, they also share a domain named <strong>NSGlobalDomain</strong>.
    If a default isn't specified in the application's domain, it may be specified in NSGlobalDomain.
  </p>
  <p>
    Each domain has a dictionary of keys and values representing its defaults; e.g. <strong>"Default Font" = "Helvetica"</strong>.
    <strong>Keys</strong> are strings, <strong>values</strong> can be complex data structures comprising arrays,
    dictionaries, strings, and binary data. They're stored as XML Property List.
  </p>
  <p>The <code>defaults</code> command line interface is a way to interact with these values.</p>
</div>

**Source: [Real-World-Systems](http://www.real-world-systems.com/docs/defaults.1.html)**

### Command line interface basics

#### Print the help

```bash
defaults help
```

#### List all domains

```bash
defaults domains
```

#### List all entries containing _word_

```bash
defaults find ${word}
```

#### Show the type for the given _domain_, _key_

```bash
defaults read-type ${domain} ${key}
```

#### Rename _old_key_ to _new_key_

```bash
defaults rename ${domain} ${old_key} ${new_key}
```

## 💻 List of commands

### Dock

- [Position](./dock/orientation.html)
- [Change macOS Dock icon size](./dock/tilesize.html)
- [Autohide](./dock/autohide.html)
- [Autohide animation time](./dock/autohide-time-modifier.html)
- [Autohide delay](./dock/autohide-delay.html)
- [Show recents](./dock/show-recents.html)
- [Minimize animation effect](./dock/mineffect.html)
- [Active applications only](./dock/static-only.html)
- [Scroll to Exposé app](./dock/scroll-to-open.html)

### Screenshots

- [Disable shadow](./screenshots/disable-shadow.html)
- [Include date](./screenshots/include-date.html)
- [Set location](./screenshots/location.html)
- [Display thumbnail](./screenshots/show-thumbnail.html)
- [Choose screenshot format](./screenshots/type.html)

### Safari

- [Show full URL](./safari/showfullurlinsmartsearchfield.html)

### Finder

- [Quit](./finder/quitmenuitem.html)
- [Show extensions](./finder/appleshowallextensions.html)
- [Show hidden files](./finder/appleshowallfiles.html)
- [Path bar](./finder/showpathbar.html)
- [Default view style](./finder/fxpreferredviewstyle.html)
- [Keep folders on top](./finder/_fxsortfoldersfirst.html)
- [Default search scope](./finder/fxdefaultsearchscope.html)
- [Empty bin items after 30 days](./finder/fxremoveoldtrashitems.html)
- [Changing file extension warning](./finder/fxenableextensionchangewarning.html)
- [Save to disk or iCloud by default](./finder/nsdocumentsavenewdocumentstocloud.html)
- [Title bar icons](./finder/showwindowtitlebaricons.html)
- [Adjust toolbar title rollover delay](./finder/nstoolbartitleviewrolloverdelay.html)
- [Set sidebar icon size](./finder/nstableviewdefaultsizemode.html)

### Desktop

- [Keep folders on top](./desktop/_fxsortfoldersfirstondesktop.html)
- [All icons](./desktop/createdesktop.html)
- [Disks](./desktop/showharddrivesondesktop.html)
- [External disks](./desktop/showexternalharddrivesondesktop.html)
- [Removable media](./desktop/showremovablemediaondesktop.html)
- [Connected servers](./desktop/showmountedserversondesktop.html)

### Menu Bar

- [Flash clock time separators](./menubar/flashdateseparators.html)
- [Set menubar digital clock format](./menubar/dateformat.html)

### Trackpad

- [Click weight (threshold)](./trackpad/firstclickthreshold.html)
- [Enable dragging with drag lock](./trackpad/draglock.html)
- [Enable dragging without drag lock](./trackpad/dragging.html)
- [Enable dragging with three finger drag](./trackpad/trackpadthreefingerdrag.html)

### Mission Control

- [Rearrange automatically](./mission-control/mru-spaces.html)
- [Group windows by application](./mission-control/expose-group-apps.html)
- [Switch to Space with open windows](./mission-control/applespacesswitchonactivate.html)
- [Displays have separate Spaces](./mission-control/spans-displays.html)

### Feedback Assistant

- [Autogather](./feedback-assistant/autogather.html)

### Xcode

- [Add Additional Counterpart Suffixes](./xcode/ideadditionalcounterpartsuffixes.html)
- [Show Build Durations](./xcode/showbuildoperationduration.html)

### Simulator

- [Set screenshot location](./simulator/screenshotsavelocation.html)

### TextEdit

- [Set default document format](./textedit/richtext.html)

### Time Machine

- [Don&#x27;t offer new disks for Time Machine backup](./timemachine/donotoffernewdisksforbackup.html)

### Activity Monitor

- [Update Frequency](./activity-monitor/updateperiod.html)
- [Dock Icon type](./activity-monitor/icontype.html)

### Miscellaneous

- [Help Menu position](./misc/devmode.html)
- [Enable spring loading for all Dock items](./misc/enable-spring-load-actions-on-all-items.html)
- [Show Music song notifications](./misc/userwantsplaybacknotifications.html)
- [Disable application quarantine message](./misc/lsquarantine.html)
- [Key held down behavior](./misc/applepressandholdenabled.html)
- [Focus Follows Mouse](./misc/focusfollowsmouse.html)
- [Close confirm changes popup](./misc/nsclosealwaysconfirmschanges.html)

## 🤔 How do I add a command?

Please update [this file](https://github.com/yannbertrand/macos-defaults/blob/main/defaults.yml) that I use to [build multiple websites](https://github.com/yannbertrand/macos-defaults/#readme) like this one.

## ❤️ I like this website, how can I build the same?

Thank you! I built it using [VuePress](https://vuepress.vuejs.org/). Take a look at [my report](https://github.com/yannbertrand/macos-defaults/tree/main/build#readme) if you want to use it.

<a href="https://www.netlify.com">
  <img src="/netlify.svg" alt="Deploys by Netlify" width="114" height="51" />
</a>
