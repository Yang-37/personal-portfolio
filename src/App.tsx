// 根组件：React Router 路由（首页 / 文章详情页）
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ArticleDetail from './components/ArticleDetail'
import ArticlesPage from './components/ArticlesPage'
import ProjectsPage from './components/ProjectsPage'

/** 首页：所有区块 + 锚点滚动（支持 /#区块 直达） */
function HomePage() {
  const { hash } = useLocation()

  // 根据 URL 中的 #锚点 平滑滚动到对应区块（扣除固定导航高度）
  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const timer = setTimeout(() => {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }, 50)
    return () => clearTimeout(timer)
  }, [hash])

  return (
    <main className="min-h-svh bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
