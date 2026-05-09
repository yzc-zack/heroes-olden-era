<script setup>
import { useData } from 'vitepress'
import { Content } from 'vitepress'
import { data as articles } from '../data/articles.data.js'
import { computed } from 'vue'

const { frontmatter, page } = useData()

const categoryColors = {
  'Player Insights': '#a78bfa',
  'Beginner Guides': '#7eaee0',
  'Heroes & Units':  '#e07e8e',
  'Combat':          '#c9a227',
  'Economy':         '#4ade80',
  'Town Building':   '#d4a45a',
}

function categoryColor(cat) {
  return categoryColors[cat] || '#9ca3af'
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const currentUrl = computed(() => '/' + page.value.relativePath.replace(/\.md$/, ''))

const related = computed(() =>
  articles
    .filter((a) => a.category === frontmatter.value.category && a.url !== currentUrl.value)
    .slice(0, 4)
)
</script>

<template>
  <div class="article-page">
    <!-- Game Header Banner -->
    <div v-if="frontmatter.gameHeader" class="game-header-banner">
      <img :src="frontmatter.gameHeader" alt="Game header" />
    </div>

    <!-- Breadcrumb -->
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <div class="container">
        <a href="/" class="breadcrumb-link">Home</a>
        <span class="breadcrumb-sep" aria-hidden="true">›</span>
        <span class="breadcrumb-current">{{ frontmatter.title }}</span>
      </div>
    </nav>

    <div class="container article-layout">
      <!-- Article Main -->
      <article class="article-main" itemscope itemtype="https://schema.org/Article">
        <header class="article-header">
          <div class="article-meta-top">
            <span
              class="category-badge"
              :style="{ color: categoryColor(frontmatter.category), background: 'rgba(255,255,255,0.05)', border: `1px solid ${categoryColor(frontmatter.category)}40` }"
            >
              {{ frontmatter.category }}
            </span>
          </div>

          <h1 class="article-title" itemprop="name">{{ frontmatter.title }}</h1>
          <p class="article-description" itemprop="description">{{ frontmatter.description }}</p>

          <div class="article-meta-bottom">
            <time v-if="frontmatter.date" :datetime="frontmatter.date" class="article-date" itemprop="datePublished">
              {{ formatDate(frontmatter.date) }}
            </time>
            <span class="meta-dot" aria-hidden="true">·</span>
            <div v-if="frontmatter.tags?.length" class="article-tags">
              <span v-for="tag in frontmatter.tags" :key="tag" class="tag">#{{ tag }}</span>
            </div>
          </div>
        </header>

        <div class="article-divider" aria-hidden="true"></div>

        <div class="prose article-content" itemprop="articleBody">
          <Content />
        </div>
      </article>

      <!-- Sidebar -->
      <aside class="article-sidebar">
        <div class="sidebar-sticky">
          <a href="/" class="back-btn">← Back to All Guides</a>

          <div class="sidebar-card">
            <h3 class="sidebar-heading">Article Info</h3>
            <dl class="info-list">
              <dt>Category</dt>
              <dd :style="{ color: categoryColor(frontmatter.category) }">{{ frontmatter.category }}</dd>
              <dt>Published</dt>
              <dd>{{ formatDate(frontmatter.date) }}</dd>
            </dl>
          </div>

          <div v-if="related.length" class="sidebar-card">
            <h3 class="sidebar-heading">Related Guides</h3>
            <ul class="related-list">
              <li v-for="rel in related" :key="rel.url">
                <a :href="rel.url" class="related-link">{{ rel.title }}</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.article-page { min-height: 60vh; }

.game-header-banner { width: 100%; background: #080c18; display: flex; justify-content: center; align-items: center; padding: 1.5rem 0; border-bottom: 1px solid #1a2d4a; }
.game-header-banner img { max-height: 90px; width: auto; object-fit: contain; }

.breadcrumb { background: #04060e; border-bottom: 1px solid #0d1425; padding: 0.65rem 0; }
.breadcrumb .container { display: flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; }
.breadcrumb-link { color: #6b7280; text-decoration: none; transition: color 0.2s; }
.breadcrumb-link:hover { color: #c9a227; }
.breadcrumb-sep { color: #1a2d4a; }
.breadcrumb-current { color: #a89880; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 320px; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 1.25rem; }

.article-layout { display: grid; grid-template-columns: 1fr 280px; gap: 2.5rem; padding-top: 2.5rem; padding-bottom: 4rem; align-items: start; }

.article-header { margin-bottom: 2rem; }
.article-meta-top { margin-bottom: 1rem; }
.category-badge { display: inline-block; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; }
.article-title { font-family: 'Cinzel', serif; font-size: clamp(1.5rem, 3.5vw, 2.2rem); font-weight: 700; color: #e8dcc8; line-height: 1.3; margin: 0 0 0.75rem; }
.article-description { font-size: 1.05rem; color: #6b7280; line-height: 1.7; margin: 0 0 1rem; }
.article-meta-bottom { display: flex; align-items: center; flex-wrap: wrap; gap: 0.5rem; font-size: 0.82rem; color: #4b5563; }
.article-date { color: #4b5563; }
.meta-dot { color: #1a2d4a; }
.article-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
.tag { color: #4b5563; font-size: 0.75rem; }

.article-divider { border-top: 1px solid #1a2d4a; margin: 1.5rem 0 2rem; }
.article-content { max-width: none; }

/* Sidebar */
.article-sidebar { position: relative; }
.sidebar-sticky { position: sticky; top: 80px; display: flex; flex-direction: column; gap: 1rem; }
.back-btn { display: inline-block; padding: 0.6rem 1rem; background: rgba(201,162,39,0.08); border: 1px solid rgba(201,162,39,0.2); border-radius: 8px; color: #c9a227; font-size: 0.82rem; font-weight: 600; text-decoration: none; transition: background 0.2s, border-color 0.2s; }
.back-btn:hover { background: rgba(201,162,39,0.15); border-color: rgba(201,162,39,0.4); }
.sidebar-card { background: #0d1425; border: 1px solid #1a2d4a; border-radius: 10px; padding: 1.25rem; }
.sidebar-heading { font-family: 'Cinzel', serif; font-size: 0.8rem; font-weight: 600; color: #a89880; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.85rem; }
.info-list { display: grid; grid-template-columns: auto 1fr; gap: 0.4rem 0.75rem; margin: 0; font-size: 0.82rem; }
.info-list dt { color: #4b5563; }
.info-list dd { margin: 0; color: #a89880; }
.related-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.related-link { color: #6b7280; text-decoration: none; font-size: 0.82rem; line-height: 1.4; display: block; transition: color 0.2s; }
.related-link:hover { color: #c9a227; }

@media (max-width: 900px) {
  .article-layout { grid-template-columns: 1fr; }
  .article-sidebar { display: none; }
}
</style>
