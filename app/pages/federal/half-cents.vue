<template>
  <article>
    <ProseH1>Half Cents</ProseH1>

    <TypeList :types="types" />
  </article>
</template>

<script setup lang="ts">
import type { CoinType } from '~/components/TypeList.vue'

const types = ref<CoinType[]>([
  { type: 'Liberty Cap', dates: '1793-1797', designers: ['Robert Scot', 'John Smith Gardner'], image: '/half-cents/liberty-cap-obv.webp' },
  { type: 'Draped Bust', dates: '1800-1808', designers: ['Robert Scot'], image: '/half-cents/draped-bust-obv.webp' },
  { type: 'Classic Head', dates: '1809-1836', designers: ['John Reich'], image: '/half-cents/classic-head-obv.webp' },
  { type: 'Braided Hair', dates: '1840-1857', designers: ['Christian Gobrecht'], image: '/half-cents/braided-hair-obv.webp' },
])
</script>
