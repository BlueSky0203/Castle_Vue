/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // 如果有使用 index.html 
    "./src/**/*.{vue,js,ts,jsx,tsx}" // 確保包含所有 Vue 和 TypeScript 文件
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
