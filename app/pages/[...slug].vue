<template>
  <article>
    <ContentRenderer v-if="page" :value="page" />
  </article>
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
</script>
