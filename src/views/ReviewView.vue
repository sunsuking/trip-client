<template>
  <div class="container flex">
    <div class="content flex flex-col my-6 items-start w-full">
      <div class="flex flex-col my-6 items-start w-full">
        <h2 class="text-4xl font-bold mb-3">여행지 후기</h2>
      </div>
      <div class="flex flex-col my-6 items-center w-full space-y-4">
        <Button variant="default">
          <router-link :to="{ name: 'reviewWrite' }">리뷰 작성</router-link>
        </Button>
        <ReviewCard v-for="review in reviews" :key="review.id" :review="review" />
      </div>
    </div>
    <ReviewSide />
  </div>
</template>

<script setup lang="ts">
import ReviewCard from '@/components/review/ReviewCard.vue'
import ReviewSide from '@/components/review/ReviewSide.vue'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'

let id = 1
const reviews = ref([
  {
    id: id,
    author: '작성자' + id,
    photoUrls: ['https://generated.vusercontent.net/placeholder.svg'],
    location: '위치' + id,
    content: '여행지 후기' + id++
  },
  {
    id: id,
    author: '작성자' + id,
    photoUrls: ['https://generated.vusercontent.net/placeholder.svg'],
    location: '위치' + id,
    content: '여행지 후기' + id++
  },
  {
    id: id,
    author: '작성자' + id,
    photoUrls: [],
    location: '위치' + id,
    content: '여행지 후기' + id++
  },
  {
    id: id,
    author: '작성자' + id,
    photoUrls: [],
    location: '위치' + id,
    content: '여행지 후기' + id++
  },
  {
    id: id,
    author: '작성자' + id,
    photoUrls: ['https://generated.vusercontent.net/placeholder.svg'],
    location: '위치' + id,
    content: '여행지 후기' + id++
  },
  {
    id: id,
    author: '작성자' + id,
    photoUrls: [],
    location: '위치' + id,
    content: '여행지 후기' + id++
  }
])
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  min-height: 100vh;
}
.content {
  width: calc(100% - 240px);
}
</style>
