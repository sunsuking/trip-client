<script setup lang="ts">
import BoardList from "@/components/community/BoardList.vue";
import CommunityBox from "@/components/community/CommunityBox.vue";
import type { BoardListProps } from "@/types/board.type";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { onMounted, ref } from "vue";
import axios from "axios";

const meetings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const verticalScroll = ref<HTMLElement | null>(null);
const verticalScrollLeft = () => {
  if (verticalScroll.value) {
    verticalScroll.value.scrollLeft -= 100;
  }
};
const verticalScrollRight = () => {
  if (verticalScroll.value) {
    verticalScroll.value.scrollLeft += 100;
  }
};

const addr = "http://localhost:8080/api/v1/notice/list"
const notices = ref([])
onMounted(() => {
  axios.get(addr)
  .then((response) => {
    notices.value = response.data
  })
  .catch((error) => {
    console.log("공지사항 조회 오류", error)
  })
})

</script>

<template>
  <div class="container justify-center flex flex-col my-6 items-start">
    <div class="flex flex-col my-6 items-start w-full">
      <h2 class="text-4xl font-bold mb-3">공지사항</h2>
      <span class="text-gray-400 dark:text-gray-500"
        >내가 관심있는 모임에 참여하여 구성원과 대화를 나눠보세요.</span
      >
      <div class="flex flex-row items-center w-full h-full">
        <i
          class="pi pi-angle-left text-2xl pr-4 h-32 cursor-pointer flex items-center"
          @click="verticalScrollLeft"
        />
        <div
          class="w-full flex flex-row gap-3 overflow-scroll scrollbar-hide scroll-smooth"
          ref="verticalScroll"
        >
          <CommunityBox v-for="meeting in meetings" />
        </div>
        <i
          class="pi pi-angle-right text-2xl pl-4 h-32 cursor-pointer flex items-center"
          @click="verticalScrollRight"
        />
      </div>
    </div>
    <div class="w-5/6 mt-6 mx-12">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">글 번호</TableHead>
            <TableHead>글 제목</TableHead>
            <TableHead>글 내용</TableHead>
            <TableHead className="text-right">글 작성시기</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="notice in notices" :key="notice.noticeId">
            <TableCell className="font-medium">{{ notice.noticeId }}</TableCell>
            <TableCell>{{ notice.title }}</TableCell>
            <TableCell>{{ notice.content }}</TableCell>
            <TableCell className="text-right">{{ notice.createdAt }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
  

</template>
