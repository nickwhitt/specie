<template>
  <div class="my-8">
    <ProseH1>Half Cents</ProseH1>

    <TypeList :types="types" />
  </div>
</template>

<script setup lang="ts">
const types = ref([
  { type: 'Liberty Cap', subtype: 'Head Facing Left', dates: '1793', designers: ['Henry Voigt'] },
  { type: 'Liberty Cap', subtype: 'Head Facing Right', dates: '1794-1797', designers: ['Robert Scot', 'John Smith Gardner'] },
  { type: 'Draped Bust', dates: '1800-1808', designers: ['Robert Scot'] },
  { type: 'Classic Head', dates: '1809-1836', designers: ['John Reich'] },
  { type: 'Braided Hair', dates: '1840-1857', designers: ['Christian Gobrecht'] },
])
</script>
