---
metaTitle: Enable dragging with three finger drag | Trackpad | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Trackpad > Enable dragging with three finger drag
  - name: "description"
    content: "Mutually exclusive with `Dragging` and `DragLock`."
  - property: "og:description"
    content: "Mutually exclusive with `Dragging` and `DragLock`."
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Enable dragging with three finger drag

Mutually exclusive with `Dragging` and `DragLock`.

<!-- break lists -->

- **Tested on macOS**:
  * Ventura
  * Monterey
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
