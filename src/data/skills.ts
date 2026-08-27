// 技能列表数据（TECH_DESIGN.md：数据存储在 TypeScript 文件中）
export interface Skill {
  name: string
  /** 熟练度（0 - 100） */
  level: number
}

// 后续在此数组中直接添加 / 修改技能即可
export const skills: Skill[] = []
