<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});
</script>
<template>
  <div class="flex flex-col xl:flex-1 lg:w-[50vw] xl:w-full justify-between">
    <p
      class="mt-12 flex-1 text-base text-justify font-normal leading-7 dark:text-hahu-gray 3xl:text-lg indent-5 text-hahu-gray2"
    >
      {{ item.text }} <br />
      <br />
      {{ item.text2 }}
    </p>
    <div class="flex xl:flex-1 lg:w-[50vw] xl:w-6/12 justify-center">
      <img
        width="50"
        height="50"
        alt="hahucore"
        :src="item.images"
        class="object-contain block dark:hidden xl:w-10/12 3xl:w-9/12 w-full"
      />
      <img
        width="50"
        height="50"
        alt="hahucore"
        :src="item.images1"
        class="object-contain hidden dark:block xl:w-10/12 3xl:w-9/12 w-full"
      />
    </div>
  </div>
  <div class="flex xl:flex-1 lg:w-[50vw] xl:w-full justify-between">
    <p
      class="mt-10 text-base text-justify font-normal leading-7 dark:text-hahu-gray 3xl:text-lg indent-5 text-hahu-gray2"
    >
      {{ item.text3 }} <br />
      <br />
      {{ item.text4 }}
    </p>
  </div>
</template>
