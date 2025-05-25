<template>
  <div class="flex justify-center">
    <div class="w-[1200px] max-h-[900px] h-auto p-6 pb-12 bg-gray-900 text-white rounded-2xl">
      <h1 class="text-2xl font-bold mb-6">My Favorite Castles</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="relative bg-gray-800 rounded-xl shadow-md overflow-auto hover:shadow-xl transition duration-300"
        >
          <img
            :src="item.castle.image_url"
            alt="castle"
            class="w-full aspect-[4/3] object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getFavoriteList } from '@/api/favorite'
import type { FavoriteWithCastle } from '@/types/favorite'

const list = ref<FavoriteWithCastle[]>([])

onMounted(() => {
  getList()
})

async function getList() {
  const data = await getFavoriteList() || { favorites: [] }
  list.value = data.favorites as FavoriteWithCastle[]
}
</script>
