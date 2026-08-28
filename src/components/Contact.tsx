import { motion } from 'framer-motion'

// 联系方式（PRD「联系方式」：邮箱、GitHub）
const CONTACT_LINKS = [
  { label: '邮箱', value: 'yang1231528@163.com', href: 'mailto:yang1231528@163.com', icon: '✉️' },
  { label: 'GitHub', value: 'github.com/Yang-37', href: 'https://github.com/Yang-37', icon: '🐙' },
]

/**
 * 联系方式区块（导航「联系我」）
 * 包含邮箱与 GitHub 两个联系方式；社交链接块带 id="social" 供导航锚点跳转
 */
function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* 区块标题 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">联系我</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">联系我</h2>
          <p className="mt-4 text-muted">欢迎通过以下方式找到我，期待与你交流。</p>
        </motion.div>

        {/* 联系链接 */}
        <div id="social" className="grid gap-4 sm:grid-cols-2">
          {CONTACT_LINKS.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
              className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-surface p-6 text-center transition-colors hover:border-primary/40"
            >
              <span className="text-2xl" aria-hidden="true">{link.icon}</span>
              <span className="font-medium text-foreground">{link.label}</span>
              <span className="break-all text-xs text-muted">{link.value}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
