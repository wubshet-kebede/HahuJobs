<script setup>
const props = defineProps({
  service: {
    type: Object,
    default: {},
  },
  index:Number
});
</script>
<template>
  <div
  data-aos="fade-up"
        :data-aos-delay="index * 100"
        data-aos-duration="800"
    class="group relative flex max-w-[450px] flex-col items-center rounded-lg bg-white duration-1000 hover:shadow-xl dark:bg-hahu-gray1 4xl:max-w-[500px] "
  >
    <a
      :href="service.external_link"
      rel="noopener noreferrer"
      target="_blank"
      class="invisible absolute h-full w-full rounded-lg opacity-0 transition duration-300 ease-linear hover:shadow-xl group-hover:visible group-hover:opacity-100"
      >
      <div
        class="flex h-full w-full justify-center bg-hahu-green3 rounded-lg dark:bg-hahu-gray4"
      >
        <button
          class="flex items-center self-center rounded-md bg-primary px-5 py-3 text-base font-medium leading-6 text-white cursor-pointer"
        >
          <svg
            width="15"
            height="14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-[13px]"
            alt="readmore"
          >
            <path
              d="M8.5 0a1 1 0 0 0 0 2h2.586L4.793 8.293a1 1 0 0 0 1.414 1.414L12.5 3.414V6a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1h-5Z"
              fill="#ECEDEF"
            ></path>
            <path
              d="M2.5 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a1 1 0 1 0-2 0v3h-8V4h3a1 1 0 0 0 0-2h-3Z"
              fill="#ECEDEF"
            ></path>
          </svg>
          Read More
        </button>
      </div>
      </a
    ><img
      :width="service.width"
      :height="service.height"
      :alt="service.text"
      loading="lazy"
      class="mt-[15px] max-h-[198px] w-9/12 object-contain xs:w-auto md:w-9/12 xl:w-7/12 3xl:w-auto justify-baseline"
      :src="service.image"
    />
    <h1
      class="mt-[15px] text-xl text-hahu-gray1 font-black leading-6 dark:text-hahu-gray lg:text-2xl 3xl:text-3xl"
    >
      {{ service.title }}
    </h1>
    <p
      class="line-clamp-8 mt-8 px-6 text-justify text-sm text-hahu-gray1 leading-[20px] dark:text-hahu-gray3 xl:text-base 3xl:text-lg md:px-8 2xl:px-12 3xl:px-16 "
    >
      {{ service.description }}
    </p>
    <hr class="bg-primary mb-5 mt-7 w-10/12 rounded-full border-2 border-primary"></hr>
  </div>
</template>
