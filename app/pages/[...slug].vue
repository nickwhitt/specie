<template>
  <div class="my-8">
    <ContentRenderer v-if="page" :value="page" :data="data" />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(
  route.path,
  () => queryCollection('content').path(route.path).first()
)
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const data = ref([
  { issue: "1793 Chain Reverse", denomination: "1C", type: 'Flowing Hair', mintage: 36103, engraver: 'Henry Voight' },
  { issue: "1793 Wreath Reverse", denomination: "1C", type: 'Flowing Hair', mintage: 63353, engraver: 'Henry Voight' },
  { issue: "1793", denomination: "1C", type: 'Liberty Cap', mintage: 11056, engraver: 'Henry Voight' },
  { issue: "1794", denomination: "1C", type: 'Liberty Cap', mintage: 918521, engraver: 'Henry Voight' },
])
</script>
