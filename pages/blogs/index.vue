<script setup>
import AllCategory from "~/components/aboutBlog/allCategory.vue";
import { useRoute } from "vue-router";
const { blogdetails } = useBlogdetails();
const menus = [
  { title: "All Category", to: "#all" },
  { title: "Guides", to: "#guide" },
  { title: "HaHuJobs News", to: "#news" },
  { title: "New features", to: "#new_features" },
  { title: "Scholarship", to: "#scholarship" },
  { title: "Soft skill training", to: "#soft_skill_training" },
  { title: "Technical training", to: "#technical_training" },
  { title: "Well wishes", to: "#well_wishes" },
  { title: "Youth platform", to: "#youth_platform" },
];
const route = useRoute();
const activeCategory = ref(blogdetails.value);
const activeTab = ref("#all");

watch(
  () => route.hash,
  (newHash) => {
    activeTab.value = newHash;
    console.log("active tab is", activeTab);
    if (route.hash == "#all") {
      activeCategory.value = blogdetails.value;
    } else {
      activeCategory.value = blogdetails.value.filter((item) => {
        return item.to === newHash;
      });
    }
  }
);
</script>

<template>
  <section
    class="mx-2 flex flex-col px-5 md:px-20 lg:px-20 xl:px-36 2xl:px-[230px]"
  >
    <div class="mt-20 flex justify-between md:px-8">
      <h2
        class="text-start mt-5 self-start px-3 rounded-full bg-primary_lite py-1 text-base font-medium leading-[18px] text-white md:text-lg lg:px-8 lg:py-3 lg:text-xl xl:mt-0 xl:text-2xl"
      >
        Blogs
      </h2>
      <a href="/" class="flex">
        <button
          class="group flex items-center justify-end self-end rounded-md bg-primary px-2 py-1 text-base font-medium leading-6 text-white lg:px-5 lg:py-3 cursor-pointer"
        >
          <icon
            name="solar:arrow-left-linear"
            class="mr-[9px] inline-block text-2xl text-white duration-300 group-hover:-translate-x-1 font-bold"
          />
          Back
        </button>
      </a>
    </div>
    <div class="relative mt-24 flex items-center">
      <input
        class="w-full rounded-2xl border border-hahuGray2 text-[#697280] dark:text-hahuGray2 dark:bg-light-dark px-8 py-4 text-xl font-normal leading-6 focus:outline-primary md:px-16 md:py-7 dark:focus:outline-blue-600"
        placeholder="Search "
      />
      <icon
        name="material-symbols-light:search-rounded"
        class="relative right-10 text-2xl dark:text-white cursor-pointer md:right-20 font-bold"
      />
    </div>
    <div
      class="mt-5 flex flex-wrap items-center md:gap-4 lg:gap-10 xl:gap-x-10"
    >
      <button
        v-for="menu in menus"
        @click="$router.push({ hash: menu.to })"
        :class="[
          'mt-5 lg:mt-5 rounded-md px-4 py-2 text-sm font-bold leading-5',
          'bg-hahu-gray4 bg-opacity-80 text-gray-400 cursor-pointer',
          activeTab === menu.to ? 'bg-hahugray6 text-primary' : '',
        ]"
      >
        {{ menu.title }}
      </button>
    </div>
    <div
      class="mt-[56px] grid grid-cols-1 gap-y-[68px] lg:grid-cols-2 lg:gap-x-[100px] xl:gap-x-[155px]"
    >
      <AllCategory v-for="blog in activeCategory" :key="blog.id" :blog="blog" />
    </div>
  </section>
</template>
