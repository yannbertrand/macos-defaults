---
title: Add Additional Counterpart Suffixes | Xcode
description: Add additional counterpart suffixes that Xcode should consider in the "Related Items > Counterparts" menu.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Xcode > Add Additional Counterpart Suffixes
  - - meta
    - property: 'og:description'
      content: Add additional counterpart suffixes that Xcode should consider in the "Related Items > Counterparts" menu.
---

# Add Additional Counterpart Suffixes

Add additional counterpart suffixes that Xcode should consider in the "Related Items > Counterparts" menu.

<!-- break lists -->

- **Tested on macOS**:
  - Catalina
- **Parameter type**: array

## Add "ViewModel" and "View"

Add the "ViewModel" and "View" counterpart suffixes (Useful for Model-View-ViewModel (MVVM) architectures).

```bash
defaults write com.apple.dt.Xcode "IDEAdditionalCounterpartSuffixes" -array-add "ViewModel" "View" && killall Xcode
```

## Add "Router", "Interactor" and "Builder"

Add the "Router", "Interactor" and "Builder" counterpart suffixes (Useful for RIB architectures).

```bash
defaults write com.apple.dt.Xcode "IDEAdditionalCounterpartSuffixes" -array-add "Router" "Interactor" "Builder" && killall Xcode
```

## Read current value

```bash
defaults read com.apple.dt.Xcode "IDEAdditionalCounterpartSuffixes"
```

## Reset to default value

```bash
defaults delete com.apple.dt.Xcode "IDEAdditionalCounterpartSuffixes" && killall Xcode
```
