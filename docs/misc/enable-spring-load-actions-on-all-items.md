---
title: Enable spring loading for all Dock items | Miscellaneous
meta:
  - property: 'og:title'
    content: macOS defaults > Miscellaneous > Enable spring loading for all Dock items
  - name: 'description'
    content: 'Drag a file over an icon in the Dock, hover, and the application will open. The behaviour is unchanged if the app is already open. This behaviour has been observed with Preview, Quicktime, and iWork (Keynote, Pages, Numbers).'
  - property: 'og:description'
    content: 'Drag a file over an icon in the Dock, hover, and the application will open. The behaviour is unchanged if the app is already open. This behaviour has been observed with Preview, Quicktime, and iWork (Keynote, Pages, Numbers).'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Enable spring loading for all Dock items

Drag a file over an icon in the Dock, hover, and the application will open. The behaviour is unchanged if the app is already open. This behaviour has been observed with Preview, Quicktime, and iWork (Keynote, Pages, Numbers).

<!-- break lists -->

- **Tested on macOS**:
  - Monterey
  - Big Sur
  - Catalina
- **Parameter type**: bool

## Set to `false` (default value)

Spring loading is disabled for Dock items.

```bash
defaults write com.apple.dock "enable-spring-load-actions-on-all-items" -bool "false" && killall Dock
```

## Set to `true`

Spring loading is enabled for Dock items.

```bash
defaults write com.apple.dock "enable-spring-load-actions-on-all-items" -bool "true" && killall Dock
```

## Read current value

```bash
defaults read com.apple.dock "enable-spring-load-actions-on-all-items"
```

## Reset to default value

```bash
defaults delete com.apple.dock "enable-spring-load-actions-on-all-items" && killall Dock
```
