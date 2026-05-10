<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@unhead/vue'
import { articles, categories } from '@/utils/articles.js'
import ArticleCard from '@/components/ArticleCard.vue'

useHead({
  title: 'Olden Era Journal – Player Experiences & Insights for HoMM: Olden Era',
  meta: [
    { name: 'description', content: 'A community space for Heroes of Might and Magic: Olden Era players to share experiences, discoveries, and insights — not just tips, but the stories behind the strategies.' },
    { property: 'og:title', content: 'Olden Era Journal – Player Experiences & Insights' },
    { property: 'og:description', content: 'A community space for Heroes of Might and Magic: Olden Era players to share experiences, discoveries, and insights.' },
    { property: 'og:url', content: 'https://scrolltome.com/' },
  ],
})

const activeCategory = ref('All')

const allCategories = computed(() => ['All', ...categories])

const filteredArticles = computed(() => {
  if (activeCategory.value === 'All') return articles
  return articles.filter((a) => a.category === activeCategory.value)
})

const featuredArticles = computed(() => articles.filter((a) => a.featured))
</script>

<template>
  <!-- ── Hero Banner ── -->
  <section class="hero-banner">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <div class="hero-badge">🏰 Player Community</div>
      <h1 class="hero-title">Olden Era<br /><span class="hero-highlight">Journal</span></h1>
      <p class="hero-subtitle">
        A space where players of <em>Heroes of Might and Magic: Olden Era</em> share
        what they've discovered, what surprised them, and what keeps drawing them back.
      </p>
      <div class="hero-actions">
        <a href="#stories" class="hero-cta">Read Stories ↓</a>
        <a href="#guides" class="hero-cta-secondary">Browse Guides</a>
      </div>
    </div>
    <div class="hero-ornament" aria-hidden="true">⚔</div>
  </section>

  <!-- ── About strip ── -->
  <section class="section-about">
    <div class="container">
      <div class="about-grid">
        <div class="about-item">
          <span class="about-icon">🗺️</span>
          <h3>Shared Experiences</h3>
          <p>Real stories from real playthroughs — the unexpected moments, turning points, and lessons learned.</p>
        </div>
        <div class="about-item">
          <span class="about-icon">💡</span>
          <h3>Practical Insights</h3>
          <p>Tips that come from actually playing, not just theorycrafting. Useful context alongside the strategy.</p>
        </div>
        <div class="about-item">
          <span class="about-icon">🤝</span>
          <h3>Community Voice</h3>
          <p>Written by fans, for fans. No corporate tone — just players who love this game talking about it honestly.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ── Featured Articles ── -->
  <section v-if="featuredArticles.length" id="stories" class="section-featured">
    <div class="container">
      <h2 class="section-title">✨ Community Picks</h2>
      <div class="featured-grid">
        <ArticleCard
          v-for="article in featuredArticles"
          :key="article.slug"
          :article="article"
          :featured="true"
        />
      </div>
    </div>
  </section>

  <!-- ── All Guides ── -->
  <section id="guides" class="section-guides">
    <div class="container">
      <div class="guides-header">
        <h2 class="section-title">📚 All Posts</h2>
        <p class="guides-count">{{ filteredArticles.length }} article{{ filteredArticles.length !== 1 ? 's' : '' }}</p>
      </div>

      <!-- Category filter -->
      <div class="category-filter" role="group" aria-label="Filter by category">
        <button
          v-for="cat in allCategories"
          :key="cat"
          class="filter-btn"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Grid -->
      <Transition name="fade" mode="out-in">
        <div v-if="filteredArticles.length" :key="activeCategory" class="articles-grid">
          <ArticleCard
            v-for="article in filteredArticles"
            :key="article.slug"
            :article="article"
          />
        </div>
        <div v-else class="empty-state">
          <p>No posts in this category yet — check back soon.</p>
        </div>
      </Transition>
    </div>
  </section>

  <!-- ── Contribute CTA ── -->
  <section class="section-contribute">
    <div class="container">
      <div class="contribute-box">
        <span class="contribute-icon">✍️</span>
        <h3 class="contribute-title">Have something to share?</h3>
        <p>
          Played something interesting? Stumbled on an unexpected strategy? Drop a new
          <code>.md</code> file in <code>src/articles/</code> — it shows up here automatically.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Hero Banner ── */
