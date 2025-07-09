<script setup>
import Blog_card from "./blog_card.vue";

const { blogs } = useBlogs();
</script>
<template>
  <section class="mt-10 mx-10 flex flex-col" id="blog">
    <div class="flex flex-col items-center">
      <h1
        class="mt-10 self-center text-lg font-medium leading-5 dark:text-white md:mt-24 lg:mt-[90px]"
      >
        Blog
      </h1>
      <div class="mt-9 flex lg:duration-100 self-center">
        <a href="/blogs#all" class="self-center">
          <button
            class="gap-2 group flex items-center rounded-full bg-primary_lite px-5 py-3 text-center text-base font-black leading-5 text-white duration-300 hover:translate-x-1 hover:-translate-y-1 hover:shadow-2xl active:translate-x-0 active:translate-y-0 active:shadow-none xs:px-8 xs:text-lg lg:px-5 3xl:px-8 lg:py-2 lg:text-3xl 3xl:text-3xl"
          >
            Recent Blogs
            <icon
              name="prime:external-link"
              class="text-white h-4 3xl:h-6 xl:scale-0 group-hover:scale-100 duration-300"
            />
          </button>
        </a>
      </div>
      <p
        class="mt-9 lg:duration-100 max-w-[900px] text-center text-base font-light leading-[30x] dark:text-hahu-gray3 xs:text-lg"
      >
        Below are some of our updates regarding our ventures with in the labor
        market and our partners offers in regards to related endeavors
      </p>
    </div>
    <div
      class="mx-15 mt-16 grid grid-cols-1 justify-items-center gap-x-5 gap-y-10 lg:grid-cols-3"
    >
      <blog_card v-for="(blog, index) in blogs" :blog="blog" :index="index" />
    </div>
    <a href="/blogs#all" class="mt-20 self-center group">
      <button
        class="gap-2 group flex items-center rounded-md bg-primary px-4 py-2 text-center text-base font-black leading-5 text-white duration-300 hover:translate-x-l hover:-translate-y-1 cursor-pointer hover:shadow-2xl active:translate-x-0 active:translate-y-0 active:shadow-none xs:text-lg lg:py-2"
      >
        More from Us
        <icon
          name="ph:arrow-right-bold"
          class="text-white w-5 font-bold group-hover:translate-x-2 duration-200"
        />
      </button>
    </a>
  </section>
</template>
