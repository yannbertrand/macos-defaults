---
metaTitle: Click weight (threshold) | Trackpad | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Trackpad > Click weight (threshold)
  - name: 'description'
    content: 'Choose between Light/Medium/Firm.'
  - property: 'og:description'
    content: 'Choose between Light/Medium/Firm.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Click weight (threshold)

Choose between Light/Medium/Firm.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
- **Parameter type**: int
  - 0
  - 1
  - 2

## Set to `0`

Light

```bash
defaults write com.apple.AppleMultitouchTrackpad "FirstClickThreshold" -int "0"
```

## Set to `1` (default value)

Medium

```bash
defaults write com.apple.AppleMultitouchTrackpad "FirstClickThreshold" -int "1"
```

## Set to `2`

Firm

```bash
defaults write com.apple.AppleMultitouchTrackpad "FirstClickThreshold" -int "2"
```

## Read current value

```bash
defaults read com.apple.AppleMultitouchTrackpad "FirstClickThreshold"
```

## Reset to default value

```bash
defaults delete com.apple.AppleMultitouchTrackpad "FirstClickThreshold"
```
