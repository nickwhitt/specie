<template>
  <article>
    <ProseH1>Three-Cent Pieces</ProseH1>

    <TypeList :types="types" />
  </article>
</template>

<script setup lang="ts">
import type { CoinType } from '~/components/TypeList.vue';

const types: CoinType[] = [
  { type: 'Silver Three Cent Piece', dates: '1851-1873', designers: ['James B. Longacre'] },
  { type: 'Nickel Three Cent Piece', dates: '1865-1889', designers: ['James B. Longacre'] },
]
</script>
