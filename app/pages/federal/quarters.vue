<template>
  <article>
    <ProseH1>Quarter Dollars</ProseH1>

    <TypeList :types="types" />
  </article>
</template>

<script setup lang="ts">
import type { CoinType } from '~/components/TypeList.vue';

const types: CoinType[] = [
  { type: 'Draped Bust', dates: '1796-1807', designers: ['Gilbert Stuart', 'Robert Scot'] },
  { type: 'Capped Bust', dates: '1815-1838', designers: ['John Reich', 'William Kneass'] },
  { type: 'Liberty Seated', dates: '1838-1891', designers: ['Christian Gobrecht'] },
  { type: 'Barber', dates: '1892-1916', designers: ['Charles E. Barber'] },
  { type: 'Standing Liberty', dates: '1916-1930', designers: ['Hermon A. MacNeil'], owned: true },
  { type: 'Washington', dates: '1930-date', designers: ['John Flanagan', 'William Cousins', 'Laura Gardin Fraser'], owned: true },
]
</script>
