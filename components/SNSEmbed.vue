<script setup>
onMounted(() => {
  if (twttr) {
    twttr.widgets.load();
  }
  if (instgrm) {
    instgrm.Embeds.process();
  }
});
</script>
