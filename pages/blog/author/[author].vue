<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
const route = useRoute();

interface BlogPost extends ParsedContent {
  author: string;
  category: string;
  tags: string[];
  coverImage: string;
  createDate: string;
  updateDate: string;
}
const { data: blogPosts } = await useAsyncData(`${route.params.author.toString()}Posts`, () =>
  queryContent<BlogPost>('blog', 'posts').where({ author: route.params.author.toString() }).sort({ createDate: -1 }).find()
);

interface Author extends ParsedContent {
  userName?: string;
  displayName?: string;
  icon?: string;
  bio?: string;
}
const { data: authorData } = await useAsyncData(route.params.author.toString(), () =>
  queryContent<Author>('blog', 'author').where({ userName: route.params.author.toString() }).findOne()
);
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
    <div class="mx-auto mb-8 rounded-md bg-white px-4 py-8 shadow sm:px-8">
      <div class="flex">
        <div class="aspect-square h-14 w-auto flex-shrink-0 overflow-hidden rounded-full bg-gray-200 object-cover sm:h-16">
          <img v-if="authorData && authorData.icon" :src="`/img/blog/author/${authorData.icon}`" alt="" />
        </div>
        <div class="ml-4">
          <div class="text-lg">
            <div>
              <div v-if="authorData && authorData.displayName" class="mr-1 font-bold text-black">{{ authorData.displayName }}</div>
            </div>
            <div>
              <div class="font-bold text-gray-500">@{{ route.params.author.toString() }}</div>
            </div>
          </div>
          <p class="mt-2">{{ authorData?.bio }}</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <BlogCard v-for="article in blogPosts" :article="article" />
    </div>
  </section>
</template>
