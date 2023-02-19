<template>
  <PageHeader to="/blog">
    Blog
    <template #detail>部員が活動の様子をお届け！</template>
  </PageHeader>
  <ContentDoc v-slot="{ doc }">
    <div class="mx-auto max-w-3xl">
      <article class="my-8 rounded-md bg-white p-4 py-8 shadow sm:px-8">
        <div class="mb-6 flex aspect-[1200_/_630] h-auto w-full items-center overflow-hidden rounded-md bg-gray-200">
          <NuxtPicture :src="doc.coverImage" width="1200" height="630" quality="75" loading="lazy" />
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
    <div class="mx-4">
      <div class="mx-auto max-w-3xl">
        <NuxtLink
          to="/blog"
          class="my-8 flex h-16 items-center justify-center rounded-md border bg-white px-4 py-2 text-sm font-bold text-gray-800 shadow transition duration-300 hover:bg-gray-200 hover:text-red-600"
        >
          <span>記事一覧へ戻る</span>
        </NuxtLink>
      </div>
    </div>
  </ContentDoc>
</template>
