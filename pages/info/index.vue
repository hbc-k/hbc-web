<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

useSeoMeta({
  title: 'Information',
  description: '放送部からのお知らせを掲載しています。',
  ogTitle: 'Information',
  ogDescription: '放送部からのお知らせを掲載しています。',
});

interface Info extends ParsedContent {
  category: string;
  url: string;
  newTab?: boolean;
  date: string;
  pin?: boolean;
}

const { data: pinnedInfos } = await useAsyncData('pinnedInfos', () => queryContent<Info>('info').where({ pin: true }).sort({ date: -1 }).find());
const { data: archivedInfos } = await useAsyncData('archivedInfos', () =>
  queryContent<Info>('info')
    .where({ pin: { $ne: true } })
    .sort({ date: -1 })
    .find()
);
</script>

<template>
  <PageHeader to="/info">
    Information
    <template #detail>放送部からのお知らせ</template>
  </PageHeader>
  <main class="flex flex-grow flex-col">
    <section>
      <div class="mx-auto max-w-7xl">
        <div class="px-4 py-10 sm:px-6 lg:px-8">
          <div class="mb-8 text-gray-800">
            <div class="items-center text-center">
              <span class="relative bottom-0.5 mr-4 text-2xl"><font-awesome-icon icon="fa-solid fa-thumbtack" /></span>
              <h1 class="inline text-3xl uppercase">掲載中のお知らせ</h1>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <InfoCard v-for="info in pinnedInfos" :key="info.title" :info="info" />
          </div>
        </div>
      </div>
    </section>
    <section class="flex-grow bg-gray-200">
      <div class="mx-auto max-w-7xl">
        <div class="px-4 py-10 sm:px-6 lg:px-8">
          <div class="mb-8 text-gray-800">
            <div class="items-center text-center">
              <span class="relative bottom-0.5 mr-4 text-2xl"><font-awesome-icon icon="fa-solid fa-box-archive" /></span>
              <h1 class="inline text-3xl uppercase">過去のお知らせ</h1>
              <p class="mt-2">※掲載当時の情報です。現在の情報と異なる場合があります。</p>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <InfoCard v-for="info in archivedInfos" :key="info.title" :info="info" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
