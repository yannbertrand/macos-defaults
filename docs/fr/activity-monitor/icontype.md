---
title: Icône du Dock | Moniteur d'activité
meta:
  - property: 'og:title'
    content: macOS defaults > Moniteur d'activité > Icône du Dock
  - name: 'description'
    content: "Choisir quelles informations sont à afficher dans l'icône lorsqu'elle est dans le Dock."
  - property: 'og:description'
    content: "Choisir quelles informations sont à afficher dans l'icône lorsqu'elle est dans le Dock."
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Icône du Dock

Choisir quelles informations sont à afficher dans l'icône lorsqu'elle est dans le Dock.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
- **Type de paramètre**: int
  - 0
  - 2
  - 3
  - 5
  - 6

## Avec la valeur `0` (par défaut)

Affiche l'icône classique de l'application

```bash
defaults write com.apple.ActivityMonitor "IconType" -int "0" && killall Activity\ Monitor
```

## Avec la valeur `2`

Affiche l'activité du réseau dans le temps sous la forme de deux graphiques en miroir.
Le graphique du haut (bleu) montre le flux entrant en paquets/s.
Le graphique du bas (rouge) montre le flux sortant en paquets/s.

```bash
defaults write com.apple.ActivityMonitor "IconType" -int "2" && killall Activity\ Monitor
```

## Avec la valeur `3`

Affiche l'activité du disque sous la forme de deux graphiques en miroir.
Le graphique du haut (bleu) montre le flux entrant en lectures/s.
Le graphique du bas (rouge) montre le flux sortant en écritures/s.

```bash
defaults write com.apple.ActivityMonitor "IconType" -int "3" && killall Activity\ Monitor
```

## Avec la valeur `5`

Affiche l'activité du processeur, sous la forme d'une jauge.

```bash
defaults write com.apple.ActivityMonitor "IconType" -int "5" && killall Activity\ Monitor
```

## Avec la valeur `6`

Affiche l'historique du processeur sous forme d'histogramme.
Si votre appareil possède 4 cœurs ou moins, il affichera un graphique par thread, tous empilés verticalement.
Si vous avez plus de 4 cœurs, un seul graphique à barres sera affiché, pour l'utilisation totale du CPU.
En rouge l'utilisation système et en vert l'utilisation utilisateur.

```bash
defaults write com.apple.ActivityMonitor "IconType" -int "6" && killall Activity\ Monitor
```

## Lire la valeur courante

```bash
defaults read com.apple.ActivityMonitor "IconType"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.ActivityMonitor "IconType" && killall Activity\ Monitor
```
