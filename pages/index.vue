<!-- pages/index.vue -->
<template>
  <div
    class="scroll-smooth min-h-screen px-4 md:px-12 xl:px-14 2xl:px-24 text-HahuGray1 max-w-[1920px] centerx"
  >
    <Home />
    <About id="about" />
    <Services id="services" />
    <Partners />
    <projects />
    <Blog />
    <report />
    <team />
    <contact />
  </div>
</template>

<script lang="ts" setup>
defineOgImageComponent("TestOg", {
  title: "Hello OG Image 👋",
  description: "Hey Whatsapp! man are you good?",
  borderColor: "green",
});
useSeoMeta({
  description:
    "Hello HaHuJobs is the software enterprise developed my minab IT solutions to solve any obstacles for job seekers!",
});
</script>

<style scoped></style>
