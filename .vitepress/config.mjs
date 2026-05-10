import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

const SITE_URL = 'https://scrolltome.com'

export default defineConfig({
  title: 'Scroll Tome',
  description: 'Player-written guides for Heroes of Might and Magic: Olden Era',
  outDir: 'docs',
  cleanUrls: true,
  srcExclude: ['src/**/*.md'],
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap', rel: 'stylesheet' }],
    ['meta', { property: 'og:site_name', content: 'Scroll Tome' }],
    ['meta', { name: 'theme-color', content: '#080c18' }],
  ],
  transformPageData(pageData) {
    const relativePath = pageData.relativePath
    const cleanPath = relativePath.replace(/\.md$/, '').replace(/\/index$/, '')
    const canonicalUrl = cleanPath === 'index' ? `${SITE_URL}/` : `${SITE_URL}/${cleanPath}`

    pageData.frontmatter.head ??= []

    pageData.frontmatter.head.push(['link', { rel: 'canonical', href: canonicalUrl }])

    if (pageData.frontmatter.date && pageData.frontmatter.title) {
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: pageData.frontmatter.title,
        description: pageData.frontmatter.description || '',
        datePublished: pageData.frontmatter.date,
        dateModified: pageData.frontmatter.date,
        url: canonicalUrl,
        publisher: {
          '@type': 'Organization',
          name: 'Scroll Tome',
          url: SITE_URL,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
      }
      pageData.frontmatter.head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(jsonLd),
      ])
    }
  },
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
    hostname: SITE_URL,
    transformItems(items) {
      return items.filter((item) => !item.url.startsWith('README'))
    },
  },
})
