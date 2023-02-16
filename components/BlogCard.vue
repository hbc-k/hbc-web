<script setup lang="ts">
interface Props {
  to: string;
  title: string;
  description: string;
  author: string;
  category: string;
  tags: string[];
  coverImage: string;
  createDate: string;
  updateDate: string;
}

const Props = defineProps<Props>();
const dateString = new Date(Props.createDate).toLocaleDateString('sv-SE');
</script>

<template>
  <NuxtLink :to="to">
    <div
      class="group flex h-full flex-col overflow-hidden rounded-lg border shadow-md transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:text-red-600"
    >
      <div class="aspect-[1200_/_630] h-auto w-full overflow-hidden object-cover">
        <img :src="`/img/posts/${coverImage}`" alt="" class="transition duration-500 group-hover:scale-[103%]" />
      </div>
      <div class="p-5">
        <div class="mb-2 text-sm text-gray-600 transition duration-300 group-hover:border-red-200 group-hover:text-red-400">
          <div class="flex items-center">
            <div>
              <font-awesome-icon icon="fa-regular fa-folder" />
              <span class="ml-1">
                {{ category }}
              </span>
            </div>
            <div class="ml-2">
              <font-awesome-icon icon="fa-regular fa-user" />
              <span class="ml-1">
                {{ author }}
              </span>
            </div>
            <div class="ml-auto">
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
          <p class="mt-1 text-gray-600 transition duration-300 group-hover:text-red-400">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
