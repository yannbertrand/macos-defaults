---
title: Save to disk or iCloud by default | Finder
meta:
  - property: 'og:title'
    content: macOS defaults > Finder > Save to disk or iCloud by default
  - name: 'description'
    content: 'Choose whether the default file save location is on disk or iCloud'
  - property: 'og:description'
    content: 'Choose whether the default file save location is on disk or iCloud'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Save to disk or iCloud by default

Choose whether the default file save location is on disk or iCloud

<!-- break lists -->

- **Tested on macOS**:
  - Catalina
- **Parameter type**: bool

## Set to `true` (default value)

iCloud Documents is the default directory opened in the fileviewer dialog when saving a new document

```bash
defaults write NSGlobalDomain "NSDocumentSaveNewDocumentsToCloud" -bool "true"
```

## Set to `false`

home directory is opened in the fileviewer dialog when saving a new document

```bash
defaults write NSGlobalDomain "NSDocumentSaveNewDocumentsToCloud" -bool "false"
```

## Read current value

```bash
defaults read NSGlobalDomain "NSDocumentSaveNewDocumentsToCloud"
```

## Reset to default value

```bash
defaults delete NSGlobalDomain "NSDocumentSaveNewDocumentsToCloud"
```
