<template>
  <div class="bg-white dark:bg-dark_bg duration-500 ease-in">
    <div class="max-w-[1920px] centerx">
      <div
        class="mt-10 pb-10 lg:pb-0 flex flex-col flex-wrap items-center justify-between space-y-10 bg-white px-8 duration-500 ease-in dark:bg-dark_bg md:px-[50px] lg:mb-0 lg:flex-row xl:px-[100px]"
      >
        <div class="flex flex-col">
          <h1 class="mt-[27px] dark:text-white">Powered by</h1>
          <img
            width="162"
            height="29"
            src="/images/hahu-logo-dark.svg"
            class="object-contain dark:hidden mt-[13px]"
            alt="HahuJobs Light Logo"
          />

          <img
            width="162"
            height="29"
            src="/images/Hahu_logo1_dark.DTjyvXut.svg"
            class="hidden object-contain dark:block mt-[13px]"
            alt="HahuJobs Dark Logo"
          />
          <img
            width="162"
            height="24"
            class="object-contain dark:hidden mt-[9px] mb[41px]"
            src="/images/Hahu_footer_logo2_q0irql.webp"
            alt="hahuLogo"
          /><img
            width="162"
            height="24"
            class="hidden object-contain dark:block mt-[9px] mb[41px]"
            src="/images/Hahu_footer_logo2_dark_ibrj3q.webp"
            alt="hahuLogo"
          />
        </div>

        <div
          class="flex items-center flex-col lg:mr-20 space-y-10 lg:flex-row lg:space-x-16 lg:space-y-0 xl:space-x-[85px]"
        >
          <NuxtLink
            v-for="menu in menus"
            :key="menu.to"
            :to="menu.to"
            class="transform-gpu text-xl font-medium leading-[30px] text-gray-500 duration-200 hover:rotate-12 hover:text-black dark:text-white"
            >{{ menu.title }}</NuxtLink
          >
        </div>
      </div>

      <hr class="border-1 w-full border-gray-100" />

      <div
        class="flex pb-5 py-4 flex-col items-center justify-end space-y-10 bg-white px-8 duration-500 ease-in dark:bg-dark_bg md:px-[50px] lg:mb-0 lg:flex-row lg:justify-between lg:space-y-0 xl:px-[100px]"
      >
        <h1 class="text-base font-medium leading-6 text-gray-400">
          © 2025 HaHuJobs. All rights reserved.
        </h1>

        <div class="md:ml-10 flex space-x-7 lg:mr-20">
          <a
            href="https://www.facebook.com/Hahujobs"
            target="_blank"
            class="text-transparent"
          >
            <svg
              width="10"
              height="18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="facebookIcon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.635 17.728V9.767H9.36l.408-3.104H6.635V4.682c0-.898.253-1.51 1.568-1.51l1.674-.001V.395a23.14 23.14 0 0 0-2.44-.122c-2.415 0-4.069 1.447-4.069 4.102v2.288H.637v3.104h2.731v7.961h3.267Z"
                fill="#BBC3CF"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/hahujobs"
            target="_blank"
            class="text-transparent"
          >
            <svg
              width="19"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="TwitterIcon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.818 2.146a7.598 7.598 0 0 1-2.185.599A3.82 3.82 0 0 0 18.306.64a7.669 7.669 0 0 1-2.418.924 3.805 3.805 0 0 0-6.483 3.469 10.8 10.8 0 0 1-7.84-3.975A3.776 3.776 0 0 0 1.05 2.97c0 1.32.672 2.484 1.692 3.166a3.805 3.805 0 0 1-1.723-.478v.048a3.808 3.808 0 0 0 3.051 3.73 3.853 3.853 0 0 1-1.002.134c-.246 0-.484-.025-.717-.071a3.806 3.806 0 0 0 3.554 2.642 7.633 7.633 0 0 1-4.725 1.626c-.307 0-.61-.019-.908-.052a10.753 10.753 0 0 0 5.832 1.712c6.998 0 10.824-5.797 10.824-10.824l-.013-.493a7.597 7.597 0 0 0 1.903-1.965Z"
                fill="#BBC3CF"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/hahujobs/"
            target="_blank"
            class="text-transparent"
          >
            <svg
              width="18"
              height="18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="LinkedInIcon"
            >
              <path
                d="M16.2 0H1.8C.81 0 0 .81 0 1.8v14.4c0 .99.81 1.8 1.8 1.8h14.4c.99 0 1.8-.81 1.8-1.8V1.8c0-.99-.81-1.8-1.8-1.8ZM5.4 15.3H2.7V7.2h2.7v8.1ZM4.05 5.67c-.9 0-1.62-.72-1.62-1.62 0-.9.72-1.62 1.62-1.62.9 0 1.62.72 1.62 1.62 0 .9-.72 1.62-1.62 1.62ZM15.3 15.3h-2.7v-4.77c0-.72-.63-1.35-1.35-1.35-.72 0-1.35.63-1.35 1.35v4.77H7.2V7.2h2.7v1.08c.45-.72 1.44-1.26 2.25-1.26 1.71 0 3.15 1.44 3.15 3.15v5.13Z"
                fill="#BBC3CF"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const menus = [
  {
    title: "Services",
    to: "/#services",
  },
  {
    title: "About us",
    to: "/#about",
  },
  {
    title: "Contact us",
    to: "/#contact",
  },
  {
    title: "Privacy",
    to: "/privacy",
  },
  {
    title: "Terms of Use",
    to: "/terms-of-use.html",
  },
];
</script>
