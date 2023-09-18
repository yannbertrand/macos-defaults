---
title: Help Menu position | Miscellaneous
description: Choose whether the Help Menu should be always-on-top.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Miscellaneous > Help Menu position
  - - meta
    - property: 'og:description'
      content: Choose whether the Help Menu should be always-on-top.
---

# Help Menu position

Choose whether the Help Menu should be always-on-top.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: bool

## Set to `false` (default value)

By default, the Help Menu is always-on-top

```bash
defaults write com.apple.helpviewer "DevMode" -bool "false"
```

## Set to `true`

The Help Menu can go behind other windows

```bash
defaults write com.apple.helpviewer "DevMode" -bool "true"
```

## Read current value

```bash
defaults read com.apple.helpviewer "DevMode"
```

## Reset to default value

```bash
defaults delete com.apple.helpviewer "DevMode"
```
