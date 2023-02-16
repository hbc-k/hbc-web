<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  category: string;
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
      class="group relative flex h-full flex-col rounded-lg border shadow-md transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:text-red-600"
    >
      <div class="p-5">
        <div class="mb-3 text-sm text-gray-600 group-hover:text-red-400">
          <div class="flex items-center">
            <div class="rounded-full border border-gray-400 px-2.5 py-1 transition duration-300 group-hover:border-red-200">
              {{ category }}
            </div>
            <div class="ml-auto transition duration-300">
              <font-awesome-icon icon="fa-regular fa-clock" />
              <span class="ml-1">
                {{ dateString }}
              </span>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-xl font-bold">
            {{ title }}
          </h2>
          <p class="mt-2 text-gray-600 transition duration-300 group-hover:border-red-200 group-hover:text-red-400">
            {{ description }}
            <span v-if="newTab" class="ml-1 text-xs">
              <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
            </span>
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
