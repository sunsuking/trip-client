<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-vue-next";
import { KakaoMap } from "vue3-kakao-maps";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ref } from "vue";
import TripPlanCard from "@/components/card/TripPlanCard.vue";
import { useToast } from "@/components/ui/toast";
import TripManageBox from "@/components/trip/TripManageBox.vue";

const cards = Array.from({ length: 10 }, (_, i) => i);

const categories = [
  "공연",
  "음식",
  "숙소",
  "관광지",
  "기타",
  "쇼핑",
  "카페",
  "박물관",
  "테마파크",
  "레포츠",
];

const toast = useToast();

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
            >
              <ToggleGroupItem
                variant="outline"
                v-for="category in categories"
                :key="category"
                :value="category"
                ><span class="text-nowrap w-12 h-5">{{ category }}</span>
              </ToggleGroupItem>
            </ToggleGroup>
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
