<template>
  <article>
    <ProseH1>Cents</ProseH1>
    <TypeList :types="types" />
    <ProseP>
      The first circulation coin to be struck by the United States Mint, the cent has been in
      continual production since its authorization by the Coinage Act of 1792. Originally specified
      to a weight of 264 grains (17.11 grams) of pure copper, this was changed to 208 grains (13.48
      grams) by the Act of January 14, 1793 (prior to any coinage actually being struck) in response
      to rising copper prices. At this standard weight, copper specie was produced at approximately
      34 cent pieces per avoirdupois pound. Within 3 years, however, primarily due to the French
      Revolution, a proclomation by President Washington was necessary to reduce the standard to
      168 grains (10.89 grams); allowing coinage of aproximately 42 cent pieces per avoirdupois
      pound.
    </ProseP>
    <ProseP>
      The early Mint had a rather important need for economical production of copper coinage.
      Unlike silver and gold specie, copper bullion was not permitted for free coinage by
      depositors. Instead, the Mint itself sourced copper from a bullion fund established by the
      Treasury. The difference in net cost between coinage and the face value of the coins produced
      was profit of the Mint&mdash;if production cost for 50,000 copper cents was $450, a profit of $50
      was received by the Mint.
    </ProseP>
    <article>
      <ProseH2 id="flowing-hair">Flowing Hair (1793)</ProseH2>

      <TypeDetail :images="[
        '/cents/flowing-hair-chain-obv.webp',
        '/cents/flowing-hair-chain-rev.webp',
      ]">
        <template #title>
          <ProseH3 id="chain">Chain Reverse</ProseH3>
        </template>
        <ProseP>
          The reverse features a chain of 15 links representing the United States surrounding the
          legend ONE CENT above the fraction 1/100. The first of several varieties, Sheldon-1
          has an abreviated legend UNITED STATES OF AMERI. outside the links; later versions have
          the full AMERICA.
        </ProseP>
        <UButtonGroup class="-ms-2.5">
          <TypeSpecifications title="Flowing Hair, Chain Specifications" :data="{
            designer: 'Henry Voigt',
            weight: '13.48 grams',
            composition: 'pure copper',
            diameter: '26 to 27 mm',
            edge: 'Vine and bars design',
          }" />
          <TypeIssues title="Flowing Hair, Chain Issues" description="Circulation Strikes" :issues="chainIssues" />
        </UButtonGroup>
      </TypeDetail>

      <TypeDetail :images="[
        '/cents/flowing-hair-wreath-obv.webp',
        '/cents/flowing-hair-wreath-rev.webp',
      ]">
        <template #title>
          <ProseH3 id="wreath">Wreath Reverse</ProseH3>
        </template>
        <ProseP>
          A modified design featuring a high-relief portrait of Liberty on the obverse, and a laurel
          wreath replacing the chains on the reverse. The fraction 1/100 was moved outside and below
          the wreath, and the legend UNITED STATES OF AMERICA was proportionally centered around a
          beaded border.
        </ProseP>
        <UButtonGroup class="-ms-2.5">
          <TypeSpecifications title="Flowing Hair, Wreath Specifications" :data="{
            designer: 'Henry Voigt',
            weight: '13.48 grams',
            composition: 'pure copper',
            diameter: '26 to 28 mm',
            edge: 'Vine and bars design, or lettered ONE HUNDRED FOR A DOLLAR',
          }" />
          <TypeIssues title="Flowing Hair, Wreath Issues" description="Circulation Strikes" :issues="wreathIssues" />
        </UButtonGroup>
      </TypeDetail>
    </article>
    <article>
      <ProseH2 id="liberty-head">Liberty Head Cents (1816-1857)</ProseH2>
      <TypeDetail :images="[
        '/cents/liberty-head-coronet-head-obv.webp',
        '/cents/liberty-head-coronet-head-rev.webp',
      ]">
        <template #title>
          <ProseH3 id="matron-head">Matron or Coronet Head (1816-1839)</ProseH3>
        </template>
        <ProseP>
          After the War of 1812, the Mint introduced an updated obverse design of Liberty
          with a coronet replacing the previous fillet-style headband. Chief Engraver Robert
          Scot's design, while commonly referred to as the Coronet Head, was derided for
          Liberty's "matronly" appearance. Late series issues consist of multiple obverse
          varieties, as engraver Christian Gobrecht experimented with various "Young Head"
          designs.
        </ProseP>
        <UButtonGroup class="-ms-2.5">
          <TypeSpecifications title="Liberty Head, Matron Head Specifications" :data="{
            designer: 'Robert Scot // 1835-1839: Christian Gobrecht',
            weight: '10.89 grams',
            composition: 'pure copper',
            diameter: '28 to 29 mm // 1835-1839: 27.5 mm',
            edge: 'Plain',
          }" />
          <TypeIssues title="Liberty Head, Matron Head Issues" description="Circulation Strikes"
            :issues="matronHeadIssues" />
          <TypeIssues title="Liberty Head, Matron Head Issues" type="Proofs" description="Proof Strikes"
            :issues="matronHeadProofs" />
        </UButtonGroup>
      </TypeDetail>
      <TypeDetail :images="[
        '/cents/liberty-head-braided-hair-obv.webp',
        '/cents/liberty-head-braided-hair-rev.webp',
      ]">
        <template #title>
          <ProseH3 id="braided-hair">Braided Hair (1839-1857)</ProseH3>
        </template>
        <ProseP>
          With the advent of steam powered production in 1836, the Coronet Head design was
          deemed necessary to update for mass coinage. Based on a similar design to that of
          the half eagle, Christian Gobrecht's Braided Hair design was produced in vast
          quantites and varieties; including the "overdate" date-punch errors of 1844 and
          1851 which each have the date punched upside down.
        </ProseP>
        <UButtonGroup class="-ms-2.5">
          <TypeSpecifications title="Liberty Head, Braided Hair Specifications" :data="{
            designer: 'Christian Gobrecht',
            weight: '10.89 grams',
            composition: 'pure copper',
            diameter: '27.5 mm',
            edge: 'Plain',
          }" />
          <TypeIssues title="Liberty Head, Braided Hair Issues" description="Circulation Strikes"
            :issues="braidedHairIssues" />
          <TypeIssues title="Liberty Head, Braided Hair Issues" type="Proofs" description="Proof Strikes"
            :issues="braidedHairProofs" />
        </UButtonGroup>
      </TypeDetail>
    </article>

    <article>
      <ProseH2 id="lincoln">Lincoln Cents (1909-date)</ProseH2>

      <TypeDetail :images="[
        '/cents/lincoln-wheat-obv.webp',
        '/cents/lincoln-wheat-rev.webp',
      ]">
        <template #title>
          <ProseH3 id="wheat-ears">Wheat Ears Reverse (1909-1958)</ProseH3>
        </template>
        <ProseP>
          Lincoln Wheat cents designed by Victor D. Brenner debuted in 1909 and were the first circulating U.S. coins to
          picture an actual person. The Wheat Ears reverse ended in 1958, while the obverse portrait has endured as the
          Mint's longest running design. All Wheat cents are struck in bronze except for 1943 issues struck in steel.
        </ProseP>
        <UButtonGroup class="-ms-2.5">
          <TypeSpecifications title="Lincoln, Wheat Cent Specifications" :data="{
            designer: 'Victor D. Brenner',
            weight: '3.11 grams // 1943: 2.70 grams',
            composition: 'bronze (.950 copper, .050 tin and zinc) // 1943: zinc-coated steel',
            diameter: '19 mm',
            edge: 'Plain',
          }" />
          <TypeIssues title="Lincoln, Wheat Cent Issues" description="Circulation Strikes" :issues="wheatIssues" />
          <TypeIssues title="Lincoln, Wheat Cent Issues" description="Proof Strikes" type="Proofs"
            :issues="wheatProofs" />
        </UButtonGroup>
      </TypeDetail>

      <TypeDetail :images="[
        '/cents/lincoln-memorial-obv.webp',
        '/cents/lincoln-memorial-rev.webp',
      ]">
        <template #title>
          <ProseH3 id="memorial">Memorial Reverse (1959-2008)</ProseH3>
        </template>
        <ProseP>
          In 1959, for the 150th anniversary of Lincoln's birth, the reverse design of the Lincoln cent was changed to
          depict the Lincoln Memorial in Washington, D.C. Memorial cents were struck in a copper alloy until 1982, when
          the composition was changed to copper-plated zinc.
        </ProseP>
        <UButtonGroup class="-ms-2.5">
          <TypeSpecifications title="Lincoln, Memorial Cent Specifications" :data="{
            designers: 'Victor D. Brenner (obv), Frank Gasparro (rev)',
            weight: '3.11 grams // 1982-2008: 2.5 grams',
            composition: 'bronze (.950 copper, .050 tin and zinc) // 1982-2008: copper-plated zinc (core: .992 zinc, .008 copper, with a plating of pure copper; total content .975 zinc, .025 copper)',
            diameter: '19 mm',
            edge: 'Plain',
          }" />
          <TypeIssues title="Lincoln, Memorial Cent Issues" description="Circulation Strikes"
            :issues="memorialIssues" />
          <TypeIssues title="Lincoln, Memorial Cent Issues" description="Proof Strikes" type="Proofs"
            :issues="memorialProofs" />
        </UButtonGroup>
      </TypeDetail>

      <TypeDetail :images="[
        '/cents/lincoln-birth-rev.webp',
        '/cents/lincoln-youth-rev.webp',
        '/cents/lincoln-professional-rev.webp',
        '/cents/lincoln-presidency-rev.webp',
      ]">
        <template #title>
          <ProseH3 id="bicentennial">Bicentennial Reverses (2009)</ProseH3>
        </template>
        <ProseP>
          In 2009, for the 200th anniversary of Lincoln's birth, four one-year-only reverse designs honoring important
          stages in Abraham Lincoln's life were issued: Birthplace in Kentucky, Formative Years in Indiana, Professional
          Life in Illinois and Presidency in Washington, D.C.
        </ProseP>
        <UButtonGroup class="-ms-2.5">
          <TypeSpecifications title="Lincoln, Bicentennial Cent Specifications" :data="{
            designers: 'Victor D. Brenner (obv), various (revs)',
            weight: '2.5 grams',
            composition: 'copper-plated zinc (core: .992 zinc, .008 copper, with a plating of pure copper; total content .975 zinc, .025 copper)',
            diameter: '19 mm',
            edge: 'Plain',
          }" />
          <TypeIssues title="Lincoln, Bicentennial Cent Issues" description="Circulation Strikes"
            :issues="bicentennialIssues" />
          <TypeIssues title="Lincoln, Bicentennial Cent Issues" description="Proof Strikes" type="Proofs"
            :issues="bicentennialProofs" />
        </UButtonGroup>
      </TypeDetail>

      <TypeDetail :images="[
        '/cents/lincoln-shield-obv.webp',
        '/cents/lincoln-shield-rev.webp',
      ]">
        <template #title>
          <ProseH3 id="shield">Shield Reverse (2010-date)</ProseH3>
        </template>
        <ProseP>
          The Lincoln cent received a new ongoing reverse design in 2010 featuring a Union Shield, which was widely used
          during the Civil War era and the Lincoln presidency as a symbol of unity.
        </ProseP>
        <UButtonGroup class="-ms-2.5">
          <TypeSpecifications title="Lincoln, Shield Cent Specifications" :data="{
            designers: 'Victor D. Brenner (obv), Lyndall Bass (rev)',
            weight: '2.5 grams',
            composition: 'copper-plated zinc (core: .992 zinc, .008 copper, with a plating of pure copper; total content .975 zinc, .025 copper)',
            diameter: '19 mm',
            edge: 'Plain',
          }" />
          <TypeIssues title="Lincoln, Shield Cent Issues" description="Circulation Strikes" :issues="shieldIssues" />
          <TypeIssues title="Lincoln, Shield Cent Issues" description="Proof Strikes" type="Proofs"
            :issues="shieldProofs" />
        </UButtonGroup>
      </TypeDetail>
    </article>
  </article>
