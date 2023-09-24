---
title: Supports amovibles | Bureau
---

# Supports amovibles

Masquer les supports amovibles _(CDs, DVDs et iPods)_ du bureau.

<!-- break lists -->

- **Testé sur macOS**:
  - Monterey
  - Big Sur
- **Type de paramètre**: bool

## Avec la valeur `false`

Masque supports amovibles

```bash
defaults write com.apple.finder "ShowRemovableMediaOnDesktop" -bool "false" && killall Finder
```

## Avec la valeur `true` (par défaut)

Affiche supports amovibles

```bash
defaults write com.apple.finder "ShowRemovableMediaOnDesktop" -bool "true" && killall Finder
```

## Lire la valeur courante

```bash
defaults read com.apple.finder "ShowRemovableMediaOnDesktop"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.finder "ShowRemovableMediaOnDesktop" && killall Finder
```
