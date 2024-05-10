<template>
  <div class="container">
    <div class="content flex flex-col my-6 items-start w-full">
      <div class="flex flex-col my-6 items-center w-full">
        <h2 class="text-4xl font-bold mb-3">여행지 리뷰</h2>
      </div>
      <div class="flex flex-col my-6 items-center w-full space-y-4">
        <Button v-if="isLogin" variant="default">
          <router-link :to="{ name: 'reviewWrite' }">리뷰 작성</router-link>
        </Button>
        <div v-if="reviews.length == 0">
          <h2 class="text-4xl font-bold mt-10">현재 리뷰가 존재하지 않습니다.</h2>
        </div>
        <ReviewCard v-for="review in reviews" :key="review.reviewId" :review="review" />
      </div>
    </div>

    <ReviewSide />
  </div>
</template>

<script setup lang="ts">
import ReviewCard from '@/components/review/ReviewCard.vue'
import ReviewSide from '@/components/review/ReviewSide.vue'
import { useAuthenticationStore } from '@/stores/authentication'
import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/vue-query'
import { reviewsRequest } from '@/api/review'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import type { ReviewDetail } from '@/types/board.type'

const authenticationStore = useAuthenticationStore()
const { isLogin } = storeToRefs(authenticationStore)

const reviews = ref<ReviewDetail[]>([])

const { mutate } = useMutation({
  mutationKey: ['review-list'],
  mutationFn: reviewsRequest,
  onSuccess: (data) => {
    reviews.value = data
  },
  onError: (error: any) => {
    const {
      response: {
        data: { message }
      }
    } = error
    alert(error)
  }
})
onMounted(() => {
  mutate()
})
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
