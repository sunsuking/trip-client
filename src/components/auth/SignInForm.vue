<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast";
import { FormStatus, type SignInForm } from "@/types/auth.type";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-vue-next";
import { useMutation } from "@tanstack/vue-query";
import { signInRequest } from "@/api/auth";
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import NaverLogo from "@/components/icons/NaverLogo.vue";
import KakaoLogo from "@/components/icons/KakaoLogo.vue";
import GoogleLogo from "@/components/icons/GoogleLogo.vue";
import GithubLogo from "@/components/icons/GithubLogo.vue";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { useAuthenticationStore } from "@/stores/authentication";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { GITHUB_LOGIN_URL, GOOGLE_LOGIN_URL, KAKAO_LOGIN_URL, NAVER_LOGIN_URL } from "@/api/client";
import { userDataRequest } from "@/api/user";

// 이미 로그인 되어있는 유저라면 바로 홈으로 이동
const authentication = useAuthenticationStore()
const {isLogin} = storeToRefs(authentication);

const router = useRouter();

if (isLogin.value) {
  router.push({ name: 'home' })
}

const emit = defineEmits(["changeStatus"]);
const setFindPassword = FormStatus.FIND_PASSWORD;
const setSignUp = FormStatus.SIGN_UP;

const toast = useToast();

const {mutate, isPending: isLoading} = useMutation({
  mutationKey: ['sign-in'],
  mutationFn: signInRequest,
  onSuccess: () => {
    toast.toast({
      title: '로그인 성공',
      description: '환영합니다!',
      duration: 2000,
      variant: 'success'
    })
    userDataRequest().then(() => {
      router.replace({ name: 'home' })
    })
  },
  onError: (error: any) => {
    console.log("로그인 성공")
    const { response: {data: { message }} } = error;

    toast.toast({
      title: '로그인 실패',
      description: message,
      duration: 2000,
      variant: "destructive"
    })
  }
});

const formSchema = yup.object({
  username: yup.string().required().email(),
  password: yup.string().required()
})

const { handleSubmit } = useForm<SignInForm>({
  validationSchema: formSchema
})

const onSubmit = handleSubmit((values) => {
  // 로그인 추가 로직 작성
  mutate(values);
})
</script>

<template>
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <form @submit.prevent="onSubmit" class="space-y-4">
      <FormField v-slot="{ componentField }" name="username">
        <FormItem>
          <FormLabel for="username">아이디</FormLabel>
          <FormControl>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              v-bind="componentField"
              auto-capitalize="none"
              auto-complete="email"
              auto-correct="off"
              required
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <div class="flex items-center">
            <FormLabel for="password">비밀번호</FormLabel>
            <button
              class="ml-auto inline-block text-sm underline"
              type="button"
              @click="$emit('changeStatus', setFindPassword)"
            >
              비밀번호 찾기
            </button>
          </div>
          <FormControl>
            <Input id="password" type="password" v-bind="componentField" required />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button class="w-full" :disabled="isLoading" @click="onSubmit">
        <LoaderCircle v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
        로그인
      </Button>
      <div class="mt-4 text-center text-sm flex flex-row space-x-2 justify-center">
        <span>계정이 아직 없다면?</span>
        <button class="underline" type="button" @click="$emit('changeStatus', setSignUp)">
          회원가입
        </button>
      </div>
    </form>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background px-2 text-muted-foreground">
          소셜 로그인으로 로그인하기
        </span>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <a
        :href="`${NAVER_LOGIN_URL}`"
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 space-x-2"
      >
        <LoaderCircle v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
        <NaverLogo class="w-4 h-4" />
        <span>Naver</span>
      </a>
      <a
        :href="`${KAKAO_LOGIN_URL}`"
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 space-x-2"
      >
        <LoaderCircle v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
        <KakaoLogo class="w-4 h-4" />
        <span>KAKAO</span>
      </a>
      <a
        :href="`${GOOGLE_LOGIN_URL}`"
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 space-x-2"
      >
        <LoaderCircle v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
        <GoogleLogo class="w-4 h-4" />
        <span>GOOGLE</span>
      </a>
      <a
        :href="`${GITHUB_LOGIN_URL}`"
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 space-x-2"
      >
        <LoaderCircle v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
        <GithubLogo class="w-4 h-4" />
        <span>GitHub</span>
      </a>
    </div>
  </div>
</template>
