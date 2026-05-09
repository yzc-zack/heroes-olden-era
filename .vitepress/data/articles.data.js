import { createContentLoader } from 'vitepress'

export default createContentLoader('guide/*.md', {
  includeSrc: true,
  transform(rawData) {
    return rawData
      .map((page) => {
        const src = (page.src || '').replace(/^---[\s\S]*?---/, '')
        const words = src.trim().split(/\s+/).length
        const readingTime = Math.max(1, Math.ceil(words / 200))
        return {
          title: page.frontmatter.title || '',
          description: page.frontmatter.description || '',
          date: page.frontmatter.date || '',
          category: page.frontmatter.category || 'Uncategorized',
          tags: page.frontmatter.tags || [],
          featured: page.frontmatter.featured || false,
          cover: page.frontmatter.cover || null,
          gameHeader: page.frontmatter.gameHeader || null,
          order: page.frontmatter.order || 99,
          url: page.url,
          readingTime,
        }
      })
      .sort((a, b) => a.order - b.order)
  },
})
