---
title: External disks | Desktop
description: Hide external disks on desktop
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Desktop > External disks
  - - meta
    - property: 'og:description'
      content: Hide external disks on desktop
---

# External disks

Hide external disks on desktop

<!-- break lists -->

- **Tested on macOS**:
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `false`

Hide external disks

```bash
defaults write com.apple.finder "ShowExternalHardDrivesOnDesktop" -bool "false" && killall Finder
```

## Set to `true` (default value)

Show external disks

```bash
defaults write com.apple.finder "ShowExternalHardDrivesOnDesktop" -bool "true" && killall Finder
```

## Read current value

```bash
defaults read com.apple.finder "ShowExternalHardDrivesOnDesktop"
```

## Reset to default value

```bash
defaults delete com.apple.finder "ShowExternalHardDrivesOnDesktop" && killall Finder
```
