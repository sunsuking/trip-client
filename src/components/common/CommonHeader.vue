<script setup lang="ts">
import { useAuthenticationStore } from "@/stores/authentication";
import { storeToRefs } from "pinia";
import { RouterLink, useRoute } from "vue-router";
import { Dialog, DialogEmpty, DialogTrigger } from "@/components/ui/dialog";
import SignInCard from "@/components/auth/SignInCard.vue";
import SignUpCard from "@/components/auth/SignUpCard.vue";
import { ref } from "vue";
import { FormStatus } from "@/types/auth.type";
import { useOpenStore } from "@/stores/is-open";
const ROUTES: { pathname: string; name: string }[] = [
  {
    pathname: "boards",
    name: "게시판",
  },
  {
    pathname: "path",
    name: "경로추천",
  },
  {
    pathname: "trip",
    name: "여행지 추천",
  },
  {
    pathname: "blog",
    name: "블로그",
  },
];

const status = ref<FormStatus>(FormStatus.SIGN_IN);
const setFormStatus = (form: FormStatus) => {
  status.value = form;
}

const authenticationStore = useAuthenticationStore();
const { isLogin } = storeToRefs(authenticationStore);
const openStore = useOpenStore()
const { isOpen } = storeToRefs(openStore);

const setDefaultInUpdateOpen = (open: boolean) => {
  openStore.updateOpen(open)
  setTimeout(() => {
    status.value = FormStatus.SIGN_IN;
  }, 500)
}
</script>

<template>
  <header
    class="flex items-center justify-between bg-white px-4 py-3 shadow-sm dark:bg-gray-900 sm:px-6 lg:px-8"
  >
    <div class="flex items-center">
      <RouterLink :to="{ name: 'home' }" class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6 text-indigo-500"
        >
          <path
            d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
          ></path>
        </svg>
        <span class="ml-2 text-lg font-bold text-gray-900 dark:text-gray-100"
          >EnjoyTrip</span
        >
      </RouterLink>
    </div>
    <div class="flex items-center space-x-4">
      <nav class="hidden space-x-4 md:flex">
        <RouterLink
          v-for="(route, index) in ROUTES"
          :key="index"
          :to="{ name: route.pathname }"
          class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >{{ route.name }}</RouterLink
        >
      </nav>

      <Dialog :open="isOpen" @update:open="setDefaultInUpdateOpen">
        <DialogTrigger>
          <button
            v-if="isLogin"
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            type="button"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <span class="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
              <span
                class="flex h-full w-full items-center justify-center rounded-full bg-muted bg-gray-100"
                >JP</span
              >
            </span>
          </button>
          <button
            v-else
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            type="button"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <span
              class="relative flex shrink-0 overflow-hidden w-full cursor-pointer items-center justify-center"
            >
              Login
            </span>
          </button>
        </DialogTrigger>
        <DialogEmpty>
          <SignInCard
            v-if="status === FormStatus.SIGN_IN"
            @change-status="setFormStatus"
          />
          <SignUpCard v-else-if="status === FormStatus.SIGN_UP" />
        </DialogEmpty>
      </Dialog>
    </div>
  </header>
</template>
