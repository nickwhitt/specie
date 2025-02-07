<template>
  <div class="my-8">
    <ProseH1>Half Dollars</ProseH1>

    <TypeList :types="types" />
  </div>
</template>

<script setup lang="ts">
const types = ref([
  { type: 'Flowing Hair', dates: '1794-1795', designers: ['Robert Scot'] },
  { type: 'Draped Bust', dates: '1796-1807', designers: ['Robert Scot'] },
  { type: 'Capped Bust', dates: '1807-1839', designers: ['John Reich', 'Christian Gobrecht'] },
  { type: 'Liberty Seated', dates: '1839-1891', designers: ['Christian Gobrecht', 'James B. Longacre'] },
  { type: 'Barber', dates: '1892-1915', designers: ['Charles E. Barber'] },
  { type: 'Liberty Walking', dates: '1916-1947', designers: ['Adolph A. Weinman'], owned: true },
  { type: 'Franklin', dates: '1948-1963', designers: ['John R. Sinnock'], owned: true },
  { type: 'Kennedy', dates: '1964-date', designers: ['Gilroy Roberts', 'Frank Gasparro'], owned: true },
  { type: 'Kennedy', subtype: 'Bicentennial', dates: '1976', designers: ['Gilroy Roberts', 'Seth Huntington'], owned: true },
])
</script>
