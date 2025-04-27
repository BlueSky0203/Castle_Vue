<template>
  <div class="p-6 bg-gray-900 h-screen text-white rounded-2xl" style="height: 75vh;">
    <div class="mb-10 flex justify-start space-x-4">
      <label for="image-upload" class="block text-lg font-semibold w-40">Upload Castle Image</label>
      <div class="w-64 relative cursor-pointer">
        <div v-if="!imageUrl" class="border border-dashed border-gray-600 bg-gray-800 rounded-md p-8 flex flex-col items-center justify-center">
          <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG</p>
        </div>
        <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" class="w-full h-full rounded-md object-cover" />
        <input
          type="file"
          id="image-upload"
          @change="handleImageUpload"
          class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          accept="image/jpeg, image/png"
          ref="fileInput"
        />
        <p v-if="imageUrl" class="text-xs text-gray-500 mt-1 text-center">Click image to change</p>
      </div>
    </div>

    <form @submit.prevent="submitCastle" class="space-y-4">
      <div class="flex items-center space-x-4">
        <label for="name" class="block text-lg font-semibold w-32">Castle Name</label>
        <input v-model="castle.name" id="name" type="text" placeholder="Enter castle name" class="w-full p-2 border border-gray-600 text-white rounded-md" required />
      </div>

      <div class="flex items-center space-x-4">
        <label for="type" class="block text-lg font-semibold w-32">Castle Type</label>
        <select v-model="castle.type" id="type" class="w-full p-2 border border-gray-600 text-white rounded-md" required>
          <option v-for="item in castleTypeOptions" :key="item.id" :value="item.id" style="background-color: #4b5563;">{{ item.name }}</option>
        </select>
      </div>

      <div class="flex items-start space-x-4">
        <label for="description" class="block text-lg font-semibold w-32">Castle Description</label>
        <textarea v-model="castle.description" id="description" placeholder="Enter castle description" class="w-full p-2 border border-gray-600 text-white rounded-md" required></textarea>
      </div>

      <div class="flex items-center space-x-4">
        <label for="country" class="block text-lg font-semibold w-32">Country</label>
        <input v-model="castle.country" id="country" type="text" placeholder="Enter country" class="w-full p-2 border border-gray-600 text-white rounded-md" required />
      </div>

      <div class="flex items-center space-x-4">
        <label for="build_year" class="block text-lg font-semibold w-32">Build Year</label>
        <input v-model="castle.build_year" id="build_year" type="number" placeholder="Enter build year" class="w-full p-2 border border-gray-600 text-white rounded-md" required />
      </div>

      <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded-md">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { createCastleList, uploadCastleImage } from '@/api/createCastle';
import { getCastleType } from '@/api/explore';
import { Castle, CastleType } from '@/types/castle';

const imageUrl = ref<string | null>(null)
const selectedFile = ref<File | null>(null)
const castle = reactive({
  name: '',
  description: '',
  country: '',
  type: 0,
  image_url: '',
  build_year: 0,
} as Castle)

const castleTypeOptions = ref<CastleType[]>([])

onMounted(() => {
  castleType()
})

// 處理圖片瀏覽
const handleImageUpload = async (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input?.files?.length) {
    selectedFile.value = input.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      imageUrl.value = reader.result as string
    }
    reader.readAsDataURL(selectedFile.value)
  }
}

// 提交城堡資料
// 1. 先處理圖片 回傳image_url
// 2. 加入城堡相關資料
const submitCastle = async () => {

  if (selectedFile.value) {
    const imageResponse = await uploadCastleImage(selectedFile.value)

    const castleData = {
      ...castle,
      image_url: imageResponse?.image_url || '',
    }

    if (imageResponse?.message === "200") {
      const response = await createCastleList(castleData)
      if (response?.message === "200") {
        console.log('Castle create successfully')
      } else {
        console.log('Castle Create failed')
      }
    } else {
      console.log('upload failed')
    }

  }
};


const castleType = async () => {
  const data = await getCastleType()
  if (data && Array.isArray(data)) {
    castleTypeOptions.value = data
  } else {
    castleTypeOptions.value = []
  }
}
</script>
