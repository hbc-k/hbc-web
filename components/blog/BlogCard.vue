<script setup lang="ts">
interface Props {
  article: {
    _path?: string;
    title?: string;
    description?: string;
    author?: string;
    category?: string;
    coverImage?: string;
    createDate?: string;
  };
}
const Props = defineProps<Props>();
</script>

<template>
  <div
    class="group relative block h-full overflow-hidden rounded-lg border bg-white shadow transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:text-red-600 hover:shadow-md"
  >
    <NuxtLink :to="article._path" class="absolute inset-0" tabindex="-1" />
    <div class="pointer-events-none block aspect-[1200_/_630] h-auto w-full overflow-hidden object-cover">
      <img v-if="article.coverImage" :src="`/img/blog/posts/${article.coverImage}`" alt="" class="transition duration-500 group-hover:scale-[103%]" />
    </div>
    <div class="p-5">
      <div class="mb-3">
        <BlogCardAuthor :author="article.author" :date="article.createDate" />
      </div>
      <div class="mb-1 text-sm text-gray-500 transition duration-300 group-hover:text-red-400">
        <font-awesome-icon icon="fa-regular fa-folder" />
        <NuxtLink :to="`/blog/category/${article.category}`" class="relative z-10 ml-1 hover:underline">
          {{ article.category }}
        </NuxtLink>
      </div>
      <div>
        <NuxtLink :to="article._path" class="relative z-10 text-lg font-bold hover:underline">
          {{ article.title }}
        </NuxtLink>
        <p class="mt-1 text-sm text-gray-500 transition duration-300 group-hover:text-red-400">
          {{ article.description }}
        </p>
      </div>
    </div>
  </div>
</template>
