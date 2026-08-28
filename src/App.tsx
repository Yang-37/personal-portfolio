// 根组件：按 TECH_DESIGN.md 结构组织页面区块
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
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

export default App
