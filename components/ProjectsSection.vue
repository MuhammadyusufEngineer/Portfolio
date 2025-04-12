<template>
  <div id="projects" class="container">
    <Title class="mb-[2vw]">SELECTED PROJECTS ⭐</Title>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div v-for="(item, index) in selected" :key="index" class="bg-muted p-2 rounded-lg">
        <div class="flex items-center gap-1 ml-2">
          <div class="size-[0.5vw] bg-muted-foreground rounded-full" v-for="item in 3"></div>
        </div>
        <div class="mt-2 rounded-md overflow-hidden">
          <NuxtImg :src="item.img" alt="infocript crypto staking website" />
        </div>
      </div>
    </div>
    <Button class="font-primary w-full mt-[1vw] py-[2vw] leading-none">ALL PROJECTS
      <Icon name="hugeicons:view" class="text-[8vw] md:text-[2vw]" />
    </Button>
  </div>
</template>
<script setup>
import Title from '@/components/ui/typography/title.vue'
const selected = [
  { name: 'HUMBLEBEE AI', img: '/humblebeeai.webp' },
  { name: 'INFOCRIPT', img: '/infocript.webp' },
  { name: 'REFLECT REFINE REGENERATE', img: '/rrr.webp' },
  { name: 'HUMOBONUS', img: '/humobonus.webp' },
]
</script>