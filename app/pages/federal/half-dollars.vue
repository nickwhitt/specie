<template>
  <article>
    <ProseH1>Half Dollars</ProseH1>

    <TypeList :types="types" />
  </article>
</template>

<script setup lang="ts">
import type { CoinType } from '~/components/TypeList.vue'

const types = ref<CoinType[]>([
  { type: 'Flowing Hair', dates: '1794-1795', designers: ['Robert Scot'], image: '/half-dollars/flowing-hair-obv.webp' },
  { type: 'Draped Bust', dates: '1796-1807', designers: ['Robert Scot'], image: '/half-dollars/draped-bust-obv.webp' },
  { type: 'Capped Bust', dates: '1807-1839', designers: ['John Reich', 'Christian Gobrecht'], image: '/half-dollars/capped-bust-obv.webp' },
  { type: 'Liberty Seated', dates: '1839-1891', designers: ['Christian Gobrecht', 'James B. Longacre'], image: '/half-dollars/liberty-seated-obv.webp' },
  { type: 'Barber', dates: '1892-1915', designers: ['Charles E. Barber'], image: '/half-dollars/barber-obv.webp' },
  { type: 'Liberty Walking', dates: '1916-1947', designers: ['Adolph A. Weinman'], image: '/half-dollars/liberty-walking-obv.webp', owned: true },
  { type: 'Franklin', dates: '1948-1963', designers: ['John R. Sinnock'], image: '/half-dollars/franklin-obv.webp', owned: true },
  { type: 'Kennedy', dates: '1964-date', designers: ['Gilroy Roberts', 'Frank Gasparro', 'Seth Huntington'], image: '/half-dollars/kennedy-obv.webp', owned: true },
])
</script>
