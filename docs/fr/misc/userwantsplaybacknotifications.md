---
title: Afficher les notifications de Musique | Divers
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Afficher les notifications de Musique

Afficher une notification lorsqu'une nouvelle chanson commence dans l'application Musique.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Catalina
- **Type de paramètre**: bool

## Avec la valeur `false` (par défaut)

L'affichage des notifications est désactivé.

```bash
defaults write com.apple.Music "userWantsPlaybackNotifications" -bool "false" && killall Music
```

## Avec la valeur `true`

L'affichage des notifications est activé.

```bash
defaults write com.apple.Music "userWantsPlaybackNotifications" -bool "true" && killall Music
```

## Lire la valeur courante

```bash
defaults read com.apple.Music "userWantsPlaybackNotifications"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.Music "userWantsPlaybackNotifications" && killall Music
```
