---
metaTitle: Durée de l'animation d'affichage | Dock | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Dock > Durée de l'animation d'affichage
  - name: 'description'
    content: "Changer la durée d'animation d'affichage et de cachage du Dock."
  - property: 'og:description'
    content: "Changer la durée d'animation d'affichage et de cachage du Dock."
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Durée de l'animation d'affichage

Changer la durée d'animation d'affichage et de cachage du Dock.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: float

## Prérequis

- [`com.apple.dock autohide`](../../fr/dock/autohide.md#avec-la-valeur-true) doit avoir la valeur `true`

## Avec la valeur `0.5` (par défaut)

Par défaut, l'animation d'affichage et de cachage prends 0.5 secondes

```bash
defaults write com.apple.dock "autohide-time-modifier" -float "0.5" && killall Dock
```

<video autoplay loop muted playsinline width="742" height="202" style="max-width: 100%; height: auto">
  <source src="../../dock/images/autohide-time-modifier/0.5.mp4" type="video/mp4">
  Exemple avec la valeur 0.5
</video>

## Avec la valeur `2`

Allonger la durée d'animation du Dock

```bash
defaults write com.apple.dock "autohide-time-modifier" -float "2" && killall Dock
```

<video autoplay loop muted playsinline width="742" height="202" style="max-width: 100%; height: auto">
  <source src="../../dock/images/autohide-time-modifier/2.mp4" type="video/mp4">
  Exemple avec la valeur 2
</video>

## Avec la valeur `0`

Supprimer la durée d'animation du Dock

```bash
defaults write com.apple.dock "autohide-time-modifier" -float "0" && killall Dock
```

<video autoplay loop muted playsinline width="742" height="202" style="max-width: 100%; height: auto">
  <source src="../../dock/images/autohide-time-modifier/0.mp4" type="video/mp4">
  Exemple avec la valeur 0
</video>

## Lire la valeur courante

```bash
defaults read com.apple.dock "autohide-time-modifier"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.dock "autohide-time-modifier" && killall Dock
```
