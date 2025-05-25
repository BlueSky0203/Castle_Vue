<template>
  <AlertMessage
    v-if="alertState.show"
    :type="alertState.type"
    :message="alertState.message"
  />
  <div class="flex justify-center">
    <div class="w-[1200px] max-h-[900px] h-auto p-6 pb-12 bg-gray-900 text-white rounded-2xl">
      <h1 class="text-2xl font-bold mb-6">Castle Cards</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="relative bg-gray-800 rounded-xl shadow-md overflow-auto hover:shadow-xl transition duration-300"
        >
          <img
            :src="item.image_url"
            alt="castle"
            class="w-full aspect-[4/3] object-cover"
          />

          <button
            class="absolute bottom-2 right-2 xl:bottom-4 xl:right-4"
            @click="toggleFavorite(item.id)"
          >
            <svg
              v-if="item.is_favorite"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="gold"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide-star"
            >
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <Pagination
    :currentPage="page"
    :total="total"
    :pageSize="pageSize"
    @update:currentPage="handlePageChange"
  />
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getCastleList } from '@/api/explore'
import { Castle } from '@/types/castle'
import Pagination from '@/components/Pagination.vue'
import { getFavoriteList, addFavorite, removeFavorite } from '@/api/favorite'
import type { AddFavoriteInput } from '@/types/favorite'
import AlertMessage from '@/components/AlertMessage.vue'

const list = ref<Castle[]>([])
const favorites = ref<Set<number>>(new Set())
const page = ref(1)
const pageSize = ref(12)
const total = ref(0)

const alertState = ref({
  show: false,
  type: '',
  message: '',
})

onMounted(() => {
  getList()
})

async function getList() {
  const [castleRes, favoriteRes] = await Promise.all([
    getCastleList({ page: page.value, pageSize: pageSize.value }),
    getFavoriteList()
  ])

  const favoriteIds = new Set<number>((favoriteRes?.favorites || []).map(f => f.castle_id))
  favorites.value = favoriteIds

  list.value = (castleRes?.list || []).map((item: Castle) => ({
    ...item,
    is_favorite: favoriteIds.has(item.id)
  }))
  total.value = castleRes?.total || 0
}


function handlePageChange(p: number) {
  page.value = p
  getList()
}

async function toggleFavorite(castleId: number) {
  const item = list.value.find(i => i.id === castleId)
  if (!item) return

  if (favorites.value.has(castleId)) {
    await removeFavorite(castleId)
    favorites.value.delete(castleId)
    item.is_favorite = false
    alertState.value = {
      show: true,
      type: 'warning',
      message: 'remove favorite successful'
    }
  } else {
    const payload: AddFavoriteInput = { castle_id: castleId }
    await addFavorite(payload)
    favorites.value.add(castleId)
    item.is_favorite = true
    alertState.value = {
      show: true,
      type: 'success',
      message: 'Add favorite successful'
    }
  }
}

</script>

<style scoped>

</style>
