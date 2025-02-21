<template>
  <article>
    <ProseH1>Half Dimes</ProseH1>

    <TypeList :types="types" />
  </article>
</template>

<script setup lang="ts">
import type { CoinType } from '~/components/TypeList.vue';

const types: CoinType[] = [
  { type: 'Flowing Hair', dates: '1794-1795', designers: ['Robert Scot'] },
  { type: 'Draped Bust', dates: '1796-1805', designers: ['Gilbert Stuart'] },
  { type: 'Capped Bust', dates: '1829-1837', designers: ['John Reich'] },
  { type: 'Liberty Seated', dates: '1837-1873', designers: ['Christian Gobrecht'] },
]
</script>
