---
title: Caché automatiquement | Dock
---

# Caché automatiquement

Cacher le Dock automatiquement. Vous pouvez afficher/cacher le Dock avec `⌥ alt`+`⌘ cmd`+`d`.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: bool

## Avec la valeur `false` (par défaut)

Toujours afficher le Dock

```bash
defaults write com.apple.dock "autohide" -bool "false" && killall Dock
```

## Avec la valeur `true`

Cacher le Dock automatiquement lorsque votre souris n'est pas dessus

```bash
defaults write com.apple.dock "autohide" -bool "true" && killall Dock
```

## Lire la valeur courante

```bash
defaults read com.apple.dock "autohide"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.dock "autohide" && killall Dock
```
