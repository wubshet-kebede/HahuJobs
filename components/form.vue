<script setup>
const props = defineProps({
  value: {
    type: Object,
    default: {},
  },
});
</script>
<template>
  <form
    class="flex pb-20 lg:pb-5 shadow-full w-full flex-col rounded-lg lg:rounded:xl bg-white pt-11 px-5 ease-in dark:bg-hahu-gray1 md:px-10 lg;px-20"
  >
    <div>
      <div
        class="mb-5 text-lg font-medium leading-6 text-gray-800 dark:text-white"
      >
        Name
      </div>
      <div class="relative rounded-md font-body shadow-sm dark:text-white">
        <input
          type="text"
          name="name"
          step="any"
          class="border-1 py-3 border-gray-300 px-3 hover:border-primary focus:border-primary focus:ring-primary dark:text-white text-HahuGray2 block w-full rounded-md font-body text-base text-secondary dark:bg-hahu-gray1 placeholder-secondary dark:placeholder-white focus:outline-none"
          placeholder="Your name..."
          aria-invalid="true"
          aria-describedby="email-error"
        />
      </div>
      <p
        class="col-span-5 mt-2 font-body text-sm text-red-600"
        id="email-error"
      ></p>
    </div>
    <div>
      <div
        class="mb-5 mt-5 text-lg font-medium leading-6 text-gray-800 dark:text-white"
      >
        Phone
      </div>
      <div class="relative rounded-md font-body shadow-sm dark:text-white">
        <input
          type="text"
          name="name"
          step="any"
          class="border-1 px-3 py-3 border-gray-300 hover:border-primary focus:border-primary focus:ring-primary dark:text-white text-HahuGray2 block w-full rounded-md font-body text-base text-secondary dark:bg-HahuGray1 placeholder-secondary dark:placeholder-white focus:outline-none"
          placeholder="+251..."
          aria-invalid="true"
          aria-describedby="email-error"
        />
      </div>
      <p
        class="col-span-5 mt-2 font-body text-sm text-red-600"
        id="email-error"
      ></p>
    </div>
    <div>
      <div
        class="mb-5 mt-5 text-lg font-medium leading-6 text-gray-800 dark:text-white"
      >
        Email
      </div>
      <div class="relative rounded-md font-body shadow-sm dark:text-white">
        <input
          type="text"
          name="name"
          step="any"
          class="border-1 px-3 py-3 border-gray-300 hover:border-primary focus:border-primary focus:ring-primary dark:text-white text-HahuGray2 block w-full rounded-md font-body text-base text-secondary dark:bg-HahuGray1 placeholder-secondary dark:placeholder-white focus:outline-none"
          placeholder="Your email..."
          aria-invalid="true"
          aria-describedby="email-error"
        />
      </div>
      <p
        class="col-span-5 mt-2 font-body text-sm text-red-600"
        id="email-error"
      ></p>
    </div>
    <div>
      <div
        class="mb-5 mt-5 text-lg font-medium leading-6 text-gray-800 dark:text-white"
      >
        Subject
      </div>
      <div class="relative rounded-md font-body shadow-sm dark:text-white">
        <input
          type="text"
          name="name"
          step="any"
          class="border-1 px-3 py-3 border-gray-300 hover:border-primary focus:border-primary focus:ring-primary dark:text-white text-HahuGray2 block w-full rounded-md font-body text-base text-secondary dark:bg-HahuGray1 placeholder-secondary dark:placeholder-white focus:outline-none"
          placeholder="Subject..."
          aria-invalid="true"
          aria-describedby="email-error"
        />
      </div>
      <p
        class="col-span-5 mt-2 font-body text-sm text-red-600"
        id="email-error"
      ></p>
    </div>
    <div>
      <label
        class="font-medium mt-5 text-gray-800 text-lg leading-6 dark:text-white duration-500 ease-in mb-5 block"
        ><span class="text-red-500"></span>Message</label
      >
      <div class="relative mt-1 rounded-md shadow-sm">
        <textarea
          type="text"
          name="message"
          rows="8"
          class="placeholder-HahuGray1 px-3 py-3 dark:placeholder-white hover:border-primary-2 border-1 border-gray-300 focus:border-primary focus:ring-primary hover:border-primary dark:text-white text-HahuGray1 block w-full rounded-md pr-10 text-base dark:bg-HahuGray1 focus:outline-none"
          placeholder="Your message here..."
          aria-invalid="true"
          aria-describedby="email-error"
        ></textarea>
      </div>
      <p class="mt-2 text-sm text-red-600" id="email-error">&nbsp;</p>
    </div>
    <div class="text-secondary-2 text-sm dark:text-white">
      This site is protected by
      <span class="font-bold dark:text-hahu-gray3 text-hahugray"
        >reCAPTCHA</span
      >
      and the Google
      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        class="text-primary"
        >Privacy Policy</a
      >
      and
      <a
        href="https://policies.google.com/terms"
        target="_blank"
        class="text-primary"
        >Terms of Service</a
      >
      apply.
      <button
        type="submit"
        class="mt-5 w-full rounded-md bg-primary py-3 text-xl font-medium leading-7 text-white cursor-pointer"
      >
        Send
      </button>
    </div>
  </form>
</template>
