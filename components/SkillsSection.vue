<template>
  <div id="skills" class="container py-[10vw]">
    <Title class="mb-[2vw]">SKILLS💪
    </Title>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-2">
      <div v-for="(category, index) in skills" :key="index" :class="category.bgColor"
        class="px-4 py-2 rounded-xl text-background">
        <Subtitle class="text-white font-bold mb-[1vw]">{{ category.title }}:</Subtitle>
        <Subtitle v-for="(skill, id) in category.items" :key="id"
          class="flex items-center gap-[0.5vw] text-white md:text-[1.4vw]">
          <Icon :name="skill.icon" /> {{ skill.name }}
        </Subtitle>
      </div>
    </div>
  </div>
</template>
<script setup>
import Title from './ui/typography/title.vue';
import Subtitle from './ui/typography/subtitle.vue';
const skills = [
  {
    title: 'Frameworks & Lang',
    bgColor: 'bg-blue-500',
    items: [
      { name: 'Vue / Nuxt', icon: 'simple-icons:vuedotjs', color: 'text-green-700' },
      { name: 'React / Next', icon: 'simple-icons:react', color: 'text-cyan-400' },
      { name: 'i18n', icon: 'mdi:translate', color: 'text-amber-400' },
      { name: 'Router', icon: 'mdi:routes', color: 'text-pink-400' },
      { name: 'State Management', icon: 'mdi:atom-variant', color: 'text-purple-500' },
      { name: 'Javascript / Typescript', icon: 'simple-icons:javascript', color: 'text-yellow-400' },
      { name: 'HTML', icon: 'simple-icons:html5', color: 'text-orange-500' },
    ]
  },
  {
    title: 'Styling',
    bgColor: 'bg-[coral]',
    items: [
      { name: 'Figma', icon: 'simple-icons:figma', color: 'text-pink-500' },
      { name: 'TailwindCSS', icon: 'simple-icons:tailwindcss', color: 'text-sky-400' },
      { name: 'GSAP / Motion one', icon: 'simple-icons:greensock', color: 'text-green-600' },
      { name: 'SASS / SCSS', icon: 'simple-icons:sass', color: 'text-pink-300' },
      { name: 'BEM Methodology', icon: 'ph:brackets-curly-bold', color: 'text-primary' },
      { name: 'CSS3', icon: 'simple-icons:css3', color: 'text-blue-500' },
      { name: 'Bootstrap', icon: 'simple-icons:bootstrap', color: 'text-purple-500' }
    ]
  },
  {
    title: 'No-code & AI',
    bgColor: 'bg-green-500',
    items: [
      { name: 'Webflow', icon: 'simple-icons:webflow', color: 'text-blue-400' },
      { name: 'Framer', icon: 'simple-icons:framer', color: 'text-black' },
      { name: 'Shopify', icon: 'simple-icons:shopify', color: 'text-black' },
      { name: 'Tilda', icon: 'simple-icons:tildapublishing', color: 'text-black' },
      { name: 'Readymag', icon: 'icon-park-outline:magic', color: 'text-indigo-500' },
      { name: 'AI Prompt Engineering', icon: 'mdi:robot-outline', color: 'text-emerald-500' }
    ]
  },
  {
    title: 'Others',
    bgColor: 'bg-blue-500',
    items: [
      { name: 'SOLID / KISS / DRY', icon: 'fluent:brain-circuit-24-regular', color: 'text-primary' },
      { name: 'Teamwork', icon: 'mdi:account-group-outline', color: 'text-primary' },
      { name: 'API', icon: 'mdi:api', color: 'text-blue-400' },
      { name: 'Backend Integration', icon: 'mdi:cloud-download-outline', color: 'text-indigo-500' }
    ]
  }
]

</script>