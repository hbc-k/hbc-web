<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface Props {
  author?: string;
  date?: string;
}

const Props = withDefaults(defineProps<Props>(), {
  author: 'undefined',
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
  <div class="flex items-center text-sm">
    <NuxtLink
      :to="`/blog/author/${author}`"
      class="flex aspect-square h-6 w-auto flex-shrink-0 items-center overflow-hidden rounded-full bg-gray-200"
    >
      <NuxtPicture
        v-if="authorData && authorData.icon"
        :src="`/img/blog/author/${authorData.icon}`"
        sizes="sm:144px lg:192px"
        quality="75"
        loading="lazy"
        :imgAttrs="{ class: 'hover:brightness-90' }"
      />
    </NuxtLink>
    <div class="ml-2 text-sm">
      <NuxtLink v-if="authorData && authorData.displayName" :to="`/blog/author/${author}`" class="mr-1 font-bold text-black hover:underline">{{
        authorData.displayName
      }}</NuxtLink>
      <NuxtLink :to="`/blog/author/${author}`" class="text-gray-500 hover:underline">@{{ author }}</NuxtLink>
    </div>
  </div>
</template>
