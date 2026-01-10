import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 如果你的仓库名是 "username.github.io"，base 保持为 '/'
  // 如果你的仓库名是 "my-lab"，请将 base 改为 '/my-lab/'
  base: '/', 
  build: {
    outDir: 'dist',
  }
})