<script setup lang="ts">
useSeoMeta({
  title: 'Program',
  description: '放送部が制作している番組を紹介しています。',
  ogTitle: 'Program',
  ogDescription: '放送部が制作している番組を紹介しています。',
});
</script>

<template>
  <PageHeader to="/blog">
    Program
    <template #detail>放送部制作の番組</template>
  </PageHeader>
</template>
