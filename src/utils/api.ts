import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const baseURL = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
  baseURL,
  timeout: 5000,
})

// ✅ 自動附帶 token
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

// ✅ 攔截 401 並導向登入頁（用 window.href）
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
