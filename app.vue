<template>
  <div class="bg-backgroud text-foreground">
    <NavbarComponent />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <BlogSection />
    <FooterComponent />
  </div>
</template>
<script setup>
import AboutSection from '@/components/AboutSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import BlogSection from './components/BlogSection.vue';
</script>