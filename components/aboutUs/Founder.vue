<script setup>
const props = defineProps({
  founder: {
    type: Object,
    default: {},
  },
});
</script>
<template>
  <div
    class="flex max-w-[385px] flex-col items-center rounded-[15px] bg-hahugray5 dark:bg-light-dark"
  >
    <div
      class="relative bottom-10 bg-primary_lite dark:bg-light-dark p-4 rounded-full"
    >
      <div>
        <img
          width="144"
          height="144"
          alt="founder"
          :src="founder.images"
          class="w-36 self-center rounded-full object-contain"
        />
      </div>
    </div>
    <h1
      class="text-3xl font-semibold leading-[30px] dark:text-white text-white"
    >
      {{ founder.fullname }}
    </h1>
    <h2
      class="leading-[30px] mt-[10px] text-base font-medium dark:text-white text-[#ECEDEF] md:text-lg"
    >
      {{ founder.title }}
    </h2>
    <p
      class="mt-10 mb-8 px-2 text-base font-medium leading-[30px] dark:text-white text-[#ECEDEF] md:text-lg xl:px-8 text-justify"
    >
      {{ founder.description }}
    </p>

    <div class="flex gap-5 mb-5">
      <a
        v-for="link in founder.links"
        :key="link.name"
        :href="link.url"
        target="_blank"
      >
        <icon
          :name="link.iconname"
          class="text-2xl text-hahu-gray1 flex flex-row duration-300 dark:text-white hover:brightness-50 hover:invert"
        />
      </a>
    </div>
  </div>
</template>
