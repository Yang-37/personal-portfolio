// 文章数据（TECH_DESIGN.md：数据存储在 TypeScript 文件中）
export interface Article {
  id: number
  /** 文章标题 */
  title: string
  /** 发布日期 */
  date: string
  /** 分类标签 */
  tag: string
  /** 摘要 */
  excerpt: string
}

// 示例文章数据：占位内容，后续替换为真实文章
export const articles: Article[] = [
  {
    id: 1,
    title: '从零搭建个人作品集网站',
    date: '2026-08',
    tag: '前端',
    excerpt: '记录我用 React + Vite + Tailwind CSS 从零搭建这个作品集网站的完整过程与踩坑经验。',
  },
  {
    id: 2,
    title: '我如何理解「长期主义」',
    date: '2026-07',
    tag: '思考',
    excerpt: '关于坚持、复利与选择：为什么我相信持续做正确的小事，比偶尔的爆发更有力量。',
  },
  {
    id: 3,
    title: 'AI 时代的阅读与写作',
    date: '2026-06',
    tag: 'AI',
    excerpt: '当 AI 可以代写一切时，真正的思考反而变得更加珍贵。聊聊我的输入与输出方法。',
  },
]
