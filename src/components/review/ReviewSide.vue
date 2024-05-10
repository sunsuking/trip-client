<template>
  <div class="location-component sticky top-[calc(50vh-64px)] transform -translate-y-1/2">
    <ScrollArea class="h-full w-full rounded-md border">
      <h4 class="mb-4 text-sm font-medium leading-none text-center mt-3">Hot Place</h4>
      <hr />
      <div v-for="(location, idx) in locations" :key="idx">
        <button
          class="w-full p-2 text-center border-none bg-transparent cursor-pointer focus:outline-none"
        >
          <div class="text-xl my-1">
            {{ location.name }}
          </div>
        </button>
        <hr />
      </div>
    </ScrollArea>
  </div>
</template>

<script setup>
// 위치 관련 데이터나 메소드는 여기에 포함할 수 있습니다.
import ScrollArea from '../ui/scroll-area/ScrollArea.vue'
import { ref } from 'vue'
const locations = ref([
  {
    name: '해운대'
  },
  {
    name: '제주도'
  },
  {
    name: '첨단2지구'
  },
  {
    name: '판교'
  },
  {
    name: '강남'
  },
  {
    name: '수완지구'
  },
  {
    name: '싸피'
  },
  {
    name: '부울경'
  },
  {
    name: '서울'
  },
  {
    name: '상무지구'
  }
])
</script>

<style scoped>
.location-component {
  width: 240px;
  height: 50vh;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
