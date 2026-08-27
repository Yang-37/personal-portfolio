import { motion } from 'framer-motion'
import { projects } from '../data/projects'

/**
 * 项目展示区块（PRD「项目展示」）
 * 每个项目卡片包含：截图（懒加载）、标题、描述、技术栈标签、项目链接
 * 滚动进入视口时卡片依次淡入上移（AGENTS.md：平滑的滚动动画）
 */
function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* 区块标题 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-muted">
            项目展示
          </p>
          <h2 className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            精选项目
          </h2>
          <p className="mt-4 text-muted">以下是我参与开发的一些项目</p>
        </motion.div>

        {/* 项目卡片网格 */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition-colors hover:border-accent-purple/40"
            >
              {/* 项目截图：懒加载，悬停轻微放大 */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} 截图`}
                  loading="lazy"
                  width={800}
                  height={450}
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* 内容区 */}
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{project.description}</p>

                {/* 技术栈标签 */}
                <div className="mt-1 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 项目链接 */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium text-accent-cyan transition-colors hover:text-accent-purple"
                >
                  查看项目
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
