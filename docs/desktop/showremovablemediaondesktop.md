---
title: Removable media | Desktop
description: Hide removable media (CDs, DVDs and iPods) on desktop
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Desktop > Removable media
  - - meta
    - property: 'og:description'
      content: Hide removable media (CDs, DVDs and iPods) on desktop
---

# Removable media

Hide removable media _(CDs, DVDs and iPods)_ on desktop

- **Tested on macOS**:
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `false`

Hide removable media

```bash
defaults write com.apple.finder "ShowRemovableMediaOnDesktop" -bool "false" && killall Finder
```

## Set to `true` (default value)

Show removable media

```bash
defaults write com.apple.finder "ShowRemovableMediaOnDesktop" -bool "true" && killall Finder
```

## Read current value

```bash
defaults read com.apple.finder "ShowRemovableMediaOnDesktop"
```

## Reset to default value

```bash
defaults delete com.apple.finder "ShowRemovableMediaOnDesktop" && killall Finder
```
