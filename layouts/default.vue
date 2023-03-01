<script setup lang="ts">
const links: { name: string; to: string }[] = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Program', to: '/program' },
  { name: 'Info', to: '/info' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' },
];

const scroll = ref(false);
provide('onScroll', (value: boolean) => {
  scroll.value = value;
});

const showMenu = ref(false);
provide('showMenu', () => {
  showMenu.value = !showMenu.value;
});
</script>

<template>
  <div class="flex min-h-screen flex-col overflow-hidden text-gray-900">
    <header class="fixed top-0 z-40 w-full">
      <HeaderMain :links="links" :scroll="scroll || showMenu" />
    </header>
    <div
      :class="{
        'opacity-100 ': showMenu,
        'invisible opacity-0': !showMenu,
      }"
      class="fixed top-[60px] z-30 h-[calc(100vh-60px)] w-full bg-white bg-opacity-80 backdrop-blur-lg transition-[opacity_visibility]"
    >
      <nav class="px-4 py-10 sm:px-6 lg:px-8">
        <ul class="">
          <li v-for="link in links" :key="link.name" class="mb-4 border-b border-black border-opacity-20 pb-4">
            <NuxtLink :to="link.to" class="block text-2xl uppercase" @click="showMenu = false">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex-grow bg-gray-50">
      <slot />
    </div>
    <footer>
      <FooterMain />
    </footer>
  </div>
</template>

<style>
html {
  overflow-y: scroll;
}
</style>
