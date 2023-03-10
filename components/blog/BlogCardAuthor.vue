<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface Props {
  author?: string;
  date?: string;
}

const Props = withDefaults(defineProps<Props>(), {
  author: 'undefined',
  date: 'undefined',
});

interface Author extends ParsedContent {
  userName?: string;
  displayName?: string;
  icon?: string;
  bio?: string;
}
const { data: authorData } = await useAsyncData(Props.author, () =>
  queryContent<Author>('blog', 'author').where({ userName: Props.author }).findOne()
);
</script>

<template>
  <div class="flex items-center">
    <NuxtLink
      :to="`/blog/author/${author}`"
      class="relative z-10 flex aspect-square h-9 w-auto flex-shrink-0 items-center overflow-hidden rounded-full bg-gray-200"
    >
      <NuxtPicture
        v-if="authorData && authorData.icon"
        :src="`/img/blog/author/${authorData.icon}`"
        width="108px"
        height="108px"
        quality="75"
        loading="lazy"
        :imgAttrs="{ class: 'hover:brightness-90' }"
      />
    </NuxtLink>
    <div class="ml-2 overflow-hidden text-sm">
      <div class="truncate">
        <NuxtLink
          v-if="authorData && authorData.displayName"
          :to="`/blog/author/${author}`"
          class="relative z-10 mr-1 font-bold text-gray-900 transition duration-300 hover:underline group-hover:text-red-600"
          >{{ authorData.displayName }}</NuxtLink
        >
        <NuxtLink :to="`/blog/author/${author}`" class="relative z-10 text-gray-500 transition duration-300 hover:underline group-hover:text-red-400"
          >@{{ author }}</NuxtLink
        >
      </div>
      <div class="text-gray-500 transition duration-300 group-hover:text-red-400">
        <font-awesome-icon icon="fa-regular fa-clock" />
        <span class="ml-1">
          {{ new Date(date).toLocaleDateString('sv-SE') }}
        </span>
      </div>
    </div>
  </div>
</template>
