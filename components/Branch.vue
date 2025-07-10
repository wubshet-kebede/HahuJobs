<script setup>
const props = defineProps({
  branch: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <li class="flex flex-col gap-y-1">
    <h2
      class="text-xl font-semibold leading-6 text-hahu-gray1 duration-500 ease-in dark:text-white"
    >
      {{ branch.title }}
    </h2>
    <h3
      class="sm:ml-2 text-base font-normal leading-8 text-gray-500 duration-500 ease-in dark:text-hahu-gray3"
    >
      {{ branch.phone }}
    </h3>
  </li>
</template>
