<template>
  <section
    data-aos="fade-up"
    data-aos-delay="200"
    class="flex flex-col w-full mt-20 justify-center"
    id="partners"
  >
    <h1
      class="mt-10 self-center text-lg font-medium leading-[18px] dark:text-white lg:mt-[90px]"
    >
      Partners
    </h1>
    <h1
      class="my-8 self-center rounded-[36px] duration-1000 bg-primary_lite px-3 py-2 text-center text-base md:px-4 md:py-2 md:text-xl font-black leading-5 text-white xs:px-8 xs:text-lg lg:px-6 lg:py-4 lg:text-3xl 3xl:text-3xl"
    >
      Partners & Clients
    </h1>

    <div
      class="mt-20 pb-5 flex lg:gap-x-20 gap-x-10 lg:gap-y-14 gap-y-5 flex-wrap items-center justify-center w-full px-6"
    >
      <div
        v-for="(value, key, index) in partners"
        :key="key"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
        data-aos-duration="800"
        class="lg:w-auto lg:h-full md:h-32 md:w-32 h-20 w-20"
      >
        <img
          :src="value"
          class="object-contain hover:grayscale-0 dark:hover:invert-0 grayscale dark:invert cursor-pointer duration-200"
          alt="partner logo"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
const partners = {
  image1: "/images/MLS_Logo.png",
  image2: "/images/giz.png",
  image3: "/images/mc-logo.png",
  image4: "/images/icas.png",
  image5: "/images/world_bank.png",
  image6: "/images/abc.png",
  image7: "/images/uk_aid.png",
  image8: "/images/OXFORD_COLOR.png",
  image9: "/images/EIC_1.png",
  image10: "/images/Savethechildren.png",
  image11: "/images/DAI.png",
  image12: "/images/SNV.png",
  image13: "/images/FC_logo.png",
  image14: "/images/USAID.png",
  image15: "/images/DFID.png",
  image16: "/images/BMZ.png",
  image17: "/images/Sida_color.png",
};
</script>
