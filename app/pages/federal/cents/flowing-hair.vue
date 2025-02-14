<template>
  <article>
    <UBreadcrumb :items="[
      { label: 'Federal Types', to: '/federal' },
      { label: 'Cents', to: '/federal/cents' },
      { label: 'Flowing Hair Cents' }
    ]" />

    <ProseH1>Flowing Hair Cents</ProseH1>

    <TypeDetail title="Chain Reverse (1793)" slug="chain" :images="[
      '/cents/flowing-hair-chain-obv.webp',
      '/cents/flowing-hair-chain-rev.webp',
    ]">
      <ProseP>
        The reverse features a chain of 15 links representing the United States surrounding the
        legend ONE CENT above the fraction 1/100. The first of several varieties, Sheldon-1,
        has an abreviated legend UNITED STATES OF AMERI. outside the links; later versions have
        the full AMERICA.
      </ProseP>
      <UButtonGroup class="-ms-2.5">
        <TypeSpecifications title="Chain Specifications" :data="chainSpecs" />
        <TypeIssues title="Chain Issues" description="Circulation Strikes" :issues="chainIssues" />
      </UButtonGroup>
    </TypeDetail>

    <TypeDetail title="Wreath Reverse (1793)" slug="wreath" :images="[
      '/cents/flowing-hair-wreath-obv.webp',
      '/cents/flowing-hair-wreath-rev.webp',
    ]">
      <ProseP>
        A modified design featuring a high-relief portrait of Liberty on the obverse, and a laurel
        wreath replacing the chains on the reverse. The fraction 1/100 was moved outside and below
        the wreath, and the legend UNITED STATES OF AMERICA was proportionally centered around a
        beaded border.
      </ProseP>
      <UButtonGroup class="-ms-2.5">
        <TypeSpecifications title="Wreath Specifications" :data="wreathSpecs" />
        <TypeIssues title="Wreath Issues" description="Circulation Strikes" :issues="wreathIssues" />
      </UButtonGroup>
    </TypeDetail>
  </article>
</template>

<script setup lang="ts">
import type { Issue } from '~/components/TypeIssues.vue';
import type { Specifications } from '~/components/TypeSpecifications.vue';

const chainIssues = ref<Issue[]>([
  { issue: '1793', mintage: 36103, variants: ['AMERI.', 'AMERICA, Periods', 'AMERICA, No Periods'] },
])

const chainSpecs = ref<Specifications>({
  designer: 'Henry Voigt',
  weight: '13.48 grams',
  composition: 'pure copper',
  diameter: '26 to 27 mm',
  edge: 'Vine and bars design',
})

const wreathSpecs = ref<Specifications>({
  designer: 'Henry Voigt',
  weight: '13.48 grams',
  composition: 'pure copper',
  diameter: '26 to 28 mm',
  edge: 'Vine and bars design, or lettered ONE HUNDRED FOR A DOLLAR',
})

const wreathIssues = ref<Issue[]>([
  { issue: '1793', mintage: 63353, variants: ['Vine/Bars Edge', 'Lettered Edge', 'Strawberry Leaf'] }
])
</script>
