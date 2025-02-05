<template>
  <div class="my-8">
    <ProseH1>Cents</ProseH1>
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
