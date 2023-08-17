---
metaTitle: Supports amovibles | Bureau | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Bureau > Supports amovibles
  - name: 'description'
    content: 'Masquer les supports amovibles _(CDs, DVDs et iPods)_ du bureau.'
  - property: 'og:description'
    content: 'Masquer les supports amovibles _(CDs, DVDs et iPods)_ du bureau.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Supports amovibles

Masquer les supports amovibles _(CDs, DVDs et iPods)_ du bureau.

<!-- break lists -->

- **Testé sur macOS**:
  - Monterey
  - Big Sur
- **Type de paramètre**: bool

## Avec la valeur `false`

Masque supports amovibles

```bash
defaults write com.apple.finder "ShowRemovableMediaOnDesktop" -bool "false" && killall Finder
```

## Avec la valeur `true` (par défaut)

Affiche supports amovibles

```bash
defaults write com.apple.finder "ShowRemovableMediaOnDesktop" -bool "true" && killall Finder
```

## Lire la valeur courante

```bash
defaults read com.apple.finder "ShowRemovableMediaOnDesktop"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.finder "ShowRemovableMediaOnDesktop" && killall Finder
```
