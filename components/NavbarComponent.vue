<template>
  <nav class="fixed top-0 left-1/2 -translate-x-1/2 w-[95vw] md:w-auto py-[1vw] z-50">
    <div
      class="flex items-center justify-between gap-[2vw] bg-primary/20 backdrop-blur-lg rounded-xl md:rounded-full px-5 py-2">
      <NuxtLink to="#hero" class="w-[10vw] md:w-[3vw]">
        <NuxtImg src="/2.png" alt="logo" />
      </NuxtLink>
      <div class="hidden md:flex items-center gap-[2vw]">
        <NuxtLink v-for="(item, index) in menuLinks" :key="index" :to="item.url" class="text-[1.2vw] text-primary">
          {{ item.label }}
        </NuxtLink>
      </div>
      <div class="flex items-center">
        <ColorMode />
        <Icon name="hugeicons:menu-01" class="block md:hidden text-[9vw] md:text-[0vw] text-primary ml-5 md:ml-0" />
      </div>
    </div>
  </nav>
</template>
<script setup>
const menuLinks = [
  { label: 'About me', url: '#about' },
  { label: 'Skills', url: '#skills' },
  { label: 'Projects', url: '#projects' },
  { label: 'Blog', url: '#blog' },
  { label: 'Contact', url: '#contact' },
]
</script>