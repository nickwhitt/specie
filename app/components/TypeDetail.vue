<template>
  <div>
    <slot name="title">
      <ProseH2 :id="slug">{{ title }}</ProseH2>
    </slot>
    <div class="grid md:grid-cols-2">
      <div class="flex flex-wrap gap-2 justify-center md:order-last md:mt-5">
        <NuxtPicture v-for="source in images" :src="source" sizes="120px lg:200px" />
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title?: string, images?: string[], slug?: string }>()
</script>
