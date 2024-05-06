<script setup lang="ts">
import { useToast } from "@/components/ui/toast";
import { useRoute, useRouter } from "vue-router";
import CircularLoading from "@/components/common/CircularLoading.vue";
import { emailConfirmRequest } from "@/api/auth";
import { useMutation } from "@tanstack/vue-query";

const route = useRoute();
const router = useRouter();
const toast = useToast();

const confirmType = route.query.type as string;
const code = route.query.code as string;
const email = route.query.email as string;

const { mutate } = useMutation({
  mutationKey: ["confirm-email"],
  mutationFn: emailConfirmRequest,
  onSuccess: () => {
    toast.toast({
      title: "이메일 인증 성공",
      description: "이메일 인증에 성공했습니다. 로그인해주세요.",
      duration: 2000,
    });
    router.push({ name: "sign-in" });
  },
  onError: (error: any) => {
    toast.toast({
      title: "이메일 인증 실패",
      description: error.response.data.message,
      duration: 2000,
      variant: "destructive",
    });
    router.push({ name: "sign-in" });
  },
});

if (confirmType === "sign-up") {
  mutate({ code, email, type: confirmType });
} else {
  router.push({ name: "home" });
}
</script>
<template>
  <CircularLoading />
</template>
