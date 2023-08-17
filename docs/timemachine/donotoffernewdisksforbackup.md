---
metaTitle: Don't offer new disks for Time Machine backup | Time Machine | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Time Machine > Don't offer new disks for Time Machine backup
  - name: "description"
    content: "Prevent Time Machine from prompting to use newly connected storage as backup volumes."
  - property: "og:description"
    content: "Prevent Time Machine from prompting to use newly connected storage as backup volumes."
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Don't offer new disks for Time Machine backup

Prevent Time Machine from prompting to use newly connected storage as backup volumes.

<!-- break lists -->

- **Tested on macOS**:
  * Catalina
- **Parameter type**: bool

## Set to `false` (default value)

When a new disk is connected, system prompts to ask if you want to use it as a backup volume.

```bash
defaults write com.apple.TimeMachine "DoNotOfferNewDisksForBackup" -bool "false" 
```

## Set to `true`

When a new disk is connected, system does not prompt to ask if you want to use it as a backup volume.

```bash
defaults write com.apple.TimeMachine "DoNotOfferNewDisksForBackup" -bool "true" 
```

## Read current value
```bash
defaults read com.apple.TimeMachine "DoNotOfferNewDisksForBackup"
```

## Reset to default value
```bash
defaults delete com.apple.TimeMachine "DoNotOfferNewDisksForBackup"
```
