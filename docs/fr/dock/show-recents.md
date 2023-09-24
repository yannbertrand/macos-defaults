---
title: Afficher les Apps récentes | Dock
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Afficher les Apps récentes

Afficher ou non les applications utilisées récemment dans une section à part.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: bool

## Avec la valeur `true` (par défaut)

Afficher la section des applications utilisées récemment.

```bash
defaults write com.apple.dock "show-recents" -bool "true" && killall Dock
```

<img
  src="../../dock/images/show-recents/true.png"
  alt="Exemple avec la valeur true"
  width="740" height="82" style="height: auto"
/>

## Avec la valeur `false`

Ne pas afficher la section des applications utilisées récemment.

```bash
defaults write com.apple.dock "show-recents" -bool "false" && killall Dock
```

<img
  src="../../dock/images/show-recents/false.png"
  alt="Exemple avec la valeur false"
  width="740" height="82" style="height: auto"
/>

## Lire la valeur courante

```bash
defaults read com.apple.dock "show-recents"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.dock "show-recents" && killall Dock
```
