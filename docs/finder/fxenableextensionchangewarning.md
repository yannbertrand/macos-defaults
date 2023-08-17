---
metaTitle: Changing file extension warning | Finder | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Finder > Changing file extension warning
  - name: "description"
    content: "Choose whether to display a warning when changing a file extension."
  - property: "og:description"
    content: "Choose whether to display a warning when changing a file extension."
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Changing file extension warning

Choose whether to display a warning when changing a file extension.

<!-- break lists -->

- **Tested on macOS**:
  * Ventura
  * Monterey
  * Big Sur
  * Catalina
  * Mojave
- **Parameter type**: bool

## Set to `true` (default value)

Display a warning when changing a file extension in the Finder

```bash
defaults write com.apple.finder "FXEnableExtensionChangeWarning" -bool "true" && killall Finder
```
<video autoplay loop muted playsinline width="739" height="416" style="max-width: 100%; height: auto">
  <source src="./finder-FXEnableExtensionChangeWarning-true.mp4" type="video/mp4">
  Example output with value set to true
</video>

## Set to `false`

Do not display the warning

```bash
defaults write com.apple.finder "FXEnableExtensionChangeWarning" -bool "false" && killall Finder
```
<video autoplay loop muted playsinline width="739" height="416" style="max-width: 100%; height: auto">
  <source src="./finder-FXEnableExtensionChangeWarning-false.mp4" type="video/mp4">
  Example output with value set to false
</video>

## Read current value
```bash
defaults read com.apple.finder "FXEnableExtensionChangeWarning"
```

## Reset to default value
```bash
defaults delete com.apple.finder "FXEnableExtensionChangeWarning" && killall Finder
```
