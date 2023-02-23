<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

useSeoMeta({
  ogTitle: 'HBC Web - Blog',
  ogDescription: '放送部の活動の様子を紹介しています。',
});

interface BlogPost extends ParsedContent {
  author?: string;
  category?: string;
  tags?: string[];
  coverImage?: string;
  createDate?: string;
  updateDate?: string;
}
const { data: blogPosts } = await useAsyncData('posts', () =>
  queryContent<BlogPost>('blog', 'posts')
    .only(['_path', 'title', 'description', 'author', 'category', 'coverImage', 'createDate'])
    .sort({ createDate: -1 })
    .find()
);
</script>

<template>
  <Head>
    <Title>Blog</Title>
    <Meta name="description" content="放送部の活動の様子を紹介しています。" />
  </Head>
  <PageHeader to="/blog">
    Blog
    <template #detail>部員が活動の様子をお届け！</template>
  </PageHeader>
  <main>
    <div class="mx-auto max-w-7xl">
      <div class="my-8 px-4 sm:px-6 lg:px-8">
        <div class="mb-4 text-xl font-bold">すべての記事 ― {{ blogPosts?.length }} 件</div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <BlogCard v-for="article in blogPosts" :key="article.title" :doc="article" />
        </div>
      </div>
    </div>
  </main>
</template>
