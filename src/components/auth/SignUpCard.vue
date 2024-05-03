<script setup lang="ts">
// import GitHubIcon from '~icons/radix-icons/github-logo'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "../ui/toast";
import { useOpenStore } from "@/stores/is-open";

const toast = useToast();

const openStore = useOpenStore()


const onSubmit = () => {
  // Validation 로직 추가
  toast.toast({
    title: "회원가입",
    description: "회원가입이 정상적으로 이루어졌습니다. 메일을 확인해주세요."
  });
  openStore.close()
};
</script>

<template>
  <Card class="w-96">
    <form v-on:submit.prevent="onSubmit">
      <CardHeader class="space-y-1">
        <CardTitle class="text-2xl"> 회원가입 </CardTitle>
        <CardDescription> 회원 생성을 위한 정보를 입력해주세요. </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid gap-2">
          <Label for="username">아이디</Label>
          <Input id="username" type="email" />
        </div>
        <div class="grid gap-2">
          <Label for="nickname">닉네임</Label>
          <Input id="nickname" type="text" />
        </div>
        <div class="grid gap-2">
          <Label for="password">비밀번호</Label>
          <Input id="password" type="password" />
        </div>
        <div class="grid gap-2">
          <Label for="passwordConfirm">비밀번호 확인</Label>
          <Input id="passwordConfirm" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button class="w-full" type="submit"> 회원가입 </Button>
      </CardFooter>
    </form>
  </Card>
</template>
