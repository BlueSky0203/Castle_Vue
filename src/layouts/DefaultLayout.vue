<template>
  <div :style="{ backgroundImage: 'url(' + backgroundImageUrl + ')' }" class="relative h-screen w-screen bg-cover overflow-hidden overflow-y-auto">
    <div class="absolute inset-0">
      <Header />
      <main class="min-h-screen mx-auto p-8 text-white pt-20">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from "@/layouts/Header.vue"

// 動態背景圖片的 URL
const backgroundImageUrl = ref('/dark-castle.webp')

// 如果需要，可以根據路由或其他條件改變背景圖片
// 例如根據頁面名稱設置不同的背景
</script>
