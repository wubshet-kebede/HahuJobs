<script setup>
const props = defineProps({
  advisor: {
    type: Object,
    default: {},
  },
});
const emit = defineEmits(["read-more"]);
</script>

<template>
  <div
    v-if="advisor?.name"
    class="self-strectch rounded-md bg-white hover:shadow-full overflow-hidden dark:bg-hahu-gray1"
  >
    <div class="relative mt-5 justify-center flex flex-row">
      <div>
        <img
          width="144"
          height="144"
          alt="team"
          loading="lazy"
          :src="advisor.images"
          class="w-36 self-center rounded-full"
        />
      </div>
      <img
        class="absolute top-[-5px] right-5 w-6"
        alt="personIcon"
        src="/images/advisor.svg"
      />
    </div>
    <h2
      class="mt-1 items-center text-hahu-gray1 text-center text-2xl font-black leading-[38px] dark:text-white"
    >
      {{ advisor.name }}
    </h2>
    <h2 class="mt-2 text-center text-lg font-medium leading-7 text-primary">
      {{ advisor.title }}
    </h2>
    <p
      class="mx-8 mt-6 mb-7 max-w-[260px] 3xl:max-w-[295px] text-justify text-base font-medium text-hahu-gray1 leading-6 dark:text-hahu-gray3 line-clamp-10 duration-700"
    >
      {{ advisor.description }}
    </p>
    <div class="w-full flex justify-end pr-8">
      <button
        @click="emit('read-more', advisor)"
        class="group mb-10 px-4 py-2 flex items-center rounded-md bg-primary text-base text-white duration-300"
      >
        <span class="flex gap-x-2"
          >Read More
          <img
            src="/images/download.svg"
            class="scale-0 group-hover:scale-100 duration-300"
        /></span>
      </button>
    </div>
  </div>
</template>
