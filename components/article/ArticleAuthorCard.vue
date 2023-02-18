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
  <aside class="mx-auto my-8 px-4 py-8 sm:px-8">
    <div>
      <h1 class="mb-4 font-bold">この記事を書いた人</h1>
      <div class="flex">
        <NuxtLink
          :to="`/blog/author/${author}`"
          class="aspect-square h-14 w-auto flex-shrink-0 overflow-hidden rounded-full bg-gray-200 object-cover sm:h-16"
        >
          <img v-if="authorData && authorData.icon" :src="`/img/blog/author/${authorData.icon}`" alt="" class="hover:brightness-90" />
        </NuxtLink>
        <div class="ml-4">
          <div class="text-lg">
            <div>
              <NuxtLink
                v-if="authorData && authorData.displayName"
                :to="`/blog/author/${author}`"
                class="mr-1 font-bold text-black hover:underline"
                >{{ authorData.displayName }}</NuxtLink
              >
            </div>
            <div>
              <NuxtLink :to="`/blog/author/${author}`" class="font-bold text-gray-500 hover:underline">@{{ author }}</NuxtLink>
            </div>
          </div>
          <p class="mt-2">{{ authorData?.bio }}</p>
        </div>
      </div>
    </div>
  </aside>
</template>
