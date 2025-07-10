<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    description?: string;
    borderColor?: string;
  }>(),
  {
    title: "title",
    description: "hey i am testing it",
    borderColor: "blue-500",
  }
);
</script>
<template>
  <div
    :class="[`border-${borderColor}`]"
    class="h-full w-full flex items-start justify-start border-solid border-[12px] bg-gray"
  >
    <div class="flex items-start justify-start h-full">
      <div class="flex flex-col justify-between w-full h-full">
        <h1 class="text-[80px] p-20 font-black text-left">
          {{ title }}
        </h1>
        <h2 class="justify-center">{{ description }}</h2>
        <p class="text-2xl pb-10 px-20 font-bold mb-0">HahuJobs.com</p>
      </div>
    </div>
  </div>
</template>
