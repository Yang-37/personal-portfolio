import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Article } from '../data/articles'

/** 可复用的文章摘要卡片。 */
function ArticleCard({ article, index = 0 }: { article: Article; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group flex rounded-2xl border border-line bg-surface transition-colors hover:border-primary/40"
    >
      <Link to={'/article/' + article.id} className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3 text-xs">
          <span className="font-medium text-primary">{article.tag}</span>
          <time className="text-muted">{article.date}</time>
        </div>
        <h3 className="mt-3 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
          {article.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{article.excerpt}</p>
        <span className="mt-auto flex items-center gap-1 pt-4 text-xs font-medium text-primary">
          阅读全文
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </Link>
    </motion.article>
  )
}

export default ArticleCard
