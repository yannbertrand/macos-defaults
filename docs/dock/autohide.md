---
title: Autohide | Dock
description: Autohides the Dock. You can toggle the Dock using `⌥ alt`+`⌘ cmd`+`d`.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Dock > Autohide
  - - meta
    - property: 'og:description'
      content: Autohides the Dock. You can toggle the Dock using `⌥ alt`+`⌘ cmd`+`d`.
---

# Autohide

Autohides the Dock. You can toggle the Dock using `⌥ alt`+`⌘ cmd`+`d`.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: bool

## Set to `false` (default value)

Always display the Dock

```bash
defaults write com.apple.dock "autohide" -bool "false" && killall Dock
```

## Set to `true`

Autohide the Dock when the mouse is out

```bash
defaults write com.apple.dock "autohide" -bool "true" && killall Dock
```

## Read current value

```bash
defaults read com.apple.dock "autohide"
```

## Reset to default value

```bash
defaults delete com.apple.dock "autohide" && killall Dock
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.preference.dock?Dock">Access Dock settings from macOS UI</a>
2. Toggle "Automatically hide and show the Dock" value
