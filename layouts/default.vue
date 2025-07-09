<!-- layouts/default.vue -->
<template>
  <div
    class="min-h-screen min-w-[325px] bg-secondary-3 duration-500 ease-in dark:bg-dark_bg"
  >
    <AppHeader />

    <main class="flex-grow">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup></script>

<style></style>
