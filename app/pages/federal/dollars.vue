<template>
  <article>
    <ProseH1>Dollars</ProseH1>

    <TypeList :types="types" />
  </article>
</template>

<script setup lang="ts">
import type { CoinType } from '~/components/TypeList.vue';

const types: CoinType[] = [
  { type: 'Flowing Hair', dates: '1794-1795', designers: ['Robert Scot'] },
  { type: 'Draped Bust', dates: '1795-1804', designers: ['Robert Scot'] },
  { type: 'Liberty Seated', dates: '1840-1873', designers: ['Christian Gobrecht'] },
  { type: 'Trade', dates: '1873-1885', designers: ['William Barber'] },
  { type: 'Morgan', dates: '1878-1921', designers: ['George T. Morgan'], owned: true },
  { type: 'Peace', dates: '1921-1935', designers: ['Anthony de Francisci'], owned: true },
  { type: 'Eisenhower', dates: '1971-1978', designers: ['Frank Gasparro', 'Dennis R. Williams'], owned: true },
  { type: 'Susan B. Anthony', dates: '1979-1999', designers: ['Frank Gasparro'], owned: true },
  { type: 'Sacagawea', dates: '2000-2008', designers: ['Glenna Goodacre', 'Thomas D. Rogers Sr.'], owned: true },
  { type: 'Presidential', dates: '2007-2016', designers: ['Don Everhart'], owned: true },
  { type: 'Native American', dates: '2009-date', designers: ['Glenna Goodacre'], owned: true },
  { type: 'American Innovation', dates: '2018-date', designers: ['Justin Kunz'], owned: true },
]
</script>
