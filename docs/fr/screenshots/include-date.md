---
metaTitle: Inclure la date | Capture d'écran | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Capture d'écran > Inclure la date
  - name: "description"
    content: "Inclure la date et l'heure dans le nom du fichier."
  - property: "og:description"
    content: "Inclure la date et l'heure dans le nom du fichier."
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Inclure la date

Inclure la date et l'heure dans le nom du fichier.

<!-- break lists -->

- **Testé sur macOS**:
  * Ventura
  * Monterey
  * Big Sur
  * Catalina
  * Mojave
- **Type de paramètre**: bool

## Avec la valeur `true` (par défaut)

Screenshot 2020-01-09 at 13.27.20.png

```bash
defaults write com.apple.screencapture "include-date" -bool "true" 
```

## Avec la valeur `false`

- Screenshot.png
- Screenshot 1.png


```bash
defaults write com.apple.screencapture "include-date" -bool "false" 
```

## Lire la valeur courante
```bash
defaults read com.apple.screencapture "include-date"
```

## Remettre la valeur à l'état initial
```bash
defaults delete com.apple.screencapture "include-date"
```
