<script setup lang="ts">
const yearlySchedule: { month: string; activity: string }[] = [
  {
    month: '4月',
    activity: '部活動紹介',
  },
  {
    month: '6月',
    activity:
      '文化祭に向けて（文化祭特別放送の準備、音響設備の調整など）\n高3引退（引退放送）\n小学生向けオープンスクールの司会\nＮＨＫ杯全国高校放送コンテスト\nＮＨＫ杯全国高校放送コンテスト',
  },
  {
    month: '8月',
    activity: '中学生向けオープンスクールの司会・部活紹介',
  },
  {
    month: '10月',
    activity: '総合文化祭（地区大会）',
  },
  {
    month: '1月',
    activity: '高3生共通テスト応援放送',
  },
  {
    month: '2月',
    activity: '中学校ことば科発表会撮影\n高等学校英語科パフォーマンスコンテスト撮影',
  },
];

useSeoMeta({
  title: 'About',
  description: '放送部について紹介しています。',
  ogTitle: 'HBC Web - About',
  ogDescription: '放送部について紹介しています。',
});
</script>

<template>
  <PageHeader to="/about">
    About
    <template #detail>放送部について</template>
  </PageHeader>
  <section>
    <div class="mx-auto max-w-7xl">
      <div class="px-4 py-10 sm:px-6 lg:px-8">
        <div class="mb-4 text-center">
          <h1 class="text-2xl font-light">放送部について</h1>
        </div>
        <div class="">
          <h2 class="text-center text-3xl leading-relaxed tracking-wider text-red-700">
            <span class="inline-block">広島県立広島中学校・</span><span class="inline-block">広島高等学校 放送部は</span><br /><span
              class="inline-block"
              >県広の様々な校内行事を</span
            ><span class="inline-block">支えています</span>
          </h2>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="mx-auto max-w-7xl">
      <div class="px-4 py-10 sm:px-6 lg:px-8">
        <div class="mb-4 text-center">
          <h1 class="text-2xl font-light">放送部のあゆみ</h1>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="mx-auto max-w-7xl">
      <div class="px-4 py-10 sm:px-6 lg:px-8">
        <div class="mb-4 text-center">
          <h1 class="text-2xl font-light">大会実績</h1>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="mx-auto max-w-7xl">
      <div class="px-4 py-10 sm:px-6 lg:px-8">
        <div class="mb-4 text-center">
          <h1 class="text-2xl font-light">年間スケジュール</h1>
          <p class="mt-2">放送部が取り組む主な活動です</p>
        </div>
        <div class="mt-8">
          <div class="mx-auto max-w-3xl overflow-hidden rounded-md border bg-gray-100">
            <div class="my-6 shadow-sm">
              <table class="w-full">
                <thead class="text-gray-700">
                  <tr>
                    <th class="whitespace-nowrap border-b p-4 pb-3 pl-8 text-left font-medium">月</th>
                    <th class="border-b p-4 pb-3 pr-8 text-left font-medium">活動内容</th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <tr v-for="schedule in yearlySchedule">
                    <td class="whitespace-nowrap border-b border-gray-100 p-4 pb-3 pl-8" v-text="schedule.month"></td>
                    <td class="prewrap whitespace-pre-wrap border-b border-gray-100 p-4 pb-3 pr-8" v-text="schedule.activity"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-orange-600 text-white">
    <div class="mx-auto max-w-7xl">
      <div class="px-4 py-10 sm:px-6 lg:px-8">
        <div class="mb-4 text-center">
          <h1 class="text-2xl font-light">「みんなで作る、昼放送」</h1>
          <p class="mt-2">――もみじ放送局としての取り組み――</p>
        </div>
        <div class="mt-8 max-w-2xl text-lg">
          <p>放送部は、2021年12月からもみじ放送局としての取り組みを開始し、多様な番組で県広のお昼の時間を盛り上げてまいりました。</p>
        </div>
        <div class="mt-8 hover:underline">
          <NuxtLink to="#">もみじ放送局についてもっと詳しく</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
