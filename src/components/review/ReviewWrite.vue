<template>
  <div class="container mx-auto p-4">
    <h2 class="text-4xl font-bold mb-6">여행지 후기 작성</h2>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <input
        type="text"
        placeholder="제목"
        v-model="reviewTitle"
        class="w-full p-2 border border-gray-300 rounded"
      />
      <textarea
        placeholder="내용"
        v-model="reviewContent"
        rows="4"
        class="w-full p-2 border border-gray-300 rounded"
      ></textarea>
      <select v-model="reviewRegion" class="w-full p-2 border border-gray-300 rounded">
        <option disabled value="">지역을 선택하세요</option>
        <option>서울</option>
        <option>부산</option>
        <option>제주</option>
        <option>강원</option>
        <option>경기</option>
      </select>
      <input
        type="file"
        @change="handleFileUpload"
        class="w-full p-2 border border-gray-300 file-upload cursor-pointer"
      />
      <div class="flex justify-end space-x-2">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
        >
          작성
        </button>
        <button
          type="button"
          @click="handleCancel"
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-10 rounded"
        >
          취소
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const reviewTitle = ref('')
const reviewContent = ref('')
const reviewRegion = ref('')
const reviewImage = ref(null)

function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files) {
    reviewImage.value = target.files[0]
  }
}

function handleSubmit() {
  const formData = new FormData()
  formData.append('title', reviewTitle.value)
  formData.append('content', reviewContent.value)
  formData.append('region', reviewRegion.value)
  if (reviewImage.value) {
    formData.append('image', reviewImage.value)
  }

  // Here, add the API call to send the data to the server.
  console.log('Review submitted', { reviewTitle, reviewContent, reviewRegion, reviewImage })
}

function handleCancel() {
  reviewTitle.value = ''
  reviewContent.value = ''
  reviewRegion.value = ''
  reviewImage.value = null
}
</script>

<style scoped>
.file-upload {
  cursor: pointer;
}
</style>
