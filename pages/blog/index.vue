<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface BlogPost extends ParsedContent {
  author: string;
  category: string;
  tags: string[];
  coverImage: string;
  createDate: string;
  updateDate: string;
}
const { data: blogPosts } = await useAsyncData('posts', () => queryContent<BlogPost>('blog', 'posts').sort({ createDate: -1 }).find());
</script>

<template>
  <section class="pointer-events-none bg-[url('/assets/img/building.webp')] bg-cover shadow-md">
    <div class="bg-black bg-opacity-40 backdrop-blur">
      <div class="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <div class="text-center text-white md:flex">
          <h1 class="text-5xl font-bold leading-snug md:text-left md:text-6xl md:leading-snug">Blog</h1>
          <p class="mt-auto ml-auto pt-4 md:text-right md:text-base">部員が活動の様子をお届け！</p>
        </div>
      </div>
    </div>
  </section>
  <section class="mx-auto max-w-7xl px-4 py-10 md:px-8">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <BlogCard v-for="article in blogPosts" :article="article" />
    </div>
  </section>
</template>
