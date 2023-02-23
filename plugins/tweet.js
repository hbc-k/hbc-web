import Tweet from 'vue-tweet';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Tweet', Tweet, {});
});
