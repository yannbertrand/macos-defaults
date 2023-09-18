---
title: Toutes les icônes | Bureau
---

# Toutes les icônes

Masquer toutes les icônes du bureau.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
- **Type de paramètre**: bool

## Avec la valeur `false`

Masque toutes les icônes

```bash
defaults write com.apple.finder "CreateDesktop" -bool "false" && killall Finder
```

## Avec la valeur `true` (par défaut)

Affiche toutes les icônes

```bash
defaults write com.apple.finder "CreateDesktop" -bool "true" && killall Finder
```

## Lire la valeur courante

```bash
defaults read com.apple.finder "CreateDesktop"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.finder "CreateDesktop" && killall Finder
```