</template>

<script setup lang="ts">
import type { Issue } from '~/components/TypeIssues.vue';

const { data: types } = await useFetch('/api/cents/types')

const chainIssues = ref<Issue[]>([
  { issue: '1793', mintage: 36103, variants: ['AMERI.', 'AMERICA, Periods', 'AMERICA, No Periods'] },
])

const wreathIssues = ref<Issue[]>([
  { issue: '1793', mintage: 63353, variants: ['Vine/Bars Edge', 'Lettered Edge', 'Strawberry Leaf'] }
])

const { data: matronHeadIssues } = await useFetch('/api/cents/matron-head-issues')
const { data: matronHeadProofs } = await useFetch('/api/cents/matron-head-proofs')

const { data: braidedHairIssues } = await useFetch('/api/cents/braided-hair-issues')
const { data: braidedHairProofs } = await useFetch('/api/cents/braided-hair-proofs')

const { data: wheatIssues } = await useFetch('/api/cents/lincoln-wheat-issues')
const { data: wheatProofs } = await useFetch('/api/cents/lincoln-wheat-proofs')

const { data: memorialIssues } = await useFetch('/api/cents/lincoln-memorial-issues')
const { data: memorialProofs } = await useFetch('/api/cents/lincoln-memorial-proofs')

const { data: bicentennialIssues } = await useFetch('/api/cents/lincoln-bicentennial-issues')
const { data: bicentennialProofs } = await useFetch('/api/cents/lincoln-bicentennial-proofs')

const { data: shieldIssues } = await useFetch('/api/cents/lincoln-shield-issues')
const { data: shieldProofs } = await useFetch('/api/cents/lincoln-shield-proofs')
</script>
