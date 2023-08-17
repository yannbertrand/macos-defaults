---
metaTitle: Afficher la durée de build | Xcode | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Xcode > Afficher la durée de build
  - name: "description"
    content: "Afficher la durée de build dans la toolbar en haut de la fenêtre d'Xcode"
  - property: "og:description"
    content: "Afficher la durée de build dans la toolbar en haut de la fenêtre d'Xcode"
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Afficher la durée de build

Afficher la durée de build dans la toolbar en haut de la fenêtre d'Xcode

<!-- break lists -->

- **Testé sur macOS**:
  * Catalina
- **Type de paramètre**: bool

## Avec la valeur `true`

Afficher la durée de build dans la toolbar

```bash
defaults write com.apple.dt.Xcode "ShowBuildOperationDuration" -bool "true" && killall Xcode
```

## Avec la valeur `false` (par défaut)

Ne pas afficher la durée de build dans la toolbar

```bash
defaults write com.apple.dt.Xcode "ShowBuildOperationDuration" -bool "false" && killall Xcode
```

## Lire la valeur courante
```bash
defaults read com.apple.dt.Xcode "ShowBuildOperationDuration"
```

## Remettre la valeur à l'état initial
```bash
defaults delete com.apple.dt.Xcode "ShowBuildOperationDuration" && killall Xcode
```
