<template>
  <div class="flex items-center justify-center space-x-4 py-4">
    <button
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
      class="px-4 py-2 bg-gray-700 text-white rounded-md disabled:opacity-50"
    >
      Prev
    </button>

    <span class="text-white">Page {{ currentPage }} / {{ totalPages }}</span>

    <button
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
      class="px-4 py-2 bg-gray-700 text-white rounded-md disabled:opacity-50"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  currentPage: Number,
  total: Number,
  pageSize: Number
})

const emit = defineEmits(['update:currentPage'])

const totalPages = computed(() => Math.ceil(props.total / props.pageSize))

function changePage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    emit('update:currentPage', page)
  }
}
</script>

<style scoped>
button {
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #4a5568;
}
</style>
