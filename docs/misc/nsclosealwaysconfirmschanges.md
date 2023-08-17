---
metaTitle: Close confirm changes popup | Miscellaneous | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Miscellaneous > Close confirm changes popup
  - name: "description"
    content: "Should you be asked to keep changes when closing documents or just have changes saved automatically.\nRequires closing and opening the app before working. Tested on Apple Preview.\n"
  - property: "og:description"
    content: "Should you be asked to keep changes when closing documents or just have changes saved automatically.\nRequires closing and opening the app before working. Tested on Apple Preview.\n"
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Close confirm changes popup

Should you be asked to keep changes when closing documents or just have changes saved automatically.
Requires closing and opening the app before working. Tested on Apple Preview.


<!-- break lists -->

- **Tested on macOS**:
  * Ventura
  * Monterey
- **Parameter type**: bool

## Set to `true` (default value)

Auto saving is enabled, you are not prompted to save changes.

```bash
defaults write NSGlobalDomain "NSCloseAlwaysConfirmsChanges" -bool "true" 
```

## Set to `false`

Auto saving is disabled, you are prompted if you want to save changes.

```bash
defaults write NSGlobalDomain "NSCloseAlwaysConfirmsChanges" -bool "false" 
```

## Read current value
```bash
defaults read NSGlobalDomain "NSCloseAlwaysConfirmsChanges"
```

## Reset to default value
```bash
defaults delete NSGlobalDomain "NSCloseAlwaysConfirmsChanges"
```
