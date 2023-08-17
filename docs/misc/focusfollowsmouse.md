---
metaTitle: Focus Follows Mouse | Miscellaneous | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Miscellaneous > Focus Follows Mouse
  - name: "description"
    content: "Focus of the Terminal windows when the mouse cursor hovers over them.\nThe focus change only works between the Terminal windows.\n"
  - property: "og:description"
    content: "Focus of the Terminal windows when the mouse cursor hovers over them.\nThe focus change only works between the Terminal windows.\n"
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Focus Follows Mouse

Focus of the Terminal windows when the mouse cursor hovers over them.
The focus change only works between the Terminal windows.


<!-- break lists -->

- **Tested on macOS**:
  * Ventura
  * Monterey
- **Parameter type**: bool

## Set to `false` (default value)

By default, to switch between Terminal windows you should click on it or press on <code>cmd + `</code>.

```bash
defaults write com.apple.Terminal "FocusFollowsMouse" -bool "false" && killall Terminal
```
<video autoplay loop muted playsinline width="739" height="416" style="max-width: 100%; height: auto">
  <source src="./misc-FocusFollowsMouse-false.mp4" type="video/mp4">
  Example output with value set to false
</video>

## Set to `true`

Focus follows the mouse cursor to any Terminal windows.

```bash
defaults write com.apple.Terminal "FocusFollowsMouse" -bool "true" && killall Terminal
```
<video autoplay loop muted playsinline width="739" height="416" style="max-width: 100%; height: auto">
  <source src="./misc-FocusFollowsMouse-true.mp4" type="video/mp4">
  Example output with value set to true
</video>

## Read current value
```bash
defaults read com.apple.Terminal "FocusFollowsMouse"
```

## Reset to default value
```bash
defaults delete com.apple.Terminal "FocusFollowsMouse" && killall Terminal
```
