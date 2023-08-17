---
metaTitle: Path bar | Finder | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Finder > Path bar
  - name: 'description'
    content: 'Show path bar in the bottom of the Finder windows'
  - property: 'og:description'
    content: 'Show path bar in the bottom of the Finder windows'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Path bar

Show path bar in the bottom of the Finder windows

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `true`

Show path bar

```bash
defaults write com.apple.finder "ShowPathbar" -bool "true" && killall Finder
```

<img
  src="../../images/finder/ShowPathbar/true.png"
  alt="Example output with value set to true"
  width="740" height="451" style="height: auto"
/>

## Set to `false` (default value)

Hide path bar

```bash
defaults write com.apple.finder "ShowPathbar" -bool "false" && killall Finder
```

<img
  src="../../images/finder/ShowPathbar/false.png"
  alt="Example output with value set to false"
  width="740" height="451" style="height: auto"
/>

## Read current value

```bash
defaults read com.apple.finder "ShowPathbar"
```

## Reset to default value

```bash
defaults delete com.apple.finder "ShowPathbar" && killall Finder
```
