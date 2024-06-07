[Show battery percentage](./menubar/batterypercentage.md)---
title: macOS defaults list
titleTemplate: false
description: You've already copied `defaults write` commands. Sometimes you don't know what they do and are not sure they still work. This list of macOS defaults commands is here to help.
head:
  - - meta
    - property: 'og:title'
      content: A list of macOS defaults commands with demos ✨
  - - meta
    - property: 'og:description'
      content: You've already copied `defaults write` commands. Sometimes you don't know what they do and are not sure they still work. This list of macOS defaults commands is here to help.
  - - meta
    - property: 'og:image'
      content: 'https://macos-defaults.com/media-2x1.jpg'
  - - meta
    - property: 'twitter:image'
      content: 'https://macos-defaults.com/media-2x1.webp'
  - - meta
    - property: 'twitter:card'
      content: 'summary_large_image'
---

# macOS `defaults` list

Incomplete list of macOS `defaults` commands with demos ✨

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

- [Position](./dock/orientation.md)
- [Change macOS Dock icon size](./dock/tilesize.md)
- [Autohide](./dock/autohide.md)
- [Autohide animation time](./dock/autohide-time-modifier.md)
- [Autohide delay](./dock/autohide-delay.md)
- [Show recents](./dock/show-recents.md)
- [Minimize animation effect](./dock/mineffect.md)
- [Active applications only](./dock/static-only.md)
- [Scroll to Exposé app](./dock/scroll-to-open.md)

### Screenshots

- [Disable shadow](./screenshots/disable-shadow.md)
- [Include date](./screenshots/include-date.md)
- [Set location](./screenshots/location.md)
- [Display thumbnail](./screenshots/show-thumbnail.md)
- [Choose screenshot format](./screenshots/type.md)

### Safari

- [Show full URL](./safari/showfullurlinsmartsearchfield.md)

### Finder

- [Quit](./finder/quitmenuitem.md)
- [Show extensions](./finder/appleshowallextensions.md)
- [Show hidden files](./finder/appleshowallfiles.md)
- [Path bar](./finder/showpathbar.md)
- [Default view style](./finder/fxpreferredviewstyle.md)
- [Keep folders on top](./finder/_fxsortfoldersfirst.md)
- [Default search scope](./finder/fxdefaultsearchscope.md)
- [Empty bin items after 30 days](./finder/fxremoveoldtrashitems.md)
- [Changing file extension warning](./finder/fxenableextensionchangewarning.md)
- [Save to disk or iCloud by default](./finder/nsdocumentsavenewdocumentstocloud.md)
- [Title bar icons](./finder/showwindowtitlebaricons.md)
- [Adjust toolbar title rollover delay](./finder/nstoolbartitleviewrolloverdelay.md)
- [Set sidebar icon size](./finder/nstableviewdefaultsizemode.md)

### Desktop

- [Keep folders on top](./desktop/_fxsortfoldersfirstondesktop.md)
- [All icons](./desktop/createdesktop.md)
- [Disks](./desktop/showharddrivesondesktop.md)
- [External disks](./desktop/showexternalharddrivesondesktop.md)
- [Removable media](./desktop/showremovablemediaondesktop.md)
- [Connected servers](./desktop/showmountedserversondesktop.md)

### Menu Bar

- [Flash clock time separators](./menubar/flashdateseparators.md)
- [Set menubar digital clock format](./menubar/dateformat.md)
- [Show battery percentage](./menubar/batterypercentage.md)

### Mouse

- [Disable acceleration](./mouse/linear.md)
- [Set movement speed](./mouse/scaling.md)
- [Focus Follows Mouse](./mouse/focusfollowsmouse.md)

### Trackpad

- [Click weight (threshold)](./trackpad/firstclickthreshold.md)
- [Enable dragging with drag lock](./trackpad/draglock.md)
- [Enable dragging without drag lock](./trackpad/dragging.md)
- [Enable dragging with three finger drag](./trackpad/trackpadthreefingerdrag.md)

### Keyboard

- [Key held down behavior](./keyboard/applepressandholdenabled.md)
- [Configure fn/🌐︎ key](./keyboard/applefnusagetype.md)
- [Function keys behavior](./keyboard/applekeyboardfnstate.md)

### Mission Control

- [Rearrange automatically](./mission-control/mru-spaces.md)
- [Group windows by application](./mission-control/expose-group-apps.md)
- [Switch to Space with open windows](./mission-control/applespacesswitchonactivate.md)
- [Displays have separate Spaces](./mission-control/spans-displays.md)

### Feedback Assistant

- [Autogather](./feedback-assistant/autogather.md)

### Xcode

- [Add Additional Counterpart Suffixes](./xcode/ideadditionalcounterpartsuffixes.md)
- [Show Build Durations](./xcode/showbuildoperationduration.md)

### Simulator

- [Set screenshot location](./simulator/screenshotsavelocation.md)

### TextEdit

- [Set default document format](./textedit/richtext.md)
- [Set smart quotes](./textedit/smartquotes.md)

### Time Machine

- [Don&#x27;t offer new disks for Time Machine backup](./timemachine/donotoffernewdisksforbackup.md)

### Activity Monitor

- [Update Frequency](./activity-monitor/updateperiod.md)
- [Dock Icon type](./activity-monitor/icontype.md)

### Messages

- [Show Subject Field](./messages/show-subject-field.md)

### Miscellaneous

- [Help Menu position](./misc/devmode.md)
- [Enable spring loading for all Dock items](./misc/enable-spring-load-actions-on-all-items.md)
- [Show Music song notifications](./misc/userwantsplaybacknotifications.md)
- [Disable application quarantine message](./misc/lsquarantine.md)
- [Close confirm changes popup](./misc/nsclosealwaysconfirmschanges.md)

## 🤔 How do I add a command?

Please take [a look at the GitHub project](https://github.com/yannbertrand/macos-defaults#add-a-command). Feel free to open an issue if you know an unlisted command. It's also possible to add the command yourself by creating a Pull Request.

## ❤️ I like this website, how can I build the same?

Thank you! I built it using [VitePress](https://vitepress.dev/).

<a href="https://www.netlify.com">
  <img src="/netlify.svg" alt="Deploys by Netlify" width="114" height="51" />
</a>
