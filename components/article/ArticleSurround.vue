<script setup lang="ts">
interface Props {
  path: string;
}

const Props = defineProps<Props>();

const [prev, next] = await queryContent('blog', 'posts').only(['_path', 'title']).sort({ createDate: 1 }).findSurround(Props.path);
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <NuxtLink
      v-if="next"
      :to="next._path"
      class="flex h-16 items-center rounded-md border bg-white px-4 py-2 text-sm font-bold text-gray-800 shadow transition duration-300 hover:bg-gray-200 hover:text-red-600"
    >
      <font-awesome-icon icon="fa-solid fa-chevron-left" class="mr-2" />
      <span>{{ next.title }}</span>
    </NuxtLink>
    <div v-else class="flex h-16 items-center rounded-md border bg-white px-4 py-2 text-sm font-bold text-gray-500 transition duration-300">
      <font-awesome-icon icon="fa-solid fa-chevron-left" class="mr-2" />
      <span>これより新しい記事はありません</span>
    </div>
    <NuxtLink
      v-if="prev"
      :to="prev._path"
      class="flex h-16 items-center justify-end rounded-md border bg-white px-4 py-2 text-sm font-bold text-gray-800 shadow transition duration-300 hover:bg-gray-200 hover:text-red-600"
    >
      <span>{{ prev.title }}</span>
      <font-awesome-icon icon="fa-solid fa-chevron-right" class="ml-2" />
    </NuxtLink>
    <div
      v-else
      class="flex h-16 items-center justify-end rounded-md border bg-white px-4 py-2 text-sm font-bold text-gray-500 transition duration-300"
    >
      <span>これより古い記事はありません</span>
      <font-awesome-icon icon="fa-solid fa-chevron-right" class="ml-2" />
    </div>
  </div>
</template>
