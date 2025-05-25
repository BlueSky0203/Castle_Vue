<template>
  <AlertMessage
    v-if="alertState.show"
    :type="alertState.type"
    :message="alertState.message"
  />
  <header class="bg-black/30 text-white p-4 w-full">
    <div class="container mx-auto flex justify-between">
      <h1 class="text-xl font-bold">𝒞𝒶𝓈𝓉𝓁𝑒</h1>

      <ul class="flex gap-6 items-center">
        <li>
          <RouterLink to="/" class="text-lg font-bold">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/explore" class="text-lg font-bold">Explore</RouterLink>
        </li>
        <li v-if="authStore.user">
          <RouterLink to="/favorites" class="text-lg font-bold">Favorites</RouterLink>
        </li>
        <li v-if="authStore.user">
          <RouterLink to="/castle/create" class="text-lg font-bold">Create Castle</RouterLink>
        </li>
        <li v-if="authStore.user" class="text-lg font-bold flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round-icon">
            <path d="M18 20a6 6 0 0 0-12 0"/>
            <circle cx="12" cy="10" r="4"/>
            <circle cx="12" cy="12" r="10"/>
          </svg>
          <span class="mr-[25px]">{{ authStore.user.name }}</span>
          <RouterLink to="/login" class="text-lg font-bold" @click="handleLogout">Logout</RouterLink>
        </li>
        
        <li v-else>
          <RouterLink to="/login" class="text-lg font-bold">Login</RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import AlertMessage from '@/components/AlertMessage.vue'
const authStore = useAuthStore()
const router = useRouter()

const alertState = ref({
  show: false,
  type: '',
  message: '',
})

const handleLogout = () => {
  alertState.value = {
    show: true,
    type: 'success',
    message: 'Logout successful'
  }
  authStore.logout()   // 清掉 token 跟 user
  router.push('/login') // 導回登入頁面
}
</script>
