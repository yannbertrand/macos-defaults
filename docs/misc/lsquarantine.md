---
metaTitle: Disable application quarantine message | Miscellaneous | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Miscellaneous > Disable application quarantine message
  - name: "description"
    content: "Turn off the “Application Downloaded from Internet” quarantine warning.\n\n⚠️ Stopped working on Big Sur.\n"
  - property: "og:description"
    content: "Turn off the “Application Downloaded from Internet” quarantine warning.\n\n⚠️ Stopped working on Big Sur.\n"
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Disable application quarantine message

Turn off the “Application Downloaded from Internet” quarantine warning.

⚠️ Stopped working on Big Sur.


<!-- break lists -->

- **Tested on macOS**:
  * Catalina
- **Parameter type**: bool

## Set to `true` (default value)

"Application Downloaded from Internet" popup will display

```bash
defaults write com.apple.LaunchServices "LSQuarantine" -bool "true" 
```

## Set to `false`

"Application Downloaded from Internet" popup will not display

```bash
defaults write com.apple.LaunchServices "LSQuarantine" -bool "false" 
```

## Read current value
```bash
defaults read com.apple.LaunchServices "LSQuarantine"
```

## Reset to default value
```bash
defaults delete com.apple.LaunchServices "LSQuarantine"
```
