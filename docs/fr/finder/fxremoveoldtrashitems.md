---
metaTitle: Vider la corbeille automatiquement | Finder | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Finder > Vider la corbeille automatiquement
  - name: 'description'
    content: 'Supprimer automatiquement les éléments se trouvant dans la corbeille depuis plus de 30 jours.'
  - property: 'og:description'
    content: 'Supprimer automatiquement les éléments se trouvant dans la corbeille depuis plus de 30 jours.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Vider la corbeille automatiquement

Supprimer automatiquement les éléments se trouvant dans la corbeille depuis plus de 30 jours.

<!-- break lists -->

- **Testé sur macOS**:
  - Monterey
  - Big Sur
- **Type de paramètre**: bool

## Avec la valeur `true`

Supprime automatiquement les éléments après 30 jours

```bash
defaults write com.apple.finder "FXRemoveOldTrashItems" -bool "true" && killall Finder
```

## Avec la valeur `false` (par défaut)

Garde les éléments dans la corbeille

```bash
defaults write com.apple.finder "FXRemoveOldTrashItems" -bool "false" && killall Finder
```

## Lire la valeur courante

```bash
defaults read com.apple.finder "FXRemoveOldTrashItems"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.finder "FXRemoveOldTrashItems" && killall Finder
```
