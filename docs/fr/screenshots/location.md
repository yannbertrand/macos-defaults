---
title: Emplacement | Capture d'écran
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Emplacement

Préciser l'emplacement par défaut des captures.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: string

## Avec la valeur `~/Desktop` (par défaut)

```bash
defaults write com.apple.screencapture "location" -string "~/Desktop" && killall SystemUIServer
```

## Avec la valeur `~/Pictures`

```bash
defaults write com.apple.screencapture "location" -string "~/Pictures" && killall SystemUIServer
```

## Lire la valeur courante

```bash
defaults read com.apple.screencapture "location"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.screencapture "location" && killall SystemUIServer
```
