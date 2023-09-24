---
title: Change macOS Dock icon size | Dock
description: Set the icon size of Dock items in pixels.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Dock > Change macOS Dock icon size
  - - meta
    - property: 'og:description'
      content: Set the icon size of Dock items in pixels.
---

# Change macOS Dock icon size

Set the icon size of Dock items in pixels.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
- **Parameter type**: int

## Set to `36`

Dock icon size of 36 pixels.

```bash
defaults write com.apple.dock "tilesize" -int "36" && killall Dock
```

<img
  src="./images/tilesize/36.png"
  alt="Example output with value set to 36"
  width="740" height="463" style="height: auto"
/>

## Set to `48` (default value)

Dock icon size of 48 pixels.

```bash
defaults write com.apple.dock "tilesize" -int "48" && killall Dock
```

<img
  src="./images/tilesize/48.png"
  alt="Example output with value set to 48"
  width="740" height="463" style="height: auto"
/>

## Read current value

```bash
defaults read com.apple.dock "tilesize"
```

## Reset to default value

```bash
defaults delete com.apple.dock "tilesize" && killall Dock
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.preference.dock?Dock">Access Dock settings from macOS UI</a>
2. Slide "Size" range value
