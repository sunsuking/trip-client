<script setup lang="ts">
import Separator from "@/components/ui/separator/Separator.vue";
import { useFocus, useFocusWithin } from "@vueuse/core";
import { Search, MapPin } from "lucide-vue-next";
import { ref, watch } from "vue";

const inputRef = ref<HTMLElement | null>(null);
const { focused } = useFocusWithin(inputRef);
const locations = [
  "서울",
  "부산",
  "제주",
  "강릉",
  "대구",
  "대전",
  "광주",
  "울산",
  "인천",
  "수원",
];

const searchLocations = ref<string[]>(locations);
const search = ref<string>("");
const searchText = (event: Event) => {
  search.value = (event.target as HTMLInputElement).value;
  searchLocations.value = locations.filter(
    (location) => location.indexOf(search.value) !== -1
  );
};
</script>

<template>
  <div
    key="1"
    className="flex flex-col lg:flex-row lg:space-x-8 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
  >
    <div className="flex-1">
      <h1 className="text-4xl font-bold">기존에 경험하지 못한 새로운 여행 플래너</h1>
      <p className="mt-4 text-lg">
        고민마 한번 여행 계획을 바이크를 통해 부담 없이 스케줄을 해보세요.
      </p>
      <div
        className="mt-8 w-96 relative rounded-md border border-gray-300"
        ref="inputRef"
      >
        <div class="relative w-full max-w-sm items-center">
          <input
            className="block w-full pl-4 pr-10 py-2 rounded-md focus:outline-none sm:text-sm"
            name="search"
            placeholder="어디로 여행을 떠나시나요?"
            type="text"
            :value="search"
            @input="searchText"
          />
          <span class="right-0 absolute inset-y-0 flex items-center justify-end px-2">
            <Search className="h-3 w-3 text-gray-400" />
          </span>
        </div>
        <div v-show="focused" class="mt-2 h-96 overflow-scroll">
          <div
            v-for="(location, index) in searchLocations"
            :key="index"
            class="cursor-pointer"
          >
            <div class="flex flex-row justify-between text-sm px-4 py-2">
              <span class="text-md">{{ location }}</span>
              <div class="flex flex-row items-center justify-center text-gray-400">
                <MapPin class="w-4 h-4" />
                <span class="ml-1 text-sm">{{ index }}</span>
              </div>
            </div>
            <Separator class="my-2" />
          </div>
        </div>
      </div>
    </div>
    <div className="flex-1 mt-8 lg:mt-0">
      <div className="h-full w-full">
        <img
          alt="Map"
          className="rounded-lg shadow-lg object-cover object-center h-full w-full"
          height="600"
          src="https://generated.vusercontent.net/placeholder.svg"
          width="1000"
        />
      </div>
    </div>
  </div>
</template>
