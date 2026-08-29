---
title: 从零搭建个人作品集网站
date: 2026-08-30
tag: 前端
excerpt: 从需求梳理、技术选型到响应式设计、Markdown 博客与自动部署，完整记录我的个人作品集网站搭建过程。
---

## 为什么要做个人作品集

对开发者来说，作品集不只是一张线上简历。简历告诉别人“我会什么”，作品集则直接展示“我做过什么、如何思考，以及对细节有多在意”。

我希望这个网站能够承担三个角色：

1. 集中展示个人经历、技能和项目
2. 用文章沉淀学习过程与技术思考
3. 提供一个可以持续迭代的个人空间

因此，我没有从复杂功能开始，而是先确定最重要的内容：首页介绍、关于我、项目、文章和联系方式。明确边界之后，开发过程会轻松很多。

## 技术选型

这个项目使用了以下技术：

- **React 19**：使用函数式组件和 Hooks 组织页面
- **TypeScript**：为组件属性和内容数据提供类型约束
- **Vite 8**：负责开发服务器与生产构建
- **Tailwind CSS 4**：快速完成响应式布局和主题样式
- **React Router**：管理首页、文章列表、项目列表与详情路由
- **Framer Motion**：实现进入视口时的淡入和位移动画
- **React Markdown**：把 Markdown 文件渲染成文章页面

这套组合的优势是开发体验流畅、生态成熟，而且特别适合内容以静态文件为主的个人网站。

## 初始化项目

首先使用 Vite 创建 React + TypeScript 项目：

```bash
npm create vite@latest personal-portfolio -- --template react-ts
cd personal-portfolio
npm install
```

然后安装页面需要的依赖：

```bash
npm install react-router-dom framer-motion react-markdown remark-gfm
npm install tailwindcss @tailwindcss/vite @tailwindcss/typography
```

启动开发服务器：

```bash
npm run dev
```

浏览器打开 `http://localhost:5173`，看到 Vite 默认页面就说明基础环境已经准备好了。

## 先规划页面结构

我的首页由几个相对独立的区块组成：

```text
首页
├── Header       顶部导航与主题切换
├── Hero         头像、姓名、简介和行动按钮
├── About        个人介绍与技能
├── Projects     精选项目
├── Articles     最新文章
├── Contact      邮箱和社交链接
└── Footer       页脚信息
```

每个区块都是独立组件。这样做的好处是职责清晰，后续修改某个区域时不会影响整张页面。重复出现的文章卡片和项目卡片也被抽成了可复用组件。

## 建立统一的主题

为了支持浅色和深色模式，我没有在每个组件里写死颜色，而是使用 CSS 变量定义主题令牌：

```css
:root {
  --bg: #f5f5f7;
  --surface: #ffffff;
  --fg: #111111;
  --muted: #6b7280;
  --primary: #2563eb;
}

.dark {
  --bg: #0a0a0a;
  --surface: #141414;
  --fg: #ffffff;
  --muted: #9ca3af;
  --primary: #3b82f6;
}
```

组件只使用 `bg-background`、`text-foreground`、`text-muted` 等语义化类名。切换主题时只需要改变根元素的 `dark` 类，不必逐个修改组件。

主题选择会保存到 `localStorage`，用户刷新页面后仍然可以保留上次的选择。

## 完成首页与响应式布局

Hero 是访问者进入网站后看到的第一个区域，所以我把信息控制得很克制：头像、姓名、一句话定位、简短介绍和两个操作按钮。

头像属于首屏关键内容，因此使用立即加载并提高请求优先级：

```tsx
<img
  src={avatar}
  alt="杨阳的头像"
  loading="eager"
  fetchPriority="high"
  width={512}
  height={512}
/>
```

项目截图位于首屏之外，继续使用 `loading="lazy"`，减少初次打开页面时不必要的网络请求。

移动端布局主要依靠 Tailwind 的响应式前缀完成。例如项目列表默认单列，在中等屏幕上切换成双列：

```tsx
<div className="grid gap-8 md:grid-cols-2">
  {/* 项目卡片 */}
</div>
```

导航栏在桌面端显示完整菜单，在移动端则变为主题按钮和折叠菜单，避免链接挤在狭窄屏幕中。

