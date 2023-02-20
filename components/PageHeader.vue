<script setup lang="ts">
interface Props {
  to: string;
}
const Props = defineProps<Props>();
</script>

<template>
  <header class="pointer-events-none bg-[url('/assets/img/building.webp')] bg-cover shadow-md">
    <div class="pointer-events-auto bg-black bg-opacity-40 backdrop-blur">
      <div class="mx-auto max-w-7xl pt-[60px]">
        <div class="items-end justify-between py-6 text-center text-white sm:flex sm:px-6 lg:px-8">
          <NuxtLink v-if="to != $route.path" :to="to" class="text-4xl uppercase hover:underline sm:text-left sm:text-5xl"><slot /></NuxtLink>
          <div v-else class="text-4xl uppercase sm:text-left sm:text-5xl"><slot /></div>
          <p class="mt-3 sm:mt-0 sm:text-right"><slot name="detail" /></p>
        </div>
      </div>
    </div>
  </header>
</template>
