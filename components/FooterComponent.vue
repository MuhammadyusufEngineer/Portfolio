<template>
  <div id="contact" class="container">
    <Title class="mb-[2vw]">LET'S CRAFT SOLUTION 🚀</Title>
    <form @submit.prevent="sendToTelegram" class="flex flex-col md:flex-row items-stretch w-full mb-[5vw] md:mb-[1vw]">
      <div class="w-full md:w-[70%]">
        <input v-model="form.name" type="text"
          class="text-[5vw] md:text-[1.5vw] p-5 block w-full outline outline-foreground/20 rounded-md"
          placeholder="YOUR NAME" required />
        <input v-model="form.email" type="text"
          class="text-[5vw] md:text-[1.5vw] p-5 block w-full outline outline-foreground/20 rounded-md"
          placeholder="YOUR EMAIL" required />
        <textarea v-model="form.msg"
          class="w-full text-[4vw] md:text-[1.5vw] p-5 rounded-md outline outline-foreground/20"
          placeholder="YOUR MESSAGE" />
      </div>
      <Button class="w-full md:w-[30%] text-[5vw] md:text-[1.5vw] md:!min-h-full">SEND
        <Icon name="hugeicons:telegram" />
      </Button>
    </form>
    <div v-if="message" :class="messageType === 'good' ? 'bg-green-500' : 'bg-red-500'"
      class="mt-[1vw] rounded-md p-5 text-[4vw] md:text-[1.5vw]">{{ message }}</div>
    <div class="flex items-center justify-between md:justify-center gap-[1vw] pt-[2vw] pb-[5vw]">
      <TooltipProvider v-for="(item, index) in social" :key="index">
        <Tooltip>
          <TooltipTrigger as-child>
            <a :href="item.url" :download="item.download" target="_blank">
              <Icon :name="item.icon" class="text-[10vw] md:text-[2vw]" />
            </a>
          </TooltipTrigger>
          <TooltipContent class="text-[4vw] md:text-[1.5vw]">
            <p>{{ item.tooltip }}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Title from './ui/typography/title.vue';
const social = [
  { tooltip: 'See my CV', icon: 'hugeicons:document-attachment', url: '/resume-muhammadyusuf.pdf' },
  { tooltip: 'See my Portfolio', icon: 'hugeicons:briefcase-06', url: '/portfolio-muhammadyusuf.pdf' },
  { tooltip: 'Hire me on Upwork', icon: 'hugeicons:upwork', url: 'https://upwork.com/freelancers/muhammdyusufibrohimov?mp_source=share' },
  { tooltip: 'Linkedin', icon: 'hugeicons:linkedin-02', url: 'https://linkedin.com/in/Muhammadyusuf-engineer' },
  { tooltip: 'Email', icon: 'hugeicons:mail-01', url: 'mailto:mhmdysfengineer@gmail.com' },
  { tooltip: 'X (twitter)', icon: 'hugeicons:new-twitter', url: 'https://x.com/MhmdysfEngineer' },
  { tooltip: 'Telegram', icon: 'hugeicons:telegram', url: 'https://t.me/Muhammadyusuf_Engineer' },
]
const form = reactive({
  name: '',
  email: '',
  msg: ''
})
const message = ref('')
const messageType = ref('')
const sendToTelegram = async () => {
  try {
    const res = await $fetch('/api/SendToTelegram', {
      method: 'POST',
      body: form
    })
    if (res.ok) {
      message.value = 'Message send successfully!'
      messageType.value = 'good'
      form.name = ''
      form.email = ''
      form.msg = ''
    } else {
      message.value = 'Failed to send a message'
      messageType.value = 'bad'
    }
  } catch (err) {
    console.error(err)
    message.value = 'An error occured'
    messageType.value = 'bad'
  }
}
</script>