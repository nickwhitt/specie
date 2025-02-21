<template>
  <article>
    <ProseH1>Dimes</ProseH1>

    <TypeList :types="types" />
  </article>
</template>

<script setup lang="ts">
import type { CoinType } from '~/components/TypeList.vue';

const types: CoinType[] = [
  { type: 'Draped Bust', dates: '1796-1807', designers: ['Gilbert Stuart'] },
  { type: 'Capped Bust', dates: '1809-1837', designers: ['John Reich'] },
  { type: 'Liberty Seated', dates: '1837-1891', designers: ['Christian Gobrecht'] },
  { type: 'Barber', dates: '1892-1916', designers: ['Charles E. Barber'] },
  { type: 'Mercury', dates: '1916-1945', designers: ['Adolph A. Weinman'] },
  { type: 'Roosevelt', dates: '1946-date', designers: ['John R. Sinnock'], owned: true },
]
</script>
