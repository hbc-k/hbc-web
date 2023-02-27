<script setup lang="ts">
const showMenu = inject<{ (): void }>('showMenu');
</script>

<template>
  <div>
    <button @click="showMenu" class="aspect-square h-7">
      <font-awesome-icon icon="fa-solid fa-bars" class="text-2xl" />
    </button>
  </div>
</template>
