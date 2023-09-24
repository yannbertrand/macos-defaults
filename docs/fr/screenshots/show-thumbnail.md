---
title: Afficher la vignette | Capture d'écran
---

# Afficher la vignette

Afficher ou non la vignette après avoir fait une capture.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
- **Type de paramètre**: bool

## Avec la valeur `true` (par défaut)

Afficher la vignette après avoir fait une capture

```bash
defaults write com.apple.screencapture "show-thumbnail" -bool "true"
```

## Avec la valeur `false`

Ne pas afficher la vignette

```bash
defaults write com.apple.screencapture "show-thumbnail" -bool "false"
```

## Lire la valeur courante

```bash
defaults read com.apple.screencapture "show-thumbnail"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.screencapture "show-thumbnail"
```
