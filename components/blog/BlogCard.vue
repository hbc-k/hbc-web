<script setup lang="ts">
interface Props {
  doc: {
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
  <article
    class="group relative block h-full overflow-hidden rounded-lg border bg-white shadow transition duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:text-red-600 hover:shadow-md"
  >
    <NuxtLink :to="doc._path" class="absolute inset-0" tabindex="-1" />
    <div class="pointer-events-none aspect-[1200_/_630] h-auto w-full overflow-hidden bg-gray-200 object-cover">
      <NuxtPicture
        v-if="doc.coverImage"
        :src="doc.coverImage"
        loading="lazy"
        :imgAttrs="{ class: 'transition duration-500 group-hover:scale-[103%]' }"
      />
    </div>
    <div class="p-5">
      <div class="mb-3">
        <BlogCardAuthor :author="doc.author" :date="doc.createDate" />
      </div>
      <div class="mb-1 text-sm text-gray-500 transition duration-300 group-hover:text-red-400">
        <font-awesome-icon icon="fa-regular fa-folder" />
        <NuxtLink :to="`/blog/category/${doc.category}`" class="relative z-10 ml-1 hover:underline">
          {{ doc.category }}
        </NuxtLink>
      </div>
      <div>
        <NuxtLink :to="doc._path" class="relative z-10 text-lg font-bold hover:underline">
          {{ doc.title }}
        </NuxtLink>
        <p class="mt-1 text-sm text-gray-500 transition duration-300 group-hover:text-red-400">
          {{ doc.description }}
        </p>
      </div>
    </div>
  </article>
</template>
