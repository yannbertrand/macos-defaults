---
metaTitle: Set location | Screenshots | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Screenshots > Set location
  - name: 'description'
    content: 'Set default screenshot location.'
  - property: 'og:description'
    content: 'Set default screenshot location.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Set location

Set default screenshot location.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: string

## Set to `~/Desktop` (default value)

```bash
defaults write com.apple.screencapture "location" -string "~/Desktop" && killall SystemUIServer
```

## Set to `~/Pictures`

```bash
defaults write com.apple.screencapture "location" -string "~/Pictures" && killall SystemUIServer
```

## Read current value

```bash
defaults read com.apple.screencapture "location"
```

## Reset to default value

```bash
defaults delete com.apple.screencapture "location" && killall SystemUIServer
```
