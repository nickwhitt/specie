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
    label: 'Federal Types',
    defaultOpen: true,
    children: [
      { label: 'Half Cents', to: '/federal/half-cents', description: '1793-1857' },
      { label: 'Cents', to: '/federal/cents', description: '1793-date' },
      { label: 'Two-Cents', to: '/federal/two-cents', description: '1864-1873' },
      { label: 'Three-Cents', to: '/federal/three-cents', description: '1851-1889' },
      { label: 'Nickel Five-Cents', to: '/federal/nickels', description: '1866-date' },
      { label: 'Half Dimes', to: '/federal/half-dimes', description: '1792-1873' },
      { label: 'Dimes', to: '/federal/dimes', description: '1796-date' },
      { label: 'Twenty-Cents', to: '/federal/twenty-cents', description: '1875-1878' },
      { label: 'Quarter Dollars', to: '/federal/quarters', description: '1796-date' },
      { label: 'Half Dollars', to: '/federal/half-dollars', description: '1794-date' },
      { label: 'Dollars', to: '/federal/dollars', description: '1794-date' },
      { label: 'Gold Dollars', to: '/federal/gold-dollars', description: '1849-1889' },
      { label: 'Quarter Eagles', to: '/federal/quarter-eagles', description: '1796-1929' },
      { label: 'Half Eagles', to: '/federal/half-eagles', description: '1795-1929' },
      { label: 'Eagles', to: '/federal/eagles', description: '1795-1933' },
      { label: 'Double Eagles', to: '/federal/double-eagles', description: '1850-1933' },
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
