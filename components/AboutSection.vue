<template>
  <div id="about" class="container">
    <div class="flex flex-col md:flex-row items-stretch justify-between gap-[5vw] md:gap-[20vw]">
      <div class="flex flex-col justify-between">
        <div class="flex items-center gap-[1vw] mb-[5vw] md:mb-0">
          <Title class="leading-none">ABOUT ME</Title>
          <NuxtImg class="size-[4vw]" src="/smile-emoji.webp" alt="smiling emoji" />
        </div>
        <Subtitle>Aspiring Front-end developer with enthusiasm to learn
          something new all the time, loves breaking the
          challenges, keen eye on details, deliver working solution
          and wants to do something that helps literally
          everybody.</Subtitle>
      </div>
      <div class="w-full md:min-w-[30%] md:max-w-[30%]">
        <NuxtImg src="/muhammadyusuf.webp" class="w-full rounded-xl"
          alt="portrait image of Muhammadyusuf the Frontend developer/engineer" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Title from './ui/typography/title.vue';
import Subtitle from './ui/typography/subtitle.vue';
</script>