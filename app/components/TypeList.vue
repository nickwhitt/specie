<template>
  <div class="max-w-3xl">
    <ul class="divide-y divide-(--ui-border)">
      <li v-for="type in types" class="flex gap-x-6 py-2 items-center justify-between">
        <div class="flex gap-x-4 items-center">
          <div class="relative flex items-center max-h-16 overflow-hidden">
            <NuxtImg v-if="type.image" :src="type.image" sizes="92px" class="-ms-3" />
            <UAvatar v-else :alt="type.type" size="3xl" />
            <span v-if="type.owned" :class="[
              'absolute right-0 top-0 size-2 rounded-full ring ring-(--ui-bg) bg-(--ui-success)',
              type.image ? '-translate-x-3.5' : '-translate-x-1/2 translate-y-1/2'
            ]">
            </span>
          </div>
          <div>
            <p class="font-bold">
              {{ type.type }}<span v-if="type.subtype">, {{ type.subtype }}</span>
            </p>
            <p class="text-sm">{{ type.dates }}</p>
          </div>
        </div>
        <div class="flex items-center justify-between gap-4 sm:w-3/7">
          <div class="hidden sm:block">
            <p v-for="designer in type.designers">
              {{ designer }}
            </p>
          </div>
          <UButton icon="i-lucide-chevron-right" variant="link" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface CoinType {
  type: string
  image?: string
  subtype?: string
  dates: string
  designers: string[]
  owned?: Boolean
}
const props = defineProps<{ types: CoinType[] }>()
</script>
