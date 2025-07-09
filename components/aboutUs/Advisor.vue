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
    class="flex flex-col items-center rounded-[15px] bg-hahugray5 dark:bg-light-dark xl:last:col-span-1 xl:last:col-start-2 2xl:last:col-span-1 2xl:last:mx-w-none xl:last:mx-w-[25vw]"
  >
    <div>
      <img
        height="144"
        width="144"
        alt="advisor"
        :src="advisor.images"
        class="w-36 self-center rounded-full object-contain mt-3"
      />
    </div>
    <h1 class="text-lg font-semibold leading-[30px] text-primary">
      {{ advisor.name }}
    </h1>
    <h2
      class="leading[30px] mt-2 text-base font-medium text-[#ECEDEF] md:text-lg"
    >
      {{ advisor.title }}
    </h2>
    <p
      class="mt-6 mb-8 px-8 text-justify text-base font-medium leading-7 text-white md:text-lg xl:px-8 line-clamp-10"
    >
      {{ advisor.description }}
    </p>
    <button
      @click="emit('read-more', advisor)"
      class="flex text-white group font-bold bg-primary px-3 py-2 rounded-md mb-5 cursor-pointer items-center gap-x-1"
    >
      Read more
      <img
        src="/images/download.svg"
        class="scale-0 group-hover:scale-100 duration-300"
      />
    </button>
    <div class="flex gap-5 mb-5">
      <a
        v-for="link in advisor.links"
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
