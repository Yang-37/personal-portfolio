import { motion } from 'framer-motion'
import { skills } from '../data/skills'

/**
 * 关于我区块（PRD「关于我」：详细介绍 + 技能列表）
 * 左：个人介绍；右：技能进度条，滚动进入视口时动画填充
 */
function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* 区块标题 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">关于我</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">关于我</h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* 详细介绍 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <p className="text-lg font-medium text-foreground">
              你好，我是杨阳，一名前端开发者、写作者和长期主义者。
            </p>
            <p className="leading-relaxed text-muted">
              我相信好的产品源于对细节的坚持，好的文字来自持续的思考。我热爱用代码把想法变成现实，也享受通过写作梳理认知、传递价值。
            </p>
            <p className="leading-relaxed text-muted">
              我关注科技互联网、AI 与跨学科阅读写作，希望在技术之外保持更开阔的视野，做一个能持续输出、不断成长的长期主义者。
            </p>
          </motion.div>

          {/* 技能列表 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-6 text-lg font-semibold text-foreground">技能</h3>
            <div className="flex flex-col gap-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted/15">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
