---
title: Enable dragging with three finger drag | Trackpad
description: Mutually exclusive with `Dragging` and `DragLock`.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Trackpad > Enable dragging with three finger drag
  - - meta
    - property: 'og:description'
      content: Mutually exclusive with `Dragging` and `DragLock`.
---

# Enable dragging with three finger drag

Mutually exclusive with `Dragging` and `DragLock`.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
- **Parameter type**: bool

## Set to `true`

```bash
defaults write com.apple.AppleMultitouchTrackpad "TrackpadThreeFingerDrag" -bool "true"
```

## Set to `false` (default value)

```bash
defaults write com.apple.AppleMultitouchTrackpad "TrackpadThreeFingerDrag" -bool "false"
```

## Read current value

```bash
defaults read com.apple.AppleMultitouchTrackpad "TrackpadThreeFingerDrag"
```

## Reset to default value

```bash
defaults delete com.apple.AppleMultitouchTrackpad "TrackpadThreeFingerDrag"
```
