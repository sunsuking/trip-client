<script setup lang="ts">
import { searchResult } from '@/api/search'
import SearchCard from '@/components/search/SearchCard.vue'
import SearchHeader from '@/components/search/SearchHeader.vue'
import { Badge } from '@/components/ui/badge'
import { type ISearch } from '@/types/search.type'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const datas = ref<ISearch>()
const reviewLen = ref()
const noticeLen = ref()
const userLen = ref()
const scheduleLen = ref()
onMounted(() => {
  const keyword = route.query.keyword
  if (!keyword) return

  searchResult(keyword?.toString())
    .then((data) => {
      datas.value = data
      reviewLen.value = datas.value?.reviews.length
      noticeLen.value = datas.value?.notices.length
      userLen.value = datas.value?.users.length
      scheduleLen.value = datas.value?.schedules.length
    })
    .catch((error) => {})
})

const goUserProfile = (userId: number) => {
  router.push({ name: 'userDetail', params: { userId: userId } })
}

// tag
const goSearch = () => {
  router.push({ name: 'search', query: { keyword: route.query.keyword } })
}

const goSearchReview = () => {
  if (!(reviewLen.value > 0)) return
  router.push({ name: 'search-review', query: { keyword: route.query.keyword } })
}

const goSearchNotice = () => {
  if (!(noticeLen.value > 0)) return
  router.push({ name: 'search-notice', query: { keyword: route.query.keyword } })
}

const goSearchProfile = () => {
  if (!(userLen.value > 0)) return
  router.push({ name: 'search-profile', query: { keyword: route.query.keyword } })
}

const goSearchSchedule = () => {
  if (!(scheduleLen.value > 0)) return
  router.push({ name: 'search-schedule', query: { keyword: route.query.keyword } })
}
</script>

<template>
  <div v-if="datas" class="container justify-center flex flex-col my-6 items-start">
    <SearchHeader />
    <div className="w-full px-10">
      <div className="flex justify-between mb-10">
        <div className="flex space-x-2 text-sm">
          <Badge class="badge" @click="goSearch" variant="default"
            >전체 {{ reviewLen + noticeLen + userLen }}</Badge
          >
          <Badge class="badge" @click="goSearchReview">여행 리뷰 {{ reviewLen }}</Badge>
          <Badge class="badge cursor-pointer" @click="goSearchSchedule"
            >여행 계획 {{ scheduleLen }}</Badge
          >
          <Badge class="badge" @click="goSearchNotice">공지사항 {{ noticeLen }}</Badge>
          <Badge class="badge bg-white text-black border-black" @click="goSearchProfile"
            >프로필 {{ userLen }}</Badge
          >
        </div>
      </div>
      <hr />
      <div className="mt-4"></div>
      <h2 className="text-lg font-semibold mt-10">프로필</h2>
      <div className="grid justify-center mt-4">
        <div className="grid grid-cols-3 gap-4 justify-center">
          <SearchCard
            v-for="user in datas.users"
            @click="goUserProfile(user.id)"
            :user-info="user"
            :key="user.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.badge {
  width: 100px;
  height: 40px;
  justify-content: center;
}
</style>
