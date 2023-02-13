<script setup lang="ts">
interface Props {
  to: string;
}
const Props = defineProps<Props>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="relative inline-block before:absolute before:bottom-[-1px] before:left-[-1px] before:z-[100] before:h-[1px] before:w-[calc(100%_+_2px)] before:origin-right before:scale-x-0 before:bg-white before:transition before:duration-200 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
  >
    <slot />
  </NuxtLink>
</template>
