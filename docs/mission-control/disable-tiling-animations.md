---
title: Disable window tiling animations | Mission Control
description: Disable the animation used when tiling windows.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Mission Control > Disable window tiling animations
  - - meta
    - property: 'og:description'
      content: Disable the animation used when tiling windows.
---

# Disable window tiling animations

Disable the animation used when tiling windows (triggered by `fn`+`ctrl`+`→ right`).

- **Tested on macOS**:
  - Tahoe
- **Parameter type**: bool

## Set to `true`

Disable tiling animations.

```bash
defaults write com.apple.WindowManager "DisableTilingAnimations" -bool "true" && killall WindowManager
```

## Set to `false` (default value)

Enable tiling animations.

```bash
defaults write com.apple.WindowManager "DisableTilingAnimations" -bool "false" && killall WindowManager
```

## Read current value

```bash
defaults read com.apple.WindowManager "DisableTilingAnimations"
```

## Reset to default value

```bash
defaults delete com.apple.WindowManager "DisableTilingAnimations" && killall WindowManager
```
