---
metaTitle: Connected servers | Desktop | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Desktop > Connected servers
  - name: "description"
    content: "Show connected servers on desktop"
  - property: "og:description"
    content: "Show connected servers on desktop"
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Connected servers

Show connected servers on desktop

<!-- break lists -->

- **Tested on macOS**:
  * Monterey
  * Big Sur
- **Parameter type**: bool

## Set to `true`

Show connected servers

```bash
defaults write com.apple.finder "ShowMountedServersOnDesktop" -bool "true" && killall Finder
```

## Set to `false` (default value)

Hide connected servers

```bash
defaults write com.apple.finder "ShowMountedServersOnDesktop" -bool "false" && killall Finder
```

## Read current value
```bash
defaults read com.apple.finder "ShowMountedServersOnDesktop"
```

## Reset to default value
```bash
defaults delete com.apple.finder "ShowMountedServersOnDesktop" && killall Finder
```
