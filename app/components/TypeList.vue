<template>
  <UCard :ui="{ body: 'p-0 sm:p-0' }">
    <ul class="divide-y divide-(--ui-border)">
      <li v-for="type in types"
        class="relative hover:bg-(--ui-bg-muted) flex gap-x-6 py-2 items-center justify-between">
        <div class="flex gap-x-4 items-center">
          <div class="relative flex items-center max-h-16 lg:max-h-20 overflow-hidden">
            <NuxtImg v-if="type.image" :src="type.image" sizes="92px lg:120px" class="-ms-3" />
            <UAvatar v-else :alt="type.type" size="3xl" />
            <span v-if="type.owned" :class="[
              'absolute right-0 top-0 size-2 rounded-full ring ring-(--ui-bg) bg-(--ui-success)',
              type.image ? '-translate-x-3.5' : '-translate-x-1/2 translate-y-1/2'
            ]">
            </span>
          </div>
          <div>
            <p class="font-bold lg:text-lg">
              <NuxtLink :to="type.slug ? type.slug : ''">
                <span class="absolute inset-x-0 -top-px bottom-0" />
                {{ type.type }}
              </NuxtLink>
            </p>
            <p class="text-sm">{{ type.dates }}</p>
          </div>
        </div>
        <div class="flex items-center justify-between gap-4 sm:w-3/7">
          <ul class="hidden sm:block">
            <li v-for="designer in type.designers">
              {{ designer }}
            </li>
          </ul>
          <UButton icon="i-lucide-chevron-right" variant="link" />
        </div>
      </li>
    </ul>
  </UCard>
</template>

<script setup lang="ts">
export interface CoinType {
  type: string
  image?: string
  slug?: string
  dates: string
  designers: string[]
  owned?: boolean
}

const props = defineProps<{ types?: CoinType[] }>()
</script>
