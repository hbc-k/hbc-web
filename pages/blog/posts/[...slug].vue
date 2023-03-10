<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
const route = useRoute();
const $img = useImage();

interface BlogPost extends ParsedContent {
  author?: string;
  category?: string;
  tags?: string[];
  coverImage?: string;
  createDate?: string;
  updateDate?: string;
}

const { data: doc } = await useAsyncData([...route.params.slug].join(), () => queryContent<BlogPost>().where({ _path: route.path }).findOne());

useSeoMeta({
  titleTemplate: '%s | HBC Web - Blog',
  title: () => {
    return `${doc.value?.title}`;
  },
  description: () => {
    return doc.value?.description;
  },
  ogTitle: () => {
    return `${doc.value?.title} | HBC Web - Blog`;
  },
  ogDescription: () => {
    return doc.value?.description;
  },
  ogImage: () => {
    if (doc.value?.coverImage) {
      return `https://hbc-web.vercel.app${$img(doc.value?.coverImage, {
        width: 1200,
        height: 630,
      })}`;
    } else {
      return 'https://hbc-web.vercel.app/img/ogp_default.png';
    }
  },
  ogType: 'article',
});
</script>

<template>
  <PageHeader to="/blog">
    Blog
    <template #detail>部員が活動の様子をお届け！</template>
  </PageHeader>
  <div v-if="doc">
    <div class="mx-auto max-w-3xl">
      <article class="my-8 rounded-md bg-white px-4 py-8 shadow sm:px-8">
        <div class="mb-6 flex aspect-[1200_/_630] h-auto w-full items-center overflow-hidden rounded-md bg-gray-200">
          <NuxtPicture v-if="doc.coverImage" :src="doc.coverImage" width="1200" height="630" quality="75" loading="lazy" />
          <img v-else src="/img/ogp_default.webp" />
        </div>
        <div class="mb-6 border-b border-b-gray-300 pb-6">
          <ArticleAuthorTop :author="doc.author" class="mb-4" />
          <div class="mb-3 items-center text-sm text-gray-500">
            <div class="flex-row-reverse sm:flex sm:justify-between">
              <div class="flex">
                <div>
                  <font-awesome-icon icon="fa-regular fa-clock" />
                  <span class="ml-1">{{ new Date(doc.createDate).toLocaleDateString('sv-SE') }}</span>
                </div>
                <div v-if="doc.updateDate" class="ml-2">
                  <font-awesome-icon icon="fa-solid fa-clock-rotate-left" />
                  <span class="ml-1">{{ new Date(doc.updateDate).toLocaleDateString('sv-SE') }}</span>
                </div>
              </div>
              <div class="mt-2 sm:mt-0">
                <font-awesome-icon icon="fa-regular fa-folder" />
                <NuxtLink :to="`/blog/category/${doc.category}`" class="ml-1 underline-offset-2 hover:underline">
                  {{ doc.category }}
                </NuxtLink>
              </div>
            </div>
          </div>
          <h1 class="text-2xl font-bold sm:text-3xl">{{ doc.title }}</h1>
          <p v-if="doc.description" class="mt-2 text-gray-500">{{ doc.description }}</p>
          <div v-if="doc.tags" class="mt-3 text-gray-500">
            <font-awesome-icon icon="fa-solid fa-tags" />
            <span class="ml-2">
              <NuxtLink
                v-for="tag in doc.tags"
                :key="tag"
                :to="`/blog/tag/${tag}`"
                class="mr-2 rounded bg-gray-200 px-1 py-0.5 underline-offset-2 hover:underline"
              >
                {{ tag }}
              </NuxtLink>
            </span>
          </div>
        </div>
        <main class="prose max-w-none">
          <ContentRenderer :value="doc">
            <ContentRendererMarkdown :value="doc" />
          </ContentRenderer>
        </main>
      </article>
    </div>
    <div class="mx-auto max-w-3xl">
      <ArticleAuthorCard :author="doc.author" class="my-8 rounded-md bg-white p-4 py-8 shadow sm:px-8" />
    </div>
    <div class="mx-4">
      <div class="mx-auto max-w-3xl">
        <ArticleSurround :path="$route.path" class="my-8" />
      </div>
    </div>
    <div class="mx-4">
      <div class="mx-auto max-w-3xl">
        <NuxtLink
          to="/blog"
          class="my-8 flex min-h-[4rem] items-center justify-center rounded-md border bg-white px-4 py-2 text-sm font-bold text-gray-800 shadow transition duration-300 hover:bg-gray-200 hover:text-red-600"
        >
          <span>記事一覧へ戻る</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