.hero-banner {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding: 4rem 1.25rem;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 120%, rgba(201,162,39,0.12) 0%, transparent 70%),
    radial-gradient(ellipse 60% 50% at 20% 0%, rgba(58,110,168,0.1) 0%, transparent 60%),
    linear-gradient(180deg, #080c18 0%, #0d1425 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.hero-badge {
  display: inline-block;
  padding: 0.3rem 1rem;
  background: rgba(201,162,39,0.12);
  border: 1px solid rgba(201,162,39,0.35);
  border-radius: 20px;
  font-size: 0.8rem;
  color: #c9a227;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hero-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 900;
  color: #e8dcc8;
  line-height: 1.2;
  margin: 0;
  letter-spacing: 0.01em;
}

.hero-highlight {
  color: #c9a227;
  display: block;
}

.hero-subtitle {
  font-size: 1.05rem;
  color: #6b7280;
  max-width: 520px;
  line-height: 1.7;
  margin: 0;
}

.hero-cta {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #c9a227;
  color: #080c18;
  font-family: 'Cinzel', serif;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 8px;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
  box-shadow: 0 4px 16px rgba(201,162,39,0.25);
}

.hero-cta:hover {
  background: #e8c23a;
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(201,162,39,0.35);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-cta-secondary {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  background: transparent;
  color: #a89880;
  font-family: 'Cinzel', serif;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 8px;
  text-decoration: none;
  letter-spacing: 0.04em;
  border: 1px solid #1a2d4a;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}

.hero-cta-secondary:hover {
  color: #c9a227;
  border-color: rgba(201,162,39,0.4);
  background: rgba(201,162,39,0.06);
}

.hero-subtitle em {
  color: #a89880;
  font-style: normal;
}

.hero-ornament {
  position: absolute;
  right: 5%;
  bottom: 10%;
  font-size: 8rem;
  opacity: 0.04;
  user-select: none;
  pointer-events: none;
}

/* ── Sections ── */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

/* ── About strip ── */
.section-about {
  border-top: 1px solid #0d1425;
  border-bottom: 1px solid #0d1425;
  padding: 2.5rem 0;
  background: #04060e;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.about-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.about-icon {
  font-size: 1.75rem;
  line-height: 1;
}

.about-item h3 {
  font-family: 'Cinzel', serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #c9a227;
  margin: 0;
}

.about-item p {
  color: #4b5563;
  font-size: 0.875rem;
  line-height: 1.7;
  margin: 0;
}

.section-featured {
  padding: 3rem 0;
  border-bottom: 1px solid #0d1425;
}

.section-guides {
  padding: 3rem 0 4rem;
}

.section-title {
  font-family: 'Cinzel', serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: #e8dcc8;
  margin: 0 0 1.5rem;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
}

/* ── Guides header + filter ── */
.guides-header {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1rem;
}

.guides-count {
  font-size: 0.85rem;
  color: #4b5563;
  margin: 0;
}

.category-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
}

.filter-btn {
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  border: 1px solid #1a2d4a;
  background: transparent;
  color: #6b7280;
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover {
  border-color: rgba(201,162,39,0.4);
  color: #c9a227;
}

.filter-btn.active {
  background: rgba(201,162,39,0.12);
  border-color: rgba(201,162,39,0.5);
  color: #c9a227;
  font-weight: 600;
}

/* ── Articles grid ── */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: #4b5563;
}

/* ── Contribute box ── */
.section-contribute {
  padding: 2rem 0 3.5rem;
}

.contribute-box {
  background: #0d1425;
  border: 1px dashed #1a2d4a;
  border-radius: 12px;
  padding: 1.75rem 2rem;
  text-align: center;
}

.contribute-icon {
  font-size: 1.75rem;
  line-height: 1;
  display: block;
  margin-bottom: 0.25rem;
}

.contribute-title {
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  color: #a89880;
  margin: 0 0 0.6rem;
  font-weight: 600;
}

.contribute-box p {
  color: #4b5563;
  font-size: 0.875rem;
  margin: 0;
  line-height: 1.6;
}

.contribute-box code {
  background: #111e35;
  color: #c9a227;
  padding: 0.1em 0.4em;
  border-radius: 4px;
  font-size: 0.85em;
}

/* ── Transition ── */
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* ── Responsive ── */
@media (max-width: 1024px) {
  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .hero-banner {
    min-height: 340px;
    padding: 3rem 1rem;
  }
  .articles-grid,
  .featured-grid {
    grid-template-columns: 1fr;
  }
  .section-featured,
  .section-guides {
    padding: 2rem 0;
  }
  .hero-ornament {
    display: none;
  }
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
  .hero-cta,
  .hero-cta-secondary {
    width: 100%;
    text-align: center;
  }
}
</style>
