---
title: Open folders in new tab or new window | Finder
description: Set whether folders open in a new tab or a new window
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Finder > Open folders in new tab or new window
  - - meta
    - property: 'og:description'
      content: Set whether folders open in a new tab or a new window
---

# Open folders in new tab or new window

Set whether folders shown in the Finder open in a new tab or a new window when using `⌘ cmd`+`double-click`, and which option is shown in the context menu.

- **Tested on macOS**:
  - Sonoma
- **Parameter type**: bool

## Set to `true` (default value)

Open folders in a new tab

```bash
defaults write com.apple.finder "FinderSpawnTab" -bool "true" && killall Finder
```

## Set to `false`

Open folders in a new window

```bash
defaults write com.apple.finder "FinderSpawnTab" -bool "false" && killall Finder
```

## Read current value

```bash
defaults read com.apple.finder "FinderSpawnTab"
```

## Reset to default value

```bash
defaults delete com.apple.finder "FinderSpawnTab" && killall Finder
```
