---
title: Speed | Mouse
description: Set movement speed of the mouse cursor.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Mouse > Speed
  - - meta
    - property: 'og:description'
      content: Set movement speed of the mouse cursor
---

# Speed

Set movement speed of the mouse cursor.

⚠️ A restart of your Mac is required to apply these changes.

<!-- break lists -->

- **Tested on macOS**:
  - Sonoma
  - Venura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
  - High Sierra
  - Sierra
  - El Capitan
  - Yosemite
  - Mavericks
  - Mountain Lion
  - Lion
  - Snow Leopard
  - Leopard
- **Parameter type**: float

## Set to `1` (default value)

By default, the mouse movement scale factor is 1x.

```bash
defaults write NSGlobalDomain com.apple.mouse.scaling -float "1"
```

This setting is listed in the Mouse preference pane as the "Tracking speed" slider. Its ticks give the following values:

- `0.0` (which surprisingly, does not mean "no movement")
- `0.125`
- `0.5`
- `0.6875`
- `0.875`
- `1.0`
- `1.5`
- `2.0`
- `2.5`
- `3.0`

This command allows you set a scale factor greater than 3x.

## Read current value

```bash
defaults read NSGlobalDomain com.apple.mouse.scaling
```

## Reset to default value

```bash
defaults delete NSGlobalDomain com.apple.mouse.scaling
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.Mouse-Settings.extension">Access Mouse settings from macOS UI</a>
2. Slide "Tracking speed" range value
