import { marked } from 'marked'

/**
 * Minimal YAML frontmatter parser (supports string, number, boolean, inline array).
 * Avoids gray-matter which has Node.js-only dependencies.
 */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const data = {}
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':')
    if (idx < 0) continue
    const key = line.slice(0, idx).trim()
    let val = line.slice(idx + 1).trim()
    if (!key) continue
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    } else if (val.startsWith('[') && val.endsWith(']')) {
      val = val
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/['"]/g, ''))
        .filter(Boolean)
    } else if (val === 'true') {
      val = true
    } else if (val === 'false') {
      val = false
    } else if (!isNaN(val) && val !== '') {
      val = Number(val)
    }
    data[key] = val
  }

  return { data, content: match[2] }
}

/** Configure marked for safe, clean output */
marked.setOptions({ breaks: true })

/** Load all .md files from src/articles/ via Vite's import.meta.glob */
const rawFiles = import.meta.glob('../articles/*.md', { query: '?raw', import: 'default', eager: true })

/**
 * All articles, sorted newest-first.
 * Each article object has all frontmatter fields plus:
 *  - slug        (filename without .md)
 *  - html        (rendered markdown)
 *  - readingTime (estimated minutes)
 */
export const articles = Object.entries(rawFiles)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    const slug = path.split('/').pop().replace('.md', '')
    const wordCount = content.trim().split(/\s+/).length
    return {
      ...data,
      slug,
      html: marked(content),
      readingTime: Math.max(1, Math.ceil(wordCount / 200)),
    }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

/** Find a single article by slug */
export function getArticle(slug) {
  return articles.find((a) => a.slug === slug) ?? null
}

/** Unique list of all category names */
export const categories = [...new Set(articles.map((a) => a.category).filter(Boolean))]

/** Articles that share the same category (excluding self) */
export function getRelated(slug, limit = 3) {
  const current = getArticle(slug)
  if (!current) return []
  return articles.filter((a) => a.slug !== slug && a.category === current.category).slice(0, limit)
}
