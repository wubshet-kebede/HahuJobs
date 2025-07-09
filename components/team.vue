<script setup>
const { advisors } = useAdvisor();
const { founders } = useFounder();
</script>
<template>
  <section class="flex flex-col overflow-hidden" id="team">
    <div class="flex flex-col items-center">
      <h2
        class="mt-10 self-center font-medium text-lg leading-[18px] lg:mt-[90px] dark:text-white"
      >
        Management Team
      </h2>
      <h2
        class="mt-9 self-center rounded-[36px] bg-primary_lite px-3 py-2 text-center text-base font-black leading-5 text-white xs:px-8 xs:text-lg lg:px-4 3xl:px-8 lg:py-4 3xl:py-2 lg:text-3xl 3xl:text-3xl"
      >
        Here are some of our core management team
      </h2>
    </div>
    <div
      class="flex flex-wrap justify-center mt-11 gap-x-4 gap-y-6 md:gap-x-7 lg:gap-x-10 lg:gap-y-6 4xl:gap-x-16 4xl:gap-y-16"
    >
      <team-card v-for="founder in founders" :founder="founder" />
    </div>
    <div
      class="mt-11 flex flex-wrap 2xl:flex-nowrap items-center justify-center gap-x-4 gap-y-6 md:gap-x-7 lg:gap-x-10 lg:gap-y-6 4xl:gap-x-16"
    >
      <advisor_card v-for="advisor in advisors" :advisor="advisor" />
    </div>
    <a href="Team" class="flex self-center justify-center mt-20">
      <button
        class="flex group items-center rounded-md bg-primary text-sm px-2 py-1 md:px-5 md:py-3 md:text-base font-medium leading-6 text-white cursor-pointer"
      >
        Meet the team
        <icon
          name="ph:arrow-right-bold"
          class="ml-3 inline-block h-5 w-5 text-white duration-300 group-hover:translate-x-1"
        />
      </button>
    </a>
  </section>
</template>
