<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-logo">⚔️ Scroll Tome</span>
        <p class="footer-desc">
          A player community journal for Heroes of Might and Magic: Olden Era.
          Not affiliated with Ubisoft or Unfrozen Studio.
        </p>
      </div>
      <div class="footer-links">
        <h3 class="footer-heading">Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#guides">All Posts</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h3 class="footer-heading">Categories</h3>
        <ul>
          <li><a href="/#guides">Player Insights</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© {{ year }} Scroll Tome. All rights reserved.</p>
      <p class="footer-disclaimer">Heroes of Might and Magic is a trademark of Ubisoft. This is a fan-made site.</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer { background: #04060e; border-top: 1px solid #1a2d4a; margin-top: auto; }
.footer-inner { max-width: 1200px; margin: 0 auto; padding: 3rem 1.25rem 2rem; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 2rem; }
.footer-brand { max-width: 340px; }
.footer-logo { font-family: 'Cinzel', serif; font-size: 1.05rem; font-weight: 700; color: #c9a227; display: block; margin-bottom: 0.75rem; }
.footer-desc { color: #6b7280; font-size: 0.85rem; line-height: 1.6; margin: 0; }
.footer-heading { font-family: 'Cinzel', serif; font-size: 0.8rem; font-weight: 600; color: #a89880; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; }
.footer-links ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.4rem; }
.footer-links a { color: #6b7280; text-decoration: none; font-size: 0.875rem; transition: color 0.2s; }
.footer-links a:hover { color: #c9a227; }
.footer-bottom { border-top: 1px solid #0d1425; max-width: 1200px; margin: 0 auto; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.3rem; align-items: center; text-align: center; }
.footer-bottom p { margin: 0; font-size: 0.8rem; color: #4b5563; }
.footer-disclaimer { font-size: 0.75rem !important; }
@media (max-width: 768px) {
  .footer-inner { grid-template-columns: 1fr 1fr; padding: 2rem 1.25rem 1.5rem; }
  .footer-brand { grid-column: 1 / -1; max-width: 100%; }
}
@media (max-width: 480px) { .footer-inner { grid-template-columns: 1fr; } }
</style>
