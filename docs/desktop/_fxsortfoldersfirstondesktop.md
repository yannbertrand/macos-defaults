---
title: Keep folders on top | Desktop
description: Keep folders on top when sorting
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Desktop > Keep folders on top
  - - meta
    - property: 'og:description'
      content: Keep folders on top when sorting
---

# Keep folders on top

Keep folders on top when sorting

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `true`

Keep folders on top

```bash
defaults write com.apple.finder "_FXSortFoldersFirstOnDesktop" -bool "true" && killall Finder
```

## Set to `false` (default value)

Don't keep folders on top

```bash
defaults write com.apple.finder "_FXSortFoldersFirstOnDesktop" -bool "false" && killall Finder
```

## Read current value

```bash
defaults read com.apple.finder "_FXSortFoldersFirstOnDesktop"
```

## Reset to default value

```bash
defaults delete com.apple.finder "_FXSortFoldersFirstOnDesktop" && killall Finder
```
