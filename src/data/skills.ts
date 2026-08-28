// 技能列表数据（TECH_DESIGN.md：数据存储在 TypeScript 文件中）
export interface Skill {
  name: string
  /** 熟练度（0 - 100） */
  level: number
}

// 示例技能数据，按需增删修改
export const skills: Skill[] = [
  { name: 'React / TypeScript', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'Vite / 前端工程化', level: 80 },
  { name: 'UI 设计', level: 70 },
  { name: '写作', level: 85 },
]
