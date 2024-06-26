<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { getNoticeDetail, noticeDelete, noticeUpdate } from '@/api/notice'
import { useToast } from '@/components/ui/toast'

const route = useRoute()
const router = useRouter()
const toast = useToast()

const noticeId = route.params.noticeId

const notice = ref({
  title: '',
  content: ''
})

const images = ref<File[]>([])
const imageSrcs = ref<string[]>([])

let quill: Quill
onMounted(() => {
  quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
      // toolbar: [
      //   [{ header: [1, 2, false] }],
      //   ['bold', 'italic', 'underline', 'strike'],
      //   ['blockquote'],
      //   [{ list: 'ordered' }, { list: 'bullet' }],
      //   [{ color: [] }, { background: [] }],
      //   ['image', 'link']
      // ]
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ color: [] }, { background: [] }],
          ['image', 'link']
        ],
        handlers: {
          image: () => {
            getLocalImage()
          }
        }
      }
    }
  })

  getNoticeDetail(noticeId.toString())
    .then((data) => {
      notice.value = data
      quill.root.innerHTML = notice.value.content
    })
    .catch((error) => {})

  quill.on('text-change', () => {
    notice.value.content = quill.root.innerHTML
  })

  // quill.getModule('toolbar').addHandler('image', () => {
  //   getLocalImage()
  // })
})

const getLocalImage = () => {
  const fileInput = document.createElement('input')
  fileInput.setAttribute('type', 'file')
  fileInput.setAttribute('accept', 'image/*')

  fileInput.click()

  fileInput.onchange = () => {
    const files = fileInput.files
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        images.value = [...images.value, file]
        const reader = new FileReader()

        reader.onload = (e) => {
          const base64ImageSrc = e.target!.result as string
          imageSrcs.value = [...imageSrcs.value, base64ImageSrc]
          const range = quill.getSelection()
          quill.insertEmbed(range!.index, 'image', base64ImageSrc)
        }

        reader.readAsDataURL(file)
      }
    }
  }
}

const goDetail = () => {
  router.push({ name: 'notice-view' })
}

const updateNotice = () => {
  notice.value.content = quill.root.innerHTML

  const key = 'image-replace-key'
  imageSrcs.value.forEach((src, index) => {
    notice.value.content = notice.value.content.replace(src, `${key}-${index + 1}`)
  })

  noticeUpdate(
    {
      images: images.value,
      title: notice.value.title,
      content: notice.value.content
    },
    noticeId.toString()
  )
    .then(() => {
      toast.toast({
        title: '공지사항 수정 성공',
        description: '공지사항 수정에 성공하였습니다.',
        duration: 2000,
        variant: 'success'
      })
      router.push({ name: 'notice-view' })
    })
    .catch((error) => {})
}

const deleteNotice = () => {
  noticeDelete(noticeId.toString())
    .then(() => {
      if (confirm('정말 삭제하시겠습니까?')) {
        toast.toast({
          title: '공지사항 삭제 성공',
          description: '공지사항 삭제에 성공하였습니다.',
          duration: 2000,
          variant: 'success'
        })
        router.push({ name: 'adminNotice' })
      }
      return
    })
    .catch((error) => {})
}
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <Card class="w-[1200px] h-[800px]">
      <CardHeader>
        <CardTitle>공지사항 수정</CardTitle>
        <CardDescription>글 작성자 : Admin</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div class="grid items-center w-full gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label for="name">제목</Label>
              <Input
                class="h-[70px] p-2"
                id="name"
                placeholder="제목을 입력해주세요."
                v-model="notice.title"
              />
            </div>
            <Label for="name">내용</Label>
            <div id="editor-container" class="h-[400px] mb-5 mt-2">
              <div id="editor"></div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex justify-between px-6 pb-6 mt-10">
        <Button variant="outline" @click="goDetail"> 취소 </Button>
        <Button
          @click="deleteNotice"
          class="text-white bg-red-700 hover:bg-red-800 focus:outline-none"
          >글 삭제하기</Button
        >
        <Button @click="updateNotice">수정완료</Button>
      </CardFooter>
    </Card>
  </div>
</template>

<style scoped></style>
