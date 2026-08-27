import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite 配置：集成 React 与 Tailwind CSS 插件
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
