import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  define: {
    'process.env': {},
    global: 'window', // Fix for crypto error
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',  // 這邊加入 crypto polyfill
      '@': '/src', // 這是你的原始別名設置，假如這是你需要的話
    },
  },
  build: {
    outDir: 'dist',     // 明確設定打包輸出資料夾為 dist
    emptyOutDir: true,  // 每次打包前清空輸出資料夾，避免殘留舊檔
    sourcemap: false,   // 若需要可設 true，方便除錯
  },
})
