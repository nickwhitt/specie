<template>
  <div class="my-8">
    <ProseH1>Half Dollars</ProseH1>

    <UContainer class="max-w-3xl">
      <ul class="divide-y">
        <li v-for="type in types" class="flex gap-x-6 py-4 items-center justify-between">
          <div class="flex gap-x-4 items-center">
            <UChip color="success" position="bottom-right" size="xl" inset>
              <UAvatar :alt="type.type" size="3xl" />
            </UChip>
            <div>
              <p class="font-bold">{{ type.type }}</p>
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
  </div>
</template>

<script setup lang="ts">
const types = ref([
  { type: 'Flowing Hair', dates: '1794-1795', designers: ['Robert Scot'] },
  { type: 'Draped Bust', dates: '1796-1807', designers: ['Robert Scot'] },
  { type: 'Capped Bust', dates: '1807-1839', designers: ['John Reich', 'Christian Gobrecht'] },
  { type: 'Liberty Seated', dates: '1839-1891', designers: ['Christian Gobrecht'] },
  { type: 'Barber', dates: '1892-1915', designers: ['Charles E. Barber'] },
  { type: 'Liberty Walking', dates: '1916-1947', designers: ['Adolph A. Weinman'] },
  { type: 'Franklin', dates: '1948-1963', designers: ['John R. Sinnock'] },
  { type: 'Kennedy', dates: '1964-date', designers: ['Gilroy Roberts', 'Frank Gasparro', 'Seth Huntington'] },
])
</script>
