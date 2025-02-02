<template>
  <NuxtRouteAnnouncer />

  <UApp>
    <header class="bg-[var(--ui-bg)]/75 backdrop-blur border-b border-[var(--ui-border)] sticky top-0 z-50">
      <UContainer class="flex items-center justify-between gap-3 h-16">
        <div id="left" class="lg:flex-1 flex items-center gap-1.5">
          <USlideover title="Specie" side="left" class="lg:hidden" v-model:open="open" :ui="{ content: 'max-w-sm' }">
            <UButton icon="i-lucide-menu" color="neutral" variant="ghost" />
            <template #body>
              <UNavigationMenu :items="items" variant="link" highlight orientation="vertical" />
            </template>
          </USlideover>
          <div id="title" class="hidden lg:flex shrink-0 flex items-end gap-1.5">
            <UButton icon="i-heroicons-circle-stack-solid" variant="link" size="xl" to="/">
              <span class="text-[var(--ui-text)]">Specie</span>
            </UButton>
          </div>
        </div>
        <div id="center">
          <UNavigationMenu :items="items" variant="link" highlight class="hidden lg:block" />
          <div id="title" class="lg:hidden shrink-0 flex items-end gap-1.5">
            <UButton icon="i-heroicons-circle-stack-solid" variant="link" size="xl" to="/">
              <span class="text-[var(--ui-text)]">Specie</span>
            </UButton>
          </div>
        </div>
        <div id="right" class="flex items-center justify-end lg:flex-1 gap-1.5">
          <UButton :icon="isDark ? 'i-ph-moon' : 'i-ph-sun'" color="neutral" variant="ghost"
            @click="isDark = !isDark" />
        </div>
      </UContainer>
    </header>

    <main class="min-h-[calc(100vh-var(--ui-header-height))]">
      <NuxtPage />
    </main>

    <UContainer as="footer"></UContainer>
  </UApp>
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
