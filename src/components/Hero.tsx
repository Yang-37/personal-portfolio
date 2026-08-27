import { motion } from 'framer-motion'
import avatar from '../assets/avatar.svg'

/**
 * 首页 Hero 区块（PRD「首页」：大标题 + 简介 + 头像）
 * 深色主题 + 青紫渐变强调色（AGENTS.md 设计要求）
 * 头像使用懒加载，后续可替换为本人照片（src/assets/avatar.svg）
 */
function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 py-20"
    >
      {/* 背景装饰：柔和渐变光晕，增强深色主题氛围（不影响可读性，纯装饰） */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-purple/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent-cyan/20 blur-3xl"
      />

      <div className="relative flex max-w-5xl flex-col items-center gap-12 sm:flex-row sm:justify-between">
        {/* 文字区：大标题 + 简介 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-xl text-center sm:text-left"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted">
            你好，我是
          </p>
          <h1 className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-6xl">
            热爱创造的前端开发者
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            专注于构建简洁、优雅、高性能的 Web 体验，这里展示我的项目与技能。
          </p>
        </motion.div>

        {/* 头像 */}
        <motion.img
          src={avatar}
          alt="个人头像"
          loading="lazy"
          width={256}
          height={256}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="h-48 w-48 rounded-full border-4 border-accent-cyan/30 shadow-2xl shadow-accent-purple/20 sm:h-64 sm:w-64"
        />
      </div>
    </section>
  )
}

export default Hero
