<script setup lang="ts">
const scroll = ref(false);

const onScroll = (value: boolean) => {
  scroll.value = value;
};

provide('onScroll', onScroll);
</script>

<template>
  <div class="flex min-h-screen flex-col overflow-hidden">
    <header class="fixed top-0 z-40 w-full">
      <HeaderMain :scroll="scroll" />
    </header>
    <div class="flex-grow bg-gray-50">
      <slot />
    </div>
    <footer>
      <FooterMain />
    </footer>
  </div>
</template>
