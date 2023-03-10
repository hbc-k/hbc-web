<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

useSeoMeta({
  title: 'HBC Web - 県広放送部公式Webサイト',
  titleTemplate: '',
  description: '広島県立広島中学校・広島高等学校 放送部（Hiroshima Broadcasting Club）の公式Webサイトです。放送部の活動などを紹介しています。',
  ogTitle: 'HBC Web - 県広放送部公式Webサイト',
  ogDescription: '広島県立広島中学校・広島高等学校 放送部（Hiroshima Broadcasting Club）の公式Webサイトです。放送部の活動などを紹介しています。',
});

interface Info extends ParsedContent {
  category: string;
  url: string;
  newTab?: boolean;
  date: string;
  pin?: boolean;
}
const { data: pinnedInfos } = await useAsyncData('pinnedInfos', () => queryContent<Info>('info').where({ pin: true }).sort({ date: -1 }).find());

interface BlogPost extends ParsedContent {
  author?: string;
  category?: string;
  tags?: string[];
  coverImage?: string;
  createDate?: string;
  updateDate?: string;
}
const { data: blogPosts } = await useAsyncData('recentPosts', () =>
  queryContent<BlogPost>('blog', 'posts')
    .only(['_path', 'title', 'description', 'author', 'category', 'coverImage', 'createDate'])
    .sort({ createDate: -1 })
    .limit(3)
    .find()
);

const onScroll = inject<{ (value: boolean): void }>('onScroll');
const firstContent = ref<HTMLElement>();

onMounted(() => {
  if (!firstContent.value) return;
  if (!onScroll) return;
  const handler = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      onScroll(!entry.isIntersecting && window.scrollY > 0);
    });
  };
  const observer = new IntersectionObserver(handler, { rootMargin: '-60px 0px 0px 0px' });
  observer.observe(firstContent.value);
});
</script>

<template>
  <header ref="firstContent" class="relative bg-black">
    <video src="/img/index_header.mp4" type="video/mp4" autoplay loop muted playsinline class="h-screen-small w-screen bg-black object-cover"></video>
    <div class="absolute top-0 w-full">
      <div class="mx-auto max-w-7xl">
        <div class="flex h-screen-small flex-col items-center justify-center sm:items-start">
          <div class="px-4 font-wo_yakuhan text-black sm:px-6 lg:px-8">
            <h1 class="text-[2.5rem] font-light uppercase leading-snug sm:text-7xl sm:leading-snug">
              <span class="bg-white px-3">Hiroshima<br /></span><span class="bg-white px-3">Broadcasting<br /></span
              ><span class="bg-white px-3">Club</span>
            </h1>
            <p class="mt-10 sm:text-[1.7rem]">
              <span class="bg-white px-2 py-1">広島県立広島中学校・広島高等学校 放送部</span>
            </p>
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
            <span class="relative bottom-0.5 mr-3 text-xl"><font-awesome-icon icon="fa-solid fa-bullhorn" /></span>
            <h2 class="inline text-2xl font-light uppercase">Information</h2>
            <p class="mt-2 text-sm">放送部からのお知らせ</p>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <InfoCard v-for="info in pinnedInfos" :key="info.title" :info="info" />
        </div>
        <div class="mt-10 text-center text-sm">
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
            <h2 class="inline text-2xl font-light uppercase">About HBC</h2>
            <p class="mt-2 text-sm">放送部について</p>
          </div>
        </div>
        <div class="text-center">
          <h3 class="text-3xl leading-relaxed tracking-wider text-red-700">
            <span class="inline-block">広島県立広島中学校・</span><span class="inline-block">広島高等学校 放送部は</span><br /><span
              class="inline-block"
              >県広の様々な校内行事を</span
            ><span class="inline-block">支えています</span>
          </h3>
          <p class="mt-10 leading-relaxed tracking-wide text-gray-800">
            2004年（平成16年）の開校以来、校内の行事や式典における司会・撮影・音響、学校紹介ビデオをはじめとした各種ビデオの制作、お昼の休憩時間中の放送、各種大会への参加など、さまざまな活動を行っています。
          </p>
        </div>
        <div class="mt-10 text-center text-sm">
          <ButtonLinkArrowRight to="/about">もっと詳しく</ButtonLinkArrowRight>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-gray-800 text-white">
    <div class="mx-auto max-w-7xl">
      <div class="px-4 py-10 sm:px-6 lg:px-8">
        <div class="mb-8">
          <div class="items-center text-center">
            <h2 class="inline text-2xl font-bold uppercase">What's Next?</h2>
            <span class="relative ml-2 text-xl"><font-awesome-icon icon="fa-solid fa-right-long" /></span>
            <p class="mt-2 text-sm">放送予定の番組</p>
          </div>
        </div>
        <div>
          <ul class="grid gap-6">
            <li class="flex items-center">
              <div class="mr-4 shrink-0 text-gray-300">2023-03-10</div>
              <div>
                <div class="mr-4 mb-1">イベントピック</div>
                <h2 class="text-lg font-bold">卒業記念放送</h2>
                <p class="mt-1 text-sm">卒業を控えた高校３年生に学校生活の思い出をインタビュー！ 在校生へのメッセージも？</p>
              </div>
            </li>
            <li class="flex items-center">
              <div class="mr-4 shrink-0 text-gray-300">2023-03-17</div>
              <div>
                <div class="mr-4 mb-1">Point of Music!</div>
                <h2 class="text-lg font-bold">本当は教えたくない！ 私だけのイチオシアーティスト特集</h2>
                <p class="mt-1 text-sm">
                  「大好きなのに、なぜかみんな知らない……」 そんなアーティストを一斉調査！ あなたもアーティストへの愛を語ってみませんか？
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="mx-auto max-w-7xl">
      <div class="px-4 py-10 sm:px-6 lg:px-8">
        <div class="mb-8 text-gray-800">
          <div class="items-center text-center">
            <span class="relative bottom-0.5 mr-3 text-xl"><font-awesome-icon icon="fa-solid fa-pen-clip" /></span>
            <h2 class="inline text-2xl font-light uppercase">Blog</h2>
            <p class="mt-2 text-sm">不定期更新</p>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <BlogCard v-for="doc in blogPosts" :key="doc.title" :doc="doc" />
        </div>
        <div class="mt-8 text-center text-sm">
          <ButtonLinkArrowRight to="/blog">もっと見る</ButtonLinkArrowRight>
        </div>
      </div>
    </div>
  </section>
</template>
