<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CommonHeader from '@/components/common/CommonHeader.vue'
import Toaster from '@/components/ui/toast/Toaster.vue'
</script>

<template>
  <CommonHeader />
  <RouterView />
  <Toaster />
</template>
