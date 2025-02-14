<template>
  <UModal :title="title" :description="description">
    <UButton variant="link">{{ type || 'Issues' }}</UButton>
    <template #body>
      <UTable :data="issues" :columns="columns">
        <template #variants-cell="{ row }">
          <ul>
            <li v-for="variant in row.original.variants">{{ variant }}</li>
          </ul>
        </template>
      </UTable>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';
import formatNumber from '~~/utils/formatNumber';

export interface Issue {
  issue: string
  mintage: number
  estimate?: boolean
  variants?: string[]
}

const props = defineProps<{
  title: string,
  type?: string,
  description?: string,
  issues: Issue[],
}>()

const columns: TableColumn<Issue>[] = [
  { accessorKey: "issue", header: "Issue" },
  { accessorKey: "variants", header: "Variants", meta: { class: { td: 'whitespace-normal' } } },
  {
    accessorKey: "mintage",
    header: "Mintage",
    cell: ({ row }) => h(
      "div",
      { class: ['text-right', row.original.estimate === true ? 'italic' : 'not-italic'] },
      formatNumber(row.getValue("mintage"))
    ),
  },
]
</script>
