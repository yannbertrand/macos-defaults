---
title: Faire clignoter les séparateurs de l'horloge | Barre des menus
---

# Faire clignoter les séparateurs de l'horloge

Permet de faire clignoter ou non les séparateurs de l'horloge numérique (par défaut, ce sont des deux points).

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: bool

## Avec la valeur `false` (par défaut)

Les séparateurs restent toujours solides.

```bash
defaults write com.apple.menuextra.clock "FlashDateSeparators" -bool "false" && killall SystemUIServer
```

<video autoplay loop muted playsinline width="727" height="40" style="max-width: 100%; height: auto">
  <source src="../../menubar/images/FlashDateSeparators/false.mp4" type="video/mp4">
  Exemple avec la valeur false
</video>

## Avec la valeur `true`

Les séparateurs clignotent toutes les secondes.

```bash
defaults write com.apple.menuextra.clock "FlashDateSeparators" -bool "true" && killall SystemUIServer
```

<video autoplay loop muted playsinline width="727" height="40" style="max-width: 100%; height: auto">
  <source src="../../menubar/images/FlashDateSeparators/true.mp4" type="video/mp4">
  Exemple avec la valeur true
</video>

## Lire la valeur courante

```bash
defaults read com.apple.menuextra.clock "FlashDateSeparators"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.menuextra.clock "FlashDateSeparators" && killall SystemUIServer
```
