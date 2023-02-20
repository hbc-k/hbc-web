<script setup lang="ts">
interface Props {
  to: string;
}
const Props = defineProps<Props>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="inline-block transform overflow-hidden rounded-md border border-red-700 px-4 py-2 font-bold text-red-700 transition duration-200 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:origin-left before:scale-x-0 before:bg-red-700 before:transition before:duration-200 before:content-[''] after:relative after:bottom-[1px] after:z-10 after:ml-2 after:inline-block after:h-2 after:w-2 after:rotate-45 after:border-t after:border-r after:border-red-700 after:transition after:duration-200 after:content-[''] hover:text-white before:hover:scale-x-100 after:hover:border-white after:hover:text-white"
  >
    <span class="relative z-10"><slot /></span>
  </NuxtLink>
</template>
