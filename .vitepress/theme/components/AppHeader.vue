<script setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()
const menuOpen = ref(false)

const isHome = computed(() => page.value.relativePath === 'index.md')

function toggleMenu() { menuOpen.value = !menuOpen.value }
function closeMenu() { menuOpen.value = false }
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <a href="/" class="logo-link" @click="closeMenu">
        <img src="/logo.png" alt="Scroll Tome – HoMM: Olden Era Journal" class="logo-img" />
      </a>

      <nav class="desktop-nav" aria-label="Main navigation">
        <a href="/" class="nav-link" :class="{ active: isHome }">Home</a>
        <a href="/#stories" class="nav-link" @click="closeMenu">Stories</a>
        <a href="/#guides" class="nav-link" @click="closeMenu">All Posts</a>
      </nav>

      <button
        class="hamburger"
        :class="{ open: menuOpen }"
        @click="toggleMenu"
        aria-label="Toggle navigation menu"
        :aria-expanded="menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <Transition name="slide-down">
      <nav v-if="menuOpen" class="mobile-nav" aria-label="Mobile navigation">
        <a href="/" class="mobile-nav-link" @click="closeMenu">🏠 Home</a>
        <a href="/#stories" class="mobile-nav-link" @click="closeMenu">🌟 Stories</a>
        <a href="/#guides" class="mobile-nav-link" @click="closeMenu">📖 All Posts</a>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(8, 12, 24, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #1a2d4a;
}
.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.logo-link { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; }
.logo-img { height: 44px; width: auto; object-fit: contain; border-radius: 6px; transition: opacity 0.2s; }
.logo-link:hover .logo-img { opacity: 0.85; }
.desktop-nav { display: flex; align-items: center; gap: 0.25rem; }
.nav-link {
  color: #a89880;
  text-decoration: none;
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s, background 0.2s;
}
.nav-link:hover, .nav-link.active { color: #c9a227; background: rgba(201,162,39,0.1); }
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.hamburger span { display: block; height: 2px; background: #c9a227; border-radius: 2px; transition: transform 0.25s, opacity 0.25s; transform-origin: center; }
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
.mobile-nav { display: flex; flex-direction: column; background: #0d1425; border-top: 1px solid #1a2d4a; padding: 0.5rem 0; }
.mobile-nav-link { display: block; padding: 0.85rem 1.5rem; color: #e8dcc8; text-decoration: none; font-size: 0.95rem; font-weight: 500; border-bottom: 1px solid #111e35; transition: background 0.15s, color 0.15s; }
.mobile-nav-link:last-child { border-bottom: none; }
.mobile-nav-link:hover { background: rgba(201,162,39,0.08); color: #c9a227; }
.slide-down-enter-active, .slide-down-leave-active { transition: opacity 0.2s, transform 0.2s; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; transform: translateY(-8px); }
@media (max-width: 640px) {
  .desktop-nav { display: none; }
  .hamburger { display: flex; }
  .logo-img { height: 36px; }
}
</style>
