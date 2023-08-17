---
metaTitle: Réorganiser automatiquement | Mission Control | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Mission Control > Réorganiser automatiquement
  - name: 'description'
    content: 'Réorganiser les bureaux virtuels automatiquement.'
  - property: 'og:description'
    content: 'Réorganiser les bureaux virtuels automatiquement.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Réorganiser automatiquement

Réorganiser les bureaux virtuels automatiquement.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: bool

## Avec la valeur `true` (par défaut)

Déplacer les bureaux virtuels les plus récemment utilisés

```bash
defaults write com.apple.dock "mru-spaces" -bool "true" && killall Dock
```

## Avec la valeur `false`

Toujours conserver l'arrangement de bureaux virtuels

```bash
defaults write com.apple.dock "mru-spaces" -bool "false" && killall Dock
```

## Lire la valeur courante

```bash
defaults read com.apple.dock "mru-spaces"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.dock "mru-spaces" && killall Dock
```
