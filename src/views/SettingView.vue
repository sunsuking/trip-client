<script setup lang="ts">
import SidebarSetting from "@/components/setting/SidebarSetting.vue";
import Separator from "@/components/ui/separator/Separator.vue";
import { ref } from "vue";

const title = ref("관리 페이지");
const changeTitle = (newTitle: string) => {
  title.value = newTitle;
};
</script>

<template>
  <div class="hidden space-y-6 p-10 pb-16 md:block">
    <div class="space-y-0.5">
      <h2 class="text-2xl font-bold tracking-tight">{{ title }}</h2>
    </div>
    <Separator class="my-6" />
    <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside class="-mx-4 lg:w-1/5">
        <SidebarSetting @changeTitle="changeTitle" />
      </aside>
      <div class="flex-1">
        <div class="space-y-6">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
