import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { articles } from '../data/articles'
import ArticleCard from './ArticleCard'

/** 首页文章区块：只展示最新三篇。 */
function Articles() {
  return (
    <section id="articles" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }} className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">文章</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">最新文章</h2>
          <p className="mt-4 text-muted">记录思考，分享见解</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((article, index) => <ArticleCard key={article.id} article={article} index={index} />)}
        </div>
        <div className="mt-10 text-center">
          <Link to="/articles" className="inline-flex rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            查看全部文章
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Articles
