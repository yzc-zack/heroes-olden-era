<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'
import { getArticle, articles, getRelated } from '@/utils/articles.js'
import ArticleCard from '@/components/ArticleCard.vue'

const route = useRoute()
const router = useRouter()

const article = computed(() => getArticle(route.params.slug))
const related = computed(() => (article.value ? getRelated(route.params.slug) : []))

const currentIndex = computed(() => articles.findIndex((a) => a.slug === route.params.slug))
const prevArticle = computed(() => (currentIndex.value > 0 ? articles[currentIndex.value - 1] : null))
const nextArticle = computed(() => (currentIndex.value < articles.length - 1 ? articles[currentIndex.value + 1] : null))

watch(
  () => route.params.slug,
  () => {
    if (!article.value) router.replace({ name: 'not-found' })
  },
  { immediate: true },
)

useHead(
  computed(() => ({
    title: article.value
      ? `${article.value.title} | Scroll Tome`
      : 'Guide Not Found | Scroll Tome',
    meta: article.value
      ? [
          { name: 'description', content: article.value.description },
          { property: 'og:title', content: `${article.value.title} | Scroll Tome` },
          { property: 'og:description', content: article.value.description },
          { property: 'og:type', content: 'article' },
          { property: 'article:published_time', content: article.value.date },
          { property: 'article:section', content: article.value.category },
        ]
      : [],
    link: article.value
      ? [{ rel: 'canonical', href: `https://scrolltome.com/guide/${article.value.slug}` }]
      : [],
  })),
)

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const categoryColors = {
  'Beginner Guides': '#7eaee0',
  'Heroes & Units':  '#e07e8e',
  'Combat':          '#c9a227',
  'Economy':         '#4ade80',
  'Town Building':   '#d4a45a',
  'Player Insights': '#a78bfa',
}
function categoryColor(cat) {
  return categoryColors[cat] || '#9ca3af'
}
</script>

<template>
  <div v-if="article" class="article-page">
    <!-- Breadcrumb -->
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <div class="container">
        <RouterLink to="/" class="breadcrumb-link">Home</RouterLink>
        <span class="breadcrumb-sep" aria-hidden="true">›</span>
        <span class="breadcrumb-current" aria-current="page">{{ article.title }}</span>
      </div>
    </nav>

    <!-- Game Header Banner -->
    <div v-if="article.gameHeader" class="game-header-banner">
      <img :src="article.gameHeader" :alt="article.title" />
    </div>

    <div class="container article-layout">
      <!-- Article Main -->
      <article class="article-main" itemscope itemtype="https://schema.org/Article">
        <!-- Header -->
        <header class="article-header">
          <div class="article-meta-top">
            <span
              class="category-badge"
              :style="{ color: categoryColor(article.category), background: 'rgba(255,255,255,0.05)', border: `1px solid ${categoryColor(article.category)}40` }"
            >
              {{ article.category }}
            </span>
          </div>

          <h1 class="article-title" itemprop="name">{{ article.title }}</h1>
          <p class="article-description" itemprop="description">{{ article.description }}</p>

          <div class="article-meta-bottom">
            <time
              v-if="article.date"
              :datetime="article.date"
              class="article-date"
              itemprop="datePublished"
            >
              {{ formatDate(article.date) }}
            </time>
            <span class="meta-dot" aria-hidden="true">·</span>
            <span class="article-reading">{{ article.readingTime }} min read</span>
            <div v-if="article.tags?.length" class="article-tags">
              <span v-for="tag in article.tags" :key="tag" class="tag">#{{ tag }}</span>
            </div>
          </div>
        </header>

        <!-- Divider -->
        <div class="article-divider" aria-hidden="true"></div>

        <!-- Content -->
        <div class="prose article-content" v-html="article.html" itemprop="articleBody"></div>

        <!-- Prev/Next navigation -->
        <nav class="article-nav" aria-label="Article navigation">
          <RouterLink v-if="prevArticle" :to="`/guide/${prevArticle.slug}`" class="nav-prev">
            <span class="nav-label">← Previous</span>
            <span class="nav-title">{{ prevArticle.title }}</span>
          </RouterLink>
          <div v-else></div>

          <RouterLink v-if="nextArticle" :to="`/guide/${nextArticle.slug}`" class="nav-next">
            <span class="nav-label">Next →</span>
            <span class="nav-title">{{ nextArticle.title }}</span>
          </RouterLink>
          <div v-else></div>
        </nav>
      </article>

      <!-- Sidebar -->
      <aside class="article-sidebar">
        <div class="sidebar-sticky">
          <!-- Back to guides -->
          <RouterLink to="/" class="back-btn">← Back to All Guides</RouterLink>

          <!-- Article info -->
          <div class="sidebar-card">
            <h3 class="sidebar-heading">Article Info</h3>
            <dl class="info-list">
              <dt>Category</dt>
              <dd :style="{ color: categoryColor(article.category) }">{{ article.category }}</dd>
              <dt>Published</dt>
              <dd>{{ formatDate(article.date) }}</dd>
              <dt>Reading Time</dt>
              <dd>{{ article.readingTime }} min</dd>
            </dl>
          </div>

          <!-- Related articles -->
          <div v-if="related.length" class="sidebar-card">
            <h3 class="sidebar-heading">Related Guides</h3>
            <ul class="related-list">
              <li v-for="rel in related" :key="rel.slug">
                <RouterLink :to="`/guide/${rel.slug}`" class="related-link">
                  {{ rel.title }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>

  <!-- Loading/error fallback -->
  <div v-else class="not-found-msg container">
    <p>Article not found.</p>
    <RouterLink to="/">Return to Home</RouterLink>
  </div>
</template>

<style scoped>
.article-page {
  min-height: 60vh;
}

/* Breadcrumb */
.breadcrumb {
  background: #04060e;
  border-bottom: 1px solid #0d1425;
  padding: 0.65rem 0;
}

.breadcrumb .container {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
}

.breadcrumb-link {
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-link:hover { color: #c9a227; }

.breadcrumb-sep { color: #1a2d4a; }

.breadcrumb-current {
  color: #a89880;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 320px;
}

/* Layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

.game-header-banner {
  width: 100%;
  background: #080c18;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid #1a2d4a;
}

.game-header-banner img {
  max-height: 90px;
  width: auto;
  object-fit: contain;
}

.article-layout {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 2.5rem;
  padding-top: 2.5rem;
  padding-bottom: 4rem;
  align-items: start;
}

/* Article main */
.article-header {
  margin-bottom: 2rem;
}

.article-meta-top {
  margin-bottom: 1rem;
}

.category-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.article-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: #e8dcc8;
  line-height: 1.3;
  margin: 0 0 0.75rem;
}

.article-description {
  font-size: 1.05rem;
  color: #6b7280;
  line-height: 1.7;
  margin: 0 0 1rem;
}

.article-meta-bottom {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: #4b5563;
}

.meta-dot { color: #1a2d4a; }

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-left: 0.25rem;
}

.tag {
  font-size: 0.72rem;
  color: #4b5563;
  background: #0d1425;
  padding: 0.15em 0.5em;
  border-radius: 4px;
  border: 1px solid #1a2d4a;
}

.article-divider {
  border-top: 1px solid #1a2d4a;
  margin: 1.5rem 0 2rem;
}

.article-content {
  max-width: none;
}

.article-content :deep(img) {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 2rem auto;
  border: 1px solid #1a2d4a;
  box-shadow: 0 4px 24px rgba(0,0,0,0.5);
}

.article-content :deep(img + em) {
  display: block;
  text-align: center;
  font-size: 0.8rem;
  color: #4b5563;
  margin-top: -1.25rem;
  margin-bottom: 1.5rem;
}

/* Prev/Next nav */
.article-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #1a2d4a;
}

.nav-prev,
.nav-next {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
  background: #0d1425;
  border: 1px solid #1a2d4a;
  border-radius: 8px;
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
}

.nav-prev { text-align: left; }
.nav-next { text-align: right; }

.nav-prev:hover,
.nav-next:hover {
  border-color: rgba(201,162,39,0.4);
  background: #111e35;
}

.nav-label {
  font-size: 0.72rem;
  color: #4b5563;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.nav-title {
  font-size: 0.875rem;
  color: #e8dcc8;
  font-family: 'Cinzel', serif;
  line-height: 1.4;
}

/* Sidebar */
.sidebar-sticky {
  position: sticky;
  top: 84px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.back-btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(201,162,39,0.08);
  border: 1px solid rgba(201,162,39,0.25);
  border-radius: 8px;
  color: #c9a227;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: background 0.2s, border-color 0.2s;
}

.back-btn:hover {
  background: rgba(201,162,39,0.15);
  border-color: rgba(201,162,39,0.5);
}

.sidebar-card {
  background: #0d1425;
  border: 1px solid #1a2d4a;
  border-radius: 10px;
  padding: 1.25rem;
}

.sidebar-heading {
  font-family: 'Cinzel', serif;
  font-size: 0.78rem;
  font-weight: 600;
  color: #a89880;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 0.85rem;
}

.info-list {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.4rem 0.75rem;
  margin: 0;
  font-size: 0.82rem;
}

.info-list dt {
  color: #4b5563;
  font-weight: 500;
}

.info-list dd {
  color: #a89880;
  margin: 0;
}

.related-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.related-link {
  display: block;
  font-size: 0.82rem;
  color: #6b7280;
  text-decoration: none;
  padding: 0.4rem 0;
  border-bottom: 1px solid #111e35;
  line-height: 1.4;
  transition: color 0.2s;
}

.related-link:last-child { border-bottom: none; }
.related-link:hover { color: #c9a227; }

.not-found-msg {
  padding: 4rem 1.25rem;
  color: #6b7280;
  text-align: center;
}

.not-found-msg a {
  color: #c9a227;
}

/* Responsive */
@media (max-width: 900px) {
  .article-layout {
    grid-template-columns: 1fr;
  }
  .article-sidebar {
    order: -1;
  }
  .sidebar-sticky {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .sidebar-card {
    flex: 1 1 220px;
  }
  .back-btn {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .article-nav {
    grid-template-columns: 1fr;
  }
  .nav-next { text-align: left; }
  .breadcrumb-current { max-width: 180px; }
}
</style>
