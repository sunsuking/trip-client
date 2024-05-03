<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "../ui/toast";
import { ref } from "vue";
import { FormStatus } from "@/types/auth.type";

const emit = defineEmits(["changeStatus"])

const toast = useToast();


const userInput = ref<{
  username: string;
  password: string;
}>({
  username: "",
  password: "",
});

const setFindPassword = FormStatus.FIND_PASSWORD
const setSignUp = FormStatus.SIGN_UP

const onSubmit = () => {
  console.log(userInput.value.username, userInput.value.password);
  toast.toast({
  title: '로그인',
  description: '로그인이 완료되었습니다.',
})
};
</script>

<template>
  <Card class="mx-auto max-w-sm w-96">
    <CardHeader>
      <CardTitle class="text-2xl"> 로그인 </CardTitle>
      <CardDescription> 아이디와 비밀번호를 입력해주세요. </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">아이디</Label>
          <Input id="email" type="email" required v-model="userInput.username" />
        </div>
        <div class="grid gap-2">
          <div class="flex items-center">
            <Label for="password">비밀번호</Label>
            <button class="ml-auto inline-block text-sm underline" @click="$emit('changeStatus', setFindPassword)">
              비밀번호 찾기
            </button>
          </div>
          <Input id="password" type="password" required v-model="userInput.password" />
        </div>
        <Button type="submit" class="w-full"  @click="onSubmit"> 로그인 하기 </Button>
        <Button variant="outline" class="w-full">
          Login with Google
        </Button>
      </div>
      <div class="mt-4 text-center text-sm flex flex-row space-x-2 justify-center">
        <span>계정이 아직 없다면?</span>
        <button class="underline" @click="$emit('changeStatus', setSignUp)">회원가입</button>
      </div>
    </CardContent>
  </Card>
</template>
