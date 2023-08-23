---
metaTitle: Show recents | Dock | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Dock > Show recents
  - name: 'description'
    content: 'Show recently used apps in a separate section of the Dock.'
  - property: 'og:description'
    content: 'Show recently used apps in a separate section of the Dock.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Show recents

Show recently used apps in a separate section of the Dock.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: bool

## Set to `true` (default value)

Display recent apps in the Dock

```bash
defaults write com.apple.dock "show-recents" -bool "true" && killall Dock
```

<img
  src="./images/show-recents/true.png"
  alt="Example output with value set to true"
  width="740" height="82" style="height: auto"
/>

## Set to `false`

Do not display recent apps in the Dock

```bash
defaults write com.apple.dock "show-recents" -bool "false" && killall Dock
```

<img
  src="./images/show-recents/false.png"
  alt="Example output with value set to false"
  width="740" height="82" style="height: auto"
/>

## Read current value

```bash
defaults read com.apple.dock "show-recents"
```

## Reset to default value

```bash
defaults delete com.apple.dock "show-recents" && killall Dock
```
