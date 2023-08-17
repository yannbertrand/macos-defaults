---
metaTitle: Autogather | Feedback Assistant | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Feedback Assistant > Autogather
  - name: 'description'
    content: "Choose whether to autogather large files when submitting a feedback report.\n\nCan result in a slow Mac and important upload metrics.\n"
  - property: 'og:description'
    content: "Choose whether to autogather large files when submitting a feedback report.\n\nCan result in a slow Mac and important upload metrics.\n"
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Autogather

Choose whether to autogather large files when submitting a feedback report.

Can result in a slow Mac and important upload metrics.

<!-- break lists -->

- **Tested on macOS**:
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `true` (default value)

Feedback Assistant gathers large files when submitting a report

```bash
defaults write com.apple.appleseed.FeedbackAssistant "Autogather" -bool "true"
```

## Set to `false`

Do not autogather large files when submitting a report

```bash
defaults write com.apple.appleseed.FeedbackAssistant "Autogather" -bool "false"
```

## Read current value

```bash
defaults read com.apple.appleseed.FeedbackAssistant "Autogather"
```

## Reset to default value

```bash
defaults delete com.apple.appleseed.FeedbackAssistant "Autogather"
```
