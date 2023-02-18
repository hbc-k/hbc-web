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
  <NuxtLink
    :to="article._path"
    class="group h-full overflow-hidden rounded-lg border bg-white shadow transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:text-red-600 hover:shadow-md"
  >
    <div class="aspect-[1200_/_630] h-auto w-full overflow-hidden object-cover">
      <img v-if="article.coverImage" :src="`/img/blog/posts/${article.coverImage}`" alt="" class="transition duration-500 group-hover:scale-[103%]" />
    </div>
    <div class="p-5">
      <div class="mb-3">
        <BlogCardAuthor :author="article.author" :date="article.createDate" />
      </div>
      <div class="mb-1 text-sm text-gray-500 transition duration-300 group-hover:text-red-400">
        <font-awesome-icon icon="fa-regular fa-folder" />
        <span class="ml-1">
          {{ article.category }}
        </span>
      </div>
      <div>
        <h2 class="text-xl font-bold">
          {{ article.title }}
        </h2>
        <p class="mt-1 text-gray-500 transition duration-300 group-hover:text-red-400">
          {{ article.description }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
