---
title: Disques | Bureau
---

# Disques

Afficher les disques durs sur le bureau.

<!-- break lists -->

- **Testé sur macOS**:
  - Monterey
  - Big Sur
- **Type de paramètre**: bool

## Avec la valeur `true`

Affiche les disques durs

```bash
defaults write com.apple.finder "ShowHardDrivesOnDesktop" -bool "true" && killall Finder
```

## Avec la valeur `false` (par défaut)

Masque les disques durs

```bash
defaults write com.apple.finder "ShowHardDrivesOnDesktop" -bool "false" && killall Finder
```

## Lire la valeur courante

```bash
defaults read com.apple.finder "ShowHardDrivesOnDesktop"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.finder "ShowHardDrivesOnDesktop" && killall Finder
```
