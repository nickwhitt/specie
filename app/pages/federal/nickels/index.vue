<template>
  <article>
    <ProseH1>Nickel Five-Cent Pieces</ProseH1>
    <ProseP>
      Introduced in 1866 as a way to combat hoarding and melting of silver coins, the nickel five-cent piece proved
      popular with the public and commerce.
    </ProseP>

    <TypeList :types="types" />

    <TypeDetail title="Shield (1866-1883)" slug="shield" :images="[
      '/nickels/shield-obv.webp',
      '/nickels/shield-rev.webp',
      '/nickels/shield-rays-rev.webp',
    ]">
      <ProseP>
        Similar to the two-cent piece also designed by James B. Longacre, the obverse features a Union Shield with the
        motto IN GOD WE TRUST. The reverse originally had rays between each of the 13 stars, but striking issues
        resulted in the rays being removed in early 1867. Only Proofs were coined in 1877 and 1878.
      </ProseP>

      <UButtonGroup class="-ms-2.5">
        <TypeSpecifications title="Shield Nickel Specifications" :data="{
          designer: 'James B. Longacre',
          weight: '5 grams',
          composition: 'cupronickel (.750 copper, .250 nickel)',
          diameter: '20.5 mm',
          edge: 'Plain',
        }" />
        <TypeIssues title="Shield Nickel Issues" description="Circulation Strikes" :issues="shieldIssues" />
        <TypeIssues title="Shield Nickel Issues" description="Proof Strikes" type="Proofs" :issues="shieldProofs" />
      </UButtonGroup>
    </TypeDetail>

    <TypeDetail title="Liberty Head (1883-1913)" slug="liberty-head" :images="[
      '/nickels/liberty-head-obv.webp',
      '/nickels/liberty-head-rev.webp',
      '/nickels/liberty-head-no-cents-rev.webp',
    ]">
      <ProseP>
        Designed by Charles Barber, the first nickels of 1883 carried no statement of value, only a large Roman numeral
        V on the reverse. A common ruse of the time was to plate the "No Cents" variety in gold and attempt to pass it
        off as a five-dollar Half Eagle. The legend CENTS was added later the same year.
      </ProseP>
      <UButtonGroup class="-ms-2.5">
        <TypeSpecifications title="Liberty Head Nickel Specifications" :data="{
          designer: 'Charles E. Barber',
          weight: '5 grams',
          composition: 'cupronickel (.750 copper, .250 nickel)',
          diameter: '21.2 mm',
          edge: 'Plain',
        }" />
        <TypeIssues title="Liberty Head Nickel Issues" description="Circulation Strikes" :issues="libertyHeadIssues" />
        <TypeIssues title="Liberty Head Nickel Issues" description="Proof Strikes" type="Proofs"
          :issues="libertyHeadProofs" />
      </UButtonGroup>
    </TypeDetail>

    <TypeDetail title="Indian Head or Buffalo (1913-1938)" slug="buffalo" :images="[
      '/nickels/buffalo-obv.webp',
      '/nickels/buffalo-rev.webp',
      '/nickels/buffalo-raised-ground-rev.webp',
    ]">
      <ProseP>
        James Earl Fraser wanted to create a "truly American coin." He chose an Indian chief for the obverse and an
        American bison for the reverse design.
      </ProseP>
      <UButtonGroup class="-ms-2.5">
        <TypeSpecifications title="Buffalo Nickel Specifications" :data="{
          designer: 'James Earle Fraser',
          weight: '5 grams',
          composition: 'cupronickel (.750 copper, .250 nickel)',
          diameter: '21.2 mm',
          edge: 'Plain',
        }" />
        <TypeIssues title="Buffalo Nickel Issues" description="Circulation Strikes" :issues="buffaloIssues" />
        <TypeIssues title="Buffalo Nickel Issues" description="Proof Strikes" type="Proofs" :issues="buffaloProofs" />
      </UButtonGroup>
    </TypeDetail>

    <TypeDetail title="Jefferson (1938-date)" slug="jefferson" :images="[
      '/nickels/jefferson-obv.webp',
      '/nickels/jefferson-rev.webp',
    ]">
      <UButtonGroup class="-ms-2.5">
        <TypeSpecifications title="Jefferson Nickel Specifications" :data="{
          designer: 'Felix Schlag',
          weight: '5 grams',
          composition: 'cupronickel (.750 copper, .250 nickel) // 1942-1945: wartime silver (.350 silver, .560 copper, .090 manganese; net weight .05626 ozt)',
          diameter: '21.2 mm',
          edge: 'Plain',
        }" />
        <TypeIssues title="Jefferson Nickel Issues" description="Circulation Strikes" :issues="jeffersonIssues" />
        <TypeIssues title="Jefferson Nickel Issues" description="Proof Strikes" type="Proofs"
          :issues="jeffersonProofs" />
      </UButtonGroup>
    </TypeDetail>

    <TypeDetail :images="[
      '/nickels/jefferson-keelboat.webp',
      '/nickels/jefferson-louisiana-purchase.webp',
      '/nickels/jefferson-american-bison.webp',
      '/nickels/jefferson-ocean-in-view.webp',
      '/nickels/jefferson-2005-obv.webp',
    ]">
      <template #title>
        <ProseH3 id="westward-journey">Westward Journey</ProseH3>
      </template>
      <ProseP>
        Four commemorative issues released over two years for the bicentennial of the Louisiana Purchase and the Lewis
        and Clark expidition: the Peace Medal reverse by Norman E Nemeth and the Keelboat reverse by Al Maletsky were
        released in 2004; the American Bison reverse by Jamie Franki and the Ocean in View reverse by Joe Fitzgerald
        were released in 2005. A single-year obverse was also designed for 2005 by Joe Fitzgerald featuring a close-up
        of the bust of Jefferson.
      </ProseP>
      <UButtonGroup class="-ms-2.5">
        <TypeSpecifications title="Westward Journey Specifications" :data="{
          designer: 'Felix Schlag (2004 obv), Joe Fitzgerald (2005 obv), various revs',
          weight: '5 grams',
          composition: 'cupronickel (.750 copper, .250 nickel)',
          diameter: '21.2 mm',
          edge: 'Plain',
        }" />
        <TypeIssues title="Westward Journey Issues" description="Circulation Strikes" :issues="westwardJourneyIssues" />
        <TypeIssues title="Westward Journey Issues" description="Proof Strikes" type="Proofs"
          :issues="westwardJourneyProofs" />
      </UButtonGroup>
    </TypeDetail>

    <TypeDetail :images="[
      '/nickels/jefferson-modified-obv.webp',
      '/nickels/jefferson-modified-rev.webp',
    ]">
      <template #title>
        <ProseH3 id="modified">Modified Obverse</ProseH3>
      </template>
      <UButtonGroup class="-ms-2.5">
        <TypeSpecifications title="Jefferson, Modified Specifications" :data="{
          designer: 'Jamie Franki (obv), Felix Schlag (rev)',
          weight: '5 grams',
          composition: 'cupronickel (.750 copper, .250 nickel)',
          diameter: '21.2 mm',
          edge: 'Plain',
        }" />
        <TypeIssues title="Jefferson, Modified Issues" description="Circulation Strikes"
          :issues="jeffersonModifiedIssues" />
        <TypeIssues title="Jefferson, Modified Issues" description="Proof Strikes" type="Proofs"
          :issues="jeffersonModifiedProofs" />
      </UButtonGroup>
    </TypeDetail>
  </article>
</template>

<script setup lang="ts">
const { data: types } = await useFetch('/api/nickels/types')

const { data: shieldIssues } = await useFetch('/api/nickels/shield-issues')
const { data: shieldProofs } = await useFetch('/api/nickels/shield-proofs')

const { data: libertyHeadIssues } = await useFetch('/api/nickels/liberty-head-issues')
const { data: libertyHeadProofs } = await useFetch('/api/nickels/liberty-head-proofs')

const { data: buffaloIssues } = await useFetch('/api/nickels/buffalo-issues')
const { data: buffaloProofs } = await useFetch('/api/nickels/buffalo-proofs')

const { data: jeffersonIssues } = await useFetch('/api/nickels/jefferson-issues')
const { data: jeffersonProofs } = await useFetch('/api/nickels/jefferson-proofs')

const { data: westwardJourneyIssues } = await useFetch('/api/nickels/westward-journey-issues')
const { data: westwardJourneyProofs } = await useFetch('/api/nickels/westward-journey-proofs')

const { data: jeffersonModifiedIssues } = await useFetch('/api/nickels/jefferson-modified-issues')
const { data: jeffersonModifiedProofs } = await useFetch('/api/nickels/jefferson-modified-proofs')
</script>
