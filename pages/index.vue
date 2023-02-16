<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface Info extends ParsedContent {
  category: string;
  url: string;
  newTab?: boolean;
  date: string;
  pin?: boolean;
}
const { data: pinnedInfos } = await useAsyncData('info', () => queryContent<Info>('info').where({ pin: true }).sort({ date: -1 }).find());

interface BlogPost extends ParsedContent {
  author: string;
  category: string;
  tags: string[];
  coverImage: string;
  createDate: string;
  updateDate: string;
}
const { data: blogPosts } = await useAsyncData('articles', () => queryContent<BlogPost>('blog', 'posts').sort({ createDate: -1 }).limit(3).find());
</script>

<template>
  <section class="pointer-events-none bg-[url('/assets/img/building.webp')] bg-cover shadow-md">
    <div class="bg-black bg-opacity-40 backdrop-blur">
      <div class="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <div class="text-center text-white md:flex">
          <h1 class="text-5xl font-bold leading-snug md:text-left md:text-6xl md:leading-snug">Hiroshima<br />Broadcasting<br />Club</h1>
          <p class="mt-auto ml-auto pt-4 md:text-right md:text-base">
            広島県立広島中学校・広島高等学校 放送部<br />公式Webサイト「HBC Web」へようこそ！
          </p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="mx-auto max-w-7xl px-4 pt-10 pb-14 sm:px-8">
      <div class="mb-8 text-gray-800">
        <div class="items-center text-center">
          <span class="relative bottom-0.5 mr-4 text-2xl"><font-awesome-icon icon="fa-solid fa-bullhorn" /></span>
          <h1 class="inline text-3xl uppercase">Information</h1>
          <p class="mt-2">放送部からのお知らせ</p>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <InfoCard
          v-for="info in pinnedInfos"
          :title="info.title ? info.title : 'undefinded'"
          :description="info.description"
          :category="info.category"
          :url="info.url"
          :newTab="info.newTab"
          :date="info.date"
          :pin="info.pin"
        />
      </div>
    </div>
  </section>
  <section class="bg-gray-200">
    <div class="mx-auto max-w-4xl px-4 py-10 sm:px-8">
      <div class="mb-10 text-gray-800">
        <div class="items-center text-center">
          <h1 class="inline text-3xl uppercase">About HBC</h1>
          <p class="mt-2">放送部について</p>
        </div>
      </div>
      <div class="mb-10 text-center">
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
      <div class="text-center">
        <ButtonLinkArrowRight to="/about">もっと詳しく</ButtonLinkArrowRight>
      </div>
    </div>
  </section>
  <section>
    <div class="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <div class="mb-10 text-gray-800">
        <div class="items-center text-center">
          <span class="relative bottom-0.5 mr-4 text-2xl"><font-awesome-icon icon="fa-solid fa-pen-clip" /></span>
          <h1 class="inline text-3xl uppercase">Blog</h1>
          <p class="mt-2">不定期更新</p>
        </div>
      </div>
      <div class="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard
          v-for="article in blogPosts"
          :key="article.title"
          :to="article._path!"
          :title="article.title ? article.title : 'undefinded'"
          :description="article.description"
          :author="article.author"
          :category="article.category"
          :tags="article.tags"
          :coverImage="article.coverImage"
          :createDate="article.createDate"
          :updateDate="article.updateDate"
        />
      </div>
      <div class="text-center">
        <ButtonLinkArrowRight to="/blog">もっと見る</ButtonLinkArrowRight>
      </div>
    </div>
  </section>
</template>
