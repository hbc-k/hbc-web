<script setup lang="ts">
interface Props {
  info: {
    title?: string;
    description?: string;
    category?: string;
    url?: string;
    newTab?: boolean;
    createDate?: string;
  };
}
const Props = defineProps<Props>();
</script>

<template>
  <article
    class="group relative flex h-full flex-col rounded-lg border bg-white shadow transition duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:text-red-600 hover:shadow-md"
  >
    <NuxtLink :to="info.url" :target="info.newTab ? '_blank' : '_self'" class="absolute inset-0" tabindex="-1" />
    <div class="p-5">
      <div class="mb-3 text-sm">
        <div class="flex items-center justify-between">
          <div v-if="info.category" class="rounded-full bg-gray-500 px-2.5 py-0.5 text-white transition duration-300 group-hover:bg-red-400">
            {{ info.category }}
          </div>
          <div v-if="info.createDate" class="text-gray-500 transition duration-300 group-hover:text-red-400">
            <font-awesome-icon icon="fa-regular fa-clock" />
            <span class="ml-1">
              {{ new Date(info.createDate).toLocaleDateString('sv-SE') }}
            </span>
          </div>
        </div>
      </div>
      <div>
        <NuxtLink :to="info.url" :target="info.newTab ? '_blank' : '_self'" class="relative z-10 text-xl font-bold hover:underline">
          {{ info.title }}
        </NuxtLink>
        <p class="mt-2 text-gray-500 transition duration-300 group-hover:text-red-400">
          {{ info.description }}
          <span v-if="info.newTab" class="ml-1 text-xs">
            <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
          </span>
        </p>
      </div>
    </div>
  </article>
</template>
