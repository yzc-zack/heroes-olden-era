<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  article: {
    type: Object,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
})

const categoryColors = {
  'Beginner Guides': { bg: 'rgba(58,110,168,0.15)',  text: '#7eaee0', border: 'rgba(58,110,168,0.4)' },
  'Heroes & Units':  { bg: 'rgba(155,35,53,0.15)',   text: '#e07e8e', border: 'rgba(155,35,53,0.4)' },
  'Combat':          { bg: 'rgba(201,162,39,0.12)',  text: '#c9a227', border: 'rgba(201,162,39,0.4)' },
  'Economy':         { bg: 'rgba(34,197,94,0.1)',    text: '#4ade80', border: 'rgba(34,197,94,0.3)' },
  'Town Building':   { bg: 'rgba(168,130,58,0.15)',  text: '#d4a45a', border: 'rgba(168,130,58,0.4)' },
  'Player Insights': { bg: 'rgba(139,92,246,0.12)',  text: '#a78bfa', border: 'rgba(139,92,246,0.4)' },
}

function categoryStyle(category) {
  const c = categoryColors[category] || { bg: 'rgba(107,114,128,0.15)', text: '#9ca3af', border: 'rgba(107,114,128,0.3)' }
  return {
    background: c.bg,
    color: c.text,
    border: `1px solid ${c.border}`,
  }
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <RouterLink :to="`/guide/${article.slug}`" class="article-card" :class="{ 'article-card--featured': featured }">
    <div v-if="article.cover" class="card-cover">
      <img :src="article.cover" :alt="article.title" loading="lazy" />
    </div>
    <div class="card-body">
      <div class="card-meta">
        <span class="category-badge" :style="categoryStyle(article.category)">
          {{ article.category }}
        </span>
        <span v-if="featured && article.featured" class="featured-badge">⭐ Featured</span>
      </div>

      <h2 class="card-title">{{ article.title }}</h2>
      <p class="card-desc">{{ article.description }}</p>

      <div class="card-footer">
        <span class="card-date">{{ formatDate(article.date) }}</span>
        <span class="card-reading">{{ article.readingTime }} min read</span>
        <span class="card-cta">Read Guide →</span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.article-card {
  display: block;
  background: #0d1425;
  border: 1px solid #1a2d4a;
  border-radius: 12px;
  text-decoration: none;
  overflow: hidden;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}

.article-card:hover {
  border-color: rgba(201, 162, 39, 0.5);
  transform: translateY(-3px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(201, 162, 39, 0.1);
}

.article-card--featured {
  border-color: rgba(201, 162, 39, 0.3);
  background: linear-gradient(135deg, #0d1425 0%, #111e35 100%);
}

.article-card--featured:hover {
  border-color: rgba(201, 162, 39, 0.7);
}

.card-cover {
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-bottom: 1px solid #1a2d4a;
}

.card-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  display: block;
}

.article-card:hover .card-cover img {
  transform: scale(1.04);
}

.card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.category-badge {
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.featured-badge {
  font-size: 0.72rem;
  color: #c9a227;
  font-weight: 500;
}

.card-title {
  font-family: 'Cinzel', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #e8dcc8;
  margin: 0;
  line-height: 1.4;
  transition: color 0.2s;
}

.article-card:hover .card-title {
  color: #c9a227;
}

.card-desc {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.25rem;
  flex-wrap: wrap;
}

.card-date,
.card-reading {
  font-size: 0.75rem;
  color: #4b5563;
}

.card-date::after {
  content: '·';
  margin-left: 0.75rem;
  color: #1a2d4a;
}

.card-cta {
  margin-left: auto;
  font-size: 0.8rem;
  font-weight: 600;
  color: #c9a227;
  transition: letter-spacing 0.2s;
}

.article-card:hover .card-cta {
  letter-spacing: 0.04em;
}
</style>
