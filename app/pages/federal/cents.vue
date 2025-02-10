<template>
  <article class="my-8">
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

    <ProseH2 id="flowing-hair">Flowing Hair (1793)</ProseH2>

    <ProseH3>Chain Reverse (1793)</ProseH3>
    <div class="flex flex-wrap gap-2">
      <UBadge variant="soft" icon="i-lucide-drafting-compass">Henry Voigt</UBadge>
      <UBadge variant="soft" icon="i-lucide-atom">Copper</UBadge>
      <UBadge variant="soft" icon="i-lucide-weight">13.48 grams</UBadge>
      <UBadge variant="soft" icon="i-lucide-ruler">26 to 28 mm</UBadge>
    </div>
    <div class="grid md:grid-cols-2 md:gap-4">
      <ProseP>
        The reverse features a chain of 15 links representing the United States surrounding the
        legend ONE CENT above the fraction 1/100. The first of several varieties, Sheldon-1,
        has an abreviated legend UNITED STATES OF AMERI. outside the links; later versions have
        the full AMERICA.
      </ProseP>
      <UTable class="h-fit" :data="[{ issue: '1793, Chain Reverse', mintage: 36103 }]" />
    </div>

    <ProseH3>Wreath Reverse (1793)</ProseH3>
    <div class="flex flex-wrap gap-2">
      <UBadge variant="soft" icon="i-lucide-drafting-compass">Henry Voigt</UBadge>
      <UBadge variant="soft" icon="i-lucide-atom">Copper</UBadge>
      <UBadge variant="soft" icon="i-lucide-weight">13.48 grams</UBadge>
      <UBadge variant="soft" icon="i-lucide-ruler">26 to 28 mm</UBadge>
    </div>
    <div class="grid md:grid-cols-2 md:gap-4">
      <ProseP>
        A modified design featuring a high-relief portrait of Liberty on the obverse, and a laurel
        wreath replacing the chains on the reverse. The fraction 1/100 was moved outside and below
        the wreath, and the legend UNITED STATES OF AMERICA was proportionally centered around a
        beaded border.
      </ProseP>
      <UTable class="h-fit" :data="[{ issue: '1793, Wreath Reverse', mintage: 63353 }]" />
    </div>

    <ProseH2 id="liberty-cap">Liberty Cap</ProseH2>

    <ProseH2 id="draped-bust">Draped Bust</ProseH2>

    <ProseH2 id="classic-head">Classic Head</ProseH2>

    <ProseH2 id="liberty-head">Liberty Head</ProseH2>

    <!-- <UTable :data="rows" :columns="columns" :loading="status === 'pending'" />
    <div class="flex justify-center lg:justify-end pt-4">
      <UPagination v-model:page="page" :items-per-page="pageCount" :total="data?.length" />
    </div> -->
  </article>
</template>

<script setup lang="ts">
import { USeparator } from '#components';
import type { TableColumn } from '@nuxt/ui'
import type { Coin } from '~~/server/api/cents';
import formatNumber from '~~/utils/formatNumber';

const largeCents = ref([
  { type: 'Flowing Hair', slug: 'flowing-hair', dates: '1793', designers: ['Henry Voigt'], image: '/cents/flowing-hair-obv.png' },
  { type: 'Liberty Cap', slug: 'liberty-cap', dates: '1793-1796', designers: ['Henry Voigt'], image: 'cents/liberty-cap-obv.png' },
  { type: 'Draped Bust', slug: 'draped-bust', dates: '1796-1807', designers: ['Robert Scot'], image: 'cents/draped-bust-obv.png' },
  { type: 'Classic Head', slug: 'classic-head', dates: '1808-1814', designers: ['John Reich'], image: 'cents/classic-head-obv.png' },
  { type: 'Liberty Head', slug: 'liberty-head', dates: '1816-1857', designers: ['Robert Scot', 'John Reich', 'Christian Gobrecht'], image: 'cents/liberty-head-braided-hair.png' },
])

const smallCents = ref([
  { type: 'Flying Eagle', dates: '1856-1858', designers: ['James B. Longacre'], image: '/cents/flying-eagle-obv.png' },
  { type: 'Indian Head', dates: '1859-1909', designers: ['James B. Longacre'], image: 'cents/indian-head-obv.png' },
  { type: 'Lincoln', dates: '1909-date', designers: ['Victor D. Brenner', 'Frank Gasparro', 'Lyndall Bass'], image: '/cents/lincoln-obv.png', owned: true },
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
