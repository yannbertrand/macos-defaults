---
metaTitle: Set sidebar icon size | Finder | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Finder > Set sidebar icon size
  - name: "description"
    content: "Choose the size of Finder sidebar icons"
  - property: "og:description"
    content: "Choose the size of Finder sidebar icons"
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Set sidebar icon size

Choose the size of Finder sidebar icons

<!-- break lists -->

- **Tested on macOS**:
  * Ventura
  * Monterey
  * Big Sur
  * Catalina
- **Parameter type**: int

## Set to `1`

Small

```bash
defaults write NSGlobalDomain "NSTableViewDefaultSizeMode" -int "1" && killall Finder
```
<img
  src="./finder-NSTableViewDefaultSizeMode-1.png"
  alt="Example output with value set to 1"
  width="740" height="415" style="height: auto"
/>

## Set to `2` (default value)

Medium

```bash
defaults write NSGlobalDomain "NSTableViewDefaultSizeMode" -int "2" && killall Finder
```
<img
  src="./finder-NSTableViewDefaultSizeMode-2.png"
  alt="Example output with value set to 2"
  width="740" height="415" style="height: auto"
/>

## Set to `3`

Large

```bash
defaults write NSGlobalDomain "NSTableViewDefaultSizeMode" -int "3" && killall Finder
```
<img
  src="./finder-NSTableViewDefaultSizeMode-3.png"
  alt="Example output with value set to 3"
  width="740" height="415" style="height: auto"
/>

## Read current value
```bash
defaults read NSGlobalDomain "NSTableViewDefaultSizeMode"
```

## Reset to default value
```bash
defaults delete NSGlobalDomain "NSTableViewDefaultSizeMode" && killall Finder
```
