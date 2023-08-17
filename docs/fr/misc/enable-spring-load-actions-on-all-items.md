---
metaTitle: Activer le spring loading dans le Dock | Divers | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Divers > Activer le spring loading dans le Dock
  - name: 'description'
    content: "Glisser un fichier au dessus d'une icône du Dock et l'application va s'ouvrir. Ne permet de le faire que si l'application n'est pas déjà ouverte. Nous avons réussi à le faire fonctionner sur Aperçu, QuickTime et iWork (Keynote, Pages, Numbers)."
  - property: 'og:description'
    content: "Glisser un fichier au dessus d'une icône du Dock et l'application va s'ouvrir. Ne permet de le faire que si l'application n'est pas déjà ouverte. Nous avons réussi à le faire fonctionner sur Aperçu, QuickTime et iWork (Keynote, Pages, Numbers)."
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Activer le spring loading dans le Dock

Glisser un fichier au dessus d'une icône du Dock et l'application va s'ouvrir. Ne permet de le faire que si l'application n'est pas déjà ouverte. Nous avons réussi à le faire fonctionner sur Aperçu, QuickTime et iWork (Keynote, Pages, Numbers).

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
- **Type de paramètre**: bool

## Avec la valeur `false`

Le spring loading est désactivé

```bash
defaults write com.apple.dock "enable-spring-load-actions-on-all-items" -bool "false" && killall Dock
```

## Avec la valeur `true` (par défaut)

Le spring loading est activé

```bash
defaults write com.apple.dock "enable-spring-load-actions-on-all-items" -bool "true" && killall Dock
```

## Lire la valeur courante

```bash
defaults read com.apple.dock "enable-spring-load-actions-on-all-items"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.dock "enable-spring-load-actions-on-all-items" && killall Dock
```
