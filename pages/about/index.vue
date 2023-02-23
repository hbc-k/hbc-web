<script setup lang="ts">
useSeoMeta({
  title: 'About',
  description: '放送部について紹介しています。',
  ogTitle: 'About',
  ogDescription: '放送部について紹介しています。',
});
</script>

<template>
  <PageHeader to="/about">
    About
    <template #detail>放送部について</template>
  </PageHeader>
</template>
