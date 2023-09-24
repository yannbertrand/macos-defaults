---
title: Autogather | Feedback Assistant
description: Choose whether to autogather large files when submitting a feedback report. Can result in a slow Mac and important upload metrics.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Feedback Assistant > Autogather
  - - meta
    - property: 'og:description'
      content: Choose whether to autogather large files when submitting a feedback report. Can result in a slow Mac and important upload metrics.
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
