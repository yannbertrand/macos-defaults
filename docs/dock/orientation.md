---
metaTitle: Position | Dock | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Dock > Position
  - name: "description"
    content: "Set the Dock position"
  - property: "og:description"
    content: "Set the Dock position"
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Position

Set the Dock position

<!-- break lists -->

- **Tested on macOS**:
  * Ventura
  * Monterey
  * Big Sur
  * Catalina
  * Mojave
- **Parameter type**: string
  * left
  * bottom
  * right

## Set to `left`

Put the Dock on the left of the screen

```bash
defaults write com.apple.dock "orientation" -string "left" && killall Dock
```
<img
  src="./dock-orientation-left.png"
  alt="Example output with value set to left"
  width="740" height="463" style="height: auto"
/>

## Set to `bottom` (default value)

Put the Dock on the bottom of the screen

```bash
defaults write com.apple.dock "orientation" -string "bottom" && killall Dock
```
<img
  src="./dock-orientation-bottom.png"
  alt="Example output with value set to bottom"
  width="740" height="463" style="height: auto"
/>

## Set to `right`

Put the Dock on the right of the screen

```bash
defaults write com.apple.dock "orientation" -string "right" && killall Dock
```
<img
  src="./dock-orientation-right.png"
  alt="Example output with value set to right"
  width="740" height="463" style="height: auto"
/>

## Read current value
```bash
defaults read com.apple.dock "orientation"
```

## Reset to default value
```bash
defaults delete com.apple.dock "orientation" && killall Dock
```
