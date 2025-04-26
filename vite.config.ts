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
})
