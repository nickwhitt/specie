<template>
  <article>
    <ProseH2>Large Cents</ProseH2>
    <ProseP>
      The first circulation coin to be struck by the United States Mint, the cent has been in
      continual production since its authorization by the Coinage Act of 1792. Copper was
      sourced and purchased directly by the Mint, with all coinage being made for its own
      account. As such, the net difference between the cost of production and the face value
      produced was sole profit of the Mint.
    </ProseP>
    <TypeList :types="largeCents" />

    <ProseH2>Small Cents</ProseH2>
    <ProseP>
      As the price of copper began to rise dramatically in the 1850s, the Mint sought to preserve
      its profit by reducing both the size and composition of the cent. The Mint Act of 1857
      discontinued production of the large and half cents, and introduced the copper-nickel alloy
      of the new small cents. The Act coincidentally boosted American numismatic interest as the
      public sought to collect and preserve the large cents that still circulated.
    </ProseP>
    <TypeList :types="smallCents" />

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
  { type: 'Flowing Hair', slug: '/federal/cents/flowing-hair', dates: '1793', designers: ['Henry Voigt'], image: '/cents/flowing-hair-obv.webp' },
  { type: 'Liberty Cap', dates: '1793-1796', designers: ['Henry Voigt'], image: '/cents/liberty-cap-obv.webp' },
  { type: 'Draped Bust', dates: '1796-1807', designers: ['Robert Scot'], image: '/cents/draped-bust-obv.webp' },
  { type: 'Classic Head', dates: '1808-1814', designers: ['John Reich'], image: '/cents/classic-head-obv.webp' },
  { type: 'Liberty Head', dates: '1816-1857', designers: ['Robert Scot', 'John Reich', 'Christian Gobrecht'], image: '/cents/liberty-head-braided-hair.webp' },
])

const smallCents = ref([
  { type: 'Flying Eagle', dates: '1856-1858', designers: ['James B. Longacre'], image: '/cents/flying-eagle-obv.webp' },
  { type: 'Indian Head', dates: '1859-1909', designers: ['James B. Longacre'], image: '/cents/indian-head-obv.webp' },
  { type: 'Lincoln', slug: '/federal/cents/lincoln', dates: '1909-date', designers: ['Victor D. Brenner', 'Frank Gasparro', 'Lyndall Bass'], image: '/cents/lincoln-wheat-obv.webp', owned: true },
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
