<script setup lang="ts">
interface Props {
  info: {
    title: string;
    description: string;
    url: string;
    newTab?: boolean;
    date: string;
    pin?: boolean;
  };
}
const Props = defineProps<Props>();
const target = Props.info.newTab ? '_blank' : '_self';
const dateString = new Date(Props.info.date).toLocaleDateString('sv-SE');
</script>

<template>
  <NuxtLink :to="info.url" :target="target">
    <div class="group flex h-full flex-col rounded border px-4 py-5 shadow transition hover:border-red-200 hover:text-red-600">
      <div class="mb-3 px-1">
        <h2 class="mb-2 text-xl font-bold">
          {{ info.title }}
        </h2>
        <p>
          {{ info.description }}
        </p>
      </div>
      <div class="mt-auto border-t px-1 pt-3 text-sm text-gray-600 transition group-hover:border-red-200 group-hover:text-red-400">
        <font-awesome-icon icon="fa-regular fa-calendar" />
        <span class="ml-1">
          {{ dateString }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
