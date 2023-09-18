---
title: Disques externes | Bureau
---

# Disques externes

Masquer les disques externes sur le bureau.

<!-- break lists -->

- **Testé sur macOS**:
  - Monterey
  - Big Sur
- **Type de paramètre**: bool

## Avec la valeur `false`

Masque les disques externes

```bash
defaults write com.apple.finder "ShowExternalHardDrivesOnDesktop" -bool "false" && killall Finder
```

## Avec la valeur `true` (par défaut)

Affiche les disques externes

```bash
defaults write com.apple.finder "ShowExternalHardDrivesOnDesktop" -bool "true" && killall Finder
```

## Lire la valeur courante

```bash
defaults read com.apple.finder "ShowExternalHardDrivesOnDesktop"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.finder "ShowExternalHardDrivesOnDesktop" && killall Finder
```
