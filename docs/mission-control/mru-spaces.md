---
metaTitle: Rearrange automatically | Mission Control | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Mission Control > Rearrange automatically
  - name: 'description'
    content: 'Choose whether to rearrange Spaces automatically.'
  - property: 'og:description'
    content: 'Choose whether to rearrange Spaces automatically.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Rearrange automatically

Choose whether to rearrange Spaces automatically.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: bool

## Set to `true` (default value)

Do reorder Spaces based on most recent use

```bash
defaults write com.apple.dock "mru-spaces" -bool "true" && killall Dock
```

## Set to `false`

Keep the Spaces arrangement

```bash
defaults write com.apple.dock "mru-spaces" -bool "false" && killall Dock
```

## Read current value

```bash
defaults read com.apple.dock "mru-spaces"
```

## Reset to default value

```bash
defaults delete com.apple.dock "mru-spaces" && killall Dock
```
