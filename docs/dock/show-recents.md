---
title: Show recents | Dock
description: Show recently used apps in a separate section of the Dock.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Dock > Show recents
  - - meta
    - property: 'og:description'
      content: Show recently used apps in a separate section of the Dock.
---

# Show recents

Show recently used apps in a separate section of the Dock.

- **Tested on macOS**:
  - Sonoma
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: bool

## Set to `true` (default value)

Display recent apps in the Dock

```bash
defaults write com.apple.dock "show-recents" -bool "true" && killall Dock
```

<img
  src="./images/show-recents/true.png"
  alt="Example output with value set to true"
  width="740" height="82" style="height: auto"
/>

## Set to `false`

Do not display recent apps in the Dock

```bash
defaults write com.apple.dock "show-recents" -bool "false" && killall Dock
```

<img
  src="./images/show-recents/false.png"
  alt="Example output with value set to false"
  width="740" height="82" style="height: auto"
/>

## Read current value

```bash
defaults read com.apple.dock "show-recents"
```

## Reset to default value

```bash
defaults delete com.apple.dock "show-recents" && killall Dock
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.preference.dock?Dock">Access Dock settings from macOS UI</a>
2. Set "Show recent applications in Dock" dropdown value
