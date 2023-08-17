---
metaTitle: Disks | Desktop | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Desktop > Disks
  - name: 'description'
    content: 'Show hard disks on desktop'
  - property: 'og:description'
    content: 'Show hard disks on desktop'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Disks

Show hard disks on desktop

<!-- break lists -->

- **Tested on macOS**:
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `true`

Show hard disks

```bash
defaults write com.apple.finder "ShowHardDrivesOnDesktop" -bool "true" && killall Finder
```

## Set to `false` (default value)

Hide hard disks

```bash
defaults write com.apple.finder "ShowHardDrivesOnDesktop" -bool "false" && killall Finder
```

## Read current value

```bash
defaults read com.apple.finder "ShowHardDrivesOnDesktop"
```

## Reset to default value

```bash
defaults delete com.apple.finder "ShowHardDrivesOnDesktop" && killall Finder
```
