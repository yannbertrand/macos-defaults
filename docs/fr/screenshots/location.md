---
metaTitle: Emplacement | Capture d'écran | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Capture d'écran > Emplacement
  - name: 'description'
    content: "Préciser l'emplacement par défaut des captures."
  - property: 'og:description'
    content: "Préciser l'emplacement par défaut des captures."
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Emplacement

Préciser l'emplacement par défaut des captures.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: string

## Avec la valeur `~/Desktop` (par défaut)

```bash
defaults write com.apple.screencapture "location" -string "~/Desktop" && killall SystemUIServer
```

## Avec la valeur `~/Pictures`

```bash
defaults write com.apple.screencapture "location" -string "~/Pictures" && killall SystemUIServer
```

## Lire la valeur courante

```bash
defaults read com.apple.screencapture "location"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.screencapture "location" && killall SystemUIServer
```
