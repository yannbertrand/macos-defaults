---
title: All icons | Desktop
description: Hide all icons on desktop
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Desktop > All icons
  - - meta
    - property: 'og:description'
      content: Hide all icons on desktop
---

# All icons

Hide all icons on desktop

- **Tested on macOS**:
  - Sonoma
  - Ventura
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `false`

Hide all icons

```bash
defaults write com.apple.finder "CreateDesktop" -bool "false" && killall Finder
```

## Set to `true` (default value)

Show all icons

```bash
defaults write com.apple.finder "CreateDesktop" -bool "true" && killall Finder
```

## Read current value

```bash
defaults read com.apple.finder "CreateDesktop"
```

## Reset to default value

```bash
defaults delete com.apple.finder "CreateDesktop" && killall Finder
```
