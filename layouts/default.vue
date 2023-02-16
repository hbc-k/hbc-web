<template>
  <div class="flex min-h-screen flex-col">
    <div class="sticky top-0 z-40">
      <HeaderMain />
    </div>
    <div class="flex-grow bg-gray-50">
      <slot />
    </div>
    <div>
      <FooterMain />
    </div>
  </div>
</template>
