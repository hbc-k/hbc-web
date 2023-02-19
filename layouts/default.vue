<template>
  <div class="flex min-h-screen flex-col">
    <header class="sticky top-0 z-40">
      <HeaderMain />
    </header>
    <div class="flex flex-grow flex-col bg-gray-50">
      <slot />
    </div>
    <footer>
      <FooterMain />
    </footer>
  </div>
</template>
