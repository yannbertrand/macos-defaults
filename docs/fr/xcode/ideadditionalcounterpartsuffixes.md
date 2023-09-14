---
title: Ajouter des suffixes dans les Counterparts | Xcode
meta:
  - property: 'og:title'
    content: macOS defaults > Xcode > Ajouter des suffixes dans les Counterparts
  - name: 'description'
    content: 'Ajouter des suffixes supplémentaires que Xcode place dans le menu &quot;Related Items > Counterparts&quot;.'
  - property: 'og:description'
    content: 'Ajouter des suffixes supplémentaires que Xcode place dans le menu &quot;Related Items > Counterparts&quot;.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Ajouter des suffixes dans les Counterparts

Ajouter des suffixes supplémentaires que Xcode place dans le menu "Related Items > Counterparts".

<!-- break lists -->

- **Testé sur macOS**:
  - Catalina
- **Type de paramètre**: array

## Avec la valeur `ViewModel,View`

Ajoute les suffixes "ViewModel" et "View" (pratique pour les architectures Model-View-ViewModel (MVVM)).

```bash
defaults write com.apple.dt.Xcode "IDEAdditionalCounterpartSuffixes" -array-add "ViewModel" "View" && killall Xcode
```

## Avec la valeur `Router,Interactor,Builder`

Ajoute les suffixes "Router", "Interactor" et "Builder" (pratique pour les architectures RIB).

```bash
defaults write com.apple.dt.Xcode "IDEAdditionalCounterpartSuffixes" -array-add "Router" "Interactor" "Builder" && killall Xcode
```

## Lire la valeur courante

```bash
defaults read com.apple.dt.Xcode "IDEAdditionalCounterpartSuffixes"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.dt.Xcode "IDEAdditionalCounterpartSuffixes" && killall Xcode
```
