import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { articles } from '../data/articles'

/**
 * 文章区块（导航「文章」）：文章卡片列表
 * 点击卡片进入文章详情页（/article/:id）阅读全文
 */
function Articles() {
  return (
    <section id="articles" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* 区块标题 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">文章</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">文章与写作</h2>
          <p className="mt-4 text-muted">记录思考，分享见解</p>
        </motion.div>

        {/* 文章卡片 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group flex rounded-2xl border border-line bg-surface transition-colors hover:border-primary/40"
            >
              <Link to={`/article/${article.id}`} className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium text-primary">{article.tag}</span>
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles
