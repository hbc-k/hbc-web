<script setup lang="ts">
useServerSeoMeta({
  twitterCard: 'summary_large_image',
  ogLocale: 'ja_JP',
  ogSiteName: 'HBC Web',
});
useSeoMeta({
  titleTemplate: 'HBC Web - %s',
  ogImage: 'https://hbc-web.vercel.app/img/ogp_default.webp',
  ogType: 'website',
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html {
  overflow-y: scroll;
}
</style>
