<script setup>
import Project_card from "./Project_card.vue";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const { projects } = useProjects();
</script>

<template>
  <section class="flex flex-col" id="projects">
    <div class="flex flex-col">
      <h1
        class="mt-10 lg:translate-y-10 duration-1000 self-center text-lg font-medium leading-5 dark:text-white md:mt-15 lg:mt-24"
      >
        Projects
      </h1>
      <h2
        class="mt-[34px] lg:translate-y-10 duration-1000 self-center rounded-[36px] bg-primary_lite px-3 py-2 text-center font-black leading-5 text-white xs:px-8 xs:text-lg lg:px-6 3xl:px-10 lg:py-3 lg:text-3xl 3xl:text-3xl"
      >
        Our Labor market related projects
      </h2>
    </div>
    <div class="overflow-hidden">
      <Carousel
        :items-to-show="1"
        wrap-around="true"
        breakpoint-mode="carousel"
        :breakpoints="{
          600: {
            itemsToShow: 1,
            snapAlign: 'start',
          },
          768: {
            itemsToShow: 2,
            snapAlign: 'start',
          },
          1024: {
            itemsToShow: 2,
            snapAlign: 'start',
          },
          1280: {
            itemsToShow: 2.5,
            snapAlign: 'start',
          },
        }"
        :gap="2"
        class="mx-5 mt-20 justify-center self-center"
      >
        <Slide
          v-for="(project, index) in projects"
          :key="index"
          class="mx-4 lg:px-10 2xl:mx-15 py-16 block md:px-5"
        >
          <Project_card :project="project" />
        </Slide>

        <template #addons>
          <div class="flex justify-start px-5 z-[1000px]">
            <Navigation />
          </div>

          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>
<style scoped>
:deep(.carousel__prev),
:deep(.carousel__next) {
  font-size: 8rem;
  width: 6rem;
  height: 6rem;
  color: #697280;
}

:deep(.carousel__pagination-button) {
  background-color: #d1d5db;
}

:deep(.carousel__pagination-button--active) {
  background-color: #22c55e !important;
}
</style>
<style>
html.dark .carousel__prev,
html.dark .carousel__next {
  color: #697280 !important;
}
</style>
