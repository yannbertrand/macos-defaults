---
title: Displays have separate Spaces | Mission Control
description: Set up separate spaces for each display (if you use Spaces and have multiple displays).
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Mission Control > Displays have separate Spaces
  - - meta
    - property: 'og:description'
      content: Set up separate spaces for each display (if you use Spaces and have multiple displays).
---

# Displays have separate Spaces

Set up separate spaces for each display (if you use Spaces and have multiple displays).

⚠️ Requires a logout to take effect.

- **Tested on macOS**:
  - Ventura
  - Big Sur
- **Parameter type**: bool

## Set to `true`

Spaces span all displays.

```bash
defaults write com.apple.spaces "spans-displays" -bool "true" && killall SystemUIServer
```

## Set to `false` (default value)

Displays have separate Spaces.

```bash
defaults write com.apple.spaces "spans-displays" -bool "false" && killall SystemUIServer
```

## Read current value

```bash
defaults read com.apple.spaces "spans-displays"
```

## Reset to default value

```bash
defaults delete com.apple.spaces "spans-displays" && killall SystemUIServer
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.preference.dock?WindowsApps">Access Dock settings from macOS UI</a>
2. Toggle "Displays have separate Spaces" value
