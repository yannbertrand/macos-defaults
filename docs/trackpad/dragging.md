---
title: Enable dragging without drag lock | Trackpad
description: Mutually exclusive with `DragLock` and `TrackpadThreeFingerDrag`.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Trackpad > Enable dragging without drag lock
  - - meta
    - property: 'og:description'
      content: Mutually exclusive with `DragLock` and `TrackpadThreeFingerDrag`.
---

# Enable dragging without drag lock

Mutually exclusive with `DragLock` and `TrackpadThreeFingerDrag`.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
- **Parameter type**: bool

## Set to `true`

```bash
defaults write com.apple.AppleMultitouchTrackpad "Dragging" -bool "true"
```

## Set to `false` (default value)

```bash
defaults write com.apple.AppleMultitouchTrackpad "Dragging" -bool "false"
```

## Read current value

```bash
defaults read com.apple.AppleMultitouchTrackpad "Dragging"
```

## Reset to default value

```bash
defaults delete com.apple.AppleMultitouchTrackpad "Dragging"
```
