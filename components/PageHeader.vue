<script setup lang="ts">
interface Props {
  to: string;
}
const Props = defineProps<Props>();

const onScroll = inject<{ (value: boolean): void }>('onScroll');
const firstContent = ref<HTMLElement>();

onMounted(() => {
  if (!firstContent.value) return;
  if (!onScroll) return;
  const handler = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      onScroll(!entry.isIntersecting && window.scrollY > 0);
    });
  };
  const observer = new IntersectionObserver(handler, { rootMargin: '-60px 0px 0px 0px' });
  observer.observe(firstContent.value);
});
</script>

<template>
  <header ref="firstContent" class="pointer-events-none bg-[url('/assets/img/building.webp')] bg-cover shadow-md">
    <div class="pointer-events-auto bg-black bg-opacity-40 backdrop-blur">
      <div class="mx-auto max-w-7xl pt-[60px]">
        <div class="items-end justify-between py-6 text-center text-white sm:flex sm:px-6 lg:px-8">
          <NuxtLink
            v-bind:class="{
              'hover:underline': to != $route.path,
              'pointer-events-none': to == $route.path,
            }"
            :to="to"
            class="text-4xl uppercase sm:text-left sm:text-5xl"
          >
            <slot />
          </NuxtLink>
          <p class="mt-3 sm:mt-0 sm:text-right"><slot name="detail" /></p>
        </div>
      </div>
    </div>
  </header>
</template>
