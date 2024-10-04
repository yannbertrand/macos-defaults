---
title: Disks | Desktop
description: Show hard disks on desktop
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Desktop > Disks
  - - meta
    - property: 'og:description'
      content: Show hard disks on desktop
---

# Disks

Show hard disks on desktop

- **Tested on macOS**:
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `true`

Show hard disks

```bash
defaults write com.apple.finder "ShowHardDrivesOnDesktop" -bool "true" && killall Finder
```

## Set to `false` (default value)

Hide hard disks

```bash
defaults write com.apple.finder "ShowHardDrivesOnDesktop" -bool "false" && killall Finder
```

## Read current value

```bash
defaults read com.apple.finder "ShowHardDrivesOnDesktop"
```

## Reset to default value

```bash
defaults delete com.apple.finder "ShowHardDrivesOnDesktop" && killall Finder
```
