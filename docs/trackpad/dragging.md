---
title: Enable dragging without drag lock | Trackpad
meta:
  - property: 'og:title'
    content: macOS defaults > Trackpad > Enable dragging without drag lock
  - name: 'description'
    content: 'Mutually exclusive with `DragLock` and `TrackpadThreeFingerDrag`.'
  - property: 'og:description'
    content: 'Mutually exclusive with `DragLock` and `TrackpadThreeFingerDrag`.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
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
