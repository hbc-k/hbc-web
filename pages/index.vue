<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface Info extends ParsedContent {
  category: string;
  url: string;
  newTab?: boolean;
  date: string;
  pin?: boolean;
}

const { data: pinnedInfos } = await useAsyncData('pinnedInfos', () => queryContent<Info>('info').where({ pin: true }).sort({ date: -1 }).find());

interface BlogPost extends ParsedContent {
  author: string;
  category: string;
  tags: string[];
  coverImage: string;
  createDate: string;
  updateDate: string;
}
const { data: blogPosts } = await useAsyncData('recentPosts', () =>
  queryContent<BlogPost>('blog', 'posts')
    .only(['_path', 'title', 'description', 'author', 'category', 'coverImage', 'createDate'])
    .sort({ createDate: -1 })
    .limit(3)
    .find()
);
</script>

<template>
  <header class="pointer-events-none bg-[url('/assets/img/building.webp')] bg-cover shadow-md">
    <div class="pointer-events-auto bg-black bg-opacity-40 backdrop-blur">
      <div class="mx-auto max-w-7xl">
        <div class="py-8 px-4 sm:px-6 lg:px-8">
          <div class="text-center text-white md:flex md:items-end md:justify-between">
            <h1 class="text-5xl leading-snug md:text-left md:text-6xl md:leading-snug">Hiroshima<br />Broadcasting<br />Club</h1>
            <p class="mt-4 md:mt-0 md:text-right">広島県立広島中学校・広島高等学校 放送部<br />公式Webサイト「HBC Web」へようこそ！</p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section>
    <div class="mx-auto max-w-7xl">
      <div class="px-4 py-10 sm:px-6 lg:px-8">
        <div class="mb-8 text-gray-800">
          <div class="items-center text-center">
            <span class="relative bottom-0.5 mr-4 text-2xl"><font-awesome-icon icon="fa-solid fa-bullhorn" /></span>
            <h1 class="inline text-3xl uppercase">Information</h1>
            <p class="mt-2">放送部からのお知らせ</p>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <InfoCard v-for="info in pinnedInfos" :key="info.title" :info="info" />
        </div>
        <div class="mt-10 text-center">
          <ButtonLinkArrowRight to="/info">過去のお知らせを見る</ButtonLinkArrowRight>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-red-50">
    <div class="mx-auto max-w-5xl">
      <div class="px-4 py-10 sm:px-6 lg:px-8">
        <div class="mb-10 text-gray-800">
          <div class="items-center text-center">
            <h1 class="inline text-3xl uppercase">About HBC</h1>
            <p class="mt-2">放送部について</p>
          </div>
        </div>
        <div class="text-center">
          <h2 class="text-3xl leading-relaxed text-red-700">
            <span class="inline-block">広島県立広島中学校・</span><span class="inline-block">広島高等学校 放送部は</span><br /><span
              class="inline-block"
              >県広の様々な校内行事を</span
            ><span class="inline-block">支えています</span>
          </h2>
          <p class="mt-10 text-lg">
            2004年（平成16年）の開校以来、校内の行事や式典における司会・撮影・音響、学校紹介ビデオをはじめとした各種ビデオの制作、お昼の休憩時間中の放送、各種大会への参加など、さまざまな活動を行っています。
          </p>
        </div>
        <div class="mt-10 text-center">
          <ButtonLinkArrowRight to="/about">もっと詳しく</ButtonLinkArrowRight>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="mx-auto max-w-7xl">
      <div class="px-4 py-10 sm:px-6 lg:px-8">
        <div class="mb-8 text-gray-800">
          <div class="items-center text-center">
            <span class="relative bottom-0.5 mr-4 text-2xl"><font-awesome-icon icon="fa-solid fa-pen-clip" /></span>
            <h1 class="inline text-3xl uppercase">Blog</h1>
            <p class="mt-2">不定期更新</p>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <BlogCard v-for="doc in blogPosts" :key="doc.title" :doc="doc" />
        </div>
        <div class="mt-8 text-center">
          <ButtonLinkArrowRight to="/blog">もっと見る</ButtonLinkArrowRight>
        </div>
      </div>
    </div>
  </section>
</template>
