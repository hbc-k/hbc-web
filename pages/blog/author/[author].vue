<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

const route = useRoute();

const author = route.params.author.toString();

interface BlogPost extends ParsedContent {
  author?: string;
  category?: string;
  tags?: string[];
  coverImage?: string;
  createDate?: string;
  updateDate?: string;
}
const { data: blogPosts } = await useAsyncData(`${author}Posts`, () =>
  queryContent<BlogPost>('blog', 'posts')
    .only(['_path', 'title', 'description', 'author', 'category', 'coverImage', 'createDate'])
    .where({ author: author })
    .sort({ createDate: -1 })
    .find()
);

interface Author extends ParsedContent {
  userName?: string;
  displayName?: string;
  icon?: string;
  bio?: string;
}
const { data: authorData } = await useAsyncData(author, () => queryContent<Author>('blog', 'author').where({ userName: author }).findOne());

useSeoMeta({
  titleTemplate: '%s | HBC Web - Blog',
  title: () => {
    return `${authorData.value?.displayName} さんの記事`;
  },
  description: () => {
    return `${authorData.value?.displayName} さんの記事です。`;
  },
  ogTitle: () => {
    return `${authorData.value?.displayName} さんの記事 | HBC Web - Blog`;
  },
  ogDescription: () => {
    return `${authorData.value?.displayName} さんの記事です。`;
  },
});
</script>

<template>
  <PageHeader to="/blog">
    Blog
    <template #detail>部員が活動の様子をお届け！</template>
  </PageHeader>
  <main>
    <section class="bg-white shadow">
      <div class="mx-auto max-w-7xl">
        <div class="px-4 py-8 sm:px-6 lg:px-8">
          <div class="flex">
            <div class="flex aspect-square h-12 w-auto flex-shrink-0 items-center overflow-hidden rounded-full bg-gray-200 sm:h-16">
              <NuxtPicture
                v-if="authorData && authorData.icon"
                :src="`/img/blog/author/${authorData.icon}`"
                sizes="sm:144px lg:192px"
                quality="75"
                loading="lazy"
              />
            </div>
            <div class="ml-4">
              <div class="text-lg">
                <div v-if="authorData && authorData.displayName" class="mr-1 block font-bold">{{ authorData.displayName }}</div>
                <div class="block font-bold text-gray-500">@{{ author }}</div>
              </div>
              <p class="mt-2">{{ authorData?.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mx-auto max-w-7xl">
      <div class="my-8 px-4 sm:px-6 lg:px-8">
        <div class="mb-4 text-xl font-bold">投稿した記事 ― {{ blogPosts?.length }} 件</div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <BlogCard v-for="doc in blogPosts" :key="doc.title" :doc="doc" />
        </div>
      </div>
    </section>
  </main>
</template>
