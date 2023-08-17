---
metaTitle: External disks | Desktop | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Desktop > External disks
  - name: 'description'
    content: 'Hide external disks on desktop'
  - property: 'og:description'
    content: 'Hide external disks on desktop'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# External disks

Hide external disks on desktop

<!-- break lists -->

- **Tested on macOS**:
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `false`

Hide external disks

```bash
defaults write com.apple.finder "ShowExternalHardDrivesOnDesktop" -bool "false" && killall Finder
```

## Set to `true` (default value)

Show external disks

```bash
defaults write com.apple.finder "ShowExternalHardDrivesOnDesktop" -bool "true" && killall Finder
```

## Read current value

```bash
defaults read com.apple.finder "ShowExternalHardDrivesOnDesktop"
```

## Reset to default value

```bash
defaults delete com.apple.finder "ShowExternalHardDrivesOnDesktop" && killall Finder
```
