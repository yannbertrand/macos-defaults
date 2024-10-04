---
title: Title bar icons | Finder
description: Always show folder icon before title in the title bar
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Finder > Title bar icons
  - - meta
    - property: 'og:description'
      content: Always show folder icon before title in the title bar
---

# Title bar icons

Always show folder icon before title in the title bar

⚠️ This command requires to grant full disk access to the terminal
(System Preferences → Security & Privacy → Full Disk Access)

- **Tested on macOS**:
  - Ventura
  - Monterey
- **Parameter type**: bool

## Set to `true`

Show icon in the title bar

```bash
defaults write com.apple.universalaccess "showWindowTitlebarIcons" -bool "true" && killall Finder
```

<img
  src="./images/showWindowTitlebarIcons/true.png"
  alt="Example output with value set to true"
  width="740" height="451" style="height: auto"
/>

## Set to `false` (default value)

Hide icon from the title bar

```bash
defaults write com.apple.universalaccess "showWindowTitlebarIcons" -bool "false" && killall Finder
```

<img
  src="./images/showWindowTitlebarIcons/false.png"
  alt="Example output with value set to false"
  width="740" height="451" style="height: auto"
/>

## Read current value

```bash
defaults read com.apple.universalaccess "showWindowTitlebarIcons"
```

## Reset to default value

```bash
defaults delete com.apple.universalaccess "showWindowTitlebarIcons" && killall Finder
```
