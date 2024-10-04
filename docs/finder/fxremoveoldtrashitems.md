---
title: Empty bin items after 30 days | Finder
description: Remove items in the bin after 30 days
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Finder > Empty bin items after 30 days
  - - meta
    - property: 'og:description'
      content: Remove items in the bin after 30 days
---

# Empty bin items after 30 days

Remove items in the bin after 30 days

- **Tested on macOS**:
  - Sonoma
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `true`

Automatically empty bin after 30 days

```bash
defaults write com.apple.finder "FXRemoveOldTrashItems" -bool "true" && killall Finder
```

## Set to `false` (default value)

Keep bin as is

```bash
defaults write com.apple.finder "FXRemoveOldTrashItems" -bool "false" && killall Finder
```

## Read current value

```bash
defaults read com.apple.finder "FXRemoveOldTrashItems"
```

## Reset to default value

```bash
defaults delete com.apple.finder "FXRemoveOldTrashItems" && killall Finder
```
