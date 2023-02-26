<script setup lang="ts">
useSeoMeta({
  title: 'Contact',
  description: '放送部へのお問い合わせについて掲載しています。',
  ogTitle: 'HBC Web - Contact',
  ogDescription: '放送部へのお問い合わせについて掲載しています。',
});

const map = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const iframe = document.createElement('iframe');
  map.value?.appendChild(iframe);
  iframe.classList.add('w-full', 'h-full');
  iframe.contentDocument?.open();
  iframe.contentDocument?.write(
    '<body><script type="text/javascript" src="https://map.yahoo.co.jp/embedmap/V3/?lon=132.79366&lat=34.44687&zoom=15&width=100%&height=100%&cond=action:place;gid:FHB__RS-eNA"><\/script><\/body>'
  );
  iframe.contentDocument?.close();
});
</script>

<template>
  <PageHeader to="/contact">
    Contact
    <template #detail>お問い合わせ</template>
  </PageHeader>
  <main>
    <div class="mx-auto max-w-3xl">
      <article class="my-8 rounded-md bg-white px-4 py-8 shadow sm:px-8">
        <div class="mb-4 border-b pb-4">
          <h1 class="text-2xl font-bold sm:text-3xl"><font-awesome-icon icon="fa-solid fa-envelope" class="mr-2" />フォームでのお問い合わせ</h1>
        </div>
        <ButtonLinkArrowRight to="https://docs.google.com/forms/d/e/1FAIpQLSfEL8aYnppoxCSq_M4N8QeeZXZm5ZNMAo2_Us4dMm6cTID0cw/viewform?usp=sf_link">
          お問い合わせフォームへ
        </ButtonLinkArrowRight>
        <p class="mt-1">（Google フォームを利用しています）</p>
      </article>
      <article class="my-8 rounded-md bg-white px-4 py-8 shadow sm:px-8">
        <div class="mb-4 border-b pb-4">
          <h1 class="text-2xl font-bold sm:text-3xl"><font-awesome-icon icon="fa-solid fa-map-location-dot" class="mr-2" />学校へのアクセス</h1>
        </div>
        <ul>
          <li class="mb-2">
            <NuxtLink to="https://www.hcyuko.hiroshima-c.ed.jp/" class="hover:underline" target="_blank"
              >学校ホームページはこちら<span class="relative bottom-0.5 ml-1 text-xs"
                ><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /></span
            ></NuxtLink>
          </li>
          <li>JR西高屋駅から徒歩10分</li>
          <li>〒739-2125 広島県東広島市高屋町中島31-7</li>
          <li>TEL: <a href="tel:082-491-0270" class="text-blue-600 underline">(082)491-0270</a></li>
          <li>FAX: <a href="tel:082-434-7023" class="text-blue-600 underline">(082)434-7023</a></li>
          <li ref="map" class="my-2 aspect-square sm:aspect-[4/3]"></li>
        </ul>
      </article>
    </div>
  </main>
</template>
