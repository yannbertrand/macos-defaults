---
metaTitle: Animation de minimisation | Dock | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Dock > Animation de minimisation
  - name: 'description'
    content: "Changer le style d'animation de minimisation des applications."
  - property: 'og:description'
    content: "Changer le style d'animation de minimisation des applications."
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Animation de minimisation

Changer le style d'animation de minimisation des applications.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: string
  - genie
  - scale
  - suck

## Prérequis

- [`com.apple.dock autohide`](../../fr/dock/autohide.html#avec-la-valeur-true) doit avoir la valeur `true`

## Avec la valeur `genie` (par défaut)

```bash
defaults write com.apple.dock "mineffect" -string "genie" && killall Dock
```

<video autoplay loop muted playsinline width="740" height="740" style="max-width: 100%; height: auto">
  <source src="../../dock/images/mineffect/genie.mp4" type="video/mp4">
  Exemple avec la valeur genie
</video>

## Avec la valeur `scale`

```bash
defaults write com.apple.dock "mineffect" -string "scale" && killall Dock
```

<video autoplay loop muted playsinline width="740" height="740" style="max-width: 100%; height: auto">
  <source src="../../dock/images/mineffect/scale.mp4" type="video/mp4">
  Exemple avec la valeur scale
</video>

## Avec la valeur `suck`

"suck" est une valeur secrète qui n'est pas disponible dans les Préférénces Systèmes

```bash
defaults write com.apple.dock "mineffect" -string "suck" && killall Dock
```

<video autoplay loop muted playsinline width="740" height="740" style="max-width: 100%; height: auto">
  <source src="../../dock/images/mineffect/suck.mp4" type="video/mp4">
  Exemple avec la valeur suck
</video>

## Lire la valeur courante

```bash
defaults read com.apple.dock "mineffect"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.dock "mineffect" && killall Dock
```
