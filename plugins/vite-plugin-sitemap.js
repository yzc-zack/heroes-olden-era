import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { resolve, join } from 'node:path'

const SITE_URL = 'https://scrolltome.com'

/**
 * Vite plugin: generates sitemap.xml in the build output directory.
 * Reads all .md files in src/articles/ to extract slugs and dates.
 */
export default function sitemap() {
  return {
    name: 'vite-plugin-sitemap',
    closeBundle() {
      const articlesDir = resolve('src/articles')
      const files = readdirSync(articlesDir).filter((f) => f.endsWith('.md'))

      const articles = files.map((file) => {
        const raw = readFileSync(join(articlesDir, file), 'utf-8')
        const slug = file.replace('.md', '')
        const dateMatch = raw.match(/^date:\s*["']?(\d{4}-\d{2}-\d{2})["']?/m)
        const lastmod = dateMatch ? dateMatch[1] : new Date().toISOString().slice(0, 10)
        return { slug, lastmod }
      })

      const today = new Date().toISOString().slice(0, 10)

      const urls = [
        `  <url>\n    <loc>${SITE_URL}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>`,
        ...articles.map(
          (a) =>
            `  <url>\n    <loc>${SITE_URL}/guide/${a.slug}</loc>\n    <lastmod>${a.lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
        ),
      ]

      const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...urls,
        '</urlset>',
        '',
      ].join('\n')

      const outPath = resolve('dist/sitemap.xml')
      writeFileSync(outPath, xml, 'utf-8')
      console.log(`✅ sitemap.xml generated (${articles.length} articles)`)
    },
  }
}
