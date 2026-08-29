import { useMemo, useState } from 'react'
import { articles } from '../data/articles'
import ArticleCard from './ArticleCard'
import Footer from './Footer'
import Header from './Header'

const PAGE_SIZE = 9

/** 全部文章页：支持关键词、标签筛选和分页。 */
function ArticlesPage() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const filtered = useMemo(() => {
    const keyword = query.trim().toLowerCase()
    return articles.filter((article) =>
      !keyword || [article.title, article.excerpt, article.tag].some((value) => value.toLowerCase().includes(keyword)),
    )
  }, [query])
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))

  return (
    <div className="min-h-svh bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-5xl px-6 pb-20 pt-32">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">全部文章</h1>
        <p className="mt-4 text-muted">通过标题、摘要或标签搜索文章。</p>
        <div className="mt-10">
          <input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1) }} placeholder="搜索文章…" aria-label="搜索文章" className="w-full rounded-full border border-line bg-surface px-5 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-primary sm:max-w-sm" />
        </div>
        {filtered.length ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((article, index) => <ArticleCard key={article.id} article={article} index={index} />)}
          </div>
        ) : <p className="mt-16 text-center text-muted">没有找到匹配的文章。</p>}
        {totalPages > 1 && <div className="mt-10 flex justify-center gap-2">{Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => <button key={number} type="button" onClick={() => setPage(number)} className={'h-10 w-10 rounded-full text-sm ' + (page === number ? 'bg-primary text-primary-foreground' : 'border border-line text-muted')}>{number}</button>)}</div>}
      </main>
      <Footer />
    </div>
  )
}

export default ArticlesPage
