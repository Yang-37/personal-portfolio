import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Header from './Header'
import { articles } from '../data/articles'

/**
 * 文章详情页：根据 URL 中的文章 id 展示正文全文
 * 正文支持 Markdown 渲染（标题、加粗、列表、代码块、表格等）
 * 路由：/article/:id
 */
function ArticleDetail() {
  const { id } = useParams()
  const article = articles.find((a) => a.id === Number(id))

  return (
    <div className="min-h-svh bg-background text-foreground">
      <Header />
      <article className="mx-auto max-w-2xl px-6 pb-20 pt-28">
        {article ? (
          <>
            <Link
              to="/#articles"
              className="inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-primary-dark"
            >
              <span aria-hidden="true">←</span> 返回文章列表
            </Link>

            <span className="mt-8 inline-block rounded-full border border-line bg-muted/10 px-3 py-1 text-xs text-muted">
              {article.tag}
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-3 text-sm text-muted">{article.date}</p>

            {/* Markdown 正文：prose 提供文章排版样式 */}
            <div className="prose prose-neutral mt-10 max-w-none border-t border-line pt-10 dark:prose-invert">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  a: ({ node: _node, ...props }) => (
                    <a {...props} target="_blank" rel="noreferrer" />
                  ),
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>
          </>
        ) : (
          <div className="py-20 text-center">
            <h1 className="text-2xl font-bold text-foreground">文章不存在</h1>
            <p className="mt-3 text-muted">这篇文章可能已被删除或地址有误。</p>
            <Link to="/#articles" className="mt-6 inline-block text-primary hover:text-primary-dark">
              ← 返回文章列表
            </Link>
          </div>
        )}
      </article>
    </div>
  )
}

export default ArticleDetail
