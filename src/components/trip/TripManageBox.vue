<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Search } from "lucide-vue-next";
import { ref } from "vue";
import { Card } from "@/components/ui/card";

import { VueDraggableNext } from "vue-draggable-next";
import { useTripPlanStore } from '@/stores/trip-plan';
import { storeToRefs } from 'pinia';
const { pickedTrips, day } = storeToRefs(useTripPlanStore());

const days = Array.from({ length: day.value }, (_, i) => `${i + 1}일차`);
</script>

<template>
  <div class="flex flex-col space-y-2 my-6 max-h-screen overflow-scroll scrollbar-hide">
    <div
      class="flex flex-col items-start p-1 border-gray-200 rounded-md"
      v-for="(day, index) in days"
      :key="index"
      :class="{
        'border ': pickedTrips[index].length === 0,
      }"
    >
      <span class="text-gray-400 text-sm mb-1">{{ day }}</span>
      <div class="flex flex-col rounded-md border-gray-400 w-full min-h-12">
        <VueDraggableNext v-model="pickedTrips[index]" group="trip">
          <div
            v-for="(trip, tripIndex) in pickedTrips[index]"
            :key="tripIndex"
            className="bg-white dark:bg-gray-800 rounded-lg p-2 cursor-move transition-transform duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
          >
            <Card className="flex justify-between items-center cursor-pointer">
              <div class="flex w-12 h-12 aspect-square">
                <img
                  :src="trip.backgroundImage ?? 'http://via.placeholder.com/400x400'"
                  alt="avatar"
                  class="w-full h-full rounded-md object-cover"
                />
                <Skeleton class="h-full w-full rounded-xl" />
              </div>
              <div className="flex-grow ml-4 space-y-1 w-full text-ellipsis whitespace-nowrap overflow-hidden pr-5">
                <div className="font-semibold text-sm text-ellipsis whitespace-nowrap overflow-hidden">{{ trip.name }}</div>
                <div
                  className="flex flex-row justify-start space-x-1 items-center text-xs text-gray-600"
                >
                  <span>{{ trip.address }}</span>
                </div>
              </div>
            </Card>
          </div>
        </VueDraggableNext>
      </div>
    </div>
    <div class='min-h-[200px]'/>
  </div>
</template>
