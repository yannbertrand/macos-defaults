---
title: Position du menu d'Aide | Divers
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Position du menu d'Aide

Choisir si le menu d'Aide doit être au-dessus de toutes les applications.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: bool

## Avec la valeur `false` (par défaut)

Par défaut, le menu d'Aide est au-dessus de n'importe quel fenêtre

```bash
defaults write com.apple.helpviewer "DevMode" -bool "false"
```

## Avec la valeur `true`

Laisser le menu d'Aide passer derrière les autres fenêtres

```bash
defaults write com.apple.helpviewer "DevMode" -bool "true"
```

## Lire la valeur courante

```bash
defaults read com.apple.helpviewer "DevMode"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.helpviewer "DevMode"
```
