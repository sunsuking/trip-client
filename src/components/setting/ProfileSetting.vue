<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { onMounted, ref, watch } from 'vue'
import * as yup from 'yup'

import { citiesRequest, townsRequest } from '@/api/trip'
import { userDataModifyImageRequest } from '@/api/user'
import Button from '@/components/ui/button/Button.vue'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import Input from '@/components/ui/input/Input.vue'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Separator from '@/components/ui/separator/Separator.vue'
import { toast } from '@/components/ui/toast/use-toast'
import { useAuthenticationStore } from '@/stores/authentication'
import { type ITown } from '@/types/trip.type'
import type { IMyPage } from '@/types/user.type'
import { useQuery } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'
import { useForm } from 'vee-validate'

const authenticationStore = useAuthenticationStore()
const { profile } = storeToRefs(authenticationStore)

const open = ref(false)
const detailOpen = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

const { data: cities } = useQuery({
  queryKey: ['cities'],
  queryFn: citiesRequest
})

const formSchema = yup.object({
  username: yup.string().required(),
  nickname: yup.string().required(),
  image: yup.string()
})

const selectedCity = ref(profile.value?.cityCode)
const { handleSubmit, setFieldValue } = useForm<IMyPage>({
  validationSchema: formSchema,
  initialValues: {
    username: profile.value?.username,
    nickname: profile.value?.nickname,
    cityCode: profile.value?.cityCode,
    townCode: profile.value?.townCode,
    isDefault: false
  }
})

const towns = ref<ITown[]>()
if (profile.value?.townCode) {
  selectedCity.value = profile.value.cityCode
}
// 선택된 도시의 마을 리스트를 불러오고, 초기 선택을 설정
watch(selectedCity, async (newCityCode) => {
  if (newCityCode) {
    towns.value = await townsRequest(newCityCode)
    if (
      profile.value?.townCode &&
      towns.value.some((town) => town.townCode === profile.value?.townCode)
    ) {
      setFieldValue('townCode', profile.value.townCode)
    } else {
      setFieldValue('townCode', 0) // 적합한 초기값 없음
    }
  } else {
    towns.value = []
    setFieldValue('townCode', 0)
  }
})

const triggerFileInput = () => {
  fileInput.value?.click()
}

const image = ref<File | null>(null)
const imageSrc = ref<string>('')
const changeImage = (event: Event) => {
  const files = (event.target as HTMLInputElement).files
  if (files && files.length > 0) {
    const file = files[0]
    image.value = file
    const reader = new FileReader()
    reader.onload = (e) => {
      if (profile.value) {
        imageSrc.value = e.target?.result as string
      }
    }
    reader.readAsDataURL(file)
    setFieldValue('isDefault', false)
  }
}

const deleteImage = () => {
  imageSrc.value =
    'https://trip-media-server.s3.ap-northeast-2.amazonaws.com/28f83eeb-6noProfile.png'
  image.value = null
  setFieldValue('isDefault', true)
}

const onSubmit = handleSubmit(async (values) => {
  let isSuccess = false
  isSuccess = await userDataModifyImageRequest(values, image.value)

  if (isSuccess) {
    toast({
      title: '회원 정보 수정 성공',
      description: '회원 정보 수정이 완료되었습니다.',
      variant: 'success'
    })
  } else {
    toast({
      title: '회원 정보 수정 실패',
      description: '회원 정보 수정이 실패했습니다. 다시 시도해주세요.',
      variant: 'destructive'
    })
  }
})

// 초기 렌더링을 위한 onMounted
onMounted(async () => {
  if (selectedCity.value) {
    try {
      const fetchedTowns = await townsRequest(selectedCity.value)
      towns.value = fetchedTowns

      // 초기 town
      if (
        profile.value?.townCode &&
        fetchedTowns.some((town) => town.townCode === profile.value?.townCode)
      ) {
        setFieldValue('townCode', profile.value?.townCode)
      } else {
        // 해당하는 townCode가 없을 때 기본적으로 첫 번째 town 선택 또는 선택 초기화
        setFieldValue('townCode', fetchedTowns.length > 0 ? fetchedTowns[0].townCode : 0)
      }
    } catch (error) {
      towns.value = [] // 오류 발생 시 towns 초기화
    }
  }
})
</script>

