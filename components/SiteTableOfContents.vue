<script setup>
import { useSidebar } from 'vitepress/theme'

const { sidebar } = useSidebar()

function getHref(link) {
  return `${link}.html`
}
</script>

<template>
  <template v-for="group of sidebar">
    <h3>{{ group.text }}</h3>
    <ul>
      <li v-for="item of group.items">
        <a :href="getHref(item.link)">{{ item.text }}</a>
      </li>
    </ul>
  </template>
</template>
