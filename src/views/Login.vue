<template>
  <div class="flex h-screen p-30 2xl:px-120">
    <!-- 左邊登入 -->
    <div class="flex flex-col justify-center items-center w-1/2 h-2/3 bg-gray-900 text-white p-12 rounded-s-2xl">
      <h1 class="text-4xl font-bold mb-8">Login</h1>

      <form class="w-full max-w-sm space-y-6">
        <div>
          <label class="block mb-2 text-sm font-medium">Username or Email</label>
          <input
            v-model="account"
            type="text"
            placeholder="Enter your username or email"
            class="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block mb-2 text-sm font-medium">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter your password"
            class="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="button"
          @click="handleLogin"
          class="w-full p-3 rounded bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 font-bold"
        >
          Login
        </button>

        <div class="text-right text-sm mt-2">
          <a href="#" class="text-blue-400 hover:underline">Forgot Password?</a>
        </div>
      </form>
    </div>
    
    <!-- 右邊背景或註冊提示 -->
    <div class="flex flex-col justify-center items-center w-1/2 h-2/3 bg-cover text-white rounded-e-2xl" style="background-image: url('/login-background.jpg');">
      <h2 class="text-3xl font-bold mb-4">New Here?</h2>
      <p class="mb-6">Sign up with your social media account</p>
      
      <!-- 這裡未來放第三方登入按鈕 -->
      <div class="flex space-x-4">
        <button class="p-3 bg-white rounded-full text-black hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </button>
        <button class="p-3 bg-white rounded-full text-black hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </button>
        <button class="p-3 bg-white rounded-full text-black hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </button>
      </div>

      <div class="mt-8">
        <a href="#" class="text-blue-400 hover:underline">Create account</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const account = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('Login clicked', account.value, password.value)
  // 這裡未來接 supabase.login
}
</script>

<style scoped>
</style>
