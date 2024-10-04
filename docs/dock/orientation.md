---
title: Position | Dock
description: Set the Dock position
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Dock > Position
  - - meta
    - property: 'og:description'
      content: Set the Dock position
---

# Position

Set the Dock position

- **Tested on macOS**:
  - Sonoma
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: string
  - left
  - bottom
  - right

## Set to `left`

Put the Dock on the left of the screen

```bash
defaults write com.apple.dock "orientation" -string "left" && killall Dock
```

<img
  src="./images/orientation/left.png"
  alt="Example output with value set to left"
  width="740" height="463" style="height: auto"
/>

## Set to `bottom` (default value)

Put the Dock on the bottom of the screen

```bash
defaults write com.apple.dock "orientation" -string "bottom" && killall Dock
```

<img
  src="./images/orientation/bottom.png"
  alt="Example output with value set to bottom"
  width="740" height="463" style="height: auto"
/>

## Set to `right`

Put the Dock on the right of the screen

```bash
defaults write com.apple.dock "orientation" -string "right" && killall Dock
```

<img
  src="./images/orientation/right.png"
  alt="Example output with value set to right"
  width="740" height="463" style="height: auto"
/>

## Read current value

```bash
defaults read com.apple.dock "orientation"
```

## Reset to default value

```bash
defaults delete com.apple.dock "orientation" && killall Dock
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.preference.dock?Dock">Access Dock settings from macOS UI</a>
2. Set "Position on the screen" dropdown value
