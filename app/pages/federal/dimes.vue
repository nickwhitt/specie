<template>
  <article>
    <ProseH1>Dimes</ProseH1>

    <TypeList :types="types" />
  </article>
</template>

<script setup lang="ts">
import type { CoinType } from '~/components/TypeList.vue';

const types: CoinType[] = [
  { type: 'Draped Bust', dates: '1796-1807', designers: ['Gilbert Stuart'], image: '/dimes/draped-bust-obv.webp' },
  { type: 'Capped Bust', dates: '1809-1837', designers: ['John Reich'], image: '/dimes/capped-bust-obv.webp' },
  { type: 'Liberty Seated', dates: '1837-1891', designers: ['Christian Gobrecht'], image: '/dimes/liberty-seated-obv.webp' },
  { type: 'Barber', dates: '1892-1916', designers: ['Charles E. Barber'], image: '/dimes/barber-obv.webp', owned: true },
  { type: 'Mercury', dates: '1916-1945', designers: ['Adolph A. Weinman'], image: '/dimes/mercury-obv.webp', owned: true },
  { type: 'Roosevelt', dates: '1946-date', designers: ['John R. Sinnock'], image: '/dimes/roosevelt-obv.webp', owned: true },
]
</script>
