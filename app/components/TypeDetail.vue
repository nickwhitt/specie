<template>
  <div>
    <slot name="title">
      <ProseH2 :id="slug">{{ title }}</ProseH2>
    </slot>
    <div class="grid sm:grid-cols-3 justify-center">
      <div class="flex flex-wrap gap-2 justify-center sm:hidden">
        <NuxtPicture v-for="source in images" :src="source" sizes="120px" />
      </div>
      <div class="sm:col-span-2">
        <slot />
      </div>
      <div class="hidden sm:block">
        <UCarousel v-slot="{ item }" :items="images" dots>
          <NuxtImg :src="item" sizes="200px lg:300px" class="mx-auto" />
        </UCarousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title?: string, images?: string[], slug?: string }>()
</script>
