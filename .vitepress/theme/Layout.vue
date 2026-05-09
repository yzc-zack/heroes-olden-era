<script setup>
import { useData } from 'vitepress'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import HomeLayout from './HomeLayout.vue'
import ArticleLayout from './ArticleLayout.vue'
import PrivacyLayout from './PrivacyLayout.vue'

const { frontmatter } = useData()
</script>

<template>
  <div id="app">
    <AppHeader />
    <main style="flex: 1;">
      <HomeLayout v-if="frontmatter.layout === 'home'" />
      <PrivacyLayout v-else-if="frontmatter.layout === 'privacy'" />
      <ArticleLayout v-else />
    </main>
    <AppFooter />
  </div>
</template>
