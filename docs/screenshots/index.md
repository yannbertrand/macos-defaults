---
title: Screenshots
description: 'On a Mac, you can take screenshots using: - `⌘ cmd`+`⇧ shift`+`3` for fullscreen. - `⌘ cmd`+`⇧ shift`+`4` for a selection. Then use `space` to capture an entire app. - `⌘ cmd`+`⇧ shift`+`5` to open the Screenshot app. There are a few keys you can customize.'
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Screenshots
  - - meta
    - property: 'og:description'
      content: 'On a Mac, you can take screenshots using: - `⌘ cmd`+`⇧ shift`+`3` for fullscreen. - `⌘ cmd`+`⇧ shift`+`4` for a selection. Then use `space` to capture an entire app. - `⌘ cmd`+`⇧ shift`+`5` to open the Screenshot app. There are a few keys you can customize.'
---

<script setup>
import { useData } from 'vitepress'
import FolderTableOfContents from '../../components/FolderTableOfContents.vue'

const { isDark } = useData();
</script>

# Screenshots

<img
  v-if="isDark"
  src="./images/screenshot-dark.png" alt="A screenshot of the Screenshot app"
  width="540" height="89" style="height: auto"
/>
<img
  v-else
  src="./images/screenshot-light.png" alt="A screenshot of the Screenshot app"
  width="540" height="89" style="height: auto"
/>

On a Mac, you can take screenshots using:

- `⌘ cmd`+`⇧ shift`+`3` for fullscreen.
- `⌘ cmd`+`⇧ shift`+`4` for a selection. Then use `space` to capture an entire app.
- `⌘ cmd`+`⇧ shift`+`5` to open the Screenshot app.

There are a few keys you can customize.

## Keys

<FolderTableOfContents />
