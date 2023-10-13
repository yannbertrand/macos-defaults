---
title: Rearrange automatically | Mission Control
description: Choose whether to rearrange Spaces automatically.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Mission Control > Rearrange automatically
  - - meta
    - property: 'og:description'
      content: Choose whether to rearrange Spaces automatically.
---

# Rearrange automatically

Choose whether to rearrange Spaces automatically.

<!-- break lists -->

- **Tested on macOS**:
  - Sonoma
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: bool

## Set to `true` (default value)

Do reorder Spaces based on most recent use

```bash
defaults write com.apple.dock "mru-spaces" -bool "true" && killall Dock
```

## Set to `false`

Keep the Spaces arrangement

```bash
defaults write com.apple.dock "mru-spaces" -bool "false" && killall Dock
```

## Read current value

```bash
defaults read com.apple.dock "mru-spaces"
```

## Reset to default value

```bash
defaults delete com.apple.dock "mru-spaces" && killall Dock
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.preference.dock?WindowsApps">Access Dock settings from macOS UI</a>
2. Toggle "Automatically rearrange Spaces based on most recent use" value
