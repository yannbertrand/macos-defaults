---
title: Magnification | Dock
description: Magnify items in the Dock.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Dock > Magnification
  - - meta
    - property: 'og:description'
      content: Magnify items in the Dock.
---

# Magnification

Magnify icons in the Dock.

- **Tested on macOS**:
  - Seqoia
- **Parameter type**: bool

## Set to `false` (default value)

Do not magnify items in the Dock

```bash
defaults write com.apple.dock "magnification" -bool "false" && killall Dock
```

## Set to `true`

Magnify items in the Dock when hovered over

```bash
defaults write com.apple.dock "magnification" -bool "true" && killall Dock
```

## Read current value

```bash
defaults read com.apple.dock "magnification"
```

## Reset to default value

```bash
defaults delete com.apple.dock "magnification" && killall Dock
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.preference.dock?Dock">Access Dock settings from macOS UI</a>
2. Slide "Magnification" range value to "Off"
