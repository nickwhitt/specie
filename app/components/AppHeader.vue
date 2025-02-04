<template>
  <header class="bg-[var(--ui-bg)]/25 backdrop-blur border-b border-[var(--ui-border)] sticky top-0 z-50">
    <UContainer class="flex items-center justify-between gap-3 h-[var(--ui-header-height)]">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <USlideover title="Specie" side="left" class="lg:hidden" v-model:open="open" :ui="{ content: 'max-w-sm' }">
          <UButton icon="i-lucide-menu" color="neutral" variant="link" />
          <template #body>
            <UNavigationMenu :items="items" highlight orientation="vertical" />
          </template>
        </USlideover>
        <div class="hidden lg:flex shrink-0 flex items-end gap-1.5">
          <UButton icon="i-heroicons-circle-stack-solid" variant="link" size="xl" to="/">
            <span class="text-[var(--ui-text)]">Specie</span>
          </UButton>
        </div>
      </div>
      <div>
        <UNavigationMenu :items="items" highlight class="hidden lg:block" />
        <div class="lg:hidden shrink-0 flex items-end gap-1.5">
          <UButton icon="i-heroicons-circle-stack-solid" variant="link" size="xl" to="/">
            <span class="text-[var(--ui-text)]">Specie</span>
          </UButton>
        </div>
      </div>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" color="neutral" variant="link"
          @click="isDark = !isDark" />
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const items = [
  {
    label: 'Federal Coinage',
    to: '/federal',
    defaultOpen: true,
    children: [
      { label: 'Half Cents', to: '/federal/half-cents', description: '1793-1857' },
      { label: 'Cents', to: '/federal/cents', description: '1793-date' }
    ],
  },
  { label: 'Commemoratives', to: '/commemoratives' },
  { label: 'Sets', to: '/sets' },
  { label: 'Bullion', to: '/bullion' },
]

const open = ref(false)
watch(() => route.fullPath, () => {
  open.value = false
})
</script>
