<script setup>
const props = defineProps({
  hq: {
    type: Object,
    default: {},
  },
});
</script>
<template>
  <div
    class="group rounded-md bg-white hover:shadow overflow-hidden dark:bg-hahu-gray1 mb-2"
  >
    <div class="relative mt-5 flex flex-row justify-center">
      <div>
        <img
          width="144"
          height="144"
          alt="management team"
          :src="hq.images"
          class="w-36 self-center rounded-full"
        />
      </div>
      <img
        :src="hq.symbol"
        alt="personicon"
        class="absolute top-[-5px] right-5 w-6"
      />
    </div>
    <h2
      class="mt-1 items-center text-center text-2xl text-hahu-gray1 dark:text-white leading-[38px] font-bold"
    >
      {{ hq.name }}
    </h2>
    <h2 class="mt-2 text-primary text-center text-lg font-medium leading-7">
      {{ hq.title }}
    </h2>
    <p
      class="mx-8 mt-6 mb-20 max-w-[240px] 3xl:max-w-[295px] text-hahu-gray1 text-center text-base font-medium leading-6 dark:text-hahu-gray3 line-clamp-4 hover:line-clamp-none"
    >
      {{ hq.description }}
    </p>
  </div>
</template>
