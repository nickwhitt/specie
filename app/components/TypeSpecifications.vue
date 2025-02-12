<template>
  <UModal :title="title">
    <UButton variant="link">Specifications</UButton>
    <template #body>
      <dl class="divide-y divide-(--ui-border)">
        <div class="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" v-for="definition, term in data">
          <dt class="text-sm/6 font-medium text-(--ui-text-highlighted) capitalize">{{ term }}</dt>
          <dd class="mt-1 text-sm/6 sm:col-span-2 sm:mt-0">{{ definition }}</dd>
        </div>
      </dl>
    </template>
    <template v-if="notes" #footer>{{ notes }}</template>
  </UModal>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string,
  data: {
    designer?: string,
    designers?: string,
    weight: string,
    composition: string,
    diameter: string,
    edge?: string,
  },
  notes?: string
}>()
</script>
