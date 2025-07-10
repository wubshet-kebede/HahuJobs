<script setup>
const { lectureSeries } = useBloglecture();
</script>

<template>
  <div class="flex justify-center md:px-11 xl:px-10">
    <section
      class="mt-3 flex w-11/12 xs:w-9/12 md:w-8/12 flex-col rounded-xl bg-white dark:bg-hahu-gray1 px-4 xs:px-10 sm:px-10 md:px-20 xl:px-20 2xl:px-20"
    >
      <div
        class="relative mt-6 flex lg:justify-between font-bold justify-start lg:mb-10"
      >
        <nav class="flex self-start mt-2">
          <ol
            class="flex space-x-4 rounded-md bg-white dark:bg-light-dark px-2 py-2 xs:px-6 shadow"
          >
            <Li class="flex">
              <div class="flex items-center">
                <a href="/" class="text-gray-400 hover:text-gray-500">
                  <icon
                    name="ic:round-home"
                    class="text-2xl flex-shrink-0 text-primary cursor-pointer"
                  />
                </a>
              </div>
            </Li>
            <li class="flex">
              <div class="flex items-center">
                <icon
                  name="bytesize:chevron-right"
                  class="text-4xl self-stretch text-gray-200 dark:text-gray-400"
                />
                <a
                  href="/blogs#all"
                  class="ml-4 text-sm font-medium text-primary dark:text-white duration-300"
                >
                  Blog
                </a>
              </div>
            </li>
            <li class="flex">
              <div class="flex items-center">
                <icon
                  name="bytesize:chevron-right"
                  class="text-4xl text-gray-200 dark:text-gray-400"
                />
                <a
                  href="#"
                  class="ml-4 text-sm font-medium text-primary dark:text-white duration-300 disabled"
                >
                  Blog Detail
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <div class="flex mt-2">
          <a href="/blogs#all">
            <button
              class="hidden group lg:flex items-center justify-end self-end rounded-md bg-primary px-2 py-1 text-base font-medium leading-6 text-white lg:px-3 lg:py-2 cursor-pointer"
            >
              <icon
                name="lsicon:arrow-left-outline"
                class="text-2xl hover:translate-x-1 text-white"
              />
              Back
            </button>
          </a>
        </div>
      </div>
      <Lecture v-for="lecturer in lectureSeries" :lecturer="lecturer" />
      <div class="mb-7">
        <h1 class="font-bold text-lg dark:text-white text-hahu-gray2">
          ምንግዜም ለሃገር ልጅ በሃገር ልጅ!!
        </h1>
      </div>
    </section>
  </div>
</template>
