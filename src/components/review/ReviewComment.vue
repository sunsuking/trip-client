<template>
  <hr />
  <div class="flex items-start gap-2">
    <div class="flex items-center mb-2">
      <Avatar>
        <AvatarImage src="https://generated.vusercontent.net/placeholder.svg" alt="@radix-vue" />
      </Avatar>
    </div>
    <div class="grid gap-1">
      <a class="font-semibold text-sm ms-1" href="#">
        {{ comment.author }}
        <span class="text-gray-400 dark:text-gray-500 ms-4">{{ comment.createdAt }}</span>
      </a>
      <div class="text-sm">{{ comment.content }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from '../ui/avatar/Avatar.vue'
import type { IReviewComment } from '@/types/board.type'
const props = defineProps<{ comment: IReviewComment }>()
const comment = props.comment
console.log(comment)
</script>

<style scoped></style>
