<template>
  <article class="my-8">
    <ProseH2>Cent Overview</ProseH2>
    <ProseP>
      The first circulation coin to be struck by the United States Mint, the cent has been in
      continual production since its authorization by the Coinage Act of 1792. Copper was
      sourced and purchased directly by the Mint, with all coinage being made for its own
      account. As such, the net difference between the cost of production and the face value
      produced was sole profit of the Mint.
    </ProseP>
    <ProseP>
      As the price of copper began to rise dramatically in the 1850s, the Mint sought to preserve
      its profit by reducing both the size and composition of the cent. The Mint Act of 1857
      discontinued production of the large and half cents, and introduced the copper-nickel alloy
      of the new small cents. The Act coincidentally boosted American numismatic interest as the
      public sought to collect and preserve the large cents that still circulated.
    </ProseP>

    <ProseH2>Cent Types</ProseH2>

    <UCard :ui="{ body: 'p-0 sm:p-0', root: 'my-5' }">
      <template #header>
        <p class="text-xl text-(--ui-text-highlighted) font-bold">Large Cents</p>
      </template>
      <TypeList :types="largeCents" />
    </UCard>

    <UCard :ui="{ body: 'p-0 sm:p-0', root: 'my-5' }">
      <template #header>
        <p class="text-xl text-(--ui-text-highlighted) font-bold">Small Cents</p>
      </template>
      <TypeList :types="smallCents" />
    </UCard>
    <!-- <UTable :data="rows" :columns="columns" :loading="status === 'pending'" />
    <div class="flex justify-center lg:justify-end pt-4">
      <UPagination v-model:page="page" :items-per-page="pageCount" :total="data?.length" />
    </div> -->
  </article>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import type { Coin } from '~~/server/api/cents';
import formatNumber from '~~/utils/formatNumber';

const largeCents = ref([
  { type: 'Flowing Hair', dates: '1793', designers: ['Henry Voigt'], image: '/cents/flowing-hair-obv.png' },
  { type: 'Liberty Cap', dates: '1794-1796', designers: ['Henry Voigt'], image: 'cents/liberty-cap-obv.png' },
  { type: 'Draped Bust', dates: '1796-1807', designers: ['Robert Scot'], image: 'cents/draped-bust-obv.png' },
  { type: 'Classic Head', dates: '1808-1814', designers: ['John Reich'], image: 'cents/classic-head-obv.png' },
  { type: 'Liberty Head', dates: '1816-1857', designers: ['Robert Scot', 'John Reich', 'Christian Gobrecht'], image: 'cents/liberty-head-braided-hair.png' },
])

const smallCents = ref([
  { type: 'Flying Eagle', dates: '1856-1858', designers: ['James B. Longacre'] },
  { type: 'Indian Head', dates: '1859-1909', designers: ['James B. Longacre'] },
  { type: 'Lincoln', dates: '1909-date', designers: ['Victor D. Brenner', 'Frank Gasparro', 'Lyndall Bass'], owned: true },
])

const { data, status } = await useFetch('/api/cents')

const page = ref(1)
const pageCount = 10

const rows = computed(() => {
  return data.value?.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})

const columns: TableColumn<Coin>[] = [
  { accessorKey: "issue", header: "Issue" },
  { accessorKey: "type", header: "Type" },
  {
    accessorKey: "mintage",
    header: "Mintage",
    cell: ({ row }) => formatNumber(row.getValue("mintage"))
  },
  {
    accessorKey: "designer",
    header: "designer",
    meta: { class: { th: 'hidden lg:block', td: 'hidden lg:block' } }
  }
]
</script>
