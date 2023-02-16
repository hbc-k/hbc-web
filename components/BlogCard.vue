<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface Props {
  to: string;
  title: string;
  description: string;
  author: string;
  category: string;
  coverImage: string;
  createDate: string;
}
const Props = defineProps<Props>();

interface Author extends ParsedContent {
  displayName: string;
  icon: string;
}
const { data: authorData } = await useAsyncData(Props.author, () =>
  queryContent<Author>('blog', 'author').where({ userName: Props.author }).findOne()
);
</script>

<template>
  <NuxtLink :to="to">
    <div
      class="group flex h-full flex-col overflow-hidden rounded-lg border bg-white shadow transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:text-red-600 hover:shadow-md"
    >
      <div class="aspect-[1200_/_630] h-auto w-full overflow-hidden object-cover">
        <img :src="`/img/blog/posts/${coverImage}`" alt="" class="transition duration-500 group-hover:scale-[103%]" />
      </div>
      <div class="flex flex-grow flex-col p-5">
        <div class="mb-3 text-sm text-gray-600 transition duration-300 group-hover:border-red-200 group-hover:text-red-400">
          <div class="flex items-center">
            <div class="aspect-square h-8 w-auto overflow-hidden rounded-full bg-slate-200 object-cover">
              <img :src="`/img/blog/author/${authorData ? authorData.icon : 'undefinded.png'}`" alt="" />
            </div>
            <div class="ml-2 flex-grow">
              <div class="flex items-center">
                <div>@{{ author }}</div>
                <div class="ml-auto">
                  <font-awesome-icon icon="fa-regular fa-clock" />
                  <span class="ml-1">
                    {{ new Date(createDate).toLocaleDateString('sv-SE') }}
                  </span>
                </div>
              </div>
              <div class="font-bold text-black transition duration-300 group-hover:text-red-600">
                {{ authorData ? authorData.displayName : author }}
              </div>
            </div>
          </div>
        </div>
        <div class="mb-1 text-sm text-gray-600 transition duration-300 group-hover:text-red-400">
          <font-awesome-icon icon="fa-regular fa-folder" />
          <span class="ml-1">
            {{ category }}
          </span>
        </div>
        <div class="flex-grow">
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