## 用数据驱动项目列表

项目名称、图片、描述、技术栈和链接都保存在一个 TypeScript 数组中，页面组件只负责遍历和展示：

```ts
export interface Project {
  id: number
  name: string
  image: string
  description: string
  techStack: string[]
  url: string
}
```

首页只取前四个精选项目：

```tsx
projects.slice(0, 4).map((project) => (
  <ProjectCard key={project.id} project={project} />
))
```

全部项目放在独立的 `/projects` 页面，并提供关键词搜索、技术栈筛选和分页。这样即使以后项目越来越多，首页也不会无限变长。

## 让写文章变得简单

最初，我把文章正文写在 TypeScript 字符串中。这种方式能用，但长文章会变得难以阅读，也不方便使用 Markdown 编辑器预览。

后来我把每篇文章改成独立的 `.md` 文件：

```text
src/content/articles/
├── build-portfolio.md
├── long-term-thinking.md
└── ai-reading-writing.md
```

每篇文章顶部包含基本信息：

```md
---
title: 文章标题
date: 2026-08-30
tag: 前端
excerpt: 一句话介绍文章内容。
---

## 正文标题

从这里开始写正文。
```

Vite 的 `import.meta.glob` 会自动扫描文章目录、解析内容并按日期排序。Markdown 文件名同时作为文章地址，例如：

```text
build-portfolio.md → /article/build-portfolio
```

现在发布文章只需复制模板、修改文件名并写正文，不需要再改 React 或 TypeScript。首页展示最新三篇，完整内容则进入 `/articles` 页面搜索和筛选。

## 添加滚动动画

页面动画遵循“少而轻”的原则。区块进入视口时进行短距离上移和透明度变化：

```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  {/* 区块内容 */}
</motion.div>
```

`viewport={{ once: true }}` 可以避免用户来回滚动时动画反复播放。动画的目标是帮助内容自然出现，而不是抢走内容本身的注意力。

## 构建与质量检查

开发完成后，我会执行两项检查：

```bash
npm run lint
npm run build
```

`lint` 用于发现代码问题，`build` 则同时进行 TypeScript 检查和生产构建。只有两项都通过，才说明代码至少具备稳定发布的基础。

还需要手动检查：

- 导航、项目和联系方式是否真的可以点击
- 手机宽度下是否出现横向滚动
- 深浅主题下文字对比度是否足够
- 图片是否有明确的替代文本
- 不存在的文章地址是否有友好的错误提示

## 部署到 Vercel

项目托管在 GitHub，并使用 Vercel 自动部署。导入仓库后，Vercel 会识别 Vite 项目，执行构建并发布 `dist` 目录。

日常更新流程非常简单：

```bash
git add .
git commit -m "更新作品集内容"
git push
```

推送到主分支后，Vercel 会自动触发新的构建。新增文章同样不需要额外操作，Markdown 文件会随着代码一起发布。

## 遇到的几个问题

### 首页内容越来越长

当文章和项目数量增加时，把所有内容都放在首页会影响浏览体验。解决方法是：首页只展示精选内容，完整列表放到独立页面，并加入筛选与分页。

### 动态路由刷新后出现 404

单页应用的路由由浏览器端处理。部署平台需要把未知路径回退到 `index.html`，否则直接刷新文章详情地址时，服务器可能找不到对应文件。

### 为了动画而动画

过多动画会让页面显得拖沓，也可能影响低性能设备。最终只保留进入视口淡入、按钮状态变化和图片轻微缩放，并控制持续时间。

### 示例内容影响可信度

作品集真正重要的是内容。占位项目、无效链接和空泛描述会降低可信度，所以发布前必须逐步替换成真实项目、截图、成果和复盘。

## 最后的思考

搭建作品集最难的部分并不是写出某个组件，而是决定“我想让别人看到什么”。技术只是表达工具，真实项目、持续写作和清晰表达才是网站长期价值的来源。

第一版不必完美。先完成一个结构清楚、可以访问的版本，再根据真实使用不断调整。今天增加一篇文章，明天补充一个项目，时间最终会让这个网站成为个人成长轨迹最直观的记录。
