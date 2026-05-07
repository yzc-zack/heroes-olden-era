<script setup>
import { useHead } from '@unhead/vue'
import { RouterLink } from 'vue-router'

useHead({
  title: '404 – Page Not Found | HoMM: Olden Era Guide',
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>

<template>
  <div class="notfound-page">
    <div class="notfound-content">
      <div class="notfound-icon" aria-hidden="true">🗺️</div>
      <h1 class="notfound-title">404</h1>
      <h2 class="notfound-subtitle">Page Not Found</h2>
      <p class="notfound-desc">
        This territory has not yet been charted. The page you're looking for doesn't exist
        or may have been moved.
      </p>
      <RouterLink to="/" class="notfound-btn">← Return to Home</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.notfound-page {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.25rem;
  text-align: center;
}

.notfound-content {
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.notfound-icon {
  font-size: 4rem;
  line-height: 1;
}

.notfound-title {
  font-family: 'Cinzel', serif;
  font-size: 5rem;
  font-weight: 900;
  color: rgba(201, 162, 39, 0.15);
  margin: 0;
  line-height: 1;
  letter-spacing: 0.1em;
}

.notfound-subtitle {
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #e8dcc8;
  margin: 0;
}

.notfound-desc {
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
}

.notfound-btn {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.75rem 2rem;
  background: #c9a227;
  color: #080c18;
  font-family: 'Cinzel', serif;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 8px;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: background 0.2s, transform 0.15s;
}

.notfound-btn:hover {
  background: #e8c23a;
  transform: translateY(-2px);
}
</style>
