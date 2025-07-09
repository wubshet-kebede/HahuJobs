<script setup>
const props = defineProps({
  project: {
    type: Object,
    default: {},
  },
});
</script>
<template>
  <a
    :href="project.link"
    class="flex flex-col justify-between w-full h-full hover:scale-[1.01] active:scale-100 rounded-2xl bg-white dark:bg-hahu-gray4 duration-300 lg:mx-10 xl:mx-8 3xl:mx-16 border-2 border-transparent hover:border-primary active:shadow-none hover:shadow-lg"
    ><div class="w-full group">
      <div class="mb-7 aspect-w-4 aspect-h-2">
        <img
          :src="project.imageSrc"
          width="565"
          height="282"
          class="w-full h-full object-cover rounded-t-2xl"
          alt="thumbnail"
          loading="lazy"
        />
      </div>
      <div class="flex flex-col justify-between px-4 sm:px-6 xl:px-8 3xl:px-12">
        <div class="flex flex-col">
          <h1
            class="self-start text-xl text-left font-black leading-6 text-primary"
          >
            {{ project.title }}
          </h1>
          <p
            class="mt-5 text-left text-sm lg:text-lg font-light leading-[30px] dark:text-hahu-gray3 line-clamp-4"
          >
            {{ project.description }}
          </p>
        </div>
        <div class="mt-4 mb-5 flex">
          <div class="mr-4 flex flex-col">
            <h2
              v-if="project.client?.src"
              class="self-start text-xl font-black leading-[30px] dark:text-white"
            >
              Client
            </h2>
            <div v-if="project.client?.src" class="w-28">
              <img
                alt="clientImage"
                loading="lazy"
                class="mt-10 group-hover:grayscale-0 dark:brightness-50 dark:group-hover:brightness-100 dark:group-hover:invert-0 grayscale dark:invert duration-200"
                :src="project.client.src"
              />
            </div>
          </div>
          <div
            v-if="project.client?.src"
            class="mt-16 rounded-full border-2 border-hahu-gray3 bg-hahu-gray3 xl:border-hahu-gray3 xl:bg-hahu-gray3 xl:group-hover:border-primary xl:group-hover:bg-primary duration-500"
          ></div>
          <div class="flex flex-col ml-0">
            <h2
              class="self-start text-xl font-black leading-[30px] dark:text-white"
            >
              Partners
            </h2>
            <div
              class="mt-10 grid grid-cols-2 gap-y-5 gap-x-3 place-items-center"
            >
              <div
                class="w-11/12 flex justify-center"
                v-for="(partner, index) in project.partners"
                :key="index"
              >
                <img
                  alt="partnerImage"
                  loading="lazy"
                  class="group-hover:grayscale-0 dark:brightness-50 dark:group-hover:brightness-100 dark:group-hover:invert-0 grayscale dark:invert duration-200"
                  :src="partner.src"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mr-12 mb-10 flex justify-end z-50">
      <button
        class="group flex items-center text-lg font-semibold leading-7 text-primary"
      >
        Project Details
        <icon
          name="ph:arrow-right-bold"
          class="ml-2 h-5 w-5 text-primary duration-300 group-hover:translate-x-2"
        />
      </button></div
  ></a>
</template>
