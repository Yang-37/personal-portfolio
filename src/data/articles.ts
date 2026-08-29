/** 从 Markdown 文件解析出的文章数据。 */
export interface Article {
  /** Markdown 文件名，同时作为文章 URL。 */
  id: string
  title: string
  date: string
  tag: string
  excerpt: string
  content: string
}

type ArticleMeta = Omit<Article, 'id' | 'content'>

/** 解析 Markdown 顶部的文章信息。 */
function parseArticle(path: string, source: string): Article {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) throw new Error('文章 ' + path + ' 缺少有效的 front matter')
  const metadata = Object.fromEntries(
    match[1].split(/\r?\n/).filter((line) => line.trim()).map((line) => {
      const separator = line.indexOf(':')
      const key = line.slice(0, separator).trim()
      const value = line.slice(separator + 1).trim().replace(/^(['"])(.*)\1$/, '$2')
      return [key, value]
    }),
  ) as Partial<ArticleMeta>
  const requiredFields: (keyof ArticleMeta)[] = ['title', 'date', 'tag', 'excerpt']
  for (const field of requiredFields) {
    if (!metadata[field]) throw new Error('文章 ' + path + ' 缺少 ' + field + ' 字段')
  }
  return {
    id: path.split('/').pop()!.replace(/\.md$/, ''),
    title: metadata.title!,
    date: metadata.date!,
    tag: metadata.tag!,
    excerpt: metadata.excerpt!,
    content: match[2].trim(),
  }
}

// 新增 .md 文件后 Vite 会自动将它加入文章列表，无需修改代码。
const markdownFiles = import.meta.glob('../content/articles/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

export const articles = Object.entries(markdownFiles)
  .map(([path, source]) => parseArticle(path, source))
  .sort((a, b) => b.date.localeCompare(a.date))
