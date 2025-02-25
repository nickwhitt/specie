<template>
  <article>
    <ProseH1>Half Cents</ProseH1>

    <TypeList :types="types" />

    <TypeDetail title="Liberty Cap Half Cent" slug="liberty-cap" :images="[
      '/half-cents/liberty-cap-obv.webp',
    ]">
      <ProseP>
        The 1793 Liberty Cap engraved by Henry Voigt and possibly designed by Joseph Wright had Liberty facing left.
        Chief Engraver Robert Scot modified the design in 1794 to enlarge Liberty's head and cap, and turn her to face
        right. Both the obverse and reverse designs of the 1794 coins are in much higher relief than later years, as
        Assistant Engraver John Smith Gardner reduced the size of Liberty's head and flattened much of the design in
        1795. Notable varieites include the "Puctuated Date" of 1795 where a slip of the engraver's tool left what
        appears to be a comma rendering the date 1,795; as well as a missing pole from the engraved die of 1796 causing
        Liberty's cap to appear to float.
      </ProseP>
      <UButtonGroup class="-ms-2.5">
        <TypeSpecifications title="Liberty Cap Half Cent Specifications" :data="{
          designers: 'John Smith Gardner // 1793: Henry Voigt // 1794: Robert Scot',
          weight: '5.44 grams // 1793-1794: 6.74 grams',
          composition: 'copper',
          diameter: 'approx. 22-23.5 mm',
          edge: 'Plain, Gripped, or Lettered: TWO HUNDRED FOR A DOLLAR',
        }" />
        <TypeIssues title="Liberty Cap Half Cent Issues" :issues="libertyCapIssues" />
      </UButtonGroup>
    </TypeDetail>

    <TypeDetail title="Draped Bust Half Cent" slug="draped-bust" :images="[
      '/half-cents/draped-bust-obv.webp',
    ]">
      <ProseP>
        Engraved by Robert Scot from a drawing by Gilbert Stuart, this design had already been in use on both silver
        coinage and large cents since 1796.
      </ProseP>
      <UButtonGroup class="-ms-2.5">
        <TypeSpecifications title="Draped Bust Half Cent Specifications" :data="{
          designer: 'Robert Scot',
          weight: '5.44 grams',
          composition: 'copper',
          diameter: '23.5 mm',
          edge: 'Plain',
        }" />
        <TypeIssues title="Draped Bust Half Cent Issues" :issues="drapedBustIssues" />
      </UButtonGroup>
    </TypeDetail>

    <TypeDetail title="Classic Head Half Cent" slug="classic-head" :images="[
      '/half-cents/classic-head-obv.webp',
    ]">
      <ProseP>
        Following it's first appearance on the cent in 1808, the Classic Head design by John Reich was adapted for the
        half cent in 1809. Sometime in the late 1850s, oportunistic Mint personel sold unofficial restrikes of the 1831
        and 1836 issues using retired dies, but with the invalid reverse designs from later half cent issues. A very low
        number of unofficial 1811 restrikes were produced around the same time by a scrap metal dealer who legally
        purchased worn out dies from the Mint.
      </ProseP>
      <UButtonGroup class="-ms-2.5">
        <TypeSpecifications title="Classic Head Half Cent Specifications" :data="{
          designer: 'John Reich',
          weight: '5.44 grams',
          composition: 'copper',
          diameter: '23.5 mm',
          edge: 'Plain',
        }" />
        <TypeIssues title="Draped Bust Half Cent Issues" :issues="classicHeadIssues" />
        <TypeIssues title="Draped Bust Half Cent Proofs" type="Proofs" :issues="classicHeadProofs" />
      </UButtonGroup>
    </TypeDetail>

    <TypeDetail title="Braided Hair Half Cent" slug="braided-hair" :images="[
      '/half-cents/braided-hair-obv.webp',
    ]">
      <ProseP>
      </ProseP>
    </TypeDetail>
  </article>
</template>

<script setup lang="ts">
import type { CoinType } from '~/components/TypeList.vue'

const types = ref<CoinType[]>([
  { type: 'Liberty Cap', slug: '#liberty-cap', dates: '1793-1797', designers: ['Henry Voigt', 'Robert Scot', 'John Smith Gardner'], image: '/half-cents/liberty-cap-obv.webp' },
  { type: 'Draped Bust', slug: '#draped-bust', dates: '1800-1808', designers: ['Robert Scot'], image: '/half-cents/draped-bust-obv.webp' },
  { type: 'Classic Head', slug: '#classic-head', dates: '1809-1836', designers: ['John Reich'], image: '/half-cents/classic-head-obv.webp' },
  { type: 'Braided Hair', slug: '#braided-hair', dates: '1840-1857', designers: ['Christian Gobrecht'], image: '/half-cents/braided-hair-obv.webp' },
])

const { data: libertyCapIssues } = await useFetch('/api/half-cents/liberty-cap-issues')

const { data: drapedBustIssues } = await useFetch('/api/half-cents/draped-bust-issues')

const { data: classicHeadIssues } = await useFetch('/api/half-cents/classic-head-issues')
const { data: classicHeadProofs } = await useFetch('/api/half-cents/classic-head-proofs')
</script>
