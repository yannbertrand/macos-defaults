---
metaTitle: Group windows by application | Mission Control | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Mission Control > Group windows by application
  - name: "description"
    content: "If you have several windows from multiple apps open simultaneously, have the windows organised by app in\nMission Control.\n"
  - property: "og:description"
    content: "If you have several windows from multiple apps open simultaneously, have the windows organised by app in\nMission Control.\n"
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Group windows by application

If you have several windows from multiple apps open simultaneously, have the windows organised by app in
Mission Control.


<!-- break lists -->

- **Tested on macOS**:
  * Ventura
  * Big Sur
- **Parameter type**: bool

## Set to `true`

Group windows by application.

```bash
defaults write com.apple.dock "expose-group-apps" -bool "true" && killall Dock
```
<img
  src="./mission-control-expose-group-apps-true.png"
  alt="Example output with value set to true"
  width="740" height="416" style="height: auto"
/>

## Set to `false` (default value)

Do not group windows by application.

```bash
defaults write com.apple.dock "expose-group-apps" -bool "false" && killall Dock
```
<img
  src="./mission-control-expose-group-apps-false.png"
  alt="Example output with value set to false"
  width="740" height="416" style="height: auto"
/>

## Read current value
```bash
defaults read com.apple.dock "expose-group-apps"
```

## Reset to default value
```bash
defaults delete com.apple.dock "expose-group-apps" && killall Dock
```
