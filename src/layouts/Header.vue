<template>
  <header class="bg-black/30 text-white p-4 w-full">
    <div class="container mx-auto flex justify-between">
      <h1 class="text-xl font-bold">𝒞𝒶𝓈𝓉𝓁𝑒</h1>

      <ul class="flex gap-6">
        <li><RouterLink to="/" class="text-lg font-bold">Home</RouterLink></li>
        <li><RouterLink to="/explore" class="text-lg font-bold">Explore</RouterLink></li>
        <li><RouterLink to="/login" class="text-lg font-bold">Login</RouterLink></li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
