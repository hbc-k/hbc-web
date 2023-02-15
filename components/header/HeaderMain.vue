<script setup lang="ts">
const links: { name: string; to: string }[] = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' },
];
</script>

<template>
  <div class="bg-red-700 bg-opacity-95 text-white shadow-md backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6">
      <NuxtLink to="/" class="flex items-center">
        <TheLogo class="mr-2 h-7 w-auto shrink-0 fill-white" />
        <div class="hidden text-[0.7rem] leading-tight sm:block">
          <p>県広放送部</p>
          <p>公式Webサイト「HBC Web」</p>
        </div>
      </NuxtLink>
      <div class="ml-auto hidden sm:block">
        <ul>
          <li v-for="link in links" :key="link.name" class="ml-4 inline-block">
            <HeaderLink to="/">{{ link.name }}</HeaderLink>
          </li>
        </ul>
      </div>
      <div class="ml-auto block sm:hidden"><font-awesome-icon icon="fa-solid fa-bars" class="text-2xl" /></div>
    </div>
  </div>
</template>
