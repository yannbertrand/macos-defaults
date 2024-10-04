<script setup>
import { useSidebar } from 'vitepress/theme'
import { useData } from 'vitepress'

const { sidebar } = useSidebar()
const folderSidebar = sidebar.value.find(
  (group) => group.text === useData().page.value.title,
)

function getHref(link) {
  return `${link}.html`
}
</script>

<template>
  <ul v-if="folderSidebar">
    <li v-for="item of folderSidebar.items">
      <a :href="getHref(item.link)">{{ item.text }}</a>
    </li>
  </ul>
</template>
