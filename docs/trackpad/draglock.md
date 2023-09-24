---
title: Enable dragging with drag lock | Trackpad
description: Mutually exclusive with `Dragging` and `TrackpadThreeFingerDrag`.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Trackpad > Enable dragging with drag lock
  - - meta
    - property: 'og:description'
      content: Mutually exclusive with `Dragging` and `TrackpadThreeFingerDrag`.
---

# Enable dragging with drag lock

Mutually exclusive with `Dragging` and `TrackpadThreeFingerDrag`.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
- **Parameter type**: bool

## Set to `true`

```bash
defaults write com.apple.AppleMultitouchTrackpad "DragLock" -bool "true"
```

## Set to `false` (default value)

```bash
defaults write com.apple.AppleMultitouchTrackpad "DragLock" -bool "false"
```

## Read current value

```bash
defaults read com.apple.AppleMultitouchTrackpad "DragLock"
```

## Reset to default value

```bash
defaults delete com.apple.AppleMultitouchTrackpad "DragLock"
```
