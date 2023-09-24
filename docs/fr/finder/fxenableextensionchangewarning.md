---
title: Alerte au changement d'extension | Finder
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Alerte au changement d'extension

Choisir si il faut afficher une alerte au changement de format de fichier ou non.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: bool

## Avec la valeur `true` (par défaut)

Afficher une alerte au changement de format de fichier

```bash
defaults write com.apple.finder "FXEnableExtensionChangeWarning" -bool "true" && killall Finder
```

<video autoplay loop muted playsinline width="739" height="416" style="max-width: 100%; height: auto">
  <source src="../../finder/images/FXEnableExtensionChangeWarning/true.mp4" type="video/mp4">
  Exemple avec la valeur true
</video>

## Avec la valeur `false`

Ne pas afficher d'alerte au changement

```bash
defaults write com.apple.finder "FXEnableExtensionChangeWarning" -bool "false" && killall Finder
```

<video autoplay loop muted playsinline width="739" height="416" style="max-width: 100%; height: auto">
  <source src="../../finder/images/FXEnableExtensionChangeWarning/false.mp4" type="video/mp4">
  Exemple avec la valeur false
</video>

## Lire la valeur courante

```bash
defaults read com.apple.finder "FXEnableExtensionChangeWarning"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.finder "FXEnableExtensionChangeWarning" && killall Finder
```
