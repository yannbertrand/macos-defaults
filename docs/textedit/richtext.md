---
metaTitle: Set default document format | TextEdit | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > TextEdit > Set default document format
  - name: 'description'
    content: 'Set default document format as rich text (.rtf) or plain text (.txt).'
  - property: 'og:description'
    content: 'Set default document format as rich text (.rtf) or plain text (.txt).'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Set default document format

Set default document format as rich text (.rtf) or plain text (.txt).

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `true` (default value)

Rich text is enabled.

```bash
defaults write com.apple.TextEdit "RichText" -bool "true" && killall TextEdit
```

<img
  src="./textedit-RichText-true.png"
  alt="Example output with value set to true"
  width="740" height="451" style="height: auto"
/>

## Set to `false`

Rich text is disabled.

```bash
defaults write com.apple.TextEdit "RichText" -bool "false" && killall TextEdit
```

<img
  src="./textedit-RichText-false.png"
  alt="Example output with value set to false"
  width="740" height="451" style="height: auto"
/>

## Read current value

```bash
defaults read com.apple.TextEdit "RichText"
```

## Reset to default value

```bash
defaults delete com.apple.TextEdit "RichText" && killall TextEdit
```
