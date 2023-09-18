---
title: Scroll to Exposé app | Dock
description: Scroll up on a Dock icon to show all Space's opened windows for an app, or open stack.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Dock > Scroll to Exposé app
  - - meta
    - property: 'og:description'
      content: Scroll up on a Dock icon to show all Space's opened windows for an app, or open stack.
---

# Scroll to Exposé app

Scroll up on a Dock icon to show all Space's opened windows for an app, or open stack.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: bool

## Set to `true`

Enable

```bash
defaults write com.apple.dock "scroll-to-open" -bool "true" && killall Dock
```

## Set to `false` (default value)

Disable

```bash
defaults write com.apple.dock "scroll-to-open" -bool "false" && killall Dock
```

## Read current value

```bash
defaults read com.apple.dock "scroll-to-open"
```

## Reset to default value

```bash
defaults delete com.apple.dock "scroll-to-open" && killall Dock
```
