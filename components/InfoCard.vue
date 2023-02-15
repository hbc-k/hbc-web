<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  url: string;
  newTab?: boolean;
  date: string;
  pin?: boolean;
}
const Props = defineProps<Props>();
const target = Props.newTab ? '_blank' : '_self';
const dateString = new Date(Props.date).toLocaleDateString('sv-SE');
</script>

<template>
  <NuxtLink :to="url" :target="target">
    <div
      class="group relative flex h-full flex-col rounded-lg border px-4 py-5 shadow-md transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:text-red-600"
    >
      <div class="mb-3 px-1">
        <h2 class="mb-2 text-xl font-bold">
          {{ title }}
        </h2>
        <p>
          {{ description }}
          <span v-if="newTab" class="ml-1">
            <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
          </span>
        </p>
      </div>
      <div class="mt-auto border-t px-1 pt-3 text-sm text-gray-600 transition group-hover:border-red-200 group-hover:text-red-400">
        <font-awesome-icon icon="fa-regular fa-clock" />
        <span class="ml-1">
          {{ dateString }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
