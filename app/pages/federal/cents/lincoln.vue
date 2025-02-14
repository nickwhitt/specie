<template>
  <article>
    <UBreadcrumb :items="[
      { label: 'Federal Types', to: '/federal' },
      { label: 'Cents', to: '/federal/cents' },
      { label: 'Lincoln Cents' },
    ]" />

    <ProseH1>Lincoln Cents</ProseH1>

    <TypeDetail title="Wheat Ears Reverse (1909-1958)" slug="wheat-ears" :images="[
      '/cents/lincoln-wheat-obv.webp',
      '/cents/lincoln-wheat-rev.webp',
    ]">
      <ProseP>
        Lincoln Wheat cents designed by Victor D. Brenner debuted in 1909 and were the first circulating U.S. coins to
        picture an actual person. The Wheat Ears reverse ended in 1958, while the obverse portrait has endured as the
        Mint's longest running design. All Wheat cents are struck in bronze except for 1943 issues struck in steel.
      </ProseP>
      <UButtonGroup class="-ms-2.5">
        <TypeSpecifications title="Wheat Cent Specifications" :data="wheatSpecs" />
        <TypeIssues title="Wheat Cent Issues" description="Circulation Strikes" :issues="wheatIssues" />
        <TypeIssues title="Wheat Cent Issues" description="Proof Strikes" type="Proofs" :issues="wheatProofs" />
      </UButtonGroup>
    </TypeDetail>

    <TypeDetail title="Memorial Reverse (1959-2008)" slug="memorial" :images="[]">
      <ProseP>
        In 1959, for the 150th anniversary of Lincoln's birth, the reverse design of the Lincoln cent was changed to
        depict the Lincoln Memorial in Washington, D.C. Memorial cents were struck in a copper alloy until 1982, when
        the composition was changed to copper-plated zinc.
      </ProseP>
      <UButtonGroup class="-ms-2.5">
        <TypeSpecifications title="Memorial Cent Specifications" :data="memorialSpecs" />
        <TypeIssues title="Memorial Cent Issues" description="Circulation Strikes" :issues="memorialIssues" />
        <TypeIssues title="Memorial Cent Issues" description="Proof Strikes" type="Proofs" :issues="memorialProofs" />
      </UButtonGroup>
    </TypeDetail>

    <TypeDetail title="Bicentennial Reverses (2009)" slug="bicentennial" :images="[
      '/cents/lincoln-birth-rev.webp',
      '/cents/lincoln-youth-rev.webp',
      '/cents/lincoln-professional-rev.webp',
      '/cents/lincoln-presidency-rev.webp',
    ]">
      <ProseP>
        In 2009, for the 200th anniversary of Lincoln's birth, four one-year-only reverse designs honoring important
        stages in Abraham Lincoln's life were issued: Birthplace in Kentucky, Formative Years in Indiana, Professional
        Life in Illinois and Presidency in Washington, D.C.
      </ProseP>
      <UButtonGroup class="-ms-2.5">
        <TypeSpecifications title="Bicentennial Cent Specifications" :data="bicentennialSpecs" />
        <TypeIssues title="Bicentennial Cent Issues" description="Circulation Strikes" :issues="bicentennialIssues" />
        <TypeIssues title="Bicentennial Cent Issues" description="Proof Strikes" type="Proofs"
          :issues="bicentennialProofs" />
      </UButtonGroup>
    </TypeDetail>

    <TypeDetail title="Shield Reverse (2010 to date)" slug="shield" :images="[
      '/cents/lincoln-shield-obv.webp',
      '/cents/lincoln-shield-rev.webp',
    ]">
      <ProseP>
        The Lincoln cent received a new ongoing reverse design in 2010 featuring a Union Shield, which was widely used
        during the Civil War era and the Lincoln presidency as a symbol of unity.
      </ProseP>
      <UButtonGroup class="-ms-2.5">
        <TypeSpecifications title="Shield Cent Specifications" :data="shieldSpecs" />
        <TypeIssues title="Shield Cent Issues" description="Circulation Strikes" :issues="shieldIssues" />
        <TypeIssues title="Shield Cent Issues" description="Proof Strikes" type="Proofs" :issues="shieldProofs" />
      </UButtonGroup>
    </TypeDetail>
  </article>
</template>

<script setup lang="ts">
import type { Issue } from '~/components/TypeIssues.vue';
import type { Specifications } from '~/components/TypeSpecifications.vue';

const wheatSpecs = ref<Specifications>({
  designer: 'Victor D. Brenner',
  weight: '3.11 grams // 1943: 2.70 grams',
  composition: 'bronze (.950 copper, .050 tin and zinc) // 1943: zinc-coated steel',
  diameter: '19 mm',
  edge: 'Plain',
})

const memorialSpecs = ref<Specifications>({
  designers: 'Victor D. Brenner (obv), Frank Gasparro (rev)',
  weight: '3.11 grams // 1982-2008: 2.5 grams',
  composition: 'bronze (.950 copper, .050 tin and zinc) // 1982-2008: copper-plated zinc (core: .992 zinc, .008 copper, with a plating of pure copper; total content .975 zinc, .025 copper)',
  diameter: '19 mm',
  edge: 'Plain',
})

const bicentennialSpecs = ref<Specifications>({
  designers: 'Victor D. Brenner (obv), various (revs)',
  weight: '2.5 grams',
  composition: 'copper-plated zinc (core: .992 zinc, .008 copper, with a plating of pure copper; total content .975 zinc, .025 copper)',
  diameter: '19 mm',
  edge: 'Plain',
})

const shieldSpecs = ref<Specifications>({
  designers: 'Victor D. Brenner (obv), Lyndall Bass (rev)',
  weight: '2.5 grams',
  composition: 'copper-plated zinc (core: .992 zinc, .008 copper, with a plating of pure copper; total content .975 zinc, .025 copper)',
  diameter: '19 mm',
  edge: 'Plain',
})

const wheatIssues = ref<Issue[]>([
  { issue: '1909, V.D.B.', mintage: 27995000, variants: ['Doubled Die Obv'] },
  { issue: '1909-S, V.D.B.', mintage: 484000 },
  { issue: '1909', mintage: 72702618 },
  { issue: '1909-S', mintage: 1825000, variants: ['S Over Horiz S'] },
  { issue: '1910', mintage: 146801218 },
  { issue: '1910-S', mintage: 6045000 },
  { issue: '1911', mintage: 101177787 },
  { issue: '1911-D', mintage: 12672000 },
  { issue: '1911-S', mintage: 4026000 },
  { issue: '1912', mintage: 68153060 },
  { issue: '1912-D', mintage: 10411000 },
  { issue: '1912-S', mintage: 4431000 },
])
const wheatProofs = ref<Issue[]>([
  { issue: '1909, V.D.B', mintage: 600, estimate: true },
  { issue: '1909', mintage: 2618 },
  { issue: '1910', mintage: 4118 },
  { issue: '1911', mintage: 1725 },
  { issue: '1912', mintage: 2172 },
])
const memorialIssues = ref<Issue[]>([])
const memorialProofs = ref<Issue[]>([])
const bicentennialIssues = ref<Issue[]>([])
const bicentennialProofs = ref<Issue[]>([])
const shieldIssues = ref<Issue[]>([])
const shieldProofs = ref<Issue[]>([])
</script>
