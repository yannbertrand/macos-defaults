---
metaTitle: Default search scope | Finder | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Finder > Default search scope
  - name: "description"
    content: "Set the default search scope when performing a search"
  - property: "og:description"
    content: "Set the default search scope when performing a search"
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Default search scope

Set the default search scope when performing a search

<!-- break lists -->

- **Tested on macOS**:
  * Ventura
  * Monterey
  * Big Sur
- **Parameter type**: string

## Set to `SCcf`

Search the current folder

```bash
defaults write com.apple.finder "FXDefaultSearchScope" -string "SCcf" && killall Finder
```

## Set to `SCsp`

Use the previous search scope

```bash
defaults write com.apple.finder "FXDefaultSearchScope" -string "SCsp" && killall Finder
```

## Set to `SCev` (default value)

Search this Mac

```bash
defaults write com.apple.finder "FXDefaultSearchScope" -string "SCev" && killall Finder
```

## Read current value
```bash
defaults read com.apple.finder "FXDefaultSearchScope"
```

## Reset to default value
```bash
defaults delete com.apple.finder "FXDefaultSearchScope" && killall Finder
```
