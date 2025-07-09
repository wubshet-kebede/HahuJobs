<script setup>
const props = defineProps({
  blog: {
    type: Object,
    default: {},
  },
  index: Number,
});
</script>
<template>
  <div
    data-aos="fade-right"
    :data-aos-delay="index * 100"
    data-aos-duration="1200"
    data-aos-easing="ease-in-out"
    class="flex max-w-[560px] h-full flex-col bg-white hover:bg-transparent dark:bg-hahu-gray1 dark:hover:bg-transparent rounded-xl group delay-0"
  >
    <a
      :href="blog.link"
      class="flex flex-col group-hover:translate-y-1 h-full group-active:scale-100 border-2 border-transparent bg-transparent group-hover:bg-white dark:group-hover:bg-hahu-gray1 group-hover:border-primary group-active:shadow-none group-hover:shadow-xl rounded-xl duration-200"
    >
      <div>
        <img
          width="553"
          height="380"
          alt="blogImage"
          :src="blog.images"
          class="object-hover rounded-t-xl"
        />
      </div>
      <h1
        class="mt-6 ml-8 self-start rounded-full bg-primary_lite px-3 py-1 text-xs font-medium leading-[18px] text-primary-dark"
      >
        {{ blog.title }}
      </h1>
      <h2 class="mt-4 ml-8 texxt-base font-medium leading-6 dark:text-white">
        {{ blog.date }}
      </h2>
      <p
        class="mt-4 ml-8 pr-[24px] text-hahu-gray1 text-xl font-bold leading-[38px] dark:text-white 3xl:text-2xl"
      >
        {{ blog.text }}
      </p>
      <button
        class="group mt-[34px] ml-8 mb-[30px] flex items-center self-start text-lg font-medium text-primary"
      >
        Read Post
        <icon
          name="ph:arrow-right-bold"
          class="ml-[9px] w-[18px] text-primary duration-200 group-hover:translate-x-l"
        />
      </button>
    </a>
  </div>
</template>
