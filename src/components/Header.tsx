import { useState } from 'react'
import { Link } from 'react-router-dom'

// 顶部导航菜单项（对应页面各区块，使用 /#锚点 以便在文章详情页也能跳回首页对应区块）
const NAV_ITEMS = [
  { label: '关于我', href: '/#about' },
  { label: '项目', href: '/#projects' },
  { label: '文章', href: '/#articles' },
  { label: '社交媒体', href: '/#social' },
  { label: '联系我', href: '/#contact' },
]

/** 深色模式切换按钮（复用，桌面端 / 移动端各一份） */
function ThemeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={dark ? '切换到浅色模式' : '切换到深色模式'}
      className="rounded-full border border-line p-2 text-base leading-none transition-colors hover:bg-muted/10"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  )
}

/**
 * 顶部导航栏：左侧蓝色品牌名「杨阳」，右侧导航菜单 + 深色模式切换
 * 固定顶部、毛玻璃背景；移动端收起为汉堡菜单
 */
function Header() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const [menuOpen, setMenuOpen] = useState(false)

  // 切换深色 / 浅色模式，并记住用户选择
  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      /* localStorage 不可用时静默忽略 */
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* 品牌名 */}
        <Link to="/" className="text-xl font-bold text-primary">
          杨阳
        </Link>

        {/* 桌面端菜单 */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle dark={dark} onToggle={toggleDark} />
        </div>

        {/* 移动端：深色切换 + 汉堡按钮 */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle dark={dark} onToggle={toggleDark} />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="打开菜单"
            aria-expanded={menuOpen}
            className="rounded-full border border-line p-2 text-base leading-none transition-colors hover:bg-muted/10"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* 移动端展开菜单 */}
      {menuOpen && (
        <div className="border-t border-line bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
