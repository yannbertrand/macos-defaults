---
title: Show extensions | Finder
meta:
  - property: 'og:title'
    content: macOS defaults > Finder > Show extensions
  - name: 'description'
    content: 'Show all file extensions in the Finder.'
  - property: 'og:description'
    content: 'Show all file extensions in the Finder.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Show extensions

Show all file extensions in the Finder.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: bool

## Set to `false` (default value)

Do not show all file extensions inside the Finder

```bash
defaults write NSGlobalDomain "AppleShowAllExtensions" -bool "false" && killall Finder
```

## Set to `true`

Show all file extensions inside the Finder

```bash
defaults write NSGlobalDomain "AppleShowAllExtensions" -bool "true" && killall Finder
```

## Read current value

```bash
defaults read NSGlobalDomain "AppleShowAllExtensions"
```

## Reset to default value

```bash
defaults delete NSGlobalDomain "AppleShowAllExtensions" && killall Finder
```
