<template>
  <header class="bg-[var(--ui-bg)]/25 backdrop-blur border-b border-[var(--ui-border)] sticky top-0 z-50">
    <UContainer class="flex items-center justify-between gap-3 h-[var(--ui-header-height)]">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <USlideover title="Specie" side="left" class="lg:hidden" v-model:open="open" :ui="{ content: 'max-w-sm' }">
          <UButton icon="i-lucide-menu" color="neutral" variant="link" />
          <template #body>
            <UNavigationMenu :items="items" variant="link" highlight orientation="vertical" />
          </template>
        </USlideover>
        <div class="hidden lg:flex shrink-0 flex items-end gap-1.5">
          <UButton icon="i-heroicons-circle-stack-solid" variant="link" size="xl" to="/">
            <span class="text-[var(--ui-text)]">Specie</span>
          </UButton>
        </div>
      </div>
      <div>
        <UNavigationMenu :items="items" variant="link" highlight class="hidden lg:block" />
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

const { data } = await useAsyncData(
  'navigation',
  () => queryCollectionNavigation('content').where('path', '<>', '/')
)

const items = computed(
  () => data.value?.map(page => ({ label: page.title, to: page.path }))
)

const open = ref(false)
watch(() => route.fullPath, () => {
  open.value = false
})
</script>
