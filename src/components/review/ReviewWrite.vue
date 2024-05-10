<template>
  <div class="container">
    <div class="flex flex-col my-6 items-center w-full">
      <h2 class="text-4xl font-bold mb-3">여행지 후기 작성</h2>
    </div>
    <div :class="cn('grid gap-6', $attrs.class ?? '')">
      <form @submit.prevent="write" class="space-y-4">
        <FormField name="title">
          <FormItem>
            <FormLabel for="title">제목</FormLabel>
            <FormControl>
              <Input
                v-model="review.title"
                id="title"
                placeholder="제목을 입력해주세요"
                type="text"
                auto-capitalize="none"
                auto-complete="text"
                auto-correct="off"
                required
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="content">
          <FormItem>
            <FormLabel for="content">내용</FormLabel>
            <FormControl>
              <Textarea id="content" required v-model="review.content"></Textarea>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="tourKeyword">
          <FormItem>
            <FormLabel for="tourKeyword">장소 선택</FormLabel>
            <FormControl>
              <Input id="tourKeyword" type="text" placeholder="국립 청태산" readonly />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="tourId">
          <FormItem>
            <FormControl>
              <select v-model="review.tourId">
                <option>- 장소 선택 -</option>
                <option selected value="125266">국립 청태산자연휴양림</option>
              </select>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="nickname">
          <FormItem>
            <FormLabel for="username">사진 업로드</FormLabel>
            <FormControl>
              <input
                type="file"
                class="w-full p-2 border border-gray-300 file-upload cursor-pointer"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button class="mt-4 w-full"> 작성 </Button>
        <Button class="mt-4 w-full" variant="outline">
          <RouterLink :to="{ name: 'review' }"> 취소 </RouterLink>
        </Button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/toast'
import { cn } from '@/lib/utils'
import { useMutation } from '@tanstack/vue-query'
import type { ReviewForm } from '@/types/board.type'
import { reviewWriteRequest } from '@/api/review'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const review = ref<ReviewForm>({
  title: '',
  content: '',
  tourId: 125266,
  imgUrls: ['https://generated.vusercontent.net/placeholder.svg']
})

const router = useRouter()
const toast = useToast()
const { mutate } = useMutation({
  mutationKey: ['review-write'],
  mutationFn: reviewWriteRequest,
  onSuccess: () => {
    toast.toast({
      title: '작성 성공',
      description: '여행 후기 작성이 완료되었습니다.',
      duration: 2000,
      variant: 'success'
    })
  },
  onError: (error: any) => {
    const {
      response: {
        data: { message }
      }
    } = error
    toast.toast({
      title: '여행 후기 작성이 실패하였습니다.',
      description: message,
      duration: 2000,
      variant: 'destructive'
    })
  }
})

function write() {
  mutate(review.value)
  router.push({ name: 'review' })
}
</script>

<style scoped>
.file-upload {
  cursor: pointer;
}
</style>
