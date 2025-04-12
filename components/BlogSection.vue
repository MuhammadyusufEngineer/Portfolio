<template>
  <div id="blog" class="container py-[10vw]">
    <Title class="mb-[2vw]">Blogs 📝</Title>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
      <Card v-for="item in 3">
        <CardContent class="flex flex-col gap-[1vw]">
          <Skeleton class="h-[125px] w-full rounded-xl" />
          <p>Coming soon...</p>
          <div class="space-y-2">
            <Skeleton class="h-4 w-[80%]" />
            <Skeleton class="h-4 w-[70%]" />
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Title from './ui/typography/title.vue';
import { Skeleton } from '@/components/ui/skeleton'
</script>