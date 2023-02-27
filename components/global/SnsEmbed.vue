<script setup>
const target = ref(null);
onMounted(() => {
  if (twttr) {
    twttr.widgets.load(target.value);
  }
  if (instgrm) {
    instgrm.Embeds.process();
  }
});
</script>

<template>
  <div ref="target">
    <slot />
  </div>
</template>
