# 杨阳的个人作品集网站

> 用代码构建产品，用文字传递思考。

现代极简风格的个人作品集网站，支持浅色 / 深色模式切换。

🔗 **线上地址：https://personal-portfolio-six-roan-52.vercel.app/**

## 功能

- 首页 Hero：头像、大标题、简介与行动按钮
- 关于我：个人介绍 + 技能进度条
- 项目展示：项目卡片（截图 / 标题 / 描述 / 技术栈标签 / 链接）
- 文章：写作列表
- 联系方式：邮箱、GitHub 与社交媒体链接
- 深色 / 浅色模式一键切换（记忆用户选择）
- 滚动动画（Framer Motion）、移动端适配、图片懒加载

## 技术栈

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion
- React Router

## 本地开发

```bash
npm install      # 安装依赖
npm run dev      # 启动开发服务器（http://localhost:5173）
npm run build    # 生产构建
npm run preview  # 预览生产构建
npm run lint     # 代码检查
```

## 部署

已部署到 Vercel，并接入 GitHub 自动部署：推送到 `main` 分支后 Vercel 会自动重新构建发布。

## 项目结构

```
src/
  components/   # Header / Hero / About / Projects / Articles / Contact / Footer
  data/         # projects.ts / skills.ts / articles.ts
  assets/       # 头像与项目截图
  App.tsx       # 页面组装
  main.tsx      # 入口
```
