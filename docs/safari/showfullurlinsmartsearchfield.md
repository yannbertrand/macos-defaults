---
metaTitle: Show full URL | Safari | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Safari > Show full URL
  - name: "description"
    content: "Show full website address."
  - property: "og:description"
    content: "Show full website address."
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Show full URL

Show full website address.

<!-- break lists -->

- **Tested on macOS**:
  * Monterey
- **Parameter type**: bool

## Set to `true`

Show full website URL

```bash
defaults write com.apple.Safari "ShowFullURLInSmartSearchField" -bool "true" && killall Safari
```
<img
  src="./safari-ShowFullURLInSmartSearchField-true.png"
  alt="Example output with value set to true"
  width="740" height="207" style="height: auto"
/>

## Set to `false` (default value)

Don't show full website URL

```bash
defaults write com.apple.Safari "ShowFullURLInSmartSearchField" -bool "false" && killall Safari
```
<img
  src="./safari-ShowFullURLInSmartSearchField-false.png"
  alt="Example output with value set to false"
  width="740" height="207" style="height: auto"
/>

## Read current value
```bash
defaults read com.apple.Safari "ShowFullURLInSmartSearchField"
```

## Reset to default value
```bash
defaults delete com.apple.Safari "ShowFullURLInSmartSearchField" && killall Safari
```
