---
metaTitle: Toutes les icônes | Bureau | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Bureau > Toutes les icônes
  - name: "description"
    content: "Masquer toutes les icônes du bureau."
  - property: "og:description"
    content: "Masquer toutes les icônes du bureau."
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Toutes les icônes

Masquer toutes les icônes du bureau.

<!-- break lists -->

- **Testé sur macOS**:
  * Ventura
  * Monterey
  * Big Sur
- **Type de paramètre**: bool

## Avec la valeur `false`

Masque toutes les icônes

```bash
defaults write com.apple.finder "CreateDesktop" -bool "false" && killall Finder
```

## Avec la valeur `true` (par défaut)

Affiche toutes les icônes

```bash
defaults write com.apple.finder "CreateDesktop" -bool "true" && killall Finder
```

## Lire la valeur courante
```bash
defaults read com.apple.finder "CreateDesktop"
```

## Remettre la valeur à l'état initial
```bash
defaults delete com.apple.finder "CreateDesktop" && killall Finder
```
