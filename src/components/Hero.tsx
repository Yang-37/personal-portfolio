import { motion } from 'framer-motion'
import avatar from '../assets/avatar.jpg'

/**
 * 首页 Hero：现代极简风格
 * 浅灰白背景 + 蓝色主色调，居中对称布局
 * 自上而下：圆形动漫头像 → 超大黑色标题 → 蓝色副标题 → 灰色简介 → 两个按钮
 */
function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 pb-16 pt-28"
    >
      {/* 背景装饰：极简柔光（纯装饰） */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
      >
        {/* 圆形动漫头像 */}
        <motion.img
          src={avatar}
          alt="杨阳的头像"
          loading="lazy"
          width={512}
          height={512}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="h-40 w-40 rounded-full border-4 border-surface shadow-xl shadow-primary/10 sm:h-44 sm:w-44"
        />

        {/* 超大黑色标题 */}
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          杨阳
        </h1>

        {/* 蓝色副标题 */}
        <p className="text-lg font-medium text-primary sm:text-xl">开发者 · 写作者 · 长期主义者</p>

        {/* 灰色简介 */}
        <p className="max-w-xl leading-relaxed text-muted">
          用代码构建产品，用文字传递思考。关注科技互联网、AI 与跨学科阅读写作。
        </p>

        {/* 按钮：蓝色实心 + 白色描边 */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary-dark"
          >
            查看项目
          </a>
          <a
            href="#contact"
            className="rounded-full border border-primary bg-white px-7 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5 dark:bg-transparent"
          >
            联系我
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
