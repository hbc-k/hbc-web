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
  <aside>
    <h1 class="mb-4 font-bold">この記事を書いた人</h1>
    <div class="flex">
      <NuxtLink
        :to="`/blog/author/${author}`"
        class="flex aspect-square h-12 w-auto flex-shrink-0 items-center overflow-hidden rounded-full bg-gray-200 sm:h-16"
      >
        <NuxtPicture
          v-if="authorData && authorData.icon"
          :src="`/img/blog/author/${authorData.icon}`"
          sizes="sm:144px lg:192px"
          loading="lazy"
          :imgAttrs="{ class: 'hover:brightness-90' }"
        />
      </NuxtLink>
      <div class="ml-4">
        <div class="text-lg">
          <NuxtLink
            v-if="authorData && authorData.displayName"
            :to="`/blog/author/${author}`"
            class="mr-1 block font-bold text-black hover:underline"
            >{{ authorData.displayName }}</NuxtLink
          >
          <NuxtLink :to="`/blog/author/${author}`" class="block font-bold text-gray-500 hover:underline">@{{ author }}</NuxtLink>
        </div>
        <p class="mt-2">{{ authorData?.bio }}</p>
      </div>
    </div>
  </aside>
</template>
