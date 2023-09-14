---
title: Set screenshot location | Simulator
meta:
  - property: 'og:title'
    content: macOS defaults > Simulator > Set screenshot location
  - name: 'description'
    content: "Set default location for Simulator screenshots.\n\nNote that the folder has to exist in the filesystem.\n"
  - property: 'og:description'
    content: "Set default location for Simulator screenshots.\n\nNote that the folder has to exist in the filesystem.\n"
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Set screenshot location

Set default location for Simulator screenshots.

Note that the folder has to exist in the filesystem.

<!-- break lists -->

- **Tested on macOS**:
  - Catalina
- **Parameter type**: string

## Set to `~/Pictures/Screenshots` (default value)

```bash
defaults write com.apple.iphonesimulator "ScreenShotSaveLocation" -string "~/Pictures/Screenshots"
```

## Set to `~/Pictures/Simulator Screenshots`

```bash
defaults write com.apple.iphonesimulator "ScreenShotSaveLocation" -string "~/Pictures/Simulator Screenshots"
```

## Read current value

```bash
defaults read com.apple.iphonesimulator "ScreenShotSaveLocation"
```

## Reset to default value

```bash
defaults delete com.apple.iphonesimulator "ScreenShotSaveLocation"
```
