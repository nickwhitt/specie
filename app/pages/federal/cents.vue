<template>
  <div class="my-8">
    <ProseH1>Cents</ProseH1>
    <TypeList :types="types" />
    <UTable :data="rows" :columns="columns" :loading="status === 'pending'" />
    <div class="flex justify-center lg:justify-end pt-4">
      <UPagination v-model:page="page" :items-per-page="pageCount" :total="data?.length" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import type { Coin } from '~~/server/api/cents';
import formatNumber from '~~/utils/formatNumber';

const types = ref([
  { type: 'Flowing Hair', subtype: 'Chain', dates: '1793', designers: ['Henry Voigt'] },
  { type: 'Flowing Hair', subtype: 'Wreath', dates: '1793', designers: ['Henry Voigt'] },
  { type: 'Liberty Cap', dates: '1794-1796', designers: ['Henry Voigt'] },
  { type: 'Draped Bust', dates: '1796-1807', designers: ['Robert Scot'] },
  { type: 'Classic Head', dates: '1808-1814', designers: ['John Reich'] },
  { type: 'Liberty Head', dates: '1816-1857', designers: ['Robert Scot', 'John Reich', 'Christian Gobrecht'] },
  { type: 'Flying Eagle', dates: '1856-1858', designers: ['James B. Longacre'] },
  { type: 'Indian Head', dates: '1859-1909', designers: ['James B. Longacre'] },
  { type: 'Lincoln', subtype: 'Wheat Ears', dates: '1909-1958', designers: ['Victor D. Brenner'], owned: true },
  { type: 'Lincoln', subtype: 'Memorial', dates: '1959-2008', designers: ['Victor D. Brenner', 'Frank Gasparro'], owned: true },
  { type: 'Lincoln', subtype: 'Bicentennial', dates: '2009', designers: ['Victor D. Brenner', 'multiple others'], owned: true },
  { type: 'Lincoln', subtype: 'Shield', dates: '2010-date', designers: ['Victor D. Brenner', 'Lyndall Bass'], owned: true },
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
