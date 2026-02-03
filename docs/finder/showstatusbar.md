---
title: Status bar | Finder
description: Show status bar in the bottom of the Finder windows
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Finder > Status bar
  - - meta
    - property: 'og:description'
      content: Show status bar in the bottom of the Finder windows
---

# Status bar

Show status bar in the bottom of the Finder windows

- **Tested on macOS**:
  - Sequoia
- **Parameter type**: bool

## Set to `true`

Show path bar

```bash
defaults write com.apple.finder "ShowStatusBar" -bool "true" && killall Finder
```

<img
  src="./images/ShowStatusBar/true.png"
  alt="Example output with value set to true"
  width="740" height="451" style="height: auto"
/>

## Set to `false` (default value)

Hide path bar

```bash
defaults write com.apple.finder "ShowStatusBar" -bool "false" && killall Finder
```

<img
  src="./images/ShowStatusBar/false.png"
  alt="Example output with value set to false"
  width="740" height="451" style="height: auto"
/>

## Read current value

```bash
defaults read com.apple.finder "ShowStatusBar"
```

## Reset to default value

```bash
defaults delete com.apple.finder "ShowStatusBar" && killall Finder
```
