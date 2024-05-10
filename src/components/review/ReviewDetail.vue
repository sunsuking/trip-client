<template>
  <div class="container">
    <!-- 리뷰 부분 -->
    <div class="grid grid-cols-1 gap-4 p-4">
      <div class="flex flex-col my-6 items-start w-full">
        <h2 class="text-4xl font-bold mb-3">여행지 후기</h2>
      </div>
      <div class="rounded-lg overflow-hidden shadow-lg">
        <!-- 사진 -->
        <img
          src="https://generated.vusercontent.net/placeholder.svg"
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
              <AvatarImage
                src="https://generated.vusercontent.net/placeholder.svg"
                alt="@radix-vue"
              />
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
                @click="focus"
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
              >
                <MessageCircle />
                <span class="sr-only">Comment</span>
              </button>
              <button @click="back">
                <ArrowBigLeft :stroke-width="1.5" class="size-8" />
              </button>
            </div>
            <!-- 댓글 출력창 시작 -->
            <div
              data-radix-scroll-area-viewport=""
              class="h-full w-full rounded-[inherit]"
              style="overflow: hidden scroll"
            >
              <!-- 댓글 출력 시작 -->
              <div style="min-width: 100%; display: table">
                <div class="p-4 flex flex-col gap-4">
                  <!-- 댓글 출력 -->
                  <ReviewComment v-for="(comment, idx) in comments" :key="idx" :comment="comment" />
                  <!-- 댓글 출력 종료 -->
                </div>
              </div>
              <!-- 댓글 출력 창 종료 -->
            </div>
            <!-- 댓글 입력창 -->
            <form v-if="isLogin" class="flex items-start gap-2">
              <!-- 현재 로그인한 유저의 프로필 이미지 -->
              <Avatar>
                <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
              </Avatar>
              <!-- 현재 로그인한 유저의 프로필 이미지 종료 -->

              <!-- 댓글 입력창 - 로그인 할 때만 보이게 -->
              <input
                ref="commentInput"
                id="comment"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                placeholder="Write a comment..."
                v-model="comment"
              />
              <button
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                <Send />
                <span class="sr-only">Send</span>
              </button>
              <!-- 댓글 입력창 종료-->
            </form>
            <!-- 댓글 출력창 종료 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from '../ui/avatar/Avatar.vue'
import { Heart, MessageCircle, Send, ArrowBigLeft } from 'lucide-vue-next'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ReviewComment from '../review/ReviewComment.vue'
import { useAuthenticationStore } from '@/stores/authentication'
import { storeToRefs } from 'pinia'

const authenticationStore = useAuthenticationStore()
const { isLogin } = storeToRefs(authenticationStore)
const route = useRouter()
let id = 0
const review = ref({
  id: id,
  author: '작성자' + id,
  photoUrls: ['https://generated.vusercontent.net/placeholder.svg'],
  location: '위치' + id,
  content:
    '여행지 후기를 작성하는 곳이다. 여기에는 너무 많은 글자가 들어가지않도록 글자 제한을 할 예정' +
    id++
})

const comments = ref([
  {
    author: '작성자 1',
    content: '내용 123',
    createdAt: '2024.05.17'
  },
  {
    author: '작성자 2',
    content: '내용 128',
    createdAt: '2024.05.18'
  }
])

const back = () => {
  route.push({ name: 'review' })
}

const commentInput = ref(null)
const comment = ref('')
const focus = () => {
  commentInput.value.focus()
}
</script>

<style scoped>
.name-info {
  display: flex;
  align-items: center; /* 세로 중앙 정렬을 확보 */
}
</style>
