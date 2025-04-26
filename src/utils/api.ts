import axios, { AxiosInstance } from 'axios';

// 自動判斷現在是開發 (dev) 還是上線 (prod)
const isDev: boolean = import.meta.env.MODE === 'development';

// 依環境切換 baseURL
const baseURL: string = isDev
  ? 'http://localhost:8080' // 開發時打到本機後端
  : 'https://你的正式後端網址.com'; // 上線時打到正式後端

const api: AxiosInstance = axios.create({
  baseURL,
  timeout: 5000, // 5 秒 timeout，可自由調整
});

export default api;