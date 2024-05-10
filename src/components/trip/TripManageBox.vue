<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Search } from "lucide-vue-next";
import { ref } from "vue";
import { Card } from "@/components/ui/card";

import { VueDraggableNext } from "vue-draggable-next";

const days = ref(["1일차", "2일차", "3일차", "4일차"]);
const locations = ref([[1, 2, 3, 4, 5], [], [], [], []]);
</script>

<template>
  <div class="flex flex-col space-y-2 my-6 max-h-[600px] overflow-scroll scrollbar-hide">
    <div
      class="flex flex-col items-start p-1 border-gray-200 rounded-md"
      v-for="(day, index) in days"
      :key="index"
      :class="{
        'border ': locations[index].length === 0,
      }"
    >
      <span class="text-gray-400 text-sm mb-1">{{ day }}</span>
      <div class="flex flex-col rounded-md border-gray-400 w-full min-h-16">
        <VueDraggableNext v-model="locations[index]" group="trip">
          <div
            v-for="(trip, tripIndex) in locations[index]"
            :key="tripIndex"
            className="bg-white dark:bg-gray-800 rounded-lg p-2 cursor-move transition-transform duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
          >
            <Card className="flex justify-between items-center cursor-pointer">
              <div class="flex w-12 h-12 aspect-square">
                <img
                  :src="'https://place.dog/200/200'"
                  alt="avatar"
                  class="w-full h-full rounded-md object-cover"
                />
                <Skeleton class="h-full w-full rounded-xl" />
              </div>
              <div className="flex-grow ml-4 space-y-1">
                <div className="font-semibold text-sm">제주도민시장 {{ trip }}</div>
                <div
                  className="flex flex-row justify-start space-x-1 items-center text-xs text-gray-600"
                >
                  <span>대한민국 제주도민시장지도 제주...</span>
                </div>
              </div>
            </Card>
          </div>
        </VueDraggableNext>
      </div>
    </div>
  </div>
</template>
