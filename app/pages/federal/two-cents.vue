<template>
  <article>
    <ProseH1>Two-Cent Pieces</ProseH1>

    <TypeDetail title="Shield Two-Cent Piece" slug="shield" :images="[
      '/two-cents/shield-obv.webp',
      '/two-cents/shield-rev.webp',
    ]">
      <ProseP>
        Intended to help small change circulate, this single-type denomination was quickly made redundant
        by the nickel three-cent piece released in 1865, followed by the nickel five-cent piece in 1866.
      </ProseP>
      <UButtonGroup class="-ms-2.5">
        <TypeSpecifications title="Two-Cent Specifications" :data="{
          designer: 'James B. Longacre',
          weight: '6.22 grams',
          composition: 'bronze (.950 copper, .050 tin and zinc)',
          diameter: '23 mm',
          edge: 'Plain',
        }" />
        <TypeIssues title="Two-Cent Issues" description="Circulation Strikes" :issues="issues" />
        <TypeIssues title="Two-Cent Issues" description="Proof Strikes" type="Proofs" :issues="proofs" />
      </UButtonGroup>
    </TypeDetail>
  </article>
</template>

<script setup lang="ts">
import type { Issue } from '~/components/TypeIssues.vue';

const issues = ref<Issue[]>([
  { issue: '1864', mintage: 19822500, variants: ['Large Motto', 'Small Motto'] },
  { issue: '1865', mintage: 13640000 },
  { issue: '1866', mintage: 3177000 },
  { issue: '1867', mintage: 2938750, variants: ['Double Die Obverse'] },
  { issue: '1868', mintage: 2803750 },
  { issue: '1869', mintage: 1546500, variants: ['Double Die Obverse'] },
  { issue: '1870', mintage: 861250 },
  { issue: '1871', mintage: 721250 },
  { issue: '1872', mintage: 65000 },
])

const proofs = ref<Issue[]>([
  { issue: '1864', mintage: 100, estimate: true, variants: ['Large Motto', 'Small Motto'] },
  { issue: '1865', mintage: 500, estimate: true },
  { issue: '1866', mintage: 725, estimate: true },
  { issue: '1867', mintage: 625, estimate: true },
  { issue: '1868', mintage: 600, estimate: true },
  { issue: '1869', mintage: 600, estimate: true },
  { issue: '1870', mintage: 1000, estimate: true },
  { issue: '1871', mintage: 960, estimate: true },
  { issue: '1872', mintage: 950, estimate: true },
  { issue: '1873', mintage: 600, estimate: true, variants: ['Close 3', 'Open 3'] },
])
</script>
