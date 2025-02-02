<template>
  <h1 :id="props.id"
    class='text-4xl text-[var(--ui-text-highlighted)] font-bold mb-8 scroll-mt-[calc(45px+var(--ui-header-height))] lg:scroll-mt-[var(--ui-header-height)]'>
    <a v-if="generate" :href="`#${props.id}`" class="inline-flex items-center gap-2">
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h1)))
</script>
