// 根组件：按 TECH_DESIGN.md 结构组织页面区块
// 目前包含 Hero 与 Projects，后续将逐步加入 About / Contact 等区块
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <Hero />
      <Projects />
    </main>
  )
}

export default App
