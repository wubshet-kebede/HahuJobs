<script setup>
const props = defineProps({
  contact: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="flex flex-nowrap items-baseline">
    <icon :name="contact.iconName" class="text-2xl text-primary" />
    <div class="ml-4 flex flex-col">
      <h2 class="text-xl font-bold leading-[38px] text-primary">
        {{ contact.title }}
      </h2>
      <template v-if="contact.add1 || contact.add2 || contact.add3">
        <h3
          v-if="contact.add1"
          class="text-lg font-normal leading-[30px] dark:text-hahu-gray3"
        >
          {{ contact.add1 }}
        </h3>
        <h3
          v-if="contact.add2"
          class="text-lg font-normal leading-[30px] dark:text-hahu-gray3"
        >
          {{ contact.add2 }}
        </h3>
        <h3
          v-if="contact.add3"
          class="text-lg font-normal leading-[30px] dark:text-hahu-gray3"
        >
          {{ contact.add3 }}
        </h3>
      </template>

      <template v-else-if="contact.phone1 || contact.phone2 || contact.phone3">
        <h3
          v-if="contact.phone1"
          class="text-lg font-normal leading-[30px] dark:text-hahu-gray3"
        >
          {{ contact.phone1 }}
        </h3>
        <h3
          v-if="contact.phone2"
          class="text-lg font-normal leading-[30px] dark:text-hahu-gray3"
        >
          {{ contact.phone2 }}
        </h3>
        <h3
          v-if="contact.phone3"
          class="text-lg font-normal leading-[30px] dark:text-hahu-gray3"
        >
          {{ contact.phone3 }}
        </h3>
      </template>

      <template v-else-if="contact.email">
        <h3 class="text-lg font-normal leading-[30px] dark:text-hahu-gray3">
          {{ contact.email }}
        </h3>
      </template>
    </div>
  </div>
</template>
