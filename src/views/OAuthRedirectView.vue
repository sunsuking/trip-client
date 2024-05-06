<script setup lang="ts">
import { useToast } from "@/components/ui/toast";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const toast = useToast();
if (route.query.access_token) {
  sessionStorage.setItem("accessToken", route.query.access_token as string);
  sessionStorage.setItem("refreshToken", route.query.refresh_token as string);
  router.push({ name: "home" });
} else {
  toast.toast({
    title: "로그인 실패",
    description: route.query.error as string,
    duration: 2000,
    variant: "destructive",
  });
  router.push({ name: "sign-in" });
}
</script>
<template></template>
