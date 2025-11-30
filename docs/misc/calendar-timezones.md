---
title: Clear recently used time zones in Calendar | Miscellaneous
description: Clear all recently used time zones from the time zone selector in Calendar when time zone support is enabled (Calendar → Settings → Advanced → Turn on time zone support).
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Miscellaneous > Clear recently used time zones in Calendar
  - - meta
    - property: 'og:description'
      content: Clear all recently used time zones from the time zone selector in Calendar when time zone support is enabled (Calendar → Settings → Advanced → Turn on time zone support).
---

# Clear recently used time zones in Calendar

Clear all recently used time zones from the time zone selector in Calendar when time zone support is enabled (Calendar → Settings → Advanced → Turn on time zone support).

- **Tested on macOS**:
  - Sequoia
- **Parameter type**: N/A

## Read current value

```bash
defaults read com.apple.iCal "RecentlyUsedTimeZones"
```

## Reset to default value

Clear recently used time zones.

```bash
defaults delete com.apple.iCal "RecentlyUsedTimeZones"
```
