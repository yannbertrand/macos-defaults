---
title: Digital clock format | Menu Bar
description: This setting configures the time and date format for the Menu Bar digital clock.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Menu Bar > Set digital clock format
  - - meta
    - property: 'og:description'
      content: This setting configures the time and date format for the Menu Bar digital clock.
---

# Digital clock format

This setting configures the time and date format for the Menu Bar digital clock.
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
