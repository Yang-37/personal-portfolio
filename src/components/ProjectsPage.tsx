import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import Footer from './Footer'
import Header from './Header'
import ProjectCard from './ProjectCard'

const PAGE_SIZE = 9

/** 全部项目页：支持关键词、技术栈筛选和分页。 */
function ProjectsPage() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const filtered = useMemo(() => {
    const keyword = query.trim().toLowerCase()
    return projects.filter((project) =>
      !keyword || [project.name, project.description, ...project.techStack].some((value) => value.toLowerCase().includes(keyword)),
    )
  }, [query])
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))

  return (
    <div className="min-h-svh bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-5xl px-6 pb-20 pt-32">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">全部项目</h1>
        <p className="mt-4 text-muted">通过名称、描述或技术栈搜索项目。</p>
        <div className="mt-10">
          <input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1) }} placeholder="搜索项目…" aria-label="搜索项目" className="w-full rounded-full border border-line bg-surface px-5 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-primary sm:max-w-sm" />
        </div>
        {filtered.length ? (
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
          </div>
        ) : <p className="mt-16 text-center text-muted">没有找到匹配的项目。</p>}
        {totalPages > 1 && <div className="mt-10 flex justify-center gap-2">{Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => <button key={number} type="button" onClick={() => setPage(number)} className={'h-10 w-10 rounded-full text-sm ' + (page === number ? 'bg-primary text-primary-foreground' : 'border border-line text-muted')}>{number}</button>)}</div>}
      </main>
      <Footer />
    </div>
  )
}

export default ProjectsPage
