<template>
  <UContainer class="max-w-3xl">
    <ul class="divide-y">
      <li v-for="type in types" class="flex gap-x-6 py-4 items-center justify-between">
        <div class="flex gap-x-4 items-center">
          <UChip v-if="type.owned" color="success" position="bottom-right" size="xl" inset>
            <UAvatar :alt="type.type" size="3xl" />
          </UChip>
          <UAvatar v-else :alt="type.type" size="3xl" />
          <div>
            <p class="font-bold">
              {{ type.type }}<span v-if="type.subtype">, {{ type.subtype }}</span>
            </p>
            <p class="text-sm">{{ type.dates }}</p>
          </div>
        </div>
        <div class="flex items-center justify-between gap-4 sm:w-1/2">
          <div class="hidden sm:block">
            <p v-for="designer in type.designers">
              {{ designer }}
            </p>
          </div>
          <UButton icon="i-lucide-chevron-right" variant="link" />
        </div>
      </li>
    </ul>
  </UContainer>
</template>

<script setup lang="ts">
interface CoinType {
  type: string
  subtype?: string
  dates: string
  designers: string[]
  owned?: Boolean
}
const props = defineProps<{ types: CoinType[] }>()
</script>
