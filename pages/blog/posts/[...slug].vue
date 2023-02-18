<template>
  <ContentDoc v-slot="{ doc }">
    <article class="mx-auto my-8 max-w-3xl rounded-md bg-white px-6 py-10 shadow sm:px-10">
      <div class="mb-6">
        <img :src="`/img/blog/posts/${doc.coverImage}`" alt="" class="rounded-md" />
      </div>
      <div class="mb-6 border-b border-b-gray-300 pb-6">
        <ArticleAuthorTop :author="doc.author" class="mb-4" />
        <div class="mb-3 items-center text-sm text-gray-500">
          <div class="flex-row-reverse sm:flex">
            <div class="flex sm:ml-auto">
              <div>
                <font-awesome-icon icon="fa-regular fa-clock" />
                <span class="ml-1">{{ new Date(doc.createDate).toLocaleDateString('sv-SE') }}</span>
              </div>
              <div class="ml-2">
                <font-awesome-icon icon="fa-solid fa-clock-rotate-left" />
                <span class="ml-1">{{ new Date(doc.updateDate).toLocaleDateString('sv-SE') }}</span>
              </div>
            </div>
            <div class="mt-1 sm:mt-0">
              <font-awesome-icon icon="fa-regular fa-folder" />
              <NuxtLink :to="`/blog/category/${doc.category}`" class="ml-1 underline-offset-2 hover:underline">
                {{ doc.category }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <h1 class="text-3xl font-bold">{{ doc.title }}</h1>
        <p class="mt-2 text-gray-500">{{ doc.description }}</p>
        <div class="mt-4 text-gray-500">
          <font-awesome-icon icon="fa-solid fa-tags" />
          <span class="ml-1">
            <NuxtLink v-for="tag in doc.tags" :key="tag" :to="`/blog/tag/${tag}`" class="mr-1 underline-offset-2 hover:underline">
              {{ tag }}
            </NuxtLink>
          </span>
        </div>
      </div>
      <main class="prose max-w-none">
        <ContentRenderer :value="doc" />
      </main>
    </article>
    <ArticleAuthorCard :author="doc.author" class="max-w-3xl rounded-md bg-white shadow" />
  </ContentDoc>
</template>
