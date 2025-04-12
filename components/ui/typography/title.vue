<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h2 :class="cn('text-[6.5vw] md:text-[4vw] text-primary font-primary', props.class)">
    <slot />
  </h2>
</template>
