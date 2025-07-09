<script setup>
import { ref } from "vue";
import { Switch } from "@headlessui/vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
const isDark = ref(false);
watch(isDark, (val) => {
  document.documentElement.classList.toggle("dark", val);
  if (localStorage) {
    localStorage.setItem("nuxt-color-mode", val ? "dark" : "light");
  }
});
onMounted(() => {
  const stored = localStorage.getItem("nuxt-color-mode");
  isDark.value = stored === "dark";
  document.documentElement.classList.toggle("dark", isDark.value);
});

const menus = [
  {
    title: "Home",
    to: "/",
  },
  { title: "About", to: "/#about" },
  {
    title: "Services",
    to: "/#services",
  },
  { title: "Partners", to: "/#partners" },
  {
    title: "Projects",
    to: "/#projects",
  },
  {
    title: "Blog",
    to: "/#blog",
  },
  {
    title: "Report",
    to: "/#report",
  },
  {
    title: "Team",
    to: "/#team",
  },
  {
    title: "Contact",
    to: "/#contact",
  },
];
</script>

<template>
  <div class="sticky top-0 z-50 bg-transparent max-w-[1920px] centerx">
    <nav
      class="sticky top-0 z-20 flex items-center justify-between bg-secondary-3/80 bg-opacity-80 px-8 py-4 backdrop-blur-sm duration-500 ease-in dark:bg-dark_bg md:px-12 xl:pl-24 3xl:px-24"
    >
      <NuxtLink to="/">
        <img
          src="/images/hahu-logo-dark.svg"
          class="dark:hidden"
          alt="HahuJobs Light Logo"
        />

        <img
          src="/images/Hahu_logo1_dark.DTjyvXut.svg"
          class="hidden dark:block"
          alt="HahuJobs Dark Logo"
        />

        <h1
          class="mt-2 text-base font-light leading-4 text-[#444F60] dark:text-white"
        >
          IO
        </h1>
      </NuxtLink>

      <div class="flex flex-row-reverse xl:flex-row justify-between">
        <button
          @click="toggleMenu"
          type="button"
          class="rounded-md bg-white dark:bg-dark_bg border border-white p-2 text-gray-400 xl:hidden z-20"
          aria-label="Toggle menu"
        >
          <span class="sr-only">Open menu</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            class="h-6 w-6"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            />
          </svg>
        </button>

        <ul
          class="absolute hidden bg-secondary-4 duration-700 ease-in dark:bg-gray-700 dark:text-HahuGray/4 xl:static xl:flex xl:w-auto xl:items-center xl:bg-transparent xl:pb-0 dark:xl:bg-transparent mr-2"
        >
          <div class="flex justify-center xl:flex xl:gap-x-7">
            <NuxtLink
              v-for="menu in menus"
              :key="menu.title"
              :to="menu.to"
              class="text-lg font-medium text-hahu-gray1 leading-[35px] duration-500 hover:text-[#008080] dark:hover:text-[#008080] dark:text-white"
              >{{ menu.title }}</NuxtLink
            >
          </div>
        </ul>
        <div class="flex items-center px-4 overflow-hidden mr-2 xl:mr-10">
          <Switch
            v-model="isDark"
            class="relative inline-flex h-6 w-[88px] items-center rounded-full bg-gray-300 cursor-pointer transition-colors"
            role="switch"
          >
            <span
              class="absolute left-3 text-sm font-bold leading-4 text-white"
              v-show="!isDark"
            >
              Light
            </span>
            <span
              class="flex w-full items-center justify-between transition-transform duration-500"
              :class="isDark ? 'translate-x-0' : 'translate-x-[62px]'"
            >
              <div class="h-full rounded-full">
                <svg
                  v-show="isDark"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-6 fill-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
                <svg
                  v-show="!isDark"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-6 fill-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
            </span>
            <span
              class="absolute right-4 text-sm font-bold leading-4 text-black delay-500 duration-100 ease-in-out"
              v-show="isDark"
            >
              Dark
            </span>
          </Switch>
        </div>
      </div>
    </nav>
  </div>
  <nav
    v-if="isMenuOpen"
    role="dialog"
    aria-modal="true"
    class="fixed inset-0 z-50 bg-black/30"
  >
    <div class="flex justify-end h-full w-full">
      <div
        class="w-[300px] h-full flex flex-col bg-white dark:bg-dark_bg shadow-xl overflow-y-auto"
      >
        <div class="flex px-4 pt-5 pb-2">
          <button
            @click="isMenuOpen = false"
            type="button"
            class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-600"
          >
            <span class="sr-only">Close menu</span>
            <Icon name="ant-design:close-outlined" class="text-2xl" />
          </button>
        </div>
        <div class="space-y-6 border-t border-gray-200 py-6 px-4">
          <div class="flex flex-col gap-2">
            <NuxtLink
              v-for="menu in menus"
              :key="menu.title"
              :to="menu.to"
              class="-m-2 block p-2 font-medium uppercase hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-300 dark:text-white"
            >
              {{ menu.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Your style scoped here (can be empty for now) */
</style>
