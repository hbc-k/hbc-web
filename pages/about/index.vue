<script setup lang="ts">
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
        <div class="">
          <h1 class="text-2xl font-light sm:text-3xl">放送部について</h1>
        </div>
        <div class="mt-8">
          <h2 class="text-3xl leading-relaxed tracking-wider text-red-700">
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
        <div class="">
          <h1 class="text-2xl font-light sm:text-3xl">放送部のあゆみ</h1>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="mx-auto max-w-7xl">
      <div class="px-4 py-10 sm:px-6 lg:px-8">
        <div class="">
          <h1 class="text-2xl font-light sm:text-3xl">大会実績</h1>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="mx-auto max-w-7xl">
      <div class="px-4 py-10 sm:px-6 lg:px-8">
        <div class="mb-4">
          <h1 class="text-2xl font-light sm:text-3xl">年間スケジュール</h1>
          <p class="mt-2">放送部が取り組む主な活動です</p>
        </div>
        <div class="mt-8">
          <div class="max-w-3xl overflow-hidden rounded-md border bg-gray-100">
            <div class="my-6 shadow-sm">
              <table class="w-full">
                <thead class="text-gray-700">
                  <tr>
                    <th class="whitespace-nowrap border-b p-4 pb-3 pl-8 text-left font-medium">月</th>
                    <th class="border-b p-4 pb-3 pr-8 text-left font-medium">活動内容</th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <tr>
                    <td class="whitespace-nowrap border-b border-gray-100 p-4 pb-3 pl-8">4月</td>
                    <td class="border-b border-gray-100 p-4 pb-3 pr-8">部活動紹介</td>
                  </tr>
                  <!-- <tr>
                    <td class="whitespace-nowrap border-b border-gray-100 p-4 pb-3 pl-8">5月</td>
                    <td class="border-b border-gray-100 p-4 pb-3 pr-8"></td>
                  </tr> -->
                  <tr>
                    <td class="whitespace-nowrap border-b border-gray-100 p-4 pb-3 pl-8">6月</td>
                    <td class="border-b border-gray-100 p-4 pb-3 pr-8">
                      文化祭に向けて（文化祭特別放送の準備、音響設備の調整など）<br />高3引退（引退放送）<br />小学生向けオープンスクールの司会<br />ＮＨＫ杯全国高校放送コンテスト<br />ＮＨＫ杯全国高校放送コンテスト
                    </td>
                  </tr>
                  <!-- <tr>
                    <td class="whitespace-nowrap border-b border-gray-100 p-4 pb-3 pl-8">7月</td>
                    <td class="border-b border-gray-100 p-4 pb-3 pr-8"></td>
                  </tr> -->
                  <tr>
                    <td class="whitespace-nowrap border-b border-gray-100 p-4 pb-3 pl-8">8月</td>
                    <td class="border-b border-gray-100 p-4 pb-3 pr-8">中学生向けオープンスクールの司会・部活紹介</td>
                  </tr>
                  <!-- <tr>
                    <td class="whitespace-nowrap border-b border-gray-100 p-4 pb-3 pl-8">9月</td>
                    <td class="border-b border-gray-100 p-4 pb-3 pr-8"></td>
                  </tr> -->
                  <tr>
                    <td class="whitespace-nowrap border-b border-gray-100 p-4 pb-3 pl-8">10月</td>
                    <td class="border-b border-gray-100 p-4 pb-3 pr-8">総合文化祭（地区大会）</td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap border-b border-gray-100 p-4 pb-3 pl-8">11月</td>
                    <td class="border-b border-gray-100 p-4 pb-3 pr-8">総合文化祭（県大会）</td>
                  </tr>
                  <!-- <tr>
                    <td class="whitespace-nowrap border-b border-gray-100 p-4 pb-3 pl-8">12月</td>
                    <td class="border-b border-gray-100 p-4 pb-3 pr-8"></td>
                  </tr> -->
                  <tr>
                    <td class="whitespace-nowrap border-b border-gray-100 p-4 pb-3 pl-8">1月</td>
                    <td class="border-b border-gray-100 p-4 pb-3 pr-8">高3生共通テスト応援放送</td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap border-b border-gray-100 p-4 pb-3 pl-8">2月</td>
                    <td class="border-b border-gray-100 p-4 pb-3 pr-8">中学校ことば科発表会撮影<br />高等学校英語科パフォーマンスコンテスト撮影</td>
                  </tr>
                  <!-- <tr>
                    <td class="whitespace-nowrap border-b border-gray-100 p-4 pb-3 pl-8">3月</td>
                    <td class="border-b border-gray-100 p-4 pb-3 pr-8"></td>
                  </tr> -->
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
        <div class="">
          <h1 class="text-2xl font-light sm:text-3xl">「みんなで作る、昼放送」</h1>
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
