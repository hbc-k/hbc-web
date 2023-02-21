<script setup lang="ts">
const links: { name: string; to: string }[] = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Program', to: '/program' },
  { name: 'Info', to: '/info' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' },
];
</script>

<template>
  <div class="fill-white text-white">
    <div class="mx-auto max-w-7xl">
      <div class="flex items-center justify-between p-4 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="flex items-center">
          <TheLogo class="mr-2 h-7 w-auto shrink-0 fill-inherit" />
          <div class="text-[0.7rem] leading-tight sm:block">
            <p>県広放送部</p>
            <p>公式Webサイト「HBC Web」</p>
          </div>
        </NuxtLink>
        <nav class="hidden md:block">
          <ul>
            <li v-for="link in links" :key="link.name" class="ml-4 inline-block">
              <HeaderLink :to="link.to">{{ link.name }}</HeaderLink>
            </li>
          </ul>
        </nav>
        <div class="md:hidden"><font-awesome-icon icon="fa-solid fa-bars" class="text-2xl" /></div>
      </div>
    </div>
  </div>
</template>
