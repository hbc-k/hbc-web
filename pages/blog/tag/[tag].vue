<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
const route = useRoute();

const tag = route.params.tag.toString();

useSeoMeta({
  titleTemplate: '%s | HBC Web - Blog',
  title: () => {
    return `タグに ${tag} を含む記事`;
  },
  description: () => {
    return `タグに ${tag} を含む記事です。`;
  },
  ogTitle: () => {
    return `タグに ${tag} を含む記事 | HBC Web - Blog`;
  },
  ogDescription: () => {
    return `タグに ${tag} を含む記事です。`;
  },
});

interface BlogPost extends ParsedContent {
  author?: string;
  category?: string;
  tags?: string[];
  coverImage?: string;
  createDate?: string;
  updateDate?: string;
}
const { data: blogPosts } = await useAsyncData(`${tag}Posts`, () =>
  queryContent<BlogPost>('blog', 'posts')
    .only(['_path', 'title', 'description', 'author', 'category', 'coverImage', 'createDate'])
    .where({ tags: { $contains: tag } })
    .sort({ createDate: -1 })
    .find()
);
</script>

<template>
  <PageHeader to="/blog">
    Blog
    <template #detail>部員が活動の様子をお届け！</template>
  </PageHeader>
  <main>
    <section class="mx-auto max-w-7xl">
      <div class="my-8 px-4 sm:px-6 lg:px-8">
        <div class="mb-4 text-xl font-bold">
          <font-awesome-icon icon="fa-solid fa-tag" class="mr-1" />{{ tag }} を含む記事 ― {{ blogPosts?.length }} 件
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <BlogCard v-for="doc in blogPosts" :key="doc.title" :doc="doc" />
        </div>
      </div>
    </section>
  </main>
</template>
