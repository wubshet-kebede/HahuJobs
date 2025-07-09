<script setup>
import Hqoperation from "~/components/management/hqoperation.vue";
import Advisor2 from "~/components/meetTeam/advisor2.vue";
import Founder2 from "~/components/meetTeam/founder2.vue";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";

const { founders } = useFounder();
const { advisors } = useAdvisor();
const { managements } = useManagement();
const { hqs } = useHqoperation();
const isOpen = ref(false);
const selectedAdvisor = ref(null);
function openModal(advisor) {
  selectedAdvisor.value = advisor;
  isOpen.value = true;
}
function closeModal(advisor) {
  isOpen.value = false;
  selectedAdvisor.value = null;
}
</script>
<template>
  <section class="flex flex-col overflow-hidden mx-10" id="team">
    <a
      href="/"
      class="flex self-end text-white group cursor-pointer dark:border-bordercolor dark:hover:border-primary_lite hover:border-primary_lite border-2 rounded-lg px-3 py-1 dark:text-white bg-primary duration-300 mx-12"
    >
      <icon
        name="solar:arrow-left-linear"
        class="self-center w-5 text-white mr-3 group-hover:translate-x-2 duration-300 text-2xl"
      />
      Back
    </a>
    <div class="flex flex-col items-center">
      <h2
        class="mt-5 self-center text-lg font-medium leading-[18px] dark:text-white lg:mt-[90px]"
      >
        Meet the Team
      </h2>
      <h2
        class="mt-[34px] self-center rounded-[36px] bg-primary_lite px-3 py-2 text-center text-base font-black leading-5 text-white xs:px-8 xs:text-lg lg:px-6 3xl:px-8 lg:py-4 3xl:py-2 lg:text-3xl 3xl:text-3xl"
      >
        Here are the people behind the magic
      </h2>
    </div>
    <div class="flex justify-around mt-20">
      <h1 class="text-3xl text-primary font-bold px-3">Founders</h1>
    </div>
    <div
      class="mt-11 flex flex-wrap items-strech justify-center gap-x-2 lg:gap-x-6 gap-y-6 md:gap-x-4 lg:gap-y-6 4xl:gap-y-16"
    >
      <Founder2
        v-for="founder in founders"
        :key="founder.fullname"
        :founder="founder"
      />
    </div>
    <div>
      <div class="flex justify-around mt-20">
        <h1 class="text-3xl text-primary font-bold px-3 rounded-full">
          Technical Advisors
        </h1>
      </div>
    </div>
    <div
      class="mt-11 flex flex-wrap items-strech justify-center gap-x-2 lg:gap-x-6 gap-y-16 md:gap-x-4 lg:gap-y-6 4xl:gap-y-16"
    >
      <Advisor2
        v-for="advisor in advisors"
        :key="advisor.fullname"
        :advisor="advisor"
        @read-more="openModal"
      />
    </div>
    <Dialog
      v-if="selectedAdvisor"
      :open="isOpen"
      @close="closeModal"
      class="fixed inset-0 overflow-y-auto z-50"
    >
      <div class="flex items-center justify-center min-h-full text-center p-4">
        <DialogPanel
          class="w-full max-w-md rounded-[15px] bg-white dark:bg-light-dark p-6 text-white flex flex-col items-center shadow-xl"
        >
          <img
            :src="selectedAdvisor.images"
            alt="Advisor"
            class="w-32 h-32 rounded-full object-cover mt-2 mb-4"
          />
          <DialogTitle
            as="h2"
            class="text-2xl leading-[30px] font-black text-black dark:text-white"
          >
            {{ selectedAdvisor.name }}
          </DialogTitle>

          <h2
            class="leading[30px] mt-2 text-base font-medium text-primary md:text-lg"
          >
            {{ selectedAdvisor.title }}
          </h2>

          <p
            class="mt-6 mb-8 px-8 text-justify text-base font-medium leading-7 text-black md:text-lg xl:px-8 dark:text-hahu-gray"
          >
            {{ selectedAdvisor.description }}
          </p>
          <button
            @click="closeModal"
            class="ml-24 justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark cursor-pointer"
          >
            Got it, thanks!
          </button>
        </DialogPanel>
      </div>
    </Dialog>
    <div class="flex justify-around mt-20">
      <h1 class="text-3xl text-primary font-bold px-3 rounded-full">
        Management
      </h1>
    </div>

    <div
      class="mt-11 flex flex-wrap items-stretch justify-center gap-x-2 gap-y-6 md:gap-x-4 lg:gap-x-6 lg:gap-y-6 4xl:gap-x-16 4xl:gap-y-16"
    >
      <management v-for="management in managements" :management="management" />
    </div>
    <div class="flex justify-around mt-20">
      <h1 class="text-3xl text-primary font-bold px-3 rounded-full">
        HQ Opeations Team
      </h1>
    </div>
    <div
      class="mt-11 flex flex-wrap items-stretch justify-center gap-x-2 gap-y-6 md:gap-x-4 lg:gap-x-6 lg:gap-y-6 4xl:gap-x-16 4xl:gap-y-16"
    >
      <hqoperation v-for="hq in hqs" :hq="hq" />
    </div>
  </section>
</template>
