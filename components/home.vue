<template>
  <section
    class="mb-0 flex flex-col items-center mt-2 5xl:items-start 5xl:mt-60 overflow-hidden overflow-y-hidden lg:mb-0 lg:min-h-[83vh] xl:space-x-20 lg:flex-row"
    id="home"
  >
    <div class="mt-14 3xl:mt-20 4xl:mt-0 lg:flex-1">
      <div class="w-6/12 sm:w-4/12 2xl:w-full">
        <img
          width="273"
          height="32"
          class="object-contain dark:hidden"
          src="/home/Hahu_logo1_vkjhcr.png"
          alt="hahuLogo"
        /><img
          width="273"
          height="32"
          class="hidden object-contain dark:block"
          src="/home/Hahu_logo1_dark_chhb8s.png"
          alt="hahuLogo"
        />
      </div>
      <div class="w-6/12 sm:w-6/12 3xl:w-full">
        <img
          width="476"
          height="85"
          class="mt-10 object-contain dark:hidden"
          src="/home/Hahu_logo2_bzndts.png"
          alt="hahujobsLogo"
        /><img
          width="476"
          height="85"
          class="mt-10 hidden object-contain dark:block"
          src="/home/HahuLogoDark.CoW_4MI1.svg"
          alt="hahujobsLogo"
        />
      </div>
      <p
        class="mt-12 3xl:mt-20 w-full text-hahu-gray1 text-base 3xl:text-lg font-normal leading-8 dark:text-white"
      >
        Hey there, ሰላም ነው? Welcome to HaHuJobs the largest data-driven job
        matching and labor market information platform in Ethiopia. With various
        service deployments to address the Ethiopian labor market needs; we
        stand at the forefront of the local digital job matching industry.
      </p>
      <div class="mt-5 md:mt-14 3xl:20 flex">
        <NuxtLink to="/#services" class="group">
          <button
            class="flex items-center self-center rounded-md bg-primary py-3 px-5 text-white cursor-pointer"
          >
            Our Services
            <span class="pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-5 duration-200 group-hover:translate-x-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
        </NuxtLink>
      </div>
    </div>
    <div class="flex-1 hidden md:block 4xl:w-full">
      <img
        width="816"
        height="400"
        class="overflow-hidden object-contain md:mb-32 lg:mb-10 lg:flex-1 w-[816px] h-[400px]"
        src="/home/download.png"
        alt="hahuWelcomeSvg"
      />
    </div>
  </section>
</template>
