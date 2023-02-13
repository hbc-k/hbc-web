<template>
  <div class="flex min-h-screen flex-col">
    <div class="sticky top-0 z-40">
      <HeaderMain />
    </div>
    <div class="flex-grow">
      <slot />
    </div>
    <div>
      <FooterMain />
    </div>
  </div>
</template>
