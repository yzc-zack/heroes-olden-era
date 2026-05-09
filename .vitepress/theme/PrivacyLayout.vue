<script setup>
import { Content } from 'vitepress'
</script>

<template>
  <div class="privacy-page">
    <div class="container">
      <header class="privacy-header">
        <p class="privacy-breadcrumb"><a href="/">Home</a> › Privacy Policy</p>
        <h1 class="privacy-title">Privacy Policy</h1>
        <p class="privacy-updated">Last updated: May 8, 2025</p>
      </header>
      <div class="prose privacy-body">
        <Content />
      </div>
      <div class="privacy-footer">
        <a href="/" class="back-home">← Back to Home</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.privacy-page { min-height: 60vh; padding: 3rem 0 5rem; }
.container { max-width: 780px; margin: 0 auto; padding: 0 1.25rem; }
.privacy-breadcrumb { font-size: 0.82rem; color: #4b5563; margin: 0 0 1.25rem; }
.privacy-breadcrumb a { color: #6b7280; text-decoration: none; }
.privacy-breadcrumb a:hover { color: #c9a227; }
.privacy-header { margin-bottom: 2.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #1a2d4a; }
.privacy-title { font-family: 'Cinzel', serif; font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; color: #e8dcc8; margin: 0 0 0.5rem; }
.privacy-updated { font-size: 0.82rem; color: #4b5563; margin: 0; }
.privacy-body { max-width: none; }
.privacy-footer { margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #1a2d4a; }
.back-home { display: inline-block; padding: 0.6rem 1.25rem; background: rgba(201,162,39,0.08); border: 1px solid rgba(201,162,39,0.25); border-radius: 8px; color: #c9a227; font-size: 0.875rem; font-weight: 600; text-decoration: none; transition: background 0.2s, border-color 0.2s; }
.back-home:hover { background: rgba(201,162,39,0.15); border-color: rgba(201,162,39,0.5); }
</style>
