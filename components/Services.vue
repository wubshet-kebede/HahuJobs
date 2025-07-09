<script setup>
import Services_card from "./Services_card.vue";

const { services } = useServices();
</script>
<template>
  <section class="flex min-h-full flex-col mx-5 md:mx-0">
    <div
      data-aos="fade-up"
      :data-aos-delay="index * 100"
      data-aos-duration="800"
      class="flex flex-col items-center"
    >
      <h1
        class="duration-100 mt-10 self-center text-lg font-medium leading-[18px] dark:text-white lg:mt-24"
      >
        Services
      </h1>
      <h2
        class="duration-1000 mt-[34px] self-center rounded-[48px] bg-primary_lite px-4 py-2 lg:py-3 text-center font-black leading-5 text-white xs:px-8 xs:text-lg lg:px-6 3xl:px-8 lg:text-3xl 3xl:text-3xl"
      >
        Standardized services with Ethiopian hospitality!
      </h2>
      <p
        class="mt-[34px] max-w-[900px] text-center text-base font-light leading-[30px] dark:text-hahu-gray xs:text-lg duration-1000"
      >
        We provide a category of services to offer a holistic solution to the
        multi-faceted needs of the Ethiopian labor market.
      </p>
    </div>

    <div
      class="mt-[80px] grid grid-cols-1 justify-items-center gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-12 xl:grid-cols-3 xl:gap-x-12 xl:gap-y-12"
    >
      <Services_card
        v-for="(service, index) in services"
        :service="service"
        :index="index"
      />
    </div>
  </section>
</template>
