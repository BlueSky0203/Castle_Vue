<template>
  <div class="flex justify-center h-screen p-30 2xl:px-120">
    <div class="w-[550px] h-[630px] bg-gray-900 text-white p-10 rounded-2xl shadow-2xl">
      <h2 class="text-3xl font-bold mb-8 text-center">Register</h2>

      <form @submit.prevent="handleRegister" class="space-y-5">
        <div>
          <label class="block mb-1 text-sm">Username</label>
          <input v-model="form.username" required />
        </div>

        <div>
          <label class="block mb-1 text-sm">Name</label>
          <input v-model="form.name" required />
        </div>

        <div>
          <label class="block mb-1 text-sm">Email</label>
          <input v-model="form.email" type="email" required />
        </div>

        <div>
          <label class="block mb-1 text-sm">Password</label>
          <input v-model="form.password" type="password" required />
        </div>

        <div>
          <label class="block mb-1 text-sm">Confirm password</label>
          <input v-model="form.confirmPassword" type="password" required />
        </div>
        
        <div class="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            @click="router.push('/login')"
            class="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 rounded bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from '@/composables/useToast'
import { register } from '@/api/auth'

const toast = useToast()
const router = useRouter()

const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
})

const handleRegister = async () => {
  if (form.value.password !== form.value.confirmPassword) {
    toast('error', 'Please ensure your passwords match')
    return
  }

  const result = await register(form.value)
  if (result) {
    toast('success', 'Register successfully')
    router.push('/login')
  } else {
    toast('error', 'Register failed')
  }
}

</script>