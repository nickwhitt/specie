<template>
  <article>
    <ProseH1>Quarter Dollars</ProseH1>

    <TypeList :types="types" />

    <TypeDetail title="Washington (1930-date)" slug="washington" :images="[
      '/quarters/washington-obv.webp',
      '/quarters/washington-rev.webp',
      '/quarters/washington-bicentennial-obv.webp',
      '/quarters/washington-bicentennial-rev.webp',
    ]">
      <ProseP>
        First struck in 1932 and designed by John Flanagan, the Washington quarter was struck in 90%
        silver until 1964. Since 1965, it has been struck as a cupronickel outer layer clad to a core
        of pure copper. For America's Bicentennial, it was given a special Colonial Drummer reverse
        and dual-dated 1776-1976.
      </ProseP>
    </TypeDetail>

    <TypeDetail :images="[
      '/quarters/washington-state-obv.webp',
      '/quarters/washington-state-rev-maine.webp',
    ]">
      <template #title>
        <ProseH3>50 State Quarters (1999-2009)</ProseH3>
      </template>
    </TypeDetail>

    <TypeDetail :images="[
      '/quarters/washington-atb-obv.webp',
      '/quarters/washington-atb-rev-voyageurs.webp',
    ]">
      <template #title>
        <ProseH3>America the Beautiful (2010-2021)</ProseH3>
      </template>
    </TypeDetail>

    <TypeDetail :images="[
      '/quarters/washington-awq-obv.webp',
      '/quarters/washington-awq-rev-vera-rubin.webp',
    ]">
      <template #title>
        <ProseH3>American Women (2022-2025)</ProseH3>
      </template>
    </TypeDetail>
  </article>
</template>

<script setup lang="ts">
import type { CoinType } from '~/components/TypeList.vue';

const types: CoinType[] = [
  { type: 'Draped Bust', dates: '1796-1807', designers: ['Gilbert Stuart', 'Robert Scot'], image: '/quarters/draped-bust-obv.webp' },
  { type: 'Capped Bust', dates: '1815-1838', designers: ['John Reich', 'William Kneass'], image: '/quarters/capped-bust-obv.webp' },
  { type: 'Liberty Seated', dates: '1838-1891', designers: ['Christian Gobrecht'], image: '/quarters/liberty-seated-obv.webp' },
  { type: 'Barber', dates: '1892-1916', designers: ['Charles E. Barber'], image: '/quarters/barber-obv.webp' },
  { type: 'Standing Liberty', dates: '1916-1930', designers: ['Hermon A. MacNeil'], image: '/quarters/standing-liberty-obv.webp', owned: true },
  { type: 'Washington', slug: '#washington', dates: '1930-date', designers: ['John Flanagan', 'William Cousins', 'Laura Gardin Fraser'], image: '/quarters/washington-obv.webp', owned: true },
]
</script>
