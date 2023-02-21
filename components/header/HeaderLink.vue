<script setup lang="ts">
interface Props {
  to: string;
  scroll?: boolean;
}
const Props = defineProps<Props>();
</script>

<template>
  <NuxtLink
    :to="to"
    v-bind:class="{
      'before:origin-left before:scale-x-100': !(($route.path !== '/' && to === '/') || !$route.path.startsWith(to)),
      'before:origin-right before:scale-x-0 before:hover:origin-left before:hover:scale-x-100':
        ($route.path !== '/' && to === '/') || !$route.path.startsWith(to),
      'pointer-events-none': $route.path === to,
      'before:bg-white': !scroll,
      'before:bg-black': scroll,
    }"
    class="relative inline-block uppercase before:absolute before:bottom-[-1px] before:left-[-1px] before:z-[100] before:h-[1px] before:w-[calc(100%_+_2px)] before:transition before:duration-200 before:content-['']"
  >
    <slot />
  </NuxtLink>
</template>
