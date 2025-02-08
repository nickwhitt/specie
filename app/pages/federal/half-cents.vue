<template>
  <div class="my-8">
    <ProseH1>Half Cents</ProseH1>

    <TypeList :types="types" />
  </div>
</template>

<script setup lang="ts">
const types = ref([
  { type: 'Liberty Cap', dates: '1793-1797', designers: ['Robert Scot', 'John Smith Gardner'], image: 'half-cents/liberty-cap-obv.png' },
  { type: 'Draped Bust', dates: '1800-1808', designers: ['Robert Scot'], image: 'half-cents/draped-bust-obv.png' },
  { type: 'Classic Head', dates: '1809-1836', designers: ['John Reich'], image: 'half-cents/classic-head-obv.png' },
  { type: 'Braided Hair', dates: '1840-1857', designers: ['Christian Gobrecht'], image: 'half-cents/braided-hair-obv.png' },
])
</script>
