import axios from 'axios'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router' // 🔍 這個你要加上！

const isDev = import.meta.env.MODE === 'development'

const baseURL = isDev
  ? 'http://localhost:8080'
  : 'https://你的正式後端網址.com'

const api = axios.create({
  baseURL,
  timeout: 5000,
})

// ✅ 加上 token
api.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore()
    const token = authStore?.token || localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// ✅ 自動導向登入頁
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const router = useRouter()
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default api
