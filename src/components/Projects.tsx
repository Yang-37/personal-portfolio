import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

/** 首页项目区块：只展示前四个精选项目。 */
function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }} className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">项目展示</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">精选项目</h2>
          <p className="mt-4 text-muted">以下是我参与开发的一些项目</p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
        <div className="mt-10 text-center">
          <Link to="/projects" className="inline-flex rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            查看全部项目
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
