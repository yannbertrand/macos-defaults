---
metaTitle: Quit | Finder | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Finder > Quit
  - name: 'description'
    content: 'Add a quit option to the Finder. Behaves strangely when activated, would not recommend.'
  - property: 'og:description'
    content: 'Add a quit option to the Finder. Behaves strangely when activated, would not recommend.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Quit

Add a quit option to the Finder. Behaves strangely when activated, would not recommend.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: bool

## Set to `false` (default value)

Hide the Finder "Quit" option

```bash
defaults write com.apple.finder "QuitMenuItem" -bool "false" && killall Finder
```

## Set to `true`

Display the Finder "Quit" option

```bash
defaults write com.apple.finder "QuitMenuItem" -bool "true" && killall Finder
```

## Read current value

```bash
defaults read com.apple.finder "QuitMenuItem"
```

## Reset to default value

```bash
defaults delete com.apple.finder "QuitMenuItem" && killall Finder
```
