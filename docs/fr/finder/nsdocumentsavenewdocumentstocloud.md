---
metaTitle: Sauvegarder sur le disque ou dans iCloud par défaut | Finder | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Finder > Sauvegarder sur le disque ou dans iCloud par défaut
  - name: 'description'
    content: "Définir si l'emplacement de sauvegarde par défaut est sur le disque ou dans iCloud"
  - property: 'og:description'
    content: "Définir si l'emplacement de sauvegarde par défaut est sur le disque ou dans iCloud"
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Sauvegarder sur le disque ou dans iCloud par défaut

Définir si l'emplacement de sauvegarde par défaut est sur le disque ou dans iCloud

<!-- break lists -->

- **Testé sur macOS**:
  - Catalina
- **Type de paramètre**: bool

## Avec la valeur `true` (par défaut)

iCloud Documents est le dossier ouvert par défaut lors de la sauvegarde d'un nouveau document

```bash
defaults write NSGlobalDomain "NSDocumentSaveNewDocumentsToCloud" -bool "true"
```

## Avec la valeur `false`

Le répertoire utilisateur est ouvert par défaut lors de la sauvegarde d'un nouveau document

```bash
defaults write NSGlobalDomain "NSDocumentSaveNewDocumentsToCloud" -bool "false"
```

## Lire la valeur courante

```bash
defaults read NSGlobalDomain "NSDocumentSaveNewDocumentsToCloud"
```

## Remettre la valeur à l'état initial

```bash
defaults delete NSGlobalDomain "NSDocumentSaveNewDocumentsToCloud"
```
