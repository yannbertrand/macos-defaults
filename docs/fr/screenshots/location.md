---
title: Emplacement | Capture d'écran
---

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
