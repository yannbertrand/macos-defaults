---
metaTitle: Show hidden files | Finder | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Finder > Show hidden files
  - name: 'description'
    content: 'Show hidden files in the Finder. You can toggle the value using `⌘ cmd`+`⇧ shift`+`.`.'
  - property: 'og:description'
    content: 'Show hidden files in the Finder. You can toggle the value using `⌘ cmd`+`⇧ shift`+`.`.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Show hidden files

Show hidden files in the Finder. You can toggle the value using `⌘ cmd`+`⇧ shift`+`.`.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
- **Parameter type**: bool

## Set to `false` (default value)

Do not show hidden files inside the Finder

```bash
defaults write com.apple.finder "AppleShowAllFiles" -bool "false" && killall Finder
```

<img
  src="./images/AppleShowAllFiles/false.png"
  alt="Example output with value set to false"
  width="740" height="451" style="height: auto"
/>

## Set to `true`

Show hidden files inside the Finder

```bash
defaults write com.apple.finder "AppleShowAllFiles" -bool "true" && killall Finder
```

<img
  src="./images/AppleShowAllFiles/true.png"
  alt="Example output with value set to true"
  width="740" height="451" style="height: auto"
/>

## Read current value

```bash
defaults read com.apple.finder "AppleShowAllFiles"
```

## Reset to default value

```bash
defaults delete com.apple.finder "AppleShowAllFiles" && killall Finder
```
