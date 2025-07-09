<script setup>
import Reportdetail from "~/components/report/reportdetail.vue";

const { reports } = useReport();
const activeTab = ref("All");

const menus = [
  {
    link: "#",
    name: "All",
  },
  {
    link: "#",
    name: "Weekly",
  },
  {
    link: "#",
    name: "Monthly",
  },
  {
    link: "#",
    name: "Annually",
  },
];
const activeContent = computed(() => {
  if (activeTab.value === "All") {
    return reports.value;
  }
  return reports.value.filter((item) => item.type === activeTab.value);
});
</script>
<template>
  <section
    class="mt-10 flex flex-col justify-center px-5 md:px-20 lg:px-20 2xl:px-[230px]"
  >
    <div class="mt-[42px] flex justify-between max-w-[1240px]">
      <h2
        class="font-bold text-white bg-primary_lite px-3 py-2 rounded-full lg:px-5 lg:py-2 lg:text-2xl text-lg"
      >
        Reports
      </h2>
      <a href="/">
        <button
          class="text-white bg-primary px-3 py-2 text-lg lg:text-2xl lg:px-3 cursor-pointer rounded-md group"
        >
          <icon
            name="solar:arrow-left-linear"
            class="mr-[9px] inline-block text-2xl text-white duration-300 group-hover:translate-x-1 font-black"
          />

          Back
        </button>
      </a>
    </div>
    <div class="flex max-w-[1240px] flex-col">
      <div class="relative mt-24 flex items-center">
        <input
          class="rounded-2xl w-full border border-hahuGray2 bg-white leading-6 px-8 py-4 text-xl focus:outline-primary md:px-16 md:py-7 dark:bg-light-dark dark:text-hahu-gray3 font-normal"
          placeholder="Search"
        />
        <icon
          name="material-symbols-light:search-rounded"
          class="relative right-10 text-2xl dark:text-white cursor-pointer md:right-20 font-bold"
        />
      </div>
      <div class="mt-16 flex flex-wrap gap-x-4 sm:gap-14 lg:gap-36 self-center">
        <a
          v-for="menu in menus"
          :key="menu.name"
          :href="menu.link"
          @click.prevent="activeTab = menu.name"
          :class="[
            'text-sm font-bold leading-5 text-gray-400 duration-300 hover:scale-110 hover:text-[#444F60] dark:hover:text-[#F0FDF4]',
            activeTab === menu.name
              ? ' border-b-2 border-primary text-primary'
              : '',
          ]"
          >{{ menu.name }}</a
        >
      </div>
      <div v-if="activeContent.length > 0">
        <Reportdetail
          v-for="reportlist in activeContent"
          :reportlist="reportlist"
        />
      </div>
      <div
        v-else
        class="mt-10 w-full flex flex-col text-center justify-around gap-x-[67px] self-start rounded-[15px] px-7 pt-[58px] duration-500 ease-in lg:mt-[105px] dark:text-white lg:flex-row xl:pl-12 text-4xl"
      >
        No Report Available
      </div>
    </div>
  </section>
</template>
