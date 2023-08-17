---
metaTitle: Dock Icon type | Activity Monitor | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Activity Monitor > Dock Icon type
  - name: 'description'
    content: "Choose what information should be shown in the app's Dock icon, if any."
  - property: 'og:description'
    content: "Choose what information should be shown in the app's Dock icon, if any."
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Dock Icon type

Choose what information should be shown in the app's Dock icon, if any.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
- **Parameter type**: int
  - 0
  - 2
  - 3
  - 5
  - 6

## Set to `0` (default value)

Just show the App's regular icon.

```bash
defaults write com.apple.ActivityMonitor "IconType" -int "0" && killall Activity\ Monitor
```

## Set to `2`

Show Network usage over time, as two mirrored line graphs.
The top (blue) chart shows down-stream traffic.
The bottom (red) chart shows up-stream traffic.

```bash
defaults write com.apple.ActivityMonitor "IconType" -int "2" && killall Activity\ Monitor
```

## Set to `3`

Show Disk usage over time, as two mirrored line graphs.
The top (blue) chart shows disk read traffic.
The bottom (red) chart shows disk write traffic.

```bash
defaults write com.apple.ActivityMonitor "IconType" -int "3" && killall Activity\ Monitor
```

## Set to `5`

Show the current CPU usages, as a verticle meter.

```bash
defaults write com.apple.ActivityMonitor "IconType" -int "5" && killall Activity\ Monitor
```

## Set to `6`

Show CPU usage history, graphed over time.
If your device has 4 threads or less, it'll show one graph per thread, all stacked vertically.
If you have more than 4 threads, then only one bar graph will be shown, for the total CPU usage.

```bash
defaults write com.apple.ActivityMonitor "IconType" -int "6" && killall Activity\ Monitor
```

## Read current value

```bash
defaults read com.apple.ActivityMonitor "IconType"
```

## Reset to default value

```bash
defaults delete com.apple.ActivityMonitor "IconType" && killall Activity\ Monitor
```
