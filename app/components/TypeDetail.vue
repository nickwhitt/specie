<template>
  <div>
    <ProseH2>{{ title }}</ProseH2>
    <div class="grid md:grid-cols-2">
      <div class="flex flex-wrap gap-2 justify-center md:order-last">
        <NuxtPicture v-for="source in images" :src="source" sizes="120px lg:200px" />
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string, images: string[] }>()
</script>
