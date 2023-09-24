---
title: Connected servers | Desktop
description: Show connected servers on desktop
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Desktop > Connected servers
  - - meta
    - property: 'og:description'
      content: Show connected servers on desktop
---

# Connected servers

Show connected servers on desktop

<!-- break lists -->

- **Tested on macOS**:
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `true`

Show connected servers

```bash
defaults write com.apple.finder "ShowMountedServersOnDesktop" -bool "true" && killall Finder
```

## Set to `false` (default value)

Hide connected servers

```bash
defaults write com.apple.finder "ShowMountedServersOnDesktop" -bool "false" && killall Finder
```

## Read current value

```bash
defaults read com.apple.finder "ShowMountedServersOnDesktop"
```

## Reset to default value

```bash
defaults delete com.apple.finder "ShowMountedServersOnDesktop" && killall Finder
```
