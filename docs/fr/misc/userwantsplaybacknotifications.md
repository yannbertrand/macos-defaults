---
title: Afficher les notifications de Musique | Divers
meta:
  - property: 'og:title'
    content: macOS defaults > Divers > Afficher les notifications de Musique
  - name: 'description'
    content: "Afficher une notification lorsqu'une nouvelle chanson commence dans l'application Musique."
  - property: 'og:description'
    content: "Afficher une notification lorsqu'une nouvelle chanson commence dans l'application Musique."
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

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
