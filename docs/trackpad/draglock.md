---
metaTitle: Enable dragging with drag lock | Trackpad | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Trackpad > Enable dragging with drag lock
  - name: 'description'
    content: 'Mutually exclusive with `Dragging` and `TrackpadThreeFingerDrag`.'
  - property: 'og:description'
    content: 'Mutually exclusive with `Dragging` and `TrackpadThreeFingerDrag`.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
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
