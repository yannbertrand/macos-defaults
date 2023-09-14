---
title: Disques externes | Bureau
meta:
  - property: 'og:title'
    content: macOS defaults > Bureau > Disques externes
  - name: 'description'
    content: 'Masquer les disques externes sur le bureau.'
  - property: 'og:description'
    content: 'Masquer les disques externes sur le bureau.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
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
