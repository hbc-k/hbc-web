<template>
  <PageHeader to="/blog">
    Blog
    <template #detail>部員が活動の様子をお届け！</template>
  </PageHeader>
  <ContentDoc v-slot="{ doc }">
    <div class="mx-auto max-w-3xl">
      <article class="my-8 rounded-md bg-white p-4 py-8 shadow sm:px-8">
        <div class="mb-6 aspect-[1200_/_630] h-auto w-full overflow-hidden rounded-md bg-gray-200 object-cover">
          <NuxtPicture :src="doc.coverImage" loading="lazy" />
        </div>
        <div class="mb-6 border-b border-b-gray-300 pb-6">
          <ArticleAuthorTop :author="doc.author" class="mb-4" />
          <div class="mb-3 items-center text-sm text-gray-500">
            <div class="flex-row-reverse sm:flex sm:justify-between">
              <div class="flex">
                <div>
                  <font-awesome-icon icon="fa-regular fa-clock" />
                  <span class="ml-1">{{ new Date(doc.createDate).toLocaleDateString('sv-SE') }}</span>
                </div>
                <div class="ml-2">
                  <font-awesome-icon icon="fa-solid fa-clock-rotate-left" />
                  <span class="ml-1">{{ new Date(doc.updateDate).toLocaleDateString('sv-SE') }}</span>
                </div>
              </div>
              <div class="mt-2 sm:mt-0">
                <font-awesome-icon icon="fa-regular fa-folder" />
                <NuxtLink :to="`/blog/category/${doc.category}`" class="ml-1 underline-offset-2 hover:underline">
                  {{ doc.category }}
                </NuxtLink>
              </div>
            </div>
          </div>
          <h1 class="text-3xl font-bold">{{ doc.title }}</h1>
          <p class="mt-2 text-gray-500">{{ doc.description }}</p>
          <div class="mt-3 text-gray-500">
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
    </div>
    <div class="mx-auto max-w-3xl">
      <ArticleAuthorCard :author="doc.author" class="my-8 rounded-md bg-white p-4 py-8 shadow sm:px-8" />
    </div>
    <div class="mx-4">
      <div class="mx-auto max-w-3xl">
        <ArticleSurround :path="$route.path" class="my-8" />
      </div>
    </div>
  </ContentDoc>
</template>
