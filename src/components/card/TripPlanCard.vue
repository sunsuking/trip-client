<script setup lang="ts">
import { useImage } from "@vueuse/core";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Locate, Heart, Star } from "lucide-vue-next";
import { useToast } from "@/components/ui/toast";

const avatarUrl = "https://place.dog/200/200";
const { isLoading } = useImage({ src: avatarUrl });

const toast = useToast();

const pickTrip = () => {
  toast.toast({
    title: "여행지를 선택했습니다.",
    description: "여행지를 선택했습니다.",
    duration: 2000,
    variant: "success",
  });
};
</script>

<template>
  <Card className="flex justify-between py-4 items-center cursor-pointer">
    <div class="flex w-16 h-16 aspect-square">
      <img :src="avatarUrl" alt="avatar" class="w-full h-full rounded-md object-cover" />
      <div v-if="isLoading"><Skeleton class="h-full w-full rounded-xl" /></div>
    </div>
    <div className="flex-grow ml-4 space-y-1">
      <div className="font-semibold">제주도민시장</div>
      <div
        className="flex flex-row justify-start space-x-1 items-center text-sm text-gray-600"
      >
        <Locate :size="16" className="text-blue-500 mr-1" />
        <span>대한민국 제주도민시장지도 제주...</span>
      </div>
      <div className="flex items-center mt-1 space-x-4">
        <div class="flex flex-row items-center space-x-1">
          <Heart :size="16" className="text-red-500 mr-1" />
          <span className="text-sm text-gray-600 mr-2">12530</span>
        </div>
        <div class="flex flex-row items-center space-x-1">
          <Star :size="16" className="text-yellow-400 mr-1" />
          <span className="text-sm text-gray-600">4</span>
        </div>
      </div>
    </div>
    <Button variant="outline" class="w-8 h-8" @click="pickTrip">✓</Button>
  </Card>
</template>
