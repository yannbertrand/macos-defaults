---
metaTitle: Switch to Space with open windows | Mission Control | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Mission Control > Switch to Space with open windows
  - name: 'description'
    content: 'When switching to an app, switch to a space with open windows for this app.'
  - property: 'og:description'
    content: 'When switching to an app, switch to a space with open windows for this app.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Switch to Space with open windows

When switching to an app, switch to a space with open windows for this app.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Big Sur
- **Parameter type**: bool

## Set to `true` (default value)

Switch to a Space with open windows for the application.

```bash
defaults write NSGlobalDomain "AppleSpacesSwitchOnActivate" -bool "true" && killall Dock
```

## Set to `false`

Do not switch to a Space with open windows for the application.

```bash
defaults write NSGlobalDomain "AppleSpacesSwitchOnActivate" -bool "false" && killall Dock
```

## Read current value

```bash
defaults read NSGlobalDomain "AppleSpacesSwitchOnActivate"
```

## Reset to default value

```bash
defaults delete NSGlobalDomain "AppleSpacesSwitchOnActivate" && killall Dock
```
