// 项目数据（TECH_DESIGN.md：数据存储在 TypeScript 文件中）
// 每个项目卡片包含：项目名称、截图、简短描述、技术栈、项目链接
import tradePlatformImg from '../assets/projects/trade-platform.png'
import blogImg from '../assets/projects/blog.svg'
import adminImg from '../assets/projects/admin.svg'
import dashboardImg from '../assets/projects/dashboard.svg'
import weatherImg from '../assets/projects/weather.svg'

export interface Project {
  id: number
  /** 项目名称 */
  name: string
  /** 项目截图（图片使用懒加载） */
  image: string
  /** 简短描述 */
  description: string
  /** 技术栈 */
  techStack: string[]
  /** 项目链接 */
  url: string
}

// 项目数据：trade-platform 为真实项目，其余为示例占位（可替换为你的真实项目）
export const projects: Project[] = [
  {
    id: 1,
    name: 'trade-platform · 用户平台',
    image: tradePlatformImg,
    description:
      '前后端分离的全栈项目：Vue 前端 + Spring Boot 后端 + MySQL，支持账号密码与第三方登录（Gitee / QQ）、用户管理、商品发布与交易等功能，已部署上线。',
    techStack: ['Vue', 'Spring Boot', 'MySQL', 'Sa-Token', 'Nginx'],
    url: 'https://github.com/Yang-37/trade-platform',
  },
  {
    id: 2,
    name: '个人博客系统',
    image: blogImg,
    description: '基于 React 开发的轻量博客系统，支持 Markdown 写作、标签分类与全文搜索。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    url: 'https://github.com/',
  },
  {
    id: 3,
    name: '电商管理后台',
    image: adminImg,
    description: '面向电商运营的一站式管理后台，涵盖商品、订单、库存与数据统计等核心模块。',
    techStack: ['React', 'Redux Toolkit', 'Vite', 'PostgreSQL'],
    url: 'https://github.com/',
  },
  {
    id: 4,
    name: '数据可视化大屏',
    image: dashboardImg,
    description: '实时数据可视化大屏，通过丰富的图表组件直观呈现关键业务指标。',
    techStack: ['ECharts', 'TypeScript', 'WebSocket'],
    url: 'https://github.com/',
  },
  {
    id: 5,
    name: '天气查询应用',
    image: weatherImg,
    description: '简洁易用的天气应用，支持城市搜索、实时天气与未来多日预报。',
    techStack: ['React', 'Tailwind CSS', 'OpenWeather API'],
    url: 'https://github.com/',
  },
]
