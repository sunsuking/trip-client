<script setup lang="ts">
import ChattingBot from "@/components/chat/ChattingBot.vue";
import CommonFooter from "@/components/common/CommonFooter.vue";
import CommonHeader from "@/components/common/CommonHeader.vue";
import Toaster from "@/components/ui/toast/Toaster.vue";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
import { storeToRefs } from "pinia";
import { RouterView } from "vue-router";
import { refreshRequest } from "./api/auth";
import { userDataRequest } from "./api/user";
import { useAuthenticationStore } from "./stores/authentication";

const { isLogin, expireTime, profile } = storeToRefs(useAuthenticationStore());
const isRefreshRequest = sessionStorage.getItem("isRefreshRequest");
if (
  (!isLogin.value && !isRefreshRequest) ||
  (expireTime.value && new Date().getTime() > expireTime.value)
) {
  refreshRequest()
    .then(() => {
      userDataRequest();
    })
    .finally(() => {
      sessionStorage.setItem("isRefreshRequest", "true");
    });
} else if (isLogin.value && !profile.value) {
  userDataRequest();
}
</script>

<template>
  <CommonHeader />
  <RouterView />
  <Toaster />
  <CommonFooter />
  <VueQueryDevtools position="left" buttonPosition="bottom-left" />
  <ChattingBot v-if="isLogin" />
</template>
