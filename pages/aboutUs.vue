<script setup>
import Founder from "~/components/aboutUs/Founder.vue";
import Advisor from "@/components/aboutUs/Advisor.vue";
import about_desc from "@/components/aboutUs/about_desc.vue";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";
const isOpen = ref(false);
const selectedAdvisor = ref(null);

const { hahuinfo } = useAbout();
const { founders } = useFounder();
const { advisors } = useAdvisor();
function openModal(advisor) {
  selectedAdvisor.value = advisor;
  isOpen.value = true;
}
function closeModal() {
  isOpen.value = false;
  selectedAdvisor.value = null;
}
</script>
<template>
  <section
    class="mt-10 flex flex-col md:px-16 lg:px-16 px-1 3xl:px-[100px] lg:mx-10 xl:mx-20 2xl:mx-20 3xl:mx-20 mx-10"
  >
    <div class="relative mb-10 flex items-start justify-between font-bold">
      <nav class="flex">
        <ol
          class="flex rounded-md bg-white space-x-4 dark:bg-light-dark xs:px-6 shadow px-4"
        >
          <li class="flex">
            <div class="flex items-center px-1 py-3">
              <a href="/" class="text-gray-400 hover:text-gray-500">
                <icon name="ic:round-home" class="text-primary text-2xl" />
                <span class="sr-only">Home</span>
              </a>
            </div>
          </li>
          <li class="flex">
            <div class="flex items-center">
              <icon
                name="bytesize:chevron-right"
                class="h-full w-6 text-4xl flex-shrink-0 text-gray-200 dark:text-gray-400"
              />
              <a
                href="#undefined"
                class="ml-4 text-sm font-medium text-primary dark:text-white duration-300 disabled"
                >About Us</a
              >
            </div>
          </li>
        </ol>
      </nav>

      <div class="flex">
        <a href="/">
          <button
            class="group flex text-white bg-primary rounded-md items-center self-end justify-end cursor-pointer px-2 py-1 text-base font-medium leading-6 lg:px-5 lg:py-3"
          >
            <icon
              name="lineicons:arrow-left"
              class="text-white duration-300 group-hover:translate-x-1 w-5 h-5 inline-block mr-[9px] text-2xl font-bold"
            />
            Back
          </button>
        </a>
      </div>
    </div>
    <h2 class="mt-10 text-3xl font-black leading-6 text-primary md:mt-0 mx-10">
      About HaHu
    </h2>

    <about_desc v-for="item in hahuinfo" :item="item" />

    <h2
      class="mt-28 flex justify-center text-3xl font-black leading-6 text-primary"
    >
      Founders
    </h2>
    <div
      class="mt-32 flex flex-col items-center gap-y-20 xl:flex-row xl:justify-center xl:gap-x-[74px]"
    >
      <Founder v-for="founder in founders" :founder="founder" />
    </div>
    <h2
      class="mt-28 flex justify-center text-3xl font-black leading-6 text-primary"
    >
      Technical advisors
    </h2>
    <div
      class="mt-32 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-x-10 gap-y-20 justify-items-center place-content-center"
    >
      <Advisor
        v-for="advisor in advisors"
        :advisor="advisor"
        @read-more="openModal"
      />
    </div>
    <Dialog
      v-if="selectedAdvisor"
      :open="isOpen"
      @close="closeModal"
      class="fixed z-50 inset-0 overflow-y-auto"
    >
      <div class="flex items-center justify-center min-h-full p-4 text-center">
        <DialogPanel
          class="w-full max-w-md rounded-[15px] bg-primary_lite dark:bg-light-dark p-6 text-white flex flex-col items-center shadow-xl"
        >
          <img
            :src="selectedAdvisor.images"
            alt="Advisor"
            class="w-32 h-32 rounded-full object-cover mt-2 mb-4"
          />

          <DialogTitle
            as="h2"
            class="text-lg font-semibold leading-[30px] text-primary"
          >
            {{ selectedAdvisor.name }}
          </DialogTitle>

          <h2
            class="leading[30px] mt-2 text-base font-medium text-[#ECEDEF] md:text-lg"
          >
            {{ selectedAdvisor.title }}
          </h2>

          <p
            class="mt-6 mb-8 px-8 text-justify text-base font-medium leading-7 text-white md:text-lg xl:px-8"
          >
            {{ selectedAdvisor.description }}
          </p>

          <div class="flex gap-5 mb-5 items-center">
            <a
              v-for="link in selectedAdvisor.links"
              :key="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener"
            >
              <icon
                :name="link.iconname"
                class="text-2xl text-hahu-gray1 flex flex-row duration-300 dark:text-white hover:brightness-50 hover:invert"
              />
            </a>

            <button
              @click="closeModal"
              class="ml-24 justify-end rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
            >
              Got it, thanks!
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  </section>
</template>
