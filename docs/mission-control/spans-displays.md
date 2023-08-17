---
metaTitle: Displays have separate Spaces | Mission Control | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Mission Control > Displays have separate Spaces
  - name: "description"
    content: "Set up separate spaces for each display (if you use Spaces and have multiple displays)."
  - property: "og:description"
    content: "Set up separate spaces for each display (if you use Spaces and have multiple displays)."
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Displays have separate Spaces

Set up separate spaces for each display (if you use Spaces and have multiple displays).

<!-- break lists -->

- **Tested on macOS**:
  * Ventura
  * Big Sur
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
