---
metaTitle: Active applications only | Dock | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Dock > Active applications only
  - name: 'description'
    content: "Only show opened apps in Dock.\n\n⚠️ Beware this command empties your Dock.\n"
  - property: 'og:description'
    content: "Only show opened apps in Dock.\n\n⚠️ Beware this command empties your Dock.\n"
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Active applications only

Only show opened apps in Dock.

⚠️ Beware this command empties your Dock.

<!-- break lists -->

- **Tested on macOS**:
  - Monterey
- **Parameter type**: bool

## Set to `true`

Only show active apps

```bash
defaults write com.apple.dock "static-only" -bool "true" && killall Dock
```

## Set to `false` (default value)

Show apps pinned to the dock

```bash
defaults write com.apple.dock "static-only" -bool "false" && killall Dock
```

## Read current value

```bash
defaults read com.apple.dock "static-only"
```

## Reset to default value

```bash
defaults delete com.apple.dock "static-only" && killall Dock
```
