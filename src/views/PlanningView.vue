<script setup lang="ts">
import { categoryRequest } from "@/api/trip";
import TripPlanCard from "@/components/card/TripPlanCard.vue";
import TripManageBox from "@/components/trip/TripManageBox.vue";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useQuery } from "@tanstack/vue-query";
import { Search } from "lucide-vue-next";
import { ref } from "vue";
import { KakaoMap } from "vue3-kakao-maps";

const cards = Array.from({ length: 10 }, (_, i) => i);

const { data: categories, isLoading: isCategoryLoading } = useQuery({
  queryKey: ["categories"],
  queryFn: categoryRequest,
});

const categoryGroup = ref([]);
</script>

<template>
  <div class="flex flex-row h-screen overflow-hidden">
    <div class="w-[400px] h-full flex flex-col px-3 py-5">
      <h2 class="text-black text-2xl font-bold">제주</h2>
      <span class="text-gray-400 text-md py-5">2024.05.10 ~ 2024.05.16</span>
      <Tabs default-value="trip" class="w-[350px]">
        <TabsList class="grid w-full grid-cols-2">
          <TabsTrigger value="trip"> 여행지 선택 </TabsTrigger>
          <TabsTrigger value="manage"> 여행지 관리 </TabsTrigger>
        </TabsList>
        <TabsContent class="flex flex-col" value="trip">
          <div class="flex flex-col h-full mx-1">
            <div class="relative flex justify-center w-full items-center my-2">
              <Input
                autocomplete="off"
                id="search"
                type="text"
                placeholder="검색어를 입력해주세요."
                class="pl-10"
              />
              <span
                class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
              >
                <Search :size="20" />
              </span>
            </div>
            <!-- 카테고리 선택창 -->
            <ToggleGroup
              type="multiple"
              class="justify-start overflow-scroll scrollbar-hide"
              v-model="categoryGroup"
              v-if="isCategoryLoading"
            >
              <ToggleGroupItem
                variant="outline"
                v-for="category in categories"
                :key="category.contentId"
                :value="category.name"
                ><span class="text-nowrap w-14 h-5">{{ category.korName }}</span>
              </ToggleGroupItem>
            </ToggleGroup>
            <div v-else class="flex flex-row space-x-4">
              <Skeleton
                v-for="i in [1, 2, 3, 4, 5]"
                :key="i"
                class="w-56 h-9 rounded-md"
              />
            </div>

            <div
              class="flex flex-col max-h-[530px] my-6 space-y-2 grow overflow-y-scroll scrollbar-hide"
            >
              <TripPlanCard v-for="card in cards" :key="card" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="manage"> <TripManageBox /> </TabsContent>
      </Tabs>
    </div>
    <KakaoMap :width="'100vw'" :height="'100vh'" :lat="33.450701" :lng="126.570667" />
  </div>
</template>

<style scoped></style>
