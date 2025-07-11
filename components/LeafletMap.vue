<script setup>
import {
  LMap,
  LTileLayer,
  LLayerGroup,
  LMarker,
  LIcon,
  LPopup,
  LControlZoom,
  LControlScale,
} from "#components";
</script>
<template>
  <div class="flex h-96">
    <LMap
      class="z-0 w-10/12 h-96 shadow-full rounded-xl lg:rounded-xl"
      style="height: 350px"
      :zoom="30"
      :options="{ zoomControl: false }"
      :center="[8.98939370600676, 38.78601117754426]"
      :use-global-leaflet="false"
    >
      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <LLayerGroup>
        <LMarker :lat-lng="[8.98939370600676, 38.78601117754426]">
          <LIcon icon-url="/images/newicon.ico" :icon-size="[20, 20]" />
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
      <LControlScale position="topright" :imperial="true" :metric="false" />
      <LControlZoom position="bottomright" />
    </LMap>
  </div>
</template>
