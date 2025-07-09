<script setup>
const props = defineProps({
  reportlist: {
    type: Object,
    default: {},
  },
});
</script>
<template>
  <div
    class="mt-10 w-full flex flex-col justify-around gap-x-[67px] self-start rounded-[15px] bg-white px-7 pt-[58px] duration-500 ease-in dark:bg-light-dark lg:mt-[105px] lg:flex-row xl:pl-12 4xl:min-w-[1263px]"
  >
    <a
      v-if="reportlist.youtube"
      :href="reportlist.link"
      class="flex justify-center xl:flex-1 w-full xl:w-4/12 items-center pb-5 md:pb-10"
      ><iframe :src="reportlist.youtube" width="640" height="360"></iframe>
    </a>
    <a
      v-if="reportlist.image"
      :href="reportlist.link"
      class="flex justify-center xl:flex-1 w-full xl:w-4/12 items-center pb-5 md:pb-10"
    >
      <img
        :src="reportlist.image"
        width="560"
        height="560"
        alt="report"
        class="mb-2 object-contain"
      />
    </a>
    <div class="flex flex-1 flex-col">
      <h2
        class="text-lg font-bold text-[#444F60] leading-8 dark:text-[#ECEDEF]"
      >
        {{ reportlist.title }}
      </h2>
      <div class="flex mt-11 gap-x-7">
        <h2
          class="self-center rounded-full bg-primary_lite px-4 py-[2px] text-xs font-normal leading-[18px] duration-500 ease-in dark:text-[#ECEDEF]"
        >
          {{ reportlist.type }}
        </h2>
        <p class="text-primary_lite px-5 font-bold">{{ reportlist.date }}</p>
      </div>
      <div
        class="mt-7 max-w-[590px] duration-500 ease-in dark:text-[#ECEDEF] lg:pr-2 xl:pr-[89px]"
      >
        {{ reportlist.text }}
      </div>
      <a
        href="/"
        class="rounded-md border-2 px-2 py-2 hover:bg-primary_lite space-x-3 mt-4 self-start flex justify-between border-primary duration-200 ease-in dark:bg-[#ECEDEF]"
      >
        <span>Read More</span>
        <img src="/yout/download.svg" alt="readmore" />
      </a>
      <p
        class="mt-11 text-xs font-normal leading-[18px] text-[#444F60] duration-500 ease-in dark:text-[#ECEDEF]"
      >
        Share
      </p>
      <div class="mt-2 mb-10 flex gap-2">
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
  </div>
</template>
