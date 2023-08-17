---
metaTitle: Add Additional Counterpart Suffixes | Xcode | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Xcode > Add Additional Counterpart Suffixes
  - name: 'description'
    content: 'Add additional counterpart suffixes that Xcode should consider in the &quot;Related Items > Counterparts&quot; menu.'
  - property: 'og:description'
    content: 'Add additional counterpart suffixes that Xcode should consider in the &quot;Related Items > Counterparts&quot; menu.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
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
