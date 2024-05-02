<template>
  <div class="rounded-lg p-4 flex flex-col items-center justify-center">
    <h3 class="text-2xl font-bold">{{ count.toLocaleString() }}</h3>
    <p class="text-gray-500 dark:text-gray-400">{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  count: number
  name: string
}>()
</script>

<style scoped></style>
