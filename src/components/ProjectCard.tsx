import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

/** 可复用的项目展示卡片。 */
function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-primary/40"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.name + ' 截图'}
          loading="lazy"
          width={800}
          height={450}
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-1 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-full border border-line bg-muted/10 px-3 py-1 text-xs text-muted">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
        >
          查看项目 <span aria-hidden="true">→</span>
        </a>
      </div>
    </motion.article>
  )
}

export default ProjectCard
