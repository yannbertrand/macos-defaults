---
title: Set menubar digital clock format | Menu Bar
meta:
  - property: 'og:title'
    content: macOS defaults > Menu Bar > Set menubar digital clock format
  - name: 'description'
    content: "This setting configures the time and date format for the menubar digital clock.\nAccepted values depend on your Language & Region settings.\n\n- `ss` for seconds.\n- `HH` for 24-hour clock.\n- `EEE` for 3-letter day of the week.\n- `d MMM` for day of the month and 3-letter month.\n"
  - property: 'og:description'
    content: "This setting configures the time and date format for the menubar digital clock.\nAccepted values depend on your Language & Region settings.\n\n- `ss` for seconds.\n- `HH` for 24-hour clock.\n- `EEE` for 3-letter day of the week.\n- `d MMM` for day of the month and 3-letter month.\n"
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Set menubar digital clock format

This setting configures the time and date format for the menubar digital clock.
Accepted values depend on your Language & Region settings.

- `ss` for seconds.
- `HH` for 24-hour clock.
- `EEE` for 3-letter day of the week.
- `d MMM` for day of the month and 3-letter month.

<!-- break lists -->

- **Tested on macOS**:
  - Monterey
  - Big Sur
  - Catalina
- **Parameter type**: string

## Set to `"EEE d MMM HH:mm:ss"`

Thu 18 Aug 21:46:18

```bash
defaults write com.apple.menuextra.clock "DateFormat" -string "\"EEE d MMM HH:mm:ss\""
```

<video autoplay loop muted playsinline width="727" height="40" style="max-width: 100%; height: auto">
  <source src="./images/DateFormat/EEE_d_MMM_HH.mm.ss.mp4" type="video/mp4">
  Example output with value set to "EEE d MMM HH:mm:ss"
</video>

## Set to `"EEE h:mm:ss"`

Thu 9:46:18

```bash
defaults write com.apple.menuextra.clock "DateFormat" -string "\"EEE h:mm:ss\""
```

<video autoplay loop muted playsinline width="727" height="40" style="max-width: 100%; height: auto">
  <source src="./images/DateFormat/EEE_h.mm.ss.mp4" type="video/mp4">
  Example output with value set to "EEE h:mm:ss"
</video>

## Set to `"EEE HH:mm:ss"`

Thu 21:46:18

```bash
defaults write com.apple.menuextra.clock "DateFormat" -string "\"EEE HH:mm:ss\""
```

<video autoplay loop muted playsinline width="727" height="40" style="max-width: 100%; height: auto">
  <source src="./images/DateFormat/EEE_HH.mm.ss.mp4" type="video/mp4">
  Example output with value set to "EEE HH:mm:ss"
</video>

## Read current value

```bash
defaults read com.apple.menuextra.clock "DateFormat"
```

## Reset to default value

```bash
defaults delete com.apple.menuextra.clock "DateFormat"
```
