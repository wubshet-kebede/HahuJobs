<template>
  <section class="mx-2 md:mx-0">
    <div class="flex flex-col items-center">
      <h1
        class="lg:translate-y-20 mt-15 self-center text-lg font-medium leading-5 duration-1000 dark:text-white lg:mt-10"
      >
        About
      </h1>

      <h2
        class="lg:translate-y-20 mt-8 self-center rounded-[36px] duration-1000 bg-primary_lite px-4 py-2 text-center font-black leading-5 text-white xs:px-8 xs:text-lg lg:px-5 lg:py-4 lg:text-3xl 3xl:text-3xl"
      >
        What is HaHuJobs?
      </h2>
    </div>
    <div
      class="flex flex-col items-center space-x-20 sm:px-0 lg:mt-20 xl:flex-row overflow-hidden"
    >
      <div
        class="lg:translate-x-10 mt-10 flex overflow-hidden duration-1000 lg:w-6/12 2xl:w-6/12 xl:pr-28 3xl:pr-40 justify-start"
      >
        <img
          src="/images/Hahu_core_hhv2oi.webp"
          alt="HaHu Core Light"
          class="object-contain dark:hidden"
          width="668"
          height="668"
          loading="lazy"
        />
        <img
          src="/images/Hahu_core_dark_a6fsar.webp"
          alt="HaHu Core Dark"
          class="object-contain hidden dark:block"
          width="668"
          height="668"
          loading="lazy"
        />
      </div>
      <article class="xl:w-6/12 2xl:w-6/12">
        <p
          class="lg:translate-y-20 text-left md:text-justify text-base xl:text-base text-hahu-gray1 2xl:text-base 3xl:text-lg font-normal ease-in-out transition-transform duration-1000 leading-7 dark:text-white"
        >
          HaHuJobs a cloud services operating to capture structured data of the
          Ethiopian skilled and non-skilled labor market through digitally
          connecting thousands of job seekers in major Ethiopian cities as well
          as industrial parks. The platform in a collection of micro services
          grouped to compose web application modules that offer a set of
          functionalities. HaHuJobs is an electronic product sold as service to
          a category of clients as per their specific needs in the labor market
          of Ethiopia. It features various service categories which revolves
          around data driven job matching of the right candidate with the right
          job opening, student tracing, capacity building and assessing of
          Jobseekers. This platform has sub services tailored to the specific
          industries and stakeholders, but as a primary concept HaHuJobs has a
          strong biometric based jobseeker identification and an automated
          method of matching workers with appropriate vacancy through structured
          data formats.
        </p>

        <br /><br />

        <p
          class="lg:translate-y-20 text-left md:text-justify text-base text-hahu-gray1 xl:text-base 3xl:text-lg font-normal duration-1000 leading-7 dark:text-white"
        >
          The service is built as an ecosystem of digital services to offer a
          holistic approach to respond to various data and automation gaps with
          in the Ethiopian labor market. It features layers and network of
          deployments that provide services to various types of industry
          stakeholders like, the jobseekers, employers, the government and
          development partners.
        </p>

        <div class="lg:translate-y-20 mt-12 mb-14 flex duration-1000">
          <NuxtLink to="/aboutUs" class="group">
            <button
              class="flex items-center cursor-pointer self-end rounded-md bg-primary px-5 py-3 text-base font-medium leading-6 text-white mb-4"
            >
              More about us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                class="ml-3 inline-block h-5 w-5 text-white duration-300 group-hover:translate-x-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>
<script setup></script>
