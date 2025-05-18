import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useAuthStore } from '@/stores/auth'

const app = createApp(App)


app.use(createPinia())
app.use(router)

const authStore = useAuthStore() // 呼叫 store
authStore.persistAuth() // 還原 token 與使用者資訊

app.mount('#app')
