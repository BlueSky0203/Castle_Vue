import { defineStore } from 'pinia'

type User = {
  name: string
  email: string
  username: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    user: null as null | { name: string; email: string; username: string },
  }),
  persist: true,  // 自動把整個 state 存 localStorage 並還原
  getters: {
    isLoggedIn: (state) => !!state.token, // 雙重否定運算子 強制轉成布林值（Boolean）
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUser(user: User) {
      this.user = user
    },
    logout() {
      this.token = ''
      this.user = null
    },
  },
})
