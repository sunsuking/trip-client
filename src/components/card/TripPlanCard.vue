<script setup lang="ts">
import { useImage } from "@vueuse/core";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Locate, Heart, Star } from "lucide-vue-next";
import { useToast } from "@/components/ui/toast";
import type { SearchTrip } from '@/types/trip.type';
import { useTripPlanStore } from '@/stores/trip-plan';
import { ref } from 'vue';

const props = defineProps<{
  trip: SearchTrip
}>()
const backgroundImage = props.trip.backgroundImage ?? "http://via.placeholder.com/400x400";
const { isLoading } = useImage({ src: backgroundImage });

const { addTrip, exists } = useTripPlanStore();

const toast = useToast();

const pickTrip = () => {
  if (exists(props.trip.tourId)) return;
  console.log(exists(props.trip.tourId))
  toast.toast({
    title: "여행지를 선택했습니다.",
    description: `여행지를 ${props.trip.name} 선택했습니다.`,
    duration: 2000,
    variant: "success",
  });
  addTrip(1, props.trip);
};
</script>

<template>
  <Card className="flex flex-row justify-between py-4 w-full items-center cursor-pointer">
    <div class="flex w-16 h-16 aspect-square">
      <img :src="backgroundImage" alt="avatar" class="w-full h-full rounded-md object-cover" />
      <div v-if="isLoading"><Skeleton class="h-full w-full rounded-xl" /></div>
    </div>
    <div className="flex-grow ml-4 space-y-1 w-1/2">
      <div className="font-semibold text-ellipsis  whitespace-nowrap overflow-hidden pr-4">{{ props.trip.name }}</div>
      <div
        className="flex flex-row justify-start space-x-1 items-center text-sm text-gray-600"
      >
        <Locate :size="16"/>
        <span class='text-xs whitespace-nowrap text-ellipsis overflow-hidden pr-4'>{{ props.trip.address }}</span>
      </div>
      <div className="flex items-center mt-1 space-x-4">
        <div class="flex flex-row items-center space-x-1">
          <Heart :size="16"/>
          <span className="text-sm text-gray-600 mr-2">12530</span>
        </div>
        <div class="flex flex-row items-center space-x-1">
          <Star :size="16"/>
          <span className="text-sm text-gray-600">4</span>
        </div>
      </div>
    </div>
    <Button variant="outline" class="w-8 h-8" @click="pickTrip">✓</Button>
  </Card>
</template>
