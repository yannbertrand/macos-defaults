---
title: Afficher la durée de build | Xcode
---

# Afficher la durée de build

Afficher la durée de build dans la toolbar en haut de la fenêtre d'Xcode

<!-- break lists -->

- **Testé sur macOS**:
  - Catalina
- **Type de paramètre**: bool

## Avec la valeur `true`

Afficher la durée de build dans la toolbar

```bash
defaults write com.apple.dt.Xcode "ShowBuildOperationDuration" -bool "true" && killall Xcode
```

## Avec la valeur `false` (par défaut)

Ne pas afficher la durée de build dans la toolbar

```bash
defaults write com.apple.dt.Xcode "ShowBuildOperationDuration" -bool "false" && killall Xcode
```

## Lire la valeur courante

```bash
defaults read com.apple.dt.Xcode "ShowBuildOperationDuration"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.dt.Xcode "ShowBuildOperationDuration" && killall Xcode
```
