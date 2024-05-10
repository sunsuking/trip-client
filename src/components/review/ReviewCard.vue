<template>
  <div class="card bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="rounded-lg overflow-hidden shadow-lg">
      <!-- 사진 -->
      <img
        v-if="review.photoUrls.length > 0"
        :src="review.photoUrls[0]"
        alt="Post Image"
        width="400"
        height="400"
        class="w-full h-60 object-cover"
        style="aspect-ratio: 400 / 400; object-fit: cover"
      />
      <div class="p-4">
        <!-- 사용자 정보 -->
        <div class="flex items-center mb-2">
          <Avatar>
            <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
          </Avatar>
          <a class="font-semibold text-sm ms-3" href="#"> {{ review.author }} </a>
          <span class="text-gray-400 dark:text-gray-500 ms-4">{{ review.location }}</span>
        </div>
        <!-- Content 출력 -->
        <!-- 사용자 후기 -->
        <div class="user-review p-4">
          <p>{{ review.content }}</p>
        </div>
        <!-- 버튼 출력 -->
        <div class="mb-2">
          <div class="flex items-center gap-2">
            <button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
            >
              <Heart />
              <span class="sr-only">Like</span>
            </button>
            <button
              @click="detail"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
            >
              <MessageCircle />
              <span class="sr-only">Comment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Heart, MessageCircle } from 'lucide-vue-next'
import Avatar from '../ui/avatar/Avatar.vue'
import { useRouter } from 'vue-router'
import type { ReviewCardProps } from '@/types/board.type'
const router = useRouter()

const props = defineProps<ReviewCardProps>()
const review = props.review

const detail = () => {
  router.push({ name: 'reviewDetail', params: { id: review.id } })
}
</script>

<style scoped>
.card {
  max-width: 600px; /* 카드 최대 너비 */
  width: 100%;
  margin: auto; /* 카드 중앙 정렬 */
}
.author-info,
.interactions,
.user-review {
  font-size: 1rem; /* 폰트 사이즈 설정 */
}
.name-info {
  display: flex;
  align-items: center; /* 세로 중앙 정렬을 확보 */
}
.photo {
  max-height: 480px; /* 사진 최대 높이 */
}
</style>
