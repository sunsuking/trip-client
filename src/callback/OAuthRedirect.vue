<script setup lang="ts">
import { useToast } from "@/components/ui/toast";
import { useRoute, useRouter } from "vue-router";
import CircularLoading from "@/components/common/CircularLoading.vue";

const route = useRoute();
const router = useRouter();
const toast = useToast();
if (route.query.access_token) {
  sessionStorage.setItem("accessToken", route.query.access_token as string);
  sessionStorage.setItem("refreshToken", route.query.refresh_token as string);
  router.push({ name: "home" });
} else {
  const isNew: boolean = JSON.parse(route.query.isNew as string);

  toast.toast({
    title: isNew ? "회원가입 성공" : "로그인 실패",
    description: route.query.error as string,
    duration: 2000,
    variant: isNew ? undefined : "destructive",
  });
  router.push({ name: "sign-in" });
}
</script>
<template>
  <CircularLoading />
</template>
