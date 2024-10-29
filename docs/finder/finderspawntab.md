---
title: Open folders destination | Finder
description: Set whether folders open in a new tab or a new window
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Finder > Open folders destination
  - - meta
    - property: 'og:description'
      content: Set whether folders open in a new tab or a new window
---

# Open folders destination

Set whether folders shown in the Finder open in a new tab or a new window when using `⌘ cmd`+`double-click`, and which option is shown in the context menu.

- **Tested on macOS**:
  - Sonoma
- **Parameter type**: bool

## Set to `true` (default value)

Open folders in a new tab

```bash
defaults write com.apple.finder "FinderSpawnTab" -bool "true" && killall Finder
```

<img
  src="./images/FinderSpawnTab/true.png"
  alt="Example output with value set to true"
  width="953" height="571" style="height: auto"
/>

## Set to `false`

Open folders in a new window

```bash
defaults write com.apple.finder "FinderSpawnTab" -bool "false" && killall Finder
```

<img
  src="./images/FinderSpawnTab/false.png"
  alt="Example output with value set to true"
  width="953" height="571" style="height: auto"
/>

## Read current value

```bash
defaults read com.apple.finder "FinderSpawnTab"
```

## Reset to default value

```bash
defaults delete com.apple.finder "FinderSpawnTab" && killall Finder
```

## Set value from UI

1. Access Finder settings from macOS UI
2. Toggle "Open folders in tabs instead of new windows" value
