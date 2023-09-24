---
title: Activer le spring loading dans le Dock | Divers
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Activer le spring loading dans le Dock

Glisser un fichier au dessus d'une icône du Dock et l'application va s'ouvrir. Ne permet de le faire que si l'application n'est pas déjà ouverte. Nous avons réussi à le faire fonctionner sur Aperçu, QuickTime et iWork (Keynote, Pages, Numbers).

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
- **Type de paramètre**: bool

## Avec la valeur `false`

Le spring loading est désactivé

```bash
defaults write com.apple.dock "enable-spring-load-actions-on-all-items" -bool "false" && killall Dock
```

## Avec la valeur `true` (par défaut)

Le spring loading est activé

```bash
defaults write com.apple.dock "enable-spring-load-actions-on-all-items" -bool "true" && killall Dock
```

## Lire la valeur courante

```bash
defaults read com.apple.dock "enable-spring-load-actions-on-all-items"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.dock "enable-spring-load-actions-on-all-items" && killall Dock
```
