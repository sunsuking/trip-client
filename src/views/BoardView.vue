<script setup lang="ts">
import BoardList from '@/components/boards/BoardList.vue'
import type { BoardListProps } from '@/types/board.type'
import { ref } from 'vue'
const categories = ref<BoardListProps[]>([
  {
    title: '자유게시판'
  },
  {
    title: '질문게시판'
  },
  {
    title: '정보게시판'
  },
  {
    title: '공지사항'
  },
  {
    title: '자료실'
  },
  {
    title: '프로젝트'
  }
])
</script>

<template>
  <div class="container flex flex-col my-6 items-start">
    <h2 class="text-3xl font-bold">이번 주 인기글</h2>
    <div class="w-full grid grid-cols-2 gap-12 mt-6">
      <BoardList v-for="(category, index) in categories" :key="index" :title="category.title" />
    </div>
  </div>
</template>
