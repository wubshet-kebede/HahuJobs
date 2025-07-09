<script setup>
import { useClipboard } from "@vueuse/core";

const { copy, copied } = useClipboard();

function copyCurrentUrl() {
  copy(window.location.href);
}
const props = defineProps({
  lecturer: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <h1
    class="lg:mt-20 text-2xl font-bold lg:leading-[40px] text-hahu-gray1 dark:text-hahu-gray3 xl:text-3xl"
  >
    {{ lecturer.title }}
  </h1>
  <div class="flex items-center gap-14 py-6">
    <h1
      class="rounded-full bg-primary_lite px-3 py-[5px] text-xs font-medium leading-[18px] text-primary"
    >
      {{ lecturer.type }}
    </h1>
    <p class="text-base font-medium leading-6 text-primary dark:text-white">
      {{ lecturer.date }}
    </p>
  </div>
  <div class="dark:text-hahu-gray1">
    <div class="flex flex-col">
      <p
        class="text-hahugray2 dark:text-hahu-gray3 text-base font-normal leading-[30px] md:text-lg mt-[20px]"
      >
        {{ lecturer.text1 }}
      </p>
      <div class="mt-6 mb-6 flex justify-center">
        <img
          :src="lecturer.images1"
          class="object-contain w-10/12 rounded-xl mb-5"
        />
      </div>
      <p
        class="text-HahuGray1 dark:text-hahu-gray3 text-base font-normal leading-[30px] md:text-lg"
      >
        {{ lecturer.text2 }}
      </p>
      <div class="mt-6 mb-6 flex justify-center">
        <img
          :src="lecturer.images2"
          class="object-contain w-10/12 rounded-xl mb-5"
        />
      </div>
      <p
        class="text-HahuGray1 dark:text-hahu-gray3 text-base font-normal leading-[30px] md:text-lg"
      >
        {{ lecturer.text3 }}
      </p>
      <div class="mt-6 mb-6 flex justify-center">
        <img
          :src="lecturer.images3"
          class="object-contain w-10/12 rounded-xl mb-5"
        />
      </div>
      <p
        class="text-HahuGray1 dark:text-hahu-gray3 text-base font-normal leading-[30px] md:text-lg"
      >
        {{ lecturer.text4 }}
      </p>
      <div class="mt-6 mb-6 flex justify-center">
        <img
          :src="lecturer.images4"
          class="object-contain w-10/12 rounded-xl mb-5"
        />
      </div>
      <p
        class="text-HahuGray1 dark:text-hahu-gray3 text-base font-normal leading-[30px] md:text-lg"
      >
        {{ lecturer.text5 }}
      </p>
      <div class="mt-6 mb-6 flex justify-center">
        <img
          :src="lecturer.images5"
          class="object-contain w-10/12 rounded-xl mb-5"
        />
      </div>
      <p
        class="text-HahuGray1 dark:text-hahu-gray3 text-base font-normal leading-[30px] md:text-lg"
      >
        {{ lecturer.text6 }}
      </p>
      <div class="mt-6 mb-6 flex justify-center">
        <img
          :src="lecturer.images6"
          class="object-contain w-10/12 rounded-xl mb-5"
        />
      </div>
      <p
        class="text-HahuGray1 dark:text-hahu-gray3 text-base font-normal leading-[30px] md:text-lg"
      >
        {{ lecturer.text7 }}
      </p>
      <div class="mt-6 mb-6 flex justify-center">
        <img
          :src="lecturer.images7"
          class="object-contain w-10/12 rounded-xl mb-5"
        />
      </div>
    </div>
  </div>
  <div class="mt-10 mb-16 flex flex-wrap justify-center gap-2 xl:mt-20">
    <button
      @click="copyCurrentUrl"
      class="flex items-center rounded-md border-2 px-2 border-gray-300 bg-white duration-300 ease-in dark:bg-hahu-gray sm:mr-[102px] cursor-pointer"
    >
      <icon
        name="tabler:copy"
        class="text-2xl text-gray-300 object-contain pl-4"
      />

      <span class="py-2 pr-4 pl-[7px]">{{
        copied ? "Copied!" : "Copy Link"
      }}</span>
    </button>
    <div class="flex gap-2">
      <a
        href="http://www.facebook.com/sharer/sharer.php?u=https://www.hahujobs.io/blogs/Hahu_Muya_Public_Lecture_Series&amp;t=HaHuMuya Public Lecture Series: “Composition in Digital Art with AST. Professor Mezgebu Tesema”"
        class="share-popup rounded-md border-2 border-gray-300 px-2 bg-white duration-500 ease-in dark:bg-hahu-gray3"
      >
        <icon
          name="uim:facebook-f"
          class="object-contain px-[13px] py-[9px] text-hahu-gray2 text-2xl mt-2"
        />
      </a>
      <button
        class="rounded-md border-2 border-gray-300 bg-white duration-500 ease-in dark:bg-hahu-gray3 cursor-pointer"
      >
        <img
          class="object-contain px-[13px] py-[9px] text-hahu-gray2"
          src="https://www.hahujobs.io/_nuxt/instaShare.BU8vjf8K.svg"
          alt="instagram"
        />
      </button>
      <a
        href=""
        class="share-popup px-2 rounded-md border-2 border-gray-300 bg-white duration-500 ease-in dark:bg-hahu-gray3"
      >
        <icon
          name="mdi:twitter"
          class="text-hahu-gray2 object-contain px-[13px] py-[9px] mt-2 text-2xl"
        />
      </a>
      <a
        href=""
        class="rounded-md border-2 px-2 border-gray-300 bg-white duration-500 ease-in dark:bg-hahu-gray3"
      >
        <icon
          name="line-md:telegram"
          class="object-contain text-hahu-gray2 px-[13px] py-[3px] font-bold mt-2 text-2xl"
        />
      </a>
    </div>
  </div>
</template>
