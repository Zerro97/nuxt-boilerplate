<script setup lang="ts">
useSeoMeta({
  title: 'Home',
  description: 'My awesome home page.',
})
</script>

<template>
  <div>
    <SeoKit />
    <OgImageScreenshot />
    <OgImageStatic />
    <NuxtPage />
  </div>
</template>
