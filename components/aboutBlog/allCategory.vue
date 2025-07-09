<script setup>
const props = defineProps({
  blog: { type: Object, default: {} },
});
</script>
<template>
  <a
    :href="blog.link"
    class="flex flex-col self-start rounded-2xl h-full bg-white duration-100 ease-in dark:bg-light-dark border-[1px] border-transparent hover:border-primary"
  >
    <img
      :src="blog.images"
      class="object-contain rounded-t-2xl"
      alt="blogImg"
    />
    <h3
      class="mt-6 ml-8 self-start rounded-full bg-primary_lite px-3 py-[5px] text-xs font-medium leading-[18px] text-primary-dark"
    >
      {{ blog.title }}
    </h3>
    <h3 class="ml-8 mt-4 dark:text-hahu-gray3">
      {{ blog.date }}
    </h3>
    <h2
      class="mt-4 ml-8 mx-2 text-xl font-bold leading-[38px] text-gray-800 dark:text-hahu-gray3 sm:text-2xl 2xl:text-3xl"
    >
      {{ blog.text }}
    </h2>
    <button
      class="mt-[34px] ml-8 mb-[30px] flex items-center self-start group text-lg font-medium text-primary"
    >
      Read Post
      <icon
        name="ph:arrow-right-bold"
        class="ml-[9px] w-[18px] text-primary group-hover:translate-x-2 duration-300"
      />
    </button>
  </a>
</template>