<template>
  <div v-if="profile" class="container w-full" style="max-width: 1200px; padding: 20px">
    <div>
      <h3 class="text-3xl font-bold mb-5">프로필 관리</h3>
    </div>
    <Separator />
    <form @submit.prevent="onSubmit" class="space-y-8 mb-3">
      <div class="mt-5">
        <div class="text-xl font-semibold">프로필 이미지</div>
        <div class="relative flex flex-col items-center">
          <div class="relative w-40 h-40">
            <img
              :src="imageSrc || profile.profileImage"
              alt="프로필 이미지"
              class="w-40 h-40 rounded-full object-cover shadow-lg mb-4"
              @click="triggerFileInput"
            />
            <input
              ref="fileInput"
              id="image"
              accept="image/*"
              type="file"
              class="hidden"
              @change="changeImage"
            />
            <button
              class="absolute top-0 right-0 mt-1 mr-1 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center border border-gray-300"
              @click.prevent="deleteImage"
            >
              &times;
            </button>
          </div>
        </div>
      </div>

      <FormField v-slot="{ field, value }" name="nickname">
        <FormItem class="mt-5">
          <FormLabel class="text-xl font-semibold">닉네임</FormLabel>
          <FormControl>
            <Input type="text" v-bind="field" :model-value="value" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ field, value }" name="username">
        <FormItem class="mt-5">
          <FormLabel class="text-xl font-semibold">ID</FormLabel>
          <FormControl>
            <Input type="text" v-bind="field" :model-value="value" readonly />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ value }" name="cityCode">
        <FormItem class="flex flex-col">
          <FormLabel class="text-xl font-semibold">지역 설정</FormLabel>
          <Popover v-model:open="open">
            <PopoverTrigger as-child>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  :aria-expanded="open"
                  :class="cn('w-[200px] justify-between', !value && 'text-muted-foreground')"
                >
                  {{
                    value && cities
                      ? cities.find((city) => city.cityCode === value)?.name
                      : '-- 지역 선택 --'
                  }}
                  <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent class="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="지역검색" />
                <CommandEmpty>지역을 찾지 못했습니다.</CommandEmpty>
                <CommandList>
                  <CommandGroup>
                    <CommandItem
                      v-for="city in cities"
                      :key="city.cityCode"
                      :value="city.name"
                      @select="
                        () => {
                          selectedCity = city.cityCode
                          setFieldValue('cityCode', city.cityCode)
                          open = false
                        }
                      "
                    >
                      <Check
                        :class="
                          cn('mr-2 h-4 w-4', value === city.cityCode ? 'opacity-100' : 'opacity-0')
                        "
                      />
                      {{ city.name }}
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ value }" name="townCode">
        <FormItem class="flex flex-col">
          <Popover v-model:open="detailOpen">
            <PopoverTrigger as-child>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  :aria-expanded="detailOpen"
                  :class="cn('w-[200px] justify-between', !value && 'text-muted-foreground')"
                >
                  {{
                    value && towns
                      ? towns.find((town) => town.townCode === value)?.name
                      : '-- 상세 지역 선택 --'
                  }}
                  <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent class="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="상세지역검색" />
                <CommandEmpty>상세지역을 찾지 못했습니다.</CommandEmpty>
                <CommandList>
                  <CommandGroup>
                    <CommandItem
                      v-for="town in towns"
                      :key="town.townCode"
                      :value="town.name"
                      @select="
                        () => {
                          setFieldValue('townCode', town.townCode)
                          detailOpen = false
                        }
                      "
                    >
                      <Check
                        :class="
                          cn('mr-2 h-4 w-4', value === town.townCode ? 'opacity-100' : 'opacity-0')
                        "
                      />
                      {{ town.name }}
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      </FormField>

      <div class="flex justify-start">
        <Button type="submit">수정</Button>
      </div>
    </form>
  </div>
</template>
