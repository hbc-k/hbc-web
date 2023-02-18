<script setup lang="ts">
interface Props {
  to: string;
}
const Props = defineProps<Props>();
</script>

<template>
  <header class="pointer-events-none bg-[url('/assets/img/building.webp')] bg-cover shadow-md">
    <div class="pointer-events-auto bg-black bg-opacity-40 backdrop-blur">
      <div class="mx-auto max-w-7xl">
        <div class="flex items-end justify-between p-4 text-white sm:px-6 lg:px-8">
          <NuxtLink v-if="to != $route.path" :to="to" class="text-5xl uppercase hover:underline"><slot /></NuxtLink>
          <div v-else class="text-5xl uppercase"><slot /></div>
          <p class="text-right"><slot name="detail" /></p>
        </div>
      </div>
    </div>
  </header>
</template>
