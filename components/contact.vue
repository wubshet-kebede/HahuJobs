<script setup>
import { useContact } from "~/composables/userContact";
import { LMarker, LPopup } from "#components";
import branch from "./branch.vue";
const { contacts } = useContact();
const { branchcontact } = useBranch();
</script>
<template>
  <section class="mt-10 flex flex-col" id="contact">
    <div class="w-full mb-10 md:mb-20 flex flex-col items-center">
      <h2
        class="mt-10 text-lg text-center font-medium leading-[18px] dark:text-white lg:mt-[90px] self-center"
      >
        Contact
      </h2>

      <h2
        class="mt-[34px] rounded-[36px] bg-primary_lite px-3 py-2 text-center text-base font-black leading-8 text-white xs:px-8 xs:text-lg lg:px-6 3xl:px-8 lg:py-2 lg:text-3xl 3xl:text-3xl self-center"
      >
        We would love to hear from you!
      </h2>
      <p
        class="mt-[34px] mx-w-[900px] text-center text-base font-light leading-[30px] dark:text-hahu-gray3 xs:text-lg"
      >
        Please fill out the form below to reach our communications department
        for any enquiries you may have, our doors are open for everyone
      </p>
    </div>
    <div class="flex flex-col 2xl:flex-row 2xl:space-x-[106px]">
      <div class="mb-4 flex-1">
        <div class="mt-10 grid grid-cols-1 2xl:grid-cols-2 gap-x-20 gap-y-20">
          <div class="col-span-2 xl:col-span-1 block">
            <div
              class="md:mt-6 flex flex-col flex-wrap mx-5 sm:mx-0 md:justify-start md:gap-x-12 gap-y-10 lg:gap-x-20 md:flex-row mb-10"
            >
              <ContactDetail v-for="contact in contacts" :contact="contact" />
            </div>
            <div class="flex h-96">
              <LMap
                class="z-0 w-10/12 h-96 shadow-full rounded-xl lg:rounded-xl"
                style="height: 350px"
                :zoom="30"
                :options="{ zoomControl: false }"
                :center="[8.98939370600676, 38.78601117754426]"
                :use-global-leaflet="false"
              >
                <LTileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <LLayerGroup>
                  <LMarker :lat-lng="[8.98939370600676, 38.78601117754426]">
                    <LIcon
                      icon-url="/images/newicon.ico"
                      :icon-size="[20, 20]"
                    />
                    <LPopup>
                      <div class="w-28 h-28">
                        <div
                          class="flex justify-center font-body font-medium text-sm text-primary"
                        >
                          HaHuJobs
                        </div>
                        <div class="flex flex-col justify-center mt-3">
                          <img src="/images/map.webp" class="w-full" />
                          <img src="/images/map2.webp" class="w-full mt-3" />
                        </div>
                        <div class="mt-5 text-primary">
                          <a
                            href="#"
                            class="hover:underline hover:italic font-body text-sm"
                            >www.HahuJobs.io</a
                          >
                        </div>
                      </div>
                    </LPopup>
                  </LMarker>
                </LLayerGroup>
                <LControlScale
                  position="topright"
                  :imperial="true"
                  :metric="false"
                />
                <LControlZoom position="bottomright" />
              </LMap>
            </div>
            <div
              class="mt-2 flex flex-row flex-wrap items-baseline whitespace-nowrap"
            >
              <div class="ml-[15px] flex flex-col">
                <div class="flex items-center gap-x-5">
                  <icon name="picon:office" class="text-2xl text-primary" />
                  <h2 class="text-xl font-bold leading-[38px] text-primary">
                    Branch
                  </h2>
                </div>
                <ul
                  class="mt-8 grid w-full grid-cols-1 items-center justify-items-end gap-x-4 gap-y-9 xs:gap-x-28 xs:grid-cols-2 md:grid-cols-3 lg:gap-x-16 3xl:gap-x-28"
                >
                  <branch v-for="branch in branchcontact" :branch="branch" />
                </ul>
              </div>
            </div>
          </div>
          <div class="col-span-2 xl:col-span-1">
            <Form />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
