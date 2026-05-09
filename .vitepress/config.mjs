import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: 'Scroll Tome',
  description: 'Player-written guides for Heroes of Might and Magic: Olden Era',
  outDir: 'docs',
  cleanUrls: true,
  srcExclude: ['src/**/*.md'],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap', rel: 'stylesheet' }],
    ['meta', { property: 'og:site_name', content: 'Scroll Tome' }],
    ['meta', { name: 'theme-color', content: '#080c18' }],
  ],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      entries: ['.vitepress/theme/**/*.{vue,js,ts}'],
      esbuildOptions: {
        plugins: [
          {
            name: 'vitepress-data-stub',
            setup(build) {
              build.onResolve({ filter: /\.data\.(js|ts)$/ }, () => ({ external: true }))
            },
          },
        ],
      },
    },
    server: {
      watch: {
        ignored: ['**/src/**'],
      },
    },
  },
  sitemap: {
    hostname: 'https://scrolltome.com',
  },
})
