import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    user: null as null | { name: string; email: string; username: string },
  }),
  persist: true,  // 自動把整個 state 存 localStorage 並還原
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUser(user: any) {
      this.user = user
    },
    logout() {
      this.token = ''
      this.user = null
    },
  },
})
