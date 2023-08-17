---
metaTitle: Disques | Bureau | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Bureau > Disques
  - name: "description"
    content: "Afficher les disques durs sur le bureau."
  - property: "og:description"
    content: "Afficher les disques durs sur le bureau."
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Disques

Afficher les disques durs sur le bureau.

<!-- break lists -->

- **Testé sur macOS**:
  * Monterey
  * Big Sur
- **Type de paramètre**: bool

## Avec la valeur `true`

Affiche les disques durs

```bash
defaults write com.apple.finder "ShowHardDrivesOnDesktop" -bool "true" && killall Finder
```

## Avec la valeur `false` (par défaut)

Masque les disques durs

```bash
defaults write com.apple.finder "ShowHardDrivesOnDesktop" -bool "false" && killall Finder
```

## Lire la valeur courante
```bash
defaults read com.apple.finder "ShowHardDrivesOnDesktop"
```

## Remettre la valeur à l'état initial
```bash
defaults delete com.apple.finder "ShowHardDrivesOnDesktop" && killall Finder
```
