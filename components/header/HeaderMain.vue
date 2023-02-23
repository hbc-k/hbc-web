<script setup lang="ts">
interface Props {
  scroll?: boolean;
}

const Props = defineProps<Props>();

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
  <div
    v-bind:class="{
      'text-white fill-white': !scroll,
      'text-gray-900 fill-gray-900': scroll,
    }"
    class="transition"
  >
    <div
      v-bind:class="{
        'opacity-100': scroll,
        'opacity-0': !scroll,
      }"
      class="absolute inset-0 -z-10 border-b bg-white bg-opacity-80 backdrop-blur-lg transition-opacity"
    ></div>
    <div class="mx-auto max-w-7xl opacity-100">
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
              <HeaderLink :to="link.to" :scroll="scroll">{{ link.name }}</HeaderLink>
            </li>
          </ul>
        </nav>
        <div class="md:hidden"><font-awesome-icon icon="fa-solid fa-bars" class="text-2xl" /></div>
      </div>
    </div>
  </div>
</template>
