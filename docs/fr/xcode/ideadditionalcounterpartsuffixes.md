---
title: Ajouter des suffixes dans les Counterparts | Xcode
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
