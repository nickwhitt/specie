<template>
  <UModal :title="title" :description="description">
    <UButton variant="link" class="hover:cursor-pointer">{{ type || 'Issues' }}</UButton>
    <template #body>
      <UTable :data="issues" :columns="columns">
        <template #issue-cell="{ row }">
          <div v-if="row.original.owned === true" class="after:ml-0.5 after:content-['√'] after:text-(--ui-success)">
            {{ row.getValue("issue") }}
          </div>
          <div v-else class="flex items-center gap-0.5">
            {{ row.getValue("issue") }}
            <UBadge v-if="row.original.owned" color="success" variant="subtle" size="xs">
              {{ row.original.owned }}
            </UBadge>
          </div>
        </template>
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
  mintage?: number
  estimate?: boolean
  variants?: string[]
  owned?: string | boolean
}

const props = defineProps<{
  title: string,
  type?: string,
  description?: string,
  issues?: Issue[],
}>()

const columns: TableColumn<Issue>[] = [
  { accessorKey: "issue", header: "Issue" },
  { accessorKey: "variants", header: "Varieties", meta: { class: { td: 'whitespace-normal' } } },
  {
    accessorKey: "mintage",
    header: "Mintage",
    cell: ({ row }) => h(
      "div",
      { class: ['text-right', row.original.estimate === true ? "italic after:content-['†']" : 'not-italic'] },
      formatNumber(row.getValue("mintage"))
    ),
  },
]
</script>
