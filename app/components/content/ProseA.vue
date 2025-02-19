<template>
  <NuxtLink :href="props.href" :target="props.target"
    class="text-(--ui-primary) border-b border-transparent hover:border-(--ui-primary) font-medium focus-visible:outline-(--ui-primary) [&>code]:border-dashed hover:[&>code]:border-(--ui-primary) hover:[&>code]:text-(--ui-primary) transition-colors [&>code]:transition-colors">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined>,
    default: undefined,
    required: false
  }
})
</script>
