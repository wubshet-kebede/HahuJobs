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
    v-if="founder?.fullname"
    class="lg:duration-500 rounded-md bg-white hover:shadow overflow-hidden dark:bg-hahu-gray1 lg:delay-75"
  >
    <a href="/team#founders" class="flex flex-col pb-20">
      <div class="relative mt-5 flex flex-row justify-center">
        <div>
          <img
            width="144"
            height="144"
            alt="team"
            loading="lazy"
            :src="founder.images"
            class="w-36 self-center rounded-full"
          />
        </div>
        <img
          src="/images/CEO.svg"
          alt="personIcon"
          class="absolute top-[-5px] right-5 w-6"
        />
      </div>
      <h2
        class="mt-1 leading-[38px] text-hahu-gray1 items-center text-center text-2xl font-black dark:text-white"
      >
        {{ founder.fullname }}
      </h2>
      <h2 class="mt-2 text-center text-lg font-medium leading-7 text-primary">
        {{ founder.title }}
      </h2>
      <p
        class="mx-8 mt-6 max-w-[260px] 3xl:max-w-[295px] text-center text-base font-medium leading-6 dark:text-hahu-gray3"
      >
        {{ founder.description }}
      </p>
    </a>
  </div>
</template>
