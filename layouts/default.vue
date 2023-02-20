<template>
  <div class="flex min-h-screen flex-col">
    <header class="fixed top-0 z-40 w-full">
      <HeaderMain />
    </header>
    <div class="flex-grow bg-gray-50">
      <slot />
    </div>
    <footer>
      <FooterMain />
    </footer>
  </div>
</template>
