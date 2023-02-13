<script setup lang="ts">
const links: { name: string; to: string }[] = [
  { name: 'ホーム', to: '/' },
  { name: '放送部について', to: '/about' },
  { name: 'お問い合わせ', to: '/contact' },
];
</script>

<template>
  <div class="bg-red-700 bg-opacity-95 text-white shadow-md backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center py-4 px-6">
      <NuxtLink to="/" class="flex items-center">
        <TheLogo class="mr-2 h-8 w-auto shrink-0 fill-white" />
        <div class="hidden text-xs sm:block">
          <p>県広放送部</p>
          <p>公式Webサイト「HBC Web」</p>
        </div>
      </NuxtLink>
      <div class="ml-auto hidden sm:block">
        <ul>
          <li v-for="link in links" :key="link.name" class="mr-4 inline-block">
            <HeaderLink to="/">{{ link.name }}</HeaderLink>
          </li>
        </ul>
      </div>
      <div class="ml-auto block sm:hidden"><font-awesome-icon icon="fa-solid fa-bars" class="text-2xl" /></div>
    </div>
  </div>
</template>
